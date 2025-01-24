import React from 'react';
import './Funding.css';
import ssip from '../assets/associations/as4-new.png';
import ipr_logo from '../assets/others/ipr.jpg';
import wall2 from '../assets/others/contact.jpg'; 

const Funding = () => {
  return (
    <>
      
      <div className="img-container">
        <img src={wall2} alt="Background image" className="funding-image" />
        <div className="funding-text-overlay">Funding Opportunities</div>
      </div>

      <div className="main-content">
        <div className="grid-container">
          <div className="card">
            <h3 id = "ssip">SSIP Grant</h3>
            <p>
              SSIP (Student Startup and Innovation Policy) is an initiative by Gujarat Government to empower students and young innovators by fostering a culture of entrepreneurship and innovation. It supports startups in both traditional and emerging technologies. Open to students and alumni across all education levels, SSIP offers financial assistance for prototype or proof of concept (POC) with mentorship and infrastructure to transform ideas into impactful ventures.
            </p>
            <div className="funding-btn-container">
              <div className="funding-btn"><button>Learn More</button></div>
              <div className="funding-btn"><button>Apply Now!</button></div>
            </div>
          </div>
          <div className="image-card"><img src={ssip} alt="" height={"180vh"} /></div>
          <div className="image-card"><img src={ssip} alt="" height={"180vh"} /></div>
          <div className="card">
            <h3 id ="nodal">Nodal Institute Fund</h3>
            <p>
              GUIITAR Council, recognized under the Gujarat Industrial Policy 2020, empowers startups and innovators by providing funding, mentorship, and resources. With a focus on sectors like AI, agriculture, clean-tech, and healthcare, it offers seed funding up to ₹30 lakhs, monthly sustenance allowances, skill development grants, and support for acceleration programs, fostering a thriving startup ecosystem in Vadodara and beyond.
            </p>
            <div className="funding-btn-container">
              <div className="funding-btn"><button>Learn More</button></div>
              <div className="funding-btn"><button>Apply Now!</button></div>
            </div>
          </div>
          <div className="card">
            <h3 >IPR Centre</h3>
            <p>
              The IPR Centre at GSFC University supports students, faculty, and alumni in protecting their intellectual creations, including patents, copyrights, trademarks, and designs. It raises awareness, provides end-to-end guidance, and ensures effective IP management. Financial support is offered for IP filings under SSIP, covering domestic and international patents, trademarks, copyrights, and more, fostering innovation and securing intellectual assets.
            </p>
            <div className="funding-btn-container">
              <div className="funding-btn"><button>Learn More</button></div>
              <div className="funding-btn"><button>Apply Now!</button></div>
            </div>
          </div>
          <div className="image-card ipr-logo"><img src={ipr_logo} alt="" height={"400vh"} /></div>
        </div>
      </div>
    </>
  );
};

export default Funding;
