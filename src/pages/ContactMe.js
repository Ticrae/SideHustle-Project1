import React from "react";
import "./ContactMe.css";
import ContactLeft from "../components/ContactLeft";
import ContactRight from "../components/ContactRight";

const ContactMe = () => {
  return (
    <div id="contact" className="ContactMeContainer">
      <ContactLeft />
      <ContactRight />
    </div>
  );
};

export default ContactMe;
