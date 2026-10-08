'use client';

import React, { useState } from 'react';
import { MessageCircle, Mail, MapPin, ArrowUpRight, Send, CheckCircle2, Github } from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setSubmitted(true);

    const waText = encodeURIComponent(`Hi Sonia, my name is ${formData.name} (${formData.email}). Message: ${formData.message}`);
    const waUrl = `https://wa.me/250795300840?text=${waText}`;

    setTimeout(() => {
      const openWA = confirm("Would you also like to deliver this note directly to Sonia's WhatsApp right now?");
      if (openWA) {
        window.open(waUrl, '_blank');
      }
    }, 500);

    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section className="contact-section" id="contact">
      <div className="container">
        <div className="contact-card">
          <div className="contact-header">
            <div className="contact-subtitle">SEND ME A MESSAGE</div>
            <h2 className="contact-title">
              Good software starts with a good conversation. Let's talk.
            </h2>
            <p className="contact-desc">
              Have a project in mind, an exciting role, or just want to say hi? Feel free to reach out. I'm always open to discussing new ideas, creative systems, or opportunities to be part of your vision.
            </p>
          </div>

          <div className="contact-layout">
            {/* Quick Action Channels */}
            <div className="contact-info-panel">
              {/* GitHub direct */}
              <a 
                href="https://github.com/Sonia-ship-it" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="channel-pill-card"
              >
                <div className="channel-left">
                  <div className="channel-icon">
                    <Github size={20} strokeWidth={2.2} />
                  </div>
                  <div>
                    <div className="channel-label">GitHub Repository</div>
                    <div className="channel-value">@Sonia-ship-it</div>
                  </div>
                </div>
                <ArrowUpRight size={18} className="channel-arrow" />
              </a>

              {/* WhatsApp direct */}
              <a 
                href="https://wa.me/250795300840" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="channel-pill-card"
              >
                <div className="channel-left">
                  <div className="channel-icon">
                    <MessageCircle size={20} strokeWidth={2.2} />
                  </div>
                  <div>
                    <div className="channel-label">Direct WhatsApp Chat</div>
                    <div className="channel-value">+250 795 300 840</div>
                  </div>
                </div>
                <ArrowUpRight size={18} className="channel-arrow" />
              </a>

              {/* Email direct */}
              <a href="mailto:uwasesonia43@gmail.com" className="channel-pill-card">
                <div className="channel-left">
                  <div className="channel-icon">
                    <Mail size={20} strokeWidth={2.2} />
                  </div>
                  <div>
                    <div className="channel-label">Direct Email</div>
                    <div className="channel-value">uwasesonia43@gmail.com</div>
                  </div>
                </div>
                <ArrowUpRight size={18} className="channel-arrow" />
              </a>

              {/* Location & Status */}
              <div className="channel-pill-card channel-pill-static">
                <div className="channel-left">
                  <div className="channel-icon">
                    <MapPin size={20} strokeWidth={2.2} />
                  </div>
                  <div>
                    <div className="channel-label">Location &amp; Availability</div>
                    <div className="channel-value">Kigali, Rwanda • Worldwide Remote</div>
                  </div>
                </div>
                <span className="contact-availability-tag">
                  <span className="status-dot"></span>
                  <span>Available</span>
                </span>
              </div>
            </div>

            {/* Interactive Form */}
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="nameInput" className="form-label">Full Name</label>
                <input 
                  type="text" 
                  id="nameInput" 
                  className="form-input" 
                  placeholder="e.g. Jane Doe"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required 
                />
              </div>

              <div className="form-group">
                <label htmlFor="emailInput" className="form-label">Email Address</label>
                <input 
                  type="email" 
                  id="emailInput" 
                  className="form-input" 
                  placeholder="jane@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required 
                />
              </div>

              <div className="form-group">
                <label htmlFor="messageInput" className="form-label">Message</label>
                <textarea 
                  id="messageInput" 
                  className="form-textarea" 
                  placeholder="Tell me about your project, timeline, or idea..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn-form-submit">
                <span>Send Message</span>
                <Send size={16} strokeWidth={2} style={{ marginLeft: '6px' }} />
              </button>

              {submitted && (
                <div className="form-feedback-toast">
                  <CheckCircle2 size={18} style={{ marginRight: '6px', verticalAlign: 'middle' }} />
                  Thank you! Your message has been prepared and sent. Sonia will connect with you shortly.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
