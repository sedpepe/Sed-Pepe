import React from 'react'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { useContext } from 'react'
import { AppContext } from '../Api/contextApi'
import Link from 'next/link'
const LoginPage = () => {
  const {connectedUser,BuffTokenBalance , fetchUser} =useContext(AppContext);
  const route = useRouter();
  console.log(BuffTokenBalance);
  const Connector = async()=>{
        try {
          await fetchUser();
          window.location.reload();
        } catch (error) {
            console.log(error);
        }
    }
    
  return (
    <div>
        {!connectedUser ? <button className='bg-[#ffccff] h-10 w-32 justify-center flex items-center rounded-lg shadow-md' onClick={()=> Connector()}>CONNECT</button>:
        <div className='bg-[#ffccff] h-10 w-32 justify-center flex items-center rounded-lg shadow-md'> 
          <Link href={'./profile'}>
          <button>
            {connectedUser.slice(0,4)}...{connectedUser.slice(38)} 
          </button></Link>
          </div>}
    </div>
  )
}

export default LoginPage