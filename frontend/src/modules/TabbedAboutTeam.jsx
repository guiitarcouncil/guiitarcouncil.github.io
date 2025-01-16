import React, { useState } from "react";
import "./TabbedAboutTeam.css";
import drbose from "../assets/team/AI/drbose.jpg";
import drankit from "../assets/team/AI/drankit.jpg";
import drabha from "../assets/team/AI/drabha.jpg";
import drgajarai from "../assets/team/AI/drgajarai.jpg";
import drmadhukumar from "../assets/team/AI/drmadhukumar.jpg";
import drprajapati from "../assets/team/AI/drprajapati.jpg";
import mrgrsinha from "../assets/team/AI/mr_grsinha.jpg";
import mrali from "../assets/team/AI/mrali.jpg";
import mranupam from "../assets/team/AI/mranupam.jpg";
import mrbhavesh from "../assets/team/AI/mrbhavesh.jpg";
import mrbimal from "../assets/team/AI/mrbimal.jpg";
import mrhemal from "../assets/team/AI/mrhemal.jpg";
import mrhemant from "../assets/team/AI/mrhemant.jpg";
import mrkiran from "../assets/team/AI/mrkiran.jpg";
import mrnilesh from "../assets/team/AI/mrnilesh.jpg";
import mmirav from "../assets/team/AI/mrnirav.jpg";
import mrpanchal from "../assets/team/AI/mrpanchal.jpg";
import mrpitaneja from "../assets/team/AI/mrpktaneja.jpg";
import mrpujan from "../assets/team/AI/mrpujan.jpg";
import mrpuranik from "../assets/team/AI/mrpuranik.jpg";
import ramanan from "../assets/team/AI/mrramanan.jpg";
import mrravin from "../assets/team/AI/mrravin.jpg";
import mrshankar from "../assets/team/AI/mrshankar.jpg";
import mrutkarsh from "../assets/team/AI/mrutkarsh.jpg";
import msmagare from "../assets/team/AI/msmagare.jpg";
import mspoyni from "../assets/team/AI/mspoyni.jpg";
import msrajput from "../assets/team/AI/msrajput.jpg";
import msswati from "../assets/team/AI/msswati.jpg";

const TabbedAboutTeam = () => {
  const [activeTab, setActiveTab] = useState("team");

  const tabs = [
    { id: "team", label: "Our Team" },
    { id: "directors", label: "Board of Directors" },
    { id: "advisory", label: "Advisory Board" },
  ];

  const teamData = {
    team: [
      {
        name: "Mr. Bimal Bhayani",
        role: "CEO",
        image: mrbimal,
        resumeLink: "https://example.com/bimal-bhayani-resume",
        
      },
      {
        name: "Mr. KiranKumar Parmar",
        role: "Sr. Manager",
        image: mrkiran,
      },
      
      {
        name: "Dr. Sanjukta Bose Goswami",
        role: "Startup Coordinator SOT",
        image: drbose,
      },
      {
        name: "Dr. Abha Kalaiya",
        role: "Startup Coordinator SOM",
        image: drabha,
      },
      {
        name: "Ms. Shweta Rajput",
        role: "Startup Coordinator SOT",
        image: msrajput,
      },
      {
        name: "Ms. Archana Magare",
        role: "Startup Coordinator SOT",
        image: msmagare,
      },
      {
        name: "Dr. Aditya Puranik",
        role: "Startup Coordinator SOS",
        image: mrpuranik,
      },
      {
        name: "Dr. Trupti Gajarai",
        role: "Startup Coordinator SOS",
        image: drgajarai,
      },
      {
        name: "Mr. Akhilesh Prajapati",
        role: "Startup Coordinator SOS",
        image: drprajapati,
      },
      {
        name: "Dr. Ankit Sudhir",
        role: "Startup Coordinator SOS",
        image: drankit,
      },
    
      {
        name: "Mr. Hemant Rajpoot",
        role: "IT Coordinator",
        image: mrhemant,
      },
    ],

    directors: [
      {
        name: "Shri P. K. Taneja, IAS (Retd.)",
        role: "Chairman",
        image: mrpitaneja,
      },
      {
        name: "Dr. G. R. Sinha",
        role: "Director",
        image: mrgrsinha,
      },
      {
        name: "Shri Ramesh Panchal",
        role: "Director",
        image: mrpanchal,
      },
      {
        name: "Mr. Bimal Bhayani",
        role: "Director & CEO",
        image: mrbimal,
      },
      {
        name: "Dr. Pujan Vaishnav",
        role: "Director",
        image: mrpujan,
      },
      {
        name: "Shri Utkarsh Yajnik",
        role: "Director",
        image: mrutkarsh,
      },
      {
        name: "Shri Ravin Sanghavi",
        role: "Director",
        image: mrravin,
      },
      {
        name: "Mrs. Swati Bedekar",
        role: "Director",
        image: msswati,
      },
    ],

    advisory: [
      { name: "Dr. Madhukumar Mehta",
        role: "Advisor",
        image: drmadhukumar },
        {
          name: "Mr. Ramanan Ramanathan",
          role: "Advisor",
          image: ramanan, // Corrected property name
        },
      { name: "Mr. Anupam Jalote",
        role: "Advisor",
        image: mranupam },
      { name: "Mr. Hemal Patel",
        role: "Advisor",
        image: mrhemal },
      { name: "Mr. Shankar C Rele",
        role: "Advisor",
        image: mrshankar },
      { name: "Dr. Nilesh Khare",
        role: "Advisor",
        image: mrnilesh },
      { name: "Ms. Poyni Bhatt",
        role: "Advisor",
        image: mspoyni },
      { name: "Mr. Bhavesh Chelani",
        role: "Advisor",
        image: mrbhavesh },
      { name: "Mr. Nirav D Shah",
        role: "Advisor",
        image: mmirav },
      { name: "Mr. Azam Ali Khan",
        role: "Advisor",
        image: mrali },
      { name: "Dr. G R Sinha",
        role: "Advisor",
        image: mrgrsinha },
      { name: "Mr. Ramesh Panchal",
        role: "Advisor",
        image: mrpanchal },
      { name: "Mr. Bimal Bhayani",
        role: "Advisor",
        image: mrbimal },
    ],
  };

  return (
    <div className="tabbed-about-container">
      <div className="tabs">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`tab-button ${activeTab === tab.id ? "active" : ""}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="tab-content">
        <h2>{tabs.find((tab) => tab.id === activeTab)?.label}</h2>
        <div className="team-grid">
          {teamData[activeTab].map((member, index) => (
            <div className="team-member" key={index}>
              <div className="image-container">
                <img src={member.image} alt={member.name} />
                <div className="overlay">
                  <a href={member.resumeLink} className="icon-link" target="_blank" rel="noopener noreferrer">
                    <span>&#8594;</span>
                  </a>
                </div>
              </div>
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TabbedAboutTeam;