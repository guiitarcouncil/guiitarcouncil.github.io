import './Funding.css';
import React from 'react';
import Navbar from "../Navbar"
import Footer from "../Footer/Footer"
import NavbarMobile from "../NavbarMobile"
const ssip = "/Assets/associations/as4-new.png";
const ipr_logo = "/Assets/others/ipr.jpg";
const wall2 = "/Assets/others/contact.jpg"; 
const nodal = "/Assets/associations/guj.png";

const Funding = () => {
  return (
    <>
      <Navbar/>
      <NavbarMobile/>
      <div className="img-container">
        <img id = "funding-image" src={wall2} alt="Background image" className="funding-image" />
        <div className="funding-text-overlay">Funding Opportunities</div>
      </div>

      <div className="main-content">
        <div className="grid-container">
          <div className="car">
            <h3 id = "ssip">SSIP 2.0</h3>
            <p>
              SSIP (Student Startup and Innovation Policy) is an initiative by Gujarat Government to empower students and young innovators by fostering a culture of entrepreneurship and innovation. It supports startups in both traditional and emerging technologies. Open to students and alumni across all education levels, SSIP offers financial assistance for prototype or proof of concept (POC) with mentorship and infrastructure to transform ideas into impactful ventures.
            </p>
            <div className="funding-btn-container">
              <div className="funding-btn"><a href="https://drive.google.com/drive/folders/1EspgxXUoavBlETSnxstEfpMGsI_fCFma" target='_blank'><button>Learn More</button></a></div>
              <div className="funding-btn"><a href="https://docs.google.com/forms/d/e/1FAIpQLSchfX1JB-oZvQOm4ff9iJuQjD9f1Tu3T84OT3279RoHjq_ivg/viewform" target='_blank'><button>Apply Now!</button></a></div>
            </div>
          </div>
          <div className="image-car"><img src={ssip} alt="" height={"180vh"} /></div>
          <div className="image-car"><img src={nodal} alt="" height={"400vh"} style={{margin:"-40px"}}/> </div>
          <div className="car">
            <h3 id ="nodal">Nodal Institute </h3>
            <p>
              GUIITAR Council, recognized under the Gujarat Industrial Policy 2020, empowers startups and innovators by providing funding, mentorship, and resources. With a focus on sectors like AI, agriculture, clean-tech, and healthcare, it offers seed funding up to ₹30 lakhs, monthly sustenance allowances, skill development grants, and support for acceleration programs, fostering a thriving startup ecosystem in Vadodara and beyond.
            </p>
            <div className="funding-btn-container">
              <div className="funding-btn"><a href="https://drive.google.com/drive/folders/1eTX32wmbZudS-lHEtyVyEwtc8CM55iX5" target='_blank'><button>Learn More</button></a></div>
              <div className="funding-btn"><a href="https://docs.google.com/forms/d/e/1FAIpQLSchfX1JB-oZvQOm4ff9iJuQjD9f1Tu3T84OT3279RoHjq_ivg/viewform" target='_blank'><button>Apply Now!</button></a></div>
            </div>
          </div>
          <div className="car">
            <h3 >IPR Centre</h3>
            <p>
              The IPR Centre at GSFC University supports students, faculty, and alumni in protecting their intellectual creations, including patents, copyrights, trademarks, and designs. It raises awareness, provides end-to-end guidance, and ensures effective IP management. Financial support is offered for IP filings under SSIP, covering domestic and international patents, trademarks, copyrights, and more, fostering innovation and securing intellectual Assets.
            </p>
            <div className="funding-btn-container">
              <div className="funding-btn"><a href="https://drive.google.com/file/d/1krFQgyQ_nasChoSLrFF8zbHzNg1yM9G9/view" target='_blank'><button>Learn More</button></a></div>
              <div className="funding-btn"><a href="https://docs.google.com/forms/d/e/1FAIpQLSc0zfawCS7M_Q-uOzlA87ARxNCCx-wNUXAAx_54RAORIF_w6g/viewform" target='_blank'><button>Apply Now!</button></a></div>
            </div>
          </div>
          <div className="image-car ipr-logo"><img src={ipr_logo} alt="" height={"400vh"} /></div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Funding;
