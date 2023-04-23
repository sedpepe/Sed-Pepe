import React from 'react'
import Acount from '../Components/Acount'
import { AppContext } from '../Api/contextApi';
import { useContext, useEffect} from 'react';

const Profile = () => {
    const {connectedUser,BuffTokenBalance , fetchBalances} =useContext(AppContext);
    const handler = async()=>{
      try {
        if(connectedUser){
        await fetchBalances();
        }
      } catch (error) {
        console.log(error);
      }
    }
    useEffect(() => {
      handler();
    }, [])
    
  return (
    <div>
        <Acount
        connectedUser={connectedUser}
        BuffTokenBalance = {BuffTokenBalance}
        />
    </div>
  )
}

export default Profile