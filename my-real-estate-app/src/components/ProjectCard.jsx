import React, { memo, useState } from "react";
import { useNavigate } from "react-router-dom";
import './ProjectCard.css';

const ProjectCard = ({ project }) => {
  const navigate = useNavigate();
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const handleCardClick = (e) => {
    // Prevent event bubbling
    e.stopPropagation();

    // Add haptic feedback for mobile devices
    if ('vibrate' in navigator) {
      navigator.vibrate(50);
    }

    navigate(`/projects/${project.slug}`);
  };

  const handleTouchStart = (e) => {
    // Add visual feedback for touch start
    e.currentTarget.style.transform = 'scale(0.98)';
  };

  const handleTouchEnd = (e) => {
    // Reset visual feedback
    e.currentTarget.style.transform = '';
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Upcoming':
        return 'var(--color-accent)';
      case 'Completed':
        return '#10b981'; // Green
      case 'In Progress':
        return 'var(--color-primary)';
      default:
        return 'var(--text-tertiary)';
    }
  };

  return (
    <div
      className="project-card"
      onClick={handleCardClick}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      role="button"
      tabIndex={0}
      aria-label={`View details for ${project.name}`}
    >
      {/* Image Container */}
      <div className="project-card-image-container">
        {!imageLoaded && !imageError && (
          <div className="project-card-image-placeholder skeleton"></div>
        )}
        {imageError ? (
          <div className="project-card-image-error">
            <span>🏗️</span>
            <span>Image unavailable</span>
          </div>
        ) : (
          <img 
            src={project.image} 
            alt={project.name} 
            className={`project-card-image ${imageLoaded ? 'loaded' : 'loading'}`}
            loading="lazy"
            onLoad={() => setImageLoaded(true)}
            onError={() => setImageError(true)}
          />
        )}
        
        {/* Status Badge */}
        <div 
          className="project-status-badge"
          style={{ 
            background: getStatusColor(project.status),
            color: 'var(--text-inverse)'
          }}
        >
          {project.status}
        </div>

        {/* Overlay on Hover */}
        <div className="project-card-overlay">
          <div className="project-card-features">
            {project.features && project.features.slice(0, 3).map((feature, index) => (
              <span key={index} className="feature-tag">
                {feature}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="project-card-content">
        <div className="project-card-header">
          <h3 className="project-card-title">{project.name}</h3>
          {project.type && (
            <span className="project-type-badge">{project.type}</span>
          )}
        </div>
        
        <p className="project-card-description">
          {project.description}
        </p>

        {/* Project Details */}
        <div className="project-card-details">
          {project.location && (
            <div className="project-detail">
              <span className="detail-icon">📍</span>
              <span className="detail-text">{project.location}</span>
            </div>
          )}
          {project.price && (
            <div className="project-detail">
              <span className="detail-icon">💰</span>
              <span className="detail-text">{project.price}</span>
            </div>
          )}
        </div>

        {/* Action Button */}
        <button className="project-card-button">
          <span>View Details</span>
          <span className="button-arrow">→</span>
        </button>
      </div>
    </div>
  );
};

export default memo(ProjectCard);
