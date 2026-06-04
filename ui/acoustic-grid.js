/**
 * 5iR Aero City Acoustic Hub Grid (App 06)
 * Simulates sound wave capture and decibel phase inversion to generate stable energy.
 * Shows environmental noise transmuting with zero thermal bleed.
 */

export function initAcousticGrid() {
  const container = document.getElementById('acoustic-grid-matrix');
  const dBSensor = document.getElementById('db-incoming-val');
  const dBOutput = document.getElementById('db-residual-val');
  const powerOutput = document.getElementById('acoustic-power-val');

  if (!container) return;

  // Let's draw 6 dynamic nodes of the city infrastructure grid
  const cells = [
    { name: "Grid Hub Alpha", active: true, db: 85.2 },
    { name: "Cruiser Port Beta", active: true, db: 91.4 },
    { name: "Cydonia Center Dome", active: true, db: 78.6 },
    { name: "Forge Zone 01", active: true, db: 94.6 },
    { name: "Lab Corridor Gamma", active: true, db: 64.0 },
    { name: "Reactor Substation", active: true, db: 89.1 }
  ];

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
        <span style="color: #00f2fe;">ANTI-PHASE ACQD ✓</span>
      </div>
    `;
    container.appendChild(card);

    // Initialize individual canvases to render original soundwave (cyan) and inverted phase-lock wave (violet)
    const canvas = document.getElementById(`acoustic-canvas-${idx}`);
    if (canvas) {
      const ctx = canvas.getContext('2d');
      let w = canvas.width = canvas.parentElement.clientWidth || 100;
      let h = canvas.height = 35;
      let step = 0;

      function renderWave() {
        ctx.clearRect(0, 0, w, h);

        // Sine wave calculations
        ctx.lineWidth = 1;

        // Soundwave (cyan)
        ctx.strokeStyle = 'rgba(0, 242, 254, 0.45)';
        ctx.beginPath();
        for (let x = 0; x < w; x++) {
          const y = h / 2 + Math.sin(x * 0.15 + step + idx) * (cell.db * 0.12);
          if (x === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
        }
        ctx.stroke();

        // Inverted wave (violet)
        ctx.strokeStyle = 'rgba(88, 80, 236, 0.8)';
        ctx.beginPath();
        for (let x = 0; x < w; x++) {
          // Exactly shifted by Pi to show perfect noise canceling phase-inversion
          const y = h / 2 + Math.sin(x * 0.15 + step + idx + Math.PI) * (cell.db * 0.12);
          if (x === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
        }
        ctx.stroke();

        step += 0.15;
        requestAnimationFrame(renderWave);
      }

      renderWave();
    }
  });

  // Global telemetry drift simulating massive real-time energy harvesting
  let totalPower = 394.20;
  setInterval(() => {
    // Noise sensors drift
    const drift = (Math.random() * 2 - 1);
    const avgDB = (84.6 + drift).toFixed(1);
    if (dBSensor) dBSensor.textContent = avgDB;

    // Phase inversion residue should stay 0.0 representing perfect cancellation
    if (dBOutput) {
      dBOutput.textContent = (0.0 + (Math.random() * 0.05)).toFixed(1);
    }

    // Power harvested drift
    totalPower = 394.20 + Math.sin(Date.now() * 0.001) * 2.5;
    if (powerOutput) {
      powerOutput.textContent = `${totalPower.toFixed(2)} kW`;u
    }
  }, 1200);
}
