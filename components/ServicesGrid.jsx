'use client';

import React from 'react';
import { 
  Smartphone, 
  Monitor, 
  Cpu, 
  Palette, 
  Eye, 
  Layers, 
  Compass, 
  Code2, 
  Sparkles, 
  Server, 
  ShieldCheck, 
  Cloud, 
  Banknote, 
  ArrowUpRight 
} from 'lucide-react';

const SERVICES = [
  {
    id: 'ui-ux',
    title: 'UX/UI Design',
    subtitle: 'Turn your app into a masterpiece.',
    price: 'Starting from $300',
    icon: <Smartphone size={22} strokeWidth={2} />,
    iconBg: '#f2eef8',
    features: [
      {
        text: 'Figma designs',
        icon: <Palette size={18} strokeWidth={1.8} />
      },
      {
        text: 'User testing',
        icon: <Eye size={18} strokeWidth={1.8} />
      },
      {
        text: 'UI Design & Systems',
        icon: <Layers size={18} strokeWidth={1.8} />
      }
    ]
  },
  {
    id: 'web-design',
    title: 'Web & Frontend Design',
    subtitle: 'Ready high-performance website for you.',
    price: 'Starting from $500',
    icon: <Monitor size={22} strokeWidth={2} />,
    iconBg: '#eef2f8',
    features: [
      {
        text: 'Wireframes & Interactive Prototypes',
        icon: <Compass size={18} strokeWidth={1.8} />
      },
      {
        text: 'Next.js & React Implementation',
        icon: <Code2 size={18} strokeWidth={1.8} />
      },
      {
        text: 'Responsive & Micro-animations',
        icon: <Sparkles size={18} strokeWidth={1.8} />
      }
    ]
  },
  {
    id: 'fullstack-app',
    title: 'Full-Stack Development',
    subtitle: 'End-to-end robust web & mobile applications.',
    price: 'Starting from $1000',
    icon: <Cpu size={22} strokeWidth={2} />,
    iconBg: '#f8eeea',
    features: [
      {
        text: 'Custom Backend & REST/WebSocket APIs',
        icon: <Server size={18} strokeWidth={1.8} />
      },
      {
        text: 'Database Architecture & Security',
        icon: <ShieldCheck size={18} strokeWidth={1.8} />
      },
      {
        text: 'Full-Stack App + Cloud Deployment',
        icon: <Cloud size={18} strokeWidth={1.8} />
      }
    ]
  }
];

export default function ServicesGrid() {
  return (
    <section className="services-section" id="services">
      <div className="container">
        <h2 className="section-title-large" style={{ maxWidth: '840px', marginBottom: '48px' }}>
          Here are my most common expertises — contact me to build something great
        </h2>

        <div className="services-grid">
          {SERVICES.map((service) => (
            <div key={service.id} className="service-card">
              {/* Header: Soft Box Icon + Title + Subtitle */}
              <div className="service-header">
                <div className="service-icon-box" style={{ background: service.iconBg }}>
                  {service.icon}
                </div>
                <div>
                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-subtitle">{service.subtitle}</p>
                </div>
              </div>

              {/* Price Row with Lucide Banknote Icon */}
              <div className="service-price-row">
                <div className="service-row-icon">
                  <Banknote size={19} strokeWidth={1.8} />
                </div>
                <div className="service-price-text">{service.price}</div>
              </div>

              {/* Features List with Lucide Icons */}
              <ul className="service-features-list">
                {service.features.map((feature, fIdx) => (
                  <li key={fIdx} className="service-feature-item">
                    <span className="service-row-icon">{feature.icon}</span>
                    <span>{feature.text}</span>
                  </li>
                ))}
              </ul>

              {/* Dark Pill CTA */}
              <a href="#contact" className="btn-service-cta">
                <span>Contact me</span>
                <ArrowUpRight size={17} strokeWidth={2} style={{ marginLeft: '4px' }} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
