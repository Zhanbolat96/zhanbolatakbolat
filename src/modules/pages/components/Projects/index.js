import React from 'react';
import { Link } from "react-router-dom";
import './styles.css';

const Projects = ({ logo, title, content, href, variant }) => {
  return (
    <div className="project">
      <img className="project_logo" src={logo} alt="project-logo"/>
      <p className="project_title">{title}</p>
      <p className="project_content">{content}</p>
      <Link className="project_link" to={href}>
        {`${variant ? 'ПРИНЯТЬ УЧАСТИЕ' : 'УЗНАТЬ ПОДРОБНЕЕ'}`}
      </Link>
    </div>
  );
}

export default Projects;