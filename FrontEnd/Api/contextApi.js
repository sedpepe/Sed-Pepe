import React, {useState , useEffect  } from 'react';
import { ethers } from 'ethers';
//Internal Imp

import {
    connectToDrop , 
    //connectToNFTMarket , 
    connectToToken , 
    //connectToTokenStaker , 
    //connectTo721NFTStaker ,
    //CheckIfWalletConnected,
    connectWallet} 
from "./helper";

export const AppContext = React.createContext();

export const AppProvider = ({children}) =>{
    const [connectedUser , setConnectedUser] = useState("");
    const [correctNetwork, setCorrectNetwork] = useState(false);
    const [networkError, setNetworkError] = useState(false);
    const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
    const [BuffTokenBalance , setBuffTokenBalance] = useState("");
    const [CollectionName , setCollectionName] = useState("");
    const [loading , setLoading] = useState(false);
    const [TokenSymbol , setTokenSymbol] = useState("");

    const fetchUser = async()=>{
        try {
            const { ethereum } = window;
            if (!ethereum) {
              alert("Get MetaMask!");
              return;
            }
            let chainId = await ethereum.request({ method: "eth_chainId" });
            console.log("Connected to " + chainId);
            const arbChainId = "0x66eed";
            if (chainId !== arbChainId) {
              console.log("Please connect to Arbitrum Test Network");
              setCorrectNetwork(false);
              setNetworkError(true);
              return;
            } else {
              setCorrectNetwork(true);
              setNetworkError(false);
            }
            const accounts = await connectWallet();
            setLoading(true);
            setConnectedUser(accounts);
            setIsUserLoggedIn(true);
            setLoading(false);
          } catch (error) {
            console.log(error);
          }
    }

    const fetchBalances = async()=>{
      try {
        const BuffTokenContract = await connectToToken();
            if (connectedUser) {
              const buffB =await BuffTokenContract.balanceOf(connectedUser);
              const B = ethers.utils.formatEther(buffB);
              setBuffTokenBalance(B);
              return B;
            }
      } catch (error) {
        console.log(error);
      }
    }

    const fetchTokenDetails = async()=>{
      try {
        const BuffTokenContract = await connectToToken();
            if (connectedUser) {
              const buffB =await BuffTokenContract.symbol();
              setTokenSymbol(buffB);
              return buffB;
            }
      } catch (error) {
        console.log(error);
      }
    }
    
    const approveBuffToken = async({spender , amount})=>{
      try {
        const BuffTokenContract = await connectToToken();
            if (connectedUser) {
              const buffB =await BuffTokenContract.approve(spender , amount);
              setLoading(true);
              await buffB.wait();
              setLoading(false);
            }
      } catch (error) {
        console.log(error);
      }
    }
    const burnBuffToken = async({amount})=>{
      try {
        const BuffTokenContract = await connectToToken();
            if (connectedUser) {
              const buffB =await BuffTokenContract.burn(amount);
              setLoading(true);
              await buffB.wait();
              setLoading(false);
            }
      } catch (error) {
        console.log(error);
      }
    }
    const transferBuffToken = async({reciever , amount})=>{
      try {
        const BuffTokenContract = await connectToToken();
            if (connectedUser) {
              await BuffTokenContract.transfer(reciever , amount);
              setLoading(true);
              setLoading(false);
            }
      } catch (error) {
        console.log(error);
      }
    }

    useEffect(()=>{
      fetchUser();
      fetchTokenDetails();
    },[]);

    const MintNFT = async({user, id,amount, _currency, _pricePerToken, _allowlistProof, _data })=>{
        try {
            const connect = await connectToDrop();
            const call = await connect.claim(user, id, amount, _currency, _pricePerToken, _allowlistProof, _data);
            setLoading(true);
            setLoading(false);
            window.location.reload();
        } catch (error) {
            console.log(error);
        }
    }
    const getNFTCollectionName = async()=>{
      try {
          const connect = await connectToDrop();
          const call =await connect.name();
          setLoading(true);
          setCollectionName(call);
          setLoading(false);
      } catch (error) {
          console.log(error);
      }
  }

    return (
        <AppContext.Provider value={{connectedUser ,loading,networkError,isUserLoggedIn, correctNetwork ,MintNFT , BuffTokenBalance, fetchBalances
        , approveBuffToken , transferBuffToken ,burnBuffToken , getNFTCollectionName, CollectionName , TokenSymbol , fetchTokenDetails
        }}>
            {children}
        </AppContext.Provider>
    )
}