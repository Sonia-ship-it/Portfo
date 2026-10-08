'use client';

import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function CaseStudyModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true">
        <motion.div 
          className="modal-dialog" 
          onClick={(e) => e.stopPropagation()}
          initial={{ opacity: 0, y: 40, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 30, scale: 0.96 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
            &times;
          </button>
          
          <div className="modal-badge">{project.category}</div>
          <h2 className="modal-title">{project.title}</h2>
          
          {project.imageSrc && (
            <div className="modal-image-preview">
              <img src={project.imageSrc} alt={project.title} />
            </div>
          )}

          <div className="modal-specs-grid">
            <div>
              <div className="spec-title">Role</div>
              <div className="spec-value">{project.role}</div>
            </div>
            <div>
              <div className="spec-title">Year</div>
              <div className="spec-value">{project.year}</div>
            </div>
            <div>
              <div className="spec-title">Technologies</div>
              <div className="spec-value">{project.stack}</div>
            </div>
          </div>

          <div className="modal-content-text">
            <h4 style={{ marginBottom: '8px', color: 'var(--text-primary)' }}>Overview</h4>
            <p style={{ marginBottom: '16px' }}>{project.overview}</p>

            <h4 style={{ marginBottom: '8px', color: 'var(--text-primary)' }}>The Challenge</h4>
            <p style={{ marginBottom: '16px' }}>{project.problem}</p>

            <h4 style={{ marginBottom: '8px', color: 'var(--text-primary)' }}>The Solution &amp; Engineering</h4>
            <p>{project.solution}</p>
          </div>

          <div className="modal-actions">
            <a 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-primary-pill"
            >
              Explore Live Project ↗
            </a>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
