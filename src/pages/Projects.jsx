import React from 'react';
import { Link } from 'react-router-dom';
import ProjectCard from '../components/ProjectCard';
import { projectsData } from '../data/mock';
import './Projects.css';

const Projects = () => {
  return (
    <main className="projects-page">
      {/* Hero Section */}
      <section className="projects-hero">
        <div className="container">
          <h1>Our Projects</h1>
          <p>
            Explore our portfolio of successful projects that showcase our expertise 
            in delivering innovative software solutions across various industries.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section projects-grid-section">
        <div className="container">
          <div className="section-title">
            <h2>Featured Work</h2>
            <p>A selection of our recent projects and success stories</p>
          </div>
          <div className="projects-grid">
            {projectsData.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="section industries-section bg-light">
        <div className="container">
          <div className="section-title">
            <h2>Industries We Serve</h2>
            <p>Delivering specialized solutions across multiple sectors</p>
          </div>
          <div className="industries-grid">
            <div className="industry-card">
              <div className="industry-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
              </div>
              <h3>Finance & Banking</h3>
              <p>Secure financial platforms, payment gateways, and banking solutions</p>
            </div>
            <div className="industry-card">
              <div className="industry-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
              </div>
              <h3>Healthcare</h3>
              <p>HIPAA-compliant healthcare apps, patient management systems</p>
            </div>
            <div className="industry-card">
              <div className="industry-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>
              </div>
              <h3>Education</h3>
              <p>E-learning platforms, student management, and educational tools</p>
            </div>
            <div className="industry-card">
              <div className="industry-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
              </div>
              <h3>E-Commerce</h3>
              <p>Custom online stores, inventory management, and payment integration</p>
            </div>
            <div className="industry-card">
              <div className="industry-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>
              </div>
              <h3>Logistics</h3>
              <p>Supply chain management, tracking systems, and warehouse automation</p>
            </div>
            <div className="industry-card">
              <div className="industry-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
              </div>
              <h3>Real Estate</h3>
              <p>Property management systems, listing platforms, and CRM solutions</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Have a Project in Mind?</h2>
            <p>Let's discuss how we can help bring your ideas to life</p>
            <Link to="/contact" className="btn btn-primary">Start Your Project</Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Projects;
