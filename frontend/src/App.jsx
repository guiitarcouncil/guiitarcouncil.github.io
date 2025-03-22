import "./App.css";
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
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
import Privacy from "./modules/Privacy";
import Faq from "./modules/Faq";

function AppContent() {
  const location = useLocation();

  return (
    <>
      <Routes key={location.pathname}>
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
              <Faq />
              <Footer />
            </>
          }
        />
        <Route
          path="/about"
          element={
            <>
              {" "}
              <About />
            </>
          }
        />
        <Route
          path="/privacy"
          element={
            <>
            <NavbarMobile />
            <Navbar/>
              <Privacy />
              <Footer/>
            </>
          }
        />
        <Route
          path="/funding"
          element={
            <>
              <Funding />
            </>
          }
        />
        <Route
          path="/programs"
          element={
            <>
              <Programs />
            </>
          }
        />
        <Route
          path="/contact"
          element={
            <>
              <Contact />
            </>
          }
        />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <AppContent />
    </Router>
  );
}

export default App;
