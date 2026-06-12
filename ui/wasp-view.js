/**
 * APP_04: WASP — Waveform Anomaly & Security Probe
 * Defensive code scanner: detects insecure patterns in pasted source code.
 */

const t = (key, vals) => window.miniappI18n?.t(key, vals) ?? key;

// Known risk patterns to scan for
const WASP_RULES = [
  { id: 'W01', pattern: /\beval\s*\(/g,              label: 'EVAL_EXEC',         severity: 'CRITICAL',  desc: 'Dynamic code execution via eval()' },
  { id: 'W02', pattern: /innerHTML\s*=/g,            label: 'INNER_HTML_WRITE',  severity: 'HIGH',      desc: 'Direct innerHTML assignment — XSS vector' },
  { id: 'W03', pattern: /document\.write\s*\(/g,     label: 'DOC_WRITE',         severity: 'HIGH',      desc: 'document.write() injects raw HTML' },
  { id: 'W04', pattern: /password|secret|api[_-]?key|token/gi, label: 'HARDCODED_SECRET', severity: 'HIGH', desc: 'Possible hardcoded credential or key' },
  { id: 'W05', pattern: /new\s+Function\s*\(/g,      label: 'DYNAMIC_FUNCTION',  severity: 'CRITICAL',  desc: 'new Function() — equivalent to eval' },
  { id: 'W06', pattern: /setTimeout\s*\(\s*['"`]/g,  label: 'STRING_TIMEOUT',    severity: 'MEDIUM',    desc: 'setTimeout with string arg — eval risk' },
  { id: 'W07', pattern: /setInterval\s*\(\s*['"`]/g, label: 'STRING_INTERVAL',   severity: 'MEDIUM',    desc: 'setInterval with string arg — eval risk' },
  { id: 'W08', pattern: /Math\.random\s*\(\s*\)/g,   label: 'WEAK_RANDOM',       severity: 'LOW',       desc: 'Math.random() — not cryptographically safe' },
  { id: 'W09', pattern: /console\.(log|warn|error)\s*\(/g, label: 'DEBUG_LEAK',  severity: 'LOW',       desc: 'Console output left in production code' },
  { id: 'W10', pattern: /http:\/\//g,                label: 'INSECURE_HTTP',     severity: 'MEDIUM',    desc: 'Plain HTTP URL — use HTTPS' },
  { id: 'W11', pattern: /\.exec\s*\(/g,              label: 'SHELL_EXEC_SIGNAL', severity: 'MEDIUM',    desc: '.exec() call detected — verify context' },
  { id: 'W12', pattern: /dangerouslySetInnerHTML/g,  label: 'REACT_XSS_PROP',    severity: 'HIGH',      desc: 'React dangerouslySetInnerHTML — XSS risk' },
];

const SEV_ORDER = { CRITICAL: 0, HIGH: 1, MEDIUM: 2, LOW: 3 };

/**
 * Run WASP scan on source code string.
 * @param {string} code
 * @returns {{ hits: Array, threatScore: number, verdict: string }}
 */
export function runWaspScan(code) {
  if (!code || !code.trim()) return { hits: [], threatScore: 0, verdict: 'CLEAN' };

  const hits = [];
  for (const rule of WASP_RULES) {
    const matches = code.match(rule.pattern);
    if (matches) {
      hits.push({ ...rule, count: matches.length });
    }
  }

  hits.sort((a, b) => SEV_ORDER[a.severity] - SEV_ORDER[b.severity]);

  const score = hits.reduce((acc, h) => {
    const weight = { CRITICAL: 40, HIGH: 20, MEDIUM: 10, LOW: 3 }[h.severity] || 0;
    return acc + weight * h.count;
  }, 0);

  const capped = Math.min(score, 100);
  const verdict = capped >= 60 ? 'COMPROMISED' : capped >= 20 ? 'FLAGGED' : capped > 0 ? 'CAUTION' : 'CLEAN';

  return { hits, threatScore: capped, verdict };
}

// ── DOM rendering ─────────────────────────────────────────────────────────────
export function initWaspView({ onScan }) {
  const panel = document.getElementById('tab-WASP');
  if (!panel) return;

  panel.innerHTML = `
    <h3 class="app-title">[ APP_04 // WASP_SECURITY_PROBE ]</h3>
    <div class="two-col wasp-col">
      <div class="col-input">
        <label class="field-micro" for="wasp-code">PASTE_SOURCE_FOR_SCAN</label>
        <textarea id="wasp-code"
          placeholder="// Paste source code to run WASP defensive pattern scan..."
          aria-label="Source code to scan"></textarea>
        <button id="btn-wasp" class="btn-exec">RUN_WASP_SCAN</button>
      </div>

      <div class="signal-box" id="wasp-signals">
        <div class="signal-head dashed">THREAT_PROBE_SIGNALS</div>
        <div id="wasp-idle" class="signal-idle">// Awaiting code stream for threat analysis...</div>
        <div id="wasp-data" style="display:none">
          <div class="signal-row"><span class="sk">THREAT_SCORE</span>    <span class="sv" id="w-score">0</span></div>
          <div class="signal-row"><span class="sk">VERDICT</span>         <span class="sv" id="w-verdict">CLEAN</span></div>
          <div class="signal-row"><span class="sk">FLAGS_DETECTED</span>  <span class="sv" id="w-flags">0</span></div>
          <div class="signal-row"><span class="sk">CRITICAL_HITS</span>   <span class="sv" id="w-critical">0</span></div>
          <div class="signal-row"><span class="sk">HIGH_HITS</span>       <span class="sv" id="w-high">0</span></div>
          <div class="signal-row"><span class="sk">MEDIUM_HITS</span>     <span class="sv" id="w-medium">0</span></div>
          <div class="signal-row"><span class="sk">LOW_HITS</span>        <span class="sv" id="w-low">0</span></div>
        </div>
      </div>
    </div>

    <div id="wasp-hit-list" class="wasp-hit-list" style="display:none"></div>
    <div id="wasp-log" class="app-log" style="display:none"></div>
  `;

  const codeEl    = panel.querySelector('#wasp-code');
  const btnWasp   = panel.querySelector('#btn-wasp');
  const waspIdle  = panel.querySelector('#wasp-idle');
  const waspData  = panel.querySelector('#wasp-data');
  const wScore    = panel.querySelector('#w-score');
  const wVerdict  = panel.querySelector('#w-verdict');
  const wFlags    = panel.querySelector('#w-flags');
  const wCritical = panel.querySelector('#w-critical');
  const wHigh     = panel.querySelector('#w-high');
  const wMedium   = panel.querySelector('#w-medium');
  const wLow      = panel.querySelector('#w-low');
  const hitList   = panel.querySelector('#wasp-hit-list');
  const waspLog   = panel.querySelector('#wasp-log');

  btnWasp.addEventListener('click', () => {
    const code = codeEl.value;
    if (!code.trim()) {
      waspLog.textContent = '[ ERR ]: EMPTY_INPUT_VECTOR — paste source code to scan.';
      waspLog.className   = 'app-log fail';
      waspLog.style.display = 'block';
      return;
    }

    const { hits, threatScore, verdict } = runWaspScan(code);

    waspIdle.style.display = 'none';
    waspData.style.display = 'block';

    wScore.textContent   = `${threatScore}/100`;
    wVerdict.textContent = verdict;
    wFlags.textContent   = `${hits.length} PATTERNS`;
    wCritical.textContent = hits.filter(h => h.severity === 'CRITICAL').length;
    wHigh.textContent     = hits.filter(h => h.severity === 'HIGH').length;
    wMedium.textContent   = hits.filter(h => h.severity === 'MEDIUM').length;
    wLow.textContent      = hits.filter(h => h.severity === 'LOW').length;

    // Style verdict
    wVerdict.className = `sv wasp-verdict-${verdict.toLowerCase()}`;

    if (hits.length === 0) {
      hitList.style.display = 'none';
      waspLog.textContent   = '[ CLEAN ]: No threat patterns detected. Code stream nominal.';
      waspLog.className     = 'app-log pass';
      waspLog.style.display = 'block';
    } else {
      hitList.innerHTML = hits.map(h => `
        <div class="wasp-hit sev-${h.severity.toLowerCase()}">
          <span class="wasp-hit-id">${h.id}</span>
          <span class="wasp-hit-sev">[${h.severity}]</span>
          <span class="wasp-hit-label">${h.label}</span>
          <span class="wasp-hit-count">×${h.count}</span>
          <span class="wasp-hit-desc">${h.desc}</span>
        </div>
      `).join('');
      hitList.style.display = 'block';
      waspLog.textContent   = `[ ${verdict} ]: ${hits.length} threat pattern(s) detected. Score: ${threatScore}/100.`;
      waspLog.className     = verdict === 'COMPROMISED' ? 'app-log fail' : 'app-log warn';
      waspLog.style.display = 'block';
    }

    if (onScan) onScan({ verdict, threatScore, hits });
  });
}
