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
    <div className='flex flex-row justify-between bg-[#2cb52c] items-center h-20 gap-8 w-screen'>
        <Link href={"./"}>
        <div className='flex w-80 rounded-2xl justify-center pl-16 pt-2 pb-2 items-center gap-4 cursor-pointer'>
          <Image src="/lgo.png" width={80} height={80} alt="Sed Pepe Logo"/>
          <h4 className=' text-3xl font-a text-white font-semibold'> SED PEPE</h4>
        </div>
        </Link>

      <div className='flex flex-row w-4/6 items-center justify-start gap-4 text-white text-xl font-bold font-a'>
        <Link href ={'./'}><div className='flex rounded-xl p-2 hover:text-red-500 cursor-pointer hover:scale-110'>HOME</div></Link>
        <Link href ={'./litepaper'}><div className='flex rounded-xl p-2  hover:text-red-500 cursor-pointer hover:scale-110'>LITEPAPER</div></Link>
        <Link href ={'./'}><div className='flex rounded-xl p-2  hover:text-red-500 cursor-pointer hover:scale-110'>ROADMAP</div></Link>
        <Link href ={'./mint-id'}><div className='flex rounded-xl p-2  hover:text-red-500 cursor-pointer hover:scale-110'>MINT IDs</div></Link>
        <Link href ={'./buypepe'}><div className='flex rounded-xl p-2  hover:text-red-500 cursor-pointer hover:scale-110'>BUY $SPEPE</div></Link>
      </div>
      
    </div>
  )
}

export default NavBarComponent