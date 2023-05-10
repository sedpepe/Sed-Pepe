import React from 'react'
import Image from 'next/image'


const Mint = () => {
  return (
    <div className='flex flex-col justify-center h-screen w-screen items-center bg-[#2b892b]'>
      <div className='flex justify-start absolute inset-y-22 w-screen h-screen inset-x-0 ' style={{ opacity: 0.18 }}>
      <Image src="/bg.gif" layout="fill" objectFit="cover" alt="Sed Pepe"/>
      </div>

      <div className='relative z-10 items-center text-center flex flex-col justify-center gap-8 cursor-pointer w-screen'>
        <Image src={'/sorry.gif'} height={800} width={800}/>
        <div className=' text-white font-a rounded-full p-5 shadow-xl bg-[#2b892b] gap-4 flex flex-col w-6/12 h-[11rem] hover:text-yellow-300 '>
        <h1 className='text-4xl font-bold'>Profile NFTs that have special Utilities within the Ecosystem</h1>
        <h1 className='text-4xl font-bold'> Coming Soon!</h1>
        </div>
      </div>

    </div>
  )
}

export default Mint