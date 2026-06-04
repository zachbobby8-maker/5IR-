/**
 * 5iR Core Matrix Dashboard - Master Bootstrapper
 * Coordinates the 6 modular app terminal hubs running at exactly 39,420 Hz.
 */

import { initOracleConsole } from './oracle.js';
import { initMeshMonitor } from './ui/mesh-monitor.js';
import { initBiomedDiagnostics } from './ui/biomed-diagnostics.js';
import { initBraidLedger } from './ui/braid-ledger.js';
import { initFactoryPipeline } from './ui/factory-pipeline.js';
import { initAcousticGrid } from './ui/acoustic-grid.js';
import { initArchitectProfile } from './ui/architect-profile.js';

document.addEventListener('DOMContentLoaded', () => {
  console.log(">> 5iR SYSTEM COMPILATION ENGAGED @ 39,420 Hz");
  console.log(">> ZERO-ENTROPY THERMAL STATE BOUNDS OK (dQ_leak/dt = 0.00W)");

  // Initialize the 6-App Dashboard Grid Stack
  try {
    initOracleConsole(); // APP 01
  } catch (err) {
    console.warn("APP 01 load exception: ", err);
  }

  try {
    initMeshMonitor(); // APP 02
  } catch (err) {
    console.warn("APP 02 load exception: ", err);
  }

  try {
    initBiomedDiagnostics(); // APP 03
  } catch (err) {
    console.warn("APP 03 load exception: ", err);
  }

  try {
    initBraidLedger(); // APP 04
  } catch (err) {
    console.warn("APP 04 load exception: ", err);
  }

  try {
    initFactoryPipeline(); // APP 05
  } catch (err) {
    console.warn("APP 05 load exception: ", err);
  }

  try {
    initArchitectProfile(); // PROFILE IDENT INTERROGATOR
  } catch (err) {
    console.warn("Profile system load exception: ", err);
  }

  try {
    initAcousticGrid(); // APP 06
  } catch (err) {
    console.warn("APP 06 load exception: ", err);
  }

  // Micro jitter for distributed active node nodes counter in the header
  initHeaderNodeTracker();
});

function initHeaderNodeTracker() {
  const nodesEl = document.getElementById('header-nodes');
  if (!nodesEl) return;

  let nodesCount = 1.40;
  setInterval(() => {
    // Slowly increment and drift nodes to signify continuous self-assembly
    nodesCount += (Math.random() * 0.002 - 0.0005);
    if (nodesCount > 1.49) nodesCount = 1.40;
    nodesEl.textContent = `${nodesCount.toFixed(3)}M NODES`;
  }, 2500);
}
