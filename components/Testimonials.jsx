'use client';

import React from 'react';

const TESTIMONIALS = [
  {
    quote: '"Sonia is the best frontend developer I have ever worked with. Her attention to detail, speed of execution, and design intuition set an extraordinary bar."',
    name: 'Kaliza Esther',
    role: 'Frontend Developer',
    avatarBg: '#4338ca',
    initial: 'K'
  },
  {
    quote: '"Sonia demonstrates leadership through support rather than authority. By mentoring others, encouraging questions, and guiding teammates through challenges, she helps build confident and capable developers."',
    name: 'Byiringiro Aloys',
    role: 'Software Engineer & Colleague',
    avatarBg: '#047857',
    initial: 'B'
  },
  {
    quote: '"Sonia is a dependable and hardworking developer who consistently delivers high-grade work and maintains an inspiring, positive attitude across tight project timelines."',
    name: 'Irasubiza Mucyo Bertrand',
    role: 'Collaborator & Engineer',
    avatarBg: '#b45309',
    initial: 'I'
  }
];

export default function Testimonials() {
  return (
    <section className="testimonials-section">
      <div className="container">
        <div className="section-pill-tag">
          Trusted by visionaries 🌟
        </div>
        <h2 className="section-title-large">
          Collaborating with forward-thinking leaders to build memorable experiences
        </h2>

        <div className="testimonials-grid">
          {TESTIMONIALS.map((t, idx) => (
            <div key={idx} className="testimonial-card">
              <div>
                <div className="testimonial-verified">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  Authenticated
                </div>
                <p className="testimonial-quote">{t.quote}</p>
              </div>
              <div className="testimonial-author">
                <div className="author-avatar" style={{ background: t.avatarBg }}>
                  {t.initial}
                </div>
                <div>
                  <div className="author-name">{t.name}</div>
                  <div className="author-role">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
