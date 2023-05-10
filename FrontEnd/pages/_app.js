import { ThirdwebProvider } from "@thirdweb-dev/react";
import { ArbitrumGoerli } from "@thirdweb-dev/chains";
import { AppProvider } from "../Api/contextApi";
import NavBarComponent from "../Components/NavBarComponent";
import Header from "../Components/Header";
import "../styles/globals.css";
import Footer from "../Components/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <ThirdwebProvider activeChain= {ArbitrumGoerli}>
    <AppProvider>
    <Header/>
      <NavBarComponent/>
      <Component {...pageProps} />
      {/*<Footer/>*/}
    </AppProvider>
    </ThirdwebProvider>
  );
}

export default MyApp;
