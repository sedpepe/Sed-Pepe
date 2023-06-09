// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

interface IPepeProfileNFT {
    function baseURI() external pure returns (string memory);
    function setFeeForNftTransfer(uint256 fee) external;
    function getInherentBal(uint256 id) external view returns (uint256);
    function Mint(string memory uri) external;
    function _addCollateral(uint256 id, uint256 amount) external;
    function _withdrawCollateral(uint256 id, uint256 amt) external;
    function editFullName(string memory name, uint256 id) external;
    function getFullName(uint256 id) external view returns (string memory);
    function setProfilePicURI(uint256 id, string memory profilePicURI) external;
    function distributeAutoStake(uint256 amount) external;
    function getProfilePic(uint256 id) external view returns (string memory);
    function editGender(string memory gender, uint256 id) external;
    function getGender(uint256 id) external view returns (string memory);
    function editWeb3Wallet(address web3Wallet, uint256 id) external;
    function getWeb3Wallet(uint256 id) external view returns (address);
    function blacklistUser(uint256 id) external;
    function whitelistUser(uint256 id) external;
    function isBlacklisted(uint256 id) external view returns (bool);
    function setFeeToken(address tokenAddress) external;
    function getFeeToken() external view returns (address);
    function isAllowedOp(address operator) external view returns (bool);
    function allowOperator(address add) external;
    function disallowOperator(address add) external;
    function transferCollateral(uint256 fromId, uint256 toId, uint256 amt) external;
    function safeTransferFrom(address from, address to, uint256 tokenId, bytes memory data) external;
    function safeTransferFrom(address from, address to, uint256 tokenId) external;
    function transferFrom(address from, address to, uint256 tokenId) external;
    function ownerOf(uint256 tokenId) external view returns (address);
    function balanceOf(address owner) external view returns (uint256);
    function editUniqueTag(string memory tag, uint256 id) external;
    function getUinqueTag(uint256 id) external view returns (string memory);
    function getAvailableCollateral(uint256 id) external view returns (uint256);
    function getNftTotalDeposits(uint256 id) external view returns (uint256);
    function getNftTotalWithdrawals(uint256 id) external view returns (uint256);
    function isAllowedAddress(address add) external view returns (bool);
    function isApprovedForAll(address owner, address operator) external view returns (bool);
    function setApprovalForAll(address operator, bool approved) external;
    function getApproved(uint256 tokenId) external view returns (address);
    function approve(address to, uint256 tokenId) external;
    function isUniqueTagUnique(string memory tag) external view returns (bool);
    function burn(uint256 tokenId) external;
    function tokenURI(uint256 tokenId) external view returns (string memory);
    function supportsInterface(bytes4 interfaceId) external view returns (bool);
}
