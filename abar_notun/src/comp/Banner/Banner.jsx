import React from 'react'
import './Banner.css'
import arrow_icon from '../Assets/arrow.png'
//import hero_image from '../Assets/hero_image.png'
//import Bannerlogo from '../Assets/Bannerlogo.png'

const Banner = () => {
  return (
    <div className='banner'>
         <div className="banner-left">
               <h2>Abar Notun</h2>
               <div>
                <div className="banner-icon">
                    <p>Lifting lives</p>
                    
                </div>
                <p>Building  COMMUNITY</p>
                
               </div>
               <div className="banner-latest">
             
                <div>See latest Events</div>
                <img src={arrow_icon} alt="" />
               </div>
         </div>
         <div className="banner-right">
         <img src='image/banner.png' alt="" />

         </div>
    </div>
  )
}

export default Banner