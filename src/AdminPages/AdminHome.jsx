import React from 'react';
import AdminSidebar from '../Components/AdminSidebar';
import '../styles/AdminHome.css';
import { IoIosNotifications } from "react-icons/io";
import userImg from '../assets/user.jpg'; // move user.jpg into src/assets/
import { useNavigate } from 'react-router';

const AdminHome = () => {
  const clients = [
    { id: '#001', name: 'Leslie Alexander', email: 'leslie@acme.com', phone: '4', signup: '2023-09-14', type: 'Regular', status: 'Active' },
    { id: '#002', name: 'Ronald Richards', email: 'ronald@summit.com', phone: '4', signup: '2023-09-14', type: 'Premium', status: 'Unactive' },
    { id: '#003', name: 'Brooklyn Simmons', email: 'brooklyn@brightstar.com', phone: '4', signup: '2023-09-14', type: 'Regular', status: 'Unactive' },
    { id: '#004', name: 'Cameron Williamson', email: 'cameron@zenith.com', phone: '4', signup: '2023-09-12', type: 'Premium', status: 'Active' },
    { id: '#005', name: 'Esther Howard', email: 'esther@bastergo.com', phone: '4', signup: '2023-09-12', type: 'Premium', status: 'Active' },
  ]; 

  const users = [{ Name:"Anurshiri Jain"} , 
                 {Name:"Rajat Singh"},
                 {Name:"Divya Joshi"},
                 {Name:"Pankaj Sharma"},
                 {Name:"Tanya Sharma"}];

  const navigate = useNavigate();

  return (
    <>
    <div className='dashboard'>
        <AdminSidebar/>
        
    <div className="admin-home">
      {/* Header */}
      <header className="dashboard-header">
        <div className="menu-title">Dashboard</div>
        <div className="search-user">
          <input type="text" placeholder="Search here" />
          <div className="user-info">
            <img style={{width:"50px", cursor:"pointer"}} src={userImg} alt="User" />
            <div>
              <h4>Anirudh Joshi</h4>
              <small>Admin</small>
            </div>
          </div>
        </div>
      </header>

      {/* Stats Summary */}
      <section className="summary">
        <div className="card highlight">
          <h2>5+</h2>
          <p>Trainers</p>
        </div>
        <div className="card highlight">
          <h2>10+</h2>
          <p>Projects</p>
        </div>
        <div className="card highlight">
          <h2>20+</h2>
          <p>Trainees</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="dashboard-content">
        {/* Recent Projects */}
        <div className="projects">
          <div className="section-header">
            <h3>Assigned Trainer </h3>
            <button onClick={()=>navigate("/admin/trainers")}>See all →</button>
          </div>
          <table>
            <thead>
              <tr>
                <th style={{fontSize:"18px"}}>Trainers</th>
                <th style={{fontSize:"18px"}}>Product</th>
                <th style={{fontSize:"18px"}}>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{fontWeight:"600", fontSize:"16px"}}>Aakash Singh</td>
                <td>Medex</td>
                <td><span className="status review"></span> review</td>
              </tr>
              <tr>
                <td style={{fontWeight:"600", fontSize:"16px"}}>Satish Kumar</td>
                <td>Medex</td>
                <td><span className="status in-progress"></span> in progress</td>
              </tr>
              <tr>
                <td style={{fontWeight:"600", fontSize:"16px"}}>Rohit Kapoor</td>
                <td>Medex</td>
                <td><span className="status pending"></span> pending</td>
              </tr>
              <tr>
                <td style={{fontWeight:"600", fontSize:"16px"}}>Kamal Gupta</td>
                <td>Medex</td>
                <td><span className="status review"></span> review </td>
              </tr>
              <tr>
                <td  style={{fontWeight:"600", fontSize:"16px"}}>Rohit Kapoor</td>
                <td>Medex</td>
                <td><span className="status in-progress"></span> in progress</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* New Customers */}
        <div className="customers">
          <div className="section-header">
            <h3>New  Trainees</h3>
            <button onClick={()=>navigate("/admin/trainees")}>Manage →</button>
          </div>
          <ul>
            {users.map((user, index) => (
              <li key={index}>
                <div style={{marginTop:"20px"}}>
                  <h4>{user.Name}</h4>
                </div>
                <div className="icons" >✉️ 💬</div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
    </div>
    </>
  )
}

export default AdminHome;
