import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <header>
            <a href="#" className="logo">Haki <span>APP</span></a>
            <div className="menubtn">
                <img src="images/menu.svg" alt="Menu" />
            </div>
            <nav className="navbar">
                <a href="#">home</a>
                <a href="#">about</a>
                <a href="#">services</a>
                <a href="#">reviews</a>
                <a href="#">contact</a>
            </nav>
            <a href="#" className="btn">LOG IN</a>
            <a href="#" className="btn">SIGN UP</a>
        </header>
    );
};

export default Header;
