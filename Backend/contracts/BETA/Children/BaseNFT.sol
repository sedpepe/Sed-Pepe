// SPDX-License-Identifier: MIT

//Add checks for ID Owner on all necessary functions on Inherited Contracts

pragma solidity ^0.8.17;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Burnable.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "./libraries/PPlib.sol";

contract PepeProfileNFT is ERC721, ERC721Enumerable, ERC721URIStorage, ERC721Burnable, Ownable, ReentrancyGuard {
    using Counters for Counters.Counter;
    using SafeMath for uint256;
    using PPlib for PPlib.UserProfile;
    using PPlib for PPlib.Value;

    Counters.Counter private _tokenIdCounter;

    address private feeToken;
    uint256 private transferFee;

    mapping(address => bool) private isAllowedOperator;
    mapping(address => mapping(uint256 => uint256)) private lockerbalances;
    mapping(uint256 => uint256) private inherentBalances;
    mapping(address => mapping(uint256 => PPlib.Value)) private _value;
    mapping(uint256 => PPlib.UserProfile) private _user;


    constructor(address token , uint256 feeForInherentTransfer) ERC721("Sed-Pepe Profiles", "$PP") {
        feeToken = token;
        allowOperator(msg.sender);
        transferFee = feeForInherentTransfer;
    }

    function baseURI() external pure returns (string memory) {
        return "QmUjdfyZm87CkjfGL95rZdeustBv2hGab5iNTXNgLNU4oL";
    }

    function setFeeForNftTransfer(uint256 fee) public {
        require(isAllowedOperator[msg.sender] == true || msg.sender == owner());
        transferFee = fee;
    }

    function getInherentBal(uint256 id) external view returns(uint256){
        return inherentBalances[id];
    }

    function IVTransfer(uint256 id) internal {
        inherentBalances[id] = inherentBalances[id].add(transferFee);
    }

    function Mint(string memory uri) external {
        require(isAllowedOperator[msg.sender] == true);
        uint256 tokenId = _tokenIdCounter.current();
        _tokenIdCounter.increment();
        _safeMint(msg.sender, tokenId);
        _setTokenURI(tokenId, uri);
        _user[tokenId].Web3Wallet = msg.sender;
    }

    function _addCollateral(uint256 id , uint256 amount ) external nonReentrant {
        require(isAllowedOperator[msg.sender] == true); 
        require(id < _tokenIdCounter.current(),"ID Does Not Exist");
        _value[feeToken][id].availableValue = _value[feeToken][id].availableValue.add(amount);
        _value[feeToken][id].totalDeposited = _value[feeToken][id].totalDeposited.add(amount);
    }
    
    function _withdrawCollateral(uint256 id, uint256 amount) external {
        require(isAllowedOperator[msg.sender] == true);
        require(id < _tokenIdCounter.current(),"ID Does Not Exist");
        uint256 amountCollateral = _value[feeToken][id].availableValue;
        require(amountCollateral >= amount ,"No Collateral to Withdraw");
        _value[feeToken][id].availableValue = _value[feeToken][id].availableValue.sub(amount);
        _value[feeToken][id].totalWithdrawn = _value[feeToken][id].totalWithdrawn.add(amount);
    }
    
    function editFullName(string memory name , uint256 id) external {
        require(isAllowedOperator[msg.sender] == true);
        require(id < _tokenIdCounter.current(),"ID Does Not Exist");
        _user[id].FullName = name;
    }
    
    function getFullName(uint256 id) external view returns(string memory) {
        return _user[id].FullName;
    }
    
    function setProfilePicURI(uint256 id, string memory profilePicURI) external {
        require(_exists(id), "ID Does Not Exist");
        require(isAllowedOperator[msg.sender] == true);
        _user[id].ProfilePicURI = profilePicURI;
    }

    function getProfilePic(uint256 id) external view returns(string memory){
        return _user[id].ProfilePicURI;
    }
    
    function editGender(string memory gender, uint256 id) external {
        require(_exists(id), "ID Does Not Exist");
        require(isAllowedOperator[msg.sender] == true);
        _user[id].gender = gender;
    }
    
    function getGender(uint256 id) external view returns(string memory){
        return _user[id].gender;
    }
    
    function editWeb3Wallet(address web3Wallet, uint256 id) external {
        require(_exists(id), "ID Does Not Exist");
        require(isAllowedOperator[msg.sender] == true);
        _user[id].Web3Wallet = web3Wallet;
    }

    function getWeb3Wallet(uint256 id) external view returns(address){
        return _user[id].Web3Wallet;
    }
    
    function blacklistUser(uint256 id) external {
        require(_exists(id), "ID Does Not Exist");
        require(isAllowedOperator[msg.sender] == true);
        _user[id].isBlacklistedUser = true;
    }
    
    function whitelistUser(uint256 id) external {
        require(_exists(id), "ID Does Not Exist");
        require(isAllowedOperator[msg.sender] == true);
        _user[id].isBlacklistedUser = false;
    }
    
    function isBlacklisted(uint256 id) external view returns (bool) {
        require(_exists(id), "ID Does Not Exist");
        return _user[id].isBlacklistedUser;
    }
    
    function setFeeToken(address tokenAddress) external onlyOwner {
        feeToken = tokenAddress;
    }

    function getFeeToken() external view returns(address){
        return feeToken;
    }
    
    function isAllowedOp(address operator) external view returns (bool) {
        return isAllowedOperator[operator];
    }

    function allowOperator(address add) public {
        require(msg.sender == owner());
        isAllowedOperator[add] = true;
    }
    function disallowOperator(address add) public {
        require(msg.sender == owner());
        isAllowedOperator[add] = false;
    }

    function transferCollateral(uint256 fromId , uint256 toId , uint256 amount) public {
        require(isAllowedOperator[msg.sender] == true);
        require( _value[feeToken][fromId].availableValue >= amount);
        _value[feeToken][fromId].availableValue = _value[feeToken][fromId].availableValue.sub(amount);
        _value[feeToken][fromId].totalWithdrawn = _value[feeToken][fromId].totalWithdrawn.add(amount);
        _value[feeToken][toId].availableValue = _value[feeToken][toId].availableValue.add(amount);
        _value[feeToken][toId].totalDeposited = _value[feeToken][toId].totalDeposited.add(amount);
    }

    function safeTransferFrom(address from, address to, uint256 tokenId, bytes memory _data) public override(ERC721 , IERC721) {
        require(isAllowedOperator[msg.sender] == true);
        require(IERC20(feeToken).balanceOf(from) >= transferFee ,"Fee Token Balance Not Sufficient");
        delete _user[tokenId];
        _user[tokenId].Web3Wallet = to;
        super.safeTransferFrom(from, to, tokenId, _data);
        IVTransfer(tokenId);
    }
    
    function safeTransferFrom(address from, address to, uint256 tokenId) public override(ERC721 , IERC721) {
        require(isAllowedOperator[msg.sender] == true);
        require(IERC20(feeToken).balanceOf(from) >= transferFee ,"Fee Token Balance Not Sufficient");
        delete _user[tokenId];
        _user[tokenId].Web3Wallet = to;
        super.safeTransferFrom(from, to, tokenId);
        IVTransfer(tokenId);
    }

    function transferFrom(address from, address to, uint256 tokenId) public override(ERC721 , IERC721) {
        require(isAllowedOperator[msg.sender] == true);
        require(IERC20(feeToken).balanceOf(from) >= transferFee ,"Fee Token Balance Not Sufficient");
        delete _user[tokenId];
        _user[tokenId].Web3Wallet = to;
        super.transferFrom(from, to, tokenId);
        IVTransfer(tokenId);
    }
    
    function ownerOf(uint256 tokenId) public view override(ERC721 , IERC721) returns (address) {
        return super.ownerOf(tokenId);
    }

    function balanceOf(address owner) public view override(ERC721 , IERC721) returns (uint256) {
        return super.balanceOf(owner);
    }

    function editUniqueTag(string memory tag , uint256 id )external{
        require(isAllowedOperator[msg.sender] == true);
        require(id < _tokenIdCounter.current(),"ID Does Not Exist");
        require(isUniqueTagUnique(tag)== true , "Unique tag already taken");
        _user[id].UniqueTag = tag; 
    }
    
    function getUinqueTag(uint256 id) external view returns(string memory){
        return _user[id].UniqueTag;
    }

    function getAvailableCollateral (uint256 id ) external view returns (uint256){
        return _value[feeToken][id].availableValue;
    }
    
    function getNftTotalDeposits (uint256 id ) external view returns (uint256){
        return _value[feeToken][id].totalDeposited;
    }
    
    function getNftTotalWithdrawals (uint256 id) external view returns (uint256){
        return _value[feeToken][id].totalWithdrawn;
    }
    
    function isAllowedAddress(address add) external view returns(bool){
        return isAllowedOperator[add];
    }

    function isApprovedForAll(address owner, address operator) public view override(ERC721 , IERC721) returns (bool) {
        return super.isApprovedForAll(owner, operator);
    }

    function setApprovalForAll(address operator, bool approved) public override(ERC721 , IERC721) {
        super.setApprovalForAll(operator, approved);
    }

    function getApproved(uint256 tokenId) public view override(ERC721 , IERC721) returns (address) {
        return super.getApproved(tokenId);
    }

    function approve(address to, uint256 tokenId) public override(ERC721 , IERC721) {
        super.approve(to, tokenId);
    }
    
    function _beforeTokenTransfer(address from, address to, uint256 tokenId, uint256 batchSize)
        internal
        override(ERC721, ERC721Enumerable)
    {
        super._beforeTokenTransfer(from, to, tokenId, batchSize);
    }

    function isUniqueTagUnique(string memory tag) public view returns (bool) {
    for (uint256 i = 0; i < _tokenIdCounter.current(); i++) {
        if (keccak256(bytes(_user[i].UniqueTag)) == keccak256(bytes(tag))) {
            return false;
        }
    }
    return true;
    }

    function burn(uint256 TokenId) public override(ERC721Burnable) {
        require(isAllowedOperator[msg.sender] == true);
        delete _user[TokenId];
        _burn(TokenId);
        super.burn(TokenId);
    }

    function _burn(uint256 tokenId) internal override(ERC721, ERC721URIStorage) {
        super._burn(tokenId);
    }

    function tokenURI(uint256 tokenId)
        public
        view
        override(ERC721, ERC721URIStorage)
        returns (string memory)
    {
        return super.tokenURI(tokenId);
    }

    function supportsInterface(bytes4 interfaceId)
        public
        view
        override(ERC721, ERC721Enumerable)
        returns (bool)
    {
        return super.supportsInterface(interfaceId);
    }
}