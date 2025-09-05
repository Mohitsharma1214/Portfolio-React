import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
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

  const skillCategories = [
    {
      title: "Programming Languages",
      icon: "fas fa-code",
      color: "primary",
      skills: [
        { name: "Python", level: 95, icon: "fab fa-python" },
        { name: "C++", level: 85, icon: "fas fa-code" },
        { name: "C", level: 80, icon: "fas fa-code" }
      ]
    },
    {
      title: "AI/ML Frameworks",
      icon: "fas fa-brain",
      color: "secondary",
      skills: [
        { name: "PyTorch", level: 95, icon: "fas fa-fire" },
        { name: "TensorFlow", level: 90, icon: "fas fa-cube" },
        { name: "Scikit-learn", level: 95, icon: "fas fa-chart-line" },
        { name: "Keras", level: 85, icon: "fas fa-layer-group" },
        { name: "Hugging Face", level: 90, icon: "fas fa-robot" },
        { name: "OpenCV", level: 85, icon: "fas fa-eye" }
      ]
    },
    {
      title: "Web Frameworks & DevOps",
      icon: "fas fa-server",
      color: "accent",
      skills: [
        { name: "Docker", level: 90, icon: "fab fa-docker" },
        { name: "FastAPI", level: 90, icon: "fas fa-rocket" },
        { name: "Flask", level: 90, icon: "fas fa-flask" },
        { name: "Django", level: 85, icon: "fas fa-globe" },
        { name: "GitHub Actions", level: 85, icon: "fab fa-github" }
      ]
    },
    {
      title: "Data & Analytics",
      icon: "fas fa-chart-bar",
      color: "primary",
      skills: [
        { name: "Pandas", level: 95, icon: "fas fa-table" },
        { name: "NumPy", level: 95, icon: "fas fa-calculator" },
        { name: "Matplotlib", level: 90, icon: "fas fa-chart-area" },
        { name: "Plotly", level: 85, icon: "fas fa-chart-pie" },
        { name: "Tableau", level: 80, icon: "fas fa-chart-column" },
        { name: "Power BI", level: 75, icon: "fas fa-chart-simple" }
      ]
    }
  ];

  const certifications = [
    {
      title: "AWS Certified Machine Learning - Specialty",
      issuer: "Amazon Web Services",
      year: "2023",
      icon: "fab fa-aws"
    },
    {
      title: "TensorFlow Developer Certificate",
      issuer: "Google",
      year: "2022",
      icon: "fab fa-google"
    },
    {
      title: "Deep Learning Specialization",
      issuer: "Coursera",
      year: "2021",
      icon: "fas fa-graduation-cap"
    }
  ];

  return (
    <div className="skills">
      <div className="container">
        <motion.div 
          className="skills-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="skills-header" variants={itemVariants}>
            <h1>Technical <span className="gradient-text">Skills</span></h1>
            <p className="skills-subtitle">
              A comprehensive overview of my technical expertise and proficiency levels
            </p>
          </motion.div>

          <div className="skills-grid">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                className={`skill-category skill-category-${category.color}`}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
              >
                <div className="category-header">
                  <div className="category-icon">
                    <i className={category.icon}></i>
                  </div>
                  <h3>{category.title}</h3>
                </div>
                
                <div className="skills-list">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      className="skill-item"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                    >
                      <div className="skill-info">
                        <div className="skill-name">
                          <i className={skill.icon}></i>
                          <span>{skill.name}</span>
                        </div>
                        <span className="skill-percentage">{skill.level}%</span>
                      </div>
                      <div className="skill-bar">
                        <motion.div 
                          className="skill-progress"
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ 
                            duration: 1, 
                            delay: categoryIndex * 0.2 + skillIndex * 0.1,
                            ease: "easeOut"
                          }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div className="certifications-section" variants={itemVariants}>
            <h3>Certifications & Achievements</h3>
            <div className="certifications-grid">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  className="certification-card"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, rotateY: 5 }}
                >
                  <div className="cert-icon">
                    <i className={cert.icon}></i>
                  </div>
                  <div className="cert-content">
                    <h4>{cert.title}</h4>
                    <p>{cert.issuer}</p>
                    <span className="cert-year">{cert.year}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div className="skills-summary" variants={itemVariants}>
            <div className="summary-stats">
              <div className="stat-item">
                <div className="stat-number">1.5+</div>
                <div className="stat-label">Years Experience</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">25+</div>
                <div className="stat-label">Technologies</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">15+</div>
                <div className="stat-label">Projects</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">5+</div>
                <div className="stat-label">Certifications</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;