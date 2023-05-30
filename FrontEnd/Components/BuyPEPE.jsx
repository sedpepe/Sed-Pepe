import React from 'react'
import Image from 'next/image'


const BuyPEPE = () => {
  return (
    <div className='flex flex-col justify-center h-screen w-screen items-center bg-[#2b892b]'>
      <div className='flex justify-start absolute inset-y-22 w-screen h-screen inset-x-0 ' style={{ opacity: 0.18 }}>
      <Image src="/sadd.gif" layout="fill" objectFit="cover" alt="Sed Pepe"/>
      </div>

      <div className='relative z-10 items-center text-center flex flex-col justify-center gap-8 cursor-pointer w-screen'>
        <Image src={'/sorry.gif'} height={800} width={800} alt="dancing pepe"/>
      </div>

    </div>
  )
}

export default BuyPEPE