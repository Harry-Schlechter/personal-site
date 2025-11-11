import React, { useEffect, useState } from 'react';
import './About.css';
import prof from './prof.jpeg'
import { FaEnvelope, FaLinkedin, FaGithub, FaFileAlt, FaBrain, FaCode, FaRocket} from 'react-icons/fa'                                      
import { Link } from 'react-router-dom';
import resumeLink from '../ResumeLink';


const About: React.FC = () => {
    const [activeCategory, setActiveCategory] = useState<string>('all');

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const skillCategories = {
        'Languages': ['Python', 'TypeScript', 'JavaScript', 'Java', 'SQL', 'C', 'R', 'HTML', 'CSS'],
        'Frontend': ['React', 'Next.js', 'Angular', 'Material UI', 'Responsive Design'],
        'Backend': ['Node.js', 'Django', 'FastAPI', 'Spring Boot', 'Flask'],
        'AI & ML': ['OpenAI (ChatGPT)', 'Claude', 'Llama', 'Gemini', 'GitHub Copilot', 'Prompt Engineering'],
        'Database': ['PostgreSQL', 'Oracle', 'BigQuery', 'Prisma', 'Supabase'],
        'Cloud & DevOps': ['AWS (ECS, RDS, S3, Lambda)', 'Google Cloud', 'Docker', 'Terraform', 'GitHub Workflows', 'Maven'],
        'Data & Messaging': ['Apache Airflow', 'Kafka', 'ActiveMQ', 'Redis', 'Data ETL'],
        'Tools & Testing': ['Git', 'Agile', 'Unit Testing (JUnit, Mockito, Jest)', 'Splunk']
    };

    const filterSkills = (category: string) => {
        setActiveCategory(category);
    };

    return (
        <div className="about-container">
            {/* Hero Section */}
            <div className="hero-section">
                <div className="hero-photo">
                    <div className="photo-glow"></div>
                    <img src={prof} alt="Harry Schlechter" className="hero-image" />
                </div>
                <div className="hero-content">
                    <h1 className="hero-title">Harry Schlechter</h1>
                    <p className="hero-subtitle">Software Engineer III at Trinity Life Sciences</p>
                    <div className="hero-divider"></div>
                    <div className="hero-info-grid">
                        <div className="info-item">
                            <span className="info-icon">🏫</span>
                            <span className="info-text">University of Pittsburgh Honors College</span>
                        </div>
                        <div className="info-item">
                            <span className="info-icon">📚</span>
                            <span className="info-text">B.S. Computer Science & Psychology</span>
                        </div>
                        <div className="info-item">
                            <span className="info-icon">🏠</span>
                            <span className="info-text">New York, NY</span>
                        </div>
                        <div className="info-item">
                            <span className="info-icon">📞</span>
                            <span className="info-text">(516) 816-9670</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Social Links */}
            <div className="social-links">
                <a href="mailto:harry.schlechter391@gmail.com" className="social-link">
                    <FaEnvelope size={24} />
                    <span>Email</span>
                </a>
                <a href="https://www.linkedin.com/in/harryschlechter/" className="social-link">
                    <FaLinkedin size={24} />
                    <span>LinkedIn</span>
                </a>
                <a href="https://github.com/Harry-Schlechter" className="social-link">
                    <FaGithub size={24} />
                    <span>GitHub</span>
                </a>
                <a href={resumeLink} className="social-link">
                    <FaFileAlt size={24} />
                    <span>Resume</span>
                </a>
            </div>

            {/* What I Do Section */}
            <div className="what-i-do-section">
                <h2 className="section-title">What I Do</h2>
                <div className="cards-grid">
                    <div className="feature-card ai-card">
                        <div className="card-icon">
                            <FaBrain size={40} />
                        </div>
                        <h3>Enterprise AI Engineering</h3>
                        <p>Building agentic and generative AI platforms deployed to leading pharmaceutical and life sciences clients using React, Node.js, TypeScript, AWS, and OpenAI.</p>
                    </div>
                    <div className="feature-card web-card">
                        <div className="card-icon">
                            <FaCode size={40} />
                        </div>
                        <h3>Custom Web Development</h3>
                        <p>Creating modern, responsive websites for local businesses, bands, and entrepreneurs. Mobile-optimized designs with cutting-edge tech stacks.</p>
                    </div>
                    <div className="feature-card innovation-card">
                        <div className="card-icon">
                            <FaRocket size={40} />
                        </div>
                        <h3>Continuous Innovation</h3>
                        <p>Always exploring new technologies and methodologies. From AI agents to full-stack solutions, I stay on the cutting edge of software engineering.</p>
                    </div>
                </div>
            </div>

            {/* Skills Section */}
            <div className="skills-section">
                <h2 className="section-title">Technical Skills</h2>
                <p className="section-subtitle">Hover over categories to explore • Click to filter</p>
                
                <div className="skills-categories">
                    <button 
                        className={`category-btn ${activeCategory === 'all' ? 'active' : ''}`}
                        onClick={() => filterSkills('all')}
                    >
                        All
                    </button>
                    {Object.keys(skillCategories).map((category) => (
                        <button 
                            key={category}
                            className={`category-btn ${activeCategory === category ? 'active' : ''}`}
                            onClick={() => filterSkills(category)}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                <div className="skills-grid">
                    {Object.entries(skillCategories).map(([category, skills]) => (
                        <div 
                            key={category} 
                            className={`skill-category ${activeCategory !== 'all' && activeCategory !== category ? 'hidden' : ''}`}
                        >
                            <h3 className="category-title">{category}</h3>
                            <div className="skill-pills">
                                {skills.map((skill) => (
                                    <span key={skill} className="skill-pill">{skill}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* About Me Story */}
            <div className="about-story">
                <h2 className="section-title">My Story</h2>
                
                <div className="story-card">
                    <h3>🚀 What I'm Building</h3>
                    <p>I'm a Software Engineer III at Trinity Life Sciences, where I develop enterprise-grade agentic and generative AI applications deployed to leading pharmaceutical and life sciences clients. As a full-stack engineer, I build cutting-edge AI platforms using React.js, Node.js, TypeScript, AWS, and OpenAI APIs.</p>
                </div>

                <div className="story-card">
                    <h3>🎓 Educational Background</h3>
                    <p>I graduated summa cum laude from the University of Pittsburgh's David C. Frederick Honors College with a Bachelor of Science in Computer Science and Psychology. My psychology background provides unique insights into user behavior and product design, helping me create more intuitive and effective solutions.</p>
                </div>

                <div className="story-card">
                    <h3>💼 Beyond the Day Job</h3>
                    <p>I design and develop custom websites for local businesses, bands, and entrepreneurs, combining technical expertise with creative design. Whether it's an AI-powered enterprise application or a sleek band website, I bring the same level of dedication and innovation to every project.</p>
                </div>

                <div className="story-card">
                    <h3>🎯 Personal Life</h3>
                    <p>I live in Floral Park, NY and work in the Financial District. In my free time, I like to cook, try new restaurants, travel, hike, play pick-up basketball, play poker, go to hockey games, listen to audio books, and more. I like to keep myself and my mind active.</p>
                </div>

                <div className="story-card cta-card">
                    <h3>☕ Let's Connect!</h3>
                    <p>I love meeting and talking with new people, so feel free to connect with me or contact me! Always down to have a bite and a great conversation after work in NYC!</p>
                    <div className="cta-buttons">
                        <a href="mailto:harry.schlechter391@gmail.com" className="cta-btn primary">Get In Touch</a>
                        <Link to="/experience" className="cta-btn secondary">View Experience</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;