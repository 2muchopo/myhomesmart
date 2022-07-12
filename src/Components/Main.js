import React from 'react'
import dots from '../asset/images/dots.svg'
import '../styles/Main.css'
import { Icon } from '@iconify/react';

const Main = () => {
  return (
    <main className='main'>
        
        <div className='dots'>
        <img src={dots} alt="dots logo" />
        </div>
        
        <div  className= 'content'>
            <div className="circle"><Icon icon="fluent:key-16-filled" style={{fontSize: 50}} /></div>
            <h2>Safe</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis, vero? </p> 
        </div>
        <div className= 'content'>
            <div className="circle"><Icon icon="ci:paypal" style={{fontSize: 50}} /></div>
            <h2>Easy Payments</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, dicta!</p>
        </div>
        <div className= 'content'>
            <div className="circle"><Icon icon="fa6-solid:lightbulb" style={{fontSize: 50}} /></div>
            <h2>Anytime</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. At, unde!</p>
        </div>
        <div className='dots-1'>
        <img src={dots} alt="dots logo" />
        </div>
            
        
    </main>
  )
}

export default Main