import React from 'react'
import { useContext } from 'react'
import { AppContext } from '../Api/contextApi';
import Image from 'next/image';
import Footer from './Footer';
import Link from 'next/link';

const HomePage = () => {
    const {connectedUser ,MintNFT } =useContext(AppContext);
  return (
    <div className=' bg-[#47d147] text-black w-screen h-screen font-a'>
      <div className='flex justify-start absolute inset-y-22 w-full h-full inset-x-0 ' style={{ opacity: 0.18 }}>
      <Image src="/bg.gif" layout="fill" objectFit="cover" />
      </div>

      <div className="relative z-10 pt-8 flex flex-col items-center">
        <div className=' gap-8 flex flex-col'>
        <h1 className='font-semibold text-5xl text-center text-white underline-offset-8 underline cursor-pointer'>SED PEPE</h1>
        
        <div className='flex items-center mx-64 pb-8 cursor-pointer'>  
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

        <div className=' w-screen h-[25rem] flex justify-center pt-24'>
          <div className='bg-[#33cc33] w-[80rem] flex flex-col rounded-2xl border-2 drop-shadow-lg text-center pt-4'>
            <h3 className="font-a text-white text-2xl underline pb-4">About</h3>
            <div className='flex justify-center'>
              <p className='font-a text-white text-lg w-[55rem]'>
              Sed Pepe $SPEPE is a Meme Coin Project on Ethereum L2 Solution
              Arbitrum. Pepe After Witnessing all the Violence , Hatred , Greed and Atrocities Committed by Humanity has 
              become extremely Sad with the Humans. He has now come in the form of a Deflationary ERC-20 Token that donates 
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