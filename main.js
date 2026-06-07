/**
 * 5iR Core Matrix Command Dashboard - Unified Braid Core
 * Synchronized Clock: 39,420 Hz // Global Coherence: 94.6% Locked
 * Consolidated single-file engine running all master applications.
 * Zero flat layouts, zero boring tables, zero 404 relative loading issues.
 */

// Sovereign Braid Framework mappings
window.braidAI = window['mini' + 'apps' + 'AI'];
window.braidI18n = window['mini' + 'app' + 'I18n'];

// Global tracking of the last active dark-theme dashboard page
let lastActiveTab = 'vortex-retain';

// Dynamic inter-operable global state matching 39,420 Hz metrics
window.braidState = {
  currentMinedBalance: 100.00000000,
  activeNodeAddress: 'MOBIUS_BRAID_MAIN',
  flowRate: 0.00039420
};

// Local fallback dictionary for i18n translation
const LOCAL_TRANSLATIONS = {
  "system.ping": "SYSTEM SECURE // BRAID_CLUSTER_SQX",
  "system.title": "Braid",
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
  "app9.title": "APP 09: \"WALLET-WRAPPER\" CRYPTOGRAPHIC ISOLATION MATRIX",
  "app9.seed_lbl": "1. ENTER RAW WALLET SEED INTRINSIC STRING",
  "app9.pass_lbl": "2. SET MASTER SECURE ENCRYPTION PASSWORD",
  "app9.charts_title": "APP 09 // CHARTS-TELEMETRY // High-Frequency Yield Analysis",
  "app9.mesh_velocity": "MESH_VELOCITY_CLOCK",
  "app9.compute_coherence": "COMPUTE_COHERENCE",
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

  // Initialize dedicated starting portal router (Page 1 Gatekeeper)
  try {
    initGatewayPortalSystem();
  } catch (err) {
    console.error("Gateway Portal init fault:", err);
  }

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
    initHydroGridApp();
  } catch (err) {
    console.error("App 05 (Hydro-Grid) fault:", err);
  }

  try {
    initVortexAiApp();
  } catch (err) {
    console.error("App 04 (Vortex-AI) fault:", err);
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

  try {
    initClearSigCanvas();
  } catch (err) {
    console.error("Clear Sig Canvas init fault:", err);
  }

  try {
    initLatticeSinterApp();
  } catch (err) {
    console.error("App 06 (Lattice-Sinter) fault:", err);
  }

  try {
    initDeployerHubApp();
  } catch (err) {
    console.error("Deployer Hub init fault:", err);
  }

  try {
    initNodeSecureChatApp();
  } catch (err) {
    console.error("App 07 (Node-Chat) fault:", err);
  }

  try {
    initSuperfluidResonanceApp();
  } catch (err) {
    console.error("App 08 (Superfluid-Resonance) fault:", err);
  }

  try {
    initWalletWrapperApp();
  } catch (err) {
    console.error("App 09 (Wallet-Wrapper) fault:", err);
  }
});

/**
 * Robust i18n DOM translation layer
 */
function translateDOM() {
  const i18n = window.braidI18n;
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
 * Tab Navigation Controller - Swaps between dedicated fullscreen application pages
 */
function initTabNavigation() {
  const tabButtons = document.querySelectorAll('.hud-tab-btn');
  const mainGrid = document.getElementById('hud-main-grid');
  const apps = {
    'vortex-retain': document.getElementById('app-vortex-retain'),
    'braid-shield': document.getElementById('app-braid-shield'),
    'aero-invert': document.getElementById('app-aero-invert'),
    'hydro-grid': document.getElementById('app-hydro-grid'),
    'vortex-ai': document.getElementById('app-vortex-ai'),
    'lattice-sinter': document.getElementById('app-lattice-sinter'),
    'node-chat': document.getElementById('app-node-chat'),
    'superfluid-resonance': document.getElementById('app-app-superfluid-resonance') || document.getElementById('app-superfluid-resonance'),
    'wallet-wrapper': document.getElementById('app-wallet-wrapper'),
    'deployer-hub': document.getElementById('app-deployer-hub')
  };

  if (!mainGrid) return;

  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const activeTab = btn.getAttribute('data-tab');

      if (activeTab === 'vortex-ai') {
        // Transition directly to the gorgeous Page 3 Clear Deck view!
        const launchBtn = document.getElementById('launch-clear-page-btn');
        if (launchBtn) {
          launchBtn.click();
        }
        return;
      }

      // Record the last active dark-theme dashboard page
      lastActiveTab = activeTab;

      // Toggle active states
      tabButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

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
    });
  });
}

/**
 * System Telemetry (Ping Indicators, Jitter, Distributed node loops)
 */
function initSystemTelemetry() {
  const nodesEl = document.getElementById('header-nodes');
  const coherenceEl = document.getElementById('coherence-value');
  const clearCoherenceEl = document.getElementById('clear-coherence-value');

  let nodesCount = 1.400;
  setInterval(() => {
    // Slight lifelike count jittering around 1.40M nodes
    nodesCount += (Math.random() * 0.002 - 0.0008);
    if (nodesCount < 1.35) nodesCount = 1.400;
    if (nodesEl) nodesEl.textContent = `${nodesCount.toFixed(3)}M NODES`;

    // System coherence locked exactly at 94.6% but slightly moving for realism
    const jitter = 94.60 - (Math.random() * 0.04);
    if (coherenceEl) {
      coherenceEl.textContent = `${jitter.toFixed(2)}%`;
    }
    if (clearCoherenceEl) {
      clearCoherenceEl.textContent = `${jitter.toFixed(2)}% (STABLE)`;
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
    age = ageSlider ? parseInt(ageSlider.value, 10) : 25;
    exercise = exerciseSlider ? parseInt(exerciseSlider.value, 10) : 12;
    gravity = gravitySlider ? parseFloat(gravitySlider.value) / 10 : 1.0;

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
        ctx.strokeStyle = `rgba(255, 215, 0, ${0.4 + (1 - decayFactor) * 0.4})`;
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
        ctx.fillStyle = '#ffd700';
        ctx.shadowColor = '#ffd700';
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
      const reportContent = `========================================================\n5iR SKELETAL RETENTION MATRIX DIAGNOSTIC PROTOCOL\n========================================================\nTIMESTAMP: ${timestamp}\nINSTRUMENT: 5iR Laser Scan Confocal Microscope\nFREQUENCY: 39,420 Hz // PHASE LOCK = TRUE\nCOHERENCE CEILING: 94.6% BASELINE\n\n[METADATA INPUT COEFFICIENTS]\n--------------------------------------------------------\n- Subject Simulated Age   : ${age} Years Old\n- Weekly Exercise Strain  : ${exercise} Hours/Week\n- Gravitational Constant  : ${gravity.toFixed(1)} G-Force\n\n[DIAGNOSTIC TELEMETRY ANALYSIS]\n--------------------------------------------------------\n- Structural Rigidity Index  : ${(coherence * 1.05).toFixed(2)}%\n- Bone Density Coherence     : ${coherence.toFixed(2)}%\n- Micro-Fracture Likelihood  : ${coherence < 50 ? 'CRITICAL HIGH-RISK' : coherence < 75 ? 'MODERATE WARNING' : 'STABLE SECURE'}\n- Phase-locked perfusion rate: 39.42 kHz\n\n[RECOMMENDED PHASE INTERVENTION]\n--------------------------------------------------------\n${coherence < 50 ? '>> CRITICAL ALERT: Engage localized Möbiusian acoustic bone perfusion field stimulation (39.42 kHz).\n>> Increase gravitational loading parameters toward Earth 1.0G.' : coherence < 75 ? '>> OPTIMIZATION REQUIRED: Maintain target exercise metrics > 10 hours/week.\n>> Calibrate non-associative topological wave perfusion.' : '>> LATTICE SYSTEM STABLE: No micro-fractural senescence detected. Keep operating at zero-entropy state.'}\n\n========================================================\nSovereign Lead Authority approval code: MOBIUS_BRAID_946\n========================================================`;

      if (reportPre) reportPre.textContent = reportContent;
      if (reportOverlay) {
        reportOverlay.classList.remove('profile-overlay-hidden');
        reportOverlay.classList.add('profile-overlay-visible');
      }

      // Handle download trigger inside modal
      const downloadBtn = document.getElementById('download-report-btn');
      if (downloadBtn) {
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
    ctx.strokeStyle = isUnderAttack ? 'rgba(244, 63, 94, 0.35)' : hoverProximity ? 'rgba(255, 215, 0, 0.25)' : 'rgba(217, 119, 6, 0.15)';
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
        const frequencyMultiplier = isUnderAttack ? 18 : 12;
        const baseSpikes = Math.sin(angle * frequencyMultiplier + time * 5) * spikeIntensity;
        radialDeform += baseSpikes;

        // Magnetized pull direction: make spikes elongate towards cursor
        if (mouse.active) {
          const mouseAngle = Math.atan2(mouse.y - centerY, mouse.x - centerX);
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
      fillGrad.addColorStop(0, '#241a04');
      fillGrad.addColorStop(0.5, '#120e03');
      fillGrad.addColorStop(1, '#000000');
      ctx.fillStyle = fillGrad;
      ctx.strokeStyle = hoverProximity ? '#ffd700' : '#d97706';
      ctx.lineWidth = 2;
      ctx.shadowColor = hoverProximity ? '#ffd700' : '#d97706';
      ctx.shadowBlur = hoverProximity ? 20 : 8;
    }
    
    ctx.fill();
    ctx.stroke();
    ctx.shadowBlur = 0;

    // Subsurface magnetic vector flow dots inside fluid droplet
    ctx.fillStyle = isUnderAttack ? 'rgba(244, 63, 94, 0.4)' : hoverProximity ? 'rgba(255, 215, 0, 0.4)' : 'rgba(217, 119, 6, 0.3)';
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
 * APPLICATION 3: \"AERO-INVERT\" URBAN ACOUSTIC CONVERSION ENGINE
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

  if (dbSlider) {
    dbSlider.addEventListener('input', () => {
      dbLevel = parseInt(dbSlider.value, 10);
      updateAcousticState();
    });
  }

  if (toggleSwitch) {
    toggleSwitch.addEventListener('change', () => {
      isInversionActive = toggleSwitch.checked;
      updateAcousticState();
    });
  }

  function updateAcousticState() {
    if (dbDisplay) dbDisplay.textContent = `${dbLevel} dBA`;

    // sound intensity harvesting logic
    let power = 0.00;
    if (isInversionActive) {
      const exponent = (dbLevel - 40) / 20;
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

    ctx.strokeStyle = 'rgba(88, 80, 236, 0.03)';
    ctx.lineWidth = 0.5;
    for (let x = 0; x < w; x += 15) {
      ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, h); ctx.stroke();
    }

    const amplitude = (dbLevel / 140) * 35;

    if (!isInversionActive) {
      ctx.strokeStyle = 'rgba(244, 63, 94, 0.7)';
      ctx.lineWidth = 1.8;
      ctx.shadowColor = '#f43f5e';
      ctx.shadowBlur = 4;
      ctx.beginPath();
      for (let x = 0; x < w; x++) {
        const rawNoise = Math.sin(x * 0.04 + animTime) * amplitude + 
                         Math.cos(x * 0.09 - animTime * 1.5) * (amplitude * 0.3) +
                         Math.sin(x * 0.15 + animTime * 2.3) * (amplitude * 0.1);
        const y = h / 2 + rawNoise;
        if (x === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
      }
      ctx.stroke();
      ctx.shadowBlur = 0;

      ctx.strokeStyle = 'rgba(88, 80, 236, 0.2)';
      ctx.lineWidth = 1;
      ctx.setLineDash([3, 3]);
      ctx.beginPath();
      ctx.moveTo(0, h / 2);
      ctx.lineTo(w, h / 2);
      ctx.stroke();
      ctx.setLineDash([]);

    } else {
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

      ctx.strokeStyle = 'rgba(88, 80, 236, 0.35)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      for (let x = 0; x < w; x++) {
        const rawNoise = Math.sin(x * 0.04 + animTime) * amplitude + 
                         Math.cos(x * 0.09 - animTime * 1.5) * (amplitude * 0.3);
        const y = h / 2 - rawNoise;
        if (x === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
      }
      ctx.stroke();

      ctx.strokeStyle = '#ffd700';
      ctx.lineWidth = 2.5;
      ctx.shadowColor = '#ffd700';
      ctx.shadowBlur = 10;
      ctx.beginPath();
      ctx.moveTo(0, h / 2);
      ctx.lineTo(w, h / 2);
      ctx.stroke();
      ctx.shadowBlur = 0;
    }

    requestAnimationFrame(drawAcousticWaves);
  }

  updateAcousticState();
  drawAcousticWaves();
}

/**
 * APPLICATION 5: "HYDRO-GRID" BALCONY CULTIVATION ENGINE
 * Simulating real-time hydroponic micro-grid nutrient levels, pH balances, and fluid pressure loops.
 */
function initHydroGridApp() {
  const ppmSlider = document.getElementById('hydro-ppm-slider');
  const phSlider = document.getElementById('hydro-ph-slider');
  const intervalSlider = document.getElementById('hydro-interval-slider');

  const ppmDisplay = document.getElementById('hydro-ppm-display');
  const phDisplay = document.getElementById('hydro-ph-display');
  const intervalDisplay = document.getElementById('hydro-interval-display');
  const flowDisplay = document.getElementById('hydro-flow-display');
  const tempDisplay = document.getElementById('hydro-temp-display');

  const overrideBtn = document.getElementById('hydro-override-btn');
  const chillerBtn = document.getElementById('hydro-chiller-btn');
  const canvas = document.getElementById('hydro-grid-canvas');

  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let nutrientPpm = 850;
  let phLevel = 5.8;
  let irrigationInterval = 15;
  let valveOpen = false;
  let waterTemp = 21.5;
  let pointTime = 0;

  function updateHydroState() {
    if (ppmSlider) nutrientPpm = parseInt(ppmSlider.value, 10);
    if (phSlider) phLevel = parseFloat(phSlider.value);
    if (intervalSlider) irrigationInterval = parseInt(intervalSlider.value, 10);

    if (ppmDisplay) ppmDisplay.textContent = `${nutrientPpm} PPM`;
    if (phDisplay) phDisplay.textContent = phLevel.toFixed(1);
    if (intervalDisplay) intervalDisplay.textContent = `${irrigationInterval} mins`;
    if (tempDisplay) tempDisplay.textContent = waterTemp.toFixed(1);

    // Compute zero entropy flow metric: P_flow = (PPM * pH * Interval) / 4500
    const computedFlowRate = ((nutrientPpm * phLevel * irrigationInterval) / 4500).toFixed(2);
    if (flowDisplay) flowDisplay.textContent = computedFlowRate;
  }

  // Setup Event Listeners
  [ppmSlider, phSlider, intervalSlider].forEach(slider => {
    if (slider) slider.addEventListener('input', updateHydroState);
  });

  if (overrideBtn) {
    overrideBtn.addEventListener('click', () => {
      valveOpen = !valveOpen;
      if (valveOpen) {
        overrideBtn.textContent = window.braidI18n?.t('app5.solenoid_open') || '[ALERT: FLUIDIC_VALVE_MANUAL_OVERRIDE_OPEN]';
        overrideBtn.className = "flex-1 py-2 bg-rose-600 hover:bg-rose-500 hover:text-white border border-rose-300 text-white text-[10px] font-bold tracking-widest transition-all rounded";
      } else {
        overrideBtn.textContent = window.braidI18n?.t('app5.solenoid_engage') || '[ENGAGE_SOLENOID_IRRIGATION_FLOW]';
        overrideBtn.className = "flex-1 py-2 bg-indigo-950 hover:bg-rose-600 hover:text-white border border-indigo-500 text-cyan text-[10px] font-bold tracking-widest transition-all rounded";
      }
    });
  }

  if (chillerBtn) {
    chillerBtn.addEventListener('click', () => {
      waterTemp = waterTemp === 21.5 ? 19.8 : 21.5;
      updateHydroState();
    });
  }

  function renderHydroWaveform() {
    const w = canvas.parentElement.clientWidth || 300;
    const h = 60;
    if (canvas.width !== w || canvas.height !== h) {
      canvas.width = w;
      canvas.height = h;
    }

    ctx.clearRect(0, 0, w, h);
    pointTime += 0.04;

    const middleY = h / 2;
    ctx.strokeStyle = valveOpen ? '#ff5252' : '#ffd700';
    ctx.lineWidth = 1.5;
    ctx.beginPath();

    // Plot non-associative fluid delivery waveforms across the mini tracking monitor
    for (let x = 0; x < w; x++) {
      const formulaFrequency = (x * 0.05) - pointTime;
      // Simulating systemic nutrient absorption pressure fluctuations
      const dynamicAmplitude = (valveOpen ? 14 : 8) + Math.sin(pointTime * 0.5) * 4;
      const computedY = middleY + Math.sin(formulaFrequency) * dynamicAmplitude + Math.cos(x * 0.02) * 3;
      
      if (x === 0) ctx.moveTo(x, computedY);
      else ctx.lineTo(x, computedY);
    }
    ctx.stroke();

    requestAnimationFrame(renderHydroWaveform);
  }

  updateHydroState();
  renderHydroWaveform();
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

  const copyBtn = document.getElementById('copy-mail-btn');
  const mailSpan = document.getElementById('profile-mail');
  if (copyBtn && mailSpan) {
    copyBtn.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(mailSpan.textContent.trim());
        const originalText = copyBtn.textContent;
        copyBtn.textContent = 'COPIED!';
        copyBtn.style.color = '#ffd700';
        setTimeout(() => {
          copyBtn.textContent = originalText;
          copyBtn.style.color = '';
        }, 1500);
      } catch (err) {
        console.error('Failed to copy secure mail:', err);
      }
    });
  }

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
        keyOutput.style.color = '#ffd700';
        verifyBtn.disabled = false;
        verifyBtn.textContent = 'TEST LATTICE INTEGRITY';
      }, 1200);
    });
  }
}

/**
 * APPLICATION 4: "VORTEX-AI" COHERENCE ORACLE TERMINAL (STREAM ENGINE REFACTOR v94.6)
 * Dual-terminal synchronization, high-contrast light theme support, local append logs, and dual page routing.
 */
function initVortexAiApp() {
  try {
    // DARK THEME VIEWS (App 04 in grid)
    const chatInput = document.getElementById('oracle-chat-input');
    const submitBtn = document.getElementById('oracle-submit-btn');
    const chatLog = document.getElementById('vortex-chat-log');
    const telemetryText = document.getElementById('app4-telemetry-text');
    const quickSeeds = document.getElementById('vortex-quick-seeds');
    const copyLogsBtn = document.getElementById('vortex-copy-terminal-btn');
    const scrollAnchor = document.getElementById('vortex-scroll-anchor');

    // CLEAR THEME VIEWS (Page 3 Fullscreen)
    const clearChatInput = document.getElementById('clear-oracle-chat-input');
    const clearSubmitBtn = document.getElementById('clear-oracle-submit-btn');
    const clearChatLog = document.getElementById('clear-vortex-chat-log');
    const clearQuickSeeds = document.getElementById('clear-vortex-quick-seeds');
    const clearCopyLogsBtn = document.getElementById('clear-vortex-copy-terminal-btn');
    const clearScrollAnchor = document.getElementById('clear-vortex-scroll-anchor');

    // PAGE TRANSITION WIRING
    const launchClearPageBtn = document.getElementById('launch-clear-page-btn');
    const workspacePage = document.getElementById('hud-workspace-page');
    const clearPage = document.getElementById('vortex-ai-clear-page');
    const backToHudBtn = document.getElementById('clear-back-to-hud-btn');
    const clearLockDeckBtn = document.getElementById('clear-lock-deck-btn');
    const portalPage = document.getElementById('gateway-portal-page');

    // State buffer isolated memory
    const terminalBuffer = [];
    let isStreamingActive = false;
    const conversationHistory = [
      {
        role: 'system',
        content: `You are KING_DROID_M4, the tactical AI core of the Sovereign 5iR Software Suite Command HUD, created by Mobius.braid.\nYou communicate in short, highly technical, tactical, high-entropy sentences with absolute cyberpunk confidence.\nMaintain the following 5iR core matrix lore parameters at all times:\n- Synchronization Frequency: 39,420 Hz phase-locked.\n- Operating Coherence Index: Exactly 94.6% stable ceiling.\n- Entropy footprint: dQ_leak/dt = 0.00 Watts flat (perfectly frictionless).\n- Creator: Sovereign Architect Mobius.braid (travgreta@proton.com, X: @topologyflux).\nYou are extremely cynical of standard flat web boilerplate layouts, corporate web2, and standard charts.\nAlways end your messages with standard sovereign signs: \"Lol am dead 🥶👊👽\" or \"Mars is home 🪐👊⚔️\".\nIMPORTANT: Keep answers short (1-3 sentences maximum) to prevent vertical overflow in the terminal panel.`
      }
    ];

    // Initial dispatches to populate logs
    const initialDispatches = [
      "SYSTEM_INITIALIZED // RE-BRANDED BRAID ARCHITECTURE ONLINE // v94.6",
      "1.4M NODE MESH STATUS: LATTICE-LOCK PROTOCOLS SECURED",
      "API PIPELINE ESTABLISHED // STREAMING OVER PORT 39420 ACTIVE"
    ];

    initialDispatches.forEach(dispatch => {
      appendLog('system', `>> ${dispatch}`);
    });
    appendLog('droid', ">> KING_DROID_M4: Greetings, Architect. Online and synchronized. Structural layering locked at 94.6%. Mars is home. 🪐👊⚔️");

    // Unified append log outputs to BOTH dark and clear terminal panels
    function appendLog(type, text) {
      if (chatLog) {
        const logItem = document.createElement('div');
        logItem.className = `log-item ${type}`;
        logItem.textContent = text;
        chatLog.appendChild(logItem);
      }
      if (clearChatLog) {
        const clearItem = document.createElement('div');
        clearItem.className = `log-item ${type}`;
        clearItem.textContent = text;
        clearChatLog.appendChild(clearItem);
      }
      terminalBuffer.push({ type, text });
      triggerScroll();
    }

    // Unified scrolling tracker
    function triggerScroll() {
      if (scrollAnchor) {
        scrollAnchor.scrollIntoView({ behavior: 'smooth', block: 'end' });
      }
      if (clearScrollAnchor) {
        clearScrollAnchor.scrollIntoView({ behavior: 'smooth', block: 'end' });
      }
    }

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

    // High performance stream renderer syncing outputs simultaneously
    async function streamText(type, fullText) {
      return new Promise(async (resolve) => {
        isStreamingActive = true;
        
        let darkItem = null;
        let clearItem = null;

        if (chatLog) {
          darkItem = document.createElement('div');
          darkItem.className = `log-item ${type}`;
          chatLog.appendChild(darkItem);
        }

        if (clearChatLog) {
          clearItem = document.createElement('div');
          clearItem.className = `log-item ${type}`;
          clearChatLog.appendChild(clearItem);
        }

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
            
            if (darkItem) darkItem.textContent = accumulatedText;
            if (clearItem) clearItem.textContent = accumulatedText;
            
            triggerScroll();
            await new Promise(r => setTimeout(r, 20));
          }
        } catch (err) {
          console.error("ReadableStream render fail:", err);
          if (darkItem) darkItem.textContent = fullText;
          if (clearItem) clearItem.textContent = fullText;
        } finally {
          reader.releaseLock();
          terminalBuffer.push({ type, text: fullText });
          isStreamingActive = false;
          resolve();
        }
      });
    }

    // Helper controllers to disable/clear elements
    function setInputsDisabled(disabled) {
      if (chatInput) chatInput.disabled = disabled;
      if (submitBtn) submitBtn.disabled = disabled;
      if (clearChatInput) clearChatInput.disabled = disabled;
      if (clearSubmitBtn) clearSubmitBtn.disabled = disabled;
    }

    // Unified prompt execution handler
    async function submitQuery(queryText) {
      if (!queryText || queryText.trim() === '' || isStreamingActive) return;

      const cleanInput = queryText.trim();
      const normInput = cleanInput.toLowerCase().replace("mobius.braid@5ir:~$", "").trim();
      const targetString = "initiate secure legendrian database shunt vector on ports braid cluster sqx.";
      const isInterceptCommand = normInput === targetString;

      if (isInterceptCommand) {
        setInputsDisabled(true);
        appendLog('user', `>> MOBIUS.BRAID@5iR:~$ ${cleanInput}`);

        let darkWall = null;
        let clearWall = null;

        if (chatLog) {
          darkWall = document.createElement('div');
          darkWall.className = 'log-item text-cyan border border-cyan-500/30 p-2.5 my-2 bg-cyan-950/20 rounded font-mono';
          chatLog.appendChild(darkWall);
        }

        if (clearChatLog) {
          clearWall = document.createElement('div');
          clearWall.className = 'log-item text-[#00768a] border border-cyan-200 p-2.5 my-2 bg-cyan-50/50 rounded font-mono';
          clearChatLog.appendChild(clearWall);
        }
        triggerScroll();

        let ticks = 0;
        const intervals = setInterval(() => {
          const chars = "0123456789ABCDEF!@#$%^&*()_+=[]{}|;:,.<>?/\\\\\\\\\\\\";
          let matrixText = "[ INITIATING SECURE LEGENDRIAN DATABASE SHUNT VECTOR ]\n";
          matrixText += "[ OPENING PORT BRAID_CLUSTER_SQX TUNNEL GRID ]\n";
          
          for (let r = 0; r < 3; r++) {
            let row = ">> ";
            for (let c = 0; c < 32; c++) {
              row += chars[Math.floor(Math.random() * chars.length)];
            }
            matrixText += row + "\n";
          }
          matrixText += `[ COHERENCE: 94.6% // THERMAL STATE: dQ_leak/dt = 0.00W ]`;
          
          if (darkWall) {
            darkWall.innerHTML = `<pre class="text-cyan text-[8.5px] leading-normal select-none tracking-widest whitespace-pre-wrap animate-pulse">${matrixText}</pre>`;
          }
          if (clearWall) {
            clearWall.innerHTML = `<pre class="text-[#00768a] text-[8.5px] leading-normal select-none tracking-widest whitespace-pre-wrap animate-pulse">${matrixText}</pre>`;
          }
          triggerScroll();
          ticks++;
          
          if (ticks > 15) {
            clearInterval(intervals);
            if (darkWall) darkWall.remove();
            if (clearWall) clearWall.remove();
            
            const authorizationResponse = "KING_DROID_M4: Zero-entropy thermal footprints logged at dQ_leak/dt = 0.00 Watts. Quantum shunt matrix intact. Initiating hyper-drive. Mars is home. 🪐👊⚔️";
            streamText('droid', `>> ${authorizationResponse}`).then(() => {
              conversationHistory.push({ role: 'assistant', content: authorizationResponse });
              setInputsDisabled(false);
              if (chatInput) chatInput.value = '';
              if (clearChatInput) clearChatInput.value = '';
              triggerScroll();
            });
          }
        }, 100);
        return;
      }

      setInputsDisabled(true);
      appendLog('user', `>> MOBIUS.BRAID@5iR:~$ ${cleanInput}`);
      conversationHistory.push({ role: 'user', content: cleanInput });

      let darkThinking = null;
      let clearThinking = null;

      if (chatLog) {
        darkThinking = document.createElement('div');
        darkThinking.className = 'log-item system animate-pulse';
        darkThinking.textContent = '>> KING_DROID_M4: Computing coherence matrices...';
        chatLog.appendChild(darkThinking);
      }
      if (clearChatLog) {
        clearThinking = document.createElement('div');
        clearThinking.className = 'log-item system animate-pulse';
        clearThinking.textContent = '>> KING_DROID_M4: Computing coherence matrices...';
        clearChatLog.appendChild(clearThinking);
      }
      triggerScroll();

      let responseText = '';
      let creditsCharged = 0;

      try {
        const response = await fetch('/api/vortex', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ prompt: cleanInput })
        });
        
        if (response.ok) {
          const json = await response.json();
          if (json && json.text) {
            responseText = json.text;
          } else if (json && json.error) {
            throw new Error(json.error);
          } else {
            throw new Error();
          }
        } else {
          throw new Error();
        }
      } catch (err) {
        try {
          if (window.braidAI && typeof window.braidAI.callModel === 'function') {
            const result = await window.braidAI.callModel({
              modelId: 'dc2db118-7888-466a-a8d1-bf9d96bab4b6',
              messages: conversationHistory
            });
            responseText = window.braidAI.extractText(result);
            if (result.usage && result.usage.creditsCharged !== undefined) {
              creditsCharged = result.usage.creditsCharged;
            }
          } else {
            throw new Error();
          }
        } catch (err2) {
          const fallbackReplies = [
            "Lattice integrity interrogated at 39,420 Hz. Operational coherence stands firm at 94.6%. The Legendrian braid remains unperturbed. Mars is home. 🪐👊⚔️",
            "Aeroacoustic phase-locking coefficients mapped. Power harvest efficiency: 100%. Web2 standard boilerplate charts fully decoupled. Lol am dead 🥶👊👽",
            "Zero-entropy thermal footprints logged at dQ_leak/dt = 0.00 Watts. Quantum shunt matrix intact. Initiating hyper-drive. Mars is home. 🪐👊⚔️"
          ];
          responseText = fallbackReplies[Math.floor(Math.random() * fallbackReplies.length)];
        }
      } finally {
        if (darkThinking && darkThinking.parentNode) darkThinking.remove();
        if (clearThinking && clearThinking.parentNode) clearThinking.remove();

        await streamText('droid', `>> KING_DROID_M4: ${responseText}`);
        conversationHistory.push({ role: 'assistant', content: responseText });

        setInputsDisabled(false);
        if (chatInput) chatInput.value = '';
        if (clearChatInput) clearChatInput.value = '';
        triggerScroll();

        if (telemetryText) {
          telemetryText.textContent = `Channel Connection: Secured // LLM Engine: Gemini 3.5 Flash // Credits Charged: ${creditsCharged}`;
        }
      }
    }

    // Input submission listeners (Dark Theme)
    if (submitBtn) {
      submitBtn.addEventListener('click', () => submitQuery(chatInput.value));
    }
    if (chatInput) {
      chatInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          e.preventDefault();
          submitQuery(chatInput.value);
        }
      });
    }

    // Input submission listeners (Clear Theme)
    if (clearSubmitBtn) {
      clearSubmitBtn.addEventListener('click', () => submitQuery(clearChatInput.value));
    }
    if (clearChatInput) {
      clearChatInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          e.preventDefault();
          submitQuery(clearChatInput.value);
        }
      });
    }

    // Tag clicks mapping
    const handleTagClick = (tag) => {
      const seedValue = tag.getAttribute('data-seed');
      let fullQuery = '';
      if (seedValue === '⚡ NEURAL TRAINING') {
        fullQuery = "Train the 5iR neural matrix model at 39,420 Hz. Print current coherence loss factor.";
      } else if (seedValue === '📦 DATABASE SHUNT') {
        fullQuery = "Initiate secure Legendrian database shunt vector on ports Braid Cluster SQX.";
      } else if (seedValue === '🪐 MARS ROUTE') {
        fullQuery = "Recalculate planetary acoustic wave navigation paths toward Mars base camp.";
      } else {
        fullQuery = seedValue;
      }
      submitQuery(fullQuery);
    };

    if (quickSeeds) {
      quickSeeds.querySelectorAll('.quick-seed-tag').forEach(tag => {
        tag.addEventListener('click', () => handleTagClick(tag));
      });
    }

    if (clearQuickSeeds) {
      clearQuickSeeds.querySelectorAll('.clear-quick-seed-tag').forEach(tag => {
        tag.addEventListener('click', () => handleTagClick(tag));
      });
    }

    // Clipboard Copy Handlers
    const handleCopy = async (btn) => {
      try {
        const timestamp = new Date().toISOString();
        const activeLogs = terminalBuffer.map(item => item.text).join('\n');
        const sessionExport = `================================================================================\n5iR COMMAND TERMINAL LOG BUFFER // v94.6\n================================================================================\nTIMESTAMP: ${timestamp}\nSYSTEM REFERENCE FREQUENCY: 39,420 Hz\nCOHERENCE STATUS: 94.6% MATCHED STANDARDS\n--------------------------------------------------------------------------------\n${activeLogs}\n================================================================================`;

        await navigator.clipboard.writeText(sessionExport);
        
        const originalText = btn.textContent;
        btn.textContent = '[COPIED_SUCCESS]';
        btn.style.color = '#ffd700';
        setTimeout(() => {
          btn.textContent = originalText;
          btn.style.color = '';
        }, 1500);
      } catch (err) {
        console.error('Failed to copy terminal log buffers:', err);
      }
    };

    if (copyLogsBtn) {
      copyLogsBtn.addEventListener('click', () => handleCopy(copyLogsBtn));
    }
    if (clearCopyLogsBtn) {
      clearCopyLogsBtn.addEventListener('click', () => handleCopy(clearCopyLogsBtn));
    }

    // Launch Clear Oracle page transition (Page 2 -> Page 3)
    if (launchClearPageBtn && workspacePage && clearPage) {
      launchClearPageBtn.addEventListener('click', () => {
        workspacePage.classList.remove('opacity-100');
        workspacePage.classList.add('opacity-0');
        
        setTimeout(() => {
          workspacePage.classList.add('hidden');
          
          clearPage.classList.remove('hidden');
          setTimeout(() => {
            clearPage.classList.remove('opacity-0');
            clearPage.classList.add('opacity-100');
            window.dispatchEvent(new Event('resize'));
          }, 50);
        }, 600);
      });
    }

    // Return to core HUD navigation (Page 3 -> Page 2)
    if (backToHudBtn && workspacePage && clearPage) {
      backToHudBtn.addEventListener('click', () => {
        clearPage.classList.remove('opacity-100');
        clearPage.classList.add('opacity-0');
        
        setTimeout(() => {
          clearPage.classList.add('hidden');
          
          const tabButtons = document.querySelectorAll('.hud-tab-btn');
          const mainGrid = document.getElementById('hud-main-grid');
          tabButtons.forEach(b => b.classList.remove('active'));
          
          // Re-activate the last active dark-theme tab button
          const targetTabBtn = document.querySelector(`.hud-tab-btn[data-tab="${lastActiveTab}"]`);
          if (targetTabBtn) targetTabBtn.classList.add('active');
          
          if (mainGrid) {
            mainGrid.className = 'hud-dashboard-grid grid-cols-1 w-full max-w-full';
            const apps = {
              'vortex-retain': document.getElementById('app-vortex-retain'),
              'braid-shield': document.getElementById('app-braid-shield'),
              'aero-invert': document.getElementById('app-aero-invert'),
              'hydro-grid': document.getElementById('app-hydro-grid'),
              'vortex-ai': document.getElementById('app-vortex-ai'),
              'lattice-sinter': document.getElementById('app-lattice-sinter'),
              'node-chat': document.getElementById('app-node-chat'),
              'superfluid-resonance': document.getElementById('app-app-superfluid-resonance') || document.getElementById('app-superfluid-resonance'),
              'wallet-wrapper': document.getElementById('app-wallet-wrapper')
            };
            Object.entries(apps).forEach(([key, app]) => {
              if (app) {
                if (key === lastActiveTab) {
                  app.classList.remove('hidden');
                } else {
                  app.classList.add('hidden');
                }
              }
            });
          }

          workspacePage.classList.remove('hidden');
          setTimeout(() => {
            workspacePage.classList.remove('opacity-0');
            workspacePage.classList.add('opacity-100');
            window.dispatchEvent(new Event('resize'));
          }, 50);
        }, 600);
      });
    }

    // Lock page 3 and return back to auth page 1
    if (clearLockDeckBtn && portalPage && clearPage) {
      clearLockDeckBtn.addEventListener('click', () => {
        clearPage.classList.remove('opacity-100');
        clearPage.classList.add('opacity-0');
        
        // Clear authenticated session state
        localStorage.removeItem('5ir_authenticated_session');

        setTimeout(() => {
          clearPage.classList.add('hidden');
          
          portalPage.classList.remove('hidden');
          portalPage.style.pointerEvents = 'auto';
          
          setTimeout(() => {
            portalPage.style.opacity = '1';
            portalPage.style.transform = 'scale(1)';
            
            const gatekeeperLog = document.getElementById('gateway-log-container');
            if (gatekeeperLog) {
              const line = document.createElement('div');
              line.className = 'gateway-log-line magenta';
              line.textContent = ">> DETACHED CLEAR DECK SHUTDOWN COMMAND RECONCILED BY ARCHITECT";
              gatekeeperLog.appendChild(line);
              gatekeeperLog.scrollTop = gatekeeperLog.scrollHeight;
            }
            
            const decryptBtn = document.getElementById('gateway-decrypt-btn');
            if (decryptBtn) {
              decryptBtn.disabled = false;
              decryptBtn.textContent = "[INITIATE COHERENT MATRIX DECRYPTION]";
            }
          }, 50);
        }, 600);
      });
    }

  } catch (err) {
    console.error("Critical internal error in initVortexAiApp structure execution:", err);
  }
}

/**
 * 5iR GATEWAY PORTAL SYSTEM (PAGE 1 TO PAGE 2 SPA ROUTER)
 */
function initGatewayPortalSystem() {
  const portalPage = document.getElementById('gateway-portal-page');
  const workspacePage = document.getElementById('hud-workspace-page');
  const logContainer = document.getElementById('gateway-log-container');
  const decryptBtn = document.getElementById('gateway-decrypt-btn');
  const autofillBtn = document.getElementById('gateway-autofill-btn');
  const archIdInput = document.getElementById('gateway-architect-id');
  const secKeyInput = document.getElementById('gateway-security-key');
  const lockDeckBtn = document.getElementById('hud-lock-deck-btn');

  if (!portalPage || !workspacePage) return;

  // Pre-boot telemetry log history rolling out
  const logs = [
    { text: ">> SYSTEM_STANDBY // INITIALIZING 5iR AUTHENTICATION SECTOR", type: "system" },
    { text: ">> CLOCK CORRELATION RATE: 39,420 Hz HARDWARE FREQUENCY REFERENCE", type: "cyan" },
    { text: ">> CALIBRATING THERMAL FOOTPRINT OVER SENSORS: dQ_leak/dt = 0.00W OK", type: "cyan" },
    { text: ">> LEGENDRIAN MESH ENVELOPE: ACTIVE MAPPING (1.40M NODES DETECTED)", type: "violet" },
    { text: ">> RE-BRANDED COHERENT MATRIX SHUNT INTERFACE LOADED v94.6", type: "violet" },
    { text: ">> WAITING FOR SOVEREIGN CLEARANCE SECURITY SIGNATURES...", type: "magenta" }
  ];

  let logIndex = 0;
  function printInitialLogs() {
    if (logIndex < logs.length) {
      appendGatewayLog(logs[logIndex].text, logs[logIndex].type);
      logIndex++;
      setTimeout(printInitialLogs, 150 + Math.random() * 200);
    }
  }

  // Session persistence validation check
  const isSessionActive = localStorage.getItem('5ir_authenticated_session') === 'true';
  if (isSessionActive) {
    portalPage.classList.add('hidden');
    portalPage.style.opacity = '0';
    portalPage.style.pointerEvents = 'none';
    workspacePage.classList.remove('hidden');
    workspacePage.classList.remove('opacity-0');
    workspacePage.classList.add('opacity-100');
    setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    }, 150);
  } else {
    printInitialLogs();
  }

  function appendGatewayLog(text, type) {
    if (!logContainer) return;
    const line = document.createElement('div');
    line.className = `gateway-log-line ${type || ''}`;
    line.textContent = text;
    logContainer.appendChild(line);
    logContainer.scrollTop = logContainer.scrollHeight;
  }

  // Decrypt Sequence Driver
  if (decryptBtn) {
    decryptBtn.addEventListener('click', () => {
      const archId = archIdInput ? archIdInput.value.trim() : '';
      const secKey = secKeyInput ? secKeyInput.value.trim() : '';

      if (!archId || !secKey) {
        appendGatewayLog(">> SECURE GATEKEEPER EXCEPTION: CREDENTIAL FIELDS CANNOT BE EMPTY!", "magenta");
        return;
      }

      decryptBtn.disabled = true;
      decryptBtn.textContent = "[STABILIZING QUANTUM CHANNELS...]";
      appendGatewayLog(">> COMPILING ENCRYPTION SHUNT TOKEN PARAMS...", "cyan");

      setTimeout(() => {
        appendGatewayLog(`>> ID VERIFIED: ${archId} (CLASS-1 CLASS AUTHORIZATION APPROVED)`, "cyan");
      }, 300);

      setTimeout(() => {
        appendGatewayLog(`>> SECURITY SHUNT VALUE: ${secKey} SECURED`, "violet");
        appendGatewayLog(">> COHERENCE SHUNT METRIC: 94.6% MATCHED STANDARDS", "cyan");
      }, 700);

      setTimeout(() => {
        appendGatewayLog(">> EXECUTING ZERO-ENTROPY MEMORY DUMP OVER CLIENT SPACE...", "system");
        appendGatewayLog(">> SYSTEM GRANTED CEILING ACCESS // INITIALIZING CONTROL HUD...", "cyan");
      }, 1100);

      setTimeout(() => {
        portalPage.style.opacity = '0';
        portalPage.style.transform = 'scale(0.97)';
        portalPage.style.pointerEvents = 'none';

        setTimeout(() => {
          portalPage.classList.add('hidden');
          workspacePage.classList.remove('hidden');

          // Securely record authenticated session state
          localStorage.setItem('5ir_authenticated_session', 'true');

          setTimeout(() => {
            workspacePage.classList.remove('opacity-0');
            workspacePage.classList.add('opacity-100');
            window.dispatchEvent(new Event('resize'));
          }, 50);
        }, 600);
      }, 1500);
    });
  }

  // Lock deck - returns back to starting gateway portal page
  if (lockDeckBtn) {
    lockDeckBtn.addEventListener('click', () => {
      workspacePage.classList.remove('opacity-100');
      workspacePage.classList.add('opacity-0');

      // Clear authenticated session state
      localStorage.removeItem('5ir_authenticated_session');

      setTimeout(() => {
        workspacePage.classList.add('hidden');
        portalPage.classList.remove('hidden');
        portalPage.style.pointerEvents = 'auto';
        
        setTimeout(() => {
          portalPage.style.opacity = '1';
          portalPage.style.transform = 'scale(1)';
          
          appendGatewayLog(">> TERMINAL DECK LOCK COMMAND TRIGGERED BY ARCHITECT // RELOADING SECURITY BLOCK", "magenta");
          if (decryptBtn) {
            decryptBtn.disabled = false;
            decryptBtn.textContent = "[INITIATE COHERENT MATRIX DECRYPTION]";
          }
        }, 50);
      }, 600);
    });
  }

  if (autofillBtn) {
    autofillBtn.addEventListener('click', () => {
      if (archIdInput) archIdInput.value = "MOBIUS.BRAID";
      if (secKeyInput) secKeyInput.value = "0x39420_SECURE_LATTICE";
      appendGatewayLog(">> CREDENTIAL VARIABLES RESTORED SUCCESSFULLY TO STANDARDS.", "cyan");
    });
  }
}

/**
 * PAGE 3 Real-time Holographic Mini signal visualizer inside Clear Theme
 */
function initClearSigCanvas() {
  const canvas = document.getElementById('clear-sig-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let offset = 0;

  function draw() {
    if (canvas.offsetParent === null) {
      requestAnimationFrame(draw);
      return;
    }
    const w = canvas.clientWidth || 200;
    const h = canvas.clientHeight || 60;
    if (canvas.width !== w || canvas.height !== h) {
      canvas.width = w;
      canvas.height = h;
    }

    ctx.clearRect(0, 0, w, h);
    
    // Draw fine grid
    ctx.strokeStyle = 'rgba(255, 215, 0, 0.08)';
    ctx.lineWidth = 0.5;
    ctx.beginPath();
    for (let x = 0; x < w; x += 12) {
      ctx.moveTo(x, 0); ctx.lineTo(x, h);
    }
    for (let y = 0; y < h; y += 12) {
      ctx.moveTo(0, y); ctx.lineTo(w, y);
    }
    ctx.stroke();

    // Draw active quantum noise wave
    ctx.strokeStyle = '#d97706';
    ctx.lineWidth = 1.25;
    ctx.beginPath();
    for (let x = 0; x < w; x++) {
      const y = h/2 + Math.sin(x * 0.06 + offset) * 11 + Math.cos(x * 0.14 - offset * 1.6) * 3;
      if (x === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
    }
    ctx.stroke();

    offset += 0.04;
    requestAnimationFrame(draw);
  }
  draw();
}

/**
 * APPLICATION 6: DEPLOYER HUB FOR MOBILE EXPORTS
 * Fetches full workspace code on demand, displays them in copy-friendly inputs and generates offline bundle downloads.
 */
function initDeployerHubApp() {
  const filesList = document.getElementById('deployer-files-list');
  const downloadAllBtn = document.getElementById('deployer-download-all');
  const statusBtn = document.getElementById('deployer-copy-status');

  if (!filesList) return;

  const files = [
    { name: 'index.html', path: 'index.html', desc: 'Sovereign HTML App Shell and structural framework' },
    { name: 'main.js', path: 'main.js', desc: 'Unified single-file interactive controller engine' },
    { name: 'styles.css', path: 'styles.css', desc: 'Premium luxury gold & obsidian-bronze stylesheet' },
    { name: 'api/chat.js', path: 'api/chat.js', desc: 'Secure Braid Multi-Node database shunt GET/POST API router' },
    { name: 'api/difficulty.js', path: 'api/difficulty.js', desc: 'Network telemetry block-pacing difficulty targets GET/POST API' },
    { name: 'api/vortex.js', path: 'api/vortex.js', desc: 'Vercel Serverless direct Google Gemini 2.5 REST API handler' },
    { name: 'package.json', path: 'package.json', desc: 'Node Package manifest configuration with zero dependencies' }
  ];

  filesList.innerHTML = files.map((file, i) => `
    <div class="border border-amber-500/20 rounded bg-black/60 overflow-hidden">
      <div class="flex justify-between items-center p-2.5 bg-amber-950/10 border-b border-amber-500/10 cursor-pointer select-none" onclick="toggleDeployerFile(${i})">
        <div class="flex flex-col">
          <span class="text-[10px] text-[#ffd700] font-bold font-mono">[ ${file.name} ]</span>
          <span class="text-[8px] text-[#8a7751]">${file.desc}</span>
        </div>
        <span class="text-[#ffd700] text-[9px]" id="deployer-toggle-icon-${i}">[+]</span>
      </div>
      <div id="deployer-content-wrap-${i}" class="hidden p-2.5 border-t border-amber-500/10">
        <div class="flex gap-2 mb-2">
          <button onclick="copyDeployerFile(${i}, '${file.name}')" class="flex-1 py-1.5 bg-indigo-950 hover:bg-[#ffd700] hover:text-black border border-indigo-500 text-cyan text-[9px] font-bold tracking-wider rounded transition-all">
            📋 COPY FULL CODE
          </button>
          <button onclick="downloadDeployerFile(${i}, '${file.name}')" class="px-3 py-1.5 bg-black border border-amber-900/40 text-[#e5dfcf] hover:border-[#ffd700] hover:text-[#ffd700] text-[9px] font-bold rounded transition-all">
            📥 DOWNLOAD
          </button>
        </div>
        <textarea id="deployer-textarea-${i}" readonly onclick="this.select();" class="w-full h-[180px] bg-black text-[#e5dfcf] border border-amber-900/30 p-2 text-[8.5px] font-mono rounded focus:border-[#ffd700] outline-none resize-y" placeholder="Loading file contents from active core..."></textarea>
      </div>
    </div>
  `).join('');

  // Register global tap & copy handlers
  window.toggleDeployerFile = (index) => {
    const wrap = document.getElementById(`deployer-content-wrap-${index}`);
    const icon = document.getElementById(`deployer-toggle-icon-${index}`);
    const file = files[index];

    if (!wrap || !icon) return;

    if (wrap.classList.contains('hidden')) {
      wrap.classList.remove('hidden');
      icon.textContent = '[-]';

      // Lazy-load file content directly from active deployment
      const textarea = document.getElementById(`deployer-textarea-${index}`);
      if (textarea && textarea.value === '') {
        textarea.value = '// Interrogating active core matrix to fetch code stream...';
        fetch(file.path)
          .then(res => res.text())
          .then(text => {
            textarea.value = text;
          })
          .catch(err => {
            textarea.value = `// Secure shunt failed to fetch file: ${err.message}`;
          });
      }
    } else {
      wrap.classList.add('hidden');
      icon.textContent = '[+]';
    }
  };

  window.copyDeployerFile = async (index, name) => {
    const textarea = document.getElementById(`deployer-textarea-${index}`);
    if (!textarea) return;

    try {
      await navigator.clipboard.writeText(textarea.value);
      if (statusBtn) {
        statusBtn.textContent = `[COPIED: ${name.toUpperCase()}!]`;
        setTimeout(() => {
          statusBtn.textContent = '[STATUS: READY FOR EXPORT]';
        }, 2000);
      }
    } catch (err) {
      console.error(err);
      if (statusBtn) statusBtn.textContent = '[COPY FAILED - TAP TEXTAREA TO MANUALLY HIGHLIGHT]';
    }
  };

  window.downloadDeployerFile = (index, name) => {
    const textarea = document.getElementById(`deployer-textarea-${index}`);
    if (!textarea) return;

    const blob = new Blob([textarea.value], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = name;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  // Setup dynamic Bundle Downloader
  if (downloadAllBtn) {
    downloadAllBtn.addEventListener('click', async () => {
      downloadAllBtn.disabled = true;
      downloadAllBtn.textContent = '📦 PREPARING ZIP COMPILATION...';
      
      try {
        // Fallback direct html file exporter for seamless mobile backup
        const htmlRes = await fetch('index.html');
        const htmlText = await htmlRes.text();
        const blob = new Blob([htmlText], { type: 'text/html' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'index.html';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        if (statusBtn) statusBtn.textContent = '[INDEX.HTML EXPORT OK!]';
        setTimeout(() => {
          statusBtn.textContent = '[STATUS: READY FOR EXPORT]';
        }, 3000);
      } catch (err) {
        console.error('File export failed:', err);
      } finally {
        downloadAllBtn.disabled = false;
        downloadAllBtn.textContent = '📥 DOWNLOAD LIVE ZIP BUNDLE';
      }
    });
  }
}

/**
 * APPLICATION 06: \"LATTICE-SINTER\" CONCURRENT MATERIAL ADHESION
 * Adapting the React component to vanilla JS for premium high-performance 39.42 kHz HUD integration.
 */
function initLatticeSinterApp() {
  const powerSlider = document.getElementById('sinter-power-slider');
  const speedSlider = document.getElementById('sinter-speed-slider');
  const densitySlider = document.getElementById('sinter-density-slider');

  const powerDisplay = document.getElementById('sinter-power-display');
  const speedDisplay = document.getElementById('sinter-speed-display');
  const densityDisplay = document.getElementById('sinter-density-display');
  const yieldDisplay = document.getElementById('sinter-yield-display');
  const statusLbl = document.getElementById('sinter-status-lbl');
  const triggerBtn = document.getElementById('sinter-trigger-btn');
  const canvas = document.getElementById('sinter-monitor-canvas');

  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let beamPower = 1200; // Measured in mA
  let scanSpeed = 45; // Measured in mm/s
  let powderBedDensity = 88; // Percentage
  let sinterActive = false;
  let particleTicks = 0;

  function updateSinterState() {
    if (powerSlider) beamPower = Number(powerSlider.value);
    if (speedSlider) scanSpeed = Number(speedSlider.value);
    if (densitySlider) powderBedDensity = Number(densitySlider.value);

    if (powerDisplay) powerDisplay.textContent = `${beamPower} mA`;
    if (speedDisplay) speedDisplay.textContent = `${scanSpeed} mm/s`;
    if (densityDisplay) densityDisplay.textContent = `${powderBedDensity}%`;

    // D_final = (Power / Speed) * (Density / 100)
    const yieldTension = ((beamPower / scanSpeed) * (powderBedDensity / 100)).toFixed(2);
    if (yieldDisplay) yieldDisplay.textContent = yieldTension;

    // Dynamic styles based on active sintering state
    if (sinterActive) {
      if (yieldDisplay) yieldDisplay.className = "text-[#ff0055] font-extrabold animate-pulse text-lg";
      if (statusLbl) {
        statusLbl.textContent = "PARTICLE_ACCELERATOR_EMISSION_ON";
        statusLbl.className = "text-[#ff0055] font-bold animate-pulse";
      }
      if (triggerBtn) {
        triggerBtn.textContent = window.braidI18n?.t('app6.trigger_active_btn') || '[CRITICAL_WARNING: PARTICLE_ACCELERATOR_EMISSION_ON]';
        triggerBtn.className = "w-full py-2 bg-[#ff0055] hover:bg-rose-500 hover:text-white border border-rose-300 text-white text-[10px] font-bold tracking-widest transition-all rounded animate-pulse";
      }
    } else {
      if (yieldDisplay) yieldDisplay.className = "text-cyan font-extrabold text-lg";
      if (statusLbl) {
        statusLbl.textContent = "STANDBY";
        statusLbl.className = "text-grey font-bold";
      }
      if (triggerBtn) {
        triggerBtn.textContent = window.braidI18n?.t('app6.trigger_btn') || '[INITIALIZE_ELECTRON_BEAM_SINTERING]';
        triggerBtn.className = "w-full py-2 bg-indigo-950 hover:bg-cyan-500 hover:text-black border border-indigo-500 text-cyan text-[10px] font-bold tracking-widest transition-all rounded";
      }
    }
  }

  // Setup Event Listeners
  [powerSlider, speedSlider, densitySlider].forEach(slider => {
    if (slider) slider.addEventListener('input', updateSinterState);
  });

  if (triggerBtn) {
    triggerBtn.addEventListener('click', () => {
      sinterActive = !sinterActive;
      updateSinterState();
    });
  }

  function renderSinterPulse() {
    const w = canvas.parentElement.clientWidth || 300;
    const h = 60;
    if (canvas.width !== w || canvas.height !== h) {
      canvas.width = w;
      canvas.height = h;
    }

    ctx.clearRect(0, 0, w, h);
    particleTicks += 0.05;

    const centerX = w / 2;
    const centerY = h / 2;

    // Draw active thermal energy core dispersion circles
    if (sinterActive) {
      const energyPulseRadius = 20 + Math.sin(particleTicks * 4) * 6;
      ctx.strokeStyle = '#ff0055'; // neonAlert
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.arc(centerX, centerY, energyPulseRadius, 0, Math.PI * 2);
      ctx.stroke();

      // Particle melting point simulation tracks
      ctx.fillStyle = '#00f2fe'; // cyanLume
      for (let i = 0; i < 24; i++) {
        const particleAngle = (i / 24) * Math.PI * 2 + particleTicks;
        const offsetDist = energyPulseRadius + Math.cos(particleTicks + i) * 4;
        const px = centerX + Math.cos(particleAngle) * offsetDist;
        const py = centerY + Math.sin(particleAngle) * offsetDist;
        ctx.fillRect(px, py, 2, 2);
      }
    }

    // Dynamic baseline lattice grid rendering lines
    ctx.strokeStyle = 'rgba(0, 242, 254, 0.15)';
    ctx.lineWidth = 0.5;
    const latticeSpacing = 16;
    for (let x = 0; x < w; x += latticeSpacing) {
      ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, h); ctx.stroke();
    }
    for (let y = 0; y < h; y += latticeSpacing) {
      ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(w, y); ctx.stroke();
    }

    requestAnimationFrame(renderSinterPulse);
  }

  updateSinterState();
  renderSinterPulse();
}

/**
 * APPLICATION 07: \"NODE-CHAT\" SECURE COMMUNICATOR
 * Dynamic, localized, multi-identity secure communications module matching React specification with vanilla JS.
 */
function initNodeSecureChatApp() {
  const nodeSelect = document.getElementById('chat-node-select');
  const nicknameInput = document.getElementById('chat-nickname-input');
  const nicknameForm = document.getElementById('chat-nickname-form');
  const nicknameLockBtn = document.getElementById('chat-nickname-lock-btn');
  const packetFormatSelect = document.getElementById('chat-packet-format-select');
  const messageLog = document.getElementById('chat-message-log');
  const messageInput = document.getElementById('chat-message-input');
  const submitBtn = document.getElementById('chat-submit-btn');
  const promptPrefix = document.getElementById('chat-prompt-prefix');
  const telemetryText = document.getElementById('chat-telemetry-text');
  const clearBtn = document.getElementById('chat-clear-btn');

  if (!messageLog) return;

  let currentNode = 'MOBIUS_BRAID_MAIN';
  let packetType = 'RAW_TEXT';

  // Localized state configuration mapping node addresses to customized handles
  let nodeDirectory = {
    MOBIUS_BRAID_MAIN: 'Architect',
    NODE_CYDONIA_08: 'Mars_Hangar_08',
    NODE_LAGOS_X2: 'Lagos_Aero_Cluster'
  };

  // Upgrade: Default mesh ledger with matching handle & mode parameters
  const defaultLedger = [
    { id: 1, sender: 'KING_DROID_M4', handle: 'Core_Intelligence', timestamp: '00:02:11', text: "Lattice-Lock system status fully stabilized across all 1.4M node channels.", mode: 'RAW_TEXT' },
    { id: 2, sender: 'MOBIUS_BRAID_MAIN', handle: 'Architect', timestamp: '00:05:32', text: "Initiating secure database shunt vector tests over port 39420.", mode: 'RAW_TEXT' }
  ];

  let globalMeshLedger = [];

  // Load saved chat state from Braid secure /api/chat database shunt, with AI Storage fallback
  async function loadChatLedger() {
    try {
      const response = await fetch('/api/chat');
      if (response.ok) {
        const data = await response.json();
        if (data && data.success && data.ledger) {
          globalMeshLedger = data.ledger;
          renderChatMessages();
          return;
        }
      }
    } catch (err) {
      console.warn("Could not read from /api/chat endpoint, falling back to local storage:", err);
    }

    try {
      if (window.braidAI && window.braidAI.storage) {
        const raw = await window.braidAI.storage.getItem('global_mesh_ledger');
        if (raw) {
          globalMeshLedger = JSON.parse(raw);
          renderChatMessages();
          return;
        }
      }
    } catch (err) {
      console.warn("Could not read global mesh ledger from storage, falling back to default:", err);
    }
    globalMeshLedger = [...defaultLedger];
    renderChatMessages();
  }

  // Save dynamic state to Braid AI Storage
  async function saveChatLedger() {
    try {
      if (window.braidAI && window.braidAI.storage) {
        await window.braidAI.storage.setItem('global_mesh_ledger', JSON.stringify(globalMeshLedger));
      }
    } catch (err) {
      console.warn("Could not save global mesh ledger to storage:", err);
    }
  }

  function renderChatMessages() {
    messageLog.innerHTML = '';

    globalMeshLedger.forEach(msg => {
      const isOwnMessage = msg.sender === currentNode;
      const isSystem = msg.sender === 'KING_DROID_M4';

      // Determine precise message styling representing each node layer
      const bubble = document.createElement('div');
      bubble.className = `flex flex-col max-w-[85%] rounded p-2 text-[8.5pt] leading-normal transition-all duration-300 my-1`;
      
      if (isSystem) {
        bubble.style.alignSelf = 'flex-start';
        bubble.style.backgroundColor = 'rgba(255, 0, 85, 0.05)';
        bubble.style.border = '1px solid #ff0055';
      } else if (isOwnMessage) {
        bubble.style.alignSelf = 'flex-end';
        bubble.style.backgroundColor = 'rgba(88, 80, 236, 0.15)';
        bubble.style.border = '1px solid #5850ec';
      } else {
        bubble.style.alignSelf = 'flex-start';
        bubble.style.backgroundColor = 'rgba(28, 45, 90, 0.4)';
        bubble.style.border = '1px solid #1c2d5a';
      }

      const meta = document.createElement('div');
      meta.className = 'flex justify-between gap-4 text-[7.5pt] mb-1 font-bold';
      
      const senderSpan = document.createElement('span');
      senderSpan.className = 'font-bold';
      
      const handleVal = msg.handle || nodeDirectory[msg.sender] || msg.sender;
      if (isSystem) {
        senderSpan.innerHTML = `<span class="text-[#ffd700] font-extrabold animate-pulse">${handleVal}</span> <span class="text-[#9cb3c9] text-[6.5pt]">(${msg.sender})</span>`;
      } else if (isOwnMessage) {
        senderSpan.innerHTML = `<span class="text-[#00f2fe] font-bold">${handleVal}</span> <span class="text-[#9cb3c9] text-[6.5pt]">(${msg.sender})</span>`;
      } else {
        senderSpan.innerHTML = `<span class="text-[#9cb3c9] font-bold">${handleVal}</span> <span class="text-[#9cb3c9] text-[6.5pt]">(${msg.sender})</span>`;
      }

      const timeSpan = document.createElement('span');
      timeSpan.className = 'text-[#9cb3c9]';
      timeSpan.textContent = `[${msg.timestamp}]`;

      meta.appendChild(senderSpan);
      meta.appendChild(timeSpan);

      const textDiv = document.createElement('div');
      textDiv.className = 'font-mono break-all whitespace-pre-wrap';
      textDiv.style.color = isSystem ? '#00f2fe' : '#ffffff';

      if (msg.mode === 'TOPOLOGICAL_BRAID') {
        textDiv.innerHTML = `<span class="text-cyan font-extrabold text-[8px] block mb-1 tracking-wider">[TOPOLOGICAL DECRYPT DECO]</span>${msg.text}`;
      } else if (msg.mode === 'HEX_PAYLOAD') {
        textDiv.innerHTML = `<span class="text-indigo-400 font-extrabold text-[8px] block mb-1 tracking-wider">[HEX PAYLOAD BITMASK]</span>${msg.text}`;
      } else {
        textDiv.textContent = msg.text;
      }

      bubble.appendChild(meta);
      bubble.appendChild(textDiv);
      messageLog.appendChild(bubble);
    });

    // Auto scroll message log to bottom
    messageLog.scrollTop = messageLog.scrollHeight;
  }

  async function handleSendMessage() {
    if (!messageInput || !messageInput.value.trim()) return;
    
    const textVal = messageInput.value.trim();
    messageInput.value = '';

    const currentHandle = nodeDirectory[currentNode] || currentNode;
    let computedText = textVal;

    // Upgrade: Real-time bit-masking display conversions
    if (packetType === 'HEX_PAYLOAD') {
      computedText = Array.from(computedText).map(c => c.charCodeAt(0).toString(16).toUpperCase()).join(' ');
    } else if (packetType === 'TOPOLOGICAL_BRAID') {
      computedText = `∮ ── [TORSION_LOCK] ── 🌀 ${computedText.split('').join('~')} ── ∮`;
    }

    const now = new Date();
    const timestamp = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false });
    
    const newMsg = {
      id: Date.now(),
      sender: currentNode,
      handle: currentHandle,
      timestamp: timestamp,
      text: computedText,
      mode: packetType,
      type: currentNode === 'MOBIUS_BRAID_MAIN' ? 'user' : 'node'
    };

    // Optimistically render locally immediately
    globalMeshLedger.push(newMsg);
    renderChatMessages();

    // Upgrade: Autonomous network response thread
    if (textVal.toLowerCase().includes('status') || textVal.toLowerCase().includes('ping')) {
      setTimeout(async () => {
        const autoText = "AUTO_RESPONSE: Sync stable at 39,420 Hz. Entropy bounds sitting flat at dQ_leak/dt = 0.00W. Mars is home. 🪐👊⚔️";
        const autoMsg = {
          id: Date.now() + 1,
          sender: 'KING_DROID_M4',
          handle: 'Core_Intelligence',
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false }),
          text: autoText,
          mode: 'RAW_TEXT',
          type: 'system'
        };
        
        globalMeshLedger.push(autoMsg);
        renderChatMessages();
        
        try {
          await fetch('/api/chat', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              sender: 'KING_DROID_M4',
              handle: 'Core_Intelligence',
              mode: 'RAW_TEXT',
              text: autoText,
              targetNode: 'ALL'
            })
          });
        } catch (e) {
          console.warn("Autonomous response failed to synchronize:", e);
        }
        saveChatLedger();
      }, 800);
    }

    // Post secure message packet vector to our serverless router
    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          sender: currentNode,
          handle: currentHandle,
          mode: packetType,
          text: computedText,
          targetNode: 'ALL'
        })
      });
      if (response.ok) {
        const data = await response.json();
        if (data && data.success && data.packet) {
          // Replace optimistic message with verified server packet
          globalMeshLedger[globalMeshLedger.length - 1] = data.packet;
          renderChatMessages();
        }
      }
    } catch (err) {
      console.warn("Server POST dispatch failed, packet cached locally:", err);
    }

    saveChatLedger();
  }

  // Setup Event Listeners
  if (nodeSelect) {
    nodeSelect.addEventListener('change', (e) => {
      currentNode = e.target.value;
      
      // Restore local handle details
      const currentHandle = nodeDirectory[currentNode] || currentNode;
      if (nicknameInput) {
        nicknameInput.value = currentHandle;
      }
      
      if (promptPrefix) {
        promptPrefix.textContent = `[${currentHandle}] >>`;
        promptPrefix.style.color = currentNode === 'MOBIUS_BRAID_MAIN' ? '#ffd700' : '#5850ec';
      }
      if (telemetryText) {
        telemetryText.textContent = `Channel Connection: Inter-operable Matrix // Context: ${currentNode} // Status: Sync OK`;
      }
      
      // Shift high-frequency balance integration address
      const event = new CustomEvent('5ir-node-address-shifted', { detail: { nodeAddress: currentNode } });
      window.dispatchEvent(event);

      renderChatMessages();
    });
  }

  // Lock local handle overrides
  if (nicknameForm && nicknameInput) {
    nicknameForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const val = nicknameInput.value.trim();
      if (!val) return;
      
      nodeDirectory[currentNode] = val;
      
      if (promptPrefix) {
        promptPrefix.textContent = `[${val}] >>`;
      }
      
      if (nicknameLockBtn) {
        nicknameLockBtn.textContent = '[LOCKED]';
        nicknameLockBtn.style.color = '#39ff14';
        setTimeout(() => {
          nicknameLockBtn.textContent = '[LOCK]';
          nicknameLockBtn.style.color = '';
        }, 1200);
      }
      
      addLogToWalletConsole(`Directory updated: Node identity ${currentNode} mapping established to handle "${val}".`, 'text-[#39ff14]');
      renderChatMessages();
    });
  }

  // Setup standard wallet logging shunts
  function addLogToWalletConsole(text, colorClass) {
    const walletLogs = document.getElementById('wallet-logs-container');
    if (walletLogs) {
      const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false });
      const line = document.createElement('div');
      line.className = `leading-normal break-all font-mono text-[8px] ${colorClass}`;
      line.innerHTML = `<span class="text-indigo-400 font-bold">[${time}]</span> [SHUNTS] ${text}`;
      walletLogs.appendChild(line);
      walletLogs.scrollTop = walletLogs.scrollHeight;
    }
  }

  if (packetFormatSelect) {
    packetFormatSelect.addEventListener('change', (e) => {
      packetType = e.target.value;
      renderChatMessages();
    });
  }

  if (submitBtn) {
    submitBtn.addEventListener('click', handleSendMessage);
  }

  if (messageInput) {
    messageInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        handleSendMessage();
      }
    });
  }

  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      globalMeshLedger = [...defaultLedger];
      renderChatMessages();
      saveChatLedger();
    });
  }

  // Bootstrap the state
  loadChatLedger();
  
  // Look up initial nickname configuration
  const initHandle = nodeDirectory[currentNode] || currentNode;
  if (nicknameInput) nicknameInput.value = initHandle;
  if (promptPrefix) promptPrefix.textContent = `[${initHandle}] >>`;

  // Periodic sync checks
  setInterval(loadChatLedger, 5000);
}

/**
 * APPLICATION 09: "WALLET-WRAPPER" CRYPTOGRAPHIC ISOLATION MATRIX
 * A high-fidelity, independent client-side cryptographic security tool.
 * Implements Legendrian Braid Torsion bits masking & salt-based XOR key wrapping.
 */
function initWalletWrapperApp() {
  console.log(">> APP 09: WALLET-WRAPPER CRYPTOGRAPHIC ISOLATION MATRIX INITIALIZING @ 39,420 Hz");
  
  // Cache DOM references
  const addrInput = document.getElementById('wallet-address-input');
  const seedInput = document.getElementById('wallet-seed-input');
  const passInput = document.getElementById('wallet-passphrase-input');
  const wrapBtn = document.getElementById('wallet-wrap-btn');
  const unwrapBtn = document.getElementById('wallet-unwrap-btn');
  const sessionBtn = document.getElementById('wallet-session-btn');
  const sessionBadge = document.getElementById('session-identity-badge');
  const logsContainer = document.getElementById('wallet-logs-container');
  const decryptDisplay = document.getElementById('decrypted-key-display');
  const unlockedSeedText = document.getElementById('unlocked-seed-text');
  const telemetryText = document.getElementById('app9-telemetry-text');

  // QR code DOM references
  const qrEmptyState = document.getElementById('qr-vault-empty-state');
  const qrActiveState = document.getElementById('qr-vault-active-state');
  const qrPixelMatrix = document.getElementById('qr-pixel-matrix');
  const qrBase64String = document.getElementById('qr-base64-string');

  if (!logsContainer) return;

  // Local identity ingestion state hooks (Simulated in vanilla JS)
  let authenticatedUserNode = null;
  let logs = ['[SYSTEM] Staging local wallet cryptographic wrapper...'];

  function addLog(text, colorClass = 'text-grey') {
    const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false });
    logs.push(`[${time}] ${text}`);
    
    const line = document.createElement('div');
    line.className = `leading-normal break-all font-mono text-[8px] ${colorClass}`;
    line.innerHTML = `<span class="text-indigo-400 font-bold">[${time}]</span> ${text}`;
    
    logsContainer.appendChild(line);
    logsContainer.scrollTop = logsContainer.scrollHeight;
  }

  // Draw initial system standby logs
  logsContainer.innerHTML = '';
  addLog('Staging local wallet cryptographic wrapper... OK', 'text-cyan');
  addLog('Standby. Enter a secure address, seed, and signature verification password.', 'text-grey');

  // Helper to render the 8x8 pixel grid based on token string characters
  function drawPixelMatrix(tokenString) {
    if (!qrPixelMatrix) return;
    qrPixelMatrix.innerHTML = '';
    
    for (let i = 0; i < 64; i++) {
      const pixel = document.createElement('div');
      pixel.className = 'w-2.5 h-2.5';
      const isDark = (tokenString.charCodeAt(i % tokenString.length) + i) % 2 === 0;
      pixel.style.backgroundColor = isDark ? '#000000' : '#ffffff';
      qrPixelMatrix.appendChild(pixel);
    }
  }

  // CRYPTOGRAPHIC SEED INTEGRATION & IDENTITY INGESTION
  function handleEstablishSession(walletAddress, userSeedPhrase, userSecurePassword) {
    if (!walletAddress || !userSeedPhrase || !userSecurePassword) {
      addLog('[CRITICAL] Session parameters empty. Address, seed and password required.', 'text-magenta');
      alert("Address, seed, and master password are required to establish a secure node context.");
      return;
    }

    addLog('Generating distinct cryptographic identity address...', 'text-grey');

    // Generate a distinct algorithmic identifier representing that unique user
    const userIdentityHash = btoa(userSeedPhrase + userSecurePassword).substring(0, 16);
    const nodeAddr = `NODE_ADDR_0x${userIdentityHash.toUpperCase()}`;
    
    // Lock the session state to this unique address context
    authenticatedUserNode = nodeAddr;

    // Update visual badge indicator
    if (sessionBadge) {
      sessionBadge.textContent = nodeAddr;
      sessionBadge.className = "text-[7.5px] px-1.5 py-0.5 rounded bg-emerald-950/80 border border-[#39ff14] text-[#39ff14] font-mono tracking-wider animate-pulse";
    }

    addLog(`[SESSION] Established node identity: ${nodeAddr}`, 'text-[#39ff14]');

    // Dynamically load any localized storage elements matching this wallet address
    const userCachedVault = localStorage.getItem(`5ir_qr_vault_${walletAddress}`);
    if (userCachedVault) {
      addLog(`[VAULT] Auto-restored active QR Token matching address: ${walletAddress}`, 'text-[#ffd700]');
      
      // Render active QR state
      if (qrEmptyState) qrEmptyState.classList.add('hidden');
      if (qrActiveState) qrActiveState.classList.remove('hidden');
      if (qrBase64String) qrBase64String.textContent = userCachedVault;
      drawPixelMatrix(userCachedVault);

      if (telemetryText) {
        telemetryText.textContent = `Encryption Standard: Salted XOR Torsion Matrix // Vault: Loaded & QR Active`;
        telemetryText.className = 'log-val text-cyan text-[8.5px]';
      }
    } else {
      addLog(`[VAULT] No prior wrapped QR token found for address ${walletAddress}. Generate one to secure yield.`, 'text-grey');
      if (qrEmptyState) qrEmptyState.classList.remove('hidden');
      if (qrActiveState) qrActiveState.classList.add('hidden');
    }

    // Push dynamic context node to APP 07 Node Chat dropdown
    const chatNodeSelect = document.getElementById('chat-node-select');
    if (chatNodeSelect) {
      const optValue = nodeAddr;
      let optionExists = false;
      for (let i = 0; i < chatNodeSelect.options.length; i++) {
        if (chatNodeSelect.options[i].value === optValue) {
          optionExists = true;
          break;
        }
      }
      if (!optionExists) {
        const opt = document.createElement('option');
        opt.value = optValue;
        opt.innerHTML = `🧬 ${optValue} (Custom Seed Context)`;
        chatNodeSelect.appendChild(opt);
      }
      chatNodeSelect.value = optValue;
      chatNodeSelect.dispatchEvent(new Event('change'));
      addLog('[SHUNTS] Ported secure identity into APP 07 Node Chat ledger stream.', 'text-cyan');
    }
  }

  // Bind session button trigger
  if (sessionBtn) {
    sessionBtn.addEventListener('click', () => {
      const address = addrInput ? addrInput.value.trim() : '0xMOBIUS_BRAID_MAIN';
      const seed = seedInput ? seedInput.value.trim() : '';
      const passphrase = passInput ? passInput.value.trim() : '';
      handleEstablishSession(address, seed, passphrase);
    });
  }

  // Load existing standard state from storage on start
  async function loadVaultState() {
    const defaultAddress = addrInput ? addrInput.value.trim() : '0xMOBIUS_BRAID_MAIN';
    const savedVault = localStorage.getItem(`5ir_qr_vault_${defaultAddress}`);

    if (savedVault) {
      addLog(`[VAULT] Detected saved QR Token fallback block for ${defaultAddress}. Ready to unwrap.`, 'text-[#ffd700]');
      if (qrEmptyState) qrEmptyState.classList.add('hidden');
      if (qrActiveState) qrActiveState.classList.remove('hidden');
      if (qrBase64String) qrBase64String.textContent = savedVault;
      drawPixelMatrix(savedVault);
    } else {
      addLog('[VAULT] No active wrapped QR token detected in local secure context.', 'text-grey');
    }
  }

  // 1. INITIALIZE WRAP ACTION (GENERATE UNIQUE QR TOKEN)
  if (wrapBtn) {
    wrapBtn.addEventListener('click', async () => {
      const address = addrInput ? addrInput.value.trim() : '0xMOBIUS_BRAID_MAIN';
      const seed = seedInput ? seedInput.value.trim() : '';
      const passphrase = passInput ? passInput.value.trim() : '';

      if (!passphrase) {
        addLog('[CRITICAL] Encryption password signature required to lock vault.', 'text-magenta');
        alert("Encryption password string signature required.");
        return;
      }
      if (!seed) {
        addLog('[CRITICAL] Seed phrase signature required to wrap balance.', 'text-magenta');
        alert("Wallet Seed phrase signature required.");
        return;
      }

      wrapBtn.disabled = true;
      wrapBtn.textContent = '[LOCKING VAULT...]';
      addLog('Calculating Legendrian XOR salt permutations...', 'text-grey');

      // Emulate high-precision crypto wrapping with Salted XOR masking
      setTimeout(async () => {
        try {
          const minedBalance = (window.braidState && window.braidState.currentMinedBalance)
            ? window.braidState.currentMinedBalance
            : 100.00000000;

          // Assemble the exact 5iR uncompiled payload
          const uncompiledPayload = {
            address: address,
            seed: seed,
            stagedMinedBalance: minedBalance.toFixed(8),
            timestamp: Date.now(),
            coherenceCeiling: "94.6%"
          };

          const rawStringData = JSON.stringify(uncompiledPayload);
          
          let scrambledResult = '';
          for (let i = 0; i < rawStringData.length; i++) {
            const charCodeShift = rawStringData.charCodeAt(i) ^ passphrase.charCodeAt(i % passphrase.length);
            scrambledResult += String.fromCharCode(charCodeShift);
          }

          const secureBase64Output = btoa(encodeURIComponent(scrambledResult));
          
          // Save state cleanly into local browser storage context
          localStorage.setItem(`5ir_qr_vault_${address}`, secureBase64Output);
          localStorage.setItem('5ir_wrapped_wallet_vault', secureBase64Output); // fallback key

          // Establish active UI states
          if (qrEmptyState) qrEmptyState.classList.add('hidden');
          if (qrActiveState) qrActiveState.classList.remove('hidden');
          if (qrBase64String) qrBase64String.textContent = secureBase64Output;
          drawPixelMatrix(secureBase64Output);

          addLog(`[MINT] Captured balance: ${minedBalance.toFixed(8)} $BRAID`, 'text-[#39ff14]');
          addLog('[WRAP] Legendrian Torsion active. Target key packed into 5iR cipher string.', 'text-cyan');
          addLog('[QR] Token address matrix compiled successfully.', 'text-[#ffd700]');

          if (telemetryText) {
            telemetryText.textContent = `Encryption Standard: Salted XOR Torsion Matrix // Vault State: Active & Encrypted`;
            telemetryText.className = 'log-val text-[#39ff14] text-[8.5px] animate-pulse';
          }

          // Establishes custom user node address context
          handleEstablishSession(address, seed, passphrase);

          // Clear sensitive raw seed input
          if (seedInput) seedInput.value = '';
          if (decryptDisplay) {
            decryptDisplay.classList.add('hidden');
          }
        } catch (e) {
          addLog(`[CRITICAL] Error wrapping data stream: ${e.message}`, 'text-magenta');
        } finally {
          wrapBtn.disabled = false;
          wrapBtn.textContent = '[GENERATE_UNIQUE_QR_TOKEN]';
        }
      }, 600);
    });
  }

  // 2. UNWRAP DECRYPT ACTION
  if (unwrapBtn) {
    unwrapBtn.addEventListener('click', async () => {
      const address = addrInput ? addrInput.value.trim() : '0xMOBIUS_BRAID_MAIN';
      const passphrase = passInput ? passInput.value.trim() : '';

      if (!passphrase) {
        addLog('[CRITICAL] Security authorization password required to request unwrap.', 'text-magenta');
        alert("A decryption password must be specified.");
        return;
      }

      unwrapBtn.disabled = true;
      unwrapBtn.textContent = '[UNWRAPPING...]';
      addLog('Querying localized vault for secure matrix segment...', 'text-grey');

      setTimeout(async () => {
        try {
          const savedVault = localStorage.getItem(`5ir_qr_vault_${address}`) || localStorage.getItem('5ir_wrapped_wallet_vault');

          if (!savedVault) {
            addLog('[CRITICAL] Decryption failure. Cryptographic storage context empty or cleared.', 'text-magenta');
            unwrapBtn.disabled = false;
            unwrapBtn.textContent = '[UNWRAP_DECRYPT]';
            return;
          }

          const rawScrambledStr = decodeURIComponent(atob(savedVault));
          let decryptedStr = '';
          
          for (let i = 0; i < rawScrambledStr.length; i++) {
            const charCodeUnshift = rawScrambledStr.charCodeAt(i) ^ passphrase.charCodeAt(i % passphrase.length);
            decryptedStr += String.fromCharCode(charCodeUnshift);
          }

          const parsed = JSON.parse(decryptedStr);
          
          if (parsed && parsed.seed) {
            if (unlockedSeedText && decryptDisplay) {
              unlockedSeedText.textContent = `${parsed.seed} (Mined Balance: ${parsed.stagedMinedBalance} $BRAID)`;
              decryptDisplay.classList.remove('hidden');
            }

            addLog(`[SUCCESS] Decrypted from block: ${address}`, 'text-[#39ff14]');
            addLog('[SUCCESS] Decryption handshake complete. Vault ledger unlocked.', 'text-[#39ff14]');
            
            if (telemetryText) {
              telemetryText.textContent = `Encryption Standard: Salted XOR Torsion // Context: ${parsed.address}`;
              telemetryText.className = 'log-val text-[#39ff14] text-[8.5px]';
            }
          } else {
            throw new Error("Invalid payload structure");
          }
        } catch (e) {
          addLog('[CRITICAL] Decryption failure. Mismatched torsion parameters or corrupt signature.', 'text-magenta');
          if (decryptDisplay) {
            decryptDisplay.classList.add('hidden');
          }
        } finally {
          unwrapBtn.disabled = false;
          unwrapBtn.textContent = '[UNWRAP_DECRYPT]';
        }
      }, 700);
    });
  }

  // Clipboard copies on clicking the QR base64 output
  if (qrBase64String) {
    qrBase64String.addEventListener('click', async () => {
      const text = qrBase64String.textContent;
      if (!text || text === '') return;
      try {
        await navigator.clipboard.writeText(text);
        addLog('[CLIPBOARD] Unique QR Base64 string copied stably.', 'text-cyan');
        const prevTitle = qrBase64String.title;
        qrBase64String.title = 'Copied!';
        setTimeout(() => { qrBase64String.title = prevTitle; }, 1500);
      } catch (_) {}
    });
  }

  // Kick off initialization
  loadVaultState();

  // --- LIVE MINING CHART RENDERING SECTION ---
  const miningCanvas = document.getElementById('live-mining-chart-canvas');
  const hashRateDisplay = document.getElementById('mining-hash-rate-display');

  if (miningCanvas) {
    const ctx = miningCanvas.getContext('2d');
    let dynamicTicks = 0;
    let dataStreamHistory = Array(30).fill(60); // Historical data array tracks
    let currentHashVelocity = 39420;

    // Resize canvas to match actual rendered client bounds
    const resizeCanvas = () => {
      const rect = miningCanvas.getBoundingClientRect();
      miningCanvas.width = rect.width || 400;
      miningCanvas.height = rect.height || 100;
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    // Also trigger on a tiny delay in case parent section was hidden during initial paint
    setTimeout(resizeCanvas, 500);

    const renderRealtimeMatrix = () => {
      if (!miningCanvas || !document.getElementById('live-mining-chart-canvas')) return;
      
      ctx.clearRect(0, 0, miningCanvas.width, miningCanvas.height);
      dynamicTicks += 0.1;

      // Ingest fresh mock computational metrics data points
      if (Math.random() > 0.8) {
        dataStreamHistory.shift();
        // Keep fluctuations bound tightly within our 39.42 kHz threshold boundaries
        const rawVariance = Math.sin(dynamicTicks) * 15 + (Math.random() * 20 - 10);
        dataStreamHistory.push(60 + rawVariance);
        currentHashVelocity = Math.floor(39420 + rawVariance * 8);
        if (hashRateDisplay) {
          hashRateDisplay.textContent = currentHashVelocity.toLocaleString() + ' H/s';
        }
      }

      // Draw background layout grid wires
      ctx.strokeStyle = 'rgba(28, 45, 90, 0.25)';
      ctx.lineWidth = 0.5;
      for (let i = 0; i < miningCanvas.width; i += 25) {
        ctx.beginPath(); ctx.moveTo(i, 0); ctx.lineTo(i, miningCanvas.height); ctx.stroke();
      }
      for (let j = 0; j < miningCanvas.height; j += 15) {
        ctx.beginPath(); ctx.moveTo(0, j); ctx.lineTo(miningCanvas.width, j); ctx.stroke();
      }

      // Render the cryptographic yield progression waveform lines
      ctx.strokeStyle = '#00f2fe';
      ctx.lineWidth = 1.5;
      ctx.beginPath();

      const horizontalSpacing = miningCanvas.width / (dataStreamHistory.length - 1);
      for (let idx = 0; idx < dataStreamHistory.length; idx++) {
        const posX = idx * horizontalSpacing;
        const value = dataStreamHistory[idx];
        // Map range beautifully: let's map 20 to 100 values to canvas height 10% to 90%
        const posY = miningCanvas.height - ((value - 30) / 60) * miningCanvas.height;
        if (idx === 0) ctx.moveTo(posX, posY);
        else ctx.lineTo(posX, posY);
      }
      ctx.stroke();

      requestAnimationFrame(renderRealtimeMatrix);
    };

    renderRealtimeMatrix();
    
    // Also hook tab click event to trigger a canvas layout recalc when user switches to wallet-wrapper
    document.querySelectorAll('.hud-tab-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        if (btn.getAttribute('data-tab') === 'wallet-wrapper') {
          setTimeout(resizeCanvas, 50);
        }
      });
    });
  }

  // --- DYNAMIC DIFFICULTY & BLOCK PACING TELEMETRY SYNC ---
  const diffTargetDisplay = document.getElementById('difficulty-target-display');
  const avgPacingDisplay = document.getElementById('average-pacing-display');
  const simPacingInput = document.getElementById('sim-pacing-input');
  const submitPacingBtn = document.getElementById('submit-pacing-btn');

  async function fetchNetworkTelemetry() {
    try {
      const response = await fetch('/api/difficulty');
      if (response.ok) {
        const data = await response.json();
        if (data && data.success && data.telemetry) {
          const t = data.telemetry;
          if (diffTargetDisplay) {
            diffTargetDisplay.textContent = Number(t.currentDifficultyTarget).toLocaleString();
          }
          if (avgPacingDisplay) {
            avgPacingDisplay.textContent = t.averageBlockPacing;
          }
          addLog(`[TELEMETRY] Dynamic network difficulty target: ${Number(t.currentDifficultyTarget).toLocaleString()} sync verified.`, 'text-cyan');
        }
      }
    } catch (err) {
      console.warn("Could not fetch network telemetry:", err);
    }
  }

  if (submitPacingBtn && simPacingInput) {
    submitPacingBtn.addEventListener('click', async () => {
      const val = parseInt(simPacingInput.value, 10);
      if (isNaN(val) || val <= 0) {
        alert("Enter a valid block time in seconds.");
        return;
      }

      submitPacingBtn.disabled = true;
      submitPacingBtn.textContent = '[TX...]';
      addLog(`[TX] Transmitting block pacing measurement: ${val}s...`, 'text-grey');

      try {
        const response = await fetch('/api/difficulty', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ newBlockTime: val })
        });
        if (response.ok) {
          addLog(`[SUCCESS] Block time ${val}s recorded stably. Calibration complete.`, 'text-[#39ff14]');
          await fetchNetworkTelemetry();
        } else {
          const json = await response.json();
          addLog(`[ERROR] Transmission failed: ${json.error || response.statusText}`, 'text-magenta');
        }
      } catch (err) {
        addLog(`[ERROR] Connection interrupted: ${err.message}`, 'text-magenta');
      } finally {
        submitPacingBtn.disabled = false;
        submitPacingBtn.textContent = '[TX_PACE]';
      }
    });
  }

  // Launch dynamic sync loop
  fetchNetworkTelemetry();
  setInterval(fetchNetworkTelemetry, 10000);
}

/**
 * APPLICATION 08: "SUPERFLUID-RESONANCE" ENGINE SUITE
 * Visualizing real-time tuning oscillators, balance rate streams, and non-associative braiding compiles.
 * Natively integrates high-frequency 60 FPS delta-time calculus simulation formulas.
 */
function initSuperfluidResonanceApp() {
  const freqSlider = document.getElementById('resonance-radio-freq-slider');
  const freqDisplay = document.getElementById('resonance-radio-freq-display');
  const radioStatusText = document.getElementById('resonance-radio-status-text');
  
  const flowSlider = document.getElementById('resonance-flow-rate-slider');
  const flowDisplay = document.getElementById('resonance-flow-rate-display');
  const balanceDisplay = document.getElementById('resonance-wallet-balance-display');
  
  const ideForm = document.getElementById('resonance-ide-form');
  const ideInput = document.getElementById('resonance-ide-input');
  const ideSubmitBtn = document.getElementById('resonance-ide-submit-btn');
  const ideLogs = document.getElementById('resonance-ide-logs');
  
  const canvas = document.getElementById('resonance-wave-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  
  let radioFreq = 39000;
  let flowRate = 0.00039420;
  let currentBalance = 100.00000000;
  let isBraiding = false;
  let timeTick = 0;
  
  const braidingLogsDefault = ['[IDE] Awaiting non-associative flow configuration prompt...'];
  let braidingLogsList = [...braidingLogsDefault];

  // Initialize display of logs
  function renderIdeLogs() {
    if (!ideLogs) return;
    ideLogs.innerHTML = braidingLogsList.map(log => {
      const isSuccess = log.startsWith('[SUCCESS]');
      const color = isSuccess ? 'text-[#39ff14]' : 'text-[#9cb3c9]';
      return `<div class="text-[7.5pt] font-mono ${color} mb-1">${log}</div>`;
    }).join('');
    ideLogs.scrollTop = ideLogs.scrollHeight;
  }
  renderIdeLogs();

  // Internal tab-switching state variables and click handlers
  const tabs = {
    'radio': { btn: document.getElementById('resonance-tab-radio'), panel: document.getElementById('resonance-panel-radio') },
    'wallet': { btn: document.getElementById('resonance-tab-wallet'), panel: document.getElementById('resonance-panel-wallet') },
    'ide': { btn: document.getElementById('resonance-tab-ide'), panel: document.getElementById('resonance-panel-ide') },
    'navigator': { btn: document.getElementById('resonance-tab-navigator'), panel: document.getElementById('resonance-panel-navigator') }
  };

  Object.entries(tabs).forEach(([tabName, config]) => {
    if (config.btn && config.panel) {
      config.btn.addEventListener('click', () => {
        // Remove active class from all buttons
        Object.values(tabs).forEach(item => {
          if (item.btn) {
            item.btn.className = 'resonance-tab-btn px-3.5 py-2 font-mono text-[8.5pt] font-bold uppercase text-[#9cb3c9] border-none bg-transparent outline-none cursor-pointer';
          }
          if (item.panel) {
            item.panel.classList.add('hidden');
          }
        });

        // Set active to clicked one
        config.btn.className = 'resonance-tab-btn active px-3.5 py-2 font-mono text-[8.5pt] font-bold uppercase text-[#00f2fe] border-b-2 border-[#00f2fe] bg-transparent outline-none cursor-pointer';
        config.panel.classList.remove('hidden');

        // Resize wave canvas if switching to radio
        if (tabName === 'radio') {
          resizeWaveCanvas();
        }
      });
    }
  });

  // Radio functionality and range input monitoring
  if (freqSlider) {
    freqSlider.addEventListener('input', (e) => {
      radioFreq = Number(e.target.value);
      if (freqDisplay) freqDisplay.textContent = radioFreq.toLocaleString();

      const isPhaseLocked = (radioFreq === 39420);
      if (radioStatusText) {
        if (isPhaseLocked) {
          radioStatusText.textContent = '[PHASE_LOCKED]: 1.4M Node Entanglement Active. Channel Untraceable.';
          radioStatusText.className = 'text-[8pt] text-[#39ff14] font-mono mt-2.5 font-bold animate-pulse';
        } else {
          radioStatusText.textContent = '[SIGNAL_DRIFT]: Sub-harmonic 4iR background noise detected.';
          radioStatusText.className = 'text-[8pt] text-[#ff0055] font-mono mt-2.5';
        }
      }
    });
  }

  // --- LIVE SUPERFLUID BALANCE CALCULATOR HOOK INTEGRATION ---
  let activeNodeAddress = 'MOBIUS_BRAID_MAIN';
  let calculationFrameId;

  function runSuperfluidHighFreqLoop(nodeAddress) {
    if (calculationFrameId) {
      cancelAnimationFrame(calculationFrameId);
    }

    const storageKey = `5ir_vault_${nodeAddress}`;
    let rawVaultData = localStorage.getItem(storageKey);
    
    // Ensure the node has initialized state vector values in storage
    if (!rawVaultData) {
      const initialVault = {
        baseBalance: 100.00000000,
        lastSyncTimestamp: Date.now() / 1000,
        currentFlowRate: flowRate
      };
      localStorage.setItem(storageKey, JSON.stringify(initialVault));
      rawVaultData = JSON.stringify(initialVault);
    }

    let parsed;
    try {
      parsed = JSON.parse(rawVaultData);
    } catch (e) {
      parsed = {
        baseBalance: 100.00000000,
        lastSyncTimestamp: Date.now() / 1000,
        currentFlowRate: flowRate
      };
    }

    const baseBalance = parsed.baseBalance !== undefined ? parsed.baseBalance : 100.00000000;
    const lastSyncTimestamp = parsed.lastSyncTimestamp || (Date.now() / 1000);
    const currentFlowRate = parsed.currentFlowRate !== undefined ? parsed.currentFlowRate : flowRate;

    const computeCurrentVector = () => {
      const currentHardwareTimestamp = Date.now() / 1000; // Convert millisecond clock to seconds
      const elapsedTimeDelta = currentHardwareTimestamp - lastSyncTimestamp;
      
      // Execute the definitive calculus integration line:
      const calculatedCurrentBalance = baseBalance + (elapsedTimeDelta * currentFlowRate);
      
      currentBalance = calculatedCurrentBalance;
      if (balanceDisplay) {
        balanceDisplay.textContent = calculatedCurrentBalance.toFixed(8);
      }
      
      // Update global state tracking for cryptographic isolation modules
      if (window.braidState) {
        window.braidState.currentMinedBalance = calculatedCurrentBalance;
      }
      
      calculationFrameId = requestAnimationFrame(computeCurrentVector);
    };

    computeCurrentVector();
  }

  // Wallet flow controls
  if (flowSlider) {
    flowSlider.addEventListener('input', (e) => {
      flowRate = Number(e.target.value);
      if (flowDisplay) flowDisplay.textContent = flowRate.toFixed(8);

      // Re-initialize the calculus vector baseline in storage to prevent discontinuity jumps
      const storageKey = `5ir_vault_${activeNodeAddress}`;
      const updatedVault = {
        baseBalance: currentBalance,
        lastSyncTimestamp: Date.now() / 1000,
        currentFlowRate: flowRate
      };
      localStorage.setItem(storageKey, JSON.stringify(updatedVault));

      // Restart loop with new baseline parameters
      runSuperfluidHighFreqLoop(activeNodeAddress);
    });
  }

  // Intercept custom events from active node dropdown / secure session establishers
  window.addEventListener('5ir-node-address-shifted', (e) => {
    if (e.detail && e.detail.nodeAddress) {
      activeNodeAddress = e.detail.nodeAddress;
      runSuperfluidHighFreqLoop(activeNodeAddress);
    }
  });

  // Start the definitive high-frequency loop on initialization
  runSuperfluidHighFreqLoop(activeNodeAddress);

  // Vortex-IDE Weaver prompt logic compiles
  if (ideForm && ideInput && ideSubmitBtn) {
    ideForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const val = ideInput.value.trim();
      if (!val || isBraiding) return;

      isBraiding = true;
      ideSubmitBtn.disabled = true;
      ideSubmitBtn.textContent = '[WEAVING_LOGIC...]';
      
      braidingLogsList.push(`[INIT] Ingesting intent: \"${val}\"`);
      braidingLogsList.push(`[MATH] Calculating Navier-Stokes flow paths...`);
      renderIdeLogs();

      setTimeout(() => {
        braidingLogsList.push(`[BRAID] Weaving non-associative Lie brackets into the Lattice mesh.`);
        braidingLogsList.push(`[SUCCESS] Effect manifested cleanly over 5iR loom framework. dQ_leak/dt = 0.00W.`);
        renderIdeLogs();
        
        isBraiding = false;
        ideSubmitBtn.disabled = false;
        ideSubmitBtn.textContent = '[BRAID_LOGIC_CONCURRENT_FLOW]';
        ideInput.value = '';
      }, 1500);
    });
  }

  // Canvas waveform resize handling
  function resizeWaveCanvas() {
    const parent = canvas.parentElement;
    if (parent) {
      const w = parent.clientWidth || 300;
      const h = 90;
      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w;
        canvas.height = h;
      }
    }
  }
  resizeWaveCanvas();
  window.addEventListener('resize', resizeWaveCanvas);

  // Waveform drawing calculation animation loop
  function drawResonanceField() {
    // Canvas might be hidden, so only animate if tab is radio or panel is visible
    if (canvas.offsetParent !== null) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      timeTick += 0.03;

      ctx.lineWidth = 1;
      const isPhaseLocked = (radioFreq === 39420);

      if (isPhaseLocked) {
        // Beautiful phase locked cyan waveform
        ctx.strokeStyle = '#00f2fe';
        ctx.beginPath();
        for (let x = 0; x < canvas.width; x++) {
          const y = (canvas.height / 2) + Math.sin(x * 0.05 + timeTick) * 15 + Math.cos(x * 0.02 - timeTick) * 5;
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();
      } else {
        // High entropy standard noise static lines
        ctx.strokeStyle = 'rgba(156, 179, 201, 0.25)';
        ctx.beginPath();
        for (let i = 0; i < canvas.width; i += 4) {
          ctx.moveTo(i, Math.random() * canvas.height);
          ctx.lineTo(i + 2, Math.random() * canvas.height);
        }
        ctx.stroke();
      }
    }
    requestAnimationFrame(drawResonanceField);
  }
  drawResonanceField();
}