import React from 'react'
import S from "../ComponentCSS/PageCSS.module.css"

const Whitepaper = () => {
  return (
    <div className={S.FullPage}>
      <h1>WHITEPAPER</h1>
      
      <h2>Tokenomics of BUFF ECOSYTEM</h2>
      <p>BUFF Ecosystem is Comprised of Multiple ERC Standard Tokens and is Designed with Sustainability in Mind that 
        does not dampen growth. We Determined that the Ecosystem Tokens should follow a Deflationary/Fixed Supply Token Econimic Model
        that also has a Auto-Burn System on Every Transaction, i.e 4% of every Transaction is Burned.
        The Ecosystem will flaunt a dual-token system for erc-20 standard in order to keep inflationary pressure on the primary "BUFF TOKEN"
        from farming and Staking Activities, A Primary Token "BUFF" will serve to be the Currency to use within the Ecosystem , and a Secondary Token "BUFF-R"
        will serve the purpose to reward BUFF Ecosystem Users.The BUFF-R will be only have one Currency ie the Primary "BUFF" as it's liquidity pair and the Liquidity will be Sourced from
        Token Tax as well as a Ecosystem Revenue.The BUFF Ecosystem will also Flaunt it's Exclusive Collection of NFTs that are set to provide multiple Exclusive Benefits for it's Holders including
        but not Limited to NFT-Fi and many more. 
      </p>
      <div>
      <h2>1: BUFF TOKEN (BUFF) =</h2>
      <p>BUFF TOKEN is a Hyperdeflationary ERC20 Token that has a 10% on every transaction and a Total Supply of 10bn Tokens.
        It is a Taxable erc-20 token with a Hyper-Deflationary Token Model and will serve as the Primary/Main Token to be used withing the 
        Ecosystem.
        <h6>The Token has 3 Taxes on Each Transaction that amounts to a Total 10% Tax, They Are:</h6> 
        <p>1: Ecosytem Tax : 4% of Each Transaction is reserved for the Ecosystem.</p>
        <p>2: BUFF-R Liquidity Tax : 2% of Each Transaction is used to buy-back and add Liquidity to BUFF-R Liquidity Pair. 100% of BUFF-R tokens that are bought back will be burned.</p>
        <p>3: Burn Tax : 4% of Each Transaction is Burned out of the Supply forever.</p>

        <h6>Other Features :</h6>
        <p>1: Anti-Flash Dump System = Every Transaction will have a Limit of 2% of max supply. This is to Ensure Whale Manipulation is controlled to an Extent and Prevent Sudden dumps on the Community.</p>
        <p>2: Anti-Hoarde System = A wallet can only hold upto 5% of max supply at a time , This is to Prevent Extreme Concentration of Wealth to just Few Rich People.</p>
      </p>
      </div>
      <div>
        <h2>BUFF REWARDS (BUFF-R)</h2>
        <p>BUFF Rewards is a HyperDeflationary Farming/Reward Token for the BUFF RHINO ECOSYSTEM</p>
      </div>

      <h2>Initial Token Distribution</h2>
      <div className="chart">
        <p>1:Ecosystem Reserves/Vault {":"} 2,000,000,000 BUFF (30%)</p>
        <p>2:Presale : 1,500,000,000 BUFF (15%)</p>
        <p>3:Reserved for BUFF-R Liquidity : 1,000,000,000 BUFF (10%) (Initial Liquidity 2% = 200,000,000 and reserved for liquidity 8% = 800,000,000 )</p>
        <p>4:Reserved for BUFF Liquidity : 3,000,000,000 BUFF (30%)</p>
        <p>5:Community Incentives : 500,000,000 BUFF (5%)</p>
        <p>6:Team Holdings : 500,000,000 BUFF (5%)</p>
        <p>7:Charity : 500,000,000 BUFF(5%) </p>
      </div>
      
      <h4>Token Taxes, Ecosystem Holdings & Vesting Structure </h4>
    </div>
  )
}

export default Whitepaper