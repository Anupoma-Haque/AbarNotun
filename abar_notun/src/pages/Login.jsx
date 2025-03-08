import React, { useContext, useEffect, useState } from 'react';
import './Login.css'; // Ensure this file exists in the correct path
import { ShopContext } from '../Context/ShopContext';
import axios from 'axios';
import {toast} from "react-toastify"

const Login = () => {
  // State to toggle between 'Sign Up' and 'Login'
  const [currentState, setCurrentState] = useState('Login');
  const {token,setToken,navigate,backendUrl} =useContext(ShopContext)

  const [name,setName]=useState('')
  const [password,setPassword]=useState('')
  const [email,setEmail]=useState('')
 const [loginInfo,setLoginInfo]=useState({
              name:'',
              email:'',
              password:''
 })
  const handleChange=(e)=>{
          const {name,value}=e.target;
         console.log(name,value);
         const copyLoginInfo={...loginInfo};
          copyLoginInfo[name]=value;
         setLoginInfo(copyLoginInfo);
  }
  console.log('login-> ' +loginInfo)

  // Prevent default form submission
  const onSubmitHandler = async (event) => {
    event.preventDefault();
    try{
       if(currentState==='Sign Up'){
           const response=await axios.post(backendUrl + '/api/user/register' , {name,email,password})
           if(response.data.success){
            setToken(response.data.token)
            localStorage.setItem('token',response.data.token)
           }
           else{
              toast.error(response.data.message)
           }
       }else{
             const response= await axios.post(backendUrl + '/api/user/login',{email,password})
            // console.log(response.data.message)
            if(response.data.success)
            {
              setToken(response.data.token)
              localStorage.setItem('token',response.data.token)
            }
            else{
              toast.error(response.data.message)
            }
       }
      

    }catch(error){
          console.log(error)
          toast.error(error.message)
    }
  };

  useEffect(()=>{
       if(token){
        navigate('/')
       }
  },[token])
  return (
    <form onSubmit={onSubmitHandler} className="login-form">
      {/* Header Section */}
      <div className="form-header">
        <p className="form-title">{currentState}</p>
        <hr className="form-divider" />
      </div>

      {/* Conditional Rendering for 'Name' Input */}
      {currentState === 'Login' ? '' : <input onChange={(e)=>setName(e.target.value)} value={name}  type="text" className="form-input"  placeholder="Name" required/>
      }

      {/* Email and Password Inputs */}
      <input onChange={(e)=>setEmail(e.target.value)} value={email}  type="email" className="form-input"  placeholder="Email" required />
      <input onChange={(e)=>setPassword(e.target.value)} value={password}  type="password" className="form-input"  placeholder="Password" required />

      {/* Links for Forgot Password and Toggling States */}
      <div className="form-links">
        <p className="form-link">Forgot your password?</p>
        {currentState === 'Login' ? (
          <p onClick={() => setCurrentState('Sign Up')} className="form-link">
            Create account
          </p>
        ) : (
          <p onClick={() => setCurrentState('Login')} className="form-link">
            Login Here
          </p>
        )}
      </div>

      {/* Submit Button */}
      <button className="form-button">{currentState === 'Login' ? 'Sign In' : 'Sign Up'}</button>
    </form>
  );
};

export default Login;

