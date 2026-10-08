'use client';

import React from 'react';
import { 
  Code2, 
  Palette, 
  ShieldCheck, 
  Layers, 
  Cpu, 
  Users2,
  Sparkles 
} from 'lucide-react';

const SKILLS = [
  {
    title: 'Full-Stack Engineering',
    desc: 'Architecting end-to-end applications with modern frontend frameworks and reliable, decoupled cloud backends.',
    icon: <Code2 size={24} strokeWidth={1.8} />,
    iconBg: '#f2eef8'
  },
  {
    title: 'UI/UX & Design Systems',
    desc: 'Translating user empathy and business logic into modular, pixel-perfect design tokens, interfaces, and Figma components.',
    icon: <Palette size={24} strokeWidth={1.8} />,
    iconBg: '#eef2f8'
  },
  {
    title: 'Cybersecurity & Resilience',
    desc: 'Integrating security-first patterns, zero-trust authentication, robust data encryption, and resilient system boundaries.',
    icon: <ShieldCheck size={24} strokeWidth={1.8} />,
    iconBg: '#fbf0ed'
  },
  {
    title: 'Rapid Prototyping',
    desc: 'Creating functional, testable prototypes to quickly gather user insights and accelerate production cycles.',
    icon: <Layers size={24} strokeWidth={1.8} />,
    iconBg: '#f2f0fa'
  },
  {
    title: 'API & Real-time Systems',
    desc: 'Developing high-throughput REST and WebSocket APIs with Spring Boot and NestJS for instant bidirectional communication.',
    icon: <Cpu size={24} strokeWidth={1.8} />,
    iconBg: '#edf5f2'
  },
  {
    title: 'Empathetic Leadership',
    desc: 'Leading through mentorship and mutual trust, fostering question-friendly teams that solve complex problems together.',
    icon: <Users2 size={24} strokeWidth={1.8} />,
    iconBg: '#faf4ee'
  }
];

export default function SkillsGrid() {
  return (
    <section className="skills-section" id="skills">
      <div className="container">
        <div className="skills-header-center">
          <div className="section-pill-tag">
            <Sparkles size={14} className="tag-icon" />
            <span>Ways of working</span>
          </div>
          <h2 className="section-title-large skills-main-title">
            Skills that I use to create world-class solutions
          </h2>
        </div>

        <div className="skills-grid">
          {SKILLS.map((skill, index) => (
            <div key={index} className="skill-card">
              <div className="skill-icon-box" style={{ background: skill.iconBg }}>
                {skill.icon}
              </div>
              <div className="skill-card-body">
                <h3 className="skill-title">{skill.title}</h3>
                <p className="skill-desc">{skill.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
