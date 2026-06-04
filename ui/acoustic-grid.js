/**
 * 5iR Aero City Acoustic Hub Grid (App 06)
 * Simulates sound wave capture and decibel phase inversion to generate stable energy.
 * Shows environmental noise transmuting with zero thermal bleed.
 * Highly interactive: Allows the user to tune the frequency and change the phase-shift logic.
 */

export function initAcousticGrid() {
  const container = document.getElementById('acoustic-grid-matrix');
  const dBSensor = document.getElementById('db-incoming-val');
  const dBOutput = document.getElementById('db-residual-val');
  const powerOutput = document.getElementById('acoustic-power-val');

  // Interactive controls
  const freqSlider = document.getElementById('acoustic-frequency-slider');
  const freqValDisplay = document.getElementById('slider-freq-val');
  const shiftSelect = document.getElementById('acoustic-shift-select');
  const mathEqText = document.getElementById('acoustic-math-equation');
  const residueLabel = document.getElementById('residue-label-text');

  if (!container) return;

  // 6 dynamic nodes of the city infrastructure grid
  const cells = [
    { name: "Grid Hub Alpha", active: true, db: 85.2 },
    { name: "Cruiser Port Beta", active: true, db: 91.4 },
    { name: "Cydonia Center Dome", active: true, db: 78.6 },
    { name: "Forge Zone 01", active: true, db: 94.6 },
    { name: "Lab Corridor Gamma", active: true, db: 64.0 },
    { name: "Reactor Substation", active: true, db: 89.1 }
  ];

  // Store active state
  let currentFreq = 39420;
  let currentShiftDegrees = 180; // Default perfect Möbius cancellation

  // Event handlers for dynamic parameters
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

  // Render nodes
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
        // Dynamic resize calculation to guarantee absolute high-fidelity crispness
        const rectWidth = canvas.parentElement.clientWidth || 150;
        const rectHeight = 35;
        if (canvas.width !== rectWidth || canvas.height !== rectHeight) {
          canvas.width = rectWidth;
          canvas.height = rectHeight;
        }

        const w = canvas.width;
        const h = canvas.height;

        ctx.clearRect(0, 0, w, h);

        // Sine wave rendering details
        ctx.lineWidth = 1.2;

        // Soundwave (cyan)
        ctx.strokeStyle = 'rgba(0, 242, 254, 0.45)';
        ctx.beginPath();
        for (let x = 0; x < w; x++) {
          // Relate wave frequency scaling to the user's currentFreq input
          const freqMultiplier = (currentFreq / 39420) * 0.15;
          const y = h / 2 + Math.sin(x * freqMultiplier + step + idx) * (cell.db * 0.12);
          if (x === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
        }
        ctx.stroke();

        // Inverted wave (violet)
        ctx.strokeStyle = 'rgba(88, 80, 236, 0.8)';
        ctx.beginPath();
        for (let x = 0; x < w; x++) {
          // Add phase shift degree offset dynamically
          const freqMultiplier = (currentFreq / 39420) * 0.15;
          const radiansShift = (currentShiftDegrees * Math.PI) / 180;
          const y = h / 2 + Math.sin(x * freqMultiplier + step + idx + radiansShift) * (cell.db * 0.12);
          if (x === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
        }
        ctx.stroke();

        // Update card anti-phase acquire status text depending on cancellation angle
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

        // Velocity increment matches sync frequency
        step += 0.05 * (currentFreq / 39420) + 0.05;
        requestAnimationFrame(renderWave);
      }

      renderWave();
    }
  });

  // Global telemetry drift simulating massive real-time energy harvesting
  let totalPower = 394.20;
  setInterval(() => {
    // Environmental input dBA fluctuates naturally
    const drift = (Math.random() * 2 - 1);
    const avgDB = (84.6 + drift);
    
    // Calculate actual phase-cancellation residue mathematically:
    // When shift is 180 (Pi radians), waves cancel fully (residue ~0).
    // When shift is 0 (0 radians), waves add constructively (residue = 2 * avgDB).
    const theta = (currentShiftDegrees * Math.PI) / 180;
    const amplitudeFactor = Math.sqrt(2 + 2 * Math.cos(theta)) / 2; // normalized to 0-1 range
    const rawResidue = avgDB * amplitudeFactor;
    
    // Slight telemetry jitter
    const finalResidue = Math.max(0, rawResidue + (Math.random() * 0.1 - 0.05));
    if (dBSensor && dBOutput) {
      dBSensor.textContent = avgDB.toFixed(1);
      dBOutput.textContent = finalResidue.toFixed(1);
    }

    // Power harvested is proportional to cancellation efficiency:
    // High cancellation (amplitudeFactor near 0) -> Maximum power output
    // Zero cancellation (amplitudeFactor near 1) -> No power output (or energy draining penalty)
    const efficiency = 1 - amplitudeFactor; // 1.0 at perfect, 0.0 at zero cancel
    const freqFactor = (currentFreq / 39420); // higher frequency harvesting is slightly more efficient
    
    totalPower = 394.20 * efficiency * freqFactor + (Math.random() * 0.4 - 0.2);
    if (totalPower < 0) totalPower = 0; // prevent negative bounds

    if (powerOutput) {
      powerOutput.textContent = `${totalPower.toFixed(2)} kW`;
      // If zero power, make text flash magenta to alert operator
      if (totalPower < 10) {
        powerOutput.className = "val text-magenta";
      } else {
        powerOutput.className = "val text-cyan";
      }
    }
  }, 1000);
}
