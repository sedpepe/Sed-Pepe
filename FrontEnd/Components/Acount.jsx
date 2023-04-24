import React, { useState } from 'react'

const Acount = ({connectedUser , BuffTokenBalance , CollectionName,TokenSymbol,transferBuffToken}) => {
  const [addressInput , setInputA] = useState("");
  return (
    <div>
      <h3>Address : {connectedUser}</h3>
      <h5>{TokenSymbol} Balance : {BuffTokenBalance}</h5>
      <h4>NFT COLLECTION NAME : {CollectionName}</h4>
      <div>
        <h1>Transfer</h1>
        <input type="text" onChange={(e)=> setInputA(e.target.value)}/>
        <button onClick={()=>transferBuffToken(addressInput , 1000)}>Send</button>
      </div>
    </div>
  )
}

export default Acount