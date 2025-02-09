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

function AppContent() {
  const location = useLocation();

  return (
    <>
      <Navbar />
      <NavbarMobile />
      <Routes key={location.pathname}>
        <Route
          path="/"
          element={
            <>
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
        <Route
          path="/about"
          element={
            <>
              <About />
              <Footer />
            </>
          }
        />
        <Route
          path="/privacy"
          element={
            <>
              <Privacy/>
              <Footer />
            </>
          }
        />
        <Route
          path="/funding"
          element={
            <>
              <Funding />
              <Footer />
            </>
          }
        />
        <Route
          path="/programs"
          element={
            <>
              <Programs />
              <Footer />
            </>
          }
        />
        <Route
          path="/contact"
          element={
            <>
              <Contact />
              <Footer />
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
