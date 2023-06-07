import React from 'react'
import { useContext } from 'react'
import { AppContext } from '../Api/contextApi';
import Image from 'next/image';
import Footer from './Footer';
import Link from 'next/link';

const HomePage = () => {
    const {connectedUser ,MintNFT } =useContext(AppContext);
  return (
    <div className=' bg-[#22b222] min-w-screen min-h-screen font-a text-white'>
      
      <div className='flex justify-start absolute inset-y-22 w-screen min-h-screen inset-x-0 ' style={{ opacity: 0.28 }}>
      <Image src="/newGifs/sedPep.gif" layout="fill" objectFit='cover' alt="Sed Pepe" priority={true}/>
      </div>

      
       
       <div className='flex justify-center md:pt-8 lg:pt-10'> {/*MainO*/}
        
        <div className='title flex pt-4 flex-col justify-center w-9/12 md:w-5/12 lg:w-3/12 text-center gap-2'>
          
          <div className='text-[3rem] justify-center flex bg-[#209820] bg-opacity-60 pt-2 font-bold border border-green-700 drop-shadow-xl p-1 rounded-full font-Production-1 items-center'>
          <h1 className='' >SED PEPE</h1>
          </div>

          <div className='flex justify-center opacity-100 pt-6'>
            <Image src="/SPEPENFTs.gif" height={300} width={300} alt="Sad" className='absolute rounded-2xl border border-black drop-shadow-xl'/>
          </div>
          
          <p className=' text-[2.5rem] text-center justify-center flex pt-80 font-Production-1 md:text-5xl lg:text-[3rem]'> The King Of All Memes is SED!!</p>
        </div>
        
        </div>
        
        <div className='flex p-6 w-full justify-center'>

          <div className=' text-justify drop-shadow-lg w-10/12 rounded-2xl md:w-7/12 lg:w-8/12 flex justify-center flex-col items-center p-8 md:pl-16 md:pr-16 lg:pl-24 lg:pr-24 font-Production-1'>
          
            <h1 className='text-2xl pb-4 underline-offset-4 underline'>ABOUT SED PEPE</h1>
        
            <p className='max-w-full'>Sed Pepe is an ERC20 Meme Coin that Has Actual Utility and A fully Decentralized Ecosystem Built Around it. Pepe Thinks It is Very Sed to Not have Utility
             as a Community Owned Asset, So he Came this time with a Open-To-All Fully Decentralised Platform for Pepe Fans to Post about their Day!! Not Only this Pepe 
             has A loads of Things in Store for His fans that he will give out to most loyal of his Fans.
            </p>
            <p className='pt-1 text-justify text-2xl'>Pepe Is Looks forward for Your Support!!</p>
          
          </div>

        </div>

        <></>

        <></>

      </div>
   
  )
}

export default HomePage