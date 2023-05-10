import React from 'react'
import { useContext } from 'react'
import { AppContext } from '../Api/contextApi';
import Image from 'next/image';
import Footer from './Footer';

const HomePage = () => {
    const {connectedUser ,MintNFT } =useContext(AppContext);
  return (
    <div className=' bg-[#47d147] text-black w-screen h-screen font-a'>
      <div className='flex justify-start absolute inset-y-52 w-[790px] h-[750px] inset-x-4' style={{ opacity: 0.2 }}>
      <Image src="/1.png" layout="fill" objectFit="cover" />
      </div>

      <div className="relative z-10 pt-8 flex flex-col items-center">
        <div className=' gap-8 flex flex-col'>
        <h1 className='font-semibold text-5xl text-center text-white underline-offset-8 underline'>SED PEPE</h1>
        
        <div className='flex items-center mx-64 pb-8'>  
          <Image src='/lgo.png' width={400} height={400}/>
        </div>
        
        <div className='w-[60rem]'>
        <p className=' font-medium text-2xl text-center text-white'> 
        Pepe has become Sad of all the Atrocities of Humanity and Pepe is on the Brink of Devastation. Pepe is 
        very fed up of the World and its ways and is here to change that ! He wants the War to stop ASAP and will help in 
        all possible ways to bring Peace to the world in whatever small way possible.
        </p>
        </div>
        </div>

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
    </div>
  )
}

export default HomePage