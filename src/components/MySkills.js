import React from "react";
import line from "./assets/line.svg";

const MySkills = ({ image, name }) => {
  return (
    <div className="skillCard">
      <img src={image} alt="php" />
      <div className="innerCard">
        <h4>{name}</h4>
        <img src={line} alt="line" />
      </div>
    </div>
  );
};

export default MySkills;
