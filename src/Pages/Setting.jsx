import React from 'react'
import '../styles/Setting.css'
import Sidebar from '../Components/Sidebar'
import { useNavigate } from 'react-router-dom'


const Setting = () => {

  const navigate = useNavigate()

  return (
    <>
    <div className='dashboard'>
      <Sidebar/>
    <div className='user-settings'>
      <div className='user-information'>
        <h2 className='user-heading'>Account Informations</h2>
        <hr className='hr' />

        <div className='email-address'>
          <h4>Email Address</h4>
          <h4>a***j@gmail.com</h4>
        </div>

        <p className='address-text'>if you need to change your e-mail address , please contact <a href="#"><u>Customer Service</u></a></p>


        <div className='wallet-wrapper'>
        <div className='wallet-address'>
          <h4>Wallet Address</h4>
          <p className='wallet-text'>Log in with your Preffered Wallet Address</p>
        </div>

        <div className='wallet-button'>
        <button class="button-83-pushable" role="button">
                  <span class="button-83-shadow"></span>
                  <span class="button-83-edge"></span>
                  <span class="button-83-front text">Connect Wallet</span>
        </button>
        </div>


        </div>

      
      </div>

      <div className='user-information'>
        <h2 className='user-heading'>Security Settings</h2>
        <hr className='hr' />

        <div className='email-address'>
          <h4>Google Authenticator 2FA</h4>
          <label className='switch'>
            <input type="checkbox"  />
            <span className='slider round'></span>
          </label>
        </div>

        <p className='address-text'>Use the Authenticator to get verification codes for better security</p>


        <div className='wallet-wrapper'>
        <div className='wallet-address'>
          <h4>Password</h4>
          <p className='wallet-text'>Set a unique for better protection</p>
        </div>

        <div className='wallet-button'>
        <button class="button-83-pushable" role="button">
                  <span class="button-83-shadow"></span>
                  <span class="button-83-edge"></span>
                  <span class="button-83-front text">Set Password</span>
        </button>
        </div>


        </div>

      
      </div>

      <div className='user-device-information'>
        <h2 className='user-heading'>Device and Activities</h2>
        <hr className='hr' />

        <div className='wallet-wrapper'>
        <div className='wallet-address'>
          <h4>Device Management</h4>
          <p className='device-text'>Authorize Device with access to your account</p>
        </div>

        <div className='wallet-button'>
        <button class="button-83-pushable" role="button">
                  <span class="button-83-shadow"></span>
                  <span class="button-83-edge"></span>
                  <span class="button-83-front text">Manage</span>
        </button>


        <button class="button-83-pushable" role="button">
                  <span class="button-83-shadow"></span>
                  <span class="button-83-edge"></span>
                  <span class="button-83-front text" onClick={()=> navigate("/login")}>Logout</span>
        </button>
      
        </div>
        </div>

      
      </div>
      


      


    </div>
    </div>
    </>
  )
}

export default Setting