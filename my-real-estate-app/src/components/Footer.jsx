import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterStatus, setNewsletterStatus] = useState('');

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    
    // Simulate newsletter subscription
    setNewsletterStatus('success');
    setNewsletterEmail('');
    setTimeout(() => setNewsletterStatus(''), 3000);
  };

  const socialLinks = [
    {
      platform: 'Instagram',
      icon: 'fab fa-instagram',
      url: 'https://www.instagram.com/agastyabuildersanddevelopers',
      handle: '@agastyabuildersanddevelopers',
      color: '#E4405F'
    },
    {
      platform: 'LinkedIn',
      icon: 'fab fa-linkedin-in',
      url: 'https://www.linkedin.com/company/agastyabuildersanddevelopers',
      handle: 'Agastya Builders',
      color: '#0077B5'
    },
    {
      platform: 'Facebook',
      icon: 'fab fa-facebook-f',
      url: 'https://www.facebook.com/agastyabuildersanddevelopers',
      handle: 'Agastya Builders',
      color: '#1877F2'
    },
    {
      platform: 'YouTube',
      icon: 'fab fa-youtube',
      url: 'https://www.youtube.com/@agastyabuildersanddevelopers',
      handle: 'Agastya Builders',
      color: '#FF0000'
    }
  ];

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact Us', path: '/contact' }
  ];

  const projectLinks = [
    { name: 'Vishal Spandan', path: '/projects/vishal-spandan' },
    { name: 'Vishal Enrich', path: '/projects/vishal-enrich' },
    { name: 'Vishal Classic', path: '/projects/vishal-classic' },
    { name: 'Vishal Pinnacle', path: '/projects/vishal-pinnacle' }
  ];

  const legalLinks = [
    { name: 'Privacy Policy', path: '/privacy-policy' },
    { name: 'Terms of Service', path: '/terms-of-service' },
    { name: 'Disclaimer', path: '/disclaimer' }
  ];

  const contactInfo = {
    address: 'BPCL Petrol pump, Matey Chowak,\nMaharashtra 440010',
    phone: '+91 9822642423',
    phone2: '+91 7559378178',
    email: 'info@agastyabuildersanddevelopers.com',
    hours: 'Mon - Sat: 10AM - 7PM'
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Main Footer Content */}
        <div className="footer-content">
          {/* Company Info */}
          <div className="footer-column footer-company">
            <div className="footer-brand">
              <img
                src="/images/logo.png"
                alt="Agastya Builders Logo"
                className="footer-logo"
              />
              <div className="brand-text">
                <h3 className="company-name">Agastya Builders</h3>
                <p className="company-tagline">& Developers Pvt. Ltd.</p>
              </div>
            </div>
            
            <p className="company-description">
              Building dreams with trust, quality, and excellence for over 30 years. 
              We create luxurious homes that blend modern design with timeless elegance.
            </p>

            {/* Newsletter Signup */}
            <div className="newsletter-section">
              <h4>Stay Updated</h4>
              <p>Get latest updates on new projects and offers</p>
              <form onSubmit={handleNewsletterSubmit} className="newsletter-form">
                <div className="newsletter-input-group">
                  <input
                    type="email"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="newsletter-input"
                    required
                  />
                  <button type="submit" className="newsletter-button">
                    Subscribe
                  </button>
                </div>
                {newsletterStatus === 'success' && (
                  <p className="newsletter-success">
                    ✅ Thank you for subscribing!
                  </p>
                )}
              </form>
            </div>

            {/* Social Links */}
            <div className="social-section">
              <h4>Follow Us</h4>
              <div className="social-links">
                {socialLinks.map((social) => (
                  <a
                    key={social.platform}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                    aria-label={`Follow us on ${social.platform}`}
                    title={social.handle}
                    style={{ '--social-color': social.color }}
                  >
                    <span className="social-icon">
                      <i className={social.icon}></i>
                    </span>
                    <span className="social-name">{social.platform}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-column">
            <h4 className="footer-title">Quick Links</h4>
            <ul className="footer-links">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="footer-link">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Projects */}
          <div className="footer-column">
            <h4 className="footer-title">Our Projects</h4>
            <ul className="footer-links">
              {projectLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="footer-link">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-column">
            <h4 className="footer-title">Contact Info</h4>
            <div className="contact-info">
              <div className="contact-item">
                <span className="contact-icon">
                  <i className="fas fa-map-marker-alt"></i>
                </span>
                <div className="contact-details">
                  <p>{contactInfo.address.split('\n').map((line, index) => (
                    <span key={index}>
                      {line}
                      {index < contactInfo.address.split('\n').length - 1 && <br />}
                    </span>
                  ))}</p>
                </div>
              </div>
              <div className="contact-item">
                <span className="contact-icon">
                  <i className="fas fa-phone"></i>
                </span>
                <div className="contact-details">
                  <a href={`tel:${contactInfo.phone}`} className="contact-link">
                    {contactInfo.phone}
                  </a>
                  {contactInfo.phone2 && (
                    <>
                      <br />
                      <a href={`tel:${contactInfo.phone2}`} className="contact-link">
                        {contactInfo.phone2}
                      </a>
                    </>
                  )}
                </div>
              </div>
              <div className="contact-item">
                <span className="contact-icon">
                  <i className="fas fa-envelope"></i>
                </span>
                <div className="contact-details">
                  <a href={`mailto:${contactInfo.email}`} className="contact-link">
                    {contactInfo.email}
                  </a>
                </div>
              </div>
              <div className="contact-item">
                <span className="contact-icon">
                  <i className="fas fa-clock"></i>
                </span>
                <div className="contact-details">
                  <p>{contactInfo.hours}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <div className="copyright">
              <p>&copy; {new Date().getFullYear()} Agastya Builders & Developers Pvt. Ltd. All rights reserved.</p>
            </div>
            
            <div className="legal-links">
              {legalLinks.map((link, index) => (
                <React.Fragment key={link.name}>
                  <Link to={link.path} className="legal-link">
                    {link.name}
                  </Link>
                  {index < legalLinks.length - 1 && <span className="separator">•</span>}
                </React.Fragment>
              ))}
            </div>

            <div className="certifications">
              <span className="certification-badge">RERA Approved</span>
              <span className="certification-badge">ISO Certified</span>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <button 
        className="back-to-top"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Back to top"
      >
        ↑
      </button>
    </footer>
  );
};

export default Footer;
