import React from 'react'
import '../styles/Hamburger.css'
import { Icon } from '@iconify/react';

const Hamburger = ({closeHamburger}) => {
  return (
    <div className='ham'>
        <ul>
          <li>HOME</li>
          <li>CONTACT</li>
          <li> <button>LOGIN</button> </li>
          <li> <button>SIGN UP</button></li>          
        </ul>  
        <span onClick={closeHamburger} ><Icon icon="ep:close-bold" className='close'  /></span>     
    </div>
  )
}

export default Hamburger