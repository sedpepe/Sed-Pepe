import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const Footer = () => {
  return (
    <div className='flex bg-[#2cb52c] items-center h-16 gap-2 md:gap-24 max-w-screen justify-center'>
          <div className='flex gap-2 md:gap-8 items-center justify-center pr-4 pl-4 bg-[#3aac3a] p-1 rounded-3xl drop-shadow-lg h-12 w-8/12 md:w-1/3'>
          <div className=' flex pr-1 gap-4 lg:gap-24 md:gap-8'>
            <Link href={"https://twitter.com/pepe_sed"}><Image src='/twitter.png' width={40} height={40} className="pt-2" alt="twitter"/></Link>
            <Link href={"https://t.me/sedpepe_chat"}><Image src='/tg2.png' width={40} height={40} className="pt-2" alt="telegram"/></Link>
            <div className='cursor-pointer' onClick={()=>alert("Token Not Tradeable Yet!")}><Image src='/uni.png' width={40} height={40} className="pt-1" alt="Uniswap"/></div>
            <div className='cursor-pointer' onClick={()=>alert("Token Not Tradeable Yet!")}><Image src='https://etherscan.io/images/brandassets/etherscan-logo-circle.svg' width={30} height={30} className='pt-3' alt="etherscan"/></div>
          </div>
          </div>
    </div>
  )
}

export default Footer