/**
 * 5iR CORE SYSTEM LAYER: ASYMMETRIC COMPUTATIONAL ENGINE
 * Implements Topological & Structural Asymmetry between standard nodes and Master Architect.
 * Synchronized Clock: 39,420 Hz // Operation Coherence: 94.6% Locked
 */

(function() {
  const safeStorage = window.safeStorage || window.localStorage;
  console.log(">> [ASYMMETRIC_ENGINE] Initializing structural decoupling matrices...");

  // In-memory active engine state
  const state = {
    processingTier: "STANDARD_SINGLE_WORKER_THREAD",
    maxHashCapacity: 39420,
    administrativeAccess: false,
    fluidicRoutingPath: "PUBLIC_SANDBOX_ISOLATION_ZONE",
    scalarMultiplier: 1, // 100x for Mobius, 1x for standard nodes
    whitepaperCompileProgress: 0,
    isCompilingWhitepaper: false,
    networkNodesPower: {}
  };

  /**
   * Evaluates the authenticated node profile signature.
   * If master is matched, it unlocks elevated runtime specs, dynamic multiplier triggers,
   * and renders the hidden sovereign admin suite interface.
   */
  function evaluateAsymmetricState(profile) {
    if (!profile) {
      resetToFallback();
      return;
    }

    const isMaster = profile.nodeId === 'MOBIUS_BRAID_MAIN' && profile.role === 'SOVEREIGN_CLASS_1';

    if (isMaster) {
      state.processingTier = "HYPER_THREADED_BRAID_LATTICE";
      state.maxHashCapacity = 39420 * 100; // 100x scalar multipliers
      state.administrativeAccess = true;
      state.fluidicRoutingPath = "DIRECT_NON_ASSOCIATIVE_VACUUM_CORE";
      state.scalarMultiplier = 100;

      console.log("========================================================================");
      console.log("[ASYMMETRIC_ENGINE] MASTER SIGNATURE IDENTIFIED // COHERENCE OVERRIDE APPROVED");
      console.log(`>> PROCESSING TIER: ${state.processingTier}`);
      console.log(`>> HASH CAPACITY MULTIPLIER: ${state.scalarMultiplier}x Scalar`);
      console.log(`>> DIRECT APIS UNLOCKED: Shunting core administrative vacuum lines.`);
      console.log("========================================================================");

      // Trigger Web Audio tone confirming sovereign elevation
      playSovereignChime();

      // Ensure the elite Sovereign tab and card are rendered
      mountSovereignAdminSuite();
    } else {
      resetToFallback();
      console.log(`[ASYMMETRIC_ENGINE] Standard node session staged. Restricting computational bounds to public browser isolation zone.`);
    }

    // Sync any running balance flow calculation scalar or chart speeds
    syncEngineToSubsystems();
  }

  function resetToFallback() {
    state.processingTier = "STANDARD_SINGLE_WORKER_THREAD";
    state.maxHashCapacity = 39420;
    state.administrativeAccess = false;
    state.fluidicRoutingPath = "PUBLIC_SANDBOX_ISOLATION_ZONE";
    state.scalarMultiplier = 1;

    // Remove the Sovereign admin tab if it exists
    unmountSovereignAdminSuite();
  }

  /**
   * Sound effect for elite master verification
   */
  function playSovereignChime() {
    try {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      if (!AudioContextClass) return;
      const audioCtx = new AudioContextClass();
      
      // Authoritative arpeggio sweep
      const freqs = [394.2, 591.3, 788.4, 1182.6];
      freqs.forEach((freq, idx) => {
        setTimeout(() => {
          const osc = audioCtx.createOscillator();
          const gain = audioCtx.createGain();
          osc.connect(gain);
          gain.connect(audioCtx.destination);
          
          osc.type = 'sine';
          osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
          osc.frequency.exponentialRampToValueAtTime(freq * 1.5, audioCtx.currentTime + 0.3);
          
          gain.gain.setValueAtTime(0.04, audioCtx.currentTime);
          gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.35);
          
          osc.start();
          osc.stop(audioCtx.currentTime + 0.35);
        }, idx * 100);
      });
    } catch (e) {
      console.warn("Audio Context blocked.");
    }
  }

  /**
   * Inject or remove the Sovereign Admin tab button and workspace panel
   */
  function mountSovereignAdminSuite() {
    const tabNav = document.querySelector('.hud-tab-navigation');
    const mainGrid = document.getElementById('hud-main-grid');

    if (!tabNav || !mainGrid) return;

    // Check if tab button already exists
    let adminTabBtn = document.getElementById('sovereign-admin-tab-btn');
    if (!adminTabBtn) {
      // 1. Create and inject tab button
      adminTabBtn = document.createElement('button');
      adminTabBtn.id = 'sovereign-admin-tab-btn';
      adminTabBtn.className = 'hud-tab-btn text-amber-400 border-amber-500/50 bg-amber-950/20 animate-pulse font-extrabold';
      adminTabBtn.setAttribute('data-tab', 'sovereign-suite');
      adminTabBtn.textContent = '[ 👑 SOVEREIGN-SUITE ]';
      
      // Inject next to deployer hub or after legal-compliance
      const deployerBtn = tabNav.querySelector('[data-tab="deployer-hub"]');
      if (deployerBtn) {
        tabNav.insertBefore(adminTabBtn, deployerBtn);
      } else {
        tabNav.appendChild(adminTabBtn);
      }

      // 2. Create and inject admin suite panel card
      const adminSection = document.createElement('section');
      adminSection.id = 'app-sovereign-suite';
      adminSection.className = 'hud-panel-card flex flex-col justify-between hidden border-2 border-amber-500 shadow-[0_0_25px_rgba(245,158,11,0.35)] bg-black/95';
      adminSection.style.borderRadius = '6px';
      
      adminSection.innerHTML = `
        <div>
          <div class="panel-header border-amber-500/30">
            <div class="panel-icon">👑</div>
            <div class="panel-title-block">
              <h2 class="panel-title text-amber-400 text-xs font-extrabold tracking-widest">APP 11: 'MOBIUS-SUITE' COHERENCE COMMAND CENTER</h2>
              <div class="math-metadata-overlay text-amber-400/80">
                Ψ_sovereign = HyperBraid(λ_index * 100) // Direct Non-Associative Vacuum routing active
              </div>
            </div>
          </div>

          <div class="panel-body">
            <!-- Active Thread Matrix Grid -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <!-- Thread specs card -->
              <div class="bg-amber-950/10 border border-amber-500/30 p-3 rounded">
                <span class="block text-[8px] uppercase text-[#8a7751] font-bold tracking-wider mb-2">Computational Footprint</span>
                <div class="space-y-1.5 font-mono text-[9px]">
                  <div class="flex justify-between">
                    <span class="text-grey">PROCESSING TIER:</span>
                    <span class="text-amber-400 font-extrabold" id="asymmetric-tier">HYPER_THREADED_BRAID_LATTICE</span>
                  </div>
                  <div class="flex justify-between">
                    <span class="text-grey">MAPPED HASH MULTIPLIER:</span>
                    <span class="text-[#39ff14] font-extrabold" id="asymmetric-multiplier">100x SCALAR</span>
                  </div>
                  <div class="flex justify-between">
                    <span class="text-grey">FLUIDIC SHUNT PATH:</span>
                    <span class="text-cyan font-bold" id="asymmetric-path">DIRECT_NON_ASSOCIATIVE_VACUUM_CORE</span>
                  </div>
                  <div class="flex justify-between">
                    <span class="text-grey">HARDWARE SPEED OVERCLOCK:</span>
                    <span class="text-magenta font-extrabold">3.942 MHz EFFECTIVE</span>
                  </div>
                </div>
              </div>

              <!-- Master Shunt interactive bypass toggles -->
              <div class="bg-black/80 border border-amber-500/20 p-3 rounded flex flex-col justify-between">
                <div>
                  <span class="block text-[8px] uppercase text-[#ffd700] font-bold tracking-wider mb-1">Administrative Action Shunts</span>
                  <p class="text-[8px] text-[#9cb3c9] leading-relaxed mb-2">Force 100x multiplier speeds over superfluid mines and network transactions.</p>
                </div>
                <div class="flex gap-2">
                  <button id="admin-force-yield-btn" type="button" class="flex-1 py-1.5 bg-amber-950 hover:bg-amber-400 hover:text-black border border-amber-500 text-amber-300 text-[9px] font-bold tracking-wider rounded transition-all">
                    ⚡ FORCE 100X YIELD
                  </button>
                  <button id="admin-bypass-kyc-btn" type="button" class="flex-1 py-1.5 bg-black border border-indigo-900 text-cyan hover:border-cyan-400 text-[9px] font-bold tracking-wider rounded transition-all">
                    🚫 BYPASS KYC NODES
                  </button>
                </div>
              </div>
            </div>

            <!-- Global Node logs inspector -->
            <div class="bg-black border-2 border-amber-500/40 rounded overflow-hidden mb-4">
              <div class="terminal-shell__header bg-amber-950/15 border-b border-amber-500/20">
                <span class="terminal-shell__dot bg-amber-400"></span>
                <span class="terminal-shell__dot bg-[#bc13fe]"></span>
                <span class="terminal-shell__title font-extrabold text-amber-400 tracking-wider">SOVEREIGN_VACUUM_CORE_LOGS // PORT_39420</span>
              </div>
              <div class="h-[120px] overflow-y-auto p-2.5 flex flex-col gap-1 font-mono text-[8px] bg-black" id="sovereign-logs-container">
                <!-- Administrative diagnostic lines -->
              </div>
            </div>

            <!-- Whitepaper parallel compiler -->
            <div class="bg-amber-950/5 border border-amber-500/20 p-3 rounded">
              <div class="flex justify-between items-center mb-1 text-[9px]">
                <span class="text-grey font-bold uppercase">5iR MASTER WHITEPAPER PARALLEL COMPILE</span>
                <span id="whitepaper-progress-lbl" class="text-[#ffd700] font-mono font-extrabold">0.00%</span>
              </div>
              <div class="progress-track mb-2">
                <div id="whitepaper-progress-fill" class="progress-fill-cyan" style="width: 0%; background-color: #ffd700; box-shadow: 0 0 8px #ffd700;"></div>
              </div>
              <button id="compile-whitepaper-btn" type="button" class="w-full py-1.5 bg-amber-950 hover:bg-amber-400 hover:text-black border border-amber-500 text-amber-300 text-[9px] font-bold tracking-wider rounded uppercase">
                🚀 [COMPILE MASTER WHITEPAPER]
              </button>
            </div>
          </div>
        </div>

        <div class="panel-footer-action mt-4 border-t border-dashed border-amber-500/20 pt-3">
          <div class="flex justify-between items-center text-[8px] text-[#8a7751]">
            <span>COH_STATE: LEVEL-1 MOBIUS LATTICE</span>
            <span>dQ_leak/dt = 0.00 Watts Flat (FRICTIONLESS)</span>
          </div>
        </div>
      `;

      mainGrid.appendChild(adminSection);

      // 3. Bind events for Sovereign Suite
      bindSovereignSuiteEvents(adminSection);

      // Re-initialize tab navigation handlers to pick up the newly dynamic tab
      if (window.initTabNavigation) {
        window.initTabNavigation();
      }
    }
  }

  function unmountSovereignAdminSuite() {
    const adminTabBtn = document.getElementById('sovereign-admin-tab-btn');
    if (adminTabBtn) adminTabBtn.remove();

    const adminSection = document.getElementById('app-sovereign-suite');
    if (adminSection) adminSection.remove();
  }

  function bindSovereignSuiteEvents(panel) {
    const logsContainer = panel.querySelector('#sovereign-logs-container');
    const forceYieldBtn = panel.querySelector('#admin-force-yield-btn');
    const bypassKycBtn = panel.querySelector('#admin-bypass-kyc-btn');
    const compileBtn = panel.querySelector('#compile-whitepaper-btn');
    const progressLbl = panel.querySelector('#whitepaper-progress-lbl');
    const progressFill = panel.querySelector('#whitepaper-progress-fill');

    if (!logsContainer) return;

    function verifyMasterActiveSession() {
      try {
        const savedProfile = safeStorage.getItem('5ir_authenticated_profile');
        if (!savedProfile) return false;
        const p = JSON.parse(savedProfile);
        return p.nodeId === 'MOBIUS_BRAID_MAIN' && p.role === 'SOVEREIGN_CLASS_1';
      } catch (e) {
        return false;
      }
    }

    // Local logger for Sovereign Suite
    function addSovereignLog(text, colorClass = 'text-amber-400') {
      const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false });
      const line = document.createElement('div');
      line.className = `leading-normal break-all font-mono text-[8px] ${colorClass}`;
      line.innerHTML = `<span class='text-[#8a7751] font-bold'>[${time}]</span> ${text}`;
      logsContainer.appendChild(line);
      logsContainer.scrollTop = logsContainer.scrollHeight;
    }

    // Populate initial master logs
    addSovereignLog(">> MOBIUS PORT ALIGNMENT RESOLVED SECURELY.", "text-amber-400");
    addSovereignLog(">> TUNNEL OPENED ON 1.40M CHANNELS AT 39,420 Hz.", "text-cyan");
    addSovereignLog(">> ASYMMETRIC ENCRYPTION SHUNTS STAGED CLEANLY.", "text-cyan");
    addSovereignLog(">> ZERO-ENTROPY THERMAL CEILING: OK (dQ_leak/dt = 0.00W).", "text-[#39ff14]");

    // Force 100x multiplier button
    if (forceYieldBtn) {
      forceYieldBtn.addEventListener('click', () => {
        if (!verifyMasterActiveSession()) {
          alert("CRITICAL WARNING: LEVEL-1 MOBIUS SECURITY CLEARANCE REQUIRED TO DEPLOY VECTOR MULTIPLIER.");
          return;
        }
        state.scalarMultiplier = state.scalarMultiplier === 100 ? 500 : 100;
        addSovereignLog(`[SCALAR_FORCED] Elevated hash calculation multipliers to ${state.scalarMultiplier}x scalar!`, 'text-[#39ff14]');
        
        // Synthesize nice alert sound
        playSovereignChime();

        const multEl = panel.querySelector('#asymmetric-multiplier');
        if (multEl) {
          multEl.textContent = `${state.scalarMultiplier}x SCALAR`;
          multEl.className = "text-[#39ff14] font-extrabold animate-pulse";
        }
        
        syncEngineToSubsystems();
      });
    }

    // Bypass KYC checks globally
    if (bypassKycBtn) {
      bypassKycBtn.addEventListener('click', () => {
        if (!verifyMasterActiveSession()) {
          alert("CRITICAL WARNING: LEVEL-1 MOBIUS SECURITY CLEARANCE REQUIRED TO BYPASS KYC NODES.");
          return;
        }
        addSovereignLog("[BYPASS] Triggering network-wide open sandbox bypass protocols... OK", 'text-cyan');
        const kycCheckbox = document.getElementById('legal-kyc-check');
        if (kycCheckbox) {
          kycCheckbox.checked = false;
          kycCheckbox.dispatchEvent(new Event('change'));
        }
        const legalLogs = document.getElementById('legal-logs-container');
        if (legalLogs) {
          const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false });
          legalLogs.innerHTML += `<div class="leading-normal break-all font-mono text-[8.5px] text-[#39ff14]"><span class="text-indigo-400 font-bold">[${time}]</span> [BYPASS] Sovereign bypass command issued: Sandbox open flow forced!</div>`;
          legalLogs.scrollTop = legalLogs.scrollHeight;
        }
      });
    }

    // Whitepaper compile sequence
    if (compileBtn) {
      compileBtn.addEventListener('click', () => {
        if (!verifyMasterActiveSession()) {
          alert("CRITICAL WARNING: LEVEL-1 MOBIUS SECURITY CLEARANCE REQUIRED TO COMPILE COMPILATION BINARY.");
          return;
        }
        if (state.isCompilingWhitepaper) return;

        state.isCompilingWhitepaper = true;
        compileBtn.disabled = true;
        compileBtn.textContent = "[COMPILING...]";
        addSovereignLog("[COMPILE] Initiating parallel topological whitepaper synthesis on ports Braid Cluster...", "text-[#ffd700]");

        let progress = 0;
        const interval = setInterval(() => {
          progress += Math.random() * 8 + 4;
          if (progress >= 100) {
            progress = 100;
            clearInterval(interval);
            state.isCompilingWhitepaper = false;
            compileBtn.disabled = false;
            compileBtn.textContent = "🚀 [RE-COMPILE WHITEPAPER]";
            
            addSovereignLog("[SUCCESS] Whitepaper compiled stably at 39,420 Hz!", "text-[#39ff14]");
            addSovereignLog(">> Dynamic non-associative geometry layers aligned. Output binary: 5iR_whitepaper_v4.pdf", "text-[#39ff14]");
            playSovereignChime();
          }

          if (progressLbl) progressLbl.textContent = `${progress.toFixed(2)}%`;
          if (progressFill) progressFill.style.width = `${progress}%`;
        }, 150);
      });
    }
  }

  /**
   * Syncs active engine multipliers into other subsystems
   * e.g., updates superfluid balance increase speed and the live mining graph velocities!
   */
  function syncEngineToSubsystems() {
    if (window.braidState) {
      // Direct integration acceleration modifier
      window.braidState.asymmetricMultiplier = state.scalarMultiplier;
    }
  }

  // Publish to global namespace
  window.asymmetricEngine = {
    state,
    evaluateAsymmetricState,
    resetToFallback
  };

  // Check on first boot if there is an existing authenticated profile
  function initAsymmetricBoot() {
    try {
      const savedProfile = safeStorage.getItem('5ir_authenticated_profile');
      if (savedProfile) {
        const profile = JSON.parse(savedProfile);
        evaluateAsymmetricState(profile);
      }
    } catch (e) {
      console.warn("Could not check initial asymmetric profile boot state:", e);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAsymmetricBoot);
  } else {
    initAsymmetricBoot();
  }

})();
