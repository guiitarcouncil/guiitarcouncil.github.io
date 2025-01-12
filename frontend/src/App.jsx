import React, { useEffect, useRef, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './modules/Navbar';
import Footer from './modules/Footer';
import Carousel from './modules/Carousel'; // Home
import Scalar from './modules/Scalar'; // Scalar
import Mission from './modules/Mission'; // Mission section
import MessageFromPresident from './modules/MessageFromPresident'; // Message section

// Import all other components
import About from './modules/About';
import Funding from './modules/Funding';
import Programs from './modules/Programs';
import Resources from './modules/Resources';
import Contact from './modules/Contact';

import './App.css';

function App() {
  const [startMissionAnimation, setStartMissionAnimation] = useState(false);
  const [startMessageAnimation, setStartMessageAnimation] = useState(false);

  const missionRef = useRef(null);
  const messageRef = useRef(null);

  useEffect(() => {
    const observerOptions = { threshold: 0.2 };

    const missionObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartMissionAnimation(true);
        }
      },
      observerOptions
    );

    const messageObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartMessageAnimation(true);
        }
      },
      observerOptions
    );

    if (missionRef.current) missionObserver.observe(missionRef.current);
    if (messageRef.current) messageObserver.observe(messageRef.current);

    return () => {
      if (missionRef.current) missionObserver.unobserve(missionRef.current);
      if (messageRef.current) messageObserver.unobserve(messageRef.current);
    };
  }, []);

  return (
    <Router>
      <Routes>
        {/* Home Route */}
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Carousel />

              {/* Mission Section */}
              <div ref={missionRef}>
                <Mission startAnimation={startMissionAnimation} />
              </div>

              {/* Message From President Section */}
              <div ref={messageRef}>
                <MessageFromPresident startAnimation={startMessageAnimation} />
              </div>

              <Scalar />
              <Footer />
            </>
          }
        />

        {/* About Page */}
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

        {/* Funding Page */}
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

        {/* Programs Page */}
        <Route path="/programs" element={<Programs />} />

        {/* Resources Page */}
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

        {/* Contact Page */}
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
