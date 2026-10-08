'use client';

import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ProjectsStack from '../components/ProjectsStack';
import ToolsMarquee from '../components/ToolsMarquee';
import SkillsGrid from '../components/SkillsGrid';
import ServicesGrid from '../components/ServicesGrid';
import Milestones from '../components/Milestones';
import AboutMe from '../components/AboutMe';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import CaseStudyModal from '../components/CaseStudyModal';

export default function HomePage() {
  const [selectedCaseStudy, setSelectedCaseStudy] = useState(null);

  return (
    <div className="site-outer-frame">
      {/* Top clean header (Michelle Irby style - no floating pill navbar) */}
      <Navbar />

      {/* Central Curved Canvas Container (fills center with rounded arches top & bottom) */}
      <main className="central-canvas-container">
        <Hero />
        <ProjectsStack onSelectCaseStudy={(proj) => setSelectedCaseStudy(proj)} />
        <ToolsMarquee />
        <SkillsGrid />
        <ServicesGrid />
        <Milestones />
        <AboutMe />
        <ContactSection />
        <Footer />
      </main>

      {/* Outer bottom bar on the blue background */}
      <div className="outer-bottom-bar">
        <div className="outer-copyright">
          © 2026 — Uwase Sonia
        </div>
        <div className="outer-legal-links">
          <a href="#hero">Privacy Policy</a>
          <a href="#hero">Cookies</a>
          <a href="#hero">Terms &amp; Conditions</a>
        </div>
      </div>

      {/* Case Study Modal */}
      <CaseStudyModal 
        project={selectedCaseStudy} 
        onClose={() => setSelectedCaseStudy(null)} 
      />
    </div>
  );
}
