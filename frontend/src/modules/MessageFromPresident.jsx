import React from 'react';
import './MessageFromPresident.css';
import presidentImage from '../assets/president.jpeg'; 


function MessageFromPresident() {
  return (
    <div className="quote-card">
      <div className="quote-image">
        <img src={presidentImage} alt="President" />
      </div>
      <div className="quote-content">
        <p className="quote-text">
          The journey of a thousand miles begins with a single step. A vision to empower innovators starts with supporting their dreams.
        </p>
        <p className="quote-author"> - P K Taneja, IAS (Retd.) <br></br> President, GUIITAR Council</p>
      </div>
    </div>
  );
};

export default MessageFromPresident;