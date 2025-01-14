import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";
import "./Footer.css";
import logo from "../assets/logo1.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <div className="footer-logos">
            <img src={logo} alt="logo" />
          </div>
          <div className="footer-description">
            <p>Event Room, Second Floor</p>
            <p>Anviksha - GSFC University</p>
            <p>Vadodara, Gujarat - 391750</p>
            <p>India</p>
          </div>

          <div className="footer-social-icons">
            <a
              href="https://www.facebook.com/gsfcuniversity"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://x.com/gsfcuniversity"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <FaTwitter />
            </a>
            <a
              href="https://www.linkedin.com/company/guiitarcouncil/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://www.youtube.com/c/GSFCUniversityOfficial"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <FaYoutube />
            </a>
            <a
              href="https://www.instagram.com/gsfcuniversity/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
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
              <li>lorem</li>
              <li>Lorem, ipsum.</li>
              <li>Lorem, ipsum dolor.</li>
              <li>Lorem, ipsum dolor.</li>
              <li>Lorem, ipsum.</li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li>lorem</li>
              <li>Lorem, ipsum.</li>
              <li>Lorem, ipsum dolor.</li>
              <li>Lorem, ipsum dolor.</li>
              <li>Lorem, ipsum.</li>
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
}

export default Footer;
