import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Home.css';

const Home = () => {
  const navigate = useNavigate();
  const videoRef = useRef(null);
  const [statsVisible, setStatsVisible] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setStatsVisible(entry.isIntersecting);
        });
      },
      { threshold: 0.2 }
    );

    const statsSection = document.querySelector('.stats-section');
    if (statsSection) {
      observer.observe(statsSection);
    }

    return () => {
      if (statsSection) {
        observer.unobserve(statsSection);
      }
    };
  }, []);

  useEffect(() => {
    if (!statsVisible) return;

    const animateValue = (id, end, suffix = '', duration = 2000) => {
      const obj = document.getElementById(id);
      if (!obj) return;
      let start = 0;
      const range = end - start;
      let startTime = null;

      function step(timestamp) {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        obj.textContent = Math.floor(progress * range + start) + suffix;
        if (progress < 1) {
          window.requestAnimationFrame(step);
        } else {
          obj.textContent = end + suffix;
        }
      }
      window.requestAnimationFrame(step);
    };

    animateValue('years', 30, '+');
    animateValue('projects', 35, '+');
    animateValue('customers', 98, '%');
  }, [statsVisible]);

  const handleVideoError = () => {
    console.error('Error loading video');
    setVideoError(true);
  };

  const handleAboutClick = () => {
    navigate('/about');
  };

  const handleSoundToggle = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  const socialLinks = {
    instagram: 'https://www.instagram.com/agastyabuildersanddevelopers',
    linkedin: 'https://www.linkedin.com/company/agastyabuildersanddevelopers',
    facebook: 'https://www.facebook.com/agastyabuildersanddevelopers',
    youtube: 'https://www.youtube.com/@agastyabuildersanddevelopers'
  };

  const handleSocialClick = (e, url) => {
    e.preventDefault();
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      {/* Video Section - now outside main-content for true full-bleed */}
      <section className="video-section">
        {!videoError ? (
          <video
            ref={videoRef}
            className="hero-video"
            src="/images/VideoPintrestt.mp4"
            autoPlay
            muted
            loop
            playsInline
            style={{
              width: '100vw',
              height: '100vh',
              objectFit: 'cover',
              background: 'black'
            }}
            onError={handleVideoError}
          />
        ) : (
          <div
            className="hero-video-fallback"
            style={{
              width: '100vw',
              height: '100vh',
              background: `linear-gradient(
                135deg,
                rgba(52, 152, 219, 0.8) 0%,
                rgba(44, 62, 80, 0.9) 50%,
                rgba(52, 73, 94, 0.8) 100%
              ), url('/images/VishalSpandanImage1.JPG') center/cover`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          />
        )}
        {/* Sound Toggle Button - only show when video is working */}
        {!videoError && (
          <button
            className="sound-toggle"
            onClick={handleSoundToggle}
            aria-label={isMuted ? 'Unmute video' : 'Mute video'}
          >
            {isMuted ? (
              <span role="img" aria-label="muted">🔇</span>
            ) : (
              <span role="img" aria-label="sound">🔊</span>
            )}
          </button>
        )}
        {/* Overlay Content */}
        <div className="video-overlay-content">
          <h1>LUXURY &nbsp; QUALITY &nbsp; ELEGANCE</h1>
          <div className="overlay-buttons">
            <button className="hero-btn" onClick={() => navigate('/projects')}>OUR PROJECTS</button>
            <button className="hero-btn" onClick={() => navigate('/contact')}>CONTACT US</button>
          </div>
        </div>
      </section>

      <div className="main-content home-page">
        {/* Hero/Intro Section */}
        <section className="intro-section" style={{ padding: '4rem 2rem', textAlign: 'center', background: 'var(--background-color)' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1.5rem', color: 'var(--accent-color)' }}>
            Homes crafted with luxury, defined by quality, and embraced in simplicity.
          </h2>
          <p style={{ fontSize: '1.25rem', maxWidth: 800, margin: '0 auto 2.5rem', color: 'var(--text-color)' }}>
            For over 30 plus years, we've mastered the art of crafting impeccable lifestyle standards that are both luxurious and sustainable. Experience the future of Agastya Builders and Developers, where timeless elegance and modern sustainability converge to create a truly unparalleled living experience.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <button className="about-button" onClick={handleAboutClick}>
              About Us
            </button>
          </div>
        </section>

        {/* Statistics Section with Animation */}
        <section className={`stats-section ${statsVisible ? 'visible' : ''}`}>
          <div className="stats-container">
            <div className="stat-item">
              <div className="stat-number" data-value="30" id="years">0</div>
              <p>Years of Experience</p>
            </div>
            <div className="stat-item">
              <div className="stat-number" data-value="35" id="projects">0</div>
              <p>Projects Completed</p>
            </div>
            <div className="stat-item">
              <div className="stat-number" data-value="98" id="customers">0</div>
              <p>Happy Customers Rate</p>
            </div>
          </div>
        </section>

        {/*Upcoming Project Section */}
        <section className="upcoming-project-section" style={{ background: 'var(--background-color)', padding: '4rem 2rem', textAlign: 'center' }}>
          <h3 style={{
            fontSize: '2rem',
            fontWeight: 600,
            letterSpacing: '2px',
            color: 'var(--accent-color)',
            marginBottom: '1rem',
            textTransform: 'uppercase',
            opacity: 0.8
          }}>
            Upcoming Project
          </h3>
          <h2 style={{
            fontSize: '2.8rem',
            fontWeight: 800,
            color: '#3498db',
            marginBottom: '2rem',
            letterSpacing: '3px',
            textShadow: '0 2px 10px rgba(52,152,219,0.1)',
            animation: 'glow 2s infinite alternate'
          }}>
            Vishal Spandan
          </h2>
          <p style={{ fontSize: '1.15rem', maxWidth: 700, margin: '0 auto 2.5rem', color: 'var(--text-color)' }}>
          Discover Vishal Spandan – luxurious apartments where contemporary design meets exceptional living. Featuring striking architecture, elegant curving balconies, and over six world-class amenities, Vishal Spandan redefines modern living with elegance, comfort, and innovation.</p>
          <div className="project-features" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '2.5rem', margin: '2.5rem 0' }}>
            <div>
              <div style={{ fontWeight: 700, fontSize: '1.5rem', color: '#3498db' }}>3BHK</div>
              <div>Luxurious Apartments</div>
            </div>
            <div>
              <div style={{ fontWeight: 700, fontSize: '1.5rem', color: '#3498db' }}>6500</div>
              <div>Sq. Ft. Plot Size</div>
            </div>
            <div>
              <div style={{ fontWeight: 700, fontSize: '1.5rem', color: '#3498db' }}>G+7</div>
              <div>Floors Apartment</div>
            </div>
            <div>
              <div style={{ fontWeight: 700, fontSize: '1.5rem', color: '#3498db' }}>7+</div>
              <div>World Class Amenities</div>
            </div>
          </div>
          <div style={{ marginTop: '2rem', display: 'flex', justifyContent: 'center', gap: '1.5rem' }}>
            <button className="about-button" onClick={() => navigate('/contact')}>CONTACT US</button>
            <button className="about-button" style={{ background: '#fff', color: 'var(--accent-color)', border: '2px solid var(--accent-color)' }} onClick={() => navigate('/projects/vishal-spandan')}>Learn More</button>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
