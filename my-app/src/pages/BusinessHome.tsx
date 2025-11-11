import React, { useEffect, useState } from 'react';
import './BusinessHome.css';
import { useNavigate } from 'react-router-dom';
import { FaCode, FaMobile, FaRocket, FaPalette } from 'react-icons/fa';
import QuoteForm from '../components/QuoteForm';

const BusinessHome: React.FC = () => {
    const navigate = useNavigate();
    const [quoteFormOpen, setQuoteFormOpen] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0); 
    }, []);

    return (
        <div className="business-home-container">
            {/* Hero Section */}
            <div className="business-hero">
                <div className="hero-badge">🚀 Custom Web Solutions</div>
                <h1 className="business-title">Harry's Custom Sites</h1>
                <p className="business-subtitle">
                    Modern, responsive websites built with cutting-edge technology
                </p>
                <p className="business-description">
                    Transform your online presence with a custom website designed specifically for your business. 
                    From sleek landing pages to full-featured web applications, I bring your vision to life.
                </p>
                <div className="cta-buttons">
                    <button className="cta-primary" onClick={() => setQuoteFormOpen(true)}>
                        Get a Quote
                    </button>
                    <button className="cta-secondary" onClick={() => navigate('/services')}>
                        View Services
                    </button>
                </div>
            </div>

            {/* Services Preview */}
            <div className="services-preview">
                <h2 className="section-title">What I Offer</h2>
                <div className="services-grid">
                    <div className="service-card">
                        <div className="service-icon">
                            <FaCode size={40} />
                        </div>
                        <h3>Custom Web Development</h3>
                        <p>Tailored websites built with React, TypeScript, and modern frameworks to meet your exact needs.</p>
                    </div>
                    <div className="service-card">
                        <div className="service-icon">
                            <FaMobile size={40} />
                        </div>
                        <h3>Mobile Optimization</h3>
                        <p>Fully responsive designs that look stunning and work flawlessly on all devices and screen sizes.</p>
                    </div>
                    <div className="service-card">
                        <div className="service-icon">
                            <FaPalette size={40} />
                        </div>
                        <h3>Modern UI/UX Design</h3>
                        <p>Beautiful, intuitive interfaces with smooth animations and engaging user experiences.</p>
                    </div>
                    <div className="service-card">
                        <div className="service-icon">
                            <FaRocket size={40} />
                        </div>
                        <h3>Fast & Scalable</h3>
                        <p>Optimized performance with clean code, ensuring your site loads quickly and grows with your business.</p>
                    </div>
                </div>
            </div>

            {/* Why Choose Me */}
            <div className="why-section">
                <h2 className="section-title">Why Work With Me?</h2>
                <div className="why-grid">
                    <div className="why-card">
                        <h3>💼 Enterprise Experience</h3>
                        <p>Software Engineer III at Trinity Life Sciences, building AI platforms for Fortune 500 clients.</p>
                    </div>
                    <div className="why-card">
                        <h3>🎨 Modern Tech Stack</h3>
                        <p>React, TypeScript, Node.js, AWS, and the latest web technologies for cutting-edge solutions.</p>
                    </div>
                    <div className="why-card">
                        <h3>📱 Responsive Design</h3>
                        <p>Every site is mobile-first, ensuring perfect display on phones, tablets, and desktops.</p>
                    </div>
                    <div className="why-card">
                        <h3>⚡ Fast Turnaround</h3>
                        <p>Efficient development process with clear communication and timely delivery.</p>
                    </div>
                </div>
            </div>

            {/* Featured Work */}
            <div className="featured-work">
                <h2 className="section-title">Recent Work</h2>
                <div className="work-showcase">
                    <div className="work-item" onClick={() => navigate('/portfolio')}>
                        <div className="work-preview">
                            <h3>BoxRooster Band Site</h3>
                            <p>Mobile-optimized website for local band</p>
                            <a href="https://boxrooster.com" target="_blank" rel="noopener noreferrer" className="work-link">
                                View Live Site →
                            </a>
                        </div>
                    </div>
                </div>
                <button className="view-portfolio-btn" onClick={() => navigate('/portfolio')}>
                    View Full Portfolio
                </button>
            </div>

            {/* CTA Section */}
            <div className="final-cta">
                <h2>Ready to Build Your Website?</h2>
                <p>Let's discuss your project and bring your vision to life.</p>
                <button className="cta-large" onClick={() => setQuoteFormOpen(true)}>
                    Get Started Today
                </button>
            </div>

            {/* Quote Form Dialog */}
            <QuoteForm open={quoteFormOpen} onClose={() => setQuoteFormOpen(false)} />
        </div>
    );
};

export default BusinessHome;
