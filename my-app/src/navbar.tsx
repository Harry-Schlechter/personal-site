import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import logo from './pages/mainlogo.png'

const Navbar: React.FC = () => {
    return (
        <nav className="navbar">
            
            <ul className="navbar-links">
                <li>
                    <Link to="/"><img src={logo} alt="logo"className="logo" /></Link>
                </li>
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
                    <Link to="https://drive.google.com/file/d/1ITY7qTG_ItwjhBAfY01bTFWumbVXmLd1/view?usp=sharing">Resume</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;