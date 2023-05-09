import React from 'react'
import Image from 'next/image'

const Whitepaper = () => {
  return (
    <div className=' bg-[#47d147] text-black w-screen h-screen '>
      <div className='flex justify-start absolute inset-y-52 w-[790px] h-[750px] inset-x-4' style={{ opacity: 0.2 }}>
      <Image src="/1.png" layout="fill" objectFit="cover" />
      </div>
      <div>
        WhitePaper
      </div>
    </div>
  )
}

export default Whitepaper