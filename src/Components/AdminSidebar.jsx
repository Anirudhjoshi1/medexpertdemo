import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';
import { AiFillProduct } from 'react-icons/ai';
import { IoSettings } from 'react-icons/io5';
import { HiMiniUserCircle } from 'react-icons/hi2';
import '../styles/Sidebar.css';
import medex from '../assets/MedEx.jpeg'

const AdminSidebar = () => {
  const navigate = useNavigate();
  const location = useLocation(); // 👈 Get current path

  // Helper to check active route
  const isActive = (path) => location.pathname === path;

  return (
    <div className='menu'>
      <div className='logo'>
        <img src={medex} className='sidebar-logo' />
        <h2>Med<span className='spann'>X</span>pert</h2>
      </div>

      <div className='menu--list'>
        <a
          className={`item ${isActive('/') ? 'active' : ''}`}
          onClick={() => navigate('/admin/home')}
        >
          <FaHome className='icon' />
          Home
        </a>

        <a
          className={`item ${isActive('/profile') ? 'active' : ''}`}
          onClick={() => navigate('/admin/trainers')}
        >
          <HiMiniUserCircle className='icon' />
          Trainers
        </a>

        <a
          className={`item ${isActive('/product') ? 'active' : ''}`}
          onClick={() => navigate('/admin/trainees')}
        >
          <HiMiniUserCircle className='icon' />
          Trainees
        </a>


        <a
          className={`item ${isActive('/settings') ? 'active' : ''}`}
          onClick={() => navigate('/admin/report')}
        >
          <AiFillProduct className='icon' />
          Reports
        </a>


        <a
          className={`item ${isActive('/settings') ? 'active' : ''}`}
          onClick={() => navigate('/admin/setting')}
        >
          <IoSettings className='icon' />
          Settings
        </a>
      </div>
    </div>
  );
};

export default AdminSidebar;
