import React from 'react';
import './Programs.css';
import Navbar from '../modules/Navbar';
import AchievementCarousel from '../modules/AchievementCarousel';
import programImage from '../assets/contact.jpg'; // Add your image file path here

const achievements = [
  { studentCount: 2, grantAmount: 5000, projectName: 'AI Research' },
  { studentCount: 15, grantAmount: 10000, projectName: 'Green Energy' },
  { studentCount: 8, grantAmount: 3000, projectName: 'Tech for Good' },
];

function Programs() {
  return (
    <div className="programs">
      <Navbar />

      {/* Add an image with text overlay */}
      <div className="img-container">
        <img src={programImage} alt="Programs Background" className="programs-image" />
        <div className="programs-text-overlay">Our Programs</div>
      </div>

      {/* Achievements Section */}
      <section className="programs-achievements">
        <AchievementCarousel achievements={achievements} />
      </section>
    </div>
  );
}

export default Programs;
