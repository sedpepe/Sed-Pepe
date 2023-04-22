
import { ethers } from "ethers";
import Web3Modal from "web3modal";

//Imports of Abis
import TokenJson from "./abis/Token.json";
//import MarketJson from "./abis/nftMarket.json";
import DropJson from "./abis/drop.json";
//import TokenStakeJson from "./abis/StakeERC20.json";
//import NftStakeJson from "./abis/NftStake.json";
//Constansts - Addresses

const {TKN_ADDR , DROP_ADDR , M_ADDR , ERCSTAKE_ADDR ,N_ST_ADR } = process.env

//Constants- ABIs

const TokenABI = TokenJson.abi;
//const NFTStakeABI = NftStakeJson.abi;
const NFTDropABI = DropJson.abi;
//const NFTMarketABI = MarketJson.abi;
//const ERC20StakingABI = TokenStakeJson.abi;


export const CheckIfWalletConnected = async()=> {
     try {
         if(!window.ethereum) return console.log("INSTALL METAMASK OR WEB3-Wallet");
         const accounts = await window.ethereum.request({
             method: "eth_accounts",
         });
         const firstAccount = accounts[0];
        return firstAccount; 
     } catch (error) {
         console.log(error);
         alert("Undefined Error, Try Again");
     }
 };

 export const connectWallet = async()=> {
    try {
        if(!window.ethereum) return console.log("INSTALL METAMASK OR WEB3-Wallet");
        const accounts = await window.ethereum.request({
            method: "eth_requestAccounts",
        });
        const firstAccount = accounts[0];
       return firstAccount;
    } catch (error) {
        console.log(error);
    }  
}
//Connect to DROP CONTRACT
export const connectToDrop = async()=>{
    const fetchContract = (signerOrProvider)=>
  new ethers.Contract(DROP_ADDR , NFTDropABI , signerOrProvider);
    try {
        const web3modal = new Web3Modal();
        const connection = await web3modal.connect();
        const provider = new ethers.providers.Web3Provider(connection);
        const signer = provider.getSigner();
        const contract = fetchContract(signer);
        return contract;
    } catch (error) {
        console.log(error);
    }
}  
// Connect Token Contract
export const connectToToken = async()=>{
    const fetchContract = (signerOrProvider)=>
  new ethers.Contract(TKN_ADDR, TokenABI , signerOrProvider);
    try {
        const web3modal = new Web3Modal();
        const connection = await web3modal.connect();
        const provider = new ethers.providers.Web3Provider(connection);
        const signer = provider.getSigner();
        const contract = fetchContract(signer);
        return contract;
    } catch (error) {
        console.log(error);
    }
}
//Connect To NFT MarketPlace
/*{export const connectToNFTMarket = async()=>{
    const fetchContract = (signerOrProvider)=>
  new ethers.Contract(M_ADDR , NFTMarketABI , signerOrProvider);
    try {
        const web3modal = new Web3Modal();
        const connection = await web3modal.connect();
        const provider = new ethers.providers.Web3Provider(connection);
        const signer = provider.getSigner();
        const contract = fetchContract(signer);
        return contract;
    } catch (error) {
        console.log(error);
    }
}
//Connect to ERC20 Staker
export const connectToTokenStaker = async()=>{
    const fetchContract = (signerOrProvider)=>
  new ethers.Contract(ERCSTAKE_ADDR , ERC20StakingABI , signerOrProvider);
    try {
        const web3modal = new Web3Modal();
        const connection = await web3modal.connect();
        const provider = new ethers.providers.Web3Provider(connection);
        const signer = provider.getSigner();
        const contract = fetchContract(signer);
        return contract;
    } catch (error) {
        console.log(error);
    }
}
//Connect to ERC721 Staker
export const connectTo721NFTStaker = async()=>{
    const fetchContract = (signerOrProvider)=>
  new ethers.Contract(N_ST_ADR , NFTStakeABI , signerOrProvider);
    try {
        const web3modal = new Web3Modal();
        const connection = await web3modal.connect();
        const provider = new ethers.providers.Web3Provider(connection);
        const signer = provider.getSigner();
        const contract = fetchContract(signer);
        return contract;
    } catch (error) {
        console.log(error);
    }
}
}*/
//TIME CONVERTER Block.Timestamp => S-M-H , DD-MM-YY

export const convertTime = (time) => {
    const newTime = new Date(time *1000);

    const realTime = newTime.toLocaleString();

    return realTime;
}