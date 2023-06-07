import React, { useEffect, useState } from 'react'
import { AppContext } from '../Api/contextApi';
import { useContext } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const NavBarComponent = () => {
    const {connectedUser} =useContext(AppContext);
    const [openMenu , setOpenMenu] = useState(false);
  return (
    <div className='flex flex-row justify-around md:justify-between md:pl-12 md:pr-12 bg-[#2cb52c] items-center h-20 min-w-screen gap-4 border-[#2b892b] border-2 '>
        <div className=' flex justify-between pt-2 pb-2 items-center cursor-pointer gap-7 text-2xl font-bold h-full'>
          <Link href={'./'}>
            <Image src="/pepe-drama-cry.gif"  height={55} width={55} alt="Sed Pepe Logo" className='rounded-full border border-black '/>
          </Link>
        </div>
        
        <div>
        <p className='text-white text-[3rem] md:text-[4rem] font-Production-1 font-bold hover:underline hover:underline-offset-8'>SEDPEPE</p>
        </div>

      <div className='flex  flex-row items-center justify-end pr-1 text-center text-white text-xs md:text-xl font-bold font-a md:gap-4'>
        <button onClick={()=> setOpenMenu(true)}><Image src="/menuicon.svg" width={55} height={50}/></button>
      </div>
      

      {openMenu && (
        <div className="fixed inset-0 bg-[#22b222] flex items-center z-40 flex-col justify-evenly pt-[4rem]">
          <div className='flex justify-start absolute inset-y-22 w-screen min-h-screen inset-x-0 ' style={{ opacity: 0.18 }}>
            <Image src="/newGifs/sadpepe-sad.gif" layout="fill" objectFit='cover' alt="Sed Pepe" priority={true}/>
          </div>

          <div className='flex flex-col items-center gap-[1rem] font-semibold italic rounded-2xl w-11/12 pt-[3rem] pb-[3rem] z-50'>
          
          <div>
            <button className=' bg-[#247224] hover:bg-red-600 bg-opacity-40 rounded-full w-20 h-20 border border-[#177c17] flex flex-col items-center justify-center hover:w-24 hover:h-24' onClick={()=> setOpenMenu(false)}>
              <Image src='/newGifs/runningPepe.gif' width={60} height={10}/>
            </button>
          </div>  
          
          <div className='flex flex-col items-center text-white gap-8 font-semibold italic bg-[#247224] bg-opacity-30 rounded-2xl w-10/12 border border-[#177c17] pt-8 pb-8'>
            <Link href ={'./'}><div className='flex rounded-xl hover:underline  p-1 hover:text-red-500 cursor-pointer hover:scale-110' onClick={()=>setOpenMenu(false)}>HOME</div></Link>
            <Link href ={'./docs'}><div className='flex rounded-xl p-1 hover:underline   hover:text-red-500 cursor-pointer hover:scale-110' onClick={()=>setOpenMenu(false)}>DOCS</div></Link>
            <Link href ={'./roadmap'}><div className='flex rounded-xl p-1 hover:underline   hover:text-red-500 cursor-pointer hover:scale-110' onClick={()=>setOpenMenu(false)}>ROADMAP</div></Link>
            <Link href ={'./lotto'}><div className='flex rounded-xl p-1 hover:underline  hover:text-red-500 cursor-pointer hover:scale-110' onClick={()=>setOpenMenu(false)}>LOTTERY</div></Link>
            <Link href ={'./presale'}><div className='flex rounded-xl p-1 hover:underline   hover:text-red-500 cursor-pointer hover:scale-110' onClick={()=>setOpenMenu(false)}>PRESALE</div></Link>
            <Link href ={'./support'}><div className='flex rounded-xl p-1 hover:underline  hover:text-red-500 cursor-pointer hover:scale-110' onClick={()=>setOpenMenu(false)}>SUPPORT</div></Link>
          </div>

          </div>
        </div>
      )}
    </div>
  )
}

export default NavBarComponent