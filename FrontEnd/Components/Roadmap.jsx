import React from 'react'
import Image from 'next/image'
const RMP = () => {
  return (
    <div className='flex flex-col justify-center h-screen w-screen items-center bg-[#2b892b]'>
      <div className='flex justify-start absolute inset-y-22 w-screen h-screen inset-x-0 ' style={{ opacity: 0.18 }}>
      <Image src="/newGifs/sedPep.gif" layout="fill" objectFit="cover" alt="Sed Pepe"/>
      </div>

      <div className='relative z-10 items-center text-center flex flex-col justify-center gap-8 cursor-pointer w-screen'>
        <Image src={'/sorry.gif'} height={800} width={800} alt="dancing pepe"/>
        <h1 className=' text-6xl font-Monoton text-white'>ROADMAP IN DRAFT !</h1>
      </div>

    </div>
  )
}

export default RMP