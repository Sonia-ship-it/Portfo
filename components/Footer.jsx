'use client';

import React from 'react';
import { Github, MessageCircle, ArrowUpRight, Mail, Sparkles } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="canvas-footer">
      <div className="canvas-footer-grid">
        {/* Col 1: Social channels & direct contact */}
        <div className="footer-channel-col">
          <div className="footer-pretitle">
            <Sparkles size={13} style={{ marginRight: '6px', color: '#b45309' }} />
            <span>Connect &amp; Collaborate</span>
          </div>
          <h4 className="footer-heading">Direct Channels</h4>
          <div className="footer-channel-buttons">
            {/* GitHub */}
            <a 
              href="https://github.com/Sonia-ship-it" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="channel-classic-btn"
            >
              <div className="channel-btn-left">
                <span className="channel-icon-tag"><Github size={18} strokeWidth={2.2} /></span>
                <div>
                  <div className="channel-label">GitHub Repository</div>
                  <div className="channel-value">@Sonia-ship-it</div>
                </div>
              </div>
              <ArrowUpRight size={16} className="channel-arrow" />
            </a>

            {/* WhatsApp */}
            <a 
              href="https://wa.me/250795300840" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="channel-classic-btn"
            >
              <div className="channel-btn-left">
                <span className="channel-icon-tag" style={{ color: '#15803d' }}><MessageCircle size={18} strokeWidth={2.2} /></span>
                <div>
                  <div className="channel-label">Direct WhatsApp Chat</div>
                  <div className="channel-value">+250 795 300 840</div>
                </div>
              </div>
              <ArrowUpRight size={16} className="channel-arrow" />
            </a>

            {/* Email */}
            <a 
              href="mailto:uwasesonia43@gmail.com" 
              className="channel-classic-btn"
            >
              <div className="channel-btn-left">
                <span className="channel-icon-tag" style={{ color: '#483831' }}><Mail size={18} strokeWidth={2.2} /></span>
                <div>
                  <div className="channel-label">Direct Email</div>
                  <div className="channel-value">uwasesonia43@gmail.com</div>
                </div>
              </div>
              <ArrowUpRight size={16} className="channel-arrow" />
            </a>
          </div>
        </div>

        {/* Col 2: Navigation */}
        <div className="footer-links-col">
          <div className="footer-pretitle">Sitemap</div>
          <h4 className="footer-heading">Navigation</h4>
          <ul className="footer-vertical-list">
            <li><a href="#hero">Home</a></li>
            <li><a href="#work">Featured Work</a></li>
            <li><a href="#skills">Skills &amp; Methods</a></li>
            <li><a href="#services">Services &amp; Pricing</a></li>
            <li><a href="#milestones">Activities &amp; Honors</a></li>
            <li><a href="#about">About Sonia</a></li>
            <li><a href="#contact">Get In Touch</a></li>
          </ul>
        </div>

        {/* Col 3: Works */}
        <div className="footer-links-col">
          <div className="footer-pretitle">Portfolio</div>
          <h4 className="footer-heading">Featured Works</h4>
          <ul className="footer-vertical-list">
            <li><a href="#work">Mutekano — Civic Safety</a></li>
            <li><a href="#work">Cantora — Audio Engine</a></li>
            <li><a href="#work">SparkLock — IoT Hazard Prevention</a></li>
            <li><a href="#work">UPS EdgeReach — Hotel ERP</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-inner-bottom">
        <div className="footer-brand-micro">
          UWASE SONIA • KIGALI, RWANDA
        </div>
      </div>
    </footer>
  );
}
