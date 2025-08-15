import React, { useState, useEffect } from "react";
import ProjectCard from "../components/ProjectCard";

const projects = [
  {
    id: 1,
    name: "Vishal Spandan",
    description: "Luxurious 3BHK apartments with contemporary design and world-class amenities",
    image: "/images/buildings/building1.jpg",
    slug: "vishal-spandan",
    status: "Upcoming",
    type: "Residential",
    features: ["3BHK Apartments", "6500 Sq.Ft Plot", "G+7 Floors", "7+ Amenities"],
    location: "Prime Location",
    price: "Contact for Pricing"
  },
  {
    id: 2,
    name: "Vishal Enrich",
    description: "Premium residential complex with modern architecture and luxury finishes",
    image: "/images/buildings/building2.jpg",
    slug: "vishal-enrich",
    status: "Completed",
    type: "Residential",
    features: ["2&3BHK Apartments", "Premium Finishes", "Modern Design", "Security"],
    location: "Central Area",
    price: "Starting ₹65L Onwards"
  },
  {
    id: 3,
    name: "Vishal Classic",
    description: "Elegant homes designed for comfortable and sophisticated living",
    image: "/images/buildings/building3.jpg",
    slug: "vishal-classic",
    status: "Completed",
    type: "Residential",
    features: ["2&3BHK Units", "Classic Design", "Quality Construction", "Garden Area"],
    location: "Suburban Area",
    price: "Starting ₹90L Onwards"
  },
  {
    id: 4,
    name: "Vishal Pinnacle",
    description: "Luxury residential tower with panoramic views and premium amenities",
    image: "/images/buildings/building4.jpg",
    slug: "vishal-pinnacle",
    status: "Completed",
    type: "Residential",
    features: ["Luxury Units", "Panoramic Views", "Premium Amenities", "Parking"],
    location: "City Center",
    price: "Starting ₹95L"
  },
  {
    id: 5,
    name: "Vishal Elegance",
    description: "Sophisticated living spaces with elegant design and modern conveniences",
    image: "/images/buildings/building1.jpg",
    slug: "vishal-elegance",
    status: "Completed",
    type: "Residential",
    features: ["Elegant Design", "Modern Conveniences", "Quality Materials", "Vastu Compliant"],
    location: "Peaceful Area",
    price: "Starting ₹40L"
  }
];

const Projects = () => {
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [activeFilter, setActiveFilter] = useState('All');
  const [visibleProjects, setVisibleProjects] = useState(new Set());

  const filters = ['All', 'Upcoming', 'Completed', 'Residential'];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const projectId = entry.target.dataset.projectId;
            setVisibleProjects(prev => new Set([...prev, parseInt(projectId)]));
          }
        });
      },
      { threshold: 0.2 }
    );

    const projectCards = document.querySelectorAll('[data-project-id]');
    projectCards.forEach(card => observer.observe(card));

    return () => observer.disconnect();
  }, [filteredProjects]);

  const handleFilter = (filter) => {
    setActiveFilter(filter);
    if (filter === 'All') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(project => 
        project.status === filter || project.type === filter
      ));
    }
  };

  const projectStats = {
    total: projects.length,
    upcoming: projects.filter(p => p.status === 'Upcoming').length,
    completed: projects.filter(p => p.status === 'Completed').length
  };

  return (
    <div className="main-content projects-page">
      {/* Hero Section */}
      <section className="hero-section" style={{
        background: 'linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%)',
        minHeight: '60vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#ffffff',
        textAlign: 'center'
      }}>
        <div className="container">
          <h1 className="hero-title animate-fade-in">Our Projects</h1>
          <p className="hero-subtitle animate-slide-in-left">
            Discover our portfolio of luxury residential developments that showcase architectural excellence
          </p>
          
          {/* Project Stats */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: 'var(--space-8)',
            marginTop: 'var(--space-8)',
            flexWrap: 'wrap'
          }}>
            <div className="stat-badge">
              <div style={{ fontSize: 'var(--text-3xl)', fontWeight: '700', marginBottom: 'var(--space-1)' }}>
                {projectStats.total}
              </div>
              <div style={{ fontSize: 'var(--text-sm)', opacity: '0.9' }}>Total Projects</div>
            </div>
            <div className="stat-badge">
              <div style={{ fontSize: 'var(--text-3xl)', fontWeight: '700', marginBottom: 'var(--space-1)' }}>
                {projectStats.completed}
              </div>
              <div style={{ fontSize: 'var(--text-sm)', opacity: '0.9' }}>Completed</div>
            </div>
            <div className="stat-badge">
              <div style={{ fontSize: 'var(--text-3xl)', fontWeight: '700', marginBottom: 'var(--space-1)' }}>
                {projectStats.upcoming}
              </div>
              <div style={{ fontSize: 'var(--text-sm)', opacity: '0.9' }}>Upcoming</div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="section" style={{ background: 'var(--bg-secondary)', paddingTop: 'var(--space-12)', paddingBottom: 'var(--space-12)' }}>
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Browse Our Portfolio</h2>
            <p className="section-subtitle">
              Filter projects by category to find exactly what interests you
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="filter-buttons">
            {filters.map((filter) => (
              <button
                key={filter}
                className={`filter-button ${activeFilter === filter ? 'active' : ''}`}
                onClick={() => handleFilter(filter)}
              >
                {filter}
                {filter === 'All' && (
                  <span className="filter-count">{projects.length}</span>
                )}
                {filter === 'Upcoming' && (
                  <span className="filter-count">{projectStats.upcoming}</span>
                )}
                {filter === 'Completed' && (
                  <span className="filter-count">{projectStats.completed}</span>
                )}
                {filter === 'Residential' && (
                  <span className="filter-count">{projects.length}</span>
                )}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section">
        <div className="container">
          <div className="projects-grid">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                data-project-id={project.id}
                className={`project-card-wrapper ${visibleProjects.has(project.id) ? 'animate-fade-in' : ''}`}
                style={{
                  animationDelay: `${index * 0.1}s`
                }}
              >
                <ProjectCard project={project} />
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="no-projects">
              <div style={{ fontSize: 'var(--text-5xl)', marginBottom: 'var(--space-4)', opacity: '0.5' }}>
                🏗️
              </div>
              <h3 style={{ fontSize: 'var(--text-2xl)', marginBottom: 'var(--space-2)', color: 'var(--text-primary)' }}>
                No projects found
              </h3>
              <p style={{ color: 'var(--text-secondary)', margin: '0' }}>
                Try adjusting your filter to see more projects.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="section" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container text-center">
          <h2 style={{ fontSize: 'var(--text-4xl)', fontWeight: '700', marginBottom: 'var(--space-6)', color: 'var(--text-primary)' }}>
            Ready to Invest in Your Future?
          </h2>
          <p style={{ fontSize: 'var(--text-xl)', marginBottom: 'var(--space-8)', color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto var(--space-8)' }}>
            Contact our expert team to learn more about our projects and find the perfect home for your family.
          </p>
          <div className="flex justify-center gap-6">
            <button 
              className="btn btn-primary btn-lg"
              onClick={() => window.location.href = '/contact'}
            >
              Get In Touch
            </button>
            <button 
              className="btn btn-secondary btn-lg"
              onClick={() => window.location.href = '/about'}
            >
              Learn About Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
