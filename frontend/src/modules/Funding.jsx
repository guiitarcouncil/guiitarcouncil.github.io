import React from 'react';
import './Funding.css';
import wallImage from '../assets/wall.jpg';
import './Funding.css';


const Funding = () => {
  return (
    <div className="img-container">
      <img src={wallImage} alt="Background image" className="funding-image" />
      <div className="funding-text-overlay">Funding Opportunities</div>
    </div>
  );
};

export default Funding;

