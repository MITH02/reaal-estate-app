import React, { memo } from "react";
import { useNavigate } from "react-router-dom";
import './ProjectCard.css';

const ProjectCard = ({ project }) => {
  const navigate = useNavigate();

  return (
    <div className="project-card" onClick={() => navigate(`/projects/${project.slug}`)}>
      <img src={project.image} alt={project.name} className="project-card-image" loading="lazy" />
      <h2 className="project-card-title">{project.name}</h2>
      <button
        className="project-card-button"
      >
        VIEW PROJECT <span className="project-card-button-arrow">→</span>
      </button>
    </div>
  );
};

export default memo(ProjectCard); 