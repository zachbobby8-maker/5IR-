/**
 * APP_05: THE MATRIX-THREAD LOOM
 * High-speed multi-layer instant communications interface.
 * Converted from NodeLoomChat React component to vanilla JS.
 */

const t = (key, vals) => window.miniappI18n?.t(key, vals) ?? key;

const LOOM_STORAGE_KEY = 'loom_comms_history';
const MAX_MESSAGES     = 200;

// Seed messages matching the original React component
const SEED_MESSAGES = [
  {
    id: 1,
    type: 'PUBLIC_FEED',
    sender: 'MÖBIUS_BRAID',
    content: 'V2 monochrome architecture deployment successfully finalized. Systems holding flat at 94.6%.',
    timestamp: '04:55'
  },
  {
    id: 2,
    type: 'PRIVATE',
    sender: 'KING_DROID',
    content: 'WASP Security Probe is successfully capturing low-integrity 4iR drift vectors inside Hangar 04.',
    timestamp: '04:58'
  }
];

let commsHistory  = [];
let channelMode   = 'PRIVATE'; // PRIVATE | PUBLIC_FEED | SYNDICATES
let loomInitDone  = false;

// ── Persistence ────────────────────────────────────────────────────────────────
async function loadHistory() {
  try {
    const raw = await miniappsAI.storage.getItem(LOOM_STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      return Array.isArray(parsed) && parsed.length > 0 ? parsed : SEED_MESSAGES.slice();
    }
  } catch {}
  return SEED_MESSAGES.slice();
}

async function saveHistory(history) {
  try {
    await miniappsAI.storage.setItem(
      LOOM_STORAGE_KEY,
      JSON.stringify(history.slice(0, MAX_MESSAGES))
    );
  } catch {}
}

// ── Helpers ────────────────────────────────────────────────────────────────────
function nowTimestamp() {
  return new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false });
}

function escapeHtml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

// ── Rendering ──────────────────────────────────────────────────────────────────
function renderChannelButtons(panel) {
  ['PRIVATE', 'PUBLIC_FEED', 'SYNDICATES'].forEach(ch => {
    const btn = panel.querySelector(`[data-loom-channel="${ch}"]`);
    if (!btn) return;
    const active = ch === channelMode;
    btn.style.background = active ? 'var(--black)' : 'var(--white)';
    btn.style.color      = active ? 'var(--white)' : 'var(--black)';
  });
}

function renderFeed(panel) {
  const feed     = panel.querySelector('#loom-feed');
  const filtered = commsHistory.filter(m => m.type === channelMode);

  if (filtered.length === 0) {
    feed.innerHTML = `<div class="loom-empty">// No active data strands running inside this matrix tier channel...</div>`;
    return;
  }

  feed.innerHTML = filtered.map(msg => `
    <div class="loom-msg">
      <div class="loom-msg-header">
        <span class="loom-sender">@${escapeHtml(msg.sender)}</span>
        <span class="loom-ts">${escapeHtml(msg.timestamp)}</span>
      </div>
      <div class="loom-content">${escapeHtml(msg.content)}</div>
    </div>
  `).join('');

  // Scroll to top (newest messages prepended)
  feed.scrollTop = 0;
}

function renderTelemetry(panel) {
  const filtered = commsHistory.filter(m => m.type === channelMode);
  const el = panel.querySelector('#loom-traffic');
  if (el) el.textContent = `${filtered.length} ACTIVE_STRANDS`;
}

function renderAll(panel) {
  renderChannelButtons(panel);
  renderFeed(panel);
  renderTelemetry(panel);
}

// ── Init ───────────────────────────────────────────────────────────────────────
export async function initLoomView() {
  const panel = document.getElementById('tab-LOOM');
  if (!panel) return;

  panel.innerHTML = `
    <h3 class="app-title">[ APP_05 // THE_MATRIX-THREAD_LOOM ]</h3>

    <div class="loom-subhead">HIGH-SPEED MULTI-LAYER INSTANT COMMUNICATIONS INTERFACE</div>

    <div class="loom-isolation-badge">CHANNEL_ISOLATION: ON</div>

    <div class="loom-grid">

      <!-- LEFT: channel toggles + telemetry -->
      <div class="loom-sidebar">
        <div class="field-micro" style="margin-bottom:8px;">// MATRIX_ROUTING_TIERS</div>

        <button class="loom-tier-btn" data-loom-channel="PRIVATE"     type="button">⌬ PRIVATE NODES (TELEGRAM)</button>
        <button class="loom-tier-btn" data-loom-channel="PUBLIC_FEED" type="button">⌬ BROADCAST STRANDS (X_FEED)</button>
        <button class="loom-tier-btn" data-loom-channel="SYNDICATES"  type="button">⌬ SYNDICATE GROUPS (FB)</button>

        <div class="loom-telemetry">
          <div class="signal-head dashed">LOOM_SIGNALS</div>
          <div class="signal-row"><span class="sk">COMMS_CLOCK</span>   <span class="sv">39,420 Hz</span></div>
          <div class="signal-row"><span class="sk">LATENCY_CAP</span>   <span class="sv">0.0002 ms</span></div>
          <div class="signal-row"><span class="sk">TRAFFIC_LOAD</span>  <span class="sv" id="loom-traffic">0 ACTIVE_STRANDS</span></div>
        </div>
      </div>

      <!-- RIGHT: feed + input -->
      <div class="loom-main">

        <div id="loom-feed" class="loom-feed"></div>

        <form id="loom-form" class="loom-form" autocomplete="off">
          <input
            id="loom-input"
            type="text"
            class="loom-input"
            placeholder="Transmit encrypted packet to active channel..."
            aria-label="Message input"
            maxlength="500"
          />
          <button type="submit" class="btn-exec loom-send">[LOOM_PULSE]</button>
        </form>

      </div>
    </div>
  `;

  // Load history
  commsHistory = await loadHistory();
  renderAll(panel);

  // Channel toggle buttons
  panel.querySelectorAll('.loom-tier-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      channelMode = btn.dataset.loomChannel;
      renderAll(panel);
    });
  });

  // Send message
  const form      = panel.querySelector('#loom-form');
  const inputEl   = panel.querySelector('#loom-input');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const content = inputEl.value.trim();
    if (!content) return;

    const packet = {
      id:        Date.now(),
      type:      channelMode,
      sender:    'LOCAL_ARCHITECT',
      content,
      timestamp: nowTimestamp()
    };

    commsHistory = [packet, ...commsHistory].slice(0, MAX_MESSAGES);
    inputEl.value = '';

    renderAll(panel);
    await saveHistory(commsHistory);
  });

  loomInitDone = true;
}

/**
 * Re-render if the tab is revisited (history may have changed).
 */
export function refreshLoomView() {
  if (!loomInitDone) return;
  const panel = document.getElementById('tab-LOOM');
  if (panel) renderAll(panel);
}
