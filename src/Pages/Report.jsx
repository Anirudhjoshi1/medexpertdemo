import React from 'react';
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid, ResponsiveContainer,
} from 'recharts';
import '../styles/Report.css';
import { FaUser } from "react-icons/fa";
import Sidebar from '../Components/Sidebar';

const data = [
  { name: 'Test 1', Product: 4 , sales: 5 },
  { name: 'Test 2', Product: 6 , sales: 2 },
  { name: 'Test 3', Product: 7 , sales: 3  },
  { name: 'Test 4', Product: 7 , sales: 5 },
  { name: 'Test 5', Product: 10 , sales: 7  },
];

const Report = () => {
  return (
    <>
    
    <div className='dashboard'>
      <Sidebar/>

    <div className="report-container">
      {/* Table */}
      <div className="table-card">
        <div className='heading-wrapper'>
        <FaUser style={{fontSize:"18px", color:"#27374D"}} />
        <h2 className='table-heading-Name'>Sara Tancredu</h2>
        </div>

        <div className='report-table-wrapper'>
        <table className="report-table">
          <thead>
            <tr>
              <th>Test</th>
              <th>Product Knowledge</th>
              <th>Sales Acumen</th>
            </tr>
          </thead>
          <tbody>
            {data.map((entry, index) => (
              <tr key={index} className={index % 2 === 0 ? 'even-row' : 'odd-row'}>
                <td>{entry.name}</td>
                <td>{entry.Product}</td>
                <td>{entry.sales}</td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
      </div>

      
      {/* Top Chart */}
      <div className='bar-graph-wrapper'>
      <div className='bar-graph-outer'>
      <div className="chart-card">
        <h2 className="chart-title"> Product Knowledge</h2>
        <ResponsiveContainer width={450} height={250}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="Product" fill="#27374D"  />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Bottom Chart */}
      <div className="chart-card">
        <h2 className="chart-title"> Sales Acumen</h2>
        <ResponsiveContainer width={450} height={250}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="sales" fill="#27374D" />
          </BarChart>
        </ResponsiveContainer>
      </div>
      </div>
      </div>
      

      
    </div>
    </div>
    </>
  );
};

export default Report;
