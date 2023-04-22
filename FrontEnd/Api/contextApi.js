import React, {useState , useEffect  } from 'react';
import { ethers } from 'ethers';
//import { LineaTestnet } from "@thirdweb-dev/chains";
import { ThirdwebProvider } from "@thirdweb-dev/react";

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
    const [ethBalance , setEthBalance] = useState("");
    const [BuffTokenBalance , setBuffTokenBalance] = useState("");
    const [loading , setLoading] = useState(false);

    const fetchUser = async()=>{
        try {
            if(!window.ethereum) alert("INSTALL METAMASK OR WEB3-Wallet First");
            const accounts = await connectWallet();
            setConnectedUser(accounts);
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const etherBalance = await provider.getBalance(accounts[0]);
            setEthBalance(ethers.utils.formatEther(etherBalance));
            const conn = await connectToToken();
            const b = conn.balanceOf(connectedUser);
            setBuffTokenBalance(ethers.utils.formatEther(b));
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(()=>{fetchUser();},[]);

    const MintNFT = async({ _currency, _pricePerToken, _allowlistProof, _data })=>{
        try {
            const connect = await connectToDrop();
            const call = connect.claim(connectedUser, 0, 1, _currency, _pricePerToken, _allowlistProof, _data);
            setLoading(true);
            await call.wait();
            setLoading(false);
            window.location.reload();
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <ThirdwebProvider activeChain= "arbitrum">
        <AppContext.Provider value={{connectedUser , ethBalance ,loading, MintNFT , BuffTokenBalance}}>
            {children}
        </AppContext.Provider>
        </ThirdwebProvider>
    )
}