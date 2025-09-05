import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

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

  const projects = [
    {
      id: 1,
      title: "Hair Fall Stage Detection",
      category: "computer-vision",
      description: "Advanced deep learning classifier to detect male & female pattern baldness stages with 95% accuracy.",
      longDescription: "Developed a comprehensive deep learning solution using ResNet and EfficientNet architectures to classify different stages of hair loss. The model processes high-resolution scalp images and provides detailed analysis of hair density patterns, helping dermatologists make accurate diagnoses.",
      technologies: ["PyTorch", "OpenCV", "ResNet", "EfficientNet", "FastAPI"],
      image: "fas fa-user-md",
      github: "#",
      demo: "#",
      status: "completed",
      metrics: {
        accuracy: "95%",
        dataset: "10K+ images",
        processing: "< 2s"
      }
    },
    {
      id: 2,
      title: "Hair Strand Segmentation",
      category: "computer-vision",
      description: "Precision Mask R-CNN model for detailed hair strand segmentation and analysis.",
      longDescription: "Engineered a state-of-the-art Mask R-CNN based model for pixel-level hair strand segmentation. The system can identify individual hair strands, measure thickness, and analyze hair health patterns for cosmetic and medical applications.",
      technologies: ["Detectron2", "Mask R-CNN", "PyTorch", "COCO API", "Docker"],
      image: "fas fa-cut",
      github: "#",
      demo: "#",
      status: "completed",
      metrics: {
        precision: "92%",
        recall: "89%",
        fps: "15 FPS"
      }
    },
    {
      id: 3,
      title: "AI Healthcare Diagnostics",
      category: "healthcare",
      description: "Intelligent system for X-ray and MRI anomaly detection using advanced CNN architectures.",
      longDescription: "Built a comprehensive healthcare diagnostic system that can detect various anomalies in medical imaging. The system uses ensemble methods combining multiple CNN architectures to provide reliable diagnostic assistance to healthcare professionals.",
      technologies: ["TensorFlow", "Keras", "VGG16", "ResNet50", "DICOM", "Flask"],
      image: "fas fa-x-ray",
      github: "#",
      demo: "#",
      status: "completed",
      metrics: {
        sensitivity: "94%",
        specificity: "91%",
        datasets: "3 major"
      }
    },
    {
      id: 4,
      title: "AI Chatbot with RAG + LLM",
      category: "nlp",
      description: "Intelligent conversational AI using RAG architecture with fine-tuned LLMs and vector databases.",
      longDescription: "Created an advanced chatbot system that combines Retrieval-Augmented Generation (RAG) with fine-tuned language models. The system uses Pinecone for vector storage and LangChain for orchestration, providing contextually accurate responses.",
      technologies: ["LangChain", "GPT-4", "Pinecone", "FastAPI", "Streamlit", "OpenAI"],
      image: "fas fa-robot",
      github: "#",
      demo: "#",
      status: "completed",
      metrics: {
        accuracy: "96%",
        response: "< 3s",
        contexts: "1M+ docs"
      }
    },
    {
      id: 5,
      title: "Stock Price Forecasting",
      category: "finance",
      description: "Advanced time series prediction using LSTM networks and Transformer architectures.",
      longDescription: "Developed a sophisticated stock price prediction system using deep learning techniques. The model combines LSTM networks for sequential pattern recognition with Transformer architectures for attention-based learning, achieving superior forecasting accuracy.",
      technologies: ["LSTM", "Transformers", "PyTorch", "Pandas", "yfinance", "Plotly"],
      image: "fas fa-chart-line",
      github: "#",
      demo: "#",
      status: "completed",
      metrics: {
        mape: "8.5%",
        stocks: "500+",
        timeframe: "Real-time"
      }
    },
    {
      id: 6,
      title: "Image-to-Anime Generator",
      category: "generative-ai",
      description: "Creative GAN pipeline converting real photos to anime-style artwork using Pix2Pix architecture.",
      longDescription: "Built an innovative generative adversarial network that transforms real photographs into anime-style artwork. The system uses advanced Pix2Pix architecture with custom loss functions to maintain facial features while applying artistic style transfer.",
      technologies: ["Pix2Pix", "GAN", "PyTorch", "PIL", "Gradio", "CUDA"],
      image: "fas fa-palette",
      github: "#",
      demo: "#",
      status: "completed",
      metrics: {
        quality: "High-res",
        speed: "< 5s",
        styles: "Multiple"
      }
    }
  ];

  const categories = [
    { id: 'all', label: 'All Projects', icon: 'fas fa-th' },
    { id: 'computer-vision', label: 'Computer Vision', icon: 'fas fa-eye' },
    { id: 'nlp', label: 'NLP & AI', icon: 'fas fa-brain' },
    { id: 'healthcare', label: 'Healthcare', icon: 'fas fa-heartbeat' },
    { id: 'finance', label: 'Finance', icon: 'fas fa-chart-bar' },
    { id: 'generative-ai', label: 'Generative AI', icon: 'fas fa-magic' }
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="projects">
      <div className="container">
        <motion.div 
          className="projects-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="projects-header" variants={itemVariants}>
            <h1>Featured <span className="gradient-text">Projects</span></h1>
            <p className="projects-subtitle">
              Showcasing innovative AI solutions that solve real-world problems
            </p>
          </motion.div>

          <motion.div className="project-filters" variants={itemVariants}>
            {categories.map((category) => (
              <motion.button
                key={category.id}
                className={`filter-btn ${selectedCategory === category.id ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <i className={category.icon}></i>
                <span>{category.label}</span>
              </motion.button>
            ))}
          </motion.div>

          <motion.div className="projects-grid" layout>
            <AnimatePresence>
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  className="project-card"
                  variants={itemVariants}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="project-image">
                    <i className={project.image}></i>
                    <div className="project-overlay">
                      <div className="project-actions">
                        <a href={project.github} className="action-btn">
                          <i className="fab fa-github"></i>
                        </a>
                        <a href={project.demo} className="action-btn">
                          <i className="fas fa-external-link-alt"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  
                  <div className="project-content">
                    <div className="project-category">
                      {categories.find(cat => cat.id === project.category)?.label}
                    </div>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    
                    <div className="project-tech">
                      {project.technologies.slice(0, 3).map((tech, index) => (
                        <span key={index} className="tech-tag">{tech}</span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="tech-more">+{project.technologies.length - 3}</span>
                      )}
                    </div>

                    <div className="project-metrics">
                      {Object.entries(project.metrics).map(([key, value]) => (
                        <div key={key} className="metric">
                          <span className="metric-value">{value}</span>
                          <span className="metric-label">{key}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          <motion.div className="projects-stats" variants={itemVariants}>
            <div className="stats-grid">
              <div className="stat-card">
                <div className="stat-icon">
                  <i className="fas fa-project-diagram"></i>
                </div>
                <div className="stat-content">
                  <div className="stat-number">15+</div>
                  <div className="stat-label">Projects Completed</div>
                </div>
              </div>
              <div className="stat-card">
                <div className="stat-icon">
                  <i className="fas fa-building"></i>
                </div>
                <div className="stat-content">
                  <div className="stat-number">1</div>
                  <div className="stat-label">Company (HairScope)</div>
                </div>
              </div>
              <div className="stat-card">
                <div className="stat-icon">
                  <i className="fas fa-award"></i>
                </div>
                <div className="stat-content">
                  <div className="stat-number">95%</div>
                  <div className="stat-label">Success Rate</div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            className="project-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div 
              className="project-modal"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                className="modal-close"
                onClick={() => setSelectedProject(null)}
              >
                <i className="fas fa-times"></i>
              </button>
              
              <div className="modal-content">
                <div className="modal-header">
                  <div className="modal-icon">
                    <i className={selectedProject.image}></i>
                  </div>
                  <div className="modal-title">
                    <h2>{selectedProject.title}</h2>
                    <span className="modal-category">
                      {categories.find(cat => cat.id === selectedProject.category)?.label}
                    </span>
                  </div>
                </div>
                
                <div className="modal-body">
                  <p>{selectedProject.longDescription}</p>
                  
                  <div className="modal-technologies">
                    <h4>Technologies Used</h4>
                    <div className="tech-list">
                      {selectedProject.technologies.map((tech, index) => (
                        <span key={index} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="modal-metrics">
                    <h4>Key Metrics</h4>
                    <div className="metrics-grid">
                      {Object.entries(selectedProject.metrics).map(([key, value]) => (
                        <div key={key} className="metric-item">
                          <span className="metric-label">{key}</span>
                          <span className="metric-value">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="modal-actions">
                  <a href={selectedProject.github} className="btn btn-secondary">
                    <i className="fab fa-github"></i>
                    View Code
                  </a>
                  <a href={selectedProject.demo} className="btn btn-primary">
                    <i className="fas fa-external-link-alt"></i>
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Projects;