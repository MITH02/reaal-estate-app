import React, { useState, useEffect } from 'react';
import './Contact.css';

const Contact = () => {
  const propertyOptions = [
    'Vishal Spandan - Upcoming Project',
    'Vishal Enrich - Completed',
    'Vishal Classic - Completed',
    'Vishal Elegance - Completed',
    'Vishal Pinnacle - Completed',
    'General Inquiry'
  ];

  const [formData, setFormData] = useState({
    fullName: '',
    preferredProperty: '',
    email: '',
    phoneNumber: '',
    message: '',
    budget: '',
    timeframe: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const validateForm = () => {
    const newErrors = {};

    // Full Name validation
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    } else if (formData.fullName.length < 2) {
      newErrors.fullName = 'Name must be at least 2 characters';
    } else if (formData.fullName.length > 100) {
      newErrors.fullName = 'Name must not exceed 100 characters';
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Phone Number validation
    const phoneRegex = /^[+]?[\d\s\-\(\)]{10,15}$/;
    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = 'Phone number is required';
    } else if (!phoneRegex.test(formData.phoneNumber.replace(/\s/g, ''))) {
      newErrors.phoneNumber = 'Please enter a valid phone number';
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    } else if (formData.message.length > 500) {
      newErrors.message = 'Message must not exceed 500 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch('https://agastyabuilder-elci.onrender.com/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        setSubmitSuccess(true);
        setFormData({
          fullName: '',
          preferredProperty: '',
          email: '',
          phoneNumber: '',
          message: '',
          budget: '',
          timeframe: ''
        });
        setTimeout(() => setSubmitSuccess(false), 5000);
      } else {
        throw new Error('Failed to submit form');
      }
    } catch (error) {
      setErrors({ submit: 'Failed to submit form. Please try again later.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: '📍',
      title: 'Visit Our Office',
      primary: 'BPCL Petrol pump, Matey Chowak',
      secondary: 'Maharashtra 440010, India',
      action: 'Get Directions'
    },
    {
      icon: '📞',
      title: 'Call Us',
      primary: '+91 7559378178',
      secondary: '+91 9822642423',
      action: 'Call Now'
    },
    {
      icon: '✉️',
      title: 'Email Us',
      primary: 'info@agastyabuildersanddevelopers.com',
      secondary: 'Response within 24 hours',
      action: 'Send Email'
    }
  ];

  const features = [
    { icon: '🏠', title: 'Property Tours', description: 'Schedule personalized site visits' },
    { icon: '💼', title: 'Expert Consultation', description: 'Professional guidance & advice' },
    { icon: '📋', title: 'Documentation Help', description: 'Complete paperwork assistance' },
    { icon: '🔒', title: 'Secure Investment', description: 'Transparent & trusted process' }
  ];

  const budgetRanges = [
    'Under ₹30 Lakhs',
    '₹30 - ₹50 Lakhs',
    '₹50 - ₹80 Lakhs',
    '₹80 Lakhs - ₹1 Crore',
    'Above ₹1 Crore'
  ];

  const timeframes = [
    'Immediately',
    'Within 3 months',
    'Within 6 months',
    'Within 1 year',
    'Just exploring'
  ];

  return (
    <div className="main-content contact-page">
      {/* Hero Section */}
      <section className="hero-section" style={{
        background: 'linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%)',
        minHeight: '50vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'var(--text-inverse)',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
        padding: 'var(--space-8) 0'
      }}>
        <div className="container">
          <h1 className={`hero-title ${isVisible ? 'animate-fade-in' : ''}`}>
            Get In Touch
          </h1>
          <p className={`hero-subtitle ${isVisible ? 'animate-slide-in-left' : ''}`}>
            Ready to start your journey? We're here to help you find your perfect home
          </p>
          
          {/* Quick Stats */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: 'var(--space-8)',
            marginTop: 'var(--space-8)',
            flexWrap: 'wrap'
          }}>
            <div className="stat-badge">
              <div style={{ fontSize: 'var(--text-2xl)', fontWeight: '700' }}>24/7</div>
              <div style={{ fontSize: 'var(--text-sm)', opacity: '0.9' }}>Support</div>
            </div>
            <div className="stat-badge">
              <div style={{ fontSize: 'var(--text-2xl)', fontWeight: '700' }}>&lt;24hrs</div>
              <div style={{ fontSize: 'var(--text-sm)', opacity: '0.9' }}>Response</div>
            </div>
            <div className="stat-badge">
              <div style={{ fontSize: 'var(--text-2xl)', fontWeight: '700' }}>100%</div>
              <div style={{ fontSize: 'var(--text-sm)', opacity: '0.9' }}>Secure</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information & Form Section */}
      <section className="section">
        <div className="container">
          <div className="grid grid-2 gap-8 items-start">
            {/* Contact Information */}
            <div>
              <div className="section-header" style={{ textAlign: 'left', marginBottom: 'var(--space-8)' }}>
                <h2 className="section-title" style={{ fontSize: 'var(--text-3xl)' }}>
                  Let's Connect
                </h2>
                <p className="section-subtitle">
                  We're here to help you every step of the way. Reach out to us through any of these channels.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="contact-info-grid">
                {contactInfo.map((info, index) => (
                  <div key={index} className="contact-info-card">
                    <div className="contact-icon">
                      {info.icon}
                    </div>
                    <div className="contact-details">
                      <h3>{info.title}</h3>
                      <p className="contact-primary">{info.primary}</p>
                      <p className="contact-secondary">{info.secondary}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Features */}
              <div style={{ marginTop: 'var(--space-8)' }}>
                <h3 style={{ fontSize: 'var(--text-xl)', fontWeight: '600', marginBottom: 'var(--space-4)', color: 'var(--text-primary)' }}>
                  Why Choose Us
                </h3>
                <div className="features-grid">
                  {features.map((feature, index) => (
                    <div key={index} className="feature-card">
                      <div className="feature-icon">{feature.icon}</div>
                      <div>
                        <h4>{feature.title}</h4>
                        <p>{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="contact-form-container">
              {submitSuccess ? (
                <div className="success-message">
                  <div style={{ fontSize: 'var(--text-5xl)', marginBottom: 'var(--space-4)' }}>
                    ✅
                  </div>
                  <h2 style={{ fontSize: 'var(--text-2xl)', fontWeight: '600', marginBottom: 'var(--space-3)', color: 'var(--text-primary)' }}>
                    Thank You!
                  </h2>
                  <p style={{ color: 'var(--text-secondary)', fontSize: 'var(--text-lg)', lineHeight: '1.6' }}>
                    We've received your message and will get back to you within 24 hours. 
                    Our team is excited to help you find your perfect home.
                  </p>
                  <button 
                    className="btn btn-primary" 
                    onClick={() => setSubmitSuccess(false)}
                    style={{ marginTop: 'var(--space-6)' }}
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <div className="contact-form-wrapper">
                  <div className="form-header">
                    <h2>Send Us a Message</h2>
                    <p>Fill out the form below and we'll get back to you shortly</p>
                  </div>

                  <form onSubmit={handleSubmit} className="contact-form">
                    <div className="form-row">
                      <div className="form-group">
                        <label htmlFor="fullName">Full Name *</label>
                        <input
                          type="text"
                          id="fullName"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleChange}
                          className={errors.fullName ? 'error' : ''}
                          placeholder="Enter your full name"
                        />
                        {errors.fullName && <span className="error-message">{errors.fullName}</span>}
                      </div>
                      
                      <div className="form-group">
                        <label htmlFor="email">Email Address *</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className={errors.email ? 'error' : ''}
                          placeholder="Enter your email"
                        />
                        {errors.email && <span className="error-message">{errors.email}</span>}
                      </div>
                    </div>

                    <div className="form-row">
                      <div className="form-group">
                        <label htmlFor="phoneNumber">Phone Number *</label>
                        <input
                          type="tel"
                          id="phoneNumber"
                          name="phoneNumber"
                          value={formData.phoneNumber}
                          onChange={handleChange}
                          className={errors.phoneNumber ? 'error' : ''}
                          placeholder="+91 XXXXX XXXXX"
                        />
                        {errors.phoneNumber && <span className="error-message">{errors.phoneNumber}</span>}
                      </div>
                      
                      <div className="form-group">
                        <label htmlFor="preferredProperty">Interested In</label>
                        <select
                          id="preferredProperty"
                          name="preferredProperty"
                          value={formData.preferredProperty}
                          onChange={handleChange}
                        >
                          <option value="">Select a property</option>
                          {propertyOptions.map((property) => (
                            <option key={property} value={property}>
                              {property}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="form-row">
                      <div className="form-group">
                        <label htmlFor="budget">Budget Range</label>
                        <select
                          id="budget"
                          name="budget"
                          value={formData.budget}
                          onChange={handleChange}
                        >
                          <option value="">Select budget range</option>
                          {budgetRanges.map((range) => (
                            <option key={range} value={range}>
                              {range}
                            </option>
                          ))}
                        </select>
                      </div>
                      
                      <div className="form-group">
                        <label htmlFor="timeframe">Purchase Timeframe</label>
                        <select
                          id="timeframe"
                          name="timeframe"
                          value={formData.timeframe}
                          onChange={handleChange}
                        >
                          <option value="">Select timeframe</option>
                          {timeframes.map((time) => (
                            <option key={time} value={time}>
                              {time}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="form-group">
                      <label htmlFor="message">Message *</label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows="4"
                        className={errors.message ? 'error' : ''}
                        placeholder="Tell us about your requirements, questions, or any specific details..."
                      />
                      {errors.message && <span className="error-message">{errors.message}</span>}
                      <div className="character-count">
                        {formData.message.length}/500 characters
                      </div>
                    </div>

                    {errors.submit && (
                      <div className="error-message" style={{ textAlign: 'center', marginBottom: 'var(--space-4)' }}>
                        {errors.submit}
                      </div>
                    )}

                    <button 
                      type="submit" 
                      disabled={isSubmitting} 
                      className="submit-button"
                    >
                      {isSubmitting ? (
                        <>
                          <span className="spinner"></span>
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <span>→</span>
                        </>
                      )}
                    </button>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Map/Office Section */}
      <section className="section" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Visit Our Office</h2>
            <p className="section-subtitle">
              Come see us in person or schedule a property tour
            </p>
          </div>
          
          <div className="office-info">
            <div className="office-details">
              <h3>Agastya Builders & Developers</h3>
              <p>BPCL Petrol pump, Matey Chowak, Maharashtra 440010</p>
              <div className="office-hours">
                <h4>Office Hours</h4>
                <p>Monday - Saturday: 10:00 AM - 7:00 PM</p>
                <p>Sunday: 10:00 AM - 5:00 PM</p>
              </div>
              <button className="btn btn-primary">
                Schedule a Visit
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
