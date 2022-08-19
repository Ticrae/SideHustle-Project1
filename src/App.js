import "./App.css";
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import ContactMe from "./pages/ContactMe";
import linkedin from "./components/assets/linkedin.svg";
import twitter from "./components/assets/twitter.svg";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <div className="Navbar">
        <div className="list">
          <h2 className="NameTag">Ukobo Utibe</h2>
          <ul>
            <li>
              <a href="#About">About Me</a>
            </li>
            <li>
              <a href="#service">Services</a>
            </li>
            <li>
              <a href="#project">Projects Me</a>
            </li>
            <li>
              <a href="#contact">Contact Me</a>
            </li>
          </ul>
        </div>
        <div className="NavbarIcons">
          <img src={linkedin} alt="Linkedin" />
          <img src={twitter} alt="Linkedin" />
        </div>
      </div>

      <Home />
      <AboutMe />
      <Services />
      <Projects />
      <ContactMe />
      <Footer />
    </div>
  );
}

export default App;
