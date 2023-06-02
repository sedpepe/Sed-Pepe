import React, { useEffect, useState } from 'react'
import { AppContext } from '../Api/contextApi';
import { useContext } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const NavBarComponent = () => {
    const {connectedUser} =useContext(AppContext);
    const [openMenu , setOpenMenu] = useState(false);
  return (
    <div className='flex flex-row justify-around md:justify-between md:pl-12 md:pr-12 bg-[#2cb52c] items-center h-18 min-w-screen gap-4 border-[#2b892b] border-2 '>
        <div className=' flex justify-between pt-2 pb-2 items-center cursor-pointer gap-7 text-2xl font-bold h-full'>
          <Link href={'./'}>
            <Image src="/pepe-drama-cry.gif"  height={55} width={55} alt="Sed Pepe Logo" className='rounded-full border border-black '/>
          </Link>
        </div>
        
        <div>
        <p className='text-white text-3xl md:text-4xl font-bold font-titleFont'>SEDPEPE</p>
        </div>

      <div className='flex  flex-row items-center justify-end pr-1 text-center text-white text-xs md:text-xl font-bold font-a md:gap-4'>
        <button onClick={()=> setOpenMenu(true)}><Image src="/menuicon.svg" width={55} height={50}/></button>
      </div>
      

      {openMenu && (
        <div className="fixed inset-0 bg-[#187818] flex justify-center items-center z-40">
          <div className='flex flex-col items-center gap-8 font-semibold italic'>
            <h1 className='text-5xl underline-offset-4 underline text-gray-300'>CONTENTS</h1>
              <Link href ={'./'}><div className='flex rounded-xl p-1 hover:text-red-500 cursor-pointer hover:scale-110' onClick={()=>setOpenMenu(false)}>HOME</div></Link>
              <Link href ={'./docs'}><div className='flex rounded-xl p-1  hover:text-red-500 cursor-pointer hover:scale-110' onClick={()=>setOpenMenu(false)}>DOCS</div></Link>
              <Link href ={'./roadmap'}><div className='flex rounded-xl p-1  hover:text-red-500 cursor-pointer hover:scale-110' onClick={()=>setOpenMenu(false)}>ROADMAP</div></Link>
              <Link href ={'./presale'}><div className='flex rounded-xl p-1  hover:text-red-500 cursor-pointer hover:scale-110' onClick={()=>setOpenMenu(false)}>PRESALE</div></Link>
              <Link href ={'./support'}><div className='flex rounded-xl p-1  hover:text-red-500 cursor-pointer hover:scale-110' onClick={()=>setOpenMenu(false)}>SUPPORT</div></Link>
            <button className='bg-red-600 rounded-full w-24 h-12 text-blue-300' onClick={()=> setOpenMenu(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default NavBarComponent