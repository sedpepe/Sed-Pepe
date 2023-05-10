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
    <div className='flex flex-row justify-between pl-20 pr-20 bg-[#33cc33] items-center h-20 gap-8'>
        <Link href={"./"}><div className='flex w-80 rounded-2xl justify-center pt-2 pb-2 items-center gap-4 cursor-pointer'>
          <Image src="/lgo.png" width={80} height={80} alt="Sed Pepe Logo"/>
          <h4 className=' text-3xl font-a text-white font-semibold'> SED PEPE</h4>
        </div></Link>

        <div className='flex flex-row w-3/5 items-center'>

      <div className='flex flex-row gap-4 text-white items-center text-xl font-bold font-a justify-center'>
      <Link href ={'./'}><div className='flex rounded-xl p-2 hover:text-red-500 cursor-pointer hover:scale-110'>HOME</div></Link>
        <Link href ={'./litepaper'}><div className='flex rounded-xl p-2  hover:text-red-500 cursor-pointer hover:scale-110'>LITEPAPER</div></Link>
        <Link href ={'./'}><div className='flex rounded-xl p-2  hover:text-red-500 cursor-pointer hover:scale-110'>ROADMAP</div></Link>
        <Link href ={'./'}><div className='flex rounded-xl p-2  hover:text-red-500 cursor-pointer hover:scale-110'>TEAM</div></Link>
        <Link href ={'./profile'}><div className='flex rounded-xl p-2  hover:text-red-500 cursor-pointer hover:scale-110'>BUY $SPEPE</div></Link>
      </div>
      <div className='flex justify-end'>
         <LoginPage/>
      </div>
      </div>
      
    </div>
  )
}

export default NavBarComponent