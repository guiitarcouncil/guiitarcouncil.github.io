import React from "react";
import "./Contact.css";
import bg from "../assets/contact.jpg";
import trial from "../assets/trial.png";
import money from "../assets/money.png";
import brain from "../assets/brain.png";

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
  const programs = [
    {
      icon: money,
      title: "SSIP Program",
      description: "Get up to 2.5 Lacs for project and startup.",
    },
    {
      icon: brain,
      title: "IPR Support",
      description: "Intellectual Property Rights Support.",
    },
    {
      icon: money,
      title: "Nodal Program",
      description: "Support up to INR 30 lakhs.",
    },
  ];

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

  return (
    <>
      <div className="mainabout">
            <div className="img-container">
              <img src={bg} alt="About GUIITAR" className="funding-image" />
              <div className="funding-text-overlay">Contact Us</div>
        
            </div>
      </div>

      <div className="explore">
        <h2>Explore our Programs</h2>
      </div>

      <div className="programs-menu">
        {programs.map((program, index) => (
          <ProgramCard
            key={index}
            icon={program.icon}
            title={program.title}
            description={program.description}
          />
        ))}
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

      <div className="form-container">
        <div className="map-container">
          <iframe
            title="GSFC University Location"
            src="https://www.google.com/maps/embed?... (trimmed URL)"
            className="map"
          ></iframe>
        </div>
        <div className="feedback-container">
          <h2 className="feedback-title">Get Involved with Us</h2>
          <form className="feedback-form" aria-label="Feedback Form">
            <input
              type="text"
              placeholder="Name"
              className="input-field"
              aria-label="Your Name"
            />
            <input
              type="email"
              placeholder="Email"
              className="input-field"
              aria-label="Your Email"
            />
            <textarea
              placeholder="Message"
              rows="5"
              className="textarea-field"
              aria-label="Your Message"
            ></textarea>
            <button type="submit" className="submit-button">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
