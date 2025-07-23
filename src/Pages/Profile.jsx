import React from "react";
import "../styles/Profile.css";
import Sidebar from "../Components/Sidebar";

const Profile = () => {
  return (
    <>
    <div className="dashboard">
      <Sidebar/>
      <div className="outer-container">
        <div className="profile-container">
          <div className="profile-card">
            <div className="profile-header">
              <div className="profile-image-wrapper">
                <img
                  src="https://i.pravatar.cc/150?img=65"
                  alt="Profile"
                  className="profile-image"
                />
                <button className="edit-btn">✎</button>
              </div>
              <h2 className="profile-name">Sara Tancredi</h2>
              <p className="profile-location">New York, USA</p>
            </div>

            <form className="profile-form">
              <div className="form-group">
                <label>Name</label>
                <input type="text" defaultValue="Sara" />
              </div>
              <div className="form-group">
                <label>Full Name</label>
                <input type="text" defaultValue="Tancredi" />
              </div>
              <div className="form-group">
                <label>Email Address</label>
                <input type="email" defaultValue="Sara Tancredi@gmail.com" />
              </div>
              <div className="form-group">
                <label>Phone Number</label>
                <input type="text" defaultValue="(+98) 9123728167" />
              </div>
              <div className="form-group">
                <label>Location</label>
                <input type="text" placeholder="e.g. New York, USA" />
              </div>
              <div className="form-group">
                <label>Postal Code</label>
                <input type="text" defaultValue="23728167" />
              </div>

              <div className="form-group">
                <label>User Id</label>
                <input type="text" defaultValue="Medx001" />
              </div>

              <div className="form-group">
                <label>Role</label>
                <select name="" id="" className="select1">
                  <option value="User">User</option>
                  <option value="Admin">Admin</option>
                  <option value="Trainer">Trainer</option>
                </select>
              </div>

              <div className="form-footer">
                <button class="button-82-pushable" role="button">
                  <span class="button-82-shadow"></span>
                  <span class="button-82-edge"></span>
                  <span class="button-82-front text">Submit</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default Profile;
