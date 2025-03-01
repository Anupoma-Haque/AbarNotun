import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../Context/ShopContext'
import './Cart.css'
const Cart = () => {

  const {products,currency,cartItems}=useContext(ShopContext);
  const [cartData,setCartData]=useState([]);
  useEffect(()=>{
         const tempData=[];
         console.log(tempData);
         for(const items in cartItems){
          for(const item in cartItems[items]){
            if(cartItems[items][item]>0){
             tempData.push({
                _id:items,
                quantity:cartItems[items][item]
              })

            }
          }
         }
         setCartData(tempData);
  },[cartItems])
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
                  </div>
                 </div>
              </div>
            )
          })
        }
      </div>

    </div>
  )
}

export default Cart
