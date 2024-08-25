import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import logo from './pages/mainlogo.png'
import { FaBars } from 'react-icons/fa';

const Navbar: React.FC = () => {

     const [isNavOpen, setIsNavOpen] = useState(false);
     const navRef = useRef<HTMLDivElement>(null);

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

    return (
        <nav className="navbar" ref={navRef}>
            <div>
             <Link to="/"><img src={logo} alt="logo"className="logo" /></Link>
             </div>
             <div className="toggle-button" onClick={toggleNav}>
               <FaBars/>
            </div>
            <ul className={`navbar-links ${isNavOpen ? 'active' : ''}`}>
                <li className="under">
                    <Link to="/about">About</Link>
                </li>
                <li className="under">
                    <Link to="/experience">Experience</Link>
                </li>
                <li className="under">
                    <Link to="/projects">Projects</Link>
                </li>
                <li className="under">
                    <Link to="https://drive.google.com/file/d/1PIAy9c66_-BFrp0zysMeXF04Qs3KxfsW/view?usp=sharing">Resume</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;