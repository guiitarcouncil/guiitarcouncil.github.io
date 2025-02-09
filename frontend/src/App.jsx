import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./modules/Navbar";
import NavbarMobile from "./modules/NavbarMobile";
import Footer from "./modules/Footer";
import Carousel from "./modules/Carousel";
import Scalar from "./modules/Scalar";
import Mission from "./modules/Mission";
import About from "./modules/About";
import Funding from "./modules/Funding";
import Programs from "./modules/Programs";
import Contact from "./modules/Contact";
import Notfound from "./modules/Notfound";
import Associations from "./modules/Associations";
import Build from "./modules/Build";
import ScrollToTop from "./modules/ScrollTop";
// import Login from "./modules/login";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <NavbarMobile />
              <Carousel />
              <Mission />
              <Build />
              <Scalar />
              <div id="associations">
                <Associations />
              </div>
              <Footer />
            </>
          }
        />
        {/* <Route
          path="/login"
          element={
            <>
              <Navbar />
              <Login />
              <Footer />
            </>
          }
        /> */}
        <Route
          path="/about"
          element={
            <>
              <Navbar />
              <NavbarMobile />
              <About />
              <Footer />
            </>
          }
        />
        <Route
          path="/funding"
          element={
            <>
              <Navbar />
              <NavbarMobile />
              <Funding />
              <Footer />
            </>
          }
        />
        <Route
          path="/programs"
          element={
            <>
              <Navbar />
              <NavbarMobile />
              <Programs />
              <Footer />
            </>
          }
        />

        <Route
          path="/contact"
          element={
            <>
              <Navbar />
              <NavbarMobile />
              <Contact />
              <Footer />
            </>
          }
        />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </Router>
  );
}

export default App;
