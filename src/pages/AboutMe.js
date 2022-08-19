import React from "react";
import "./AboutMe.css";
import linkedin from "../components/assets/linkedin.svg";
import twitter from "../components/assets/twitter.svg";
import MySkills from "../components/MySkills";
import php from "../components/assets/php.svg";
import python from "../components/assets/python.svg";
import js from "../components/assets/js.svg";
import html5 from "../components/assets/html5.svg";
import windows from "../components/assets/windows.svg";
import wordpress from "../components/assets/wordpress.svg";

const AboutMe = () => {
  return (
    <div id="About">
      <div className="AboutMe">
        <h1>About Me</h1>
        <p>
          Ukobo Utibe is a passionate and goal driven Techpreneur whose interest
          is in using technology to build solutions to solve real world
          problems.
        </p>
        <div>
          <img src={linkedin} alt="linkedin" />
          <img src={twitter} alt="linkedin" />
        </div>
      </div>
      <div className="mySkills">
        <h2>My Skills</h2>
        <p>Here are a few skills i possess</p>
        <div className="skillCardContainer">
          <MySkills image={php} name={"PHP"} />
          <MySkills image={python} name={"Python"} />
          <MySkills image={js} name={"Javascript"} />
          <MySkills image={wordpress} name={"Wordpress"} />
          <MySkills image={windows} name={"Microsoft Office"} />
          <MySkills image={html5} name={"HTML"} />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
