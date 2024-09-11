import React from 'react';
import './footer.css';
import { FaEnvelope, FaLinkedin, FaGithub, FaFileAlt } from 'react-icons/fa'
import logo from './pages/mainlogo.png'
import { Link } from 'react-router-dom';


const Footer: React.FC = () => {
    return (
        <>
        <div className="footer-container">
            <div className="pages-container">

            </div>
            <div className="social-container">
                <a className="footLink" href="mailto:harry.schlechter391@gmail.com">
                    <FaEnvelope size={30} color="white"/>
                </a>
                <a className="footLink"href="https://www.linkedin.com/in/harryschlechter/">
                    <FaLinkedin size={30} color="white"/>
                </a>
                <Link className="footLink"to="/"><img src={logo} alt="logo"className="logo1" /></Link>
                <a className="footLink"href="https://github.com/Harry-Schlechter">
                    <FaGithub size={30} color="white"/>
                </a>
                <a className="footLink"href="https://drive.google.com/file/d/1LqpB3Q_GpPeVW8e7OyDNP4mckmMO7IUG/view?usp=sharing">
                    <FaFileAlt size={30} color="white"/>
                </a>
            </div>
        </div>
        <p className="copy">&copy; 2024 Harry Schlechter</p>
        </>
    )
};

export default Footer;