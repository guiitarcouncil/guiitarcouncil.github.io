import React from "react";
import "./About.css";
import TabbedAboutTeam from "./TabbedAboutTeam";
import MessageFromPresident from "./MessageFromPresident";
import image from "../assets/best-ironman.jpg";
import headerImage from "../assets/contact.jpg"; // Add the path to your header image here

function About() {
  return (
    <div className="mainabout">
      {/* Full width image section */}
      <div className="header-image-container">
        <img src={headerImage} alt="Header" className="header-image" />
        <div className="funding-text-overlay">About GUIITAR
        </div>
      </div>

      <div className="about-container">
        <div className="about-content">
          <h2>About US</h2>
          <p>
            GU Incubation Innovation Technology and Applied Research (GUIITAR)
            Council has been established by GSFC University (GSFCU) at Vadodara,
            dedicated to promote and support creativity, innovation and spirit
            of enterprise among young minds and innovators. GUIITAR Council is
            registered under section 8 of Companies Act, 2013.
          </p>
          <p>
            GUIITAR Council is committed to nurture and develop startups through
            shared resources, infrastructure, cutting-edge laboratories,
            tailored mentorship, extended networking, and other common services
            such as co-working space, equipment, business support, and
            intellectual property protection.
          </p>

          <h2>Our Mission</h2>
          <p>
            Our aim is to establish global gold standards for innovation and
            entrepreneurship. By providing unparalleled support, resources, and
            opportunities, we want to create an environment where every startup
            can thrive, disrupt, and redefine industry norms.
          </p>
        </div>

        <div className="about-image">
          <img src={image} alt="GUIITAR Image" />
        </div>
      </div>

      {/* Message From President Section */}
      <div className="message-section">
        <h2>Message From Leadership</h2>

        <div className="message-container">
          {/* President's Message */}
          <div className="message-item">
            <p>
              "Create an environment of excellence through innovation for you will forever be remembered for your contribution to the world. Innovation is a journey in which you have to say no to thousands of things which already exist while embracing the one which is yet to come."
            </p>
            <p className="message-author">
              - Shri P. K. Taneja, IAS (Retd.) <br></br>
              Chairman, GUIITAR
            </p>
          </div>

          {/* CEO's Message */}
          <div className="message-item">
            <p>
              "Innovation is not to repeat a success story but to celebrate a failure. Pick-up and never Give-up is an attitude towards innovation."
            </p>
            <p className="message-author">- Mr. Bimal Bhayani <br />CEO, GUIITAR</p>
          </div>

          {/* Provost's Message */}
          <div className="message-item">
            <p>
              "Innovation is not to repeat a success story but to celebrate a failure. Pick-up and never Give-up is an attitude towards innovation."
            </p>
            <p className="message-author">
              - Dr. G. R. Sinha <br /> Provost, GSFC University
            </p>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="team-section">
        <h2>Meet Our Team</h2>
        <TabbedAboutTeam />
      </div>
    </div>
  );
}

export default About;
