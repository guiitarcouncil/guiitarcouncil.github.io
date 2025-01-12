import { FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube, FaInstagram } from 'react-icons/fa';
import './Footer.css';
import logo from '../assets/logo1.png'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <div className="footer-logos">
            <img src={logo} alt="logo" />
            
          </div>
          <p className="footer-description">
          <p>Event Room, Second Floor, GUIITAR Council,</p>
          <p>Anviksha - GSFC University,</p>
          <p>P. O. Fertilizernagar,</p>
          <p>Vadodara-391750, Gujarat,</p>
          <p >INDIA</p></p>
          <div className="footer-social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaFacebookF />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaTwitter />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaLinkedinIn />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaYoutube />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaInstagram />
            </a>
          </div>
        </div>
        <div className="footer-right">
          <div className="footer-section">
            <h4>About GUIITAR Council</h4>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Funding</li>
              <li>Programs</li>
              <li>Resources</li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Innovation Ecosystem</h4>
            <ul>
              <li>Government</li>
              <li>Academia</li>
              <li>Investors</li>
              <li>Mentors</li>
              <li>Value Partners</li>
              <li>Partnerships</li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li>lore</li>
              <li>Startup </li>
              <li>Terms and Conditions</li>
              <li>Privacy and Cookies Policy</li>
              <li>Past Events</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="footer-copyright">
        <p>Guiitar Council © 2025</p>
        <p>Made with ❤ in India</p>

      </div>
    </footer>
  );
};

export default Footer;
