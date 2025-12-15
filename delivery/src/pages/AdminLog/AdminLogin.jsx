// src/pages/adminlogin/AdminLogin.jsx
import { useContext, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { AdminContext } from '../../context/AdminContext';
import './AdminLogin.css'; // ✅ Import CSS

const AdminLogin = () => {
  const { loginAdmin } = useContext(AdminContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const success = await loginAdmin(email, password);
    if (success) {
      navigate('/admin');
    }
  };

  return (
    <div className="admin-login-container">
      <form className="admin-login-form" onSubmit={handleSubmit}>
        <h2 className="form-title">Admin Login</h2>
        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="form-input"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="form-input"
        />
        <button type="submit" className="form-button">Login</button>
        <p className="redirect-text">
          Don't have an account? <Link to="/admin/register">Sign Up</Link>
        </p>
      </form>
    </div>
  );
};

export default AdminLogin;
