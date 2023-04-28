// SPDX-licence-identifier : MIT

/* Author : BOBSEAL */

pragma solidity ^0.8.17;
import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract BUFFLocker {
    using SafeMath for uint256;

    address private Owner;
    address private token;
    uint256 public LockerDuration;
    mapping (address => uint256) private balances;
    mapping (address => uint256) private withdrawnAmount;
    mapping (address => bool) private isAllowedDepositor;
    mapping(address => bool) private isAllowedReciever;

    event Locked(address indexed sender, uint256 amount ,uint256 timestamp);
    event Withdrawn(address indexed receiver , uint256 amount , uint256 timestamp);

    constructor(uint256 timeUnitsInDays , address token_){
        LockerDuration = timeUnitsInDays.mul(1 days);
        Owner = msg.sender; 
        token = token_;
    }

    function lock(uint256 amount) external returns(bool){
        require(isAllowedDepositor[msg.sender] == true || msg.sender == Owner,"Only One (OWNER) Address Can Deposit");
        IERC20(token).transferFrom(msg.sender,address(this) , amount);
        balances[address(this)]=balances[address(this)].add(amount);
        emit Locked(msg.sender ,amount , block.timestamp);
        return true;
    }
    
    function unlockAndWithdraw()external returns(bool){
        require (isAllowedReciever[msg.sender] == true , "Only Allowed Addresses Can Withdraw"); 
        uint256 elapsedTime = block.timestamp.sub(block.timestamp.mod(LockerDuration));
        uint256 releaseTime = elapsedTime.add(LockerDuration);
        require(block.timestamp >= releaseTime, "Tokens are still locked");
        uint256 numberOfReleases = elapsedTime.div(LockerDuration);
        uint256 totalAmountPercentToRecieve = numberOfReleases.mul(10);
        uint256 amountPercentToRecieve = totalAmountPercentToRecieve.sub(withdrawnAmount[msg.sender]);
        require(amountPercentToRecieve > 0, "No tokens to withdraw");
        IERC20(token).transferFrom(address(this), msg.sender,amountPercentToRecieve);
        balances[address(this)] = balances[address(this)].sub(amountPercentToRecieve);
        withdrawnAmount[msg.sender] = withdrawnAmount[msg.sender].add(amountPercentToRecieve);
        emit Withdrawn(msg.sender, amountPercentToRecieve, block.timestamp);
        return true;
    }
    function setIsAllowedDepositor(address depositor, bool isAllowed) external {
        require(msg.sender == Owner, "Only the owner can set allowed depositors");
        isAllowedDepositor[depositor] = isAllowed;
    }

    function setIsAllowedReciever(address receiver, bool isAllowed) external {
        require(msg.sender == Owner, "Only the owner can set allowed receivers");
        isAllowedReciever[receiver] = isAllowed;
    }

    function setLockerDuration(uint256 duration) external returns(bool){
        require(msg.sender == Owner, "Only the owner can set the locker duration");
        LockerDuration = duration.mul(1 days);
        return true;
    }

    function getBalance() external view returns (uint256) {
        return balances[address(this)];
    }

    function changeToken(address _token) external returns(bool){
        require(msg.sender == Owner);
        token = _token;
        return true;
    }

    function getIsAllowedDepositor(address depositor) external view returns (bool) {
        return isAllowedDepositor[depositor];
    }
    function getIsAllowedReciever(address reciever) external view returns(bool){
        return isAllowedReciever[reciever];
    }    
}