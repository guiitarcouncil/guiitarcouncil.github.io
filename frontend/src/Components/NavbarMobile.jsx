import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './NavbarMobile.css';
import logo from "../Assets/logos/logo.jpeg";

const NavbarMobile = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  // Close menu when clicking outside
  useEffect(() => {
    const closeMenu = (e) => {
      if (isOpen && menuRef.current && !menuRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', closeMenu);
    return () => document.removeEventListener('click', closeMenu);
  }, [isOpen]);

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const toggleMenu = (e) => {
    e.stopPropagation();
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar-mobile">
      <div className="navbar-mobile-container">
        <Link to="/" className="navbar-mobile-logo">
          <img src={logo} alt="" height={40} />
        </Link>
        
        <div className="menu-container" ref={menuRef}>
          <button 
            className="three-dots-menu"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
          </button>

          {isOpen && (
            <div className="dropdown-menu">
              <Link to="/" className="dropdown-item" onClick={() => setIsOpen(false)}>Home</Link>
              <Link to="/about" className="dropdown-item" onClick={() => setIsOpen(false)}>About</Link>
              <Link to="/funding" className="dropdown-item" onClick={() => setIsOpen(false)}>Funding</Link>
              <Link to="/programs" className="dropdown-item" onClick={() => setIsOpen(false)}>Programs and Events</Link>
              <Link to="/contact" className='dropdown-item' onClick={() => setIsOpen(false)}>Contact</Link>
              <Link to="/login" className='dropdown-item' onClick={() => setIsOpen(false)}>Login</Link>
            </div>
          )}
        </div>
      </div>

      {/* Menu overlay */}
      <div className={`navbar-mobile-overlay ${isOpen ? 'active' : ''}`}></div>
    </nav>
  );
};

export default NavbarMobile;
