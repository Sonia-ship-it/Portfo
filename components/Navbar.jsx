'use client';

import React from 'react';

export default function Navbar() {
  return (
    <header className="top-site-bar">
      <a href="#" className="brand-title">
        UWASE SONIA
      </a>
      <nav className="header-nav-group">
        <a href="#work" className="header-nav-link">Work</a>
        <a href="#services" className="header-nav-link">Pricing</a>
        <a href="#contact" className="header-contact-btn">Contact</a>
      </nav>
    </header>
  );
}
