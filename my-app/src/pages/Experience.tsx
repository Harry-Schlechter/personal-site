import './Experience.css';
import bny from './bny.jpeg'
import wabtec from './wabtec.jpeg'
import pitt from './pittSCI.jpeg'
import healfast from './healfast.jpeg'
import tls from './TLS_new.jpeg'
import { FaAngleRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import usePageTitle from '../hooks/usePageTitle';

const Experience: React.FC = () => {
    usePageTitle('Experience');

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
                    <img src={tls} alt="Trinity Life Sciences"className="compLogo"></img>
                    <h2 className="compTitle">Trinity Life Sciences</h2>
                    <p className="date">03/26-pres</p>
                </div>
                <div className="midBox">
                    <h2 className="compRole">Senior Software Engineer</h2>
                </div>
                <div className="botBox">
                    <ul>
                        <li>Led technical delivery for a cross-functional team including a frontend engineer and intern — managing scoping, product alignment, and prioritization across concurrent initiatives</li>
                        <li>Coordinated integration of 50+ AI pharma advisors into a unified client platform — aligning technical requirements across 15+ solution owners spanning client, client engineering, and product teams</li>
                        <li>Competed in a major pharma client vendor hackathon — built 5 production-ready LangChain agents and 30+ reusable tools integrating live client data end-to-end in under one month</li>
                        <li>Designed and shipped a configurable dashboard builder enabling non-technical business users to create and deploy custom dashboards within the platform, including a code widget framework for technical teams</li>
                        <li>Drove platform evolution toward a generalized agentic architecture using LangChain deep agents, designing modular interfaces for external engineering teams to plug in custom AI workflows without core platform changes</li>
                        <li>Built a configurable external agent response builder and established MCP connections to standardize AI model interfacing across the platform</li>
                        <li>Drove company-wide AI adoption by authoring AGENTS.md engineering standards and leading team enablement on LLM tooling</li>
                    </ul>
                </div>
            </div>
            <div className="expBox">
                <div className="topBox">
                    <img src={tls} alt="Trinity Life Sciences"className="compLogo"></img>
                    <h2 className="compTitle">Trinity Life Sciences</h2>
                    <p className="date">04/25-03/26</p>
                </div>
                <div className="midBox">
                    <h2 className="compRole">Software Engineer</h2>
                </div>
                <div className="botBox">
                    <ul>
                        <li>Developed core systems of an enterprise AI platform that evolved into a multi-agent system deployed to major pharmaceutical clients</li>
                        <li>Served as forward-deployed engineer for a top pharma client — ported the platform to their environment, trained a team of offshore engineers, and delivered a stable production release</li>
                        <li>Designed agent-to-agent communication protocols that allowed internal data science teams to plug their own AI models into the platform, expanding its capabilities without core code changes</li>
                        <li>Architected a dynamic application configuration system giving clients full control over how users navigate, interact with, and launch AI-powered workflows</li>
                        <li>Created an internal AI agent in Microsoft Teams that automated platform support, cutting error discovery time from 15 minutes to 15 seconds</li>
                        <li>Owned internal platform support after a senior engineer's departure, becoming the team's domain expert</li>
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
                        <li>Contributed to a global payments platform processing over $3 trillion in daily transaction volume</li>
                        <li>Developed enhancements to the payment enrichment pipeline within a large-scale microservices-to-monolith architecture</li>
                        <li>Maintained 80%+ test coverage on all new code</li>
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
                        <li>Engineered a BigQuery data pipeline for marketing and ad analytics, designing schemas and automated ingestion workflows</li>
                        <li>Developed new product and landing pages for the company's Shopify storefront</li>
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
                        <li>Front-end engineer on a next-gen global payments platform processing trillions in daily volume</li>
                        <li>Implemented real-time validation and transaction management features, reducing manual intervention in payment workflows</li>
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
                        <li>Reduced security operations response time from 10 minutes to 30 seconds by automating incident response, ServiceNow task creation, and Okta queries</li>
                        <li>Built a Microsoft Teams interface using JSON adaptive cards and Splunk SOAR to enable the SecOps team to execute security operations directly from chat</li>
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
                        <li>Developed a machine learning model in Python to predict internal shipping costs with 95% accuracy, used for quarterly financial planning</li>
                        <li>Built an Angular UI and Node.js API for flat-screen factory displays and admin management</li>
                        <li>Led the intern operations committee</li>
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
                        <li>Led weekly recitations, held office hours, and provided 1:1 mentoring across three CS courses</li>
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