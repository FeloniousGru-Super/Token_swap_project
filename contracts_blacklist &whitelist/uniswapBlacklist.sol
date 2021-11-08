pragma solidity ^0.8.0;
pragma abicoder v2;

import "https://github.com/Uniswap/uniswap-v3-periphery/blob/main/contracts/interfaces/ISwapRouter.sol";
import '@openzeppelin/contracts/access/Ownable.sol';

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
  IQuoter public constant quoter = IQuoter(0xb27308f9F90D607463bb33eA1BeBb41C27CE5AB6);
//   address private constant multiDaiKovan = 0x4F96Fe3b7A6Cf9725f59d353F723c1bDb64CA6Aa;
//   address private constant WETH9 = 0xd0A1E359811322d97991E03f863a0C30C2cF029C;
  address private constant multiDaiKovan = 0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984;
  address private constant WETH9 = 0xc778417E063141139Fce010982780140Aa0cD5Ab;
    SwapController public controllerTokenAddress;

    constructor(
      address _controllerTokenAddress
    )
    {
      require(_controllerTokenAddress != address(0));

      controllerTokenAddress = SwapController(_controllerTokenAddress);
    }

  function convertExactEthToDai() external payable {
    require(msg.value > 0, "Must pass non 0 ETH amount");
    require(controllerTokenAddress.canSwap(msg.sender), "User blacklisted");

    uint256 deadline = block.timestamp + 15; // using 'now' for convenience, for mainnet pass deadline from frontend!
    address tokenIn = WETH9;
    address tokenOut = multiDaiKovan;
    uint24 fee = 3000;
    address recipient = msg.sender;
    uint256 amountIn = msg.value;
    uint256 amountOutMinimum = 1;
    uint160 sqrtPriceLimitX96 = 0;

    ISwapRouter.ExactInputSingleParams memory params = ISwapRouter.ExactInputSingleParams(
        tokenIn,
        tokenOut,
        fee,
        recipient,
        deadline,
        amountIn,
        amountOutMinimum,
        sqrtPriceLimitX96
    );

    uniswapRouter.exactInputSingle{ value: msg.value }(params);
    uniswapRouter.refundETH();

    // refund leftover ETH to user
    (bool success,) = msg.sender.call{ value: address(this).balance }("");
    require(success, "refund failed");
  }

  function convertEthToExactDai(uint256 daiAmount) external payable {
    require(daiAmount > 0, "Must pass non 0 DAI amount");
    require(msg.value > 0, "Must pass non 0 ETH amount");
    require(controllerTokenAddress.canSwap(msg.sender), "User blacklisted");


    uint256 deadline = block.timestamp + 15; // using 'now' for convenience, for mainnet pass deadline from frontend!
    address tokenIn = WETH9;
    address tokenOut = multiDaiKovan;
    uint24 fee = 3000;
    address recipient = msg.sender;
    uint256 amountOut = daiAmount;
    uint256 amountInMaximum = msg.value;
    uint160 sqrtPriceLimitX96 = 0;

    ISwapRouter.ExactOutputSingleParams memory params = ISwapRouter.ExactOutputSingleParams(
        tokenIn,
        tokenOut,
        fee,
        recipient,
        deadline,
        amountOut,
        amountInMaximum,
        sqrtPriceLimitX96
    );

    uniswapRouter.exactOutputSingle{ value: msg.value }(params);
    uniswapRouter.refundETH();

    // refund leftover ETH to user
    (bool success,) = msg.sender.call{ value: address(this).balance }("");
    require(success, "refund failed");
  }

  // important to receive ETH
  receive() payable external {}
}
