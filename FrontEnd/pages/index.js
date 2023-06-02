import React,{useContext ,useEffect} from "react";
import { AppContext } from "../Api/contextApi";
import HomePage from "../Components/HomePage";
import LoginPage from "../Components/LoginPage";
import { useRouter } from "next/router";
import { useAddress } from "@thirdweb-dev/react";
import Whitepaper from "../Components/Whitepaper";

export default function Home() {
  const {connectedUser , fetchBalances} =useContext(AppContext);
  return (
    <div>
      <main>
           <HomePage/>
      </main>
    </div>
  );
}
