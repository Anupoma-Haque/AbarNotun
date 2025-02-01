import React from 'react'
import './Item2.css'
const Item2 = (props) => {
  return (
    <div className='item'>
           <p>{props.name}</p>
           <div className="item_prices">
            
                {props.text}
            
           </div>
    </div>
  )
}

export default Item2