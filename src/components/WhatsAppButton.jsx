import React from 'react';
import { companyInfo } from '../data/mock';
import './WhatsAppButton.css';

const WhatsAppButton = () => {
  return (
    <a 
      href={companyInfo.whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-button"
      aria-label="Chat on WhatsApp"
    >
      <div className="whatsapp-tooltip">
        <span className="tooltip-status"></span>
        Typically replies in 5m
      </div>

      <div className="whatsapp-icon">
        <i className="fab fa-whatsapp whatsapp-fa-icon"></i>
        <span className="notification-badge">1</span>
      </div>
    </a>
  );
};

export default WhatsAppButton;
