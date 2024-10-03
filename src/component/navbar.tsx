import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.scss';

const Navbar: React.FC = () => {
  return (
    <nav>
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/">Login</Link>
      <Link to="/signup">Signup</Link>
    </nav>
  );
};

export default Navbar;
