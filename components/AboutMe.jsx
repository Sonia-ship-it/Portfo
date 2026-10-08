'use client';

import React from 'react';

export default function AboutMe() {
  return (
    <section className="about-section" id="about">
      <div className="container">
        <div className="about-card">
          <div>
            <h2 className="about-headline">
              Hello, I'm Sonia!
            </h2>
            <p className="about-text-lead">
              Full Stack Engineer &amp; UI/UX Designer living in Kigali, Rwanda.
            </p>
            <div className="about-paragraphs">
              <p>
                I'm passionate about building technology that feels simple on the surface but powerful underneath. As co-founder of <strong>RoboSpati</strong> (AI &amp; Robotics) and <strong>Impano Entertainment</strong> (Creative &amp; Cinematic Production), I bridge the physical world of sensors, cameras, and embedded systems with modern cloud architectures and intuitive UI/UX design.
              </p>
              <p>
                From winning the national Robot Game trophy in the FIRST LEGO League and competing in Houston, Texas, to mentoring first-year engineers at Rwanda Coding Academy in rapid ideation and prototyping, I build with curiosity, precision, and human impact at the center.
              </p>
            </div>

            {/* Stats */}
            <div className="about-stats-row">
              <div className="stat-item">
                <h4>02+</h4>
                <p>Years Mastery</p>
              </div>
              <div className="stat-item">
                <h4>10+</h4>
                <p>Projects Shipped</p>
              </div>
              <div className="stat-item">
                <h4>∞</h4>
                <p>Curiosity Level</p>
              </div>
            </div>

            <div className="about-buttons">
              <a 
                href="https://weisheit.vercel.app/CV.pdf" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-primary-pill"
              >
                Download Résumé (PDF) ↗
              </a>
              <a href="#contact" className="btn-secondary-pill">
                Send me a message
              </a>
            </div>
          </div>

          <div className="about-image-wrapper">
            <img 
              src="/assets/images/sonia_portrait.png" 
              alt="Uwase Sonia, Full Stack Software Engineer" 
              loading="lazy" 
            />
          </div>
        </div>
      </div>
    </section>
  );
}
