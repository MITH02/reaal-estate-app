import React from "react";
import { useNavigate } from "react-router-dom";

export default function ProjectCard({ project }) {
  const navigate = useNavigate();

  return (
    <div style={{
      background: "#11202e",
      borderRadius: 16,
      padding: 24,
      margin: 24,
      width: 350,
      color: "#fff",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start"
    }}>
      <img src={project.image} alt={project.name} style={{ width: "100%", borderRadius: 12, objectFit: "cover", height: "350px" }} />
      <h2 style={{ margin: "16px 0 8px 0" }}>{project.name}</h2>
      <button
        onClick={() => navigate(`/projects/${project.slug}`)}
        style={{
          background: "none",
          color: "#00bcd4",
          border: "none",
          fontWeight: "bold",
          fontSize: 18,
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          padding: 0
        }}
      >
        VIEW PROJECT <span style={{ marginLeft: 8, fontSize: 22 }}>→</span>
      </button>
    </div>
  );
} 