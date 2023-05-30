import React, { useEffect, useState } from 'react'
import { AppContext } from '../Api/contextApi';
import { useContext } from 'react';
import LoginPage from './LoginPage';
import Link from 'next/link';
import Image from 'next/image';

const NavBarComponent = () => {
    const {connectedUser} =useContext(AppContext);

  return (
    <div className='flex flex-row justify-start bg-[#2cb52c] items-center h-16 w-screen pl-4 pr-2 md:pl-16 md:justify-between gap-4 border-[#2b892b] border-2 '>
        <Link href={"./"}>
        <div className='flex w-1/3 rounded-2xl justify-start pt-2 pb-2 items-center cursor-pointer gap-1 md:w-80'>
          <div className='absolute w-8 h-8'>
            <Image src="/lgo.png"  layout="fill" objectFit="cover" alt="Sed Pepe Logo"/>
          </div>
          <h4 className=' text-sm font-a text-white font-semibold md:text-3xl pl-10 underline underline-offset-1'> $SPEPE</h4>
        </div>
        </Link>

      <div className='flex flex-row w-2/3 items-center text-center justify-start text-white text-xs md:text-xl font-bold font-a md:w-4/6 md:gap-4'>
        <Link href ={'./'}><div className='flex rounded-xl p-1 hover:text-red-500 cursor-pointer hover:scale-110'>HOME</div></Link>
        <Link href ={'./docs'}><div className='flex rounded-xl p-1  hover:text-red-500 cursor-pointer hover:scale-110'>DOCS</div></Link>
        <Link href ={'./roadmap'}><div className='flex rounded-xl p-1  hover:text-red-500 cursor-pointer hover:scale-110'>ROADMAP</div></Link>
        <Link href ={'./presale'}><div className='flex rounded-xl p-1  hover:text-red-500 cursor-pointer hover:scale-110'>PRESALE</div></Link>
        <Link href ={'./support'}><div className='flex rounded-xl p-1  hover:text-red-500 cursor-pointer hover:scale-110'>SUPPORT</div></Link>
      </div>
      
    </div>
  )
}

export default NavBarComponent