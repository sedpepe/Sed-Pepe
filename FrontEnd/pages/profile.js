import React from 'react'
import Acount from '../Components/Acount'
import { AppContext } from '../Api/contextApi';
import { useContext, useEffect} from 'react';

const Profile = () => {
    const {connectedUser,BuffTokenBalance , fetchBalances ,getNFTCollectionName, CollectionName , TokenSymbol 
      ,fetchTokenDetails , transferBuffToken} =useContext(AppContext);
    const handler = async()=>{
      try {
        if(connectedUser){
        await fetchBalances();
        getNFTCollectionName();
        }
      } catch (error) {
        console.log(error);
      }
    }
  
    useEffect(() => {
      handler();
      fetchTokenDetails();
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
    </div>
  )
}

export default Profile