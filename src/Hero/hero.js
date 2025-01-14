// src/Hero.js
import React from 'react';
import './hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Re-imagine Your <b>Digital Experiences!</b></h1>
        <p>Our comprehensive digital solutions will completely transform your company. Grow the future of your business.</p>
        <div className="button-hero">
        <button className="cta-button">Get Free Quote</button>
        <button className="service-button">Our Services</button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
