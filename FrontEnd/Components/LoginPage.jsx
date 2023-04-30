import React from 'react'
import { connectWallet } from '../Api/helper'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { useContext } from 'react'
import { AppContext } from '../Api/contextApi'
import Link from 'next/link'
const LoginPage = () => {
  const {connectedUser,BuffTokenBalance , fetchBalances} =useContext(AppContext);
  const route = useRouter();
  console.log(BuffTokenBalance);
  const Connector = async()=>{
        try {
          await connectWallet();
          window.location.reload();
        } catch (error) {
            console.log(error);
        }
    }
    
  return (
    <div>
        {!connectedUser ? <button onClick={()=> Connector()}>CONNECT</button>:<div> <Link href={'./profile'}><button>{connectedUser.slice(0,4)}...{connectedUser.slice(38)} </button></Link></div>}
    </div>
  )
}

export default LoginPage