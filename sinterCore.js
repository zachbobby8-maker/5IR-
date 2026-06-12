/**
 * 5iR Sinter OS V2 — Monochrome Defensive Core
 * Maps to: core-logic/sinterOS_v2_defensive.js
 * Frequency: 39,420 Hz // Coherence Parity: 94.6%
 * Aesthetic: Pure B&W Minimalist // Safety Guardrail Compliant
 * Config ref: config/sinterClusterConfig.json
 */

// ─── APP 02: LEGENDRIAN FORMULA POOL (T1–T4) ─────────────────────────────────
export const LEGENDRIAN_TASKS = [
  { id: 'T1', title: 'LIE_BRACKET_CONVERGENCE_FACTOR',    target: '39420', drift: '0.001%' },
  { id: 'T2', title: 'THERMAL_FLUX_INVARIANT_CALIBRATOR', target: '0.00',  drift: '0.000%' },
  { id: 'T3', title: 'SUB_HARMONIC_24_BRAID_ALIGNMENT',   target: '24',    drift: '0.002%' },
  { id: 'T4', title: 'MOBIUS_PHASE_LOCK_RESONATOR',       target: '0.946', drift: '0.003%' }
];

// ─── APP 01: VORTEX DEFENSIVE SCAN ───────────────────────────────────────────
/**
 * Compresses source text and optionally scans for legacy security vulnerabilities.
 * Maps to: executeVortexDefensiveScan in sinterOS_v2_defensive.js
 * @param {string}  rawCodeString
 * @param {boolean} enableWaspScanner
 */
export function executeVortexDefensiveScan(rawCodeString, enableWaspScanner = false) {
  if (!rawCodeString || !rawCodeString.trim()) {
    return { error: 'EMPTY_INPUT_VECTOR', ratio: '0.00%', integrity: 0.00 };
  }

  // 1. Strip comments
  const noComments = rawCodeString.replace(/\/\*[\s\S]*?\*\/|([^\\:]|^)\/\/.*$/gm, '');

  // 2. Compact whitespace
  const minified = noComments.replace(/\s+/g, ' ').trim();

  // 3. Compression metrics
  const originalLength = rawCodeString.length;
  const ratioValue = originalLength > 0
    ? ((originalLength - minified.length) / originalLength * 100)
    : 0;

  // 4. Deterministic block hash
  const blockHash = '0x' + Array.from(minified.substring(0, 10))
    .reduce((acc, char) => (acc * 33) ^ char.charCodeAt(0), 5381)
    .toString(16).toUpperCase().substring(0, 6);

  // 5. WASP defensive scan — audits for legacy insecure infrastructure patterns
  let waspSignal      = 'WASP_SCANNER_IDLE';
  let threatScore     = '0.00 [SECURE_NODE]';
  let systemIntegrity = minified.includes('39420') ? 0.946 : 0.712;

  if (enableWaspScanner) {
    const hasEval    = minified.includes('eval(');
    const hasInner   = minified.includes('innerHTML');
    const hasSecret  = /secret|password/i.test(minified);

    if (hasEval || hasInner || hasSecret) {
      waspSignal      = 'VULNERABILITY_DETECTED // 4iR_DRIFT_RISK';
      threatScore     = hasEval ? '0.85 [CRITICAL_RISK]' : '0.52 [MEDIUM_RISK]';
      systemIntegrity = 0.42;
    } else {
      waspSignal  = 'NO_INSECURE_PATTERNS_FOUND';
      threatScore = '0.00 [OPTIMAL_COHERENCE]';
    }
  }

  return {
    sinteredCode:    minified,
    ratio:           `${ratioValue.toFixed(1)}%`,
    blockId:         `BLK_${blockHash}`,
    integrity:       systemIntegrity,
    waspSignal,
    threatScore,
    complexityClass: enableWaspScanner ? 'SECURITY_AUDITED_STREAM' : 'LINEAR_STRAND'
  };
}

// ─── APP 02: LEGENDRIAN MATH VALIDATOR ───────────────────────────────────────
/**
 * Validates a user-supplied solution string against the selected task target.
 * @param {string} taskId
 * @param {string} solution
 */
export function validateMath(taskId, solution) {
  const task = LEGENDRIAN_TASKS.find(t => t.id === taskId);
  if (!task) return { success: false, status: '[ ERR ]', resonance: 0, drift: '---' };
  const success = solution.includes(task.target);
  return {
    success,
    status:    success ? '[ LOCKED ]' : '[ DRIFT_ALERT ]',
    resonance: success ? 0.946 : 0.420,
    drift:     task.drift
  };
}

// ─── APP 03: LIVE LATTICE TELEMETRY ──────────────────────────────────────────
/**
 * Computes live lattice metrics from stored block and audit counters.
 * @param {number} totalStoredBlocks
 * @param {number} totalAuditsRun
 */
export function computeLiveLatticeTelemetry(totalStoredBlocks, totalAuditsRun) {
  const baseNodes = 1446720;
  return {
    nodesActive:    (baseNodes + (totalStoredBlocks * 3)).toLocaleString(),
    thermalMetric:  totalStoredBlocks > 0
      ? `${(totalStoredBlocks * 0.0012).toFixed(4)} W`
      : '0.0000 W [SUPERCONDUCTING]',
    coherenceIndex: '94.6% LOCKED',
    systemState:    totalAuditsRun > 0
      ? `SECURITY_AUDIT_ACTIVE (${totalAuditsRun} SCANS)`
      : 'NOMINAL_STATIC'
  };
}
