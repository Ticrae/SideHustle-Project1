import React from "react";
import "./Footer.css";
import enve from "./assets/enve.svg";
import linkedin1 from "./assets/linkedin1.svg";
import twitter1 from "./assets/twitter1.svg";

const Footer = () => {
  return (
    <div className="Footer">
      <h1>Ukobo Utibe</h1>
      <div>
        <img src={linkedin1} alt={"social"} />
        <img src={twitter1} alt={"social"} />
        <img src={enve} alt={"social"} />
      </div>
      <p>Copyright &copy; 2022 | All rights Reserved</p>
    </div>
  );
};

export default Footer;
