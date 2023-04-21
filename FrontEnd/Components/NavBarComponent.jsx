import React from 'react'
import { AppContext } from '../Api/contextApi';
import { useContext } from 'react';
import LoginPage from './LoginPage';

const NavBarComponent = () => {
    const {connectedUser} =useContext(AppContext);
  return (
    <div>
        <div>
          Navbar
         <LoginPage/>
      </div>
    </div>
  )
}

export default NavBarComponent