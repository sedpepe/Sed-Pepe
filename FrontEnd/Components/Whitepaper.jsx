import React from 'react'
import Image from 'next/image'

const Whitepaper = () => {
  return (
    <div className=' bg-[#47d147] text-black w-screen h-screen '>
      <div className='flex justify-start absolute inset-y-22 w-full h-full inset-x-0' style={{ opacity: 0.18 }}>
      <Image src="/bg.gif" layout="fill" objectFit="cover" />
      </div>
      <div>
        WhitePaper
      </div>
    </div>
  )
}

export default Whitepaper