import { bootRudeUserNode, matrixUserRegistry } from '../backend/matrixRegistryEngine.js';

function el(tag, attrs = {}, children = []) {
  const node = document.createElement(tag);
  for (const [k, v] of Object.entries(attrs)) {
    if (k === 'class') node.className = v;
    else if (k === 'text') node.textContent = v;
    else if (k === 'html') node.innerHTML = v;
    else if (k === 'style') node.style.cssText = v;
    else if (k.startsWith('on') && typeof v === 'function') node.addEventListener(k.slice(2).toLowerCase(), v);
    else if (v !== undefined && v !== null) node.setAttribute(k, String(v));
  }
  for (const c of children) node.append(c);
  return node;
}

async function callGemini(prompt) {
  const system = [
    'You are 5iR Flux Terminal AI.',
    'Be concise, operational, and monochrome terminal-style.',
    'Output plain text only. No markdown.'
  ].join('\n');

  const r = await fetch('/api/gemini', {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ prompt, system, temperature: 0.2, maxOutputTokens: 700 })
  });

  if (!r.ok) {
    const detail = await r.text().catch(() => '');
    throw new Error(`GEMINI_HTTP_${r.status}${detail ? `: ${detail.slice(0, 160)}` : ''}`);
  }
  const data = await r.json();
  return String(data?.text ?? '').trim();
}

export function createAdminFluxTerminal({ currentUser }) {
  const root = el('div');

  root.append(
    el('h3', { style: 'margin:0 0 15px;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.04em;color:#000;', text: '[ SYS_01 // EXCLUSIVE_FLUX_MONITOR_&_BOOT_TERMINAL ]' })
  );

  const left = el('div', { class: 'box' }, [
    el('div', { class: 'box-head', text: 'SYSTEM_WIDE_FLUX_METRICS' }),
    el('div', { html: `LATTICE_COHERENCE: <b>94.6% LOCKED</b>` }),
    el('div', { html: `THERMAL_OVERHEAD: <span style="color:var(--gray)">dQ_leak/dt = 0.00W Flat</span>` }),
    el('div', { text: 'NETWORK_SYNC_RATE: 39,420 Hz Invariant' }),
    el('div', { style: 'margin-top:6px;font-size:9px;color:var(--gray);', text: '// Visible only to role=ARCHITECT.' })
  ]);

  const registryBox = el('div', { class: 'box' });
  const registryList = el('div', { style: 'display:flex;flex-direction:column;gap:6px;' });

  function renderRegistry() {
    registryList.innerHTML = '';
    const users = Array.from(matrixUserRegistry.values());
    if (!users.length) {
      registryList.append(el('div', { class: 'console', text: '// Registry empty.' }));
      return;
    }

    for (const u of users) {
      registryList.append(
        el('div', {
          style: 'border:var(--border);padding:8px;font-size:11px;display:flex;justify-content:space-between;gap:10px;align-items:baseline;'
        }, [
          el('div', { html: `@<b>${u.handle}</b> <span style="color:var(--gray)">[${u.role}]</span>` }),
          el('div', { style: 'color:var(--gray);font-size:9px;', text: `CLEAR_INDEX: ${(u.clearIndex ?? 0).toFixed ? u.clearIndex.toFixed(3) : u.clearIndex}` })
        ])
      );
    }
  }

  registryBox.append(
    el('div', { class: 'box-head', text: 'MATRIX_USER_REGISTRY' }),
    registryList
  );

  const bootBox = el('div', { class: 'box' });
  const bootInput = el('input', { type: 'text', placeholder: 'INPUT_TARGET_USER_HANDLE', autocomplete: 'off', 'aria-label': 'Target handle' });
  const bootBtn = el('button', { class: 'btn-primary', type: 'button', text: 'EXECUTE_NODE_BOOT_PURGE' });
  const bootLog = el('div', { class: 'console', text: '[SYS_MONITOR]: Flux control interface running clean mode loops.' });

  bootBtn.addEventListener('click', () => {
    const target = bootInput.value.trim();
    if (!target) {
      bootLog.textContent = '[BOOT_FAILURE]: TARGET_HANDLE_REQUIRED';
      return;
    }

    const action = bootRudeUserNode(currentUser.handle, target);
    if (action.error) {
      bootLog.textContent = `[BOOT_FAILURE]: ${action.error}`;
    } else {
      bootLog.textContent = `[BOOT_SUCCESS]: ${action.message}`;
      bootInput.value = '';
      renderRegistry();
    }
  });

  bootBox.append(
    el('div', { class: 'box-head', text: 'NODE_EVICTION_MANAGER' }),
    bootInput,
    bootBtn,
    bootLog
  );

  const aiBox = el('div', { class: 'box' });
  const aiInput = el('textarea', { placeholder: 'PASTE_DIRECTIVE_OR_CODE_FOR_AI_ANALYSIS...', 'aria-label': 'AI prompt', maxlength: '8000' });
  const aiBtn = el('button', { class: 'btn-ghost', type: 'button', text: 'RUN_GEMINI_ANALYSIS ✦' });
  const aiOut = el('pre', { style: 'white-space:pre-wrap;margin:0;border:var(--border);padding:10px;background:var(--lgray);font-size:10px;color:var(--black);line-height:1.5;max-height:220px;overflow:auto;' });
  const aiNote = el('div', { class: 'console', text: 'AI uses /api/gemini (Vercel env: GEMINI_API_KEY). If missing, requests will fail.' });

  aiBtn.addEventListener('click', async () => {
    const p = aiInput.value.trim();
    if (!p) {
      aiOut.textContent = '[ AI_ERR ]: EMPTY_PROMPT';
      return;
    }

    aiBtn.disabled = true;
    aiBtn.textContent = 'ANALYZING... ✦';
    aiOut.textContent = '// GEMINI_ANALYSIS_RUNNING...';

    try {
      const report = await callGemini(p);
      aiOut.textContent = report || '[ AI_EMPTY ]: No output returned.';
    } catch (err) {
      aiOut.textContent = `[ AI_ERR ]: ${(err && err.message) ? err.message : String(err)}`;
    } finally {
      aiBtn.disabled = false;
      aiBtn.textContent = 'RUN_GEMINI_ANALYSIS ✦';
    }
  });

  aiBox.append(
    el('div', { class: 'box-head', text: 'GEMINI_OPERATOR_CHANNEL' }),
    aiInput,
    aiBtn,
    aiOut,
    aiNote
  );

  root.append(el('div', { class: 'grid2' }, [left, bootBox]));
  root.append(el('div', { class: 'grid2', style: 'margin-top:20px;' }, [registryBox, aiBox]));

  renderRegistry();
  return root;
}
