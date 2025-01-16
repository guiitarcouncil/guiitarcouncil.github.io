import React from "react";
import "./About.css";
import TabbedAboutTeam from "./TabbedAboutTeam";

function About() {
  return (
    <div className="mainabout">
      <div className="about-container">
        <div className="about-content">
          <h2>About GUIITAR</h2>
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
          <img
            src="/path/to/your/image.png" 
            alt="T-Hub Group"
          />
        </div>

      </div>
        <div className="team-section">
          <h2>Meet Our Team</h2>
          <TabbedAboutTeam />
        </div>
    </div>
  );
}

export default About;
