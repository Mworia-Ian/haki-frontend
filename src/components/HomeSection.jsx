import React from 'react';
import './HomeSection.css';

const HomeSection = () => {
    return (
        <section className="home">
          <div className="wrapper">
            <h1>Legal Counsels for our Clients</h1>
            <p>We help our Clients navigate the legal landscape.</p>
            <div className="buttons">
              <a href="#" className="btn">Contact us</a>
              <a href="#" className="btn2">About us</a>
            </div>
          </div>
          <div className="status">
            <div className="box-container">
              <div className="box">
                <h2>20+</h2>
                <p>years in this field</p>
              </div>
              <div className="box">
                <h2>100+</h2>
                <p>Legal issues for both small and large businesses</p>
              </div>
              <div className="box">
                <h2>98%</h2>
                <p>success rate in resolving favorable settlement for clients</p>
              </div>
            </div>
          </div>
        </section>
    );
};

export default HomeSection;
