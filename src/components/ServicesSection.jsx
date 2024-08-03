import React from 'react';
import './ServicesSection.css';


const ServicesSection = () => {
    return (
        <section className="services">
            <div className="heading">
                <span>What our lawyers do</span>
                <h3>Our lawyers specialize in</h3>
            </div>
            <div className="box-container">
                <div className="box">
                    <h1><span>C</span>orporate law</h1>
                    <p>Corporate law is our main expertise. We have been doing this for almost 20 years. We will help you with everything related to your corporation and business.</p>
                    <a href="#">Learn more <img src="src/assets/arrowUpImg.png" alt="Arrow" style={{ width: '.8rem', marginLeft: '5px' }} /></a>
                </div>
                <div className="box">
                    <h1><span>C</span>ommercial law</h1>
                    <p>Do you need help with the legal aspects of a trade? Do you want us to create and manage your contracts? We are here to help you in that.</p>
                    <a href="#">Learn more <img src="src/assets/arrowUpImg.png" alt="Arrow" style={{ width: '.8rem', marginLeft: '5px' }} /></a>
                </div>
                <div className="box">
                    <h1><span>T</span>ax law</h1>
                    <p>Taxes, it is hard to understand everything about them. Don't worry. We are always standing by your side to ensure that everything is settled.</p>
                    <a href="#">Learn more <img src="src/assets/arrowUpImg.png" alt="Arrow" style={{ width: '.8rem', marginLeft: '5px' }} /></a>
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;
