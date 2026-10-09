'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

const GREETINGS = [
  'You look great today. ✨',
  'Crafting aesthetic digital solutions 🎨',
  'Architecting resilient software ⚡',
  'Full-Stack & Security minded 🔒',
  'Ready for your next challenge 🚀'
];

export default function Hero() {
  const [greetIndex, setGreetIndex] = useState(0);

  const cycleGreeting = () => {
    setGreetIndex((prev) => (prev + 1) % GREETINGS.length);
  };

  return (
    <section className="hero-section" id="hero">
      <div className="container">
        <motion.div 
          className="hero-card"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Interactive Top Pill Badge */}
          <div>
            <button 
              className="hero-pill-badge" 
              onClick={cycleGreeting} 
              title="Click to interact!"
            >
              {GREETINGS[greetIndex]}
            </button>
          </div>

          {/* Pulsing Status Pill */}
          <div className="hero-status-pill">
            <span className="status-dot"></span>
            <span>Available for new projects</span>
          </div>

          {/* Signature Headline with Inline Pills */}
          <h1 className="hero-headline">
            Hi! I'm <span className="inline-pill pill-white">Uwase Sonia</span><br />
            a <span className="inline-pill pill-dark">Full Stack Engineer</span> from <span className="inline-pill pill-outline">Kigali</span><br />
            specializing in human-centric digital experiences, scalable systems, and cybersecurity.
          </h1>

          {/* Dual CTAs */}
          <div className="hero-cta-group">
            <a href="#work" className="btn-primary-pill">My work</a>
            <a href="#about" className="btn-secondary-pill">About me</a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
