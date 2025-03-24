import "./Navbar.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
const logo1 = "/Assets/logos/new.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleNavigation = (path) => {
    toggleMenu();
    window.location.href = path; 
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <Link to="/" onClick={() => handleNavigation("/")}>
            <img src={logo1} alt="Logo" />
          </Link>
        </div>

        <ul className={`nav-links ${isOpen ? "open" : ""}`}>
          <li>
            <Link to="/" onClick={() => handleNavigation("/")}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={() => handleNavigation("/about")}>
              About
            </Link>
          </li>
          <li>
            <Link to="/funding" onClick={() => handleNavigation("/funding")}>
              Funding
            </Link>
          </li>
          <li>
            <Link to="/programs" onClick={() => handleNavigation("/programs")}>
              Programs & Events
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={() => handleNavigation("/contact")}>
              Contact
            </Link>
          </li>
          <li>
            <Link to="/login" onClick={() => handleNavigation("/login")}>
              Login
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;