import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import CountingNumber from '../components/CountingNumber';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  const experiences = [
    {
      title: "Data Scientist",
      company: "HairScope",
      period: "July 2025 - Present",
      description: "Leading advanced data science initiatives, developing sophisticated ML models for hair analysis, and implementing cutting-edge AI solutions for scalp health diagnostics.",
      icon: "fas fa-chart-line"
    },
    {
      title: "Junior Associate of Technology (AI)",
      company: "Centilytics",
      period: "Jan 2025 - July 2025",
      description: "Contributed to AI technology development, enhanced machine learning pipelines, and collaborated on innovative computer vision projects for cloud security and analytics solutions.",
      icon: "fas fa-cogs"
    },
    {
      title: "AI ML Dev Intern",
      company: "HairScope",
      period: "July 2024 - Dec 2024",
      description: "Developed machine learning models for hair fall detection and segmentation, worked on deep learning algorithms, and gained hands-on experience in AI-driven healthcare solutions.",
      icon: "fas fa-graduation-cap"
    }
  ];

  const achievements = [
    { number: 15, suffix: "+", label: "Projects Completed" },
    { number: 1.5, suffix: "+", label: "Years Experience", decimals: 1 },
    { number: 3, suffix: "+", label: "Major Roles" },
    { number: 12, suffix: "+", label: "Technologies Mastered" }
  ];

  return (
    <div className="about">
      <div className="container">
        <motion.div
          className="about-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="about-header" variants={itemVariants}>
            <h1>About <span className="gradient-text">Me</span></h1>
            <p className="about-subtitle">
              Passionate AI Developer crafting intelligent solutions for tomorrow's challenges
            </p>
          </motion.div>

          <div className="about-main">
            <motion.div className="about-text" variants={itemVariants}>
              <div className="text-section">
                <h3>My Journey</h3>
                <p>
                  Hi, I'm Mohit Sharma, an AI & Data Scientist with a passion for building intelligent
                  systems that solve real-world problems. My journey in artificial intelligence began
                  during my computer science studies, where I was fascinated by the potential of
                  machines to learn and adapt.
                </p>
                <p>
                  Over the years, I've specialized in Computer Vision, Natural Language Processing,
                  and Generative AI, with extensive experience in end-to-end ML pipelines and MLOps.
                  I believe in the power of AI to transform industries and improve lives.
                </p>
              </div>

              <div className="text-section">
                <h3>What Drives Me</h3>
                <p>
                  I'm driven by curiosity and the desire to push the boundaries of what's possible
                  with AI. Whether it's developing computer vision systems that can detect diseases
                  early or creating NLP models that understand human emotions, I'm always excited
                  about the next challenge.
                </p>
              </div>

              <div className="achievements-grid">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    className="achievement-card"
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="achievement-number">
                      <CountingNumber
                        end={achievement.number}
                        suffix={achievement.suffix}
                        decimals={achievement.decimals || 0}
                        duration={2.5}
                      />
                    </div>
                    <div className="achievement-label">{achievement.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div className="about-visual" variants={itemVariants}>
              <div className="profile-card">
                <div className="profile-image-large">
                  <img
                    src="/images/profile-avatar.png"
                    alt="Mohit Sharma - Professional Photo"
                    className="profile-img"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <i className="fas fa-user-tie fallback-icon"></i>
                </div>
                <div className="profile-info">
                  <h4>Mohit Sharma</h4>
                  <p>AI Developer & Data Scientist</p>

                  <div className="profile-stats">
                    <div className="profile-stat">
                      <span className="stat-value">
                        <CountingNumber end={1.5} suffix="+" decimals={1} duration={2} />
                      </span>
                      <span className="stat-text">Years Exp</span>
                    </div>
                    <div className="profile-stat">
                      <span className="stat-value">
                        <CountingNumber end={15} suffix="+" duration={2.2} />
                      </span>
                      <span className="stat-text">Projects</span>
                    </div>
                    <div className="profile-stat">
                      <span className="stat-value">
                        <CountingNumber end={3} duration={1.8} />
                      </span>
                      <span className="stat-text">Companies</span>
                    </div>
                  </div>

                  <div className="profile-skills">
                    <h5>Core Expertise</h5>
                    <div className="skill-badges">
                      <span className="skill-badge">Computer Vision</span>
                      <span className="skill-badge">Deep Learning</span>
                      <span className="skill-badge">Python</span>
                      <span className="skill-badge">MLOps</span>
                    </div>
                  </div>

                  <div className="profile-location">
                    <i className="fas fa-map-marker-alt"></i>
                    <span>Bhopal, Madhya Pradesh, India</span>
                  </div>

                  <div className="profile-status">
                    <div className="status-dot"></div>
                    <span>Available for opportunities</span>
                  </div>

                  <div className="social-links">
                    <a href="https://www.linkedin.com/in/mohitsharmas-/" className="social-link" title="LinkedIn" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-linkedin"></i>
                    </a>
                    <a href="https://github.com/mohitsharma1214" className="social-link" title="GitHub" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-github"></i>
                    </a>
                    <a href="https://www.kaggle.com/mohitsharma12a" className="social-link" title="Kaggle" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-kaggle"></i>
                    </a>
                    <a href="https://www.instagram.com/mohitsharmas_/" className="social-link" title="Instagram" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>

                  <Link to="/contact" className="profile-cta">
                    <i className="fas fa-envelope"></i>
                    Get In Touch
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div className="experience-section" variants={itemVariants}>
            <h3>Professional Experience</h3>
            <div className="experience-timeline">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  className="experience-item"
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="experience-icon">
                    <i className={exp.icon}></i>
                  </div>
                  <div className="experience-content">
                    <h4>{exp.title}</h4>
                    <div className="experience-company">{exp.company}</div>
                    <div className="experience-period">{exp.period}</div>
                    <p>{exp.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;