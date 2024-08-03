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
                    <h1><span>C</span>riminal law</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, quasi?</p>
                    <a href="#">Learn more <img src="src/assets/arrowUpImg.png" alt="Arrow" style={{ width: '.8rem', marginLeft: '5px' }} /></a>
                </div>
                <div className="box">
                    <h1><span>F</span>amily law</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, quasi?</p>
                    <a href="#">Learn more <img src="src/assets/arrowUpImg.png" alt="Arrow" style={{ width: '.8rem', marginLeft: '5px' }} /></a>
                </div>
                <div className="box">
                    <h1><span>T</span>ax law</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, quasi?</p>
                    <a href="#">Learn more <img src="src/assets/arrowUpImg.png" alt="Arrow" style={{ width: '.8rem', marginLeft: '5px' }} /></a>
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;
