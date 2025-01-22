import "@google/model-viewer";
import React, { useState } from "react";
import "./AchievementCarousel.css";
import ana from "../assets/achievements/ana.jpeg";
import eolsen from "../assets/achievements/eolsen.jpg";
import janiston from "../assets/achievements/janiston.png";
import katew from "../assets/achievements/kate-winslet.jpg";
import scarlet from "../assets/achievements/sjohansson.jpg";
import sydney from "../assets/achievements/sydney-sweeney.jpg";
import aksha from "../assets/aksha.jpg";
import khushi from "../assets/khushi.jpg";
import tirth from "../assets/tirth.jpg";
import drone from "../assets/drone.jpg";
import uni from "../assets/university-logo.png";
import cmpy from "../assets/G.png";
import ssip from "../assets/associations/as4-new.png";

import kartavi from "../assets/achievements/kartavi.jpg";
import lavanya from "../assets/achievements/lavanya.jpg";
import vrati from "../assets/achievements/vrati.jpg";
import divya from "../assets/achievements/divya.jpg";
import chahana from "../assets/achievements/chahana.jpg";
import vidur from "../assets/achievements/vidur.jpg";

const achievements = [
  {
    projectName: "Defense Robot",
    grantAmount: "184,800",
    details:
      "USP: Durable, Multi-terrain, with advanvced cameras and a professional-grade desig for unmatched reliability in critical operations.",
    students: [
      { name: "Aksha Vahora", imageUrl: aksha },
      { name: "Khushi Bhingradiya", imageUrl: khushi },
      { name: "Tirth Pandya", imageUrl: tirth },
      
    ],
    mentor: "Mr. Yatharth Bhatt, Lab Assistant, SOT, GSFCU", // Only store the name
  },
  {
    projectName: "Unmanned Ground Vehicle (UGV)",
    grantAmount: "152,665",
    details:
      "USP: Modular, eco-friendly, GPS-enabled, built for high tasks like survelliance. and industrial monitoring and military and disaster response.",
    students: [
      { name: "Kartavi Patel", imageUrl: kartavi },
      { name: "Lavanya Jain", imageUrl: lavanya },
      { name: "Vrati Arya", imageUrl: vrati },
      { name: "Divya Tiwari", imageUrl: divya },
      { name: "Chahana Kamdar", imageUrl: chahana },
      { name: "Vidur Shah", imageUrl: vidur },
      
    ],
    mentor: "Mr. Yatharth Bhatt, Lab Assistant, SOT, GSFCU", // Only store the name
  },
  {
    projectName: "Queens of HollyWood",
    grantAmount: "250,000,000",
    details:
      "USP: Our 3D printing program offers an exciting opportunity to explore the world of additive manufacturing. Whether you're a beginner or an experienced designer, you'll learn how to create prototypes, models, and even end-use products using cutting-edge 3D printers.",
    students: [
      { name: "Jennifer Aniston", imageUrl: janiston },
      { name: "Elizabeth Olsen", imageUrl: eolsen },
      { name: "Ana de Armas", imageUrl: ana },
      { name: "Kate Winslet", imageUrl: katew },
      { name: "Scarlett Johansson", imageUrl: scarlet },
      { name: "Sydney Sweeney", imageUrl: sydney },
    ],
    mentor: "Vedant Mistry", 
  },
];

const AchievementCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % achievements.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + achievements.length) % achievements.length
    );
  };

  return (
    <div className="ac">
      <h1 className="main-heading">Explore Our Programs</h1>

      <div className="drone">
        <div className="drone-content">
          <div className="drone-i">
            <img src={drone} alt="Drone" />
          </div>
          <div className="drone-text">
            <h2>Learn Building Drones</h2>
            <p>
              Our 3D printing program offers an exciting opportunity to explore
              the world of additive manufacturing. Whether you're a beginner or
              an experienced designer, you'll learn how to create prototypes,
              models, and even end-use products using cutting-edge 3D printers.
            </p>
            <p>
              In this course, you'll gain hands-on experience with the latest
              technologies, software, and design principles, all while creating
              unique and functional items.
            </p>
          </div>
        </div>
      </div>

      <div className="printing">
        <div className="printing-content">
          <div className="printing-text">
            <h2>Learn 3D Printing</h2>
            <p>
              Our 3D printing program offers an exciting opportunity to explore
              the world of additive manufacturing. Whether you're a beginner or
              an experienced designer, you'll learn how to create prototypes,
              models, and even end-use products using cutting-edge 3D printers.
            </p>
            <p>
              In this course, you'll gain hands-on experience with the latest
              technologies, software, and design principles, all while creating
              unique and functional items.
            </p>
          </div>

          <div className="printing-model">
            <model-viewer
              src="https://modelviewer.dev/shared-assets/models/Astronaut.glb"
              alt="Astronaut"
              auto-rotate
              camera-controls
              background-color="#f0f0f0"
              style={{
                width: "100%",
                height: "400px",
              }}
            ></model-viewer>
          </div>
        </div>
      </div>

      <h1 className="main-heading">Student Achievements</h1>
      <div className="achievement-carousel">
        <button className="carousel-btn prev" onClick={handlePrev}>
          &#10094;
        </button>

        <div className="achievement-card">
          <div className="project-header">
            <div className="uni">
              <img src={uni} alt="University Logo" />
            </div>
            <div className="uni">
              <img src={ssip} alt="University Logo" />
            </div>
            <div className="cmpy">
              <img src={cmpy} alt="Company Logo" />
            </div>
          </div>
            <div className="pname" >

            <h3>{achievements[currentIndex].projectName}</h3>
            </div>

          <p>
            Grant Amount:{" "}
            <strong>₹{achievements[currentIndex].grantAmount}</strong>
          </p>
          <p className="details">{achievements[currentIndex].details}</p>

          <div className="students">
            {achievements[currentIndex].students.map((student, index) => (
              <div key={index} className="student">
                <img
                  src={student.imageUrl}
                  alt={student.name}
                  className="student-image"
                />
                <p className="student-name">{student.name}</p>
              </div>
            ))}
          </div>
          <div className="mentor">
            <h4>Faculty Mentor:</h4>
            <p>{achievements[currentIndex].mentor}</p> {}
          </div>
        </div>

        <button className="carousel-btn next" onClick={handleNext}>
          &#10095;
        </button>
      </div>
      <h1 className="main-heading">Previous Events</h1>
    </div>
  );
};

export default AchievementCarousel;
