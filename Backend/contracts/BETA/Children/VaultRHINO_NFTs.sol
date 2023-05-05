// SPDX-License-Identifier: MIT

//NFT BASED BANKS
//NFT ACT AS KEY TO VAULT THAT LOCKS THE ERC-20 collateral
//ALPHA VERSION 

//@author: BOBSEAL

pragma solidity ^0.8.17;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Burnable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";

contract VaultNFT is ERC721, ERC721Enumerable, ERC721URIStorage, ERC721Burnable, Ownable {
    using Counters for Counters.Counter;
    using SafeMath for uint256;

    Counters.Counter private _tokenIdCounter;

    struct Value{
        uint256 availableValue;
        uint256 totalDeposited;
        uint256 totalWithdrawn;
    }

    mapping(address => mapping(uint256 => Value)) private _value;
    mapping(address => bool) private isAllowed;

    constructor() ERC721("Vault Rhino", "VR") {}

    function _baseURI() internal pure override returns (string memory) {
        return "ipfs://QmRiWBxK8fERGLXmznsEJR68DhbpLhHcDmeUhgptsWTv1Z";
    }

    function safeMint(address to ,string memory uri,address token, uint256 value) public {
        require(isAllowed[msg.sender] == true || msg.sender == owner());
        uint256 tokenId = _tokenIdCounter.current();
        _tokenIdCounter.increment();
        _safeMint(to, tokenId);
        _setTokenURI(tokenId, uri);
        _value[token][tokenId].availableValue = _value[token][tokenId].availableValue.add(value);
        _value[token][tokenId].totalDeposited = _value[token][tokenId].totalDeposited.add(value);
    }

    function addValue(address caller ,uint256 id , address token , uint256 amount) external {
        require(isAllowed[msg.sender] == true || msg.sender == owner()); 
        require(caller == ownerOf(id), "to add value caller needs to Own the NFT"); //caller is the function caller for the parent contract
        require(id < _tokenIdCounter.current(),"ID Does Not Exist");
        _value[token][id].availableValue = _value[token][id].availableValue.add(amount);
        _value[token][id].totalDeposited = _value[token][id].totalDeposited.add(amount);
    }
    
    function removeValue(address caller ,uint256 id , address token,uint256 amount) external {
        require(isAllowed[msg.sender] == true || msg.sender == owner());
        require(caller == ownerOf(id), "to remove value caller needs to Own the NFT");
        require(id < _tokenIdCounter.current(),"ID Does Not Exist");
        _value[token][id].availableValue = _value[token][id].availableValue.sub(amount);
        _value[token][id].totalWithdrawn = _value[token][id].totalWithdrawn.add(amount);
    }

    function allowThisAddress(address add) external {
        require(msg.sender == owner() || isAllowed[msg.sender] == true);
        require(isAllowed[add] == false);
        isAllowed[msg.sender] = true;
    }
    
    function disallowThisAddress(address add) external {
        require(msg.sender == owner() || isAllowed[msg.sender] == true);
        require(isAllowed[add] == true);
        isAllowed[msg.sender] = false;
    }

    function getNftValue (uint256 id , address token) external view returns (uint256){
        return _value[token][id].availableValue;
    }

    function getNftTotalDeposits (uint256 id , address token) external view returns (uint256){
        return _value[token][id].totalDeposited;
    }
    
    function getNftTotalWithdrawals (uint256 id, address token) external view returns (uint256){
        return _value[token][id].totalWithdrawn;
    }

    function isAllowedAddress(address add) external view returns(bool){
        return isAllowed[add];
    }

    // The following functions are overrides required by Solidity.

    function _beforeTokenTransfer(address from, address to, uint256 tokenId, uint256 batchSize)
        internal
        override(ERC721, ERC721Enumerable)
    {
        super._beforeTokenTransfer(from, to, tokenId, batchSize);
    }

    function _burn(uint256 tokenId) internal override(ERC721, ERC721URIStorage) {
        super._burn(tokenId);
    }
    function NFTbalanceOf(address owner) external view returns(uint256){
        return super.balanceOf(owner);
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