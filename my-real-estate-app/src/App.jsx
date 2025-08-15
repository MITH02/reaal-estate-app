// src/App.jsx
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import TermsOfService from "./pages/TermsOfService";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Disclaimer from "./pages/Disclaimer";
import VishalSpandanProject from "./pages/VishalSpandanProject";
import Projects from "./pages/Projects";
import VishalEnrichProject from "./pages/VishalEnrichProject";
import VishalClassicProject from "./pages/VishalClassicProject";
import VishalPinnacleProject from "./pages/VishalPinnacleProject";
import VishalEleganceProject from "./pages/VishalEleganceProject";
import FooterTest from "./pages/FooterTest";
import "./App.css";
import { ThemeProvider, useTheme } from './context/ThemeContext';
import ThemeToggle from './components/ThemeToggle';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from "./ScrollToTop";
import './Responsive.css';

function WhatsAppBlinkButton() {
  // Always show the popup
  const showMsg = true;

  const handleClick = () => {
    const message = "Hi! I am interested in properties at Agastya Developers and Builders";
    const whatsappUrl = `https://wa.me/917559378178?text=${encodeURIComponent(message)}`;
	window.location.href = whatsappUrl;
  };

  return (
    <div style={{ position: 'fixed', bottom: 24, right: 24, zIndex: 9999 }}>
      {showMsg && (
        <div style={{
          position: 'absolute',
          bottom: 60,
          right: 0,
          background: '#fff',
          color: '#222',
          borderRadius: 8,
          padding: '8px 16px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
          fontSize: 14,
          whiteSpace: 'nowrap'
        }}>
          Have questions? <br /> We're available on WhatsApp!
        </div>
      )}
      <button
        className="whatsapp-button whatsapp-blink"
        onClick={handleClick}
        aria-label="Contact on WhatsApp"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: 48,
          height: 48,
          background: '#25D366',
          borderRadius: '50%',
          boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
          border: 'none',
          cursor: 'pointer',
          color: 'white',
          fontSize: 28
        }}
      >
        <i className="fab fa-whatsapp"></i>
      </button>
    </div>
  );
}

function AppContent() {
  const { isDarkTheme } = useTheme();

  return (
    <div className="app">
      <ThemeToggle />
      <WhatsAppBlinkButton />
      <Router>
        <ScrollToTop />
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/disclaimer" element={<Disclaimer />} />
            <Route path="/projects/vishal-spandan" element={<VishalSpandanProject />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/vishal-enrich" element={<VishalEnrichProject />} />
            <Route path="/projects/vishal-classic" element={<VishalClassicProject />} />
            <Route path="/projects/vishal-pinnacle" element={<VishalPinnacleProject />} />
            <Route path="/projects/vishal-elegance" element={<VishalEleganceProject />} />
            <Route path="*" element={<div>Page not found. Go to <Link to="/">Home</Link></div>} />
          </Routes>
        </main>

        <Footer />
      </Router>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
