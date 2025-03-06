import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import './CartTotal.css'
const CartTotal = () => {

    const {currency,delivery_fee,getCartAmount}=useContext(ShopContext);
  return (
    <div className="cart">
        <div className="cart2">
            <p>Cart Total___</p>
        </div>
        <div className="total">
            <div className="total2">
                <p>Subtotal</p>
                <p>{getCartAmount()}{currency}</p>
            </div>
            <hr />
            <div className="total2">
                <p>Shippping fee</p>
                <p>{delivery_fee}{currency}</p>
            </div>
            <hr />
            <div className="total2">
                <b>Total</b>
                <b>{getCartAmount()===0?0:getCartAmount()+delivery_fee}{currency}</b>
            </div>
        </div>
    </div>
  )
}

export default CartTotal