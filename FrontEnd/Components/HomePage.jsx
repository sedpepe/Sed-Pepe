import React from 'react'
import { useContext } from 'react'
import { AppContext } from '../Api/contextApi';
import Image from 'next/image';

const HomePage = () => {
    const {connectedUser ,MintNFT } =useContext(AppContext);
  return (
    <div className=' bg-[#47d147] text-black w-screen h-screen '>
      <div className='flex justify-start absolute inset-y-52 w-[790px] h-[750px] inset-x-4' style={{ opacity: 0.2 }}>
      <Image src="/1.png" layout="fill" objectFit="cover" />
      </div>

      <div className="relative z-10 pt-8">
        <h1 className='font-semibold text-5xl text-center text-white'>SED PEPE</h1>
      </div>

    </div>
  )
}

export default HomePage