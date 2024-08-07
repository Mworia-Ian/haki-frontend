import React from 'react';
import '../css/Header.css';

const Header = () => {
    return (
        <header>
            <div className="header">
            <a href="/" className="logo"><span>H</span>aki <span>APP</span></a>
            <div className="menubtn">
                <img src="images/menu.svg" alt="Menu" />
            </div>
            <nav className="navbar">
                <a href="/services">services</a>
                <a href="/reviews">reviews</a>
                <a href="/contact">contact</a>
            </nav>
            <a href="/login" className="btn">LOG IN</a>
            
            <a href="/signup" className="btn">SIGN UP</a>
            </div>
        </header>
    );
};

export default Header;
