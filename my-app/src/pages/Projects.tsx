import React, { useEffect } from 'react';
import emp from './emp.webp'
import heart from './hearts2.png'
import grocy from './grocy.webp'
import rooster from './rooster.png'
import { FaAngleRight, FaGithub,  FaGlobe} from 'react-icons/fa';
import './Projects.css'
import resumeLink from '../ResumeLink';
import usePageTitle from '../hooks/usePageTitle';

const Projects: React.FC = () => {
    usePageTitle('Projects');

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="exp-container">
            <div className="expBoxTop">
                <h1 className="expTitle">Featured Projects</h1>
            </div>
            <div className="expBox">
                <div className="topBox">
                    <img src={rooster} alt="boxrooster"  className="compLogo"></img>
                    <h2 className="compTitle">Boxrooster</h2>
                    <p className="date">10/2025</p>
                </div>
                <div className="botBox">
                    <ul>
                        <li>Mobile and web optimized site for local band</li>
                        <li>Features responsive design and modern UI</li>
                        <li>React.js | JavaScript | MUI | Netlify</li>
                    </ul>
                </div>
                <div className='projLinks'>
                    <div className="linkBoxProj">
                        <a href="https://boxrooster.com">
                            <FaGlobe size={30} color="black"/>
                        </a>
                    </div>
                    <div className="linkBoxProj">
                        <a href="https://github.com/Harry-Schlechter/boxrooster123">
                            <FaGithub size={30} color="black"/>
                        </a>
                    </div>
                </div>
            </div>
            <div className="expBox">
                <div className="topBox">
                    <img src={emp} alt="Employable AI" className="compLogo"></img>
                    <h2 className="compTitle">Employable AI</h2>
                    <p className="date">01/24-04/24</p>
                </div>
                <div className="botBox">
                    <ul>
                        <li>AI-powered cover letter generator — upload a resume and job description, get a tailored cover letter in seconds</li>
                        <li>Built as a capstone project for cloud computing, deployed on GCP</li>
                        <li>Python | React.js | FastAPI | Netlify | GCP</li>
                    </ul>
                </div>
                <div className='projLinks'>
                    <div className="linkBoxProj">
                        <a href="https://employable.netlify.app/">
                            <FaGlobe size={30} color="black"/>
                        </a>
                    </div>
                    <div className="linkBoxProj">
                        <a href="https://github.com/sim1029/employable-ai-client">
                            <FaGithub size={30} color="black"/>
                        </a>
                    </div>
                </div>
            </div>
            <div className="expBox">
                <div className="topBox">
                    <img src={grocy}  alt="Easy Grocy" className="compLogo"></img>
                    <h2 className="compTitle">Easy Grocy</h2>
                    <p className="date">03/22-04/22</p>
                </div>
                <div className="botBox">
                    <ul>
                        <li>1st place, SteelHacks 2022 Beginner Track</li>
                        <li>Grocery app for households to manage and split groceries</li>
                        <li>Python | React.js | Flask | TypeScript</li>
                    </ul>
                </div>
                <div className='projLinks'>
                <div className="linkBoxProj">
                    <a href="https://github.com/Harry-Schlechter/EasyGrocy">
                        <FaGithub size={30} color="black"/>
                    </a>
                </div>
                </div>
            </div>
            <div className="expBox">
                <div className="topBox">
                    <img src={heart}  alt="Hearts Card Game" className="compLogo"></img>
                    <h2 className="compTitle">Hearts Card Game</h2>
                    <p className="date">12/21-01/22</p>
                </div>
                <div className="botBox">
                    <ul>
                        <li>Backend CLI version of the popular card game hearts</li>
                        <li>First personal project completed entirely alone</li>
                        <li>Java | OOP | AI</li>
                    </ul>
                </div>
                <div className='projLinks'>
                <div className="linkBoxProj">
                    <a href="https://github.com/Harry-Schlechter/HeartsCardGame">
                        <FaGithub size={30} color="black"/>
                    </a>
                </div>
                </div>
            </div>
            <div className="linkBox">
                <a href={resumeLink} target="_blank" rel="noopener noreferrer"><FaAngleRight size={30} color="white"/>
                        <p className="linkT">Resume</p></a>
            </div>
            <div className="thanks">
                <p className="thanksP">Thanks for stopping by. Let's connect.</p>
            </div>
        </div>
    );
};

export default Projects;