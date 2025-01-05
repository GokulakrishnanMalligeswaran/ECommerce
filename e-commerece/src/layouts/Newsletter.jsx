import React from 'react'
import "../styles/Newsletter.css"

function Newsletter() {
  return (
    <div className="newsletter_container">
        <h1 className="newsletter_intro">Get Exclusive Offers On Your Email</h1>
        <p className="newsletter_para">subscribe to our newletter and stay upadated</p>
        <div>
        <input className="newsletter_inputfield" type="email" placeholder='Your Email Id' />
        <button className="newsletter_subscribe_button">Subscribe</button>
        </div>
    </div>
  )
}

export default Newsletter