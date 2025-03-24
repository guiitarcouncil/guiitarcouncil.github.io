import React from "react";
import "./FooterMobile.css";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import GUIITAR_LOGO from "../../Assets/logos/white.png";
import "font-awesome/css/font-awesome.min.css";

function FooterMobile() {
  return (
    <>
      <div className="footer-mobile">
        <div className="footer-mob-bottom">
          <div className="footer-mob-section">
            <ul>
              <li>
                <Link to="/about">About Us</Link>
              </li>{" "}
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
                  to="/privacy"
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
          <div className="footer-mob-section">
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
                  to="/programs#programs-achievements"
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
                  to="/programs#programs-achievements"
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
                  to="/"
                  scroll={(el) =>
                    el.scrollIntoView({ behavior: "smooth", block: "start" })
                  }
                >
                  FAQs
                </HashLink>
              </li>
            </ul>
          </div>
          <div className="footer-mob-section" style={{ marginBottom: "-30px" }}>
            <ul style={{ marginTop: "50px" }}>
              <li>
                <HashLink
                  smooth
                  to="/programs#phe-hea"
                  scroll={(el) =>
                    el.scrollIntoView({ behavior: "smooth", block: "start" })
                  }
                >
                  Previous Events
                </HashLink>
              </li>

              <li>
                <HashLink
                  smooth
                  to="/contact#ask"
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
        </div>
        <div className="footer-divider-mob-parent">
          <div
            className="footer-divider-mob-child"
            style={{ marginTop: "50px", marginBottom: "50px" }}
          ></div>
        </div>
        <div className="footer-mob-upper">
          <img
            src={GUIITAR_LOGO}
            alt="GHUIITAR LOGO"
            className="footer-mob-img"
          />
        </div>
        <div
          className="mob-add-footer"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <div
            className="footer-mob-address"
            style={{ textAlign: "justify", fontSize: "6vw" }}
          >
            <p
              style={{
                color: "#fff",
                marginTop: "15px",
                paddingTop: "15px",
                fontSize: "6vw",
              }}
            >
              Event Room, Second Floor,
            </p>
            <p style={{ color: "#fff", marginTop: "0px", fontSize: "6vw" }}>
              Anviksha - GSFC University,
            </p>
            <p style={{ color: "#fff", marginTop: "0px", fontSize: "6vw" }}>
              Vadodara, Gujarat - 391750
            </p>
            <p style={{ color: "#fff", marginTop: "0px", fontSize: "6vw" }}>
              India
            </p>
          </div>
        </div>
        <p style={{ textAlign: "center", marginTop: "30px", fontSize: "20px" }}>
          © 2025 GUIITAR Council
        </p>
        <div className="footer-mob-social-links">
          <a
            href="https://www.linkedin.com/company/guiitarcouncil/"
            className="social-icon-mob"
          >
            <i className="fa fa-linkedin"></i>
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=919313262712"
            className="social-icon-mob"
          >
            <i className="fa fa-whatsapp"></i>
          </a>
          <a
            href="https://www.facebook.com/gsfcuniversity"
            className="social-icon-mob"
          >
            <i className="fa fa-facebook"></i>
          </a>
          <a
            href="https://www.instagram.com/gsfcuniversity"
            className="social-icon-mob"
          >
            <i className="fa fa-instagram"></i>
          </a>
          <a href="https://x.com/GSFCUniversity" className="social-icon-mob">
            <i className="fa fa-twitter"></i>
          </a>
          <a
            href="https://www.youtube.com/c/GSFCUniversityOfficial"
            className="social-icon-mob"
          >
            <i className="fa fa-youtube"></i>
          </a>
          <a
            href="mailto:guiitar@gsfcuniversity.ac.in"
            className="social-icon-mob"
          >
            <i className="fa fa-envelope"></i>
          </a>
        </div>
          
      </div>
      <div className="allrsd">
      <div
            className="footer-divider-mob-child"
            style={{ marginTop: "50px", marginBottom: "50px" }}
          ></div>
        <p>All rights Reserved &copy; 2025</p>
        <HashLink
          smooth
          to="/terms"
          scroll={(el) =>
            el.scrollIntoView({ behavior: "smooth", block: "start" })
          }
        >
          Terms & Conditions
        </HashLink>
        <HashLink
          smooth
          to="/privacy"
          scroll={(el) =>
            el.scrollIntoView({ behavior: "smooth", block: "start" })
          }
        >
          Privacy Policy
        </HashLink>
        <a href="https://ivedantmistry.vercel.app/">
          Maintained by Vedant Mistry
        </a>
      </div>
    </>
  );
}

export default FooterMobile;
