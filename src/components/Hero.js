// File: src/components/Hero.js
import React from 'react';
import '../styles/Hero.css';
import avatar from '../assets/icons/avatar.png'

const Hero = () => {
  return (
    <section className="hero" id="hero">
      <div className="hero-content">
        <img src={avatar} alt="Kousalya Avatar" className="hero-avatar" />
        <h1>Hi, I’m <span className="highlight">Kousalya</span></h1>
        <p>A Full Stack Developer based in India</p>
        <div className="hero-buttons">
          <a href="#projects" className="btn-primary">View Projects</a>
          <a href="/assets/Kousalya_resume.pdf" download className="btn-outline">Download Resume</a>
        </div>
        <div className="hero-icons">
          <a href="#"><i className="fab fa-github"></i></a>
          <a href="#"><i className="fab fa-linkedin"></i></a>
          <a href="#"><i className="fab fa-twitter"></i></a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
