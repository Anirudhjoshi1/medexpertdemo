import React, { useState } from 'react';
import AdminSidebar from '../Components/AdminSidebar';
import '../styles/AdminTrainer.css';

const AdminTrainer = () => {
  const [search, setSearch] = useState("");
  const [selectedTrainer, setSelectedTrainer] = useState(null); // For viewing trainer profile
  const [trainers, setTrainers] = useState([
    {
      id: "01",
      name: "Varun Joshi",
      email: "varun.joshi@example.com",
      phone: "9876xx3210",
      specialization: "Cardiology",
      experience: 5,
      topics: ["Beta-Blockers", "Statins"],
      status: "Inactive",
    },
    {
      id: "02",
      name: "Rohit Kapoor",
      email: "rohit.kapoor@example.com",
      phone: "9876xx3211",
      specialization: "Neurology",
      experience: 3,
      topics: ["Epilepsy", "Multiple Sclerosis"],
      status: "Active",
    },
    {
      id: "03",
      name: "Aakash Singh",
      email: "aakash.singh@example.com",
      phone: "987xx43212",
      specialization: "Dermatology",
      experience: 4,
      topics: ["Psoriasis", "Acne Treatments"],
      status: "Inactive",
    },
    {
      id: "04",
      name: "Satish Kumar",
      email: "satish.kumar@example.com",
      phone: "987xx43213",
      specialization: "Orthopedics",
      experience: 6,
      topics: ["Joint Replacement", "Fracture Management"],
      status: "Active",
    },
    {
      id: "04",
      name: "Kamal Gupta",
      email: "Kamal.gupta@example.com",
      phone: "987xx54313",
      specialization: "Dermatology",
      experience: 4,
      topics: ["Joint Replacement", "Fracture Management"],
      status: "Active",
    },
  ]);

  const filteredTrainers = trainers.filter(trainer =>
    trainer.name.toLowerCase().includes(search.toLowerCase())
  );

  const toggleStatus = id => {
    setTrainers(prevTrainers =>
      prevTrainers.map(trainer =>
        trainer.id === id
          ? { ...trainer, status: trainer.status === "Active" ? "Inactive" : "Active" }
          : trainer
      )
    );
  };

  return (
    <div className="dashboard">
      <AdminSidebar />
      <div className="admin-trainees-content">
        <div className="admin-content">
          <div className="trainer-header">
            <h1>Trainers</h1>
            <input
              type="text"
              placeholder="Search trainers..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="trainer-search"
            />
          </div>

          <table className="trainer-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Specialization</th>
                <th>Experience (Years)</th>
                <th> Profile</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {filteredTrainers.length > 0 ? (
                filteredTrainers.map(trainer => (
                  <tr key={trainer.id}>
                    <td style={{ fontWeight: "550" }}>{trainer.name}</td>
                    <td>{trainer.specialization}</td>
                    <td>{trainer.experience}</td>
                    <td>
                      <button className='view-btn-trainer' onClick={() => setSelectedTrainer(trainer)}>
                        View
                      </button>
                    </td>
                    <td>
                      <button
                        className={`status-btn ${trainer.status === "Active" ? "active" : "inactive"}`}
                        onClick={() => toggleStatus(trainer.id)}
                      >
                        {trainer.status}
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="no-data">
                    No trainers found
                  </td>
                </tr>
              )}
            </tbody>
          </table>

          {/* Trainer Profile Modal */}
          {selectedTrainer && (
            <div className="trainer-profile-modal">
              <div className="trainer-profile-content">
                <h2>Trainer Profile</h2>
                <div className="trainer-profile-details">
                <p><strong>Name:</strong> {selectedTrainer.name}</p>
                <p><strong>Email:</strong> {selectedTrainer.email}</p>
                <p><strong>Phone:</strong> {selectedTrainer.phone}</p>
                <p><strong>Trainer ID:</strong> {selectedTrainer.id}</p>
                </div>
                <button onClick={() => setSelectedTrainer(null)} className="close-btn">Close</button>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default AdminTrainer;
