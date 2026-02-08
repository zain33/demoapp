import React from 'react';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import HeroSlider from '../components/HeroSlider';
import ServiceCard from '../components/ServiceCard';
import { homeServices, aboutContent, trustedPartners } from '../data/mock';
import ProjectSections from '../components/ProjectSections';
import SkillsSection from '../components/SkillsSection';
import StatsSection from '../components/StatsSection';
import TechnologiesSlider from '../components/TechnologiesSlider';
import TestimonialSection from '../components/TestimonialSection';
import './Home.css';
import 'animate.css';

const Home = () => {

  // Observer ONLY for Services section
  const { ref: servicesRef, inView: servicesInView } = useInView({
    triggerOnce: true,
    threshold: 0.2
  });
  const { ref: aboutRef, inView: aboutInView } = useInView({
  triggerOnce: true,
  threshold: 0.2,
});
  return (
    <main className="home-page">
      {/* Hero Slider */}
      <HeroSlider />
     
    {/* About Section */}
     <section className="section about-section bg-light" ref={aboutRef}>
    <div className="container">
      <div className="about-content">
        <div
          className={`about-image animate__animated ${
            aboutInView ? 'animate__fadeInLeft' : ''
          }`}
          style={{
            animationDuration: '0.8s',
            animationTimingFunction: 'ease-out',
          }}
        >
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80"
            alt="Team collaboration"
            loading="lazy"
          />
        </div>

        <div
          className={`about-text animate__animated ${
            aboutInView ? 'animate__fadeInRight' : ''
          }`}
          style={{
            animationDuration: '0.8s',
            animationTimingFunction: 'ease-out',
          }}
        >
          <h2 className="about-title">About QllmSoft</h2>
          <p className="about-description">
            At QllmSoft, we build custom web, mobile (Android & iOS), and desktop applications 
            that are designed around your unique business goals. Whether you're running a startup 
            or managing a growing enterprise, our team combines creative design and advanced 
            technology to develop secure, user-friendly, and high-performing software solutions 
            that helps you grow faster and work smarter.
          </p>
          <Link to="/about" className="btn btn-primary">
            Learn More About Us
          </Link>
        </div>
      </div>
    </div>
  </section>
     
    
      {/* Services Section */}
      <section
        className="section services-section"
        ref={servicesRef}
      >
        <div className="container">
          <div className="section-title">
            <h2>Software Development Services</h2>
            <p>
              We provide comprehensive software solutions tailored to your business needs
            </p>
          </div>

          <div className="services-grid">
            {homeServices.map((service, index) => {
              const animationClass =
                index < 2
                  ? 'animate__fadeInLeft'
                  : 'animate__fadeInRight';

              return (
                <div
                  key={service.id}
                  className={`animate__animated ${
                    servicesInView ? animationClass : ''
                  }`}
                  style={{
                    animationDuration: '0.6s',
                    animationTimingFunction: 'ease-out'
                  }}
                >
                  <ServiceCard service={service} />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <StatsSection />
     
     {/* Projects Section */}
      <ProjectSections />
     
     <TestimonialSection />
     
     <TechnologiesSlider />

      

      

      {/* Skills Section */}
      {/* <SkillsSection /> */}
      
      

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
                <img
                  src={partner.logo}
                  alt={partner.name}
                  loading="lazy"
                />
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
            <p>
              Let's discuss how we can help transform your business with custom software solutions
            </p>
            <Link to="/contact" className="btn btn-primary">
              Get Free Quote
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
