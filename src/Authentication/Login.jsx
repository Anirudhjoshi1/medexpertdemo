import React from 'react';
import './Login.css';
import medex from '../assets/MedEx.jpeg';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/home');
  };

  return (
    <>
      <p className='info-text warning-text'>
        ⚠️ This is a DEMO only. No data is collected. This is not a real login system.
      </p>
      <div className="login-container">
        <div className="login-box">
          <div className="Login-logo">
            <img src={medex} alt="MedEx Logo" className="login-logo-img" />
          </div>
          <h2 className="login-title">Demo Login</h2>
          <p className="login-subtitle">
            This is a mock login for demonstration only.
          </p>

          {/* Removed the misleading Google button */}

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Email (demo)</label>
              <input
                type="email"
                name="email"
                placeholder="any email will work"
                required
              />
            </div>

            <div className="form-group">
              <label>Password (demo)</label>
              <input
                type="password"
                name="password"
                placeholder="any password will work"
                required
              />
            </div>

            <button type="submit" className="login-btn">Continue</button>
          </form>

          <p className="signup-text">
            This demo does not store or process any real credentials.
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
