import React from 'react';
import './Services.css';
import { FaCode, FaMobile, FaPalette, FaRocket, FaSearch, FaShoppingCart, FaCog, FaHeadset } from 'react-icons/fa';

const Services: React.FC = () => {
  const services = [
    {
      icon: <FaCode />,
      title: "Custom Web Development",
      description: "Tailored websites built from scratch to match your unique vision and business needs.",
      features: [
        "React & TypeScript",
        "Responsive Design",
        "Modern UI/UX",
        "Performance Optimized"
      ]
    },
    {
      icon: <FaMobile />,
      title: "Mobile-First Design",
      description: "Beautiful, responsive websites that work flawlessly on all devices and screen sizes.",
      features: [
        "Mobile Optimized",
        "Cross-Browser Compatible",
        "Touch-Friendly",
        "Fast Loading"
      ]
    },
    {
      icon: <FaPalette />,
      title: "UI/UX Design",
      description: "Stunning interfaces with smooth animations and intuitive user experiences.",
      features: [
        "Modern Aesthetics",
        "Brand Consistency",
        "User-Centric",
        "Accessibility Focused"
      ]
    },
    {
      icon: <FaRocket />,
      title: "Performance & Speed",
      description: "Lightning-fast websites optimized for speed, SEO, and user engagement.",
      features: [
        "SEO Optimized",
        "Fast Load Times",
        "Clean Code",
        "Best Practices"
      ]
    },
    {
      icon: <FaSearch />,
      title: "SEO & Analytics",
      description: "Get found online with search engine optimization and comprehensive analytics.",
      features: [
        "Google Analytics",
        "SEO Setup",
        "Performance Tracking",
        "Conversion Optimization"
      ]
    },
    {
      icon: <FaShoppingCart />,
      title: "E-Commerce Solutions",
      description: "Complete online store solutions with secure payments and inventory management.",
      features: [
        "Shopping Cart",
        "Secure Payments",
        "Product Management",
        "Order Tracking"
      ]
    },
    {
      icon: <FaCog />,
      title: "Maintenance & Support",
      description: "Ongoing maintenance, updates, and technical support to keep your site running smoothly.",
      features: [
        "Regular Updates",
        "Bug Fixes",
        "Security Patches",
        "24/7 Support"
      ]
    },
    {
      icon: <FaHeadset />,
      title: "Consultation & Strategy",
      description: "Expert guidance on web strategy, technology choices, and digital transformation.",
      features: [
        "Technology Consulting",
        "Architecture Planning",
        "Best Practices",
        "Strategic Roadmap"
      ]
    }
  ];

  const process = [
    {
      step: "01",
      title: "Discovery",
      description: "We'll discuss your vision, goals, and requirements to understand what you need."
    },
    {
      step: "02",
      title: "Planning",
      description: "I'll create a detailed plan, wireframes, and timeline for your project."
    },
    {
      step: "03",
      title: "Design",
      description: "Beautiful mockups and designs that bring your vision to life."
    },
    {
      step: "04",
      title: "Development",
      description: "Clean, efficient code built with modern technologies and best practices."
    },
    {
      step: "05",
      title: "Testing",
      description: "Rigorous testing across devices and browsers to ensure quality."
    },
    {
      step: "06",
      title: "Launch",
      description: "Deployment to production with monitoring and post-launch support."
    }
  ];

  return (
    <div className="services-page">
      {/* Hero Section */}
      <section className="services-hero">
        <div className="hero-content">
          <h1 className="shimmer-title">Services</h1>
          <p className="hero-subtitle">
            Comprehensive web development services tailored to your needs
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="services-section">
        <div className="services-container">
          <h2 className="section-title">What I Offer</h2>
          <div className="services-grid">
            {services.map((service, index) => (
              <div className="service-card" key={index}>
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p className="service-description">{service.description}</p>
                <ul className="service-features">
                  {service.features.map((feature, idx) => (
                    <li key={idx}>
                      <span className="feature-bullet">→</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="process-section">
        <div className="process-container">
          <h2 className="section-title">My Process</h2>
          <p className="process-subtitle">
            A streamlined approach to bring your project from concept to reality
          </p>
          <div className="process-timeline">
            {process.map((item, index) => (
              <div className="process-step" key={index}>
                <div className="step-number">{item.step}</div>
                <div className="step-content">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="services-cta">
        <div className="cta-content">
          <h2>Ready to Start Your Project?</h2>
          <p>Let's discuss how I can help bring your vision to life</p>
          <div className="cta-buttons">
            <a href="/contact" className="cta-button primary">Get In Touch</a>
            <a href="/pricing" className="cta-button secondary">View Pricing</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
