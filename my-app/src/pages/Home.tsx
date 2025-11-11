import React from 'react';
import prof from './prof.jpeg'
import './Home.css'
import { useNavigate } from 'react-router-dom'; 
import logo from './mainlogo.png'
import { useEffect } from 'react';
import { useMode } from '../context/ModeContext';
import BusinessHome from './BusinessHome';


const Home: React.FC = () => {
    const router = useNavigate();
    const { mode } = useMode();
    
    const about = () =>{
        router('/about');
    }
    
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // If business mode, show business homepage
    if (mode === 'business') {
        return (
            <div className="mode-transition-wrapper business-mode">
                <BusinessHome />
            </div>
        );
    }

    // Personal portfolio mode
    return (
        <div className="mode-transition-wrapper personal-mode">
            <div className="home-container">
                <div className="home-content">
                    <div className="image-container">
                        <img src={logo} alt="first" className="image initial" />
                        <img src={prof} alt="second" className="image transformed"/>
                    </div>
                    <h1>Harry Schlechter</h1>
                    <hr></hr>
                    <h2 className="bio">Software Engineer specializing in Agentic & Generative AI, with expertise in full-stack development and custom web solutions</h2>
                    <button className="learn" onClick={about}>Learn More</button>
                </div>
            </div>
        </div>
    );
};

export default Home;