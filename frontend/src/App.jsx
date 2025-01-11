import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './modules/Navbar';
import Programs from './modules/Programs'; 
import Footer from './modules/Footer';
import Carousel from './modules/Carousel'
import Mission from './modules/Mission';
import Scalar from './modules/Scalar'
import MessageFromPresident from './modules/MessageFromPresident'
import './App.css'; 

// App Component
function App() {
  return (
    <Router> 
        
        <Navbar />
      <Routes>
        <Route path="/" element={<Carousel />} />
        <Route path="/about" element={<About />} />
        <Route path="/funding" element={<Funding />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      
        
        <Mission/>
        <MessageFromPresident/>
        <Scalar/>
        <Footer />
    
       
    </Router>
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