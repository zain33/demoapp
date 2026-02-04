import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Eye, Target, Users, Zap, Shield, Check, Headphones } from 'lucide-react';
import { aboutContent } from '../data/mock';
import './About.css';

const FeatureCard = ({ icon: Icon, title, description, delay }) => (
  <div className={`feature-card reveal ${delay}`}>
    <div className="feature-icon">
      <Icon size={28} />
    </div>
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
);

const PartnerLogo = ({ name, logo }) => (
  <div className="partner-logo reveal">
    <img src={logo} alt={name} loading="lazy" />
  </div>
);

const About = () => {

  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal');

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.15 }
    );

    reveals.forEach(el => observer.observe(el));
  }, []);

  return (
    <main className="about-page">

      {/* Hero Section */}
      <section className="about-hero reveal">
        <div className="container">
          <h1 style={{ color: 'white' }} >{aboutContent.heroTitle}</h1>
          <p style={{ color: 'white' }}>{aboutContent.heroSubtitle}</p>
          <a href="#about-intro" className="btn btn-primary">Discover More</a>
        </div>
      </section>

      {/* About Intro */}
      <section id="about-intro" className="section about-intro reveal">
        <div className="container">
          <div className="about-intro-content">
            <div className="about-intro-text">
              <h2>About QllmSoft – Web Development, Mobile Apps, and Custom Software Excellence</h2>

              <p>
                QllmSoft is a trusted technology partner, delivering advanced <strong>web development</strong>,
                <strong> mobile app creation</strong>, and <strong>custom enterprise-level software solutions</strong> designed
                to boost efficiency and accelerate growth.
              </p>

              <p>
                Based in <strong>Lalamusa, Gujrat, Pakistan</strong>, our team of skilled <strong>ASP.NET experts</strong> and
                <strong> full-stack developers</strong> delivers scalable and secure IT solutions globally.
              </p>

              <p>
                Our approach centers on <strong>long-term partnerships</strong>, building solutions aligned with business vision.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Sets Us Apart */}
      <section className="section what-sets-apart reveal">
        <div className="container">
          <div className="section-title">
            <h2>What Sets QllmSoft Apart?</h2>
          </div>
          <div className="apart-content">
            <p>
              At QllmSoft, we create enduring partnerships built on trust, creativity, and measurable outcomes.
            </p>
            <p>
              Using modern frameworks like <strong>ASP.NET</strong>, we deliver scalable web and mobile solutions worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section services-features reveal">
        <div className="container">
          <div className="section-title">
            <h2>Our Professional Services</h2>
          </div>

          <div className="features-grid">
            <FeatureCard icon={Users} delay="delay-1"
              title="Tailored Web & App Development Solutions"
              description="Custom software solutions aligned with your business goals."
            />
            <FeatureCard icon={Zap} delay="delay-2"
              title="Global Experience with Local Expertise"
              description="International standards blended with local market insights."
            />
            <FeatureCard icon={Shield} delay="delay-3"
              title="Expert Web and Mobile Development Team"
              description="Secure, scalable and modern applications."
            />
            <FeatureCard icon={Users} delay="delay-1"
              title="Personalized Attention with an Agile Team"
              description="Direct communication and faster delivery."
            />
            <FeatureCard icon={Check} delay="delay-2"
              title="Reliable and Efficient Solutions"
              description="Problem-solving focused approach."
            />
            <FeatureCard icon={Headphones} delay="delay-3"
              title="Continuous Support & Maintenance"
              description="Long-term support and system updates."
            />
          </div>

          <div className="text-center mt-4">
            <Link to="/services" className="btn btn-secondary">Explore Our Services</Link>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section vision-mission reveal">
        <div className="container">
          <div className="section-title">
            <h2>Our Vision & Mission</h2>
          </div>

          <div className="vm-stack">

            {/* Vision */}
            <div className="vm-row">
              <div className="vm-image">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80"
                  alt="Our Vision"
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

            {/* Mission */}
            <div className="vm-row reverse">
              <div className="vm-content">
                <div className="vm-icon">
                  <Target size={32} />
                </div>
                <h3>Our Mission</h3>
                <p>{aboutContent.mission}</p>
              </div>

              <div className="vm-image">
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80"
                  alt="Our Mission"
                />
              </div>
            </div>

          </div>
        </div>
      </section>
      {/* Partners */}
      <section className="section partners-section reveal">
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
      <section className="section cta-section reveal">
        <div className="container">
          <div className="cta-content">
            <h2>Let's Build Something Amazing Together</h2>
            <p>Ready to transform your business with custom software?</p>
            <Link to="/contact" className="btn btn-primary">Contact Us Today</Link>
          </div>
        </div>
      </section>

    </main>
  );
};

export default About;
