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
    const [BuffTokenBalance , setBuffTokenBalance] = useState();
    const [loading , setLoading] = useState(false);

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
            setConnectedUser(accounts);
            setIsUserLoggedIn(true);
            const BuffTokenContract = await connectToToken();
           // console.log(BuffTokenContract);
            if (connectedUser) {
              const buffB = BuffTokenContract.balanceOf(connectedUser);
              const B = ethers.utils.formatEther(buffB);
              console.log(B);
              setBuffTokenBalance(B);
            }
          } catch (error) {
            console.log(error);
          }
    }

    useEffect(()=>{fetchUser();},[]);

    const MintNFT = async({user, id,amount, _currency, _pricePerToken, _allowlistProof, _data })=>{
        try {
            const connect = await connectToDrop();
            const call = connect.claim(user, id, amount, _currency, _pricePerToken, _allowlistProof, _data);
            setLoading(true);
            await call.wait();
            setLoading(false);
            window.location.reload();
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <AppContext.Provider value={{connectedUser ,loading,networkError,isUserLoggedIn, correctNetwork ,MintNFT , BuffTokenBalance}}>
            {children}
        </AppContext.Provider>
    )
}