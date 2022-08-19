import React from "react";
import linkedin from "../components/assets/linkedin.svg";
import twitter from "../components/assets/twitter.svg";
import dp from "../components/assets/dp.svg";
import "./Home.css";

const Home = () => {
  return (
    <div className="Content">
      <div className="FirstContent">
        <h6>HI THERE!</h6>
        <h5>I AM UKOBO UTIBE</h5>
        <h2>
          A Top-notch Developer, <br /> Writer and Mentor
        </h2>
        <div>
          <img src={linkedin} alt="linkedin" />
          <img src={twitter} alt="twitter" />
        </div>
      </div>
      <div className="DisplayLogo">
        <img src={dp} alt="dp" />
      </div>
    </div>
  );
};

export default Home;
