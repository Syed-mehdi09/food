import { createContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from "react-toastify";



export const AdminContext = createContext();

const AdminContextProvider = ({ children }) => {
  const [adminToken, setAdminToken] = useState(localStorage.getItem("adminToken") || "");
  const backendURL = "http://localhost:4001"; //  backend url

  const navigate = useNavigate();

  const loginAdmin = async (email, password) => {
    try {
      const response = await axios.post(`${backendURL}/api/admin/login`, {
        email,
        password,
      });
      setAdminToken(response.data.token);
      localStorage.setItem("adminToken", response.data.token);
      toast.success("Login successful");
      return true;
    } catch (error) {
      toast.error("Invalid email or password");
      return false;
    }
  };

  const registerAdmin = async (name,email, password) => {
    try {
      const response = await axios.post(`${backendURL}/api/admin/register`, {
        name,
        email,
        password,
      });
      toast.success("Admin registered successfully");
      return true;
    } catch (error) {
      toast.error("Registration failed");
      return false;
    }
  };

  const logoutAdmin = () => {
    setAdminToken("");
    localStorage.removeItem("adminToken");
    toast.info("Logged out");
    navigate("/admin/login");
  };

  return (
    <AdminContext.Provider value={{ adminToken, loginAdmin, logoutAdmin, registerAdmin }}>
      {children}
    </AdminContext.Provider>
  );
};

export default AdminContextProvider;
