import React from 'react'
import { useContext } from 'react'
import { AppContext } from '../Api/contextApi';
import Image from 'next/image';
import Footer from './Footer';
import Link from 'next/link';

const HomePage = () => {
    const {connectedUser ,MintNFT } =useContext(AppContext);
  return (
    <div className=' bg-[#2b892b] text-black w-screen h-screen font-a'>
      <div className='flex justify-start absolute inset-y-22 w-screen h-screen inset-x-0 ' style={{ opacity: 0.18 }}>
      <Image src="/sadd.gif" layout="fill" objectFit="cover" alt="Sed Pepe" priority={true}/>
      </div>

      <div className="relative z-10 pt-8 flex flex-col items-center justify-center">
        <div className=' gap-4 flex flex-col'>
        <h1 className='font-semibold text-5xl text-center text-white cursor-pointer'>SED PEPE</h1>
        
        <div className='flex items-center pb-1 md:pt-8 pt-2 cursor-pointer justify-center'>  
       
          <Image src='/lgo.png' height={300} width={300} alt="Sed Pepe"/>
        
        </div>
        
        <div className='w-11/12 flex flex-col justify-center text-center items-center md:w-[60rem]'>
          <div className='w-11/12 flex flex-col text-center items-center pt-2 md:pt-8'>
        <p className=' font-medium text-lg text-center text-white pl-6 md:pb-8'> 
        Pepe has become Sad of all the Atrocities of Humanity and Pepe is on the Brink of Devastation. Pepe is 
        very fed up of the World and its ways and is here to change that ! He wants the War to stop ASAP and will help in 
        all possible ways to bring Peace to the world in whatever small way possible.
        </p>
        </div>
        </div>
        </div>

        <div className=' w-11/12 flex justify-center pt-2 md:pt-12 md:w-screen '>
          <div className='bg-[#268426] w-11/12 md:w-[80rem] h-[25.5rem] md:h[22rem] flex flex-col rounded-2xl border-2 drop-shadow-lg text-center pt-4'>
            <h3 className="font-a text-white text-2xl underline pb-2 md:pt-8 md:pb-4">About</h3>
            <div className='flex justify-center p-2'>
              <p className='font-a text-white text-lg w-[55rem] pb-4 md:pt-8'>
              Sed Pepe $SPEPE is a Meme Coin Project on Ethereum L2 Solution
              Arbitrum. He has now come in the form of a Deflationary ERC-20 Token with a 4% tax on Buy/Sell that donates 
              a Percentage of each Buy & Sell for Humanitarian Causes. He also Boasts a Strong Deflationary Mechanism That Burns
              1.5% of each Buy/Sell of $SPEPE. Not Only have he come with a Noble Cause but also with UTILITY unlike other PEPE Versions, 
              $SPEPE will feature a Full Ecosystem down the line that is revolved Around the token including but not limited to De-Fi , NFTs 
              ,NFT-Fi and Many More!   
              </p>
          
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default HomePage