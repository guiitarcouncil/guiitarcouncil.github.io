import React from "react";
import "./Contact.css";

function Contact() {
  return <>
  <div className="background-container">
   
  </div>
    <div className="contact-us-container">
      {/* Left Section: Map */}
      <div className="map-container">
        <iframe
          title="Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3154.922405889177!2d27.135947615320293!3d38.41924857964774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14b973f6ad0e79ab%3A0x0!2zMzhDIEbEsCBOw7ZydGluIE96YW4!5e0!3m2!1str!2str!4v1609163832606!5m2!1str!2str"
          className="map"
        ></iframe>
        <div className="address-box">
          <p><strong>ADDRESS</strong></p>
          <p>Photo booth tattooed prism, Portland taiyaki hoodie neutra typewriter</p>
          <p><strong>EMAIL:</strong> example@email.com</p>
          <p><strong>PHONE:</strong> 123-456-7890</p>
        </div>
      </div>

      {/* Right Section: Feedback Form */}
      <div className="feedback-container">
        <h2 className="feedback-title">Get Involved with Us</h2>
        <form className="feedback-form">
          <input type="text" placeholder="Name" className="input-field" />
          <input type="email" placeholder="Email" className="input-field" />
          <textarea placeholder="Message" rows="5" className="textarea-field"></textarea>
          <button type="submit" className="submit-button">Send</button>
        </form>
        <p className="footer-note">
          {/* Chicharrones blog Helvetica normcore Iceland tousled brook viral artisan. */}
        </p>
      </div>
    </div>
  
  </>;
}

export default Contact;
