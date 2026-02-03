import React from 'react';
import ServiceCard from '../components/ServiceCard';
import { Link } from 'react-router-dom';
import { servicesData } from '../data/mock';
import './Services.css';

const Services = () => {
  return (
    <main className="services-page">
      {/* Hero Section */}
      <section className="services-hero">
        <div className="container">
          <h1>Our Services</h1>
          <p>
            We provide comprehensive software development services tailored to meet 
            your unique business needs and drive digital transformation.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="section services-list">
        <div className="container">
          <div className="section-title">
            <h2>What We Offer</h2>
            <p>Expert solutions across web, mobile, and enterprise software development</p>
          </div>
          <div className="services-detailed-grid">
            {servicesData.map((service) => (
              <ServiceCard key={service.id} service={service} variant="detailed" />
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="section technologies-section bg-light">
        <div className="container">
          <div className="section-title">
            <h2>Technologies We Use</h2>
            <p>We leverage the latest technologies to build robust solutions</p>
          </div>
          <div className="tech-grid">
            <div className="tech-category">
              <h3>Frontend</h3>
              <ul>
                <li>React.js</li>
                <li>Angular</li>
                <li>Vue.js</li>
                <li>HTML5 / CSS3</li>
                <li>TypeScript</li>
              </ul>
            </div>
            <div className="tech-category">
              <h3>Backend</h3>
              <ul>
                <li>ASP.NET Core</li>
                <li>Node.js</li>
                <li>Python</li>
                <li>PHP / Laravel</li>
                <li>Java</li>
              </ul>
            </div>
            <div className="tech-category">
              <h3>Mobile</h3>
              <ul>
                <li>Flutter</li>
                <li>React Native</li>
                <li>Swift (iOS)</li>
                <li>Kotlin (Android)</li>
                <li>Xamarin</li>
              </ul>
            </div>
            <div className="tech-category">
              <h3>Database & Cloud</h3>
              <ul>
                <li>SQL Server</li>
                <li>MongoDB</li>
                <li>PostgreSQL</li>
                <li>AWS / Azure</li>
                <li>Google Cloud</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section process-section">
        <div className="container">
          <div className="section-title">
            <h2>Our Development Process</h2>
            <p>A proven methodology that ensures project success</p>
          </div>
          <div className="process-grid">
            <div className="process-step">
              <div className="process-number">01</div>
              <h3>Discovery</h3>
              <p>We analyze your requirements, goals, and challenges to define the project scope.</p>
            </div>
            <div className="process-step">
              <div className="process-number">02</div>
              <h3>Planning</h3>
              <p>Creating detailed project roadmap, architecture design, and timeline.</p>
            </div>
            <div className="process-step">
              <div className="process-number">03</div>
              <h3>Development</h3>
              <p>Agile development with regular iterations and client feedback integration.</p>
            </div>
            <div className="process-step">
              <div className="process-number">04</div>
              <h3>Testing</h3>
              <p>Comprehensive testing to ensure quality, security, and performance.</p>
            </div>
            <div className="process-step">
              <div className="process-number">05</div>
              <h3>Deployment</h3>
              <p>Smooth deployment and launch with zero downtime strategy.</p>
            </div>
            <div className="process-step">
              <div className="process-number">06</div>
              <h3>Support</h3>
              <p>Ongoing maintenance, updates, and 24/7 technical support.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Start Your Project?</h2>
            <p>Let's discuss how we can help transform your business ideas into reality</p>
            <Link to="/contact" className="btn btn-primary">Get Free Consultation</Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Services;
