// App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navbar from "./componnets/navbar/Navbar.jsx";
import Sidebar from "./componnets/sidebar/Sidebar.jsx";
import Add from "./pages/Add/Add.jsx";
import List from "./pages/List/List.jsx";
import Orders from "./pages/Orders/Orders.jsx";
import AdminLogin from "./pages/AdminLog/AdminLogin.jsx";
import AdminRegister from "./pages/AdminReg/AdminRegister.jsx";

const url = "http://localhost:4001";

const App = () => {
  return (
    <>
      <ToastContainer />

      <Routes>
        {/* Auth Pages */}
        <Route path="/" element={<AdminLogin />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/register" element={<AdminRegister />} />

        {/* Protected Admin Layout */}
        <Route
          path="/*"
          element={
            <>
              <Navbar />
              <div className="app-content">
                <Sidebar />
                <Routes>
                  <Route path="add" element={<Add url={url} />} />
                  <Route path="list" element={<List url={url} />} />
                  <Route path="orders" element={<Orders url={url} />} />
                </Routes>
              </div>
            </>
          }
        />
      </Routes>
    </>
  );
};

export default App;
