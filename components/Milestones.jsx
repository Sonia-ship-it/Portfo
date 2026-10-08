'use client';

import React from 'react';
import { 
  Briefcase, 
  Award, 
  Trophy, 
  Medal, 
  Sparkles, 
  Cpu, 
  Film,
  TrendingUp, 
  Users2, 
  ShieldCheck,
  ExternalLink
} from 'lucide-react';

export default function Milestones() {
  return (
    <section className="milestones-section" id="milestones">
      <div className="container">
        <div className="section-pill-tag">
          <TrendingUp size={14} className="tag-icon" />
          <span>Activities &amp; Journey</span>
        </div>
        <h2 className="section-title-large">
          Activities, leadership ventures, and honors reflecting real-world impact
        </h2>

        <div className="milestones-grid">
          {/* Ventures & Roles Column */}
          <div className="milestones-card-group">
            <h3 className="section-group-title">
              <span className="group-title-icon"><Briefcase size={20} strokeWidth={2} /></span>
              <span>Ventures &amp; Leadership</span>
            </h3>

            {/* RoboSpati */}
            <div className="timeline-card">
              <div className="timeline-meta">
                <span className="timeline-period">Co-founder</span>
                <span className="timeline-company">RoboSpati • Rwanda</span>
              </div>
              <h4 className="timeline-role" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span>RoboSpati — AI &amp; Robotics</span>
                <a href="https://robospati.com" target="_blank" rel="noopener noreferrer" style={{ fontSize: '0.82rem', color: 'var(--text-muted)', display: 'inline-flex', alignItems: 'center', gap: '3px' }}>
                  robospati.com <ExternalLink size={12} />
                </a>
              </h4>
              <p className="timeline-desc">
                Pioneering solutions combining software, artificial intelligence, robotics, and practical problem-solving. Exploring embedded systems, cameras, sensors, and intelligent hardware-software interfaces.
              </p>
            </div>

            {/* Impano Entertainment */}
            <div className="timeline-card">
              <div className="timeline-meta">
                <span className="timeline-period">Co-founder</span>
                <span className="timeline-company">Impano Entertainment • Rwanda</span>
              </div>
              <h4 className="timeline-role" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span>Impano Entertainment</span>
                <a href="https://impanoentertainment.com" target="_blank" rel="noopener noreferrer" style={{ fontSize: '0.82rem', color: 'var(--text-muted)', display: 'inline-flex', alignItems: 'center', gap: '3px' }}>
                  impanoentertainment.com <ExternalLink size={12} />
                </a>
              </h4>
              <p className="timeline-desc">
                Directing creative and technical strategy for an elite production company spanning cinematography, 4K/8K cinema, visual effects, drone visuals, sound design, commercials, and narrative documentaries.
              </p>
            </div>

            {/* Government Technology Projects */}
            <div className="timeline-card">
              <div className="timeline-meta">
                <span className="timeline-period">~3 Months Engagement</span>
                <span className="timeline-company">Public Sector • Rwanda</span>
              </div>
              <h4 className="timeline-role">Civic Technology Projects</h4>
              <p className="timeline-desc">
                Engineered software solutions addressing real-world government and civic needs. Handled confidential requirements, scalable architectures, and practical operational deployment.
              </p>
            </div>

            {/* RCA Mentorship */}
            <div className="timeline-card">
              <div className="timeline-meta">
                <span className="timeline-period">Leadership &amp; Mentorship</span>
                <span className="timeline-company">Rwanda Coding Academy</span>
              </div>
              <h4 className="timeline-role">Ideation &amp; Prototyping Mentor</h4>
              <p className="timeline-desc">
                Volunteering to coach first-year engineering students through rapid ideation, user testing, and practical software/hardware prototyping.
              </p>
            </div>
          </div>

          {/* Honors & Competitions Column */}
          <div className="trophies-card-group">
            <h3 className="section-group-title">
              <span className="group-title-icon"><Award size={20} strokeWidth={2} /></span>
              <span>Honors &amp; Competitions</span>
            </h3>

            {/* FIRST LEGO League */}
            <div className="trophy-item">
              <div className="trophy-badge" style={{ background: '#ede6e5', color: '#483831' }}>
                <Trophy size={20} strokeWidth={2} />
              </div>
              <div className="trophy-info">
                <h4>FIRST LEGO League (2024)</h4>
                <div className="award-title">National Champion — Robot Game Winner</div>
                <p>Served as Researcher and Secretary. Team won the national Robot Game trophy and earned the honor to represent Rwanda internationally in Houston, Texas.</p>
              </div>
            </div>

            {/* Coderina STEM Camp */}
            <div className="trophy-item">
              <div className="trophy-badge" style={{ background: '#ede6e5', color: '#483831' }}>
                <Medal size={20} strokeWidth={2} />
              </div>
              <div className="trophy-info">
                <h4>Coderina STEM Summer Camp (2024)</h4>
                <div className="award-title">1st Place — Project Competition Winner</div>
                <p>Developed practical solutions with fellow students, applying robotics and STEM methodology outside traditional classroom settings.</p>
              </div>
            </div>

            {/* SparkLock School Hackathon */}
            <div className="trophy-item">
              <div className="trophy-badge" style={{ background: '#ede6e5', color: '#483831' }}>
                <Sparkles size={20} strokeWidth={2} />
              </div>
              <div className="trophy-info">
                <h4>SparkLock — School Hackathon</h4>
                <div className="award-title">2nd Place Overall</div>
                <p>Architected hazard detection for electrical faults and gas leaks with relay modules, temperature sensors, buzzers, and a companion mobile app.</p>
              </div>
            </div>

            {/* Freelance UI/UX Design */}
            <div className="trophy-item">
              <div className="trophy-badge" style={{ background: '#ede6e5', color: '#483831' }}>
                <Users2 size={20} strokeWidth={2} />
              </div>
              <div className="trophy-info">
                <h4>Freelance UI/UX Engagements</h4>
                <div className="award-title">Hospitality &amp; Web Systems (~3 Months)</div>
                <p>Designed high-impact digital experiences for hotel operations and commercial platforms in Rwanda, blending technical feasibility with human-centered aesthetics.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
