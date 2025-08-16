import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
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

      </div>
    </nav>
  );
};

export default Navbar;
