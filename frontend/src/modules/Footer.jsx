import "./Footer.css";
import logo from "../assets/logo1.png";
import 'font-awesome/css/font-awesome.min.css'

function Footer() {
  return (
     <footer>
    <div className="footer-container">
      <div className="footer-section">
        <p>© 2025 GUIITAR Council</p>
        <p>417 Main Street</p>
        <p>Little Rock, AR 72201</p>
        <p>501.404.9875</p>
        <p><a href="mailto:founders@venturecenter.co">founders@venturecenter.co</a></p>
      </div>
      <div className="footer-divider"></div>
      <div className="footer-section">
        {/* <h4>ENTREPRENEUR SUPPORT</h4> */}
        <ul>
          <li>ABOUT US</li>
          <li>MENTORSHIP</li>
          <li>LEADERSHIP</li>
          <li>OUR ASSOCIATIONS</li>
          <li>CONTACT</li>
        </ul>
      </div>
      <div className="footer-section">
        {/* <h4>ACCELERATOR PROGRAMS</h4> */}
        <ul>
          <li>SSIP Program</li>
          <li>Nodal Program</li>
          <li>Drone Workshop</li>
          <li>Active Projects/Startups</li>
          <li>Student-led Projects</li>
        </ul>
      </div>
      <div className="footer-section">
        {/* <h4>ABOUT THE VC</h4> */}
        <ul>
          <li>Infrastructure</li>
          <li>Company Portfolio</li>
          <li>Previous Events</li>
          <li>Startups Incubated</li>
          <li>Innovate with Us</li>
        </ul>
      </div>
    </div>
    <div className="footer-bottom">
      <img src={logo} alt="The Venture Center Logo" className="footer-logo" />
      <div className="social-links">
        <a href="#" className="social-icon"><i className="fa fa-linkedin"></i></a>
        <a href="#" className="social-icon"><i className="fa fa-facebook"></i></a>
        <a href="#" className="social-icon"><i className="fa fa-instagram"></i></a>
        <a href="#" className="social-icon"><i className="fa fa-twitter"></i></a>
        <a href="#" className="social-icon"><i className="fa fa-envelope"></i></a>
      </div>
    </div>
  </footer>
  );
}

export default Footer;
