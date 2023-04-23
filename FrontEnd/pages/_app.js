import { ThirdwebProvider } from "@thirdweb-dev/react";
import { ArbitrumGoerli } from "@thirdweb-dev/chains";
import "../styles/globals.css";
import { AppProvider } from "../Api/contextApi";
import NavBarComponent from "../Components/NavBarComponent";
import Header from "../Components/Header";

function MyApp({ Component, pageProps }) {
  return (
    <ThirdwebProvider activeChain= {ArbitrumGoerli}>
    <AppProvider>
    <Header/>
      <NavBarComponent/>
      <Component {...pageProps} />
    </AppProvider>
    </ThirdwebProvider>
  );
}

export default MyApp;
