import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Home = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

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

  const skills = ['AI & ML', 'Computer Vision', 'NLP', 'Deep Learning', 'Python', 'TensorFlow'];

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero-section">
        {/* Animated background */}
        <div className="bg-animation">
          <div className="floating-shapes">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className={`shape shape-${i + 1}`}
                animate={{
                  x: [0, 100, 0],
                  y: [0, -100, 0],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 10 + i * 2,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
            ))}
          </div>
        </div>

        <div className="container">
          <motion.div
            className="hero-content"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div className="hero-text" variants={itemVariants}>
              <motion.h1
                className="hero-title"
                variants={itemVariants}
              >
                Hi, I'm <span className="gradient-text">Mohit Sharma</span>
              </motion.h1>

              <motion.div
                className="hero-subtitle"
                variants={itemVariants}
              >
                <span className="typing-text">AI Developer & Data Scientist</span>
              </motion.div>

              <motion.p
                className="hero-description"
                variants={itemVariants}
              >
                Passionate about building intelligent systems that solve real-world problems.
                Specializing in Computer Vision, NLP, and Generative AI with expertise in
                end-to-end ML pipelines and MLOps.
              </motion.p>

              <motion.div
                className="hero-skills"
                variants={itemVariants}
              >
                {skills.map((skill, index) => (
                  <motion.span
                    key={skill}
                    className="skill-tag"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1 + index * 0.1 }}
                    whileHover={{ scale: 1.1 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>

              <motion.div
                className="hero-actions"
                variants={itemVariants}
              >
                <Link to="/projects" className="btn btn-primary">
                  <i className="fas fa-rocket"></i>
                  View My Work
                </Link>
                <Link to="/contact" className="btn btn-secondary">
                  <i className="fas fa-envelope"></i>
                  Get In Touch
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              className="hero-visual"
              variants={itemVariants}
            >
              <motion.div
                className="profile-container"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="profile-image">
                  <motion.div
                    className="profile-ring"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  />
                  <div className="profile-avatar">
                    <img
                      src="/images/profile-avatar.png"
                      alt="Mohit Sharma - AI Developer"
                      className="profile-img"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    <i className="fas fa-user-astronaut fallback-icon"></i>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="floating-icons"
                style={{
                  x: mousePosition.x * 0.02,
                  y: mousePosition.y * 0.02,
                }}
              >
                <div className="icon-item icon-1"><i className="fab fa-python"></i></div>
                <div className="icon-item icon-2"><i className="fas fa-brain"></i></div>
                <div className="icon-item icon-3"><i className="fas fa-robot"></i></div>
                <div className="icon-item icon-4"><i className="fas fa-chart-line"></i></div>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            className="scroll-indicator"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
            onClick={() => {
              const aboutSection = document.getElementById('about-preview');
              if (aboutSection) {
                aboutSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            <motion.div
              className="scroll-arrow"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <i className="fas fa-chevron-down"></i>
            </motion.div>
            <span>Scroll to explore</span>
          </motion.div>
        </div>
      </section>

      {/* About Preview Section */}
      <motion.section
        id="about-preview"
        className="about-preview-section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container">
          <div className="preview-content">
            <motion.div
              className="preview-text"
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2>About My Journey</h2>
              <p>
                From an AI/ML intern to a Data Scientist at HairScope, I've been on an incredible
                journey of growth and innovation. Specializing in computer vision and deep learning,
                I've contributed to cutting-edge solutions in healthcare AI.
              </p>
              <div className="preview-stats">
                <div className="stat">
                  <span className="stat-number">1.5+</span>
                  <span className="stat-label">Years Experience</span>
                </div>
                <div className="stat">
                  <span className="stat-number">15+</span>
                  <span className="stat-label">Projects</span>
                </div>
                <div className="stat">
                  <span className="stat-number">3</span>
                  <span className="stat-label">Roles at HairScope</span>
                </div>
              </div>
              <Link to="/about" className="btn btn-secondary">
                <i className="fas fa-user"></i>
                Learn More About Me
              </Link>
            </motion.div>

            <motion.div
              className="preview-visual"
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="tech-showcase">
                <div className="tech-item">
                  <i className="fab fa-python"></i>
                  <span>Python</span>
                </div>
                <div className="tech-item">
                  <i className="fas fa-brain"></i>
                  <span>Deep Learning</span>
                </div>
                <div className="tech-item">
                  <i className="fas fa-eye"></i>
                  <span>Computer Vision</span>
                </div>
                <div className="tech-item">
                  <i className="fas fa-robot"></i>
                  <span>AI/ML</span>
                </div>
                <div className="tech-item">
                  <i className="fab fa-docker"></i>
                  <span>MLOps</span>
                </div>
                <div className="tech-item">
                  <i className="fas fa-chart-line"></i>
                  <span>Data Science</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Quick Navigation */}
      <motion.section
        className="quick-nav-section"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container">
          <h3>Explore My Portfolio</h3>
          <div className="quick-nav-grid">
            <Link to="/skills" className="nav-card">
              <div className="nav-icon">
                <i className="fas fa-code"></i>
              </div>
              <h4>Technical Skills</h4>
              <p>Discover my expertise in AI, ML, and modern technologies</p>
            </Link>

            <Link to="/projects" className="nav-card">
              <div className="nav-icon">
                <i className="fas fa-folder-open"></i>
              </div>
              <h4>Featured Projects</h4>
              <p>Explore my work in computer vision and deep learning</p>
            </Link>

            <Link to="/contact" className="nav-card">
              <div className="nav-icon">
                <i className="fas fa-envelope"></i>
              </div>
              <h4>Get In Touch</h4>
              <p>Let's discuss opportunities and collaborations</p>
            </Link>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default Home;
