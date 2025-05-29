import React from "react";
import ProjectCard from "../components/ProjectCard";

const projects = [
  {
    id: 1,
    name: "Vishal Enrich",
    image: "/images/buildings/building1.png",
    slug: "vishal-enrich"
  },
  {
    id: 2,
    name: "Vishal Classic",
    image: "/images/buildings/building2.jpg",
    slug: "vishal-classic"
  },
  {
    id: 3,
    name: "Vishal Pinnacle",
    image: "/images/buildings/building3.png",
    slug: "vishal-pinnacle"
  },
  {
    id: 4,
    name: "Vishal Elegance",
    image: "/images/buildings/building4.jpg",
    slug: "vishal-elegance"
  }
];

const Projects = () => {
  return (
    <div style={{
      background: "#0a1929",
      minHeight: "100vh",
      padding: "40px 0"
    }}>
      <h1 style={{ color: "#fff", textAlign: "center", marginBottom: 40 }}>All Projects</h1>
      <div style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center"
      }}>
        {projects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
