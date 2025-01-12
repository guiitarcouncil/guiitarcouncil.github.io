import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';  // Import Link
import './Navbar.css';
import logo from '../assets/logo-removebg-preview.png';
import logo1 from '../assets/logo1.png';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) { // Adjust scroll threshold here
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="logo"><Link to="/"><img src={logo1} alt="logo" /></Link></div>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/funding">Funding</Link></li>
          <li><Link to="/programs">Programs</Link></li>
          <li><Link to="/resources">Resources</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
