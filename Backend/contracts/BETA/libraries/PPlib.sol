// SPDX-License-Identifier: MIT

pragma solidity ^0.8.17;

library PPlib {
    struct UserProfile {
        string FullName;
        string UniqueTag;
        string ProfilePicURI;
        string gender;
        address Web3Wallet;
        bool isBlacklistedUser;
    }
    struct Value{
        uint256 availableValue;
        uint256 totalDeposited;
        uint256 totalWithdrawn;
    }
}