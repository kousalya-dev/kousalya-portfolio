// File: src/components/Projects.js
import React from 'react';
import '../styles/Projects.css';

const Projects = () => {
  return (
    <section className="projects-section" id="projects">
      <h2 className="section-title">Projects</h2>
      <div className="projects-grid">
        <div className="project-card">
          <h3>Timer App</h3>
          <p>A sleek timer app built with React. Saves stop-time and date.</p>
        </div>
        <div className="project-card">
          <h3>Portfolio Website</h3>
          <p>My personal portfolio showcasing skills, resume, and contact form.</p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
