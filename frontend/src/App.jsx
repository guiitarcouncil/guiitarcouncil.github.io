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
import Carousel from "./components/Home/Carousel";
import Scalar from "./components/Home/Scalar";
import Mission from "./components/Home/Mission";
import About from "./components/About/About";
import Funding from "./components/Funding/Funding";
import Programs from "./components/Programs/Programs";
import Contact from "./components/Contact/Contact";
import Notfound from "./components/Notfound";
import Associations from "./components/Home/Associations";
import Build from "./components/Home/Build";
import Privacy from "./components/Privacy";
import Faq from "./Components/Home/Faq";
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
