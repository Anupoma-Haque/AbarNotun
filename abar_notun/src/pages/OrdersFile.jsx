import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import './OrdersFile.css'

const OrdersFile = () => {
    const {products,currency}=useContext(ShopContext);
  return (
    <div className="order">
        <div className="order2">
            <p>My Orders____</p>
        </div>
        <div className="d">
            {
                products.slice(1,4).map((item,index)=>(
                    <div key={index} className="data">
                          <div className="data2">
                            <img src={item.image[0]} alt="" />
                            <div>
                                <p>{item.name}</p>
                                <div className="price">
                                <p>{item.price}{currency}</p>
                                <p>Quantiity:1</p>
                                
                                </div>
                                <p className="pp">Date: <span className="span">25 july,2025</span></p>
                            </div>
                          </div>
                          <div className="ship">
                            <div className="ship2">
                                <p className="p"></p>
                                <p className="p2">Ready to ship</p>
                            </div>
                           {/* <button className="track">Track Order</button>*/}
                          </div>
                    </div>
                ))
            }
        </div>
     </div>
    
  )
}

export default OrdersFile