import { useState, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { AdminContext } from '../../context/AdminContext';
import './AdminRegister.css'; // ✅ Import external CSS

const AdminRegister = () => {
  const { registerAdmin } = useContext(AdminContext);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const success = await registerAdmin(name, email, password);
    if (success) {
      navigate('/admin/login');
    }
  };

  return (
    <div className="admin-register-container">
      <form className="admin-register-form" onSubmit={handleSubmit}>
        <h2 className="form-title">Admin Register</h2>
        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="form-input"
        />
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
        <button type="submit" className="form-button">Register</button>
        <p className="redirect-text">
          Already have an account? <Link to="/admin/login">Login</Link>
        </p>
      </form>
    </div>
  );
};

export default AdminRegister;
