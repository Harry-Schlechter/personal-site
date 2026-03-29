import React, { useCallback, useEffect, useRef, useState } from 'react';
import './navbar.css';
import logo from './pages/mainlogo.png';
import { FaBars } from 'react-icons/fa';
import { useMode } from './context/ModeContext';
import ModeToggle from './components/ModeToggle';
import { Link, useLocation } from 'react-router-dom';
import resumeLink from './ResumeLink';

const Navbar: React.FC = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const navRef = useRef<HTMLDivElement>(null);
  const { mode } = useMode();
  const location = useLocation();

  const toggleNav = () => setIsNavOpen(!isNavOpen);

  const handleClickOutside = useCallback((event: { target: any }) => {
    if (navRef.current && !navRef.current.contains(event.target)) {
      setIsNavOpen(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [handleClickOutside]);

  // Track active section on scroll (personal mode only)
  useEffect(() => {
    if (mode !== 'personal' || location.pathname !== '/') return;
    
    const sections = ['hero', 'about', 'dashboard', 'skills', 'experience', 'projects', 'connect'];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [mode, location.pathname]);

  const scrollTo = (id: string) => {
    setIsNavOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleLinkClick = () => setIsNavOpen(false);

  const personalLinks = [
    { id: 'about', label: 'About' },
    { id: 'dashboard', label: 'Live' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'connect', label: 'Connect' },
  ];

  return (
    <nav className="navbar" ref={navRef}>
      <div className="navbar-left">
        {mode === 'personal' ? (
          <a href="#hero" onClick={(e) => { e.preventDefault(); scrollTo('hero'); }}>
            <img src={logo} alt="logo" className="logo" />
          </a>
        ) : (
          <Link to="/" onClick={handleLinkClick}>
            <img src={logo} alt="logo" className="logo" />
          </Link>
        )}
        <ModeToggle />
      </div>
      <div className="toggle-button" onClick={toggleNav}>
        <FaBars />
      </div>
      <ul className={`navbar-links ${isNavOpen ? 'active' : ''}`}>
        {mode === 'personal' ? (
          personalLinks.map((link) => (
            <li key={link.id} className={`under ${activeSection === link.id ? 'active-link' : ''}`}>
              <a href={`#${link.id}`} onClick={(e) => { e.preventDefault(); scrollTo(link.id); }}>
                {link.label}
              </a>
            </li>
          ))
        ) : (
          <>
            <li className="under"><Link to="/services" onClick={handleLinkClick}>Services</Link></li>
            <li className="under"><Link to="/portfolio" onClick={handleLinkClick}>Portfolio</Link></li>
            <li className="under"><Link to="/pricing" onClick={handleLinkClick}>Pricing</Link></li>
            <li className="under"><Link to="/contact" onClick={handleLinkClick}>Contact</Link></li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
