import React from 'react'
import './Footer.css'

import instagram_icon from '../Assets/instagram_icon.png'

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-logo">
        <img src='image/Logo.png' alt='logo'></img>
           
            </div>
            <ul className="footer-links">
                <li>Company</li>
                <li>products</li>
                <li>about</li>
                <li>contact</li>
            </ul>
            <div className="footer-social-icon">
             <div className="footer-social-icon-container">
               <img src={instagram_icon} alt="" />
             </div>
             <div className="footer-social-icon-container">
             <img src={instagram_icon} alt="" />
             </div>
             
            </div>
            <div className="footer-copyright">
                <hr />
                <p>Copyright @2023- All Right Reserve</p>
            </div>
           


    </div>
  )
}

export default Footer