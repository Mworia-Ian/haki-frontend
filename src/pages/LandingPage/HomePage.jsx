import React from 'react'
import './home.css';
function HomePage() {
    return (
        <div className="landing-page">
          <header className="hero">
            <div className="hero-content">
              <h1>Welcome to Our Awesome Product</h1>
              <p>Your solution for [describe benefit].</p>
              <a href="#signup" className="cta-button">Get Started</a>
            </div>
          </header>
          
          <section className="features">
            <h2>Features</h2>
            <div className="feature">
              <h3>Feature One</h3>
              <p>Description of feature one.</p>
            </div>
            <div className="feature">
              <h3>Feature Two</h3>
              <p>Description of feature two.</p>
            </div>
            <div className="feature">
              <h3>Feature Three</h3>
              <p>Description of feature three.</p>
            </div>
          </section>
          
          
          <footer className="footer">
            <p>&copy; 2024 My Company. All rights reserved.</p>
          </footer>
        </div>
      );
    };
    
export default HomePage