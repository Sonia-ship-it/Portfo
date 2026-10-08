'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowUpRight, ArrowDown } from 'lucide-react';

const GREETINGS = [
  'Crafting aesthetic digital solutions',
  'Architecting resilient software',
  'Hardware, AI & Systems minded',
  'Curious by nature, precise by craft',
  'Ready for your next challenge'
];

export default function Hero() {
  const [greetIndex, setGreetIndex] = useState(0);

  const cycleGreeting = () => {
    setGreetIndex((prev) => (prev + 1) % GREETINGS.length);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const lineVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  return (
    <section className="hero-classic-section" id="hero">
      {/* Delicate Architectural Precision Watermark (Concentric Focal Aura) */}
      <div className="hero-geometric-backdrop" aria-hidden="true">
        <div className="hero-crosshair top-left">+</div>
        <div className="hero-crosshair top-right">+</div>
        <div className="hero-crosshair bottom-left">+</div>
        <div className="hero-crosshair bottom-right">+</div>
      </div>

      <div className="container">
        <div className="hero-classic-stage">
          
          {/* Top Classic Status & Meta Row (Clean, minimal, no chunky pills) */}
          <motion.div 
            className="hero-classic-meta"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <div className="meta-status-indicator">
              <span className="status-dot"></span>
              <span>Available for Select Projects</span>
            </div>
            
            <span className="meta-sep" aria-hidden="true">/</span>
            
            <span className="meta-location">Kigali, Rwanda</span>

            <span className="meta-sep" aria-hidden="true">/</span>

            <button 
              className="meta-thought-btn" 
              onClick={cycleGreeting} 
              title="Click to cycle thought"
            >
              <span>{GREETINGS[greetIndex]}</span>
              <Sparkles size={13} className="sparkle-icon" />
            </button>
          </motion.div>

          {/* Clean, Bold, Minimalist Editorial Headline */}
          <motion.div
            className="hero-headline-wrap"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1 className="hero-editorial-headline" variants={lineVariants}>
              Hi, I'm <span className="hero-name-accent">Uwase Sonia</span> — a Full Stack Engineer &amp; UI/UX Designer crafting resilient systems and human-centered digital experiences from Kigali.
            </motion.h1>

            <motion.p className="hero-editorial-sub" variants={lineVariants}>
              Bridging modern cloud engineering, embedded robotics, and human-centered design principles to create digital products that feel effortless on the surface and powerful underneath.
            </motion.p>
          </motion.div>

          {/* Clean, Classic Action CTAs */}
          <motion.div 
            className="hero-classic-actions"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
          >
            <a href="#work" className="btn-classic-primary">
              <span>View Featured Work</span>
              <ArrowDown size={15} style={{ marginLeft: '6px' }} />
            </a>
            <a href="#about" className="btn-classic-secondary">
              <span>About &amp; Ventures</span>
              <ArrowUpRight size={15} style={{ marginLeft: '6px' }} />
            </a>
          </motion.div>

          {/* Minimal Key Discipline Badges */}
          <motion.div 
            className="hero-discipline-strip"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <span>Full-Stack Development</span>
            <span className="dot-divider">•</span>
            <span>UI/UX Architecture</span>
            <span className="dot-divider">•</span>
            <span>Robotics &amp; IoT</span>
            <span className="dot-divider">•</span>
            <span>Cybersecurity</span>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
