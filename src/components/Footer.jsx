import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Linkedin, Facebook, Instagram, ArrowRight } from 'lucide-react';
import { companyInfo, navigationLinks } from '../data/mock';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="container">
          <div className="footer-grid">
            {/* Company Info */}
            <div className="footer-section">
              <Link to="/" className="footer-logo">
                <span className="logo-q">Q</span>
                <span className="logo-text">llmSoft</span>
              </Link>
              <p className="footer-description">
                QllmSoft expert software development services empowering startups, businesses, 
                and eCommerce brands to transform their digital ideas into powerful, results-driven websites.
              </p>
              <div className="footer-social">
                <a href={companyInfo.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <Linkedin size={18} />
                </a>
                <a href={companyInfo.socialLinks.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <Facebook size={18} />
                </a>
                <a href={companyInfo.socialLinks.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <Instagram size={18} />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="footer-section">
              <h4 className="footer-title">Quick Links</h4>
              <ul className="footer-links">
                {navigationLinks.map((link) => (
                  <li key={link.path}>
                    <Link to={link.path}>
                      <ArrowRight size={14} />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className="footer-section">
              <h4 className="footer-title">Our Services</h4>
              <ul className="footer-links">
                <li>
                  <Link to="/services">
                    <ArrowRight size={14} />
                    Web Development
                  </Link>
                </li>
                <li>
                  <Link to="/services">
                    <ArrowRight size={14} />
                    Mobile App Development
                  </Link>
                </li>
                <li>
                  <Link to="/services">
                    <ArrowRight size={14} />
                    Desktop Applications
                  </Link>
                </li>
                <li>
                  <Link to="/services">
                    <ArrowRight size={14} />
                    API Development
                  </Link>
                </li>
                <li>
                  <Link to="/services">
                    <ArrowRight size={14} />
                    Custom Software
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="footer-section">
              <h4 className="footer-title">Contact Us</h4>
              <ul className="footer-contact">
                <li>
                  <MapPin size={18} />
                  <span>{companyInfo.address}</span>
                </li>
                <li>
                  <Phone size={18} />
                  <a href={`tel:${companyInfo.phone}`}>{companyInfo.phone}</a>
                </li>
                <li>
                  <Mail size={18} />
                  <a href={`mailto:${companyInfo.email}`}>{companyInfo.email}</a>
                </li>
              </ul>
              <Link to="/contact" className="footer-cta">
                Request Your Free Quote Today
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="container">
          <p>&copy; {currentYear} QllmSoft. All Rights Reserved.</p>
          <div className="footer-bottom-links">
            <Link to="/">Privacy Policy</Link>
            <Link to="/">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
