'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, 
  ArrowRight, 
  ArrowUpRight, 
  Zap, 
  Building2, 
  Layers, 
  ShieldCheck,
  Music,
  Radio,
  Play,
  Volume2
} from 'lucide-react';

export const PROJECTS_DATA = [
  {
    id: 'mutekano',
    indexNum: '01',
    totalNum: '04',
    name: 'Mutekano',
    icon: <ShieldCheck size={16} strokeWidth={2.4} color="#ffffff" />,
    iconBg: '#483831',
    category: 'Civic Safety & Cloud Security',
    title: 'Intelligent Public Safety & Emergency Infrastructure',
    description: 'A mission-critical civic security platform engineered to safeguard citizens through real-time geo-fenced emergency dispatch, incident reporting, encrypted SOS broadcasts, and live situational awareness across Rwanda.',
    tags: ['Next.js', 'PostgreSQL', 'WebSockets', 'Geo-Fencing', 'Cryptography'],
    themeClass: 'card-theme-blue',
    visualType: 'mutekanoMockup',
    overview: 'Mutekano is an intelligent public safety platform built to guarantee the security of citizens through instantaneous incident reporting, automated emergency responder routing, and encrypted dispatch channels.',
    problem: 'Emergency calls and distress reporting often encounter communication bottlenecks, unverified locations, and delayed situational response.',
    solution: 'Designed and engineered a resilient full-stack architecture pairing low-latency WebSockets with GPS telemetry, automated triage protocols, and citizen safety broadcasts.',
    stack: 'Next.js • Spring Boot • PostgreSQL • WebSockets • Leaflet GIS • Docker',
    role: 'Lead System Architect & Security Engineer',
    year: '2026',
    link: 'https://weisheit.vercel.app/#projects'
  },
  {
    id: 'cantora',
    indexNum: '02',
    totalNum: '04',
    name: 'Cantora',
    icon: <Music size={16} strokeWidth={2.4} color="#ffffff" />,
    iconBg: '#483831',
    category: 'Audio Architecture & Sound Design',
    title: 'Next-Gen Acoustic Exploration & Audio Engine',
    description: 'An immersive digital music streaming and sound architecture platform inspired by high-fidelity cinematic sound design. Delivers low-latency Web Audio waveforms, multi-track stems, and frictionless artist collaboration.',
    tags: ['React', 'Web Audio API', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    themeClass: 'card-theme-lavender',
    visualType: 'cantoraMockup',
    overview: 'Cantora provides audio creators and listeners with a lossless streaming ecosystem. Designed with smooth micro-interactions, real-time waveform visualizers, and spatial acoustic clarity.',
    problem: 'Standard web audio players lack tactile precision, responsive frequency visualization, and professional stem preview capabilities.',
    solution: 'Engineered a custom audio processing engine utilizing the browser Web Audio API, backed by intuitive UI tokens in Tailwind CSS and Framer Motion spring physics.',
    stack: 'React • TypeScript • Web Audio API • Tailwind CSS • Framer Motion',
    role: 'Frontend Engineer & Audio UI Architect',
    year: '2025',
    link: 'https://weisheit.vercel.app/#projects'
  },
  {
    id: 'sparklock',
    indexNum: '03',
    totalNum: '04',
    name: 'SparkLock',
    icon: <Zap size={16} strokeWidth={2.4} color="#ffffff" />,
    iconBg: '#483831',
    category: 'IoT • Embedded Hardware • Hackathon 2nd Place',
    title: 'Smart Hazard Prevention for Electrical & Gas Leaks',
    description: 'A comprehensive hardware-software hazard detection system awarded 2nd place in hackathon competition. Combines relay modules, temperature sensors, gas sniffers, and a companion mobile app to prevent fires before they spark.',
    tags: ['C++ Embedded', 'Relay Modules', 'React Native', 'Sensors', 'Buzzer Alerts'],
    themeClass: 'card-theme-peach',
    visualType: 'image',
    imageSrc: '/assets/images/mockup_sparklock.jpg',
    imageAlt: 'SparkLock IoT mobile application interface',
    overview: 'SparkLock detects electrical spikes and gas leaks ahead of potential fire disasters. Sonia engineered both the mobile application interface and the embedded system hardware integration.',
    problem: 'Household and commercial fires frequently start from unnoticed slow electrical overheating or hazardous gas leakages without early warning.',
    solution: 'Integrated hardware sensors, relay actuators, and acoustic buzzer modules with cloud-connected mobile telemetry, allowing immediate automatic power cutoff and phone notifications.',
    stack: 'Embedded C++ • Arduino/ESP32 • Relay Module • React Native • Spring Boot',
    role: 'Hardware-Software Engineer (2nd Place Hackathon)',
    year: '2024 — 2025',
    link: 'https://weisheit.vercel.app/#projects'
  },
  {
    id: 'edgereach',
    indexNum: '04',
    totalNum: '04',
    name: 'UPS - Edgereach',
    icon: <Building2 size={16} strokeWidth={2.4} color="#ffffff" />,
    iconBg: '#483831',
    category: 'UI/UX Design + Enterprise ERP',
    title: 'Hospitality Operations & Inventory Intelligence in Rwanda',
    description: 'A fully integrated hotel operations platform designed for hospitality venues in Rwanda, unifying inventory control, point of sale (POS) analytics, recipe costing, and revenue management with human-centered elegance.',
    tags: ['Figma', 'Adobe XD', 'UI/UX Design', 'Design Systems', 'Analytics'],
    themeClass: 'card-theme-green',
    visualType: 'image',
    imageSrc: '/assets/images/mockup_ups_edgereach.jpg',
    imageAlt: 'UPS Edgereach Hotel operations management dashboard',
    overview: 'A tailored operations dashboard built from freelance UI/UX engagements for hotels in Rwanda, reducing administrative overhead and optimizing kitchen and guest amenities inventory.',
    problem: 'Hoteliers struggled with fragmented paper logs, untracked ingredient waste, and delayed financial reporting.',
    solution: 'Conducted field user research to build a modular design system in Figma and Adobe XD, featuring actionable KPIs, automated purchase order workflows, and low-stock alerts.',
    stack: 'Figma • Adobe XD • UI/UX Design • Design Systems • Data Viz',
    role: 'Lead UI/UX Designer',
    year: '2026',
    link: 'https://weisheit.vercel.app/#projects'
  }
];

export default function ProjectsStack({ onSelectCaseStudy }) {
  const containerRef = useRef(null);
  const [activeCardIndex, setActiveCardIndex] = useState(0);

  // Scroll tracking: on going down through this section, it changes the active card in the bundle
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const totalScrollDistance = rect.height - windowHeight;
      
      if (totalScrollDistance <= 0) return;
      
      // Calculate scroll progress within this pinned section
      const scrolled = -rect.top;
      const progress = Math.max(0, Math.min(1, scrolled / totalScrollDistance));
      
      // Map smoothly into card index 0, 1, 2, 3
      const numCards = PROJECTS_DATA.length;
      const newIndex = Math.min(numCards - 1, Math.floor(progress * numCards));
      
      setActiveCardIndex(newIndex);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const goToCard = (idx) => {
    setActiveCardIndex(idx);
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    const totalScrollDistance = rect.height - windowHeight;
    const targetScroll = (idx / PROJECTS_DATA.length) * totalScrollDistance;
    const targetY = window.scrollY + rect.top + targetScroll + 10;
    window.scrollTo({ top: targetY, behavior: 'smooth' });
  };

  const nextCard = () => {
    goToCard((activeCardIndex + 1) % PROJECTS_DATA.length);
  };

  const prevCard = () => {
    goToCard((activeCardIndex - 1 + PROJECTS_DATA.length) % PROJECTS_DATA.length);
  };

  return (
    <section className="projects-bundle-section" id="work" ref={containerRef}>
      
      {/* Sticky Stage: Stays pinned in viewport while scrolling down to change cards */}
      <div className="bundle-sticky-stage">
        <div className="container">
          
          {/* Header Row: Label + Title + Bundle Chips Navigation */}
          <div className="bundle-header-row">
            <div className="bundle-label-group">
              <div className="section-pill-tag">
                <Layers size={13} style={{ marginRight: '6px' }} />
                <span>Project Bundle • Card {activeCardIndex + 1} of {PROJECTS_DATA.length}</span>
              </div>
              <h2 className="section-title-large" style={{ margin: 0 }}>
                Featured Projects &amp; Systems Architecture
              </h2>
            </div>

            {/* Bundle Chips: Click to deal any card or see active deal */}
            <div className="bundle-chips-bar">
              <div className="bundle-chips-group">
                {PROJECTS_DATA.map((proj, idx) => (
                  <button
                    key={proj.id}
                    className={`bundle-chip ${activeCardIndex === idx ? 'active' : ''}`}
                    onClick={() => goToCard(idx)}
                    title={`View ${proj.name}`}
                  >
                    <span className="chip-num">{proj.indexNum}</span>
                    <span className="chip-name">{proj.name}</span>
                  </button>
                ))}
              </div>

              {/* Prev / Next deal arrow buttons */}
              <div className="bundle-nav-arrows">
                <button 
                  className="bundle-arrow-btn" 
                  onClick={prevCard} 
                  aria-label="Previous card in bundle"
                  title="Previous card"
                >
                  <ArrowLeft size={16} />
                </button>
                <button 
                  className="bundle-arrow-btn" 
                  onClick={nextCard} 
                  aria-label="Next card in bundle"
                  title="Next card"
                >
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>

          {/* Physical Bundle Container: All cards stacked together in the bundle */}
          <div className="bundle-deck-container">
            {PROJECTS_DATA.map((project, idx) => {
              const isCurrent = idx === activeCardIndex;
              const diff = idx - activeCardIndex;

              // Transform calculations so all cards remain visible in the physical bundle:
              // - Current card: front and center (y: 0, scale: 1, full opacity, top z-index)
              // - Past cards: neatly stacked above with visible header tabs peeking (y: -16px, scale: 0.98, opacity: 0.88)
              // - Upcoming cards: stacked underneath peeking from below (y: +18px, scale: 0.97, opacity: 0.85)
              let yOffset = 0;
              let scaleValue = 1;
              let opacityValue = 1;
              let zIndexValue = 10;

              if (diff === 0) {
                yOffset = 0;
                scaleValue = 1;
                opacityValue = 1;
                zIndexValue = 10;
              } else if (diff < 0) {
                // Past cards stacked slightly above
                yOffset = diff * 15;
                scaleValue = 1 - Math.abs(diff) * 0.025;
                opacityValue = Math.max(0.65, 0.9 - Math.abs(diff) * 0.1);
                zIndexValue = 10 + diff; // Below current card
              } else {
                // Upcoming cards stacked slightly below
                yOffset = diff * 18;
                scaleValue = 1 - diff * 0.035;
                opacityValue = Math.max(0.65, 0.88 - diff * 0.1);
                zIndexValue = 10 - diff; // Below current card
              }

              return (
                <motion.div
                  key={project.id}
                  className="bundle-card-layer"
                  initial={false}
                  animate={{
                    y: yOffset,
                    scale: scaleValue,
                    opacity: opacityValue,
                    zIndex: zIndexValue,
                    pointerEvents: isCurrent ? 'auto' : 'none',
                  }}
                  transition={{ 
                    duration: 0.45, 
                    ease: [0.16, 1, 0.3, 1] 
                  }}
                  onClick={() => !isCurrent && goToCard(idx)}
                >
                  <ProjectCardContent 
                    project={project} 
                    onSelectCaseStudy={onSelectCaseStudy} 
                  />
                </motion.div>
              );
            })}
          </div>

          {/* Micro Scroll Hint */}
          <div className="bundle-scroll-guide">
            <span>Scroll down to deal cards from bundle • Card {activeCardIndex + 1} of {PROJECTS_DATA.length} active</span>
          </div>

        </div>
      </div>
    </section>
  );
}

// Authentic Michelle Irby Project Card Layout
function ProjectCardContent({ project, onSelectCaseStudy }) {
  return (
    <article className={`project-card ${project.themeClass}`}>
      <div className="project-content">
        
        {/* Header row with Logo Badge and Deck Number */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', marginBottom: '22px' }}>
          <div className="project-logo-badge" style={{ marginBottom: 0 }}>
            <span className="project-logo-icon" style={{ background: project.iconBg }}>
              {project.icon}
            </span>
            <span className="project-logo-text">{project.name}</span>
          </div>
          <span className="project-deck-badge">
            BUNDLE {project.indexNum} / {project.totalNum}
          </span>
        </div>

        <p className="project-category">{project.category}</p>
        <h2 className="project-title">{project.title}</h2>
        <p className="project-description">{project.description}</p>
        
        <div className="project-tags">
          {project.tags.map(tag => (
            <span key={tag} className="tech-tag">{tag}</span>
          ))}
        </div>

        <div className="project-actions">
          <button 
            className="btn-card-primary" 
            onClick={() => onSelectCaseStudy(project)}
          >
            Case study
          </button>
          <a 
            href={project.link} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-card-secondary"
          >
            <span>Live Demo</span>
            <ArrowUpRight size={15} style={{ marginLeft: '4px' }} />
          </a>
        </div>
      </div>

      <div className="project-visual">
        {project.visualType === 'image' && (
          <div className="project-img-frame">
            <img 
              src={project.imageSrc} 
              alt={project.imageAlt} 
              loading="lazy" 
            />
          </div>
        )}

        {/* Mutekano Civic Safety Interactive Monitor Mockup */}
        {project.visualType === 'mutekanoMockup' && (
          <div className="css-mockup-browser">
            <div className="mockup-header-bar">
              <div className="mockup-dots">
                <span></span><span></span><span></span>
              </div>
              <div className="mockup-address-bar">mutekano.gov.rw/command-center</div>
            </div>
            <div className="mockup-content-body" style={{ background: '#201815', color: '#f4f0f1', padding: '24px' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Radio size={16} color="#4ade80" className="pulse-indicator" />
                  <span style={{ fontSize: '0.82rem', fontWeight: 700, letterSpacing: '0.05em', color: '#4ade80' }}>
                    KIGALI SECTOR RADAR • ACTIVE
                  </span>
                </div>
                <span style={{ fontSize: '0.78rem', background: 'rgba(255,255,255,0.1)', padding: '2px 8px', borderRadius: '6px' }}>
                  256-bit AES
                </span>
              </div>
              
              <div style={{ background: '#2c221e', borderRadius: '14px', padding: '16px', marginBottom: '14px', border: '1px solid rgba(255,255,255,0.06)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontSize: '0.8rem', color: '#ded4d2' }}>
                  <span>District Coverage</span>
                  <span style={{ color: '#4ade80', fontWeight: 600 }}>99.8% Nominal</span>
                </div>
                <div style={{ width: '100%', height: '6px', background: 'rgba(255,255,255,0.1)', borderRadius: '3px', overflow: 'hidden' }}>
                  <div style={{ width: '92%', height: '100%', background: '#4ade80', borderRadius: '3px' }}></div>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                <div style={{ background: '#2c221e', borderRadius: '12px', padding: '12px', border: '1px solid rgba(255,255,255,0.06)' }}>
                  <div style={{ fontSize: '0.72rem', color: '#a89d9a', textTransform: 'uppercase' }}>Rapid SOS Response</div>
                  <div style={{ fontSize: '1.25rem', fontWeight: 700, color: '#f4f0f1', marginTop: '4px' }}>2.4 min</div>
                </div>
                <div style={{ background: '#2c221e', borderRadius: '12px', padding: '12px', border: '1px solid rgba(255,255,255,0.06)' }}>
                  <div style={{ fontSize: '0.72rem', color: '#a89d9a', textTransform: 'uppercase' }}>Verified Units</div>
                  <div style={{ fontSize: '1.25rem', fontWeight: 700, color: '#f4f0f1', marginTop: '4px' }}>148 Active</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Cantora Digital Audio Workstation Mockup */}
        {project.visualType === 'cantoraMockup' && (
          <div className="css-mockup-browser">
            <div className="mockup-header-bar">
              <div className="mockup-dots">
                <span></span><span></span><span></span>
              </div>
              <div className="mockup-address-bar">cantora.audio/studio/master-suite</div>
            </div>
            <div className="mockup-content-body" style={{ background: '#201815', color: '#f4f0f1', padding: '24px' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '18px' }}>
                <div>
                  <h4 style={{ fontSize: '1.05rem', fontWeight: 600, color: '#f4f0f1' }}>Impano Master Track 04</h4>
                  <p style={{ fontSize: '0.78rem', color: '#a89d9a' }}>48kHz • 24-Bit Lossless Stereo</p>
                </div>
                <button style={{ width: '38px', height: '38px', borderRadius: '50%', background: '#483831', border: '1px solid rgba(255,255,255,0.2)', color: '#f4f0f1', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Play size={16} fill="#f4f0f1" />
                </button>
              </div>

              {/* Dynamic Waveform Simulation */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '3px', height: '54px', marginBottom: '16px', background: '#2c221e', padding: '0 12px', borderRadius: '12px' }}>
                {[30, 45, 75, 90, 60, 40, 85, 100, 70, 50, 65, 80, 95, 40, 60, 85, 90, 70, 45, 30, 60, 80, 90, 65, 40, 55, 75, 90, 60, 45].map((h, i) => (
                  <div 
                    key={i} 
                    style={{ 
                      flex: 1, 
                      height: `${h}%`, 
                      background: i < 16 ? '#f4f0f1' : 'rgba(244,240,241,0.3)', 
                      borderRadius: '2px' 
                    }}
                  />
                ))}
              </div>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.78rem', color: '#a89d9a' }}>
                <span>02:14 / 04:38</span>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <Volume2 size={14} />
                  <span>Stereo Mastered</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </article>
  );
}
