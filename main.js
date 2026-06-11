(function() {
/**
 * 5iR Core Matrix Command Dashboard - Unified Braid Core
 * Synchronized Clock: 39,420 Hz // Global Coherence: 94.6% Locked
 * Consolidated single-file engine running all master applications.
 * Zero flat layouts, zero boring tables, zero 404 relative loading issues.
 */

var safeStorage = window.safeStorage || window.localStorage;

// Sovereign Braid Framework mappings
window.braidAI = window['mini' + 'apps' + 'AI'];
window.braidI18n = window['mini' + 'app' + 'I18n'];

// Global tracking of the last active dark-theme dashboard page
let lastActiveTab = 'sovereign-grid';

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
  "gateway.btn_sovereign": "[VERIFY_SOVEREIGN_CREDENTIALS]",
  "gateway.btn_demo": "⚡ [ENGAGE_PUBLIC_DEMO_NODE] (ONE-CLICK ACCESS)",
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
  "profile.footer": "dQ_leak = 0.00W // COHERENCE 94.6% STABLE",
  
  // Missing App 10 Compliance fallback translations
  "app10.title": "APP 10: \"LEGAL-COMPLIANCE\" CORPORATE SHELL STAGING",
  "app10.jurisdiction_lbl": "SELECT CORPORATE LANDING JURISDICTION",
  "app10.kyc_lbl": "ENGAGE PASSIVE KYC NODE ID HANDSHAKES",
  "app10.staging_btn": "[STAG_CORPORATE_FILING]",

  // Missing App 15 Spatial Scanner fallback translations
  "app15.title": "[APP_15] SPATIAL SCANNER IMAGE VECTOR CORES",
  "app15.btn_earth": "EARTH",
  "app15.btn_space": "SPACE",
  "app15.scan_coherence": "SCAN COHERENCE",
  "app15.friction_ratio": "FRICTION RATIO",
  "app15.grid_status": "GRID STATUS",
  "app15.btn_execute": "[EXECUTE_TOPOLOGICAL_SCAN]",
  "app15.btn_processing": "[PROCESSING_GEOMETRY...]",
  "app15.log_calibrated": "[ONLINE] Scanner matrix calibrated to 39,420 Hz.",
  "app15.log_earth_mode": "[MODE_SHIFT]: Earth tactical tracking configured.",
  "app15.log_space_mode": "[MODE_SHIFT]: Deep-space radiometric mesh configured.",
  "app15.log_scanning": ">> INITIALIZING TOPOLOGICAL RE-SHAPE SWEEP...",
  "app15.log_earth_success": ">> SUCCESS: High-prestige Earth profile vectors synchronized.",
  "app15.log_space_success": ">> SUCCESS: Orbital coordinate matrix locked down.",
  "app15.earth_friction": "0.00 Ohms [Architect Profile Locked]",
  "app15.space_friction": "0.00 Watts [Thermal Leak Flat]",
  "app15.earth_env": "DIOR / LOOK_04 FABRIC MESH VALIDATED",
  "app15.space_env": "NEW CYDONIA RADIOMETRIC PROFILE ACTIVE",

  // Missing App 16 Work Grid fallback translations
  "app16.title": "[APP_16] LEGENDRIAN ALGORITHM WORK GRID",
  "app16.tab_btn": "💻 16: WORK GRID",
  "app16.ledger_balance": "LEDGER BALANCE",
  "app16.contracts_header": "[AVAILABLE_COMPUTATIONAL_CONTRACTS]",
  "app16.workspace_offline": "[WORKSPACE TERMINAL OFFLINE]",
  "app16.workspace_offline_desc": "Select an active infrastructure contract from the directory to initialize the Legendrian Algorithm Workspace.",
  "app16.transmit_btn": "[TRANSMIT_TO_VORTEX_AI_CHECK]",
  "app16.analyzing_btn": "[VORTEX_AI_ANALYZING_CORE_MATRICES...]",

  // Missing App 17 Aero Flux fallback translations
  "app17.title": "[APP_17] AERO-FLUX CONFIGURATION SPACE NAVIGATOR",
  "app17.tab_btn": "🛸 17: AERO-FLUX",
  "app17.direct_link": "DIRECT INTERFACE LINK // BYPASSING BROWSER RE-RENDER DELAYS",
  "app17.latency": "LATENCY",
  "app17.thermal": "dQ_leak/dt = 0.00W FLAT",
  "app17.buffer_state": "BUFFER STATE",
  "app17.sampling_rate": "SAMPLING RATE",
  "app17.projection_mode": "PROJECTION MODE",
  "app17.system_msg": "[SYSTEM]: Pointer matrices are locked. Data streams bypass traditional DOM nodes to eliminate memory drag completely.",

  // Missing App 18 Bio-Resonance fallback translations
  "app18.title": "[APP_18] BIO-RESONANCE HARDWARE BRIDGE",
  "app18.tab_btn": "🧬 18: BIO-BRIDGE",
  "app18.btn_ble_sync": "[ENGAGE_BLE_BIO_SYNC]",
  "app18.btn_ble_sync_active": "[BLE_BIO_SYNC_ACTIVE]",
  "app18.btn_ble_fallback": "[EMULATING_BIO_RESONANCE]",
  "app18.status": "HARDWARE STATUS",
  "app18.gaze_lbl": "EYE-GAZE DEFLECTION VECTOR",
  "app18.hrv_lbl": "HEART-RATE VARIABILITY INTEGRATOR",
  "app18.hr_lbl": "PHYSIOLOGICAL PULSE RATE",
  "app18.system_msg": "[SYSTEM]: WebHID and WebBluetooth telemetry active. Micro-deflections adjust our sub-harmonic carriers natively."
};

function getPredefinedTranslation(key) {
  return LOCAL_TRANSLATIONS[key] || key;
}

function bootstrapApp() {
  console.log(">> 5iR MASTER APPLICATION COMPILATION ENGAGED @ 39,420 Hz");
  console.log(">> ZERO-ENTROPY THERMAL STATE BOUNDS OK (dQ_leak/dt = 0.00W)");

  // Translate DOM based on active i18n
  translateDOM();

  // Initialize background brightness state
  try {
    initBgBrightnessController();
  } catch (err) {
    console.error("Brightness controller init fault:", err);
  }

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
    initMobileMenu();
    // Sync the master grid on startup
    syncSovereignGridLayout(lastActiveTab);
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

  try {
    initLegalComplianceApp();
  } catch (err) {
    console.error("App 10 (Legal-Compliance) fault:", err);
  }

  try {
    initAssetInventoryApp();
  } catch (err) {
    console.error("App 12 (Asset-Inventory) fault:", err);
  }

  try {
    initPhaseSyncChatApp();
  } catch (err) {
    console.error("App 13 (Phase-Sync-Chat) fault:", err);
  }

  try {
    initAdvancedFluxApp();
  } catch (err) {
    console.error("Advanced Flux core init fault:", err);
  }
  try {
    initSpatialScannerApp();
  } catch (err) {
    console.error("App 15 (Spatial-Scanner) fault:", err);
  }
  try {
    initGlowSovereignDashboard();
  } catch (err) {
    console.error("Glow Sovereign Dashboard fault:", err);
  }
  try {
    initLegendrianGridApp();
  } catch (err) {
    console.error("App 16 (Legendrian-Grid) fault:", err);
  }
  try {
    initSovereignCoreServices();
  } catch (err) {
    console.error("Sovereign Core Services (Alpha/Gamma) fault:", err);
  }
  try {
    initAeroFluxNavigator();
  } catch (err) {
    console.error("App 17 (Aero-Flux) fault:", err);
  }
  try {
    initBioResonanceApp();
  } catch (err) {
    console.error("App 18 (Bio-Resonance) fault:", err);
  }
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', bootstrapApp);
} else {
  bootstrapApp();
}

/**
 * Robust i18n DOM translation layer
 */
function translateDOM() {
  const i18n = window.braidI18n;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    let translated = '';
    if (i18n && typeof i18n.t === 'function') {
      translated = i18n.t(key);
    }
    // If translation system is not ready or returns the key itself, try local fallback
    if (!translated || translated === key) {
      translated = getPredefinedTranslation(key);
    }
    if (translated) {
      el.textContent = translated;
    }
  });
}

/**
 * Dynamically synchronize Sovereign Grid Shell Layout - row/column allocations
 */
function syncSovereignGridLayout(activeTab) {
  const mainGrid = document.getElementById('hud-main-grid');
  if (!mainGrid) return;
  if (activeTab === 'sovereign-grid') {
    mainGrid.classList.add('sovereign-grid-active');
  } else {
    mainGrid.classList.remove('sovereign-grid-active');
  }
}
window.syncSovereignGridLayout = syncSovereignGridLayout;

/**
 * Global Tab Switching Logic - Bulletproof Routing Matrix
 */
function switchTab(activeTab) {
  console.log(">> [SWITCH_TAB] Navigating to active panel:", activeTab);
  const tabNav = document.querySelector('.hud-tab-navigation');
  const mainGrid = document.getElementById('hud-main-grid');

  if (!tabNav || !mainGrid) {
    console.error(">> [SWITCH_TAB] Missing layout roots!");
    return;
  }

  // Safety clearance check: Only allow Master Architect to access sovereign-only menus
  var savedProfileRaw = safeStorage.getItem('5ir_authenticated_profile');
  var isMasterUser = false;
  if (savedProfileRaw) {
    try {
      var p = JSON.parse(savedProfileRaw);
      isMasterUser = (p.role === 'SOVEREIGN_CLASS_1' && p.nodeId === 'MOBIUS_BRAID_MAIN');
    } catch (err) {}
  }

  if (!isMasterUser && (activeTab === 'sovereign-suite' || activeTab === 'sovereign-grid' || activeTab === 'vortex-ai' || activeTab === 'advanced-flux-core')) {
    alert("CRITICAL WARNING: LEVEL-1 MOBIUS SECURITY CLEARANCE REQUIRED FOR THIS APPARATUS.");
    return;
  }

  if (activeTab === 'vortex-ai' && isMasterUser) {
    // Transition directly to the gorgeous Page 3 Clear Deck view!
    const launchBtn = document.getElementById('launch-clear-page-btn');
    if (launchBtn) {
      launchBtn.click();
    }
    return;
  }

  // Record the last active dark-theme dashboard page
  lastActiveTab = activeTab;

  // Update mobile active tab title indicator
  const mobileTitle = document.getElementById('mobile-active-tab-title');
  if (mobileTitle) {
    const activeBtn = tabNav.querySelector('[data-tab="' + activeTab + '"]');
    if (activeBtn) {
      mobileTitle.textContent = activeBtn.textContent;
    }
  }

  // Auto close mobile drawer menu on tab selection
  const sidebar = document.querySelector('aside');
  const backdrop = document.getElementById('mobile-menu-backdrop');
  if (sidebar && sidebar.classList.contains('menu-open')) {
    sidebar.classList.remove('menu-open');
    if (backdrop) {
      backdrop.style.opacity = '0';
      setTimeout(() => backdrop.classList.add('hidden'), 300);
    }
  }

  // Toggle active class on all sidebar buttons
  const tabButtons = tabNav.querySelectorAll('.hud-tab-btn');
  tabButtons.forEach(b => {
    if (b.getAttribute('data-tab') === activeTab) {
      b.classList.add('active');
    } else {
      b.classList.remove('active');
    }
  });

  // Force layout re-alignment rules
  if (typeof window.syncSovereignGridLayout === 'function') {
    window.syncSovereignGridLayout(activeTab);
  }

  // Show only expected panel and strictly hide all others
  const panels = mainGrid.querySelectorAll('section');
  panels.forEach(panel => {
    const panelId = panel.id;
    const expectedId = 'app-' + activeTab;
    
    if (panelId === expectedId) {
      panel.classList.remove('hidden');
    } else {
      panel.classList.add('hidden');
    }
  });

  // Dispatch global window resize event to force canvas redraws
  setTimeout(() => {
    window.dispatchEvent(new Event('resize'));
  }, 150);
}
window.switchTab = switchTab;

/**
 * Tab Navigation Controller - Swaps between dedicated fullscreen application pages
 */
function initTabNavigation() {
  const tabNav = document.querySelector('.hud-tab-navigation');
  if (!tabNav) return;

  // Prevent multiple bindings by adding a flag
  if (tabNav.getAttribute('data-navigation-bound') === 'true') {
    return;
  }
  tabNav.setAttribute('data-navigation-bound', 'true');

  tabNav.addEventListener('click', (e) => {
    const btn = e.target.closest('.hud-tab-btn');
    if (!btn) return;
    e.preventDefault();
    const activeTab = btn.getAttribute('data-tab');
    switchTab(activeTab);
  });
}
window.initTabNavigation = initTabNavigation;

/**
 * Collapsible Drawer menu triggers for Mobile Phone Layouts
 */
function initMobileMenu() {
  const toggleBtn = document.getElementById('mobile-menu-toggle-btn');
  const sidebar = document.querySelector('aside');
  const backdrop = document.getElementById('mobile-menu-backdrop');

  if (!toggleBtn || !sidebar || !backdrop) return;

  const openMenu = () => {
    sidebar.classList.add('menu-open');
    backdrop.classList.remove('hidden');
    backdrop.getBoundingClientRect(); // force layout engine reflow
    backdrop.style.opacity = '1';
  };

  const closeMenu = () => {
    sidebar.classList.remove('menu-open');
    backdrop.style.opacity = '0';
    setTimeout(() => {
      backdrop.classList.add('hidden');
    }, 300);
  };

  toggleBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    if (sidebar.classList.contains('menu-open')) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  backdrop.addEventListener('click', closeMenu);
}
window.initMobileMenu = initMobileMenu;

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
        const isLightMode = document.body.classList.contains('bg-light');
        if (isLightMode) {
          ctx.strokeStyle = `rgba(180, 83, 9, ${0.4 + (1 - decayFactor) * 0.4})`;
        } else {
          ctx.strokeStyle = `rgba(255, 215, 0, ${0.4 + (1 - decayFactor) * 0.4})`;
        }
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
        const isLightMode = document.body.classList.contains('bg-light');
        ctx.fillStyle = isLightMode ? '#b45309' : '#ffd700';
        ctx.shadowColor = isLightMode ? '#b45309' : '#ffd700';
        ctx.shadowBlur = isLightMode ? 0 : 6;
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
    const isLightMode = document.body.classList.contains('bg-light');
    ctx.strokeStyle = isUnderAttack ? 'rgba(244, 63, 94, 0.35)' : hoverProximity ? (isLightMode ? 'rgba(180, 83, 9, 0.45)' : 'rgba(255, 215, 0, 0.25)') : 'rgba(217, 119, 6, 0.15)';
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
      fillGrad.addColorStop(0, isLightMode ? '#f8fafc' : '#241a04');
      fillGrad.addColorStop(0.5, isLightMode ? '#e2e8f0' : '#120e03');
      fillGrad.addColorStop(1, isLightMode ? '#cbd5e1' : '#000000');
      ctx.fillStyle = fillGrad;
      ctx.strokeStyle = hoverProximity ? (isLightMode ? '#b45309' : '#ffd700') : '#d97706';
      ctx.lineWidth = 2;
      ctx.shadowColor = hoverProximity ? (isLightMode ? '#b45309' : '#ffd700') : '#d97706';
      ctx.shadowBlur = isLightMode ? 0 : (hoverProximity ? 20 : 8);
    }
    
    ctx.fill();
    ctx.stroke();
    ctx.shadowBlur = 0;

    // Subsurface magnetic vector flow dots inside fluid droplet
    ctx.fillStyle = isUnderAttack ? 'rgba(244, 63, 94, 0.4)' : hoverProximity ? (isLightMode ? 'rgba(180, 83, 9, 0.6)' : 'rgba(255, 215, 0, 0.4)') : 'rgba(217, 119, 6, 0.3)';
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
    vineyard: 112,
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

      const isLightMode = document.body.classList.contains('bg-light');
      ctx.strokeStyle = isLightMode ? '#0284c7' : '#ffd700';
      ctx.lineWidth = 2.5;
      ctx.shadowColor = isLightMode ? '#0284c7' : '#ffd700';
      ctx.shadowBlur = isLightMode ? 0 : 10;
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
    const isLightMode = document.body.classList.contains('bg-light');
    ctx.strokeStyle = valveOpen ? '#ff5252' : (isLightMode ? '#b45309' : '#ffd700');
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
    // Dynamic injector for advanced sovereign configuration parameters
    const sessionProfileRaw = safeStorage.getItem('5ir_authenticated_profile');
    if (sessionProfileRaw) {
      try {
        const p = JSON.parse(sessionProfileRaw);
        if (p.nodeId === 'MOBIUS_BRAID_MAIN' && window.MASTER_PROFILE_CONFIG) {
          const detailsGrid = document.querySelector('.profile-details-grid');
          if (detailsGrid && !document.getElementById('sovereign-advanced-details')) {
            const advancedDiv = document.createElement('div');
            advancedDiv.id = 'sovereign-advanced-details';
            advancedDiv.className = 'mt-3 border-t border-amber-500/20 pt-2.5 flex flex-col gap-2';
            advancedDiv.innerHTML = `
              <div class="text-[8px] text-[#ffd700] font-bold tracking-wider uppercase mb-1">👑 SOVEREIGN ASSETS & LIKENESS</div>
              <div class="profile-detail-row flex justify-between items-center text-[10px]">
                <span class="detail-label text-[#8a7751]">TRUE NAME:</span>
                <span class="detail-value text-white">${window.MASTER_PROFILE_CONFIG.givenNames} ${window.MASTER_PROFILE_CONFIG.surname}</span>
              </div>
              <div class="profile-detail-row flex justify-between items-center text-[10px]">
                <span class="detail-label text-[#8a7751]">LIKENESS SPEC:</span>
                <span class="detail-value text-[#00f2fe]">${window.MASTER_PROFILE_CONFIG.likenessSpecs.apparel}</span>
              </div>
              <div class="profile-detail-row flex justify-between items-center text-[10px]">
                <span class="detail-label text-[#8a7751]">GROUND VEHICLE:</span>
                <span class="detail-value text-[#ffd700] text-[9.5px] truncate" title="${window.MASTER_PROFILE_CONFIG.portfolioAssets.groundTransport.manifold}">${window.MASTER_PROFILE_CONFIG.portfolioAssets.groundTransport.model}</span>
              </div>
              <div class="profile-detail-row flex justify-between items-center text-[10px]">
                <span class="detail-label text-[#8a7751]">SPACE WEAVE:</span>
                <span class="detail-value text-[#39ff14] text-[9.5px] truncate" title="${window.MASTER_PROFILE_CONFIG.portfolioAssets.apparelSuits.weave}">${window.MASTER_PROFILE_CONFIG.portfolioAssets.apparelSuits.model}</span>
              </div>
              <div class="profile-detail-row flex justify-between items-center text-[10px]">
                <span class="detail-label text-[#8a7751]">COHERENCE SYNC:</span>
                <span class="detail-value text-[#00f2fe]">${window.MASTER_PROFILE_CONFIG.globalCoherenceBase} @ ${window.MASTER_PROFILE_CONFIG.systemFrequencyClock}</span>
              </div>
            `;
            detailsGrid.appendChild(advancedDiv);
          }
        }
      } catch (e) {
        console.error("Sovereign profile parameters load failure:", e);
      }
    }
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

    // Vortex-AI Rate Limiter & Countdown (React state equivalents)
    let vortexRequestCount = 0;
    let vortexIsLockedOut = false;
    let vortexCountdownTimer = 60;
    let vortexCountdownInterval = null;

    const rateLimitStatus = document.getElementById('vortex-rate-limit-status');
    const clearRateLimitStatus = document.getElementById('clear-vortex-rate-limit-status');
    const lockoutFormContainer = document.getElementById('vortex-lockout-form-container');
    const clearLockoutFormContainer = document.getElementById('clear-vortex-lockout-form-container');
    const adminKeyForm = document.getElementById('vortex-decrypt-key-form');
    const clearAdminKeyForm = document.getElementById('clear-vortex-decrypt-key-form');
    const adminKeyInput = document.getElementById('vortex-admin-key-input');
    const clearAdminKeyInput = document.getElementById('clear-vortex-admin-key-input');

    function updateRateLimitUI() {
      var savedProfileRaw = safeStorage.getItem('5ir_authenticated_profile');
      var isMasterUser = false;
      if (savedProfileRaw) {
        try {
          var p = JSON.parse(savedProfileRaw);
          isMasterUser = (p.role === 'SOVEREIGN_CLASS_1' || p.nodeId === 'MOBIUS_BRAID_MAIN');
        } catch (err) {}
      } else {
        if (window.braidState && window.braidState.activeNodeAddress === 'MOBIUS_BRAID_MAIN') {
          isMasterUser = true;
        }
      }

      const statusText = isMasterUser
        ? "[MOBIUS_BYPASS // UNLIMITED_STREAM]"
        : (vortexIsLockedOut 
          ? `[LOCKED_OUT // COOLDOWN: ${vortexCountdownTimer}s]` 
          : `[OPEN_SOURCE_STREAM: ${3 - vortexRequestCount}/3 FREE]`);

      if (rateLimitStatus) {
        rateLimitStatus.textContent = statusText;
        rateLimitStatus.className = vortexIsLockedOut ? "text-[8.5px] text-red-500 font-extrabold animate-pulse ml-2" : "text-[8.5px] text-[#39ff14] font-bold ml-2";
      }
      if (clearRateLimitStatus) {
        clearRateLimitStatus.textContent = statusText;
        clearRateLimitStatus.className = vortexIsLockedOut ? "text-[8.5px] text-red-600 font-extrabold animate-pulse ml-2" : "text-[8.5px] text-green-600 font-bold ml-2";
      }

      if (vortexIsLockedOut) {
        if (lockoutFormContainer) lockoutFormContainer.classList.remove('hidden');
        if (clearLockoutFormContainer) clearLockoutFormContainer.classList.remove('hidden');
        
        if (submitBtn) {
          submitBtn.disabled = true;
          submitBtn.textContent = 'LOCKED';
          submitBtn.className = "oracle-submit-btn bg-gray-700 text-gray-500 cursor-not-allowed px-4 py-1 rounded text-[10px] tracking-widest";
        }
        if (clearSubmitBtn) {
          clearSubmitBtn.disabled = true;
          clearSubmitBtn.textContent = 'LOCKED';
          clearSubmitBtn.className = "clear-oracle-submit-btn bg-gray-300 text-gray-400 cursor-not-allowed px-4 py-1.5 rounded text-[10px]";
        }
        if (chatInput) chatInput.disabled = true;
        if (clearChatInput) clearChatInput.disabled = true;
      } else {
        if (lockoutFormContainer) lockoutFormContainer.classList.add('hidden');
        if (clearLockoutFormContainer) clearLockoutFormContainer.classList.add('hidden');

        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.textContent = 'EXECUTE_RUN';
          submitBtn.className = "oracle-submit-btn bg-cyan-500 hover:bg-[#ffd700] hover:text-black text-black font-extrabold px-4 py-1 rounded transition-all text-[10px] tracking-widest shadow-[0_0_10px_rgba(0,242,254,0.3)]";
        }
        if (clearSubmitBtn) {
          clearSubmitBtn.disabled = false;
          clearSubmitBtn.textContent = 'EXECUTE_RUN';
          clearSubmitBtn.className = "clear-oracle-submit-btn bg-[#d97706] hover:bg-[#ffd700] hover:text-black text-white font-extrabold px-4 py-1.5 rounded shadow-md transition-all text-[10px]";
        }
        if (chatInput) chatInput.disabled = false;
        if (clearChatInput) clearChatInput.disabled = false;
      }
    }

    function startLockoutTimer() {
      if (vortexCountdownInterval) clearInterval(vortexCountdownInterval);
      vortexCountdownTimer = 60;
      updateRateLimitUI();

      vortexCountdownInterval = setInterval(() => {
        vortexCountdownTimer--;
        if (vortexCountdownTimer <= 0) {
          clearInterval(vortexCountdownInterval);
          vortexIsLockedOut = false;
          vortexRequestCount = 0;
          vortexCountdownTimer = 60;
          appendLog('system', ">> [SYSTEM] Lockout cooldown complete. Workspace fully un-throttled.");
          updateRateLimitUI();
        } else {
          updateRateLimitUI();
        }
      }, 1000);
    }

    function handleVerifyDecryptedKey(enteredKey) {
      if (enteredKey === 'MASTER_VORTEX_KEY_39420') {
        if (vortexCountdownInterval) clearInterval(vortexCountdownInterval);
        vortexIsLockedOut = false;
        vortexRequestCount = 0;
        vortexCountdownTimer = 60;
        
        appendLog('system', ">> [BYPASS] Valid administrative encryption key decrypted. Workspace fully un-throttled.");
        updateRateLimitUI();
        
        if (adminKeyInput) adminKeyInput.value = '';
        if (clearAdminKeyInput) clearAdminKeyInput.value = '';
      } else {
        alert("Invalid 5iR license key string format.");
      }
    }

    if (adminKeyForm) {
      adminKeyForm.addEventListener('submit', (e) => {
        e.preventDefault();
        if (adminKeyInput) {
          handleVerifyDecryptedKey(adminKeyInput.value.trim());
        }
      });
    }
    if (clearAdminKeyForm) {
      clearAdminKeyForm.addEventListener('submit', (e) => {
        e.preventDefault();
        if (clearAdminKeyInput) {
          handleVerifyDecryptedKey(clearAdminKeyInput.value.trim());
        }
      });
    }

    const requestKeyBtn = document.getElementById('vortex-request-key-btn');
    const clearRequestKeyBtn = document.getElementById('clear-vortex-request-key-btn');

    const triggerSovereignKeyRequest = () => {
      playVortexSound('receive');
      appendLog('system', ">> [TELEMETRY_ALERT] Direct license request handshake generated at 39,420 Hz.");
      appendLog('system', ">> Mapping transmission pathways to Cydonia Strategic Command telemetry desk...");
      appendLog('system', ">> Sovereign secure dispatch dispatched stably to: travgreta@proton.me // status: PING_SENT");
      appendLog('system', ">> [INSTRUCTIONS] Contact Sovereign Lead (Mobius.braid) directly or access X protocol topologyflux on the top-right pinned ID card badge.");
      alert("License request logged over sovereign telemetry (despatched to travgreta@proton.me). Use the pinned profile menu at the top-right of the dashboard to view direct Sovereign Contact handles.");
    };

    if (requestKeyBtn) {
      requestKeyBtn.addEventListener('click', (e) => {
        e.preventDefault();
        triggerSovereignKeyRequest();
      });
    }
    if (clearRequestKeyBtn) {
      clearRequestKeyBtn.addEventListener('click', (e) => {
        e.preventDefault();
        triggerSovereignKeyRequest();
      });
    }

    // Bootstrap initial rate limit status values
    updateRateLimitUI();

    // State buffer isolated memory
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
- Creator: Sovereign Architect Mobius.braid (travgreta@proton.me, X: @topologyflux).
You are extremely cynical of standard flat web boilerplate layouts, corporate web2, and standard charts.
Always end your messages with standard sovereign signs: "Lol am dead 🥶👊👽" or "Mars is home 🪐👊⚔️".
IMPORTANT: Keep answers short (1-3 sentences maximum) to prevent vertical overflow in the terminal panel.`
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

    // Play light sweep/beep on response arrival
    function playVortexSound(sound) {
      try {
        const AudioContextClass = window.AudioContext || window.webkitAudioContext;
        if (!AudioContextClass) return;
        const ctx = new AudioContextClass();
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.connect(gain);
        gain.connect(ctx.destination);
        if (sound === 'send') {
          osc.type = 'triangle';
          osc.frequency.setValueAtTime(500, ctx.currentTime);
          osc.frequency.exponentialRampToValueAtTime(1200, ctx.currentTime + 0.15);
          gain.gain.setValueAtTime(0.04, ctx.currentTime);
          gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.15);
          osc.start();
          osc.stop(ctx.currentTime + 0.15);
        } else if (sound === 'receive') {
          osc.type = 'sine';
          osc.frequency.setValueAtTime(880, ctx.currentTime);
          osc.frequency.setValueAtTime(1100, ctx.currentTime + 0.08);
          gain.gain.setValueAtTime(0.03, ctx.currentTime);
          gain.gain.setValueAtTime(0.02, ctx.currentTime + 0.08);
          gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.2);
          osc.start();
          osc.stop(ctx.currentTime + 0.2);
        }
      } catch (e) {}
    }

    // Unified append log outputs to BOTH dark and clear terminal panels
    function appendLog(type, text) {
      const makeContent = (msgText) => {
        const wrap = document.createElement('div');
        wrap.className = 'flex gap-2.5 items-start py-0.5';
        
        const avatar = document.createElement('span');
        avatar.className = 'font-mono text-[9px] px-1.5 py-0.5 rounded bg-black/40 border border-indigo-950 flex-shrink-0';
        if (type === 'user') {
          avatar.innerHTML = '👑';
          avatar.style.borderColor = '#ffd700';
        } else if (type === 'droid') {
          avatar.innerHTML = '🤖';
          avatar.style.borderColor = '#ff5252';
        } else {
          avatar.innerHTML = '⚙️';
          avatar.style.borderColor = 'rgba(88, 80, 236, 0.3)';
        }
        
        const body = document.createElement('div');
        body.className = 'flex-grow break-all';
        body.textContent = msgText;

        const speakBtn = document.createElement('button');
        speakBtn.className = 'ml-1.5 text-[8.5px] opacity-30 hover:opacity-100 transition-opacity chat-tts-btn';
        speakBtn.innerHTML = '🔊';
        speakBtn.title = 'Speak output';
        speakBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          speakBtn.style.color = '#39ff14';
          speakBtn.innerHTML = '⚡';
          let speakTxt = msgText.replace(/>|MOBIUS\.BRAID@5iR:~\$|KING_DROID_M4:/g, '').trim();
          if (window.braidAI && window.braidAI.tts && typeof window.braidAI.tts.speak === 'function') {
            window.braidAI.tts.speak({
              text: speakTxt,
              voiceId: 'cartesia:51f57e64-4afd-41eb-b175-5a948df70bce' // Dennis Deep authoritative Narrator
            }).then(() => {
              speakBtn.style.color = '';
              speakBtn.innerHTML = '🔊';
            }).catch(() => {
              const utterance = new SpeechSynthesisUtterance(speakTxt);
              utterance.onend = () => {
                speakBtn.style.color = '';
                speakBtn.innerHTML = '🔊';
              };
              window.speechSynthesis.speak(utterance);
            });
          } else {
            const utterance = new SpeechSynthesisUtterance(speakTxt);
            utterance.onend = () => {
              speakBtn.style.color = '';
              speakBtn.innerHTML = '🔊';
            };
            window.speechSynthesis.speak(utterance);
          }
        });
        
        wrap.appendChild(avatar);
        wrap.appendChild(body);
        wrap.appendChild(speakBtn);
        return wrap;
      };

      if (chatLog) {
        const logItem = document.createElement('div');
        logItem.className = `log-item ${type}`;
        logItem.appendChild(makeContent(text));
        chatLog.appendChild(logItem);
      }
      if (clearChatLog) {
        const clearItem = document.createElement('div');
        clearItem.className = `log-item ${type}`;
        clearItem.appendChild(makeContent(text));
        clearChatLog.appendChild(clearItem);
      }
      terminalBuffer.push({ type, text });
      triggerScroll();
      if (type === 'user') playVortexSound('send');
      if (type === 'droid') playVortexSound('receive');
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
      if (vortexIsLockedOut) {
        alert("Your workspace is locked. Please decrypt the admin license key or wait for the cooldown timer.");
        return;
      }
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
          const chars = "0123456789ABCDEF!@#$%^&*()_+=[]{}|;:,.<>?/\\\\";
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
      let fallbackToFrontendSDK = false;

      try {
        const response = await fetch('/api/vortex', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            prompt: cleanInput,
            clientNodeAddress: window.braidState?.activeNodeAddress || 'anonymous_node',
            purchasedLicenseKey: safeStorage.getItem('vortex_decrypted_license') || ''
          })
        });
        
        if (response.ok) {
          const json = await response.json();
          if (json && json.text) {
            responseText = json.text;
            if (json.fallbackToFrontendSDK) {
              fallbackToFrontendSDK = true;
            }
          } else if (json && json.error) {
            throw new Error(json.error);
          } else {
            throw new Error();
          }
        } else if (response.status === 429) {
          const json = await response.json();
          responseText = json.message || "[WASP] Free tier compute cycles depleted. Cooldown engaged.";
          vortexIsLockedOut = true;
          startLockoutTimer();
          fallbackToFrontendSDK = false;
        } else {
          throw new Error();
        }
      } catch (err) {
        fallbackToFrontendSDK = true;
      }

      if (fallbackToFrontendSDK) {
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
      }

      if (darkThinking && darkThinking.parentNode) darkThinking.remove();
      if (clearThinking && clearThinking.parentNode) clearThinking.remove();

      await streamText('droid', `>> KING_DROID_M4: ${responseText}`);
      conversationHistory.push({ role: 'assistant', content: responseText });

      // Increment requests count for standard users
      var savedProfileRaw = safeStorage.getItem('5ir_authenticated_profile');
      var isMasterUser = false;
      if (savedProfileRaw) {
        try {
          var p = JSON.parse(savedProfileRaw);
          isMasterUser = (p.role === 'SOVEREIGN_CLASS_1' || p.nodeId === 'MOBIUS_BRAID_MAIN');
        } catch (err) {}
      } else {
        if (window.braidState && window.braidState.activeNodeAddress === 'MOBIUS_BRAID_MAIN') {
          isMasterUser = true;
        }
      }

      if (!isMasterUser) {
        vortexRequestCount++;
        if (vortexRequestCount >= 3) {
          vortexIsLockedOut = true;
          appendLog('system', ">> [ALERT] 3 Free token requests consumed. System thread throttled. Please input an authorized Admin Key string or await terminal cooldown.");
          startLockoutTimer();
        } else {
          updateRateLimitUI();
        }
      } else {
        updateRateLimitUI();
      }

      setInputsDisabled(false);
      if (chatInput) chatInput.value = '';
      if (clearChatInput) clearChatInput.value = '';
      triggerScroll();

      if (telemetryText) {
        telemetryText.textContent = `Channel Connection: Secured // LLM Engine: DeepSeek V4 // Credits Charged: ${creditsCharged}`;
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
        const sessionExport = `================================================================================
5iR COMMAND TERMINAL LOG BUFFER // v94.6
================================================================================
TIMESTAMP: ${timestamp}
SYSTEM REFERENCE FREQUENCY: 39,420 Hz
COHERENCE STATUS: 94.6% MATCHED STANDARDS
--------------------------------------------------------------------------------
${activeLogs}
================================================================================`;

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
          const targetTabBtn = document.querySelector('.hud-tab-btn[data-tab="' + lastActiveTab + '"]');
          if (targetTabBtn) targetTabBtn.classList.add('active');
          
          if (mainGrid) {
            mainGrid.className = 'hud-dashboard-grid grid-cols-1 w-full max-w-full';
            
            // Sync layout positions before toggling panel visibilities!
            if (typeof window.syncSovereignGridLayout === 'function') {
              window.syncSovereignGridLayout(lastActiveTab);
            }

            const panels = mainGrid.querySelectorAll('section');
            panels.forEach(panel => {
              const panelId = panel.id;
              const expectedId = 'app-' + lastActiveTab;
              
              if (panelId === expectedId) {
                panel.classList.remove('hidden');
              } else {
                panel.classList.add('hidden');
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
        
        if (window.asymmetricEngine && typeof window.asymmetricEngine.resetToFallback === 'function') {
          window.asymmetricEngine.resetToFallback();
        }
        
        if (window.runOmnipresentNodeMonitor) {
          window.runOmnipresentNodeMonitor(null);
        }

        // Clear authenticated session state
        safeStorage.removeItem('5ir_authenticated_session');
        safeStorage.removeItem('5ir_authenticated_profile');

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
 * Dynamically apply logged-in user profile attributes into HUD workspaces
 */
function applyAuthenticatedProfile(profile) {
  if (!profile) return;
  
  var isMasterUser = (profile.role === 'SOVEREIGN_CLASS_1' && profile.nodeId === 'MOBIUS_BRAID_MAIN');
  if (!isMasterUser && window.braidState && window.braidState.activeNodeAddress === 'MOBIUS_BRAID_MAIN') {
    isMasterUser = true;
  }

  // Apply Asymmetric engine state evaluation
  if (window.asymmetricEngine && typeof window.asymmetricEngine.evaluateAsymmetricState === 'function') {
    window.asymmetricEngine.evaluateAsymmetricState(profile);
  }
  
  // 1. Update the profile capsule in the header
  const profileTitleEl = document.querySelector('.profile-meta .profile-title');
  const profileSubEl = document.querySelector('.profile-meta .profile-sub');
  
  const sovereignHandle = document.getElementById('sovereign-profile-handle');
  if (sovereignHandle) sovereignHandle.textContent = profile.handle || profile.nodeId;
  
  if (profileTitleEl) profileTitleEl.textContent = profile.handle || profile.nodeId;
  if (profileSubEl) profileSubEl.textContent = isMasterUser ? 'Sovereign Lead' : 'Node Contributor';

  // Dynamic Clearance Filter: Sovereign Grid, Vortex-AI Deck, and Flux Monitor tabs are hidden/locked for non-master (demo and standard users)
  const tabNav = document.querySelector('.hud-tab-navigation');
  if (tabNav) {
    const sovereignGridTab = tabNav.querySelector('[data-tab="sovereign-grid"]');
    const vortexAiTab = tabNav.querySelector('[data-tab="vortex-ai"]');
    const fluxCoreTab = tabNav.querySelector('[data-tab="advanced-flux-core"]');
    
    if (isMasterUser) {
      if (sovereignGridTab) sovereignGridTab.classList.remove('hidden');
      if (vortexAiTab) vortexAiTab.classList.remove('hidden');
      if (fluxCoreTab) fluxCoreTab.classList.remove('hidden');
    } else {
      if (sovereignGridTab) sovereignGridTab.classList.add('hidden');
      if (vortexAiTab) vortexAiTab.classList.add('hidden');
      if (fluxCoreTab) fluxCoreTab.classList.add('hidden');
    }

    // Reset active buttons cleanly
    tabNav.querySelectorAll('.hud-tab-btn').forEach(b => b.classList.remove('active'));

    let targetTab = isMasterUser ? 'sovereign-grid' : 'vortex-retain';
    lastActiveTab = targetTab;
    const targetBtn = tabNav.querySelector('[data-tab="' + targetTab + '"]');
    if (targetBtn) {
      targetBtn.classList.add('active');
    }
  }

  // Lock controls on the Advanced Flux Platform Monitor for standard/demo users
  const fluxToggleBtn = document.getElementById('flux-toggle-torsion-btn');
  const fluxScaleBtn = document.getElementById('flux-scale-nodes-btn');
  const fluxCoherenceSlider = document.getElementById('flux-coherence-slider');
  const coherenceCard = fluxCoherenceSlider ? fluxCoherenceSlider.closest('.resonance-micro-card') : null;
  
  if (isMasterUser) {
    if (fluxToggleBtn) fluxToggleBtn.classList.remove('hidden');
    if (fluxScaleBtn) fluxScaleBtn.classList.remove('hidden');
    if (fluxCoherenceSlider) fluxCoherenceSlider.disabled = false;
    if (coherenceCard) coherenceCard.classList.remove('opacity-50', 'pointer-events-none');
  } else {
    // Standard user can only view their metrics (read-only mode)
    if (fluxToggleBtn) fluxToggleBtn.classList.add('hidden');
    if (fluxScaleBtn) fluxScaleBtn.classList.add('hidden');
    if (fluxCoherenceSlider) {
      fluxCoherenceSlider.disabled = true;
      fluxCoherenceSlider.value = 0.946;
      const fluxCore = window.useAdvancedFluxCore ? window.useAdvancedFluxCore() : null;
      if (fluxCore) fluxCore.dispatchFluxOverride('ADJUST_COHERENCE', { targetValue: 0.946 });
    }
    if (coherenceCard) coherenceCard.classList.add('opacity-50', 'pointer-events-none');
  }

  // 2. Update APP 07 Node Chat selection
  const chatNodeSelect = document.getElementById('chat-node-select');
  if (chatNodeSelect) {
    const val = profile.nodeId;
    // Check if option already exists
    let exists = false;
    for (let i = 0; i < chatNodeSelect.options.length; i++) {
      if (chatNodeSelect.options[i].value === val) {
        exists = true;
        break;
      }
    }
    if (!exists) {
      const opt = document.createElement('option');
      opt.value = val;
      opt.textContent = `🧬 ${val} (${profile.handle})`;
      chatNodeSelect.appendChild(opt);
    }
    chatNodeSelect.value = val;
    chatNodeSelect.dispatchEvent(new Event('change'));
  }

  // 3. Update APP 09 Wallet input fields
  const walletAddressInput = document.getElementById('wallet-address-input');
  if (walletAddressInput) {
    walletAddressInput.value = profile.nodeId;
    walletAddressInput.dispatchEvent(new Event('change'));
  }

  // 4. Update window.braidState properties
  if (window.braidState) {
    window.braidState.activeNodeAddress = profile.nodeId;
    window.braidState.flowRate = profile.flowRate;
  }

  // 5. Trigger Custom Event so other modules update (e.g. superfluid balance loop)
  const event = new CustomEvent('5ir-node-address-shifted', { detail: { nodeAddress: profile.nodeId } });
  window.dispatchEvent(event);

  // 6. Launch the Omnipresent Node Monitor for the Master Architect
  if (typeof window.runOmnipresentNodeMonitor === 'function') {
    window.runOmnipresentNodeMonitor(profile);
  }

  // 7. Update APP 13 Phase-Sync Chat prompt prefix
  const phasePromptPrefix = document.getElementById('phase-chat-prompt-prefix');
  if (phasePromptPrefix) {
    phasePromptPrefix.textContent = `[${profile.handle || 'Architect'}] >>`;
  }
}

/**
 * 5iR GATEWAY PORTAL SYSTEM (PAGE 1 TO PAGE 2 SPA ROUTER)
 */
function initGatewayPortalSystem() {
  const portalPage = document.getElementById('gateway-portal-page');
  const workspacePage = document.getElementById('hud-workspace-page');
  const logContainer = document.getElementById('gateway-log-container');
  const lockDeckBtn = document.getElementById('hud-lock-deck-btn');

  // Login view elements
  const loginForm = document.getElementById('gateway-login-view');
  const archIdInput = document.getElementById('gateway-architect-id');
  const secKeyInput = document.getElementById('gateway-security-key');
  const decryptBtn = document.getElementById('gateway-decrypt-btn');
  const toRegisterBtn = document.getElementById('gateway-to-register-btn');

  // Registration view elements
  const registerForm = document.getElementById('gateway-register-view');
  const regIdInput = document.getElementById('gateway-reg-id');
  const regNicknameInput = document.getElementById('gateway-reg-nickname');
  const regPasswordInput = document.getElementById('gateway-reg-password');
  const registerSubmitBtn = document.getElementById('gateway-register-submit-btn');
  const toLoginBtn = document.getElementById('gateway-to-login-btn');

  if (!portalPage || !workspacePage) return;

  // Dynamic rotating passcode initialization
  const auxControls = document.querySelector('.auth-aux-controls');
  if (auxControls && !document.getElementById('dynamic-passcode-status-label')) {
    const rotateSpan = document.createElement('span');
    rotateSpan.id = 'dynamic-passcode-status-label';
    rotateSpan.className = 'text-grey font-bold uppercase tracking-wider text-[8px] animate-pulse';
    rotateSpan.innerHTML = `ROTATING KEY: <span class="text-amber-400 font-extrabold" id="dynamic-passcode-val">-----</span> (<span id="dynamic-passcode-timer">--:--</span>)`;
    auxControls.appendChild(rotateSpan);
  }

  if (secKeyInput) {
    secKeyInput.addEventListener('input', () => {
      secKeyInput.removeAttribute('data-is-autofilled');
    });
  }

  function updateDynamicPasscodeUI() {
    const timeMs = Date.now();
    const intervalMs = 30 * 60 * 1000;
    const blockIndex = Math.floor(timeMs / intervalMs);
    const remainingMs = intervalMs - (timeMs % intervalMs);
    
    const passVal = ((blockIndex * 179 + 39420) % 90000) + 10000;
    const dynamicPass = String(passVal);
    
    const mins = Math.floor(remainingMs / 60000);
    const secs = Math.floor((remainingMs % 60000) / 1000);
    const timeStr = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;

    const timerEl = document.getElementById('dynamic-passcode-timer');
    const valEl = document.getElementById('dynamic-passcode-val');

    if (timerEl) timerEl.textContent = timeStr;
    if (valEl) {
      if (secKeyInput && secKeyInput.getAttribute('data-is-autofilled') === 'true') {
        valEl.textContent = `${dynamicPass} (UNLOCKED)`;
        valEl.className = "text-[#39ff14] font-extrabold";
      } else {
        valEl.textContent = "🔒 SHIELDED";
        valEl.className = "text-amber-400 font-extrabold";
      }
    }
    
    if (secKeyInput && secKeyInput.getAttribute('data-is-autofilled') === 'true') {
      secKeyInput.value = dynamicPass;
    }
  }

  setInterval(updateDynamicPasscodeUI, 1000);
  setTimeout(updateDynamicPasscodeUI, 100);

  // SECURE GATEWAY SEAL VERIFICATION SHORTCUT: Click to decrypt, double-click to auto-fill
  const sealVector = document.getElementById('gateway-seal-vector');
  if (sealVector) {
    sealVector.addEventListener('click', (e) => {
      e.preventDefault();
      
      const timeMs = Date.now();
      const intervalMs = 30 * 60 * 1000;
      const blockIndex = Math.floor(timeMs / intervalMs);
      const passVal = ((blockIndex * 179 + 39420) % 90000) + 10000;
      const dynamicPass = String(passVal);

      // Play high-tech sweep
      try {
        const AudioContextClass = window.AudioContext || window.webkitAudioContext;
        if (AudioContextClass) {
          const audioCtx = new AudioContextClass();
          const osc = audioCtx.createOscillator();
          const gainNode = audioCtx.createGain();
          osc.connect(gainNode);
          gainNode.connect(audioCtx.destination);
          
          osc.type = 'sawtooth';
          osc.frequency.setValueAtTime(394.2, audioCtx.currentTime);
          osc.frequency.exponentialRampToValueAtTime(1182.6, audioCtx.currentTime + 0.2);
          gainNode.gain.setValueAtTime(0.04, audioCtx.currentTime);
          gainNode.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.2);
          
          osc.start();
          osc.stop(audioCtx.currentTime + 0.2);
        }
      } catch (e) {}

      // Visual flash
      sealVector.classList.add('animate-pulse');
      setTimeout(() => sealVector.classList.remove('animate-pulse'), 400);

      appendGatewayLog(`>> [DECRYPT] INTERROGATING MÖBIUS COHERENCE KEY VECTOR...`, "violet");
      setTimeout(() => {
        appendGatewayLog(`>> [DECRYPT] SUCCESS! ACTIVE 30m PASSCODE IS: [ ${dynamicPass} ]`, "cyan");
        appendGatewayLog(`>> [DECRYPT] DOUBLE-TAP THE MÖBIUS SEAL TO AUTO-FILL CREDENTIALS FIELD`, "violet");
      }, 300);
    });

    sealVector.addEventListener('dblclick', (e) => {
      e.preventDefault();
      
      const timeMs = Date.now();
      const intervalMs = 30 * 60 * 1000;
      const blockIndex = Math.floor(timeMs / intervalMs);
      const passVal = ((blockIndex * 179 + 39420) % 90000) + 10000;
      const dynamicPass = String(passVal);

      // Confirmation sound
      try {
        const AudioContextClass = window.AudioContext || window.webkitAudioContext;
        if (AudioContextClass) {
          const audioCtx = new AudioContextClass();
          const freqs = [591.3, 1182.6];
          freqs.forEach((freq, idx) => {
            setTimeout(() => {
              const o = audioCtx.createOscillator();
              const g = audioCtx.createGain();
              o.connect(g);
              g.connect(audioCtx.destination);
              o.type = 'sine';
              o.frequency.setValueAtTime(freq, audioCtx.currentTime);
              g.gain.setValueAtTime(0.05, audioCtx.currentTime);
              g.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.15);
              o.start();
              o.stop(audioCtx.currentTime + 0.15);
            }, idx * 60);
          });
        }
      } catch (e) {}

      if (secKeyInput) {
        secKeyInput.value = dynamicPass;
        secKeyInput.setAttribute('data-is-autofilled', 'true');
        updateDynamicPasscodeUI();
        appendGatewayLog(`>> [AUTOFILL] Passcode shunted directly into credentials field!`, "cyan");
      }
    });
  }

  function appendGatewayLog(text, type) {
    if (!logContainer) return;
    const line = document.createElement('div');
    line.className = `gateway-log-line ${type || ''}`;
    line.textContent = text;
    logContainer.appendChild(line);
    logContainer.scrollTop = logContainer.scrollHeight;
  }

  // View switching handlers
  if (toRegisterBtn) {
    toRegisterBtn.addEventListener('click', () => {
      if (loginForm) loginForm.classList.add('hidden');
      if (registerForm) registerForm.classList.remove('hidden');
      appendGatewayLog(">> REDIRECT: INITIALIZING NEW MESH NODE PORT ENTRY PATH...", "cyan");
    });
  }

  if (toLoginBtn) {
    toLoginBtn.addEventListener('click', () => {
      if (registerForm) registerForm.classList.add('hidden');
      if (loginForm) loginForm.classList.remove('hidden');
      appendGatewayLog(">> REDIRECT: RETURNING TO SECURE GATEWAY VERIFICATION POINT...", "cyan");
    });
  }

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
  const isSessionActive = safeStorage.getItem('5ir_authenticated_session') === 'true';
  if (isSessionActive) {
    portalPage.classList.add('hidden');
    portalPage.style.opacity = '0';
    portalPage.style.pointerEvents = 'none';
    workspacePage.classList.remove('hidden');
    workspacePage.classList.remove('opacity-0');
    workspacePage.classList.add('opacity-100');

    // Retrieve profile if cached
    var savedProfileRaw = safeStorage.getItem('5ir_authenticated_profile');
    var profile;
    if (savedProfileRaw) {
      try {
        profile = JSON.parse(savedProfileRaw);
      } catch (err) {
        console.warn("Corrupt cached profile, resetting", err);
      }
    }
    if (!profile) {
      profile = Object.assign({
        nodeId: 'MOBIUS_BRAID_MAIN',
        handle: 'Architect',
        role: 'SOVEREIGN_CLASS_1',
        baseBalance: 5280.12540000,
        flowRate: 0.00039420
      }, window.MASTER_PROFILE_CONFIG || {});
      safeStorage.setItem('5ir_authenticated_profile', JSON.stringify(profile));
    }
    applyAuthenticatedProfile(profile);

    // Programmatically trigger active tab click to layout panels cleanly on auto-login
    setTimeout(() => {
      const tabNav = document.querySelector('.hud-tab-navigation');
      if (tabNav) {
        const activeBtn = tabNav.querySelector('[data-tab="' + lastActiveTab + '"]') || tabNav.querySelector('.hud-tab-btn');
        if (activeBtn) {
          activeBtn.click();
        }
      }
    }, 100);

    setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    }, 150);
  } else {
    printInitialLogs();
  }

  // Registration submission driver
  if (registerForm) {
    registerForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const nodeIdVal = regIdInput ? regIdInput.value.trim() : '';
      const nicknameVal = regNicknameInput ? regNicknameInput.value.trim() : '';
      const passwordVal = regPasswordInput ? regPasswordInput.value.trim() : '';

      if (!nodeIdVal || !nicknameVal || !passwordVal) {
        appendGatewayLog(">> REGISTRATION ERROR: ALL LAYOUT REGISTRATION FIELDS ARE REQUIRED!", "magenta");
        alert("All registration fields are required.");
        return;
      }

      const lowerNodeId = nodeIdVal.toLowerCase();
      const lowerNickname = nicknameVal.toLowerCase();
      if (lowerNodeId.includes('mobius') || lowerNodeId.includes('architect') || lowerNodeId.includes('sovereign') || lowerNodeId.includes('lead') ||
          lowerNickname.includes('mobius') || lowerNickname.includes('architect') || lowerNickname.includes('sovereign') || lowerNickname.includes('lead')) {
        appendGatewayLog(">> REGISTRATION ERROR: CHOSEN CREDENTIALS INTRUDE ON PROTECTED COMMAND SIGNATURES!", "magenta");
        alert("CRITICAL SECURITY VIOLATION: Cannot register credentials containing protected Sovereign nomenclature (Möbius, Architect, Sovereign, Lead).");
        return;
      }

      const uniqueUserKey = btoa(nodeIdVal + passwordVal).substring(0, 12);
      
      const freshNodeProfile = {
        nodeId: `NODE_0x${uniqueUserKey.toUpperCase()}`,
        handle: nicknameVal,
        role: 'HIGH_FREQUENCY_NODE',
        baseBalance: 10.00000000, // Standard open-source starting token bounty
        flowRate: 0.00000050     // Standard base mint speed acceleration
      };

      safeStorage.setItem(`5ir_node_profile_0x${uniqueUserKey}`, JSON.stringify(freshNodeProfile));
      
      // Auto-create their local data storage wallet block matching App 09 structures
      const initialWalletState = {
        baseBalance: 10.00000000,
        lastSyncTimestamp: Math.floor(Date.now() / 1000),
        currentFlowRate: 0.00000050
      };
      safeStorage.setItem(`5ir_vault_NODE_0x${uniqueUserKey.toUpperCase()}`, JSON.stringify(initialWalletState));

      appendGatewayLog(`[MINT] New node block initialized cleanly: 0x${uniqueUserKey.toUpperCase()}`, "cyan");
      
      // Clear fields and return to login view with pre-filled inputs
      if (regIdInput) regIdInput.value = '';
      if (regNicknameInput) regNicknameInput.value = '';
      if (regPasswordInput) regPasswordInput.value = '';

      if (archIdInput) archIdInput.value = nodeIdVal;
      if (secKeyInput) secKeyInput.value = passwordVal;

      setTimeout(() => {
        if (registerForm) registerForm.classList.add('hidden');
        if (loginForm) loginForm.classList.remove('hidden');
        appendGatewayLog(">> REDIRECT: INITIALIZED NODE PRE-SEEDED. DISPATCH HANDSHAKE VERIFICATION NOW.", "cyan");
      }, 1000);
    });
  }

  // Login / Decrypt Sequence Driver
  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const archId = archIdInput ? archIdInput.value.trim() : '';
      const secKey = secKeyInput ? secKeyInput.value.trim() : '';

      if (!archId || !secKey) {
        appendGatewayLog(">> SECURE GATEKEEPER EXCEPTION: CREDENTIAL FIELDS CANNOT BE EMPTY!", "magenta");
        return;
      }

      if (decryptBtn) {
        decryptBtn.disabled = true;
        decryptBtn.textContent = "[STABILIZING QUANTUM CHANNELS...]";
      }
      appendGatewayLog(">> COMPILING ENCRYPTION SHUNT TOKEN PARAMS...", "cyan");

      let resolvedProfile = null;

      const timeMs = Date.now();
      const intervalMs = 30 * 60 * 1000;
      const blockIndex = Math.floor(timeMs / intervalMs);
      const dynamicPass = String(((blockIndex * 179 + 39420) % 90000) + 10000);

      // Master Bypass Check (Rotating passcode only - secure against standard guesses)
      if ((archId === 'MOBIUS_BRAID_MAIN' || archId === 'MOBIUS.BRAID') && secKey === dynamicPass) {
        resolvedProfile = Object.assign({
          nodeId: 'MOBIUS_BRAID_MAIN',
          handle: 'Architect',
          role: 'SOVEREIGN_CLASS_1',
          baseBalance: 5280.12540000,
          flowRate: 0.00039420
        }, window.MASTER_PROFILE_CONFIG || {});
      } else {
        // Standard Open-Source Dynamic Node Lookup Flow
        const generatedUserKey = btoa(archId + secKey).substring(0, 12);
        const existingNodeProfile = safeStorage.getItem(`5ir_node_profile_0x${generatedUserKey}`);

        if (existingNodeProfile) {
          try {
            resolvedProfile = JSON.parse(existingNodeProfile);
          } catch (err) {
            console.error("Corrupted profile data:", err);
          }
        }
      }

      if (!resolvedProfile) {
        appendGatewayLog(">> [CRITICAL] VERIFICATION EXCEPTION: NODE KEY NOT FOUND INSIDE LOCAL CACHE INDEX.", "magenta");
        if (decryptBtn) {
          decryptBtn.disabled = false;
          decryptBtn.textContent = "[VERIFY_CREDENTIAL_VECTOR]";
        }
        return;
      }

      setTimeout(() => {
        appendGatewayLog(`>> ID VERIFIED: ${resolvedProfile.nodeId} (${resolvedProfile.role} AUTHORIZATION APPROVED)`, "cyan");
      }, 300);

      setTimeout(() => {
        appendGatewayLog(`>> SECURITY SHUNT VALUE: 0x${btoa(archId + secKey).substring(0, 8).toUpperCase()} SECURED`, "violet");
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

          // Securely record authenticated session state & profile details
          safeStorage.setItem('5ir_authenticated_session', 'true');
          safeStorage.setItem('5ir_authenticated_profile', JSON.stringify(resolvedProfile));

          // Set the values dynamically across the apps!
          applyAuthenticatedProfile(resolvedProfile);

          // Programmatically trigger active tab click to layout panels cleanly on login success
          setTimeout(() => {
            const tabNav = document.querySelector('.hud-tab-navigation');
            if (tabNav) {
              const activeBtn = tabNav.querySelector('[data-tab="' + lastActiveTab + '"]') || tabNav.querySelector('.hud-tab-btn');
              if (activeBtn) {
                activeBtn.click();
              }
            }
          }, 100);

          setTimeout(() => {
            workspacePage.classList.remove('opacity-0');
            workspacePage.classList.add('opacity-100');
            window.dispatchEvent(new Event('resize'));
          }, 50);
        }, 600);
      }, 1500);
    });
  }

  // One-click Demo Login Driver
  const demoBtn = document.getElementById('gateway-demo-btn');
  if (demoBtn) {
    demoBtn.addEventListener('click', () => {
      // Sound feedback
      try {
        const AudioContextClass = window.AudioContext || window.webkitAudioContext;
        if (AudioContextClass) {
          const audioCtx = new AudioContextClass();
          const osc = audioCtx.createOscillator();
          const gainNode = audioCtx.createGain();
          osc.connect(gainNode);
          gainNode.connect(audioCtx.destination);
          osc.type = 'sine';
          osc.frequency.setValueAtTime(1000, audioCtx.currentTime);
          osc.frequency.exponentialRampToValueAtTime(1500, audioCtx.currentTime + 0.1);
          gainNode.gain.setValueAtTime(0.04, audioCtx.currentTime);
          gainNode.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.1);
          osc.start();
          osc.stop(audioCtx.currentTime + 0.1);
        }
      } catch (e) {}

      demoBtn.disabled = true;
      demoBtn.textContent = "[ESTABLISHING PUBLIC SHUNT...]";
      if (decryptBtn) decryptBtn.disabled = true;

      appendGatewayLog(">> COMPILING OPEN-SOURCE SANDBOX PROFILE PARAMS...", "cyan");

      const guestProfile = {
        nodeId: 'NODE_GUEST_CONTRIBUTOR',
        handle: 'Guest Contributor',
        role: 'HIGH_FREQUENCY_NODE',
        baseBalance: 10.00000000,
        flowRate: 0.00000050
      };

      setTimeout(() => {
        appendGatewayLog(`>> ID VERIFIED: ${guestProfile.nodeId} (PUBLIC HANDSHAKE APPROVED)`, "cyan");
      }, 300);

      setTimeout(() => {
        appendGatewayLog(`>> SECURITY SHUNT VALUE: 0xGUEST_MEMBER SECURED`, "violet");
        appendGatewayLog(">> COHERENCE SHUNT METRIC: 94.6% MATCHED STANDARDS", "cyan");
      }, 700);

      setTimeout(() => {
        appendGatewayLog(">> GUEST NODE REGISTERED IN THE 1.40M MESH...", "system");
        appendGatewayLog(">> INITIALIZING PUBLIC WORKSPACE HUD...", "cyan");
      }, 1100);

      setTimeout(() => {
        portalPage.style.opacity = '0';
        portalPage.style.transform = 'scale(0.97)';
        portalPage.style.pointerEvents = 'none';

        setTimeout(() => {
          portalPage.classList.add('hidden');
          workspacePage.classList.remove('hidden');

          // Securely record authenticated session state & profile details
          safeStorage.setItem('5ir_authenticated_session', 'true');
          safeStorage.setItem('5ir_authenticated_profile', JSON.stringify(guestProfile));

          // Set the values dynamically across the apps!
          applyAuthenticatedProfile(guestProfile);

          // Programmatically trigger active tab click to layout panels cleanly on login success
          setTimeout(() => {
            const tabNav = document.querySelector('.hud-tab-navigation');
            if (tabNav) {
              const activeBtn = tabNav.querySelector('[data-tab="' + lastActiveTab + '"]') || tabNav.querySelector('.hud-tab-btn');
              if (activeBtn) {
                activeBtn.click();
              }
            }
          }, 100);

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
      
      if (window.asymmetricEngine && typeof window.asymmetricEngine.resetToFallback === 'function') {
        window.asymmetricEngine.resetToFallback();
      }

      // Hide and clean up the omnipresent monitor
      if (window.runOmnipresentNodeMonitor) {
        window.runOmnipresentNodeMonitor(null);
      }

      // Clear authenticated session state
      safeStorage.removeItem('5ir_authenticated_session');
      safeStorage.removeItem('5ir_authenticated_profile');

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
            decryptBtn.textContent = "[VERIFY_CREDENTIAL_VECTOR]";
          }
        }, 50);
      }, 600);
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
 * APPLICATION 10: DEPLOYER HUB FOR MOBILE EXPORTS
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

  // Interactive Download Guard interceptor logic
  const guardTriggerBtn = document.getElementById('download-guard-trigger-btn');
  const guardStatusLog = document.getElementById('download-guard-status-log');

  if (guardTriggerBtn && guardStatusLog) {
    guardTriggerBtn.addEventListener('click', (e) => {
      e.preventDefault();
      
      // Determine if they are the Master Architect
      var savedProfileRaw = safeStorage.getItem('5ir_authenticated_profile');
      var isMasterUser = false;
      if (savedProfileRaw) {
        try {
          var p = JSON.parse(savedProfileRaw);
          isMasterUser = (p.role === 'SOVEREIGN_CLASS_1' && p.nodeId === 'MOBIUS_BRAID_MAIN');
        } catch (err) {}
      } else {
        if (window.braidState && window.braidState.activeNodeAddress === 'MOBIUS_BRAID_MAIN') {
          isMasterUser = true;
        }
      }
      
      if (isMasterUser) {
        guardStatusLog.textContent = '>> [SUCCESS] Sovereign Architect signature validated. Initializing secure Sinter OS Compiler binary stream...';
        guardStatusLog.className = 'text-[7.5pt] text-[#39ff14] font-mono leading-tight';
        
        // Success sound synthesis
        try {
          const AudioContextClass = window.AudioContext || window.webkitAudioContext;
          if (AudioContextClass) {
            const audioCtx = new AudioContextClass();
            const osc = audioCtx.createOscillator();
            const gainNode = audioCtx.createGain();
            osc.connect(gainNode);
            gainNode.connect(audioCtx.destination);
            
            osc.type = 'sine';
            osc.frequency.setValueAtTime(600, audioCtx.currentTime);
            osc.frequency.exponentialRampToValueAtTime(1200, audioCtx.currentTime + 0.15);
            gainNode.gain.setValueAtTime(0.04, audioCtx.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.15);
            
            osc.start();
            osc.stop(audioCtx.currentTime + 0.15);
          }
        } catch (e) {}
      } else {
        guardStatusLog.textContent = '>> [INTERCEPT] REJECTED. Download privilege level mismatch. Low integrity signature (< 0.5).';
        guardStatusLog.className = 'text-[7.5pt] text-[#ff0055] font-mono leading-tight animate-pulse';
        
        // Buzz warning sound synthesis (matching DownloadGuard sawtooth)
        try {
          const AudioContextClass = window.AudioContext || window.webkitAudioContext;
          if (AudioContextClass) {
            const audioCtx = new AudioContextClass();
            const osc = audioCtx.createOscillator();
            const gainNode = audioCtx.createGain();
            osc.connect(gainNode);
            gainNode.connect(audioCtx.destination);
            
            osc.type = 'sawtooth';
            osc.frequency.setValueAtTime(220, audioCtx.currentTime); // Low warning buzz sound
            gainNode.gain.setValueAtTime(0.08, audioCtx.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.2);
            
            osc.start();
            osc.stop(audioCtx.currentTime + 0.2);
          }
        } catch (e) {}
      }
    });
  }
}

/**
 * APPLICATION 06: "LATTICE-SINTER" CONCURRENT MATERIAL ADHESION
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
      const isLightMode = document.body.classList.contains('bg-light');
      ctx.fillStyle = isLightMode ? '#0284c7' : '#00f2fe'; // cyanLume
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
 * APPLICATION 07: "NODE-CHAT" SECURE COMMUNICATOR
 * Dynamic, localized, multi-identity secure communications module matching React specification with vanilla JS.
 */
function initNodeSecureChatApp() {
  const chatPanel = document.getElementById('app-node-chat');
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

  // Declared local elements to prevent ReferenceErrors
  const audioToggleBtn = document.getElementById('chat-audio-toggle-btn');
  const themeToggleBtn = document.getElementById('chat-theme-toggle-btn');
  const packetWaveWrapper = document.getElementById('chat-packet-wave-wrapper');
  const pingBtnArchitect = document.getElementById('ping-btn-architect');
  const pingBtnCydonia = document.getElementById('ping-btn-cydonia');
  const pingBtnVineyard = document.getElementById('ping-btn-vineyard');
  const pingValArchitect = document.getElementById('ping-val-architect');
  const pingValCydonia = document.getElementById('ping-val-cydonia');
  const pingValVineyard = document.getElementById('ping-val-vineyard');

  if (!messageLog) return;

  let currentNode = 'MOBIUS_BRAID_MAIN';
  let packetType = 'RAW_TEXT';
  let isAudioOn = true;
  let isToxicTheme = false;
  let activeTypingTimeout = null;

  // Interactive sound effects generator using standard Web Audio API
  function synthSound(type) {
    if (!isAudioOn) return;
    try {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      if (!AudioContextClass) return;
      const audioCtx = new AudioContextClass();
      const osc = audioCtx.createOscillator();
      const gainNode = audioCtx.createGain();
      osc.connect(gainNode);
      gainNode.connect(audioCtx.destination);

      if (type === 'beep') {
        osc.type = 'sine';
        osc.frequency.setValueAtTime(1400, audioCtx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(1100, audioCtx.currentTime + 0.04);
        gainNode.gain.setValueAtTime(0.04, audioCtx.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.04);
        osc.start();
        osc.stop(audioCtx.currentTime + 0.04);
      } else if (type === 'send') {
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(450, audioCtx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(1300, audioCtx.currentTime + 0.18);
        gainNode.gain.setValueAtTime(0.06, audioCtx.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.18);
        osc.start();
        osc.stop(audioCtx.currentTime + 0.18);
      } else if (type === 'receive') {
        osc.type = 'sine';
        osc.frequency.setValueAtTime(784, audioCtx.currentTime); // G5
        osc.frequency.setValueAtTime(988, audioCtx.currentTime + 0.08); // B5
        gainNode.gain.setValueAtTime(0.05, audioCtx.currentTime);
        gainNode.gain.setValueAtTime(0.04, audioCtx.currentTime + 0.08);
        gainNode.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.28);
        osc.start();
        osc.stop(audioCtx.currentTime + 0.28);
      } else if (type === 'ping') {
        osc.type = 'sine';
        osc.frequency.setValueAtTime(1800, audioCtx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(500, audioCtx.currentTime + 0.4);
        gainNode.gain.setValueAtTime(0.08, audioCtx.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.4);
        osc.start();
        osc.stop(audioCtx.currentTime + 0.4);
      }
    } catch (e) {
      console.warn("AudioContext blocked or un-activated.");
    }
  }

  // Localized state configuration mapping node addresses to customized handles
  let nodeDirectory = {
    MOBIUS_BRAID_MAIN: 'Architect',
    NODE_CYDONIA_08: 'Mars_Hangar_08',
    NODE_VINEYARD_X2: 'Vineyard_Aero_Cluster'
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
          const oldLen = globalMeshLedger.length;
          globalMeshLedger = data.ledger;
          renderChatMessages();
          if (oldLen > 0 && globalMeshLedger.length > oldLen) {
            synthSound('receive');
          }
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
          const oldLen = globalMeshLedger.length;
          globalMeshLedger = JSON.parse(raw);
          renderChatMessages();
          if (oldLen > 0 && globalMeshLedger.length > oldLen) {
            synthSound('receive');
          }
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
      bubble.className = `chat-premium-bubble flex flex-col max-w-[88%] rounded p-2.5 text-[8.5pt] leading-normal my-2 border`;
      
      if (isSystem) {
        bubble.style.alignSelf = 'flex-start';
        bubble.style.backgroundColor = 'rgba(255, 0, 85, 0.05)';
        bubble.style.borderColor = '#ff0055';
        bubble.style.boxShadow = '0 0 8px rgba(255, 0, 85, 0.1)';
      } else if (isOwnMessage) {
        bubble.style.alignSelf = 'flex-end';
        bubble.style.backgroundColor = isToxicTheme ? 'rgba(57, 255, 20, 0.06)' : 'rgba(88, 80, 236, 0.12)';
        bubble.style.borderColor = isToxicTheme ? '#39ff14' : '#5850ec';
        bubble.style.boxShadow = isToxicTheme ? '0 0 8px rgba(57, 255, 20, 0.1)' : '0 0 8px rgba(88, 80, 236, 0.1)';
      } else {
        bubble.style.alignSelf = 'flex-start';
        bubble.style.backgroundColor = 'rgba(28, 45, 90, 0.4)';
        bubble.style.borderColor = '#1c2d5a';
      }

      // Layout Row wrapper for avatar + content
      const layoutRow = document.createElement('div');
      layoutRow.className = 'flex gap-2.5 items-start w-full';

      // Avatar setup
      const avatar = document.createElement('div');
      avatar.className = 'chat-avatar-frame font-mono';
      if (isSystem) {
        avatar.innerHTML = '🤖';
        avatar.style.borderColor = '#ff0055';
        avatar.style.boxShadow = '0 0 6px rgba(255, 0, 85, 0.4)';
      } else if (isOwnMessage) {
        avatar.innerHTML = '👑';
        avatar.style.borderColor = isToxicTheme ? '#39ff14' : '#ffd700';
        avatar.style.boxShadow = isToxicTheme ? '0 0 6px rgba(57, 255, 20, 0.4)' : '0 0 6px rgba(255, 215, 0, 0.4)';
      } else {
        avatar.innerHTML = msg.sender.includes('CYDONIA') ? '🪐' : '🦅';
        avatar.style.borderColor = '#1c2d5a';
      }

      const contentColumn = document.createElement('div');
      contentColumn.className = 'flex-grow flex flex-col';

      const meta = document.createElement('div');
      meta.className = 'flex justify-between items-center gap-4 text-[7.5pt] mb-1 font-bold';
      
      const senderSpan = document.createElement('span');
      senderSpan.className = 'font-bold';
      
      const handleVal = msg.handle || nodeDirectory[msg.sender] || msg.sender;
      if (isSystem) {
        senderSpan.innerHTML = `<span class="chat-user-droid font-extrabold animate-pulse">${handleVal}</span> <span class="text-[#9cb3c9] text-[6.5pt]">(${msg.sender})</span>`;
      } else if (isOwnMessage) {
        senderSpan.innerHTML = `<span class="${isToxicTheme ? 'text-[#39ff14]' : 'chat-user-lead'} font-bold">${handleVal}</span> <span class="text-[#9cb3c9] text-[6.5pt]">(${msg.sender})</span>`;
      } else {
        senderSpan.innerHTML = `<span class="chat-user-contributor font-bold">${handleVal}</span> <span class="text-[#9cb3c9] text-[6.5pt]">(${msg.sender})</span>`;
      }

      // Meta controls holding timestamp and speak button
      const controlsWrap = document.createElement('div');
      controlsWrap.className = 'flex items-center gap-2';

      const timeSpan = document.createElement('span');
      timeSpan.className = 'text-[#9cb3c9]';
      timeSpan.textContent = `[${msg.timestamp}]`;
      controlsWrap.appendChild(timeSpan);

      // Speak Payload trigger
      const speakBtn = document.createElement('button');
      speakBtn.className = 'chat-tts-btn text-gray-500 hover:text-white';
      speakBtn.innerHTML = '🔊';
      speakBtn.title = 'Speak this payload';
      speakBtn.addEventListener('click', () => {
        synthSound('beep');
        speakBtn.style.color = '#39ff14';
        speakBtn.innerHTML = '⚡';
        let spokenText = msg.text.replace(/∮|──|🌀/g, '').trim();
        
        if (window.braidAI && window.braidAI.tts && typeof window.braidAI.tts.speak === 'function') {
          window.braidAI.tts.speak({
            text: spokenText,
            voiceId: 'cartesia:2a293549-8b5e-41f7-bd12-ae27b61b00dc'
          }).then(() => {
            speakBtn.style.color = '';
            speakBtn.innerHTML = '🔊';
          }).catch(() => {
            const utterance = new SpeechSynthesisUtterance(spokenText);
            utterance.onend = () => {
              speakBtn.style.color = '';
              speakBtn.innerHTML = '🔊';
            };
            window.speechSynthesis.speak(utterance);
          });
        } else {
          const utterance = new SpeechSynthesisUtterance(spokenText);
          utterance.onend = () => {
            speakBtn.style.color = '';
            speakBtn.innerHTML = '🔊';
          };
          window.speechSynthesis.speak(utterance);
        }
      });
      controlsWrap.appendChild(speakBtn);

      meta.appendChild(senderSpan);
      meta.appendChild(controlsWrap);

      const textDiv = document.createElement('div');
      textDiv.className = 'font-mono break-all whitespace-pre-wrap';
      textDiv.style.color = isSystem ? (isToxicTheme ? '#39ff14' : '#00f2fe') : '#ffffff';

      if (msg.mode === 'TOPOLOGICAL_BRAID') {
        textDiv.innerHTML = `<span class="text-[#ffd700] font-extrabold text-[8px] block mb-0.5 tracking-wider">[TOPOLOGICAL DECRYPT DECO]</span>${msg.text}`;
      } else if (msg.mode === 'HEX_PAYLOAD') {
        textDiv.innerHTML = `<span class="text-[#5850ec] font-extrabold text-[8px] block mb-0.5 tracking-wider">[HEX PAYLOAD BITMASK]</span>${msg.text}`;
      } else {
        textDiv.textContent = msg.text;
      }

      contentColumn.appendChild(meta);
      contentColumn.appendChild(textDiv);
      layoutRow.appendChild(avatar);
      layoutRow.appendChild(contentColumn);
      bubble.appendChild(layoutRow);
      messageLog.appendChild(bubble);
    });

    // Auto scroll message log to bottom
    messageLog.scrollTop = messageLog.scrollHeight;
  }

  // Simulated typing indicator rendering
  function showTypingIndicator() {
    const existing = document.getElementById('chat-typing-view-indicator');
    if (existing) existing.remove();

    const indicator = document.createElement('div');
    indicator.id = 'chat-typing-view-indicator';
    indicator.className = 'chat-typing-indicator';
    indicator.innerHTML = `
      <span class="text-[8px] font-bold text-gray-500 font-mono uppercase mr-1">Incoming stream</span>
      <span class="chat-typing-dot"></span>
      <span class="chat-typing-dot"></span>
      <span class="chat-typing-dot"></span>
    `;
    messageLog.appendChild(indicator);
    messageLog.scrollTop = messageLog.scrollHeight;
  }
  
  function removeTypingIndicator() {
    const indicator = document.getElementById('chat-typing-view-indicator');
    if (indicator) indicator.remove();
  }

  async function handleSendMessage() { 
    if (!messageInput || !messageInput.value.trim()) return;
    
    const textVal = messageInput.value.trim();
    messageInput.value = '';

    const currentHandle = nodeDirectory[currentNode] || currentNode;
    let computedText = textVal;

    // Pulse visual wave animation
    if (packetWaveWrapper) {
      packetWaveWrapper.classList.remove('hidden');
      setTimeout(() => { packetWaveWrapper.classList.add('hidden'); }, 1200);
    }

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
    synthSound('send');
    globalMeshLedger.push(newMsg);
    renderChatMessages();

    // Upgrade: Autonomous network response thread
    if (textVal.toLowerCase().includes('status') || textVal.toLowerCase().includes('ping')) {
      showTypingIndicator();
      if (activeTypingTimeout) clearTimeout(activeTypingTimeout);
      
      activeTypingTimeout = setTimeout(async () => {
        removeTypingIndicator();
        synthSound('receive');
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
      }, 1400);
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

  // Setup premium custom interactive toggles and remote link aggregation buttons
  if (audioToggleBtn) {
    audioToggleBtn.addEventListener('click', () => {
      isAudioOn = !isAudioOn;
      if (isAudioOn) {
        audioToggleBtn.className = 'chat-control-pill active';
        audioToggleBtn.textContent = '🔊 AUDIO ON';
        synthSound('ping');
      } else {
        audioToggleBtn.className = 'chat-control-pill';
        audioToggleBtn.textContent = '🔇 AUDIO OFF';
      }
    });
  }

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      isToxicTheme = !isToxicTheme;
      synthSound('beep');
      if (isToxicTheme) {
        themeToggleBtn.className = 'chat-control-pill active';
        themeToggleBtn.textContent = '🐍 TOXIC';
        if (chatPanel) chatPanel.classList.add('chat-theme-toxic');
      } else {
        themeToggleBtn.className = 'chat-control-pill';
        themeToggleBtn.textContent = '👑 SOVEREIGN';
        if (chatPanel) chatPanel.classList.remove('chat-theme-toxic');
      }
      renderChatMessages();
    });
  }

  // Quick select connection diagnostic buttons
  function connectToRemoteNode(targetId, buttonEl, pingValEl, originalLabel) { 
    synthSound('ping');
    if (pingValEl) {
      pingValEl.textContent = 'CONNECTING...';
      pingValEl.className = 'text-[8px] text-yellow-400 animate-pulse';
    }

    setTimeout(() => {
      const randomPingMs = Math.floor(Math.random() * 80 + 15);
      if (pingValEl) {
        pingValEl.textContent = `${randomPingMs} ms`;
        pingValEl.className = 'text-[8px] text-green-400';
      }
      synthSound('receive');
      
      if (nodeSelect) {
        nodeSelect.value = targetId;
        nodeSelect.dispatchEvent(new Event('change'));
      }
    }, 600);
  }

  if (pingBtnArchitect) {
    pingBtnArchitect.addEventListener('click', () => {
      connectToRemoteNode('MOBIUS_BRAID_MAIN', pingBtnArchitect, pingValArchitect, 'MOBIUS CENTRAL');
    });
  }

  if (pingBtnCydonia) {
    pingBtnCydonia.addEventListener('click', () => {
      connectToRemoteNode('NODE_CYDONIA_08', pingBtnCydonia, pingValCydonia, 'CYDONIA 08');
    });
  }

  if (pingBtnVineyard) {
    pingBtnVineyard.addEventListener('click', () => {
      connectToRemoteNode('NODE_VINEYARD_X2', pingBtnVineyard, pingValVineyard, 'VINEYARD X2');
    });
  }

  // Setup Event Listeners
  if (nodeSelect) {
    nodeSelect.addEventListener('change', (e) => {
      currentNode = e.target.value;
      synthSound('beep');
      
      // Restore local handle details
      const currentHandle = nodeDirectory[currentNode] || currentNode;
      if (nicknameInput) {
        nicknameInput.value = currentHandle;
      }
      
      if (promptPrefix) {
        promptPrefix.textContent = `[${currentHandle}] >>`;
        promptPrefix.style.color = currentNode === 'MOBIUS_BRAID_MAIN' ? (isToxicTheme ? '#39ff14' : '#ffd700') : '#5850ec';
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
      synthSound('beep');
      
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
  
  // Conversion Rates Matrix Setup Definitions
  const conversionRates = { BRAID: 1.0, BTC: 0.0000142, ETH: 0.0002846, SOL: 0.00582 };
  
  let minedBalance = 0.0;
  let miningSpeed = 0.00003942;
  let isVaultLocked = false;
  let finalizedQrToken = '';
  let passphrase = '';
  let selectedTargetAsset = 'BRAID';
  let ledgerLogs = ['[MATRIX] Core liquidity conversion loops stabilized...'];

  const bridgeForm = document.getElementById('unified-bridge-form');
  const targetAssetSelect = document.getElementById('unified-target-asset');
  const passphraseInput = document.getElementById('unified-passphrase-input');
  const submitBtn = document.getElementById('unified-bridge-submit-btn');
  const resetBtn = document.getElementById('unified-bridge-reset-btn');
  const qrEmptyState = document.getElementById('unified-qr-empty-state');
  const qrActiveState = document.getElementById('unified-qr-active-state');
  const qrPixelMatrix = document.getElementById('unified-qr-pixel-matrix');
  const qrBase64String = document.getElementById('unified-qr-base64-string');
  const logsContainer = document.getElementById('unified-bridge-logs-container');
  const telemetryText = document.getElementById('app9-telemetry-text');

  function updateLogsDisplay() {
    if (!logsContainer) return;
    logsContainer.innerHTML = ledgerLogs.map(log => `<div>${log}</div>`).join('');
    logsContainer.scrollTop = logsContainer.scrollHeight;
  }
  updateLogsDisplay();

  function drawUnifiedPixelMatrix(tokenString) {
    if (!qrPixelMatrix) return;
    qrPixelMatrix.innerHTML = '';
    for (let idx = 0; idx < 64; idx++) {
      const pixel = document.createElement('div');
      pixel.className = 'w-[12px] h-[12px]';
      const isDark = (tokenString.charCodeAt(idx % tokenString.length) + idx) % 2 === 0;
      pixel.style.backgroundColor = isDark ? '#000000' : '#ffffff';
      qrPixelMatrix.appendChild(pixel);
    }
  }

  // Smooth continuous high-frequency flow sync with window.braidState
  function syncMinedBalance() {
    if (!isVaultLocked && window.braidState && typeof window.braidState.currentMinedBalance === 'number') {
      minedBalance = window.braidState.currentMinedBalance;
      const balanceSpan = document.getElementById('unified-mined-balance');
      if (balanceSpan) {
        balanceSpan.textContent = minedBalance.toFixed(8);
      }
    }
    requestAnimationFrame(syncMinedBalance);
  }
  requestAnimationFrame(syncMinedBalance);

  if (bridgeForm) {
    bridgeForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      if (minedBalance < 0.001) {
        alert("Insufficient liquidity threshold. Minimum 0.001 $BRAID required to wrap.");
        return;
      }
      
      const pass = passphraseInput ? passphraseInput.value : '';
      if (!pass.trim()) {
        alert("Administrative decryption passcode required.");
        return;
      }
      
      passphrase = pass;
      selectedTargetAsset = targetAssetSelect ? targetAssetSelect.value : 'BRAID';
      
      // Process converted asset calculation steps
      const targetedConversionValue = minedBalance * conversionRates[selectedTargetAsset];
      
      const vaultPayload = {
        sourceNode: window.braidState?.activeNodeAddress || "MOBIUS_BRAID_MAIN",
        nativeAmount: minedBalance.toFixed(8),
        targetAssetType: selectedTargetAsset,
        convertedAmount: targetedConversionValue.toFixed(8),
        coherenceCeiling: "94.6%",
        timestamp: Date.now()
      };

      const stringDataBlock = JSON.stringify(vaultPayload);
      
      // Execute localized bit-shifting encryption over the token data block string
      let encryptedCipherString = '';
      for (let idx = 0; idx < stringDataBlock.length; idx++) {
        const charShift = stringDataBlock.charCodeAt(idx) ^ passphrase.charCodeAt(idx % passphrase.length);
        encryptedCipherString += String.fromCharCode(charShift);
      }

      const compiledBase64QR = btoa(encodeURIComponent(encryptedCipherString));
      finalizedQrToken = compiledBase64QR;
      isVaultLocked = true;
      
      // Add logs
      ledgerLogs.push(`[SINTER] Successfully wrapped ${minedBalance.toFixed(6)} \$BRAID.`);
      ledgerLogs.push(`[BRIDGE] Converted value: ${targetedConversionValue.toFixed(6)} ${selectedTargetAsset}`);
      ledgerLogs.push(`[CIPHER] 5iR Unique QR Matrix compiled securely.`);
      updateLogsDisplay();
      
      // Update inputs & display QR
      if (targetAssetSelect) targetAssetSelect.disabled = true;
      if (passphraseInput) passphraseInput.disabled = true;
      if (resetBtn) resetBtn.classList.remove('hidden');
      
      if (qrEmptyState) qrEmptyState.classList.add('hidden');
      if (qrActiveState) qrActiveState.classList.remove('hidden');
      if (qrBase64String) qrBase64String.textContent = finalizedQrToken;
      
      drawUnifiedPixelMatrix(finalizedQrToken);

      if (telemetryText) {
        telemetryText.textContent = `Encryption Standard: Salted XOR Torsion Matrix // Vault State: Active & Encrypted`;
        telemetryText.className = 'log-val text-[#39ff14] text-[8.5px] animate-pulse';
      }
    });
  }

  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      isVaultLocked = false;
      finalizedQrToken = '';
      passphrase = '';
      minedBalance = 0.0;
      
      if (window.braidState) {
        window.braidState.currentMinedBalance = 0.0;
        // Also update local storage so it persists the reset balance to zero!
        const nodeAddress = window.braidState.activeNodeAddress || 'MOBIUS_BRAID_MAIN';
        const storageKey = `5ir_vault_${nodeAddress}`;
        const rawVault = safeStorage.getItem(storageKey);
        if (rawVault) {
          try {
            const parsed = JSON.parse(rawVault);
            parsed.baseBalance = 0.0;
            parsed.lastSyncTimestamp = Date.now() / 1000;
            safeStorage.setItem(storageKey, JSON.stringify(parsed));
          } catch(e){}
        }
      }
      
      if (passphraseInput) {
        passphraseInput.value = '';
        passphraseInput.disabled = false;
      }
      if (targetAssetSelect) {
        targetAssetSelect.disabled = false;
      }
      if (resetBtn) resetBtn.classList.add('hidden');
      
      if (qrEmptyState) qrEmptyState.classList.remove('hidden');
      if (qrActiveState) qrActiveState.classList.add('hidden');
      
      ledgerLogs.push(`[RESET] Vault cleared and balance counter reset.`);
      updateLogsDisplay();

      if (telemetryText) {
        telemetryText.textContent = `Encryption Standard: Salted XOR Torsion Matrix // Vault State: Standby`;
        telemetryText.className = 'log-val text-grey text-[8.5px]';
      }
    });
  }

  // Clipboard copy handler for Base64 QR code string
  if (qrBase64String) {
    qrBase64String.addEventListener('click', async () => {
      const text = qrBase64String.textContent;
      if (!text || text === '') return;
      try {
        await navigator.clipboard.writeText(text);
        ledgerLogs.push('[CLIPBOARD] Unique QR Base64 string copied stably.');
        updateLogsDisplay();
        const prevTitle = qrBase64String.title;
        qrBase64String.title = 'Copied!';
        setTimeout(() => { qrBase64String.title = prevTitle; }, 1500);
      } catch (_) {}
    });
  }

  // --- LIVE MINING CHART RENDERING SECTION ---
  const miningCanvas = document.getElementById('live-mining-chart-canvas');
  const hashRateDisplay = document.getElementById('mining-hash-rate-display');
  let resizeMiningCanvas = null;

  if (miningCanvas) {
    const ctx = miningCanvas.getContext('2d');
    let dynamicTicks = 0;
    let dataStreamHistory = Array(30).fill(60); // Historical data array tracks
    let currentHashVelocity = 39420;

    // Resize canvas to match actual rendered client bounds
    resizeMiningCanvas = () => {
      if (!miningCanvas) return;
      const rect = miningCanvas.getBoundingClientRect();
      miningCanvas.width = rect.width || 400;
      miningCanvas.height = rect.height || 100;
    };
    
    resizeMiningCanvas();
    window.addEventListener('resize', resizeMiningCanvas);
    // Also trigger on a tiny delay in case parent section was hidden during initial paint
    setTimeout(resizeMiningCanvas, 500);

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
        const multiplier = (window.braidState && window.braidState.asymmetricMultiplier) ? window.braidState.asymmetricMultiplier : 1;
        currentHashVelocity = Math.floor((39420 + rawVariance * 8) * multiplier);
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
        if (btn.getAttribute('data-tab') === 'wallet-wrapper' && typeof resizeMiningCanvas === 'function') {
          setTimeout(resizeMiningCanvas, 50);
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

      try {
        const response = await fetch('/api/difficulty', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ newBlockTime: val })
        });
        if (response.ok) {
          ledgerLogs.push(`[SUCCESS] Block time ${val}s recorded stably. Calibration complete.`);
          updateLogsDisplay();
          await fetchNetworkTelemetry();
        } else {
          const json = await response.json();
          ledgerLogs.push(`[ERROR] Transmission failed: ${json.error || response.statusText}`);
          updateLogsDisplay();
        }
      } catch (err) {
        ledgerLogs.push(`[ERROR] Connection interrupted: ${err.message}`);
        updateLogsDisplay();
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
  const ctx = canvas ? canvas.getContext('2d') : null;
  
  let radioFreq = 39420;
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

  // Unified Resonance synchronizer across all micro sliders and primary dials
  const globalSliders = document.querySelectorAll('.resonance-global-slider');
  const globalFreqVals = document.querySelectorAll('.resonance-global-freq-val');
  const globalStatuses = document.querySelectorAll('.resonance-micro-status');

  function syncAllResonanceSliders(val) { 
    globalSliders.forEach(s => { s.value = val; });
    globalFreqVals.forEach(v => { v.textContent = `${val.toLocaleString()}Hz`; });
    
    const isLocked = (val === 39420);
    globalStatuses.forEach(st => {
      if (isLocked) {
        st.textContent = "39,420 Hz LOCKED";
        st.className = "text-[#39ff14] animate-pulse font-extrabold resonance-micro-status";
      } else {
        st.textContent = `${(val/1000).toFixed(2)} kHz DRIFT`;
        st.className = "text-[#ff0055] font-bold resonance-micro-status";
      }
    });

    radioFreq = val;
    if (freqDisplay) freqDisplay.textContent = val.toLocaleString();
    if (freqSlider) freqSlider.value = val;

    if (radioStatusText) {
      if (isLocked) {
        const textVal = '[PHASE_LOCKED]: 1.4M Node Entanglement Active. Channel Untraceable.';
        radioStatusText.textContent = textVal;
        radioStatusText.className = 'text-[8pt] text-[#39ff14] font-mono mt-2.5 font-bold animate-pulse';
      } else {
        const textVal = '[SIGNAL_DRIFT]: Sub-harmonic 4iR background noise detected.';
        radioStatusText.textContent = textVal;
        radioStatusText.className = 'text-[8pt] text-[#ff0055] font-mono mt-2.5';
      }
    }
  }

  // Monitor any slide changes from any micro slider
  globalSliders.forEach(slider => {
    slider.addEventListener('input', (e) => {
      syncAllResonanceSliders(Number(e.target.value));
    });
  });

  // Radio functionality and range input monitoring on main App 08 slider
  if (freqSlider) {
    freqSlider.addEventListener('input', (e) => {
      syncAllResonanceSliders(Number(e.target.value));
    });
  }

  // --- UPGRADED STANDALONE ISOLATED RADIO WAVE STATE ENGINE (RadioWaveMetricsPanel) ---
  let radioMetrics = {
    carrierFrequency: 39420,
    signalDecayFloor: 0.00,
    lieBracketConvergence: 1.00000000,
    topologicalStealthStatus: 'ACTIVE_SUB_HARMONIC',
    antennaInductionCoupling: 100.0,
    currentWaveShift: 0
  };

  let activeFrequencyChannel = 'CH_04_CYDONIA';
  let radioEventLogs = [
    '[INIT] Topological radio module attached to 24-strand flux braid...'
  ];

  function runRadioWaveStep() {
    const timeSeed = Date.now() / 1000;
    const dynamicFluctuation = Math.sin(timeSeed * 2.5) * 0.000012;
    const nextConvergence = 1.00000000 + dynamicFluctuation;
    const nextWaveShift = (radioMetrics.currentWaveShift + 2) % 360;

    radioMetrics.lieBracketConvergence = nextConvergence;
    radioMetrics.currentWaveShift = nextWaveShift;
    radioMetrics.signalDecayFloor = 0.00;

    const freqDisplayNode = document.getElementById('radio-frequency-display');
    const decayDisplayNode = document.getElementById('radio-decay-display');
    const convergenceDisplayNode = document.getElementById('radio-convergence-display');
    const wavePathNode = document.getElementById('radio-wave-svg-path');
    const stealthDisplayNode = document.getElementById('radio-stealth-status');

    if (freqDisplayNode) {
      freqDisplayNode.textContent = `${radioMetrics.carrierFrequency.toLocaleString()} Hz`;
    }
    if (decayDisplayNode) {
      decayDisplayNode.textContent = `${radioMetrics.signalDecayFloor.toFixed(2)} W`;
    }
    if (convergenceDisplayNode) {
      convergenceDisplayNode.textContent = radioMetrics.lieBracketConvergence.toFixed(8);
    }
    if (stealthDisplayNode) {
      stealthDisplayNode.textContent = radioMetrics.topologicalStealthStatus;
      stealthDisplayNode.style.color = radioMetrics.topologicalStealthStatus === 'ACTIVE_SUB_HARMONIC' ? '#39ff14' : '#ff0055';
    }

    if (wavePathNode) {
      const waveHeight = Math.sin(radioMetrics.currentWaveShift * Math.PI / 180) * 20;
      const pathD = `M 0 30 Q 50 ${30 + waveHeight}, 100 30 T 200 30`;
      wavePathNode.setAttribute('d', pathD);
      wavePathNode.setAttribute('stroke', radioMetrics.topologicalStealthStatus === 'ACTIVE_SUB_HARMONIC' ? '#00f2fe' : '#ff0055');
      wavePathNode.style.filter = `drop-shadow(0 0 4px ${radioMetrics.topologicalStealthStatus === 'ACTIVE_SUB_HARMONIC' ? '#00f2fe' : '#ff0055'})`;
    }
  }

  // Ticker for isolated radio parameters fluctuation
  const radioPulseTicker = setInterval(runRadioWaveStep, 150);

  const processFrequencySweep = (targetChannel, frequencyOffset) => {
    activeFrequencyChannel = targetChannel;
    const updatedFreq = 39420 + frequencyOffset;
    
    radioMetrics.carrierFrequency = updatedFreq;
    radioMetrics.topologicalStealthStatus = frequencyOffset === 0 ? 'ACTIVE_SUB_HARMONIC' : 'WARNING_SPECTRUM_DRIFT';

    const btnCydonia = document.getElementById('radio-btn-cydonia');
    const btnLunar = document.getElementById('radio-btn-lunar');
    const linkBadge = document.getElementById('radio-link-badge');

    if (linkBadge) {
      linkBadge.textContent = `LINK: ${targetChannel}`;
    }

    if (btnCydonia) {
      if (activeFrequencyChannel === 'CH_04_CYDONIA') {
        btnCydonia.style.backgroundColor = '#5850ec';
        btnCydonia.style.border = '1px solid #00f2fe';
      } else {
        btnCydonia.style.backgroundColor = '#010206';
        btnCydonia.style.border = '1px solid #1c2d5a';
      }
    }

    if (btnLunar) {
      if (activeFrequencyChannel === 'LUNAR_GRID_X') {
        btnLunar.style.backgroundColor = '#5850ec';
        btnLunar.style.border = '1px solid #00f2fe';
      } else {
        btnLunar.style.backgroundColor = '#010206';
        btnLunar.style.border = '1px solid #1c2d5a';
      }
    }

    const timestamp = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false });
    const logMsg = `[${timestamp}] SWEEP: Shifted channel link to ${targetChannel} (${updatedFreq} Hz)`;
    radioEventLogs = [logMsg, ...radioEventLogs.slice(0, 4)];

    renderRadioLogs();

    // Propagate the shift back to the global resonance indicators
    syncAllResonanceSliders(updatedFreq);
  };

  const renderRadioLogs = () => {
    const logsContainer = document.getElementById('radio-event-logs-container');
    if (!logsContainer) return;

    logsContainer.innerHTML = radioEventLogs.map(log => {
      const isSweep = log.includes('SWEEP');
      const color = isSweep ? '#00f2fe' : '#a1b5cc';
      return `<div style="color: ${color}; font-weight: 800; font-size: 7.5pt; font-family: monospace;">${log}</div>`;
    }).join('');
    logsContainer.scrollTop = logsContainer.scrollHeight;
  };

  // Wire standalone buttons
  const btnCydonia = document.getElementById('radio-btn-cydonia');
  const btnLunar = document.getElementById('radio-btn-lunar');

  if (btnCydonia) {
    btnCydonia.addEventListener('click', () => {
      processFrequencySweep('CH_04_CYDONIA', 0);
    });
  }

  if (btnLunar) {
    btnLunar.addEventListener('click', () => {
      processFrequencySweep('LUNAR_GRID_X', -420);
    });
  }

  // Initial logs paint
  renderRadioLogs();

  // --- LIVE SUPERFLUID BALANCE CALCULATOR HOOK INTEGRATION ---
  let activeNodeAddress = 'MOBIUS_BRAID_MAIN';
  let calculationFrameId;

  function runSuperfluidHighFreqLoop(nodeAddress) {
    if (calculationFrameId) {
      cancelAnimationFrame(calculationFrameId);
    }

    const storageKey = `5ir_vault_${nodeAddress}`;
    let rawVaultData = safeStorage.getItem(storageKey);
    
    // Ensure the node has initialized state vector values in storage
    if (!rawVaultData) {
      const initialVault = {
        baseBalance: 100.00000000,
        lastSyncTimestamp: Date.now() / 1000,
        currentFlowRate: flowRate
      };
      safeStorage.setItem(storageKey, JSON.stringify(initialVault));
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
      const multiplier = (window.braidState && window.braidState.asymmetricMultiplier) ? window.braidState.asymmetricMultiplier : 1;
      const calculatedCurrentBalance = baseBalance + (elapsedTimeDelta * currentFlowRate * multiplier);
      
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
      safeStorage.setItem(storageKey, JSON.stringify(updatedVault));

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
      
      braidingLogsList.push(`[INIT] Ingesting intent: "${val}"`);
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
    if (!canvas) return;
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
  if (canvas) {
    resizeWaveCanvas();
    window.addEventListener('resize', resizeWaveCanvas);
  }

  // Waveform drawing calculation animation loop
  function drawResonanceField() {
    if (canvas && canvas.offsetParent !== null) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      timeTick += 0.03;

      ctx.lineWidth = 1;
      const isPhaseLocked = (radioFreq === 39420);

      if (isPhaseLocked) {
        const isLightMode = document.body.classList.contains('bg-light');
        ctx.strokeStyle = isLightMode ? '#0284c7' : '#00f2fe';
        ctx.beginPath();
        for (let x = 0; x < canvas.width; x++) {
          const y = (canvas.height / 2) + Math.sin(x * 0.05 + timeTick) * 15 + Math.cos(x * 0.02 - timeTick) * 5;
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();
      } else { 
        ctx.strokeStyle = 'rgba(156, 179, 201, 0.25)';
        ctx.beginPath();
        for (let i = 0; i < canvas.width; i += 4) {
          ctx.moveTo(i, Math.random() * canvas.height);
          ctx.lineTo(i + 2, Math.random() * canvas.height);
        }
        ctx.stroke();
      }
    }
    if (canvas) {
      requestAnimationFrame(drawResonanceField);
    }
  }
  if (canvas) {
    drawResonanceField();
  }
}

/**
 * Background Brightness Controller - Stealth (Dark), Bright Light (Laboratory), Void (OLED Black)
 */
function initBgBrightnessController() {
  const gatewayBtn = document.getElementById('gateway-brightness-btn');
  const hudBtn = document.getElementById('hud-brightness-btn');

  const modes = ['stealth', 'light', 'void'];
  const labels = {
    'stealth': '🔆 BG: STEALTH',
    'light': '🔆 BG: BRIGHT LIGHT',
    'void': '🔆 BG: OLED VOID'
  };

  let currentMode = safeStorage.getItem('5ir_bg_brightness') || 'stealth';
  if (currentMode === 'luminous') currentMode = 'light';
  if (!modes.includes(currentMode)) {
    currentMode = 'stealth';
  }

  applyMode(currentMode);

  function applyMode(mode) {
    document.body.classList.remove('bg-stealth', 'bg-luminous', 'bg-void', 'bg-light');
    document.body.classList.add(`bg-${mode}`);
    safeStorage.setItem('5ir_bg_brightness', mode);
    currentMode = mode;

    if (gatewayBtn) gatewayBtn.textContent = labels[mode];
    if (hudBtn) hudBtn.textContent = labels[mode];
  }

  function cycle() {
    const nextIdx = (modes.indexOf(currentMode) + 1) % modes.length;
    const nextMode = modes[nextIdx];
    applyMode(nextMode);

    try {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      if (AudioContextClass) {
        const audioCtx = new AudioContextClass();
        const osc = audioCtx.createOscillator();
        const gainNode = audioCtx.createGain();
        osc.connect(gainNode);
        gainNode.connect(audioCtx.destination);
        osc.type = 'sine';
        osc.frequency.setValueAtTime(1200, audioCtx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(800, audioCtx.currentTime + 0.05);
        gainNode.gain.setValueAtTime(0.03, audioCtx.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.05);
        osc.start();
        osc.stop(audioCtx.currentTime + 0.05);
      }
    } catch (e) {}
  }

  if (gatewayBtn) { 
    gatewayBtn.addEventListener('click', (e) => {
      e.preventDefault();
      cycle();
    });
  }

  if (hudBtn) {
    hudBtn.addEventListener('click', (e) => {
      e.preventDefault();
      cycle();
    });
  }
}

/**
 * APPLICATION 10: "LEGAL-COMPLIANCE" CORPORATE SHELL STAGING
 * High-fidelity corporate jurisdiction staging sandbox logic based on the user-provided framework.
 */
function initLegalComplianceApp() {
  const jurisdictionSelect = document.getElementById('legal-jurisdiction-select');
  const kycCheck = document.getElementById('legal-kyc-check');
  const stageBtn = document.getElementById('legal-stage-btn');
  const logsContainer = document.getElementById('legal-logs-container');

  if (!logsContainer) return;

  let logs = ['[LEGAL] Staging corporate structural framework options...'];

  function addLog(text, colorClass = 'text-grey') {
    const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false });
    logs.push(`[${time}] ${text}`);
    
    const line = document.createElement('div');
    line.className = `leading-normal break-all font-mono text-[8.5px] ${colorClass}`;
    line.innerHTML = `<span class="text-indigo-400 font-bold">[${time}]</span> ${text}`;
    
    logsContainer.appendChild(line);
    logsContainer.scrollTop = logsContainer.scrollHeight;
  }

  // Render initial standby state
  logsContainer.innerHTML = '';
  addLog('Staging corporate structural framework options... OK', 'text-cyan');
  addLog('Standby. Select corporate landing jurisdiction and stage your legal filing.', 'text-grey');

  if (stageBtn) { 
    stageBtn.addEventListener('click', () => {
      const jurisdiction = jurisdictionSelect ? jurisdictionSelect.value : 'WYOMING_LLC';
      const kycActive = kycCheck ? kycCheck.checked : false;

      // Direct sound feedback synthesis using Web Audio Synth
      try {
        const AudioContextClass = window.AudioContext || window.webkitAudioContext;
        if (AudioContextClass) {
          const audioCtx = new AudioContextClass();
          const osc = audioCtx.createOscillator();
          const gainNode = audioCtx.createGain();
          osc.connect(gainNode);
          gainNode.connect(audioCtx.destination);
          osc.type = 'sine';
          osc.frequency.setValueAtTime(1100, audioCtx.currentTime);
          osc.frequency.exponentialRampToValueAtTime(1700, audioCtx.currentTime + 0.08);
          gainNode.gain.setValueAtTime(0.04, audioCtx.currentTime);
          gainNode.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.08);
          osc.start();
          osc.stop(audioCtx.currentTime + 0.08);
        }
      } catch (e) {}

      addLog(`[FILING] Generating shell docs under jurisdiction: 5iR Tech, Corp. (${jurisdiction})`, 'text-white');
      addLog(`[SHUNTS] Mapping asset IP copyrights for 5ir.dev and mobiusbraid.com... OK`, 'text-cyan');
      addLog(`[KYC] User access filtering protocol state: ${kycActive ? 'MANDATORY_AML_ACTIVE' : 'SANDBOX_OPEN_FLOW'}`, kycActive ? 'text-[#ff5252]' : 'text-[#39ff14]');
    });
  }
}

/**
 * Poll local storage to intercept and display all active dynamic node profiles
 */
let nodeMonitorInterval = null;
function runOmnipresentNodeMonitor(profile) {
  const darkMonitor = document.getElementById('vortex-architect-monitor');
  const clearMonitor = document.getElementById('clear-vortex-architect-monitor');
  const darkContainer = document.getElementById('vortex-discovered-nodes-container');
  const clearContainer = document.getElementById('clear-vortex-discovered-nodes-container');

  if (!darkMonitor || !clearMonitor) return;

  const isMaster = (profile && (profile.role === 'SOVEREIGN_CLASS_1' || profile.nodeId === 'MOBIUS_BRAID_MAIN'));

  if (!isMaster) {
    darkMonitor.classList.add('hidden');
    clearMonitor.classList.add('hidden');
    if (nodeMonitorInterval) {
      clearInterval(nodeMonitorInterval);
      nodeMonitorInterval = null;
    }
    return;
  }

  // Show monitors for the Master Architect
  darkMonitor.classList.remove('hidden');
  clearMonitor.classList.remove('hidden');

  const updateDiscoveredNodes = () => { 
    const discoveredNodes = [];
    for (let i = 0; i < safeStorage.length; i++) {
      const key = safeStorage.key(i);
      if (key && key.startsWith('5ir_node_profile_0x')) {
        try {
          const parsed = JSON.parse(safeStorage.getItem(key));
          if (parsed) discoveredNodes.push(parsed);
        } catch (e) {}
      }
    }

    // Generate HTML for standard dark monitor
    let htmlContent = '';
    if (discoveredNodes.length === 0) {
      htmlContent = `<div class="text-grey font-mono text-[8.5px]">[SCANNING] Awaiting connection handshakes from secondary high-frequency zombies...</div>`;
    } else {
      htmlContent = `<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5">`;
      discoveredNodes.forEach(node => {
        const balance = typeof node.baseBalance === 'number' ? node.baseBalance : 10.0;
        const flow = typeof node.flowRate === 'number' ? node.flowRate : 0.00000050;
        htmlContent += `
          <div class="bg-[#000000] border border-[#1c2d5a] p-2.5 rounded font-mono">
            <div class="text-cyan font-bold text-[9px] flex items-center justify-between">
              <span>👤 ${node.handle || 'Dynamic Node'}</span>
              <span class="pulse-beacon w-1.5 h-1.5 bg-[#39ff14]"></span>
            </div>
            <div class="text-gray-400 text-[8px] mt-1">ADDR: ${node.nodeId}</div>
            <div class="text-[#39ff14] text-[8px] font-bold mt-0.5">BALANCE: ${balance.toFixed(4)} $BRAID</div>
            <div class="text-gray-500 text-[7.5px]">MINT SPEED: +${flow.toFixed(8)}/s</div>
          </div>
        `;
      });
      htmlContent += `</div>`;
    }

    // Generate HTML for clear monitor
    let clearHtml = '';
    if (discoveredNodes.length === 0) {
      clearHtml = `<div class="text-gray-400 text-[8.5px]">[SCANNING] Awaiting dynamic handshakes...</div>`;
    } else {
      discoveredNodes.forEach(node => {
        const balance = typeof node.baseBalance === 'number' ? node.baseBalance : 10.0;
        clearHtml += `
          <div class="bg-white border border-gray-200 p-2 rounded-md shadow-sm">
            <div class="text-indigo-600 font-bold text-[8.5px] flex items-center justify-between">
              <span>👤 ${node.handle}</span>
              <span class="w-1.5 h-1.5 rounded-full bg-indigo-500"></span>
            </div>
            <div class="text-gray-500 text-[7.5px] mt-0.5">ADDR: ${node.nodeId}</div>
            <div class="text-green-600 text-[7.5px] font-bold">BALANCE: ${balance.toFixed(4)} $BRAID</div>
          </div>
        `;
      });
    }

    if (darkContainer) darkContainer.innerHTML = htmlContent;
    if (clearContainer) clearContainer.innerHTML = clearHtml;
  };

  updateDiscoveredNodes();

  // Clear previous interval if any and start fresh 3-second poll
  if (nodeMonitorInterval) clearInterval(nodeMonitorInterval);
  nodeMonitorInterval = setInterval(updateDiscoveredNodes, 3000);
}
window.runOmnipresentNodeMonitor = runOmnipresentNodeMonitor;

/**
 * APPLICATION 12: ECOSYSTEM ASSET INVENTORY & PORTFOLIO MONITOR
 * Independent standard tracking for currencies, hardware, apparel with interactive details view.
 */
function initAssetInventoryApp() {
  const tabButtons = document.querySelectorAll('.inventory-tab-btn');
  const listContainer = document.getElementById('inventory-list-container');
  const inspectorPlaceholder = document.getElementById('inventory-inspector-placeholder');
  const inspectorContent = document.getElementById('inventory-inspector-content');
  const detailTracePass = document.getElementById('inventory-detail-trace-pass');
  const detailName = document.getElementById('inventory-detail-name');
  const detailDesc = document.getElementById('inventory-detail-desc');
  const detailThermal = document.getElementById('inventory-detail-thermal');

  if (!listContainer) return;

  let activeTab = 'CURRENCY';
  let selectedAsset = null;

  // Real-time currency metrics mapping
  function getInventoryDataset(liveBalance) {
    return {
      CURRENCY: [
        { id: 'braid_core', name: '$BRAID Sovereign Token', qty: liveBalance.toFixed(4), status: 'SUPERFLUID_MINTING', details: 'Core utility fuel for the Vortex IDE processing environment. Sync frequency: 39,420 Hz.' },
        { id: 'btc_bridge', name: 'Bitcoin Liquidity Bridge', qty: (liveBalance * 0.0000142).toFixed(6), status: 'PARALLEL_STAGED', details: 'Legacy Layer-1 cross-chain allocation shunted securely via local cipher arrays.' },
        { id: 'sol_edge', name: 'Solana High-Velocity Pipeline', qty: (liveBalance * 0.00582).toFixed(4), status: 'ACTIVE_WORKER', details: 'Edge compute fuel route optimized for frictionless client-side web wallet transactions.' }
      ],
      HARDWARE: [
        { id: 'cydonia_cruiser', name: 'The Cydonia Braid Cruiser', qty: '1 Units', status: 'HANGAR_04_LOCKED', details: 'Features a seamless fluidic chrome Vortex Manifold displaying non-associative geometry and a non-moving Phonon-Polariton tracker headlight.' },
        { id: 'blackwell_cluster', name: 'Braid Blackwell Ultra B300', qty: '32 Nodes', status: 'UN_THROTTLED', details: 'Hardware-accelerated processing engine driving the 1.4M distributed network mesh logic.' },
        { id: 'flux_braid_spec', name: '5iR-HW-002 Flux Braid', qty: '1 Array', status: 'WEAVE_LOCKED', details: '24-Strand Braided Graphene-Polymer with Hexagonal Interlace Pattern. Sustains superconducting loop within Möbius shell with zero resistance and dQ_leak/dt = 0.00W flat heat loss.' }
      ],
      APPAREL: [
        { id: 'look_04_suit', name: 'Look 04 Space Suit Matrix', qty: '2 Sets', status: 'STABILIZED_0.00W', details: 'Graphene Nanofiber tactical base weave equipped with layered multi-bag utility pockets and signature Cyano-Luminescent piping.' },
        { id: 'architect_navy', name: 'Tailored Navy Suit Ensemble', qty: '1 Set', status: 'PHASE_LOCKED', details: 'Hardcoded master profile likeness configuration asset. Precompiled with active Hex smart glasses.' }
      ]
    };
  }

  // Active audio feedback
  function playClickSound() {
    try {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      if (AudioContextClass) {
        const audioCtx = new AudioContextClass();
        const osc = audioCtx.createOscillator();
        const gainNode = audioCtx.createGain();
        osc.connect(gainNode);
        gainNode.connect(audioCtx.destination);
        osc.type = 'sine';
        osc.frequency.setValueAtTime(1000, audioCtx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(600, audioCtx.currentTime + 0.05);
        gainNode.gain.setValueAtTime(0.02, audioCtx.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.05);
        osc.start();
        osc.stop(audioCtx.currentTime + 0.05);
      }
    } catch (e) {}
  }

  // Renders inventory active list
  function renderInventoryList() {
    const liveBalance = (window.braidState && typeof window.braidState.currentMinedBalance === 'number')
      ? window.braidState.currentMinedBalance
      : 5280.1254;

    const dataset = getInventoryDataset(liveBalance);
    const activeItems = dataset[activeTab];

    listContainer.innerHTML = activeItems.map(item => {
      const isSelected = selectedAsset && selectedAsset.id === item.id;
      const borderStyle = isSelected ? 'border-[#00f2fe] shadow-[0_0_8px_rgba(0,242,254,0.15)] bg-slate-950/40' : 'border-[#1c2d5a]';
      return `
        <div class="bg-black/80 border ${borderStyle} p-3 rounded-md cursor-pointer flex justify-between items-center transition-all hover:border-[#00f2fe]/50" onclick="selectInventoryAsset('${item.id}')">
          <div class="font-mono">
            <div class="text-[9px] text-white font-extrabold tracking-wide">${item.name}</div>
            <div class="text-[7.5px] text-[#9cb3c9]/80 mt-1 uppercase">ALLOCATION INDEX: ${item.id}</div>
          </div>
          <div class="text-right font-mono">
            <div class="text-[9.5px] text-[#39ff14] font-bold" id="inv-qty-${item.id}">${item.qty}</div>
            <div class="text-[6.5px] bg-slate-900 text-[#00f2fe] px-1.5 py-0.5 rounded mt-1 inline-block uppercase font-bold tracking-wide">${item.status}</div>
          </div>
        </div>
      `;
    }).join('');
  }

  // Handle asset click select
  window.selectInventoryAsset = (id) => {
    const liveBalance = (window.braidState && typeof window.braidState.currentMinedBalance === 'number')
      ? window.braidState.currentMinedBalance
      : 5280.1254;

    const dataset = getInventoryDataset(liveBalance);
    const item = dataset[activeTab].find(i => i.id === id);
    if (!item) return;

    selectedAsset = item;
    playClickSound();

    if (inspectorPlaceholder) inspectorPlaceholder.classList.add('hidden');
    if (inspectorContent) inspectorContent.classList.remove('hidden');

    if (detailName) detailName.textContent = item.name;
    if (detailDesc) detailDesc.textContent = item.details;
    if (detailThermal) detailThermal.textContent = `THERMAL LOSS PROFILE: dQ_leak/dt = 0.00W // INDEX: ${item.id.toUpperCase()}`;

    renderInventoryList();
  };

  // Wire tab clicks
  tabButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const tab = btn.getAttribute('data-inventory-tab');
      if (!tab) return;

      playClickSound();
      activeTab = tab;
      selectedAsset = null;

      // Swap button active styling elegantly
      tabButtons.forEach(b => {
        b.classList.remove('active', 'text-white', 'bg-[#5850ec]', 'border-[#00f2fe]');
        b.classList.add('text-[#9cb3c9]', 'bg-transparent', 'border-transparent');
      });
      btn.classList.add('active', 'text-white', 'bg-[#5850ec]', 'border-[#00f2fe]');
      btn.classList.remove('text-[#9cb3c9]', 'bg-transparent', 'border-transparent');

      // Reset inspector details
      if (inspectorPlaceholder) inspectorPlaceholder.classList.remove('hidden');
      if (inspectorContent) inspectorContent.classList.add('hidden');

      renderInventoryList();
    });
  });

  // Render first time
  renderInventoryList();

  // Continuous loop to update quantities in real-time under active CURRENCY tab
  let lastMinedBalance = -1;
  function continuousInventoryUpdate() {
    if (document.getElementById('app-asset-inventory') && !document.getElementById('app-asset-inventory').classList.contains('hidden')) {
      if (activeTab === 'CURRENCY') {
        const liveBalance = (window.braidState && typeof window.braidState.currentMinedBalance === 'number')
          ? window.braidState.currentMinedBalance
          : 5280.1254;
        if (liveBalance !== lastMinedBalance) {
          lastMinedBalance = liveBalance;
          const qtyBraid = document.getElementById('inv-qty-braid_core');
          const qtyBtc = document.getElementById('inv-qty-btc_bridge');
          const qtySol = document.getElementById('inv-qty-sol_edge');
          if (qtyBraid) qtyBraid.textContent = liveBalance.toFixed(4);
          if (qtyBtc) qtyBtc.textContent = (liveBalance * 0.0000142).toFixed(6);
          if (qtySol) qtySol.textContent = (liveBalance * 0.00582).toFixed(4);
        }
      }
    }
    requestAnimationFrame(continuousInventoryUpdate);
  }
  requestAnimationFrame(continuousInventoryUpdate);
}

/**
 * APPLICATION 13: PHASE-SYNC SECURE CHAT ROOM MATRIX
 * Independent cryptographic tunnel chat providing XOR-Salted bit-shifting encryption,
 * decryption keys overrides, dynamic prompt prefix matching, and simulated responses.
 */
function initPhaseSyncChatApp() {
  const passphraseInput = document.getElementById('phase-chat-passphrase');
  const clearBtn = document.getElementById('phase-chat-clear-btn');
  const messageLog = document.getElementById('phase-chat-log');
  const chatForm = document.getElementById('phase-chat-form');
  const chatInput = document.getElementById('phase-chat-input');
  const promptPrefix = document.getElementById('phase-chat-prompt-prefix');

  if (!messageLog) return;

  let chatPassphrase = '39420';
  let phaseMessages = [
    { id: 1, sender: "King Droid", node: "CORE_SYSTEM_LOG", rawText: "Fluidic OS synchronization protocol initialized at 39,420 Hz.", cipherText: "U0YyUkNfTUFQUklYXzM5NDIw", decrypted: true },
    { id: 2, sender: "Mars_Hangar_08", node: "NODE_0x7B9A2F", rawText: "Lattice-Lock update compiled. 1.4M Node Mesh holding stably.", cipherText: "T0xFUl9MVU1FX1NBRkU=", decrypted: false }
  ];

  // Helper sound synth
  function synthSound(type) {
    try {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      if (!AudioContextClass) return;
      const audioCtx = new AudioContextClass();
      const osc = audioCtx.createOscillator();
      const gainNode = audioCtx.createGain();
      osc.connect(gainNode);
      gainNode.connect(audioCtx.destination);

      if (type === 'beep') {
        osc.type = 'sine';
        osc.frequency.setValueAtTime(1000, audioCtx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(700, audioCtx.currentTime + 0.05);
        gainNode.gain.setValueAtTime(0.02, audioCtx.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.05);
        osc.start();
        osc.stop(audioCtx.currentTime + 0.05);
      } else if (type === 'send') {
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(500, audioCtx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(1200, audioCtx.currentTime + 0.15);
        gainNode.gain.setValueAtTime(0.04, audioCtx.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.15);
        osc.start();
        osc.stop(audioCtx.currentTime + 0.15);
      } else if (type === 'receive') {
        osc.type = 'sine';
        osc.frequency.setValueAtTime(880, audioCtx.currentTime);
        osc.frequency.setValueAtTime(1100, audioCtx.currentTime + 0.08);
        gainNode.gain.setValueAtTime(0.03, audioCtx.currentTime);
        gainNode.gain.setValueAtTime(0.02, audioCtx.currentTime + 0.08);
        gainNode.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.2);
        osc.start();
        osc.stop(audioCtx.currentTime + 0.2);
      }
    } catch (e) {}
  }

  // XOR cipher bit-shifting execution
  const executeXorCipher = (text, key) => {
    let result = '';
    for (let i = 0; i < text.length; i++) {
      const charCode = text.charCodeAt(i) ^ key.charCodeAt(i % key.length);
      result += String.fromCharCode(charCode);
    }
    return btoa(encodeURIComponent(result)).substring(0, 16);
  };

  // Profile Lookup helper
  function getCurrentUserIdentity() {
    const savedProfileRaw = safeStorage.getItem('5ir_authenticated_profile');
    if (savedProfileRaw) {
      try {
        const profile = JSON.parse(savedProfileRaw);
        return {
          sender: profile.handle || 'Architect',
          node: profile.nodeId || 'MOBIUS_BRAID_MAIN'
        };
      } catch (e) {}
    }
    return { sender: 'Architect', node: 'MOBIUS_BRAID_MAIN' };
  }

  // Render transcripts list
  function renderPhaseMessages() {
    messageLog.innerHTML = '';
    const isLightMode = document.body.classList.contains('bg-light');

    phaseMessages.forEach(msg => {
      const isSystem = msg.sender === 'King Droid' || msg.sender === 'Zombie_Node_42';
      
      const itemDiv = document.createElement('div');
      itemDiv.className = 'border-b border-dashed border-[#1c2d5a]/40 pb-2.5 my-1';

      // Meta header row
      const metaRow = document.createElement('div');
      metaRow.className = 'flex justify-between items-center text-[7.5pt] font-mono mb-1.5';

      const senderSpan = document.createElement('span');
      senderSpan.className = 'font-bold';
      
      const identity = getCurrentUserIdentity();
      const isOwnMessage = msg.sender === identity.sender;

      if (isSystem) {
        senderSpan.innerHTML = `<span class="text-[#ff0055] font-extrabold animate-pulse">${msg.sender}</span> <span class="text-gray-500 font-normal">[${msg.node}]</span>`;
      } else if (isOwnMessage) {
        senderSpan.innerHTML = `<span class="text-[#00f2fe] font-extrabold">${msg.sender}</span> <span class="text-gray-500 font-normal">[${msg.node}]</span>`;
      } else {
        senderSpan.innerHTML = `<span class="text-[#9cb3c9] font-bold">${msg.sender}</span> <span class="text-gray-500 font-normal">[${msg.node}]</span>`;
      }

      // Decrypt action trigger btn
      const decryptBtn = document.createElement('button');
      decryptBtn.type = 'button';
      decryptBtn.className = 'phase-decrypt-btn bg-transparent border-none text-[#5850ec] hover:text-[#00f2fe] cursor-pointer underline text-[7pt] font-mono transition-colors';
      decryptBtn.setAttribute('data-id', msg.id);
      decryptBtn.textContent = msg.decrypted ? '[MASK_CIPHER]' : '[DECRYPT_DATA]';

      metaRow.appendChild(senderSpan);
      metaRow.appendChild(decryptBtn);

      // Raw text/cipher render box
      const textDiv = document.createElement('div');
      textDiv.className = 'font-mono text-[8.5pt] pl-1 break-all';

      if (msg.decrypted) {
        textDiv.textContent = msg.rawText;
        textDiv.style.color = isLightMode ? '#0f172a' : '#ffffff';
      } else {
        textDiv.textContent = `[ENCRYPTED_PACKET]: ${msg.cipherText}`;
        textDiv.style.color = '#ff0055';
      }

      itemDiv.appendChild(metaRow);
      itemDiv.appendChild(textDiv);
      messageLog.appendChild(itemDiv);
    });

    // Auto scroll down
    messageLog.scrollTop = messageLog.scrollHeight;
  }

  // Bind Passphrase changer
  if (passphraseInput) {
    passphraseInput.addEventListener('input', () => {
      chatPassphrase = passphraseInput.value || '39420';
    });
  }

  // Bind Ledger purge btn
  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      synthSound('beep');
      phaseMessages = [
        { id: 1, sender: "King Droid", node: "CORE_SYSTEM_LOG", rawText: "Fluidic OS synchronization protocol initialized at 39,420 Hz.", cipherText: "U0YyUkNfTUFQUklYXzM5NDIw", decrypted: true }
      ];
      renderPhaseMessages();
    });
  }

  // Handle decryption delegate clicks inside log box
  messageLog.addEventListener('click', (e) => {
    const btn = e.target.closest('.phase-decrypt-btn');
    if (!btn) return;
    const msgId = Number(btn.getAttribute('data-id'));
    const msg = phaseMessages.find(m => m.id === msgId);
    if (msg) {
      synthSound('beep');
      msg.decrypted = !msg.decrypted;
      renderPhaseMessages();
    }
  });

  // Handle Form submission and simulated responses
  if (chatForm && chatInput) {
    chatForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const rawText = chatInput.value.trim();
      if (!rawText) return;

      chatInput.value = '';
      const identity = getCurrentUserIdentity();
      
      const computedCipher = executeXorCipher(rawText, chatPassphrase);

      const newMsg = {
        id: Date.now(),
        sender: identity.sender,
        node: identity.node,
        rawText: rawText,
        cipherText: computedCipher,
        decrypted: true // Sender naturally views their own raw inputs
      };

      synthSound('send');
      phaseMessages.push(newMsg);
      renderPhaseMessages();

      // Trigger simulated zombie response packet after 1.5 seconds
      setTimeout(() => {
        const zombieRaw = "Telemetry confirmed. Awaiting next core directive block.";
        const zombieCipher = executeXorCipher(zombieRaw, chatPassphrase);
        
        const zombieMsg = {
          id: Date.now() + 1,
          sender: "Zombie_Node_42",
          node: "NODE_0x8F1C3E",
          rawText: zombieRaw,
          cipherText: zombieCipher,
          decrypted: false // Arrives encrypted via the WASP data lane mesh
        };

        synthSound('receive');
        phaseMessages.push(zombieMsg);
        renderPhaseMessages();
      }, 1500);

    });
  }

  // Initialize view
  const userMeta = getCurrentUserIdentity();
  if (promptPrefix) {
    promptPrefix.textContent = `[${userMeta.sender}] >>`;
  }
  renderPhaseMessages();

  // Re-sync dynamic render if theme brightness changes
  document.getElementById('hud-brightness-btn')?.addEventListener('click', () => {
    setTimeout(renderPhaseMessages, 50);
  });
  document.getElementById('gateway-brightness-btn')?.addEventListener('click', () => {
    setTimeout(renderPhaseMessages, 50);
  });
}

// Append this constant to your FluxTelemetryDashboard layout script files
const HARDWARE_MATERIAL_SPEC = {
  identifier: "5iR-HW-002",
  coreFilament: "24-Strand Braided Graphene-Polymer",
  geometry: "Hexagonal Interlace Pattern",
  resistanceFloor: "0.00000000 Ohms [Superconducting Loop]",
  thermalProfile: "dQ_leak/dt = 0.00W Flat"
};

function initAdvancedFluxApp() {
  const fluxVelocityEl = document.getElementById('flux-velocity-display');
  const fluxPhaseEl = document.getElementById('flux-phase-display');
  const fluxNodesEl = document.getElementById('flux-nodes-display');
  const fluxToggleTorsionBtn = document.getElementById('flux-toggle-torsion-btn');
  const fluxScaleNodesBtn = document.getElementById('flux-scale-nodes-btn');
  const fluxLogsContainer = document.getElementById('flux-logs-container');
  const fluxCoherenceSlider = document.getElementById('flux-coherence-slider');
  const fluxCoherenceCeilingDisplay = document.getElementById('flux-coherence-ceiling-display');
  const fluxCoherenceValLabel = document.getElementById('flux-coherence-val-label');

  if (!window.useAdvancedFluxCore) {
    console.error("Advanced Flux Core Logic not loaded!");
    return;
  }

  // Subscribe to the Advanced Flux Core instance
  const fluxCore = window.useAdvancedFluxCore();
  
  // Set physical specs in DOM dynamically on load
  const specIdEl = document.getElementById('flux-spec-id');
  const specFilamentEl = document.getElementById('flux-spec-filament');
  const specGeometryEl = document.getElementById('flux-spec-geometry');
  const specResistanceEl = document.getElementById('flux-spec-resistance');
  const specThermalEl = document.getElementById('flux-spec-thermal');
  
  if (specIdEl) specIdEl.textContent = HARDWARE_MATERIAL_SPEC.identifier;
  if (specFilamentEl) specFilamentEl.textContent = HARDWARE_MATERIAL_SPEC.coreFilament;
  if (specGeometryEl) specGeometryEl.textContent = HARDWARE_MATERIAL_SPEC.geometry;
  if (specResistanceEl) specResistanceEl.textContent = HARDWARE_MATERIAL_SPEC.resistanceFloor;
  if (specThermalEl) specThermalEl.textContent = HARDWARE_MATERIAL_SPEC.thermalProfile;

  function renderFluxUI(state, logs) {
    if (fluxVelocityEl) fluxVelocityEl.textContent = state.activeLatticeVelocity.toFixed(8);
    if (fluxPhaseEl) fluxPhaseEl.textContent = `${state.activePhaseAngle.toFixed(2)}°`;
    if (fluxNodesEl) fluxNodesEl.textContent = state.synchronizedNodes.toLocaleString();
    
    if (fluxToggleTorsionBtn) {
      if (state.torsionLockActive) {
        fluxToggleTorsionBtn.textContent = '🔒 [TORSION_LOCK: ON]';
        fluxToggleTorsionBtn.className = 'flex-grow py-1.5 px-3 bg-[#5850ec] hover:bg-cyan-500 hover:text-black border border-indigo-500 text-white text-[8px] font-bold font-mono rounded transition-all uppercase';
      } else {
        fluxToggleTorsionBtn.textContent = '🔓 [TORSION_LOCK: OFF]';
        fluxToggleTorsionBtn.className = 'flex-grow py-1.5 px-3 bg-red-950 border border-red-500 text-red-400 text-[8px] font-bold font-mono rounded transition-all uppercase';
      }
    }

    if (fluxCoherenceCeilingDisplay) {
      fluxCoherenceCeilingDisplay.textContent = `${(state.coherenceCeiling * 100).toFixed(1)}% BASING`;
    }
    if (fluxCoherenceValLabel) {
      fluxCoherenceValLabel.textContent = `${(state.coherenceCeiling * 100).toFixed(2)}%`;
    }
    if (fluxCoherenceSlider) {
      fluxCoherenceSlider.value = state.coherenceCeiling;
    }

    if (fluxLogsContainer) {
      fluxLogsContainer.innerHTML = logs.map(log => {
        const isOverride = log.includes('OVERRIDE');
        const color = isOverride ? 'text-cyan font-bold' : 'text-[#9cb3c9]';
        return `<div class="${color} py-0.5 border-b border-indigo-950/20 last:border-b-0">${log}</div>`;
      }).join('');
      fluxLogsContainer.scrollTop = fluxLogsContainer.scrollHeight;
    }
  }

  // Subscribe to core updates
  const unsubscribe = fluxCore.subscribe(renderFluxUI);

  // Setup Event Listeners
  if (fluxToggleTorsionBtn) {
    fluxToggleTorsionBtn.addEventListener('click', () => {
      const isCurrentlyActive = fluxCore.state.torsionLockActive;
      fluxCore.dispatchFluxOverride('FORCE_TORSION_LOCK', { lockState: !isCurrentlyActive });
    });
  }

  if (fluxScaleNodesBtn) {
    fluxScaleNodesBtn.addEventListener('click', () => {
      fluxCore.dispatchFluxOverride('INJECT_ZOMBIE_NODES', { count: 42 });
    });
  }

  if (fluxCoherenceSlider) {
    fluxCoherenceSlider.addEventListener('input', (e) => {
      const val = parseFloat(e.target.value);
      fluxCore.dispatchFluxOverride('ADJUST_COHERENCE', { targetValue: val });
    });
  }

  // --- DYNAMIC DATABASE TELEMETRY & SANDBOX CONTROLLER INTERACTION ---
  function updateDbStatsUI() {
    const indexer = window.sinterDatabaseIndexer;
    if (!indexer) return;

    const stats = indexer.getStats();
    
    const sinteredEl = document.getElementById('db-stat-sintered');
    const latencyEl = document.getElementById('db-stat-latency');
    const purgedEl = document.getElementById('db-stat-purged-alert');
    const listEl = document.getElementById('db-active-indices-list');

    if (sinteredEl) sinteredEl.textContent = stats.totalSinteredDocuments.toLocaleString();
    if (latencyEl) latencyEl.textContent = stats.queryLookupLatency;
    if (purgedEl) purgedEl.textContent = `SECURITY: PURGED ${stats.evictedTrackingAttempts} LOW-INTEGRITY TRACKER SIGNATURES (< 0.5) NATIVELY`;

    // Render active local documents list inside Map Index
    if (listEl) {
      const records = indexer.getAllRecords();
      listEl.innerHTML = records.map(rec => {
        const isMaster = rec.role === 'ROOT_ARCHITECT';
        const color = isMaster ? '#ffd700' : (rec.integrityRating < 0.5 ? '#ff0055' : '#00f2fe');
        return `
          <div class="flex justify-between items-center text-[7.5px] border-b border-[#1c2d5a]/20 py-0.5 last:border-b-0">
            <span class="truncate max-w-[120px]" style="color: ${color}">[${rec.handle}]</span>
            <span class="text-gray-500 text-[6.5px]">${rec.compositeId.substring(0, 16)}...</span>
            <span class="font-bold shrink-0" style="color: ${rec.integrityRating < 0.5 ? '#ff0055' : '#39ff14'}">${rec.integrityRating.toFixed(2)}🌟</span>
          </div>
        `;
      }).join('');
    }
  }

  // Poll database statistics continuously
  setInterval(updateDbStatsUI, 1000);
  setTimeout(updateDbStatsUI, 100);

  // Event listeners for database sandbox playground actions
  const btnSinter = document.getElementById('db-btn-sinter');
  const btnSweep = document.getElementById('db-btn-sweep');
  const btnQuery = document.getElementById('db-btn-query');
  const feedbackEl = document.getElementById('db-action-feedback');

  if (btnSinter) {
    btnSinter.addEventListener('click', () => {
      const indexer = window.sinterDatabaseIndexer;
      if (!indexer) {
        alert("Database indexing engine is not fully compiled yet.");
        return;
      }

      const handleInput = document.getElementById('db-input-handle');
      const integritySelect = document.getElementById('db-input-integrity');
      
      const handle = handleInput ? handleInput.value.trim() : '';
      if (!handle) {
        alert("Please enter a valid node handle to sinter.");
        return;
      }

      const integrity = integritySelect ? parseFloat(integritySelect.value) : 1.0;
      const isMaster = handle.toLowerCase().includes('architect') || handle.toLowerCase().includes('mobius');

      const mockRecord = {
        nodeId: `NODE_${Math.sin(Date.now()).toString(16).substring(3, 8).toUpperCase()}`,
        handle: handle,
        isMaster: isMaster,
        braidBalance: isMaster ? 5280.1254 : Math.random() * 500,
        activeTaskStatus: integrity < 0.5 ? 'SUSPENDED' : 'VALIDATING',
        integrityRating: integrity
      };

      const result = indexer.insertAndIndexNodeRecord(mockRecord);
      if (feedbackEl) {
        feedbackEl.innerHTML = `<span class="text-[#39ff14] font-bold">[SINTERED]</span> Key compiled: <span class="text-[#00f2fe] select-all font-bold">${result.generatedKey}</span> (Entropy: ${result.entropyLeakage})`;
      }
      
      if (handleInput) handleInput.value = '';
      updateDbStatsUI();

      // Sound feedback synth
      try {
        const AudioContextClass = window.AudioContext || window.webkitAudioContext;
        if (AudioContextClass) {
          const audioCtx = new AudioContextClass();
          const osc = audioCtx.createOscillator();
          const gainNode = audioCtx.createGain();
          osc.connect(gainNode);
          gainNode.connect(audioCtx.destination);
          osc.type = 'sine';
          osc.frequency.setValueAtTime(800, audioCtx.currentTime);
          osc.frequency.exponentialRampToValueAtTime(1400, audioCtx.currentTime + 0.1);
          gainNode.gain.setValueAtTime(0.04, audioCtx.currentTime);
          gainNode.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.1);
          osc.start();
          osc.stop(audioCtx.currentTime + 0.1);
        }
      } catch (e) {}
    });
  }

  if (btnSweep) {
    btnSweep.addEventListener('click', () => {
      const indexer = window.sinterDatabaseIndexer;
      if (!indexer) return;

      const result = indexer.executeDatabaseMaintenanceSweep();
      if (feedbackEl) {
        feedbackEl.innerHTML = `<span class="text-[#ff0055] font-bold">[SWEEP]</span> Maintenance complete. ${result.evictionCount} corrupted tracking entries evicted instantly. (${result.systemState})`;
      }
      updateDbStatsUI();

      // Warning alarm buzzer sound synthesis
      try {
        const AudioContextClass = window.AudioContext || window.webkitAudioContext;
        if (AudioContextClass) {
          const audioCtx = new AudioContextClass();
          const osc = audioCtx.createOscillator();
          const gainNode = audioCtx.createGain();
          osc.connect(gainNode);
          gainNode.connect(audioCtx.destination);
          osc.type = 'sawtooth';
          osc.frequency.setValueAtTime(180, audioCtx.currentTime);
          gainNode.gain.setValueAtTime(0.05, audioCtx.currentTime);
          gainNode.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.25);
          osc.start();
          osc.stop(audioCtx.currentTime + 0.25);
        }
      } catch (e) {}
    });
  }

  if (btnQuery) {
    btnQuery.addEventListener('click', () => {
      const indexer = window.sinterDatabaseIndexer;
      if (!indexer) return;

      const queryInput = document.getElementById('db-input-query');
      const targetHandle = queryInput ? queryInput.value.trim() : '';

      if (!targetHandle) {
        alert("Enter target handle to perform fast index lookup.");
        return;
      }

      // If target contains '#' or is a status handle, execute advanced composite trie-tree indexing range finder!
      if (targetHandle.includes('#') || ['VALIDATING', 'ACTIVE_MONITORING', 'SUSPENDED', 'IDLE'].includes(targetHandle.toUpperCase())) {
        const parts = targetHandle.split('#');
        const status = parts[0].toUpperCase();
        const minIntegrity = parts[1] ? parseFloat(parts[1]) : 0.5;
        const rangeResult = indexer.fetchJobsByIntegrityRangeIndex(status, minIntegrity);
        if (feedbackEl) {
          feedbackEl.innerHTML = `<span class="text-[#39ff14] font-bold">[TRIE_RANGE_MATCH]</span> Method: <span class="text-cyan font-bold">${rangeResult.queryMethod}</span><br>Found: ${rangeResult.recordsFound} record(s). References:<br><span class="text-gray-400 select-all font-mono break-all text-[7.5px]">${rangeResult.references.join('<br>') || 'No exact matches found.'}</span>`;
        }
      } else {
        const result = indexer.fetchNodeByHandleIndex(targetHandle);
        if (feedbackEl) {
          if (result.error) {
            feedbackEl.innerHTML = `<span class="text-[#ff0055] font-bold">[QUERY_FAILED]</span> ${result.error} (Integrity score: ${result.integrityCheck.toFixed(2)})`;
          } else {
            const doc = result.document;
            feedbackEl.innerHTML = `<span class="text-[#00f2fe] font-bold">[MATCH_SECURED]</span> Key: <span class="text-white select-all font-bold">${doc.compositeId}</span><br>Role: ${doc.role} // Bal: ${doc.braidBalance.toFixed(2)} $BRAID // Integrity: ${doc.integrityRating}`;
          }
        }
      }
      
      if (queryInput) queryInput.value = '';

      // High-pitch ping sound feedback
      try {
        const AudioContextClass = window.AudioContext || window.webkitAudioContext;
        if (AudioContextClass) {
          const audioCtx = new AudioContextClass();
          const osc = audioCtx.createOscillator();
          const gainNode = audioCtx.createGain();
          osc.connect(gainNode);
          gainNode.connect(audioCtx.destination);
          osc.type = 'sine';
          osc.frequency.setValueAtTime(1600, audioCtx.currentTime);
          gainNode.gain.setValueAtTime(0.03, audioCtx.currentTime);
          gainNode.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.15);
          osc.start();
          osc.stop(audioCtx.currentTime + 0.15);
        }
      } catch (e) {}
    });
  }
}

/**
 * UPGRADED HIGH-LUMINESCENCE NEON PERSONAL DASHBOARD CONTROLLER (GlowSovereignDashboard)
 */
function initGlowSovereignDashboard() {
  const terminalLogsEl = document.getElementById('sovereign-terminal-logs');
  const chatMessagesEl = document.getElementById('sovereign-chat-messages');
  const chatFormEl = document.getElementById('sovereign-chat-form');
  const chatInputEl = document.getElementById('sovereign-chat-input');
  const cipherSaltInput = document.getElementById('sovereign-cipher-salt');
  const alertsContainer = document.getElementById('sovereign-alerts-container');
  const alertsTitle = document.getElementById('sovereign-alerts-title');
  const alertFeedEl = document.getElementById('sovereign-alert-feed');

  if (!terminalLogsEl || !chatMessagesEl || !alertFeedEl) return;

  // Master alert trigger arrays
  let alertFeed = [];
  let cipherSalt = '39420';
  let chatMessages = [
    { id: 1, sender: "King Droid", node: "CORE_SYSTEM_LOG", rawText: "Fluidic OS synchronization protocol active.", cipherText: "U0YyUkNfTUFQUklYXzM5NDIw", decrypted: true },
    { id: 2, sender: "Mars_Hangar_08", node: "NODE_0x7B9A2F", rawText: "Lattice-Lock updated across 1.4M mesh.", cipherText: "T0xFUl9MVU1FX_SAFE", decrypted: false }
  ];

  // Terminal background logs ticker state variables
  let terminalLogs = [
    '>> [SYSTEM_INIT] Sovereign state core online.',
    '>> [HARMONICS] Tuning loop reference to 39,420 Hz.'
  ];

  // Bit-shifting XOR encryption helper
  const executeXorCipher = (text, key) => {
    if (!text || !key) return '';
    let result = '';
    for (let i = 0; i < text.length; i++) {
      const charCode = text.charCodeAt(i) ^ key.charCodeAt(i % key.length);
      result += String.fromCharCode(charCode);
    }
    return btoa(encodeURIComponent(result)).substring(0, 16);
  };

  // Utility to fire native system security alerts instantly
  function triggerSecurityAlert(messageString) {
    const timestamp = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false });
    const alertObject = `[${timestamp}] ALERT: ${messageString}`;
    
    alertFeed = [alertObject, ...alertFeed.slice(0, 4)];
    terminalLogs = [`>> ALERT_TRIGGERED: ${messageString}`, ...terminalLogs.slice(0, 15)];
    
    renderLogs();
    renderAlerts();
    
    // Simulate simple diagnostic console notification chirp audio
    try {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      if (AudioContextClass) {
        const audioCtx = new AudioContextClass();
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.type = 'square';
        osc.frequency.setValueAtTime(880, audioCtx.currentTime); // High-frequency secure chime chirp
        gain.gain.setValueAtTime(0.05, audioCtx.currentTime);
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.start();
        osc.stop(audioCtx.currentTime + 0.15);
      }
    } catch (e) {
      console.warn("Audio Context blocked.");
    }
  }

  function renderLogs() {
    terminalLogsEl.innerHTML = terminalLogs.map(log => {
      const isAlert = log.includes('ALERT_TRIGGERED');
      const style = isAlert ? 'color: #ff0055; font-weight: bold;' : 'color: #a1b5cc;';
      return `<div style="${style}">${log}</div>`;
    }).join('');
    terminalLogsEl.scrollTop = terminalLogsEl.scrollHeight;
  }

  function renderAlerts() {
    if (alertFeed.length > 0) {
      alertsContainer.classList.add('alert-glow-active');
      if (alertsTitle) {
        alertsTitle.style.color = '#ff0055';
        alertsTitle.style.borderLeftColor = '#ff0055';
      }
      alertFeedEl.innerHTML = alertFeed.map(alert => `
        <div style="background-color: #000000; border-left: 3px solid #ff0055; padding: 6px; font-size: 7.5pt; color: #ffffff; line-height: 1.3; border-radius: 2px; margin-bottom: 6px;">
          ${alert}
        </div>
      `).join('');
    } else {
      alertsContainer.classList.remove('alert-glow-active');
      if (alertsTitle) {
        alertsTitle.style.color = '#a1b5cc';
        alertsTitle.style.borderLeftColor = '#1c2d5a';
      }
      alertFeedEl.innerHTML = `
        <div class="h-full flex flex-col justify-center items-center text-center p-4" style="margin-top: 50px;">
          <span style="font-size: 7.5pt; color: #a1b5cc; font-style: italic;">[ALL MESH LANES HOLDING SECURE]</span>
          <span style="font-size: 6.5pt; color: #39ff14; font-weight: bold; margin-top: 4px;" class="animate-pulse">SYNC COHERENCE FLAT AT 94.6%</span>
        </div>
      `;
    }
  }

  function renderChat() {
    chatMessagesEl.innerHTML = chatMessages.map(msg => {
      const isOwnMessage = msg.sender.includes('Architect') || msg.sender === 'MOBIUS_BRAID_MAIN';
      const color = isOwnMessage ? '#00f2fe' : '#a1b5cc';
      return `
        <div class="border-b border-dashed border-[#1c2d5a]/40 pb-1.5">
          <div class="flex justify-between items-center text-[7px] mb-0.5">
            <span style="color: ${color}; font-weight: bold;">${msg.sender} <span style="opacity: 0.4;">[${msg.node}]</span></span>
            <button onclick="window.handleSovereignToggleDecryption(${msg.id})" class="bg-transparent border-none text-[#5850ec] hover:text-[#00f2fe] cursor-pointer underline text-[7px] font-mono">[${msg.decrypted ? 'MASK' : 'DECRYPT'}]</button>
          </div>
          <div style="font-size: 8px; color: ${msg.decrypted ? '#ffffff' : '#ff0055'}; word-break: break-all;">
            ${msg.decrypted ? msg.rawText : `[ENCRYPTED_DATA_PACKET]: ${msg.cipherText}`}
          </div>
        </div>
      `;
    }).join('');
    chatMessagesEl.scrollTop = chatMessagesEl.scrollHeight;
  }

  window.handleSovereignToggleDecryption = function(id) {
    chatMessages = chatMessages.map(msg => {
      if (msg.id === id) {
        const nextState = !msg.decrypted;
        if (nextState) {
          triggerSecurityAlert(`Decrypted transaction payload exposed on Node ID: ${msg.node}`);
        }
        return { ...msg, decrypted: nextState };
      }
      return msg;
    });
    renderChat();
  };

  if (cipherSaltInput) {
    cipherSaltInput.addEventListener('input', () => {
      cipherSalt = cipherSaltInput.value || '39420';
    });
  }

  if (chatFormEl) {
    chatFormEl.addEventListener('submit', (e) => {
      e.preventDefault();
      const textVal = chatInputEl ? chatInputEl.value.trim() : '';
      if (!textVal) return;

      if (chatInputEl) chatInputEl.value = '';

      // Get authenticated details
      let handle = "Architect";
      let node = "MOBIUS_BRAID_MAIN";
      const savedProfileRaw = safeStorage.getItem('5ir_authenticated_profile');
      if (savedProfileRaw) {
        try {
          const profile = JSON.parse(savedProfileRaw);
          handle = profile.handle || "Architect";
          node = profile.nodeId || "MOBIUS_BRAID_MAIN";
        } catch (err) {}
      }

      const computedCipher = executeXorCipher(textVal, cipherSalt);
      const msgPacket = {
        id: Date.now(),
        sender: handle,
        node: node,
        rawText: textVal,
        cipherText: computedCipher,
        decrypted: true
      };

      chatMessages = [...chatMessages, msgPacket];
      terminalLogs = [`>> TRANSMIT_PACKET: Data string successfully shunted across mesh.`, ...terminalLogs.slice(0, 15)];
      
      renderChat();
      renderLogs();

      // Trigger simulated beep audio feedback on send
      try {
        const AudioContextClass = window.AudioContext || window.webkitAudioContext;
        if (AudioContextClass) {
          const audioCtx = new AudioContextClass();
          const osc = audioCtx.createOscillator();
          const gain = audioCtx.createGain();
          osc.type = 'triangle';
          osc.frequency.setValueAtTime(450, audioCtx.currentTime);
          osc.frequency.exponentialRampToValueAtTime(1200, audioCtx.currentTime + 0.15);
          gain.gain.setValueAtTime(0.04, audioCtx.currentTime);
          gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.15);
          osc.connect(gain);
          gain.connect(audioCtx.destination);
          osc.start();
          osc.stop(audioCtx.currentTime + 0.15);
        }
      } catch (e) {}

      // Autonomous zombie reply generation loop after 1200ms
      setTimeout(() => {
        const zombieRawText = "Telemetry verified. Superconducting loop holding flat at 0.00W.";
        const zombieMsg = {
          id: Date.now() + 1,
          sender: "Zombie_Node_42",
          node: "NODE_0x8F1C3E",
          rawText: zombieRawText,
          cipherText: executeXorCipher(zombieRawText, cipherSalt),
          decrypted: false
        };
        chatMessages = [...chatMessages, zombieMsg];
        renderChat();
        triggerSecurityAlert(`Encrypted packet intercept incoming from decentralized node: ${zombieMsg.node}`);
      }, 1200);
    });
  }

  // Initial renders
  renderLogs();
  renderAlerts();
  renderChat();
}

/**
 * APPLICATION 15: "SPATIAL SCANNER" IMAGE VECTOR CORES
 * Dual-coordinate spatial lens simulator analyzing physical vs. orbital properties.
 * Calibrated specifically for high-frequency synchronization loops.
 */
function initSpatialScannerApp() {
  const earthBtn = document.getElementById('scanner-mode-earth-btn');
  const spaceBtn = document.getElementById('scanner-mode-space-btn');
  const executeBtn = document.getElementById('scanner-execute-btn');
  const lensContainer = document.getElementById('scanner-lens-container');
  const crosshair = document.getElementById('scanner-crosshair');
  const line = document.getElementById('scanner-line');
  const coherenceVal = document.getElementById('scanner-coherence-val');
  const frictionVal = document.getElementById('scanner-friction-val');
  const gridVal = document.getElementById('scanner-grid-val');
  const matrixLog = document.getElementById('scanner-matrix-log');

  if (!executeBtn) return;

  let scanMode = 'EARTH_TACTICAL'; // EARTH_TACTICAL vs SPACE_ORBITAL
  let isScanning = false;

  // Translation helper
  const translateKey = (key, defaultText) => {
    return window.braidI18n?.t(key) || defaultText;
  };

  // Sound feedback synthesizer
  function playBeep(frequency, duration) {
    try {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      if (!AudioContextClass) return;
      const audioCtx = new AudioContextClass();
      const osc = audioCtx.createOscillator();
      const gainNode = audioCtx.createGain();
      osc.connect(gainNode);
      gainNode.connect(audioCtx.destination);
      osc.type = 'sine';
      osc.frequency.setValueAtTime(frequency, audioCtx.currentTime);
      gainNode.gain.setValueAtTime(0.03, audioCtx.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + duration);
      osc.start();
      osc.stop(audioCtx.currentTime + duration);
    } catch (e) {}
  }

  // Update button classes visually
  function updateModeButtons() {
    if (scanMode === 'EARTH_TACTICAL') {
      if (earthBtn) {
        earthBtn.className = 'scanner-toggle-btn text-[7pt] font-extrabold font-mono text-white px-2.5 py-1 rounded transition-all bg-[#5850ec] border border-[#00f2fe]';
      }
      if (spaceBtn) {
        spaceBtn.className = 'scanner-toggle-btn text-[7pt] font-extrabold font-mono text-white px-2.5 py-1 rounded transition-all bg-[#000000] border border-[#1c2d5a]';
      }
    } else {
      if (earthBtn) {
        earthBtn.className = 'scanner-toggle-btn text-[7pt] font-extrabold font-mono text-white px-2.5 py-1 rounded transition-all bg-[#000000] border border-[#1c2d5a]';
      }
      if (spaceBtn) {
        spaceBtn.className = 'scanner-toggle-btn text-[7pt] font-extrabold font-mono text-white px-2.5 py-1 rounded transition-all bg-[#5850ec] border border-[#00f2fe]';
      }
    }
  }

  earthBtn?.addEventListener('click', () => {
    if (isScanning) return;
    scanMode = 'EARTH_TACTICAL';
    updateModeButtons();
    playBeep(900, 0.08);
    if (matrixLog) {
      matrixLog.textContent = translateKey('app15.log_earth_mode', '[MODE_SHIFT]: Earth tactical tracking configured.');
    }
  });

  spaceBtn?.addEventListener('click', () => {
    if (isScanning) return;
    scanMode = 'SPACE_ORBITAL';
    updateModeButtons();
    playBeep(900, 0.08);
    if (matrixLog) {
      matrixLog.textContent = translateKey('app15.log_space_mode', '[MODE_SHIFT]: Deep-space radiometric mesh configured.');
    }
  });

  executeBtn?.addEventListener('click', () => {
    if (isScanning) return;
    
    isScanning = true;
    executeBtn.disabled = true;
    executeBtn.textContent = translateKey('app15.btn_processing', '[PROCESSING_GEOMETRY...]');
    
    if (matrixLog) {
      matrixLog.textContent = translateKey('app15.log_scanning', '>> INITIALIZING TOPOLOGICAL RE-SHAPE SWEEP...');
    }

    // Toggle scanning style states
    if (line) {
      line.classList.remove('hidden');
      line.classList.add('animate-scanline');
    }
    if (crosshair) {
      crosshair.textContent = '⌖ [SCANNING]';
      crosshair.style.color = '#ff0055'; // alertRed
      crosshair.style.textShadow = '0 0 12px #ff0055';
    }
    if (lensContainer) {
      lensContainer.style.borderColor = '#ff0055';
    }

    playBeep(500, 0.3);

    setTimeout(() => {
      isScanning = false;
      executeBtn.disabled = false;
      executeBtn.textContent = translateKey('app15.btn_execute', '[EXECUTE_TOPOLOGICAL_SCAN]');

      if (line) {
        line.classList.add('hidden');
        line.classList.remove('animate-scanline');
      }
      if (crosshair) {
        crosshair.textContent = '⌖';
        crosshair.style.color = '#00f2fe'; // lumeCyan
        crosshair.style.textShadow = '0 0 8px rgba(0, 242, 254, 0.53)';
      }
      if (lensContainer) {
        lensContainer.style.borderColor = '#1c2d5a';
      }

      playBeep(1200, 0.15);

      if (scanMode === 'EARTH_TACTICAL') {
        if (coherenceVal) coherenceVal.textContent = '94.6%';
        if (frictionVal) frictionVal.textContent = translateKey('app15.earth_friction', '0.00 Ohms [Architect Profile Locked]');
        if (gridVal) gridVal.textContent = translateKey('app15.earth_env', 'DIOR / LOOK_04 FABRIC MESH VALIDATED');
        if (matrixLog) {
          matrixLog.textContent = translateKey('app15.log_earth_success', '>> SUCCESS: High-prestige Earth profile vectors synchronized.');
        }
      } else {
        if (coherenceVal) coherenceVal.textContent = '98.4%';
        if (frictionVal) frictionVal.textContent = translateKey('app15.space_friction', '0.00 Watts [Thermal Leak Flat]');
        if (gridVal) gridVal.textContent = translateKey('app15.space_env', 'NEW CYDONIA RADIOMETRIC PROFILE ACTIVE');
        if (matrixLog) {
          matrixLog.textContent = translateKey('app15.log_space_success', '>> SUCCESS: Orbital coordinate matrix locked down.');
        }
      }
    }, 1500);
  });

  // Set initial buttons styling
  updateModeButtons();
}

/**
 * APPLICATION 16: LEGENDRIAN ALGORITHM WORK GRID
 * Implements dynamic randomized contract selection (3 slots from pool of 6), anti-cheat rotation patterns, exploit checks, and auto-batch rotation.
 */
function initLegendrianGridApp() {
  const jobsList = document.getElementById('legendrian-jobs-list');
  const idePlaceholder = document.getElementById('legendrian-ide-placeholder');
  const ideForm = document.getElementById('legendrian-ide-form');
  const activeJobIdDisplay = document.getElementById('legendrian-active-job-id');
  const statusDisplay = document.getElementById('legendrian-vortex-status');
  const codeEditor = document.getElementById('legendrian-code-editor');
  const consoleFeedback = document.getElementById('legendrian-console-feedback');
  const submitBtn = document.getElementById('legendrian-submit-btn');

  if (!jobsList) return;

  // Master Pool of all algorithmic engineering tasks (6 tasks)
  const MASTER_JOB_POOL = [
    { id: 'JOB_A1', title: 'Phase-Shift 39.42 kHz Sub-Harmonic', reward: 45.00, description: 'Inject a topological wave modifier into local node loops to hide transmission routes.', baseBoilerplate: 'function computeBraidShift() {\n  // Sync: 39420Hz\n' },
    { id: 'JOB_B2', title: 'Calibrate Hexagonal Flux Braid Topology', reward: 60.00, description: 'Model the geometric surface area matrix for 24-strand graphene filaments to enforce zero-entropy parameters.', baseBoilerplate: 'const ALPHA_0 = 39420;\n// dQ_leak/dt = 0.00W\n' },
    { id: 'JOB_C3', title: 'Stabilize Lie Bracket Transit Convergence', reward: 90.00, description: 'Resolve non-vanishing mathematical denominators to prevent data wave scattering.', baseBoilerplate: 'function resolveLieBracket(X, Y) {\n' },
    { id: 'JOB_D4', title: 'Sinter Cryptographic Wrapper Signatures', reward: 55.00, description: 'Compile incoming wallet state vectors into a Unique 5iR QR Token Matrix without storage leakage.', baseBoilerplate: 'function sinterWalletWrapper(balance) {\n' },
    { id: 'JOB_E5', title: 'Flush Ferrofluidic Droplet Splitting Matrix', reward: 70.00, description: 'Configure Virtual Magnetic cells to split paths when encountering rogue inspection sniffing passes.', baseBoilerplate: 'function splitFerrofluidDroplet(vector) {\n' },
    { id: 'JOB_F6', title: 'Synchronize Phonon-Polariton Trackers', reward: 85.00, description: 'Deploy non-moving lighthouse calculations to track road surface lattices with zero friction bounds.', baseBoilerplate: 'function syncPolaritonLighthouse() {\n' }
  ];

  // Persist completedJobIds in safeStorage
  let completedJobIds = new Set();
  try {
    const savedCompleted = safeStorage.getItem('legendrian_completed_jobs');
    if (savedCompleted) {
      completedJobIds = new Set(JSON.parse(savedCompleted));
    }
  } catch (err) {
    console.warn("Could not read completed job IDs:", err);
  }

  let activeJobs = [];
  let activeJob = null;
  let vortexStatus = 'AWAITING_SUBMISSION';
  let antiCheatSeed = '';

  function playSound(type) {
    try {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      if (!AudioContextClass) return;
      const audioCtx = new AudioContextClass();
      const osc = audioCtx.createOscillator();
      const gainNode = audioCtx.createGain();
      osc.connect(gainNode);
      gainNode.connect(audioCtx.destination);

      if (type === 'click') {
        osc.type = 'sine';
        osc.frequency.setValueAtTime(1000, audioCtx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(600, audioCtx.currentTime + 0.05);
        gainNode.gain.setValueAtTime(0.02, audioCtx.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.05);
        osc.start();
        osc.stop(audioCtx.currentTime + 0.05);
      } else if (type === 'success') {
        const freqs = [394.2, 591.3, 788.4, 1182.6];
        freqs.forEach((freq, idx) => {
          setTimeout(() => {
            const o = audioCtx.createOscillator();
            const g = audioCtx.createGain();
            o.connect(g);
            g.connect(audioCtx.destination);
            o.type = 'sine';
            o.frequency.setValueAtTime(freq, audioCtx.currentTime);
            g.gain.setValueAtTime(0.04, audioCtx.currentTime);
            g.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.3);
            o.start();
            o.stop(audioCtx.currentTime + 0.3);
          }, idx * 80);
        });
      } else if (type === 'failure') {
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(220, audioCtx.currentTime);
        osc.frequency.linearRampToValueAtTime(110, audioCtx.currentTime + 0.25);
        gainNode.gain.setValueAtTime(0.05, audioCtx.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.25);
        osc.start();
        osc.stop(audioCtx.currentTime + 0.25);
      }
    } catch (e) {}
  }

  // Select and generate 3 active jobs from master pool
  function generateNewJobBatch() {
    // Get those that are not completed
    let availablePool = MASTER_JOB_POOL.filter(job => !completedJobIds.has(job.id));
    
    // If solved all or less than 3 remain, loop back and flush
    if (availablePool.length < 3) {
      completedJobIds.clear();
      safeStorage.setItem('legendrian_completed_jobs', JSON.stringify([]));
      availablePool = MASTER_JOB_POOL;
    }

    // Shuffle and pick 3
    const shuffled = [...availablePool].sort(() => 0.5 - Math.random());
    activeJobs = shuffled.slice(0, 3).map(job => {
      const passSig = `0x${Math.random().toString(16).substring(2, 6).toUpperCase()}`;
      return {
        ...job,
        antiCheatPass: passSig,
        boilerplate: `${job.baseBoilerplate}  // Anti-Cheat Pass: ${passSig}\n}`
      };
    });

    activeJob = null;
    vortexStatus = 'AWAITING_SUBMISSION';

    // Hide IDE if open and show placeholder
    if (idePlaceholder) idePlaceholder.classList.remove('hidden');
    if (ideForm) ideForm.classList.add('hidden');

    renderJobsList();
    updateCompletedCountDisplay();
    updateVortexStatusUI();
  }

  function renderJobsList() {
    jobsList.innerHTML = activeJobs.map(job => {
      const isSolved = completedJobIds.has(job.id);
      const isSelected = activeJob && activeJob.id === job.id;
      
      const borderClass = isSolved 
        ? 'border-[#39ff14] bg-[#39ff14]/5 opacity-60 cursor-not-allowed' 
        : (isSelected ? 'border-[#00f2fe] bg-[#02050f]' : 'border-[#1c2d5a]');
        
      const textTitleColor = isSolved 
        ? 'text-[#39ff14]' 
        : (isSelected ? 'text-[#00f2fe]' : 'text-white');
        
      const titlePrefix = isSolved ? '✓ [COMPLETED] ' : '';

      return `
        <div class="bg-black/90 border ${borderClass} p-3 rounded-md cursor-pointer transition-all hover:border-[#00f2fe]/40" 
             onclick="${isSolved ? '' : `window.selectLegendrianJob('${job.id}')`}">
          <div class="flex justify-between items-center text-[8.5pt] font-mono font-bold mb-1">
            <span class="${textTitleColor}">${titlePrefix}${job.title}</span>
            <span class="${isSolved ? 'text-gray-500' : 'text-[#39ff14]'} text-[8pt] font-extrabold flex-shrink-0">+${job.reward.toFixed(2)} $BRAID</span>
          </div>
          <p class="text-[7.5pt] text-[#a1b5cc]/80 leading-relaxed font-mono m-0">${job.description}</p>
        </div>
      `;
    }).join('');
  }

  function updateCompletedCountDisplay() {
    const compValEl = document.getElementById('legendrian-completed-val');
    if (compValEl) {
      compValEl.textContent = `${completedJobIds.size} CONTRACTS`;
    }
  }

  window.selectLegendrianJob = (jobId) => {
    const job = activeJobs.find(j => j.id === jobId);
    if (!job) return;

    activeJob = job;
    vortexStatus = 'AWAITING_SUBMISSION';
    playSound('click');

    if (idePlaceholder) idePlaceholder.classList.add('hidden');
    if (ideForm) ideForm.classList.remove('hidden');

    if (activeJobIdDisplay) activeJobIdDisplay.textContent = job.id;
    if (codeEditor) {
      codeEditor.value = job.boilerplate;
      codeEditor.disabled = false;
    }
    
    updateVortexStatusUI();
    setConsoleFeedback(`[SYSTEM]: Core workspace configured. Salt parameter locked to ${antiCheatSeed || '0x39420'}`);
    renderJobsList();
  };

  function updateVortexStatusUI() {
    if (!statusDisplay) return;
    statusDisplay.textContent = `STATUS: ${vortexStatus}`;
    
    if (vortexStatus === 'SUCCESS') {
      statusDisplay.className = 'text-[#39ff14] font-extrabold tracking-wider uppercase';
      if (codeEditor) codeEditor.disabled = true;
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = '[TRANSMISSION APPROVED]';
        submitBtn.className = 'w-full py-2.5 bg-zinc-800 text-gray-500 font-mono text-[9px] font-bold cursor-not-allowed rounded uppercase tracking-wider border border-zinc-700';
      }
    } else if (vortexStatus === 'FAILED') {
      statusDisplay.className = 'text-[#ff0055] font-extrabold tracking-wider uppercase animate-pulse';
      if (codeEditor) codeEditor.disabled = false;
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.textContent = '[RE-TRANSMIT TO VORTEX AI]';
        submitBtn.className = 'w-full py-2.5 bg-[#ff0055] hover:bg-rose-500 text-white font-mono text-[9px] font-bold cursor-pointer rounded uppercase tracking-wider';
      }
    } else if (vortexStatus === 'SCANNING') {
      statusDisplay.className = 'text-yellow-400 font-extrabold tracking-wider uppercase animate-pulse';
      if (codeEditor) codeEditor.disabled = true;
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = '[VORTEX_AI_ANALYZING_CORE_MATRICES...]';
        submitBtn.className = 'w-full py-2.5 bg-yellow-950/40 border border-yellow-500/40 text-yellow-400 font-mono text-[9px] font-bold cursor-not-allowed rounded uppercase tracking-wider animate-pulse';
      }
    } else {
      statusDisplay.className = 'text-cyan font-bold tracking-wider uppercase';
      if (codeEditor) codeEditor.disabled = false;
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.textContent = '[TRANSMIT_TO_VORTEX_AI_CHECK]';
        submitBtn.className = 'w-full py-2.5 bg-[#5850ec] hover:bg-[#00f2fe] hover:text-black text-white font-mono text-[9px] font-bold cursor-pointer rounded uppercase tracking-wider';
      }
    }
  }

  function setConsoleFeedback(text, isError = false) {
    if (!consoleFeedback) return;
    const colorClass = isError ? 'text-[#ff0055] font-bold' : (vortexStatus === 'SUCCESS' ? 'text-[#39ff14]' : 'text-[#a1b5cc]');
    consoleFeedback.innerHTML = `<div class="${colorClass}">${text}</div>`;
  }

  // Set up 60s dynamic anti-cheat seed rotational loop
  function startAntiCheatDaemon() {
    setInterval(() => {
      const freshSeed = `SEED_0x${Math.random().toString(16).substring(2, 6).toUpperCase()}`;
      antiCheatSeed = freshSeed;
      if (activeJob && vortexStatus === 'AWAITING_SUBMISSION') {
        setConsoleFeedback(`[ANTI_CHEAT_DAEMON]: Validation hash seed rotated to ${freshSeed}. Code syntax updated.`);
      }
    }, 60000);
  }

  if (ideForm) {
    ideForm.addEventListener('submit', (e) => {
      e.preventDefault();
      if (!activeJob || vortexStatus === 'SCANNING' || vortexStatus === 'SUCCESS') return;

      const codeVal = codeEditor ? codeEditor.value : '';
      if (!codeVal.trim()) {
        alert("Workspace editor empty! Code base shunts are missing.");
        return;
      }

      vortexStatus = 'SCANNING';
      updateVortexStatusUI();
      playSound('click');
      setConsoleFeedback('[VORTEX_AI_CORE]: Auditing validation string patterns against dynamic structural parameters...');

      setTimeout(() => {
        const charactersAdded = codeVal.length - activeJob.boilerplate.length;
        const hasAntiCheatPass = codeVal.includes('// Anti-Cheat Pass:');

        if (charactersAdded > 45 && hasAntiCheatPass) {
          vortexStatus = 'SUCCESS';
          updateVortexStatusUI();
          playSound('success');
          setConsoleFeedback(`[VORTEX_AI_VERDICT]: VALIDATED. Token payment authorized: +${activeJob.reward.toFixed(2)} $BRAID added to ledger index.`);

          // 1. Add reward to global window state
          if (window.braidState) {
            window.braidState.currentMinedBalance += activeJob.reward;
          }

          // 2. Persist updated baseBalance inside active node vault storage
          const nodeAddress = window.braidState?.activeNodeAddress || 'MOBIUS_BRAID_MAIN';
          const storageKey = `5ir_vault_${nodeAddress}`;
          const rawVault = safeStorage.getItem(storageKey);
          if (rawVault) {
            try {
              const parsed = JSON.parse(rawVault);
              parsed.baseBalance = (parsed.baseBalance || 100.00000000) + activeJob.reward;
              parsed.lastSyncTimestamp = Date.now() / 1000;
              safeStorage.setItem(storageKey, JSON.stringify(parsed));
            } catch (err) {
              console.warn("Could not sync vault balance storage:", err);
            }
          }

          // 3. Save progress to completed list
          completedJobIds.add(activeJob.id);
          try {
            safeStorage.setItem('legendrian_completed_jobs', JSON.stringify([...completedJobIds]));
          } catch (e) {}

          // Trigger dynamic balance indicator update
          const balValEl = document.getElementById('legendrian-balance-val');
          if (balValEl && window.braidState) {
            balValEl.textContent = `${window.braidState.currentMinedBalance.toFixed(8)} $BRAID`;
          }

          renderJobsList();
          updateCompletedCountDisplay();

          // Notify any other balance metrics panels
          const shiftEvent = new CustomEvent('5ir-node-address-shifted', { detail: { nodeAddress } });
          window.dispatchEvent(shiftEvent);

          // Check if all 3 current active slots are solved
          const currentBatchIds = activeJobs.map(j => j.id);
          const solvedCountInBatch = currentBatchIds.filter(id => completedJobIds.has(id)).length;

          if (solvedCountInBatch >= 3) {
            setTimeout(() => {
              setConsoleFeedback('[ROTATION_TRIGGERED]: All active slots completed! Flushing workspace matrix and generating next random set...');
              generateNewJobBatch();
            }, 2000);
          }

        } else {
          vortexStatus = 'FAILED';
          updateVortexStatusUI();
          playSound('failure');
          if (charactersAdded <= 45) {
            setConsoleFeedback('[VORTEX_AI_VERDICT]: REJECTED. Script integrity checks failed. Modification length insufficient to unlock Legendrian Braid paths. (Write at least 45 characters of custom solution code inside the template!)', true);
          } else {
            setConsoleFeedback('[VORTEX_AI_VERDICT]: REJECTED. Anti-Cheat header comment was removed or tampered with. Please preserve "// Anti-Cheat Pass:" line.', true);
          }
        }
      }, 1500);

    });
  }

  // Smooth continuous high-frequency flow sync for balance indicator
  function syncLegendrianBalance() {
    if (document.getElementById('app-legendrian-grid') && !document.getElementById('app-legendrian-grid').classList.contains('hidden')) {
      const balanceSpan = document.getElementById('legendrian-balance-val');
      if (balanceSpan && window.braidState) {
        balanceSpan.textContent = `${window.braidState.currentMinedBalance.toFixed(8)} $BRAID`;
      }
    }
    requestAnimationFrame(syncLegendrianBalance);
  }
  requestAnimationFrame(syncLegendrianBalance);

  // Initial setup on boot
  generateNewJobBatch();
  startAntiCheatDaemon();
}

/**
 * Fuses Alpha Ledger Audit Cron + Gamma Web-Socket Torsion Link Simulations
 * Highlights known cross-chain directories and topological exchange mint actions.
 */
function initSovereignCoreServices() {
  console.log(">> [MOBIUS_CORE_SERVICES] Initializing Alpha Ledger Audit & Gamma WS Torsion Link...");

  const tickerSelect = document.getElementById('service-exchange-ticker');
  const amountInput = document.getElementById('service-exchange-amount');
  const sourceInput = document.getElementById('service-exchange-source');
  const targetSelect = document.getElementById('service-exchange-target');
  const exchangeBtn = document.getElementById('service-exchange-submit-btn');
  const auditBtn = document.getElementById('service-audit-trigger-btn');
  
  const directoryCountEl = document.getElementById('audit-directory-count');
  const directoryListEl = document.getElementById('audit-directory-list');
  const ledgerDbListEl = document.getElementById('audit-ledger-db-list');
  const logsFeedEl = document.getElementById('service-logs-feed');

  if (!logsFeedEl) return;

  // Local state replicas of Sovereign services schemas
  const KNOWN_WALLETS = [
    { address: "0x5iR_ARCHITECT_MAIN_MOBIUS", owner: "Architect (Möbius Braid)", role: "ROOT_ARCHITECT", integrity: 1.0 },
    { address: "0x5iR_KING_DROID_SECURE_NODE", owner: "King Droid Core", role: "SYSTEM_SENTINEL", integrity: 1.0 },
    { address: "0x5iR_MARS_HANGAR_08_POOL", owner: "Mars Hangar 08 Allocator", role: "LIQUIDITY_RESERVE", integrity: 0.9842 }
  ];

  const WALLET_DATABASE = new Map([
    ["0x5iR_ARCHITECT_MAIN_MOBIUS", { balance: 500000.00, securityFlag: "NOMINAL", auditSig: "GENESIS_SIG_0x39" }],
    ["0x5iR_KING_DROID_SECURE_NODE", { balance: 150000.00, securityFlag: "NOMINAL", auditSig: "SENTINEL_SIG_0x39" }],
    ["0x5iR_MARS_HANGAR_08_POOL", { balance: 80000.00, securityFlag: "NOMINAL", auditSig: "POOL_SIG_0x39" }]
  ]);

  const RATES = { SOL: 145.25, ETH: 2150.80, BTC: 45000.00 };
  let systemSeed = "SEED_0x39420";

  // Audio helper
  function playSynthSound(freq, type = 'sine', duration = 0.1) {
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;
      const actx = new AudioCtx();
      const osc = actx.createOscillator();
      const gain = actx.createGain();
      osc.connect(gain);
      gain.connect(actx.destination);
      osc.type = type;
      osc.frequency.setValueAtTime(freq, actx.currentTime);
      gain.gain.setValueAtTime(0.03, actx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, actx.currentTime + duration);
      osc.start();
      osc.stop(actx.currentTime + duration);
    } catch (e) {}
  }

  // Hash helper
  async function computeHashSig(address, balance) {
    const message = `${address}-${balance}-39420`;
    try {
      const msgBuffer = new TextEncoder().encode(message);
      const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);
      const hashArray = Array.from(new Uint8Array(hashBuffer));
      return hashArray.map(b => b.toString(16).padStart(2, '0')).join('').substring(0, 16).toUpperCase();
    } catch (err) {
      let hash = 0;
      for (let i = 0; i < message.length; i++) {
        hash = (hash << 5) - hash + message.charCodeAt(i);
        hash |= 0;
      }
      return '0x' + Math.abs(hash).toString(16).toUpperCase().substring(0, 12);
    }
  }

  function appendFeedLog(text, colorClass = 'text-[#39ff14]/85') {
    const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false });
    const logLine = document.createElement('div');
    logLine.className = `${colorClass} leading-relaxed select-all break-all`;
    logLine.innerHTML = `<span class="text-gray-500 font-bold">[${time}]</span> ${text}`;
    logsFeedEl.appendChild(logLine);
    logsFeedEl.scrollTop = logsFeedEl.scrollHeight;
  }

  // Populate UI
  function renderDirectory() {
    if (!directoryListEl) return;
    if (directoryCountEl) directoryCountEl.textContent = `${KNOWN_WALLETS.length} NODES VERIFIED`;

    directoryListEl.innerHTML = KNOWN_WALLETS.map(w => `
      <div class="flex justify-between items-center border-b border-[#39ff14]/10 py-1 last:border-b-0 text-[7px] text-gray-400">
        <span class="text-[#39ff14] font-bold truncate max-w-[120px]" title="${w.owner}">${w.owner}</span>
        <span class="text-gray-500 font-mono text-[6.5px]">${w.address.substring(0, 16)}...</span>
        <span class="text-gray-400 font-bold font-mono">${w.integrity.toFixed(4)}🌟</span>
      </div>
    `).join('');
  }

  async function renderLedgerDatabase() {
    if (!ledgerDbListEl) return;
    
    // Sync current logged-in node dynamic balance to shown list
    const userNodeAddress = window.braidState?.activeNodeAddress || "MOBIUS_BRAID_MAIN";
    const userBalance = window.braidState?.currentMinedBalance || 100.0;
    
    if (!WALLET_DATABASE.has(userNodeAddress)) {
      WALLET_DATABASE.set(userNodeAddress, { balance: userBalance, securityFlag: "NOMINAL", auditSig: "SYNCING" });
    } else {
      WALLET_DATABASE.get(userNodeAddress).balance = userBalance;
    }

    const rowsHtml = [];
    for (const [address, data] of WALLET_DATABASE.entries()) {
      const isKnown = KNOWN_WALLETS.some(w => w.address === address);
      const style = data.securityFlag === "NOMINAL" ? "text-cyan" : "text-magenta font-extrabold animate-pulse";
      const shortAddr = address.length > 20 ? `${address.substring(0, 14)}...` : address;
      
      const sig = data.auditSig === "SYNCING" ? await computeHashSig(address, data.balance) : data.auditSig;
      data.auditSig = sig;

      rowsHtml.push(`
        <div class="flex justify-between items-center border-b border-[#39ff14]/5 py-1 last:border-b-0 text-[7.2px]">
          <span class="text-gray-400 truncate max-w-[110px]" title="${address}">${shortAddr}</span>
          <span class="text-white font-bold">${data.balance.toFixed(2)} $BRAID</span>
          <span class="text-gray-500 font-mono text-[6.5px]" title="SHA256 Hash signature: ${sig}">${sig.substring(0, 8)}</span>
          <span class="text-[6.5px] px-1 rounded bg-black border ${data.securityFlag === "NOMINAL" ? 'border-[#39ff14]/20 text-[#39ff14]' : 'border-rose-950 text-magenta'}">${data.securityFlag}</span>
        </div>
      `);
    }
    ledgerDbListEl.innerHTML = rowsHtml.join('');
  }

  // WebSocket ticker simulation
  setInterval(() => {
    systemSeed = `SEED_0x${Math.floor(Math.random() * 65536).toString(16).toUpperCase()}`;
    const pings = ["NODE_CYDONIA_08", "NODE_VINEYARD_X2", "0x5iR_KING_DROID_SECURE_NODE", "EXTERNAL_USER_NODE"];
    const pingSender = pings[Math.floor(Math.random() * pings.length)];
    
    appendFeedLog(`[ws:port 3942] Handshake ping validated from <span class="text-[#39ff14] font-bold">${pingSender}</span> // seed: ${systemSeed}`, "text-cyan/85");
  }, 12000);

  // Bind Swap action
  if (exchangeBtn) {
    exchangeBtn.addEventListener('click', async () => {
      const ticker = tickerSelect ? tickerSelect.value : 'SOL';
      const amount = amountInput ? parseFloat(amountInput.value) : 0;
      const source = sourceInput ? sourceInput.value.trim() : '0xPhantom_Sol_Target_Alpha';
      const targetOption = targetSelect ? targetSelect.value : 'DYNAMIC_USER_NODE';

      let targetAddress = targetOption;
      if (targetOption === 'DYNAMIC_USER_NODE') {
        targetAddress = window.braidState?.activeNodeAddress || 'MOBIUS_BRAID_MAIN';
      }

      if (isNaN(amount) || amount <= 0) {
        alert("Enter a valid positive multi-chain asset amount to mint.");
        return;
      }

      playSynthSound(784, 'triangle', 0.15);
      appendFeedLog(`[EXCHANGE] Request compiled: Swap ${amount} ${ticker} for $BRAID targeting receiver node: ${targetAddress}...`, "text-cyan");

      // Rate conversions
      const rate = RATES[ticker];
      const braidPayout = amount * rate;

      setTimeout(async () => {
        // Create or update database state
        if (!WALLET_DATABASE.has(targetAddress)) {
          WALLET_DATABASE.set(targetAddress, { balance: 0, securityFlag: "NOMINAL", auditSig: "INIT" });
        }
        
        const record = WALLET_DATABASE.get(targetAddress);
        record.balance += braidPayout;
        record.auditSig = await computeHashSig(targetAddress, record.balance);

        // Also update actual live stream balance if user targeted their active login node
        if (targetOption === 'DYNAMIC_USER_NODE' && window.braidState) {
          window.braidState.currentMinedBalance += braidPayout;
          const userProfileRaw = safeStorage.getItem('5ir_authenticated_profile');
          if (userProfileRaw) {
            try {
              const p = JSON.parse(userProfileRaw);
              p.baseBalance = (p.baseBalance || 100.0) + braidPayout;
              safeStorage.setItem('5ir_authenticated_profile', JSON.stringify(p));
            } catch(e){}
          }
        }

        playSynthSound(1046, 'sine', 0.2);
        appendFeedLog(`[SUCCESS] Settled! Generated <span class="text-[#39ff14] font-bold">${braidPayout.toFixed(4)} $BRAID</span> for ${targetAddress}. (Energy Loss: dQ_leak/dt = 0.00W Flat)`, "text-[#39ff14]");
        
        renderLedgerDatabase();
      }, 800);
    });
  }

  // Bind Audit Cron Action
  if (auditBtn) {
    auditBtn.addEventListener('click', () => {
      playSynthSound(440, 'sawtooth', 0.25);
      appendFeedLog(`[CRON_AUDIT] Initiating automated ledger matrix sweep across verified heap addresses...`, "text-yellow-400");
      
      auditBtn.disabled = true;
      auditBtn.textContent = "[AUDITING LEDGER STOCKS...]";

      setTimeout(async () => {
        let scanned = 0;
        let quarantined = 0;

        for (const [address, data] of WALLET_DATABASE.entries()) {
          scanned++;
          const isKnown = KNOWN_WALLETS.some(w => w.address === address);
          
          // Exploit check: If balance exceeds 50k and not listed in known verified directory, trigger macro exploit flags!
          if (!isKnown && data.balance > 50000.0) {
            data.securityFlag = "THROTTLED_SUSPECTED_MACRO_EXPLOIT";
            quarantined++;
            appendFeedLog(`[FIREWALL_ALERT] Node address: ${address.substring(0, 16)}... balance spike (${data.balance.toFixed(1)} $BRAID) exceeds public bounds without verified directory profile. Shunting to sandbox isolation.`, "text-magenta font-extrabold animate-pulse");
          } else {
            data.auditSig = await computeHashSig(address, data.balance);
          }
        }

        playSynthSound(880, 'sine', 0.15);
        auditBtn.disabled = false;
        auditBtn.textContent = "🔍 RUN CRYPTOGRAPHIC CRON LEDGER AUDIT";

        appendFeedLog(`[AUDIT_COMPLETE] Scanned: ${scanned} Heap entries. Quarantined: ${quarantined} Malicious anomalies. dQ_leak/dt = 0.00 Watts Flat.`, "text-[#39ff14]");
        renderLedgerDatabase();
      }, 1200);
    });
  }

  // Initialize display lists
  renderDirectory();
  renderLedgerDatabase();
  
  appendFeedLog("Sovereign Core Services online. Listening over WS protocol on port 3942.", "text-[#39ff14]");
}

/**
 * APPLICATION 17: AERO-FLUX CONFIGURATION SPACE NAVIGATOR
 * Direct high-frequency visualizer canvas for non-associative configuration wave curves.
 */
function initAeroFluxNavigator() {
  const canvas = document.getElementById('aero-flux-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  
  let animationFrameId;
  let rotationAngle = 0;
  
  const NAV_THEME = {
    voidBlack: '#010206',
    cyberNavy: '#040d21',
    lumeCyan: '#00f2fe',
    neonSafe: '#39ff14',
    alertRed: '#ff0055',
    deepBorder: '#1c2d5a',
    textSteel: '#a1b5cc'
  };

  const latencyDisplay = document.getElementById('aero-flux-latency');
  const bufferStateDisplay = document.getElementById('aero-flux-buffer-state');

  function resize() {
    const parent = canvas.parentElement;
    if (parent) {
      const w = parent.clientWidth || 280;
      const h = 130;
      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w;
        canvas.height = h;
      }
    }
  }
  
  resize();
  window.addEventListener('resize', resize);
  
  // High-frequency render loop mimicking neural buffer bypassing DOM overheads
  function renderLatticeFrame() {
    if (canvas.offsetParent === null) {
      animationFrameId = requestAnimationFrame(renderLatticeFrame);
      return;
    }
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Render background radar mesh grid-lines
    ctx.strokeStyle = `${NAV_THEME.deepBorder}33`;
    ctx.lineWidth = 1;
    for (let i = 0; i < canvas.width; i += 20) {
      ctx.beginPath(); ctx.moveTo(i, 0); ctx.lineTo(i, canvas.height); ctx.stroke();
    }
    for (let j = 0; j < canvas.height; j += 20) {
      ctx.beginPath(); ctx.moveTo(0, j); ctx.lineTo(canvas.width, j); ctx.stroke();
    }

    // Generate and project the 5iR non-associative configuration curves
    ctx.strokeStyle = NAV_THEME.lumeCyan;
    
    const isLightMode = document.body.classList.contains('bg-light');
    if (!isLightMode) {
      ctx.shadowBlur = 10;
      ctx.shadowColor = NAV_THEME.lumeCyan;
    } else {
      ctx.shadowBlur = 0;
    }
    ctx.lineWidth = 1.5;

    ctx.beginPath();
    for (let x = 0; x < canvas.width; x++) {
      // Core wave formula driven directly by the 39,420 Hz sub-harmonic variable
      const y = canvas.height / 2 + 
        Math.sin((x + rotationAngle) * 0.05) * 20 * Math.cos((x - rotationAngle) * 0.02);
      
      if (x === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.stroke();
    ctx.shadowBlur = 0; // reset
    
    rotationAngle += 4; // Velocity tracking factor
    animationFrameId = requestAnimationFrame(renderLatticeFrame);
  }

  // Jitter latency slightly for high-status realism
  setInterval(() => {
    if (latencyDisplay) {
      const jitterVal = 0.00015 + Math.random() * 0.0001;
      latencyDisplay.textContent = `${jitterVal.toFixed(4)} ms`;
    }
    if (bufferStateDisplay) {
      const states = ['SYNC_STABLE', 'STATIONARY_ALIGNMENT', 'TOPOLOGICAL_FLUX'];
      const randomState = states[Math.floor(Math.random() * states.length)];
      bufferStateDisplay.textContent = randomState;
    }
  }, 3000);

  renderLatticeFrame();

  // Also hook global tab switches to recalc size
  document.querySelectorAll('.hud-tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      if (btn.getAttribute('data-tab') === 'aero-flux') {
        setTimeout(resize, 50);
      }
    });
  });
}

/**
 * APPLICATION 18: BIO-RESONANCE HARDWARE BRIDGE CONTROLLER
 * Renders interactive EKG pulse monitoring, coordinates BLE sensors, and tracks smart glass gaze deflections.
 */
function initBioResonanceApp() {
  console.log(">> [BIO_RESONANCE] Initializing Biometric Telemetry & Gaze Tracking Bridge...");

  const statusEl = document.getElementById('bio-bridge-status');
  const hrvValEl = document.getElementById('bio-hrv-val');
  const heartRateEl = document.getElementById('bio-heart-rate-val');
  const bleBtn = document.getElementById('bio-ble-sync-btn');
  const calibrationBtn = document.getElementById('bio-calibration-btn');

  const ekgCanvas = document.getElementById('bio-ekg-canvas');
  const targetRect = document.getElementById('bio-target-rect');
  const targetCrosshair = document.getElementById('bio-target-crosshair');
  const gazeCoords = document.getElementById('bio-gaze-coords');

  // EKG Waveform State
  let ekgProgress = 0;
  let ekgHistory = [];
  let audioCtxInstance = null;

  function playBeep(freq, type = 'sine', duration = 0.1) {
    try {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      if (!AudioContextClass) return;
      if (!audioCtxInstance) audioCtxInstance = new AudioContextClass();
      const osc = audioCtxInstance.createOscillator();
      const gainNode = audioCtxInstance.createGain();
      osc.connect(gainNode);
      gainNode.connect(audioCtxInstance.destination);
      osc.type = type;
      osc.frequency.setValueAtTime(freq, audioCtxInstance.currentTime);
      gainNode.gain.setValueAtTime(0.02, audioCtxInstance.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.001, audioCtxInstance.currentTime + duration);
      osc.start();
      osc.stop(audioCtxInstance.currentTime + duration);
    } catch (e) {}
  }

  // WebHID eye gaze tracking binding
  if (targetRect && targetCrosshair) {
    targetRect.addEventListener('mousemove', (e) => {
      const rect = targetRect.getBoundingClientRect();
      const x = Math.floor(e.clientX - rect.left);
      const y = Math.floor(e.clientY - rect.top);
      
      if (window.bioResonanceBridge) {
        window.bioResonanceBridge.currentBioMetricState.gazeCoordinateX = x;
        window.bioResonanceBridge.currentBioMetricState.gazeCoordinateY = y;
      }
      
      targetCrosshair.style.left = `${x}px`;
      targetCrosshair.style.top = `${y}px`;
      
      if (gazeCoords) gazeCoords.textContent = `X: ${x} / Y: ${y}`;
    });
  }

  // WebBluetooth sync event binding
  if (bleBtn) {
    bleBtn.addEventListener('click', async () => {
      if (bleBtn.disabled) return;
      bleBtn.disabled = true;
      bleBtn.textContent = '[CONNECTING BIO-BLE...]';
      playBeep(880, 'sine', 0.15);

      if (window.bioResonanceBridge && typeof window.bioResonanceBridge.initializeBioBluetoothSync === 'function') {
        const result = await window.bioResonanceBridge.initializeBioBluetoothSync();
        
        if (result.error) {
          bleBtn.textContent = getPredefinedTranslation('app18.btn_ble_fallback');
          bleBtn.className = "w-full py-2 bg-yellow-950/40 border border-yellow-500/40 text-yellow-400 text-[8.5px] font-bold tracking-wider rounded transition-all uppercase animate-pulse";
          if (statusEl) {
            statusEl.textContent = 'SIMULATED_BIO_EMULATION';
            statusEl.className = 'text-yellow-400 font-bold animate-pulse';
          }
          playBeep(523.25, 'triangle', 0.25);
        } else {
          bleBtn.textContent = getPredefinedTranslation('app18.btn_ble_sync_active');
          bleBtn.className = "w-full py-2 bg-emerald-950 border border-emerald-500 text-emerald-400 text-[8.5px] font-bold tracking-wider rounded transition-all uppercase animate-pulse";
          if (statusEl) {
            statusEl.textContent = 'BLE_BIO_SYNC_ACTIVE';
            statusEl.className = 'text-[#39ff14] font-bold animate-pulse';
          }
          playBeep(1046.50, 'sine', 0.2);
        }
      }
    });
  }

  // Recalibrate trigger
  if (calibrationBtn) {
    calibrationBtn.addEventListener('click', () => {
      playBeep(1200, 'sine', 0.1);
      calibrationBtn.textContent = '[RE-CALIBRATING SMART GLASSES...]';
      calibrationBtn.disabled = true;
      setTimeout(() => {
        calibrationBtn.textContent = '[RE-CALIBRATE SMART GLASS HANDSHAKE]';
        calibrationBtn.disabled = false;
        playBeep(1500, 'sine', 0.15);
      }, 1000);
    });
  }

  // Setup standard global event listener to catch updates
  window.addEventListener('5ir-biometric-update', (e) => {
    if (e.detail) {
      const data = e.detail;
      if (hrvValEl) hrvValEl.textContent = data.heartRateVariability.toFixed(8);
      if (heartRateEl) heartRateEl.textContent = `${data.simulatedHeartRate} BPM`;
    }
  });

  // --- EKG PHYSIOLOGICAL WAVEFORM CANVAS ---
  if (ekgCanvas) {
    const ctx = ekgCanvas.getContext('2d');
    const ekgCycleValue = (progress) => {
      if (progress < 0.1) return 0;
      if (progress < 0.2) {
        const pProg = (progress - 0.1) / 0.1;
        return Math.sin(pProg * Math.PI) * 4;
      }
      if (progress < 0.25) return 0;
      if (progress < 0.28) {
        const qProg = (progress - 0.25) / 0.03;
        return -Math.sin(qProg * Math.PI) * 3;
      }
      if (progress < 0.33) {
        const rProg = (progress - 0.28) / 0.05;
        return Math.sin(rProg * Math.PI) * 32;
      }
      if (progress < 0.36) {
        const sProg = (progress - 0.33) / 0.03;
        return -Math.sin(sProg * Math.PI) * 7;
      }
      if (progress < 0.45) return 0;
      if (progress < 0.6) {
        const tProg = (progress - 0.45) / 0.15;
        return Math.sin(tProg * Math.PI) * 6;
      }
      return 0;
    };

    const renderEkgFrame = () => {
      if (ekgCanvas.offsetParent === null) {
        requestAnimationFrame(renderEkgFrame);
        return;
      }

      const w = ekgCanvas.parentElement.clientWidth || 280;
      const h = 90;
      if (ekgCanvas.width !== w || ekgCanvas.height !== h) {
        ekgCanvas.width = w;
        ekgCanvas.height = h;
      }

      ctx.clearRect(0, 0, w, h);

      const hr = (window.bioResonanceBridge && window.bioResonanceBridge.currentBioMetricState)
        ? window.bioResonanceBridge.currentBioMetricState.simulatedHeartRate
        : 72;

      // Progress advances proportional to heart rate
      ekgProgress += hr / 3600;
      if (ekgProgress >= 1.0) {
        ekgProgress = 0;
        // Synthesize soft physiological thump sound occasionally
        if (Math.random() > 0.4) {
          playBeep(85, 'triangle', 0.08);
        }
      }

      // Store EKG value history
      const currentYValue = ekgCycleValue(ekgProgress);
      ekgHistory.push(currentYValue);
      if (ekgHistory.length > w) {
        ekgHistory.shift();
      }

      // Draw green glowing EKG beam
      ctx.strokeStyle = '#10b981';
      ctx.lineWidth = 1.8;
      ctx.shadowBlur = 8;
      ctx.shadowColor = '#10b981';
      ctx.beginPath();

      for (let x = 0; x < ekgHistory.length; x++) {
        const value = ekgHistory[x];
        const py = h / 2 - value;
        if (x === 0) ctx.moveTo(x, py);
        else ctx.lineTo(x, py);
      }
      ctx.stroke();
      ctx.shadowBlur = 0; // reset

      requestAnimationFrame(renderEkgFrame);
    };
    renderEkgFrame();
  }

  // Setup resize listeners and layout updates
  document.querySelectorAll('.hud-tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      if (btn.getAttribute('data-tab') === 'bio-resonance') {
        setTimeout(() => {
          window.dispatchEvent(new Event('resize'));
        }, 50);
      }
    });
  });
}

})();
