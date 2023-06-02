import React from 'react'
import { useContext } from 'react'
import { AppContext } from '../Api/contextApi';
import Image from 'next/image';
import Footer from './Footer';
import Link from 'next/link';

const HomePage = () => {
    const {connectedUser ,MintNFT } =useContext(AppContext);
  return (
    <div className=' bg-[#2b892b] min-w-screen min-h-screen font-a text-white'>
      
      <div className='flex justify-start absolute inset-y-22 w-screen min-h-screen inset-x-0 ' style={{ opacity: 0.18 }}>
      <Image src="/newGifs/sedPep.gif" layout="fill" objectFit='cover' alt="Sed Pepe" priority={true}/>
      </div>

      <div className='main'>
       
       <div className='flex justify-center pb-2 md:pt-8 lg:pt-10'> {/* HEAD INTRO*/}
        <div className='title flex pt-4 flex-col justify-center w-10/12 md:w-5/12 lg:w-3/12 text-center gap-2'>
          <h1 className='text-5xl justify-center flex bg-[#247224] border drop-shadow-xl p-2 rounded-full font-bold'>$SED PEPE</h1>
          <div className='flex justify-center opacity-100 pt-6'>
            <Image src="/SPEPENFTs.gif" height={300} width={300} alt="Sad" className='absolute rounded-2xl border border-black drop-shadow-xl'/>
          </div>
          <p className=' text-2xl justify-center flex pt-80'> The King Of All Memes is SED!!</p>
        </div>
        </div>
        
        <div className='flex p-6 w-full justify-center'>
          <div className=' bg-[#247224] border drop-shadow-lg w-11/12 md:w-8/12 lg:w-5/12 flex text-center justify-center flex-col items-center pt-4 pb-4 pl-2 pr-2'>
          <h1 className='text-2xl pb-4'>ABOUT SED PEPE</h1>
          
          <p>Sed Pepe is an ERC20 Meme Coin that Has Actual Utility and A fully Decentralized Ecosystem Built Around it. Pepe Thinks It is Very Sed to Not have Utility
             as a Community Owned Asset, So he Came this time with a Open-To-All Fully Decentralised Platform for Pepe Fans to Post about their Day!! Not Only this Pepe 
             has A loads of Things in Store for His fans that he will give out to most loyal of his Fans.
          </p>
          <p className='pt-1'>Pepe Is Looks forward for Your Support!!</p>
          </div>
        </div>

        <></>

        <></>

      </div>
    </div>
  )
}

export default HomePage