import React, { useState } from 'react';
import './Contact.css';
import { FaEnvelope, FaLinkedin, FaGithub, FaMapMarkerAlt } from 'react-icons/fa';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    projectType: '',
    budget: '',
    message: '',
    timeline: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log('Form submitted:', formData);
    alert('Thank you for your inquiry! I\'ll get back to you within 24 hours.');
  };

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="hero-content">
          <h1 className="shimmer-title">Get In Touch</h1>
          <p className="hero-subtitle">
            Let's discuss your project and bring your vision to life
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <div className="contact-container">
          <div className="contact-grid">
            {/* Contact Info */}
            <div className="contact-info">
              <h2>Let's Work Together</h2>
              <p className="info-text">
                I'm always excited to hear about new projects and opportunities. 
                Whether you have a clear vision or just an idea, let's start a conversation.
              </p>

              <div className="contact-methods">
                <a href="mailto:harryschlechter03@gmail.com" className="contact-method">
                  <div className="method-icon">
                    <FaEnvelope />
                  </div>
                  <div className="method-info">
                    <h3>Email</h3>
                    <p>harryschlechter03@gmail.com</p>
                  </div>
                </a>

                <a href="https://www.linkedin.com/in/harryschlechter/" target="_blank" rel="noopener noreferrer" className="contact-method">
                  <div className="method-icon">
                    <FaLinkedin />
                  </div>
                  <div className="method-info">
                    <h3>LinkedIn</h3>
                    <p>Connect with me</p>
                  </div>
                </a>

                <a href="https://github.com/harryschlechter" target="_blank" rel="noopener noreferrer" className="contact-method">
                  <div className="method-icon">
                    <FaGithub />
                  </div>
                  <div className="method-info">
                    <h3>GitHub</h3>
                    <p>View my code</p>
                  </div>
                </a>

                <div className="contact-method">
                  <div className="method-icon">
                    <FaMapMarkerAlt />
                  </div>
                  <div className="method-info">
                    <h3>Location</h3>
                    <p>Pittsburgh, PA</p>
                  </div>
                </div>
              </div>

              <div className="response-time">
                <div className="response-badge">
                  <span className="pulse-dot"></span>
                  <span>Typically responds within 24 hours</span>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="contact-form-wrapper">
              <form className="contact-form" onSubmit={handleSubmit}>
                <h2>Send Me a Message</h2>
                
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Your name"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Email *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="phone">Phone</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="(123) 456-7890"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="company">Company</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Your company"
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="projectType">Project Type</label>
                    <select
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                    >
                      <option value="">Select a type</option>
                      <option value="new-website">New Website</option>
                      <option value="redesign">Website Redesign</option>
                      <option value="ecommerce">E-Commerce</option>
                      <option value="web-app">Web Application</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="budget">Budget Range</label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                    >
                      <option value="">Select a range</option>
                      <option value="1000-2500">$1,000 - $2,500</option>
                      <option value="2500-5000">$2,500 - $5,000</option>
                      <option value="5000-10000">$5,000 - $10,000</option>
                      <option value="10000+">$10,000+</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="timeline">Desired Timeline</label>
                  <select
                    id="timeline"
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleChange}
                  >
                    <option value="">Select a timeline</option>
                    <option value="asap">ASAP</option>
                    <option value="1-2-months">1-2 Months</option>
                    <option value="3-6-months">3-6 Months</option>
                    <option value="flexible">Flexible</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Project Details *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    placeholder="Tell me about your project, goals, and any specific requirements..."
                  />
                </div>

                <button type="submit" className="submit-button">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Why Work With Me Section */}
      <section className="why-section">
        <div className="why-container">
          <h2 className="section-title">Why Work With Me?</h2>
          <div className="why-grid">
            <div className="why-card">
              <div className="why-number">01</div>
              <h3>Personal Attention</h3>
              <p>Direct communication with me throughout the entire project—no middlemen, no confusion.</p>
            </div>
            <div className="why-card">
              <div className="why-number">02</div>
              <h3>Modern Technology</h3>
              <p>Built with cutting-edge tools and best practices for performance, security, and scalability.</p>
            </div>
            <div className="why-card">
              <div className="why-number">03</div>
              <h3>Transparent Process</h3>
              <p>Regular updates, clear communication, and no surprises. You'll know exactly what's happening.</p>
            </div>
            <div className="why-card">
              <div className="why-number">04</div>
              <h3>Post-Launch Support</h3>
              <p>I don't disappear after launch. Ongoing support to ensure your website continues to perform.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
