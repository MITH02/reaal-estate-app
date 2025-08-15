import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMenuToggle = () => {
    setMenuOpen((open) => !open);

    // Add haptic feedback for mobile devices
    if ('vibrate' in navigator) {
      navigator.vibrate(30);
    }

    // Prevent body scroll when menu is open
    if (!menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  };

  const handleLinkClick = () => {
    setMenuOpen(false);
    document.body.style.overflow = '';
  };

  // Close menu on escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && menuOpen) {
        handleLinkClick();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [menuOpen]);

  // Close menu when location changes
  useEffect(() => {
    handleLinkClick();
  }, [location]);

  const logoSrc = "/images/logo.png";
  const logoAlt = "Agastya Builders Logo";

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/projects', label: 'Projects' },
    { path: '/about', label: 'About Us' },
    { path: '/contact', label: 'Contact Us' }
  ];

  return (
    <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="nav-brand">
          <Link to="/" className="brand-link">
            <img
              src={logoSrc}
              alt={logoAlt}
              className="logo"
            />
            <div className="brand-text">
              <span className="brand-name">Agastya</span>
              <span className="brand-subtitle">Builders & Developers</span>
            </div>
          </Link>
        </div>

        <div className="nav-links desktop-only">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
            >
              {item.label}
              <span className="nav-link-underline"></span>
            </Link>
          ))}
        </div>

        <button 
          className="hamburger mobile-only" 
          onClick={handleMenuToggle} 
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        >
          <span className={`hamburger-line ${menuOpen ? 'open' : ''}`}></span>
          <span className={`hamburger-line ${menuOpen ? 'open' : ''}`}></span>
          <span className={`hamburger-line ${menuOpen ? 'open' : ''}`}></span>
        </button>

        <div className={`mobile-menu ${menuOpen ? 'mobile-menu-open' : ''}`}>
          <div className="mobile-menu-content">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`mobile-nav-link ${location.pathname === item.path ? 'active' : ''}`}
                onClick={handleLinkClick}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
