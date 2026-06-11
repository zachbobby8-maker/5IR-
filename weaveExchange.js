/**
 * 5iR The Weave Exchange & Sinter-Loom (App 20)
 * Architecture: Fiat Integration Platform & Sinter-Loom Isometric Workspace
 * Clock Speed: 39,420 Hz // Zero Entropy Coherence Base
 */

const FIAT_THEME = {
  voidBlack: '#010206',
  cyberNavy: '#040d21',
  lumeCyan: '#00f2fe',
  neonSafe: '#39ff14',
  alertRed: '#ff0055',
  deepBorder: '#1c2d5a',
  electricPurple: '#5850ec',
  textSteel: '#a1b5cc',
  warningYellow: '#ffd700'
};

const weaveState = {
  // Step 1: Presence
  latticeActive: false,
  presenceStatus: 'SILENT_NODE', // SILENT_NODE, RESONANT_LATTICE_NODE
  
  // Step 2: Loom Workspace & Templates
  selectedTemplate: 'NONE', // MICRO_ECONOMY, SMART_CONTRACT, SUPPLY_CHAIN
  
  // Step 3: Spinning Threads (Data node connections)
  // We track connected threads. Thread list:
  // - market_prices: Verified invariant, high resonance
  // - weather_sensors: Parity OK, normal resonance
  // - legacy_feed: Corrupt Legacy Ad-Network, drops resonance, causes sludge!
  connectedThreads: [], 
  
  // Metrics
  resonanceScore: 0.00,
  weaveStatus: 'DRAFTING', // DRAFTING, PROCESSING, LIVE, SLUDGE_PURGED
  weaveEfficiency: 0, // In percentage
  syntropyCredits: 2500.00,
  consoleLog: '>> [LOOM]: Simply link your mobile ID or biometric signature to activate your presence on the Lattice.',

  // Active Weave Assets Market
  exchangeItems: [
    { id: 'WEAVE_01', name: 'Micro-Lending Logic Block', owner: 'ARCHITECT_MAIN', type: 'Functional Weave', basePrice: 450.00, performance: 0.946, status: 'STABLE' },
    { id: 'STRAND_09', name: 'Logistics Weather Routine', owner: 'CYDONIA_NODE', type: 'Logic Strand', basePrice: 120.00, performance: 0.88, status: 'STABLE' },
    { id: 'SEAT_04', name: 'High-Bandwidth Lattice Seat', owner: 'TREASURY', type: 'Lattice Seat', basePrice: 1250.00, performance: 1.00, status: 'STABLE' },
    { id: 'SLUDGE_02', name: 'Corrupt Legacy Ad Routine', owner: 'ZOMBIE_NODE', type: 'Logic Strand', basePrice: 15.00, performance: 0.34, status: 'SLUDGE' }
  ]
};

function playWeaveSound(type) {
  try {
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (!AudioCtx) return;
    const actx = new AudioCtx();
    const osc = actx.createOscillator();
    const gain = actx.createGain();
    osc.connect(gain);
    gain.connect(actx.destination);

    if (type === 'activate') {
      // Step 1 melody
      osc.type = 'sine';
      osc.frequency.setValueAtTime(261.63, actx.currentTime); // C4
      osc.frequency.setValueAtTime(329.63, actx.currentTime + 0.1); // E4
      osc.frequency.setValueAtTime(392.00, actx.currentTime + 0.2); // G4
      osc.frequency.setValueAtTime(523.25, actx.currentTime + 0.3); // C5
      gain.gain.setValueAtTime(0.03, actx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, actx.currentTime + 0.45);
      osc.start();
      osc.stop(actx.currentTime + 0.45);
    } else if (type === 'click') {
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(440, actx.currentTime);
      gain.gain.setValueAtTime(0.015, actx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, actx.currentTime + 0.1);
      osc.start();
      osc.stop(actx.currentTime + 0.1);
    } else if (type === 'stitch') {
      osc.type = 'sine';
      osc.frequency.setValueAtTime(880, actx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(1320, actx.currentTime + 0.15);
      gain.gain.setValueAtTime(0.02, actx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, actx.currentTime + 0.15);
      osc.start();
      osc.stop(actx.currentTime + 0.15);
    } else if (type === 'pulse') {
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(150, actx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(600, actx.currentTime + 0.5);
      gain.gain.setValueAtTime(0.03, actx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, actx.currentTime + 0.5);
      osc.start();
      osc.stop(actx.currentTime + 0.5);
    } else if (type === 'success') {
      osc.type = 'sine';
      osc.frequency.setValueAtTime(523.25, actx.currentTime); // C5
      osc.frequency.setValueAtTime(659.25, actx.currentTime + 0.1); // E5
      osc.frequency.setValueAtTime(783.99, actx.currentTime + 0.2); // G5
      osc.frequency.setValueAtTime(1046.50, actx.currentTime + 0.3); // C6
      gain.gain.setValueAtTime(0.03, actx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, actx.currentTime + 0.5);
      osc.start();
      osc.stop(actx.currentTime + 0.5);
    } else if (type === 'decay') {
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(220, actx.currentTime);
      osc.frequency.linearRampToValueAtTime(90, actx.currentTime + 0.4);
      gain.gain.setValueAtTime(0.04, actx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, actx.currentTime + 0.4);
      osc.start();
      osc.stop(actx.currentTime + 0.4);
    }
  } catch(err) {
    console.warn("AudioContext blocked or un-activated.");
  }
}

function initWeaveExchangeApp() {
  console.log(">> [WEAVE_EXCHANGE] Bootstrapping App 20 Sinter-Loom Matrix...");

  // Core Displays
  const creditsDisplay = document.getElementById('weave-credits-display');
  const consoleOutput = document.getElementById('weave-console-log');
  const marketList = document.getElementById('weave-market-list');

  // Step 1 Presence Elements
  const step1Box = document.getElementById('weave-step-1-box');
  const presenceBadge = document.getElementById('weave-presence-badge');
  const heartbeatBtn = document.getElementById('weave-heartbeat-btn');

  // Step 2 Workspace Template Elements
  const step2Box = document.getElementById('weave-step-2-box');
  const templateSelect = document.getElementById('weave-template-select');

  // Step 3 Loom Workspace Elements
  const step3Box = document.getElementById('weave-step-3-box');
  const weaveResonanceDisplay = document.getElementById('weave-resonance-val');
  const weaveEfficiencyDisplay = document.getElementById('weave-efficiency-val');
  const weaveStatusDisplay = document.getElementById('weave-status-val');
  
  // Stitching Controls
  const stitchMarketBtn = document.getElementById('stitch-market-prices');
  const stitchWeatherBtn = document.getElementById('stitch-weather-sensors');
  const stitchLegacyBtn = document.getElementById('stitch-legacy-feed');
  const resetLoomBtn = document.getElementById('reset-loom-workspace');

  // Loom Workspace Visual Grid Canvas
  const loomCanvas = document.getElementById('sinter-loom-workspace-canvas');

  // Step 4 Pulse Button
  const pulseBtn = document.getElementById('weave-pulse-manifold-btn');

  if (!loomCanvas || !heartbeatBtn) {
    console.warn(">> [WEAVE_EXCHANGE] Missing critical DOM nodes. Postponing bind.");
    return;
  }

  // Interactive Coordinates for Draggable Thread Nodes on Canvas
  const canvasNodes = {
    core: { x: 150, y: 75, r: 24, label: 'Loom Core', color: FIAT_THEME.lumeCyan },
    market: { x: 45, y: 35, r: 16, label: 'Market Prices', id: 'market_prices', color: FIAT_THEME.neonSafe, active: false },
    weather: { x: 45, y: 115, r: 16, label: 'Weather Sensors', id: 'weather_sensors', color: FIAT_THEME.textSteel, active: false },
    legacy: { x: 255, y: 75, r: 16, label: 'Legacy Feed [Drift]', id: 'legacy_feed', color: FIAT_THEME.alertRed, active: false }
  };

  let draggingNode = null;

  // Render & Calculate Metrics strictly decoupled from wallet balances!
  function calculateWeaveMetrics() {
    if (!weaveState.latticeActive) {
      weaveState.resonanceScore = 0.00;
      weaveState.weaveEfficiency = 0;
      weaveState.weaveStatus = 'SILENT';
      return;
    }

    if (weaveState.selectedTemplate === 'NONE') {
      weaveState.resonanceScore = 0.20;
      weaveState.weaveEfficiency = 15;
      weaveState.weaveStatus = 'DRAFTING';
      return;
    }

    let baseCoherence = 0.40; // Template baseline
    let efficiency = 35;

    // Calculate quality contribution of each connected thread
    let hasLegacy = false;
    weaveState.connectedThreads.forEach(th => {
      if (typeof th === 'string') {
        if (th === 'market_prices') {
          baseCoherence += 0.35;
          efficiency += 35;
        } else if (th === 'weather_sensors') {
          baseCoherence += 0.20;
          efficiency += 25;
        } else if (th === 'legacy_feed') {
          hasLegacy = true;
        }
      }
    });

    if (hasLegacy) {
      // Cruel part: Legacy ad network causes severe decay
      weaveState.resonanceScore = 0.12;
      weaveState.weaveEfficiency = 8;
      weaveState.weaveStatus = 'SLUDGE';
    } else {
      weaveState.resonanceScore = Math.min(1.00, baseCoherence);
      weaveState.weaveEfficiency = Math.min(100, efficiency);
      weaveState.weaveStatus = 'RESONANT';
    }
  }

  function updateUI() {
    calculateWeaveMetrics();

    // Accounts display
    if (creditsDisplay) creditsDisplay.textContent = `$${weaveState.syntropyCredits.toFixed(2)} USD`;
    
    // Console log output
    if (consoleOutput) consoleOutput.textContent = weaveState.consoleLog;

    // Step 1 Presence Updates
    if (presenceBadge) {
      presenceBadge.textContent = weaveState.presenceStatus;
      presenceBadge.style.color = weaveState.latticeActive ? FIAT_THEME.neonSafe : FIAT_THEME.textSteel;
      presenceBadge.style.textShadow = weaveState.latticeActive ? `0 0 8px ${FIAT_THEME.neonSafe}` : 'none';
    }
    if (heartbeatBtn) {
      heartbeatBtn.disabled = weaveState.latticeActive;
      heartbeatBtn.textContent = weaveState.latticeActive ? '✓ LATTICE PRESENCE ONLINE' : '[INITIALIZE CRYPTOGRAPHIC HEARTBEAT]';
      if (weaveState.latticeActive) {
        heartbeatBtn.className = 'w-full py-2.5 bg-emerald-950/40 border border-emerald-500/50 text-[#39ff14] text-[9px] font-bold rounded cursor-not-allowed uppercase';
      } else {
        heartbeatBtn.className = 'w-full py-2.5 bg-indigo-950 hover:bg-[#5850ec] hover:text-white border border-indigo-500 text-cyan text-[9px] font-bold rounded transition-all uppercase';
      }
    }

    // Step 2 Template selector disabled/enabled
    if (templateSelect) {
      templateSelect.disabled = !weaveState.latticeActive;
      templateSelect.value = weaveState.selectedTemplate;
    }

    // Step 3 metrics display
    if (weaveResonanceDisplay) {
      weaveResonanceDisplay.textContent = weaveState.resonanceScore.toFixed(3);
      weaveResonanceDisplay.style.color = weaveState.resonanceScore < 0.3 ? FIAT_THEME.alertRed : FIAT_THEME.lumeCyan;
    }
    if (weaveEfficiencyDisplay) {
      weaveEfficiencyDisplay.textContent = `${weaveState.weaveEfficiency}%`;
      weaveEfficiencyDisplay.style.color = weaveState.weaveEfficiency < 20 ? FIAT_THEME.alertRed : FIAT_THEME.neonSafe;
    }
    if (weaveStatusDisplay) {
      weaveStatusDisplay.textContent = weaveState.weaveStatus;
      weaveStatusDisplay.style.color = weaveState.weaveStatus === 'SLUDGE' ? FIAT_THEME.alertRed : (weaveState.weaveStatus === 'RESONANT' ? FIAT_THEME.neonSafe : '#ffffff');
    }

    // Stitch buttons state updates
    if (stitchMarketBtn) {
      const active = weaveState.connectedThreads.includes('market_prices');
      stitchMarketBtn.disabled = !weaveState.latticeActive || weaveState.selectedTemplate === 'NONE';
      stitchMarketBtn.textContent = active ? 'STITCHED' : 'STITCH';
      stitchMarketBtn.style.borderColor = active ? FIAT_THEME.neonSafe : '';
      stitchMarketBtn.style.color = active ? FIAT_THEME.neonSafe : '';
    }
    if (stitchWeatherBtn) {
      const active = weaveState.connectedThreads.includes('weather_sensors');
      stitchWeatherBtn.disabled = !weaveState.latticeActive || weaveState.selectedTemplate === 'NONE';
      stitchWeatherBtn.textContent = active ? 'STITCHED' : 'STITCH';
      stitchWeatherBtn.style.borderColor = active ? FIAT_THEME.neonSafe : '';
      stitchWeatherBtn.style.color = active ? FIAT_THEME.neonSafe : '';
    }
    if (stitchLegacyBtn) {
      const active = weaveState.connectedThreads.includes('legacy_feed');
      stitchLegacyBtn.disabled = !weaveState.latticeActive || weaveState.selectedTemplate === 'NONE';
      stitchLegacyBtn.textContent = active ? 'STITCHED' : 'STITCH';
      stitchLegacyBtn.style.borderColor = active ? FIAT_THEME.alertRed : '';
      stitchLegacyBtn.style.color = active ? FIAT_THEME.alertRed : '';
    }

    // Canvas nodes active state match
    canvasNodes.market.active = weaveState.connectedThreads.includes('market_prices');
    canvasNodes.weather.active = weaveState.connectedThreads.includes('weather_sensors');
    canvasNodes.legacy.active = weaveState.connectedThreads.includes('legacy_feed');

    // Step 4 Pulse Button Status
    if (pulseBtn) {
      const canPulse = weaveState.latticeActive && weaveState.selectedTemplate !== 'NONE' && weaveState.weaveStatus !== 'PROCESSING';
      pulseBtn.disabled = !canPulse;
      if (weaveState.weaveStatus === 'PROCESSING') {
        pulseBtn.textContent = '[PULSING TO THE MANIFOLD...]';
        pulseBtn.className = 'w-full py-2.5 bg-yellow-950/40 border border-yellow-500/40 text-yellow-400 font-mono text-[9px] font-bold cursor-not-allowed rounded uppercase animate-pulse';
      } else {
        pulseBtn.textContent = '[PULSE WEAVE TO LIVE EXCHANGE]';
        pulseBtn.className = canPulse 
          ? 'w-full py-2.5 bg-[#5850ec] hover:bg-cyan-500 hover:text-black border border-indigo-500 text-white font-mono text-[9px] font-bold cursor-pointer rounded transition-all uppercase' 
          : 'w-full py-2.5 bg-zinc-800 text-gray-500 font-mono text-[9px] font-bold cursor-not-allowed rounded uppercase border border-zinc-700';
      }
    }

    drawLoomWorkspace();
    renderMarket();
  }

  // Draw 3D Isometric/High-Tech Workspace on Canvas
  function drawLoomWorkspace() {
    const ctx = loomCanvas.getContext('2d');
    const w = loomCanvas.width = loomCanvas.parentElement.clientWidth || 300;
    const h = loomCanvas.height = 150;

    // Reset center X dynamically based on container size
    canvasNodes.core.x = w / 2;
    canvasNodes.market.x = w / 2 - 100;
    canvasNodes.weather.x = w / 2 - 100;
    canvasNodes.legacy.x = w / 2 + 100;

    // Draw grid background
    ctx.strokeStyle = 'rgba(28, 45, 90, 0.2)';
    ctx.lineWidth = 0.5;
    for (let x = 0; x < w; x += 15) {
      ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, h); ctx.stroke();
    }
    for (let y = 0; y < h; y += 15) {
      ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(w, y); ctx.stroke();
    }

    // Draw connection lines to central engine Loom Core
    Object.values(canvasNodes).forEach(node => {
      if (node.id) {
        ctx.beginPath();
        ctx.moveTo(node.x, node.y);
        ctx.lineTo(canvasNodes.core.x, canvasNodes.core.y);

        if (node.active) {
          ctx.strokeStyle = node.id === 'legacy_feed' ? FIAT_THEME.alertRed : FIAT_THEME.neonSafe;
          ctx.lineWidth = 1.5;
          ctx.setLineDash([]);
          ctx.shadowColor = ctx.strokeStyle;
          ctx.shadowBlur = 6;
        } else {
          ctx.strokeStyle = 'rgba(28, 45, 90, 0.4)';
          ctx.lineWidth = 0.8;
          ctx.setLineDash([3, 3]);
          ctx.shadowBlur = 0;
        }
        ctx.stroke();
        ctx.setLineDash([]);
        ctx.shadowBlur = 0;
      }
    });

    // Draw Core Node
    ctx.beginPath();
    ctx.arc(canvasNodes.core.x, canvasNodes.core.y, canvasNodes.core.r, 0, Math.PI * 2);
    ctx.fillStyle = weaveState.weaveStatus === 'SLUDGE' ? FIAT_THEME.alertRed : (weaveState.weaveStatus === 'RESONANT' ? FIAT_THEME.neonSafe : '#010206');
    ctx.fill();
    ctx.strokeStyle = FIAT_THEME.lumeCyan;
    ctx.lineWidth = 2;
    ctx.stroke();

    // Draw spinning ring inside core node
    if (weaveState.weaveStatus === 'RESONANT' || weaveState.weaveStatus === 'PROCESSING') {
      ctx.beginPath();
      const radiusOffset = 8 + Math.sin(Date.now() / 150) * 4;
      ctx.arc(canvasNodes.core.x, canvasNodes.core.y, radiusOffset, 0, Math.PI * 2);
      ctx.strokeStyle = FIAT_THEME.lumeCyan;
      ctx.lineWidth = 1;
      ctx.stroke();
    }

    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 7.5pt monospace';
    ctx.textAlign = 'center';
    ctx.fillText('LOOM CORE', canvasNodes.core.x, canvasNodes.core.y + 3);

    // Draw External Thread Input Nodes
    Object.values(canvasNodes).forEach(node => {
      if (node.id) {
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.r, 0, Math.PI * 2);
        ctx.fillStyle = node.active ? node.color : '#010206';
        ctx.fill();
        ctx.strokeStyle = node.color;
        ctx.lineWidth = 1.5;
        ctx.stroke();

        ctx.fillStyle = node.active ? '#010206' : '#ffffff';
        ctx.font = '7pt monospace';
        ctx.textAlign = 'center';
        ctx.fillText(node.id === 'market_prices' ? 'MKT' : node.id === 'weather_sensors' ? 'WTH' : 'ADV', node.x, node.y + 2.5);

        // Labels
        ctx.fillStyle = FIAT_THEME.textSteel;
        ctx.font = '6pt monospace';
        ctx.fillText(node.label, node.x, node.y + node.r + 8);
      }
    });
  }

  // Bind step 1 heartbeat initiator
  heartbeatBtn.addEventListener('click', () => {
    playWeaveSound('activate');
    weaveState.latticeActive = true;
    weaveState.presenceStatus = 'LATTICE_RESONANT_NODE';
    weaveState.consoleLog = '>> [VORTEX_DAEMON]: Presence activated cleanly. Assigning baseline resonance. Step 2 opened.';
    updateUI();
  });

  // Bind step 2 template dropdown selector
  templateSelect.addEventListener('change', (e) => {
    playWeaveSound('click');
    weaveState.selectedTemplate = e.target.value;
    if (weaveState.selectedTemplate !== 'NONE') {
      weaveState.consoleLog = `>> [LOOM]: Workspace template loaded: "${weaveState.selectedTemplate}". Connect input threads in Step 3.`;
    } else {
      weaveState.consoleLog = '>> [LOOM]: Selected template cleared. Loom core empty.';
    }
    updateUI();
  });

  // Handle Thread Stitch buttons clicks (Step 3)
  function toggleThreadStitch(threadId, labelText) {
    if (!weaveState.latticeActive || weaveState.selectedTemplate === 'NONE') return;

    playWeaveSound('stitch');
    const idx = weaveState.connectedThreads.indexOf(threadId);
    if (idx === -1) {
      weaveState.connectedThreads.push(threadId);
      weaveState.consoleLog = `>> [LOOM]: Thread input stitched successfully: ${labelText}. Resonance increased.`;
    } else {
      weaveState.connectedThreads.splice(idx, 1);
      weaveState.consoleLog = `>> [LOOM]: Unstitched thread input: ${labelText}. Resonance decreased.`;
    }
    updateUI();
  }

  stitchMarketBtn.addEventListener('click', () => toggleThreadStitch('market_prices', 'Market Price Feeds'));
  stitchWeatherBtn.addEventListener('click', () => toggleThreadStitch('weather_sensors', 'Meteorological Sensors'));
  stitchLegacyBtn.addEventListener('click', () => toggleThreadStitch('legacy_feed', 'Legacy Ad-Network'));

  // Reset workspace
  resetLoomBtn.addEventListener('click', () => {
    playWeaveSound('click');
    weaveState.connectedThreads = [];
    weaveState.consoleLog = '>> [LOOM]: All active thread paths cleared cleanly. Loom core reset.';
    updateUI();
  });

  // Step 4 Pulse Weave Button click action
  pulseBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if (weaveState.weaveStatus === 'PROCESSING') return;

    playWeaveSound('pulse');
    weaveState.weaveStatus = 'PROCESSING';
    weaveState.consoleLog = '>> [PULSE]: Transmitting weave configuration space to the Manifold...';
    updateUI();

    // Pulse laser simulation
    let duration = 1500;
    setTimeout(() => {
      calculateWeaveMetrics(); // Re-evaluate logic

      if (weaveState.weaveStatus === 'SLUDGE') {
        playWeaveSound('decay');
        weaveState.connectedThreads = []; // Purged instantly!
        weaveState.consoleLog = '>> [VORTEX_VERDICT]: REJECTED! Inefficient, sludge-laden legacy data inputs detected. Weave classified as Sludge and purged completely to prevent systemic drag.';
      } else {
        playWeaveSound('success');
        const payout = 350.00;
        weaveState.syntropyCredits += payout;
        weaveState.consoleLog = `>> [VORTEX_VERDICT]: PASS! Design validated as Highly Resonant. Added +$${payout.toFixed(2)} Syntropy Credits instantly!`;

        // Add newly minted resonant block to the marketplace
        const templateLabel = weaveState.selectedTemplate === 'MICRO_ECONOMY' ? 'Micro-Economy Braid' : (weaveState.selectedTemplate === 'SMART_CONTRACT' ? 'Smart Contract Braid' : 'Supply Chain Braid');
        const price = 320.00 + Math.random() * 150;
        weaveState.exchangeItems.unshift({
          id: `WEAVE_${Date.now().toString().slice(-4)}`,
          name: `${templateLabel} [Custom]`,
          owner: 'USER_NODE',
          type: 'Functional Weave',
          basePrice: price,
          performance: weaveState.resonanceScore,
          status: 'STABLE'
        });
      }

      updateUI();
    }, duration);
  });

  // Render marketplace assets list with interactive purchases
  function renderMarket() {
    if (!marketList) return;

    marketList.innerHTML = weaveState.exchangeItems.map(item => {
      const isUserOwned = item.owner === 'USER_NODE';
      const isSludge = item.performance < 0.5;
      
      const badgeColor = isSludge ? FIAT_THEME.alertRed : (isUserOwned ? FIAT_THEME.warningYellow : FIAT_THEME.lumeCyan);
      const actionBtn = isUserOwned 
        ? `<span class="text-gray-500 font-bold text-[6.5pt] uppercase tracking-wide px-1 border border-zinc-700 bg-zinc-900 rounded">OWNED</span>`
        : `<button onclick="window.tradeExchangeWeave('${item.id}', ${item.basePrice})" class="px-1.5 py-0.5 bg-[#5850ec] hover:bg-[#00f2fe] text-white hover:text-black font-mono font-bold text-[6.5pt] border-none rounded cursor-pointer transition-colors uppercase">[BUY]</button>`;

      return `
        <div style="display: flex; justify-content: space-between; align-items: center; font-size: 7.5pt; border-bottom: 1px dashed ${FIAT_THEME.deepBorder}; padding-bottom: 4px; margin-bottom: 4px;">
          <div>
            <span style="color: ${badgeColor}; font-weight: bold;">${item.name}</span>
            <div style="font-size: 6pt; color: ${FIAT_THEME.textSteel}; margin-top: 1px;">
              Coherence: <span class="font-bold text-white">${item.performance.toFixed(3)}</span> // Owner: ${item.owner}
            </div>
          </div>
          <div style="text-align: right; display: flex; flex-direction: column; align-items: flex-end; gap: 2px;">
            <span style="color: ${FIAT_THEME.neonSafe}; font-weight: bold;">$${item.basePrice.toFixed(2)}</span>
            ${actionBtn}
          </div>
        </div>
      `;
    }).join('');
  }

  // Handle purchases in exchange items
  window.tradeExchangeWeave = function(itemId, price) {
    if (weaveState.syntropyCredits < price) {
      alert("Insufficient Syntropy Credits balance. Pulse resonant waves to the Manifold to earn credits!");
      return;
    }

    playWeaveSound('stitch');
    weaveState.syntropyCredits -= price;
    
    // Change ownership to user node
    weaveState.exchangeItems = weaveState.exchangeItems.map(item => {
      if (item.id === itemId) {
        return { ...item, owner: 'USER_NODE' };
      }
      return item;
    });

    weaveState.consoleLog = `>> [EXCHANGE]: Asset purchased successfully. -${price.toFixed(2)} Credits spent.`;
    updateUI();
  };

  // Dynamic Pricing loop (Determined by the Vortex Engine)
  // prices fluctuate. Resonant ones increase, decaying Sludge drops to zero and gets recycled!
  setInterval(() => {
    weaveState.exchangeItems = weaveState.exchangeItems.map(item => {
      let isSludge = item.performance < 0.5 || item.status === 'SLUDGE';
      let priceChange = 0;

      if (isSludge) {
        // Sludge prices decay rapidly
        priceChange = -(item.basePrice * (0.15 + Math.random() * 0.10));
        let nextPrice = Math.max(0, item.basePrice + priceChange);
        
        return {
          ...item,
          basePrice: nextPrice,
          status: nextPrice <= 2.00 ? 'RECYCLED' : 'SLUDGE'
        };
      } else {
        // High performing resonant waves increase in value
        priceChange = item.basePrice * (0.02 + Math.random() * 0.05);
        return {
          ...item,
          basePrice: item.basePrice + priceChange
        };
      }
    });

    // Recycle loop: remove items marked RECYCLED and insert a new randomized node to avoid empty pools
    const initialLen = weaveState.exchangeItems.length;
    weaveState.exchangeItems = weaveState.exchangeItems.filter(item => item.status !== 'RECYCLED');
    
    if (weaveState.exchangeItems.length < initialLen) {
      playWeaveSound('decay');
      weaveState.consoleLog = `>> [VORTEX_ENGINE]: Automatically recycled decayed sludge structures to prevent systemic drag.`;
      
      // Inject a new replacement asset
      const names = ['Decentralized Insurance Pool', 'Acoustic Converter Strand', 'Automated Balcony Irrigation Block'];
      const types = ['Functional Weave', 'Logic Strand', 'Lattice Seat'];
      const index = Math.floor(Math.random() * names.length);
      
      weaveState.exchangeItems.push({
        id: `WEAVE_${Math.floor(Math.random() * 90 + 10)}`,
        name: names[index],
        owner: 'EXTERNAL_NODE',
        type: types[index],
        basePrice: 150.00 + Math.random() * 300,
        performance: 0.70 + Math.random() * 0.28,
        status: 'STABLE'
      });
    }

    updateUI();
  }, 5000);

  // Initial paint
  updateUI();
}

// Bind to window context
window.initWeaveExchangeApp = initWeaveExchangeApp;
window.weaveExchangeState = weaveState;
