import React from 'react';
import './Carousel.css';
import Particle from './Particle';

function Carousel() {
  return (
    <div className="carousel">
      <div className="carousel-particles">
        <Particle />
      </div>

      <div className="carousel-content">
        <h1>
          Fueling Students, Entrepreneurs and Innovators <br /> Through Education, <br /> Collaboration, and <br /> Acceleration
        </h1>
      </div>
    </div>
  );
}

export default Carousel;
