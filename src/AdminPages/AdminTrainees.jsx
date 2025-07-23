import React, { useState } from "react";
import AdminSidebar from "../Components/AdminSidebar";
import "../styles/AdminTrainees.css";
import { IoIosRemoveCircle } from "react-icons/io";
import { FaEdit } from "react-icons/fa";
import { FaSave } from "react-icons/fa";

const AdminTrainees = () => {
  const [search, setSearch] = useState("");
  const [trainees, setTrainees] = useState([
    { id: 1, name: "Anurishi , Aakriti", trainer: "Rohit" },
    { id: 2, name: "Rahul , Devesh , Kapil", trainer: "Kamal" },
    { id: 3, name: "Neha , Abhisekh ", trainer: "Varun" },
    { id: 4, name: "Tanya , diksha , Sonam", trainer: "Aakash" },
    { id: 5, name: "Divya , Aditya , Naman", trainer: "Satish" },
  ]);

  const [trainers] = useState(["Rohit", "Kamal", "Varun" ,"Aakash" ,"Satish"]); // Sample trainers
  const [selectedTrainer, setSelectedTrainer] = useState("");
  const [selectedTraineeId, setSelectedTraineeId] = useState(null);

  const filteredTrainees = trainees.filter((trainee) =>
    trainee.name.toLowerCase().includes(search.toLowerCase())
  );

  // ✅ Assign or Update Trainer
  const handleAssignTrainer = (traineeId, newTrainer) => {
    setTrainees((prevTrainees) =>
      prevTrainees.map((trainee) =>
        trainee.id === traineeId ? { ...trainee, trainer: newTrainer } : trainee
      )
    );
    setSelectedTrainer(""); // Reset dropdown
    setSelectedTraineeId(null);
  };

  // ✅ Delete Trainer Assignment
  const handleDeleteTrainer = (traineeId) => {
    setTrainees((prevTrainees) =>
      prevTrainees.map((trainee) =>
        trainee.id === traineeId
          ? { ...trainee, trainer: "Not Assigned" }
          : trainee
      )
    );
  };
  return (
    <>
      <div className="dashboard">
        <AdminSidebar />
        <div className="admin-trainees-content">
          <div className="admin-trainees-header">
            <h1>Trainees</h1>
          </div>

          <input
            type="text"
            placeholder="Search trainees..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="search-trainees-input"
          />

          <table className="admin-trainees-table">
            <thead>
              <tr>
                <th>Trainee Name</th>
                <th>Assigned Trainer</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredTrainees.map((trainee) => (
                <tr key={trainee.id}>
                  <td>{trainee.name}</td>
                  <td>
                    {selectedTraineeId === trainee.id ? (
                      <select
                        value={selectedTrainer}
                        onChange={(e) => setSelectedTrainer(e.target.value)}
                        className="select-trainer-dropdown"
                      >
                        <option value="">Select Trainer</option>
                        {trainers.map((trainer, index) => (
                          <option key={index} value={trainer}>
                            {trainer}
                          </option>
                        ))}
                      </select>
                    ) : (
                      trainee.trainer
                    )}
                  </td>
                  <td>
                    {selectedTraineeId === trainee.id ? (
                      <button
                        className="button-save"
                        onClick={() =>
                          handleAssignTrainer(trainee.id, selectedTrainer)
                        }
                      >
                        <FaSave /> Save
                      </button>
                    ) : (
                      <>
                        <button
                          className="button-edit"
                          onClick={() => setSelectedTraineeId(trainee.id)}
                        >
                          <FaEdit /> Edit
                        </button>
                        <button
                          className="button-delete"
                          onClick={() => handleDeleteTrainer(trainee.id)}
                        >
                          <IoIosRemoveCircle /> Remove 
                        </button>
                      </>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default AdminTrainees;
