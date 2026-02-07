import React,{useEffect} from 'react';
import { Link } from 'react-router-dom';
import ProjectCard from '../components/ProjectCard';
import { projectsData } from '../data/mock';
import './Projects.css';

const Projects = () => {
   useEffect(() => {
      const reveals = document.querySelectorAll('.reveal');
  
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('active');
            }
          });
        },
        { threshold: 0.15 }
      );
  
      reveals.forEach((el) => observer.observe(el));
  
      return () => {
        reveals.forEach((el) => observer.unobserve(el));
      };
    }, []);
  return (
    <main className="projects-page">
      {/* Hero Section */}
      <section className="projects-hero reveal">
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
     {/* Portfolio Download Section */}
    <section className="section portfolio-download-section">
      <div className="container">
        <div className="portfolio-box reveal">

          <h2>Explore Our Full Capabilities</h2>

          <p>
            Discover our expertise, services, and successful project highlights in our
            complete company portfolio. Download the PDF to learn how we deliver
            scalable and innovative software solutions across industries.
          </p>

          <a
            href="/pdfs/QllmSoft-Company-Portfolio.pdf"
            className="btn btn-primary portfolio-download-btn"
            download
          >
            Download Company Portfolio ↓
          </a>

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
      {/* FAQ Section */}
    <section className="section faq-section">
  <div className="container">

    <div className="faq-header reveal">
      {/* <span className="faq-badge">Knowledge Base</span> */}
      <h2>Frequently Asked <span>Questions</span></h2>
      <p>
        Everything you need to know about our custom software development process.
      </p>
    </div>

    <div className="faq-container">

      <details className="faq-item reveal">
        <summary>What software development services does QllmSoft provide?</summary>
        <p>
          QllmSoft provides end-to-end custom software development services,
          including web application development, enterprise software solutions,
          mobile app development, automation systems, and internal business tools.
          Every solution is designed based on your business processes and goals.
        </p>
      </details>

      <details className="faq-item reveal">
        <summary>Do you build custom software or use ready-made platforms?</summary>
        <p>
          We specialize in custom software development. Instead of using generic
          off-the-shelf platforms, we build software tailored to your workflows,
          industry requirements, and scalability needs.
        </p>
      </details>

      <details className="faq-item reveal">
        <summary>Which industries does QllmSoft work with?</summary>
        <p>
          We work across finance, healthcare, manufacturing, logistics, HR,
          legal, education, and professional services — designing secure,
          scalable, and compliant solutions.
        </p>
      </details>

      <details className="faq-item reveal">
        <summary>Can startups hire QllmSoft for software development?</summary>
        <p>
          Yes. We work with startups, SMEs, and enterprises. For startups we
          validate ideas and build MVPs, while established companies benefit
          from automation and modernization.
        </p>
      </details>

      <details className="faq-item reveal">
        <summary>How long does a custom software project take?</summary>
        <p>
          Timelines depend on complexity and integrations. Smaller projects may
          take weeks, while enterprise systems may take months. We provide a
          clear roadmap after requirement analysis.
        </p>
      </details>

      <details className="faq-item reveal">
        <summary>How much does custom software development cost?</summary>
        <p>
          Cost varies based on scope and technical requirements. We provide
          transparent customized quotes so you pay only for what your business
          needs.
        </p>
      </details>

      <details className="faq-item reveal">
        <summary>Will I be involved during development?</summary>
        <p>
          Absolutely. We maintain collaboration throughout the lifecycle with
          updates, demos, and reviews to ensure alignment with expectations.
        </p>
      </details>

      <details className="faq-item reveal">
        <summary>Is my data secure when working with QllmSoft?</summary>
        <p>
          Yes. We follow industry best practices in encryption, access control,
          and secure architecture to protect your business data and IP.
        </p>
      </details>

      <details className="faq-item reveal">
        <summary>Do you provide support after delivery?</summary>
        <p>
          We offer maintenance, optimization, monitoring, and enhancements to
          ensure long-term success and partnership.
        </p>
      </details>

      <details className="faq-item reveal">
        <summary>Why choose QllmSoft over other companies?</summary>
        <p>
          We focus on business outcomes, not just code — understanding your
          processes and building software that improves efficiency and growth.
        </p>
      </details>

      <details className="faq-item reveal">
        <summary>How can I start a project with QllmSoft?</summary>
        <p>
          Contact us for a free consultation. We’ll discuss your idea, recommend
          the best technical approach, and guide you through next steps.
        </p>
      </details>

    </div>
  </div>
</section>
    </main>
  );
};

export default Projects;
