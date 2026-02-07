import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Mail, Phone, Search, Menu, X, Linkedin, Facebook, Instagram,Youtube, Twitter } from 'lucide-react';
import { companyInfo, navigationLinks } from '../data/mock';
import logo from '../assets/qllmsoft-web-desktop-mobile-app-logo.webp';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <header className={`header ${isScrolled ? 'header-scrolled' : ''}`}>
      {/* Top Bar */}
      <div className="header-top">
        <div className="container header-top-content">
          <Link to="/" className="logo">
            <img 
              src={logo} 
              alt="QllmSoft Logo" 
              className="logo-image"
            />
          </Link>
          <div className="header-top-right">
            <a href={`mailto:${companyInfo.email}`} className="contact-link">
              <Mail size={16} />
              <span>{companyInfo.email}</span>
            </a>
            <a href={`https://wa.me/${companyInfo.phone.replace(/[^0-9]/g, '')}`} className="contact-link whatsapp">
              <Phone size={16} />
              <span>{companyInfo.phone}</span>
            </a>
            <div className="header-divider"></div>
            <button 
              className="search-btn"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              aria-label="Search"
            >
              <Search size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="header-nav">
        <div className="container header-nav-content">
          <button 
            className="mobile-menu-btn"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <ul className={`nav-menu ${isMobileMenuOpen ? 'nav-menu-open' : ''}`}>
            {navigationLinks.map((link) => (
              <li key={link.path} className="nav-item">
                <Link 
                  to={link.path} 
                  className={`nav-link ${location.pathname === link.path ? 'nav-link-active' : ''}`}
                >
                  {location.pathname === link.path && <span className="nav-bracket">[</span>}
                  {link.name}
                  {location.pathname === link.path && <span className="nav-bracket">]</span>}
                </Link>
              </li>
            ))}
          </ul>

          <div className="social-links">
            <a className="yt" href={companyInfo.socialLinks.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube">
              <Youtube size={16} />
            </a>
            <a className="x" href={companyInfo.socialLinks.twitter} target="_blank" rel="noopener noreferrer" aria-label="X">
              <Twitter size={16} />
            </a>
            <a className="ln" href={companyInfo.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin size={16} />
            </a>
            <a className="fb" href={companyInfo.socialLinks.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <Facebook size={16} />
            </a>
            <a className="ig" href={companyInfo.socialLinks.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <Instagram size={16} />
            </a>
          </div>
        </div>
      </nav>

      {/* Search Overlay */}
      {isSearchOpen && (
        <div className="search-overlay">
          <div className="container">
            <input 
              type="text" 
              placeholder="Search..." 
              className="search-input"
              autoFocus
            />
            <button 
              className="search-close"
              onClick={() => setIsSearchOpen(false)}
            >
              <X size={24} />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
