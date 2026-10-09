'use client';

import React, { useState, useEffect } from 'react';
import { 
  ArrowUpRight, 
  Zap, 
  Building2, 
  Layers, 
  ShieldCheck,
  Music,
  Radio,
  Play,
  Volume2,
  ExternalLink
} from 'lucide-react';

export const PROJECTS_DATA = [
  {
    id: 'mutekano',
    indexNum: '01',
    totalNum: '04',
    name: 'Mutekano',
    statusLabel: 'Production • Live Radar',
    icon: <ShieldCheck size={14} strokeWidth={2.4} color="#ffffff" />,
    iconBg: '#483831',
    category: 'Civic Safety & Cloud Security',
    title: 'Intelligent Public Safety & Emergency Infrastructure',
    description: 'A mission-critical civic security platform engineered to safeguard citizens through real-time geo-fenced emergency dispatch, encrypted SOS broadcasts, and live situational awareness across Rwanda.',
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
    statusLabel: 'Audio Architecture • Web Audio',
    icon: <Music size={14} strokeWidth={2.4} color="#ffffff" />,
    iconBg: '#483831',
    category: 'Audio Architecture & Sound Design',
    title: 'Next-Gen Acoustic Exploration & Audio Engine',
    description: 'An immersive digital music streaming and sound architecture platform delivering lossless browser waveforms, low-latency audio processing, and frictionless artist collaboration.',
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
    statusLabel: 'IoT Telemetry • 2nd Place Hackathon',
    icon: <Zap size={14} strokeWidth={2.4} color="#ffffff" />,
    iconBg: '#483831',
    category: 'IoT • Embedded Hardware • Hackathon 2nd Place',
    title: 'Smart Hazard Prevention for Electrical & Gas Leaks',
    description: 'A comprehensive hardware-software hazard detection system awarded 2nd place in hackathon competition. Combines relay actuators, temperature sensors, gas sniffers, and mobile telemetry to stop fires.',
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
    statusLabel: 'Enterprise ERP • Hospitality Suite',
    icon: <Building2 size={14} strokeWidth={2.4} color="#ffffff" />,
    iconBg: '#483831',
    category: 'UI/UX Design + Enterprise ERP',
    title: 'Hospitality Operations & Inventory Intelligence in Rwanda',
    description: 'A fully integrated hotel operations platform designed for hospitality venues in Rwanda, unifying inventory control, point of sale (POS) analytics, recipe costing, and revenue management.',
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
  const [activeCardIndex, setActiveCardIndex] = useState(0);

  // Monitor scroll position to highlight the active card in the chips bar
  useEffect(() => {
    const handleScroll = () => {
      PROJECTS_DATA.forEach((_, idx) => {
        const el = document.getElementById(`feature-card-${idx}`);
        if (el) {
          const rect = el.getBoundingClientRect();
          const targetTop = 76 + idx * 22;
          // Active when pinned near its top dock zone
          if (rect.top <= targetTop + 30 && rect.bottom >= targetTop + 80) {
            setActiveCardIndex(idx);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToCard = (idx) => {
    setActiveCardIndex(idx);
    const container = document.querySelector('.features-stack-container');
    if (container) {
      const containerTop = container.getBoundingClientRect().top + window.scrollY;
      const cardStep = 445 + window.innerHeight * 0.65;
      const targetY = containerTop + idx * cardStep - (76 + idx * 22);
      const scroller = document.scrollingElement || document.documentElement;
      scroller.scrollTo({
        top: Math.max(0, targetY),
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="projects-features-section" id="work">
      <div className="container">
        
        {/* Section Header */}
        <div className="features-header-row">
          <div className="features-label-group">
            <div className="section-pill-tag">
              <Layers size={13} style={{ marginRight: '6px' }} />
              <span>Featured Works • 04 Architecture Cases</span>
            </div>
            <h2 className="section-title-large" style={{ margin: 0 }}>
              Featured Projects &amp; Systems Architecture
            </h2>
          </div>

          {/* Quick Jump Chips */}
          <div className="features-chips-bar">
            <div className="features-chips-group">
              {PROJECTS_DATA.map((proj, idx) => (
                <button
                  key={proj.id}
                  className={`features-chip ${activeCardIndex === idx ? 'active' : ''}`}
                  onClick={() => scrollToCard(idx)}
                  title={`Jump to ${proj.name}`}
                >
                  <span className="chip-num">{proj.indexNum}</span>
                  <span className="chip-name">{proj.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Sticky Card Stacking Deck */}
        <div className="features-stack-container">
          {PROJECTS_DATA.map((project, idx) => (
            <div 
              key={project.id}
              id={`feature-card-${idx}`}
              className="feature-card-wrapper"
              style={{
                top: `calc(76px + ${idx * 22}px)`,
                zIndex: idx + 1,
                marginBottom: idx === PROJECTS_DATA.length - 1 ? '55vh' : '65vh',
              }}
            >
              <article className={`feature-card-surface ${project.themeClass}`}>
                
                {/* Left Column: Clean Michelle Irby Project Details */}
                <div className="project-content">
                  <div className="project-logo-badge">
                    <span className="project-logo-icon">{project.icon}</span>
                    <span className="project-logo-text">{project.name}</span>
                    <span className="project-index-pill">{project.indexNum} / 04</span>
                  </div>

                  <p className="project-category">{project.category}</p>
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  
                  <div className="project-tags">
                    {project.tags.map(tag => (
                      <span key={tag} className="tech-tag">{tag}</span>
                    ))}
                  </div>

                  <div className="project-actions">
                    <button 
                      className="btn-card-primary" 
                      onClick={(e) => {
                        e.stopPropagation();
                        onSelectCaseStudy(project);
                      }}
                    >
                      Case study
                    </button>
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="btn-card-secondary"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <span>Live Demo</span>
                      <ArrowUpRight size={15} style={{ marginLeft: '4px' }} />
                    </a>
                  </div>
                </div>

                {/* Right Column: Clean Visual Showcase */}
                <div className="project-visual">
                  {project.visualType === 'image' && (
                    <div className="project-img-frame">
                      <img 
                        src={project.imageSrc} 
                        alt={project.imageAlt} 
                        loading="eager" 
                      />
                    </div>
                  )}

                  {/* Mutekano Civic Safety Command Preview */}
                  {project.visualType === 'mutekanoMockup' && (
                    <div className="project-img-frame">
                      <div style={{ background: '#ffffff', color: '#121316', padding: '24px 26px', height: '100%', minHeight: '270px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingBottom: '14px', borderBottom: '1px solid #f1f5f9' }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <Radio size={16} color="#16a34a" />
                            <span style={{ fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.04em', color: '#16a34a' }}>
                              KIGALI SECTOR RADAR • ACTIVE
                            </span>
                          </div>
                          <span style={{ fontSize: '0.74rem', fontWeight: 600, color: '#64748b', background: '#f1f5f9', padding: '3px 9px', borderRadius: '6px' }}>
                            256-bit AES
                          </span>
                        </div>
                        
                        <div style={{ background: '#f8fafc', borderRadius: '14px', padding: '14px 16px', border: '1px solid #e2e8f0', margin: '14px 0' }}>
                          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontSize: '0.8rem', color: '#475569', fontWeight: 500 }}>
                            <span>District Coverage</span>
                            <span style={{ color: '#16a34a', fontWeight: 700 }}>99.8% Nominal</span>
                          </div>
                          <div style={{ width: '100%', height: '6px', background: '#e2e8f0', borderRadius: '3px', overflow: 'hidden' }}>
                            <div style={{ width: '92%', height: '100%', background: '#16a34a', borderRadius: '3px' }}></div>
                          </div>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                          <div style={{ background: '#f8fafc', borderRadius: '12px', padding: '12px 14px', border: '1px solid #e2e8f0' }}>
                            <div style={{ fontSize: '0.7rem', color: '#64748b', textTransform: 'uppercase', fontWeight: 600 }}>Rapid SOS Response</div>
                            <div style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0f172a', marginTop: '3px' }}>2.4 min</div>
                          </div>
                          <div style={{ background: '#f8fafc', borderRadius: '12px', padding: '12px 14px', border: '1px solid #e2e8f0' }}>
                            <div style={{ fontSize: '0.7rem', color: '#64748b', textTransform: 'uppercase', fontWeight: 600 }}>Verified Units</div>
                            <div style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0f172a', marginTop: '3px' }}>148 Active</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Cantora Lossless Sound Engine Preview */}
                  {project.visualType === 'cantoraMockup' && (
                    <div className="project-img-frame">
                      <div style={{ background: '#ffffff', color: '#121316', padding: '24px 26px', height: '100%', minHeight: '270px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingBottom: '14px', borderBottom: '1px solid #f1f5f9' }}>
                          <div>
                            <h4 style={{ fontSize: '1.02rem', fontWeight: 700, color: '#0f172a', margin: 0 }}>Impano Master Track 04</h4>
                            <p style={{ fontSize: '0.76rem', color: '#64748b', margin: '3px 0 0 0' }}>48kHz • 24-Bit Lossless Stereo</p>
                          </div>
                          <button style={{ width: '38px', height: '38px', borderRadius: '50%', background: '#12101e', border: 'none', color: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', boxShadow: '0 4px 12px rgba(18,16,30,0.18)' }}>
                            <Play size={15} fill="#ffffff" />
                          </button>
                        </div>

                        {/* Clean Waveform Visualizer */}
                        <div style={{ display: 'flex', alignItems: 'center', gap: '3px', height: '54px', background: '#f8fafc', padding: '0 14px', borderRadius: '12px', border: '1px solid #e2e8f0', margin: '14px 0' }}>
                          {[30, 45, 75, 90, 60, 40, 85, 100, 70, 50, 65, 80, 95, 40, 60, 85, 90, 70, 45, 30, 60, 80, 90, 65, 40, 55, 75, 90, 60, 45].map((h, i) => (
                            <div 
                              key={i} 
                              style={{ 
                                flex: 1, 
                                height: `${h}%`, 
                                background: i < 16 ? '#12101e' : '#cbd5e1', 
                                borderRadius: '2px' 
                              }}
                            />
                          ))}
                        </div>

                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.76rem', color: '#64748b', fontWeight: 500 }}>
                          <span>02:14 / 04:38</span>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                            <Volume2 size={14} color="#64748b" />
                            <span>Stereo Mastered</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
