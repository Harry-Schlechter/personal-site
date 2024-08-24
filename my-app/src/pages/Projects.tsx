import React from 'react';
import flag from './flag.webp'
import emp from './emp.webp'
import heart from './hearts2.png'
import grocy from './grocy.webp'
import { FaGithub,  FaGlobe} from 'react-icons/fa';
import './Projects.css'

const Projects: React.FC = () => {
    return (
        <div className="exp-container">
            <div className="expBoxTop">
                <h1 className="expTitle">Featured Projects</h1>
            </div>
            <div className="expBox">
                <div className="topBox">
                    <img src={flag} className="compLogo"></img>
                    <h2 className="compTitle">RedFlag</h2>
                    <p className="date">02/24-present</p>
                </div>
                <div className="botBox">
                    <ul>
                        <li>Co-Founder, Project Manager, and Engineer for enterprise</li>
                        <li>Social media platform, dating app, verification API, and more</li>
                        <li>Repo is not currently available but feel free to contact me if you have any questions or are just curious</li>
                        <li>Next.jS | Supabase | Vercell | React.js | Postgres</li>
                    </ul>
                </div>
            </div>
            <div className="expBox">
                <div className="topBox">
                    <img src={emp} className="compLogo"></img>
                    <h2 className="compTitle">Employable AI</h2>
                    <p className="date">01/24-04/24</p>
                </div>
                <div className="botBox">
                    <ul>
                        <li>Generative AI term group project for cloud computing</li>
                        <li>Website that generates free, context aware cover letters in seconds with a user's resume and job description</li>
                        <li>Python | React.js | FastAPI | Netlify | GCP</li>
                    </ul>
                </div>
                <div className='projLinks'>
                    <div className="linkBoxProj2">
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
                    <img src={grocy} className="compLogo"></img>
                    <h2 className="compTitle">Easy Grocy</h2>
                    <p className="date">03/22-04/22</p>
                </div>
                <div className="botBox">
                    <ul>
                        <li>SteelHacks 2022 project winner of beginner track </li>
                        <li>Grocery app for households to manage and split groceries</li>
                        <li>Python | React.js | Flask | TypeScript</li>
                    </ul>
                </div>
                <div className="linkBoxProj">
                    <a href="https://github.com/Harry-Schlechter/EasyGrocy">
                        <FaGithub size={30} color="black"/>
                    </a>
                </div>
            </div>
            <div className="expBox">
                <div className="topBox">
                    <img src={heart} className="compLogo"></img>
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
                <div className="linkBoxProj">
                    <a href="https://github.com/Harry-Schlechter/HeartsCardGame">
                        <FaGithub size={30} color="black"/>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Projects;