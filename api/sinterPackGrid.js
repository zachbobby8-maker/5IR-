/**
 * 5iR Production Code Sinter-Packer & Contributor Grid Subsystem
 * Casing alignment replica: sinterpackgrid.js
 * Architecture: Client-Side JS Minifier, Metadata Packer & Activity Tracker
 * Operational Sync: 39,420 Hz // Target Parity: 94.6%
 * Enforces absolute compatibility on case-sensitive Git/Vercel repositories.
 */

// Safe storage reference
const safeStorage = window.safeStorage || window.localStorage;

let contributionHistory = [
  { username: 'MÖBIUS_BRAID', task: 'Initial Sinter Core Weld', blocks: 24, time: '09:12' },
  { username: 'KING_DROID', task: 'WASP 3.0 Gatekeeper Link', blocks: 16, time: '14:45' }
];

// Sound synthesis helper
function playSynthBeep(freq, type = 'sine', duration = 0.1) {
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
    gain.gain.setValueAtTime(0.02, actx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, actx.currentTime + duration);
    osc.start();
    osc.stop(actx.currentTime + duration);
  } catch (e) {}
}

/**
 * Initializes App 19: Contributor Sinter Grid & Code Packer
 */
async function initSinterPackGridApp() {
  console.log(">> [SINTER_GRID]: Initializing Contributor Sinter Grid App (sinterpackgrid.js)...");

  const form = document.getElementById('sinter-pack-form');
  const handleInput = document.getElementById('sinter-contrib-handle');
  const submitBtn = document.getElementById('sinter-pack-submit-btn');
  const rawCodeArea = document.getElementById('sinter-raw-code');
  const packedOutputArea = document.getElementById('sinter-packed-output');
  const meshGridContainer = document.getElementById('sinter-mesh-grid-container');
  const streamContainer = document.getElementById('sinter-stream-container');

  if (!meshGridContainer || !streamContainer) return;

  // 1. Generate and render the 48 visual grid squares with varying intensities
  function renderGridSquares() {
    meshGridContainer.innerHTML = '';
    const totalGridSquares = Array.from({ length: 48 }, (_, i) => ({
      id: i,
      intensity: i % 5 === 0 ? 0.8 : i % 3 === 0 ? 0.5 : i % 7 === 0 ? 0.2 : 0
    }));

    totalGridSquares.forEach(sq => {
      const square = document.createElement('div');
      square.className = 'h-[12px] rounded-[1.5px] transition-all duration-300';
      
      if (sq.intensity === 0.8) {
        square.style.backgroundColor = '#00f2fe';
        square.style.boxShadow = '0 0 5px #00f2fe';
      } else if (sq.intensity === 0.5) {
        square.style.backgroundColor = 'rgba(0, 242, 254, 0.4)';
      } else if (sq.intensity === 0.2) {
        square.style.backgroundColor = 'rgba(0, 242, 254, 0.15)';
      } else {
        square.style.backgroundColor = '#0d1527';
      }
      meshGridContainer.appendChild(square);
    });
  }

  // 2. Render localized stream list of history
  function renderStreamHistory() {
    streamContainer.innerHTML = '';
    contributionHistory.forEach(log => {
      const line = document.createElement('div');
      line.className = 'flex justify-between items-center text-[7pt] text-white border-b border-[#1c2d5a]/10 pb-1 last:border-b-0';
      line.innerHTML = `
        <span class="text-[#00f2fe] font-bold">@${log.username}</span>
        <span class="text-[#a1b5cc] truncate max-w-[120px]" title="${log.task}">${log.task}</span>
        <span class="text-[#39ff14] font-mono">+${log.blocks}B</span>
      `;
      streamContainer.appendChild(line);
    });
  }

  // 3. Load saved history from AI storage
  try {
    if (window.braidAI && window.braidAI.storage) {
      const cached = await window.braidAI.storage.getItem('sinter_contribution_history');
      if (cached) {
        contributionHistory = JSON.parse(cached);
      }
    }
  } catch (err) {
    console.warn("Sinter contribution history loading error:", err);
  }

  renderGridSquares();
  renderStreamHistory();

  // 4. Form Submit Handler for JS minifier & Metadata packing
  if (form && submitBtn && rawCodeArea && packedOutputArea) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const username = handleInput ? handleInput.value.trim() : '';
      const rawCode = rawCodeArea.value;

      if (!username) {
        alert("Please enter your Node Contributor Handle before sintering.");
        return;
      }
      if (!rawCode.trim()) {
        alert("The input workspace is empty. Enter raw JavaScript/React code strings.");
        return;
      }

      // Transition to processing state
      submitBtn.disabled = true;
      submitBtn.textContent = window.braidI18n?.t('app19.executing_btn') || '[SINTERING_OVERHEAD...]';
      packedOutputArea.value = '// Initializing 5iR Sinter Engine... Purging legacy whitespace strings.\n';
      playSynthBeep(440, 'triangle', 0.2);

      setTimeout(() => {
        // Safe procedural URL-preserving comment removal (prevents regex "expected branch" issues)
        const lines = rawCode.split('\n');
        const cleanedLines = lines.map(line => {
          const doubleSlashIdx = line.indexOf('//');
          if (doubleSlashIdx !== -1) {
            const prefix = line.substring(0, doubleSlashIdx);
            // Ignore double slash if preceded by http: or https:
            if (!prefix.endsWith('http:') && !prefix.endsWith('https:')) {
              return prefix;
            }
          }
          return line;
        });

        // Strip multi-line comments and collapse extra spaces
        const stripped = cleanedLines.join('\n')
          .replace(/\/\*[\s\S]*?\*\//g, '')
          .replace(/\s+/g, ' ')
          .trim();

        // Safe base64 encoding sequence
        let b64 = "";
        try {
          b64 = btoa(stripped.substring(0, 30));
        } catch(err) {
          b64 = btoa(unescape(encodeURIComponent(stripped.substring(0, 30)))).substring(0, 30);
        }

        // Build proprietary payload wrapper
        const packedPayload = `/** [5iR_SINTER_PACKET] // ORIGIN: ${username.toUpperCase()} // SYNC: 39420HZ */\nwindow._5iR_mesh=window._5iR_mesh||[];_5iR_mesh.push({sinteredBlock:"${b64}"});\n${stripped}`;
        
        packedOutputArea.value = packedPayload;
        submitBtn.disabled = false;
        submitBtn.textContent = window.braidI18n?.t('app19.execute_btn') || '[EXECUTE_SINTER_PACK]';

        // Prepend history log
        contributionHistory.unshift({
          username: username.toUpperCase().replace(/\s+/g, '_'),
          task: `Compressed Block (${stripped.length} chars)`,
          blocks: Math.floor(Math.random() * 8) + 1,
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false })
        });

        // Limit size of history list
        if (contributionHistory.length > 20) {
          contributionHistory.pop();
        }

        renderStreamHistory();
        playSynthBeep(880, 'sine', 0.15);

        // Flash grid squares to represent mesh active commit
        renderGridSquares();
        const firstSquare = meshGridContainer.firstChild;
        if (firstSquare) {
          firstSquare.style.backgroundColor = '#39ff14';
          firstSquare.style.boxShadow = '0 0 10px #39ff14';
        }

        // Persist to storage
        try {
          if (window.braidAI && window.braidAI.storage) {
            window.braidAI.storage.setItem('sinter_contribution_history', JSON.stringify(contributionHistory));
          }
        } catch(e) {}
      }, 1200);
    });
  }

  // Pre-fill user profile handle if available
  const savedProfileRaw = safeStorage.getItem('5ir_authenticated_profile');
  if (savedProfileRaw && handleInput) {
    try {
      const p = JSON.parse(savedProfileRaw);
      if (p.handle && p.handle !== 'Guest Contributor') {
        handleInput.value = p.handle;
      }
    } catch (e) {}
  }
}

// Bind to window object for unified boot access
if (typeof window !== 'undefined') {
  window.initSinterPackGridApp = initSinterPackGridApp;
}
