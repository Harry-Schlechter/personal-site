import './Experience.css';
import bny from './bny.jpeg'
import wabtec from './wabtec.jpeg'
import pitt from './pittSCI.jpeg'
import { FaAngleRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const Experience: React.FC = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="exp-container">
            <div className="expBoxTop">
                <h1 className="expTitle">Experience</h1>
            </div>
            <div className="expBox">
                <div className="topBox">
                    <img src={bny} alt="bny"className="compLogo"></img>
                    <h2 className="compTitle">BNY</h2>
                    <p className="date">08/24-present</p>
                </div>
                <div className="midBox">
                    <h2 className="compRole">Software Engineer</h2>
                </div>
                <div className="botBox">
                    <ul>
                        <li>Back-End engineer for global payment engine using Java Spring Boot</li>
                        <li>Helped increase traffic from legacy engine to modern payment engine by enhacing payment repair process. This allows transactions to be manually fixed and stay within modern engine</li>
                        <li>Achieved 80%+ coverage on all new code developed by writing unit tests using JUnit and Mockito</li>
                    </ul>
                </div>
            </div>
            <div className="expBox">
                <div className="topBox">
                    <img src={bny} alt="bny" className="compLogo"></img>
                    <h2 className="compTitle">BNY</h2>
                    <p className="date">06/23-08/23</p>
                </div>
                <div className="midBox">
                    <h2 className="compRole">Software Engineer Intern</h2>
                </div>
                <div className="botBox">
                    <ul>
                        <li>Collaborated on agile team for developing standalone UI for a payment platform using
                        Angular and Java Spring Boot</li>
                        <li>Created transaction cancellation capability within UI</li>
                        <li>Implemented backend logic for cancellation of underlying payments</li>
                        <li>Added validations for payments within UI for date, method of payment, etc.</li>
                    </ul>
                </div>
            </div>
            <div className="expBox">
                <div className="topBox">
                    <img src={wabtec} alt="wab" className="compLogo"></img>
                    <h2 className="compTitle">Wabtec</h2>
                    <p className="date">05/22-08/22</p>
                </div>
                <div className="midBox">
                    <h2 className="compRole">Software Engineer Intern</h2>
                </div>
                <div className="botBox">
                    <ul>
                        <li>Constructed user interface for internal business application using Angular on an agile
                        development team</li>
                        <li>Developed machine learning model using Python to predict internal shipping costs for
                        the upcoming quarter with 95% accuracy</li>
                        <li>Modified Node.js API to optimize application performance</li>
                    </ul>
                </div>
            </div>
            <div className="expBox">
                <div className="topBox">
                    <img src={wabtec} alt="wab" className="compLogo"></img>
                    <h2 className="compTitle">Wabtec</h2>
                    <p className="date">01/23-04/23</p>
                </div>
                <div className="midBox">
                    <h2 className="compRole">Security Operations Co-Op</h2>
                </div>
                <div className="botBox">
                    <ul>
                        <li>Reduced response time from 10 minutes to 30 seconds for security operations including
                        incident response and task creation in ServiceNow, playbook initiation, and Okta queries</li>
                        <li>Created UI snippet to display in Microsoft Teams using JSON adaptive cards and
                        leveraged power automate and SlunkSOAR/Python for SecOps team members to be able
                        to execute security operations within a Microsoft Teams chat</li>
                    </ul>
                </div>
            </div>
            <div className="expBox">
                <div className="topBox">
                    <img src={pitt} alt="pitt" className="compLogo"></img>
                    <h2 className="compTitle">University of Pittsburgh</h2>
                    <p className="date">01/22-04/24</p>
                </div>
                <div className="midBox">
                    <h2 className="compRole">Undergraduate Teaching Assistant</h2>
                </div>
                <div className="botBox">
                    <ul>
                        <li>UTA for Intro to Programming (CS0007), Intermediate Programming in Java (CMPINF0401), and Computer Assembly & Language (CS0447)</li>
                        <li>Assisted students in learning programming concepts to enhance learning experience by leading weekly recitation, holding office hours, and meeting with students 1:1</li>
                    </ul>
                </div>
            </div>
            <div className="linkBox">
                <Link to="/projects"><FaAngleRight size={30} color="white"/>
                        <p className="linkT">Projects</p></Link>
                </div>
        </div>
    )
};

export default Experience;