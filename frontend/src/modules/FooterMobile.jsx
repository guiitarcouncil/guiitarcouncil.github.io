import React from "react";
import "./FooterMobile.css";
import GUIITAR_LOGO from "../assets/logos/white.png";
import "font-awesome/css/font-awesome.min.css";

function FooterMobile() {
  return (
    <>
      <div className="footer-mobile">
        {/* <div className="footer-divider"></div> */}

        <div className="footer-mob-bottom">
          <div className="footer-mob-section">
            <ul style={{ marginTop: "50px" }}>
              <li>
                <a href="">Infrastructure</a>
              </li>
              <li>
                <a href="">Previous Events</a>
              </li>

              <li>
                <div></div>
                <a href="">Innovate with us</a>
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
          <div className="footer-mob-section">
            <ul>
              <li>
                <a href="">SSIP 2.0</a>
              </li>
              <li>
                <a href="">Nodal Institute</a>
              </li>

              <li>
                <a href="">Drone Workshop</a>
              </li>
              <li>
                <a href="" target="_blank">
                  3D Printing Workshop
                </a>
              </li>
              <li>
                <a href="" target="_blank">
                  Active Project
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-mob-section" style={{ marginBottom: "-30px" }}>
            <ul>
              <li>
                <a href="">About Us</a>
              </li>
              <li>
                <a href="">Leadership</a>
              </li>

              <li>
                <div></div>
                <a href="">Our Associations</a>
              </li>
              <li>
                <a href="">Contact</a>
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
    </>
  );
}

export default FooterMobile;
