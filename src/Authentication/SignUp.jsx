import React from 'react';
import './SignUp.css';
import medex from '../assets/MedEx.jpeg'
import {useNavigate} from 'react-router-dom'

const Signup = () => {

  const navigate = useNavigate()

  return (
    <div className="signup-container">
      <div className="signup-box">
        <div className="signup-logo">
          <img src={medex} alt="" className='medex-img' />
        </div>
        <h2 className="signup-title">Sign up</h2>
        <p className="signup-subtitle">
          Enter your details below to create your account and get started.
        </p>

        <form className="signup-form">
          <div className="form-row">
            <div className="form-group">
              <label>Full Name</label>
              <input type="text" placeholder="enter..." />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input type="email" placeholder="example@gmail.com" />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Date of Birth</label>
              <input type="date" />
            </div>
            <div className="form-group">
              <label>Phone Number</label>
              <input type="tel" placeholder="+45 1344-343" />
            </div>
          </div>

          

          <div className="form-row">
            <div className="form-group">
              <label>Password</label>
              <input type="password" placeholder="enter..." />
            </div>
            <div className="form-group">
              <label>Confirm Password</label>
              <input type="password" placeholder="enter..." />
            </div>
          </div>

          <div className="button-row">
            <button type="button" className="cancel-btn">Cancel</button>
            <button type="submit" className="confirm-btn">Confirm</button>
          </div>
        </form>

        <p className="login-link">
          Already have an account? <a href="#" onClick={()=>navigate('/login')}>Login</a>
        </p>
      </div>
    </div>
  );
};

export default Signup;
