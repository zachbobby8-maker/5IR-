/**
 * 5iR Aero Flux Factory Manufacturing Pipeline (App 05)
 * Handles state updates, forging pipeline timelines, and molecular weaving logs.
 */

export function initFactoryPipeline() {
  const logContainer = document.getElementById('pipeline-log-terminal');
  const suiteProgress = document.getElementById('suite-weave-bar');
  const driveProgress = document.getElementById('drive-forge-bar');

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

  // Add initial logs
  for (let i = 0; i < 4; i++) {
    const p = document.createElement('div');
    p.textContent = `>> ${logs[i]}`;
    p.style.marginBottom = '4px';
    logContainer.appendChild(p);
  }

  // Rolling logs ticker
  setInterval(() => {
    const p = document.createElement('div');
    p.textContent = `>> ${logs[currentLogIdx]}`;
    p.style.marginBottom = '4px';
    logContainer.appendChild(p);

    currentLogIdx = (currentLogIdx + 1) % logs.length;

    // Prune old entries to keep memory low and frame rate optimal (dQ_leak = 0.00W)
    if (logContainer.children.length > 8) {
      logContainer.removeChild(logContainer.children[0]);
    }
    logContainer.scrollTop = logContainer.scrollHeight;
  }, 2200);

  let suitProgressPercent = 88.0;
  let driveProgressPercent = 100.0; // Complete manifold as specified: "Non-Associative Vortex Manifold Complete"

  // Tick Look 04 space suit weave bar closer to 94.6% target
  setInterval(() => {
    if (suiteProgress) {
      if (suitProgressPercent < 94.6) {
        suitProgressPercent += 0.05;
      } else {
        // Soft fluctuate around 94.6% to show stable phase-locked feedback loop
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
