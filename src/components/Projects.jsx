import React from 'react';
import ProjectItem from './ProjectItem';
import { projectList } from '../starter';
import '../styles/Projects.css';

const Projects = () => {
  const list = projectList.map((project) => {
    return <ProjectItem project={project} />;
  });
  return <div className="Projects">{list}</div>;
};

export default Projects;
