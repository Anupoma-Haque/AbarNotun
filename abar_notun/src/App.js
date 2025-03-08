import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import { Navbar } from './comp/Navbar/Navbar'
import Home from './pages/Home'
import Shop from './pages/Shop'
import Donate from './pages/Donate'
import Sell from './pages/Sell'
import Add from './pages/Add'
import Product from './pages/Product'
import Cart from './pages/Cart'
import Login from './pages/Login'
import Community from './pages/Community'
import Footer from './comp/Footer/Footer'
import ShopContextProvider from './Context/ShopContext'
import OrderPlace from './pages/OrderPlace'
import OrdersFile from './pages/OrdersFile'
import { ToastContainer } from "react-toastify";






const App = () => {
  return (
    <div>
      
    <BrowserRouter>
    <ShopContextProvider>
     <Navbar/>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/shop' element={<Shop/>}/>
      <Route path='/add' element={<Add/>}/>
      <Route path='/donate' element={<Donate/>}/>
      <Route path='/sell' element={<Sell/>}/>
      <Route path="/product" element={<Product/>}>
       <Route path=':productId' element={<Product/>}/>
      </Route>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='login' element={<Login/>}/>
      <Route path='/community' element={<Community/>}/>
      <Route path='/order-place' element={<OrderPlace/>}/>
      <Route path='/orders' element={<OrdersFile/>}/>
      </Routes>
      <Footer/>
      </ShopContextProvider>
    </BrowserRouter>
    
    </div>
  )
}

export default App