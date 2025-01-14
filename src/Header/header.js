import React, { useState } from "react";
import "./header.css"; // Ensure you have the styles here

const Header = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <header>
            <div className="logo">
                <img
                    src="https://morningmind.in/wp-content/uploads/2024/12/Morning-Mind-Logo-Light-V2-PNG-2048x410.png"
                    alt="Morning Mind Logo"
                />
            </div>
            <nav className={`desktop-menu ${isMobileMenuOpen ? "hidden" : ""}`}>
                <a href="#home">Home</a>
                <a href="#services">Service</a>
                <a href="#portfolio">Portfolio</a>
                <a href="#our-client">Our Client</a>
                <a href="#about-us">About Us</a>
                <a href="#contact-us">Contact Us</a>
            </nav>
            <div className="hamburger" onClick={toggleMobileMenu}>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div className={`mobile-menu ${isMobileMenuOpen ? "active" : ""}`}>
                <a href="#home" onClick={() => setMobileMenuOpen(false)}>
                    Home
                </a>
                <a href="#services" onClick={() => setMobileMenuOpen(false)}>
                    Service
                </a>
                <a href="#portfolio" onClick={() => setMobileMenuOpen(false)}>
                    Portfolio
                </a>
                <a href="#our-client" onClick={() => setMobileMenuOpen(false)}>
                    Our Client
                </a>
                <a href="#about-us" onClick={() => setMobileMenuOpen(false)}>
                    About Us
                </a>
                <a href="#contact-us" onClick={() => setMobileMenuOpen(false)}>
                    Contact Us
                </a>
            </div>
            <div className="cat-container">
                <div className="cat"></div>
                <button className="quote-button" onClick={() => alert("Redirecting to the Quote page!")}>
                    Get a Free Quote
                </button>
            </div>
        </header>
    );
};

export default Header;
