import React, { useEffect, useState } from 'react'
import { AppContext } from '../Api/contextApi';
import { useContext } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const NavBarComponent = () => {
    const {connectedUser} =useContext(AppContext);
    const [openMenu , setOpenMenu] = useState(false);
  return (
    <div className='flex flex-row justify-between bg-[#2cb52c] items-center h-16 min-w-screen pl-4 pr-2 md:pl-6 md:justify-between gap-4 border-[#2b892b] border-2 '>
        <div className=' flex min-w-1/2 rounded-2xl justify-start pt-2 pb-2 items-center cursor-pointer gap-7 text-2xl font-bold'>
          
            <Image src="/lgo.png"  height={47} width={47} alt="Sed Pepe Logo"/>

            <p className='text-white'>SEDPEPE</p>
        </div>
        

      <div className='flex  flex-row w-2/3 items-center justify-end pr-1 text-center text-white text-xs md:text-xl font-bold font-a md:w-4/6 md:gap-4'>
        <button onClick={()=> setOpenMenu(true)}><Image src="/menuicon.svg" width={40} height={40}/></button>
      </div>
      

      {openMenu && (
        <div className="fixed inset-0 bg-[#187818] flex justify-center items-center z-40">
          <div className='flex flex-col items-center gap-20 font-semibold italic'>
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