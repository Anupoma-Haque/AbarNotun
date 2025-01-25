
import React, { useState } from 'react'
import './Navbar.css'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router';

export const Navbar = () => {
  const [menu,setMenu]=useState("home");
  return (
    <div className='nav'>
         <div className="nav_logo">
          <img src='image/Logo.png' alt='logo'></img>
             
         </div>
         <ul className="nav_menu">
                <li onClick={()=>{setMenu("home")}}><Link style={{textDecoration:'none'}}  to='/'>Home</Link>  {menu=="home"?<hr/>:<></>} </li>
                 <li onClick={()=>{setMenu("shop")}}><Link style={{textDecoration:'none'}} to='/shop'>Shop</Link> {menu=="shop"?<hr/>:<></>}</li>
                 <li onClick={()=>{setMenu("donate")}}><Link style={{textDecoration:'none'}} to='/donate'>Donate</Link> {menu=="donate"?<hr/>:<></>}</li>
                 <li onClick={()=>{setMenu("community")}}><Link style={{textDecoration:'none'}} to='/community'>Community</Link> {menu=="community"?<hr/>:<></>}</li>
         </ul>
         <div  className="nav_login_cart">
                <Link to='/login'> <button>Login</button></Link>  
               <Link to='/cart'> <img src={cart_icon} alt="" /></Link>   
               <div className="nav-cart-count">0</div>
         </div>
    </div>
  )
}
