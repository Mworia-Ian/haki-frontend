import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css"; 
import LoginPage from './pages/Login/LoginPage';
import HomePage from './pages/LandingPage/HomePage';
export default function App() {
  return (
    <Router>
      <Routes>
        
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<HomePage />} />
        
      </Routes>
    </Router>
  )
}

