import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <>
        <a href="#" className='logo'><span>H</span>aki <span>APP</span></a>
        </>
        <a href="#">Terms & Conditions</a>
        <a href="#">Privacy Policy</a>
        <a href="#">Sitemap</a>
      </div>
      <div className="copy">&copy; Haki APP | 2024 All rights reserved.</div>
    </footer>
  );
};

export default Footer;
