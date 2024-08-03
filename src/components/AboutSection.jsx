import React from 'react';
import './AboutSection.css';

const AboutSection = () => {
    return (
        <section className="about">
            <div className="image">
                <img src="https://people.com/thmb/gy2YdKdnv-nBkuPqu0-GJZFWJ4s=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(999x0:1001x2)/michael-b-jordan-fitness-journey-071223-14e912a47276481f81bed4af3f872df8.jpg" alt="Lawyer" />
            </div>
            <div className="content">
                <span>More about the top rated advocate of the year</span>
                <h1>My name is Sichael D. Borjan,</h1>
                <p>In Kenya, we understand that dealing with legal issues can be stressful. That's why I am committed to taking care of my clients every step of the legal way.</p>
                <p>With my experience, I will work hard to ensure that your rights are protected and your best interests are represented.</p>
                <div className="award">
                    <div className="box">
                        <h3>100+</h3>
                        <p>Happy Clients</p>
                    </div>
                    <div className="box">
                        <h3>10+</h3>
                        <p>Awards Attained</p>
                    </div>
                    <div className="box">
                        <h3>50+</h3>
                        <p>Successful issues</p>
                    </div>
                    <div className="box">
                        <h3>30+</h3>
                        <p>Settlements</p>
                    </div>
                </div>
                <a href="#" className="btn">Learn more</a>
            </div>
        </section>
    );
};

export default AboutSection;
