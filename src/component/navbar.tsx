import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.scss';

const Navbar: React.FC = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
      <Link to="/signup">Sign Up</Link>
     
    </nav>
  );
};

export default Navbar;
