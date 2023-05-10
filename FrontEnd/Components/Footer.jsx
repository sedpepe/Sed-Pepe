import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const Footer = () => {
  return (
    <div className='flex bg-[#2cb52c] items-center h-16 gap-24 w-screen justify-center'>
          <div className='flex gap-8 items-center justify-start pr-4 pl-4 bg-[#3aac3a] p-1 rounded-3xl drop-shadow-lg h-12'>
          <h2 className='font-semibold text-lg text-white'>Socials:</h2>
          <div className=' flex pr-1 gap-4'>
            <Link href={"https://twitter.com/pepe_sed"}><Image src='/twitter.png' width={40} height={40} className="pt-2"/></Link>
            <Link href={"https://t.me/sedpepe_chat"}><Image src='/tg2.png' width={40} height={40} className="pt-2"/></Link>
            <div className='cursor-pointer' onClick={()=>alert("Token Not Tradeable Yet!")}><Image src='/uni.png' width={40} height={40} className="pt-1"/></div>
            <div className='cursor-pointer' onClick={()=>alert("Token Not Tradeable Yet!")}><Image src='https://etherscan.io/images/brandassets/etherscan-logo-circle.svg' width={30} height={30} className='pt-3'/></div>
          </div>
          </div>

          <div className='flex gap-8 items-center justify-end pl-4 pr-4 bg-[#3aac3a] p-1 rounded-3xl drop-shadow-lg h-12'>
          <h4 className='font-semibold text-lg  text-white'>Powered By :</h4>
          <Link href={"./"}><Image src='/therdWeed.svg' width={35} height={35} className="pt-2"/></Link>
          <Link href={"./"}><Image src='/Arbitrum.png' width={55} height={55} className="pt-2"/></Link>
          </div>
    </div>
  )
}

export default Footer