import { ethers } from 'ethers';
import React, { useState } from 'react'
import Image from 'next/image';

const Acount = ({connectedUser , BuffTokenBalance , CollectionName,TokenSymbol,transferBuffToken}) => {
  const [addressInput , setInputA] = useState("");
  const [amtInput , setInputAmt] = useState("");

  const traHandler =async()=>{
    try {
      const val = ethers.utils.parseEther(amtInput);
      await transferBuffToken(addressInput , amtInput);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className=' bg-[#47d147] text-black w-screen h-screen font-a'>
      <div className='flex justify-start absolute inset-y-22 w-full h-full inset-x-0' style={{ opacity: 0.18 }}>
      <Image src="/bg.gif" layout="fill" objectFit="cover" alt="nun" />
      </div>
      <h3>Address : {connectedUser}</h3>
      <h5>{TokenSymbol} Balance : {BuffTokenBalance}</h5>
      <h4>NFT COLLECTION NAME : {CollectionName}</h4>
      <div>
        <h1>Transfer</h1>
        <input type="text" onChange={(e)=> setInputA(e.target.value)}/>
        <input type="number" onChange={(e)=> setInputAmt(e.target.value)}/>
        <button onClick={()=>traHandler()}>Send</button>
      </div>
    </div>
  )
}

export default Acount