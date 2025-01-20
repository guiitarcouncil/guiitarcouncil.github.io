import React from 'react';
import './Funding.css';
import wallImage from '../assets/wall.jpg';
import ssip from '../assets/associations/as4-new.png';
import ipr_logo from '../assets/ipr.jpg'

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
            <h3>SSIP Grant</h3>
            <p>The Gujarat Student Startup and Innovation Policy (SSIP 2.0) aims to foster innovation and entrepreneurship among students, providing support for Proof of Concept (PoC). The policy offers financial assistance, mentorship, infrastructure, and networking opportunities to help students and young innovators turn their ideas into scalable solutions. Focus areas include clean energy, AI, robotics, electric vehicles, and more. The policy is designed to empower youth and contribute to sustainable growth, with grants up to Rs. 2.50 lakhs, and is active until March 2027.</p>
            <div className="funding-btn-container">
              <div className="funding-btn"><a href="https://drive.google.com/drive/folders/1EspgxXUoavBlETSnxstEfpMGsI_fCFma" target="_blank" rel="noopener noreferrer"><button>Learn More</button></a></div>
              <div className="funding-btn"><a href="https://docs.google.com/forms/d/e/1FAIpQLSchfX1JB-oZvQOm4ff9iJuQjD9f1Tu3T84OT3279RoHjq_ivg/viewform" target="_blank" rel="noopener noreferrer"><button>Apply Now!</button></a></div>
            </div>
          </div>
          <div className="image-card"><img src={ssip} alt="" height={"180vh"}/></div>
          <div className="image-card"><img src={ssip} alt="" height={"180vh"}/></div>
          <div className="card">
            <h3>Nodal Institute</h3>
            <p>The GUIITAR Council, a Section 8 Company promoted by GSFC University, is recognized as a Nodal Institute by the Industries Commissionerate, Government of Gujarat under the Gujarat Industrial Policy - 2020. It aims to develop an ecosystem that fosters innovation and entrepreneurship, focusing on sectors like agriculture, AI, biotechnology, clean-tech, cybersecurity, energy, healthcare, and more. Startups in and around Vadodara can benefit from various incentives, including seed support up to INR 30 lakh, monthly sustenance allowances, skill development funding, and assistance for acceleration programs. Additionally, startups with significant social impact can receive up to INR 10 lakh in support. Pre-Series A funding and interest subsidies are also available. Interested innovators can apply through the GUIITAR Council's platform.</p>
            <div className="funding-btn-container">
              <div className="funding-btn"><a href="https://drive.google.com/drive/folders/1eTX32wmbZudS-lHEtyVyEwtc8CM55iX5" target="_blank" rel="noopener noreferrer"><button>Learn More</button></a></div>
              <div className="funding-btn"><a href="https://docs.google.com/forms/d/e/1FAIpQLSchfX1JB-oZvQOm4ff9iJuQjD9f1Tu3T84OT3279RoHjq_ivg/viewform" target="_blank" rel="noopener noreferrer"><button>Apply Now!</button></a></div>
            </div>
          </div>
          <div className="card">
            <h3>IPR</h3>
            <p>GSFC University and GUIITAR Council has established an Intellectual Property Rights (IPR) Centre to support and protect the innovative creations of its faculty and students. The IPR Centre provides comprehensive assistance in securing patents, copyrights, trademarks, industrial designs, plant variety registrations, and more. It offers end-to-end support, including managing IP filings and implementing IP guidelines across the university. As part of the Student Startup and Innovation Policy (SSIP), the Centre provides financial support for national and international IP filings, covering government fees and facilitators. This includes funding for patents, copyrights, trademarks, industrial designs, and more, ensuring that the university community can safeguard their intellectual assets effectively.</p>
            <div className="funding-btn-container">
              <div className="funding-btn"><a href="https://drive.google.com/file/d/1krFQgyQ_nasChoSLrFF8zbHzNg1yM9G9/view" target="_blank" rel="noopener noreferrer"><button>Learn More</button></a></div>
              <div className="funding-btn"><a href="https://docs.google.com/forms/d/e/1FAIpQLSc0zfawCS7M_Q-uOzlA87ARxNCCx-wNUXAAx_54RAORIF_w6g/viewform" target="_blank" rel="noopener noreferrer"><button>Apply Now!</button></a></div>
            </div>
          </div>
          <div className="image-card ipr-logo"><img src={ipr_logo} alt="" height={"400vh"}/></div>
        </div>
      </main>
  </>
  );
};

export default Funding;
