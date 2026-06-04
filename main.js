/**
 * BRAID Compute Architecture Manifesto
 * Main entry – bootstraps accordion sections, bottom nav, i18n,
 * and the live radar coherence counter
 */

import { initOracleConsole } from './oracle.js';

document.addEventListener('DOMContentLoaded', () => {
  initAccordions();
  initNavPills();
  initFadeObserver();
  initRadarCounter();
  initOracleConsole();
});

/* ─── Radar Live Counter ─── */

function initRadarCounter() {
  const valueEl = document.getElementById('radar-value');
  const statusEl = document.getElementById('radar-status');
  const statLayerEl = document.getElementById('stat-layer');
  const statSyncEl = document.getElementById('stat-sync');
  const statNodesEl = document.getElementById('stat-nodes');
  if (!valueEl) return;

  const START = 84.2;
  const TARGET = 99.99;
  const DURATION = 90_000; // 90 seconds from 84.2 → ~100

  let startTime = null;

  // Easing: slow start, accelerating finish (ease-in cubic)
  function easeInCubic(t) {
    return t * t * t;
  }

  function tick(timestamp) {
    if (!startTime) startTime = timestamp;
    const elapsed = timestamp - startTime;
    const rawProgress = Math.min(elapsed / DURATION, 1);
    const easedProgress = easeInCubic(rawProgress);

    const current = START + (TARGET - START) * easedProgress;
    const display = current < 99.99 ? current.toFixed(1) : '100.0';

    valueEl.textContent = display;
    if (statLayerEl) statLayerEl.textContent = display;

    // Update status text at thresholds
    if (statusEl) {
      if (current >= 99.9) {
        statusEl.textContent = 'PHASE-LOCKED ✓';
        statusEl.style.color = '#00ff88';
        valueEl.classList.add('is-target');
      } else if (current >= 95) {
        statusEl.textContent = 'NEAR LOCK';
        statusEl.style.color = '#a855f7';
      } else if (current >= 90) {
        statusEl.textContent = 'CONVERGING';
        statusEl.style.color = '#a855f7';
      }
    }

    // Keep animating: after reaching target, do subtle micro-jitter
    if (rawProgress < 1) {
      requestAnimationFrame(tick);
    } else {
      // At 100% — hold briefly then drift ±0.01 forever
      requestAnimationFrame(microDrift);
    }
  }

  function microDrift(timestamp) {
    // Subtle ±0.01 jitter around 100.0 to keep it "alive"
    const jitter = 100 + Math.sin(timestamp * 0.001) * 0.01;
    valueEl.textContent = jitter < 100 ? jitter.toFixed(1) : '100.0';
    if (statLayerEl) statLayerEl.textContent = jitter < 100 ? jitter.toFixed(1) : '100.0';
    requestAnimationFrame(microDrift);
  }

  requestAnimationFrame(tick);

  // Subtle Hz jitter for the sync stat
  if (statSyncEl) {
    setInterval(() => {
      const base = 39420;
      const drift = Math.floor(Math.random() * 5) - 2; // ±2 Hz
      statSyncEl.textContent = (base + drift).toLocaleString();
    }, 1200);
  }

  // Subtle node count creeps up
  if (statNodesEl) {
    let nodes = 1.40;
    setInterval(() => {
      nodes = Math.min(nodes + 0.001, 1.50);
      statNodesEl.textContent = nodes.toFixed(2) + 'M';
    }, 3000);
  }
}

/* ─── Accordion Sections ─── */

function initAccordions() {
  const cards = document.querySelectorAll('.section-card');

  cards.forEach((card) => {
    const header = card.querySelector('.section-card__header');
    if (!header) return;

    header.addEventListener('click', () => toggleCard(card));
    header.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggleCard(card);
      }
    });
  });
}

function toggleCard(card) {
  const isOpen = card.classList.contains('is-open');
  card.classList.toggle('is-open');
  const header = card.querySelector('.section-card__header');
  if (header) header.setAttribute('aria-expanded', String(!isOpen));

  // Update nav pill active state
  const sectionId = card.id;
  updateNavPills(sectionId, !isOpen);
}

/* ─── Bottom Nav Pills ─── */

function initNavPills() {
  const pills = document.querySelectorAll('.nav-pill');

  pills.forEach((pill) => {
    pill.addEventListener('click', () => {
      const targetId = pill.dataset.target;
      const targetCard = document.getElementById(targetId);
      if (!targetCard) return;

      // Close all other cards
      document.querySelectorAll('.section-card').forEach((card) => {
        if (card.id !== targetId) {
          card.classList.remove('is-open');
          const h = card.querySelector('.section-card__header');
          if (h) h.setAttribute('aria-expanded', 'false');
        }
      });

      // Open target card
      if (!targetCard.classList.contains('is-open')) {
        targetCard.classList.add('is-open');
        const h = targetCard.querySelector('.section-card__header');
        if (h) h.setAttribute('aria-expanded', 'true');
      }

      // Scroll into view
      targetCard.scrollIntoView({ behavior: 'smooth', block: 'start' });

      // Update active pill
      updateNavPills(targetId, true);
    });
  });
}

function updateNavPills(activeSectionId, isActive) {
  document.querySelectorAll('.nav-pill').forEach((pill) => {
    if (isActive && pill.dataset.target === activeSectionId) {
      pill.classList.add('is-active');
    } else {
      pill.classList.remove('is-active');
    }
  });
}

/* ─── Fade-In on Scroll ─── */

function initFadeObserver() {
  const items = document.querySelectorAll('.fade-in');
  if (!items.length) return;

  if (!('IntersectionObserver' in window)) {
    items.forEach((el) => { el.style.opacity = '1'; el.style.transform = 'none'; });
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.animationPlayState = 'running';
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  items.forEach((el) => {
    el.style.animationPlayState = 'paused';
    observer.observe(el);
  });
}
