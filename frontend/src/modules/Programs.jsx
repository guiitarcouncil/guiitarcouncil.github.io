import React from 'react';
import './Programs.css';
import Navbar from '../modules/Navbar';
import AchievementCarousel from '../modules/AchievementCarousel';

const achievements = [
  { studentCount: 2, grantAmount: 5000, projectName: 'AI Researchy' },
  { studentCount: 15, grantAmount: 10000, projectName: 'Green Energy' },
  { studentCount: 8, grantAmount: 3000, projectName: 'Tech for Good' },
];

function Programs() {
  return (
    <div className="programs">
      <Navbar />
      
      <section className="programs-achievements">
        <AchievementCarousel achievements={achievements} />
      </section>
    </div>
  );
}

export default Programs;
