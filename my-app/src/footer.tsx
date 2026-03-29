import React from 'react';
import './footer.css';

const Footer: React.FC = () => {
    return (
        <div className="footer-container">
            <p className="copy">&copy; {new Date().getFullYear()} Harry Schlechter</p>
        </div>
    );
};

export default Footer;
