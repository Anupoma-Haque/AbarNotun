
import React, { useContext, useState } from 'react'
import './Navbar.css'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router';
import { ShopContext } from '../../Context/ShopContext';

export const Navbar = () => {
  const [menu,setMenu]=useState("home");
  const {getCartCount,navigate,token,setToken,setCartItems}=useContext(ShopContext);

  const logout=()=>{
     localStorage.removeItem('token')
     setToken('')
     //setCartItems({})
     navigate('/login')
  }
  return (
    <div className='nav'>
         <div className="nav_logo">
          <img src='image/Logo.png' alt='logo'></img>
             
         </div>
         <ul className="nav_menu">
                <li onClick={()=>{setMenu("home")}}><Link style={{textDecoration:'none'}}  to='/'>Home</Link>  {menu==="home"?<hr/>:<></>} </li>
                 <li onClick={()=>{setMenu("shop")}}><Link style={{textDecoration:'none'}} to='/shop'>Shop</Link> {menu==="shop"?<hr/>:<></>}</li>
                 <li onClick={()=>{setMenu("add")}}><Link style={{textDecoration:'none'}} to='/add'>Add</Link> {menu==="add"?<hr/>:<></>}</li>
                 <li onClick={()=>{setMenu("community")}}><Link style={{textDecoration:'none'}} to='/community'>Community</Link> {menu==="community"?<hr/>:<></>}</li>
         </ul>
         <div className="nav_login_cart">
                <p onClick={()=>token? navigate('/orders'):navigate('/login')}>Orders</p>
                <Link to='/login'> <p>Login</p></Link>  
                <p onClick={logout}>Logout</p>
               <Link to='/cart'> 
               <img src={cart_icon} alt="" />
               
               
               </Link>   
               <div className="nav-cart-count">{getCartCount()}</div>
         </div>
    </div>
  )
}
