import { FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube, FaInstagram } from 'react-icons/fa';
import './Footer.css'; 
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <div className="footer-logos">
            <img
              src="/path/to/thub-logo.png"
              alt="T-Hub Logo"
              className="footer-logo"
            />
            <img
              src="/path/to/telangana-rising-logo.png"
              alt="Telangana Rising Logo"
              className="footer-logo"
            />
          </div>
          <p className="footer-description">
            T-Hub is a premier innovation hub and ecosystem enabler based out of Hyderabad, India.
          </p>
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
            <h4>About T-Hub</h4>
            <ul>
              <li>About Us</li>
              <li>Awards</li>
              <li>Careers</li>
              <li>Startups</li>
              <li>Corporates</li>
              <li>Programs</li>
              <li>Contact Us</li>
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
              <li>RTI</li>
              <li>Corporate Notices</li>
              <li>Terms and Conditions</li>
              <li>Privacy and Cookies Policy</li>
              <li>Media Kit</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
