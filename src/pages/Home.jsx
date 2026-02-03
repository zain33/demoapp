import React from 'react';
import { Link } from 'react-router-dom';
import HeroSlider from '../components/HeroSlider';
import ServiceCard from '../components/ServiceCard';
import { homeServices, aboutContent, trustedPartners } from '../data/mock';
import './Home.css';

const Home = () => {
  return (
    <main className="home-page">
      {/* Hero Slider */}
      <HeroSlider />

      {/* Services Section */}
      <section className="section services-section">
        <div className="container">
          <div className="section-title">
            <h2>Software Development Services</h2>
            <p>We provide comprehensive software solutions tailored to your business needs</p>
          </div>
          <div className="services-grid">
            {homeServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section about-section bg-light">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2 className="about-title">About QllmSoft</h2>
              <p className="about-description">
                At QllmSoft, we build custom web, mobile (Android & iOS), and desktop applications 
                that are designed around your unique business goals. Whether you're running a startup 
                or managing a growing enterprise, our team combines creative design and advanced 
                technology to develop secure, user-friendly, and high-performing software solutions 
                that helps you grow faster and work smarter.
              </p>
              <Link to="/about" className="btn btn-primary">Learn More About Us</Link>
            </div>
            <div className="about-image">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80" 
                alt="Team collaboration" 
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <span className="stat-number">10+</span>
              <span className="stat-label">Years Experience</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">150+</span>
              <span className="stat-label">Projects Completed</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">50+</span>
              <span className="stat-label">Happy Clients</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">24/7</span>
              <span className="stat-label">Support Available</span>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="section partners-section bg-light">
        <div className="container">
          <div className="section-title">
            <h2>Trusted By Our Clients</h2>
            <p>We have successfully collaborated with leading platforms</p>
          </div>
          <div className="partners-grid">
            {trustedPartners.map((partner, index) => (
              <div key={index} className="partner-logo">
                <img src={partner.logo} alt={partner.name} loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Start Your Project?</h2>
            <p>Let's discuss how we can help transform your business with custom software solutions</p>
            <Link to="/contact" className="btn btn-primary">Get Free Quote</Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
