import React from "react";
import "./Mission.css";
import missionImage from "../assets/trial.png"; // Update the path to your image file

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
        A nonprofit, MassChallenge connects startups, experts, corporations,
        and communities to grow and transform businesses and economies. Our
        unique equity-free model allows us to accelerate high-impact startups
        with bold, disruptive ideas from non-traditional backgrounds.
      </p>
      <p className="mission-description">
        We offer a variety of programs, accelerators, and partnerships
        throughout the year to those who share our vision of transformative
        innovation.{" "}
        <a href="https://www.masschallenge.org" target="_blank" rel="noopener noreferrer">
          Learn more
        </a>
      </p>
    </div>
  );
};

export default Mission;
