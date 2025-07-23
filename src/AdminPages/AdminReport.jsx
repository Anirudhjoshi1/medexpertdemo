import React from 'react'
import AdminSidebar from '../Components/AdminSidebar'
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid, ResponsiveContainer,
} from 'recharts';
import { FaUser } from "react-icons/fa";

const AdminReport = () => {

  const data = [
    { name: 'Rohit', Trainee: 3 , Products: 4 },
    { name: 'Kamal', Trainee: 6 , Products: 3 },
    { name: 'Varun', Trainee: 2 , Products: 1  },
    { name: 'Aakash', Trainee: 9 , Products: 3 },
    { name: 'Satish', Trainee: 6 , Products: 4  },
  ];
  return (
    <>
    <div className="dashboard">
        <AdminSidebar/>
        <div className="report-container">
              {/* Table */}
              <div className="table-card">
                <div className='heading-wrapper'>
                <FaUser style={{fontSize:"18px", color:"#27374D"}} />
                <h2 className='table-heading-Name'>Anirudh Joshi</h2>
                </div>
        
              </div>
                    
              {/* Top Chart */}
              <div className='bar-graph-wrapper'>
              <div className='bar-graph-outer'>
              <div className="chart-card">
                <h2 className="chart-title"> Trainer </h2>
                <ResponsiveContainer width={450} height={250}>
                  <BarChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="Trainee" fill="#27374D"  />
                  </BarChart>
                </ResponsiveContainer>
              </div>
        
              {/* Bottom Chart */}
              <div className="chart-card">
                <h2 className="chart-title"> Products</h2>
                <ResponsiveContainer width={450} height={250}>
                  <BarChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="Products" fill="#27374D" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
              </div>
              </div>

              <div className='report-table-wrapper'>
                <table className="report-table">
                  <thead>
                    <tr>
                      <th>Trainers</th>
                      <th>No of Trainees</th>
                      <th>Current Products</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((entry, index) => (
                      <tr key={index} className={index % 2 === 0 ? 'even-row' : 'odd-row'}>
                        <td>{entry.name}</td>
                        <td>{entry.Trainee}</td>
                        <td>{entry.Products}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                </div>
              
        
              
            </div>
    </div>
    </>
  )
}

export default AdminReport