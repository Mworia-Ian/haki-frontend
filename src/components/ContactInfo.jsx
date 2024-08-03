import React from 'react';
import './ContactInfo.css';

const ContactInfo = () => {
  return (
    <section className="contactinfo">
      <div className="box">
        <i className="fas fa-map-marker-alt"></i>
        <div>
          <h3>Address</h3>
          <p>Ngong' Lane, Nairobi, Kenya</p>
        </div>
      </div>
      <div className="box">
        <i className="fas fa-phone"></i>
        <div>
          <h3>Phone</h3>
          <p>(+254) 123-456-789</p>
        </div>
      </div>
      <div className="box">
        <i className="fas fa-envelope"></i>
        <div>
          <h3>Email</h3>
          <p>contact@hakiApp.com</p>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;