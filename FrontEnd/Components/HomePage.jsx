import React from 'react'
import { useContext } from 'react'
import { AppContext } from '../Api/contextApi';
import S from "../ComponentCSS/PageCSS.module.css"

const HomePage = () => {
    const {connectedUser ,MintNFT } =useContext(AppContext);
  return (
    <div className={S.FullPage}>
        <h1>BUFF RHINO</h1>

        <div>
          <h2>ABOUT</h2>
          <div className={S.paragraph}>
          <p>BUFF RHINO is a Meme Coin Ecosystem 
            and a Wealth Generation Project on 
            Arbitrum that has a 
            Hyperdeflationary ERC-20 Token called 
            BUFF TOKEN and an Exclusive ERC-1155 NFT 
            Collection and A Defi Ecosystem build around 
            it. BUFF Means Everything ++ and we will be 
            committing to a BUFFED UP BURNING for the
            BUFF TOKEN and unlike common Burning Coins which
            under the hood burns only a small amount of the token taxes,
            we will be burning a bulk of token taxes and keep burning till
            only 1% of the Total Supply Remains , i.e Burn 99% of total supply.
          </p>
          <p>
          Along with BUFF RHINO Being a Wealth Generation Project ,
          it is also aimed at being useful to the world. A portion of Token Taxes and Ecosystem Revenue will be
          donated for Noble Works Like Wildlife Conservation Efforts and Disaster Relief Teams and NGOs.This Project is Exclusively made
          to be a Charity Effort for Rhino Conservation as well as other Endangered but not well paid attention to Species.
          </p>
          <p>Why Rhinos Though?</p>
          <p>The Founders Believe Dogs , Cats , Monkeys and Other animals as well as pets are already getting the Attention they Need , well they do deserve it but 
            we it often portrays a Bias of Human Nature to Cute/Adorable Appearances of Animals and we often tend to Ignore the Issues Other Non-Attractive Species face due to us Humans.
          </p>
          </div>
        </div>  
    </div>
  )
}

export default HomePage