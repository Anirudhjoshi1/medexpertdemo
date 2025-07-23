import React from "react";
import TrainerSidebar from "../Components/TrainerSidebar";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import { FaUser } from "react-icons/fa";
import { useNavigate } from "react-router";

const TrainerReports = () => {
  const data = [
    { name: "Rohit", Trainee: 3, Products: 4 },
    { name: "Kamal", Trainee: 6, Products: 3 },
    { name: "Varun", Trainee: 2, Products: 1 },
    { name: "Aakash", Trainee: 9, Products: 3 },
    { name: "Satish", Trainee: 6, Products: 4 },
  ];

  const data1 = [
    { name: "Yash", Trainee: 3, Products: 4 },
    { name: "Kapil", Trainee: 6, Products: 3 },
    { name: "Arun", Trainee: 2, Products: 1 },
    { name: "Karan", Trainee: 9, Products: 3 },
    { name: "Dherya", Trainee: 6, Products: 4 },
  ];

  const tabledata = [
    { Group: "Group 1", trainees: 20, AverageScore: 7.5 },
    { Group: "Group 1", trainees: 20, AverageScore: 8.5 },
  ];

  const navigate = useNavigate()

  return (
    <>
      <div className="dashboard">
        <TrainerSidebar />
        <div className="report-container">
          {/* Table */}
          <div className="table-card">
            <div className="heading-wrapper">
              <FaUser style={{ fontSize: "18px", color: "#27374D" }} />
              <h2 className="table-heading-Name">Trainees Report</h2>
            </div>
          </div>

          {/* Top Chart */}
          <div className="bar-graph-wrapper">
            <div className="bar-graph-outer">
              <div className="chart-card">
                <h2 className="chart-title"> Group 1 </h2>
                <ResponsiveContainer width={450} height={250}>
                  <BarChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="Trainee" fill="#27374D" />
                  </BarChart>
                </ResponsiveContainer>
              </div>

              {/* Bottom Chart */}
              <div className="chart-card">
                <h2 className="chart-title"> Group 2</h2>
                <ResponsiveContainer width={450} height={250}>
                  <BarChart data={data1}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="Trainee" fill="#27374D" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          <div className="report-table-wrapper">
            <table className="report-table">
              <thead>
                <tr>
                  <th>Groups</th>
                  <th>No of Trainees</th>
                  <th>Average Score</th>
                </tr>
              </thead>
              <tbody>
                {tabledata.map((entry, index) => (
                  <tr
                    key={index}
                    className={index % 2 === 0 ? "even-row" : "odd-row"}
                  >
                    <td>{entry.Group}</td>
                    <td>{entry.trainees}</td>
                    <td>{entry.AverageScore}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "20px",
            }}
          >
            <button onClick={()=>{navigate("/trainer/trainees")}} class="button-83-pushable" >
              <span class="button-83-shadow"></span>
              <span class="button-83-edge"></span>
              <span style={{fontSize:"18px"}} class="button-83-front text"> Check Trainees</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default TrainerReports;
