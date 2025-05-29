import React, { useState } from 'react';
import '../styles/Contact.css';

const Contact = () => {
  const propertyOptions = [
    'Vishal Spandan',
    'Vishal Enrich',
    'Vishal Glory',
    'Vishal Classic',
    'Vishal Elegance',
    'Vishal Pinnacle',
    'Vishal Heritage'
  ];

  const [formData, setFormData] = useState({
    fullName: '',
    preferredProperty: '',
    email: '',
    phoneNumber: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const socialLinks = {
    instagram: 'https://www.instagram.com/agastyabuilder/',
    linkedin: 'https://linkedin.com/company/your-company',
    facebook: 'https://facebook.com/your-company',
    youtube: 'https://youtube.com/your-company'
  };

  const validateForm = () => {
    const newErrors = {};

    // Full Name validation
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    } else if (formData.fullName.length > 100) {
      newErrors.fullName = 'Full name must not exceed 100 characters';
    }

    // Preferred Property validation
    if (!formData.preferredProperty.trim()) {
      newErrors.preferredProperty = 'Please select a property';
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Phone Number validation
    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = 'Phone number is required';
    } else if (formData.phoneNumber.length < 10 || formData.phoneNumber.length > 15) {
      newErrors.phoneNumber = 'Phone number must be between 10 and 15 characters';
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
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
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    try {
      // TODO: Replace with your actual API endpoint
      const response = await fetch('http://localhost:8085/api/contact', {
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
          message: ''
        });
      } else {
        throw new Error('Failed to submit form');
      }
    } catch (error) {
      setErrors({ submit: 'Failed to submit form. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="main-content">
      <div className="contact-page">
        {/* Hero Image Banner */}
        <div className="contact-hero-banner">
          <img src="/images/villa-banner.jpg" alt="Villa Banner" className="villa-hero-img" />
          <div className="contact-hero-text">
            <h1>Contact Us</h1>
            <p>Get in touch with us for your dream home</p>
          </div>
        </div>

        <div className="contact-container">
          <div className="contact-info">
            <h2>Get in Touch</h2>
            <p className="contact-intro">
              We're here to help you find your perfect property. Our team of experts is ready to assist you with any questions about our luxury apartments.
            </p>
            <div className="contact-details">
              <div className="contact-item">
                <div className="icon-wrapper">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <div>
                  <h3>Visit Our Office</h3>
                  <p>BPCL Petrol pump, Matey Chowak, Maharashtra 440010</p>
                </div>
              </div>
              <div className="contact-item">
                <div className="icon-wrapper">
                  <i className="fas fa-phone"></i>
                </div>
                <div>
                  <h3>Call Us</h3>
                  <p>+91 7559378178, +91 9822642423</p>
                  <p>Mon - Sat : 10:00 AM - 10:00 PM</p>
                </div>
              </div>
              <div className="contact-item">
                <div className="icon-wrapper">
                  <i className="fas fa-envelope"></i>
                </div>
                <div>
                  <h3>Email Us</h3>
                  <p>info@agastyabuildersanddevelopers.com</p>
                  <p>We'll respond within 24 hours</p>
                </div>
              </div>
            </div>
            <div className="contact-features">
              <div className="feature">
                <i className="fas fa-clock"></i>
                <span>24/7 Support</span>
              </div>
              <div className="feature">
                <i className="fas fa-home"></i>
                <span>Property Tours</span>
              </div>
              <div className="feature">
                <i className="fas fa-handshake"></i>
                <span>Expert Guidance</span>
              </div>
            </div>
          </div>

          <div className="contact-form-container">
            {submitSuccess ? (
              <div className="success-message">
                <h2>Thank you for contacting us!</h2>
                <p>We have received your message and will get back to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="fullName">
                    <i className="fas fa-user input-icon"></i>
                    Full Name *
                  </label>
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
                  <label htmlFor="preferredProperty">
                    <i className="fas fa-building input-icon"></i>
                    Select Property *
                  </label>
                  <select
                    id="preferredProperty"
                    name="preferredProperty"
                    value={formData.preferredProperty}
                    onChange={handleChange}
                    className={errors.preferredProperty ? 'error' : ''}
                  >
                    <option value="">Select a property</option>
                    {propertyOptions.map((property) => (
                      <option key={property} value={property}>
                        {property}
                      </option>
                    ))}
                  </select>
                  {errors.preferredProperty && <span className="error-message">{errors.preferredProperty}</span>}
                </div>
                <div className="form-group">
                  <label htmlFor="email">
                    <i className="fas fa-envelope input-icon"></i>
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={errors.email ? 'error' : ''}
                    placeholder="Enter your email address"
                  />
                  {errors.email && <span className="error-message">{errors.email}</span>}
                </div>
                <div className="form-group">
                  <label htmlFor="phoneNumber">
                    <i className="fas fa-phone input-icon"></i>
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phoneNumber"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    className={errors.phoneNumber ? 'error' : ''}
                    placeholder="Enter your phone number"
                  />
                  {errors.phoneNumber && <span className="error-message">{errors.phoneNumber}</span>}
                </div>
                <div className="form-group">
                  <label htmlFor="message">
                    <i className="fas fa-comment input-icon"></i>
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    className={errors.message ? 'error' : ''}
                    placeholder="Enter your message"
                  />
                  {errors.message && <span className="error-message">{errors.message}</span>}
                </div>
                {errors.submit && <div className="error-message">{errors.submit}</div>}
                <button type="submit" disabled={isSubmitting} className="submit-button">
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact; 