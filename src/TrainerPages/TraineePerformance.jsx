import React from 'react';
import { useParams } from 'react-router-dom';
import TrainerSidebar from '../Components/TrainerSidebar';
import '../styles/TraineePerformance.css';

const dummyScores = {
  1: { name: 'Anurishi Jain', salesmanId: 'SLM001', scores: { category: 'Category 1', productKnowledge: 6, salesAcumen: 4 } },
  2: { name: 'Rahul Sharma', salesmanId: 'SLM002', scores: { category: 'Category 1', productKnowledge: 8, salesAcumen: 7 } },
  3: { name: 'Neha Gupta', salesmanId: 'SLM003', scores: { category: 'Category 1', productKnowledge: 7, salesAcumen: 6 } },
  4: { name: 'Kapil dhami', salesmanId: 'SLM004', scores: { category: 'Category 1', productKnowledge: 4, salesAcumen: 8 } },
  5: { name: 'Soham Verma', salesmanId: 'SLM005', scores: { category: 'Category 1', productKnowledge: 9, salesAcumen: 6 } },
  6: { name: 'Ritika Taneja', salesmanId: 'SLM006', scores: { category: 'Category 1', productKnowledge: 9, salesAcumen: 2 } },
  7: { name: 'Aayush taneja', salesmanId: 'SLM007', scores: { category: 'Category 1', productKnowledge: 5, salesAcumen: 6 } },
  8: { name: 'raghav joshi', salesmanId: 'SLM008', scores: { category: 'Category 1', productKnowledge: 3, salesAcumen: 5 } },
  // Add more dummy data as needed
};

const TraineePerformance = () => {
  const { traineeId } = useParams();
  const data = dummyScores[traineeId];

  if (!data) return <div>Trainee not found</div>;

  return (
    <div className="dashboard">
      <TrainerSidebar />
      <div className="performance-container">
        <h2>{data.name}'s Performance</h2>
        <p className="salesman-id">📌 Salesman ID: {data.salesmanId}</p>

        <div className="score-box">
          <h3>📌 Last Attempt Scores</h3>
          <table className="score-table">
            <thead>
              <tr>
                <th>Category</th>
                <th>Product Knowledge</th>
                <th>Sales Acumen</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{data.scores.category}</td>
                <td>{data.scores.productKnowledge}</td>
                <td>{data.scores.salesAcumen}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TraineePerformance;
