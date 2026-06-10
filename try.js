'use strict';

(function () {
  const topnav = document.querySelector('[data-topnav]');
  const navToggle = document.querySelector('[data-nav-toggle]');
  const navLinks = Array.from(document.querySelectorAll('[data-nav-link]'));
  const sections = navLinks
    .map((a) => document.querySelector(a.getAttribute('href')))
    .filter(Boolean);

  // ---- footer year ----
  const yearEl = document.querySelector('[data-year]');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // ---- topnav scrolled state ----
  const onScroll = () => {
    if (!topnav) return;
    topnav.classList.toggle('is-scrolled', window.scrollY > 8);
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  // ---- mobile menu ----
  if (navToggle && topnav) {
    navToggle.addEventListener('click', () => {
      const open = topnav.classList.toggle('is-menu-open');
      navToggle.setAttribute('aria-expanded', String(open));
    });
    navLinks.forEach((link) =>
      link.addEventListener('click', () => {
        topnav.classList.remove('is-menu-open');
        navToggle.setAttribute('aria-expanded', 'false');
      })
    );
  }

  // ---- scrollspy: highlight nav link for the section in view ----
  if (sections.length && 'IntersectionObserver' in window) {
    const linkBySection = new Map();
    navLinks.forEach((link) => {
      const id = link.getAttribute('href').slice(1);
      linkBySection.set(id, link);
    });

    const spy = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const id = entry.target.id;
          navLinks.forEach((l) => l.classList.remove('is-active'));
          const active = linkBySection.get(id);
          if (active) active.classList.add('is-active');
        });
      },
      {
        // active when the section crosses the upper-middle of the viewport
        rootMargin: '-40% 0px -55% 0px',
        threshold: 0,
      }
    );

    sections.forEach((s) => spy.observe(s));
  }

  // ---- reveal-on-scroll ----
  const reveals = document.querySelectorAll('.reveal');
  if (reveals.length && 'IntersectionObserver' in window) {
    const revealObs = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-in');
            obs.unobserve(entry.target);
          }
        });
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.05 }
    );
    reveals.forEach((el) => revealObs.observe(el));
  } else {
    reveals.forEach((el) => el.classList.add('is-in'));
  }
})();
