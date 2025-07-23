import React from 'react'
import TrainerSidebar from '../Components/TrainerSidebar'
import { useNavigate } from 'react-router'
import heart from '../assets/heart.webp'

const TrainerHome = () => {
  const navigate = useNavigate()

  return (
    <>
    <div className="dashboard">
        <TrainerSidebar/>
        <section className="home-container">
              <div className="home-content">

                <h1 style={{marginBottom:"50px", fontSize:"45px" , width:"800px"}}>Welcome, Anirudh Joshi</h1>
         
              <h1 className='main-heading'>Empower Your Trainees –  <br /> Track Progress & Optimize Performance</h1>
                <p>
                Built for medical and pharmaceutical trainers, this platform helps you monitor trainee progress, evaluate performance, and streamline skill development with AI-powered insights.


                </p>
        
                <div className='home-buttons'>
                  <button class="hm-btn" onClick={()=> navigate("/trainer/trainees")} >Assigned Trainees </button>
                  <button class="hm-btn" onClick={()=> navigate("/trainer/report")} >View Reports</button>
                </div>
              </div>
        
              <div className="home-animation">
                <img className='img-hai'  src={heart} alt="heart image" />
              </div>
            </section>
    </div>
    </>
  )
}

export default TrainerHome