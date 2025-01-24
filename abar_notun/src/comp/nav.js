import React from 'react'
import {GiRapidshareArrow} from 'react-icons/gi';
import {FaSearch} from 'react-icons/fa';
import {FiLogIn} from 'react-icons/fi';
import './nav.css'
const Nav = () => {
  return (
    <>
    <div className='header'>
        <div className='top_header'>
            <div className='icon'>
                <GiRapidshareArrow />
            </div>
            <div className='info'>
               <p>Save More, Share More, Care More</p> 
            </div>
        </div>
        <div className='mid_header'>
            <div className='logo'>
                <img src='image/Logo.png' alt='logo'></img>
            </div>
            <div className='search_box'>
               <input type='text' value='' placeholder='search'></input>
               <button> <FaSearch /> </button>
            </div>
            <div className='user'>
                <div className='icon'>
                    <FiLogIn />
                </div>
                <div className='btn'>
                    <button>Login </button>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Nav