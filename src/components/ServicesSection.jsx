import React from 'react';
import arrowUpImg from '../assets/arrowUpImg.png';
import './ServicesSection.css';

const ServicesSection = () => {
    const services = [
        { id: 1, name: 'Criminal law' },
        { id: 2, name: 'Family law' },
        { id: 3, name: 'Tax law' },
        { id: 4, name: 'Administrative law' },
        { id: 5, name: 'Corporate law' },
        { id: 6, name: 'Intellectual Property law' },
        { id: 7, name: 'Environment law' },
        { id: 8, name: 'Labor and Employment law' },
        { id: 8, name: 'Real Estate law' }
    ];

    return (
        <section className="services">
            <div className="heading">
                <span>What our lawyers do</span>
                <h3>Our lawyers specialize in</h3>
            </div>
            <div className="box-container">
                {services.map(service => (
                    <div className="box" key={service.id}>
                        <h1><span>{service.name[0]}</span>{service.name.slice(1)}</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, quasi?</p>
                        <a href="#">
                            Learn more 
                            <img src={arrowUpImg} alt="Arrow" style={{ width: '.8rem', marginLeft: '5px' }} />
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ServicesSection;
