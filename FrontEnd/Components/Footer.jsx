import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const Footer = () => {
  return (
    <div className='flex bg-[#47d147] items-center h-16 gap-2 w-screen justify-center'>
          <div className='flex gap-4 items-center justify-start pl-16 bg-[#3aac3a] p-1 rounded-3xl drop-shadow-lg h-12'>
          <h2 className='font-semibold text-2xl text-white'>Socials:</h2>
            <Link href={"https://twitter.com/pepe_sed"}><Image src='/twitter.png' width={40} height={40} className="pt-2"/></Link>
            <Link href={"https://t.me/sedpepe_chat"}><Image src='/tg2.png' width={40} height={40} className="pt-2"/></Link>
            <div className='cursor-pointer' onClick={()=>alert("Token Not Tradeable Yet!")}><Image src='/uni.png' width={40} height={40} className="pt-1"/></div>
            <div className='cursor-pointer' onClick={()=>alert("Token Not Tradeable Yet!")}><Image src='https://etherscan.io/images/brandassets/etherscan-logo-circle.svg' width={30} height={30} className='pt-3'/></div>
          </div>

          <div className='flex gap-4 items-center justify-end pl-16 bg-[#3aac3a] p-1 rounded-3xl drop-shadow-lg h-12'>
          <h4 className='font-semibold text-2xl  text-white'>Powered By :</h4>
          <Link href={"./"}><Image src='/therdWeed.svg' width={35} height={35} className="pt-2"/></Link>
          <Link href={"./"}><Image src='/Arbitrum.png' width={40} height={40} className="pt-2"/></Link>
          </div>
    </div>
  )
}

export default Footer