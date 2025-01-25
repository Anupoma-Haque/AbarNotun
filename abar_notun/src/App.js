import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import { Navbar } from './comp/Navbar/Navbar'
import Home from './pages/Home'
import Shop from './pages/Shop'
import Donate from './pages/Donate'
import Product from './pages/Product'
import Cart from './pages/Cart'
import Login from './pages/Login'
import Community from './pages/Community'
const App = () => {
  return (
    <div>
    <BrowserRouter>
     <Navbar/>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/shop' element={<Shop/>}/>
      <Route path='/donate' element={<Donate/>}/>
      <Route path="/product" element={<Product/>}>
       <Route path=':productId' element={<Product/>}/>

      </Route>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='login' element={<Login/>}/>
      <Route path='/community' element={<Community/>}/>


     </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App