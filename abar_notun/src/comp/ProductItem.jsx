import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { Link } from 'react-router-dom';

const ProductItem = ({id,image,name,price}) => {
    //const {currency}=useContext(ShopContext);
  return (
   <Link className="product-item" to={`/Product/${id}`}>
       <div className="productItem">
        <img src={image[0]} alt="" />
       </div>
       <p className="name">{name}</p>
       <p className="price">{price}</p>
   </Link>
  )
}

export default ProductItem