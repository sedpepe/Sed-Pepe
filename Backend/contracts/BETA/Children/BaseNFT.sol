// SPDX-License-Identifier: MIT

pragma solidity ^0.8.17;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Burnable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";

contract SedPepeProfileNFT is ERC721, ERC721Enumerable, ERC721URIStorage, ERC721Burnable, Ownable, ReentrancyGuard {
    using Counters for Counters.Counter;
    using SafeMath for uint256;

    Counters.Counter private _tokenIdCounter;

    struct Value{
        uint256 availableValue;
        uint256 totalDeposited;
        uint256 totalWithdrawn;
    }

    struct UserProfile {
        string FullName;
        string UniqueTag;
        string ProfilePicURI;
        string gender;
        address Web3Wallet;
        bool isBlacklistedUser;
    }
    address private feeToken;

    mapping(address => bool) private isAllowedOperator;
    mapping(address => mapping(uint256 => uint256)) private lockerbalances;
    mapping(address => mapping(uint256 => Value)) private _value;
    mapping(uint256 => UserProfile) private _user;


    constructor(address token) ERC721("Sed-Pepe Profiles", "$PP") {
        feeToken = token;
        allowOperator(msg.sender);
    }

    function baseURI() external pure returns (string memory) {
        return "ipfs://QmUjdfyZm87CkjfGL95rZdeustBv2hGab5iNTXNgLNU4oL";
    }

    function Mint(string memory uri) external {
        require(isAllowedOperator[msg.sender] == true);
        uint256 tokenId = _tokenIdCounter.current();
        _tokenIdCounter.increment();
        _safeMint(msg.sender, tokenId);
        _setTokenURI(tokenId, uri);
        _user[tokenId].Web3Wallet = msg.sender;
    }

    function addCollateral(uint256 id , uint256 amount ) external nonReentrant {
        require(isAllowedOperator[msg.sender] == true); 
        require(id < _tokenIdCounter.current(),"ID Does Not Exist");
        require(amount > 0 ,"Amount Cannot be 0");
        _value[feeToken][id].availableValue = _value[feeToken][id].availableValue.add(amount);
        _value[feeToken][id].totalDeposited = _value[feeToken][id].totalDeposited.add(amount);
    }
    
    function withdrawCollateral(uint256 id, uint256 amount) external {
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
        require(isAllowedOperator[msg.sender] == true || msg.sender == owner());
        isAllowedOperator[add] = true;
    }
    function disallowOperator(address add) public {
        require(isAllowedOperator[msg.sender] == true || msg.sender == owner());
        isAllowedOperator[add] = false;
    }

    function safeTransferFrom(address from, address to, uint256 tokenId, bytes memory _data) public override(ERC721 , IERC721) {
        require(isAllowedOperator[msg.sender] == true);
        delete _user[tokenId];
        _user[tokenId].Web3Wallet = to;
        super.safeTransferFrom(from, to, tokenId, _data);
    }
    
    function safeTransferFrom(address from, address to, uint256 tokenId) public override(ERC721 , IERC721) {
        require(isAllowedOperator[msg.sender] == true);
        delete _user[tokenId];
        _user[tokenId].Web3Wallet = to;
        super.safeTransferFrom(from, to, tokenId);
    }

    function transferFrom(address from, address to, uint256 tokenId) public override(ERC721 , IERC721) {
        require(isAllowedOperator[msg.sender] == true);
        delete _user[tokenId];
        _user[tokenId].Web3Wallet = to;
        super.transferFrom(from, to, tokenId);
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
        require(isUnique(tag), "Unique ID already used");
        _user[id].UniqueTag = tag; 
    }
    
    function getUinqueTag(uint256 id) external view returns(string memory){
        return _user[id].UniqueTag;
    }

    function isUnique(string memory _uniquetag) public view returns (bool) {
    for (uint i = 0; i < _tokenIdCounter.current(); i++) {
        if (keccak256(bytes(_user[i].UniqueTag)) == keccak256(bytes(_uniquetag))) {
            return false;
        }
    }
    return true;
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

    function isOwnerOfNft (address user , uint256 id) external view returns(bool) {
        if (ownerOf(id) == user) {
            return true;
        } else return false;
    }
    
    function _beforeTokenTransfer(address from, address to, uint256 tokenId, uint256 batchSize)
        internal
        override(ERC721, ERC721Enumerable)
    {
        super._beforeTokenTransfer(from, to, tokenId, batchSize);
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