import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faInstagram, faKaggle } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import './SocialLinks.css';

const SocialLinks = () => {
  return (
    <div className="social-links">
      <a href="https://github.com/mohitsharma1214" target="_blank" rel="noopener noreferrer" title="GitHub">
        <FontAwesomeIcon icon={faGithub} />
      </a>
      <a href="https://www.linkedin.com/in/mohitsharmas-/" target="_blank" rel="noopener noreferrer" title="LinkedIn">
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
      <a href="https://www.kaggle.com/mohitsharma12a" target="_blank" rel="noopener noreferrer" title="Kaggle">
        <FontAwesomeIcon icon={faKaggle} />
      </a>
      <a href="https://www.instagram.com/mohitsharmas_/" target="_blank" rel="noopener noreferrer" title="Instagram">
        <FontAwesomeIcon icon={faInstagram} />
      </a>
      <a href="mailto:your.email@example.com" title="Email">
        <FontAwesomeIcon icon={faEnvelope} />
      </a>
    </div>
  );
};

export default SocialLinks;
