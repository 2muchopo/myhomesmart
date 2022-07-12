import React from 'react'
import lamp from '../asset/images/lamp.png'
import app from '../asset/images/app.svg'
import { Icon } from '@iconify/react'
import '../styles/Footer.css'

const Footer = () => {
  return (

    <footer className='footer'>
        <div className="footer-left">
            <div className="lamp">
                <img src={lamp} alt="Lamp picture" />
            </div>
            <div className="footer-button">
                <button> <Icon icon="ant-design:download-outlined" style={{fontSize:25, position: 'absolute', top: 5, left: 20}}/> Download App Now</button>
            </div>
            <div className='app'>
                <img src={app} alt="App svg" />
            </div>

        </div>
        <div className="footer-right">
            <div className='footer-right-wrapper'>
                
            <h3>Contact Us</h3>
            <div className="name">
            <label htmlFor="Name">ENTER NAME</label> <br />
            <input type="text" />
            </div>
            <div className="mail">
            <label htmlFor="Mail">ENTER MAIL</label> <br />
            <input type="text" />
            </div> <br />
            <div className="message">
            <textarea name="message" id="" cols="50" rows="6" placeholder='ENTER MESSAGE'/>
            </div> <br /> <br />
            <div className="sign-up">
                <button>Sign Up</button>
            </div>
            </div>
           
        
        </div>

    </footer>
  )
}

export default Footer