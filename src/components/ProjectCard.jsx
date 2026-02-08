import React from 'react';
import { Link } from 'react-router-dom';
import './ProjectCard.css';

const TechTag = ({ tech }) => (
  <span className="project-tag">{tech}</span>
);

const ProjectCard = ({ project }) => {
  const technologies = project.technologies || [];
  
  return (
    <div className="project-card">
      <div className="project-card-image">
        <img src={project.image} alt={project.title} loading="lazy" />
        <div className="project-card-overlay">
         <Link to={`/projects/${project.slug}`} className="btn btn-primary">
          View Details →
        </Link>
        </div>
      </div>
      <div className="project-card-content">
        <h3 className="project-card-title">{project.title}</h3>
        <p className="project-card-description">{project.description}</p>
        <div className="project-card-tags">
          {technologies[0] && <TechTag tech={technologies[0]} />}
          {technologies[1] && <TechTag tech={technologies[1]} />}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
