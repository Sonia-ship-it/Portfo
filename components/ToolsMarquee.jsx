'use client';

import React from 'react';
import { 
  Code2, 
  Layers, 
  Cpu, 
  Database, 
  Smartphone, 
  Container, 
  GitBranch, 
  Palette, 
  Terminal, 
  Boxes,
  Sparkles,
  Wrench
} from 'lucide-react';

const TOOLS = [
  { name: 'React & Next.js', icon: <Code2 size={16} strokeWidth={2.2} />, color: '#0ea5e9' },
  { name: 'TypeScript', icon: <Terminal size={16} strokeWidth={2.2} />, color: '#2563eb' },
  { name: 'Figma & UI Systems', icon: <Palette size={16} strokeWidth={2.2} />, color: '#ea580c' },
  { name: 'Tailwind CSS', icon: <Layers size={16} strokeWidth={2.2} />, color: '#06b6d4' },
  { name: 'NestJS Framework', icon: <Cpu size={16} strokeWidth={2.2} />, color: '#e11d48' },
  { name: 'Spring Boot', icon: <Boxes size={16} strokeWidth={2.2} />, color: '#16a34a' },
  { name: 'React Native', icon: <Smartphone size={16} strokeWidth={2.2} />, color: '#0284c7' },
  { name: 'PostgreSQL', icon: <Database size={16} strokeWidth={2.2} />, color: '#334155' },
  { name: 'Docker Containers', icon: <Container size={16} strokeWidth={2.2} />, color: '#0284c7' },
  { name: 'Git & Version Control', icon: <GitBranch size={16} strokeWidth={2.2} />, color: '#dc2626' },
];

export default function ToolsMarquee() {
  return (
    <section className="tools-section">
      <div className="container">
        <div className="section-pill-tag">
          <Wrench size={13} style={{ marginRight: '6px' }} />
          <span>My favorite tools</span>
        </div>
        <h2 className="section-title-large">
          Tools that power my human-centered solutions.
        </h2>
      </div>

      <div className="tools-marquee-container">
        <div className="tools-track">
          {/* Double array to create seamless infinite loop */}
          {[...TOOLS, ...TOOLS].map((tool, idx) => (
            <div key={idx} className="tool-chip">
              <span className="tool-chip-icon" style={{ color: tool.color, display: 'inline-flex', alignItems: 'center' }}>
                {tool.icon}
              </span>
              <span>{tool.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
