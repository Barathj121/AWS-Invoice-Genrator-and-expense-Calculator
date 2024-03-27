import './style.css';
import Home from './pages/Home';
import React from 'react';
import Login from './pages/Login';
import Register from './pages/Register';
import Users from './pages/Users';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dept from './pages/Dept';

function App() {
  return (
    
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="/dept" element={<Dept/>} />
      </Routes>
    </Router>
  );
}

export default App;
