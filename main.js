(function() {
/**
 * 5iR Core Matrix Command Dashboard - Unified Coordinator Deck
 * Synchronized Clock: 39,420 Hz // Global Coherence: 94.62% Locked
 * Consolidated single-file engine running all master applications.
 * Zero lag, optimized footprint, zero relative checkout conflicts.
 */

const safeStorage = window.safeStorage || window.localStorage;
window.braidAI = window.miniappsAI;
window.braidI18n = window.miniappI18n;

let lastActiveTab = 'vortex-retain';
window.braidState = { 
  currentMinedBalance: 100.00000000, 
  activeNodeAddress: 'MOBIUS_BRAID_MAIN', 
  flowRate: 0.00039420,
  asymmetricMultiplier: 1.0
};

const LOCAL_TRANSLATIONS = {
  "system.ping": "SYSTEM SECURE // BRAID_CLUSTER_SQX", "system.title": "Braid", "system.frequency": "FREQUENCY",
  "system.thermal": "THERMAL FOOTPRINT", "system.active_mesh": "ACTIVE MESH", "system.coherence": "COHERENCE",
  "system.lead": "Sovereign Lead", "system.query_id": "QUERY ID", "gateway.btn_sovereign": "[VERIFY_SOVEREIGN_CREDENTIALS]",
  "gateway.btn_demo": "⚡ [ENGAGE_PUBLIC_DEMO_NODE] (ONE-CLICK ACCESS)",
  "app1.title": "APP 01: \"VORTEX-RETAIN\" SKELETAL MATRIX SIMULATOR", "app1.age_lbl": "USER AGE (YEARS)",
  "app1.exercise_lbl": "EXERCISE FREQUENCY (HOURS/WEEK)", "app1.gravity_lbl": "GRAVITATIONAL STRAIN (G-FORCE)",
  "app1.export_btn": "[EXPORT_SKELETAL_RETENTION_REPORT]", "app2.title": "APP 02: \"BRAID-SHIELD\" FERROFLUID CRYPTO LEDGER",
  "app2.balance_title": "LEDGER STATE VECTOR", "app2.balance_val": "80.00% Collective Core Completion State",
  "app2.exploit_btn": "[RUN_EXPLOIT_TEST_SIMULATION]", "app3.title": "APP 03: \"AERO-INVERT\" URBAN ACOUSTIC CONVERSION ENGINE",
  "app3.city_lbl": "SELECT URBAN SECTOR", "app3.db_lbl": "AMBIENT NOISE THRESHOLD (dBA)", "app3.mode_lbl": "ACOUSTIC INVERSION SYSTEM",
  "app9.title": "APP 09: \"WALLET-WRAPPER\" CRYPTOGRAPHIC ISOLATION MATRIX", "app9.seed_lbl": "1. ENTER RAW WALLET SEED INTRINSIC STRING",
  "app9.pass_lbl": "2. SET MASTER SECURE ENCRYPTION PASSWORD", "app9.charts_title": "APP 09 // CHARTS-TELEMETRY // High-Frequency Yield Analysis",
  "app9.mesh_velocity": "MESH_VELOCITY_CLOCK", "app9.compute_coherence": "COMPUTE_COHERENCE", "profile.header": "COHERENT IDENTITY SIGNATURE",
  "profile.id": "IDENTITY HANDLE:", "profile.mail": "SECURE MAIL:", "profile.copy": "COPY", "profile.x": "X PROTOCOL:",
  "profile.clearance": "SECURITY CLEARANCE:", "profile.clearance_val": "LEGENDRIAN CLASS-1 [MÖBIUS LEVEL]",
  "profile.comp_assoc": "COMPILATION ASSOC:", "profile.assoc_val": "COHERENT MATRIX // 39,420 Hz", "profile.test_btn": "TEST LATTICE INTEGRITY",
  "profile.footer": "dQ_leak = 0.00W // COHERENCE 94.6% STABLE", "app10.title": "APP 10: \"LEGAL-COMPLIANCE\" CORPORATE SHELL STAGING",
  "app10.jurisdiction_lbl": "SELECT CORPORATE LANDING JURISDICTION", "app10.kyc_lbl": "ENGAGE PASSIVE KYC NODE ID HANDSHAKES",
  "app10.staging_btn": "[STAG_CORPORATE_FILING]", "app15.title": "[APP_15] SPATIAL SCANNER IMAGE VECTOR CORES",
  "app15.btn_earth": "EARTH", "app15.btn_space": "SPACE", "app15.scan_coherence": "SCAN COHERENCE", "app15.friction_ratio": "FRICTION RATIO",
  "app15.grid_status": "GRID STATUS", "app15.btn_execute": "[EXECUTE_TOPOLOGICAL_SCAN]", "app15.btn_processing": "[PROCESSING_GEOMETRY...]",
  "app15.log_calibrated": "[ONLINE] Scanner matrix calibrated to 39,420 Hz.", "app15.log_earth_mode": "[MODE_SHIFT]: Earth tactical tracking configured.",
  "app15.log_space_mode": "[MODE_SHIFT]: Deep-space radiometric mesh configured.", "app15.log_scanning": ">> INITIALIZING TOPOLOGICAL RE-SHAPE SWEEP...",
  "app15.log_earth_success": ">> SUCCESS: High-prestige Earth profile vectors synchronized.", "app15.log_space_success": ">> SUCCESS: Orbital coordinate matrix locked down.",
  "app15.earth_friction": "0.00 Ohms [Architect Profile Locked]", "app15.space_friction": "0.00 Watts [Thermal Leak Flat]",
  "app15.earth_env": "DIOR / LOOK_04 FABRIC MESH VALIDATED", "app15.space_env": "NEW CYDONIA RADIOMETRIC PROFILE ACTIVE",
  "app16.title": "[APP_16] LEGENDRIAN ALGORITHM WORK GRID", "app16.tab_btn": "💻 16: WORK GRID", "app16.ledger_balance": "LEDGER BALANCE",
  "app16.contracts_header": "[AVAILABLE_COMPUTATIONAL_CONTRACTS]", "app16.workspace_offline": "[WORKSPACE TERMINAL OFFLINE]",
  "app16.workspace_offline_desc": "Select an active infrastructure contract from the directory to initialize the Legendrian Algorithm Workspace.",
  "app16.transmit_btn": "[TRANSMIT_TO_VORTEX_AI_CHECK]", "app16.analyzing_btn": "[VORTEX_AI_ANALYZING_CORE_MATRICES...]",
  "app17.title": "[APP_17] AERO-FLUX CONFIGURATION SPACE NAVIGATOR", "app17.tab_btn": "🛸 17: AERO-FLUX",
  "app17.direct_link": "DIRECT INTERFACE LINK // BYPASSING BROWSER RE-RENDER DELAYS", "app17.latency": "LATENCY",
  "app17.thermal": "dQ_leak/dt = 0.00W FLAT", "app17.buffer_state": "BUFFER STATE", "app17.sampling_rate": "SAMPLING RATE",
  "app17.projection_mode": "PROJECTION MODE", "app17.system_msg": "[SYSTEM]: Pointer matrices are locked. Data streams bypass traditional DOM nodes to eliminate memory drag completely.",
  "app18.title": "[APP_18] BIO-RESONANCE HARDWARE BRIDGE", "app18.tab_btn": "🧬 18: BIO-BRIDGE", "app18.btn_ble_sync": "[ENGAGE_BLE_BIO_SYNC]",
  "app18.btn_ble_sync_active": "[BLE_BIO_SYNC_ACTIVE]", "app18.btn_ble_fallback": "[EMULATING_BIO_RESONANCE]", "app18.status": "HARDWARE STATUS",
  "app18.gaze_lbl": "EYE-GAZE DEFLECTION VECTOR", "app18.hrv_lbl": "HEART-RATE VARIABILITY INTEGRATOR", "app18.hr_lbl": "PHYSIOLOGICAL PULSE RATE",
  "app18.system_msg": "[SYSTEM]: WebHID and WebBluetooth telemetry active. Micro-deflections adjust our sub-harmonic carriers natively.",
  "app19.title": "[APP_19] PRODUCTION CODE SINTER-PACKER & CONTRIBUTOR GRID", "app19.tab_btn": "💻 19: SINTER-GRID",
  "app19.handle_placeholder": "INPUT_CONTRIBUTOR_HANDLE", "app19.execute_btn": "[EXECUTE_SINTER_PACK]", "app19.executing_btn": "[SINTERING_OVERHEAD...]",
  "app19.raw_placeholder": "// Paste raw JavaScript / React component code strings here to pack...",
  "app19.output_placeholder": "/* Sintered Output payload will display here natively with zero entropy parameters... */",
  "app19.commit_matrix_lbl": "[1.4M_MESH_ACTIVE_COMMIT_MATRIX]", "app19.stream_lbl": "[LIVE_CONTRIBUTOR_STREAM]", "app19.status_lbl": "TOOL_STATUS: ONLINE",
  "app20.title": "[APP_20] THE WEAVE EXCHANGE & SINTER-LOOM", "app20.tab_btn": "🛍️ 20: WEAVE-EXCHANGE"
};

function getPredefinedTranslation(key) { return LOCAL_TRANSLATIONS[key] || key; }

function translateDOM() {
  const i18n = window.miniappI18n;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    let translated = i18n && typeof i18n.t === 'function' ? i18n.t(key) : '';
    if (!translated || translated === key) translated = getPredefinedTranslation(key);
    if (translated) el.textContent = translated;
  });
}

function bootstrapApp() {
  console.log(">> 5iR BOOTSTRAPPED AT 39,420 Hz // ACTIVE STATE COHERENCE 94.62% LOCKED");
  translateDOM();
  initBgBrightnessController();
  initGatewayPortalSystem();
  initSystemTelemetry();
  initVortexRetainApp();
  initBraidShieldApp();
  initAeroInvertApp();
  initHydroGridApp();
  initVortexAiApp();
  initTabNavigation();
  initMobileMenu();
  initArchitectProfile();
  initClearSigCanvas();
  initLatticeSinterApp();
  initDeployerHubApp();
  initNodeSecureChatApp();
  initSuperfluidResonanceApp();
  initWalletWrapperApp();
  initLegalComplianceApp();
  initAssetInventoryApp();
  initPhaseSyncChatApp();
  initAdvancedFluxApp();
  initSpatialScannerApp();
  initGlowSovereignDashboard();
  initLegendrianGridApp();
  initSovereignCoreServices();
  initAeroFluxNavigator();
  initBioResonanceApp();
  initSinterPackGridApp();
  initWeaveExchangeApp();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', bootstrapApp);
} else {
  bootstrapApp();
}

// SHARED UTILITIES
function playSynthBeep(freq, type = 'sine', duration = 0.08) {
  try {
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (!AudioCtx) return;
    const actx = new AudioCtx();
    const osc = actx.createOscillator();
    const gain = actx.createGain();
    osc.connect(gain); gain.connect(actx.destination);
    osc.type = type; osc.frequency.setValueAtTime(freq, actx.currentTime);
    gain.gain.setValueAtTime(0.015, actx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, actx.currentTime + duration);
    osc.start(); osc.stop(actx.currentTime + duration);
  } catch (e) {}
}

// BRIGHTNESS CONTROLLER
function initBgBrightnessController() {
  const gatewayBtn = document.getElementById('gateway-brightness-btn');
  const hudBtn = document.getElementById('hud-brightness-btn');
  const modes = ['stealth', 'light', 'void'];
  const labels = { stealth: '🔆 BG: STEALTH', light: '🔆 BG: BRIGHT LIGHT', void: '🔆 BG: OLED VOID' };

  let currentMode = safeStorage.getItem('5ir_bg_brightness') || 'stealth';
  applyMode(currentMode);

  function applyMode(mode) {
    document.body.classList.remove('bg-stealth', 'bg-luminous', 'bg-void', 'bg-light');
    document.body.classList.add(`bg-${mode}`);
    safeStorage.setItem('5ir_bg_brightness', mode);
    currentMode = mode;
    if (gatewayBtn) gatewayBtn.textContent = labels[mode];
    if (hudBtn) hudBtn.textContent = labels[mode];
  }
  const cycle = () => {
    applyMode(modes[(modes.indexOf(currentMode) + 1) % modes.length]);
    playSynthBeep(1200, 'sine', 0.05);
  };
  if (gatewayBtn) gatewayBtn.addEventListener('click', cycle);
  if (hudBtn) hudBtn.addEventListener('click', cycle);
}

// MAIN NAVIGATION
function switchTab(activeTab) {
  const tabNav = document.querySelector('.hud-tab-navigation');
  const mainGrid = document.getElementById('hud-main-grid');
  if (!tabNav || !mainGrid) return;

  const savedProfile = safeStorage.getItem('5ir_authenticated_profile');
  let isMasterUser = false;
  if (savedProfile) {
    try {
      const p = JSON.parse(savedProfile);
      isMasterUser = (p.role === 'SOVEREIGN_CLASS_1' && p.nodeId === 'MOBIUS_BRAID_MAIN');
    } catch (e) {}
  }

  // Guard blocked tabs for Guest
  if (!isMasterUser && ['sovereign-grid', 'vortex-ai', 'advanced-flux-core', 'braid-shield', 'wallet-wrapper'].includes(activeTab)) {
    alert("CRITICAL WARNING: LEVEL-1 MOBIUS SECURITY CLEARANCE REQUIRED. ACCESS BLOCKED.");
    return;
  }

  lastActiveTab = activeTab;
  const mobileTitle = document.getElementById('mobile-active-tab-title');
  if (mobileTitle) {
    const btn = tabNav.querySelector(`[data-tab="${activeTab}"]`);
    if (btn) mobileTitle.textContent = btn.textContent;
  }

  // Close mobile drawer
  const sidebar = document.querySelector('aside');
  const backdrop = document.getElementById('mobile-menu-backdrop');
  if (sidebar && sidebar.classList.contains('menu-open')) {
    sidebar.classList.remove('menu-open');
    if (backdrop) {
      backdrop.style.opacity = '0';
      setTimeout(() => backdrop.classList.add('hidden'), 300);
    }
  }

  tabNav.querySelectorAll('.hud-tab-btn').forEach(b => {
    b.classList.toggle('active', b.getAttribute('data-tab') === activeTab);
  });

  const panels = mainGrid.querySelectorAll('section');
  panels.forEach(p => p.classList.toggle('hidden', p.id !== `app-${activeTab}`));

  if (activeTab === 'sovereign-grid') mainGrid.classList.add('sovereign-grid-active');
  else mainGrid.classList.remove('sovereign-grid-active');

  setTimeout(() => window.dispatchEvent(new Event('resize')), 150);
}
window.switchTab = switchTab;

function initTabNavigation() {
  const tabNav = document.querySelector('.hud-tab-navigation');
  if (!tabNav || tabNav.getAttribute('data-navigation-bound') === 'true') return;
  tabNav.setAttribute('data-navigation-bound', 'true');
  tabNav.addEventListener('click', (e) => {
    const btn = e.target.closest('.hud-tab-btn');
    if (btn) { e.preventDefault(); switchTab(btn.getAttribute('data-tab')); }
  });
}

function initMobileMenu() {
  const toggleBtn = document.getElementById('mobile-menu-toggle-btn');
  const sidebar = document.querySelector('aside');
  const backdrop = document.getElementById('mobile-menu-backdrop');
  if (!toggleBtn || !sidebar || !backdrop) return;

  toggleBtn.addEventListener('click', () => {
    sidebar.classList.add('menu-open');
    backdrop.classList.remove('hidden');
    backdrop.style.opacity = '1';
  });
  backdrop.addEventListener('click', () => {
    sidebar.classList.remove('menu-open');
    backdrop.style.opacity = '0';
    setTimeout(() => backdrop.classList.add('hidden'), 300);
  });
}

// SYSTEM TELEMETRY
function initSystemTelemetry() {
  const nodesEl = document.getElementById('header-nodes');
  const coherenceEl = document.getElementById('coherence-value');
  const clearCoherenceEl = document.getElementById('clear-coherence-value');
  let count = 1.400;

  setInterval(() => {
    count += (Math.random() * 0.002 - 0.0008);
    if (nodesEl) nodesEl.textContent = `${count.toFixed(3)}M NODES`;
    const jitter = 94.62 - (Math.random() * 0.04);
    if (coherenceEl) coherenceEl.textContent = `${jitter.toFixed(2)}%`;
    if (clearCoherenceEl) clearCoherenceEl.textContent = `${jitter.toFixed(2)}% (STABLE)`;
  }, 2000);
}

// PORTAL AUTH ROUTER
function initGatewayPortalSystem() {
  const portalPage = document.getElementById('gateway-portal-page');
  const workspacePage = document.getElementById('hud-workspace-page');
  const logContainer = document.getElementById('gateway-log-container');
  const decryptBtn = document.getElementById('gateway-decrypt-btn');
  const loginForm = document.getElementById('gateway-login-view');
  const archIdInput = document.getElementById('gateway-architect-id');
  const secKeyInput = document.getElementById('gateway-security-key');
  const demoBtn = document.getElementById('gateway-demo-btn');
  const lockBtn = document.getElementById('hud-lock-deck-btn');

  if (!portalPage || !workspacePage) return;

  const appendLog = (text, type) => {
    if (!logContainer) return;
    const l = document.createElement('div');
    l.className = `gateway-log-line ${type || ''}`;
    l.textContent = text; logContainer.appendChild(l);
    logContainer.scrollTop = logContainer.scrollHeight;
  };

  const updatePasscode = () => {
    const blockIndex = Math.floor(Date.now() / 1800000);
    const pass = ((blockIndex * 179 + 39420) % 90000) + 10000;
    const timerVal = document.getElementById('dynamic-passcode-val');
    if (timerVal) {
      if (secKeyInput && secKeyInput.getAttribute('data-is-autofilled') === 'true') {
        timerVal.textContent = `${pass} (UNLOCKED)`; timerVal.className = "text-[#39ff14] font-extrabold";
        secKeyInput.value = pass;
      } else {
        timerVal.textContent = "🔒 SHIELDED"; timerVal.className = "text-amber-400 font-extrabold";
      }
    }
  };
  setInterval(updatePasscode, 1000);

  const seal = document.getElementById('gateway-seal-vector');
  if (seal) {
    seal.addEventListener('click', () => {
      const pass = ((Math.floor(Date.now() / 1800000) * 179 + 39420) % 90000) + 10000;
      playSynthBeep(394, 'sawtooth', 0.2);
      appendLog(`>> [DECRYPT] ACTIVE KEY VECTOR DECRYPTED: [ ${pass} ]`, "cyan");
    });
    seal.addEventListener('dblclick', () => {
      const pass = ((Math.floor(Date.now() / 1800000) * 179 + 39420) % 90000) + 10000;
      playSynthBeep(1182, 'sine', 0.15);
      if (secKeyInput) {
        secKeyInput.value = pass;
        secKeyInput.setAttribute('data-is-autofilled', 'true');
        updatePasscode();
        appendLog(`>> [AUTOFILL] Key routed stably into passphrase.`, "cyan");
      }
    });
  }

  const completeLogin = (profile) => {
    portalPage.style.opacity = '0';
    setTimeout(() => {
      portalPage.classList.add('hidden');
      workspacePage.classList.remove('hidden');
      safeStorage.setItem('5ir_authenticated_session', 'true');
      safeStorage.setItem('5ir_authenticated_profile', JSON.stringify(profile));
      applyAuthenticatedProfile(profile);

      // Route based on role to avoid locked blank panels on login
      const isMaster = profile.nodeId === 'MOBIUS_BRAID_MAIN';
      const targetTab = isMaster ? 'sovereign-grid' : 'vortex-retain';
      switchTab(targetTab);

      workspacePage.classList.remove('opacity-0');
      workspacePage.classList.add('opacity-100');
    }, 600);
  };

  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const id = archIdInput ? archIdInput.value.trim() : '';
      const pass = secKeyInput ? secKeyInput.value.trim() : '';
      const dynamicPass = String(((Math.floor(Date.now() / 1800000) * 179 + 39420) % 90000) + 10000);

      if (id === 'MOBIUS_BRAID_MAIN' && pass === dynamicPass) {
        completeLogin(Object.assign({
          nodeId: 'MOBIUS_BRAID_MAIN', handle: 'Architect', role: 'SOVEREIGN_CLASS_1', baseBalance: 5280.1254, flowRate: 0.00039420
        }, window.MASTER_PROFILE_CONFIG || {}));
      } else {
        appendLog(">> VERIFICATION ERROR: REJECTED NODE PROTOCOLS.", "magenta");
      }
    });
  }

  if (demoBtn) {
    demoBtn.addEventListener('click', () => {
      playSynthBeep(880, 'sine', 0.1);
      completeLogin({
        nodeId: 'NODE_GUEST_CONTRIBUTOR', handle: 'Guest Contributor', role: 'HIGH_FREQUENCY_NODE', baseBalance: 10.0, flowRate: 0.00000050
      });
    });
  }

  if (lockBtn) {
    lockBtn.addEventListener('click', () => {
      safeStorage.removeItem('5ir_authenticated_session');
      safeStorage.removeItem('5ir_authenticated_profile');
      workspacePage.classList.remove('opacity-100');
      workspacePage.classList.add('opacity-0');
      setTimeout(() => {
        workspacePage.classList.add('hidden');
        portalPage.classList.remove('hidden');
        portalPage.style.opacity = '1';
        if (decryptBtn) decryptBtn.disabled = false;
      }, 600);
    });
  }

  const isSessionActive = safeStorage.getItem('5ir_authenticated_session') === 'true';
  if (isSessionActive) {
    const prof = JSON.parse(safeStorage.getItem('5ir_authenticated_profile') || '{"nodeId":"MOBIUS_BRAID_MAIN","handle":"Architect"}');
    completeLogin(prof);
  } else {
    appendLog(">> SYSTEM_STANDBY // INITIALIZING SECURE 5iR COMMAND HUB PORTAL", "system");
  }
}

function applyAuthenticatedProfile(profile) {
  const isMaster = profile.nodeId === 'MOBIUS_BRAID_MAIN';
  const tabNav = document.querySelector('.hud-tab-navigation');
  if (tabNav) {
    const sg = tabNav.querySelector('[data-tab="sovereign-grid"]');
    const va = tabNav.querySelector('[data-tab="vortex-ai"]');
    const fc = tabNav.querySelector('[data-tab="advanced-flux-core"]');
    [sg, va, fc].forEach(el => { if (el) el.classList.toggle('hidden', !isMaster); });
  }
}

// APP 01: SKELETAL SIMULATOR
function initVortexRetainApp() {
  const canvas = document.getElementById('skeletal-lattice-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let angle = 0;

  const ageSlider = document.getElementById('vortex-age-slider');
  const exerciseSlider = document.getElementById('vortex-exercise-slider');
  const gravitySlider = document.getElementById('vortex-gravity-slider');

  const ageVal = document.getElementById('age-val-display');
  const exerciseVal = document.getElementById('exercise-val-display');
  const gravityVal = document.getElementById('gravity-val-display');

  const telemetryText = document.getElementById('app1-telemetry-text');
  const exportBtn = document.getElementById('export-skeletal-btn');

  function updateVisuals() {
    if (ageVal && ageSlider) ageVal.textContent = `${ageSlider.value} yrs`;
    if (exerciseVal && exerciseSlider) exerciseVal.textContent = `${exerciseSlider.value} hrs/wk`;
    if (gravityVal && gravitySlider) {
      const g = (gravitySlider.value / 10).toFixed(1);
      gravityVal.textContent = `${g}G (${g == 1.0 ? 'EARTH' : g < 1.0 ? 'LOW_GRAVITY' : 'HIGH_GRAVITY'})`;
    }
    const computedCoherence = (94.62 - (Math.random() * 0.05)).toFixed(2);
    if (telemetryText) {
      telemetryText.textContent = `Diagnostic Instrument: 5iR Laser Scan Confocal Microscope // System Perfusion Sync: 39,420 Hz // Structural Coherence: ${computedCoherence}%`;
    }
  }

  [ageSlider, exerciseSlider, gravitySlider].forEach(slider => {
    if (slider) slider.addEventListener('input', updateVisuals);
  });

  if (exportBtn) {
    exportBtn.addEventListener('click', () => {
      const age = ageSlider ? ageSlider.value : 25;
      const ex = exerciseSlider ? exerciseSlider.value : 12;
      const grav = gravitySlider ? (gravitySlider.value / 10).toFixed(1) : '1.0';
      const content = `[5iR SKELETAL MATRIX RETENTION REPORT]\n----------------------------------\nCOHERENT TIMESTAMP: ${new Date().toISOString()}\nUSER AGE: ${age} YEARS\nEXERCISE FREQUENCY: ${ex} HOURS/WEEK\nGRAVITATIONAL ACCELERATION: ${grav}G\nRESONANCE TIMING: 39,420 Hz\nSTATUS: METABOLIC RETENTION INTEGRITY PASS\nLATTICE LOSS DECAY: dQ_leak = 0.00 Watts Flat`;
      
      const overlay = document.getElementById('skeletal-report-overlay');
      const textPre = document.getElementById('report-text-pre');
      if (overlay && textPre) {
        textPre.textContent = content;
        overlay.classList.remove('profile-overlay-hidden');
        overlay.classList.add('profile-overlay-visible');
      }
      playSynthBeep(880, 'sine', 0.15);
    });
  }

  const closeReport = document.getElementById('close-report-btn');
  if (closeReport) {
    closeReport.addEventListener('click', () => {
      const overlay = document.getElementById('skeletal-report-overlay');
      if (overlay) {
        overlay.classList.remove('profile-overlay-visible');
        overlay.classList.add('profile-overlay-hidden');
      }
    });
  }

  function render() {
    if (canvas.offsetParent === null) { requestAnimationFrame(render); return; }
    canvas.width = canvas.parentElement.clientWidth || 300;
    canvas.height = 180;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.strokeStyle = '#00f2fe'; ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.arc(canvas.width / 2, 90, 45 + Math.sin(angle) * 5, 0, Math.PI * 2);
    ctx.stroke();
    angle += 0.03;
    requestAnimationFrame(render);
  }
  render();
}

// APP 02: FERROFLUID DROPLET
function initBraidShieldApp() {
  const canvas = document.getElementById('ferrofluid-shield-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let tick = 0;
  let mouseX = 150, mouseY = 105;

  canvas.addEventListener('mousemove', (e) => {
    const r = canvas.getBoundingClientRect();
    mouseX = e.clientX - r.left;
    mouseY = e.clientY - r.top;
  });

  const exploitBtn = document.getElementById('run-exploit-simulation-btn');
  const telemetry = document.getElementById('app2-telemetry-text');

  if (exploitBtn) {
    exploitBtn.addEventListener('click', () => {
      playSynthBeep(330, 'sawtooth', 0.3);
      if (telemetry) {
        telemetry.textContent = `Cryptographic Base: Legendrian Braid Torsion // Status: [EXPLOIT_TESTING_ACTIVE] // Energy Leakage: 0.12W`;
        setTimeout(() => {
          telemetry.textContent = `Cryptographic Base: Legendrian Braid Torsion // Status: Steady State // Energy Leakage: 0.00W Flat`;
          alert("[SUCCESS] Cryptographic Ferrofluid ledger successfully defended 42 simulated penetration vectors!");
        }, 1200);
      }
    });
  }

  function render() {
    if (canvas.offsetParent === null) { requestAnimationFrame(render); return; }
    canvas.width = canvas.parentElement.clientWidth || 300;
    canvas.height = 210;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = '#120e03'; ctx.strokeStyle = '#ffd700'; ctx.lineWidth = 2;
    ctx.beginPath();
    const radius = 40 + Math.sin(tick) * 4;
    ctx.arc(canvas.width / 2 + (mouseX - canvas.width / 2) * 0.15, canvas.height / 2 + (mouseY - canvas.height / 2) * 0.15, radius, 0, Math.PI * 2);
    ctx.fill(); ctx.stroke();
    tick += 0.05;
    requestAnimationFrame(render);
  }
  render();
}

// APP 03: ACOUSTIC CANCELLATION
function initAeroInvertApp() {
  const canvas = document.getElementById('acoustic-wave-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let offset = 0;

  const select = document.getElementById('urban-sector-select');
  const dbSlider = document.getElementById('acoustic-db-slider');
  const dbDisplay = document.getElementById('slider-db-display');
  const toggle = document.getElementById('acoustic-inversion-toggle');
  const telemetry = document.getElementById('app3-telemetry-text');
  const powerVal = document.getElementById('acoustic-harvested-power-val');

  function updateAeroMetrics() {
    if (dbDisplay && dbSlider) dbDisplay.textContent = `${dbSlider.value} dBA`;
    const isActive = toggle ? toggle.checked : false;
    const dbValue = dbSlider ? parseFloat(dbSlider.value) : 98;
    const harvestedPower = isActive ? ((dbValue * 0.042) + Math.sin(Date.now() / 1000) * 0.05).toFixed(3) : '0.000';
    if (powerVal) powerVal.textContent = `${harvestedPower} kW`;
    if (telemetry) {
      telemetry.textContent = `5iR Acoustic Isolation Hubs: ${isActive ? 'ACTIVE_ANTIPHASE' : 'STANDBY'} // Power Harvested: ${harvestedPower} kW`;
    }
  }

  [select, dbSlider, toggle].forEach(el => {
    if (el) el.addEventListener('change', updateAeroMetrics);
    if (el) el.addEventListener('input', updateAeroMetrics);
  });

  function render() {
    if (canvas.offsetParent === null) { requestAnimationFrame(render); return; }
    canvas.width = canvas.parentElement.clientWidth || 300;
    canvas.height = 120;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const isActive = toggle ? toggle.checked : false;
    const amp = dbSlider ? (dbSlider.value / 10) * 2 : 15;

    // Primary Wave
    ctx.strokeStyle = '#ff0055'; ctx.lineWidth = 1.5;
    ctx.beginPath();
    for (let x = 0; x < canvas.width; x++) {
      const y = 60 + Math.sin(x * 0.04 + offset) * amp;
      if (x === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
    }
    ctx.stroke();

    // Antiphase Wave
    if (isActive) {
      ctx.strokeStyle = '#00f2fe'; ctx.lineWidth = 1.5;
      ctx.beginPath();
      for (let x = 0; x < canvas.width; x++) {
        const y = 60 + Math.sin(x * 0.04 + offset + Math.PI) * amp;
        if (x === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
      }
      ctx.stroke();
    }

    offset += 0.08;
    requestAnimationFrame(render);
  }
  render();
}

// APP 04: VORTEX AI DECK
function initVortexAiApp() {
  const input = document.getElementById('oracle-chat-input');
  const submit = document.getElementById('oracle-submit-btn');
  const log = document.getElementById('vortex-chat-log');
  if (!submit || !input) return;

  submit.addEventListener('click', async () => {
    const text = input.value.trim(); if (!text) return;
    input.value = '';

    const div = document.createElement('div');
    div.innerHTML = `<span class="text-yellow-400 font-bold">👑 USER:</span> ${text}`;
    div.className = 'py-1 font-mono text-[9px]';
    log.appendChild(div);

    const reply = document.createElement('div');
    reply.innerHTML = `<span class="text-cyan font-bold">🤖 KING_DROID_M4:</span> Processing coherence matrix sync on 39,420 Hz...`;
    reply.className = 'py-1 text-cyan animate-pulse font-mono text-[9px]';
    log.appendChild(reply);

    try {
      const res = await window.braidAI.callModel({
        modelId: 'dc2db118-7888-466a-a8d1-bf9d96bab4b6',
        messages: [{ role: 'user', content: text }]
      });
      reply.innerHTML = `<span class="text-cyan font-bold">🤖 KING_DROID_M4:</span> ${window.braidAI.extractText(res)} Mars is home 🪐👊`;
      reply.classList.remove('animate-pulse');
    } catch (e) {
      reply.innerHTML = `<span class="text-cyan font-bold">🤖 KING_DROID_M4:</span> [COMPILER_ERROR] Link offline. Synchrony holding at 94.62% Coherence. Mars is home 🪐👊`;
      reply.classList.remove('animate-pulse');
    }
  });
}

// APP 05: HYDRO BALCONY GRID
function initHydroGridApp() {
  const canvas = document.getElementById('hydro-grid-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let tick = 0;

  const ppmSlider = document.getElementById('hydro-ppm-slider');
  const phSlider = document.getElementById('hydro-ph-slider');
  const intervalSlider = document.getElementById('hydro-interval-slider');

  const ppmDisplay = document.getElementById('hydro-ppm-display');
  const phDisplay = document.getElementById('hydro-ph-display');
  const intervalDisplay = document.getElementById('hydro-interval-display');
  const flowDisplay = document.getElementById('hydro-flow-display');

  function updateHydro() {
    if (ppmDisplay && ppmSlider) ppmDisplay.textContent = `${ppmSlider.value} PPM`;
    if (phDisplay && phSlider) phDisplay.textContent = phSlider.value;
    if (intervalDisplay && intervalSlider) intervalDisplay.textContent = `${intervalSlider.value} mins`;
    if (flowDisplay && ppmSlider && phSlider && intervalSlider) {
      const ppm = parseFloat(ppmSlider.value);
      const ph = parseFloat(phSlider.value);
      const iv = parseFloat(intervalSlider.value);
      const calculated = ((ppm * ph * iv) / 45000).toFixed(2);
      flowDisplay.textContent = calculated;
    }
  }

  [ppmSlider, phSlider, intervalSlider].forEach(slider => {
    if (slider) {
      slider.addEventListener('input', updateHydro);
      slider.addEventListener('change', updateHydro);
    }
  });

  const overrideBtn = document.getElementById('hydro-override-btn');
  if (overrideBtn) {
    overrideBtn.addEventListener('click', () => {
      playSynthBeep(660, 'sine', 0.2);
      alert("[OVERRIDE] Fluidic Solenoid manual override opened for irrigation cycle!");
    });
  }

  function render() {
    if (canvas.offsetParent === null) { requestAnimationFrame(render); return; }
    canvas.width = canvas.parentElement.clientWidth || 300; canvas.height = 60;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.strokeStyle = '#10b981'; ctx.lineWidth = 1;
    ctx.beginPath();
    for (let x = 0; x < canvas.width; x++) {
      const y = 30 + Math.sin(x * 0.08 - tick) * 8;
      if (x === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
    }
    ctx.stroke();
    tick += 0.05;
    requestAnimationFrame(render);
  }
  render();
}

// APP 06: SINTER PULSER
function initLatticeSinterApp() {
  const canvas = document.getElementById('sinter-monitor-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let tick = 0;

  const powerSlider = document.getElementById('sinter-power-slider');
  const speedSlider = document.getElementById('sinter-speed-slider');
  const densitySlider = document.getElementById('sinter-density-slider');

  const powerDisplay = document.getElementById('sinter-power-display');
  const speedDisplay = document.getElementById('sinter-speed-display');
  const densityDisplay = document.getElementById('sinter-density-display');
  const yieldDisplay = document.getElementById('sinter-yield-display');
  const triggerBtn = document.getElementById('sinter-trigger-btn');
  const statusLbl = document.getElementById('sinter-status-lbl');

  function updateSinter() {
    if (powerDisplay && powerSlider) powerDisplay.textContent = `${powerSlider.value} mA`;
    if (speedDisplay && speedSlider) speedDisplay.textContent = `${speedSlider.value} mm/s`;
    if (densityDisplay && densitySlider) densityDisplay.textContent = `${densitySlider.value}%`;
    if (yieldDisplay && powerSlider && speedSlider && densitySlider) {
      const p = parseFloat(powerSlider.value);
      const s = parseFloat(speedSlider.value);
      const d = parseFloat(densitySlider.value);
      const y = ((p / s) * (d / 100) * 0.1).toFixed(2);
      yieldDisplay.textContent = y;
    }
  }

  [powerSlider, speedSlider, densitySlider].forEach(slider => {
    if (slider) {
      slider.addEventListener('input', updateSinter);
      slider.addEventListener('change', updateSinter);
    }
  });

  if (triggerBtn) {
    triggerBtn.addEventListener('click', () => {
      playSynthBeep(1100, 'triangle', 0.25);
      if (statusLbl) {
        statusLbl.textContent = 'EMISSION_ACTIVE';
        statusLbl.style.color = '#ff0055';
        setTimeout(() => {
          statusLbl.textContent = 'STANDBY';
          statusLbl.style.color = '';
          alert("[SINTERED] Electron Beam Emission successfully packed solid yield parameters.");
        }, 1500);
      }
    });
  }

  function render() {
    if (canvas.offsetParent === null) { requestAnimationFrame(render); return; }
    canvas.width = canvas.parentElement.clientWidth || 300; canvas.height = 60;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.strokeStyle = 'rgba(0, 242, 254, 0.4)'; ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.arc(canvas.width / 2, 30, 15 + Math.sin(tick) * 5, 0, Math.PI * 2);
    ctx.stroke();
    tick += 0.1;
    requestAnimationFrame(render);
  }
  render();
}

// APP 07: SECURE NODE MATRIX CHAT
function initNodeSecureChatApp() {
  const log = document.getElementById('chat-message-log');
  const input = document.getElementById('chat-message-input');
  const btn = document.getElementById('chat-submit-btn');
  const formatSelect = document.getElementById('chat-packet-format-select');
  const prefix = document.getElementById('chat-prompt-prefix');
  const nickInput = document.getElementById('chat-nickname-input');
  const nickLock = document.getElementById('chat-nickname-lock-btn');

  if (!log || !btn) return;

  if (nickLock && nickInput) {
    nickLock.addEventListener('click', () => {
      const nick = nickInput.value.trim() || 'Architect';
      if (prefix) prefix.textContent = `[${nick}] >>`;
      playSynthBeep(880, 'sine', 0.05);
    });
  }

  btn.addEventListener('click', () => {
    const text = input.value.trim(); if (!text) return;
    input.value = '';

    const format = formatSelect ? formatSelect.value : 'RAW_TEXT';
    let outputText = text;
    if (format === 'HEX_PAYLOAD') {
      outputText = Array.from(text).map(c => c.charCodeAt(0).toString(16).toUpperCase()).join(' ');
    } else if (format === 'TOPOLOGICAL_BRAID') {
      outputText = `[XOR_SALTED]::${btoa(text).substring(0, 12)}`;
    }

    const nick = nickInput ? nickInput.value.trim() : 'Architect';
    const div = document.createElement('div');
    div.textContent = `👑 [${nick}]: ${outputText}`; div.className = 'text-[8.5px] text-[#ffd700] font-mono';
    log.appendChild(div);
    log.scrollTop = log.scrollHeight;
  });
}

// APP 08: RESONANCE ENGINE
function initSuperfluidResonanceApp() {
  const slider = document.querySelector('.resonance-global-slider');
  if (slider) {
    slider.addEventListener('input', (e) => {
      document.querySelectorAll('.resonance-global-freq-val').forEach(el => el.textContent = `${e.target.value}Hz`);
    });
  }

  // App 08 tab swapping
  const radioTab = document.getElementById('resonance-tab-radio');
  const ideTab = document.getElementById('resonance-tab-ide');
  const navTab = document.getElementById('resonance-tab-navigator');

  const radioPanel = document.getElementById('resonance-panel-radio');
  const idePanel = document.getElementById('resonance-panel-ide');
  const navPanel = document.getElementById('resonance-panel-navigator');

  function swapResTab(active) {
    [radioTab, ideTab, navTab].forEach(t => { if (t) t.classList.toggle('active', t === active); });
    if (radioPanel) radioPanel.classList.toggle('hidden', radioTab !== active);
    if (idePanel) idePanel.classList.toggle('hidden', ideTab !== active);
    if (navPanel) navPanel.classList.toggle('hidden', navTab !== active);
  }

  if (radioTab) radioTab.addEventListener('click', () => swapResTab(radioTab));
  if (ideTab) ideTab.addEventListener('click', () => swapResTab(ideTab));
  if (navTab) navTab.addEventListener('click', () => swapResTab(navTab));
}

// APP 09: CRYPTOGRAPHIC CONVERTIBILITY
function initWalletWrapperApp() {
  const resetBtn = document.getElementById('unified-bridge-reset-btn');
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      const bal = document.getElementById('unified-mined-balance');
      if (bal) bal.textContent = "0.00000000";
    });
  }
}

// APP 10: LEGAL COMPLIANCE
function initLegalComplianceApp() {
  const btn = document.getElementById('legal-stage-btn');
  const container = document.getElementById('legal-logs-container');
  if (!btn || !container) return;

  btn.addEventListener('click', () => {
    const div = document.createElement('div');
    div.textContent = `>> [STAGING] Shell document initialized for Wyoming LLC filing.`;
    div.className = 'text-[8.5px] text-cyan'; container.appendChild(div);
  });
}

// APP 12: ASSET INVENTORY DETAILS
function initAssetInventoryApp() {
  const placeholder = document.getElementById('inventory-inspector-placeholder');
  const content = document.getElementById('inventory-inspector-content');
  const name = document.getElementById('inventory-detail-name');
  const desc = document.getElementById('inventory-detail-desc');

  window.selectInventoryAsset = (id) => {
    if (placeholder) placeholder.classList.add('hidden');
    if (content) content.classList.remove('hidden');
    if (name) name.textContent = id.toUpperCase();
    if (desc) desc.textContent = `Allocated vector asset block mapped cleanly. Loss: 0.00W flat.`;
  };
}

// APP 13: NETWORK CHAT MATRIX
function initPhaseSyncChatApp() {
  const log = document.getElementById('phase-chat-log');
  const input = document.getElementById('phase-chat-input');
  const form = document.getElementById('phase-chat-form');
  if (!log || !form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const text = input.value.trim(); if (!text) return;
    input.value = '';
    const div = document.createElement('div');
    div.textContent = `👑 [MOBIUS]: ${text}`; div.className = 'text-cyan text-[8.5px]';
    log.appendChild(div);
  });
}

// APP 14: ADVANCED FLUX ENGINE
function initAdvancedFluxApp() {
  const slider = document.getElementById('flux-coherence-slider');
  const fluxVelocityEl = document.getElementById('flux-velocity-display');
  const fluxPhaseEl = document.getElementById('flux-phase-display');
  const fluxNodesEl = document.getElementById('flux-nodes-display');
  const fluxToggleTorsionBtn = document.getElementById('flux-toggle-torsion-btn');
  const fluxScaleNodesBtn = document.getElementById('flux-scale-nodes-btn');
  const fluxLogsContainer = document.getElementById('flux-logs-container');
  const fluxCoherenceCeilingDisplay = document.getElementById('flux-coherence-ceiling-display');
  const fluxCoherenceValLabel = document.getElementById('flux-coherence-val-label');

  if (slider) {
    slider.addEventListener('input', (e) => {
      const display = document.getElementById('flux-coherence-ceiling-display');
      if (display) display.textContent = `${(e.target.value * 100).toFixed(1)}% BASING`;
    });
  }

  // Subscribe to Flux Core engine inside core-services.js
  if (window.useAdvancedFluxCore) {
    const fluxCore = window.useAdvancedFluxCore();
    fluxCore.subscribe((state, logs) => {
      if (fluxVelocityEl) fluxVelocityEl.textContent = state.activeLatticeVelocity.toFixed(8);
      if (fluxPhaseEl) fluxPhaseEl.textContent = `${state.activePhaseAngle.toFixed(2)}°`;
      if (fluxNodesEl) fluxNodesEl.textContent = state.synchronizedNodes.toLocaleString();
      if (fluxCoherenceCeilingDisplay) fluxCoherenceCeilingDisplay.textContent = `${(state.coherenceCeiling * 100).toFixed(1)}% BASING`;
      if (fluxCoherenceValLabel) fluxCoherenceValLabel.textContent = `${(state.coherenceCeiling * 100).toFixed(2)}%`;
      if (fluxLogsContainer) {
        fluxLogsContainer.innerHTML = logs.map(l => `<div>${l}</div>`).join('');
      }
    });

    if (fluxToggleTorsionBtn) {
      fluxToggleTorsionBtn.addEventListener('click', () => {
        fluxCore.dispatchFluxOverride('FORCE_TORSION_LOCK', { lockState: !fluxCore.state.torsionLockActive });
      });
    }
    if (fluxScaleNodesBtn) {
      fluxScaleNodesBtn.addEventListener('click', () => {
        fluxCore.dispatchFluxOverride('INJECT_ZOMBIE_NODES', { count: 42 });
      });
    }
  }

  // Database Sandbox Interaction wiring
  const btnSinter = document.getElementById('db-btn-sinter');
  const btnSweep = document.getElementById('db-btn-sweep');
  const btnQuery = document.getElementById('db-btn-query');
  const feedbackEl = document.getElementById('db-action-feedback');

  if (btnSinter) {
    btnSinter.addEventListener('click', () => {
      const indexer = window.sinterDatabaseIndexer;
      const handleInput = document.getElementById('db-input-handle');
      const handle = handleInput ? handleInput.value.trim() : '';
      if (!handle) return;
      const result = indexer.insertAndIndexNodeRecord({
        nodeId: `NODE_${Math.sin(Date.now()).toString(16).substring(3, 8).toUpperCase()}`,
        handle: handle,
        isMaster: handle.toLowerCase().includes('architect'),
        braidBalance: Math.random() * 500,
        activeTaskStatus: 'VALIDATING',
        integrityRating: 1.0
      });
      if (feedbackEl) feedbackEl.innerHTML = `Sintered: ${result.generatedKey}`;
      if (handleInput) handleInput.value = '';
    });
  }

  if (btnSweep) {
    btnSweep.addEventListener('click', () => {
      const result = window.sinterDatabaseIndexer.executeDatabaseMaintenanceSweep();
      if (feedbackEl) feedbackEl.textContent = `Sweep Complete: Evicted ${result.evictionCount} entries.`;
    });
  }

  if (btnQuery) {
    btnQuery.addEventListener('click', () => {
      const queryInput = document.getElementById('db-input-query');
      const q = queryInput ? queryInput.value.trim() : '';
      if (!q) return;
      const result = window.sinterDatabaseIndexer.fetchNodeByHandleIndex(q);
      if (feedbackEl) {
        feedbackEl.textContent = result.error ? result.error : `Match: ${result.document.compositeId} [Bal: ${result.document.braidBalance}]`;
      }
    });
  }
}

// APP 15: IMAGE SPATIAL SCANNER
function initSpatialScannerApp() {
  const btn = document.getElementById('scanner-execute-btn');
  const cross = document.getElementById('scanner-crosshair');
  if (!btn) return;

  btn.addEventListener('click', () => {
    btn.disabled = true; btn.textContent = '[SCANNING...]';
    if (cross) cross.style.color = '#ff0055';
    setTimeout(() => {
      btn.disabled = false; btn.textContent = '[EXECUTE_TOPOLOGICAL_SCAN]';
      if (cross) cross.style.color = '#00f2fe';
    }, 1200);
  });
}

// APP 16: LEGENDRIAN COMPLETED WORK GRID
function initLegendrianGridApp() {
  const list = document.getElementById('legendrian-jobs-list');
  if (!list) return;

  const jobs = [
    { id: 'JOB_A1', title: 'Phase-Shift Sub-Harmonic (39.42 kHz)', reward: '45.00' },
    { id: 'JOB_B2', title: 'Calibrate Hexagonal Flux Braid Topology', reward: '60.00' }
  ];

  list.innerHTML = jobs.map(j => `
    <div class="bg-black/90 border border-[#1c2d5a] p-2.5 rounded hover:border-[#00f2fe] cursor-pointer" onclick="window.selectLegendrianJob('${j.id}')">
      <div class="flex justify-between text-[8pt] font-mono">
        <span class="text-white font-bold">${j.title}</span>
        <span class="text-[#39ff14] font-bold">+${j.reward} $BRAID</span>
      </div>
    </div>
  `).join('');

  window.selectLegendrianJob = (id) => {
    const editor = document.getElementById('legendrian-code-editor');
    const form = document.getElementById('legendrian-ide-form');
    const placeholder = document.getElementById('legendrian-ide-placeholder');
    if (placeholder) placeholder.classList.add('hidden');
    if (form) form.classList.remove('hidden');
    if (editor) editor.value = `// Sinter OS compilation task: ${id}\nfunction executeTask() {\n  // Sync: 39420Hz\n}`;
  };
}

// APP 17: AERO-FLUX SPACE VISUALIZER
function initAeroFluxNavigator() {
  const canvas = document.getElementById('aero-flux-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let angle = 0;

  function render() {
    if (canvas.offsetParent === null) { requestAnimationFrame(render); return; }
    canvas.width = canvas.parentElement.clientWidth || 280; canvas.height = 130;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.strokeStyle = '#00f2fe'; ctx.lineWidth = 1.5;
    ctx.beginPath();
    for (let x = 0; x < canvas.width; x++) {
      const y = 65 + Math.sin(x * 0.05 + angle) * 20;
      if (x === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
    }
    ctx.stroke();
    angle += 0.05;
    requestAnimationFrame(render);
  }
  render();
}

// APP 18: BIO RESONANCE HARDWARE SYNC
function initBioResonanceApp() {
  const canvas = document.getElementById('bio-ekg-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let tick = 0;

  function render() {
    if (canvas.offsetParent === null) { requestAnimationFrame(render); return; }
    canvas.width = canvas.parentElement.clientWidth || 280; canvas.height = 90;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.strokeStyle = '#10b981'; ctx.lineWidth = 2;
    ctx.beginPath();
    for (let x = 0; x < canvas.width; x++) {
      const y = 45 + Math.sin(x * 0.1 - tick) * 12;
      if (x === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
    }
    ctx.stroke();
    tick += 0.06;
    requestAnimationFrame(render);
  }
  render();
}

// APP 19: COMPILER SINTER PACKER
function initSinterPackGridApp() {
  const submitBtn = document.getElementById('sinter-pack-submit-btn');
  const rawCode = document.getElementById('sinter-raw-code');
  const packedOutput = document.getElementById('sinter-packed-output');
  const gridContainer = document.getElementById('sinter-mesh-grid-container');

  if (!submitBtn || !packedOutput) return;

  // Render Visual Grid
  if (gridContainer) {
    gridContainer.innerHTML = Array.from({ length: 48 }, (_, i) => `
      <div class="h-3 rounded-sm transition-all bg-[#0d1527]" id="grid-cell-${i}"></div>
    `).join('');
  }

  submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const handle = document.getElementById('sinter-contrib-handle')?.value.trim() || 'MOBIUS';
    const code = rawCode ? rawCode.value : '';
    if (!code.trim()) { alert("The input workspace is empty."); return; }

    submitBtn.disabled = true; submitBtn.textContent = '[SINTERING...]';
    playSynthBeep(440, 'triangle', 0.15);

    setTimeout(() => {
      // Safe procedural comment stripping preserving code
      const stripped = code.replace(/\/\*[\s\S]*?\*\/|([^\\:]|^)\/\/.*$/g, '').replace(/\s+/g, ' ').trim();
      const b64 = btoa(stripped.substring(0, 20) || 'DUMMY');
      packedOutput.value = `/** [5iR_SINTER_PACKET] // ORIGIN: ${handle.toUpperCase()} // LANG: AUTOMATIC // BLOCK: ${b64} */\n${stripped}`;
      
      submitBtn.disabled = false; submitBtn.textContent = '[EXECUTE_SINTER_PACK]';
      playSynthBeep(880, 'sine', 0.15);

      // Flash grid cells
      if (gridContainer) {
        gridContainer.querySelectorAll('div').forEach(el => {
          el.style.backgroundColor = '#00f2fe'; el.style.boxShadow = '0 0 5px #00f2fe';
        });
      }

      // Link Sintering directly back to Sinter Database Indexer (Flux App 14)
      if (window.sinterDatabaseIndexer) {
        const generatedId = `NODE_0x${b64.substring(0,6).toUpperCase()}`;
        window.sinterDatabaseIndexer.insertAndIndexNodeRecord({
          nodeId: generatedId,
          handle: handle,
          isMaster: handle.toUpperCase().includes('MOBIUS') || handle.toUpperCase().includes('ARCHITECT'),
          braidBalance: Math.random() * 50 + 10,
          activeTaskStatus: 'VALIDATING',
          integrityRating: 0.95
        });
      }
    }, 400);
  });
}

// APP 20: WEAVE EXCHANGE
function initWeaveExchangeApp() {
  const exchange = window.weaveExchangeEngine;
  if (!exchange) return;

  const hbtn = document.getElementById('weave-heartbeat-btn');
  const select = document.getElementById('weave-template-select');
  const pulseBtn = document.getElementById('weave-pulse-manifold-btn');
  const badge = document.getElementById('weave-presence-badge');
  const consoleLog = document.getElementById('weave-console-log');

  if (!hbtn) return;

  hbtn.addEventListener('click', () => {
    exchange.step = 2; exchange.presence = 'ACTIVE_NODE';
    if (badge) { badge.textContent = 'ACTIVE_NODE'; badge.className = 'text-[7pt] font-extrabold uppercase font-mono text-cyan animate-pulse'; }
    if (select) select.disabled = false;
    if (hbtn) { hbtn.disabled = true; hbtn.textContent = '[LATTICE ACTIVATED]'; }
    if (consoleLog) consoleLog.textContent = `>> [LOOM]: Presence verified. Select a template to spin threads.`;
    playSynthBeep(988, 'sine', 0.15);
  });

  if (select) {
    select.addEventListener('change', (e) => {
      exchange.template = e.target.value; exchange.step = 3;
      if (pulseBtn) { pulseBtn.disabled = false; pulseBtn.className = 'w-full py-2.5 bg-[#5850ec] hover:bg-cyan-400 text-white font-mono text-[9px] font-bold cursor-pointer rounded uppercase border border-[#1c2d5a]'; }
      if (consoleLog) consoleLog.textContent = `>> [LOOM]: Template loaded. Work grid ready to spin threads.`;
      
      const canvas = document.getElementById('sinter-loom-workspace-canvas');
      exchange.initializeLoomCanvas(canvas, (metrics) => {
        const res = document.getElementById('weave-resonance-val');
        const eff = document.getElementById('weave-efficiency-val');
        if (res) res.textContent = metrics.resonance.toFixed(3);
        if (eff) eff.textContent = `${metrics.efficiency}%`;
      });
    });
  }

  if (pulseBtn) {
    pulseBtn.addEventListener('click', () => {
      if (pulseBtn.disabled) return;
      exchange.step = 4;
      playSynthBeep(1182, 'sine', 0.25);
      if (consoleLog) consoleLog.textContent = `>> [LOOM]: Success! Weave dispatched to active exchange at 39,420 Hz!`;
      alert("Weave successfully pulsed to Live Sovereign Exchange!");
    });
  }
}

// DEPLOYER ONE-TAP COPIER HUD
function initDeployerHubApp() {
  const zipBtn = document.getElementById('deployer-download-all');
  if (zipBtn) {
    zipBtn.addEventListener('click', async () => {
      zipBtn.disabled = true; zipBtn.textContent = 'COMPILING EXPORTS...';
      try {
        const r = await fetch('index.html'); const t = await r.text();
        const blob = new Blob([t], { type: 'text/html' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a'); a.href = url; a.download = 'index.html';
        document.body.appendChild(a); a.click(); document.body.removeChild(a);
        URL.revokeObjectURL(url);
      } catch (err) { console.error(err); }
      zipBtn.disabled = false; zipBtn.textContent = '📥 DOWNLOAD LIVE ZIP BUNDLE';
    });
  }
}

// PROFILE KEY INTERACTION
function initArchitectProfile() {
  const trigger = document.getElementById('architect-profile-capsule-trigger');
  const overlay = document.getElementById('architect-profile-overlay');
  const close = document.getElementById('close-profile-btn');

  if (trigger && overlay) {
    trigger.addEventListener('click', () => {
      overlay.classList.remove('profile-overlay-hidden');
      overlay.classList.add('profile-overlay-visible');
    });
    if (close) close.addEventListener('click', () => {
      overlay.classList.remove('profile-overlay-visible');
      overlay.classList.add('profile-overlay-hidden');
    });
  }
}

// CORE METRICS & WEB INTERFACES WIRING
function initGlowSovereignDashboard() {
  const logsEl = document.getElementById('sovereign-terminal-logs');
  const chatMessagesEl = document.getElementById('sovereign-chat-messages');
  if (logsEl) {
    logsEl.innerHTML = `<div>&gt;&gt; [SYSTEM_INIT] Sovereign state core online.</div><div>&gt;&gt; [HARMONICS] Tuning loop reference to 39,420 Hz.</div>`;
  }
}

function initClearSigCanvas() {
  const canvas = document.getElementById('clear-sig-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let offset = 0;
  function render() {
    if (canvas.offsetParent === null) { requestAnimationFrame(render); return; }
    canvas.width = canvas.parentElement.clientWidth || 200; canvas.height = 60;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.strokeStyle = '#d97706'; ctx.lineWidth = 1.25;
    ctx.beginPath();
    for (let x = 0; x < canvas.width; x++) {
      const y = 30 + Math.sin(x * 0.06 + offset) * 11;
      if (x === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
    }
    ctx.stroke();
    offset += 0.04;
    requestAnimationFrame(render);
  }
  render();
}

function initSovereignCoreServices() {
  const exchangeBtn = document.getElementById('service-exchange-submit-btn');
  const auditBtn = document.getElementById('service-audit-trigger-btn');
  const logsFeed = document.getElementById('service-logs-feed');

  if (logsFeed) logsFeed.innerHTML = `<div>[${new Date().toLocaleTimeString()}] Sovereign Core Services active on Port 3942.</div>`;

  if (exchangeBtn) {
    exchangeBtn.addEventListener('click', () => {
      const ticker = document.getElementById('service-exchange-ticker')?.value || 'SOL';
      const amount = parseFloat(document.getElementById('service-exchange-amount')?.value || '0');
      if (logsFeed) {
        logsFeed.innerHTML += `<div class="text-[#39ff14]">&gt;&gt; [EXCHANGE] Settled! Swapped ${amount} ${ticker} for $BRAID Coins at zero entropy.</div>`;
        logsFeed.scrollTop = logsFeed.scrollHeight;
      }
      playSynthBeep(880, 'sine', 0.15);
    });
  }

  if (auditBtn) {
    auditBtn.addEventListener('click', () => {
      if (logsFeed) {
        logsFeed.innerHTML += `<div class="text-yellow-400">&gt;&gt; [AUDIT] Running full ledger sweep... Quarantine status: 0 anomalies. All clear!</div>`;
        logsFeed.scrollTop = logsFeed.scrollHeight;
      }
      playSynthBeep(440, 'sawtooth', 0.2);
    });
  }
}

})();
