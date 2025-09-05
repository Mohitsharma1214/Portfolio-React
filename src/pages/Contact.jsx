import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

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

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Send form data to Formspree
      const response = await fetch('https://formspree.io/f/xldwovjn', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          _replyto: formData.email, // This tells Formspree to set reply-to
        }),
      });

      if (response.ok) {
        setIsSubmitting(false);
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });

        setTimeout(() => {
          setSubmitStatus(null);
        }, 5000);
      } else {
        throw new Error('Failed to send message');
      }

    } catch (error) {
      console.error('Error sending message:', error);
      setIsSubmitting(false);
      setSubmitStatus('error');

      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    }
  };

  const contactInfo = [
    {
      icon: 'fas fa-envelope',
      title: 'Email',
      value: 'mohitxsharma09@gmail.com',
      link: 'mailto:mohitxsharma09@gmail.com'
    },
    {
      icon: 'fas fa-phone',
      title: 'Phone',
      value: '+91 7879115913',
      link: 'tel:+917879115913'
    },
    {
      icon: 'fas fa-map-marker-alt',
      title: 'Location',
      value: 'Bhopal, Madhya Pradesh, India',
      link: '#'
    },
    {
      icon: 'fas fa-calendar',
      title: 'Availability',
      value: 'Open to opportunities',
      link: '#'
    }
  ];

  const socialLinks = [
    {
      name: 'GitHub',
      icon: 'fab fa-github',
      url: 'https://github.com/mohitsharma1214',
      color: '#333'
    },
    {
      name: 'LinkedIn',
      icon: 'fab fa-linkedin',
      url: 'https://www.linkedin.com/in/mohitsharmas-/',
      color: '#0077b5'
    },
    {
      name: 'Kaggle',
      icon: 'fab fa-kaggle',
      url: 'https://www.kaggle.com/mohitsharma12a',
      color: '#20beff'
    },
    {
      name: 'Instagram',
      icon: 'fab fa-instagram',
      url: 'https://www.instagram.com/mohitsharmas_/',
      color: '#E4405F'
    },
    {
      name: 'Hugging Face',
      icon: 'fas fa-robot',
      url: 'https://huggingface.co/Mohitsharmas',
      color: '#ff6b35'
    },
    {
      name: 'Medium',
      icon: 'fab fa-medium',
      url: 'https://medium.com/@mohitsharmas',
      color: '#00ab6c'
    }
  ];

  return (
    <div className="contact">
      <div className="container">
        <motion.div
          className="contact-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="contact-header" variants={itemVariants}>
            <h1>Get In <span className="gradient-text">Touch</span></h1>
            <p className="contact-subtitle">
              Let's discuss how we can work together to bring your AI ideas to life
            </p>
          </motion.div>

          <div className="contact-main">
            <motion.div className="contact-info" variants={itemVariants}>
              <div className="info-cards">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    className="info-card"
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="info-icon">
                      <i className={info.icon}></i>
                    </div>
                    <div className="info-content">
                      <h4>{info.title}</h4>
                      <a href={info.link}>{info.value}</a>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div className="social-section" variants={itemVariants}>
                <h3>Connect With Me</h3>
                <div className="social-links">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.url}
                      className="social-link"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -5 }}
                      whileTap={{ scale: 0.95 }}
                      style={{ '--social-color': social.color }}
                    >
                      <i className={social.icon}></i>
                      <span>{social.name}</span>
                    </motion.a>
                  ))}
                </div>
              </motion.div>

              <motion.div className="availability-section" variants={itemVariants}>
                <div className="availability-card">
                  <div className="availability-status">
                    <div className="status-indicator"></div>
                    <span>Available for new projects</span>
                  </div>
                  <p>
                    I'm currently open to exciting AI/ML opportunities and consulting projects.
                    Let's build something amazing together!
                  </p>
                </div>
              </motion.div>
            </motion.div>

            <motion.div className="contact-form-section" variants={itemVariants}>
              <div className="form-container">
                <h3>Send Me a Message</h3>
                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="name">Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        placeholder="Your full name"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="subject">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      placeholder="What's this about?"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows="6"
                      placeholder="Tell me about your project or idea..."
                    ></textarea>
                  </div>

                  <motion.button
                    type="submit"
                    className="btn btn-primary submit-btn"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {isSubmitting ? (
                      <>
                        <i className="fas fa-spinner fa-spin"></i>
                        Sending...
                      </>
                    ) : (
                      <>
                        <i className="fas fa-paper-plane"></i>
                        Send Message
                      </>
                    )}
                  </motion.button>

                  {submitStatus === 'success' && (
                    <motion.div
                      className="success-message"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      <i className="fas fa-check-circle"></i>
                      Thank you! Your message has been sent successfully. I'll get back to you soon!
                    </motion.div>
                  )}

                  {submitStatus === 'error' && (
                    <motion.div
                      className="error-message"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      <i className="fas fa-exclamation-circle"></i>
                      Failed to send message. Please try again or email me directly.
                    </motion.div>
                  )}
                </form>
              </div>
            </motion.div>
          </div>

          <motion.div className="contact-cta" variants={itemVariants}>
            <div className="cta-content">
              <h3>Ready to Start Your AI Project?</h3>
              <p>
                Whether you need AI consulting, custom ML solutions, or want to discuss
                the latest in artificial intelligence, I'm here to help.
              </p>
              <div className="cta-actions">
                <a
                  href="mailto:mohitxsharma09@gmail.com?subject=Portfolio Inquiry&body=Hi Mohit,%0D%0A%0D%0AI found your portfolio and would like to discuss..."
                  className="btn btn-primary"
                  title="Opens your default email client"
                >
                  <i className="fas fa-envelope"></i>
                  Email Me Directly
                </a>
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=mohitxsharma09@gmail.com&su=Portfolio Inquiry&body=Hi Mohit,%0D%0A%0D%0AI found your portfolio and would like to discuss..."
                  className="btn btn-secondary"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Opens Gmail in browser"
                >
                  <i className="fab fa-google"></i>
                  Gmail Web
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;