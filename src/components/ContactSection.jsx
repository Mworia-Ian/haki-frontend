import React from 'react';
import '../css/ContactSection.css';

const ContactSection = () => {
  return (
    <section className="contact">
      <div className="heading">
        <span>Contact</span>
        <h3>Request a free consultation</h3>
      </div>
      <form action="#">
        <input type="text" placeholder="Enter your name" className="box" />
        <input type="email" placeholder="Enter your email" className="box" />
        <input type="datetime-local" className="box" />
        <input type="text" placeholder="Enter your subject" className="box" />
        <textarea name="message" id="message" cols="30" rows="10" placeholder="Enter your message" className="box"></textarea>
        <button type="submit" className="btn">Submit</button>
      </form>
    </section>
  );
};

export default ContactSection;
