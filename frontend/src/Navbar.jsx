import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isFixed, setIsFixed] = useState(true); // Tracks visibility of navbar
  const [lastScrollY, setLastScrollY] = useState(0); // Tracks last scroll position

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY && currentScrollY > 50) {
      // Scrolling down, hide navbar
      setIsFixed(false);
    } else {
      // Scrolling up, show navbar
      setIsFixed(true);
    }

    // Update last scroll position
    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <nav className={`navbar ${isFixed ? 'visible' : 'hidden'}`}>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/funding">Funding</Link></li>
        <li><Link to="/programs">Programs</Link></li>
        <li><Link to="/resources">Resources</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
