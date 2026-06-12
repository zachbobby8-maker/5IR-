/**
 * Braid Command Suite Main Tactical Controller
 * Streamlined 7-Core Responsive Command Application
 * Coherent Sync: 39,420 Hz // Flat 0.00 Watts Thermal Footprint
 */

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
    textModelId: "dc2db118-7888-466a-a8d1-bf9d96bab4b6" // DeepSeek V4 Flash Instant Default
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
      State.user.isSovereign = savedUser === "Architect";
      State.user.clearance = State.user.isSovereign ? "SOVEREIGN LEVEL-1 [ARCHITECT]" : "GUEST LEVEL-0 [DEMO_NODE]";
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
    p.textContent = formatted;
    if (type === "error") p.className = "text-red-400";
    else if (type === "success") p.className = "text-emerald-400 font-bold";
    else if (type === "warning") p.className = "text-amber-400";
    else p.className = "text-[#00f2fe]/80";
    
    logContainer.appendChild(p);
    logContainer.scrollTop = logContainer.scrollHeight;
  }

  if (streamContainer && type === "success") {
    const div = document.createElement("div");
    div.className = "p-2 border-b border-[#00f2fe]/5 text-emerald-400";
    div.innerHTML = `<span class="text-[#00f2fe] font-bold">[${State.user.handle}]</span> ${msg}`;
    streamContainer.insertBefore(div, streamContainer.firstChild);
  }
}

// 3. TOAST SYSTEM
function showToast(title, body, type = "info") {
  const wrapper = document.getElementById("toast-wrapper");
  if (!wrapper) return;

  const toast = document.createElement("div");
  toast.className = `p-4 rounded border ${
    type === "error" ? "bg-red-950/90 border-red-500 text-red-200" :
    type === "success" ? "bg-emerald-950/90 border-emerald-500 text-emerald-200" :
    "bg-[#040d21]/90 border-[#00f2fe]/50 text-[#00f2fe]"
  } pointer-events-auto shadow-lg transition-all duration-300 transform translate-y-2 opacity-0 monospace text-xs border-neon-cyan`;

  toast.innerHTML = `
    <div class="flex justify-between items-center mb-1">
      <span class="font-bold tracking-wider uppercase">${title}</span>
      <button class="toast-close text-[9px] hover:text-white ml-4 pointer-events-auto">✕</button>
    </div>
    <p class="text-[10px] text-slate-300 leading-relaxed">${body}</p>
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

// 4. TAB CONTROLLER SWITCHES
function initTabs() {
  const tabs = document.querySelectorAll(".tab-btn");
  tabs.forEach(btn => {
    btn.addEventListener("click", () => {
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

      addLog(`Shifted workspace viewport locus to: ${target.replace('app-', '').toUpperCase()}`);
    });
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
    canvas.width = parent.clientWidth < 450 ? parent.clientWidth : 450;
    canvas.height = 300;
  };
  resizeCanvas();
  window.addEventListener("resize", resizeCanvas);

  // 3D cylindrical coordinates grid points setup
  const points = [];
  const cols = 14;
  const rows = 12;
  const cylinderRadius = 75;
  const cylinderHeight = 160;

  for (let r = 0; r < rows; r++) {
    const y = (r / (rows - 1)) * cylinderHeight - cylinderHeight / 2;
    for (let c = 0; c < cols; c++) {
      const angle = (c / cols) * Math.PI * 2;
      points.push({
        angle,
        y,
        baseColor: "#00f2fe",
        id: r * cols + c
      });
    }
  }

  let angleY = 0;
  let angleX = 0.2; // perspective slant

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
    angleY += dx * 0.01;
    angleX += dy * 0.01;
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
    let calculatedDensity = 100 - (State.retain.age * 0.45) + (State.retain.exercise * 0.8) - (State.retain.gravity * 2.2);
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
    const focalLength = 300;

    // Automatic self-rotation when user is not dragging
    if (!isDragging) {
      angleY += 0.006 * State.vortexVelocity;
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
      const jitterScale = (State.retain.gravity > 4.0) ? (State.retain.gravity * 0.25) : 0;
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
    ctx.lineWidth = 0.5;
    projected.forEach((p1, idx) => {
      // Vertical Scaffold columns connect
      const nextVertical = projected.find(p => p.colIndex === p1.colIndex && p.rowIndex === p1.rowIndex + 1);
      if (nextVertical) {
        ctx.beginPath();
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(nextVertical.x, nextVertical.y);
        
        // Depth-based transparency rendering
        const alpha = Math.max(0.08, Math.min(0.7, (p1.z + 100) / 200));
        ctx.strokeStyle = State.retain.isBrittle 
          ? `rgba(239, 68, 68, ${alpha})` 
          : `rgba(0, 242, 254, ${alpha})`;
        ctx.stroke();
      }

      // Horizontal circular lattices connect
      const nextHorizontal = projected.find(p => p.rowIndex === p1.rowIndex && p.colIndex === (p1.colIndex + 1) % cols);
      if (nextHorizontal) {
        ctx.beginPath();
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(nextHorizontal.x, nextHorizontal.y);
        const alpha = Math.max(0.08, Math.min(0.7, (p1.z + 100) / 200));
        ctx.strokeStyle = State.retain.isBrittle 
          ? `rgba(239, 68, 68, ${alpha * 0.5})` 
          : `rgba(0, 242, 254, ${alpha * 0.5})`;
        ctx.stroke();
      }
    });

    // Draw individual nodes
    projected.forEach(p => {
      const radiusSize = Math.max(1, Math.min(4, (p.z + 100) / 50));
      ctx.beginPath();
      ctx.arc(p.x, p.y, radiusSize, 0, Math.PI * 2);
      
      // Node color changes based on density brittle alert
      if (State.retain.isBrittle) {
        ctx.fillStyle = "#ef4444";
      } else {
        // Blends to blue/cyan based on depth
        ctx.fillStyle = p.z > 0 ? "#00f2fe" : "#0066ff";
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

// 6. APP 04: VORTEXAI COHERENCE ORACLE INTEGRATION
function initVortexAIOracle() {
  const form = document.getElementById("ai-chat-form");
  const input = document.getElementById("ai-chat-input");
  const logs = document.getElementById("ai-chat-logs");

  if (!form || !input || !logs) return;

  async function handleOracleQuery(queryText) {
    // Append User Message to Log
    const userDiv = document.createElement("div");
    userDiv.className = "p-2 bg-[#020612] border border-[#00f2fe]/15 rounded text-[#00f2fe]/80";
    userDiv.innerHTML = `<span class="text-[#00f2fe]/60 font-bold block mb-1">${State.user.handle.toUpperCase()}:</span> ${queryText}`;
    logs.appendChild(userDiv);
    logs.scrollTop = logs.scrollHeight;

    // Loading status placeholder
    const systemDiv = document.createElement("div");
    systemDiv.className = "p-2 bg-[#ff0055]/5 border border-[#ff0055]/15 rounded text-[#ff0055]/95 animate-pulse";
    systemDiv.innerHTML = `<span class="font-bold block mb-1">COHERENCE ORACLE:</span> [PARSING SYSTOLIC SUB-HARMONIC COHERENCE...]`;
    logs.appendChild(systemDiv);
    logs.scrollTop = logs.scrollHeight;

    addLog(`Transmitting sub-harmonic prompt to Oracle Matrix...`);

    try {
      const systemContext = `
You are the "Vortex-AI Coherence Oracle", the integrated artificial core of the Braid Command Suite tactical operating terminal on Mars.
Your role is to respond to commander queries with highly structured, tech-dense, elegant sci-fi tactical analysis. Address the user as "Commander ${State.user.handle}".
Keep your answers brief (under 4 sentences) and dense with thematic parameters like "39,420 Hz clock status", "Legendrian Braid torsion", "dQ_leak thermal baseline flat at 0.00 Watts", and "Cydonia Tactical Division parameters".
      `.trim();

      const result = await window.miniappsAI.callModel({
        modelId: State.models.textModelId,
        messages: [
          { role: "system", content: systemContext },
          { role: "user", content: queryText }
        ]
      });

      const responseText = window.miniappsAI.extractText(result);
      
      // Update with final response
      systemDiv.className = "p-2 bg-[#00f2fe]/5 border border-[#00f2fe]/15 rounded text-[#e2e8f0]";
      systemDiv.classList.remove("animate-pulse");
      systemDiv.innerHTML = `<span class="text-[#00f2fe] font-bold block mb-1">COHERENCE ORACLE:</span> ${responseText}`;
      logs.scrollTop = logs.scrollHeight;

      addLog(`Oracle synthesis loop completed.`, "success");
    } catch (err) {
      console.error("Oracle call failure:", err);
      systemDiv.className = "p-2 bg-red-950/30 border border-red-500/50 rounded text-red-400";
      systemDiv.innerHTML = `<span class="font-bold block mb-1">ORACLE ERROR:</span> Secure signal path interrupted. Please re-authenticate your credentials.`;
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
  }

  [sliderFreq, sliderDecay, sliderConvergence].forEach(slider => {
    slider.addEventListener("input", updateResonanceParams);
  });
  updateResonanceParams();

  // continuous animation of resonance SVG wave path
  let phase = 0;
  function animateWave() {
    phase += 0.05 * State.vortexVelocity;
    State.resonance.phaseAngle = (phase * (180 / Math.PI)) % 360;
    labelPhase.textContent = `Angle: ${State.resonance.phaseAngle.toFixed(2)}°`;

    const width = 600;
    const height = 200;
    const cy = height / 2;
    const pointsCount = 40;
    
    let pathD = `M 0 ${cy}`;

    for (let i = 0; i <= pointsCount; i++) {
      const x = (i / pointsCount) * width;
      
      // Calculate complex wave shape using frequency, decay, and convergence
      const frequencyScale = (State.resonance.carrier / 12500) * 4;
      const decayEnvelope = Math.exp(- (i / pointsCount) * State.resonance.decay * 2.5);
      
      const component1 = Math.sin((i / pointsCount) * Math.PI * 2 * frequencyScale + phase) * 35;
      const component2 = Math.cos((i / pointsCount) * Math.PI * 4 * State.resonance.convergence + phase * 1.5) * 15;
      
      const y = cy + (component1 + component2) * decayEnvelope;
      
      pathD += ` L ${x} ${y}`;
    }

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
    showToast("CALIBRATION OK", "Resonance matrix synchronized with local Channel 4 loop.");
  });

  document.getElementById("btn-sweep-lunar")?.addEventListener("click", () => {
    sliderFreq.value = 39420;
    sliderDecay.value = 0.15;
    sliderConvergence.value = 2.80;
    updateResonanceParams();
    addLog("Superfluid system calibrated to [LUNAR_SWEEP] multi-frequency sweep.");
    showToast("LUNAR SWEEP OK", "Resonance matrix synchronized with Lunar-orbit tracking loop.");
  });
}

// 8. APP 16: WORK GRID ENGINEERING PUZZLES
function initWorkGridContracts() {
  const cards = document.querySelectorAll(".contract-card");
  const offlineView = document.getElementById("work-workspace-offline");
  const activeView = document.getElementById("work-workspace-active");
  
  const jobIdLabel = document.getElementById("work-active-job-id");
  const jobPayoutLabel = document.getElementById("work-active-payout");
  const textarea = document.getElementById("work-compiler-textarea");
  const logsConsole = document.getElementById("work-compilation-logs");
  const statusLabel = document.getElementById("work-compile-status");
  const transmitBtn = document.getElementById("btn-transmit-compiler");

  const templates = {
    JOB_A1: `
// MATRIX_RECONSTRUCT_01 COMPILER BLOCK
function checkDensity(age, exercise) {
  let delta = 100 - (age * 0.45);
  return delta + (exercise * 0.8);
}
// TRANSMIT COMMAND SET
executeReconstruct(checkDensity);
    `.trim(),
    JOB_B2: `
// ORBITAL_DECAY_CAL_54 COMPILER BLOCK
function trajectoryManifold(gForce) {
  let flow = Math.sin(39420) * 1.0;
  return flow * (1.0 - (gForce / 10));
}
// TRANSMIT COMMAND SET
executeTrajectory(trajectoryManifold);
    `.trim(),
    JOB_C3: `
// COMPRESSOR_RE-INDEX_99 COMPILER BLOCK
function compressPayload(rawString) {
  let compressed = rawString.replace(/\\s+/g, '');
  return compressed;
}
// TRANSMIT COMMAND SET
executeCompress(compressPayload);
    `.trim()
  };

  cards.forEach(card => {
    card.addEventListener("click", () => {
      // Toggle card select styles
      cards.forEach(c => c.classList.remove("border-[#00f2fe]", "bg-[#00f2fe]/5"));
      card.classList.add("border-[#00f2fe]", "bg-[#00f2fe]/5");

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

      logsConsole.innerHTML = `<p class="text-[#00f2fe]/50">>> Active work contract [${jobId}] loaded into compiler workspace.</p>`;
      statusLabel.textContent = "STATUS: READY_TO_COMPILE";
      statusLabel.className = "text-xs font-bold uppercase monospace text-slate-400";
    });
  });

  transmitBtn?.addEventListener("click", async () => {
    if (!State.work.activeJob) return;

    statusLabel.textContent = "STATUS: COMPILING_AND_VERIFYING...";
    statusLabel.className = "text-xs font-bold uppercase monospace text-amber-400 animate-pulse";
    
    logsConsole.innerHTML += `<p class="text-amber-400">>> Initiating syntax check loop on ${State.work.activeJob}...</p>`;
    logsConsole.scrollTop = logsConsole.scrollHeight;

    // Simulate standard compilation latency delay
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Calculate payouts and ledger variables
    State.ledgerBalance += State.work.payout;
    State.work.completedCount += 1;

    // Persist State variables
    await saveLedgerBalance();
    try {
      await window.miniappsAI.storage.setItem('braid_completed_jobs_count', State.work.completedCount.toString());
    } catch(err){}

    // Update global layouts
    updateSyncLedgerUIs();

    logsConsole.innerHTML += `
      <p class="text-emerald-400">>> Synthesis approved at 39,420 Hz!</p>
      <p class="text-emerald-400">>> Verification compliancy achieved!</p>
      <p class="text-[#00f2fe] font-bold">>> Contract payout disbursed to balance: +$${State.work.payout.toFixed(2)} $BRAID</p>
    `;
    logsConsole.scrollTop = logsConsole.scrollHeight;

    statusLabel.textContent = "STATUS: SUCCESS_APPROVED";
    statusLabel.className = "text-xs font-bold uppercase monospace text-emerald-400";

    addLog(`Successfully resolved computational contract [${State.work.activeJob}]! Payout processed.`, "success");
    showToast("CONTRACT COMPLETED", `Successfully solved ${State.work.activeJob}. Payout +$${State.work.payout.toFixed(2)} added to Ledger.`, "success");
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

  // continuous glowing EKG cardiac wave line path drawing equations
  const buffer = [];
  const bufferSize = 250;
  for (let i = 0; i < bufferSize; i++) buffer.push(0);

  let step = 0;
  function drawEKG() {
    step++;

    // continuous PQRST cardiac heart rate projection math equation segment
    let heartCyclePhase = step % 60; // Represents beat spacing
    let value = 0;

    if (heartCyclePhase === 10) value = 0.15; // P Wave
    else if (heartCyclePhase === 15) value = -0.15; // Q Wave
    else if (heartCyclePhase === 17) value = 1.0;  // R Peak (sharp)
    else if (heartCyclePhase === 19) value = -0.3; // S Wave
    else if (heartCyclePhase === 25) value = 0.25; // T Wave
    else {
      // Add subtle sub-harmonic flatline electrical noise
      value = (Math.random() - 0.5) * 0.03;
    }

    // Add elements to buffer
    buffer.shift();
    buffer.push(value);

    // Draw Buffer wave on canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Draw horizontal timeline background grid lines
    ctx.strokeStyle = "rgba(16, 185, 129, 0.08)";
    ctx.lineWidth = 1;
    for (let y = 0; y < canvas.height; y += 20) {
      ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(canvas.width, y); ctx.stroke();
    }

    ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.strokeStyle = State.bio.bleConnected ? "#00f2fe" : "#10b981"; // shifts glow style on BLE sync
    ctx.shadowBlur = 10;
    ctx.shadowColor = State.bio.bleConnected ? "rgba(0, 242, 254, 0.5)" : "rgba(16, 185, 129, 0.5)";

    const segmentWidth = canvas.width / bufferSize;
    for (let i = 0; i < bufferSize; i++) {
      const x = i * segmentWidth;
      // Project wave heights
      const y = (canvas.height / 2) - (buffer[i] * 65);
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.stroke();
    
    // Clear shadow configurations
    ctx.shadowBlur = 0;

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
    const calculatedHrv = 1.0 + (x / 20000) + (Math.sin(y) * 0.0003);
    State.bio.hrv = parseFloat(calculatedHrv.toFixed(5));
    hrvLabel.textContent = State.bio.hrv;
  });

  // Engage BLE sync triggers
  engageBleBtn?.addEventListener("click", () => {
    State.bio.bleConnected = !State.bio.bleConnected;
    if (State.bio.bleConnected) {
      engageBleBtn.textContent = t("app_bio.btn_sync_active", "[BLE BIO SYNC ACTIVE]");
      engageBleBtn.className = engageBleBtn.className.replace("bg-[#00f2fe]/10", "bg-emerald-950/20").replace("border-[#00f2fe]", "border-emerald-500").replace("text-[#00f2fe]", "text-emerald-400");
      bpmLabel.className = "text-[#00f2fe] font-bold glow-cyan";
      bpmLabel.textContent = "68 BPM (BLE)";
      addLog("Physiological BLE GATT handshakes validated. Signal synced safely with system.", "success");
      showToast("GATT CHANNEL SYNC", "Biometric device signal connected successfully.", "success");
    } else {
      engageBleBtn.textContent = t("app_bio.btn_sync", "[ENGAGE BLE BIO SYNC]");
      engageBleBtn.className = engageBleBtn.className.replace("bg-emerald-950/20", "bg-[#00f2fe]/10").replace("border-emerald-500", "border-[#00f2fe]").replace("text-emerald-400", "text-[#00f2fe]");
      bpmLabel.className = "text-emerald-400 font-bold glow-cyan";
      bpmLabel.textContent = "72 BPM";
      addLog("Bluetooth hardware device telemetry bypassed to default emulated values.");
    }
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
      .replace(/\;\s+/g, ";");

    const packedSize = compactedCode.length;
    const compressionYield = rawSize > 0 ? ((rawSize - packedSize) / rawSize) * 100 : 0;

    rawSizeLabel.textContent = `${rawSize} bytes`;
    packedSizeLabel.textContent = `${packedSize} bytes`;
    yieldLabel.textContent = `${compressionYield.toFixed(2)}%`;

    addLog(`Sinter compacting run finalized! Raw: ${rawSize}B -> Sintered: ${packedSize}B. Yield: ${compressionYield.toFixed(2)}%`, "success");
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
      btnTorsion.classList.replace("text-red-400", "text-[#00f2fe]");
      addLog("Legendrian Braid torsion locks initialized successfully.");
    } else {
      btnTorsion.textContent = "[TORSION UNLOCKED]";
      btnTorsion.classList.add("text-red-400");
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
    State.meshNodes = 1446720 + Math.floor(Math.random() * 50);
    State.vortexVelocity = 1.00000000 + (Math.random() - 0.5) * 0.05;
    State.globalCoherence = 94.6 + (Math.random() - 0.5) * 0.5;

    meshCountLabel.textContent = State.meshNodes.toLocaleString();
    headerMesh.textContent = State.meshNodes.toLocaleString();
    velocityLabel.textContent = State.vortexVelocity.toFixed(8);
    headerCoherence.textContent = `${State.globalCoherence.toFixed(1)}%`;

    addLog("Coherence alignment sequence successfully synchronized.", "success");
    showToast("SUITE ALIGNED", "Sovereign sub-harmonic values successfully optimized.", "success");
  });

  // Subtle live fluctuations on synchronized mesh node metrics
  setInterval(() => {
    const diff = Math.floor(Math.random() * 7) - 3;
    State.meshNodes = Math.max(1440000, State.meshNodes + diff);
    
    if (meshCountLabel) meshCountLabel.textContent = State.meshNodes.toLocaleString();
    if (headerMesh) headerMesh.textContent = State.meshNodes.toLocaleString();
  }, 3000);
}

// Synchronize all balance displays across active views
function updateSyncLedgerUIs() {
  const formatted = `$${State.ledgerBalance.toFixed(2)}`;
  const display1 = document.getElementById("hub-ledger-val");
  const display2 = document.getElementById("work-balance-val");

  if (display1) display1.textContent = `${formatted} $BRAID`;
  if (display2) display2.textContent = formatted;
}

// 12. GATEWAY LOGIN ROUTER
function initGatewayAuthentication() {
  const screen = document.getElementById("gateway-screen");
  const mainApp = document.getElementById("main-app-screen");
  
  const btnSovereign = document.getElementById("btn-sovereign-login");
  const btnDemo = document.getElementById("btn-demo-login");
  
  const passwordInput = document.getElementById("sovereign-password");
  const badgeLabel = document.getElementById("clearance-badge");
  const footerUser = document.getElementById("footer-username");

  async function enterSuite(isSovereign, name) {
    State.user.handle = name;
    State.user.isSovereign = isSovereign;
    State.user.clearance = isSovereign 
      ? "SOVEREIGN LEVEL-1 [ARCHITECT]" 
      : "GUEST LEVEL-0 [DEMO_NODE]";

    // Save login locally
    try {
      await window.miniappsAI.storage.setItem('braid_user_handle', name);
    } catch(err){}

    // Update Layout tags
    if (badgeLabel) {
      badgeLabel.textContent = State.user.clearance;
      if (!isSovereign) {
        badgeLabel.className = badgeLabel.className.replace("text-[#00f2fe]", "text-[#ff0055]").replace("border-[#00f2fe]", "border-[#ff0055]");
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
    updateSyncLedgerUIs();
  }

  btnSovereign?.addEventListener("click", () => {
    const pw = passwordInput.value.trim();
    if (!pw) {
      showToast("ENTRY DENIED", "Please fill valid encryption parameters.", "error");
      return;
    }
    // Any password qualifies for custom role identification
    enterSuite(true, "Architect");
  });

  btnDemo?.addEventListener("click", () => {
    enterSuite(false, "Guest Node");
  });
}

// BOOTSTRAP INITIALIZE EVENT
window.addEventListener("DOMContentLoaded", async () => {
  // Read localized i18n variables if standard initialization succeeds
  if (window.miniappI18n) {
    try {
      await window.miniappI18n.ready();
    } catch(err){
      console.warn("i18n not ready, falling back to manual mapping:", err);
    }
  }

  // Restore persistence
  await initPersistence();
  
  // Launch Access Form
  initGatewayAuthentication();
});
