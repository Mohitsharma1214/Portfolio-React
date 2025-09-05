import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import './ScrollIndicator.css';

const ScrollIndicator = () => {
  const scrollToNextSection = () => {
    const viewportHeight = window.innerHeight;
    window.scrollTo({
      top: viewportHeight,
      behavior: 'smooth'
    });
  };

  return (
    <div className="scroll-indicator" onClick={scrollToNextSection}>
      <span>Scroll to explore</span>
      <FontAwesomeIcon icon={faChevronDown} className="scroll-arrow" />
    </div>
  );
};

export default ScrollIndicator;
