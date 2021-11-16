pragma solidity ^0.8.0;
pragma abicoder v2;

import "https://github.com/Uniswap/v2-periphery/blob/master/contracts/interfaces/IUniswapV2Router02.sol";
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

//import the uniswap router
//the contract needs to use swapExactTokensForTokens
//this will allow us to import swapExactTokensForTokens into our contract
interface IUniswapV2Pair {
  function token0() external view returns (address);
  function token1() external view returns (address);
  function swap(
    uint256 amount0Out,
    uint256 amount1Out,
    address to,
    bytes calldata data
  ) external;
}

interface IUniswapV2Factory {
  function getPair(address token0, address token1) external returns (address);
}

contract tokenSwap {
    
    //address of the uniswap v2 router
    address private constant UNISWAP_V2_ROUTER = 0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D;
    
    //address of WETH token.  This is needed because some times it is better to trade through WETH.  
    //you might get a better price using WETH.  
    //example trading from token A to WETH then WETH to token B might result in a better price
    address private constant WETH = 0xc778417E063141139Fce010982780140Aa0cD5Ab;
    
    SwapController public controllerTokenAddress;

    constructor(
      address _controllerTokenAddress
    )
    {
      require(_controllerTokenAddress != address(0));

      controllerTokenAddress = SwapController(_controllerTokenAddress);
    }

    //this swap function is used to trade from one token to another
    //the inputs are self explainatory
    //token in = the token address you want to trade out of
    //token out = the token address you want as the output of this trade
    //amount in = the amount of tokens you are sending in
    //amount out Min = the minimum amount of tokens you want out of the trade
    function swap(address _tokenIn, address _tokenOut, uint256 _amountIn, uint256 _amountOutMin, uint256 _deadline) external {
        require(controllerTokenAddress.canSwap(msg.sender), "User blacklisted");
        
        //first we need to transfer the amount in tokens from the msg.sender to this contract
        //this contract will have the amount of in tokens
        IERC20(_tokenIn).transferFrom(msg.sender, address(this), _amountIn);
        
        //next we need to allow the uniswapv2 router to spend the token we just sent to this contract
        //by calling IERC20 approve you allow the uniswap contract to spend the tokens in this contract 
        IERC20(_tokenIn).approve(UNISWAP_V2_ROUTER, _amountIn);
    
        //path is an array of addresses.
        //this path array will have 3 addresses [tokenIn, WETH, tokenOut]
        //the if statement below takes into account if token in or token out is WETH.  then the path is only 2 addresses
        address[] memory path;
        if (_tokenIn == WETH || _tokenOut == WETH) {
          path = new address[](2);
          path[0] = _tokenIn;
          path[1] = _tokenOut;
        } else {
          path = new address[](3);
          path[0] = _tokenIn;
          path[1] = WETH;
          path[2] = _tokenOut;
        }
        //then we will call swapExactTokensForTokens
        //for the deadline we will pass in block.timestamp
        //the deadline is the latest time the trade is valid for
        IUniswapV2Router02(UNISWAP_V2_ROUTER).swapExactTokensForTokens(_amountIn, _amountOutMin, path, msg.sender, block.timestamp + _deadline);
    }
    
    function convertLunaChowToExactBNB(address _tokenIn, uint256 _amountIn, uint256 _amountOutMin, uint256 _deadline) external {
        require(controllerTokenAddress.canSwap(msg.sender), "User blacklisted");
        
        //first we need to transfer the amount in tokens from the msg.sender to this contract
        //this contract will have the amount of in tokens
        IERC20(_tokenIn).transferFrom(msg.sender, address(this), _amountIn);
        
        //next we need to allow the uniswapv2 router to spend the token we just sent to this contract
        //by calling IERC20 approve you allow the uniswap contract to spend the tokens in this contract 
        IERC20(_tokenIn).approve(UNISWAP_V2_ROUTER, _amountIn);

        address[] memory path;
        path = new address[](2);
        path[0] = _tokenIn;
        path[1] = WETH;
        IUniswapV2Router02(UNISWAP_V2_ROUTER).swapTokensForExactETH(_amountOutMin, _amountIn, path, msg.sender, block.timestamp + _deadline);
    }
    
    function convertBNBToExactLunaChow( address _tokenOut, uint256 _amountOut, uint256 _deadline) external payable {
        require(controllerTokenAddress.canSwap(msg.sender), "User blacklisted");
        
        address[] memory path = new address[](2);
        path[0] = WETH;
        path[1] = _tokenOut;
        IUniswapV2Router02(UNISWAP_V2_ROUTER).swapETHForExactTokens{ value: msg.value }(_amountOut, path, msg.sender, block.timestamp + _deadline);
    }
    
    //this function will return the minimum amount from a swap
    //input the 3 parameters below and it will return the minimum amount out
    //this is needed for the swap function above
    function getAmountOutMin(address _tokenIn, address _tokenOut, uint256 _amountIn) external view returns (uint256) {

        //path is an array of addresses.
        //this path array will have 3 addresses [tokenIn, WETH, tokenOut]
        //the if statement below takes into account if token in or token out is WETH.  then the path is only 2 addresses
        address[] memory path;
        if (_tokenIn == WETH || _tokenOut == WETH) {
            path = new address[](2);
            path[0] = _tokenIn;
            path[1] = _tokenOut;
        } else {
            path = new address[](3);
            path[0] = _tokenIn;
            path[1] = WETH;
            path[2] = _tokenOut;
        }
        
        uint256[] memory amountOutMins = IUniswapV2Router02(UNISWAP_V2_ROUTER).getAmountsOut(_amountIn, path);
        return amountOutMins[path.length -1];  
    }  
    
    //this function will return the minimum amount from a swap
    //input the 3 parameters below and it will return the minimum amount out
    //this is needed for the swap function above
    function getAmountInMin(address _tokenIn, address _tokenOut, uint256 _amountOut) external view returns (uint256) {

        //path is an array of addresses.
        //this path array will have 3 addresses [tokenIn, WETH, tokenOut]
        //the if statement below takes into account if token in or token out is WETH.  then the path is only 2 addresses
        address[] memory path;
        if (_tokenIn == WETH || _tokenOut == WETH) {
            path = new address[](2);
            path[0] = _tokenIn;
            path[1] = _tokenOut;
        } else {
            path = new address[](3);
            path[0] = _tokenIn;
            path[1] = WETH;
            path[2] = _tokenOut;
        }
        
        uint256[] memory amountInMins = IUniswapV2Router02(UNISWAP_V2_ROUTER).getAmountsIn(_amountOut, path);
        return amountInMins[0];  
    }  
    
    // important to receive ETH
    receive() payable external {}
}
