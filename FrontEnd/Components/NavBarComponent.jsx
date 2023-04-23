import React from 'react'
import { AppContext } from '../Api/contextApi';
import { useContext } from 'react';
import LoginPage from './LoginPage';
import Link from 'next/link';

const NavBarComponent = () => {
    const {connectedUser} =useContext(AppContext);
  return (
    <div>
        <div>
         <LoginPage/>
      </div>
      <div>
      <Link href ={'./'}><button>Home</button></Link>
        <Link href ={'./litepaper'}><button>Litepaper</button></Link>
        <Link href ={'./profile'}><button>Dashboard</button></Link>
      </div>
    </div>
  )
}

export default NavBarComponent