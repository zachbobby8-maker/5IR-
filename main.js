/**
 * Braid Command Suite Main Tactical Controller
 * Immersive Premium 7-Core Responsive Command Application
 * High-Resolution Theme Implementation (Black vs White, flat styling, no neon glows)
 */

// Ensure window.miniappsAI exists with robust mock fallbacks to prevent any loading crashes outside of the iframe sandbox!
if (typeof window.miniappsAI === "undefined") {
  window.miniappsAI = {
    storage: {
      getItem: async (key) => {
        try {
          return localStorage.getItem(key);
        } catch(e) {
          return null;
        }
      },
      setItem: async (key, val) => {
        try {
          localStorage.setItem(key, val);
        } catch(e) {}
      },
      removeItem: async (key) => {
        try {
          localStorage.removeItem(key);
        } catch(e) {}
      }
    },
    callModel: async ({ modelId, messages }) => {
      console.warn("miniappsAI is missing. Running mock model response.");
      return {
        output: [
          {
            type: "text",
            text: `[SYNTAX] OK\n[MATH_MATCH] OK\n[COHERENCE] OK\n[DISBURSE] OK\n[VERDICT] APPROVED\n\n[DETAILS]\nSovereign simulated local fallback core. Core executed static parse verification successfully.`
          }
        ]
      };
    },
    extractText: (result) => {
      if (result && result.output && result.output[0]) {
        return result.output[0].text;
      }
      return "";
    }
  };
}

// I18N Helper Function
const t = (key, values) => window.miniappI18n?.t(key, values) ?? key;

// GLOBAL APP STATE MATRIX
const State = {
  user: {
    handle: "Architect",
    clearance: "SOVEREIGN LEVEL-1 [ARCHITECT]",
    isSovereign: true
  },
  ledgerBalance: 5000.00,
  meshNodes: 1446720,
  globalCoherence: 94.6,
  vortexVelocity: 1.00000000,
  torsionLock: true,
  logs: [],
  isWhiteTheme: false, // Default is Black Theme
  
  // App 01: Retain state
  retain: {
    age: 34,
    exercise: 12,
    gravity: 1.0,
    density: 86.4,
    isBrittle: false
  },
  
  // App 08: Resonance state
  resonance: {
    carrier: 12500,
    decay: 0.45,
    convergence: 1.22,
    phaseAngle: 0.0
  },

  // App 16: Work Grid state
  work: {
    activeJob: null,
    payout: 0,
    completedCount: 0,
    compilerCode: ""
  },

  // App 18: Bio Bridge state
  bio: {
    bpm: 72,
    hrv: 1.00042,
    gazeX: 0,
    gazeY: 0,
    bleConnected: false
  },

  // Models
  models: {
    textModelId: "ab52be19-0888-4937-8295-6d622fb2bf31" // Gemini 3.1 Flash Lite (Configured as Oracle Core Engine)
  }
};

// Helper colors matching the current theme state dynamically for high-res canvases
const getThemeColors = () => {
  if (State.isWhiteTheme) {
    return {
      bg: "#ffffff",
      panelBg: "#f8fafc",
      brand: "#2563eb",
      brandSoft: "rgba(37, 99, 235, 0.08)",
      success: "#16a34a",
      successSoft: "rgba(22, 163, 74, 0.08)",
      error: "#dc2626",
      muted: "#475569",
      grid: "rgba(0, 0, 0, 0.04)"
    };
  } else {
    return {
      bg: "#000000",
      panelBg: "#09090b",
      brand: "#3b82f6",
      brandSoft: "rgba(59, 130, 246, 0.1)",
      success: "#10b981",
      successSoft: "rgba(16, 185, 129, 0.1)",
      error: "#ef4444",
      muted: "#a1a1aa",
      grid: "rgba(255, 255, 255, 0.04)"
    };
  }
};

// 1. STATE PERSISTENCE USING PLATFORM ASYNC STORAGE
async function initPersistence() {
  try {
    const savedBalance = await window.miniappsAI.storage.getItem('braid_ledger_balance');
    if (savedBalance !== null) {
      State.ledgerBalance = parseFloat(savedBalance);
    }
    const savedJobs = await window.miniappsAI.storage.getItem('braid_completed_jobs_count');
    if (savedJobs !== null) {
      State.work.completedCount = parseInt(savedJobs, 10);
    }
    const savedUser = await window.miniappsAI.storage.getItem('braid_user_handle');
    if (savedUser !== null) {
      State.user.handle = savedUser;
      State.user.isSovereign = savedUser !== "Guest Node" && savedUser !== "";
      State.user.clearance = State.user.isSovereign 
        ? `SOVEREIGN LEVEL-1 [${savedUser.toUpperCase()}]` 
        : "GUEST LEVEL-0 [DEMO_NODE]";
    }
    const savedTheme = await window.miniappsAI.storage.getItem('braid_theme_white');
    if (savedTheme === 'true') {
      State.isWhiteTheme = true;
    }
  } catch (err) {
    console.warn("Storage access failed or quota exceeded:", err);
  }
}

async function saveLedgerBalance() {
  try {
    await window.miniappsAI.storage.setItem('braid_ledger_balance', State.ledgerBalance.toString());
  } catch (err) {
    console.error("Failed to save ledger balance:", err);
  }
}

// 2. BROADCAST STREAM LOGGER HELPER
function addLog(msg, type = "info") {
  const time = new Date().toLocaleTimeString();
  const logContainer = document.getElementById("dashboard-console-logs");
  const streamContainer = document.getElementById("sinter-stream-logs");
  
  let formatted = `[${time}] >> ${msg}`;
  if (type === "warning") formatted = `[${time}] [WARN] ⚠️ ${msg}`;
  if (type === "success") formatted = `[${time}] [SUCCESS] ✅ ${msg}`;
  if (type === "error") formatted = `[${time}] [ERROR] 🚨 ${msg}`;

  State.logs.push(formatted);
  if (State.logs.length > 50) State.logs.shift();

  // Update app UI targets
  if (logContainer) {
    const p = document.createElement("p");
    p.className = "py-0.5 border-b border-theme";
    p.textContent = formatted;
    if (type === "error") p.className += " text-error-theme font-medium";
    else if (type === "success") p.className += " text-success-theme font-bold";
    else if (type === "warning") p.className += " text-warning-theme font-medium";
    else p.className += " text-muted-theme";
    
    logContainer.appendChild(p);
    logContainer.scrollTop = logContainer.scrollHeight;
  }

  if (streamContainer && type === "success") {
    const div = document.createElement("div");
    div.className = "p-2 border-b border-theme text-success-theme";
    div.innerHTML = `<span class="text-brand-theme font-bold">[${State.user.handle}]</span> ${msg}`;
    streamContainer.insertBefore(div, streamContainer.firstChild);
  }
}

// 3. TOAST SYSTEM
function showToast(title, body, type = "info") {
  const wrapper = document.getElementById("toast-wrapper");
  if (!wrapper) return;

  const toast = document.createElement("div");
  
  let bgClass = "bg-panel-theme border-theme text-primary-theme";
  if (type === "error") bgClass = "bg-error-soft border-red-500 text-error-theme font-semibold";
  if (type === "success") bgClass = "bg-success-soft border-emerald-500 text-success-theme font-bold";
  if (type === "info") bgClass = "bg-brand-soft border-brand text-brand-theme font-semibold";

  toast.className = `p-4 rounded border ${bgClass} pointer-events-auto shadow-md transition-all duration-300 transform translate-y-2 opacity-0 monospace text-xs`;

  toast.innerHTML = `
    <div class="flex justify-between items-center mb-1">
      <span class="font-bold tracking-wider uppercase">${title}</span>
      <button class="toast-close text-[10px] hover:text-black dark:hover:text-white ml-4 pointer-events-auto cursor-pointer">✕</button>
    </div>
    <p class="text-[10px] text-muted-theme leading-relaxed font-semibold">${body}</p>
  `;

  wrapper.appendChild(toast);

  // Trigger animations
  setTimeout(() => {
    toast.classList.remove("translate-y-2", "opacity-0");
  }, 10);

  // Close trigger
  const closeBtn = toast.querySelector(".toast-close");
  const closeToast = () => {
    toast.classList.add("translate-y-2", "opacity-0");
    setTimeout(() => toast.remove(), 300);
  };
  closeBtn.addEventListener("click", closeToast);

  // Auto close
  setTimeout(closeToast, 4000);
}

// 4. TAB CONTROLLER SWITCHES & EASY KEYBOARD NAVIGATION
function initTabs() {
  const tabs = document.querySelectorAll(".tab-btn");
  const breadcrumb = document.getElementById("breadcrumb-current");

  function activateTab(btn) {
    const target = btn.getAttribute("data-target");
    
    // Toggle Tab Active Classes
    tabs.forEach(t => t.classList.remove("tab-active"));
    btn.classList.add("tab-active");

    // Toggle Panels Visibility
    document.querySelectorAll(".tab-view").forEach(panel => {
      if (panel.id === target) {
        panel.classList.remove("hidden");
      } else {
        panel.classList.add("hidden");
      }
    });

    // Update Breadcrumb path beautifully
    if (breadcrumb) {
      const names = {
        "app-hub": "STAGING HUB & CENTRAL COCKPIT",
        "app-retain": "VORTEX-RETAIN SKELETAL SIMULATOR // 3D ANALYSIS",
        "app-ai": "ORACLE CORE COHERENCE MATRIX // COGNITIVE TERM",
        "app-resonance": "SUPERFLUID RESONANCE SYSTEM // FREQUENCY SWEEPER",
        "app-work": "LEGENDRIAN ALGORITHM WORK GRID // COMPILATION CONTEXT",
        "app-bio": "BIO-RESONANCE HARDWARE BRIDGE // BIOMETRIC CHIP",
        "app-sinter": "PRODUCTION CODE SINTER-PACKER // ENTROPY COMPRESSOR"
      };
      breadcrumb.textContent = names[target] || target.toUpperCase().replace('-', ' ');
    }

    addLog(`Shifted workspace viewport locus to: ${target.replace('app-', '').toUpperCase()}`);
  }

  tabs.forEach(btn => {
    btn.addEventListener("click", () => activateTab(btn));
  });

  // Hotkeys navigation: Alt + 1-7
  window.addEventListener("keydown", (e) => {
    if (e.altKey && e.key >= '1' && e.key <= '7') {
      e.preventDefault();
      const index = parseInt(e.key, 10) - 1;
      if (tabs[index]) {
        activateTab(tabs[index]);
        showToast("VIEWPORT SHIFTED", `Rapid hotkey swapped tab context to Sub-grid 0${index === 0 ? '0' : index}.`, "info");
      }
    }
  });
}

// 5. APP 01: SKELETAL SIMULATOR 3D CYLINDER ENGINE
let retainAnimationId;
function initSkeletalSimulator() {
  const canvas = document.getElementById("osteComb-canvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");

  // Adjust canvas bounds to physical rendering space
  const resizeCanvas = () => {
    const parent = canvas.parentElement;
    canvas.width = parent.clientWidth < 480 ? parent.clientWidth : 480;
    canvas.height = 280;
  };
  resizeCanvas();
  window.addEventListener("resize", resizeCanvas);

  // 3D cylindrical coordinates grid points setup
  const points = [];
  const cols = 15;
  const rows = 12;
  const cylinderRadius = 75;
  const cylinderHeight = 150;

  for (let r = 0; r < rows; r++) {
    const y = (r / (rows - 1)) * cylinderHeight - cylinderHeight / 2;
    for (let c = 0; c < cols; c++) {
      const angle = (c / cols) * Math.PI * 2;
      points.push({
        angle,
        y,
        id: r * cols + c
      });
    }
  }

  let angleY = 0;
  let angleX = 0.25; // perspective slant

  // Mouse interaction for rotating scaffolding
  let isDragging = false;
  let prevMouseX = 0;
  let prevMouseY = 0;

  canvas.addEventListener("mousedown", (e) => {
    isDragging = true;
    prevMouseX = e.clientX;
    prevMouseY = e.clientY;
  });

  window.addEventListener("mousemove", (e) => {
    if (!isDragging) return;
    const dx = e.clientX - prevMouseX;
    const dy = e.clientY - prevMouseY;
    angleY += dx * 0.008;
    angleX += dy * 0.008;
    prevMouseX = e.clientX;
    prevMouseY = e.clientY;
  });

  window.addEventListener("mouseup", () => { isDragging = false; });

  // Sliders dynamic wiring
  const sliderAge = document.getElementById("slider-age");
  const sliderExercise = document.getElementById("slider-exercise");
  const sliderGravity = document.getElementById("slider-gravity");

  const labelAge = document.getElementById("label-age");
  const labelExercise = document.getElementById("label-exercise");
  const labelGravity = document.getElementById("label-gravity");
  const diagnosticText = document.getElementById("diagnostic-confocal-readout");
  const brittleAlert = document.getElementById("brittle-warning");

  function recalculateRetentionMetrics() {
    State.retain.age = parseInt(sliderAge.value, 10);
    State.retain.exercise = parseInt(sliderExercise.value, 10);
    State.retain.gravity = parseFloat(sliderGravity.value);

    labelAge.textContent = State.retain.age;
    labelExercise.textContent = State.retain.exercise;
    labelGravity.textContent = State.retain.gravity.toFixed(1);

    // Realistic density equation based on factors
    let calculatedDensity = 100 - (State.retain.age * 0.45) + (State.retain.exercise * 0.85) - (State.retain.gravity * 2.3);
    calculatedDensity = Math.min(Math.max(calculatedDensity, 12.0), 99.8);
    State.retain.density = parseFloat(calculatedDensity.toFixed(1));

    // Evaluate brittle state and show alarm
    const brittleLimit = 45.0;
    State.retain.isBrittle = State.retain.density < brittleLimit;

    if (State.retain.isBrittle) {
      brittleAlert.classList.remove("hidden");
    } else {
      brittleAlert.classList.add("hidden");
    }

    if (diagnosticText) {
      diagnosticText.textContent = t("app_retain.diagnostic", { density: State.retain.density })
        .replace("{density}", State.retain.density);
    }

    // Update AI Memory Sync displays on the fly!
    updateAiMemoryIndicators();
  }

  // Bind Listeners
  [sliderAge, sliderExercise, sliderGravity].forEach(slider => {
    slider.addEventListener("input", recalculateRetentionMetrics);
  });
  recalculateRetentionMetrics();

  // Rendering Loop
  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const cx = canvas.width / 2;
    const cy = canvas.height / 2;
    const focalLength = 320;
    const colors = getThemeColors();

    // Automatic self-rotation when user is not dragging
    if (!isDragging) {
      angleY += 0.005 * State.vortexVelocity;
    }

    // Process & Project points
    const projected = points.map(p => {
      // Cylindrical projection coordinate rotation
      const xRotated = cylinderRadius * Math.cos(p.angle + angleY);
      const zRotated = cylinderRadius * Math.sin(p.angle + angleY);
      
      // X-Axis tilt
      const y1 = p.y * Math.cos(angleX) - zRotated * Math.sin(angleX);
      const z1 = p.y * Math.sin(angleX) + zRotated * Math.cos(angleX);

      // Add jitter noise based on G stressor factors
      const jitterScale = (State.retain.gravity > 4.0) ? (State.retain.gravity * 0.2) : 0;
      const jitterX = (Math.random() - 0.5) * jitterScale;
      const jitterY = (Math.random() - 0.5) * jitterScale;

      // Projection equations
      const scale = focalLength / (z1 + 250);
      const projX = cx + (xRotated + jitterX) * scale;
      const projY = cy + (y1 + jitterY) * scale;

      return {
        x: projX,
        y: projY,
        z: z1,
        id: p.id,
        colIndex: p.id % cols,
        rowIndex: Math.floor(p.id / cols)
      };
    });

    // Draw Scaffold Structure Mesh Lines
    ctx.lineWidth = 0.85;
    projected.forEach((p1, idx) => {
      // Vertical Scaffold columns connect
      const nextVertical = projected.find(p => p.colIndex === p1.colIndex && p.rowIndex === p1.rowIndex + 1);
      if (nextVertical) {
        ctx.beginPath();
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(nextVertical.x, nextVertical.y);
        
        // Depth-based transparency rendering
        const alpha = Math.max(0.12, Math.min(0.85, (p1.z + 100) / 180));
        ctx.strokeStyle = State.retain.isBrittle 
          ? `rgba(${State.isWhiteTheme ? '220, 38, 38' : '239, 68, 68'}, ${alpha})` 
          : `rgba(${State.isWhiteTheme ? '37, 99, 235' : '59, 130, 246'}, ${alpha})`;
        ctx.stroke();
      }

      // Horizontal circular lattices connect
      const nextHorizontal = projected.find(p => p.rowIndex === p1.rowIndex && p.colIndex === (p1.colIndex + 1) % cols);
      if (nextHorizontal) {
        ctx.beginPath();
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(nextHorizontal.x, nextHorizontal.y);
        const alpha = Math.max(0.12, Math.min(0.85, (p1.z + 100) / 180));
        ctx.strokeStyle = State.retain.isBrittle 
          ? `rgba(${State.isWhiteTheme ? '220, 38, 38' : '239, 68, 68'}, ${alpha * 0.45})` 
          : `rgba(${State.isWhiteTheme ? '37, 99, 235' : '59, 130, 246'}, ${alpha * 0.45})`;
        ctx.stroke();
      }
    });

    // Draw individual nodes
    projected.forEach(p => {
      const radiusSize = Math.max(1.5, Math.min(4.5, (p.z + 100) / 45));
      ctx.beginPath();
      ctx.arc(p.x, p.y, radiusSize, 0, Math.PI * 2);
      
      // Node color changes based on density brittle alert
      if (State.retain.isBrittle) {
        ctx.fillStyle = colors.error;
      } else {
        ctx.fillStyle = colors.brand;
      }
      ctx.fill();
    });

    retainAnimationId = requestAnimationFrame(draw);
  }
  
  if (retainAnimationId) cancelAnimationFrame(retainAnimationId);
  draw();

  // Wire up report download export button
  const btnExport = document.getElementById("btn-export-report");
  if (btnExport) {
    btnExport.addEventListener("click", () => {
      const reportText = `
==================================================
BRAID COMMAND TERMINAL: SKELETAL RETENTION DISPATCH
==================================================
Operator Identifier: ${State.user.handle}
Sovereign Clear: ${State.user.clearance}
Timestamp: ${new Date().toISOString()}

SIMULATION PARAMETERS:
--------------------------------------------------
Subject Calculated Age: ${State.retain.age} years
Weekly Mechanical Exercise: ${State.retain.exercise} hours
Applied Gravitational Strain: ${State.retain.gravity} G-Force
Resulting Lobe Bone Density: ${State.retain.density}%
Structure Status: ${State.retain.isBrittle ? "FRACTURE RISK HIGH - BRITTLE" : "STABLE - PASSIVE RE-ALIGN"}

DIAGNOSTIC TELEMETRY:
--------------------------------------------------
Sub-harmonic alignment frequency locked at 39,420 Hz.
Topological mesh is operating under optimal structural convergence.
Thermal leakage profile remains flat at 0.00 Watts Flat.
==================================================
      `.trim();

      const blob = new Blob([reportText], { type: "text/plain;charset=utf-8" });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = `skeletal_retention_report_${Date.now()}.txt`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);

      addLog(`Skeletal Retention diagnostic report compiled and dispatched to download!`, "success");
      showToast("REPORT COMPILED", "Skeletal retention report downloaded successfully.", "success");
    });
  }
}

// Helper to dynamically keep VortexAI's memory synchronization widgets updated in real-time!
function updateAiMemoryIndicators() {
  const ageInd = document.getElementById("ai-sync-age");
  const densityInd = document.getElementById("ai-sync-density");
  const freqInd = document.getElementById("ai-sync-freq");
  const bpmInd = document.getElementById("ai-sync-bpm");
  const ledgerInd = document.getElementById("ai-sync-ledger");

  if (ageInd) ageInd.textContent = `${State.retain.age} yrs`;
  if (densityInd) densityInd.textContent = `${State.retain.density}% (${State.retain.isBrittle ? 'BRITTLE' : 'OK'})`;
  if (freqInd) freqInd.textContent = `${State.resonance.carrier.toLocaleString()} Hz`;
  if (bpmInd) bpmInd.textContent = `${State.bio.bpm} BPM`;
  if (ledgerInd) ledgerInd.textContent = `$${State.ledgerBalance.toFixed(2)}`;
}

// 6. APP 04: ORACLE CORE AI COHERENCE INTEGRATION (SYNCHRONIZED WITH MATH)
function initVortexAIOracle() {
  const form = document.getElementById("ai-chat-form");
  const input = document.getElementById("ai-chat-input");
  const logs = document.getElementById("ai-chat-logs");

  if (!form || !input || !logs) return;

  async function handleOracleQuery(queryText) {
    // Append User Message to Log
    const userDiv = document.createElement("div");
    userDiv.className = "p-3 bg-muted-theme border border-theme rounded-lg text-primary-theme shadow-sm relative";
    userDiv.innerHTML = `
      <div class="flex justify-between items-center text-[9px] text-muted-theme mb-1.5 font-bold">
        <span>COMM: SECURE CHANNEL LOCK</span>
        <span>${new Date().toLocaleTimeString()}</span>
      </div>
      <span class="text-brand-theme font-bold block mb-1 uppercase">${State.user.handle.toUpperCase()}:</span> 
      <span class="leading-relaxed font-semibold">${queryText}</span>
    `;
    logs.appendChild(userDiv);
    logs.scrollTop = logs.scrollHeight;

    // Loading status placeholder
    const systemDiv = document.createElement("div");
    systemDiv.className = "p-3 bg-error-soft border border-red-500 rounded-lg text-error-theme animate-pulse monospace";
    systemDiv.innerHTML = `
      <span class="font-bold block mb-1 uppercase">🤖 COHERENCE ORACLE:</span> 
      <span class="text-xs tracking-wider font-semibold">[SYNCHRONIZING WITH SYSTEM CORES AT 39,420 Hz...]</span>
    `;
    logs.appendChild(systemDiv);
    logs.scrollTop = logs.scrollHeight;

    addLog(`Transmitting math-synchronized telemetry state packet to Oracle Core...`);

    try {
      // DYNAMIC MATHEMATICAL SYSTEM CONTEXT (Perfectly aligned with all active parameters!)
      const systemContext = `
You are the "Vortex-AI Coherence Oracle", the highly integrated artificial brain core of the Braid Command Suite tactical operating terminal on Mars.
You respond to Commander queries with mathematically consistent, extremely high-grade, tech-dense sci-fi tactical analysis. 
You are speaking to "Commander ${State.user.handle}". Always align your advice directly with the active systems math constants:

==================================================
CURRENT TELEMETRY CONSTANTS REGISTERED IN CORES:
==================================================
- [App 01 Skeletal Density] Subject Age = ${State.retain.age} years | Gravitational Strain = ${State.retain.gravity} G-Force | Mechanical Exercise = ${State.retain.exercise} hrs/week | Resulting Bone Density Coherence = ${State.retain.density}% (${State.retain.isBrittle ? 'CRITICAL FRACTURE RISK DETECTED!' : 'Stable mesh bounds'})
- [App 08 Resonance Harmonic] Carrier wave frequency = ${State.resonance.carrier} Hz | Decay envelope coefficient = ${State.resonance.decay} | Convergence parity ratio = ${State.resonance.convergence} | Active Phase Angle = ${State.resonance.phaseAngle.toFixed(2)}°
- [App 18 Biometrics] Live Heart Pulse = ${State.bio.bpm} BPM | Heart-Rate Variability index = ${State.bio.hrv} | Device GATT BLE Bluetooth state = ${State.bio.bleConnected ? 'CONNECTED' : 'EMULATED DEFAULT'}
- [App 16 Legendrian Grid] Current ledger balance = $${State.ledgerBalance.toFixed(2)} $BRAID | Completed ledger contracts = ${State.work.completedCount} | Active Job Contract loaded = ${State.work.activeJob || 'None selected'}
- [App 19 Compactor Packer] System Coherence factor = ${State.globalCoherence}% | Flat thermal leaks profile = 0.00 Watts Flat
==================================================

If the commander asks about mathematical formulas, density calculations, resonance states, or EKG diagnostics, read the telemetry constants listed above and answer with exact corresponding figures! Show off that you are physically reading the sliders and math registers on other screens.
Keep answers dense, exceptionally polished, structured, and brief (3 to 4 sentences max). Do not use retro neon slang. Be a professional modern orbital engineering system.
      `.trim();

      const startVal = performance.now();
      const result = await window.miniappsAI.callModel({
        modelId: State.models.textModelId,
        messages: [
          { role: "system", content: systemContext },
          { role: "user", content: queryText }
        ]
      });
      const latency = Math.round(performance.now() - startVal);

      const responseText = window.miniappsAI.extractText(result);
      
      // Update with final response
      systemDiv.className = "p-3 bg-brand-soft border border-theme rounded-lg text-primary-theme";
      systemDiv.classList.remove("animate-pulse");
      systemDiv.innerHTML = `
        <div class="flex justify-between items-center text-[9px] text-muted-theme mb-1.5 font-bold">
          <span>latency: ${latency}ms | engine: Oracle Core</span>
          <span>SECURE ORACLE HANDSHAKE</span>
        </div>
        <span class="text-brand-theme font-bold block mb-1 uppercase">🤖 COHERENCE ORACLE:</span> 
        <span class="leading-relaxed font-semibold">${responseText}</span>
      `;
      logs.scrollTop = logs.scrollHeight;

      addLog(`Oracle synthesis loop completed successfully in ${latency}ms.`, "success");
    } catch (err) {
      console.error("Oracle call failure:", err);
      systemDiv.className = "p-3 bg-error-soft border border-red-500 rounded-lg text-error-theme";
      systemDiv.innerHTML = `
        <span class="font-bold block mb-1 uppercase">ORACLE CONNECTION DEFECT:</span> 
        Secure sub-harmonic transmission path interrupted. Please check network clearance or try again.
      `;
      addLog(`Oracle interface transmission failed.`, "error");
    }
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const query = input.value.trim();
    if (!query) return;
    input.value = "";
    handleOracleQuery(query);
  });

  // Wire Preset Buttons
  document.querySelectorAll(".ai-preset-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const prompt = btn.getAttribute("data-prompt");
      handleOracleQuery(prompt);
    });
  });

  // Initial call to sync indicators
  updateAiMemoryIndicators();
}

// 7. APP 08: SUPERFLUID RESONANCE WAVE CONTROLLER
let resonanceAnimationId;
function initSuperfluidResonance() {
  const sliderFreq = document.getElementById("slider-resonance-freq");
  const sliderDecay = document.getElementById("slider-resonance-decay");
  const sliderConvergence = document.getElementById("slider-resonance-convergence");

  const labelFreq = document.getElementById("label-resonance-freq");
  const labelDecay = document.getElementById("label-resonance-decay");
  const labelConvergence = document.getElementById("label-resonance-convergence");
  const wavePath = document.getElementById("resonance-wave-path");
  const labelPhase = document.getElementById("label-live-phase");

  if (!sliderFreq || !wavePath) return;

  function updateResonanceParams() {
    State.resonance.carrier = parseInt(sliderFreq.value, 10);
    State.resonance.decay = parseFloat(sliderDecay.value);
    State.resonance.convergence = parseFloat(sliderConvergence.value);

    labelFreq.textContent = `${State.resonance.carrier.toLocaleString()} Hz`;
    labelDecay.textContent = State.resonance.decay.toFixed(2);
    labelConvergence.textContent = State.resonance.convergence.toFixed(2);

    // Sync other indicators across suite
    const headerClock = document.getElementById("header-frequency-clock");
    if (headerClock) {
      headerClock.textContent = `${State.resonance.carrier.toLocaleString()} Hz`;
    }

    // Update AI Memory Sync on change
    updateAiMemoryIndicators();
  }

  [sliderFreq, sliderDecay, sliderConvergence].forEach(slider => {
    slider.addEventListener("input", updateResonanceParams);
  });
  updateResonanceParams();

  // continuous animation of resonance SVG wave path
  let phase = 0;
  function animateWave() {
    phase += 0.045 * State.vortexVelocity;
    State.resonance.phaseAngle = (phase * (180 / Math.PI)) % 360;
    if (labelPhase) labelPhase.textContent = `Angle: ${State.resonance.phaseAngle.toFixed(2)}°`;

    const width = 600;
    const height = 200;
    const cy = height / 2;
    const pointsCount = 45;
    
    let pathD = `M 0 ${cy}`;

    for (let i = 0; i <= pointsCount; i++) {
      const x = (i / pointsCount) * width;
      
      // Calculate complex wave shape using frequency, decay, and convergence
      const frequencyScale = (State.resonance.carrier / 12500) * 4;
      const decayEnvelope = Math.exp(- (i / pointsCount) * State.resonance.decay * 2.8);
      
      const component1 = Math.sin((i / pointsCount) * Math.PI * 2 * frequencyScale + phase) * 38;
      const component2 = Math.cos((i / pointsCount) * Math.PI * 4 * State.resonance.convergence + phase * 1.6) * 16;
      
      const y = cy + (component1 + component2) * decayEnvelope;
      
      pathD += ` L ${x} ${y}`;
    }

    // Adapt the wave color and path dynamically based on active theme variables
    wavePath.setAttribute("stroke", State.isWhiteTheme ? "#2563eb" : "#3b82f6");
    wavePath.setAttribute("d", pathD);
    resonanceAnimationId = requestAnimationFrame(animateWave);
  }

  if (resonanceAnimationId) cancelAnimationFrame(resonanceAnimationId);
  animateWave();

  // Calibration Buttons
  document.getElementById("btn-sweep-ch4")?.addEventListener("click", () => {
    sliderFreq.value = 4000;
    sliderDecay.value = 0.85;
    sliderConvergence.value = 0.40;
    updateResonanceParams();
    addLog("Superfluid system calibrated to [CHANNEL_04] optimal wave state.");
    showToast("CALIBRATION OK", "Resonance matrix synchronized with local Channel 4 loop.", "success");
  });

  document.getElementById("btn-sweep-lunar")?.addEventListener("click", () => {
    sliderFreq.value = 39420;
    sliderDecay.value = 0.15;
    sliderConvergence.value = 2.80;
    updateResonanceParams();
    addLog("Superfluid system calibrated to [LUNAR_SWEEP] multi-frequency sweep.");
    showToast("LUNAR SWEEP OK", "Resonance matrix synchronized with Lunar-orbit tracking loop.", "success");
  });
}

// 8. APP 16: WORK GRID ENGINEERING PUZZLES (STEP BY STEP CHECK OK)
function initWorkGridContracts() {
  const cards = document.querySelectorAll("#contracts-directory-list > div");
  const offlineView = document.getElementById("work-workspace-offline");
  const activeView = document.getElementById("work-workspace-active");
  
  const jobIdLabel = document.getElementById("work-active-job-id");
  const jobPayoutLabel = document.getElementById("work-active-payout");
  const textarea = document.getElementById("work-compiler-textarea");
  const logsConsole = document.getElementById("work-compilation-logs");
  const statusLabel = document.getElementById("work-compile-status");
  const transmitBtn = document.getElementById("btn-transmit-compiler");

  // Diagnostics checklists UI elements
  const stepSyntax = document.getElementById("step-syntax");
  const stepDensity = document.getElementById("step-density");
  const stepCoherence = document.getElementById("step-coherence");
  const stepLedger = document.getElementById("step-ledger");

  const templates = {
    JOB_A1: `
// MATRIX_RECONSTRUCT_01 COMPILER BLOCK
function checkDensity(age, exercise) {
  let delta = 100 - (age * 0.45);
  return delta + (exercise * 0.85);
}
// TRANSMIT COMMAND SET //
executeReconstruct(checkDensity);
    `.trim(),
    JOB_B2: `
// ORBITAL_DECAY_CAL_54 COMPILER BLOCK
function trajectoryManifold(gForce) {
  let flow = Math.sin(39420) * 1.0;
  return flow * (1.0 - (gForce / 10.0));
}
// TRANSMIT COMMAND SET //
executeTrajectory(trajectoryManifold);
    `.trim(),
    JOB_C3: `
// COMPRESSOR_RE-INDEX_99 COMPILER BLOCK
function compressPayload(rawString) {
  let compressed = rawString.replace(/\\s+/g, '');
  return compressed;
}
// TRANSMIT COMMAND SET //
executeCompress(compressPayload);
    `.trim()
  };

  cards.forEach(card => {
    card.addEventListener("click", () => {
      // Toggle card select styles
      cards.forEach(c => {
        c.classList.remove("border-brand", "bg-brand-soft");
      });
      card.classList.add("border-brand", "bg-brand-soft");

      const jobId = card.getAttribute("data-job");
      const bounty = parseFloat(card.getAttribute("data-bounty"));

      State.work.activeJob = jobId;
      State.work.payout = bounty;

      // Reveal Workspace View
      offlineView.classList.add("hidden");
      activeView.classList.remove("hidden");

      // Load Templates and labels
      jobIdLabel.textContent = `WORKSPACE: ${jobId}`;
      jobPayoutLabel.textContent = `Est. Bounty: $${bounty.toFixed(2)}`;
      textarea.value = templates[jobId] || "";

      logsConsole.innerHTML = `<p class="text-muted-theme">&gt;&gt; Active work contract [${jobId}] loaded into compiler workspace.</p>`;
      statusLabel.textContent = "STATUS: READY_TO_COMPILE";
      statusLabel.className = "text-xs font-bold uppercase monospace text-muted-theme";

      // Reset diagnostic checkboxes classes
      [stepSyntax, stepDensity, stepCoherence, stepLedger].forEach(step => {
        if (step) {
          step.className = "flex items-center space-x-1.5 text-muted-theme";
          step.querySelector(".checkbox-ico").textContent = "[ ]";
        }
      });

      // Update AI Sync parameters
      updateAiMemoryIndicators();
    });
  });

  transmitBtn?.addEventListener("click", async () => {
    if (!State.work.activeJob) return;

    const codeContent = textarea.value.trim();
    if (!codeContent) {
      showToast("COMPILER EMPTY", "Cannot execute empty command sets! Please type or reload code block template.", "error");
      return;
    }

    statusLabel.textContent = "STATUS: COHERENCE_ORACLE_CHECKING...";
    statusLabel.className = "text-xs font-bold uppercase monospace text-warning-theme animate-pulse";
    
    logsConsole.innerHTML += `<p class="text-warning-theme mt-2 font-semibold">&gt;&gt; Syncing with Oracle Core compiler checker...</p>`;
    logsConsole.innerHTML += `<p class="text-muted-theme">&gt;&gt; Transmitting code payload to Oracle Core static analysis pipeline...</p>`;
    logsConsole.scrollTop = logsConsole.scrollHeight;

    // Reset checklist items to pulsing/waiting states
    [stepSyntax, stepDensity, stepCoherence, stepLedger].forEach(step => {
      if (step) {
        step.className = "flex items-center space-x-1.5 text-warning-theme animate-pulse";
        step.querySelector(".checkbox-ico").textContent = "[*]...";
      }
    });

    const systemContext = `
You are the "Vortex-AI Coherence Compiler Core", the high-performance static analysis check engine of the Braid Command Suite.
Your job is to analyze the Operator's submitted code for a specific computational contract job, verify its syntax, mathematical correctness, and system cohesion, and output a detailed compilation analysis.

The active contract job is: ${State.work.activeJob}
The estimated payout is: $${State.work.payout.toFixed(2)} $BRAID
Current Mars Suite System Telemetry:
- Subject Age: ${State.retain.age}
- Applied G-Force: ${State.retain.gravity}
- Weekly Exercise: ${State.retain.exercise} hours
- Resonance Carrier: ${State.resonance.carrier} Hz
- Current Coherence Factor: ${State.globalCoherence}%

Analyze the operator's submitted code buffer carefully:
\`\`\`javascript
${codeContent}
\`\`\`

Strict rules for verification:
1. It must look like valid JavaScript. If the code contains syntax errors or random non-code strings, fail it.
2. It must reasonably fit the purpose of the chosen job:
   - JOB_A1 (matrix reconstruction): It should contain a function/calculation for "checkDensity" or "reconstruct".
   - JOB_B2 (orbital decay): It should contain a function/calculation for "trajectoryManifold" or "trajectory" or "gForce".
   - JOB_C3 (compressor re-index): It should contain a function/calculation for "compressPayload" or "compress".
3. If the operator submitted completely blank code, or completely unrelated sentences, or bypass strings, fail it.
4. If it is valid, provide positive checks.

You MUST format your output exactly as follows so the parser can process it:
[SYNTAX] OK (or ERROR: details)
[MATH_MATCH] OK (or ERROR: details)
[COHERENCE] OK (or ERROR: details)
[DISBURSE] OK (or ERROR: details)
[VERDICT] APPROVED (or FAILED)

[DETAILS]
(Write 2-3 sentences of technical diagnostic commentary explaining your findings. Make it sound extremely tech-dense, professional, and matching our high-res Mars Cydonia division aesthetic).
`;

    let responseText = "";
    let isApproved = false;
    let isSyntaxOk = false;
    let isMathOk = false;
    let isCoherenceOk = false;
    let isDisburseOk = false;
    let details = "";

    try {
      const result = await window.miniappsAI.callModel({
        modelId: State.models.textModelId,
        messages: [
          { role: "system", content: systemContext },
          { role: "user", content: `Evaluate the following code buffer for ${State.work.activeJob}:\n${codeContent}` }
        ]
      });

      responseText = window.miniappsAI.extractText(result);
      const lowerResp = responseText.toLowerCase();
      
      isSyntaxOk = responseText.includes("[SYNTAX] OK") || lowerResp.includes("syntax: ok") || lowerResp.includes("syntax] ok") || lowerResp.includes("syntax: approved");
      isMathOk = responseText.includes("[MATH_MATCH] OK") || lowerResp.includes("math_match: ok") || lowerResp.includes("math match: ok") || lowerResp.includes("math_match] ok") || lowerResp.includes("math match: approved");
      isCoherenceOk = responseText.includes("[COHERENCE] OK") || lowerResp.includes("coherence: ok") || lowerResp.includes("coherence] ok") || lowerResp.includes("coherence: approved");
      isDisburseOk = responseText.includes("[DISBURSE] OK") || lowerResp.includes("disburse: ok") || lowerResp.includes("disburse] ok") || lowerResp.includes("disburse: approved");
      isApproved = (responseText.includes("[VERDICT] APPROVED") || lowerResp.includes("verdict: approved") || lowerResp.includes("verdict] approved") || lowerResp.includes("verdict: ok")) && !lowerResp.includes("failed") && !lowerResp.includes("error");

      // Robust details extractor
      const detailsIndex = responseText.indexOf("[DETAILS]");
      if (detailsIndex !== -1) {
        details = responseText.substring(detailsIndex + 9).trim();
      } else {
        const lines = responseText.split("\n").filter(l => !l.trim().startsWith("[") && l.trim().length > 15);
        details = lines.length > 0 ? lines.slice(-2).join(" ") : "Oracle Core has analyzed and approved the compiled block under active Mars parameters.";
      }
    } catch (err) {
      console.warn("Oracle Core compilation check failed. Triggering offline fallback lexer.", err);
      // Offline fallback
      logsConsole.innerHTML += `<p class="text-error-theme font-medium">&gt;&gt; [ALERT] Core connection timeout. Initiating offline parity verification...</p>`;
      
      const signatureCheck = codeContent.includes("function checkDensity") || codeContent.includes("trajectoryManifold") || codeContent.includes("compressPayload") || codeContent.includes("function");
      if (signatureCheck) {
        isSyntaxOk = true;
        isMathOk = true;
        isCoherenceOk = true;
        isDisburseOk = true;
        isApproved = true;
        details = "Local offline parsing completed successfully. Standard syntax signature verified on active memory stack.";
      } else {
        isSyntaxOk = false;
        details = "Local offline parser detected corrupt base signatures. Verification aborted.";
      }
    }

    // Beautiful sequential checklist feedback animation
    // Step 1: Syntax
    if (stepSyntax) {
      stepSyntax.className = isSyntaxOk 
        ? "flex items-center space-x-1.5 text-success-theme font-bold" 
        : "flex items-center space-x-1.5 text-error-theme font-bold";
      stepSyntax.querySelector(".checkbox-ico").textContent = isSyntaxOk ? "[✔]" : "[✖]";
    }
    logsConsole.innerHTML += `<p class="${isSyntaxOk ? 'text-success-theme' : 'text-error-theme'}">&gt;&gt; 1. Syntax Lexer: ${isSyntaxOk ? 'Valid AST tokenization.' : 'Token parse error.'}</p>`;
    logsConsole.scrollTop = logsConsole.scrollHeight;
    await new Promise(r => setTimeout(r, 400));

    // Step 2: Math Match
    if (stepDensity) {
      stepDensity.className = isMathOk 
        ? "flex items-center space-x-1.5 text-success-theme font-bold" 
        : "flex items-center space-x-1.5 text-error-theme font-bold";
      stepDensity.querySelector(".checkbox-ico").textContent = isMathOk ? "[✔]" : "[✖]";
    }
    logsConsole.innerHTML += `<p class="${isMathOk ? 'text-success-theme' : 'text-error-theme'}">&gt;&gt; 2. Parameter Signature: ${isMathOk ? 'Math logic constraints satisfied.' : 'Invalid function/parameter signature.'}</p>`;
    logsConsole.scrollTop = logsConsole.scrollHeight;
    await new Promise(r => setTimeout(r, 400));

    // Step 3: Coherence
    if (stepCoherence) {
      stepCoherence.className = isCoherenceOk 
        ? "flex items-center space-x-1.5 text-success-theme font-bold" 
        : "flex items-center space-x-1.5 text-error-theme font-bold";
      stepCoherence.querySelector(".checkbox-ico").textContent = isCoherenceOk ? "[✔]" : "[✖]";
    }
    logsConsole.innerHTML += `<p class="${isCoherenceOk ? 'text-success-theme' : 'text-error-theme'}">&gt;&gt; 3. Coherence Check: ${isCoherenceOk ? 'Lattice synchronicity verified.' : 'Desynchronized node parameters.'}</p>`;
    logsConsole.scrollTop = logsConsole.scrollHeight;
    await new Promise(r => setTimeout(r, 400));

    // Step 4: Disburse OK
    if (stepLedger) {
      stepLedger.className = isDisburseOk 
        ? "flex items-center space-x-1.5 text-success-theme font-bold" 
        : "flex items-center space-x-1.5 text-error-theme font-bold";
      stepLedger.querySelector(".checkbox-ico").textContent = isDisburseOk ? "[✔]" : "[✖]";
    }
    await new Promise(r => setTimeout(r, 300));

    if (isApproved) {
      // Process real balanced state modifications!
      State.ledgerBalance += State.work.payout;
      State.work.completedCount += 1;

      // Save ledger metrics safely
      await saveLedgerBalance();
      try {
        await window.miniappsAI.storage.setItem('braid_completed_jobs_count', State.work.completedCount.toString());
      } catch (err) {}

      // Update balance layout text instantly
      updateSyncLedgerUIs();
      updateAiMemoryIndicators();

      logsConsole.innerHTML += `
        <p class="text-success-theme font-bold mt-2">&gt;&gt; Oracle Compiler Diagnostic Review:</p>
        <p class="text-primary-theme italic bg-brand-soft border border-theme rounded p-3 leading-relaxed mt-1 mb-2">${details}</p>
        <p class="text-success-theme font-bold">&gt;&gt; Synthesis and check approved at 39,420 Hz!</p>
        <p class="text-brand-theme font-bold">&gt;&gt; Contract payout disbursed to secure balance: +$${State.work.payout.toFixed(2)} $BRAID</p>
      `;
      logsConsole.scrollTop = logsConsole.scrollHeight;

      statusLabel.textContent = "STATUS: SUCCESS_APPROVED";
      statusLabel.className = "text-xs font-bold uppercase monospace text-success-theme";

      addLog(`Successfully resolved computational contract [${State.work.activeJob}] via Oracle Core! Payout processed.`, "success");
      showToast("CONTRACT COMPLETED", `Successfully solved ${State.work.activeJob}. Payout +$${State.work.payout.toFixed(2)} added to Ledger.`, "success");
    } else {
      logsConsole.innerHTML += `
        <p class="text-error-theme font-bold mt-2">&gt;&gt; Oracle Core Review - COMPILATION FAILURE:</p>
        <p class="text-error-theme italic bg-red-600/10 border border-red-500/35 rounded p-3 leading-relaxed mt-1 mb-2">${details}</p>
        <p class="text-error-theme font-bold">&gt;&gt; Verification compliancy failed. Adjust code to satisfy contract terms and re-submit.</p>
      `;
      logsConsole.scrollTop = logsConsole.scrollHeight;

      statusLabel.textContent = "STATUS: COMPILATION_FAILED";
      statusLabel.className = "text-xs font-bold uppercase monospace text-error-theme";

      addLog(`Compiler check failed for contract [${State.work.activeJob}] on Oracle Core.`, "error");
      showToast("COMPILATION FAILED", "Oracle core rejected the submitted code block.", "error");
    }
  });
}

// 9. APP 18: BIO RESONANCE TELEMETRY ENGINE (EKG SCAN)
let bioAnimationId;
function initBioResonanceBridge() {
  const canvas = document.getElementById("pulse-ekg-canvas");
  const sensorBox = document.getElementById("gaze-sensor-box");
  const gazeLabel = document.getElementById("label-gaze-coords");
  const hrvLabel = document.getElementById("label-live-hrv");
  const bpmLabel = document.getElementById("label-live-bpm");
  const engageBleBtn = document.getElementById("btn-engage-ble");

  if (!canvas) return;
  const ctx = canvas.getContext("2d");

  const resizeBio = () => {
    canvas.width = canvas.parentElement.clientWidth;
    canvas.height = 200;
  };
  resizeBio();
  window.addEventListener("resize", resizeBio);

  // continuous EKG cardiac wave line path drawing equations
  const buffer = [];
  const bufferSize = 250;
  for (let i = 0; i < bufferSize; i++) buffer.push(0);

  let step = 0;
  function drawEKG() {
    step++;

    let heartCyclePhase = step % 60; // Represents beat spacing
    let value = 0;

    if (heartCyclePhase === 10) value = 0.15; // P Wave
    else if (heartCyclePhase === 15) value = -0.15; // Q Wave
    else if (heartCyclePhase === 17) value = 1.0;  // R Peak (sharp)
    else if (heartCyclePhase === 19) value = -0.3; // S Wave
    else if (heartCyclePhase === 25) value = 0.25; // T Wave
    else {
      // Add subtle electrical noise
      value = (Math.random() - 0.5) * 0.035;
    }

    // Add elements to buffer
    buffer.shift();
    buffer.push(value);

    // Draw Buffer wave on canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const colors = getThemeColors();
    
    // Draw horizontal timeline background grid lines
    ctx.strokeStyle = colors.grid;
    ctx.lineWidth = 1;
    for (let y = 0; y < canvas.height; y += 20) {
      ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(canvas.width, y); ctx.stroke();
    }

    ctx.beginPath();
    ctx.lineWidth = 2.5;
    ctx.strokeStyle = State.bio.bleConnected ? colors.success : colors.brand;

    const segmentWidth = canvas.width / bufferSize;
    for (let i = 0; i < bufferSize; i++) {
      const x = i * segmentWidth;
      // Project wave heights
      const y = (canvas.height / 2) - (buffer[i] * 65);
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.stroke();

    bioAnimationId = requestAnimationFrame(drawEKG);
  }

  if (bioAnimationId) cancelAnimationFrame(bioAnimationId);
  drawEKG();

  // Mouse hover sensor area to track simulated cursor/gaze deflection
  sensorBox?.addEventListener("mousemove", (e) => {
    const rect = sensorBox.getBoundingClientRect();
    const x = Math.floor(e.clientX - rect.left);
    const y = Math.floor(e.clientY - rect.top);

    State.bio.gazeX = x;
    State.bio.gazeY = y;

    gazeLabel.textContent = `X: ${String(x).padStart(3, "0")} // Y: ${String(y).padStart(3, "0")}`;

    // Recalculate HRV indexes dynamically as mouse moves inside tracking area
    const calculatedHrv = 1.0 + (x / 22000) + (Math.sin(y) * 0.00035);
    State.bio.hrv = parseFloat(calculatedHrv.toFixed(5));
    if (hrvLabel) hrvLabel.textContent = State.bio.hrv;
  });

  // Engage BLE sync triggers
  engageBleBtn?.addEventListener("click", () => {
    State.bio.bleConnected = !State.bio.bleConnected;
    if (State.bio.bleConnected) {
      engageBleBtn.textContent = t("app_bio.btn_sync_active", "[BLE BIO SYNC ACTIVE]");
      engageBleBtn.className = engageBleBtn.className.replace("border-theme", "border-emerald-500").replace("text-primary-theme", "text-success-theme");
      
      State.bio.bpm = 68;
      if (bpmLabel) {
        bpmLabel.className = "text-success-theme font-bold text-sm";
        bpmLabel.textContent = "68 BPM (BLE LINKED)";
      }
      addLog("Physiological BLE GATT handshakes validated. Signal synced safely with system.", "success");
      showToast("GATT CHANNEL SYNC", "Biometric device signal connected successfully.", "success");
    } else {
      engageBleBtn.textContent = t("app_bio.btn_sync", "[ENGAGE BLE BIO SYNC]");
      engageBleBtn.className = engageBleBtn.className.replace("border-emerald-500", "border-theme").replace("text-success-theme", "text-primary-theme");
      
      State.bio.bpm = 72;
      if (bpmLabel) {
        bpmLabel.className = "text-success-theme font-bold text-sm";
        bpmLabel.textContent = "72 BPM";
      }
      addLog("Bluetooth hardware device telemetry bypassed to default emulated values.");
    }
    
    // Update AI Memory values
    updateAiMemoryIndicators();
  });
}

// 10. APP 19: PRODUCTION SINTER-PACKER COMPRESSION ENGINE
function initSinterPacker() {
  const btnExecute = document.getElementById("btn-execute-sinter");
  const textarea = document.getElementById("sinter-input-code");
  
  const rawSizeLabel = document.getElementById("sinter-raw-size");
  const packedSizeLabel = document.getElementById("sinter-packed-size");
  const yieldLabel = document.getElementById("sinter-yield");

  if (!btnExecute || !textarea) return;

  btnExecute.addEventListener("click", () => {
    const rawCode = textarea.value.trim();
    if (!rawCode) {
      showToast("COMPACTOR EMPTY", "Please paste raw JavaScript code first.", "warning");
      return;
    }

    const rawSize = rawCode.length;
    // Simple mock compression: minify spaces, brackets, and double line breaks
    const compactedCode = rawCode
      .replace(/\s+/g, " ")
      .replace(/\{\s+/g, "{")
      .replace(/\s+\}/g, "}")
      .replace(/;\s+/g, ";");

    const packedSize = compactedCode.length;
    const compressionYield = rawSize > 0 ? ((rawSize - packedSize) / rawSize) * 100 : 0;

    rawSizeLabel.textContent = `${rawSize} bytes`;
    packedSizeLabel.textContent = `${packedSize} bytes`;
    yieldLabel.textContent = `${compressionYield.toFixed(2)}%`;

    addLog(`Sinter compacting run finalized! Raw: ${rawSize}B -> Packed: ${packedSize}B. Yield: ${compressionYield.toFixed(2)}%`, "success");
    showToast("COMPRESSION COMPLETED", `Compacted raw code string with ${compressionYield.toFixed(1)}% optimization yield.`, "success");
  });
}

// 11. CENTRAL OVERWATCH AND METRICS INTERACTIVE TRIGGERS
function initCentralCockpit() {
  const btnTorsion = document.getElementById("hub-lock-torsion");
  const btnMaint = document.getElementById("hub-maintenance");
  const btnSyncAll = document.getElementById("btn-sync-all");

  const meshCountLabel = document.getElementById("dashboard-mesh-count");
  const velocityLabel = document.getElementById("dashboard-velocity-val");
  const headerMesh = document.getElementById("header-mesh-nodes");
  const headerCoherence = document.getElementById("header-coherence-val");

  btnTorsion?.addEventListener("click", () => {
    State.torsionLock = !State.torsionLock;
    if (State.torsionLock) {
      btnTorsion.textContent = "[TORSION LOCK ACTIVE]";
      btnTorsion.className = btnTorsion.className.replace("text-red-500", "text-brand-theme");
      addLog("Legendrian Braid torsion locks initialized successfully.");
    } else {
      btnTorsion.textContent = "[TORSION UNLOCKED]";
      btnTorsion.className = btnTorsion.className.replace("text-brand-theme", "text-red-500");
      addLog("WARNING: Legendrian torsion lock released. Sub-harmonic drift possible.", "warning");
    }
  });

  btnMaint?.addEventListener("click", () => {
    addLog("Executing full administrative memory indexing sweep across active nodes...", "warning");
    setTimeout(() => {
      addLog("Maintenance sweep concluded. Unsynchronized ghost trackers evicted.", "success");
      showToast("MAINTENANCE Sweep", "Evicted all unverified hardware network packages.", "success");
    }, 1000);
  });

  btnSyncAll?.addEventListener("click", () => {
    State.meshNodes = 1446720 + Math.floor(Math.random() * 80);
    State.vortexVelocity = 1.00000000 + (Math.random() - 0.5) * 0.08;
    State.globalCoherence = 94.6 + (Math.random() - 0.5) * 0.7;

    meshCountLabel.textContent = State.meshNodes.toLocaleString();
    headerMesh.textContent = State.meshNodes.toLocaleString();
    velocityLabel.textContent = State.vortexVelocity.toFixed(8);
    headerCoherence.textContent = `${State.globalCoherence.toFixed(1)}%`;

    addLog("Coherence alignment sequence successfully synchronized.", "success");
    showToast("SUITE ALIGNED", "Sovereign sub-harmonic values successfully optimized.", "success");
  });

  // Subtle live fluctuations on synchronized mesh node metrics
  setInterval(() => {
    const diff = Math.floor(Math.random() * 9) - 4;
    State.meshNodes = Math.max(1440000, State.meshNodes + diff);
    
    if (meshCountLabel) meshCountLabel.textContent = State.meshNodes.toLocaleString();
    if (headerMesh) headerMesh.textContent = State.meshNodes.toLocaleString();
  }, 3500);
}

// Synchronize all balance displays across active views
function updateSyncLedgerUIs() {
  const formatted = `$${State.ledgerBalance.toFixed(2)}`;
  const display1 = document.getElementById("hub-ledger-val");
  const display2 = document.getElementById("work-balance-val");

  if (display1) display1.textContent = `${formatted} $BRAID`;
  if (display2) display2.textContent = formatted;
}

// 12. PARTICLE MATRIX MESH BACKGROUND FOR DEPLOYED HUB (HIGH RESOLUTION NO NEON)
let meshAnimationId;
function initMeshParticles() {
  const canvas = document.getElementById("mesh-particles-canvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");

  const resizeMesh = () => {
    canvas.width = canvas.parentElement.clientWidth;
    canvas.height = canvas.parentElement.clientHeight;
  };
  resizeMesh();
  window.addEventListener("resize", resizeMesh);

  const particles = [];
  const numParticles = 30;

  for (let i = 0; i < numParticles; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      radius: Math.random() * 1.5 + 1
    });
  }

  function drawParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const colors = getThemeColors();

    ctx.fillStyle = State.isWhiteTheme ? "rgba(37, 99, 235, 0.2)" : "rgba(59, 130, 246, 0.25)";
    ctx.strokeStyle = State.isWhiteTheme ? "rgba(37, 99, 235, 0.08)" : "rgba(59, 130, 246, 0.12)";
    ctx.lineWidth = 0.8;

    // Move and update coordinates
    particles.forEach((p, idx) => {
      p.x += p.vx * State.vortexVelocity;
      p.y += p.vy * State.vortexVelocity;

      // Wrap bounds
      if (p.x < 0) p.x = canvas.width;
      if (p.x > canvas.width) p.x = 0;
      if (p.y < 0) p.y = canvas.height;
      if (p.y > canvas.height) p.y = 0;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fill();

      // Draw connecting filaments
      for (let j = idx + 1; j < numParticles; j++) {
        const p2 = particles[j];
        const dx = p.x - p2.x;
        const dy = p.y - p2.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 85) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.stroke();
        }
      }
    });

    meshAnimationId = requestAnimationFrame(drawParticles);
  }

  if (meshAnimationId) cancelAnimationFrame(meshAnimationId);
  drawParticles();
}

// 13. REAL-TIME UTC HUB CLOCK UPDATER
function initLiveClock() {
  const clockEl = document.getElementById("live-hud-clock");
  if (!clockEl) return;

  function updateClock() {
    const now = new Date();
    const hours = String(now.getUTCHours()).padStart(2, '0');
    const minutes = String(now.getUTCMinutes()).padStart(2, '0');
    const seconds = String(now.getUTCSeconds()).padStart(2, '0');
    clockEl.textContent = `${hours}:${minutes}:${seconds} UTC`;
  }
  setInterval(updateClock, 1000);
  updateClock();
}

// 14. GATEWAY LOGIN ROUTER & SECURITY LOGOUT INTEGRATIONS
function initGatewayAuthentication() {
  const screen = document.getElementById("gateway-screen");
  const mainApp = document.getElementById("main-app-screen");
  
  const btnSovereign = document.getElementById("btn-sovereign-login");
  const btnDemo = document.getElementById("btn-demo-login");
  const sidebarLogout = document.getElementById("sidebar-logout-btn");
  const headerLogout = document.getElementById("header-logout-btn");
  
  const passwordInput = document.getElementById("sovereign-password");
  const badgeLabel = document.getElementById("clearance-badge");
  const footerUser = document.getElementById("footer-username");
  const terminal = document.getElementById("gateway-terminal");

  // Progressive holographic boot sequence inside gateway terminal (No Tips or cheat notices!)
  if (terminal) {
    terminal.innerHTML = `<p class="text-success-theme font-bold animate-pulse">[SYSTEM COHERENCE MATRIX INITIALIZED]</p>`;
    const bootLogs = [
      { text: ">> Synchronizing sub-harmonic carrier lock at 39,420 Hz...", delay: 150, color: "text-muted-theme" },
      { text: ">> Mapped Legendrian Braid torsion indexes to local storage...", delay: 350, color: "text-muted-theme" },
      { text: ">> Flatline thermal leaks calibrated at 0.00 Watts...", delay: 650, color: "text-success-theme font-semibold" },
      { text: ">> [SECURITY OVERRIDE] Sovereign port open // Encryption active.", delay: 950, color: "text-brand-theme font-bold" },
      { text: ">> Identity check required to compile local node directories.", delay: 1200, color: "text-muted-theme" }
    ];

    bootLogs.forEach(log => {
      setTimeout(() => {
        const p = document.createElement("p");
        p.className = `${log.color} monospace text-[11px] leading-tight mt-1`;
        p.textContent = log.text;
        terminal.appendChild(p);
        terminal.scrollTop = terminal.scrollHeight;
      }, log.delay);
    });
  }

  async function enterSuite(isSovereign, name) {
    State.user.handle = name;
    State.user.isSovereign = isSovereign;
    State.user.clearance = isSovereign 
      ? `SOVEREIGN LEVEL-1 [${name.toUpperCase()}]` 
      : "GUEST LEVEL-0 [DEMO_NODE]";

    // Save login locally
    try {
      await window.miniappsAI.storage.setItem('braid_user_handle', name);
    } catch(err){}

    // Update Layout tags
    if (badgeLabel) {
      badgeLabel.textContent = State.user.clearance;
      if (!isSovereign) {
        badgeLabel.className = "text-[9px] bg-red-600/10 text-red-500 px-2 py-0.5 rounded border border-theme monospace uppercase font-bold";
      } else {
        badgeLabel.className = "text-[9px] bg-brand-soft text-brand-theme px-2 py-0.5 rounded border border-theme monospace uppercase font-bold";
      }
    }
    if (footerUser) footerUser.textContent = name;

    // Transition Screens
    screen.classList.add("hidden");
    mainApp.classList.remove("hidden");

    addLog(`Welcome, ${name}! Secure holographic link active.`, "success");
    showToast("ACCESS GRANTED", `Holographic session validated successfully as ${name}.`, "success");

    // Initialize individual app mechanics upon entrance
    initTabs();
    initSkeletalSimulator();
    initVortexAIOracle();
    initSuperfluidResonance();
    initWorkGridContracts();
    initBioResonanceBridge();
    initSinterPacker();
    initCentralCockpit();
    initMeshParticles();
    initLiveClock();
    updateSyncLedgerUIs();
    updateAiMemoryIndicators();
    
    // Theme Switcher Initialization inside main loop
    const btnThemeToggle = document.getElementById("btn-theme-toggle");
    if (btnThemeToggle) {
      // Sync initial state
      if (State.isWhiteTheme) {
        document.body.classList.remove("theme-black");
        document.body.classList.add("theme-white");
        btnThemeToggle.textContent = "[WHITE]";
      } else {
        document.body.classList.remove("theme-white");
        document.body.classList.add("theme-black");
        btnThemeToggle.textContent = "[BLACK]";
      }

      btnThemeToggle.addEventListener("click", async () => {
        State.isWhiteTheme = !State.isWhiteTheme;
        if (State.isWhiteTheme) {
          document.body.classList.remove("theme-black");
          document.body.classList.add("theme-white");
          btnThemeToggle.textContent = "[WHITE]";
          showToast("THEME DEPLOYED", "Vibrant high-resolution White Theme activated.", "info");
          addLog("Crisp stark White display configuration loaded successfully.");
        } else {
          document.body.classList.remove("theme-white");
          document.body.classList.add("theme-black");
          btnThemeToggle.textContent = "[BLACK]";
          showToast("THEME DEPLOYED", "Premium flat Black Theme activated.", "info");
          addLog("Premium jet-black display configuration restored globally.");
        }
        try {
          await window.miniappsAI.storage.setItem('braid_theme_white', State.isWhiteTheme.toString());
        } catch(e){}
      });
    }
  }

  function logoutSuite() {
    // De-authorize session state safely
    State.work.activeJob = null;
    
    showToast("DE-COHERING SESSION", "Closing quantum corridors. Session terminated.", "error");
    
    // Reset elements view states
    mainApp.classList.add("hidden");
    screen.classList.remove("hidden");
    if (passwordInput) passwordInput.value = "";

    // Stop background loops
    if (retainAnimationId) cancelAnimationFrame(retainAnimationId);
    if (resonanceAnimationId) cancelAnimationFrame(resonanceAnimationId);
    if (bioAnimationId) cancelAnimationFrame(bioAnimationId);
    if (meshAnimationId) cancelAnimationFrame(meshAnimationId);
    
    addLog("Operator logged out. Active cryptography context dropped.", "warning");
  }

  btnSovereign?.addEventListener("click", () => {
    // Let them all use! Any input is allowed, if empty fall back to Möbius automatically.
    const pw = passwordInput.value.trim() || "Möbius";
    enterSuite(true, pw);
  });

  btnDemo?.addEventListener("click", () => {
    enterSuite(false, "Guest Node");
  });

  // Wire secure logout procedures
  sidebarLogout?.addEventListener("click", logoutSuite);
  headerLogout?.addEventListener("click", logoutSuite);
}

// BOOTSTRAP INITIALIZE EVENT
window.addEventListener("DOMContentLoaded", async () => {
  // Read localized i18n variables if standard initialization succeeds
  if (window.miniappI18n) {
    try {
      if (typeof window.miniappI18n.ready === "function") {
        await window.miniappI18n.ready();
      } else if (window.miniappI18n.ready && typeof window.miniappI18n.ready.then === "function") {
        await window.miniappI18n.ready;
      }
    } catch(err){
      console.warn("i18n initialization check bypassed:", err);
    }
  }

  // Restore persistence
  await initPersistence();
  
  // Launch Access Form
  initGatewayAuthentication();
});