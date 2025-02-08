import React, { useState } from 'react';
import './Login.css'; // Ensure this file exists in the correct path

const Login = () => {
  // State to toggle between 'Sign Up' and 'Login'
  const [currentState, setCurrentState] = useState('Sign Up');

  // Prevent default form submission
  const onSubmitHandler = async (event) => {
    event.preventDefault();
    console.log(`${currentState} form submitted`);
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
        <input type="text" className="form-input" placeholder="Name" />
      )}

      {/* Email and Password Inputs */}
      <input type="email" className="form-input" placeholder="Email" required />
      <input type="password" className="form-input" placeholder="Password" required />

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
