import React from 'react';
import './Portfolio.css';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import boxRoosterImg from './rooster.png';

const Portfolio: React.FC = () => {
  const projects = [
    {
      title: "BoxRooster",
      category: "Web Application",
      description: "A comprehensive boxing training platform featuring workout generation, timer functionality, and progress tracking. Built with modern web technologies for optimal performance.",
      image: boxRoosterImg,
      technologies: ["React", "TypeScript", "CSS3", "Responsive Design"],
      features: [
        "Custom workout generator with configurable rounds and rest periods",
        "Interactive timer with audio cues and visual feedback",
        "Progress tracking and workout history",
        "Mobile-first responsive design",
        "Modern UI with smooth animations"
      ],
      link: "https://www.boxrooster.com",
      github: "https://github.com/yourusername/boxrooster",
      color: "#6EACDA"
    },
    {
      title: "Personal Portfolio",
      category: "Portfolio Website",
      description: "A modern, dual-mode portfolio website showcasing both personal work and business services. Features seamless mode switching and consistent design language.",
      image: null,
      technologies: ["React", "TypeScript", "React Router", "Context API"],
      features: [
        "Dual-mode architecture (Personal/Business)",
        "Persistent state management with localStorage",
        "Responsive design across all devices",
        "Modern glass-morphism UI effects",
        "Smooth animations and transitions"
      ],
      link: null,
      github: null,
      color: "#03C988"
    }
  ];

  const capabilities = [
    {
      title: "Full-Stack Development",
      items: ["React & TypeScript", "Node.js & Express", "REST APIs", "Database Design"]
    },
    {
      title: "Frontend Excellence",
      items: ["Responsive Design", "Modern CSS/Animations", "Performance Optimization", "Accessibility"]
    },
    {
      title: "User Experience",
      items: ["Intuitive Interfaces", "Smooth Interactions", "Mobile-First", "Cross-Browser"]
    },
    {
      title: "Best Practices",
      items: ["Clean Code", "Git Version Control", "Testing", "Documentation"]
    }
  ];

  return (
    <div className="portfolio-page">
      {/* Hero Section */}
      <section className="portfolio-hero">
        <div className="hero-content">
          <h1 className="shimmer-title">Portfolio</h1>
          <p className="hero-subtitle">
            Real projects, real results. See what I can build for you.
          </p>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="projects-section">
        <div className="projects-container">
          <h2 className="section-title">Featured Work</h2>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div className="project-card" key={index}>
                {project.image && (
                  <div className="project-image">
                    <img src={project.image} alt={project.title} />
                    <div className="project-overlay">
                      <div className="overlay-content">
                        {project.link && (
                          <a href={project.link} target="_blank" rel="noopener noreferrer" className="overlay-link">
                            <FaExternalLinkAlt /> View Live
                          </a>
                        )}
                        {project.github && (
                          <a href={project.github} target="_blank" rel="noopener noreferrer" className="overlay-link">
                            <FaGithub /> GitHub
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                )}
                <div className="project-content">
                  <span className="project-category" style={{ color: project.color }}>
                    {project.category}
                  </span>
                  <h3>{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  
                  <div className="project-tech">
                    <h4>Technologies:</h4>
                    <div className="tech-tags">
                      {project.technologies.map((tech, idx) => (
                        <span className="tech-tag" key={idx}>{tech}</span>
                      ))}
                    </div>
                  </div>

                  <div className="project-features">
                    <h4>Key Features:</h4>
                    <ul>
                      {project.features.map((feature, idx) => (
                        <li key={idx}>
                          <span className="feature-bullet">→</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="project-links">
                    {project.link && (
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                        <FaExternalLinkAlt /> Visit Site
                      </a>
                    )}
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                        <FaGithub /> View Code
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="capabilities-section">
        <div className="capabilities-container">
          <h2 className="section-title">What I Bring to Your Project</h2>
          <div className="capabilities-grid">
            {capabilities.map((capability, index) => (
              <div className="capability-card" key={index}>
                <h3>{capability.title}</h3>
                <ul>
                  {capability.items.map((item, idx) => (
                    <li key={idx}>
                      <span className="check-icon">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="stats-container">
          <div className="stat-card">
            <div className="stat-number">100%</div>
            <div className="stat-label">Client Satisfaction</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">5+</div>
            <div className="stat-label">Years Experience</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">∞</div>
            <div className="stat-label">Cups of Coffee</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">24/7</div>
            <div className="stat-label">Support Available</div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="portfolio-cta">
        <div className="cta-content">
          <h2>Ready to Build Something Amazing?</h2>
          <p>Let's create a website that stands out and delivers results</p>
          <div className="cta-buttons">
            <a href="/contact" className="cta-button primary">Start Your Project</a>
            <a href="/services" className="cta-button secondary">View Services</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
