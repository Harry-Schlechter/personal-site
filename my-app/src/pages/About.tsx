import React, { useEffect } from 'react';
import './About.css';
import prof from './prof.jpeg'
import { FaEnvelope, FaLinkedin, FaGithub, FaFileAlt, FaAngleRight} from 'react-icons/fa'                                      


const About: React.FC = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="about-container">
            <div className="aboutTop">
                <p className="aboutTitle">Harry Schlechter</p>
            </div>
            <div className="about">
                <div className="left">
                    <div className="pic">
                        <img src={prof} alt="prof"className="center-top-image" />
                    </div>
                </div>
                <div className="info">

                    <p>🖥️ Software Engineer at BNY</p>
                    <p>🏫 University of Pittsburgh Honors College</p>
                    <p>📚 B.S. Computer Science & Psychology</p>
                    <p>📍 Pittsburgh, PA</p>
                    <p>🏠 Floral Park, NY</p>
                    <p>📞 (516)816-9670</p>
                </div>
            </div>
            <div className="aboutButtons">
                <div className="linkBox">
                    <a href="mailto:harry.schlechter391@gmail.com">
                        <FaEnvelope size={30} color="white"/>
                        <p className="linkT">Email</p>
                    </a>
                </div>
                <div className="linkBox">
                    <a href="https://www.linkedin.com/in/harry-schlechter">
                        <FaLinkedin size={30} color="white"/>
                        <p className="linkT">LinkedIn</p>
                    </a>
                </div>
                <div className="linkBox">
                    <a href="https://github.com/Harry-Schlechter">
                        <FaGithub size={30} color="white"/>
                        <p className="linkT">Github</p>
                    </a>
                </div>
                <div className="linkBox">
                    <a href="https://drive.google.com/file/d/1ITY7qTG_ItwjhBAfY01bTFWumbVXmLd1/view?usp=sharing">
                        <FaFileAlt size={30} color="white"/>
                        <p className="linkT">Resume</p>
                    </a>
                </div>
                </div>
            <div className="aboutExp">
                <h2 className='skillT'>My Skills</h2>
                <p className='skillDesc'>Here are the skills and techonologies I have worked with - I am a curious and fast learner, so any skill not here I am confident I can learn!</p>
                </div>
                <ul className='skills'>
                    <li className="bubble">Java</li>
                    <li className="bubble">Python</li>
                    <li className="bubble">React.js</li>
                    <li className="bubble">Angular</li>
                    <li className="bubble">Java Spring Boot</li>
                    <li className="bubble">Next.js</li>
                    <li className="bubble">C</li>
                    <li className="bubble">HTML</li>
                    <li className="bubble">CSS</li>
                    <li className="bubble">TypeScript</li>
                    <li className="bubble">JavaScript</li>
                    <li className="bubble">R</li>
                    <li className="bubble">SQA</li>
                    <li className="bubble">Git</li>
                    <li className="bubble">Node.js</li>
                    <li className="bubble">Agile</li>
                    <li className="bubble">GCP</li>
                    <li className="bubble">FastAPI</li>
                    <li className="bubble">Gemini API</li>
                    <li className="bubble">Flask</li>
                </ul>
            <div className="aboutInfo">
            <h2 className='skillT'>A Bit About Me</h2>
            <p>Hello, my name is Harry Schlechter and I am a software engineer, entrepreneur, creator, life-long learner, and more.
                   I am currently working as a full-stack software engineer at BNY in their analyst development program. I graduated summa cum laude from
                   the University of Pittsburgh's David C. Frederick Honors College with a Bachelor of Science in both computer science and psychology.
                   My psychology background gives me a unique perspective as a developer allowing me to more effectively recognize consumer and customer
                    needs, interact with others, and one day excel in a management position. I have a diverse background of full-stack development experience and skills I have acquired
                    in various roles and personal projects, which you can see on this site!</p><br></br>
                    <p>
                    On a personal note, I live in Pittsburgh, PA, and have lived here since I moved to college. I may
                    have been here for a few years, but I always love to hear new recommendations and try new things! I grew up in Floral Park, NY
                    very close to New York City, and hope to move back in the future. In my free time, I like to play pick-up basketball and soccer, run,
                    play poker, go to hockey games, read, and more. I like to keep myself and my mind active.</p><br></br>
                    <p>
                    I love meeting and talking with new people so feel free to connect with me or contact me! 
                                                                                                                                                                                                                                                                               
                    </p>
            </div>
            
                <div className="linkBox">
                    <a href="/experience">
                        <FaAngleRight size={30} color="white"/>
                        <p className="linkT">Experiences</p>
                    </a>
                </div>
            </div>
    );
};

export default About;