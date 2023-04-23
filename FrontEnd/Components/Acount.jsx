import React from 'react'
import { useContext } from 'react'
import { AppContext } from '../Api/contextApi'

const Acount = ({connectedUser , BuffTokenBalance}) => {
  return (
    <div>
      <h3>Address : {connectedUser}</h3>
      <h5>Buff Balance : {BuffTokenBalance}</h5>
    </div>
  )
}

export default Acount