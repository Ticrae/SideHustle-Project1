import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AboutMe from "../pages/AboutMe";
import Services from "../pages/Services";
import Projects from "../pages/Projects";
import ContactMe from "../pages/ContactMe";
import linkedin from "../components/assets/linkedin.svg";
import twitter from "../components/assets/twitter.svg";

const Navbar = () => {
  return (
    <div>
      <Router>
        <div className="Navbar">
          <div className="list">
            <Link className="NameTag" to="/">
              {" "}
              Seyi Onifade
            </Link>
            <ul>
              <li>
                <Link to="/AboutMe">About Me</Link>
              </li>
              <li>
                <Link to="/Services">Services</Link>
              </li>
              <li>
                <Link to="/Projects">Projects Me</Link>
              </li>
              <li>
                <Link to="/ContactMe">Contact Me</Link>
              </li>
            </ul>
          </div>
          <div className="NavbarIcons">
            <img src={linkedin} alt="Linkedin" />
            <img src={twitter} alt="Linkedin" />
          </div>
        </div>

        <Routes>
          <Route exact path="/"></Route>
          <Route exact path="/AboutMe" element={<AboutMe />}></Route>
          <Route exact path="/Services" element={<Services />}></Route>
          <Route exact path="/Projects" element={<Projects />}></Route>
          <Route exact path="/ContactMe" element={<ContactMe />}></Route>
        </Routes>
      </Router>
    </div>
  );
};

export default Navbar;
