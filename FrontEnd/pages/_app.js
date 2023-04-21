import { ThirdwebProvider } from "@thirdweb-dev/react";
import "../styles/globals.css";
import { AppProvider } from "../Api/contextApi";
import NavBarComponent from "../Components/NavBarComponent";
import Head from "next/head";
import Header from "../Components/Header";

// This is the chain your dApp will work on.
// Change this to the chain your app is built for.
// You can also import additional chains from `@thirdweb-dev/chains` and pass them directly.
const activeChain = "ethereum";

function MyApp({ Component, pageProps }) {
  return (
    <AppProvider>
    <Header/>
      <NavBarComponent/>
      <Component {...pageProps} />
    </AppProvider>
  );
}

export default MyApp;
