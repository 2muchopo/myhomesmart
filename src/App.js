import './App.css';
import Header from './Components/Header';
import Main from './Components/Main';
import Section from './Components/Section';
import Article from './Components/Article';
import Footer from './Components/Footer'
import Hamburger from './Components/Hamburger';
import {useState} from 'react'



function App() {

    const [open, setOpen] = useState(false)

    const clickHamburger = () => {
        setOpen(true)
        console.log('open')
    }

    const closeHamburger = () => {
      setOpen(false)
      console.log('closed')
    }

  return (
    <div className="App">
      {open ? <Hamburger closeHamburger = {closeHamburger}/> : 
     
      <div>
      <Header clickHamburger = {clickHamburger}/>
      <Main/>
      <Section/>
      <Article/>
      <Footer/>
      </div>}
      
      
      
    </div>
  );
 }

export default App;
