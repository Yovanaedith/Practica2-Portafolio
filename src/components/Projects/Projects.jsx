import React from 'react';
import { projectsData } from '../../data/projectsData';

const ProjectCard = ({ project }) => (
  <div className="project-card">
    <h3>{project.title}</h3>
    <p>{project.description}</p>
    <div className="project-techs">
      {project.techs.map((tech) => (
        <span key={tech} className="tech-tag">{tech}</span>
      ))}
    </div>
    <div className="project-links">
      <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="link-demo">
        Ver Demo
      </a>
      <a href={project.repoLink} target="_blank" rel="noopener noreferrer" className="link-repo">
        Código Fuente
      </a>
    </div>
  </div>
);

const Projects = () => {
  return (
    <section className="projects-section">
      <h2>Proyectos Destacados 🛠️</h2>
      <div className="projects-grid">
        {projectsData.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;