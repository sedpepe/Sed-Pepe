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
            and a Wealth Generation Project on Ethereum L2 Solution
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
          <h4>Why Rhinos Though?</h4>
          <p>The Founders Believe Dogs , Cats , Monkeys and Other animals as well as pets are already getting the Attention they Need , well they do deserve it but 
            we feel like it often portrays a Bias of Human Nature for Cute/Adorable Appearances of Animals and we often tend to Ignore the Issues Other Non-Attractive Species face due to us Humans.
            We would like to try change that by Trying to Bring out Rhinos to the world Through Crypto and Memes. Also we Chose Rhino as our theme as the Founders being from Places where Rhinos are Endemic and Witnessing the 
            untold challenges they face and also because we think Rhinos are Cool!
          </p>
          </div>
          <h2>
            Our Features :
          </h2>
          <div className={S.paragraph}>
            <div>
              <h4>BUFF TOKEN :</h4>
              <p>
              BUFF TOKEN is an ERC20 Token that is the Main Currency Within the Ecosystem.It is a Taxed token that has 10% tax on each transaction, the Taxes are Split into Three categories they are : 
              </p>
              <p>
              A: BURN FEE =  WE Vow to BUFF Up the Burning Mechanism for the token Unlike other MEMECOINS. Initially 5% of each Transaction will be Automatically Burned out of the Supply.
              </p>
              <p>
                B: ECOSYSTEM AND OWNER FEE : 3% of each transaction will be reserved for the ECOSYSTEM TO HAVE ACCESS TO. 1% Fee is Further Split in two in the Ratio of 8:2 for Ecosystem and Owner Respectively.
                Ecosystem fee is to be used for Marketing Purposes, Management Purposes as well as other Costs (SUBJECTED TO BUY-BACKS). The Rest 2% is added as Liquidity to BUFF REWARD Token.
              </p>
              <p>
                REWARDS AND DONATIONS PROTOCOL : 2% of Transactions are reserved to Support the UserReward Programs, Staking , Farming and Supporting the Donations for Conservation Programmes as well as Other Humane Donations.
                This Fee is Further Split into 1:1 ratio for Rewards and Donations Respectively
              </p>
            </div>
              <div>
              <h4>BUFF RHINO NFTs:</h4>
              <p> Buff Rhino NFTs are the Exclusive NFT Collection for BUFF Token Ecosystem.
                They are a Collection of ERC1155 NFTs that are set to Provide Many Utilities in the Ecosystem.
                The NFTs will also be Subject to a Royalty of 15% of all Sales, of which 10% will be reserved in the Donation Protocol Pool and Rest is 
                Reserved as Ecosystem Fee and to Support the Reward Protocol
              </p>
              </div>
              <div>
              <h4>STAKING:</h4>
              <h5>NFT Staking</h5>
              <p> 
                ERC1155 Staking Support for BUFF RHINO NFTs rewarding the Staker with BUFF Tokens. NFT staking will also Include Special Bonuses within the Ecosystem.
              </p>
              <h5>BUFF TOKEN Staking</h5>
              <p>
              ERC20 Staking Program with a Dual Token Structure that Rewards BUFF Token Stakers with a Reward Token called "BUFF REWARDS" as well as Special Utilities such as AccessLists and Whitelists.
              </p>
              </div>
              <div>
              <h4>BUFF REWARDS:</h4>
              <p> 
                Buff Rewards is the Secondary Token of BUFF RHINO that is Used to Reward Staking Activities for BUFF Tokens. This Token will only have BUFF TOKENS for Liquidity Pair.
              </p>
              </div>
              {/*<div>
              <h4>BUFFs</h4>
              <p> 
                BUFFs are a Special Collection of Time-Based NFTs that will act as Booster Packs for Getting Higher APY for NFT Staking. Implemented Later with Staking 2.0 (Staking 2.0  is the Planned Overhaul for the Ecosystem Staking Sytem after we Reach 10m Market Cap Milestone)
              </p>
            </div>*/}
          </div>
        </div>  
    </div>
  )
}

export default HomePage