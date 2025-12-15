// src/pages/Dashboard.jsx
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import './Dashboard.css';

const Dashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    if (!token) {
      navigate('/');
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    navigate('/');
  };

  return (
    <div className="dashboard">
      <Navbar onLogout={handleLogout} />
      <div className="dashboard-body">
        <Sidebar />
        <div className="dashboard-content">
          <h2>Welcome Admin</h2>
          {/* Other admin functionalities can be added here */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
