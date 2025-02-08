import "./Footer.css";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import logo1 from "../assets/logos/white.png";
import "font-awesome/css/font-awesome.min.css";
import FooterMobile from "./FooterMobile";
import Newsletter from "./Newsletter";

function Footer() {
  return (
    <>
      <Newsletter />
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
                <Link to="/programs">Previous Events</Link>
              </li>

              <li>
                <HashLink
                  smooth
                  to="/contact#form"
                  scroll={(el) =>
                    el.scrollIntoView({ behavior: "smooth", block: "start" })
                  }
                >
                  Ask Query
                </HashLink>
              </li>
              <li>
                <a
                  href="https://drive.google.com/file/d/1ZyfsgLfviEvapp_Ey8jDl9grjev1tIIe/view?usp=drive_link"
                  target="_blank"
                >
                  Annual Return
                </a>
              </li>
              <li>
                <a
                  href="https://drive.google.com/drive/folders/1JXvxN1ys5SzgwIUpajSl8wWqYnuGjkkT"
                  target="_blank"
                >
                  Startup Resources
                </a>
              </li>
              
            </ul>
          </div>
          <div className="footer-section">
            <ul>
              <li>
                <HashLink
                  smooth
                  to="/funding"
                  scroll={(el) =>
                    el.scrollIntoView({ behavior: "smooth", block: "start" })
                  }
                >
                  Apply for Funding
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
              <li>
                <HashLink
                  smooth
                  to="/programs#active"
                  scroll={(el) =>
                    el.scrollIntoView({ behavior: "smooth", block: "start" })
                  }
                >
                  FAQs
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
              <HashLink
                  smooth
                  to="/funding"
                  scroll={(el) =>
                    el.scrollIntoView({ behavior: "smooth", block: "start" })
                  }
                >
                  Privacy Policy
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
            <a
              href="mailto:guiitar@gsfcuniversity.ac.in"
              className="social-icon"
            >
              <i className="fa fa-envelope"></i>
            </a>
          </div>
        </div>
      </footer>
      <div className="footer-mobile-ft">
        <FooterMobile />
      </div>
    </>
  );
}

export default Footer;
