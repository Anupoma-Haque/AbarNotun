import React, { useContext, useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import { ShopContext } from '../Context/ShopContext';
import { assets } from '../comp/Assets/assets';
import './Product.css'
const Product = () => {

  const {productId}= useParams();
  const {products,addToCart}=useContext(ShopContext)
  const [productData,setProductData]=useState(false);
  const [image,setImage]=useState('')

  const fetchProductData=async()=>{
         products.map((item)=>{
              if(item._id===productId){
                setProductData(item)
               
                setImage(item.image[0])
                return null;
              }
         })
  }
  useEffect(()=>{
    fetchProductData();
  },[productId,products])

 
  return productData ? (
    <div className="product">
      <div className="product-img">
        <div className="image">
           <div className="image-1">
             {
              productData.image.map((item,index)=>(
                <img onClick={()=>setImage(item)} className="image-2" src={item} key={index} alt="" />
              ))
             }
           </div>
           <div className="image-3">
              <img src={image} alt="" />
           </div>
        </div>
        <div className="info">
          <h3>{productData.name}</h3>
          <div className="info-1">
            <img src={assets.star_icon} alt="" />
            <img src={assets.star_icon} alt="" />
            <img src={assets.star_icon} alt="" />
            <img src={assets.star_icon} alt="" />
            <img src={assets.star_dull_icon} alt="" />
            
          </div>
          <p className="price">{productData.price}/-</p>
          <p className="des">{productData.description}</p>
          <button onClick={()=>addToCart(productData._id)} className="button">Add to Cart</button>
          <br />
          <br />
          <hr />
          <div className="more">
            <p>Seller name:Zarin Tasnim</p>
          </div>
        </div>
        
      </div>
      <div className="bottom">
        <div className="bottom-1">
          <b>Description</b>
          <p>Reviews</p>
        </div>
        <div className="descrip">
          <p>Lorem ipsum dolor sit amet consectetur . Id quidem, molestias maxime atque dolores rem aliquam ipsum distinctio veniam sint, laudantium quaerat, molestiae voluptatem eaque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Id quidem, molestias maxime atque dolores rem aliquam ipsum distinctio veniam sint, laudantium quaerat, molestiae voluptatem eaque.</p>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. A, at.ctetur adipisicing elit. A, at.</p>
        </div>
      </div>
        
    </div>
  ):<div className="no"></div>
}

export default Product