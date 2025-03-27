import React, { useEffect } from 'react';
import './About.css';
import prof from './prof.jpeg'
import { FaEnvelope, FaLinkedin, FaGithub, FaFileAlt, FaAngleRight} from 'react-icons/fa'                                      
import { Link } from 'react-router-dom';
import resumeLink from '../ResumeLink';


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

                    <p>🖥️ Applicaiton Engineer at Trinity Life Sciences</p>
                    <p>🏫 University of Pittsburgh Honors College</p>
                    <p>📚 B.S. Computer Science & Psychology</p>
                    <p>🏠 New York, NY</p>
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
                    <a href={resumeLink}>
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
                    <li className="bubble">SQL</li>
                    <li className="bubble">Next.js</li>
                    <li className="bubble">C</li>
                    <li className="bubble">HTML</li>
                    <li className="bubble">CSS</li>
                    <li className="bubble">TypeScript</li>
                    <li className="bubble">JavaScript</li>
                    <li className="bubble">R</li>
                    <li className="bubble">JUnit</li>
                    <li className="bubble">Mockito</li>
                    <li className="bubble">Git</li>
                    <li className="bubble">Node.js</li>
                    <li className="bubble">Agile</li>
                    <li className="bubble">GCP</li>
                    <li className="bubble">Flask</li>
                    <li className="bubble">Maven</li>
                    <li className="bubble">ActiveMQ</li>
                    <li className="bubble">OracleDB</li>
                    <li className="bubble">Supabase</li>
                    <li className="bubble">Splunk</li>
                    <li className="bubble">SplunkSOAR</li>
                    <li className="bubble">R</li>
                    <li className="bubble">Flask</li>
                    <li className="bubble">Shopify</li>
                    <li className="bubble">BigQuery</li>
                </ul>
            <div className="aboutInfo">
            <h2 className='skillT'>A Bit About Me</h2>
            <p>Hello, my name is Harry Schlechter and I am a software engineer, entrepreneur, creator, life-long learner, and more. I'm passionate about science, healthcare, mental health, and making a positive impact.
                  I am currently working as an application engineer at Trinity Life Sciences. I work as a full-stack engineer using React.js, Node.js, Typescript, and more. I have past experience working for a large bank, BNY, and a small health products startup, HealFast, Inc. I graduated summa cum laude from
                  the University of Pittsburgh's David C. Frederick Honors College with a Bachelor of Science in both computer science and psychology.
                  My psychology background gives me a unique perspective as a developer allowing me to more effectively recognize consumer and customer
                   needs, interact with others, and one day excel in a management position. I have a diverse background of full-stack development experience and skills I have acquired
                   in various roles and personal projects, which you can see on this site!</p><br></br>
                   <p>
                   On a personal note, I live in Floral Park, NY and work in Lower Manhattan. 
In my free time, I like to cook, try new restaurants, play pick-up basketball and soccer, run, play poker, go to hockey games, read, and more. I like to keep myself and my mind active.</p><br></br>
                   <p>
                   I love meeting and talking with new people so feel free to connect with me or contact me! Always down to have a bite and a great conversation after work!
                                                                                                                                                                                                                                                                             
                   </p>
            </div>
            
                <div className="linkBox">
                <Link to="/experience"><FaAngleRight size={30} color="white"/>
                        <p className="linkT">Experiences</p></Link>
                </div>
            </div>
    );
};

export default About;