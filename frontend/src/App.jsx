import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './modules/Navbar';
import Carousel from './modules/Carousel'; // Home
import Mission from './modules/Mission';
import MessageFromPresident from './modules/MessageFromPresident';
import Scalar from './modules/Scalar';
import Footer from './modules/Footer';
import About from './modules/About'; // About.jsx
import Funding from './modules/Funding'; // Funding.jsx
import Programs from './modules/Programs'; // Programs.jsx
import Resources from './modules/Resources'; // Resources.jsx
import Contact from './modules/Contact'; // Contact.jsx

import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        {/* Home Route with Shared Layout */}
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Carousel />
              <Mission />
              <MessageFromPresident />
              <Scalar />
              <Footer />
            </>
          }
        />

        {/* About Page with Shared Layout */}
        <Route
          path="/about"
          element={
            <>
              <Navbar />
              <About />
              <Footer />
            </>
          }
        />

        {/* Funding Page with Shared Layout */}
        <Route
          path="/funding"
          element={
            <>
              <Navbar />
              <Funding />
              <Footer />
            </>
          }
        />

        {/* Programs Page WITHOUT Shared Layout */}
        <Route 
          path="/programs" 
          element={
            <>
          <Navbar /> 
          <Programs />  
          <Footer />
          </>
          } 
          />

        {/* Resources Page with Shared Layout */}
        <Route
          path="/resources"
          element={
            <>
              <Navbar />
              <Resources />
              <Footer />
            </>
          }
        />

        {/* Contact Page with Shared Layout */}
        <Route
          path="/contact"
          element={
            <>
              <Navbar />
              <Contact />
              <Footer />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
