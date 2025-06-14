import React from "react";
import { useNavigate } from "react-router-dom";

const propertyFeatures = [
  "Terrace Recreational Zone with Indoor Games",
  "Terrace Sit-Out Area",
  "Vastu-Compliant Design",
  "Yoga Corner",
  "Double-Height Entrance Lobby",
  "Children's Play Area",
  "24x7 Security",
  "High-Speed Lifts",
  "Dedicated Parking",
  "Modern Architecture",
  "Peaceful Residential Environment",
  "And More..."
];

const nearbyLocations = [
  { name: "IT Park", time: "2 Minutes" },
  { name: "Shopping Mall", time: "2 Minutes" },
  { name: "College", time: "7 Minutes" },
  { name: "School", time: "5 Minutes" },
  { name: "Hospital", time: "2 Minutes" },
  { name: "Airport", time: "10 Minutes" },
  { name: "Railway", time: "12 Minutes" },
  { name: "Market Area", time: "2 Minutes" },
  { name: "Metro Station", time: "5 Minutes" },
  { name: "Petrol Pump", time: "2 Minutes" }
];

const VishalSpandanProject = () => {
  const navigate = useNavigate();

  return (
    <div className="main-content" style={{ background: 'var(--background-color)', minHeight: '100vh', color: 'var(--text-color)' }}>
      <h1 style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--accent-color)', marginBottom: '1.5rem' }}>
        Vishal Spandan Flats Available
      </h1>
      <h3 style={{ fontWeight: 500, fontSize: '1.2rem', marginBottom: '1.5rem' }}>
        <i className="fas fa-map-marker-alt" style={{ color: 'var(--icon-color, #3498db)', marginRight: 8 }}></i>
        Bandu Soni Layout, Trimurti Nagar, Nagpur
      </h3>

      {/* Price Section */}
      <div style={{ margin: '2rem auto 2.5rem', maxWidth: 700, textAlign: 'left' }}>
        <div style={{ fontWeight: 600, fontSize: '1.1rem', marginBottom: 8 }}>Price</div>
        <div
          style={{
            fontSize: '2rem',
            fontWeight: 800,
            marginBottom: 24,
            color: '#27ae60',
            textShadow: '0 1px 4px rgba(0,0,0,0.12), 0 0px 0px #fff'
          }}
        >
          <span style={{ marginRight: 8 }}>₹</span>
          1.35 Crore onwards
        </div>
        <div style={{ fontWeight: 600, fontSize: '1.1rem', marginBottom: 8 }}>About This Property</div>
        <div style={{ display: 'flex', alignItems: 'flex-end', flexWrap: 'wrap', gap: '3rem', fontSize: '1.3rem', marginBottom: 16, justifyContent: 'flex-start' }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontWeight: 700, fontSize: '1.5rem' }}>3BHK</div>
            <div style={{ fontSize: '1rem', color: '#aaa' }}>Luxurious Apartments</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontWeight: 700, fontSize: '1.5rem' }}>6500</div>
            <div style={{ fontSize: '1rem', color: '#aaa' }}>Sq. Ft. Plot Size</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontWeight: 700, fontSize: '1.5rem' }}>G+7</div>
            <div style={{ fontSize: '1rem', color: '#aaa' }}>Floors Apartment</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontWeight: 700, fontSize: '1.5rem' }}>7+</div>
            <div style={{ fontSize: '1rem', color: '#aaa' }}>World Class Amenities</div>
          </div>
        </div>
      </div>

      {/* Brochure & Contact Buttons */}
      <div style={{ margin: '2rem auto', maxWidth: 700, display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
        <button className="about-button" onClick={() => alert('Brochure download coming soon!')}>
          DOWNLOAD BROCHURE
        </button>
        <button className="about-button" onClick={() => window.location.href = '/contact'}>
          CONTACT NOW
        </button>
      </div>

      {/* Contact Information */}
      <div style={{ maxWidth: 700, margin: '2.5rem auto 0', borderTop: '1px solid var(--divider-color, #444)', paddingTop: '2rem', color: 'var(--text-color)' }}>
        <div style={{ fontWeight: 600, marginBottom: 8, fontSize: '1.1rem' }}>Contact Information</div>
        <div style={{ marginBottom: 6 }}>Email: <a href="mailto:info@agastyabuildersanddevelopers.com" style={{ color: 'var(--link-color, #3498db)' }}>info@agastyabuildersanddevelopers.com</a></div>
        <div style={{ marginBottom: 6 }}>
          Phone : 
          <a href="tel:+917559378178" style={{ color: '#3498db', marginRight: 8 }}>+91 7559378178</a>,
          <a href="tel:+919822642423" style={{ color: '#3498db' }}>+91 9822642423</a>
        </div>
        <div>Office Hours : 10:00 AM - 10:00 PM</div>
      </div>

      {/* Description */}
      <div style={{ maxWidth: 800, margin: '4rem auto 2.5rem', fontSize: '1.1rem', lineHeight: 1.7 }}>
        <div style={{ fontWeight: 600, marginBottom: 12, fontSize: '1.1rem' }}>Description</div>
        <div>
          Experience refined living at Vishal Spandan Apartments. These modern residences feature smart architectural design, efficient layouts, and high-quality finishes that elevate everyday comfort. Each apartment is thoughtfully designed to allow abundant natural light and ventilation, offering a peaceful retreat within the city's dynamic pace. Discover the perfect blend of style, practicality, and contemporary living tailored to your lifestyle.
        </div>
      </div>

      {/* Features and Locations */}
      <div className="responsive-container">
        <div className="responsive-section">
          <div style={{ fontWeight: 600, marginBottom: 12, fontSize: '1.1rem' }}>Property Features</div>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {propertyFeatures.map((feature, idx) => (
              <li key={idx} style={{ marginBottom: 8, fontSize: '1.05rem' }}>
                <span style={{ color: '#27ae60', marginRight: 8 }}>✔</span>
                {feature}
              </li>
            ))}
          </ul>
        </div>
        <div className="responsive-section">
          <div style={{ fontWeight: 600, marginBottom: 12, fontSize: '1.1rem' }}>Nearby Locations</div>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {nearbyLocations.map((loc, idx) => (
              <li key={idx} style={{ marginBottom: 8, fontSize: '1.05rem', display: 'flex', alignItems: 'center' }}>
                <span style={{ color: 'var(--icon-color, #3498db)', marginRight: 8 }}><i className="fas fa-map-marker-alt"></i></span>
                <span style={{ flex: 1 }}>{loc.name}</span>
                <span style={{ marginLeft: 16 }}>{loc.time}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Project Timeline */}
      <div style={{ maxWidth: 700, margin: '4rem auto 2.5rem', textAlign: 'center' }}>
        <div style={{ fontWeight: 600, marginBottom: 12, fontSize: '1.1rem' }}>Project Timeline</div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem' }}>
          <i className="fas fa-calendar-alt" style={{ color: '#3498db', fontSize: '1.5rem' }}></i>
          <div style={{ fontSize: '1.2rem', color: '#27ae60', fontWeight: 600 }}>Dec 2026</div>
        </div>
      </div>

      <div className="project-highlight-section" style={{
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '2.5rem',
        maxWidth: 900,
        margin: '0 auto 3rem auto',
        padding: '2rem 0'
      }}>
        <div style={{ flex: '1 1 320px', minWidth: 260 }}>
          <h2 style={{ fontFamily: 'serif', fontWeight: 500, fontSize: '2.2rem', marginBottom: '1rem' }}>
            Elevate<br />Your Lifestyle
          </h2>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-color)' }}>
            Your dream home awaits with unmatched elegance and premium amenities.
          </p>
        </div>
        <div style={{ flex: '1 1 320px', minWidth: 260, textAlign: 'center' }}>
          <img src="/images/VishalSpandanImage1.JPG" alt="Luxury Living" style={{ width: '100%', maxWidth: 350, borderRadius: 12, boxShadow: '0 4px 24px rgba(0,0,0,0.08)', objectFit: 'cover', height: '250px' }} />
        </div>
      </div>

      {/* Second Highlight Section: Image Left, Text Right */}
      <div className="project-highlight-section" style={{
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '2.5rem',
        maxWidth: 900,
        margin: '0 auto 3rem auto',
        padding: '2rem 0'
      }}>
        <div style={{ flex: '1 1 320px', minWidth: 260, textAlign: 'center' }}>
          <img src="/images/VishalSpandanImage2.JPG" alt="Dreams with Purpose" style={{ width: '100%', maxWidth: 350, borderRadius: 12, boxShadow: '0 4px 24px rgba(0,0,0,0.08)', objectFit: 'cover', height: '250px' }} />
        </div>
        <div style={{ flex: '1 1 320px', minWidth: 260 }}>
          <h2 style={{ fontFamily: 'serif', fontWeight: 500, fontSize: '2.2rem', marginBottom: '1rem' }}>
            Dreams with Purpose
          </h2>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-color)' }}>
            Crafting exceptional homes where thoughtful design meets timeless comfort and modern living.
          </p>
        </div>
      </div>
    </div>
  );
};

export default VishalSpandanProject;
