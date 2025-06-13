import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import '../styles/Footer.css';

const Footer = () => {
  const { isDarkTheme } = useTheme();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-main-col">
          <div className="footer-logo-wrap">
            <img
              src={isDarkTheme ? "/images/logo.png" : "/images/logo.png"}
              alt="Agastya Builders Logo"
              className="footer-logo"
            />
            <span className="footer-company">AGASTYA BUILDERS PVT. LTD.</span>
          </div>
          <div className="social-links">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://instagram.com/agastyabuilder/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://linkedin.com/company/agastya-builders-developers-pvt-ltd" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
              <i className="fab fa-youtube"></i>
            </a>
          </div>
          <div className="footer-section">
            <p>
              We build homes with Trust, Quality, and Excellence. As the Best Construction and Builder Company in Nagpur, we deliver unmatched Luxury, Quality, and Simplicity in every project.
            </p>
          </div>
        </div>
        <div className="quick-links">
          <h3>Quick Links</h3>
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/contact">Contact Us</Link>
        </div>
        <div className="legal">
          <h3>Legal</h3>
          <Link to="/privacy-policy">Privacy Policy</Link>
          <Link to="/terms-of-service">Terms of Service</Link>
          <Link to="/disclaimer">Disclaimer</Link>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Agastya Builders Pvt. Ltd. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
