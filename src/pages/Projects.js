import React from "react";
import ProjectList from "../components/ProjectList";
import "./Projects.css";

const Projects = () => {
  return (
    <div id="project" className="projectContainer">
      <h1>Milestones of Projects</h1>
      <p>Here are a few people & projects i’ve patnered and worked on.</p>
      <ProjectList />
    </div>
  );
};

export default Projects;
