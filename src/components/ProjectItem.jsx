import React from 'react';
import '../styles/ProjectItem.css';

const ProjectItem = ({ project }) => {
  return (
    <a
      href={project.linkUrl}
      target="_blank"
      className="ProjectItem__link"
      rel="noreferrer"
    >
      <div className="ProjectItem">
        <div className="ProjectItem__content">
          <h3 className="ProjectItem__name">{project.name}</h3>
          <p className="ProjectItem__description">{project.description}</p>
          <p className="ProjectItem__tools">{project.tools}</p>
        </div>
        <div className="ProjectItem__imageContainer">
          <img
            src={project.image}
            alt="project demo"
            className="ProjectItem__image"
          />
        </div>
      </div>
    </a>
  );
};

export default ProjectItem;
