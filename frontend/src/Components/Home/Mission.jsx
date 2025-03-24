import React from "react";
import { Link } from "react-router-dom";
import "./Mission.css";
import missionImage from "../../Assets/others/trial.png";

const Mission = () => {
  return (
    <div className="mission-container">
      <h1 className="mission-title">Our Mission at GUIITAR</h1>
      <div className="mission-image-wrapper">
        <img
          src={missionImage}
          alt="MassChallenge Overview"
          className="mission-image"
        />
      </div>
      <p className="mission-description">
        The GUIITAR Council, established by GSFC University in Vadodara, is a
        Section 8 company dedicated to fostering creativity, innovation, and
        entrepreneurship among young minds. With cutting-edge infrastructure,
        mentorship, networking opportunities, and resources like co-working
        spaces and business support, we empower innovators to transform ideas
        into impactful technologies. Our goal is to nurture confident,
        independent leaders and drive advancements that benefit society &
        industries.
      </p>
      <p className="mission-description">
        <Link to="/about">Learn more</Link>
      </p>
    </div>
  );
};

export default Mission;