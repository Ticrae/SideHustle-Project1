import React from "react";
import "./Services.css";
import training from "../components/assets/training.svg";
import consulting from "../components/assets/consulting.svg";
import responsive from "../components/assets/responsive.svg";
import database from "../components/assets/database.svg";
import customer from "../components/assets/customer.svg";
import software from "../components/assets/software.svg";
import sass from "../components/assets/sass.svg";
import technical from "../components/assets/technical.svg";
import web from "../components/assets/web.svg";
import ServiceRendered from "../components/ServiceRendered";

const Services = () => {
  return (
    <div id="service" className="serviceContainer">
      <h1>Services I Render.</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nec
        sollicitudin tellus. Phasellus ac nisi augue.
      </p>
      <div className="serviceCardContainer">
        <ServiceRendered
          image={training}
          text={"Training"}
          smallText={
            "I offer instructor-led training in a way that fits with the way you work."
          }
        />
        <ServiceRendered
          image={consulting}
          text={"IT Consulting"}
          smallText={
            "I offer Information technology consulting as a field of activity focused on advising organizations on how best to use information technology in achieving their business objectives."
          }
        />
        <ServiceRendered
          image={responsive}
          text={"Responsive Web Design"}
          smallText={
            "I Help design Mobile-friendly, worldclass websites that helps scales your bussiness and helps user experience get better."
          }
        />
        <ServiceRendered
          image={database}
          text={"Customer Software Development"}
          smallText={
            "I help develop tehnical solutions in form of softwarres that answer to the needs of customer’s problems."
          }
        />
        <ServiceRendered
          image={customer}
          text={"Customer Software Development"}
          smallText={
            "I help develop tehnical solutions in form of softwarres that answer to the needs of customer’s problems."
          }
        />
        <ServiceRendered
          image={software}
          text={"Software Testing"}
          smallText={
            "I help test softwares ready for production to fish out bugs and give advice on how to make it scalable, usable and enterprise-friendly. "
          }
        />
        <ServiceRendered
          image={sass}
          text={"Saas Development"}
          smallText={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nec sollicitudin tellus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nec sollicitudin tellus."
          }
        />
        <ServiceRendered
          image={technical}
          text={"Technical Writing"}
          smallText={
            "I help channel and transfer information between two or more parties, through any medium that best facilitates the transfer and comprehension of the information."
          }
        />
        <ServiceRendered
          image={web}
          text={"Web Development"}
          smallText={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nec sollicitudin tellus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nec sollicitudin tellus."
          }
        />
      </div>
    </div>
  );
};

export default Services;
