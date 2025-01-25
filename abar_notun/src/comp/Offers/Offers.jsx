import React from 'react'
import './Offers.css'
import exclusive_image from '../Assets/exclusive_image.png'
export const Offers = () => {
  return (
    <div className='offers'>
        <div className="offers-left">
          <h1>Join Us</h1>
          <h2>for a book thrifting event</h2>
          <p></p>
          <button>Check now</button>
        </div>
       <div className="offers-right">
       <img src='image/event.png' alt='logo'></img>
       </div>
    </div>
  )
}
