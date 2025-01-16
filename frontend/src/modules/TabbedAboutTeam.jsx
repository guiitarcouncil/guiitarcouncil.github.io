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
import mrpktaneja from "../assets/team/AI/mrpktaneja.jpg";
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
        role: "CEO, GUIITAR",
        image: mrbimal,
        resumeLink:
          "https://www.guiitarstartupcouncil.org/_files/ugd/ff2b71_8d53b22713c34bb0b659580df02f2a29.pdf",
      },
      {
        name: "Mr. KiranKumar Parmar",
        role: "Sr. Manager",
        image: mrkiran,
        resumeLink:
          "https://www.guiitarstartupcouncil.org/_files/ugd/ff2b71_89eb00698a45423e8cd135ddaff721f3.pdf",
      },

      {
        name: "Dr. Sanjukta Bose Goswami",
        role: "Startup Coordinator SOT",
        image: drbose,
        resumeLink:
          "https://www.guiitarstartupcouncil.org/_files/ugd/ff2b71_c60d2a1daacf4294acc28437b0d0f900.pdf",
      },
      {
        name: "Dr. Abha Kalaiya",
        role: "Startup Coordinator SOM",
        image: drabha,
        resumeLink:
          "https://www.guiitarstartupcouncil.org/_files/ugd/ff2b71_791c9db3c99748eea011626aafbeb7ec.pdf",
      },
      {
        name: "Ms. Shweta Rajput",
        role: "Startup Coordinator SOT",
        image: msrajput,
        resumeLink:
          "https://www.guiitarstartupcouncil.org/_files/ugd/ff2b71_30e545b68e8646abb4043ff56baac9c0.pdf",
      },
      {
        name: "Ms. Archana Magare",
        role: "Startup Coordinator SOT",
        image: msmagare,
        resumeLink:
          "https://www.guiitarstartupcouncil.org/_files/ugd/ff2b71_8c862fecfb4040eda9bb6065da714685.pdf",
      },
      {
        name: "Dr. Aditya Puranik",
        role: "Startup Coordinator SOS",
        image: mrpuranik,
        resumeLink:
          "https://www.guiitarstartupcouncil.org/_files/ugd/ff2b71_e3c5553bcf1f486099ef05503f0fca2b.pdf",
      },
      {
        name: "Dr. Trupti Gajarai",
        role: "Startup Coordinator SOS",
        image: drgajarai,
        resumeLink:
          "https://www.guiitarstartupcouncil.org/_files/ugd/ff2b71_f325edb945c44e829fb22469fc4668d8.pdf",
      },
      {
        name: "Mr. Akhilesh Prajapati",
        role: "Startup Coordinator SOS",
        image: drprajapati,
        resumeLink:
          "https://www.guiitarstartupcouncil.org/_files/ugd/ff2b71_5788e1f0ae2e403ab1cdb81150dd8d4e.pdf",
      },
      {
        name: "Dr. Ankit Sudhir",
        role: "Startup Coordinator SOS",
        image: drankit,
        resumeLink:
          "https://www.guiitarstartupcouncil.org/_files/ugd/ff2b71_f9f02c92324f4ef181f44044d1c9e0ce.pdf",
      },

      {
        name: "Mr. Hemant Rajpoot",
        role: "IT Coordinator",
        image: mrhemant,
        resumeLink:
          "https://www.guiitarstartupcouncil.org/_files/ugd/ff2b71_80848bbd7d624149bfa32ef7b1210ec6.pdf",
      },
    ],

    directors: [
      {
        name: "Shri P. K. Taneja, IAS (Retd.)",
        role: "Chairman",
        image: mrpktaneja,
        resumeLink:
          "https://www.guiitarstartupcouncil.org/_files/ugd/ff2b71_d4298433c83c4b578e051790c2211b24.pdf",
      },
      {
        name: "Dr. G. R. Sinha",
        role: "Director",
        image: mrgrsinha,
        resumeLink:
          "https://www.guiitarstartupcouncil.org/_files/ugd/ff2b71_a54a8c19023649f18728a0c6a1b9f5af.pdf",
      },
      {
        name: "Shri Ramesh Panchal",
        role: "Director",
        image: mrpanchal,
        resumeLink:
          "https://www.guiitarstartupcouncil.org/_files/ugd/ff2b71_b88459e814aa4c80afb39ec55f047ad3.pdf",
      },
      {
        name: "Mr. Bimal Bhayani",
        role: "Director & CEO",
        image: mrbimal,
        resumeLink:
          "https://www.guiitarstartupcouncil.org/_files/ugd/ff2b71_8d53b22713c34bb0b659580df02f2a29.pdf",
      },
      {
        name: "Dr. Pujan Vaishnav",
        role: "Director",
        image: mrpujan,
        resumeLink:
          "https://www.guiitarstartupcouncil.org/_files/ugd/ff2b71_4e33df82b6cb4f74a66808f387e99a56.pdf",
      },
      {
        name: "Shri Utkarsh Yajnik",
        role: "Director",
        image: mrutkarsh,
        resumeLink:
          "https://www.guiitarstartupcouncil.org/_files/ugd/ff2b71_41987da7b4854439a523ae3248cd10dd.pdf",
      },
      {
        name: "Shri Ravin Sanghavi",
        role: "Director",
        image: mrravin,
        resumeLink:
          "https://www.guiitarstartupcouncil.org/_files/ugd/ff2b71_d338388e01034f6ebeb00496599ae4a8.pdf",
      },
      {
        name: "Mrs. Swati Bedekar",
        role: "Director",
        image: msswati,
        resumeLink:
          "https://www.guiitarstartupcouncil.org/_files/ugd/ff2b71_b5d56c3215f34918a9f86964c5763295.pdf",
      },
    ],

    advisory: [
      {
        name: "Dr. Madhukumar Mehta",
        role: "Advisor",
        resumeLink:
          "https://www.guiitarstartupcouncil.org/_files/ugd/ff2b71_d71d72b760f7445394d6459da708a50a.pdf ",
        image: drmadhukumar,
      },
      {
        name: "Mr. Ramanan Ramanathan",
        role: "Advisor",
        resumeLink:
          "https://www.guiitarstartupcouncil.org/_files/ugd/ff2b71_00953c7533f24db6a18ae586f1e07321.pdf",
        image: ramanan, // Corrected property name
      },
      {
        name: "Mr. Hemal Patel",
        role: "Advisor",
        resumeLink:
          "https://www.guiitarstartupcouncil.org/_files/ugd/ff2b71_84fb4648600c448092b192d5ab18b95c.pdf",
        image: mranupam,
      },
      {
        name: "Mr. Hemal Patel",
        role: "Advisor",
        resumeLink:
          "https://www.guiitarstartupcouncil.org/_files/ugd/ff2b71_1a4249d90d2145d9aa72ce031579de13.pdf",
        image: mrhemal,
      },
      {
        name: "Mr. Shankar C Rele",
        role: "Advisor",
        resumeLink:
          "https://www.guiitarstartupcouncil.org/_files/ugd/ff2b71_c23d9d698ff940b9b4f840023375b57c.pdf",
        image: mrshankar,
      },
      {
        name: "Dr. Nilesh Khare",
        role: "Advisor",
        resumeLink:
          "https://www.guiitarstartupcouncil.org/_files/ugd/ff2b71_3c5f40e46ce9447fb2dc98a86d57a7d2.pdf",
        image: mrnilesh,
      },
      {
        name: "Ms. Poyni Bhatt",
        role: "Advisor",
        resumeLink:
          "https://www.guiitarstartupcouncil.org/_files/ugd/ff2b71_b261d07e29c545bcbba817ac4889841f.pdf",
        image: mspoyni,
      },
      {
        name: "Mr. Bhavesh Chelani",
        role: "Advisor",
        resumeLink:
          "https://www.guiitarstartupcouncil.org/_files/ugd/ff2b71_54682fa22a81409399c69cf33b554fd5.pdf  ",
        image: mrbhavesh,
      },
      {
        name: "Mr. Nirav D Shah",
        role: "Advisor",
        resumeLink:
          "https://www.guiitarstartupcouncil.org/_files/ugd/ff2b71_dbff860c04364d4596b83ea3ac82e51d.pdf",
        image: mmirav,
      },
      {
        name: "Mr. Azam Ali Khan",
        role: "Advisor",
        resumeLink:
          "https://www.guiitarstartupcouncil.org/_files/ugd/ff2b71_5fd24968ad124bc0badbf8ae5e976f6d.pdf",
        image: mrali,
      },
      {
        name: "Dr. G R Sinha",
        role: "Advisor",
        resumeLink:
          "https://www.guiitarstartupcouncil.org/_files/ugd/ff2b71_022e692b96ba47ee871509a6d9de7be1.pdf",
        image: mrgrsinha,
      },
      {
        name: "Mr. Ramesh Panchal",
        role: "Advisor",
        resumeLink:
          "https://www.guiitarstartupcouncil.org/_files/ugd/ff2b71_37d3cead38ae4e35bc9ed6dcf978c26b.pdf",
        image: mrpanchal,
      },
      {
        name: "Mr. Bimal Bhayani",
        role: "Advisor",
        resumeLink:
          "https://www.guiitarstartupcouncil.org/_files/ugd/ff2b71_7259f2a92e7c4d3b9828117ea06c1d3b.pdf",
        image: mrbimal,
      },
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
                  <a
                    href={member.resumeLink}
                    className="icon-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
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
