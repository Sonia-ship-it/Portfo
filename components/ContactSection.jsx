'use client';

import React, { useState } from 'react';
import { MessageCircle, Mail, MapPin, ArrowUpRight, Send, CheckCircle2, Github, Loader2 } from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // 'idle' | 'sending' | 'success' | 'fallback'
  const [submittedData, setSubmittedData] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus('sending');
    const currentData = { ...formData };
    setSubmittedData(currentData);

    const emailSubject = `Portfolio Message from ${currentData.name}`;
    const emailBody = `Hello Sonia,\n\n${currentData.message}\n\nFrom: ${currentData.name}\nEmail: ${currentData.email}\nSent via uwase-sonia portfolio`;
    const mailtoUrl = `mailto:uwasesonia43@gmail.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;

    try {
      const response = await fetch('https://formsubmit.co/ajax/uwasesonia43@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: currentData.name,
          email: currentData.email,
          message: currentData.message,
          _subject: `New Portfolio Message from ${currentData.name}`,
          _replyto: currentData.email,
          _captcha: 'false'
        })
      });

      const result = await response.json().catch(() => ({}));

      if (response.ok || result.success === 'true' || result.success === true) {
        setStatus('success');
      } else {
        // Fallback: trigger native mail client directly pre-addressed to uwasesonia43@gmail.com
        window.location.href = mailtoUrl;
        setStatus('fallback');
      }
    } catch (err) {
      // In case of ad-blocker or network issues, trigger native mail client directly
      window.location.href = mailtoUrl;
      setStatus('fallback');
    }

    setFormData({ name: '', email: '', message: '' });
  };

  const mailtoLink = submittedData 
    ? `mailto:uwasesonia43@gmail.com?subject=${encodeURIComponent(`Portfolio Message from ${submittedData.name}`)}&body=${encodeURIComponent(`Hello Sonia,\n\n${submittedData.message}\n\nFrom: ${submittedData.name}\nEmail: ${submittedData.email}`)}`
    : `mailto:uwasesonia43@gmail.com`;

  const waLink = submittedData
    ? `https://wa.me/250795300840?text=${encodeURIComponent(`Hi Sonia, my name is ${submittedData.name} (${submittedData.email}). Message: ${submittedData.message}`)}`
    : `https://wa.me/250795300840`;

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

              <button 
                type="submit" 
                className="btn-form-submit" 
                disabled={status === 'sending'}
              >
                {status === 'sending' ? (
                  <>
                    <Loader2 size={16} className="spin-indicator" style={{ marginRight: '8px' }} />
                    <span>Sending to uwasesonia43@gmail.com...</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send size={16} strokeWidth={2} style={{ marginLeft: '6px' }} />
                  </>
                )}
              </button>

              {status === 'success' && (
                <div className="form-feedback-toast success">
                  <div className="feedback-header">
                    <CheckCircle2 size={18} color="#16a34a" />
                    <span>Message Sent to uwasesonia43@gmail.com!</span>
                  </div>
                  <p style={{ margin: '4px 0 0 0', fontSize: '0.88rem' }}>
                    Thank you{submittedData?.name ? `, ${submittedData.name}` : ''}! Your note has been delivered to Sonia's inbox. She will connect with you shortly at <strong>{submittedData?.email}</strong>.
                  </p>
                  <div className="feedback-actions">
                    <a href={mailtoLink} className="btn-feedback-channel">
                      <Mail size={14} />
                      <span>Open in Mail App</span>
                    </a>
                    <a href={waLink} target="_blank" rel="noopener noreferrer" className="btn-feedback-channel whatsapp">
                      <MessageCircle size={14} />
                      <span>Send via WhatsApp</span>
                    </a>
                  </div>
                </div>
              )}

              {status === 'fallback' && (
                <div className="form-feedback-toast fallback">
                  <div className="feedback-header">
                    <CheckCircle2 size={18} color="#16a34a" />
                    <span>Ready to deliver to uwasesonia43@gmail.com</span>
                  </div>
                  <p style={{ margin: '4px 0 0 0', fontSize: '0.88rem' }}>
                    Your message has been pre-formatted for Sonia. If your default mail client didn't open automatically, click below to send it:
                  </p>
                  <div className="feedback-actions">
                    <a href={mailtoLink} className="btn-feedback-channel">
                      <Mail size={14} />
                      <span>Send Email Now ↗</span>
                    </a>
                    <a href={waLink} target="_blank" rel="noopener noreferrer" className="btn-feedback-channel whatsapp">
                      <MessageCircle size={14} />
                      <span>Send on WhatsApp ↗</span>
                    </a>
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
