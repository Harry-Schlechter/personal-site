import './Experience.css';
import bny from './bny.jpeg'
import wabtec from './wabtec.jpeg'
import pitt from './pittSCI.jpeg'
import healfast from './healfast.jpeg'
import tls from './TLS_new.jpeg'
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
                    <img src={tls} alt="bny"className="compLogo"></img>
                    <h2 className="compTitle">Trinity Life Sciences</h2>
                    <p className="date">04/25-pres</p>
                </div>
                <div className="midBox">
                    <h2 className="compRole">Software Engineer III</h2>
                </div>
                <div className="botBox">
                    <ul>
                        <li>Helped design and build an enterprise-grade GenAI chat platform leveraged by internal stakeholders and deployed to leading pharmaceutical and life sciences clients</li>
                        <li>Developed a management app layer enabling highly customizable, enterprise-scale configuration of AI platform features, workflows, and data integrations, improving deployment speed and flexibility</li>
                        <li>Implemented custom agent-to-agent communication protocols enabling the platform to coordinate with internal platforms</li>
                        <li>Designed internal AI-agent in Microsoft Teams to automate support, cutting manual effort by over 90%</li>
                        <li>Managed and mentored an engineering intern, providing code reviews and technical guidance</li>
                    </ul>
                </div>
            </div>
            <div className="expBox">
                <div className="topBox">
                    <img src={bny} alt="bny"className="compLogo"></img>
                    <h2 className="compTitle">BNY</h2>
                    <p className="date">08/24-04/25</p>
                </div>
                <div className="midBox">
                    <h2 className="compRole">Software Engineer</h2>
                </div>
                <div className="botBox">
                    <ul>
                        <li>Back-end engineer on next-gen global payment engine</li>
                        <li>Improved transaction repair flow, reducing manual intervention across 1T+ daily payment volume</li>
                        <li>Achieved 80%+ coverage on all new code developed by writing unit tests using JUnit and Mockito</li>
                    </ul>
                </div>
            </div>
            <div className="expBox">
                <div className="topBox">
                    <img src={healfast} alt="healfast"className="compLogo"></img>
                    <h2 className="compTitle">HealFast, Inc</h2>
                    <p className="date">10/24-03/25</p>
                </div>
                <div className="midBox">
                    <h2 className="compRole">Software Engineer</h2>
                </div>
                <div className="botBox">
                    <ul>
                        <li>Part-time software engineer for fast-growing health products startup</li>
                        <li>Automated ingestion of marketing + order data into BigQuery for analytics</li>
                        <li>Designed schema and ETL processes for unified revenue reporting</li>
                        <li>Engineered new pages for company Shopify site</li>
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
                        <li>Front-End engineer on new UI for next-gen global payment platform</li>
                        <li>Built core Angular UI components for next-gen global payments platform used by enterprise clients</li>
                        <li>Implemented real-time validation and transaction management features, reducing manual intervention in payment flow</li>
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
                        <li>Reduced response time from 10 minutes to 30 seconds for security operations including incident response and task creation in ServiceNow, playbook initiation, and Okta queries</li>
                        <li>Created UI snippet to display in Microsoft Teams using JSON adaptive cards and leveraged power automate and SplunkSOAR/Python for SecOps team members to be able to execute security operations within a Microsoft Teams chat</li>
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
                        <li>Developed machine learning model using Python to predict internal shipping costs for the upcoming quarter with 95% accuracy</li>
                        <li>Constructed and designed Angular UI and Node.js API for flat-screen factory displays and admin</li>
                        <li>Served as head of operations committee for interns</li>
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