import React, { memo, useState, useEffect, useRef } from 'react';
import './About.css';

// Memoize the building image component to prevent unnecessary re-renders
const BuildingImage = memo(({ image, index, scrollY, prevScrollY }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(false);
  const imageRef = useRef(null);

  useEffect(() => {
    if (imageRef.current) {
      const speed = 0.05;
      const scrollDiff = scrollY - prevScrollY;
      const currentX = parseFloat(imageRef.current.style.transform.replace('translateX(', '').replace('px)', '') || 0);
      const newX = currentX + (scrollDiff * speed * (index + 1));
      
      const maxOffset = 30;
      const clampedX = Math.max(Math.min(newX, maxOffset), -maxOffset);
      
      imageRef.current.style.transform = `translateX(${clampedX}px)`;
    }
  }, [scrollY, prevScrollY, index]);

  return (
    <div className={`building-image ${isLoaded ? 'loaded' : 'loading'}`}>
      {!isLoaded && !error && (
        <div className="image-placeholder skeleton">
        </div>
      )}
      {error ? (
        <div className="image-error">
          <span>📷</span>
          <span>Image unavailable</span>
        </div>
      ) : (
        <img 
          ref={imageRef}
          src={image} 
          alt={`Building ${index + 1}`}
          loading="lazy"
          onLoad={() => setIsLoaded(true)}
          onError={() => setError(true)}
        />
      )}
    </div>
  );
});

const About = () => {
  const [founderImageLoaded, setFounderImageLoaded] = useState(false);
  const [founderImageError, setFounderImageError] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [prevScrollY, setPrevScrollY] = useState(0);
  const [visibleSections, setVisibleSections] = useState(new Set());

  const buildingImages = [
    '/images/VishalClassicImage1.jpg',
    '/images/VishalEnrichImage1.jpg',
    '/images/VishalPinnacleImage1.jpg',
    '/images/VishalSpandanImage1.JPG'
  ];

  useEffect(() => {
    const handleScroll = () => {
      setPrevScrollY(scrollY);
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrollY]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections(prev => new Set([...prev, entry.target.id]));
          }
        });
      },
      { threshold: 0.2 }
    );

    const sections = document.querySelectorAll('[id]');
    sections.forEach(section => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const achievements = [
    { number: '30+', label: 'Years Experience', icon: '🏆' },
    { number: '35+', label: 'Projects Completed', icon: '🏗️' },
    { number: '98%', label: 'Client Satisfaction', icon: '😊' },
    { number: '500+', label: 'Happy Families', icon: '🏠' }
  ];

  const values = [
    {
      icon: '💎',
      title: 'Quality Excellence',
      description: 'We never compromise on quality, using only premium materials and expert craftsmanship in every project.'
    },
    {
      icon: '🤝',
      title: 'Trust & Integrity',
      description: 'Building lasting relationships based on transparency, honesty, and delivering on our promises.'
    },
    {
      icon: '🎯',
      title: 'Customer Focus',
      description: 'Your vision drives our mission. We prioritize client satisfaction above everything else.'
    },
    {
      icon: '🚀',
      title: 'Innovation',
      description: 'Embracing modern technology and design trends to create contemporary living spaces.'
    },
    {
      icon: '🌱',
      title: 'Sustainability',
      description: 'Committed to eco-friendly practices and sustainable construction for a better future.'
    },
    {
      icon: '⚡',
      title: 'Timely Delivery',
      description: 'Efficient project management ensures on-time completion without compromising quality.'
    }
  ];

  const milestones = [
    { year: '2008', title: 'Foundation', description: 'Agastya Builders was founded with a vision to redefine construction excellence.' },
    { year: '2012', title: 'First Major Project', description: 'Completed our first residential complex, setting new standards in the region.' },
    { year: '2016', title: 'Expansion', description: 'Expanded operations and introduced luxury apartment projects.' },
    { year: '2020', title: 'Innovation', description: 'Adopted cutting-edge construction technologies and sustainable practices.' },
    { year: '2024', title: 'Vishal Spandan', description: 'Launching our most ambitious project with world-class amenities.' }
  ];

  return (
    <div className="main-content about-page">
      {/* Hero Section */}
      <section className="hero-section" style={{ 
        background: 'linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%)',
        minHeight: '60vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'var(--text-inverse)',
        textAlign: 'center'
      }}>
        <div className="container">
          <h1 className="hero-title animate-fade-in">About Agastya Builders</h1>
          <p className="hero-subtitle animate-slide-in-left">
            Crafting architectural excellence for over 30 years, transforming dreams into reality
          </p>
        </div>
      </section>

      {/* Founder Section */}
      <section className="section" id="founder-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Message from Our Founder</h2>
            <p className="section-subtitle">
              A personal note from the visionary behind Agastya Builders
            </p>
          </div>
          
          <div className="grid grid-2 gap-8 items-center">
            <div className={`founder-image ${founderImageLoaded ? 'loaded' : 'loading'}`} style={{
              borderRadius: 'var(--radius-2xl)',
              overflow: 'hidden',
              aspectRatio: '4/5',
              position: 'relative'
            }}>
              {!founderImageLoaded && !founderImageError && (
                <div className="skeleton" style={{ width: '100%', height: '100%' }}></div>
              )}
              {founderImageError ? (
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: '100%',
                  background: 'var(--bg-tertiary)',
                  color: 'var(--text-tertiary)'
                }}>
                  <span style={{ fontSize: 'var(--text-5xl)', marginBottom: 'var(--space-2)' }}>👤</span>
                  <span>Image unavailable</span>
                </div>
              ) : (
                <img
                  src="https://via.placeholder.com/400x500/2563eb/ffffff?text=Founder"
                  alt="Badal Mahendrakumar Matey - Founder"
                  loading="lazy"
                  onLoad={() => setFounderImageLoaded(true)}
                  onError={() => setFounderImageError(true)}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              )}
            </div>
            
            <div className="founder-content">
              <blockquote style={{
                fontSize: 'var(--text-xl)',
                lineHeight: '1.7',
                fontStyle: 'italic',
                color: 'var(--text-secondary)',
                margin: '0 0 var(--space-6)',
                padding: 'var(--space-6)',
                background: 'var(--bg-card)',
                borderRadius: 'var(--radius-xl)',
                borderLeft: '4px solid var(--color-primary)',
                position: 'relative'
              }}>
                "At Agastya Builders and Developers, we believe in creating spaces that inspire and endure. Our commitment to excellence and innovation drives us to deliver exceptional quality in every project. We don't just build structures; we create homes and communities that stand the test of time."
              </blockquote>
              <div>
                <h4 style={{ fontSize: 'var(--text-xl)', fontWeight: '600', margin: '0 0 var(--space-1)', color: 'var(--text-primary)' }}>
                  Badal Mahendrakumar Matey
                </h4>
                <p style={{ fontSize: 'var(--text-base)', color: 'var(--text-tertiary)', margin: '0' }}>
                  Founder & Managing Director
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section style={{ 
        background: 'var(--color-primary)', 
        color: 'var(--text-inverse)', 
        padding: 'var(--space-16) 0',
        textAlign: 'center'
      }}>
        <div className="container">
          <blockquote style={{
            fontSize: 'clamp(var(--text-2xl), 4vw, var(--text-4xl))',
            fontFamily: 'var(--font-display)',
            fontWeight: '400',
            fontStyle: 'italic',
            margin: '0',
            maxWidth: '800px',
            marginLeft: 'auto',
            marginRight: 'auto',
            lineHeight: '1.4'
          }}>
            "A house is made of walls and beams; a home is built with love and dreams."
          </blockquote>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="section" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our Achievements</h2>
            <p className="section-subtitle">
              Numbers that showcase our journey of excellence
            </p>
          </div>
          
          <div className="grid grid-4 gap-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="card text-center" style={{ background: 'var(--bg-card)' }}>
                <div style={{ fontSize: 'var(--text-4xl)', marginBottom: 'var(--space-3)' }}>
                  {achievement.icon}
                </div>
                <div style={{ 
                  fontSize: 'var(--text-4xl)', 
                  fontFamily: 'var(--font-display)',
                  fontWeight: '700', 
                  color: 'var(--color-primary)', 
                  marginBottom: 'var(--space-2)' 
                }}>
                  {achievement.number}
                </div>
                <p style={{ fontSize: 'var(--text-lg)', fontWeight: '500', color: 'var(--text-secondary)', margin: '0' }}>
                  {achievement.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Building Images Section */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our Signature Projects</h2>
            <p className="section-subtitle">
              A glimpse of our architectural excellence and attention to detail
            </p>
          </div>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: 'var(--space-6)',
            marginTop: 'var(--space-8)'
          }}>
            {buildingImages.map((image, index) => (
              <BuildingImage 
                key={index} 
                image={image} 
                index={index}
                scrollY={scrollY}
                prevScrollY={prevScrollY}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Company Story Section */}
      <section className="section" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our Story</h2>
            <p className="section-subtitle">
              The journey of passion, dedication, and architectural excellence
            </p>
          </div>
          
          <div className="grid grid-3 gap-8">
            <div className="card">
              <div style={{ fontSize: 'var(--text-4xl)', marginBottom: 'var(--space-4)', textAlign: 'center' }}>
                🏗️
              </div>
              <h3 style={{ fontSize: 'var(--text-xl)', fontWeight: '600', marginBottom: 'var(--space-3)', color: 'var(--text-primary)' }}>
                Our Foundation
              </h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6', margin: '0' }}>
                Founded in 2008 by Badal Mahendrakumar Matey, Agastya Builders has established itself as a premier name in construction, driven by passion for exceptional architecture and commitment to excellence.
              </p>
            </div>
            
            <div className="card">
              <div style={{ fontSize: 'var(--text-4xl)', marginBottom: 'var(--space-4)', textAlign: 'center' }}>
                🎨
              </div>
              <h3 style={{ fontSize: 'var(--text-xl)', fontWeight: '600', marginBottom: 'var(--space-3)', color: 'var(--text-primary)' }}>
                Design Philosophy
              </h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6', margin: '0' }}>
                We believe exceptional architecture transforms lives. Our designs combine timeless elegance with modern functionality, creating spaces that inspire and endure for generations.
              </p>
            </div>
            
            <div className="card">
              <div style={{ fontSize: 'var(--text-4xl)', marginBottom: 'var(--space-4)', textAlign: 'center' }}>
                ⭐
              </div>
              <h3 style={{ fontSize: 'var(--text-xl)', fontWeight: '600', marginBottom: 'var(--space-3)', color: 'var(--text-primary)' }}>
                Our Commitment
              </h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6', margin: '0' }}>
                Customer satisfaction drives everything we do. We take pride in turning visions into reality, ensuring excellence at every stage and building trust through quality delivery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our Core Values</h2>
            <p className="section-subtitle">
              The principles that guide every decision and every project we undertake
            </p>
          </div>
          
          <div className="grid grid-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="card text-center">
                <div style={{ fontSize: 'var(--text-5xl)', marginBottom: 'var(--space-4)' }}>
                  {value.icon}
                </div>
                <h3 style={{ fontSize: 'var(--text-xl)', fontWeight: '600', marginBottom: 'var(--space-3)', color: 'var(--text-primary)' }}>
                  {value.title}
                </h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6', margin: '0' }}>
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="section" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our Journey</h2>
            <p className="section-subtitle">
              Key milestones that shaped our path to excellence
            </p>
          </div>
          
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            {milestones.map((milestone, index) => (
              <div key={index} style={{
                display: 'flex',
                gap: 'var(--space-6)',
                marginBottom: 'var(--space-8)',
                position: 'relative'
              }}>
                <div style={{
                  flexShrink: 0,
                  width: '80px',
                  height: '80px',
                  borderRadius: 'var(--radius-full)',
                  background: 'var(--color-primary)',
                  color: 'var(--text-inverse)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: '700',
                  fontSize: 'var(--text-lg)'
                }}>
                  {milestone.year}
                </div>
                <div className="card" style={{ flex: 1 }}>
                  <h3 style={{ fontSize: 'var(--text-xl)', fontWeight: '600', marginBottom: 'var(--space-2)', color: 'var(--text-primary)' }}>
                    {milestone.title}
                  </h3>
                  <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6', margin: '0' }}>
                    {milestone.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
