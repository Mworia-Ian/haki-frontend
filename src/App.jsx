import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css"; 
import LoginPage from './pages/LoginPage';
export default function App() {
  return (
    <Router>
      <Routes>
        
        <Route path="/login" element={<LoginPage />} />
        
      </Routes>
    </Router>
  )
}

