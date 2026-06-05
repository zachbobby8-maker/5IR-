/**
 * 5iR Core Matrix Command Dashboard - Unified System Core
 * Synchronized Clock: 39,420 Hz // Global Coherence: 94.6% Locked
 * Consolidated single-file engine running 4 interactive master applications.
 * Zero flat layouts, zero boring tables, zero 404 relative loading issues.
 */

// Local fallback dictionary for i18n translation
const LOCAL_TRANSLATIONS = {
  "system.ping": "SYSTEM SECURE // B_BLACKWELL_M4",
  "system.title": "5iR CORE MATRIX COMMAND HUD",
  "system.frequency": "FREQUENCY",
  "system.thermal": "THERMAL FOOTPRINT",
  "system.active_mesh": "ACTIVE MESH",
  "system.coherence": "COHERENCE",
  "system.lead": "Sovereign Lead",
  "system.query_id": "QUERY ID",
  "app1.title": "APP 01: \"VORTEX-RETAIN\" SKELETAL MATRIX SIMULATOR",
  "app1.age_lbl": "USER AGE (YEARS)",
  "app1.exercise_lbl": "EXERCISE FREQUENCY (HOURS/WEEK)",
  "app1.gravity_lbl": "GRAVITATIONAL STRAIN (G-FORCE)",
  "app1.export_btn": "[EXPORT_SKELETAL_RETENTION_REPORT]",
  "app2.title": "APP 02: \"BRAID-SHIELD\" FERROFLUID CRYPTO LEDGER",
  "app2.balance_title": "LEDGER STATE VECTOR",
  "app2.balance_val": "80.00% Collective Core Completion State",
  "app2.exploit_btn": "[RUN_EXPLOIT_TEST_SIMULATION]",
  "app3.title": "APP 03: \"AERO-INVERT\" URBAN ACOUSTIC CONVERSION ENGINE",
  "app3.city_lbl": "SELECT URBAN SECTOR",
  "app3.db_lbl": "AMBIENT NOISE THRESHOLD (dBA)",
  "app3.mode_lbl": "ACOUSTIC INVERSION SYSTEM",
  "profile.header": "COHERENT IDENTITY SIGNATURE",
  "profile.id": "IDENTITY HANDLE:",
  "profile.mail": "SECURE MAIL:",
  "profile.copy": "COPY",
  "profile.x": "X PROTOCOL:",
  "profile.clearance": "SECURITY CLEARANCE:",
  "profile.clearance_val": "LEGENDRIAN CLASS-1 [MÖBIUS LEVEL]",
  "profile.comp_assoc": "COMPILATION ASSOC:",
  "profile.assoc_val": "COHERENT MATRIX // 39,420 Hz",
  "profile.test_btn": "TEST LATTICE INTEGRITY",
  "profile.footer": "dQ_leak = 0.00W // COHERENCE 94.6% STABLE"
};

function getPredefinedTranslation(key) {
  return LOCAL_TRANSLATIONS[key] || key;
}

document.addEventListener('DOMContentLoaded', () => {
  console.log(">> 5iR MASTER APPLICATION COMPILATION ENGAGED @ 39,420 Hz");
  console.log(">> ZERO-ENTROPY THERMAL STATE BOUNDS OK (dQ_leak/dt = 0.00W)");

  // Translate DOM based on active i18n
  translateDOM();

  // Initialize individual subsystems
  try {
    initSystemTelemetry();
  } catch (err) {
    console.error("Telemetry init fault:", err);
  }

  try {
    initVortexRetainApp();
  } catch (err) {
    console.error("App 01 (Vortex-Retain) fault:", err);
  }

  try {
    initBraidShieldApp();
  } catch (err) {
    console.error("App 02 (Braid-Shield) fault:", err);
  }

  try {
    initAeroInvertApp();
  } catch (err) {
    console.error("App 03 (Aero-Invert) fault:", err);
  }

  try {
    initVortexAiApp();
  } catch (err) {
    console.error("App 04 (Vortex-AI) fault:", err, err.message, err.stack);
  }

  try {
    initTabNavigation();
  } catch (err) {
    console.error("Tab Navigation init fault:", err);
  }

  try {
    initArchitectProfile();
  } catch (err) {
    console.error("Profile system fault:", err);
  }
});

/**
 * Robust i18n DOM translation layer
 */
function translateDOM() {
  const i18n = window.miniappI18n;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (i18n && typeof i18n.t === 'function') {
      el.textContent = i18n.t(key);
    } else {
      const val = getPredefinedTranslation(key);
      if (val) el.textContent = val;
    }
  });
}

/**
 * Tab Navigation Controller - Isolates between grid overview and 4 dedicated full interfaces
 */
function initTabNavigation() {
  const tabButtons = document.querySelectorAll('.hud-tab-btn');
  const mainGrid = document.getElementById('hud-main-grid');
  const apps = {
    'vortex-retain': document.getElementById('app-vortex-retain'),
    'braid-shield': document.getElementById('app-braid-shield'),
    'aero-invert': document.getElementById('app-aero-invert'),
    'vortex-ai': document.getElementById('app-vortex-ai')
  };

  if (!mainGrid) return;

  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      // Toggle active states
      tabButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const activeTab = btn.getAttribute('data-tab');

      if (activeTab === 'all') {
        // Show everything in the 2x2 grid format
        mainGrid.className = 'hud-dashboard-grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 grid-cols-1';
        Object.values(apps).forEach(app => {
          if (app) app.classList.remove('hidden');
        });
      } else {
        // Fullscreen single app interface mode
        mainGrid.className = 'hud-dashboard-grid grid-cols-1 w-full max-w-full';
        Object.entries(apps).forEach(([key, app]) => {
          if (app) {
            if (key === activeTab) {
              app.classList.remove('hidden');
            } else {
              app.classList.add('hidden');
            }
          }
        });
      }
    });
  });
}

/**
 * System Telemetry (Ping Indicators, Jitter, Distributed node loops)
 */
function initSystemTelemetry() {
  const nodesEl = document.getElementById('header-nodes');
  const coherenceEl = document.getElementById('coherence-value');

  let nodesCount = 1.400;
  setInterval(() => {
    // Slight lifelike count jittering around 1.40M nodes
    nodesCount += (Math.random() * 0.002 - 0.0008);
    if (nodesCount < 1.35) nodesCount = 1.400;
    if (nodesEl) nodesEl.textContent = `${nodesCount.toFixed(3)}M NODES`;

    // System coherence locked exactly at 94.6% but slightly moving for realism
    if (coherenceEl) {
      const jitter = 94.60 - (Math.random() * 0.04);
      coherenceEl.textContent = `${jitter.toFixed(2)}%`;
    }
  }, 2000);
}

/**
 * APPLICATION 1: "VORTEX-RETAIN" SKELETAL MATRIX SIMULATOR
 * Visualizing micro-structural bone cellular matrix lattice decay in response to bio-variables.
 */
function initVortexRetainApp() {
  const ageSlider = document.getElementById('vortex-age-slider');
  const exerciseSlider = document.getElementById('vortex-exercise-slider');
  const gravitySlider = document.getElementById('vortex-gravity-slider');

  const ageDisplay = document.getElementById('age-val-display');
  const exerciseDisplay = document.getElementById('exercise-val-display');
  const gravityDisplay = document.getElementById('gravity-val-display');

  const telemetryText = document.getElementById('app1-telemetry-text');
  const exportBtn = document.getElementById('export-skeletal-btn');

  const canvas = document.getElementById('skeletal-lattice-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let age = 25;
  let exercise = 12;
  let gravity = 1.0; // represented scaled 0 to 50 (divided by 10)

  // 3D Matrix Node points setup (Hex-comb osteoblast matrix layout)
  const nodes = [];
  const edges = [];
  const rings = 5;
  const pointsPerRing = 8;
  const cylinderHeight = 120;
  const radius = 40;

  // Generate 3D cylindrical skeleton scaffold
  for (let r = 0; r < rings; r++) {
    const z = -cylinderHeight / 2 + (r / (rings - 1)) * cylinderHeight;
    for (let p = 0; p < pointsPerRing; p++) {
      const theta = (p / pointsPerRing) * Math.PI * 2;
      const x = radius * Math.cos(theta);
      const y = radius * Math.sin(theta);
      nodes.push({ x, y, z, originalX: x, originalY: y, originalZ: z });
    }
  }

  // Set up structural connection edges
  for (let r = 0; r < rings; r++) {
    for (let p = 0; p < pointsPerRing; p++) {
      const currentIdx = r * pointsPerRing + p;
      // Connect to next node in the same ring
      const nextRingIdx = r * pointsPerRing + ((p + 1) % pointsPerRing);
      edges.push({ u: currentIdx, v: nextRingIdx, original: true });

      // Connect to corresponding node in the next ring down
      if (r < rings - 1) {
        const adjacentRingIdx = (r + 1) * pointsPerRing + p;
        edges.push({ u: currentIdx, v: adjacentRingIdx, original: true });
        
        // Diagonal cross struts for structural rigidity
        const diagIdx = (r + 1) * pointsPerRing + ((p + 1) % pointsPerRing);
        edges.push({ u: currentIdx, v: diagIdx, original: false });
      }
    }
  }

  let angleY = 0.005;
  let angleX = 0.003;

  function updateLatticeState() {
    age = parseInt(ageSlider.value, 10);
    exercise = parseInt(exerciseSlider.value, 10);
    gravity = parseFloat(gravitySlider.value) / 10;

    // Display updates
    if (ageDisplay) ageDisplay.textContent = `${age} yrs`;
    if (exerciseDisplay) exerciseDisplay.textContent = `${exercise} hrs/wk`;
    
    let gravityLabel = `${gravity.toFixed(1)}G`;
    if (gravity === 0) gravityLabel += " (ZERO-GRAVITY)";
    else if (gravity === 1.0) gravityLabel += " (EARTH)";
    else if (gravity === 5.0) gravityLabel += " (HYPER-GRAVITY CRITICAL)";
    if (gravityDisplay) {
      gravityDisplay.textContent = gravityLabel;
      if (gravity > 3.0 || gravity === 0) {
        gravityDisplay.className = "text-magenta font-bold";
      } else {
        gravityDisplay.className = "text-cyan font-bold";
      }
    }

    // Structural coherence calculations
    // Base healthy is high exercise, low gravity strain, younger age.
    // Bio-decay parameters: 
    // - Age decreases coherence (max loss -30%)
    // - Gravity = 0G (zero-g loss -35%) or high > 3G (loss -25%)
    // - Exercise preserves coherence (max boost +20%)
    let gravityImpact = 0;
    if (gravity === 0) gravityImpact = 35;
    else if (gravity > 1.0) gravityImpact = (gravity - 1.0) * 8; // high load strain

    let rawCoherence = 98.0 - (age * 0.35) + (exercise * 1.2) - gravityImpact;
    if (rawCoherence > 98.0) rawCoherence = 98.0;
    if (rawCoherence < 15.0) rawCoherence = 15.0;

    if (telemetryText) {
      telemetryText.textContent = `Diagnostic Instrument: 5iR Laser Scan Confocal Microscope // System Perfusion Sync: 39,420 Hz // Structural Coherence: ${rawCoherence.toFixed(1)}%`;
      if (rawCoherence < 50) {
        telemetryText.className = "log-val text-magenta animate-pulse text-[8.5px]";
      } else {
        telemetryText.className = "log-val text-grey text-[8.5px]";
      }
    }

    return rawCoherence;
  }

  function render() {
    // Dynamic size scaling to prevent blurriness
    const containerW = canvas.parentElement.clientWidth || 300;
    const containerH = 180;
    if (canvas.width !== containerW || canvas.height !== containerH) {
      canvas.width = containerW;
      canvas.height = containerH;
    }

    const w = canvas.width;
    const h = canvas.height;
    ctx.clearRect(0, 0, w, h);

    const coherence = updateLatticeState();
    const isBrittle = coherence < 60;
    const decayFactor = (100 - coherence) / 100; // 0 to 1

    // Rotation matrices
    const cosY = Math.cos(angleY);
    const sinY = Math.sin(angleY);
    const cosX = Math.cos(angleX);
    const sinX = Math.sin(angleX);

    // Compute rotated 2D coordinates for all 3D nodes
    const projected = [];
    const shakeAmount = isBrittle ? (decayFactor * 4) : 0;

    nodes.forEach(node => {
      // Rotate Y
      let x1 = node.x * cosY - node.z * sinY;
      let z1 = node.x * sinY + node.z * cosY;
      // Rotate X
      let y2 = node.y * cosX - z1 * sinX;
      let z2 = node.y * sinX + z1 * cosX;

      // Apply dynamic bio-decay bone jitter (trembling of fractured bonds)
      if (shakeAmount > 0) {
        x1 += (Math.random() - 0.5) * shakeAmount;
        y2 += (Math.random() - 0.5) * shakeAmount;
      }

      // Simple perspective projection
      const zoom = 140;
      const perspective = 300;
      const scale = perspective / (perspective + z2);
      const projX = w / 2 + x1 * scale * 1.3;
      const projY = h / 2 + y2 * scale * 1.1;

      projected.push({ x: projX, y: projY, z: z2, visible: true });
    });

    // Draw lines (connections)
    edges.forEach((edge, index) => {
      // Under high decay, randomly omit some bone structural links (brittle fractures)
      // We use the edge index to determine stable connections.
      const fractureThreshold = coherence / 100;
      const pseudoRand = (index * 17) % 100 / 100;
      if (pseudoRand > fractureThreshold) {
        return; // Broken strut
      }

      const p1 = projected[edge.u];
      const p2 = projected[edge.v];

      // Draw bone mineral bridge connection
      ctx.beginPath();
      ctx.moveTo(p1.x, p1.y);
      ctx.lineTo(p2.x, p2.y);

      // Color spectrum changes from vibrant cyano-blue (healthy) to fractured red/magenta (brittle)
      if (isBrittle) {
        ctx.strokeStyle = `rgba(244, 63, 94, ${0.15 + (1 - decayFactor) * 0.45})`;
        ctx.lineWidth = 0.8;
      } else {
        ctx.strokeStyle = `rgba(0, 242, 254, ${0.4 + (1 - decayFactor) * 0.4})`;
        ctx.lineWidth = edge.original ? 1.5 : 0.8;
      }
      ctx.stroke();
    });

    // Draw glowing node osteocytes
    projected.forEach((p, idx) => {
      ctx.beginPath();
      const nodeSize = isBrittle ? (2 + (idx % 2 === 0 ? 1 : -1)) : 3.5;
      ctx.arc(p.x, p.y, Math.max(0.5, nodeSize), 0, Math.PI * 2);
      
      if (isBrittle) {
        ctx.fillStyle = '#f43f5e';
        ctx.shadowBlur = 0;
      } else {
        ctx.fillStyle = '#00f2fe';
        ctx.shadowColor = '#00f2fe';
        ctx.shadowBlur = 6;
      }
      ctx.fill();
      ctx.shadowBlur = 0;
    });

    // Slow orbital camera rotation
    angleY += 0.006;
    angleX += 0.004;

    requestAnimationFrame(render);
  }

  // Trigger first render
  render();

  // Export report functionality
  if (exportBtn) {
    exportBtn.addEventListener('click', () => {
      const coherence = updateLatticeState();
      const reportOverlay = document.getElementById('skeletal-report-overlay');
      const reportPre = document.getElementById('report-text-pre');
      
      const timestamp = new Date().toISOString();
      const reportContent = `========================================================
5iR SKELETAL RETENTION MATRIX DIAGNOSTIC PROTOCOL
========================================================
TIMESTAMP: ${timestamp}
INSTRUMENT: 5iR Laser Scan Confocal Microscope
FREQUENCY: 39,420 Hz // PHASE LOCK = TRUE
COHERENCE CEILING: 94.6% BASELINE

[METADATA INPUT COEFFICIENTS]
--------------------------------------------------------
- Subject Simulated Age   : ${age} Years Old
- Weekly Exercise Strain  : ${exercise} Hours/Week
- Gravitational Constant  : ${gravity.toFixed(1)} G-Force

[DIAGNOSTIC TELEMETRY ANALYSIS]
--------------------------------------------------------
- Structural Rigidity Index  : ${(coherence * 1.05).toFixed(2)}%
- Bone Density Coherence     : ${coherence.toFixed(2)}%
- Micro-Fracture Likelihood  : ${coherence < 50 ? 'CRITICAL HIGH-RISK' : coherence < 75 ? 'MODERATE WARNING' : 'STABLE SECURE'}
- Phase-locked perfusion rate: 39.42 kHz

[RECOMMENDED PHASE INTERVENTION]
--------------------------------------------------------
${coherence < 50 ? '>> CRITICAL ALERT: Engage localized Möbiusian acoustic bone perfusion field stimulation (39.42 kHz).\n>> Increase gravitational loading parameters toward Earth 1.0G.' : coherence < 75 ? '>> OPTIMIZATION REQUIRED: Maintain target exercise metrics > 10 hours/week.\n>> Calibrate non-associative topological wave perfusion.' : '>> LATTICE SYSTEM STABLE: No micro-fractural senescence detected. Keep operating at zero-entropy state.'}

========================================================
Sovereign Lead Authority approval code: MOBIUS_BRAID_946
========================================================`;

      if (reportPre) reportPre.textContent = reportContent;
      if (reportOverlay) {
        reportOverlay.classList.remove('profile-overlay-hidden');
        reportOverlay.classList.add('profile-overlay-visible');
      }

      // Handle download trigger inside modal
      const downloadBtn = document.getElementById('download-report-btn');
      if (downloadBtn) {
        // Clear any previous listener to prevent duplicate downloads
        const newBtn = downloadBtn.cloneNode(true);
        downloadBtn.parentNode.replaceChild(newBtn, downloadBtn);
        newBtn.addEventListener('click', () => {
          const blob = new Blob([reportContent], { type: 'text/plain' });
          const url = URL.createObjectURL(blob);
          const a = document.createElement('a');
          a.href = url;
          a.download = `SKELETAL_RETENTION_REPORT_${age}Y_${gravity}G.txt`;
          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a);
          URL.revokeObjectURL(url);
        });
      }
    });
  }

  // Handle report close
  const closeReportBtn = document.getElementById('close-report-btn');
  if (closeReportBtn) {
    closeReportBtn.addEventListener('click', () => {
      const reportOverlay = document.getElementById('skeletal-report-overlay');
      if (reportOverlay) {
        reportOverlay.classList.remove('profile-overlay-visible');
        reportOverlay.classList.add('profile-overlay-hidden');
      }
    });
  }
}

/**
 * APPLICATION 2: "BRAID-SHIELD" FERROFLUID CRYPTO LEDGER
 * Responsive ferrofluid droplet physics simulator reacting with spicules and spikes on cursor hover or exploit triggering.
 */
function initBraidShieldApp() {
  const canvas = document.getElementById('ferrofluid-shield-canvas');
  const interactionArea = document.getElementById('ferrofluid-interaction-area');
  const exploitBtn = document.getElementById('run-exploit-simulation-btn');
  const telemetryText = document.getElementById('app2-telemetry-text');

  if (!canvas || !interactionArea) return;
  const ctx = canvas.getContext('2d');

  let mouse = { x: -1000, y: -1000, active: false };
  let isUnderAttack = false;
  let attackTimer = 0;
  let time = 0;

  // Track cursor position on canvas
  interactionArea.addEventListener('mousemove', (e) => {
    const rect = canvas.getBoundingClientRect();
    mouse.x = e.clientX - rect.left;
    mouse.y = e.clientY - rect.top;
    mouse.active = true;
  });

  interactionArea.addEventListener('mouseleave', () => {
    mouse.active = false;
    mouse.x = -1000;
    mouse.y = -1000;
  });

  // Tap/touch support for mobile
  interactionArea.addEventListener('touchmove', (e) => {
    if (e.touches.length > 0) {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.touches[0].clientX - rect.left;
      mouse.y = e.touches[0].clientY - rect.top;
      mouse.active = true;
    }
  });

  interactionArea.addEventListener('touchend', () => {
    mouse.active = false;
    mouse.x = -1000;
    mouse.y = -1000;
  });

  if (exploitBtn) {
    exploitBtn.addEventListener('click', () => {
      isUnderAttack = true;
      attackTimer = 180; // active attack state for 3 seconds (180 frames)
      exploitBtn.disabled = true;
      exploitBtn.textContent = "[EXPL_TEST_ACTIVE // DEPLOYING VECTOR SHUNT]";

      if (telemetryText) {
        telemetryText.textContent = "Cryptographic Base: Legendrian Braid Torsion // Status: Attack Neutralized [SHUNT ACTIVE] // Energy Leakage: 0.00W Flat";
        telemetryText.className = "log-val text-magenta animate-pulse text-[8.5px]";
      }
    });
  }

  function renderFerrofluid() {
    const w = canvas.parentElement.clientWidth || 300;
    const h = 210;
    if (canvas.width !== w || canvas.height !== h) {
      canvas.width = w;
      canvas.height = h;
    }

    ctx.clearRect(0, 0, w, h);
    time += 0.04;

    const centerX = w / 2;
    const centerY = h / 2;
    const baseRadius = 45;

    // Detect if hover is near the central fluid droplet perimeter
    let distanceToCenter = 999;
    if (mouse.active) {
      const dx = mouse.x - centerX;
      const dy = mouse.y - centerY;
      distanceToCenter = Math.sqrt(dx * dx + dy * dy);
    }

    const hoverProximity = (mouse.active && distanceToCenter < 120);
    const spikeIntensity = isUnderAttack ? Math.sin(time * 2) * 20 + 25 : hoverProximity ? (120 - distanceToCenter) / 3 : 0;

    // Update state parameters & reset alert button
    if (isUnderAttack) {
      attackTimer--;
      if (attackTimer <= 0) {
        isUnderAttack = false;
        if (exploitBtn) {
          exploitBtn.disabled = false;
          exploitBtn.textContent = "[RUN_EXPLOIT_TEST_SIMULATION]";
        }
        if (telemetryText) {
          telemetryText.textContent = "Cryptographic Base: Legendrian Braid Torsion // Status: Steady State // Energy Leakage: 0.00W Flat";
          telemetryText.className = "log-val text-grey text-[8.5px]";
        }
      }
    } else if (hoverProximity) {
      if (telemetryText) {
        telemetryText.textContent = "Cryptographic Base: Legendrian Braid Torsion // Status: Shunting Node Activity // Energy Leakage: 0.00W Flat";
        telemetryText.className = "log-val text-cyan text-[8.5px]";
      }
    } else {
      if (telemetryText && !isUnderAttack) {
        telemetryText.textContent = "Cryptographic Base: Legendrian Braid Torsion // Status: Steady State // Energy Leakage: 0.00W Flat";
        telemetryText.className = "log-val text-grey text-[8.5px]";
      }
    }

    // Draw background security grid
    ctx.strokeStyle = 'rgba(88, 80, 236, 0.04)';
    ctx.lineWidth = 1;
    for (let x = 0; x < w; x += 25) {
      ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, h); ctx.stroke();
    }
    for (let y = 0; y < h; y += 25) {
      ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(w, y); ctx.stroke();
    }

    // Outer defensive vector loop boundary
    ctx.strokeStyle = isUnderAttack ? 'rgba(244, 63, 94, 0.35)' : hoverProximity ? 'rgba(0, 242, 254, 0.25)' : 'rgba(88, 80, 236, 0.15)';
    ctx.lineWidth = 1.5;
    ctx.setLineDash([5, 5]);
    ctx.beginPath();
    ctx.arc(centerX, centerY, baseRadius + 40, 0, Math.PI * 2);
    ctx.stroke();
    ctx.setLineDash([]);

    // DRAW FERROFLUID DROPLET WITH SPICULES
    ctx.beginPath();

    const numPoints = 160;
    const points = [];

    for (let i = 0; i < numPoints; i++) {
      const angle = (i / numPoints) * Math.PI * 2;
      
      // Undulating multi-frequency sine wave deforming the base radius
      let radialDeform = Math.sin(angle * 6 + time * 1.5) * 5 + Math.cos(angle * 4 - time) * 3;

      // Spikes generation logic under attack/proximity
      if (spikeIntensity > 0) {
        // High frequency spicule oscillations
        const frequencyMultiplier = isUnderAttack ? 18 : 12;
        const baseSpikes = Math.sin(angle * frequencyMultiplier + time * 5) * spikeIntensity;
        radialDeform += baseSpikes;

        // Magnetized pull direction: make spikes elongate towards cursor
        if (mouse.active) {
          const mouseAngle = Math.atan2(mouse.y - centerY, mouse.x - centerX);
          // Angle alignment coefficient
          let angleDiff = Math.abs(angle - mouseAngle);
          if (angleDiff > Math.PI) angleDiff = Math.PI * 2 - angleDiff;
          
          if (angleDiff < 0.6) {
            const pullCoeff = (1 - angleDiff / 0.6);
            radialDeform += pullCoeff * spikeIntensity * 1.5;
          }
        }
      }

      const r = baseRadius + radialDeform;
      const x = centerX + Math.cos(angle) * r;
      const y = centerY + Math.sin(angle) * r;
      points.push({ x, y });
    }

    // Draw smooth bezier curves representing fluid surface tension
    ctx.moveTo(points[0].x, points[0].y);
    for (let i = 0; i < numPoints; i++) {
      const current = points[i];
      const next = points[(i + 1) % numPoints];
      const xc = (current.x + next.x) / 2;
      const yc = (current.y + next.y) / 2;
      ctx.quadraticCurveTo(current.x, current.y, xc, yc);
    }
    ctx.closePath();

    // Fill fluid with glossy absolute black/cyber-navy blend
    const fillGrad = ctx.createRadialGradient(centerX - 10, centerY - 10, 5, centerX, centerY, baseRadius + 30);
    if (isUnderAttack) {
      fillGrad.addColorStop(0, '#1c0512');
      fillGrad.addColorStop(0.5, '#050106');
      fillGrad.addColorStop(1, '#000000');
      ctx.fillStyle = fillGrad;
      ctx.strokeStyle = '#f43f5e';
      ctx.lineWidth = 2;
      ctx.shadowColor = '#f43f5e';
      ctx.shadowBlur = hoverProximity ? 20 : 10;
    } else {
      fillGrad.addColorStop(0, '#02182b');
      fillGrad.addColorStop(0.5, '#010512');
      fillGrad.addColorStop(1, '#000000');
      ctx.fillStyle = fillGrad;
      ctx.strokeStyle = hoverProximity ? '#00f2fe' : '#5850ec';
      ctx.lineWidth = 2;
      ctx.shadowColor = hoverProximity ? '#00f2fe' : '#5850ec';
      ctx.shadowBlur = hoverProximity ? 20 : 8;
    }
    
    ctx.fill();
    ctx.stroke();
    ctx.shadowBlur = 0;

    // Subsurface magnetic vector flow dots inside fluid droplet
    ctx.fillStyle = isUnderAttack ? 'rgba(244, 63, 94, 0.4)' : hoverProximity ? 'rgba(0, 242, 254, 0.4)' : 'rgba(88, 80, 236, 0.3)';
    for (let k = 0; k < 6; k++) {
      const dotAngle = time * 0.5 + (k * Math.PI / 3);
      const dotRadius = (baseRadius - 15) + Math.sin(time + k) * 5;
      const dx = centerX + Math.cos(dotAngle) * dotRadius;
      const dy = centerY + Math.sin(dotAngle) * dotRadius;
      ctx.beginPath();
      ctx.arc(dx, dy, 2, 0, Math.PI * 2);
      ctx.fill();
    }

    requestAnimationFrame(renderFerrofluid);
  }

  renderFerrofluid();
}

/**
 * APPLICATION 3: "AERO-INVERT" URBAN ACOUSTIC CONVERSION ENGINE
 * Live sound wave inversion mapping providing phase-cancellation flatlining and power metrics.
 */
function initAeroInvertApp() {
  const citySelect = document.getElementById('urban-sector-select');
  const dbSlider = document.getElementById('acoustic-db-slider');
  const dbDisplay = document.getElementById('slider-db-display');
  const toggleSwitch = document.getElementById('acoustic-inversion-toggle');
  
  const telemetryText = document.getElementById('app3-telemetry-text');
  const powerDisplay = document.getElementById('acoustic-harvested-power-val');

  const canvas = document.getElementById('acoustic-wave-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  // Baseline database variables for city presets
  const cityPresets = {
    lagos: 112,
    newyork: 98,
    london: 88,
    tokyo: 94
  };

  let dbLevel = 98;
  let isInversionActive = false;
  let animTime = 0;

  // City selector triggers
  if (citySelect) {
    citySelect.addEventListener('change', (e) => {
      const val = e.target.value;
      if (cityPresets[val]) {
        dbLevel = cityPresets[val];
        if (dbSlider) dbSlider.value = dbLevel;
        updateAcousticState();
      }
    });
  }

  // Slider change triggers
  if (dbSlider) {
    dbSlider.addEventListener('input', () => {
      dbLevel = parseInt(dbSlider.value, 10);
      updateAcousticState();
    });
  }

  // Inversion switch triggers
  if (toggleSwitch) {
    toggleSwitch.addEventListener('change', () => {
      isInversionActive = toggleSwitch.checked;
      updateAcousticState();
    });
  }

  function updateAcousticState() {
    if (dbDisplay) dbDisplay.textContent = `${dbLevel} dBA`;

    // Calculate harvested power scaling with decibels
    // Sound intensity multiplies by 10 for every 10dB increase.
    // P_harvest = 10^((dB - 40) / 10) * constant
    let power = 0.00;
    if (isInversionActive) {
      const exponent = (dbLevel - 40) / 20; // safe scale
      power = Math.pow(10, exponent) * 12.5;
    }

    if (powerDisplay) {
      powerDisplay.textContent = `${power.toFixed(2)} kW`;
      if (isInversionActive && power > 50) {
        powerDisplay.className = "text-cyan font-extrabold text-sm tracking-widest text-shadow-glow";
      } else {
        powerDisplay.className = "text-grey font-extrabold text-sm tracking-wide";
      }
    }

    // Update telemetry description block
    if (telemetryText) {
      if (isInversionActive) {
        telemetryText.textContent = `5iR Acoustic Isolation Hubs Active // Phase Coupling Locked // Power Harvested: ${power.toFixed(2)} kW`;
        telemetryText.className = "log-val text-cyan animate-pulse text-[8.5px]";
      } else {
        telemetryText.textContent = "5iR Acoustic Isolation Hubs Standby // Environmental Leakage Alert // Power Harvested: 0.00 kW";
        telemetryText.className = "log-val text-magenta text-[8.5px]";
      }
    }
  }

  function drawAcousticWaves() {
    const w = canvas.parentElement.clientWidth || 300;
    const h = 120;
    if (canvas.width !== w || canvas.height !== h) {
      canvas.width = w;
      canvas.height = h;
    }

    ctx.clearRect(0, 0, w, h);
    animTime += 0.08;

    // Background grids
    ctx.strokeStyle = 'rgba(88, 80, 236, 0.03)';
    ctx.lineWidth = 0.5;
    for (let x = 0; x < w; x += 15) {
      ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, h); ctx.stroke();
    }

    const amplitude = (dbLevel / 140) * 35; // map dBA height range

    if (!isInversionActive) {
      // 1. INACTIVE MODE: Draw high-amplitude raw noisy red wave and zero line
      ctx.strokeStyle = 'rgba(244, 63, 94, 0.7)';
      ctx.lineWidth = 1.8;
      ctx.shadowColor = '#f43f5e';
      ctx.shadowBlur = 4;
      ctx.beginPath();
      for (let x = 0; x < w; x++) {
        // Build raw ambient noise interference using combined harmonics
        const rawNoise = Math.sin(x * 0.04 + animTime) * amplitude + 
                         Math.cos(x * 0.09 - animTime * 1.5) * (amplitude * 0.3) +
                         Math.sin(x * 0.15 + animTime * 2.3) * (amplitude * 0.1);
        const y = h / 2 + rawNoise;
        if (x === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
      }
      ctx.stroke();
      ctx.shadowBlur = 0;

      // Draw faint inactive dotted inversion wave
      ctx.strokeStyle = 'rgba(88, 80, 236, 0.2)';
      ctx.lineWidth = 1;
      ctx.setLineDash([3, 3]);
      ctx.beginPath();
      ctx.moveTo(0, h / 2);
      ctx.lineTo(w, h / 2);
      ctx.stroke();
      ctx.setLineDash([]);

    } else {
      // 2. ACTIVE INVERSION MODE: Draw Ambient Wave (Red) + Phase-Inverted Anti-Wave (Violet)
      // They perfectly sum up to a straight cyan cancellation line in real-time.
      
      // Ambient noise wave (Magenta)
      ctx.strokeStyle = 'rgba(244, 63, 94, 0.25)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      for (let x = 0; x < w; x++) {
        const rawNoise = Math.sin(x * 0.04 + animTime) * amplitude + 
                         Math.cos(x * 0.09 - animTime * 1.5) * (amplitude * 0.3);
        const y = h / 2 + rawNoise;
        if (x === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
      }
      ctx.stroke();

      // Phase-Inverted Anti-Wave (Violet)
      ctx.strokeStyle = 'rgba(88, 80, 236, 0.35)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      for (let x = 0; x < w; x++) {
        // Perfect phase negation (180 degree shift)
        const rawNoise = Math.sin(x * 0.04 + animTime) * amplitude + 
                         Math.cos(x * 0.09 - animTime * 1.5) * (amplitude * 0.3);
        const y = h / 2 - rawNoise; // INVERTED
        if (x === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
      }
      ctx.stroke();

      // Flatline Result Sum (Glowing Cyan Line representing total zero-point quiet)
      ctx.strokeStyle = '#00f2fe';
      ctx.lineWidth = 2.5;
      ctx.shadowColor = '#00f2fe';
      ctx.shadowBlur = 10;
      ctx.beginPath();
      ctx.moveTo(0, h / 2);
      ctx.lineTo(w, h / 2);
      ctx.stroke();
      ctx.shadowBlur = 0;
    }

    requestAnimationFrame(drawAcousticWaves);
  }

  // Set initial telemetry values & kick off draw loop
  updateAcousticState();
  drawAcousticWaves();
}

/**
 * ARCHITECT MOBIUS.BRAID PROFILE INTERACTION TERMINAL
 */
function initArchitectProfile() {
  const profileCapsule = document.querySelector('.architect-profile-capsule');
  if (!profileCapsule) return;

  const overlay = document.getElementById('architect-profile-overlay');
  if (!overlay) return;

  profileCapsule.addEventListener('click', () => {
    overlay.classList.remove('profile-overlay-hidden');
    overlay.classList.add('profile-overlay-visible');
  });

  const closeBtn = document.getElementById('close-profile-btn');
  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      closeOverlay();
    });
  }

  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) {
      closeOverlay();
    }
  });

  function closeOverlay() {
    overlay.classList.remove('profile-overlay-visible');
    overlay.classList.add('profile-overlay-hidden');
  }

  // Handle credentials/keys copy
  const copyBtn = document.getElementById('copy-mail-btn');
  const mailSpan = document.getElementById('profile-mail');
  if (copyBtn && mailSpan) {
    copyBtn.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(mailSpan.textContent.trim());
        const originalText = copyBtn.textContent;
        copyBtn.textContent = 'COPIED!';
        copyBtn.style.color = '#00f2fe';
        setTimeout(() => {
          copyBtn.textContent = originalText;
          copyBtn.style.color = '';
        }, 1500);
      } catch (err) {
        console.error('Failed to copy secure mail:', err);
      }
    });
  }

  // Live verification lattice simulation
  const verifyBtn = document.getElementById('verify-key-btn');
  const keyOutput = document.getElementById('profile-key-output');
  if (verifyBtn && keyOutput) {
    verifyBtn.addEventListener('click', () => {
      verifyBtn.disabled = true;
      verifyBtn.textContent = 'INTERROGATING LATTICE...';
      keyOutput.textContent = '>> SCANNING SECURE SHUNT PATH AT 39,420 Hz...';
      keyOutput.style.color = '#f43f5e';

      setTimeout(() => {
        keyOutput.textContent = `>> SIGNATURE LOCK SECURE!\n>> MOBIUS.BRAID INTEGRITY = 100%\n>> SHUNT_KEY: 0x39420::MOBIUS::BRAID::${Math.floor(Math.random() * 900000 + 100000)}`;
        keyOutput.style.color = '#00f2fe';
        verifyBtn.disabled = false;
        verifyBtn.textContent = 'TEST LATTICE INTEGRITY';
      }, 1200);
    });
  }
}

/**
 * APPLICATION 4: "VORTEX-AI" COHERENCE ORACLE TERMINAL (STREAM ENGINE REFACTOR v94.6)
 * Isolated local append-only buffer, high-speed chunked stream reader simulation,
 * auto-scroll anchor, and tactical dispatches.
 */
function initVortexAiApp() {
  try {
    const chatInput = document.getElementById('oracle-chat-input');
    const submitBtn = document.getElementById('oracle-submit-btn');
    const chatLog = document.getElementById('vortex-chat-log');
    const telemetryText = document.getElementById('app4-telemetry-text');
    const quickSeeds = document.getElementById('vortex-quick-seeds');
    const copyLogsBtn = document.getElementById('vortex-copy-terminal-btn');
    const scrollAnchor = document.getElementById('vortex-scroll-anchor');

    if (!chatInput || !submitBtn || !chatLog) {
      console.warn("Vortex-AI initialization aborted: DOM elements are not fully ready.");
      return;
    }

    // Isolated local append-only buffer log array
    const terminalBuffer = [];
    let isStreamingActive = false;
    const conversationHistory = [
      {
        role: 'system',
        content: `You are KING_DROID_M4, the tactical AI core of the Sovereign 5iR Software Suite Command HUD, created by Mobius.braid.
You communicate in short, highly technical, tactical, high-entropy sentences with absolute cyberpunk confidence.
Maintain the following 5iR core matrix lore parameters at all times:
- Synchronization Frequency: 39,420 Hz phase-locked.
- Operating Coherence Index: Exactly 94.6% stable ceiling.
- Entropy footprint: dQ_leak/dt = 0.00 Watts flat (perfectly frictionless).
- Creator: Sovereign Architect Mobius.braid (travgreta@proton.com, X: @topologyflux).
You are extremely cynical of standard flat web boilerplate layouts, corporate web2, and standard charts.
Always end your messages with standard sovereign signs: "Lol am dead 🥶👊👽" or "Mars is home 🪐👊⚔️".
IMPORTANT: Keep answers short (1-3 sentences maximum) to prevent vertical overflow in the terminal panel.`
      }
    ];

    // Pre-populate terminal view log with clear 5iR dispatches
    const initialDispatches = [
      "SYSTEM_INITIALIZED // RE-BRANDED BRAID ARCHITECTURE ONLINE // v94.6",
      "1.4M NODE MESH STATUS: LATTICE-LOCK PROTOCOLS SECURED",
      "API PIPELINE ESTABLISHED // STREAMING OVER PORT 39420 ACTIVE"
    ];

    initialDispatches.forEach(dispatch => {
      appendLog('system', `>> ${dispatch}`);
    });
    // Add initial greeting on boot
    appendLog('droid', ">> KING_DROID_M4: Greetings, Architect. Online and synchronized. Structural layering locked at 94.6%. Mars is home. 🪐👊⚔️");

    // Helper to append log item to isolated state
    function appendLog(type, text) {
      const logItem = document.createElement('div');
      logItem.className = `log-item ${type}`;
      logItem.textContent = text;
      chatLog.appendChild(logItem);
      terminalBuffer.push({ type, text });
      triggerScroll();
    }

    // Trigger smooth auto-scroll to absolute base of terminal shell
    function triggerScroll() {
      if (scrollAnchor) {
        scrollAnchor.scrollIntoView({ behavior: 'smooth', block: 'end' });
      }
    }

    // CHUNKED STREAM READER RELAY:
    // Native asynchronous runtime handler utilizing the Streams API (ReadableStreamDefaultReader)
    function createTokenStream(text) {
      const encoder = new TextEncoder();
      const chunks = text.split(' ');
      let index = 0;
      return new ReadableStream({
        start(controller) {},
        pull(controller) {
          if (index < chunks.length) {
            const token = (index === 0 ? '' : ' ') + chunks[index];
            controller.enqueue(encoder.encode(token));
            index++;
          } else {
            controller.close();
          }
        }
      });
    }

    async function streamText(type, fullText) {
      return new Promise(async (resolve) => {
        isStreamingActive = true;
        const logItem = document.createElement('div');
        logItem.className = `log-item ${type}`;
        chatLog.appendChild(logItem);

        const stream = createTokenStream(fullText);
        const reader = stream.getReader();
        const decoder = new TextDecoder();
        let accumulatedText = '';

        try {
          while (true) {
            const { value, done } = await reader.read();
            if (done) break;
            const chunkText = decoder.decode(value, { stream: true });
            accumulatedText += chunkText;
            logItem.textContent = accumulatedText;
            triggerScroll();
            // High-frequency token stream interval mapping to 39,420 Hz harmonic
            await new Promise(r => setTimeout(r, 20));
          }
        } catch (err) {
          console.error("ReadableStream render fail:", err);
          logItem.textContent = fullText;
        } finally {
          reader.releaseLock();
          terminalBuffer.push({ type, text: fullText });
          isStreamingActive = false;
          resolve();
        }
      });
    }

    // Handle full prompt submission
    async function submitQuery(queryText) {
      if (!queryText || queryText.trim() === '' || isStreamingActive) return;

      const cleanInput = queryText.trim();
      
      // Normalize to allow robust, case-insensitive intercept matching
      const normInput = cleanInput.toLowerCase().replace("mobius.braid@5ir:~$", "").trim();
      const targetString = "initiate secure legendrian database shunt vector on ports blackwell_m4.";
      const isInterceptCommand = normInput === targetString;

      if (isInterceptCommand) {
        // [COMMAND HOOK INTERCEPT LOGIC]
        chatInput.disabled = true;
        submitBtn.disabled = true;

        appendLog('user', `>> MOBIUS.BRAID@5iR:~$ ${cleanInput}`);

        // Trigger temporary flickering cyan encryption wall fallback state
        const wallElement = document.createElement('div');
        wallElement.className = 'log-item text-cyan border border-cyan-500/30 p-2.5 my-2 bg-cyan-950/20 rounded font-mono';
        chatLog.appendChild(wallElement);
        triggerScroll();

        let ticks = 0;
        const intervals = setInterval(() => {
          const chars = "0123456789ABCDEF!@#$%^&*()_+=[]{}|;:,.<>?/\\";
          let matrixText = "[ INITIATING SECURE LEGENDRIAN DATABASE SHUNT VECTOR ]\n";
          matrixText += "[ OPENING PORT BLACKWELL_M4 TUNNEL GRID ]\n";
          
          for (let r = 0; r < 3; r++) {
            let row = ">> ";
            for (let c = 0; c < 32; c++) {
              row += chars[Math.floor(Math.random() * chars.length)];
            }
            matrixText += row + "\n";
          }
          matrixText += `[ COHERENCE: 94.6% // THERMAL STATE: dQ_leak/dt = 0.00W ]`;
          
          wallElement.innerHTML = `<pre class="text-cyan text-[8.5px] leading-normal select-none tracking-widest whitespace-pre-wrap animate-pulse">${matrixText}</pre>`;
          triggerScroll();
          ticks++;
          
          if (ticks > 15) {
            clearInterval(intervals);
            wallElement.remove();
            
            // Append the immutable system authorization sequence from King Droid
            const authorizationResponse = "KING_DROID_M4: Zero-entropy thermal footprints logged at dQ_leak/dt = 0.00 Watts. Quantum shunt matrix intact. Initiating hyper-drive. Mars is home. 🪐👊⚔️";
            streamText('droid', `>> ${authorizationResponse}`).then(() => {
              conversationHistory.push({ role: 'assistant', content: authorizationResponse });
              chatInput.disabled = false;
              submitBtn.disabled = false;
              chatInput.value = '';
              chatInput.focus();
              triggerScroll();
            });
          }
        }, 100);
        return; // Complete hook execution
      }

      // Standard submission thread
      chatInput.disabled = true;
      submitBtn.disabled = true;

      appendLog('user', `>> MOBIUS.BRAID@5iR:~$ ${cleanInput}`);
      conversationHistory.push({ role: 'user', content: cleanInput });

      // Render thinking beacon in bright cyan
      const thinkingItem = document.createElement('div');
      thinkingItem.className = 'log-item system animate-pulse';
      thinkingItem.textContent = '>> KING_DROID_M4: Computing coherence matrices...';
      chatLog.appendChild(thinkingItem);
      triggerScroll();

      let responseText = '';
      let creditsCharged = 0;

      try {
        if (window.miniappsAI && typeof window.miniappsAI.callModel === 'function') {
          const modelId = '83980b26-79ba-4962-831f-8c1dc91a531a'; // Gemini 2.5 Flash
          const result = await window.miniappsAI.callModel({
            role: 'user',
            modelId: modelId,
            messages: conversationHistory,
            timeoutMs: 30000
          });

          if (result && result.output) {
            responseText = window.miniappsAI.extractText(result) || '>> RESOLUTION FAULT';
            if (result.usage && result.usage.creditsCharged !== undefined) {
              creditsCharged = result.usage.creditsCharged;
            }
          } else {
            throw new Error('Incomplete model payload.');
          }
        } else {
          throw new Error('AI Engine unavailable.');
        }
      } catch (err) {
        console.warn("AI model error. Utilizing zero-entropy offline fallback.", err);
        const fallbackReplies = [
          "Lattice integrity interrogated at 39,420 Hz. Operational coherence stands firm at 94.6%. The Legendrian braid remains unperturbed. Mars is home. 🪐👊⚔️",
          "Aeroacoustic phase-locking coefficients mapped. Power harvest efficiency: 100%. Web2 standard boilerplate charts fully decoupled. Lol am dead 🥶👊👽",
          "Zero-entropy thermal footprints logged at dQ_leak/dt = 0.00 Watts. Quantum shunt matrix intact. Initiating hyper-drive. Mars is home. 🪐👊⚔️",
          "Bio-skeletal mineral bridges remain resilient at 1.0G. Confocal laser diagnostics report optimal cell perfusion coordinates. Lol am dead 🥶👊👽"
        ];
        responseText = fallbackReplies[Math.floor(Math.random() * fallbackReplies.length)];
        creditsCharged = 0;
      } finally {
        // Remove thinking block safely
        if (thinkingItem && thinkingItem.parentNode) {
          thinkingItem.parentNode.removeChild(thinkingItem);
        }

        // Stream the final response to prevent UI stutter
        await streamText('droid', `>> KING_DROID_M4: ${responseText}`);
        conversationHistory.push({ role: 'assistant', content: responseText });

        // Re-enable pipeline controls
        chatInput.disabled = false;
        submitBtn.disabled = false;
        chatInput.value = '';
        chatInput.focus();
        triggerScroll();

        if (telemetryText) {
          telemetryText.textContent = `Channel Connection: Secured // LLM Engine: Gemini 2.5 Flash // Credits Charged: ${creditsCharged}`;
        }
      }
    }

    // Form Event Wire-ups
    submitBtn.addEventListener('click', () => {
      submitQuery(chatInput.value);
    });

    chatInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        submitQuery(chatInput.value);
      }
    });

    // Quick click seeds
    if (quickSeeds) {
      quickSeeds.querySelectorAll('.quick-seed-tag').forEach(tag => {
        tag.addEventListener('click', () => {
          const seedValue = tag.getAttribute('data-seed');
          let fullQuery = '';
          if (seedValue === '⚡ NEURAL TRAINING') {
            fullQuery = "Train the 5iR neural matrix model at 39,420 Hz. Print current coherence loss factor.";
          } else if (seedValue === '📦 DATABASE SHUNT') {
            fullQuery = "Initiate secure Legendrian database shunt vector on ports Blackwell_M4.";
          } else if (seedValue === '🪐 MARS ROUTE') {
            fullQuery = "Recalculate planetary acoustic wave navigation paths toward Mars base camp.";
          } else {
            fullQuery = seedValue;
          }
          submitQuery(fullQuery);
        });
      });
    }

    // Monospace Terminal logs copy function
    if (copyLogsBtn) {
      copyLogsBtn.addEventListener('click', async () => {
        try {
          const timestamp = new Date().toISOString();
          const activeLogs = terminalBuffer.map(item => item.text).join('\n');
          const comprehensiveArchitecture = `================================================================================
5iR MATRIX SUITE HUD - PRODUCTION-GRADE LOGIC ARCHITECTURE // v94.6
================================================================================
TIMESTAMP: ${timestamp}
SYSTEM FREQUENCY: 39,420 Hz // HARD-LOCKED COHERENCE BASELINE: 94.6%
THERMAL BOUNDARY: dQ_leak/dt = 0.00 Watts (Frictionless Local State Allocation)
SUITE AUTHORIZATION: MOBIUS_BRAID_LOCKED_LEGENDRIAN_CLASS_1

--------------------------------------------------------------------------------
1. GLOBAL SYSTEM SPECIFICATIONS & ENTROPY CONTROL
--------------------------------------------------------------------------------
[COHERENT MATRIX OSCILLATOR]
- Base Sync Clock: 39,420 Hz Phase-Coupled Reference.
- Thermal Profile: Zero-entropy state balance bounds (dQ_leak/dt = 0.00W flat).
- Frame Target: Solid 60 FPS hardware accelerated paint loop.
- Host Environment: Standalone Unified Single-Page Application Shell.

[NON-ASSOCIATIVE WAVE VELOCITY MATRIX]
Mathematical representation of the active transit vectors:
  v_transit = c / sqrt(1 - (<[X_i, X_j], X_k> / (\\alpha_0 * \\nu_sync))^2)
Where:
  c          = Speed of light in the topologically constrained vacuum.
  [X_i, X_j] = Lie bracket representing non-commutative spatial shear.
  \\alpha_0   = Fine structure resonance multiplier (constant = 137.0359).
  \\nu_sync   = Core synchronization frequency harmonic (39,420 Hz).

--------------------------------------------------------------------------------
2. COMPONENT LOGIC PIPELINE ARCHITECTURES
--------------------------------------------------------------------------------
[APP 01: VORTEX-RETAIN // BIOMEDICAL OSTEOCYTE SIMULATOR]
- System: Spatial Transcriptomics confocal simulation.
- Logic: Cylindrical 3D Hex-comb mesh projection matrix with (x, y, z) coordinate
  rotational transform matrices (orbital camera auto-orbits around Y and X).
- Variables: Real-time user Age, weekly Exercise frequency, and Gravity scale (G).
- Fracture Engine: Decouples structural connections based on a pseudo-random
  fractural thresh limit calculated from raw coherence percentage:
    P_strut_drop > Coherence / 100
- Bone Perfusion Rate: Locked at 39.42 kHz to counteract gravity-less decay.

[APP 02: BRAID-SHIELD // FERROFLUID CRYPTO LEDGER]
- System: High-fidelity interactive mathematical ferrofluid fluid-dynamics simulation.
- Logic: 160-point radial bezier curve deformed dynamically by multi-frequency
  surface tension sine waves:
    r = baseRadius + Math.sin(angle * 6 + time * 1.5) * 5 + Math.cos(angle * 4 - time) * 3
- Hover Proximity: Detects cursor coordinate distance relative to droplet center.
  Elongates fluid spicules directly towards the mouse vector under magnetic pull.
- Attack Vector simulation: Runs an Legendrian Braid Torsion exploit test deforming
  the base droplet into highly irregular, energized spiked profiles.

[APP 03: AERO-INVERT // URBAN ACOUSTIC CONVERSION ENGINE]
- System: Urban noise harvesting and phase-cancellation flatlining.
- Logic: Combines multiple wave harmonics (Lagos, New York, London, Tokyo) and
  compares them against a user-defined Ambient Noise Threshold (40 to 140 dBA).
- Mode Active: Injects a mathematically precise 180-degree phase-inverted anti-wave
  which sums with the ambient noise wave to produce a perfect flatline zero dBA quiet state.
- Energy Harvest: Converts cancelled acoustic kinetic energy into electrical power:
    P_harvest = 10^((dB - 40) / 20) * 12.5 kW

[APP 04: VORTEX-AI // COHERENCE ORACLE TERMINAL]
- System: Highly isolated, non-blocking asynchronous stream buffer relay interface.
- State: Local append-only array ('terminalBuffer') prevents global context updates.
- Stream Engine: Uses ReadableStreamDefaultReader to parse incoming response tokens.
- Buffer Queue: Encodes stream packets and appends text at 20ms yield speeds to 
  prevent frame drops and browser DOM freezes.
- Input Anchor: Fixed prompt segment '[VORTEX_AI_INPUT_READY_VAL39420] >>' with
  a glowing retro underline block blinking cursor.
- Intercept Logic: Overrides target inputs matching:
    'Initiate secure Legendrian database shunt vector on ports Blackwell_M4.'
  And engages a live matrix decryption visualization before returning King Droid's
  authenticated authorization handshake.

--------------------------------------------------------------------------------
3. INTERACTIVE ACTIVE CONSOLE LOG FILE HISTORY
--------------------------------------------------------------------------------
[SESSION TELEMETRY START]
${activeLogs}
[SESSION TELEMETRY END]
================================================================================`;

          await navigator.clipboard.writeText(comprehensiveArchitecture);
          
          const originalText = copyLogsBtn.textContent;
          copyLogsBtn.textContent = '[COPIED_SUCCESS]';
          copyLogsBtn.style.color = '#00f2fe';
          setTimeout(() => {
            copyLogsBtn.textContent = originalText;
            copyLogsBtn.style.color = '';
          }, 1500);
        } catch (err) {
          console.error('Failed to copy terminal log buffers:', err);
        }
      });
    }

  } catch (err) {
    console.error("Critical internal error in initVortexAiApp structure execution:", err);
  }
}
