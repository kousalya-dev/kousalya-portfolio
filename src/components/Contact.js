// File: src/components/Contact.js
import React from 'react';
import '../styles/Contact.css';

const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <h2 className="section-title">Contact Me</h2>
      <div className="contact-box">
        <p>Email: <a href="mailto:kousalya@example.com">kousalya@example.com</a></p>
        <p>LinkedIn: <a href="https://linkedin.com/in/kousalya" target="_blank" rel="noreferrer">linkedin.com/in/kousalya</a></p>
      </div>
    </section>
  );
};

export default Contact;
