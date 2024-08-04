import React from 'react';
import './ContactInfo.css';
import courtImg from '/src/assets/courtImg.png';
import phoneImg from '/src/assets/phoneImg.png';
import emailImg from '/src/assets/emailImg.png';

const ContactInfo = () => {
  return (
    <section className="contactinfo">
      <div className="box">
      <img src={courtImg} alt="court" />
        <div>
          <h3><span>Address</span></h3>
          <p>Ngong' Lane, Nairobi, Kenya</p>
        </div>
      </div>
      <div className="box">
      <img src={phoneImg} alt="phone" />
        <div>
          <h3><span>Phone</span></h3>
          <p>(+254) 123-456-789</p>
        </div>
      </div>
      <div className="box">
      <img src={emailImg} alt="email" />
        <div>
          <h3><span>E-Mail</span></h3>
          <p>contact@hakiApp.com</p>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;