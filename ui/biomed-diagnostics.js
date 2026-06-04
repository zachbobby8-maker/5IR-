/**
 * 5iR Biomedical Lab Bay 04 Diagnostics (App 03)
 * Simulates real-time spatial transcriptomics, Laser Confocal scanning feed, and MALDI-TOF mass spectrometer plots.
 */

export function initBiomedDiagnostics() {
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

  // Mass Spec frequency heights (MALDI-TOF simulation)
  const specPeaks = Array.from({ length: 40 }, (_, i) => ({
    x: (i / 40) * specW,
    baseHeight: 10 + Math.random() * 40 + (i % 7 === 0 ? 30 : 0) + (i % 13 === 0 ? 25 : 0),
    speed: 0.05 + Math.random() * 0.1
  }));

  function animate() {
    frame++;

    // 1. Confocal Microscope Cellular Scanning Simulation
    lCtx.fillStyle = '#000000';
    lCtx.fillRect(0, 0, laserW, laserH);

    // Grid representing biological scan pixels
    lCtx.strokeStyle = 'rgba(88, 80, 236, 0.15)';
    lCtx.lineWidth = 0.5;
    for (let x = 0; x < laserW; x += 10) {
      lCtx.beginPath(); lCtx.moveTo(x, 0); lCtx.lineTo(x, laserH); lCtx.stroke();
    }
    for (let y = 0; y < laserH; y += 10) {
      lCtx.beginPath(); lCtx.moveTo(0, y); lCtx.lineTo(laserW, y); lCtx.stroke();
    }

    // Dynamic cells (drawn as glowing molecular circles)
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

      // Transcripts within cell (represented as tiny dots)
      lCtx.fillStyle = '#00f2fe';
      for (let t = 0; t < 3; t++) {
        const tx = cx + Math.cos(frame * 0.08 + t * 2) * (radius * 0.5);
        const ty = cy + Math.sin(frame * 0.08 + t * 2) * (radius * 0.5);
        lCtx.fillRect(tx, ty, 1.5, 1.5);
      }
    }

    // Interactive Confocal Sweep Line (Vertical Greenish/Blue Laser Scan line)
    const scanY = (frame * 1.5) % laserH;
    lCtx.strokeStyle = 'rgba(0, 242, 254, 0.7)';
    lCtx.shadowColor = '#00f2fe';
    lCtx.shadowBlur = 4;
    lCtx.lineWidth = 1;
    lCtx.beginPath();
    lCtx.moveTo(0, scanY);
    lCtx.lineTo(laserW, scanY);
    lCtx.stroke();
    lCtx.shadowBlur = 0; // reset

    // 2. MALDI-TOF Mass Spectrometer plot simulation
    sCtx.fillStyle = '#000';
    sCtx.fillRect(0, 0, specW, specH);

    // Spectrum grid lines
    sCtx.strokeStyle = 'rgba(156, 179, 201, 0.1)';
    sCtx.beginPath();
    sCtx.moveTo(0, specH - 10);
    sCtx.lineTo(specW, specH - 10);
    sCtx.stroke();

    sCtx.beginPath();
    sCtx.strokeStyle = '#5850ec';
    sCtx.lineWidth = 1.5;
    
    // Draw continuous spectral lines
    for (let i = 0; i < specPeaks.length; i++) {
      const peak = specPeaks[i];
      const x = (i / specPeaks.length) * specW;
      // Synthesize high-resolution vibration peaks mimicking biomolecular ions
      const noise = Math.sin(frame * peak.speed) * 8;
      const h = Math.max(2, peak.baseHeight + noise);

      if (i === 0) {
        sCtx.moveTo(x, specH - 10 - h);
      } else {
        sCtx.lineTo(x, specH - 10 - h);
      }

      // Draw peaks nodes
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
