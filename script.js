/**
 * Uwase Sonia - Portfolio Interactive Behaviors
 * Inspired by the seamless, high-polish UX of michelleirby.eu
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Projects Data for Case Study Modal
  const projectsData = {
    sparklock: {
      category: 'Full Stack + IoT Security',
      title: 'SparkLock: Smart Access Control for the Modern Physical World',
      image: 'assets/images/mockup_sparklock.jpg',
      overview: 'SparkLock is an enterprise-grade cloud connected smart lock management ecosystem built for modern properties. It enables real-time remote access governance, automated credential rotation, and immediate physical event streaming over bi-directional WebSockets.',
      problem: 'Physical key handling and fragmented smart lock apps create security gaps and friction for multi-tenant and short-term hospitality operations.',
      solution: 'Engineered a resilient distributed architecture using NestJS and Spring Boot with React Native clients, ensuring low-latency commands, encrypted audit trails, and biometric authentication.',
      stack: 'NestJS • Spring Boot • React Native • WebSocket • PostgreSQL • Docker',
      role: 'Full Stack & Security Architect',
      year: '2025',
      demoUrl: 'https://weisheit.vercel.app/#projects'
    },
    edgereach: {
      category: 'UI/UX Design + Enterprise ERP',
      title: 'UPS - Edgereach: Next-Gen Hotel Operations & Cost Intelligence',
      image: 'assets/images/mockup_ups_edgereach.jpg',
      overview: 'A fully integrated hotel operations management dashboard unifying inventory control, point of sale (POS) analytics, recipe costing, and real-time revenue performance. Designed to reduce food wastage and eliminate manual administrative overhead.',
      problem: 'Hoteliers struggled with disjointed spreadsheets and delayed stock accounting across food, beverage, and amenities divisions.',
      solution: 'Conducted user research with hospitality operators to craft an intuitive modular design system in Figma and Adobe XD, featuring actionable KPIs, automated purchase order workflows, and low-stock alerts.',
      stack: 'Figma • Adobe XD • UI/UX Design • Design Systems • Data Viz',
      role: 'Lead UI/UX Designer',
      year: '2026',
      demoUrl: 'https://weisheit.vercel.app/#projects'
    },
    hilink: {
      category: 'Frontend Architecture + Next.js',
      title: 'Hilink: Curating Adventure & Remote Travel at Scale',
      image: '',
      overview: 'A high-performance travel booking and expedition guide web platform built with React, Next.js, and TypeScript. Helps globetrotters explore uncharted destinations, view curated package itineraries, and book seamlessly.',
      problem: 'Traditional booking sites suffer from heavy page weight, sluggish mobile navigation, and confusing trip discovery filters.',
      solution: 'Implemented responsive component modularity, optimized server-side rendering in Next.js, and sleek Tailwind CSS animations for lightning-fast page transitions.',
      stack: 'Next.js • TypeScript • Tailwind CSS • Framer Motion',
      role: 'Frontend Engineer',
      year: '2025',
      demoUrl: 'https://weisheit.vercel.app/#projects'
    },
    saveit: {
      category: 'Fintech + Mobile App',
      title: 'SaveIt: Smart Financial Wellness & Habit-Forming Savings',
      image: '',
      overview: 'A smart financial wellness and budgeting companion that empowers young professionals and students to track spending, set micro-savings targets, and build enduring financial habits through gamified milestones.',
      problem: 'Budgeting applications often feel clinical, tedious to update, and lack encouraging visual progression.',
      solution: 'Designed fluid micro-interactions with Framer Motion, integrated bank categorization logic, and paired a secure Spring Boot/PostgreSQL backend with a responsive React Native mobile experience.',
      stack: 'React Native • PostgreSQL • Spring Boot • Framer Motion',
      role: 'Full Stack Developer',
      year: '2025',
      demoUrl: 'https://weisheit.vercel.app/#projects'
    },
    innsync: {
      category: 'Product Design & Booking',
      title: 'INN-Sync: Frictionless Hospitality Booking & Room Allocation',
      image: '',
      overview: 'A modern guest booking and room allocation portal bridging guest mobile check-ins with front-desk management operations.',
      problem: 'Guests faced long reception queues while hotel staff wrestled with double-booking anomalies.',
      solution: 'Designed end-to-end guest flows, contactless key generation, and live occupancy telemetry with comprehensive Figma prototypes.',
      stack: 'Figma • UI/UX Design • Wireframing • User Journeys',
      role: 'Product Designer',
      year: '2026',
      demoUrl: 'https://weisheit.vercel.app/#projects'
    },
    smartlibrary: {
      category: 'Full Stack MERN',
      title: 'Smart Library: High-Throughput Digital Resource Management',
      image: '',
      overview: 'A cloud-based library catalog and checkout automation system handling real-time reservation queues, book asset tracking, and member administration.',
      problem: 'Institutional book inventories frequently suffered from indexing latency and inaccurate loan tracking.',
      solution: 'Constructed an asynchronous MERN stack architecture with Mongo aggregation pipelines and instant patron notifications.',
      stack: 'React • Express.js • MongoDB • Node.js • Tailwind CSS',
      role: 'Full Stack Developer',
      year: '2024',
      demoUrl: 'https://weisheit.vercel.app/#projects'
    }
  };

  // 2. Interactive Hero Pill Greetings
  const heroPill = document.getElementById('heroPillBadge');
  if (heroPill) {
    const greetings = [
      'You look great today. ✨',
      'Crafting aesthetic digital solutions 🎨',
      'Architecting resilient software ⚡',
      'Full-Stack & Security minded 🔒',
      'Ready for your next challenge 🚀'
    ];
    let greetIndex = 0;
    heroPill.addEventListener('click', () => {
      greetIndex = (greetIndex + 1) % greetings.length;
      heroPill.innerHTML = greetings[greetIndex];
      heroPill.style.transform = 'scale(1.08)';
      setTimeout(() => {
        heroPill.style.transform = '';
      }, 200);
    });
  }

  // 3. Case Study Modal Handlers
  const modal = document.getElementById('caseStudyModal');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const modalBadge = document.getElementById('modalBadge');
  const modalTitle = document.getElementById('modalTitle');
  const modalImagePreview = document.getElementById('modalImagePreview');
  const modalImg = document.getElementById('modalImg');
  const modalOverview = document.getElementById('modalOverview');
  const modalProblem = document.getElementById('modalProblem');
  const modalSolution = document.getElementById('modalSolution');
  const modalRole = document.getElementById('modalRole');
  const modalYear = document.getElementById('modalYear');
  const modalStack = document.getElementById('modalStack');
  const modalDemoBtn = document.getElementById('modalDemoBtn');

  function openCaseStudy(projectId) {
    const data = projectsData[projectId];
    if (!data) return;

    modalBadge.textContent = data.category;
    modalTitle.textContent = data.title;
    modalOverview.textContent = data.overview;
    modalProblem.textContent = data.problem;
    modalSolution.textContent = data.solution;
    modalRole.textContent = data.role;
    modalYear.textContent = data.year;
    modalStack.textContent = data.stack;
    modalDemoBtn.href = data.demoUrl;

    if (data.image) {
      modalImg.src = data.image;
      modalImagePreview.style.display = 'block';
    } else {
      modalImagePreview.style.display = 'none';
    }

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }

  document.querySelectorAll('[data-project]').forEach(button => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      const projId = button.getAttribute('data-project');
      openCaseStudy(projId);
    });
  });

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeModal);
  }

  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeModal();
      }
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal && modal.classList.contains('active')) {
      closeModal();
    }
  });

  // 4. Contact Form Submission & Toast
  const contactForm = document.getElementById('contactForm');
  const formToast = document.getElementById('formToast');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('userName').value.trim();
      const email = document.getElementById('userEmail').value.trim();
      const message = document.getElementById('userMessage').value.trim();

      if (!name || !email || !message) {
        alert('Please fill out all required fields.');
        return;
      }

      // Display positive feedback toast
      formToast.style.display = 'block';
      formToast.textContent = `Thank you, ${name}! Your message has been prepared. Sonia will connect with you shortly.`;
      
      // Also provide a quick direct WhatsApp option if preferred
      const waText = encodeURIComponent(`Hi Sonia, my name is ${name} (${email}). Message: ${message}`);
      const waUrl = `https://wa.me/250795300840?text=${waText}`;

      setTimeout(() => {
        const wantsWhatsApp = confirm("Would you also like to send this message directly to Sonia's WhatsApp right now?");
        if (wantsWhatsApp) {
          window.open(waUrl, '_blank');
        }
      }, 600);

      contactForm.reset();
      setTimeout(() => {
        formToast.style.display = 'none';
      }, 8000);
    });
  }

  // 5. Mobile Menu Toggle
  const mobileToggle = document.getElementById('mobileToggle');
  const navMenu = document.getElementById('navMenu');

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      navMenu.classList.toggle('open');
    });

    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
      });
    });
  }

  // 6. Navigation Active State on Scroll
  const sections = document.querySelectorAll('section[id]');
  window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;
    sections.forEach(section => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 120;
      const sectionId = section.getAttribute('id');
      const navItem = document.querySelector(`.nav-link[href*="${sectionId}"]`);

      if (navItem) {
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          navItem.classList.add('active');
        } else {
          navItem.classList.remove('active');
        }
      }
    });
  });
});
