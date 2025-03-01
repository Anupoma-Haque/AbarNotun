import React,{useContext, useEffect, useState} from 'react'
import { ShopContext } from '../Context/ShopContext'
import './Shop.css'
//import Item from '../comp/Item/Item';
import { products} from '../comp/Assets/assets';
import { assets } from '../comp/Assets/assets';
import ProductItem from '../comp/ProductItem';
const Shop = () => {
  
  const{products}=useContext(ShopContext);
  const [showFilter,setShowFilter]=useState(false);
  const [filterProducts,setFilterProducts]=useState([]);
  const [category,setCategory]=useState([]);
  const [subCategory,setSubCategory]=useState([]);
  const [sortType,setSortType]=useState('relavent')

  const toggleCategory = (e) =>{
    if(category.includes(e.target.value)){
      setCategory(prev=>prev.filter(item=>item!=e.target.value))
    }
    else{
      setCategory(prev=>[...prev,e.target.value])
    }
  }
  const toggleSubCategory = (e) =>{
    if(subCategory.includes(e.target.value)){
      setSubCategory(prev=>prev.filter(item=>item!=e.target.value))
    }
    else{
      setSubCategory(prev=>[...prev,e.target.value])
    }
  }
  
  const applyFilter=()=>{
    let productsCopy=products.slice();

    if(category.length>0){
      productsCopy=productsCopy.filter(item=>category.includes(item.category));
    }
    if(subCategory.length>0){
      productsCopy=productsCopy.filter(item=>subCategory.includes(item.subCategory))
    }

    setFilterProducts(productsCopy)
  }
  
  const sortProduct = () =>{
    let fpCopy= filterProducts.slice();
  
    switch(sortType){
      case 'low-high':
        setFilterProducts(fpCopy.sort((a,b)=>(a.price-b.price)));
        break;
  
        case 'high-low':
          setFilterProducts(fpCopy.sort((a,b)=>(b.price-a.price)));
          break;
       
          default:
            applyFilter();
            break;
        
    }
  }
    
  


  useEffect(()=>{
    applyFilter();
  },[category,subCategory])

  useEffect(()=>{
    sortProduct();
     },[sortType])

  return (
    <div className="shop">
         <div className="filter">
             <p onClick={()=>setShowFilter(!showFilter)}>Filters
              <img className={`img ${showFilter ? 'rotate-90' : ''}`} src={assets.dropdown_icon} alt="" />
             </p>

             <div className={`category ${showFilter ? '' : 'hidden'} sm-block`}>
                     <p>Categories</p>
                     <div className="checkbox">
                      <p> 
                        <input type="checkbox" value={'Men'} onChange={toggleCategory}/>  Men
                      </p>
                      <p> 
                        <input type="checkbox" value={'Women'} onChange={toggleCategory}/>Women
                      </p>
                      <p> 
                        <input type="checkbox" value={'Kids'} onChange={toggleCategory}/>Kids
                      </p>
                     </div>
             </div>
             <div className={`category ${showFilter ? '' : 'hidden'} sm-block`}>
                     <p>Type</p>
                     <div className="checkbox">
                      <p> 
                        <input type="checkbox" value={'Topwear'} onChange={toggleSubCategory}/>Topwear
                      </p>
                      <p> 
                        <input type="checkbox" value={'Bottomwear'} onChange={toggleSubCategory}/>Bottomwear
                      </p>
                      <p> 
                        <input type="checkbox" value={'Winterwear'} onChange={toggleSubCategory}/>Winterwear
                      </p>
                     </div>
             </div>
         </div>


         <div className="right">
          <div className='right-text'>
             <h3>All Collections_____</h3>

             <select onChange={(e)=>setSortType(e.target.value)} className='product-sort'>
              <option value="Relevant">Sort by:Relavant</option>
              <option value="low-high">Sort by:low to high</option>
              <option value="high-low">Sort by:high to low</option>
             </select>
          </div>

          <div className="map-product">
             {
              filterProducts.map((productitem,index)=>(
                <ProductItem key={index} id={productitem._id} image={productitem.image} name={productitem.name} price={productitem.price} />
              ))
             }
          </div>
         </div>
    </div>
  )
}

export default Shop