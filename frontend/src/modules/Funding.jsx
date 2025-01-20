import React from 'react';
import './Funding.css';
import wallImage from '../assets/wall.jpg';
import ssip from '../assets/associations/as4-new.png';



const Funding = () => {
  return (
  <>
    <div className="img-container">
      <img src={wallImage} alt="Background image" className="funding-image" />
      <div className="funding-text-overlay">Funding Opportunities
      </div>
    </div>
    <main className="main-content">
        <div className="grid-container">
          <div className="card">
            <h3>SSIP</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea maxime, quas eligendi, sed a officia dignissimos qui quisquam dolorem expedita esse, soluta voluptate rem. Rem inventore atque magni odio accusantium quae placeat magnam ea quibusdam!</p>
            <button>Apply Now!</button>
          </div>
          <div className="image-card"><img src={ssip} alt="" height={"180vh"}/></div>
          <div className="image-card"><img src={ssip} alt="" height={"180vh"}/></div>
          <div className="card">
            <h3>Nodal</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea maxime, quas eligendi, sed a officia dignissimos qui quisquam dolorem expedita esse, soluta voluptate rem. Rem inventore atque magni odio accusantium quae placeat magnam ea quibusdam!</p>
            <button>Apply Now!</button>
          </div>
          <div className="card">
            <h3>IPR</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea maxime, quas eligendi, sed a officia dignissimos qui quisquam dolorem expedita esse, soluta voluptate rem. Rem inventore atque magni odio accusantium quae placeat magnam ea quibusdam!</p>
            <button>Apply Now!</button>
          </div>
          <div className="image-card"><img src={ssip} alt="" height={"180vh"}/></div>
        </div>
      </main>
  </>
  );
};

export default Funding;

