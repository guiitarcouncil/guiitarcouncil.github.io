import React from "react";
import "../Programs/Programs.css";
import Navbar from "../Navbar";
import NavbarMobile from "../NavbarMobile";
import Footer from "../Footer/Footer";
import AchievementCarousel from "../Programs/AchievementCarousel";
import programImage from "../../Assets/others/contact.jpg";

const achievements = [
  { studentCount: 2, grantAmount: 5000, projectName: "AI Research" },
  { studentCount: 15, grantAmount: 10000, projectName: "Green Energy" },
  { studentCount: 8, grantAmount: 3000, projectName: "Tech for Good" },
];

function Programs() {
  return (
    <div className="programs">
      <Navbar />
      <NavbarMobile />

      <div className="img-container">
        <img
          src={programImage}
          alt="Programs Background"
          className="programs-image"
        />
        <div className="funding-text-overlay">Our Programs
          
        </div>
        
      </div>

      <div id="programs-achievements" className="programs-achievements">
        <AchievementCarousel achievements={achievements} />
      </div>

      <div className="phe">
        <h1 id="phe-hea" className="phe-hea">
          Previous Events
        </h1>
      </div>
      <Footer/>
    </div>
  );
}

export default Programs;
