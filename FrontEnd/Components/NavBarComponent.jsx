import React from 'react'
import { AppContext } from '../Api/contextApi';
import { useContext } from 'react';
import LoginPage from './LoginPage';
import Link from 'next/link';
import Image from 'next/image';

const NavBarComponent = () => {
    const {connectedUser} =useContext(AppContext);
    
  return (
    <div className='flex flex-row justify-between pl-20 pr-20 bg-[#33cc33] items-center h-20 gap-8'>
        <div className='flex w-40 rounded-2xl justify-center pt-2 pb-2'>
          <Image src="/lgo.png" width={80} height={80}/>
        </div>

        <div className='flex flex-row justify-center w-3/4 gap-8'>
      <div className='flex flex-row gap-4 text-slate-800 items-center text-xl font-bold'>
      <Link href ={'./'}><div className='flex rounded-xl p-2 hover:text-red-500 cursor-pointer hover:scale-110'>HOME</div></Link>
        <Link href ={'./litepaper'}><div className='flex rounded-xl p-2  hover:text-red-500 cursor-pointer hover:scale-110'>LITEPAPER</div></Link>
        <Link href ={'./'}><div className='flex rounded-xl p-2  hover:text-red-500 cursor-pointer hover:scale-110'>MINT</div></Link>
        <Link href ={'./'}><div className='flex rounded-xl p-2  hover:text-red-500 cursor-pointer hover:scale-110'>TEAM</div></Link>
        <Link href ={'./profile'}><div className='flex rounded-xl p-2  hover:text-red-500 cursor-pointer hover:scale-110'>PROFILE</div></Link>
      </div>
      </div>
      <div className='flex justify-end'>
         <LoginPage/>
      </div>
    </div>
  )
}

export default NavBarComponent