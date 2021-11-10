pragma solidity ^0.8.0;
pragma abicoder v2;

import "https://github.com/Uniswap/uniswap-v3-periphery/blob/main/contracts/interfaces/ISwapRouter.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import '@uniswap/v3-periphery/contracts/libraries/TransferHelper.sol';

contract Pausable is Ownable {
  event Pause();
  event Unpause();

  bool public paused = false;


  /**
   * @dev Modifier to make a function callable only when the contract is not paused.
   */
  modifier whenNotPaused() {
    require(!paused);
    _;
  }

  /**
   * @dev Modifier to make a function callable only when the contract is paused.
   */
  modifier whenPaused() {
    require(paused);
    _;
  }

  /**
   * @dev called by the owner to pause, triggers stopped state
   */
  function pause() onlyOwner whenNotPaused public {
    paused = true;
    emit Pause();
  }

  /**
   * @dev called by the owner to unpause, returns to normal state
   */
  function unpause() onlyOwner whenPaused public {
    paused = false;
    emit Unpause();
  }
}

contract BlackListed is Ownable {
    mapping(address=>bool) isBlacklisted;

    function blackList(address _user) public onlyOwner {
        require(!isBlacklisted[_user], "user already blacklisted");
        isBlacklisted[_user] = true;
        // emit events as well
    }
    
    function removeFromBlacklist(address _user) public onlyOwner {
        require(isBlacklisted[_user], "user already whitelisted");
        isBlacklisted[_user] = false;
        // emit events as well
    }
    
    function canSwap(address _to) public view returns (bool) {
        return !isBlacklisted[_to];
    }
}

contract SwapController is Ownable, Pausable {
    BlackListed private blacklist = new BlackListed();

    event SwapEnabled();
    event SwapDisabled();

    event AddedToBlacklist(address indexed _addr);
    event RemovedFromBlacklist(address indexed _addr);

    function swapEnabled() public view returns (bool) {
        return !paused;
    }

    function enableSwap() public onlyOwner {
        unpause();
        emit SwapEnabled();
    }

    function disableSwap() public onlyOwner {
        pause();
        emit SwapDisabled();
    }

    function canSwap(address addr) public view returns (bool) {
        return swapEnabled() && !isBlacklisted(addr);
    }

    function addToBlacklist(address addr) public onlyOwner returns (bool) {
        blacklist.blackList(addr);
        emit AddedToBlacklist(addr);
        return true;
    }

    function removeFromBlacklist(address addr) public onlyOwner returns (bool) {
        blacklist.removeFromBlacklist(addr);
        emit RemovedFromBlacklist(addr);
        return true;
    }

    function isBlacklisted(address addr) public view returns (bool) {
        return !blacklist.canSwap(addr);
    }
}

interface IUniswapRouter is ISwapRouter {
    function refundETH() external payable;
}

contract Uniswap3 {
  IUniswapRouter public constant uniswapRouter = IUniswapRouter(0xE592427A0AEce92De3Edee1F18E0157C05861564);
  address private constant multiDaiKovan = 0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984;
  address private constant WETH9 = 0xc778417E063141139Fce010982780140Aa0cD5Ab;
    SwapController public controllerTokenAddress;
    
    uint24 public constant poolFee = 3000;

    constructor(
      address _controllerTokenAddress
    )
    {
      require(_controllerTokenAddress != address(0));

      controllerTokenAddress = SwapController(_controllerTokenAddress);
    }

  function convertEthToExactLunaChow(uint256 daiAmount, uint256 _deadline) external payable returns (uint256 amountIn) {
    require(daiAmount > 0, "Must pass non 0 DAI amount");
    require(controllerTokenAddress.canSwap(msg.sender), "User blacklisted");

    ISwapRouter.ExactOutputSingleParams memory params =
    	ISwapRouter.ExactOutputSingleParams({
    		tokenIn: WETH9,
    		tokenOut: multiDaiKovan,
    		fee: poolFee,
    		recipient: msg.sender,
    		deadline: block.timestamp + _deadline, // using 'now' for convenience, for mainnet pass deadline from frontend!
    		amountOut: daiAmount,
    		amountInMaximum: msg.value,
    		sqrtPriceLimitX96: 0
	});

    amountIn = uniswapRouter.exactOutputSingle{ value: msg.value }(params);
    uniswapRouter.refundETH();

    // refund leftover ETH to user
    (bool success,) = msg.sender.call{ value: address(this).balance }("");
    require(success, "refund failed");
  }

  function convertLunaChowToExactEth(address _tokenIn, address _tokenOut, uint256 _amountIn, uint256 _amountOut, uint256 _deadline) external returns (uint256 amountIn) {
    require(_amountIn > 0, "Must pass non 0 DAI amount");
    require(_amountOut > 0, "Must pass non 0 ETH amount");
    require(controllerTokenAddress.canSwap(msg.sender), "User blacklisted");
    
    // Transfer the specified amount of DAI to this contract.
    TransferHelper.safeTransferFrom(_tokenIn, msg.sender, address(this), _amountIn);

    // Approve the router to spend the specifed `amountInMaximum` of DAI.
    // In production, you should choose the maximum amount to spend based on oracles or other data sources to acheive a better swap.
    TransferHelper.safeApprove(_tokenIn, address(uniswapRouter), _amountIn);
    
    ISwapRouter.ExactOutputSingleParams memory params =
    	ISwapRouter.ExactOutputSingleParams({
    		tokenIn: _tokenIn,
    		tokenOut: _tokenOut,
    		fee: poolFee,
    		recipient: msg.sender,
    		deadline: block.timestamp + _deadline, // using 'now' for convenience, for mainnet pass deadline from frontend!
    		amountOut: _amountOut,
    		amountInMaximum: _amountIn,
    		sqrtPriceLimitX96: 0
	});

    amountIn = uniswapRouter.exactOutputSingle(params);

    // For exact output swaps, the amountInMaximum may not have all been spent.
    // If the actual amount spent (amountIn) is less than the specified maximum amount, we must refund the msg.sender and approve the swapRouter to spend 0.
    if (amountIn < _amountIn) {
        TransferHelper.safeApprove(_tokenIn, address(uniswapRouter), 0);
        TransferHelper.safeTransfer(_tokenIn, msg.sender, _amountIn - amountIn);
    } 
  }
  
  // important to receive ETH
  receive() payable external {}
}
