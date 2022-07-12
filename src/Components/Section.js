import React from 'react'
import '../styles/Section.css'
import spotify from '../asset/images/spotify.svg'
import dell from '../asset/images/dell.svg'
import cisco from '../asset/images/cisco.svg'
import disney from '../asset/images/disney.svg'
import deezer from '../asset/images/deezer.svg'
import verizon from '../asset/images/verizon.svg'
import texas from '../asset/images/texas.svg'






const Section = () => {
  return (
    <section className='section'>
        <h1>Our Partners</h1>
        <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum,  dignissimos quisquam ipsa expedita minus ea  porro sequi error repellat architecto.</p>

        <div className='partners' >
            <img src={spotify} alt="Spotify logo" />
            <img src={dell} alt="dell logo" />
            <img src={cisco} alt='cisco logo' />
            <img src={disney} alt='disney logo' />
            <img src={deezer} alt='deeer logo' />
            <img src={verizon} alt="verizon logo" />
            <img src={texas} alt="texas logo" />
        </div>
    </section>
  )
}

export default Section