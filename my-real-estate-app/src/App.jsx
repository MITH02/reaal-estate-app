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
import "./styles/MobileOptimizations.css";
import "./styles/ProjectImageOptimizations.css";
import "./styles/WhatsAppButton.css";
import { ThemeProvider, useTheme } from './context/ThemeContext';
import ThemeToggle from './components/ThemeToggle';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from "./ScrollToTop";
import './Responsive.css';

function WhatsAppBlinkButton() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);

      // Show button after scrolling 50px on mobile, 100px on desktop
      const isMobile = window.innerWidth <= 768;
      const threshold = isMobile ? 50 : 100;
      setIsVisible(position > threshold);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll); // Also check on resize

    // Initial check
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  const handleClick = () => {
    const message = "Hi! I am interested in properties at Agastya Developers and Builders";
    const whatsappUrl = `https://wa.me/917559378178?text=${encodeURIComponent(message)}`;
    window.location.href = whatsappUrl;
  };

  if (!isVisible) return null;

  const isMobile = window.innerWidth <= 768;
  const bottomOffset = isMobile ? 80 : 120;
  const minTopOffset = isMobile ? 150 : 200;

  return (
    <div
      className="whatsapp-floating-button"
      style={{
        position: 'absolute',
        right: isMobile ? '16px' : '24px',
        top: Math.max(scrollPosition + window.innerHeight - bottomOffset, scrollPosition + minTopOffset) + 'px',
        zIndex: 9999,
        transition: 'top 0.3s ease-out'
      }}
    >
      <div style={{
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        gap: '12px'
      }}>
        {/* Message popup */}
        <div className="whatsapp-message" style={{
          background: '#fff',
          color: '#222',
          borderRadius: '12px',
          padding: '10px 16px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
          fontSize: '14px',
          whiteSpace: 'nowrap',
          border: '1px solid #e0e0e0',
          animation: 'pulse 2s infinite',
          position: 'relative'
        }}>
          <span style={{ fontSize: '16px', marginRight: '6px' }}>👋</span>
          Hi! We are here to help
          {/* Message arrow */}
          <div style={{
            position: 'absolute',
            right: '-8px',
            top: '50%',
            transform: 'translateY(-50%)',
            width: '0',
            height: '0',
            borderLeft: '8px solid #fff',
            borderTop: '6px solid transparent',
            borderBottom: '6px solid transparent'
          }}></div>
        </div>

        {/* WhatsApp button */}
        <button
          className="whatsapp-button"
          onClick={handleClick}
          aria-label="Contact on WhatsApp"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '56px',
            height: '56px',
            background: '#25D366',
            borderRadius: '50%',
            boxShadow: '0 4px 12px rgba(37, 211, 102, 0.4)',
            border: 'none',
            cursor: 'pointer',
            color: 'white',
            fontSize: '28px',
            transition: 'all 0.3s ease',
            animation: 'bounce 2s infinite'
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = 'scale(1.1)';
            e.target.style.boxShadow = '0 6px 20px rgba(37, 211, 102, 0.6)';
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = 'scale(1)';
            e.target.style.boxShadow = '0 4px 12px rgba(37, 211, 102, 0.4)';
          }}
        >
          <i className="fab fa-whatsapp"></i>
        </button>
      </div>
    </div>
  );
}

function AppContent() {

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
            <Route path="/footer-test" element={<FooterTest />} />
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
