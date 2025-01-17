import React from "react";
import "./Contact.css";
import bg from "../assets/contact.jpg";
import trial from "../assets/trial.png";
import money from "../assets/money.png";
import brain from "../assets/brain.png";

function Contact() {
  return (
    <>
      <div className="custom-section" style={{ backgroundImage: `url(${bg})` }}>
        {/* Left Content */}
        <div className="contact-content">
          <h1>Contact Us</h1>
          <p>We want to hear from you!</p>
          <p>Write us at: guiitar@gsfcuniversity.ac.in</p>
        </div>
      </div>

      <div className="explore">
        <h2>Grow with us</h2>
      </div>

      <div className="programs-menu">
        <div className="program-card">
          <div className="icon">
            <img
               src={money}
              alt="Funding Icon"
              className="program-icon"
            />
          </div>
          <h3>SSIP Program</h3>
          <p>Get upto 2.5 Lacs for project and startup.</p>
          <button className="learn-more">Learn More</button>
        </div>
       

        <div className="program-card">
          <div className="icon">
            <img
               src={brain}
              alt="Infrastructure Icon"
              className="program-icon"
            />
          </div>
          <h3>IPR Support</h3>
          <p>Intellectual Property Rights Support</p>
          <button className="learn-more">Learn More</button>
        </div>

        <div className="program-card">
          <div className="icon">
            <img
               src={money}
              alt="Infrastructure Icon"
              className="program-icon"
            />
          </div>
          <h3>Nodal Program</h3>
          <p>Support Up to INR 30.00 lakh per startup.</p>
          <button className="learn-more">Learn More</button>
        </div>
      </div>

      <div className="follow-us-section">
        <div className="follow-us-content">
          <h1 className="follow-us-title">Follow us on Social Media</h1>
          <ul className="contact-links">
            <li>
              <a
                href="https://www.facebook.com/gsfcuniversity"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/c/GSFCUniversityOfficial"
                target="_blank"
                rel="noopener noreferrer"
              >
                Youtube
              </a>
            </li>
            <li>
              <a
                href="https://x.com/GSFCUniversity"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/company/guiitarcouncil/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/gsfcuniversity"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </li>
          </ul>
        </div>
        <div className="follow-us-image">
          <img src={trial} alt="Social gathering" />
        </div>
      </div>

      <div className="form-container">
        {/* Left Section: Map */}
        <div className="map-container">
          <iframe
            title="Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3689.1498742656313!2d73.14239577434728!3d22.385706739796035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc97b15555555%3A0x86e6773a36e1a153!2sGSFC%20University!5e0!3m2!1sen!2sin!4v1737072060195!5m2!1sen!2sin"
            className="map"
          ></iframe>
        </div>

        {/* Right Section: Feedback Form */}
        <div className="feedback-container">
          <h2 className="feedback-title">Get Involved with Us</h2>
          <form className="feedback-form">
            <input type="text" placeholder="Name" className="input-field" />
            <input type="email" placeholder="Email" className="input-field" />
            <textarea
              placeholder="Message"
              rows="5"
              className="textarea-field"
            ></textarea>
            <button type="submit" className="submit-button">
              Submit
            </button>
          </form>
          <p className="footer-note"></p>
        </div>
      </div>
    </>
  );
}

export default Contact;
