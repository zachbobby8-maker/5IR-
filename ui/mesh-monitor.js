/**
 * 5iR Mother Loom Mesh Monitor (App 02)
 * Renders an undulating topological non-associative braid matrix.
 * Hard-locked global coherence ceiling of 94.6%.
 */

export function initMeshMonitor() {
  const canvas = document.getElementById('mesh-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let animationId;
  let width = canvas.width = canvas.parentElement.clientWidth || 300;
  let height = canvas.height = 200;

  // Track window resizing
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
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, height);
      ctx.stroke();
    }
    for (let y = 0; y < height; y += 30) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(width, y);
      ctx.stroke();
    }

    // Undulating sine wave braid strands
    for (let s = 0; s < strands; s++) {
      ctx.beginPath();
      ctx.strokeStyle = s === 0 ? 'rgba(0, 242, 254, 0.4)' : s === 1 ? 'rgba(88, 80, 236, 0.4)' : 'rgba(156, 179, 201, 0.3)';
      ctx.lineWidth = 2;

      const offset = (s * Math.PI * 2) / strands;

      for (let i = 0; i <= numNodes; i++) {
        const x = (i / numNodes) * width;
        // Braid formula using layered sine waves
        const y = height / 2 + Math.sin(phase + (i * 0.4) + offset) * 45 * Math.cos(phase * 0.5 + i * 0.1);

        if (i === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      }
      ctx.stroke();

      // Render non-associative node indicators
      for (let i = 2; i < numNodes - 2; i += 4) {
        const x = (i / numNodes) * width;
        const y = height / 2 + Math.sin(phase + (i * 0.4) + offset) * 45 * Math.cos(phase * 0.5 + i * 0.1);

        // Interactive pulse effect on nodes
        const pulse = Math.abs(Math.sin(phase * 2 + i));
        ctx.fillStyle = s === 0 ? '#00f2fe' : s === 1 ? '#5850ec' : '#9cb3c9';
        ctx.shadowColor = ctx.fillStyle;
        ctx.shadowBlur = pulse * 8;

        ctx.beginPath();
        ctx.arc(x, y, 3 + pulse * 2, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0; // reset
        
        // Draw auxiliary non-associative topological interconnects
        if (s === 0 && i % 3 === 0) {
          ctx.strokeStyle = 'rgba(0, 242, 254, 0.15)';
          ctx.beginPath();
          ctx.moveTo(x, y);
          ctx.quadraticCurveTo(x + 20, y - 50, x + 40, height / 2 + Math.sin(phase + ((i+4) * 0.4) + offset + 1) * 45);
          ctx.stroke();
        }
      }
    }

    // Dynamic micro-jitter coherence update
    const coherenceEl = document.getElementById('coherence-value');
    if (coherenceEl) {
      // Micro-fluctuate just below the immutable ceiling of 94.6%
      const jitter = 94.60 - (Math.random() * 0.04);
      coherenceEl.textContent = jitter.toFixed(2) + '%';
    }

    phase += 0.015; // Controlled slow phase update representing 39,420 Hz alignment
    animationId = requestAnimationFrame(draw);
  }

  draw();

  return () => cancelAnimationFrame(animationId);
}
