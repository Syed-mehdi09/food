// src/components/Navbar.jsx
import { useContext } from 'react';
import { AdminContext } from '../../context/AdminContext';
import './Navbar.css'; // Import external CSS

const Navbar = () => {
  const { adminToken, logoutAdmin } = useContext(AdminContext);

  return (
    <nav className="navbar">
      <h2 className="navbar-title">Admin Panel</h2>
      {adminToken && (
        <button className="logout-button" onClick={logoutAdmin}>
          Logout
        </button>
      )}
    </nav>
  );
};

export default Navbar;
