// src/pages/Home.jsx
import React from "react";
import "../styles//Home.css"; // We’ll write CSS here separately
import heart from "../assets/heart.webp";
import { useNavigate } from "react-router-dom";
import Sidebar from "../Components/Sidebar";

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="dashboard">
        <Sidebar />

        <section className="home-container">
          <div className="home-content">
            <h1 className="main-heading">
              Next-Gen AI for Medical Formulations <br /> Train, Validate, and
              Improve in Real-Time
            </h1>
            <p>
              Designed for pharmaceutical experts and medical professionals,
              this AI tool reviews formulations, flags inconsistencies, and
              helps you train models to refine and validate medicinal compounds
              faster than ever.
            </p>

            <div className="home-buttons">
              
              <button class="hm-btn" onClick={() => navigate("/product")}>
                Start Now
              </button>
              <button class="hm-btn" onClick={() => navigate("/report")}>
                View Performance
              </button>
            </div>
          </div>

          <div className="home-animation">
            <img className="img-hai" src={heart} alt="heart image" />
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
