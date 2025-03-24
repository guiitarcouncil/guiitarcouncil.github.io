import "./App.css";
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Navbar from "../src/Components/Navbar";
import NavbarMobile from "../src/Components/NavbarMobile";
import Footer from "../src/Components/Footer/Footer";
import Carousel from "../src/Components/Home/Carousel";
import Scalar from "../src/Components/Home/Scalar";
import Mission from "../src/Components/Home/Mission";
import About from "..src/Components/About/About";
import Funding from "..src/Components/Funding/Funding";
import Programs from "..src/Components/Programs/Programs";
import Contact from "..src/Components/Contact/Contact";
import Notfound from "./Components/Notfound";
import Associations from "..src/Components/Home/Associations";
import Build from "..src/Components/Home/Build";
import Privacy from "./Components/Privacy";
import Faq from "..src/Components/Home/Faq";
import Terms from "./Components/Terms";
import Login from "./Auth/Login"

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
              <Navbar />
              <Privacy />
              <Footer />
            </>
          }
        />
        <Route
          path="/terms"
          element={
            <>
              <NavbarMobile />
              <Navbar />
              <Terms />
              <Footer />
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
        <Route
          path="/login"
          element={
            <>
            <Login/>
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
      {/* <ScrollToTop /> */}
      <AppContent />
    </Router>
  );
}

export default App;
