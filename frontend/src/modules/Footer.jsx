import "./Footer.css";
import logo from "../assets/white-logo.png";
import 'font-awesome/css/font-awesome.min.css'

function Footer() {
  return (
     <footer>
    <div className="footer-container">
      <div className="footer-section">
        <p className="footer-copyright" style={{color: '#fff',fontSize:'20px'}}>© 2025 GUIITAR Council </p>
        <p style={{color: '#fff',fontSize:'20px'}}>Event Room, Second Floor,</p>
        <p style={{color: '#fff',fontSize:'20px'}} >Anviksha - GSFC University,</p>
        <p style={{color: '#fff',fontSize:'20px'}} >Vadodara, Gujarat - 391750</p>
        <p style={{color: '#fff',fontSize:'20px'}} >India</p>
        
      </div>
      <div className="footer-divider"></div>
      <div className="footer-section">
        
        <ul>
          <li><a href="#">Infrastructure</a></li>
          <li><a href="#">Company Portfolio</a></li>
          <li><a href="#">Previous Events</a></li>
          <li><a href="#">Startups Incubated</a></li>
          <li><a href="#">Innovate with Us</a></li>
          <li><a href="#">Policies</a></li>
        </ul>
      </div>
      <div className="footer-section">
        {/* <h4>ACCELERATOR PROGRAMS</h4> */}
        <ul>
          <li><a href="#">SSIP Program</a></li>
          <li><a href="#">Nodal Program</a></li>
          <li><a href="#">Drone Workshop</a></li>
          <li><a href="#">Active Projects/Startups</a></li>
          <li><a href="#">Student-led Projects</a></li>
        </ul>
      </div>
      <div className="footer-section">
        {/* <h4>ABOUT THE VC</h4> */}
        <ul>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Mentorship</a></li>
          <li><a href="#">Leadership</a></li>
          <li><a href="#">Our Associations</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>
    </div>
    <div className="footer-bottom">
      <img src={logo} alt="GUIITAR Council Logo" className="footer-logo" />
      <div className="social-links">
        <a href="https://www.linkedin.com/company/guiitarcouncil/" className="social-icon"><i className="fa fa-linkedin"></i></a>
        <a href="https://api.whatsapp.com/send?phone=919313262712" className="social-icon"><i className="fa fa-whatsapp"></i></a>
        <a href="https://www.facebook.com/gsfcuniversity" className="social-icon"><i className="fa fa-facebook"></i></a>
        <a href="https://www.instagram.com/gsfcuniversity" className="social-icon"><i className="fa fa-instagram"></i></a>
        <a href="https://x.com/GSFCUniversity" className="social-icon"><i className="fa fa-twitter"></i></a>
        <a href="https://www.youtube.com/c/GSFCUniversityOfficial" className="social-icon"><i className="fa fa-youtube"></i></a>
        <a href="mailto:guiitar@gsfcuniversity.ac.in" className="social-icon"><i className="fa fa-envelope"></i></a>
      </div>
    </div>
  </footer>
  );
}

export default Footer;

