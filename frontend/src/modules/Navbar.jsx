import React, { useState, useEffect } from 'react';
import './Navbar.css';
import logo from '../assets/logo-removebg-preview.png'
import logo1 from '../assets/logo1.png'

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
        <div className="logo"><a href="/"><img src={logo1} alt="logo" /></a></div>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#funding">Funding</a></li>
          <li><a href="#programs">Programs</a></li>
          <li><a href="#resources">Resources</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
