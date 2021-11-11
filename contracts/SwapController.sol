pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";

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
