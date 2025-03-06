import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../Context/ShopContext'
import './Cart.css'
import { assets } from '../comp/Assets/assets';
import CartTotal from '../comp/CartTotal';
const Cart = () => {

  const {products,currency,cartItems,updateQuatity}=useContext(ShopContext);
  const [cartData,setCartData]=useState([]);
  useEffect(() => {
    const tempData = [];
    for (const productId in cartItems) {
      if (cartItems[productId] > 0) {
        tempData.push({
          _id: productId,
          quantity: cartItems[productId]
        });
      }
    }
    setCartData(tempData);
  }, [cartItems]);
  
  return (
    <div className="cart">
      <div className="title">
        <h2>Your Cart_____</h2>
      </div>

      <div>
        {
          cartData.map((item,index)=>{
            const productData=products.find((product)=>product._id===item._id);

            return (
              <div key={index} className="show">
                 <div className="show2">
                  <img src={productData.image[0]} alt="" />
                  <div className="name">
                    <p>{productData.name}</p>
                    <div className="price">
                       <p>{productData.price}{currency}</p>
                    </div>
                  </div>
                 </div>
                 <input onChange={(e)=>e.target.value==='' || e.target.value==='0' ? null: updateQuatity(item._id,Number(e.target.value))} className="input" type="number" min={1} defaultValue={item.quantity}/>
                 <img onClick={()=>updateQuatity(item._id,0)} className="bin" src={assets.bin_icon} alt="" />
              </div>
            )
          })
        }
      </div>
      <div className="total">
        <div className="total2">
        <CartTotal/>
        </div>
        <div className="order">
           <button>Proceed to checkout</button>
        </div>
      </div>

    </div>

  )
}

export default Cart
