import "./Footer.css";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import logo1 from "../assets/logos/white.png";
import "font-awesome/css/font-awesome.min.css";

function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-section">
          <p
            className="footer-copyright"
            style={{ color: "#fff", fontSize: "20px" }}
          >
            © 2025 GUIITAR Council
          </p>
          <p style={{ color: "#fff", fontSize: "20px" }}>
            Event Room, Second Floor,
          </p>
          <p style={{ color: "#fff", fontSize: "20px" }}>
            Anviksha - GSFC University,
          </p>
          <p style={{ color: "#fff", fontSize: "20px" }}>
            Vadodara, Gujarat - 391750
          </p>
          <p style={{ color: "#fff", fontSize: "20px" }}>India</p>
        </div>
        <div className="footer-divider"></div>
        <div className="footer-section">
          <ul>
            <li>
              <Link to="/programs">Infrastructure</Link>
            </li>
            <li>
              <Link to="/programs">Previous Events</Link>
            </li>
            <li>
              <Link to="/programs">Startups Incubated</Link>
            </li>
            <li>
              <Link to="/contact">Innovate with Us</Link>
            </li>
            <li>
              <a href="#">Annual Return</a>
            </li>
            <li>
              <a href="#">Policies</a>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <ul>
            <li>
              <HashLink
                smooth
                to="/funding#ssip"
                scroll={(el) =>
                  el.scrollIntoView({ behavior: "smooth", block: "start" })
                }
              >
                SSIP 2.0
              </HashLink>
            </li>
            <li>
              <HashLink
                smooth
                to="/funding#nodal"
                scroll={(el) =>
                  el.scrollIntoView({ behavior: "smooth", block: "start" })
                }
              >
                Nodal Institute
              </HashLink>
            </li>
            <li>
              <HashLink
                smooth
                to="/programs#drone"
                scroll={(el) =>
                  el.scrollIntoView({ behavior: "smooth", block: "start" })
                }
              >
                Drone Workshop
              </HashLink>
            </li>
            <li>
              <HashLink
                smooth
                to="/programs#3d"
                scroll={(el) =>
                  el.scrollIntoView({ behavior: "smooth", block: "start" })
                }
              >
                3D Printing Workshop
              </HashLink>
            </li>
            <li>
            <HashLink
                smooth
                to="/programs#active"
                scroll={(el) =>
                  el.scrollIntoView({ behavior: "smooth", block: "start" })
                }
              >
                Active Projects
              </HashLink>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <ul>
            <li>
              <Link to="/about">About Us</Link>
            </li>{" "}
            <li>
              <HashLink
                smooth
                to="/about#leadership"
                scroll={(el) =>
                  el.scrollIntoView({ behavior: "smooth", block: "start" })
                }
              >
                Leadership
              </HashLink>
            </li>
            <li>
              <HashLink
                smooth
                to="/#associations"
                scroll={(el) =>
                  el.scrollIntoView({ behavior: "smooth", block: "start" })
                }
              >
                Our Associations
              </HashLink>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>{" "}
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <img src={logo1} alt="GUIITAR Council Logo" className="footer-logo" />
        <div className="social-links">
          <a
            href="https://www.linkedin.com/company/guiitarcouncil/"
            className="social-icon"
          >
            <i className="fa fa-linkedin"></i>
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=919313262712"
            className="social-icon"
          >
            <i className="fa fa-whatsapp"></i>
          </a>
          <a
            href="https://www.facebook.com/gsfcuniversity"
            className="social-icon"
          >
            <i className="fa fa-facebook"></i>
          </a>
          <a
            href="https://www.instagram.com/gsfcuniversity"
            className="social-icon"
          >
            <i className="fa fa-instagram"></i>
          </a>
          <a href="https://x.com/GSFCUniversity" className="social-icon">
            <i className="fa fa-twitter"></i>
          </a>
          <a
            href="https://www.youtube.com/c/GSFCUniversityOfficial"
            className="social-icon"
          >
            <i className="fa fa-youtube"></i>
          </a>
          <a href="mailto:guiitar@gsfcuniversity.ac.in" className="social-icon">
            <i className="fa fa-envelope"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
