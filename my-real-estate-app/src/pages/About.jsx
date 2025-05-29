import React, { memo, useState, useEffect, useRef } from 'react';
import './About.css';

// Memoize the building image component to prevent unnecessary re-renders
const BuildingImage = memo(({ image, index, scrollY, prevScrollY }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(false);
  const imageRef = useRef(null);

  useEffect(() => {
    if (imageRef.current) {
      const speed = 0.1; // Reduced speed for subtler movement
      const scrollDiff = scrollY - prevScrollY;
      const currentX = parseFloat(imageRef.current.style.transform.replace('translateX(', '').replace('px)', '') || 0);
      const newX = currentX + (scrollDiff * speed * (index + 1));
      
      // Limit the movement range
      const maxOffset = 50; // Maximum pixels the image can move
      const clampedX = Math.max(Math.min(newX, maxOffset), -maxOffset);
      
      imageRef.current.style.transform = `translateX(${clampedX}px)`;
    }
  }, [scrollY, prevScrollY, index]);

  return (
    <div className={`building-image ${isLoaded ? 'loaded' : 'loading'}`}>
      {!isLoaded && !error && (
        <div className="image-placeholder">
          <div className="loading-spinner"></div>
        </div>
      )}
      {error ? (
        <div className="image-error">
          <i className="fas fa-exclamation-circle"></i>
          <span>Image failed to load</span>
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

  const buildingImages = [
    '/images/buildings/building1.png',
    '/images/buildings/building2.jpg',
    '/images/buildings/building3.png',
    '/images/buildings/building4.jpg'
  ];

  useEffect(() => {
    const handleScroll = () => {
      setPrevScrollY(scrollY);
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrollY]);

  return (
    <div className="main-content about-page">
      {/* Founder Section */}
      <div className="founder-section">
        <h2 className="founder-heading">Message from Our Founder</h2>
        <div className="founder-content-wrapper">
          <div className={`founder-image ${founderImageLoaded ? 'loaded' : 'loading'}`}>
            {!founderImageLoaded && !founderImageError && (
              <div className="image-placeholder">
                <div className="loading-spinner"></div>
              </div>
            )}
            {founderImageError ? (
              <div className="image-error">
                <i className="fas fa-exclamation-circle"></i>
                <span>Image failed to load</span>
              </div>
            ) : (
              <img 
                src="/images/Founder.jpg" 
                alt="Founder" 
                loading="lazy"
                onLoad={() => setFounderImageLoaded(true)}
                onError={() => setFounderImageError(true)}
              />
            )}
          </div>
          <div className="founder-content">
            <p>
              "At Agastya Builders and Developers, we believe in creating spaces that inspire and endure. 
              Our commitment to excellence and innovation drives us to deliver exceptional quality in every project. 
              We don't just build structures; we create homes and communities that stand the test of time."
            </p>
          </div>
        </div>
      </div>

      {/* Proverb Section */}
      <div className="proverb-section">
        <p className="proverb">
          "A house is made of walls and beams; a home is built with love and dreams."
        </p>
      </div>

      {/* About Us Section */}
      <div className="about-section">
        <h2>About Us</h2>
        <div className="horizontal-line"></div>
        
        {/* Building Images Display */}
        <div className="building-images-container">
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

        {/* Company Description */}
        <div className="company-description">
          <div className="description-header">
            <h2>Our Story</h2>
            <div className="horizontal-line"></div>
          </div>
          <div className="description-content">
            <div className="description-card">
              <div className="card-icon">
                <i className="fas fa-building"></i>
              </div>
              <p>
                Founded in <span className="highlight">2008</span> by <span className="highlight">Badal Mahendrakumar Matey</span>, <span className="highlight">Agastya Builders and Developers</span> has established itself as a premier name in the construction industry. Our journey is driven by an unwavering passion for exceptional architecture and a commitment to excellence. We specialize in creating projects that seamlessly blend luxury with simplicity, while maintaining the highest standards of craftsmanship.
              </p>
            </div>

            <div className="description-card">
              <div className="card-icon">
                <i className="fas fa-pencil-ruler"></i>
              </div>
              <p>
                At <span className="highlight">Agastya</span>, we believe that exceptional architecture has the power to transform lives. Our designs combine timeless elegance with modern functionality, creating spaces that inspire and endure. From residential havens to commercial landmarks, every project reflects our dedication to making lasting impressions that exceed client expectations.
              </p>
            </div>

            <div className="description-card">
              <div className="card-icon">
                <i className="fas fa-star"></i>
              </div>
              <p>
                What sets us apart is our steadfast focus on customer satisfaction. We take immense pride in turning our clients' visions into reality, ensuring excellence at every stage of the journey. Our commitment to quality, innovation, and attention to detail has made us a trusted partner in transforming dreams into concrete reality.
              </p>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="values-section">
          <h2>Our Values</h2>
          <div className="horizontal-line"></div>
          
          <div className="values-grid">
            <div className="value-card">
              <i className="fas fa-heart"></i>
              <h3>Customer Satisfaction</h3>
              <p>Putting our clients' needs first and ensuring their complete satisfaction</p>
            </div>
            
            <div className="value-card">
              <i className="fas fa-award"></i>
              <h3>Quality</h3>
              <p>Maintaining the highest standards in every aspect of our work</p>
            </div>
            
            <div className="value-card">
              <i className="fas fa-star"></i>
              <h3>Excellence</h3>
              <p>Striving for perfection in every project we undertake</p>
            </div>
            
            <div className="value-card">
              <i className="fas fa-handshake"></i>
              <h3>Trust & Relationships</h3>
              <p>Building lasting relationships based on trust and mutual respect</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About; 