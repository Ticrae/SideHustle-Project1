import React from "react";

const ServiceRendered = ({ image, text, smallText }) => {
  return (
    <div className="serviceCard">
      <img src={image} alt="img" />
      <h2>{text}</h2>
      <p>{smallText}</p>
    </div>
  );
};

export default ServiceRendered;
