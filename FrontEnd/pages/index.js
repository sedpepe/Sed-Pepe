import React,{useContext ,useEffect} from "react";
import { AppContext } from "../Api/contextApi";
import HomePage from "../Components/HomePage";
import LoginPage from "../Components/LoginPage";
import { useRouter } from "next/router";
import { useAddress } from "@thirdweb-dev/react";
import MINTPage from "../Components/nftMint";
import Whitepaper from "../Components/Whitepaper";

export default function Home() {
  const {connectedUser , fetchBalances} =useContext(AppContext);
  return (
    <div>
      <main className=' bg-[#101023] text-white'>
           <HomePage/>
      </main>
    </div>
  );
}
