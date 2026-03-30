import React, { useEffect, useState } from 'react';
import './SinglePage.css';
import prof from './prof.jpeg';
import tls from './TLS_new.jpeg';
import bny from './bny.jpeg';
import wabtec from './wabtec.jpeg';
import healfast from './healfast.jpeg';
import pitt from './pittSCI.jpeg';
import emp from './emp.webp';
import grocy from './grocy.webp';
import rooster from './rooster.png';
import heart from './hearts2.png';
import resumeLink from '../ResumeLink';
import LiveDashboard from '../components/LiveDashboard';
import { FaEnvelope, FaLinkedin, FaGithub, FaFileAlt, FaExternalLinkAlt, FaArrowDown } from 'react-icons/fa';

const SinglePage: React.FC = () => {
    const [activeSkill, setActiveSkill] = useState<string>('all');
    const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());

    useEffect(() => {
        window.scrollTo(0, 0);

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setVisibleSections((prev) => new Set(prev).add(entry.target.id));
                    }
                });
            },
            { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
        );

        document.querySelectorAll('section[id]').forEach((section) => {
            observer.observe(section);
        });

        return () => observer.disconnect();
    }, []);

    const isVisible = (id: string) => visibleSections.has(id);

    const skillCategories = {
        'Languages': ['Python', 'TypeScript', 'JavaScript', 'Java', 'SQL', 'C', 'HTML', 'CSS'],
        'Frontend': ['React', 'Next.js', 'Angular', 'Material UI'],
        'Backend': ['Node.js', 'Django', 'FastAPI', 'Spring Boot', 'Flask'],
        'AI & ML': ['OpenAI API', 'Anthropic Claude', 'LangChain', 'Llama', 'Gemini'],
        'Database': ['PostgreSQL', 'Oracle', 'BigQuery', 'Prisma', 'Supabase'],
        'Cloud & DevOps': ['AWS', 'Google Cloud', 'Docker', 'Terraform', 'GitHub Actions'],
        'Data & Messaging': ['Apache Airflow', 'Kafka', 'ActiveMQ', 'Redis'],
        'Tools': ['Git', 'Agile', 'JUnit', 'Mockito', 'Jest', 'Splunk']
    };

    const experiences = [
        {
            company: 'Trinity Life Sciences',
            logo: tls,
            roles: [
                {
                    title: 'Senior Software Engineer',
                    date: 'Mar 2026 – Present',
                    current: true,
                    bullets: []
                },
                {
                    title: 'Software Engineer',
                    date: 'Apr 2025 – Mar 2026',
                    current: false,
                    bullets: [
                        'Developed core systems of an enterprise AI platform that evolved into a multi-agent system deployed to major pharmaceutical clients',
                        'Served as forward-deployed engineer for a top pharma client — ported the platform to their environment, trained a team of offshore engineers, and delivered a stable production release',
                        'Designed agent-to-agent communication protocols that allowed internal data science teams to plug their own AI models into the platform, expanding its capabilities without core code changes',
                        'Architected a dynamic application configuration system giving clients full control over how users navigate, interact with, and launch AI-powered workflows',
                        'Created an internal AI agent in Microsoft Teams that automated platform support, cutting error discovery time from 15 minutes to 15 seconds',
                        "Owned internal platform support after a senior engineer's departure, becoming the team's domain expert"
                    ]
                }
            ]
        },
        {
            company: 'BNY',
            logo: bny,
            roles: [
                {
                    title: 'Software Engineer',
                    date: 'Aug 2024 – Apr 2025',
                    current: false,
                    bullets: [
                        'Contributed to a global payments platform processing over $3 trillion in daily transaction volume',
                        'Developed enhancements to the payment enrichment pipeline within a large-scale microservices-to-monolith architecture',
                        'Maintained 80%+ test coverage on all new code'
                    ]
                }
            ]
        },
        {
            company: 'HealFast, Inc',
            logo: healfast,
            roles: [
                {
                    title: 'Software Engineer',
                    date: 'Oct 2024 – Mar 2025',
                    current: false,
                    bullets: [
                        'Engineered a BigQuery data pipeline for marketing and ad analytics, designing schemas and automated ingestion workflows',
                        "Developed new product and landing pages for the company's Shopify storefront"
                    ]
                }
            ]
        },
        {
            company: 'BNY',
            logo: bny,
            roles: [
                {
                    title: 'Software Engineer Intern',
                    date: 'Jun 2023 – Aug 2023',
                    current: false,
                    bullets: [
                        'Front-end engineer on a next-gen global payments platform processing trillions in daily volume',
                        'Implemented real-time validation and transaction management features, reducing manual intervention in payment workflows'
                    ]
                }
            ]
        },
        {
            company: 'Wabtec',
            logo: wabtec,
            roles: [
                {
                    title: 'Security Operations Co-Op',
                    date: 'Jan 2023 – Apr 2023',
                    current: false,
                    bullets: [
                        'Reduced security operations response time from 10 minutes to 30 seconds by automating incident response, ServiceNow task creation, and Okta queries',
                        'Built a Microsoft Teams interface using JSON adaptive cards and Splunk SOAR to enable the SecOps team to execute security operations directly from chat'
                    ]
                },
                {
                    title: 'Software Engineer Intern',
                    date: 'May 2022 – Aug 2022',
                    current: false,
                    bullets: [
                        'Developed a machine learning model in Python to predict internal shipping costs with 95% accuracy, used for quarterly financial planning',
                        'Built an Angular UI and Node.js API for flat-screen factory displays and admin management',
                        'Led the intern operations committee'
                    ]
                }
            ]
        },
        {
            company: 'University of Pittsburgh',
            logo: pitt,
            roles: [
                {
                    title: 'Undergraduate Teaching Assistant',
                    date: 'Jan 2022 – Apr 2024',
                    current: false,
                    bullets: [
                        'UTA for Intro to Programming (CS0007), Intermediate Programming in Java (CMPINF0401), and Computer Assembly & Language (CS0447)',
                        'Led weekly recitations, held office hours, and provided 1:1 mentoring across three CS courses'
                    ]
                }
            ]
        }
    ];

    const projects = [
        {
            name: 'Boxrooster',
            image: rooster,
            date: '2025',
            description: 'Mobile and web optimized site for local band',
            tech: ['React', 'JavaScript', 'MUI'],
            live: 'https://boxrooster.com',
            github: 'https://github.com/Harry-Schlechter/boxrooster123'
        },
        {
            name: 'Employable AI',
            image: emp,
            date: '2024',
            description: 'AI-powered cover letter generator — upload a resume and job description, get a tailored cover letter in seconds',
            tech: ['Python', 'React', 'FastAPI', 'GCP'],
            live: 'https://employable.netlify.app/',
            github: 'https://github.com/sim1029/employable-ai-client'
        },
        {
            name: 'Easy Grocy',
            image: grocy,
            date: '2022',
            description: '1st place, SteelHacks 2022 — grocery app for households to manage and split groceries',
            tech: ['React', 'Flask', 'TypeScript'],
            github: 'https://github.com/Harry-Schlechter/EasyGrocy'
        },
        {
            name: 'Hearts Card Game',
            image: heart,
            date: '2021',
            description: 'CLI implementation of Hearts with AI opponents — my first solo project',
            tech: ['Java', 'OOP'],
            github: 'https://github.com/Harry-Schlechter/HeartsCardGame'
        }
    ];

    return (
        <div className="sp-wrapper">
            {/* ===== HERO ===== */}
            <section id="hero" className="sp-hero">
                <div className="sp-hero-content">
                    <div className="sp-hero-photo">
                        <img src={prof} alt="Harry Schlechter" />
                    </div>
                    <h1 className="sp-hero-name">Harry Schlechter</h1>
                    <p className="sp-hero-title">Senior Software Engineer</p>
                    <p className="sp-hero-subtitle">Building enterprise AI platforms at Trinity Life Sciences</p>

                    <div className="sp-hero-links">
                        <a href="mailto:harry.schlechter391@gmail.com" aria-label="Email"><FaEnvelope /></a>
                        <a href="https://www.linkedin.com/in/harryschlechter/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
                        <a href="https://github.com/Harry-Schlechter" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FaGithub /></a>
                        <a href={resumeLink} target="_blank" rel="noopener noreferrer" aria-label="Resume"><FaFileAlt /></a>
                    </div>
                    <a href="#about" className="sp-scroll-cue" aria-label="Scroll down">
                        <FaArrowDown />
                    </a>
                </div>
            </section>

            {/* ===== ABOUT ===== */}
            <section id="about" className={`sp-section sp-section-dark ${isVisible('about') ? 'sp-visible' : ''}`}>
                <h2 className="sp-section-title">About Me</h2>
                <div className="sp-about-grid">
                    <div className="sp-about-card">
                        <h3>🚀 What I Build</h3>
                        <p>Senior Software Engineer at Trinity Life Sciences, building AI platforms for pharmaceutical companies. I design multi-agent systems, lead client deployments, and own production support for the platform.</p>
                    </div>
                    <div className="sp-about-card">
                        <h3>💼 Builder Mentality</h3>
                        <p>I don't just write code at work — I build things constantly. Dyno (the chat widget on this site) is my AI life assistant built on OpenClaw with custom memory management, a Supabase database, and Telegram integration. It tracks my nutrition, manages my calendar, writes code on my repos, and nags me to journal.</p>
                    </div>
                    <div className="sp-about-card">
                        <h3>🎯 Off the Clock</h3>
                        <p>Pickup basketball four times a week. Bouldering at the climbing gym. Really like cooking. Trying to hit every good restaurant in NYC. Hockey fan, poker player, audiobook listener — always keeping my mind moving.</p>
                    </div>
                    <div className="sp-about-card">
                        <h3>🎓 Background</h3>
                        <p>B.S. in Computer Science and Psychology from the University of Pittsburgh. The psychology background gives me a lens on how people actually interact with software — something most engineers don't think about.</p>
                    </div>
                </div>
            </section>

            {/* ===== LIVE DASHBOARD ===== */}
            <section id="dashboard" className={`sp-section ${isVisible('dashboard') ? 'sp-visible' : ''}`}>
                <h2 className="sp-section-title">Harry in Real Time</h2>
                <p className="sp-dashboard-subtitle">Live data from my personal tracking system — updated daily</p>
                <LiveDashboard />
            </section>

            {/* ===== SKILLS ===== */}
            <section id="skills" className={`sp-section ${isVisible('skills') ? 'sp-visible' : ''}`}>
                <h2 className="sp-section-title">Skills</h2>
                <div className="sp-skill-filters">
                    <button className={activeSkill === 'all' ? 'active' : ''} onClick={() => setActiveSkill('all')}>All</button>
                    {Object.keys(skillCategories).map((cat) => (
                        <button key={cat} className={activeSkill === cat ? 'active' : ''} onClick={() => setActiveSkill(cat)}>{cat}</button>
                    ))}
                </div>
                <div className="sp-skills-grid">
                    {Object.entries(skillCategories).map(([category, skills]) => (
                        <div key={category} className={`sp-skill-group ${activeSkill !== 'all' && activeSkill !== category ? 'sp-hidden' : ''}`}>
                            <h3>{category}</h3>
                            <div className="sp-pills">
                                {skills.map((skill) => (
                                    <span key={skill} className="sp-pill">{skill}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* ===== EXPERIENCE ===== */}
            <section id="experience" className={`sp-section sp-section-dark ${isVisible('experience') ? 'sp-visible' : ''}`}>
                <h2 className="sp-section-title">Experience</h2>
                <div className="sp-timeline">
                    {experiences.map((exp, i) => (
                        <div key={i} className="sp-timeline-item">
                            <div className="sp-timeline-marker">
                                <img src={exp.logo} alt={exp.company} />
                            </div>
                            <div className="sp-timeline-content">
                                <h3 className="sp-timeline-company">{exp.company}</h3>
                                {exp.roles.map((role, j) => (
                                    <div key={j} className={`sp-role ${role.current ? 'sp-role-current' : ''}`}>
                                        <div className="sp-role-header">
                                            <span className="sp-role-title">{role.title}</span>
                                            {role.current && <span className="sp-badge">Current</span>}
                                            <span className="sp-role-date">{role.date}</span>
                                        </div>
                                        {role.bullets.length > 0 && (
                                            <ul className="sp-role-bullets">
                                                {role.bullets.map((bullet, k) => (
                                                    <li key={k}>{bullet}</li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* ===== PROJECTS ===== */}
            <section id="projects" className={`sp-section ${isVisible('projects') ? 'sp-visible' : ''}`}>
                <h2 className="sp-section-title">Projects</h2>
                <div className="sp-projects-grid">
                    {projects.map((project, i) => (
                        <div key={i} className="sp-project-card">
                            <div className="sp-project-image">
                                <img src={project.image} alt={project.name} />
                            </div>
                            <div className="sp-project-info">
                                <div className="sp-project-header">
                                    <h3>{project.name}</h3>
                                    <span className="sp-project-date">{project.date}</span>
                                </div>
                                <p>{project.description}</p>
                                <div className="sp-project-tech">
                                    {project.tech.map((t) => (
                                        <span key={t}>{t}</span>
                                    ))}
                                </div>
                                <div className="sp-project-links">
                                    {project.live && (
                                        <a href={project.live} target="_blank" rel="noopener noreferrer">
                                            <FaExternalLinkAlt /> Live
                                        </a>
                                    )}
                                    {project.github && (
                                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                                            <FaGithub /> Code
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* ===== CONNECT ===== */}
            <section id="connect" className={`sp-section sp-section-accent ${isVisible('connect') ? 'sp-visible' : ''}`}>
                <h2 className="sp-section-title sp-title-white">Let's Connect</h2>
                <p className="sp-connect-text">Always open to meeting new people. Reach out — I'm always down for a coffee or a conversation in NYC.</p>
                <div className="sp-connect-links">
                    <a href="mailto:harry.schlechter391@gmail.com" className="sp-connect-btn">
                        <FaEnvelope /> Email Me
                    </a>
                    <a href="https://www.linkedin.com/in/harryschlechter/" target="_blank" rel="noopener noreferrer" className="sp-connect-btn">
                        <FaLinkedin /> LinkedIn
                    </a>
                    <a href="https://github.com/Harry-Schlechter" target="_blank" rel="noopener noreferrer" className="sp-connect-btn">
                        <FaGithub /> GitHub
                    </a>
                </div>
                <p className="sp-connect-note">You may hear from my AI assistant, Dyno 🦕</p>
            </section>
        </div>
    );
};

export default SinglePage;
