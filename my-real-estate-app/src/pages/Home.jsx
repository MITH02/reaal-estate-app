import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const videoRef = useRef(null);
  const [statsVisible, setStatsVisible] = useState(false);
  const [videoError, setVideoError] = useState(false);

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
    console.error('Error loading video: VideoPintrestt.mp4 may be corrupted or missing');
    setVideoError(true);
  };

  const handleAboutClick = () => {
    navigate('/about');
  };


  const socialLinks = {
    instagram: 'https://www.instagram.com/agastyabuilder/',
    linkedin: 'https://www.linkedin.com/company/agastyabuildersanddevelopers',
    facebook: 'https://www.facebook.com/agastyabuildersanddevelopers',
    youtube: 'https://www.youtube.com/@agastyabuildersanddevelopers'
  };

  const handleSocialClick = (e, url) => {
    e.preventDefault();
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const features = [
    {
      icon: '🏗️',
      title: 'Expert Construction',
      description: 'Over 30 years of construction excellence with premium quality materials and craftsmanship.'
    },
    {
      icon: '🎨',
      title: 'Modern Design',
      description: 'Contemporary architectural designs that blend luxury with functionality and sustainability.'
    },
    {
      icon: '⚡',
      title: 'Fast Delivery',
      description: 'Timely project completion with efficient construction processes and project management.'
    },
    {
      icon: '💎',
      title: 'Premium Quality',
      description: 'Top-tier materials and finishes ensuring long-lasting durability and aesthetic appeal.'
    }
  ];

  const testimonials = [
    {
      name: 'Akshay Bukkawar',
      role: 'Homeowner',
      content: 'Agastya Builders delivered our dream home with exceptional quality and on time. Truly grateful for their professionalism and commitment.',
      rating: 5
    },
    {
      name: 'Surekha Kathalkar',
      role: 'Homeowner',
	  content: 'Very professional service with great attention to detail. I highly recommend Agastya Builders for premium construction projects.',
      rating: 5
    },
    {
      name: 'Riya Chakraborty',
      role: 'Homeowner',
	  content: 'Outstanding craftsmanship and modern designs. Truly one of the best builders in the region!',
      rating: 5
    }
  ];

  return (
    <>
      {/* Hero Video Section */}
      <section className="video-section">
        {!videoError ? (
          <video
            ref={videoRef}
            className="hero-video"
            src="https://cdn.builder.io/o/assets%2Fb706ac4975b94791890c8d3621c65cb4%2F15783be6f38f40f5a52e6f637da988b0?alt=media&token=5225cadd-d662-4e7f-b63d-73a33c8b5069&apiKey=b706ac4975b94791890c8d3621c65cb4"
            autoPlay
            muted
            loop
            playsInline
            onError={handleVideoError}
          />
        ) : (
          <div
            className="hero-video-fallback"
            style={{
              background: `linear-gradient(
                135deg,
                rgba(37, 99, 235, 0.8) 0%,
                rgba(15, 23, 42, 0.9) 50%,
                rgba(51, 65, 85, 0.8) 100%
              ), url('/images/VishalSpandanImage1.JPG') center/cover`
            }}
          />
        )}
        
        
        {/* Overlay Content */}
        <div className="video-overlay-content">
          <h1 className="animate-fade-in">LUXURY • QUALITY • ELEGANCE</h1>
          <div className="overlay-buttons">
            <button className="hero-btn animate-slide-in-left" onClick={() => navigate('/projects')}>
              OUR PROJECTS
            </button>
            <button className="hero-btn animate-slide-in-right" onClick={() => navigate('/contact')}>
              CONTACT US
            </button>
          </div>
        </div>
      </section>

      <div className="main-content home-page">
        {/* Introduction Section */}
        <section className="intro-section section">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">Crafting Dreams Into Reality</h2>
              <p className="section-subtitle">
                For over 30 years, we've mastered the art of creating impeccable lifestyle standards that combine luxury with sustainability. Experience the future of premium living with Agastya Builders and Developers.
              </p>
            </div>
            <div className="flex justify-center">
              <button className="about-button" onClick={handleAboutClick}>
                Discover Our Story
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="section" style={{ background: 'var(--bg-secondary)' }}>
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">Why Choose Agastya</h2>
              <p className="section-subtitle">
                Discover what makes us the preferred choice for luxury construction and development
              </p>
            </div>
            <div className="grid grid-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="card text-center">
                  <div style={{ fontSize: 'var(--text-5xl)', marginBottom: 'var(--space-4)' }}>
                    {feature.icon}
                  </div>
                  <h3 style={{ fontSize: 'var(--text-xl)', fontWeight: '600', marginBottom: 'var(--space-3)', color: 'var(--text-primary)' }}>
                    {feature.title}
                  </h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: 'var(--text-base)', lineHeight: '1.6', margin: '0' }}>
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Statistics Section */}
        <section className={`stats-section ${statsVisible ? 'visible' : ''}`}>
          <div className="container">
            <div className="section-header" style={{ marginBottom: 'var(--space-12)' }}>
              <h2 className="section-title" style={{ color: 'var(--text-primary)' }}>Our Achievements</h2>
              <p className="section-subtitle">Numbers that reflect our commitment to excellence</p>
            </div>
            <div className="stats-container">
              <div className="stat-item">
                <div className="stat-number" id="years">0</div>
                <p>Years of Excellence</p>
              </div>
              <div className="stat-item">
                <div className="stat-number" id="projects">0</div>
                <p>Projects Delivered</p>
              </div>
              <div className="stat-item">
                <div className="stat-number" id="customers">0</div>
                <p>Customer Satisfaction</p>
              </div>
            </div>
          </div>
        </section>

        {/* Upcoming Project Section */}
        <section className="upcoming-project-section">
          <div className="container">
            <h3>Upcoming Project</h3>
            <h2 className="animate-glow">Vishal Spandan</h2>
            <p style={{ fontSize: 'var(--text-lg)', maxWidth: '800px', margin: '0 auto var(--space-8)', color: 'var(--text-secondary)', lineHeight: '1.7' }}>
              Discover Vishal Spandan – luxurious apartments where contemporary design meets exceptional living. Featuring striking architecture, elegant curving balconies, and world-class amenities that redefine modern living with elegance, comfort, and innovation.
            </p>
            
            <div className="project-features">
              <div>
                <div>3BHK</div>
                <div>Luxurious Apartments</div>
              </div>
              <div>
                <div>6500</div>
                <div>Sq. Ft. Plot Size</div>
              </div>
              <div>
                <div>G+7</div>
                <div>Floors Building</div>
              </div>
              <div>
                <div>7+</div>
                <div>World Class Amenities</div>
              </div>
            </div>
            
            <div style={{ marginTop: 'var(--space-8)', display: 'flex', justifyContent: 'center', gap: 'var(--space-6)', flexWrap: 'wrap' }}>
              <button className="btn btn-primary btn-lg" onClick={() => navigate('/contact')}>
                Get In Touch
              </button>
              <button className="btn btn-secondary btn-lg" onClick={() => navigate('/projects/vishal-spandan')}>
                Learn More
              </button>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="section" style={{ background: 'var(--bg-secondary)' }}>
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">What Our Clients Say</h2>
              <p className="section-subtitle">
                Real stories from satisfied homeowners and investors
              </p>
            </div>
            <div className="grid grid-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="card">
                  <div style={{ marginBottom: 'var(--space-4)' }}>
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} style={{ color: 'var(--color-accent)', fontSize: 'var(--text-xl)' }}>★</span>
                    ))}
                  </div>
                  <p style={{ fontSize: 'var(--text-lg)', lineHeight: '1.6', marginBottom: 'var(--space-4)', color: 'var(--text-secondary)', fontStyle: 'italic' }}>
                    "{testimonial.content}"
                  </p>
                  <div>
                    <h4 style={{ fontSize: 'var(--text-lg)', fontWeight: '600', margin: '0', color: 'var(--text-primary)' }}>
                      {testimonial.name}
                    </h4>
                    <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-tertiary)', margin: '0' }}>
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="section" style={{ background: 'var(--color-primary)', color: 'var(--text-inverse)', textAlign: 'center' }}>
          <div className="container">
            <h2 style={{ fontSize: 'var(--text-4xl)', fontWeight: '700', marginBottom: 'var(--space-6)', color: 'var(--text-inverse)' }}>
              Ready to Build Your Dream Home?
            </h2>
            <p style={{ fontSize: 'var(--text-xl)', marginBottom: 'var(--space-8)', opacity: '0.9', maxWidth: '600px', margin: '0 auto var(--space-8)' }}>
              Let's discuss your vision and turn it into reality with our expert team and premium construction services.
            </p>
            <div className="flex justify-center gap-6">
              <button 
                className="btn btn-accent btn-lg"
                onClick={() => navigate('/contact')}
                style={{ background: 'var(--text-inverse)', color: 'var(--color-primary)' }}
              >
                Start Your Project
              </button>
              <button 
                className="btn btn-secondary btn-lg"
                onClick={() => navigate('/projects')}
                style={{ borderColor: 'var(--text-inverse)', color: 'var(--text-inverse)' }}
              >
                View Portfolio
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
