import "@google/model-viewer";
import React, { useState } from "react";
import "./AchievementCarousel.css";
import aksha from "../../Assets/achievements/aksha.jpg";
import khushi from "../../Assets/achievements/khushi.jpg";
import tirth from "../../Assets/achievements/tirth.jpg";
import drone from "../../Assets/others/drone.jpg";
import uni from "../../Assets/logos/university-logo.png";
import cmpy from "../../Assets/logos/G.png";
import ssip from "../../Assets/associations/as4-new.png";
import kartavi from "../../Assets/achievements/kartavi.jpg";
import lavanya from "../../Assets/achievements/lavanya.jpg";
import vrati from "../../Assets/achievements/vrati.jpg";
import divya from "../../Assets/achievements/divya.jpg";
import chahana from "../../Assets/achievements/chahana.jpg";
import vidur from "../../Assets/achievements/vidur.jpg";
import diyaVisani from "../../Assets/achievements/diyaVisani.jpg";
import aakankshaYadav from "../../Assets/achievements/aakankshaYadav.jpg";
import Riyan from "../../Assets/achievements/Reeyan.jpg";
import eshanDevadhara from "../../Assets/achievements/eshanDevadhara.jpg";
import dhruviGohel from "../../Assets/achievements/dhruviGohel.jpg";
import devShitole from "../../Assets/achievements/devShitole.jpg";
import tanujaVadi from "../../Assets/achievements/tanujaVadi.jpg";
import reeyaPrajapati from "../../Assets/achievements/reeyaPrajapati.jpg";
import adityaprajapati from "../../Assets/achievements/adityaprajapati.jpg";
import rohan from "../../Assets/achievements/rohan.jpg";
import ankush from "../../Assets/achievements/ankush.jpg";
import shreyaLad from "../../Assets/achievements/shreyaLad.jpg";
import AtharvaSisodiya from "../../Assets/achievements/AtharvaSisodiya.jpg";
import janmejayBorad from "../../Assets/achievements/janmejayBorad.jpg";
import parthGol from "../../Assets/achievements/parthGol.jpg";
import pranav from "../../Assets/achievements/pranav.jpg";
import Madhav_Trivedi from "../../Assets/achievements/Madhav_Trivedi.jpg";
import shambhavi from "../../Assets/achievements/shambhavi.jpg";
import teerth from "../../Assets/achievements/teerth.jpg";
import mittal from "../../Assets/achievements/mittal.jpg";
import Foram from "../../Assets/achievements/Foram.jpg";
import Aayush from "../../Assets/achievements/Aayush.jpg";
import urmil from "../../Assets/achievements/urmil.jpg";
import smit_ssip from "../../Assets/achievements/smit_ssip.jpg";

const AchievementCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const achievements = [
    {
      //Done-NF
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
      //Done
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
      mentor:
        "Dr. Akhilesh Prajapati, Sr. Assistant Professor (Biological Science)", // Only store the name
    },
    {
      //Done
      projectName: "Chewable Oral Toothpaste",
      grantAmount: "83,500",
      details:
        "No Chemicals & 100% Herbal Secures Oral Health with the Help of Ancient Indian Ayurvedic medicine User friendly & Easy to Carry Multi Purpose (Serves as Toothpaste & Mouth freshner)",
      students: [
        { name: "Aakanksha Yadav", imageUrl: aakankshaYadav },
        { name: "Diya Visani", imageUrl: diyaVisani },
      ],

      mentor:
        "Dr. Akhilesh Prajapati, Sr. Assistant Professor (Biological Science)", // Only store the name
    },
    {
      //Done
      projectName: "Nutriblend Pro ",
      grantAmount: "30,000",
      details:
        "We're tackling the issue of the growing occurrence of nutritional deficiencies and the demand for a practical, eco-friendly, and health-conscious remedy. Numerous individuals following vegan or vegetarian diets encounter challenges in meeting their daily nutrient needs due to dietary constraints, hectic routines, and limited availability of nourishing foods. The typical nutrient gaps among vegans and vegetarians encompass Vitamin B₁₂, Vitamin D, Omega-3 fatty acids, Iodine, Iron, Calcium, and Zinc.",
      students: [
        { name: "Janmejay Borad", imageUrl: janmejayBorad },
        { name: "Parth Gol", imageUrl: parthGol },
        { name: "Pranav Kadam", imageUrl: pranav },
      ],

      mentor:
        "Dr. Akhilesh Prajapati, Sr. Assistant Professor (Biological Science)", // Only store the name
    },
    {
      //DONE
      projectName: "USV Neil (Unmanned Maritime Vessel/ Drone)",
      grantAmount: "158,000",
      details:
        "USP: USV Neil: your versatile solution for sustainable unmanned surface vehicle. Our innovative technology redefines maritime operations with multifunctional capabilities, from surveillance and monitoring to research and rescue missions.",
      students: [
        { name: "Eshan Devadhara", imageUrl: eshanDevadhara },
        { name: "Atharva Sisodiya", imageUrl: AtharvaSisodiya },
        { name: "Dhruvi Gohel", imageUrl: dhruviGohel },
        { name: "Ryaan Shaikh", imageUrl: Riyan },
      ],

      mentor: "Mr. Yatharth Bhatt, Lab Assistant, SOT, GSFCU", // Only store the name
    },
    {
      //Done
      projectName: "Ayurtrix - Three Folding Life",
      grantAmount: "250,000",
      details:
        "Ayurtrix is working to increase the production of authentic Ayurvedic products. to meet the growing demand and provide consumers with products that have the desired health benefits.",
      students: [
        { name: "Dev Shitole", imageUrl: devShitole },
        { name: "Reeya Prajapati", imageUrl: reeyaPrajapati },
        { name: "Tanuja vadi", imageUrl: tanujaVadi },
      ],

      mentor: "Prof. Devjani Banerjee", // Only store the name
    },
    {
      //Done
      projectName: "ESRT-ALOU- The Emotional Support Robot Teddy.",
      grantAmount: "88,000",
      details:
        "ALOU is designed to be a source of genuine comfort and companionship. The robot teddy bear will serve as an emotional support system, providing users with tactile, conversational, and emotional engagement. It aims to fill the gaps where traditional support systems may be unavailable or inadequate.",
      students: [
        { name: "Madhav Trivedi", imageUrl: Madhav_Trivedi },
        { name: "Shambhavi J Vyas", imageUrl: shambhavi },
        { name: "Theerth K R ", imageUrl: teerth },
      ],

      mentor: "Dr. Deepak Parashar, Associate Professor (CSE)", // Only store the name
    },
    {
      //Done-Image Remaing
      projectName:
        "Emotion detection through speech using AI/ML. All international languages mapped.",
      grantAmount: "37,000",
      details:
        "Emotion detection through speech is a  technology that utilizes advanced signal  processing and machine learning  techniques to analyze vocal cues and  identify human emotions in real-time. By  extracting features from speech signals  and applying neural network models, this  system aims to enhance human-computer  interactions and various applications such  as customer service and mental health  monitoring.",
      students: [
        { name: "Dave Smit J.", imageUrl: smit_ssip }, //Image remaining
        { name: "Mittal Punvar", imageUrl: mittal },
      ],

      mentor: "Ms. Mosam Patel, Assistant Professor, CSE", // Only store the name
    },
    {
      //
      projectName: "Bio-Lastic: A Safe Future with Flowers",
      grantAmount: "100,000",
      details:
        "BIO-LASTIC was conceived by Foram Mistry and Aayush Varia, two BSc Chemistry students. With guidance from Dr. Priya Goel, we realized the importance of finding sustainable solutions for the future. Inspired by the beauty and abundance of flowers in ritual places, we decided to harness their potential and transform them into a biodegradable polymer",
      students: [
        { name: "Foram Mistry", imageUrl: Foram }, //Image remaining
        { name: "Aayush Varia", imageUrl: Aayush },
        { name: "Urmil Patel", imageUrl: urmil },
      ],

      mentor: "Ms. Mosam Patel, Assistant Professor, CSE", 
    },

    {
      //Done-NF
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
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % achievements.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + achievements.length) % achievements.length
    );
  };

  const { projectName, grantAmount, details, students, mentor } =
    achievements[currentIndex];

  return (
    <div className="ac">
      <h1 className="main-heading">Explore Our Programs</h1>
      <div className="drone">
        <div id="drone" className="drone-content">
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
        <div id="3d" className="printing-content">
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
              src="https://modelviewer.dev/shared-Assets/models/Astronaut.glb"
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
    

      <h1 id="active" className="main-heading">
        Student Achievements
      </h1>
      <div className="achievement-carousel">
        <button
          className="carousel-btn prev"
          onClick={handlePrev}
          disabled={currentIndex === 0}
          aria-label="Previous Achievement"
        >
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
          <div className="pname">
            <h3>{projectName}</h3>
          </div>

          <p>
            Grant Amount: <strong>₹{grantAmount}</strong>
          </p>
          <p className="details">{details}</p>

          <div className="students">
            {students.map((student, index) => (
              <div key={index} className="student">
                <img src={student.imageUrl} alt={student.name} />
                <p className="student-name">{student.name}</p>
              </div>
            ))}
          </div>
          <div className="mentor">
            <h4>Faculty Mentor:</h4>
            <p>{mentor}</p>
          </div>
        </div>

        <button
          className="carousel-btn next"
          onClick={handleNext}
          disabled={currentIndex === achievements.length - 1}
          aria-label="Next Achievement"
        >
          &#10095;
        </button>
      </div>
    </div>
  );
};
export default AchievementCarousel; 