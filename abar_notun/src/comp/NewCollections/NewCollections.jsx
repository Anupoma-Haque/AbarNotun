import React from 'react'
import './NewCollections.css'
import new_collection from '../Assets/new_collections'
import Item2 from '../Item/Item2'
const NewCollections = () => {
  return (
    <div className='new-collections'>
        <h1>Our reveiws</h1>
        <hr />
    <div className="collections">
        {new_collection.map((item,i)=>{
            return <Item2 key={i} id={item.id} name={item.name} image={item.image} text={item.text}/>
        })}
    </div>
    </div>
  )
}

export default NewCollections