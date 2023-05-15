// SPDX-License-Identifier: MIT

pragma solidity ^0.8.17;

library PPlib {
    struct UserProfile {
        string FullName;
        string UniqueTag;
        string ProfilePicURI;
        string gender;
        address Web3Wallet;
        uint256 postCount; //controlled by blogController
        uint256 friendCount; //controlled by blogController
        uint256 followerCount; //controlled by blogController
        bool isBlacklistedUser;
    }
    struct Value{
        uint256 availableValue;
        uint256 totalDeposited;
        uint256 totalWithdrawn;
    }
    //mapping TokenId => Struct Posts 
    struct Posts{
        string ImageUri;
        string Title;
        string Subject;
        string Body;
        uint256 timestamp;
        uint256 likes;
        string reactions;
        bytes32 PostHashId;
        bool isDeleted;
    }
    //commentSection mapping PostHash => CommenterNftId => Comment struct
    struct Comment{
        string comment;
        bytes32 commentHashId;
        bool isDeleted;
        string reactions;
        uint256 likes;
    }
    //mapping tokenId => (tokenId => Struct Friend) for dms and stories
    struct Friend{
        bool isFriendOftokenId;
        uint256 timestampofAdd;
        uint256 timestampOfRemove; 
    }
    //mapping tokenId => (tokenId => Struct Follower) for public blog posts
    struct Follower{
        bool isFollowedToId;
        uint256 timestampofAdd;
        uint256 timestampOfRemove; 
    }

}
