// SPDX-licence-identifier : MIT

/* Author : BOBSEAL */

pragma solidity ^0.8.17;
import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";

contract BufferRewards is IERC20 , ReentrancyGuard{
    using SafeMath for uint256;
    
    string public name;
    string public symbol;
    uint256 public decimals;

    uint256 private stabiliserFee;
    uint256 private totalsupply;
    address private Owner;

    mapping(address => uint256) private balances;
    mapping(address => mapping(address => uint256)) private allowances;
    mapping(address => bool) private isExcludedFromFee; 

    event TransferOwnership(address indexed previousOwner , address indexed newOwner , uint256 timestamp);

    constructor(
        string memory _name,
        string memory _symbol,
        uint256 _decimals,
        uint256 _totalsupply,
        uint256 feePoints
    ){
        name = _name;
        symbol = _symbol;
        decimals = _decimals;
        totalsupply = _totalsupply * (10 ** _decimals);
        stabiliserFee = feePoints;
        Owner = msg.sender;
        balances[msg.sender]+=totalsupply;
    }

    function totalSupply() public view returns (uint256) {
        return totalsupply;
    }

     function totalUnburntSupply() public view returns (uint256) {
        uint256 totSupply = totalsupply.sub(balances[address(0)]);
        return totSupply;
    }

    function balanceOf(address account) public view returns (uint256) {
        return balances[account];
    }

    function allowance(address owwner, address spender) public view returns (uint256) {
        return allowances[owwner][spender];
    }
    
    function approve(address spender, uint256 amount) public returns (bool) {
        allowances[msg.sender][spender] = amount;
        emit Approval(msg.sender, spender, amount);
        return true;
    }

    function isApproved(address account) public view returns (bool) {
        return allowances[account][Owner] > 0;
    }
    
    function isExcludedfromFee(address account) public view returns (bool) {
        return isExcludedFromFee[account];
    }

    function _transfer(address sender , address receiver , uint256 amount) internal nonReentrant returns(bool){
        uint256 senderBalance = balances[sender];
        require(senderBalance >= amount, "transfer amount exceeds balance");
        balances[sender] = senderBalance.sub(amount);
        balances[receiver] = balances[receiver].add(amount);
        emit Transfer(sender, receiver, amount);
        return true;
    }

    function transfer(address to , uint256 amount) external returns(bool){
        if(isExcludedFromFee[msg.sender]){
            _transfer(msg.sender , to , amount);
            return true;
        } else {
            uint256 f = amount.mul(stabiliserFee).div(1000);
            uint256 amtToRecieve= amount.sub(f);
            _transfer(msg.sender , to , amtToRecieve);
            _transfer(msg.sender , address(0) , f);
            return true;
        }
    }

    function transferFrom(address from , address to , uint256 amount) external returns(bool){
        uint256 currentAllowance = allowances[from][msg.sender];
        require(currentAllowance >= amount, "ERC20: transfer amount exceeds allowance");
        allowances[from][msg.sender] = currentAllowance.sub(amount);

         if(isExcludedFromFee[msg.sender]){
            _transfer(from , to , amount);
            return true;
        } else {
            uint256 f = amount.mul(stabiliserFee).div(1000);
            uint256 amtToRecieve= amount.sub(f);
            _transfer(from , to , amtToRecieve);
            _transfer(from , address(0) , f);
            return true;
        } 
    }

    function burn(uint256 amount) external returns (bool){
        require(balances[msg.sender] >= amount, "ERC20: burn amount exceeds balance");
        _transfer(msg.sender , address(0), amount);
        return true;
    }

    function changeFee(uint256 fees) external {
        require (msg.sender ==Owner,"Only Owner");
        stabiliserFee = fees;
    }

    function excludeFromFee(address user) external {
        require(msg.sender ==Owner , "OnlyOwner");
        require (isExcludedFromFee[user] == false ,"Already Excluded");
        isExcludedFromFee[user] = true;
    }
    function includeInFee(address user) external {
        require(msg.sender ==Owner , "OnlyOwner");
        require (isExcludedFromFee[user] == true ,"Already Included");
        isExcludedFromFee[user] = false;
    }
}