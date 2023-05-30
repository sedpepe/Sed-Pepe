import React, { useEffect, useState } from 'react'
import { AppContext } from '../Api/contextApi';
import { useContext } from 'react';
import LoginPage from './LoginPage';
import Link from 'next/link';
import Image from 'next/image';

const NavBarComponent = () => {
    const {connectedUser} =useContext(AppContext);

  return (
    <div className='flex flex-row justify-between bg-[#2cb52c] items-center h-16 min-w-screen pl-4 pr-2 md:pl-6 md:justify-between gap-4 border-[#2b892b] border-2 '>
        <Link href={"./"}>
        <div className=' flex max-w-1/4 rounded-2xl justify-start pt-2 pb-2 items-center cursor-pointer gap-4 md:gap-7 md:w-80'>
            <Image src="/lgo.png"  height={47} width={47} alt="Sed Pepe Logo"/>
            <p className='text-white'>SEDPEPE</p>
        </div>
        </Link>

      <div className='flex  flex-row w-2/3 items-center justify-end pr-1 text-center text-white text-xs md:text-xl font-bold font-a md:w-4/6 md:gap-4'>
        <button onClick={()=> openModel(true)}><Image src="/menuicon.svg" width={40} height={40}/></button>
      </div>
      
    </div>
  )
}

export default NavBarComponent