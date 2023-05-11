import React, { useEffect, useState } from 'react'
import { AppContext } from '../Api/contextApi';
import { useContext } from 'react';
import LoginPage from './LoginPage';
import Link from 'next/link';
import Image from 'next/image';

const NavBarComponent = () => {
    const {connectedUser} =useContext(AppContext);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth <= 900); // Set breakpoint for mobile screens
      };

      // Add event listener to handle window resize
      window.addEventListener('resize', handleResize);

      // Cleanup the event listener on component unmount
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);

  return (
    <div className='flex flex-row justify-start bg-[#2cb52c] items-center h-20 w-screen pl-2 pr-2 md:pl-16 md:justify-between '>
        <Link href={"./"}>
        <div className='flex w-1/3 rounded-2xl justify-start pt-2 pb-2 items-center cursor-pointer gap-2 md:w-80'>
          <Image src="/lgo.png" width={60} height={60} alt="Sed Pepe Logo"/>
          <h4 className=' text-m font-a text-white font-semibold md:text-3xl'> $SPEPE</h4>
        </div>
        </Link>

      <div className='flex flex-row w-2/3 items-center text-center justify-start gap-1 text-white text-sm md:text-xl font-bold font-a md:w-4/6 md:gap-4'>
        <Link href ={'./'}><div className='flex rounded-xl p-2 hover:text-red-500 cursor-pointer hover:scale-110'>HOME</div></Link>
        <Link href ={'./litepaper'}><div className='flex rounded-xl p-1  hover:text-red-500 cursor-pointer hover:scale-110'>LITEPAPER</div></Link>
        <Link href ={'./'}><div className='flex rounded-xl p-1  hover:text-red-500 cursor-pointer hover:scale-110'>ROADMAP</div></Link>
        <Link href ={'./mint-id'}><div className='flex rounded-xl p-1  hover:text-red-500 cursor-pointer hover:scale-110'>MINT IDs</div></Link>
        <Link href ={'./buypepe'}><div className='flex rounded-xl p-1  hover:text-red-500 cursor-pointer hover:scale-110'>BUY $SPEPE</div></Link>
      </div>
      
    </div>
  )
}

export default NavBarComponent