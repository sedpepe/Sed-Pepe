// SPDX-License-Identifier: MIT

//@author: BOBSEAL

pragma solidity ^0.8.17;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

interface IBuffLockerBase {
function lockFor(address token , address ofAddress , uint256 amount) external;
function withdrawFor(address token , address toAddress , uint256 amount) external;
function allow(address user) external;
function disallow(address user) external;
function contractHoldingsForToken(address token) external view returns(uint256);
}

interface IVaultNFT {
    function safeMint(address to, string calldata uri, address token, uint256 value) external;
    function NFTbalanceOf(address owner) external view returns(uint256);
    function addValue(address caller, uint256 id, address token, uint256 amount) external;
    function removeValue(address caller, uint256 id, address token, uint256 amount) external;
    function allowThisAddress(address add) external;
    function disallowThisAddress(address add) external;
    function getNftValue(uint256 id, address token) external view returns (uint256);
    function getNftTotalDeposits(uint256 id, address token) external view returns (uint256);
    function getNftTotalWithdrawals(uint256 id, address token) external view returns (uint256);
    function isAllowedAddress(address add) external view returns (bool);
}

contract BUFFRHINO is Ownable , ReentrancyGuard {
    using SafeMath for uint256;
    IBuffLockerBase private buffLocker;
    IVaultNFT private vault;

    constructor(address vaultAddress , address buffLockerAddress) {
        vault = IVaultNFT(vaultAddress);
        buffLocker = IBuffLockerBase(buffLockerAddress);
    }

    function lockFunds(address token, address user, uint256 amount) internal {
    buffLocker.lockFor(token, user, amount);
    }

    function withdrawFunds(address token, address user, uint256 amount) internal {
        buffLocker.withdrawFor(token, user, amount);
    }

    function allowUser(address user) external {
        buffLocker.allow(user);
    }

    function disallowUser(address user) external {
        buffLocker.disallow(user);
    }

    function getContractHoldingsForToken(address token) public view returns(uint256) {
        return buffLocker.contractHoldingsForToken(token);
    }


    function mintNFT(address to, string memory uri, address token, uint256 value) internal {
        vault.safeMint(to, uri, token, value);
    }

    function addValueToNFT(address caller, uint256 id, address token, uint256 amount) internal {
        vault.addValue(caller, id, token, amount);
    }

    function removeValueFromNFT(address caller, uint256 id, address token, uint256 amount) internal {
        vault.removeValue(caller, id, token, amount);
    }

    function allowAddress(address add) external {
        vault.allowThisAddress(add);
    }

    function disallowAddress(address add) external {
        vault.disallowThisAddress(add);
    }

    function getNftValue(uint256 id, address token) external view returns (uint256) {
        return vault.getNftValue(id, token);
    }

    function getNftTotalDeposits(uint256 id, address token) external view returns (uint256) {
        return vault.getNftTotalDeposits(id, token);
    }

    function getNftTotalWithdrawals(uint256 id, address token) external view returns (uint256) {
        return vault.getNftTotalWithdrawals(id, token);
    }

    function isAllowedAddress(address add) external view returns (bool) {
        return vault.isAllowedAddress(add);
    }
    function getNftbalanceOfUser(address user) external view returns(uint256){
        return vault.NFTbalanceOf(user);
    }
}