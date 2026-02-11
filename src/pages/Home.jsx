import React from 'react';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';

import HeroSlider from '../components/HeroSlider';
import ServiceCard from '../components/ServiceCard';
import { homeServices, trustedPartners } from '../data/mock';

import ProjectSections from '../components/ProjectSections';
import TechnologiesSlider from '../components/TechnologiesSlider';
import TestimonialSection from '../components/TestimonialSection';
import StatsSection from '../components/StatsSection';

import {
  ShieldCheck,
  MessageCircle,
  Rocket,
  Layers
} from 'lucide-react';

import './Home.css';
import 'animate.css';

const Home = () => {

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

      {/* Hero */}
      <HeroSlider />

      {/* About */}
      <section className="section about-section bg-light" ref={aboutRef}>
        <div className="container">
          <div className="about-content">

            <div className={`about-image animate__animated ${aboutInView ? 'animate__fadeInLeft' : ''}`}>
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80"
                alt="Team collaboration"
                loading="lazy"
              />
            </div>

            <div className={`about-text animate__animated ${aboutInView ? 'animate__fadeInRight' : ''}`}>
              <h2 className="about-title">About QllmSoft</h2>

              <p>
                We design scalable web, mobile, and enterprise software that helps businesses grow faster.
                Our solutions combine modern architecture, performance optimization,
                and user-centric design.
              </p>

              <Link to="/about" className="btn btn-primary">
                Learn More About Us
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section services-section" ref={servicesRef}>
        <div className="container">

          <div className="section-title">
            <h2>Software Development Services</h2>
            <p>Solutions tailored to your business needs</p>
          </div>

          <div className="services-grid">
            {homeServices.map((service, index) => {

              const animation =
                index < 2
                  ? 'animate__fadeInLeft'
                  : 'animate__fadeInRight';

              return (
                <div
                  key={service.id}
                  className={`animate__animated ${servicesInView ? animation : ''}`}
                >
                  <ServiceCard service={service} />
                </div>
              );
            })}
          </div>

        </div>
      </section>

   
      {/* Why Choose Us ⭐ NEW */}
      <section className="section why-section">
        <div className="container">

          <div className="section-title">
            <h2>Why Choose QllmSoft</h2>
          </div>

          <div className="why-grid">

            <div className="why-card">
              <h4>Business-Focused Solutions</h4>
              <p>Technology aligned with measurable outcomes.</p>
            </div>

            <div className="why-card">
              <h4>Scalable Architecture</h4>
              <p>Systems designed to grow with your company.</p>
            </div>

            <div className="why-card">
              <h4>Transparent Communication</h4>
              <p>Direct collaboration and progress visibility.</p>
            </div>

            <div className="why-card">
              <h4>Long-Term Partnership</h4>
              <p>Support beyond deployment and launch.</p>
            </div>

          </div>

        </div>
      </section>

      {/* Optional Stats — Enable if ready */}
      <StatsSection />

      {/* Projects */}
      <section className="section projects-section">
        <ProjectSections />
      </section>

      {/* Testimonials */}
      <section className="section testimonial-section">
        <TestimonialSection />
      </section>

      {/* Technologies */}
      <section className="section tech-section">
        <TechnologiesSlider />
      </section>

      {/* Trusted Partners */}
      <section className="section partners-section">
        <div className="container">

          <div className="section-title">
            <h2>Trusted By Our Clients</h2>
          </div>

          <div className="partners-grid">
            {trustedPartners.map((partner, index) => (
              <div key={index} className="partner-logo">
                <img src={partner.logo} alt={partner.name} />
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CTA ⭐ Improved */}
      <section className="section cta-section">
        <div className="container">

          <div className="cta-content">

            <h2>Ready to Start Your Project?</h2>

            <p>
              Get expert consultation and project roadmap within 24 hours.
            </p>

            <div className="cta-buttons">

              <Link to="/contact" className="btn btn-primary">
                Get Free Quote
              </Link>
           
            </div>

          </div>

        </div>
      </section>

    </main>
  );
};

export default Home;
