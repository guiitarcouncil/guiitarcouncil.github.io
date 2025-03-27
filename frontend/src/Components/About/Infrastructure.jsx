import React from "react";
import "../About/Infrastructure.css";
const coWorkingSpace = "https://res.cloudinary.com/dopcjxehj/image/upload/v1743066520/coworking_space_ntgoh3.jpg";
const designLab = "https://res.cloudinary.com/dopcjxehj/image/upload/v1743066520/design_lab_kj2aaa.jpg";
const droneLab_GUIITAR = "https://res.cloudinary.com/dopcjxehj/image/upload/v1743066520/drone_lab_mkxvo9.jpg";
const giitarlab = "https://res.cloudinary.com/dopcjxehj/image/upload/v1743066520/guiitar_lab_lh8t0a.jpg";
const library = "https://res.cloudinary.com/dopcjxehj/image/upload/v1743066520/library_pt4z2o.jpg";
const printingLab = "https://res.cloudinary.com/dopcjxehj/image/upload/v1743066525/printing_lab_wrw93w.png";
const supercomputer_lab = "https://res.cloudinary.com/dopcjxehj/image/upload/v1743066520/supercomputer_lab_t0kplg.jpg";
const surjan = "https://res.cloudinary.com/dopcjxehj/image/upload/v1743066521/surjan_ground_wds1sg.jpg";
const tinkeringLab = "https://res.cloudinary.com/dopcjxehj/image/upload/v1743066521/tinkering_lab_xabcx4.jpg";

function Infrastructure() {
  const cardsData = [
    {
      title: "Co Working Space",
      image: coWorkingSpace,
      text: "In today's dynamic world, our co-working space is the ultimate solution for those seeking a flexible, collaborative environment. Tailored for students and startups, it offers a quiet and comfortable setting that enhances creativity and productivity.",
    },
    {
      title: "IoT Lab",
      image: designLab,
      text: "A Design Lab serves as a platform for young students and academic researchers to transform their creative and innovative ideas into tangible forms, facilitating the development of ideas into deliverable projects on a lab scale or as pilot projects. It is particularly beneficial in Science, Engineering, and Technology fields, acting as a catalyst for generating intellectual properties such as patents and industrial designs.",
    },
    {
      title: "Advanced Drone Lab",
      image: droneLab_GUIITAR,
      text: "Signifying a major leap in utilizing drone technology, merging research with interdisciplinary education to lead academic innovation in the drone sector, the initiative promises to enhance student skills and foster innovation, driving societal and economic advancements.",
    },
    {
      title: "Makers Lab",
      image: giitarlab,
      text: "GUIITAR labs are available for idea generation, brain storming in groups, presentations and other admin activities of GUIITAR team. The ambiance of the space is quite suitable for incubators by bringing feel of entrepreneurial spirit all around.",
    },
    {
      title: "Library",
      image: library,
      text: "Books on Entrepreneurship, Start-ups, Innovation, IPR, and related subjects are available and accessible until 11:00 PM for study and learning purposes.",
    },
    {
      title: "3D Printing Lab",
      image: printingLab,
      text: "A spacious area is available for prototype development, testing, and demonstration, equipped with facilities such as a Laser Cutting Machine, 3D Printer, Vinyl Cutting Machine, and essential tools for Proof of Concept (PoC) or prototype development.",
    },
    {
      title: "Super Computer Lab",
      image: supercomputer_lab,
      text: "The Super Computer (Param Shavak DL GPU System) facility is available to accelerate the pace of training and development in advanced Artificial Intelligence fields, including Machine Learning and Deep Learning.",
    },
    {
      title: "Sarjan",
      image: surjan,
      text: "'Surjan' is an outdoor campus space designed for student collaboration, offering a setting for discussions, meetings, and creative idea generation. It aims to foster innovation and entrepreneurship, extending learning beyond traditional classrooms.",
    },
    {
      title: "Tinkering Lab",
      image: tinkeringLab,
      text: "Large space is available for prototype development, testing and demonstration. The space will be having facilities like basic tools for modification and minor fixes.",
    },
  ];
  return (
    <>
      <div className="infrastructure-heading">
        <h3>Our Infrastructure</h3>
      </div>
      <div className="infrastructure-cards-container">
        {cardsData.map((card, index) => (
          <div className="card" key={index}>
            <div className="card-title">{card.title}</div>
            <div className="card-image">
              <img src={card.image} alt={card.title} />
            </div>
            <div className="card-text">{card.text}</div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Infrastructure;