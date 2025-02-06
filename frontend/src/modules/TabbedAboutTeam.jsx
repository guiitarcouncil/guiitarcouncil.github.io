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
import mrhemant from "../assets/team/hemantsir.jpg";
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
import drTrivedi from "../assets/team/AI/drTrivedi.jpg";
import devjaniBanerjee from "../assets/team/AI/devjaniBanerjee.jpg";
import chetnaParmar from "../assets/team/AI/chetnaParmar.jpg";
import mosamPatel from "../assets/team/AI/mosamPatel.jpg";
import artiBhadoria from "../assets/team/AI/artiBhadoria.jpg";
import parinKanaiya from "../assets/team/AI/parinKanaiya.jpg";
import swatiSaxena from "../assets/team/AI/swatiSaxena.jpg";
import artiHansda from "../assets/team/AI/artiHansda.jpg";
import akashDadhania from "../assets/team/AI/akashDadhania.jpg";
import amitPatel from "../assets/team/AI/amitPatel.jpg";
import anantAcharya from "../assets/team/AI/anantAcharya.jpg";
import ashishKumar from "../assets/team/AI/ashishKumar.jpg";
import ashutoshTewari from "../assets/team/AI/ashutoshTewari.jpg";
import ashwinParikh from "../assets/team/AI/ashwinParikh.jpg";
import bhaveshChelani from "../assets/team/AI/bhaveshChelani.jpg";
import bhaveshKothari from "../assets/team/AI/bhaveshKothari.jpg";
import Bhavik from "../assets/team/AI/Bhavik.jpg";
import BHAVIK_BHANSALI from "../assets/team/AI/BHAVIK_BHANSALI.jpg";
import brijeshGarala from "../assets/team/AI/brijeshGarala.jpg";
import chintanPopat from "../assets/team/AI/chintanPopat.jpg";
import devangPatel from "../assets/team/AI/devangPatel.jpg";
import deveshChawla from "../assets/team/AI/deveshChawla.jpg";
import dhruvNath from "../assets/team/AI/dhruvNath.jpg";
import Heena from "../assets/team/AI/Heena.jpg";
import HITESH_PORWAL from "../assets/team/AI/HITESH_PORWAL.jpg";
import javidShaikh from "../assets/team/AI/javidShaikh.jpg";
import jekishanParmar from "../assets/team/AI/jekishanParmar.jpg";
import jitendraJain from "../assets/team/AI/jitendraJain.jpg";
import kalpeshShah from "../assets/team/AI/kalpeshShah.jpg";
import karanShah from "../assets/team/AI/karanShah.jpg";
import karmjitsinhBihola from "../assets/team/AI/karmjitsinhBihola.jpg";
import kavitaSaxena from "../assets/team/AI/kavitaSaxena.jpg";
import manojShukla from "../assets/team/AI/manojShukla.jpg";
import nileshVaghela from "../assets/team/AI/nileshVaghela.jpg";
import PRAKASH_VAGHASIYA from "../assets/team/AI/PRAKASH_VAGHASIYA.jpg";
import rupeshShah from "../assets/team/AI/rupeshShah.jpg";
import saurabhJain from "../assets/team/AI/saurabhJain.jpg";
// import shaurinPatel from "../assets/team/AI/shaurinPatel.jpg";
import sudhirGupta from "../assets/team/AI/sudhirGupta.jpg";
import sureshOthayoth from "../assets/team/AI/sureshOthayoth.jpg";

const TabbedAboutTeam = () => {
  const [activeTab, setActiveTab] = useState("team");

  const tabs = [
    { id: "team", label: "Our Team" },
    { id: "directors", label: "Board of Directors" },
    { id: "advisory", label: "Advisory Board" },
    { id: "faculty", label: "Faculty Mentors" },
    { id: "industry", label: "Industry Mentors" },
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
        name: "Mr. Anupam Jatole",
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

    faculty: [
      {
        name: "Dr. Bharti Trivedi",
        role: "Visiting Professor",
        image: drTrivedi,
        resumeLink: "",
      },
      {
        name: "Dr. Devjani Banerjee",
        role: "Assistant Professor",
        image: devjaniBanerjee,
        resumeLink: "",
      },
      {
        name: "Dr. Chetna Parmar",
        role: "Associate Dean",
        image: chetnaParmar,
        resumeLink: "",
      },
      {
        name: "Dr. Sanjukta Bose Goswami",
        role: "Assistant Professor",
        image: drbose,
        resumeLink: "",
      },
      {
        name: "Ms. Patel Mosam",
        role: "Assistant Professor",
        image: mosamPatel,
        resumeLink: "",
      },
      {
        name: "Dr. Arti Bhadoria",
        role: "Assistant Professor",
        image: artiBhadoria,
        resumeLink: "",
      },
      {
        name: "Dr. Parin Kanaiya",
        role: "Assistant Professor",
        image: parinKanaiya,
        resumeLink: "",
      },
      {
        name: "Ms. Swati Saxena",
        role: "Assistant Professor",
        image: swatiSaxena,
        resumeLink: "",
      },
      {
        name: "Dr. Akhilesh Prajapati",
        role: "Assistant Professor",
        image: drprajapati,
        resumeLink: "",
      },
      {
        name: "Ms. Archana Magare",
        role: "Assistant Professor",
        image: msmagare,
        resumeLink: "",
      },
      {
        name: "Dr. Arti Hansda",
        role: "Assistant Professor",
        image: artiHansda,
        resumeLink: "",
      },
    ],

    industry: [
      {
        name: "Mr. Sudhir Gupta",
        role: "Member Strategic Advisory Board, Millennium Alliance",
        image: sudhirGupta,
        resumeLink: "",
      },
      {
        name: "Prof Dhruv Nath",
        role: "Director, Lead Angels Network",
        image: dhruvNath,
        resumeLink: "",
      },
      {
        name: "Mr. Ravin Sanghavi",
        role: "Founder, Ravin Sanghavi & Associates",
        image: mrravin,
        resumeLink: "",
      },
      {
        name: "Dr. Manoj Shukla",
        role: "CEO, Gurukul Academy",
        image: manojShukla,
        resumeLink: "",
      },
      {
        name: "Mr. Rupesh Shah",
        role: "CEO, Barodaweb",
        image: rupeshShah,
        resumeLink: "",
      },
      {
        name: "Kalpesh Shah",
        role: "Director, Market Creators Ltd",
        image: kalpeshShah,
        resumeLink: "",
      },
      {
        name: "Mr. Hitesh Porwal",
        role: "Founder, BIZSTART",
        image: HITESH_PORWAL,
        resumeLink: "",
      },
      {
        name: "Mr. Bhavesh Kothari",
        role: "Founder Director, Millennium Divas Pvt Ltd",
        image: bhaveshKothari,
        resumeLink: "",
      },
      {
        name: "Adv. Bhavik B Patel",
        role: "CEO, INFINVENT IP",
        image: Bhavik,
        resumeLink: "",
      },
      {
        name: "Mr. Brijesh M Garala",
        role: "Director, Oviyan Cast & Forge Pvt. Ltd.",
        image: brijeshGarala,
        resumeLink: "",
      },
      {
        name: "Mr. Bhavesh Chelani",
        role: "MD & CEO, Santushti Shakes Pvt. Ltd.",
        image: bhaveshChelani,
        resumeLink: "",
      },
      {
        name: "Mr. Saurabh Jain",
        role: "Founder, FUN2DO Labs Pvt. Ltd.",
        image: saurabhJain,
        resumeLink: "",
      },
      {
        name: "Dr. Kavita Saxena",
        role: "Freelancer, Freelancing Startup mentor",
        image: kavitaSaxena,
        resumeLink: "",
      },
      {
        name: "Dr. Suresh P Othayoth",
        role: "Manager - Research, GSFC Ltd.",
        image: sureshOthayoth,
        resumeLink: "",
      },
      {
        name: "Mr. Ashutosh Tewari",
        role: "Senior Venture Coach, GITAM (deemed to be) University",
        image: ashutoshTewari,
        resumeLink: "",
      },
      {
        name: "CA CS Chintan Popat",
        role: "CA CS - FOUNDER, CA Chintan Popat & Associates",
        image: chintanPopat,
        resumeLink: "",
      },
      {
        name: "Mr. Devesh Chawla",
        role: "Founder & CEO, Chatur Ideas",
        image: deveshChawla,
        resumeLink: "",
      },
      {
        name: "Mr. Ashwin V. Parikh",
        role: "Director, International Business Development (IBD)",
        image: ashwinParikh,
        resumeLink: "",
      },
      {
        name: "Mr. Jekishan K Parmar",
        role: "Head of Sales & Technology, Aver India Equipment",
        image: jekishanParmar,
        resumeLink: "",
      },
      {
        name: "Mr. Amitkumar Patel",
        role: "Managing Director, PATactual IP Law Services LLP",
        image: amitPatel,
        resumeLink: "",
      },
      {
        name: "Mr. Karan Shah",
        role: "Head - Partnership & Outreach, Civitas Sustainability Foundation",
        image: karanShah,
        resumeLink: "",
      },
      {
        name: "Mr. Devang Patel",
        role: "Founder, Vantage Point Executive Coaching",
        image: devangPatel,
        resumeLink: "",
      },
      {
        name: "Mr. Prakash Vaghasiya",
        role: "CEO, Vise Organic",
        image: PRAKASH_VAGHASIYA,
        resumeLink: "",
      },
      {
        name: "Mr. Javid Shaikh",
        role: "CEO, Biopharma Incubation Center (BIC), NIPER-Ahmedabad",
        image: javidShaikh,
        resumeLink: "",
      },
      {
        name: "Adv. Dr. Heena Patel",
        role: "Partner, INFINVENT IP",
        image: Heena,
        resumeLink: "",
      },
      {
        name: "Mr. Bhavik Bhansali",
        role: "Senior Engineer, L&T Technology Services",
        image: BHAVIK_BHANSALI,
        resumeLink: "",
      },
      {
        name: "Mr. Akash Dadhania",
        role: "Owner, J K Fertilizers",
        image: akashDadhania,
        resumeLink: "",
      },
      {
        name: "CA Jitendra Jain",
        role: "CEO, Tapanshi Finanziell Pvt. Ltd.",
        image: jitendraJain,
        resumeLink: "",
      },
      {
        name: "Dr. Ashish Kumar",
        role: "Associate Professor, Inter University Accelerator Center",
        image: ashishKumar,
        resumeLink: "",
      },
      {
        name: "Nilesh Vaghela",
        role: "CEO, Electromech Cloudtech Pvt. Ltd.",
        image: nileshVaghela,
        resumeLink: "",
      },
      {
        name: "Karmjitsinh Bihola",
        role: "Founder, Innodesk Designovation Services",
        image: karmjitsinhBihola,
        resumeLink: "",
      },
      {
        name: "Mr. Anant Acharya",
        role: "CTO, MarsBazaar.com",
        image: anantAcharya,
        resumeLink: "",
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
