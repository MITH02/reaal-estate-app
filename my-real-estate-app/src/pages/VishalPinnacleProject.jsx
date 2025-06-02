import React from "react";

const propertyFeatures = [
  "Terrace Sit-Out Area",
  "Vastu-Complaint Design",
  "Double-Height Entrance Lobby",
  "24x7 Security",
  "Modern Architecture",
  "Children's Play Area",
  "High-Speed Lifts",
  "Ample Parking",
  "Eco-Friendly Design",
  "And More..."
];

const nearbyLocations = [
  { name: "IT Park", time: "10 Minutes" },
  { name: "Shopping Mall", time: "8 Minutes" },
  { name: "Hospital", time: "4 Minutes" },
  { name: "Airport", time: "10 Minutes" },
  { name: "Railway", time: "12 Minutes" },
  { name: "Market Area", time: "5 Minutes" },
  { name: "Metro Station", time: "9 Minutes" },
  { name: "Petrol Pump", time: "5 Minutes" }
];

const VishalPinnacleProject = () => {
  return (
    <div className="main-content" style={{ background: 'var(--background-color)', minHeight: '100vh', color: 'var(--text-color)' }}>
      {/* SOLD OUT Banner */}
      <div style={{
        width: '100%',
        background: '#e74c3c',
        color: '#fff',
        textAlign: 'center',
        fontWeight: 900,
        fontSize: '2rem',
        padding: '1rem 0',
        letterSpacing: '2px',
        borderRadius: '0 0 16px 16px',
        marginBottom: '2rem',
        boxShadow: '0 2px 8px rgba(0,0,0,0.08)'
      }}>
        SOLD OUT
      </div>
      <div className="section-padding" style={{ width: '100%', display: 'flex', justifyContent: 'center', marginTop: '2rem' }}>
        <img src="/images/buildings/building3.jpg" alt="Vishal Pinnacle Apartments" style={{ maxWidth: 400, width: '100%', borderRadius: 16, boxShadow: '0 4px 24px rgba(0,0,0,0.10)', marginBottom: '2rem', objectFit: 'cover', height: '400px' }} />
      </div>
      <h1 className="section-padding" style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--accent-color)', marginBottom: '1.5rem' }}>
        Vishal Pinnacle Apartments
      </h1>
      <h3 className="section-padding" style={{ fontWeight: 500, fontSize: '1.2rem', marginBottom: '1.5rem' }}>
        <i className="fas fa-map-marker-alt" style={{ color: 'var(--icon-color, #3498db)', marginRight: 8 }}></i>
        Plot No. 28, Indraprastha Co-operative Housing Society, Near London Street, Nagpur.   
      </h3>

      {/* Price Section */}
      <div className="section-padding" style={{ margin: '2rem auto 2.5rem', maxWidth: 700, textAlign: 'left' }}>
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
          1.25 Cr onwards
        </div>
        <div style={{ fontWeight: 600, fontSize: '1.1rem', marginBottom: 8 }}>About This Property</div>
        <div style={{ display: 'flex', alignItems: 'flex-end', flexWrap: 'wrap', gap: '3rem', fontSize: '1.3rem', marginBottom: 16, justifyContent: 'flex-start' }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontWeight: 700, fontSize: '1.5rem' }}>3BHK</div>
            <div style={{ fontSize: '1rem', color: '#aaa' }}>Luxury Apartments</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontWeight: 700, fontSize: '1.5rem' }}>5000</div>
            <div style={{ fontSize: '1rem', color: '#aaa' }}>Sq. Ft. Plot Size</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontWeight: 700, fontSize: '1.5rem' }}>G+7</div>
            <div style={{ fontSize: '1rem', color: '#aaa' }}>Floors Apartment</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontWeight: 700, fontSize: '1.5rem' }}>12+</div>
            <div style={{ fontSize: '1rem', color: '#aaa' }}>Premium Amenities</div>
          </div>
        </div>
      </div>

      {/* Brochure & Contact Buttons */}
      <div className="section-padding" style={{ margin: '2rem auto', maxWidth: 600, display: 'flex', flexDirection: 'row', gap: '1.2rem', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap' }}>
        <a
          href="/images/brochures/VishalPinnacleBrochure.pdf"
          download
          className="about-button"
          style={{ textAlign: "center", textDecoration: "none", minWidth: 120, maxWidth: 220, flex: '0 0 auto', padding: '0.7rem 1.5rem', width: 'auto' }}
        >
          DOWNLOAD BROCHURE
        </a>
        <button className="about-button" style={{ minWidth: 120, maxWidth: 220, flex: '0 0 auto', padding: '0.7rem 1.5rem', width: 'auto' }} onClick={() => window.location.href = '/contact'}>
          CONTACT NOW
        </button>
      </div>

      {/* Contact Information */}
      <div className="section-padding" style={{ maxWidth: 700, margin: '2.5rem auto 0', borderTop: '1px solid var(--divider-color, #444)', paddingTop: '2rem', color: 'var(--text-color)' }}>
        <div style={{ fontWeight: 600, marginBottom: 8, fontSize: '1.1rem' }}>Contact Information</div>
        <div style={{ marginBottom: 6 }}>Email : <a href="mailto:info@agastyabuildersanddevelopers.com" style={{ color: 'var(--link-color, #3498db)' }}>info@agastyabuildersanddevelopers.com</a></div>
        <div style={{ marginBottom: 6 }}>
          Phone : 
          <a href="tel:+917559378178" style={{ color: '#3498db', marginRight: 8 }}>+91 7559378178</a>,
          <a href="tel:+919822642423" style={{ color: '#3498db' }}>+91 9822642423</a>
        </div>
        <div>Office Hours : 10:00 AM - 10:00 PM</div>
      </div>

      {/* Description */}
      <div className="description-section section-padding" style={{ maxWidth: 800, margin: '4rem auto 2.5rem', fontSize: '1.1rem', lineHeight: 1.7 }}>
        <div style={{ fontWeight: 600, marginBottom: 12, fontSize: '1.1rem' }}>Description</div>
        <div>
          Discover a new standard of living at Vishal Pinnacle Apartments. Designed for comfort and elegance, these homes offer spacious layouts, modern amenities, and a vibrant community atmosphere. Enjoy breathtaking views, green spaces, and a lifestyle that blends luxury with convenience.
        </div>
      </div>

      {/* Features and Locations */}
      <div className="responsive-container section-padding">
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
      <div className="section-padding" style={{ maxWidth: 700, margin: '4rem auto 2.5rem', textAlign: 'center' }}>
        <div style={{ fontWeight: 600, marginBottom: 12, fontSize: '1.1rem' }}>Project Timeline</div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem' }}>
          <i className="fas fa-calendar-alt" style={{ color: '#3498db', fontSize: '1.5rem' }}></i>
          <div style={{ fontSize: '1.2rem', color: '#27ae60', fontWeight: 600 }}>Mar 2026</div>
        </div>
      </div>

      <div className="project-highlight-section section-padding" style={{
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
            Pinnacle of Living
          </h2>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-color)' }}>
            Experience the height of luxury and comfort at Vishal Pinnacle.
          </p>
        </div>
        <div style={{ flex: '1 1 320px', minWidth: 260, textAlign: 'center' }}>
          <img src="/images/VishalPinnacleImage1.jpg" alt="Vishal Pinnacle Living" style={{ width: '100%', maxWidth: 350, borderRadius: 12, boxShadow: '0 4px 24px rgba(0,0,0,0.08)', objectFit: 'cover', height: '350px' }} />
        </div>
      </div>

      {/* Second Highlight Section: Image Left, Text Right */}
      <div className="project-highlight-section section-padding" style={{
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
          <img src="/images/VishalPinnacleImage2.jpg" alt="Modern Living" style={{ width: '100%', maxWidth: 350, borderRadius: 12, boxShadow: '0 4px 24px rgba(0,0,0,0.08)', objectFit: 'cover', height: '350px' }} />
        </div>
        <div style={{ flex: '1 1 320px', minWidth: 260 }}>
          <h2 style={{ fontFamily: 'serif', fontWeight: 500, fontSize: '2.2rem', marginBottom: '1rem' }}>
            Modern Living
          </h2>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-color)' }}>
            Where every detail is designed for your comfort and convenience.
          </p>
        </div>
      </div>
    </div>
  );
};

export default VishalPinnacleProject; 
