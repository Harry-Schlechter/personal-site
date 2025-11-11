import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import logo from './pages/mainlogo.png'
import { FaBars } from 'react-icons/fa';
import resumeLink from './ResumeLink';
import { useMode } from './context/ModeContext';
import ModeToggle from './components/ModeToggle';

const Navbar: React.FC = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  const { mode } = useMode();

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  // Function to close navbar when clicked outside
  const handleClickOutside = (event: { target: any; }) => {
    if (navRef.current && !navRef.current.contains(event.target)) {
      setIsNavOpen(false);
    }
  };

  useEffect(() => {
    // Add event listener
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);

    // Cleanup event listener on component unmount
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, []);

  // Function to close nav on link click
  const handleLinkClick = () => {
    setIsNavOpen(false);
  };

  return (
    <nav className="navbar" ref={navRef}>
      <div className="navbar-left">
        <Link to="/" onClick={handleLinkClick}>
          <img src={logo} alt="logo" className="logo" />
        </Link>
        <ModeToggle />
      </div>
      <div className="toggle-button" onClick={toggleNav}>
        <FaBars />
      </div>
      <ul className={`navbar-links ${isNavOpen ? 'active' : ''}`}>
        {mode === 'personal' ? (
          // Personal mode navigation
          <>
            <li className="under">
              <Link to="/about" onClick={handleLinkClick}>
                About
              </Link>
            </li>
            <li className="under">
              <Link to="/experience" onClick={handleLinkClick}>
                Experience
              </Link>
            </li>
            <li className="under">
              <Link to="/projects" onClick={handleLinkClick}>
                Projects
              </Link>
            </li>
            <li className="under">
              <Link to={resumeLink} onClick={handleLinkClick}>
                Resume
              </Link>
            </li>
          </>
        ) : (
          // Business mode navigation
          <>
            <li className="under">
              <Link to="/services" onClick={handleLinkClick}>
                Services
              </Link>
            </li>
            <li className="under">
              <Link to="/portfolio" onClick={handleLinkClick}>
                Portfolio
              </Link>
            </li>
            <li className="under">
              <Link to="/pricing" onClick={handleLinkClick}>
                Pricing
              </Link>
            </li>
            <li className="under">
              <Link to="/contact" onClick={handleLinkClick}>
                Contact
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};


export default Navbar;