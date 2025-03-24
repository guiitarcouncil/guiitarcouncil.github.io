import './Carousel.css';
import React from 'react';
import Particle from './Particle';

function Carousel() {
  return (
    <div className="carousel">
      <div className="carousel-particles">
        <Particle />
      </div>

      <div className="carousel-content">
        <h1>
          Fueling Students, Entrepreneurs and Innovators Through Education, Collaboration, and Acceleration.
        </h1>
      </div>
    </div>
  );
}

export default Carousel;
