// SPDX-License-Identifier: MIT

//NFT BASED BANKS
//NFT ACT AS KEY TO VAULT THAT LOCKS THE ERC-20 collateral
//ALPHA VERSION 

//@author: BOBSEAL

pragma solidity ^0.8.17;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol"; 

contract BuffLockerBase is Ownable , ReentrancyGuard{
    using SafeMath for uint256;

    mapping(address => bool) private isAllowed;
    mapping(address => mapping(address => uint256)) private balances;

    constructor(){
        _transferOwnership(msg.sender);
    }

    function contractHoldingsForToken(address token) external view returns(uint256){
        return balances[token][address(this)];
    }
    function lockFor(address token , address ofAddress , uint256 amount) external nonReentrant {
        require (isAllowed[msg.sender] == true || msg.sender == owner());
        IERC20(token).transferFrom(ofAddress , address(this) , amount);
        balances[token][address(this)] = balances[token][address(this)].add(amount);
    }
    function withdrawFor(address token , address toAddress , uint256 amount) external nonReentrant{
        require (isAllowed[msg.sender] == true || msg.sender == owner());
        IERC20(token).transferFrom(address(this) ,toAddress , amount);
        balances[token][address(this)] = balances[token][address(this)].sub(amount);
    }
    function allow(address user) external onlyOwner{
        require(isAllowed[user] == true);
        isAllowed[user] = true;
    }
    function disallow(address user) external onlyOwner{
        require(isAllowed[user] == true);
        isAllowed[user] = false;
    }
}