import React from "react";
import "./Contact.css";
import bg from "../assets/contact.jpg";

function Contact() {
  return (
    <>
        <div
      className="custom-section"
      style={{ backgroundImage: `url(${bg})` }}
    >
      {/* Left Content */}
      <div className="contact-content">
        <h1>Contact Us</h1>
        <p>We want to hear from you!</p>
        <p>Email us at guiitar@gsfcuniversity.ac.in</p>
      </div>

      {/* Right Content */}
      <div className="info-box">
        <div className="mission">
          <h2>
            <span className="quote">“</span>OUR MISSION
          </h2>
          <p>
            The Venture Center accelerates success for start-up founders, small
            business owners, and corporate innovators through award-winning
            entrepreneurship programs, platforms, and partnerships.
          </p>
        </div>
        <div className="vision">
          <p>
            Raising Arkansas to regional, national, and global leadership in
            entrepreneurship and economic prosperity.
          </p>
          <h2>
            OUR VISION<span className="quote">”</span>
          </h2>
        </div>
      </div>
    </div>


      <div className="form-container">
        {/* Left Section: Map */}
        <div className="map-container">
          <iframe
            title="Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3154.922405889177!2d27.135947615320293!3d38.41924857964774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14b973f6ad0e79ab%3A0x0!2zMzhDIEbEsCBOw7ZydGluIE96YW4!5e0!3m2!1str!2str!4v1609163832606!5m2!1str!2str"
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
              Send
            </button>
          </form>
          <p className="footer-note">
            {/* Chicharrones blog Helvetica normcore Iceland tousled brook viral artisan. */}
          </p>
        </div>
      </div>
    </>
  );
}

export default Contact;
