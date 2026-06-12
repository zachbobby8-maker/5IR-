/**
 * 5iR Sinter OS V2 — Bootstrap Entry
 * Maps to: portal-dev/SinterOS_v2_Interface.jsx + SecureLoginPortal.jsx
 * Config: config/sinterClusterConfig.json
 */
import {
  executeVortexDefensiveScan,
  validateMath,
  LEGENDRIAN_TASKS,
  computeLiveLatticeTelemetry
} from './sinterCore.js';

import { runAiVortexAnalysis }  from './ai/vortex-ai.js';
import { initWaspView }         from './ui/wasp-view.js';
import { initLoomView, refreshLoomView } from './ui/loom-view.js';
import {
  loadBlockHistory,
  saveBlockRecord,
  renderLatticeHistory
} from './ui/lattice-history-view.js';

const t = (key, vals) => window.miniappI18n?.t(key, vals) ?? key;

// ── Theme toggle (dark / light) ────────────────────────────────────────────
function applyTheme(dark) {
  document.body.classList.toggle('dark', dark);
  const label = dark ? '[ ● DARK ]' : '[ ○ LIGHT ]';
  document.querySelectorAll('.btn-theme').forEach(b => b.textContent = label);
}

function toggleTheme() {
  const isDark = document.body.classList.toggle('dark');
  applyTheme(isDark);
  try { miniappsAI.storage.setItem('sinter_theme', isDark ? 'dark' : 'light', { area: 'persistent' }); } catch {}
}

document.querySelectorAll('.btn-theme').forEach(b =>
  b.addEventListener('click', toggleTheme)
);

// Load saved theme preference
(async () => {
  try {
    const saved = await miniappsAI.storage.getItem('sinter_theme');
    if (saved === 'dark') applyTheme(true);
  } catch {}
})();

// ── DOM refs ───────────────────────────────────────────────────────────────
const gate         = document.getElementById('gate');
const os           = document.getElementById('os');
const inputHandle  = document.getElementById('input-handle');
const inputKey     = document.getElementById('input-key');
const gateMsg      = document.getElementById('gate-msg');
const btnDemo      = document.getElementById('btn-demo');
const btnHandshake = document.getElementById('btn-handshake');
const hudSub       = document.getElementById('hud-sub');

// Tabs
const tabBtns   = document.querySelectorAll('.tab-btn');
const tabPanels = document.querySelectorAll('.app-panel');

// App 01 — Vortex + WASP
const vortexCode    = document.getElementById('vortex-code');
const waspCheck     = document.getElementById('wasp-check');
const btnVortex     = document.getElementById('btn-vortex');
const btnVortexAi   = document.getElementById('btn-vortex-ai');
const vortexIdle    = document.getElementById('vortex-idle');
const vortexData    = document.getElementById('vortex-data');
const vBlockId      = document.getElementById('v-blockid');
const vRatio        = document.getElementById('v-ratio');
const vComplexity   = document.getElementById('v-complexity');
const vWasp         = document.getElementById('v-wasp');
const vThreat       = document.getElementById('v-threat');
const vIntegrity    = document.getElementById('v-integrity');
const vortexOutWrap = document.getElementById('vortex-out-wrap');
const vortexOutput  = document.getElementById('vortex-output');
const aiOutWrap     = document.getElementById('ai-out-wrap');
const aiOutput      = document.getElementById('ai-output');
const vortexLog     = document.getElementById('vortex-log');

// App 02 — Legendrian Math
const mathTask    = document.getElementById('math-task');
const mathVal     = document.getElementById('math-val');
const formulaHint = document.getElementById('formula-hint');
const btnMath     = document.getElementById('btn-math');
const mathIdle    = document.getElementById('math-idle');
const mathData    = document.getElementById('math-data');
const mStatus     = document.getElementById('m-status');
const mResonance  = document.getElementById('m-resonance');
const mDrift      = document.getElementById('m-drift');
const mTarget     = document.getElementById('m-target');
const mathLog     = document.getElementById('math-log');

// App 03 — Lattice
const lNodes    = document.getElementById('l-nodes');
const lCoherence= document.getElementById('l-coherence');
const lState    = document.getElementById('l-state');
const lThermal  = document.getElementById('l-thermal');
const lAudits   = document.getElementById('l-audits');
const lBlocks   = document.getElementById('l-blocks');
const latticeHistoryContainer = document.getElementById('lattice-history-container');

// ── State ──────────────────────────────────────────────────────────────────
let storedBlocks = 0;
let totalAudits  = 0;

// ── Lattice refresh ────────────────────────────────────────────────────────
function refreshLattice() {
  const tel = computeLiveLatticeTelemetry(storedBlocks, totalAudits);
  lNodes.textContent    = tel.nodesActive;
  lCoherence.textContent= tel.coherenceIndex;
  lState.textContent    = tel.systemState;
  lThermal.textContent  = tel.thermalMetric;
  lAudits.textContent   = `${totalAudits} SCANS`;
  lBlocks.textContent   = `${storedBlocks} RECS`;
}

// ── Lattice history render ─────────────────────────────────────────────────
async function refreshHistory() {
  const history = await loadBlockHistory();
  storedBlocks  = history.length;
  renderLatticeHistory(history, latticeHistoryContainer, async () => {
    storedBlocks = 0;
    totalAudits  = 0;
    refreshLattice();
    await refreshHistory();
  });
  refreshLattice();
}

// ── Build formula select ───────────────────────────────────────────────────
function buildFormulaSelect() {
  mathTask.innerHTML = LEGENDRIAN_TASKS.map(f =>
    `<option value="${f.id}">${f.title}</option>`
  ).join('');
  updateFormulaHint();
}

function updateFormulaHint() {
  const task = LEGENDRIAN_TASKS.find(t => t.id === mathTask.value);
  if (task && formulaHint) {
    formulaHint.textContent = `TARGET: ${task.target} // DRIFT_TOLERANCE: ${task.drift}`;
  }
}

// ── Auth validator ─────────────────────────────────────────────────────────
function validateBraidKey(handle, key) {
  const h = handle.trim().toUpperCase();
  const k = key.toUpperCase();
  // Neural signature must contain MOBIUS
  // Braid key must contain both 1319 and BRAID
  return h.includes('MOBIUS') && k.includes('1319') && k.includes('BRAID');
}

// ── Demo fill ──────────────────────────────────────────────────────────────
btnDemo.addEventListener('click', () => {
  inputHandle.value   = 'MOBIUS';
  inputKey.value      = '1319_BRAID';
  gateMsg.className   = 'gate-msg info';
  gateMsg.textContent = t('gate_demo_loaded');
});

// ── Gate handshake ─────────────────────────────────────────────────────────
btnHandshake.addEventListener('click', async () => {
  const handle = inputHandle.value.trim();
  const key    = inputKey.value.trim();

  if (!handle) {
    gateMsg.className   = 'gate-msg denied';
    gateMsg.textContent = t('gate_no_handle');
    return;
  }
  if (!key) {
    gateMsg.className   = 'gate-msg denied';
    gateMsg.textContent = t('gate_no_key');
    return;
  }

  // Animate scanning before auth
  const scanBar = document.getElementById('gate-scan-bar');
  if (scanBar) scanBar.classList.add('scanning');
  btnHandshake.disabled    = true;
  btnHandshake.textContent = 'VERIFYING_BRAID_SEQUENCE...';

  await new Promise(r => setTimeout(r, 900));

  if (scanBar) scanBar.classList.remove('scanning');

  if (validateBraidKey(handle, key)) {
    hudSub.textContent = `OPERATOR_NODE: @${handle.toUpperCase()} // BRAID_LOCK: ACTIVE`;
    gate.style.display = 'none';
    os.style.display   = 'block';
    buildFormulaSelect();
    await refreshHistory();
    initWaspView({ onScan: ({ verdict, threatScore }) => {
      totalAudits++;
      refreshLattice();
    }});
    await initLoomView();
  } else {
    btnHandshake.disabled    = false;
    btnHandshake.textContent = 'INITIATE_CRYPTOGRAPHIC_HANDSHAKE';
    gateMsg.className   = 'gate-msg denied';
    gateMsg.textContent = t('gate_denied');
  }
});

[inputHandle, inputKey].forEach(el =>
  el.addEventListener('keydown', e => { if (e.key === 'Enter') btnHandshake.click(); })
);

// ── Tab switching ──────────────────────────────────────────────────────────
tabBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const target = btn.dataset.tab;
    tabBtns.forEach(b => {
      b.classList.toggle('active', b === btn);
      b.setAttribute('aria-selected', b === btn ? 'true' : 'false');
    });
    tabPanels.forEach(panel => {
      panel.style.display = panel.id === `tab-${target}` ? '' : 'none';
    });
    if (target === 'LATTICE_MONITOR') {
      refreshHistory();
    }
    if (target === 'LOOM') {
      refreshLoomView();
    }
  });
});

// ── App 01: Vortex Defensive Scan ─────────────────────────────────────────
btnVortex.addEventListener('click', async () => {
  const code    = vortexCode.value;
  const useWasp = waspCheck.checked;

  if (!code.trim()) {
    vortexOutWrap.style.display = 'none';
    vortexLog.textContent       = t('app1_err');
    vortexLog.className         = 'app-log fail';
    vortexLog.style.display     = 'block';
    return;
  }

  const r = executeVortexDefensiveScan(code, useWasp);

  if (r.error) {
    vortexLog.textContent       = `[ ERR ]: ${r.error}`;
    vortexLog.className         = 'app-log fail';
    vortexLog.style.display     = 'block';
    vortexOutWrap.style.display = 'none';
    vortexIdle.style.display    = 'block';
    vortexData.style.display    = 'none';
    return;
  }

  // Show signal data
  vortexIdle.style.display = 'none';
  vortexData.style.display = 'block';

  vBlockId.textContent    = r.blockId;
  vRatio.textContent      = r.ratio;
  vComplexity.textContent = r.complexityClass;
  vWasp.textContent       = r.waspSignal;
  vThreat.textContent     = r.threatScore;
  vIntegrity.textContent  = r.integrity.toFixed(3);

  // Sintered output
  vortexOutput.textContent    = r.sinteredCode;
  vortexOutWrap.style.display = 'block';
  vortexLog.style.display     = 'none';

  if (useWasp) totalAudits++;
  refreshLattice();

  // Persist block to lattice storage
  await saveBlockRecord({
    blockId:         r.blockId,
    ratio:           r.ratio,
    complexityClass: r.complexityClass,
    waspSignal:      r.waspSignal,
    threatScore:     r.threatScore,
    timestamp:       Date.now()
  });
  storedBlocks++;
  refreshLattice();
});

// ── App 01: AI Analysis ────────────────────────────────────────────────────
btnVortexAi.addEventListener('click', async () => {
  const code = vortexCode.value;
  if (!code.trim()) {
    aiOutWrap.style.display = 'none';
    vortexLog.textContent   = t('app1_err');
    vortexLog.className     = 'app-log fail';
    vortexLog.style.display = 'block';
    return;
  }

  aiOutput.textContent    = '// GEMINI_ANALYSIS_RUNNING... ✦';
  aiOutWrap.style.display = 'block';
  btnVortexAi.disabled    = true;
  btnVortexAi.textContent = 'ANALYZING... ✦';

  const { report, error } = await runAiVortexAnalysis(code);

  btnVortexAi.disabled    = false;
  btnVortexAi.textContent = 'RUN_AI_ANALYSIS ✦';

  if (error) {
    aiOutput.textContent = `[ AI_ERR ]: ${error}`;
  } else {
    aiOutput.textContent = report;
  }
});

// ── App 02: Legendrian Math Validator ─────────────────────────────────────
btnMath.addEventListener('click', () => {
  const result = validateMath(mathTask.value, mathVal.value);
  const task   = LEGENDRIAN_TASKS.find(t => t.id === mathTask.value);

  mathIdle.style.display = 'none';
  mathData.style.display = 'block';

  mStatus.textContent   = result.status;
  mResonance.textContent= result.resonance;
  mDrift.textContent    = result.drift;
  mTarget.textContent   = task ? task.target : '---';

  if (result.success) {
    mathLog.textContent = t('app2_pass', { status: result.status, resonance: result.resonance });
    mathLog.className   = 'app-log pass';
  } else {
    mathLog.textContent = t('app2_fail', { status: result.status, resonance: result.resonance });
    mathLog.className   = 'app-log fail';
  }
  mathLog.style.display = 'block';
});

// Update hint + reset signals when formula changes
mathTask.addEventListener('change', () => {
  updateFormulaHint();
  mathIdle.style.display = 'block';
  mathData.style.display = 'none';
  mathLog.style.display  = 'none';
  mathVal.value          = '';
});
