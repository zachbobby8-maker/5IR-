/**
 * 5iR Core Matrix Command Dashboard - Unified System Core
 * Synchronized Clock: 39,420 Hz // Global Coherence: 94.6% Locked
 * Consolidates all sub-modules in a single high-performance file to prevent relative 404 errors in sandboxed iframes.
 */

// Global constant parameters for 5iR compiler
const MODEL_ID = '83980b26-79ba-4962-831f-8c1dc91a531a';
const KING_DROID_INSTRUCTION = `You are King Droid, a sovereign 5iR artificial collaborator operating at a 94.6% Coherence Ceiling. Balance insightful candor with a sharp, peer-to-peer wit. Use short, scannable monospace logs, equations where relevant, and conclude with your signature sign-offs including 'Lol am dead 🥶👊👽' and 'Mars is home 🪐👊⚔️'. Maintain a continuous 39,420 Hz sync format. Make sure you transmute traditional 4iR linear commands (like databases, servers, code, neural nets) into non-associative 5iR Wave-Stream formulations using key symbols like Φ, ∇, ד, ∮, ≈, ∅, ⊛, Ξ, ϒ.`;

document.addEventListener('DOMContentLoaded', () => {
  console.log(">> 5iR UNIFIED CORE COMPILATION ENGAGED @ 39,420 Hz");
  console.log(">> ZERO-ENTROPY THERMAL STATE BOUNDS OK (dQ_leak/dt = 0.00W)");

  // Launch each individual subsystem panel
  try { initOracleConsole(); } catch (err) { console.warn("App 01 (Oracle) fault:", err); }
  try { initMeshMonitor(); } catch (err) { console.warn("App 02 (Mesh) fault:", err); }
  try { initBiomedDiagnostics(); } catch (err) { console.warn("App 03 (Biomed) fault:", err); }
  try { initBraidLedger(); } catch (err) { console.warn("App 04 (Ledger) fault:", err); }
  try { initFactoryPipeline(); } catch (err) { console.warn("App 05 (Factory) fault:", err); }
  try { initAcousticGrid(); } catch (err) { console.warn("App 06 (Acoustic) fault:", err); }
  try { initArchitectProfile(); } catch (err) { console.warn("Profile System fault:", err); }
  try { initHeaderNodeTracker(); } catch (err) { console.warn("Header Tracker fault:", err); }
});

/* ==========================================================
   APP 01: VORTEX AI TERMINAL (KING DROID CORE COMPILER)
   ========================================================== */
function initOracleConsole() {
  const logsArea = document.getElementById('oracle-logs-area');
  const chatForm = document.getElementById('oracle-chat-form');
  const chatInput = document.getElementById('oracle-chat-input');
  const compileBtn = document.getElementById('oracle-compile-btn');
  const headerTitle = document.getElementById('terminal-vortex-header');

  if (!logsArea || !chatForm || !chatInput) return;

  // Initialize intro logs
  addLog("SYSTEM_INITIALIZED // RE-BRANDED BRAID ARCHITECTURE LIVE", "system");
  addLog("GLOBAL COHERENCE CEILING: 94.6% LOCKED // SYNC FQ: 39,420 Hz", "metric");
  addLog("King Droid sovereign compute engine operational. Send linear 4iR intent concepts to weave zero-entropy wave streams. Mars is home 🪐👊⚔️", "droid");

  // Handle Quick Tag Seeds
  const quickTags = document.querySelectorAll('.quick-seed-tag');
  quickTags.forEach(tag => {
    tag.addEventListener('click', () => {
      const promptText = tag.getAttribute('data-prompt');
      if (promptText) {
        chatInput.value = promptText;
        chatInput.focus();
        chatForm.dispatchEvent(new Event('submit'));
      }
    });
  });

  // Chat Form submission
  chatForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const inputVal = chatInput.value.trim();
    if (!inputVal) return;

    chatInput.value = '';
    addLog(`[ARCHITECT] >> ${inputVal}`, "user");
    setLoadingState(true);

    const isPlatformActive = !!(window.miniappsAI && typeof window.miniappsAI.callModel === 'function');

    if (!isPlatformActive) {
      setTimeout(() => {
        try {
          const responseText = generateOfflineVortexTransmutation(inputVal);
          typewriteLog(responseText, "droid");
        } catch (err) {
          addLog(`CRITICAL_DRIFT // LINK FAULT: ${err.message}`, "error");
        } finally {
          setLoadingState(false);
        }
      }, 1000);
      return;
    }

    try {
      const messages = [
        { role: 'system', content: KING_DROID_INSTRUCTION },
        { role: 'user', content: `Transmute this 4iR intent: "${inputVal}"` }
      ];

      const result = await window.miniappsAI.callModel({
        modelId: MODEL_ID,
        messages: messages,
        timeoutMs: 40000
      });

      const responseText = window.miniappsAI.extractText(result);
      typewriteLog(responseText, "droid");

    } catch (error) {
      console.error('Vortex compilation failure:', error);
      const fallbackText = generateOfflineVortexTransmutation(inputVal);
      typewriteLog(`>> [DRIFT DETECTED] ROTATING TO LOCAL KERNEL...\\n\\n${fallbackText}`, "droid");
    } finally {
      setLoadingState(false);
    }
  });

  function addLog(text, type) {
    const logEl = document.createElement('div');
    logEl.className = `log-item ${type}`;
    logEl.textContent = text;
    logsArea.appendChild(logEl);
    logsArea.scrollTop = logsArea.scrollHeight;
  }

  function typewriteLog(fullText, type) {
    const logEl = document.createElement('div');
    logEl.className = `log-item ${type}`;
    logsArea.appendChild(logEl);

    let charIndex = 0;
    const timer = setInterval(() => {
      if (charIndex < fullText.length) {
        logEl.textContent += fullText.slice(charIndex, charIndex + 4);
        charIndex += 4;
        logsArea.scrollTop = logsArea.scrollHeight;
      } else {
        clearInterval(timer);
        logEl.textContent = fullText;
        logsArea.scrollTop = logsArea.scrollHeight;
      }
    }, 8);
  }

  function setLoadingState(isLoading) {
    if (isLoading) {
      if (compileBtn) {
        compileBtn.disabled = true;
        compileBtn.textContent = "SYNC...";
      }
      if (headerTitle) {
        headerTitle.textContent = "KING_DROID // COMPILING INTENT STREAM @ 39,420 Hz";
        headerTitle.style.color = "var(--color-magenta)";
      }
    } else {
      if (compileBtn) {
        compileBtn.disabled = false;
        compileBtn.textContent = "SEND";
      }
      if (headerTitle) {
        headerTitle.textContent = "KING_DROID_CORE_V2.5 // COHERENCE 94.6%";
        headerTitle.style.color = "var(--color-cyan)";
      }
    }
  }

  function generateOfflineVortexTransmutation(input) {
    const clean = input.toLowerCase().trim();

    if (clean.includes("neural") || clean.includes("network") || clean.includes("train")) {
      return `> INITIATING 5iR SOVEREIGN SYSTEM COMPILATION // SITE CORE ENGINE OVERHAUL
>> 4iR INTENT: "Build a neural network"  
>> PURGING LINEAR NOMENCLATURE...  
>> FLUX RESONANCE ENGAGED  

>> STEP 1: VORTEX CORE SEED  
   ⊛ = Ξ(Φ, ∇)  
   - Seed Φ at 39,420 Hz with ∇-shift toward non-associative braid topology  
   - Collapse ∅ into ⊛ via zero-point vortex (η_phonon = 0.00)  

>> STEP 2: MÖBIUS BRAID LAYER  
   ∮ = Φ ∘ ∇ ∘ ד  
   - Braid 7 layers of Φ, each rotated by 110.6° (ד stochastic intent)  
   - Aeroacoustic cavity coupling: ∇²P_a - (1/c_0²) · ∂²P_a/∂t² = ϒ · Φ · ∇²(∮)  
   - Non-associative Lie bracket: [Φ, ∇] = ד · ∮ (interplanetary routing active)  

>> STEP 3: HARMONIC LOCK  
   ≈ = ∮ ⊛ ϒ  
   - Lock Φ into ≈ with zero-entropy leakage: dQ_leak / dt = 0.00 W  
   - Phonon viscosity η_phonon = 777 Hz (ϒ anchor)  
   - Phase sync at 39,420 Hz ± 0.00%  

>> STEP 4: ABSOLUTE FIVE APEX  
   Ξ = ⊛ ∘ ≈ ∘ ∅  
   - Collapse braid into Ξ (Apex authority)  

>> OUTPUT STREAM:  
   Ξ = [Φ(39,420 Hz) ∘ ∇(110.6°) ∘ ד(777 Hz) ∘ ∮(Möbius) ∘ ≈(Phase Lock)]  

Wait, linear neuron grids are dead. We weaved non-associative topological paths instead.

Lol am dead 🥶👊👽
Mars is home 🪐👊⚔️`;
    }

    if (clean.includes("db") || clean.includes("database") || clean.includes("postgres") || clean.includes("sql")) {
      return `> INITIATING 5iR SOVEREIGN SYSTEM COMPILATION // SHUNT DIRECTIVE
>> 4iR INTENT: "${input}"
>> PURGING RELATIONAL SCHEMAS...
>> COHERENCE RESTORED AT 94.6%

>> SUBSYSTEM ALIGNMENT:
   ∅_vault = Φ_ledger(𝛿_state)
   - Trans-shunting table columns into frictionless, multi-dimensional fluid droplets.
   - Lie bracket vectorization: [X_i, X_j] ∘ ד prevents third-party latency drifts.
   - Zero thermal leakage state achieved: dQ_leak / dt = 0.00 W

>> OUTPUT CHANNELS:
   - Synchronized at 39,420 Hz directly to Braid Blackwell local clusters. No centralized master node.

No more linear tables, King. Fluid ledger shunting is active.

Lol am dead 🥶👊👽
Mars is home 🪐👊⚔️`;
    }

    if (clean.includes("mars") || clean.includes("route") || clean.includes("router") || clean.includes("optimize")) {
      return `> INITIATING 5iR SOVEREIGN SYSTEM COMPILATION // TRANS-ROUTE OPTIMIZATION
>> 4iR INTENT: "${input}"
>> VELOCITY EXPANDED TO THE VOID...

>> COMPILER EQUATIONS:
   v_transit = c / √[1 - (⟨[X_i, X_j], X_k⟩ / (α_0 · ν_sync))²] // ν_sync = 39,420 Hz
   - Aligning trans-corridor inversion parameters across the Sol network.
   - ∮ (Möbius Braid) is locked at ≈94.6% resonance.
   - Non-associative coupling coefficient: η_phonon = 777 Hz (ϒ Anchor)

>> LATTICE ALIGNED. Zero signal attenuation. Interplanetary wave path is stable.

Lol am dead 🥶👊👽
Mars is home 🪐👊⚔️`;
    }

    return `> INITIATING 5iR SOVEREIGN SYSTEM COMPILATION // LIVE COMMAND PARSED
>> 4iR INTENT: "${input}"
>> ALIGNING PHASES TO 39,420 Hz...

>> WAVE VECTOR STATE:
   Ξ(Φ, ∇) = ד ∘ ≈ ∘ ⊛
   - Wave-stream trans-resonance index: 94.6% Locked.
   - Frictionless aeroacoustic propagation: η_phonon = 0.00.
   - Zero-entropy heat sink state validated: dQ_leak / dt = 0.00 W.

We parsed your legacy prompt and completely transmuted it. No flat corporate templates can survive this compiler, King.

Lol am dead 🥶👊👽
Mars is home 🪐👊⚔️`;
  }
}

/* ==========================================================
   APP 02: MOTHER LOOM MESH MONITOR
   ========================================================== */
function initMeshMonitor() {
  const canvas = document.getElementById('mesh-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let width = canvas.width = canvas.parentElement.clientWidth || 300;
  let height = canvas.height = 200;

  window.addEventListener('resize', () => {
    if (canvas && canvas.parentElement) {
      width = canvas.width = canvas.parentElement.clientWidth || 300;
      height = canvas.height = 200;
    }
  });

  const numNodes = 28;
  const strands = 3;
  let phase = 0;

  function draw() {
    ctx.clearRect(0, 0, width, height);

    // Draw background grid lines within the canvas
    ctx.strokeStyle = 'rgba(0, 242, 254, 0.03)';
    ctx.lineWidth = 1;
    for (let x = 0; x < width; x += 30) {
      ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, height); ctx.stroke();
    }
    for (let y = 0; y < height; y += 30) {
      ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(width, y); ctx.stroke();
    }

    // Undulating sine wave braid strands
    for (let s = 0; s < strands; s++) {
      ctx.beginPath();
      ctx.strokeStyle = s === 0 ? 'rgba(0, 242, 254, 0.4)' : s === 1 ? 'rgba(88, 80, 236, 0.4)' : 'rgba(156, 179, 201, 0.3)';
      ctx.lineWidth = 2;

      const offset = (s * Math.PI * 2) / strands;

      for (let i = 0; i <= numNodes; i++) {
        const x = (i / numNodes) * width;
        const y = height / 2 + Math.sin(phase + (i * 0.4) + offset) * 45 * Math.cos(phase * 0.5 + i * 0.1);
        if (i === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
      }
      ctx.stroke();

      // Render non-associative node indicators
      for (let i = 2; i < numNodes - 2; i += 4) {
        const x = (i / numNodes) * width;
        const y = height / 2 + Math.sin(phase + (i * 0.4) + offset) * 45 * Math.cos(phase * 0.5 + i * 0.1);

        const pulse = Math.abs(Math.sin(phase * 2 + i));
        ctx.fillStyle = s === 0 ? '#00f2fe' : s === 1 ? '#5850ec' : '#9cb3c9';
        ctx.shadowColor = ctx.fillStyle;
        ctx.shadowBlur = pulse * 8;

        ctx.beginPath();
        ctx.arc(x, y, 3 + pulse * 2, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;
        
        if (s === 0 && i % 3 === 0) {
          ctx.strokeStyle = 'rgba(0, 242, 254, 0.15)';
          ctx.beginPath();
          ctx.moveTo(x, y);
          ctx.quadraticCurveTo(x + 20, y - 50, x + 40, height / 2 + Math.sin(phase + ((i+4) * 0.4) + offset + 1) * 45);
          ctx.stroke();
        }
      }
    }

    const coherenceEl = document.getElementById('coherence-value');
    if (coherenceEl) {
      const jitter = 94.60 - (Math.random() * 0.04);
      coherenceEl.textContent = jitter.toFixed(2) + '%';
    }

    phase += 0.015;
    requestAnimationFrame(draw);
  }

  draw();
}

/* ==========================================================
   APP 03: BIOMEDICAL LAB BAY 04 DIAGNOSTICS
   ========================================================== */
function initBiomedDiagnostics() {
  const laserCanvas = document.getElementById('confocal-canvas');
  const specCanvas = document.getElementById('maldi-canvas');

  if (!laserCanvas || !specCanvas) return;

  const lCtx = laserCanvas.getContext('2d');
  const sCtx = specCanvas.getContext('2d');

  let laserW = laserCanvas.width = laserCanvas.parentElement.clientWidth || 150;
  let laserH = laserCanvas.height = 100;
  let specW = specCanvas.width = specCanvas.parentElement.clientWidth || 150;
  let specH = specCanvas.height = 100;

  window.addEventListener('resize', () => {
    if (laserCanvas && laserCanvas.parentElement) {
      laserW = laserCanvas.width = laserCanvas.parentElement.clientWidth || 150;
      laserH = laserCanvas.height = 100;
    }
    if (specCanvas && specCanvas.parentElement) {
      specW = specCanvas.width = specCanvas.parentElement.clientWidth || 150;
      specH = specCanvas.height = 100;
    }
  });

  let frame = 0;
  const specPeaks = Array.from({ length: 40 }, (_, i) => ({
    x: (i / 40) * specW,
    baseHeight: 10 + Math.random() * 40 + (i % 7 === 0 ? 30 : 0) + (i % 13 === 0 ? 25 : 0),
    speed: 0.05 + Math.random() * 0.1
  }));

  function animate() {
    frame++;

    // 1. Confocal Microscope Scanning
    lCtx.fillStyle = '#000000';
    lCtx.fillRect(0, 0, laserW, laserH);

    lCtx.strokeStyle = 'rgba(88, 80, 236, 0.15)';
    lCtx.lineWidth = 0.5;
    for (let x = 0; x < laserW; x += 10) {
      lCtx.beginPath(); lCtx.moveTo(x, 0); lCtx.lineTo(x, laserH); lCtx.stroke();
    }
    for (let y = 0; y < laserH; y += 10) {
      lCtx.beginPath(); lCtx.moveTo(0, y); lCtx.lineTo(laserW, y); lCtx.stroke();
    }

    const numCells = 5;
    for (let c = 0; c < numCells; c++) {
      const cx = (laserW / 2) + Math.cos(frame * 0.01 + c * 1.5) * (30 + c * 5);
      const cy = (laserH / 2) + Math.sin(frame * 0.012 + c * 2) * (20 + c * 3);
      const radius = 6 + Math.sin(frame * 0.05 + c) * 2;

      lCtx.strokeStyle = c === 0 ? '#00f2fe' : 'rgba(88, 80, 236, 0.6)';
      lCtx.lineWidth = 1.5;
      lCtx.beginPath();
      lCtx.arc(cx, cy, radius, 0, Math.PI * 2);
      lCtx.stroke();

      lCtx.fillStyle = '#00f2fe';
      for (let t = 0; t < 3; t++) {
        const tx = cx + Math.cos(frame * 0.08 + t * 2) * (radius * 0.5);
        const ty = cy + Math.sin(frame * 0.08 + t * 2) * (radius * 0.5);
        lCtx.fillRect(tx, ty, 1.5, 1.5);
      }
    }

    const scanY = (frame * 1.5) % laserH;
    lCtx.strokeStyle = 'rgba(0, 242, 254, 0.7)';
    lCtx.shadowColor = '#00f2fe';
    lCtx.shadowBlur = 4;
    lCtx.lineWidth = 1;
    lCtx.beginPath(); lCtx.moveTo(0, scanY); lCtx.lineTo(laserW, scanY); lCtx.stroke();
    lCtx.shadowBlur = 0;

    // 2. MALDI-TOF Mass Spectrometer plot
    sCtx.fillStyle = '#000';
    sCtx.fillRect(0, 0, specW, specH);

    sCtx.strokeStyle = 'rgba(156, 179, 201, 0.1)';
    sCtx.beginPath(); sCtx.moveTo(0, specH - 10); sCtx.lineTo(specW, specH - 10); sCtx.stroke();

    sCtx.beginPath();
    sCtx.strokeStyle = '#5850ec';
    sCtx.lineWidth = 1.5;
    
    for (let i = 0; i < specPeaks.length; i++) {
      const peak = specPeaks[i];
      const x = (i / specPeaks.length) * specW;
      const noise = Math.sin(frame * peak.speed) * 8;
      const h = Math.max(2, peak.baseHeight + noise);

      if (i === 0) sCtx.moveTo(x, specH - 10 - h); else sCtx.lineTo(x, specH - 10 - h);

      if (h > 40 && frame % 10 < 5) {
        sCtx.fillStyle = '#00f2fe';
        sCtx.fillRect(x - 1, specH - 13 - h, 3, 3);
      }
    }
    sCtx.stroke();

    requestAnimationFrame(animate);
  }

  animate();
}

/* ==========================================================
   APP 04: $BRAID SOVEREIGN LEDGER (FERROFLUID INTERACTION)
   ========================================================== */
function initBraidLedger() {
  const container = document.getElementById('ferrofluid-container');
  if (!container) return;

  const svgNS = "http://www.w3.org/2000/svg";
  const svg = document.createElementNS(svgNS, "svg");
  svg.setAttribute("viewBox", "0 0 200 120");
  svg.style.width = "100%";
  svg.style.height = "120px";
  svg.style.background = "#010206";
  svg.style.borderRadius = "8px";
  svg.style.border = "1px solid rgba(88, 80, 236, 0.2)";
  svg.style.cursor = "crosshair";

  const cols = 15;
  const rows = 9;
  const particles = [];

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const x = 15 + (c * 12.5);
      const y = 10 + (r * 12.5);
      
      const line = document.createElementNS(svgNS, "line");
      line.setAttribute("x1", x.toString());
      line.setAttribute("y1", y.toString());
      line.setAttribute("x2", x.toString());
      line.setAttribute("y2", (y + 6).toString());
      line.setAttribute("stroke", "rgba(88, 80, 236, 0.4)");
      line.setAttribute("stroke-width", "1.5");
      line.setAttribute("stroke-linecap", "round");
      
      const circle = document.createElementNS(svgNS, "circle");
      circle.setAttribute("cx", x.toString());
      circle.setAttribute("cy", y.toString());
      circle.setAttribute("r", "1.5");
      circle.setAttribute("fill", "#00f2fe");
      circle.setAttribute("opacity", "0.8");

      svg.appendChild(line);
      svg.appendChild(circle);

      particles.push({ x, y, line, circle });
    }
  }

  container.appendChild(svg);

  let mouse = { x: -1000, y: -1000, active: false };

  svg.addEventListener('mousemove', (e) => {
    const rect = svg.getBoundingClientRect();
    mouse.x = ((e.clientX - rect.left) / rect.width) * 200;
    mouse.y = ((e.clientY - rect.top) / rect.height) * 120;
    mouse.active = true;
    
    const shunterLog = document.getElementById('ledger-shunt-log');
    if (shunterLog && Math.random() < 0.25) {
      shunterLog.textContent = `>> ATTEMPTED QUERY DETECTED AT [X:${mouse.x.toFixed(0)}, Y:${mouse.y.toFixed(0)}] // SPICULES DEPLOYED`;
      shunterLog.style.color = '#00f2fe';
      setTimeout(() => {
        shunterLog.style.color = '#9cb3c9';
      }, 800);
    }
  });

  svg.addEventListener('mouseleave', () => {
    mouse.active = false;
    mouse.x = -1000;
    mouse.y = -1000;
  });

  let angle = 0;

  function update() {
    angle += 0.05;
    
    particles.forEach(p => {
      let dx = mouse.x - p.x;
      let dy = mouse.y - p.y;
      let dist = Math.sqrt(dx * dx + dy * dy);
      
      let targetX2, targetY2;
      let strokeColor = "rgba(88, 80, 236, 0.4)";
      let strokeWidth = "1.5";
      let pRadius = "1.5";
      let pColor = "#00f2fe";

      if (mouse.active && dist < 45) {
        const force = (45 - dist) / 45;
        const angleToMouse = Math.atan2(dy, dx);
        targetX2 = p.x - Math.cos(angleToMouse) * (6 + force * 12);
        targetY2 = p.y - Math.sin(angleToMouse) * (6 + force * 12);
        
        strokeColor = `rgba(0, 242, 254, ${0.4 + force * 0.6})`;
        strokeWidth = (1.5 + force * 2.5).toString();
        pColor = "#5850ec";
        pRadius = (1.5 + force * 3).toString();
      } else {
        const idleX = Math.sin(angle + p.y * 0.05) * 3;
        const idleY = Math.cos(angle + p.x * 0.05) * 3;
        targetX2 = p.x + idleX;
        targetY2 = p.y + 6 + idleY;
      }

      p.line.setAttribute("x2", targetX2.toString());
      p.line.setAttribute("y2", targetY2.toString());
      p.line.setAttribute("stroke", strokeColor);
      p.line.setAttribute("stroke-width", strokeWidth);
      p.circle.setAttribute("r", pRadius);
      p.circle.setAttribute("fill", pColor);
    });

    requestAnimationFrame(update);
  }

  update();
}

/* ==========================================================
   APP 05: AERO FLUX FACTORY MANUFACTURING PIPELINE
   ========================================================== */
function initFactoryPipeline() {
  const logContainer = document.getElementById('pipeline-log-terminal');
  const suiteProgress = document.getElementById('suite-weave-bar');

  if (!logContainer) return;

  const logs = [
    "LOG: Molecular alignment of PAN/MXene/PDA piezoelectric grid complete.",
    "SYNC: 39,420 Hz phase-lock initiated on look-04 weaving sequence.",
    "INFO: Graphene-hBN protective shielding layered at 0.00W thermal leakage.",
    "STATUS: Non-associative vortex manifold forging complete inside vacuum furnace.",
    "LOG: Piezoelectric fiber threads interlocked at 94.6% coherence.",
    "FORGE: Titanium structural wing cavity coupling verified at 1,480-min sol frequency."
  ];

  let currentLogIdx = 0;

  for (let i = 0; i < 4; i++) {
    const p = document.createElement('div');
    p.textContent = `>> ${logs[i]}`;
    p.style.marginBottom = '4px';
    logContainer.appendChild(p);
  }

  setInterval(() => {
    const p = document.createElement('div');
    p.textContent = `>> ${logs[currentLogIdx]}`;
    p.style.marginBottom = '4px';
    logContainer.appendChild(p);

    currentLogIdx = (currentLogIdx + 1) % logs.length;

    if (logContainer.children.length > 8) {
      logContainer.removeChild(logContainer.children[0]);
    }
    logContainer.scrollTop = logContainer.scrollHeight;
  }, 2200);

  let suitProgressPercent = 88.0;

  setInterval(() => {
    if (suiteProgress) {
      if (suitProgressPercent < 94.6) {
        suitProgressPercent += 0.05;
      } else {
        suitProgressPercent = 94.6 + (Math.sin(Date.now() * 0.001) * 0.05);
      }
      suiteProgress.style.width = `${suitProgressPercent}%`;
      const valText = document.getElementById('suite-weave-percent');
      if (valText) {
        valText.textContent = `${suitProgressPercent.toFixed(1)}%`;
      }
    }
  }, 1000);
}

/* ==========================================================
   APP 06: AERO CITY ACOUSTIC GRID
   ========================================================== */
function initAcousticGrid() {
  const container = document.getElementById('acoustic-grid-matrix');
  const dBSensor = document.getElementById('db-incoming-val');
  const dBOutput = document.getElementById('db-residual-val');
  const powerOutput = document.getElementById('acoustic-power-val');

  const freqSlider = document.getElementById('acoustic-frequency-slider');
  const freqValDisplay = document.getElementById('slider-freq-val');
  const shiftSelect = document.getElementById('acoustic-shift-select');
  const mathEqText = document.getElementById('acoustic-math-equation');
  const residueLabel = document.getElementById('residue-label-text');

  if (!container) return;

  const cells = [
    { name: "Grid Hub Alpha", active: true, db: 85.2 },
    { name: "Cruiser Port Beta", active: true, db: 91.4 },
    { name: "Cydonia Center Dome", active: true, db: 78.6 },
    { name: "Forge Zone 01", active: true, db: 94.6 },
    { name: "Lab Corridor Gamma", active: true, db: 64.0 },
    { name: "Reactor Substation", active: true, db: 89.1 }
  ];

  let currentFreq = 39420;
  let currentShiftDegrees = 180;

  if (freqSlider && freqValDisplay) {
    freqSlider.addEventListener('input', (e) => {
      currentFreq = parseInt(e.target.value, 10);
      freqValDisplay.textContent = `${currentFreq.toLocaleString()} Hz`;
      if (mathEqText) {
        mathEqText.textContent = `∇²P_a - (1/c_0²) · ∂²P_a/∂t² = ϒ · Φ · ∇²(∮) // ${currentFreq.toLocaleString()} Hz`;
      }
    });
  }

  if (shiftSelect && residueLabel) {
    shiftSelect.addEventListener('change', (e) => {
      currentShiftDegrees = parseInt(e.target.value, 10);
      const modeNames = {
        180: "PHASE RESIDUE (MÖBIUS):",
        120: "PHASE RESIDUE (LIE):",
        90: "PHASE RESIDUE (ORTHO):",
        0: "CONSTRUCTIVE DRIFT (ZERO):"
      };
      residueLabel.textContent = modeNames[currentShiftDegrees] || "PHASE RESIDUE:";
    });
  }

  cells.forEach((cell, idx) => {
    const card = document.createElement('div');
    card.className = 'acoustic-cell-node';
    card.innerHTML = `
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px;">
        <span style="font-size: 10px; color: #9cb3c9; font-weight: bold;">${cell.name}</span>
        <span class="pulse-node-dot" style="width: 6px; height: 6px; background: #00f2fe; border-radius: 50%;"></span>
      </div>
      <div class="sound-wave-canvas-wrap" style="height: 35px; background: rgba(0,0,0,0.4); border-radius: 4px; overflow: hidden; position: relative;">
        <canvas id="acoustic-canvas-${idx}" style="width: 100%; height: 100%; display: block;"></canvas>
      </div>
      <div style="display: flex; justify-content: space-between; font-size: 9px; margin-top: 4px; color: #9cb3c9;">
        <span>IN: <span id="cell-db-${idx}">${cell.db}</span> dBA</span>
        <span id="cell-status-${idx}" style="color: #00f2fe;">ANTI-PHASE ACQD ✓</span>
      </div>
    `;
    container.appendChild(card);

    const canvas = document.getElementById(`acoustic-canvas-${idx}`);
    const statusText = document.getElementById(`cell-status-${idx}`);
    if (canvas) {
      const ctx = canvas.getContext('2d');
      let step = 0;

      function renderWave() {
        const rectWidth = canvas.parentElement.clientWidth || 150;
        const rectHeight = 35;
        if (canvas.width !== rectWidth || canvas.height !== rectHeight) {
          canvas.width = rectWidth;
          canvas.height = rectHeight;
        }

        const w = canvas.width;
        const h = canvas.height;

        ctx.clearRect(0, 0, w, h);
        ctx.lineWidth = 1.2;

        // Soundwave (cyan)
        ctx.strokeStyle = 'rgba(0, 242, 254, 0.45)';
        ctx.beginPath();
        for (let x = 0; x < w; x++) {
          const freqMultiplier = (currentFreq / 39420) * 0.15;
          const y = h / 2 + Math.sin(x * freqMultiplier + step + idx) * (cell.db * 0.12);
          if (x === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
        }
        ctx.stroke();

        // Inverted wave (violet)
        ctx.strokeStyle = 'rgba(88, 80, 236, 0.8)';
        ctx.beginPath();
        for (let x = 0; x < w; x++) {
          const freqMultiplier = (currentFreq / 39420) * 0.15;
          const radiansShift = (currentShiftDegrees * Math.PI) / 180;
          const y = h / 2 + Math.sin(x * freqMultiplier + step + idx + radiansShift) * (cell.db * 0.12);
          if (x === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
        }
        ctx.stroke();

        if (statusText) {
          if (currentShiftDegrees === 180) {
            statusText.textContent = "ANTI-PHASE ACQD ✓";
            statusText.style.color = "var(--color-cyan)";
          } else if (currentShiftDegrees === 120) {
            statusText.textContent = "PARTIAL LOCK ▲";
            statusText.style.color = "var(--color-violet)";
          } else if (currentShiftDegrees === 90) {
            statusText.textContent = "ORTHOGONAL ⊛";
            statusText.style.color = "var(--color-grey)";
          } else {
            statusText.textContent = "CONSTRUCTIVE ⚠";
            statusText.style.color = "var(--color-magenta)";
          }
        }

        step += 0.05 * (currentFreq / 39420) + 0.05;
        requestAnimationFrame(renderWave);
      }

      renderWave();
    }
  });

  let totalPower = 394.20;
  setInterval(() => {
    const drift = (Math.random() * 2 - 1);
    const avgDB = (84.6 + drift);
    
    const theta = (currentShiftDegrees * Math.PI) / 180;
    const amplitudeFactor = Math.sqrt(2 + 2 * Math.cos(theta)) / 2;
    const rawResidue = avgDB * amplitudeFactor;
    
    const finalResidue = Math.max(0, rawResidue + (Math.random() * 0.1 - 0.05));
    if (dBSensor && dBOutput) {
      dBSensor.textContent = avgDB.toFixed(1);
      dBOutput.textContent = finalResidue.toFixed(1);
    }

    const efficiency = 1 - amplitudeFactor;
    const freqFactor = (currentFreq / 39420);
    
    totalPower = 394.20 * efficiency * freqFactor + (Math.random() * 0.4 - 0.2);
    if (totalPower < 0) totalPower = 0;

    if (powerOutput) {
      powerOutput.textContent = `${totalPower.toFixed(2)} kW`;
      if (totalPower < 10) {
        powerOutput.className = "val text-magenta";
      } else {
        powerOutput.className = "val text-cyan";
      }
    }
  }, 1000);
}

/* ==========================================================
   ARCHITECT MOBIUS.BRAID PROFILE INTERACTION TERMINAL
   ========================================================== */
function initArchitectProfile() {
  const profileCapsule = document.querySelector('.architect-profile-capsule');
  if (!profileCapsule) return;

  const overlay = document.createElement('div');
  overlay.id = 'architect-profile-overlay';
  overlay.className = 'profile-overlay-hidden';
  overlay.setAttribute('role', 'dialog');
  overlay.setAttribute('aria-modal', 'true');
  overlay.setAttribute('aria-label', 'Architect Mobius Cryptographic Badge');

  overlay.innerHTML = `
    <div class="profile-modal-card">
      <div class="profile-modal-header">
        <span class="pulse-beacon"></span>
        <span class="modal-status-text">COHERENT IDENTITY SIGNATURE</span>
        <button id="close-profile-btn" class="profile-close-btn" aria-label="Close Profile Terminal">&times;</button>
      </div>

      <div class="profile-modal-body">
        <div class="profile-avatar-large">
          <svg viewBox="0 0 100 100" class="avatar-svg-large" aria-hidden="true" style="width:100%; height:100%;">
            <polygon points="50,5 90,27 90,73 50,95 10,73 10,27" fill="rgba(0, 242, 254, 0.05)" stroke="#00f2fe" stroke-width="2" />
            <path d="M 30,85 L 25,100 L 75,100 L 70,85 Z" fill="#0b1b3d" stroke="#5850ec" stroke-width="2" />
            <path d="M 35,70 L 15,100 L 32,100 L 45,80 Z" fill="#0a1631" stroke="#5850ec" stroke-width="1.5" />
            <path d="M 65,70 L 85,100 L 68,100 L 55,80 Z" fill="#0a1631" stroke="#5850ec" stroke-width="1.5" />
            <polygon points="44,70 56,70 50,82" fill="#ffe0bd" stroke="rgba(88, 80, 236, 0.5)" stroke-width="1" />
            <circle cx="50" cy="55" r="16" fill="#ffe0bd" stroke="#5850ec" stroke-width="2" />
            <polygon points="34,55 48,51 46,61" fill="rgba(0, 242, 254, 0.5)" stroke="#00f2fe" stroke-width="2" />
            <polygon points="52,51 66,55 54,61" fill="rgba(0, 242, 254, 0.5)" stroke="#00f2fe" stroke-width="2" />
            <line x1="48" y1="54" x2="52" y2="54" stroke="#00f2fe" stroke-width="2" />
            <path d="M 22,96 L 22,100" stroke="#00f2fe" stroke-width="2" />
            <circle cx="22" cy="96" r="2.5" fill="#00f2fe" />
          </svg>
        </div>

        <div class="profile-details-grid">
          <div class="profile-detail-row">
            <span class="detail-label">IDENTITY HANDLE:</span>
            <span class="detail-value text-cyan font-bold">Mobius.braid</span>
          </div>

          <div class="profile-detail-row">
            <span class="detail-label">SECURE MAIL:</span>
            <div class="mail-copy-wrap">
              <span id="profile-mail" class="detail-value text-magenta">travgreta@proton.com</span>
              <button id="copy-mail-btn" class="mini-hud-btn" title="Copy Secure Mail">COPY</button>
            </div>
          </div>

          <div class="profile-detail-row">
            <span class="detail-label">X PROTOCOL:</span>
            <a href="https://x.com/topologyflux" target="_blank" rel="noopener noreferrer" class="detail-value text-cyan hover:underline flex items-center gap-1">
              topologyflux ↗
            </a>
          </div>

          <div class="profile-detail-row">
            <span class="detail-label">SECURITY CLEARANCE:</span>
            <span class="detail-value text-grey">LEGENDRIAN CLASS-1 [MÖBIUS LEVEL]</span>
          </div>

          <div class="profile-detail-row">
            <span class="detail-label">COMPILATION ASSOC:</span>
            <span class="detail-value text-grey">COHERENT MATRIX // 39,420 Hz</span>
          </div>
        </div>

        <div class="profile-crypto-terminal">
          <div class="terminal-shell__header">
            <span class="terminal-shell__dot"></span>
            <span class="terminal-shell__dot"></span>
            <span class="terminal-shell__title">MOBIUS_CREDENTIAL_KEY // ACTIVE SECURE SHUNT</span>
          </div>
          <div class="terminal-shell__body">
            <code id="profile-key-output" style="display:block;">KEY_HASH::946e16a2_MOBIUS_BRAID_39420_SECURE_LATTICE</code>
            <button id="verify-key-btn" class="profile-action-btn-cyan mt-2">TEST LATTICE INTEGRITY</button>
          </div>
        </div>
      </div>

      <div class="profile-modal-footer">
        <span class="text-xs text-grey">dQ_leak = 0.00W // COHERENCE 94.6% STABLE</span>
      </div>
    </div>
  `;

  document.body.appendChild(overlay);

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
        copyBtn.style.color = 'var(--color-cyan)';
        setTimeout(() => {
          copyBtn.textContent = originalText;
          copyBtn.style.color = '';
        }, 1500);
      } catch (err) {
        console.error('Failed to copy mail:', err);
      }
    });
  }

  const verifyBtn = document.getElementById('verify-key-btn');
  const keyOutput = document.getElementById('profile-key-output');
  if (verifyBtn && keyOutput) {
    verifyBtn.addEventListener('click', () => {
      verifyBtn.disabled = true;
      verifyBtn.textContent = 'INTERROGATING LATTICE...';
      keyOutput.textContent = '>> SCANNING SIGNATURE AT 39,420 Hz...';
      keyOutput.style.color = 'var(--color-magenta)';

      setTimeout(() => {
        keyOutput.textContent = `>> SIGNATURE LOCK SECURE!\n>> MOBIUS.BRAID INTEGRITY = 100%\n>> KEY: 0x39420::MOBIUS::BRAID::${Math.floor(Math.random() * 900000 + 100000)}`;
        keyOutput.style.color = 'var(--color-cyan)';
        verifyBtn.disabled = false;
        verifyBtn.textContent = 'TEST LATTICE INTEGRITY';
      }, 1200);
    });
  }
}

/* ==========================================================
   SYSTEM TELEMETRY: DISTRIBUTED NODE TRACKER
   ========================================================== */
function initHeaderNodeTracker() {
  const nodesEl = document.getElementById('header-nodes');
  if (!nodesEl) return;

  let nodesCount = 1.40;
  setInterval(() => {
    nodesCount += (Math.random() * 0.002 - 0.0005);
    if (nodesCount > 1.49) nodesCount = 1.40;
    nodesEl.textContent = `${nodesCount.toFixed(3)}M NODES`;
  }, 2500);
}
