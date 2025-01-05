import React from 'react'
import logo from '../../public/Assets/logo.png'
import whatsappLogo from '../../public/Assets/whatsapp_icon.png'
import instagramLogo from '../../public/Assets/instagram_icon.png'
import pinInterstLogo from '../../public/Assets/pintester_icon.png'
import '../styles/Footer.css'
function Footer() {
  return (
    <div className='footer_container'>
            <div className="app_logo_container">
                <img src={logo} alt="logo" />
                <h1>SHOPPER</h1>
            </div>
            <div >
                <ul className='footer_links'>
                    <li><a className="footer_link"  href="">Company</a></li>
                    <li><a className="footer_link" href="">Products</a></li>
                    <li><a className="footer_link" href="">Offices</a></li>
                    <li><a className="footer_link" href="">About</a></li>
                    <li><a className="footer_link" href="">Contact</a></li>
                </ul>
            </div>
            <div className="footer_logos">
                <img src={instagramLogo} alt="instagramLogo" />
                <img src={pinInterstLogo} alt="pinInterstLogo" />
                <img src={whatsappLogo} alt="whatsappLog" />
            </div>
            <hr />
            <p className="footer_copyright">Copyright @ 2023 - All Right Reserved</p>
    </div>
  )
}

export default Footer