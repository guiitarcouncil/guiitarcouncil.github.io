import React, { useState } from "react";
import "./TabbedAboutTeam.css";
import dummy from "../../Assets/team/dummy.jpeg";
import drbose from "../../Assets/team/AI/drbose.jpg";
import drankit from "../../Assets/team/AI/drankit.jpg";
import drabha from "../../Assets/team/AI/drabha.jpg";
import drgajarai from "../../Assets/team/AI/drgajarai.jpg";
import drmadhukumar from "../../Assets/team/AI/drmadhukumar.jpg";
import drprajapati from "../../Assets/team/AI/drprajapati.jpg";
import mrgrsinha from "../../Assets/team/AI/mr_grsinha.jpg";
import mrali from "../../Assets/team/AI/mrali.jpg";
import mranupam from "../../Assets/team/AI/mranupam.jpg";
import mrbhavesh from "../../Assets/team/AI/mrbhavesh.jpg";
import mrbimal from "../../Assets/team/AI/mrbimal.jpg";
import mrhemal from "../../Assets/team/AI/mrhemal.jpg";
import mrhemant from "../../Assets/team/hemantsir.jpg";
import mrkiran from "../../Assets/team/AI/mrkiran.jpg";
import mrnilesh from "../../Assets/team/AI/mrnilesh.jpg";
import mmirav from "../../Assets/team/AI/mrnirav.jpg";
import mrpanchal from "../../Assets/team/AI/mrpanchal.jpg";
import mrpktaneja from "../../Assets/team/AI/mrpktaneja.jpg";
import mrpujan from "../../Assets/team/AI/mrpujan.jpg";
import mrpuranik from "../../Assets/team/AI/mrpuranik.jpg";
import ramanan from "../../Assets/team/AI/mrramanan.jpg";
import mrravin from "../../Assets/team/AI/mrravin.jpg";
import mrshankar from "../../Assets/team/AI/mrshankar.jpg";
import mrutkarsh from "../../Assets/team/AI/mrutkarsh.jpg";
import msmagare from "../../Assets/team/AI/msmagare.jpg";
import mspoyni from "../../Assets/team/AI/mspoyni.jpg";
import msrajput from "../../Assets/team/AI/msrajput.jpg";
import msswati from "../../Assets/team/AI/msswati.jpg";
import drTrivedi from "../../Assets/team/AI/drTrivedi.jpg";
import devjaniBanerjee from "../../Assets/team/AI/devjaniBanerjee.jpg";
import chetnaParmar from "../../Assets/team/AI/chetnaParmar.jpg";
import mosamPatel from "../../Assets/team/AI/mosamPatel.jpg";
import artiBhadoria from "../../Assets/team/AI/artiBhadoria.jpg";
import parinKanaiya from "../../Assets/team/AI/parinKanaiya.jpg";
import swatiSaxena from "../../Assets/team/AI/swatiSaxena.jpg";
import artiHansda from "../../Assets/team/AI/artiHansda.jpg";
import akashDadhania from "../../Assets/team/AI/akashDadhania.jpg";
import amitPatel from "../../Assets/team/AI/amitPatel.jpg";
import anantAcharya from "../../Assets/team/AI/anantAcharya.jpg";
import ashishKumar from "../../Assets/team/AI/ashishKumar.jpg";
import ashutoshTewari from "../../Assets/team/AI/ashutoshTewari.jpg";
import ashwinParikh from "../../Assets/team/AI/ashwinParikh.jpg";
import bhaveshChelani from "../../Assets/team/AI/bhaveshChelani.jpg";
import bhaveshKothari from "../../Assets/team/AI/bhaveshKothari.jpg";
import Bhavik from "../../Assets/team/AI/Bhavik.jpg";
import BHAVIK_BHANSALI from "../../Assets/team/AI/BHAVIK_BHANSALI.jpg";
import brijeshGarala from "../../Assets/team/AI/brijeshGarala.jpg";
import chintanPopat from "../../Assets/team/AI/chintanPopat.jpg";
import devangPatel from "../../Assets/team/AI/devangPatel.jpg";
import deveshChawla from "../../Assets/team/AI/deveshChawla.jpg";
import dhruvNath from "../../Assets/team/AI/dhruvNath.jpg";
import Heena from "../../Assets/team/AI/Heena.jpg";
import HITESH_PORWAL from "../../Assets/team/AI/HITESH_PORWAL.jpg";
import javidShaikh from "../../Assets/team/AI/javidShaikh.jpg";
import jekishanParmar from "../../Assets/team/AI/jekishanParmar.jpg";
import jitendraJain from "../../Assets/team/AI/jitendraJain.jpg";
import kalpeshShah from "../../Assets/team/AI/kalpeshShah.jpg";
import karanShah from "../../Assets/team/AI/karanShah.jpg";
import karmjitsinhBihola from "../../Assets/team/AI/karmjitsinhBihola.jpg";
import kavitaSaxena from "../../Assets/team/AI/kavitaSaxena.jpg";
import manojShukla from "../../Assets/team/AI/manojShukla.jpg";
import nileshVaghela from "../../Assets/team/AI/nileshVaghela.jpg";
import PRAKASH_VAGHASIYA from "../../Assets/team/AI/PRAKASH_VAGHASIYA.jpg";
import rupeshShah from "../../Assets/team/AI/rupeshShah.jpg";
import saurabhJain from "../../Assets/team/AI/saurabhJain.jpg";
// import shaurinPatel from "../../Assets/team/AI/shaurinPatel.jpg";
import sudhirGupta from "../../Assets/team/AI/sudhirGupta.jpg";
import sureshOthayoth from "../../Assets/team/AI/sureshOthayoth.jpg";
import krish from "../../Assets/team/krish.jpg";
import foram from "../../Assets/team/foram.jpg";
import kartavi from "../../Assets/achievements/kartavi.jpg";
import chandraveer from "../../Assets/team/chandraveer.png";
import chaitali from "../../Assets/team/original/chaitalikarpe.jpeg"
import chhaya from "../../Assets/team/original/ChhayaRaundal.jpeg"
import drchandra from "../../Assets/team/original/drchandra.jpeg"
import drnilesh from "../../Assets/team/original/drnilesh.jpeg"
import drrahul from "../../Assets/team/original/chaitalikarpe.jpeg"
import drmihir from "../../Assets/team/original/drmihir.jpg"
import drjignesh from "../../Assets/team/original/drjignesh.jpg"
import ishika from "../../Assets/team/original/IshikaPatel.jpeg"
import Abidhusain from "../../Assets/team/original/MrAbidhusain.jpeg"
import mranup from "../../Assets/team/original/mranup.jpg"
import pranjal from "../../Assets/team/original/PRANJALDAVE.png"
import Charmi from "../../Assets/team/original/MsCharmi.jpeg"
import soham from "../../Assets/team/original/Soham.png"
import vedantratna from "../../Assets/team/original/Vedantratna.jpeg"


const TabbedAboutTeam = () => {
  const [activeTab, setActiveTab] = useState("team");

  const tabs = [
    { id: "team", label: "Our Team" },
    { id: "directors", label: "Board of Directors" },
    { id: "advisory", label: "Advisory Board" },
    { id: "faculty", label: "Faculty Mentors" },
    { id: "industry", label: "Industry Mentors" },
    { id: "tc", label: "Technical Associates" },
    { id: "student", label: "Student Team" },
  ];

  const teamData = {
    team: [
      {
        name: "Mr. Bimal Bhayani",
        role: "CEO, GUIITAR",
        image: mrbimal,
        resumeLink:
          "https://drive.google.com/file/d/112CsLKNyusAz_DtrbrzGrpJc4odCcuKw/view?usp=drive_link",
      },
      {
        name: "Mr. KiranKumar Parmar",
        role: "Sr. Manager",
        image: mrkiran,
        resumeLink:
          "https://drive.google.com/file/d/1ElxEwweEeZeroWkqfCd6RtrPqxKo5ZK-/view?usp=drive_link",
      },

      // {
      //   name: "Dr. Sanjukta Bose Goswami",
      //   role: "Startup Coordinator SOT",
      //   image: drbose,
      //   resumeLink:
      //     "https://drive.google.com/file/d/1oUzPVx2ZyouUqacRfDDSeRTkqsBJQBIH/view?usp=drive_link",
      // },
      {
        name: "Dr. Nilesh Bhadure",
        role: "Not Mentioned",
        image: drnilesh,
        resumeLink:
          "",
      },
      {
        name: "Dr. Chandra Has",
        role: "Not Mentioned",
        image: drchandra,
        resumeLink:
          "",
      },
      {
        name: "Dr. Jignesh Valand",
        role: "Not Mentioned",
        image: drjignesh,
        resumeLink:
          "",
      },
      {
        name: "Dr. Rahul Sharma",
        role: "Not Mentioned",
        image: drrahul,
        resumeLink:
          "",
      },
      {
        name: "Dr. Mihir Trivedi",
        role: "Not Mentioned",
        image: drmihir,
        resumeLink:
          "",
      },
      {
        name: "Mr. Abidhusain Lodha",
        role: "Not Mentioned",
        image: Abidhusain,
        resumeLink:
        "",
      },
      {
        name: "Mr. Akhilesh Prajapati",//done
        role: "Startup Coordinator SOS",
        image: drprajapati,
        resumeLink:
          "https://drive.google.com/file/d/1Br9gUAJ1BXvaTveLrCcnPlYRREHgGRb2/view?usp=sharing",
      },
      {
        name: "Ms. Charmi Mehta",
        role: "Not Mentioned",
        image: Charmi,
        resumeLink:
          "",
      },
      {
        name: "Shri Anup Upadhaya",
        role: "Not Mentioned",
        image: mranup,
        resumeLink:
          "",
        },
        {
          name: "Ms. Chaitali Karpe",
          role: "Not Mentioned",
          image: chaitali,
          resumeLink:
          "",
      },
      // {
      //   name: "Dr. Abha Kalaiya", //done
      //   role: "Startup Coordinator SOM",
      //   image: drabha,
      //   resumeLink:
      //     "https://drive.google.com/file/d/1UWotFOvcqX73ue7MR6E1pZocL7YrsQuj/view?usp=sharing",
      // },
      // {
      //   name: "Ms. Shweta Rajput",//done
      //   role: "Startup Coordinator SOT",
      //   image: msrajput,
      //   resumeLink:
      //     "https://drive.google.com/file/d/1OYMqkEx7neQQaLcQBcebpKYRX5PTMXhc/view?usp=sharing",
      // },
      // {
      //   name: "Ms. Archana Magare",//done
      //   role: "Startup Coordinator SOT",
      //   image: msmagare,
      //   resumeLink:
      //     "https://drive.google.com/file/d/1ITVTL_O2TDeGdyRF0XE254bSkbUAeKbj/view?usp=sharing",
      // },
      // {
      //   name: "Dr. Aditya Puranik",//done
      //   role: "Startup Coordinator SOS",
      //   image: mrpuranik,
      //   resumeLink:
      //     "https://drive.google.com/file/d/1NBPBs-RnWe6Yj9Y4P9EEI--Tav6F-yuh/view?usp=sharing",
      // },
      // {
      //   name: "Dr. Trupti Gajarai",//done
      //   role: "Startup Coordinator SOS",
      //   image: drgajarai,
      //   resumeLink:
      //     "https://drive.google.com/file/d/1NBPBs-RnWe6Yj9Y4P9EEI--Tav6F-yuh/view?usp=sharing",
      // },
      // {
      //   name: "Dr. Ankit Sudhir",//done

      //   role: "Startup Coordinator SOS",
      //   image: drankit,
      //   resumeLink:
      //     "https://drive.google.com/file/d/138G6jO_hUBZiNLQR-SmHbSk1C_PAuoAb/view?usp=sharing",
      // },

      {
        name: "Mr. Hemant Rajpoot"  ,//done
        role: "IT Coordinator",
        image: mrhemant,
        resumeLink:
          "https://drive.google.com/file/d/1j3pqIx6TDc_rbHZG58SqJEfE9S_MbTyY/view?usp=sharing",
      },
    ],

    directors: [ //Done
      {
        name: "Shri P. K. Taneja, IAS (Retd.)",
        role: "Chairman",
        image: mrpktaneja,
        resumeLink:
          "https://drive.google.com/file/d/19leo-CdgJGIbK21nzL5gi4-j6Th2SJnf/view?usp=sharing",
      },
      {
        name: "Dr. G. R. Sinha",
        role: "Director",
        image: mrgrsinha,
        resumeLink:
          "https://drive.google.com/file/d/1SXjUbqVrwRuJtDcSR1ulK9BG3tIq_x7e/view?usp=sharing",
      },
      {
        name: "Shri Ramesh Panchal",
        role: "Director",
        image: mrpanchal,
        resumeLink:
          "https://drive.google.com/file/d/1GFGH8JrCwt9r891zWTe09EbZ582IsCPw/view?usp=sharing",
      },
      {
        name: "Mr. Bimal Bhayani",
        role: "Director & CEO",
        image: mrbimal,
        resumeLink:
          "https://drive.google.com/file/d/1ATHFSVbUNnHvcH-PORVVjdW4kIpm5IUL/view?usp=sharing",
      },
      {
        name: "Dr. Pujan Vaishnav",
        role: "Director",
        image: mrpujan,
        resumeLink:
          "https://drive.google.com/file/d/1eK7502orqHyc0hbFHZVwbK-AjK-A42xo/view?usp=drive_link",
      },
      {
        name: "Shri Utkarsh Yajnik",
        role: "Director",
        image: mrutkarsh,
        resumeLink:
          "https://drive.google.com/file/d/181rcISoVdjwOkNiMyH3BUy0q87IT6ky_/view?usp=drive_link",
      },
      {
        name: "Shri Ravin Sanghavi",
        role: "Director",
        image: mrravin,
        resumeLink:
          "https://drive.google.com/file/d/1jt9oDu-DKihnSx8JThanmrfrZnX8CxY4/view?usp=drive_link",
      },
      {
        name: "Mrs. Swati Bedekar",
        role: "Director",
        image: msswati,
        resumeLink:
          "https://drive.google.com/file/d/1C-xPhamxA2bZvjqFWPaQPmdIDXhqgJKA/view?usp=drive_link",
      },
    ],

    advisory: [ 
      {
        name: "Dr. Madhukumar Mehta",
        role: "Advisor",
        resumeLink:
          "https://drive.google.com/file/d/1TLGCNmJ-5l200UdUDf97CXYndlspTUUZ/view?usp=drive_link",
        image: drmadhukumar,
      },
      {
        name: "Mr. Ramanan Ramanathan",
        role: "Advisor",
        resumeLink:
          "https://drive.google.com/file/d/16STS2iKqGGcaUzEtHfY_fYdvWIASZMgw/view?usp=drive_link",
        image: ramanan,
      },
      {
        name: "Mr. Anupam Jatole",// Resume remaining
        role: "Advisor",
        resumeLink:
          "https://drive.google.com/file/d/14CTQ1re-FYTLSavteSPDZeNpSFD85xhQ/view?usp=sharing",
        image: mranupam,
      },
      {
        name: "Mr. Hemal Patel",// Resume remaining
        role: "Advisor",
        resumeLink:
          "https://drive.google.com/file/d/181dBRXhs5jd_gJCfxN6SAmlRyH4IiNWG/view?usp=sharing",
        image: mrhemal,
      },
      {
        name: "Mr. Shankar C Rele",// Resume remaining
        role: "Advisor",
        resumeLink:
          "https://drive.google.com/file/d/1fgdUmTy9v5aHHtlFkwVQwA2BPHTWUpAw/view?usp=sharing",
        image: mrshankar,
      },
      {
        name: "Dr. Nilesh Khare",
        role: "Advisor",
        resumeLink:
          "https://drive.google.com/file/d/1Qnj1kWneo7hyZHwT9ltsvKUaV6vhpnfz/view?usp=drive_link",
        image: mrnilesh,
      },
      {
        name: "Ms. Poyni Bhatt",
        role: "Advisor",
        resumeLink:
          "https://drive.google.com/file/d/1BTs1MGyeIdLx4OB9DebVBPKOpLbKunTN/view?usp=drive_link",
        image: mspoyni,
      },
      {
        name: "Mr. Bhavesh Chelani",
        role: "Advisor",
        resumeLink:
          "https://drive.google.com/file/d/1cthr78T5xMwFCGP7YnoPjvaOGCdJzUmC/view?usp=drive_link",
        image: mrbhavesh,
      },
      {
        name: "Mr. Nirav D Shah",
        role: "Advisor",
        resumeLink:
          "https://drive.google.com/file/d/1ovlOr2LVEmLbqmK8-H2JtIt0A2ONA3Kt/view?usp=drive_link",
        image: mmirav,
      },
      {
        name: "Mr. Azam Ali Khan",
        role: "Advisor",
        resumeLink:
          "https://drive.google.com/file/d/1KSPaeV-Z0MIujKIvjaeJfZEw6CFvEhld/view?usp=drive_link",
        image: mrali,
      },
      {
        name: "Dr. G R Sinha",
        role: "Advisor",
        resumeLink:
          "https://drive.google.com/file/d/1D25qxtb4duKHXe2OXh9c1KaTlOZtegeM/view?usp=drive_link",
        image: mrgrsinha,
      },
      {
        name: "Mr. Ramesh Panchal",
        role: "Advisor",
        resumeLink:
          "https://drive.google.com/file/d/1eE5UNunlx5bNjlooxSEuiCjlhdBZA9xI/view?usp=drive_link",
        image: mrpanchal,
      },
      {
        name: "Mr. Bimal Bhayani",
        role: "Advisor",
        resumeLink:
          "https://drive.google.com/file/d/112CsLKNyusAz_DtrbrzGrpJc4odCcuKw/view?usp=drive_link",
        image: mrbimal,
      },
    ],

    faculty: [ //Done
      {
        name: "Dr. Bharti Trivedi",
        role: "Visiting Professor",
        image: drTrivedi,
        resumeLink: "https://drive.google.com/file/d/1A2q3HkyB8UPMfXCWcSFfjG1ob5zg_cuw/view?usp=sharing",
      },
      {
        name: "Dr. Devjani Banerjee",
        role: "Assistant Professor",
        image: devjaniBanerjee,
        resumeLink: "https://drive.google.com/file/d/17lLS0KlbIGr7IQusyJjNAVBFGrDWFkwm/view?usp=sharing",
      },
      {
        name: "Dr. Chetna Parmar",
        role: "Associate Dean",
        image: chetnaParmar,
        resumeLink: "https://drive.google.com/file/d/1FwSxe7Wzou8lnaDJ-_tCtX5Ud0f0mA6T/view?usp=sharing",
      },
      {
        name: "Dr. Sanjukta Bose Goswami",
        role: "Assistant Professor",
        image: drbose,
        resumeLink: "https://drive.google.com/file/d/1oUzPVx2ZyouUqacRfDDSeRTkqsBJQBIH/view?usp=sharing",
      },
      {
        name: "Ms. Patel Mosam",
        role: "Assistant Professor",
        image: mosamPatel,
        resumeLink: "https://drive.google.com/file/d/1118j5nUZCXwib9PAQWEX6-QhY64eu3Ns/view?usp=sharing",
      },
      {
        name: "Dr. Arti Bhadoria",
        role: "Assistant Professor",
        image: artiBhadoria,
        resumeLink: "https://drive.google.com/file/d/1x0fC1FwVlDKEQnWv0z7OVVk8Itl68_f4/view?usp=sharing",
      },
      {
        name: "Dr. Parin Kanaiya",
        role: "Assistant Professor",
        image: parinKanaiya,
        resumeLink: "https://drive.google.com/file/d/1-3OHEchNo4efjv6bmnDpNFqruRnjSuqK/view?usp=sharing",
      },
      {
        name: "Ms. Swati Saxena",
        role: "Assistant Professor",
        image: swatiSaxena,
        resumeLink: "https://drive.google.com/file/d/1vBzRUcKz506cpJu0lbzZvK5-EfGo3gZa/view?usp=sharing",
      },
      {
        name: "Dr. Akhilesh Prajapati",
        role: "Assistant Professor",
        image: drprajapati,
        resumeLink: "https://drive.google.com/file/d/113w46kL1amfBIjEpStdAj6quOW4KLrnh/view?usp=sharing",
      },
      {
        name: "Ms. Archana Magare",
        role: "Assistant Professor",
        image: msmagare,
        resumeLink: "https://drive.google.com/file/d/18SrHuomt-nJXyOCr2BOz1R67WOEq79_G/view?usp=sharing",
      },
      {
        name: "Dr. Arti Hansda",
        role: "Assistant Professor",
        image: artiHansda,
        resumeLink: "https://drive.google.com/file/d/1xHbWbvWJ3q3gKB5k3tLhFnKaIxlKByas/view?usp=sharing",
      },
    ],

    industry: [ 
      {
        name: "Mr. Sudhir Gupta",
        role: "Member Strategic Advisory Board, Millennium Alliance",
        image: sudhirGupta,
        resumeLink: "https://drive.google.com/file/d/1lcGUw_iv5QV_26Ws1Yw8L90m7xfyRwli/view?usp=sharing",
      },
      {
        name: "Prof Dhruv Nath",
        role: "Director, Lead Angels Network",
        image: dhruvNath,
        resumeLink: "https://drive.google.com/file/d/1Xc4elkNejWYzfkdsWpvp1gzy5xeO7rZV/view?usp=sharing",
      },
      {
        name: "Mr. Ravin Sanghavi",
        role: "Founder, Ravin Sanghavi & Associates",
        image: mrravin,
        resumeLink: "https://drive.google.com/file/d/1buZ3lzvPBI4KuKT5ePXjW73I85Ua8MRW/view?usp=sharing",
      },
      {
        name: "Dr. Manoj Shukla",
        role: "CEO, Gurukul Academy",
        image: manojShukla,
        resumeLink: "https://drive.google.com/file/d/1_gRfG0ArnfrgmEoFvciyp1mf97oEK-R7/view?usp=sharing",
      },
      {
        name: "Mr. Rupesh Shah",
        role: "CEO, Barodaweb",
        image: rupeshShah,
        resumeLink: "https://drive.google.com/file/d/1gDR1HkvgLwi00oeI1p18gZbH5uUyqmiG/view?usp=sharing",
      },
      {
        name: "Kalpesh Shah",
        role: "Director, Market Creators Ltd",
        image: kalpeshShah,
        resumeLink: "https://drive.google.com/file/d/12lHXezQ2B8cWsozcIfHbj8Uyuh1Mnk6C/view?usp=sharing",
      },
      {
        name: "Mr. Hitesh Porwal",
        role: "Founder, BIZSTART",
        image: HITESH_PORWAL,
        resumeLink: "https://drive.google.com/file/d/1Ghm7j6Aank9BTTqNoPDz0xPSGwfnjYtz/view?usp=sharing",
      },
      {
        name: "Mr. Bhavesh Kothari",
        role: "Founder Director, Millennium Divas Pvt Ltd",
        image: bhaveshKothari,
        resumeLink: "https://drive.google.com/file/d/17ffQE3p6HXSjGNKmHSEPAEGzbj5LPJPv/view?usp=sharing",
      },
      {
        name: "Adv. Bhavik B Patel",
        role: "CEO, INFINVENT IP",
        image: Bhavik,
        resumeLink: "https://drive.google.com/file/d/1Lzqfwid7roX6WrtQRodrzl1YFIeiJ0VV/view?usp=sharing",
      },
      {
        name: "Mr. Brijesh M Garala",
        role: "Director, Oviyan Cast & Forge Pvt. Ltd.",
        image: brijeshGarala,
        resumeLink: "https://drive.google.com/file/d/14EZFKx8KV_cJXYEOtYqvif8IWw_aXJDL/view?usp=sharing",
      },
      {
        name: "Mr. Bhavesh Chelani",
        role: "MD & CEO, Santushti Shakes Pvt. Ltd.",
        image: bhaveshChelani,
        resumeLink: "https://drive.google.com/file/d/1M-Y3RraBCfMLoh1fLKkGSUlXCD1zqI4_/view?usp=sharing",
      },
      {
        name: "Mr. Saurabh Jain",
        role: "Founder, FUN2DO Labs Pvt. Ltd.",
        image: saurabhJain,
        resumeLink: "https://drive.google.com/file/d/19dmD6O2djzWMpLjt6uQMpQujBGTNgP8z/view?usp=sharing",
      },
      {
        name: "Dr. Kavita Saxena",
        role: "Freelancer, Freelancing Startup mentor",
        image: kavitaSaxena,
        resumeLink: "https://drive.google.com/file/d/1IKCwwhE4ABIcHe5I134-KJztuU0TI1IM/view?usp=sharing",
      },
      {
        name: "Dr. Suresh P Othayoth",
        role: "Manager - Research, GSFC Ltd.",
        image: sureshOthayoth,
        resumeLink: "https://drive.google.com/file/d/1Azn_SAlQllptbGpXVMGylr9UIV7UQFdg/view?usp=sharing",
      },
      {
        name: "Mr. Ashutosh Tewari",
        role: "Senior Venture Coach, GITAM (deemed to be) University",
        image: ashutoshTewari,
        resumeLink: "https://drive.google.com/file/d/12Ny8kNha6UslxYB3LCJ4qMn7PocIAVSp/view?usp=sharing",
      },
      {
        name: "CA CS Chintan Popat",
        role: "CA CS - FOUNDER, CA Chintan Popat & Associates",
        image: chintanPopat,
        resumeLink: "https://drive.google.com/file/d/109FOpZyhXr8ISppZnsG_XpISwwEcvVPR/view?usp=sharing",
      },
      {
        name: "Mr. Devesh Chawla",
        role: "Founder & CEO, Chatur Ideas",
        image: deveshChawla,
        resumeLink: "https://drive.google.com/file/d/1ZBYCdGXvn3m1byMTxBltETJcE6k5GtMj/view?usp=sharing",
      },
      {
        name: "Mr. Ashwin V. Parikh",
        role: "Director, International Business Development (IBD)",
        image: ashwinParikh,
        resumeLink: "https://drive.google.com/file/d/1s9mst6_51eWPtcRjPFMuQKAbwHHZCvMR/view?usp=sharing",
      },
      {
        name: "Mr. Jekishan K Parmar",
        role: "Head of Sales & Technology, Aver India Equipment",
        image: jekishanParmar,
        resumeLink: "https://drive.google.com/file/d/1F_tQegSFZcVim7xi3nwr5UL6Vo3UCdzj/view?usp=sharing",
      },
      {
        name: "Mr. Amitkumar Patel",
        role: "Managing Director, PATactual IP Law Services LLP",
        image: amitPatel,
        resumeLink: "https://drive.google.com/file/d/1Bnnp0wRZ9uec637ZvGwypIrpWDzolHZi/view?usp=sharing",
      },
      {
        name: "Mr. Karan Shah",
        role: "Head - Partnership & Outreach, Civitas Sustainability Foundation",
        image: karanShah,
        resumeLink: "https://drive.google.com/file/d/1ejVLhVI4mhVfG1GbYK84rKBIEo6ynQNS/view?usp=sharing",
      },
      {
        name: "Mr. Devang Patel",
        role: "Founder, Vantage Point Executive Coaching",
        image: devangPatel,
        resumeLink: "https://drive.google.com/file/d/1v2J70FPeCtw3Et-1Ni4cEdjAAdIrf5T_/view?usp=sharing",
      },
      {
        name: "Mr. Prakash Vaghasiya", //Resume remainig
        role: "CEO, Vise Organic",
        image: PRAKASH_VAGHASIYA,
        resumeLink: "https://drive.google.com/file/d/1Cw8fFm7AZGInc6GIriNr30lqv9Cx-yCJ/view?usp=sharing",
      },
      {
        name: "Mr. Javid Shaikh",
        role: "CEO, Biopharma Incubation Center (BIC), NIPER-Ahmedabad",
        image: javidShaikh,
        resumeLink: "https://drive.google.com/file/d/1luBN1fWumxnQ6LcLwgxKztkmBUsSxcey/view?usp=sharing",
      },
      {
        name: "Adv. Dr. Heena Patel", // Resume remaining
        role: "Partner, INFINVENT IP",
        image: Heena,
        resumeLink: "https://drive.google.com/file/d/1FhznlDFTjrQxxzPc81a72raVViXJm_vW/view?usp=sharing",
      },
      {
        name: "Mr. Bhavik Bhansali",
        role: "Senior Engineer, L&T Technology Services",
        image: BHAVIK_BHANSALI,
        resumeLink: "https://drive.google.com/file/d/1uOb76AHhegheXcK7H9u1p4Gl2sT5zAeq/view?usp=sharing",
      },
      {
        name: "Mr. Akash Dadhania",
        role: "Owner, J K Fertilizers",
        image: akashDadhania,
        resumeLink: "https://drive.google.com/file/d/1wtPGs-6lRCm27oABbdNKH4IQWreXKIj0/view?usp=sharing",
      },
      {
        name: "CA Jitendra Jain", //Resume remaining
        role: "CEO, Tapanshi Finanziell Pvt. Ltd.",
        image: jitendraJain,
        resumeLink: "https://drive.google.com/file/d/1ZIjMlISzfEHKzBtX17uy5mnafAgZyPIb/view?usp=sharing",
      },
      {
        name: "Dr. Ashish Kumar", //Resume remaining
        role: "Associate Professor, Inter University Accelerator Center",
        image: ashishKumar,
        resumeLink: "https://drive.google.com/file/d/1Jk7yWnkL1dp5VS19oOrwTWrg6suAl9pi/view?usp=sharing",
      },
      {
        name: "Nilesh Vaghela", //Resume remaining
        role: "CEO, Electromech Cloudtech Pvt. Ltd.",
        image: nileshVaghela,
        resumeLink: "https://drive.google.com/file/d/126zhWcYEPqMwzxDH_p3g883ZNb4a6EYA/view?usp=sharing",
      },
      {
        name: "Karmjitsinh Bihola",
        role: "Founder, Innodesk Designovation Services",
        image: karmjitsinhBihola,
        resumeLink: "https://drive.google.com/file/d/15Qqik9s9MGSf1mBJ6Hah9C9ZqF8YXs1t/view?usp=sharing",
      },
      {
        name: "Mr. Anant Acharya",
        role: "CTO, MarsBazaar.com",
        image: anantAcharya,
        resumeLink: "https://drive.google.com/file/d/1USIuhnmDN2InedqhFO11F5y6MRbuDRsF/view?usp=sharing",
      },
    ],

    tc: [ 
      {
        name: "Ms. Foram Mistry",
        role: "Technical Associate",
        image: foram,
        resumeLink: "https://drive.google.com/file/d/1la_2SILlCEtfEqzgV0Klq5bXEFdFJ95R/view?usp=sharing",
      },
      {
        name: "Mr. Krish Shah",
        role: "Technical Associate",
        image: krish,
        resumeLink: "https://drive.google.com/file/d/1U1y8UrjXI7msX5wbgbTD2h1VGwlMNaiv/view?usp=sharing",
      },
      {
        name: "Ms. Kartavi Patel",
        role: "Technical Associate",
        image: kartavi,
        resumeLink: "https://drive.google.com/file/d/1He8AgeoGrk53c28OtLTIg-EnLZGZ8f4g/view?usp=sharing",
      },
      {
        name: "Mr. Chandraveer Sinh Solanki",
        role: "Technical Associate",
        image: chandraveer,
        resumeLink: "https://drive.google.com/file/d/1TGVNe7Q9Z5UFB0K1u2GGTieFTKzSJP1W/view?usp=sharing",
      },
    ],


    student: [
      {
        name: "Mr. Soham Kava",
        role: "Academic Associate",
        image: soham,
        resumeLink: "",
      },
      {
        name: "Ms. Devanshi Mufti",
        role: "Academic Associate",
        image: dummy,
        resumeLink: "",
      },
      {
        name: "Mr. Vedhant Ratnottar",
        role: "Academic Associate",
        image: vedantratna,
        resumeLink: "",
      },
      {
        name: "Ms. Chhaya Raundal",
        role: "Academic Associate",
        image: chhaya,
        resumeLink: "",
      },
      {
        name: "Ms. Panjal Dave",
        role: "Academic Associate",
        image: pranjal,
        resumeLink: "",
      },
      {
        name: "Mr. Dhruv Verma",
        role: "Academic Associate",
        image: dummy,
        resumeLink: "",
      },
      {
        name: "Ms. Ishika Patel",
        role: "Academic Associate",
        image: ishika,
        resumeLink: "",
      },
      {
        name: "Ms. Khhushi Makwana",
        role: "Academic Associate",
        image: dummy,
        resumeLink: "",
      },
    ]
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
          {teamData[activeTab]?.map((member, index) => (
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
