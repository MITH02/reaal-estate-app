// src/pages/AboutUs.jsx
import React from "react";
import "./AboutUs.css"; // Import the CSS for styling

const AboutUs = () => {
  return (
    <div className="main-content about-us-container">
      <section className="about-us-header">
        <h1>About Us</h1>
        <p>
          We are a leading real estate builder, committed to providing quality 
          homes that offer both comfort and value. With years of experience, 
          we aim to create spaces that bring families closer together.
        </p>
      </section>

      {/* Meet Our Founder Section */}
      <section className="founder-section">
        <div className="founder-image">
          <img src="public/images/Founder.jpg" alt="Founder" />
        </div>
        <div className="founder-description">
          <h2>Meet Our Founder</h2>
          <p>
            Our founder, [Your Name], has been in the real estate industry for over a decade. 
            With a vision to build homes that not only meet the needs of the people but also
            enrich their lifestyles, our founder believes in creating sustainable and beautiful 
            living spaces.
          </p>
        </div>
      </section>

      {/* Our Projects Section */}
      <section className="projects-section">
        <h2>Our Projects</h2>
        <div className="project-images">
          <img src="/path/to/building1.jpg" alt="Project 1" />
          <img src="/path/to/building2.jpg" alt="Project 2" />
          <img src="/path/to/building3.jpg" alt="Project 3" />
        </div>
      </section>
    </div>
  );
};

export default AboutUs;