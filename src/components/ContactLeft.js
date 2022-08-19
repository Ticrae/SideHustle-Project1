import React from "react";
import linkedin from "./assets/linkedin.svg";
import twitter from "./assets/twitter.svg";
import telephone from "./assets/telephone.svg";
import envelope from "./assets/envelope.svg";

const ContactLeft = () => {
  return (
    <div className="ContactLeft">
      <h2>Get In Touch</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nec
        sollicitudin tellus. Phasellus ac nisi augue.
      </p>
      <div className="socials">
        <img src={linkedin} alt={"social"} />
        <img src={twitter} alt={"social"} />
        <h5>-Xyluz</h5>
      </div>
      <div className="email">
        <img src={envelope} alt={"contact"} />
        <div>
          <h5>utibeukobo@gmail.com</h5>
          <h6>Send a message Anytime!</h6>
        </div>
      </div>
      <div className="phone">
        <img src={telephone} alt={"contact"} />
        <div>
          <h5>+234 - 905 - 685 - 0871</h5>
          <h6>Send a message Anytime!</h6>
        </div>
      </div>
    </div>
  );
};

export default ContactLeft;
