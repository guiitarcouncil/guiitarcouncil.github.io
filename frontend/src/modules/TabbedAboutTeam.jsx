import React, { useState } from "react";
import "./TabbedAboutTeam.css";

const TabbedAboutTeam = () => {
  const [activeTab, setActiveTab] = useState("team");

  const tabs = [
    { id: "team", label: "Our Team" },
    { id: "directors", label: "Board of Directors" },
    { id: "advisory", label: "Advisory Board" },
  ];

  const teamData = {
    team: [
      { name: "Mr. Bimal Bhayani", role: "CEO", image: "/path/to/image1.png" },
      { name: "Mr. KiranKumar Parmar", role: "Sr. Manager", image: "/path/to/image1.png" },
      { name: "Dr. Sanjukta Bose Goswami", role: "Startup Coordinator SOT", image: "/path/to/image2.png" },
      { name: "Ms. Shweta Rajput", role: "Startup Coordinator SOT", image: "/path/to/image2.png" },
      { name: "Ms. Archana Magare", role: "Startup Coordinator SOT", image: "/path/to/image2.png" },
      { name: "Mr. Aditya Puranik", role: "Startup Coordinator SOS", image: "/path/to/image2.png" },
      { name: "Ms. Trupti Gajarai", role: "Startup Coordinator SOS", image: "/path/to/image2.png" },
      { name: "Mr. Akhilesh Prajapati", role: "Startup Coordinator SOS", image: "/path/to/image2.png" },
      { name: "Dr. Ankit Sudhir", role: "Startup Coordinator SOS", image: "/path/to/image2.png" },
      { name: "Dr. Abha Kalaiya", role: "Startup Coordinator SOM", image: "/path/to/image2.png" },
      { name: "Mr. Hemant Rajpoot", role: "IT Coordinator ", image: "/path/to/image2.png" },
    ],
   
    directors: [
      { name: "Shri P. K. Taneja, IAS (Retd.)", role: "Chairman", image: "/path/to/image5.png" },
      { name: "Prof. G. R. Sinha", role: "Director", image: "/path/to/image5.png" },
      { name: "Shri Ramesh Panchal", role: "Director", image: "/path/to/image5.png" },
      { name: "Mr. Bimal Bhayani", role: "Director & CEO", image: "/path/to/image5.png" },
      { name: "Dr. Pujan Vaishnav", role: "Director", image: "/path/to/image5.png" },
      { name: "Shri Utkarsh Yajnik", role: "Director", image: "/path/to/image5.png" },
      { name: "Shri Ravin Sanghavi", role: "Director", image: "/path/to/image5.png" },
      { name: "Mrs. Swati Bedekar", role: "Director", image: "/path/to/image5.png" },
    ],
    advisory: [
      { name: "Dr. Madhukumar Mehta", role: "Advisor", image: "/path/to/image7.png" },
      { name: "Mr. Ramanan Ramanathan", role: "Advisor", image: "/path/to/image8.png" },
      { name: "Mr. Anupam Jalote", role: "Advisor", image: "/path/to/image8.png" },
      { name: "Mr. Hemal Patel", role: "Advisor", image: "/path/to/image8.png" },
      { name: "Mr. Shankar C Rele", role: "Advisor", image: "/path/to/image8.png" },
      { name: "Dr. Nilesh Khare", role: "Advisor", image: "/path/to/image8.png" },
      { name: "Ms. Poyni Bhatt", role: "Advisor", image: "/path/to/image8.png" },
      { name: "Mr. Bhavesh Chelani", role: "Advisor", image: "/path/to/image8.png" },
      { name: "Mr. Nirav D Shah", role: "Advisor", image: "/path/to/image8.png" },
      { name: "Mr. Azam Ali Khan", role: "Advisor", image: "/path/to/image8.png" },
      { name: "Dr G R Sinha", role: "Advisor", image: "/path/to/image8.png" },
      { name: "Mr. Ramesh Panchal", role: "Advisor", image: "/path/to/image8.png" },
      { name: "Mr. Bimal Bhayani", role: "Advisor", image: "/path/to/image8.png" },
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
                  <a href="#" className="icon-link">
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
