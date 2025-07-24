// File: src/components/Skills.js
import React from 'react';
import '../styles/Skills.css';

import html from '../assets/icons/html.png';
import css from '../assets/icons/css.png';
import js from '../assets/icons/js.png';
import react from '../assets/icons/react.png';
import node from '../assets/icons/node.png';
import java from '../assets/icons/java.png';
import mongodb from '../assets/icons/mongodb.png';
import aws from '../assets/icons/aws.png';

const skills = [
  { name: 'HTML', icon: html },
  { name: 'CSS', icon: css },
  { name: 'JavaScript', icon: js },
  { name: 'React', icon: react },
  { name: 'Node.js', icon: node },
  { name: 'Java', icon: java },
  { name: 'MongoDB', icon: mongodb },
  { name: 'AWS', icon: aws }
];

const Skills = () => {
  return (
    <section className="skills-section" id="skills">
      <h2 className="section-title">Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, idx) => (
          <div key={idx} className="skill-card">
            <img src={skill.icon} alt={skill.name} />
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
