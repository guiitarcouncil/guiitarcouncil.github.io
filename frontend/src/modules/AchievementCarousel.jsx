import "@google/model-viewer";
import React, { useState } from "react";
import "./AchievementCarousel.css";
import aksha from "../assets/achievements/aksha.jpg";
import khushi from "../assets/achievements/khushi.jpg";
import tirth from "../assets/achievements/tirth.jpg";
import drone from "../assets/others/drone.jpg";
import uni from "../assets/logos/university-logo.png";
import cmpy from "../assets/logos/G.png";
import ssip from "../assets/associations/as4-new.png";

import kartavi from "../assets/achievements/kartavi.jpg";
import lavanya from "../assets/achievements/lavanya.jpg";
import vrati from "../assets/achievements/vrati.jpg";
import divya from "../assets/achievements/divya.jpg";
import chahana from "../assets/achievements/chahana.jpg";
import vidur from "../assets/achievements/vidur.jpg";
import diyaVisani from "../assets/achievements/diyaVisani.jpg";
import aakankshaYadav from "../assets/achievements/aakankshaYadav.jpg";
import Riyan from "../assets/achievements/Reeyan.jpg";
import eshanDevadhara from "../assets/achievements/eshanDevadhara.jpg";
import dhruviGohel from "../assets/achievements/dhruviGohel.jpg";
import devShitole from "../assets/achievements/devShitole.jpg";
import tanujaVadi from "../assets/achievements/tanujaVadi.jpg";
import reeyaPrajapati from "../assets/achievements/reeyaPrajapati.jpg";
import adityaprajapati from "../assets/achievements/adityaprajapati.jpg";
import rohan from "../assets/achievements/rohan.jpg";
import ankush from "../assets/achievements/ankush.jpg";
import shreyaLad from "../assets/achievements/shreyaLad.jpg";
import AtharvaSisodiya from "../assets/achievements/AtharvaSisodiya.jpg";
import ParthGol from "../assets/achievements/ParthGol.jpg";
import janmejayBorad from "../assets/achievements/janmejayBorad.jpg";
import parthGol from "../assets/achievements/parthGol.jpg";
import pranav from "../assets/achievements/pranav.jpg";
import Madhav_Trivedi from "../assets/achievements/Madhav_Trivedi.jpg";
import shambhavi from "../assets/achievements/shambhavi.jpg";
import teerth from "../assets/achievements/teerth.jpg";
import mittal from "../assets/achievements/mittal.jpg";
import Foram from "../assets/achievements/Foram.jpg";
import Aayush from "../assets/achievements/Aayush.jpg";
import urmil from "../assets/achievements/urmil.jpg";
import smit_ssip from "../assets/achievements/smit_ssip.jpg";

const achievements = [
  {//Done-NF
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
  {//Done
    projectName: "Vegano Joy",
    grantAmount: "25,000",
    details:
      "USP: Plant-based meats are meat-like products that are expected to have the same taste, texture, experience and nutritional value as that of animal meat and made from plant-based ingredients. So basically, plant-based meats replicate real meat, except for the fact it does not use animal meat.",
    students: [
      { name: "Mr Rohan Asthana", imageUrl: rohan },
      { name: "Mr. Aditya S. Prajapati", imageUrl: adityaprajapati },
      { name: "Ankush Makwana", imageUrl: ankush },
      { name: "Shreya Lad", imageUrl: shreyaLad },
      
    ],
    mentor: "Dr. Akhilesh Prajapati, Sr. Assistant Professor (Biological Science)", // Only store the name
  },
  {//Done
    projectName: "Chewable Oral Toothpaste",
    grantAmount: "83,500",
    details:
      "No Chemicals & 100% Herbal Secures Oral Health with the Help of Ancient Indian Ayurvedic medicine User friendly & Easy to Carry Multi Purpose (Serves as Toothpaste & Mouth freshner)",
    students: [
      { name: "Aakanksha Yadav", imageUrl: aakankshaYadav },
      { name: "Diya Visani", imageUrl: diyaVisani },
      
    ],
    
    mentor: "Dr. Akhilesh Prajapati, Sr. Assistant Professor (Biological Science)", // Only store the name
  },
  {//Done
    projectName: "Nutriblend Pro ",
    grantAmount: "30,000",
    details:
      "We're tackling the issue of the growing occurrence of nutritional deficiencies and the demand for a practical, eco-friendly, and health-conscious remedy. Numerous individuals following vegan or vegetarian diets encounter challenges in meeting their daily nutrient needs due to dietary constraints, hectic routines, and limited availability of nourishing foods. The typical nutrient gaps among vegans and vegetarians encompass Vitamin B₁₂, Vitamin D, Omega-3 fatty acids, Iodine, Iron, Calcium, and Zinc.",
    students: [
      { name: "Janmejay Borad", imageUrl:janmejayBorad  },
      { name: "Parth Gol", imageUrl: parthGol },
      { name: "Pranav Kadam", imageUrl: pranav },
      
    ],
    
    mentor: "Dr. Akhilesh Prajapati, Sr. Assistant Professor (Biological Science)", // Only store the name
  },
  {//DONE
    projectName: "USV Neil (Unmanned Maritime Vessel/ Drone)",
    grantAmount: "158,000",
    details:
      "USP: USV Neil: your versatile solution for sustainable unmanned surface vehicle. Our innovative technology redefines maritime operations with multifunctional capabilities, from surveillance and monitoring to research and rescue missions.",
    students: [
      { name: "Eshan Devadhara", imageUrl: eshanDevadhara },
      { name: "Atharva Sisodiya", imageUrl: AtharvaSisodiya },
      { name: "Dhruvi Gohil", imageUrl: dhruviGohel },
      { name: "Reeyan Shaikh", imageUrl: Riyan },
      
    ],
    
    mentor: "Mr. Yatharth Bhatt, Lab Assistant, SOT, GSFCU", // Only store the name
  },
  {//Done
    projectName: "Ayurtrix - Three Folding Life",
    grantAmount: "250,000",
    details:
      "Ayurtrix is working to increase the production of authentic Ayurvedic products. to meet the growing demand and provide consumers with products that have the desired health benefits.",
    students: [
      { name: "Dev Shitole", imageUrl: devShitole },
      { name: "Reeya Prajapati", imageUrl: reeyaPrajapati  },
      { name: "Tanuja vadi", imageUrl: tanujaVadi },
      
    ],
    
    mentor: "Prof. Devjani Banerjee", // Only store the name
  },
  {//Done
    projectName: "ESRT-ALOU- The Emotional Support Robot Teddy.",
    grantAmount: "88,000",
    details:
      "ALOU is designed to be a source of genuine comfort and companionship. The robot teddy bear will serve as an emotional support system, providing users with tactile, conversational, and emotional engagement. It aims to fill the gaps where traditional support systems may be unavailable or inadequate.",
    students: [
      { name: "Madhav Trivedi", imageUrl: Madhav_Trivedi },
      { name: "Shambhavi J Vyas", imageUrl: shambhavi  },
      { name: "Theerth K R ", imageUrl: teerth },
      
    ],
    
    mentor: "Dr. Deepak Parashar, Associate Professor (CSE)", // Only store the name
  },
  {//Done-Image Remaing
    projectName: "Emotion detection through speech using AI/ML. All international languages mapped.",
    grantAmount: "37,000",
    details:
      "Emotion detection through speech is a  technology that utilizes advanced signal  processing and machine learning  techniques to analyze vocal cues and  identify human emotions in real-time. By  extracting features from speech signals  and applying neural network models, this  system aims to enhance human-computer  interactions and various applications such  as customer service and mental health  monitoring.",
    students: [
      { name: "Dave Smit J.", imageUrl: smit_ssip },//Image remaining
      { name: "Mittal Punvar", imageUrl: mittal  },
      
    ],
    
    mentor: "Ms. Mosam Patel, Assistant Professor, CSE", // Only store the name
  },
  {//
    projectName: "Bio-Lastic: A Safe Future with Flowers",
    grantAmount: "100,000",
    details:
      "BIO-LASTIC was conceived by Foram Mistry and Aayush Varia, two BSc Chemistry students. With guidance from Dr. Priya Goel, we realized the importance of finding sustainable solutions for the future. Inspired by the beauty and abundance of flowers in ritual places, we decided to harness their potential and transform them into a biodegradable polymer",
    students: [
      { name: "Foram Mistry", imageUrl: Foram },//Image remaining
      { name: "Aayush Varia", imageUrl: Aayush  },
      { name: "Urmil Patel", imageUrl: urmil  },
      
    ],
    
    mentor: "Ms. Mosam Patel, Assistant Professor, CSE", // Only store the name
  },

  {//Done-NF
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
