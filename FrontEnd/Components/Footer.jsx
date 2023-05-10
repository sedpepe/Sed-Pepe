import React from 'react'
import Image from 'next/image'
const Footer = () => {
  return (
    <div>
        <h2 className='font-semibold text-4xl pt-16 text-white underline-offset-8 underline'>Links:</h2>
          <div className='flex pt-12 gap-8 items-center'>
            <Image src='/twitter.png' width={100} height={100}/>
            <Image src='/tg2.png' width={100} height={100}/>
            <Image src='/uni.png' width={100} height={100}/>
            <Image src='https://etherscan.io/images/brandassets/etherscan-logo-circle.svg' width={75} height={75} className='pt-4'/>
          </div> 

          <h4 className='font-semibold text-2xl pt-12 text-white pt-24'>Powered By :</h4>
          <div className='flex gap-8 pt-2'>
          <Image src='/thirdweb.svg' width={90} height={90}/>
          <Image src='/Arbitrum.png' width={100} height={100}/>
          </div>
    </div>
  )
}

export default Footer