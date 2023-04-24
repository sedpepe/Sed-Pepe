import React from 'react'
import Acount from '../Components/Acount'
import { AppContext } from '../Api/contextApi';
import { useContext, useEffect , useState} from 'react';
import { ethers } from 'ethers';

const Profile = () => {
    const {connectedUser,BuffTokenBalance , fetchBalances ,getNFTCollectionName, CollectionName , TokenSymbol 
      ,fetchTokenDetails , transferBuffToken,burnBuffToken} =useContext(AppContext);
    const [amtInput , setInputAmt] = useState("");
      const handler = async()=>{
      try {
        if(connectedUser){
        await fetchBalances();
        getNFTCollectionName();
        fetchTokenDetails();
        }
      } catch (error) {
        console.log(error);
      }
    }
    const burnBuff = async () => {
      try {
        if (amtInput) {
          const bala = ethers.utils.parseEther(amtInput);
          await burnBuffToken(bala); 
        }
      } catch (error) {
        console.log(error);
      }
    };

    useEffect(() => {
      handler();
    }, [])
    
  return (
    <div>
        <Acount
        connectedUser={connectedUser}
        BuffTokenBalance = {BuffTokenBalance}
        CollectionName = {CollectionName}
        getNFTCollectionName = {getNFTCollectionName}
        TokenSymbol = {TokenSymbol}
        transferBuffToken = {transferBuffToken}
        />
        <input type="number" onChange={(e)=> setInputAmt(e.target.value)}/>
        <button onClick={()=> burnBuff()}>Burn</button>
    </div>
  )
}

export default Profile