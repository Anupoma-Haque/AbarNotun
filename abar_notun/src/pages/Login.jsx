import React, { useContext, useState } from 'react';
import './Login.css'; // Ensure this file exists in the correct path
import { ShopContext } from '../Context/ShopContext';
//import axios from 'axios';

const Login = () => {
  // State to toggle between 'Sign Up' and 'Login'
  const [currentState, setCurrentState] = useState('sign Up');
  //const {token,setToken,navigate,backendUrl} =useContext(ShopContext)

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
    //console.log(`${currentState} form submitted`);
    try{
       if(currentState==='Sign Up'){
           //const response=await axios.post(backendUrl + '/api/user/register' , {name,email,password})
          // console.log(response.data);
       }else{

       }

    }catch(error){

    }
  };


  return (
    <form onSubmit={onSubmitHandler} className="login-form">
      {/* Header Section */}
      <div className="form-header">
        <p className="form-title">{currentState}</p>
        <hr className="form-divider" />
      </div>

      {/* Conditional Rendering for 'Name' Input */}
      {currentState === 'Login' ? null : (
        <input onChange={handleChange} type="text" className="form-input" name='name' placeholder="Name" />
      )}

      {/* Email and Password Inputs */}
      <input onChange={handleChange}  type="email" className="form-input" email='email' placeholder="Email" required />
      <input onChange={handleChange}  type="password" className="form-input" password='password' placeholder="Password" required />

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

