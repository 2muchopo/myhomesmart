import React from 'react'
import logo from '../asset/images/logo.svg'
import couch from '../asset/images/couch.png'
import app from '../asset/images/app.svg'
import { Icon } from '@iconify/react';
import '../styles/Header.css'




const Header = (props) => {

  return (  
        
        <header className='header'>
        <nav className='nav'>
        <div className='link' >
                <h4 >HOME</h4>
                <h4>CONTACT</h4>
            </div>
            <div className='link-button'>
                <button className='login'>LOGIN</button> 
                <button className='sign-up' >SIGN UP</button>
            </div>
        </nav>
        <div className='pictures'>
        <img src={couch} alt="Couch Logo" className='couch'/>
        
        </div>
        <div className='app-center'>
        <img src={app} alt="Logomark Logo" className='app' />
        </div>
        <div className='download'>
            <button ><Icon icon="ant-design:download-outlined"/> Download The App</button>
        </div>
        <img src={logo} alt="Homesmart Logo" className='logo'/> 
        <span onClick={props.clickHamburger}><Icon icon="radix-icons:hamburger-menu" className='hamburger' /></span> 
        

</header> 
    



        

    
    
  )
}

export default Header