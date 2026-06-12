/**
 * Lattice persistence panel — renders sintered block history from storage.
 */

const t = (key, vals) => window.miniappI18n?.t(key, vals) ?? key;
const STORAGE_KEY = 'sinter_block_history';

/**
 * Load history from persistent storage.
 * @returns {Promise<Array>}
 */
export async function loadBlockHistory() {
  try {
    const raw = await miniappsAI.storage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

/**
 * Save a new block record to persistent storage.
 * @param {Object} record
 */
export async function saveBlockRecord(record) {
  try {
    const existing = await loadBlockHistory();
    // Keep last 50 records
    const updated = [record, ...existing].slice(0, 50);
    await miniappsAI.storage.setItem(STORAGE_KEY, JSON.stringify(updated));
    return updated;
  } catch (err) {
    if (err?.code === 'STORAGE_QUOTA_EXCEEDED') {
      console.warn('[SINTER] Storage quota exceeded — trimming history.');
      try {
        const existing = await loadBlockHistory();
        const trimmed  = [record, ...existing].slice(0, 20);
        await miniappsAI.storage.setItem(STORAGE_KEY, JSON.stringify(trimmed));
        return trimmed;
      } catch { return []; }
    }
    return [];
  }
}

/**
 * Clear all stored block history.
 */
export async function clearBlockHistory() {
  await miniappsAI.storage.removeItem(STORAGE_KEY);
}

/**
 * Render the history log section inside the LATTICE panel.
 * @param {Array} history
 * @param {HTMLElement} container
 * @param {Function} onClear
 */
export function renderLatticeHistory(history, container, onClear) {
  if (!container) return;

  if (!history || history.length === 0) {
    container.innerHTML = `
      <div class="history-empty">// No sintered blocks in persistent lattice storage.</div>
    `;
    return;
  }

  container.innerHTML = `
    <div class="history-header">
      <span class="field-micro">SINTERED_BLOCK_HISTORY // ${history.length} RECORDS</span>
      <button id="btn-clear-history" class="btn-clear" type="button" aria-label="Clear block history">PURGE_RECORDS</button>
    </div>
    <div class="history-list">
      ${history.map((rec, i) => `
        <div class="history-row">
          <span class="hr-idx">#${String(history.length - i).padStart(3, '0')}</span>
          <span class="hr-id">${rec.blockId || '---'}</span>
          <span class="hr-ratio">${rec.ratio || '0%'}</span>
          <span class="hr-tokens">${rec.tokenCount ?? 0} TKN</span>
          <span class="hr-class">${rec.complexityClass || '---'}</span>
          <span class="hr-time">${rec.timestamp ? new Date(rec.timestamp).toLocaleTimeString() : '---'}</span>
        </div>
      `).join('')}
    </div>
  `;

  const clearBtn = container.querySelector('#btn-clear-history');
  if (clearBtn) {
    clearBtn.addEventListener('click', async () => {
      await clearBlockHistory();
      if (onClear) onClear();
    });
  }
}
