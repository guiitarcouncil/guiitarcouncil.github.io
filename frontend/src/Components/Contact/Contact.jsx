import "./Contact.css";
import axios from "axios";
import Navbar from "../Navbar";
import React, { useState } from "react";
import NavbarMobile from "../NavbarMobile";
import Footer from "../Footer/Footer";
const bg = "/Assets/others/contact.jpg";
const trial = "/Assets/others/trial.png";

const ProgramCard = ({ icon, title, description }) => (
  <div className="program-card">
    <div className="icon">
      <img src={icon} alt={`${title} Icon`} className="program-icon" />
    </div>
    <h3>{title}</h3>
    <p>{description}</p>
    <button className="learn-more">Learn More</button>
  </div>
);

function Contact() {
  const socialLinks = [
    { name: "Facebook", url: "https://www.facebook.com/gsfcuniversity" },
    {
      name: "Youtube",
      url: "https://www.youtube.com/c/GSFCUniversityOfficial",
    },
    { name: "Twitter", url: "https://x.com/GSFCUniversity" },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/company/guiitarcouncil/",
    },
    { name: "Instagram", url: "https://www.instagram.com/gsfcuniversity" },
  ];

  // Form state and message
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://192.168.154.10:8000/api/contact/submit/", // API endpoint
        formData
      );
      setStatusMessage("Contact form submitted successfully!");
      setFormData({ name: "", email: "", message: "" }); // Reset form
    } catch (error) {
      setStatusMessage("There was an error submitting the form.");
    }
  };

  return (
    <>
      <div className="mainabout">
        <Navbar />
        <NavbarMobile />
        <div className="img-container">
          <img src={bg} alt="About GUIITAR" className="funding-image" />
          <div className="funding-text-overlay">Contact Us</div>
        </div>
      </div>

      <div className="contact-card-container">
        <div className="contact-card-address">
          <h4>Office Address</h4>
          <p>Event Room, Second Floor,</p>
          <p>Anviksha - GSFC University,</p>
          <p>Vadodara, Gujarat - 391750, India</p>
        </div>
        <div className="contact-card-address">
          <h4>Mr. Kiran Parmar</h4>
          <p>Sr. Manager, GUIITAR COUNCIL</p>
          <p>+91 9313262712</p>
          <p>
            Email:{" "}
            <a href="mailto:guiitar@gsfcuniversity.ac.in">
              guiitar@gsfcuniversity.ac.in
            </a>
          </p>
        </div>
      </div>

      <div className="follow-us-section">
        <div className="follow-us-content">
          <h1 className="follow-us-title">Follow us on Social Media</h1>
          <ul className="contact-links">
            {socialLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Follow us on ${link.name}`}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="follow-us-image">
          <img src={trial} alt="Social gathering" />
        </div>
      </div>

      <div id="ask" className="form-container">
        <div className="map-container">
          <div className="gmap">
            <h2 className="map-title"> Visit US </h2>

            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29514.989203451187!2d73.14472959999999!3d22.377267200000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc97b15555555%3A0x86e6773a36e1a153!2sGSFC%20University!5e0!3m2!1sen!2sin!4v1737613685120!5m2!1sen!2sin"
              width="600"
              height="450"
              style={{ border: "0" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        <div className="feedback-container">
          <h2 className="feedback-title">Ask a Query </h2>
          <form className="feedback-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className="input-field"
              aria-label="Your Name"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="input-field"
              aria-label="Your Email"
              required
            />
            <textarea
              name="message"
              placeholder="Message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              className="textarea-field"
              aria-label="Your Message"
              required
            ></textarea>
            <button type="submit" className="submit-button">
              Submit
            </button>
          </form>
          {statusMessage && <p className="status-message">{statusMessage}</p>}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Contact;
