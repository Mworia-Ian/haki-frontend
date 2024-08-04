import React, { useEffect, useState } from 'react';
import './GoToTopButton.css';
import arrowUpImg from '/src/assets/arrowUpImg.png';

const GoToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <button
      className={`gotop ${isVisible ? 'active' : ''}`}
      onClick={scrollToTop}
    >
      <img src={arrowUpImg} alt="Go to top" />
    </button>
  );
};

export default GoToTopButton;
