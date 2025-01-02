import React from 'react'
import arrow from '../../public/Assets/arrow.png'
import waveing from '../../public/Assets/hand_icon.png'
import hero from '../../public/Assets/hero_image.png'
import '../styles/HomePage.css'

function HomePage() {
  return (
    <div className='homepage_content'>
        <div className="homepage_left">
            <p>NEW ARRIVALS ONLY</p>
            <h1 className='welcome_notes'>new<img src={waveing} alt="" className='waveing' /></h1>
            
            <h1 className='welcome_notes'>collections </h1>
            <h1 className='welcome_notes'>for everyone</h1>
            <button className='latest_collection_button'>Latest Collection &nbsp;&nbsp;&nbsp;<img src={arrow} alt="arrow" id="arrow"/></button>

        </div>
        <div className="homepage_right">
            <img src={hero} alt="hero" id="hero"/>
        </div>
    </div>
  )
}

export default HomePage