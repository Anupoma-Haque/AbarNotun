import React, { useContext, useState } from 'react'
import './OrderPlace.css'
import CartTotal from '../comp/CartTotal'
import { assets } from '../comp/Assets/assets'
import { ShopContext } from '../Context/ShopContext'
const OrderPlace = () => {
    const [method,setMethod]=useState('cod');
    const {navigate}= useContext(ShopContext);
  return (
    <div className="order">
        <div className="order2">
            <div className="order3">
                <p>Delivery Information</p>
            </div>
            <div className="info">
                <input type="text" placeholder='First Name' />
                <input type="text" placeholder='Last Name' />
            </div>
            <input type="email" placeholder='Email address' />
            <input type="text" placeholder='street' />
            <div className="info">
                <input type="text" placeholder='City' />
                <input type="text" placeholder='Country' />
            </div>
            <input type="Number" placeholder='Phone' />
        </div>
        <div className="right">
            <div className="right2">
              <CartTotal/>
            </div>
            <div className="payment">
                <p>Payment Method____</p>
                <div className="payment1">
                     <div onClick={()=> setMethod('stripe')} className="payment2">
                     <p className={`payment-method ${method === 'stripe' ? 'bg-green' : ''}`}></p>
                         <img src={assets.stripe_logo} alt="" />
                     </div>
                     <div onClick={()=>setMethod('razorpay')} className="payment2">
                     <p className={`payment-method ${method === 'razorpay' ? 'bg-green' : ''}`}></p>
                         <img src={assets.razorpay_logo} alt="" />
                     </div>
                     <div onClick={()=>setMethod('cod')} className="payment2">
                     <p className={`payment-method ${method === 'cod' ? 'bg-green' : ''}`}></p>
                        <p>Cash on delivery</p>
                     </div>
                </div>
                <div className="order">
                    <button onClick={()=>navigate('./orders')} >Place Order</button>
                </div>

            </div>
        </div>
    </div>
  )
}

export default OrderPlace