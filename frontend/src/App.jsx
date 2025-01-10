import React from 'react';
import './App.css'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Programs from './Programs'; 
import Footer from './Footer';


// App Component
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/funding" element={<Funding />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
       
    </Router>
  );
}

function Home() {
  return (
    <div className="home">
      <div className="carousel">
        <h1>Welcome to GUIITAR Council</h1>
        <p></p>
      </div>
      <div className="home-sections">
        <section>
          <h2>Our Mission</h2>
          <p>Driving innovation and entrepreneurship with zero-cost startup support.</p>
        </section>
        <section>
          <h2>Our Impact</h2>
          <p>100+ Startups Incubated</p>
          <p>50+ Student-Led Projects</p>
        </section>
        <section>
          <h2>Message from the President</h2>
          <p>A vision to foster creativity and empower the next generation of innovators.</p>
        </section>
      </div>
    </div>
  );
}

// About Component
function About() {
  return (
    <div className="about">
      <h1>About GUIITAR Council</h1>
      <p>Our mission is to support and nurture startups and student-led projects.</p>
    </div>
  );
}

// Funding Component
function Funding() {
  return (
    <div className="funding">
      <h1>Funding Opportunities</h1>
      <ul>
        <li>SSIP</li>
        <li>Nodal Institute</li>
      </ul>
    </div>
  );
}


// Resources Component
function Resources() {
  return (
    <div className="resources">
      <h1>Resources</h1>
      <ul>
        <li>Startup Policy</li>
        <li>IPR Policy</li>
        <li>Infrastructure Details</li>
        <li>Event Reports</li>
        <li>Annual Returns</li>
      </ul>
    </div>
  );
}

// Contact Component
function Contact() {
  return (
    <div className="contact">
      <h1>Contact Us</h1>
      <p>Office Address: Gujarat University, Gujarat</p>
      <p>Email: info@guiitarcouncil.com</p>
      <p>Phone: +91-1234567890</p>
    </div>
  );
}


// import Footer from './Footer';
export default App;
