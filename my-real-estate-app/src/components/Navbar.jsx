import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
  const { isDarkTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => setMenuOpen((open) => !open);
  const handleLinkClick = () => setMenuOpen(false);

  const logoSrc = isDarkTheme ? "/images/logo1.png" : "/images/logo.png";
  const logoAlt = "Agastya Builders Logo";

  return (
    <nav className="navbar">
      <div className="nav-brand">
        <Link to="/">
          <img
            src={logoSrc}
            alt={logoAlt}
            className="logo"
            style={{ height: '40px', marginRight: '1rem', objectFit: 'cover' }}
          />
          <span className="brand-name">Agastya Builders</span>
        </Link>
      </div>
      <div className="nav-links desktop-only">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/projects" className="nav-link">Projects</Link>
        <Link to="/about" className="nav-link">About Us</Link>
        <Link to="/contact" className="nav-link">Contact Us</Link>
      </div>
      <button className="hamburger mobile-only" onClick={handleMenuToggle} aria-label={menuOpen ? 'Close menu' : 'Open menu'}>
        {menuOpen ? (
          <span className="close-icon">&#10005;</span>
        ) : (
          <>
            <span className="hamburger-bar"></span>
            <span className="hamburger-bar"></span>
            <span className="hamburger-bar"></span>
          </>
        )}
      </button>
      {menuOpen && (
        <div className="mobile-menu">
          <Link to="/" className="nav-link" onClick={handleLinkClick}>Home</Link>
          <Link to="/projects" className="nav-link" onClick={handleLinkClick}>Projects</Link>
          <Link to="/about" className="nav-link" onClick={handleLinkClick}>About Us</Link>
          <Link to="/contact" className="nav-link" onClick={handleLinkClick}>Contact Us</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
