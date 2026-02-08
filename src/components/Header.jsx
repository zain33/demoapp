import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Mail,
  Phone,
  Menu,
  X,
  Linkedin,
  Facebook,
  Instagram,
  Youtube,
  Twitter
} from 'lucide-react';

import { companyInfo, navigationLinks } from '../data/mock';
import logo from '../assets/qllmsoft-web-desktop-mobile-app-logo.webp';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Shadow on scroll
   useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10); // small scroll triggers hide
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <header className={`header ${isScrolled ? 'header-scrolled' : ''}`}>

      {/* ================= TOP BAR ================= */}
    <div className={`header-top ${isScrolled ? 'slide-up' : ''}`}>
        <div className="container header-top-content top-bar">

          {/* LEFT — Email + Phone */}
          <div className="top-left">
            <a href={`mailto:${companyInfo.email}`} className="contact-link">
              <Mail size={14} />
              <span>{companyInfo.email}</span>
            </a>

            <a
              href={`https://wa.me/${companyInfo.phone.replace(/[^0-9]/g, '')}`}
              className="contact-link whatsapp"
            >
              <Phone size={14} />
              <span>{companyInfo.phone}</span>
            </a>
          </div>

          {/* RIGHT — Social Icons */}
          <div className="social-links top-social">
            <a className="ln" href={companyInfo.socialLinks.linkedin}><Linkedin size={14}/></a>
            <a className="fb" href={companyInfo.socialLinks.facebook}><Facebook size={14}/></a>
            <a className="yt" href={companyInfo.socialLinks.youtube}><Youtube size={14}/></a>
            <a className="x" href={companyInfo.socialLinks.twitter}><Twitter size={14}/></a>
            <a className="ig" href={companyInfo.socialLinks.instagram}><Instagram size={14}/></a>
          </div>

        </div>
      </div>


      {/* ================= NAVBAR ================= */}
      <nav className="header-nav">
        <div className="container header-nav-content">

          {/* LOGO LEFT */}
          <Link to="/" className="logo">
            <img src={logo} alt="QllmSoft Logo" className="logo-image"/>
          </Link>

          {/* MOBILE BUTTON */}
          <button
            className="mobile-menu-btn"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24}/> : <Menu size={24}/>}
          </button>

          {/* NAV LINKS RIGHT */}
          <ul className={`nav-menu ${isMobileMenuOpen ? 'nav-menu-open' : ''}`}>
            {navigationLinks.map((link) => (
              <li key={link.path} className="nav-item">
                <Link
                  to={link.path}
                  className={`nav-link ${
                    location.pathname === link.path ? 'nav-link-active' : ''
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

        </div>
      </nav>

    </header>
  );
};

export default Header;
