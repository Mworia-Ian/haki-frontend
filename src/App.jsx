import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css"; 
import LoginPage from './pages/Login/LoginPage';
import HomePage from './pages/LandingPage/HomePage';
import ForgotPassword from './pages/Login/ForgotPassword';

export default function App() {
  return (
    <Router>
      <Routes>
        
        <Route path="/login" element={<LoginPage />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/" element={<HomePage />} />
        
      </Routes>
    </Router>
  )
}

