import React from 'react';
import './GoToTopButton.css';

const GoToTopButton = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
   
      <button className="gotop" onClick={scrollToTop}>
        <img src="../../assets/arrowUpImg.png" alt="Go to top" />
      </button>
   
  );
};

export default GoToTopButton;
