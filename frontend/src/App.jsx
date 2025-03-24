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
import Carousel from "../src/components/Home/Carousel";
import Scalar from "../src/components/Home/Scalar";
import Mission from "../src/components/Home/Mission";
import About from "..src/components/About/About";
import Funding from "..src/components/Funding/Funding";
import Programs from "..src/components/Programs/Programs";
import Contact from "..src/components/Contact/Contact";
import Notfound from "./components/Notfound";
import Associations from "..src/components/Home/Associations";
import Build from "..src/components/Home/Build";
import Privacy from "./components/Privacy";
import Faq from "..src/Components/Home/Faq";
import Terms from "./components/Terms";
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
