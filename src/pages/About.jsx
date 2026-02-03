import React from 'react';
import { Link } from 'react-router-dom';
import { Eye, Target, Users, Zap, Shield, Check, Headphones } from 'lucide-react';
import { aboutContent, trustedPartners } from '../data/mock';
import './About.css';

const FeatureCard = ({ icon: Icon, title, description }) => (
  <div className="feature-card">
    <div className="feature-icon">
      <Icon size={28} />
    </div>
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
);

const PartnerLogo = ({ name, logo }) => (
  <div className="partner-logo">
    <img src={logo} alt={name} loading="lazy" />
  </div>
);

const About = () => {
  const serviceIcons = [Users, Zap, Shield, Users, Check, Headphones];

  return (
    <main className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <h1>{aboutContent.heroTitle}</h1>
          <p>{aboutContent.heroSubtitle}</p>
          <a href="#about-intro" className="btn btn-primary">Discover More</a>
        </div>
      </section>

      {/* About Intro Section */}
      <section id="about-intro" className="section about-intro">
        <div className="container">
          <div className="about-intro-content">
            <div className="about-intro-text">
              <h2>About QllmSoft – Web Development, Mobile Apps, and Custom Software Excellence</h2>
              <p>
                QllmSoft is a trusted technology partner, delivering advanced <strong>web development</strong>, 
                <strong> mobile app creation</strong>, and <strong>custom enterprise-level software solutions</strong> designed 
                to boost efficiency and accelerate growth. Established in <strong>2015</strong>, our mission has been clear, 
                to help businesses adapt, compete, and excel in today's rapidly evolving digital world.
              </p>
              <p>
                Based in <strong>Lalamusa, Gujrat, Pakistan</strong>, our team of skilled <strong>ASP.NET experts</strong> and 
                <strong> full-stack developers</strong> works tirelessly to craft scalable, secure, and innovative IT solutions. 
                We proudly serve businesses across Pakistan and around the globe, ensuring every project we deliver is 
                tailored to meet unique objectives and drive measurable success.
              </p>
              <p>
                Our approach centers on <strong>long-term partnerships</strong>, collaborating closely with clients to develop 
                strategies and solutions that align perfectly with their vision, goals, and market demands.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Sets Us Apart */}
      <section className="section what-sets-apart bg-light">
        <div className="container">
          <div className="section-title">
            <h2>What Sets QllmSoft Apart?</h2>
          </div>
          <div className="apart-content">
            <p>
              At QllmSoft, we go beyond software development, we create enduring partnerships built on trust, 
              creativity, and measurable outcomes. We start by thoroughly understanding your business's unique 
              challenges, objectives, and future aspirations. This thorough understanding allows us to create 
              personalized software solutions, flexible web platforms, and adaptive mobile apps that meet your 
              present requirements and scale seamlessly as your business evolves.
            </p>
            <p>
              By leveraging powerful development frameworks like <strong>ASP.NET</strong> and the latest in web and 
              mobile technologies, we have helped clients in Lalamusa, Gujrat, and across the globe turn complex 
              ideas into high-performance, results-driven digital solutions. Whether it's a scalable web application, 
              a robust mobile app, or an enterprise-grade software system, our team is committed to delivering 
              solutions that make a real impact.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section services-features">
        <div className="container">
          <div className="section-title">
            <h2>Our Professional Services</h2>
          </div>
          <div className="features-grid">
            <FeatureCard 
              icon={Users}
              title="Tailored Web & App Development Solutions"
              description="Every business is unique. We offer custom web, mobile, and software solutions designed to align with your goals."
            />
            <FeatureCard 
              icon={Zap}
              title="Global Experience with Local Expertise"
              description="Proudly based in Lalamusa, Gujrat, Pakistan, we blend international standards with local market insights."
            />
            <FeatureCard 
              icon={Shield}
              title="Expert Web and Mobile Development Team"
              description="Our ASP.NET specialists and full-stack developers use cutting-edge tools to create secure, scalable applications."
            />
            <FeatureCard 
              icon={Users}
              title="Personalized Attention with an Agile Team"
              description="As a small, agile team, we provide direct communication, faster turnaround, and highly personalized service."
            />
            <FeatureCard 
              icon={Check}
              title="Reliable and Efficient Solutions"
              description="We are problem-solvers at heart — focused on delivering solutions that last for your business needs."
            />
            <FeatureCard 
              icon={Headphones}
              title="Continuous Support & Maintenance"
              description="We provide ongoing support and maintenance services to ensure your software stays up-to-date and secure."
            />
          </div>
          <div className="text-center mt-4">
            <Link to="/contact" className="btn btn-secondary">Explore Our Services</Link>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section vision-mission bg-light">
        <div className="container">
          <div className="section-title">
            <h2>Our Vision & Mission</h2>
            <p>
              At QllmSoft, we are not just a technology provider — we are your partner in innovation. 
              Guided by creativity, integrity, and a passion for excellence.
            </p>
          </div>
          <div className="vm-grid">
            <div className="vm-card">
              <div className="vm-image">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80" 
                  alt="Our Vision" 
                  loading="lazy"
                />
              </div>
              <div className="vm-content">
                <div className="vm-icon">
                  <Eye size={32} />
                </div>
                <h3>Our Vision</h3>
                <p>{aboutContent.vision}</p>
              </div>
            </div>
            <div className="vm-card">
              <div className="vm-image">
                <img 
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80" 
                  alt="Our Mission" 
                  loading="lazy"
                />
              </div>
              <div className="vm-content">
                <div className="vm-icon">
                  <Target size={32} />
                </div>
                <h3>Our Mission</h3>
                <p>{aboutContent.mission}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="section partners-section">
        <div className="container">
          <div className="section-title">
            <h2>Trusted By Our Partners</h2>
          </div>
          <div className="partners-grid">
            <PartnerLogo name="Freelancer" logo="https://cdn.worldvectorlogo.com/logos/freelancer-1.svg" />
            <PartnerLogo name="Upwork" logo="https://upload.wikimedia.org/wikipedia/commons/d/d2/Upwork-logo.svg" />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Let's Build Something Amazing Together</h2>
            <p>Ready to transform your business with custom software solutions?</p>
            <Link to="/contact" className="btn btn-primary">Contact Us Today</Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
