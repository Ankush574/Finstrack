import { useEffect, useState } from 'react';
import axios from '../utils/api';

const Dashboard = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    axios.get('/transactions').then(res => setTransactions(res.data));
  }, []);

  return (
    <div>
      <h1>Finance Dashboard</h1>
      <ul>
        {transactions.map((t, i) => (
          <li key={i}>{t.description} - ₹{t.amount}</li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;