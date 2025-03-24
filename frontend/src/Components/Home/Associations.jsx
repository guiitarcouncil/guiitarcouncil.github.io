import React from "react";
import "./Associations.css";

// import img1 from "../../Assets/associations/as1-new.png";
import img1 from "../../Assets/associations/as1-new.png";
import img2 from "../../Assets/associations/guj.png";
import img3 from "../../Assets/associations/as3-new.png";
import img4 from "../../Assets/associations/as4-new.png";
import img5 from "../../Assets/associations/as5-new.png";
import img6 from "../../Assets/associations/as6-new.png";
import img7 from "../../Assets/associations/as7-new.png";
import img8 from "../../Assets/associations/as8.png";
import img9 from "../../Assets/associations/as9.png";
import img10 from "../../Assets/associations/as10-new.png";
import img11 from "../../Assets/associations/as11-new.png";
import img12 from "../../Assets/associations/as12-new.png";
import img13 from "../../Assets/associations/as13-new.png";
import img14 from "../../Assets/associations/as14-new.png";
import img15 from "../../Assets/associations/as15-new.png";
import img16 from "../../Assets/associations/as16-new.png";
import img17 from "../../Assets/associations/as17-new.png";
import img18 from "../../Assets/associations/as18-new.png";
import img19 from "../../Assets/associations/as19-new.jpeg";
import img20 from "../../Assets/associations/as20-new.png";

const Associations = () => {
    return (
      <div id="associations" className="associations-container">
        <h2 className="associations-heading">You're in Good Company</h2>
        <div className="associations-grid">
          <a href="https://udhyog.gujarat.gov.in/" target="_blank" rel="noopener noreferrer">
            <img src={img1} alt="Indian Commissionerate" className="association-logo" style={{ width: "200px" }} />
          </a>
          <a href="https://startup.gujarat.gov.in/" target="_blank" rel="noopener noreferrer">
            <img src={img2} alt="Gujarat Startup" className="association-logo" style={{ width: "210px" }} />
          </a>
          <a href="https://iic.mic.gov.in/" target="_blank" rel="noopener noreferrer">
            <img src={img3} alt="Institution's Innovation Council" className="association-logo" style={{ width: "200px" }} />
          </a>
          <a href="https://www.ssipgujarat.in/" target="_blank" rel="noopener noreferrer">
            <img src={img4} alt="SSIP" className="association-logo" style={{ width: "170px"}} />
          </a>
          <a href="https://gusec.edu.in/apply/" target="_blank" rel="noopener noreferrer">
            <img src={img5} alt="GUSEC" className="association-logo" style={{ width: "210px"}} />
          </a>
          <a href="https://gtuinnovationcouncil.ac.in/" target="_blank" rel="noopener noreferrer">
            <img src={img6} alt="GTU Innovation Council" className="association-logo" style={{ width: "210px" }} />
          </a>
          <a href="https://stbi.gujarat.gov.in/" target="_blank" rel="noopener noreferrer">
            <img src={img7} alt="Savli Technology and Business Incubator" className="association-logo" style={{ width: "250px",paddingTop: "25px"  }} />
          </a>
          <a href="https://gacl.com/" target="_blank" rel="noopener noreferrer">
            <img src={img8} alt="Gujarat Alkalies and Chemicals Limited" className="association-logo" style={{ width: "190px" ,paddingTop: "30px" }} />
          </a>
          <a href="https://gujcost.gujarat.gov.in/" target="_blank" rel="noopener noreferrer">
            <img src={img9} alt="Gujarat Council on Science and Technology" className="association-logo" style={{ width: "160px", backgroundcolor: "transparent"
             }} />
          </a>
          <a href="https://gcsra.org/" target="_blank" rel="noopener noreferrer">
            <img src={img10} alt="Gujarat CSR Authority" className="association-logo" style={{ width: "170px" }} />
          </a>
          <a href="https://dst.gujarat.gov.in/" target="_blank" rel="noopener noreferrer">
            <img src={img11} alt="Department of Science and Technology (Government of Gujarat)" className="association-logo" style={{ width: "195px" }} />
          </a>
          <a href="https://nasscom.in/" target="_blank" rel="noopener noreferrer">
            <img src={img12} alt="NASSCOM" className="association-logo" style={{ width: "190px",paddingTop: "60px"  }} />
          </a>
          <a href="https://btm.gujarat.gov.in/" target="_blank" rel="noopener noreferrer">
            <img src={img13} alt="Gujarat State Biotechnology Mission" className="association-logo" style={{ width: "160px" }} />
          </a>
          <a href="https://www.gsfclimited.com/" target="_blank" rel="noopener noreferrer">
            <img src={img14} alt="Gujarat State Fertilizers & Chemicals Limited" className="association-logo" style={{ width: "150px" }} />
          </a>
          <a href="https://ced.gujarat.gov.in/" target="_blank" rel="noopener noreferrer">
            <img src={img15} alt="Centre for Entrepreneurship Development - Gujarat " className="association-logo" style={{ width: "160px" }} />
          </a>
          <a href="https://www.innodeskglobal.com/" target="_blank" rel="noopener noreferrer">
            <img src={img16} alt="Innodesk Global" className="association-logo" style={{ width: "145px" }} />
          </a>
          <a href="https://tievadodara.com/" target="_blank" rel="noopener noreferrer">
            <img src={img17} alt="TiE (The Indus Entrepreneurs) Vadodara" className="association-logo" style={{ width: "255px", paddingTop: "30px" }} />
          </a>
          <a href="https://www.marwaricatalysts.com/" target="_blank" rel="noopener noreferrer">
            <img src={img18} alt="Marwari Catalysts" className="association-logo" style={{ width: "200px" }} />
          </a>
          <a href="https://vexmatech.com/" target="_blank" rel="noopener noreferrer">
            <img src={img19} alt="Vexma Technologies Pvt. Ltd." className="association-logo" style={{ width: "150px" }} />
          </a>
          <a href="https://www.garudaaerospace.com/" target="_blank" rel="noopener noreferrer">
            <img src={img20} alt="Garuda Aerospace" className="association-logo" style={{ width: "190px" }} />
          </a>
        </div>
      </div>
    );
};

export default Associations;