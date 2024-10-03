import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from './component/auth/login';
import Signup from './component/auth/signup';

import Dashboard from './component/dashboard';
import './App.scss';
import './style/main.scss';

const App: React.FC = () => {
  return (
    <Router>
      
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
};

export default App;
