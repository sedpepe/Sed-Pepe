import React from 'react'
import { connectWallet } from '../Api/helper'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { useContext } from 'react'
import { AppContext } from '../Api/contextApi'
const LoginPage = () => {
  const {connectedUser , ethBalance ,BuffTokenBalance } =useContext(AppContext);
  const route = useRouter();
  const Connector = async()=>{
        try {
            const connect =await connectWallet();
            connect.wait();
        } catch (error) {
            console.log(error);
        }
    }
  return (
    <div>
        {!connectedUser ? <button onClick={()=> Connector()}>CONNECT</button>:<div><p>{connectedUser} : {BuffTokenBalance}</p></div>}
    </div>
  )
}

export default LoginPage