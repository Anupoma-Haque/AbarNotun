import { createContext, useEffect, useState} from "react";
//import {products} from "../Aset/assets"
import { products } from "../comp/Assets/assets";
import {useNavigate} from "react-router-dom";

export const ShopContext=createContext();

const ShopContextProvider=(props)=>{
    const currency = '/-';
    const delivery_fee=10;
    const [cartItems,setCartItems]=useState({});
    //const backendUrl=import.meta.env.REACT_APP_BACKEND_URL
    //const [token,setToken]=useState('')
    const navigate=useNavigate();

    const addToCart=async(itemId)=>{
        let cartData=structuredClone(cartItems);

        if(cartData[itemId]){
           cartData[itemId]+=1;
        }
        else{
            cartData[itemId]={};
                cartData[itemId]=1;
            
        }
        setCartItems(cartData);

    }
    
    const getCartCount = () => {
        let totalCount = 0;
        for (const productId in cartItems) {
          if (cartItems[productId] > 0) {
            totalCount += cartItems[productId];
          }
        }
        return totalCount;
      };
      
      const updateQuatity=async(itemId,quantity)=>{
        let cartData=structuredClone(cartItems);
        cartData[itemId]=quantity;

        setCartItems(cartData);
}
  
const getCartAmount=()=>{
    let totalAmount=0;
    for (const productId in cartItems) {
        const itemInfo = products.find((product) => product._id === productId);

        if (!itemInfo) continue; // Skip if product is not found

        totalAmount += itemInfo.price * cartItems[productId]; // Directly use the quantity
    }

    return totalAmount;
}

    const value={
            products,currency,delivery_fee,
            cartItems,addToCart,
            getCartCount,updateQuatity,
            getCartAmount,
             navigate,
           // setToken,token
    }
    return(
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}
export default ShopContextProvider;