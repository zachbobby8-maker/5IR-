/**
 * 5iR Architect Profile Identity System
 * Manages the interactive cryptographic identification HUD card for Mobius.braid.
 * Allows secure copy-to-clipboard, cyber-linkages, and profile status interrogation.
 */

export function initArchitectProfile() {
  const profileCapsule = document.querySelector('.architect-profile-capsule');
  if (!profileCapsule) return;

  // Render the interactive overlay container at the end of body
  const overlay = document.createElement('div');
  overlay.id = 'architect-profile-overlay';
  overlay.className = 'profile-overlay-hidden';
  overlay.setAttribute('role', 'dialog');
  overlay.setAttribute('aria-modal', 'true');
  overlay.setAttribute('aria-label', 'Architect Mobius Cryptographic Badge');

  overlay.innerHTML = `
    <div class="profile-modal-card">
      <div class="profile-modal-header">
        <span class="pulse-beacon"></span>
        <span class="modal-status-text">COHERENT IDENTITY SIGNATURE</span>
        <button id="close-profile-btn" class="profile-close-btn" aria-label="Close Profile Terminal">&times;</button>
      </div>

      <div class="profile-modal-body">
        <div class="profile-avatar-large">
          <svg viewBox="0 0 100 100" class="avatar-svg-large" aria-hidden="true">
            <!-- Background hex mesh -->
            <polygon points="50,5 90,27 90,73 50,95 10,73 10,27" fill="rgba(0, 242, 254, 0.05)" stroke="#00f2fe" stroke-width="2" />
            <!-- Architect posture -->
            <path d="M 30,85 L 25,100 L 75,100 L 70,85 Z" fill="#0b1b3d" stroke="#5850ec" stroke-width="2" />
            <path d="M 35,70 L 15,100 L 32,100 L 45,80 Z" fill="#0a1631" stroke="#5850ec" stroke-width="1.5" />
            <path d="M 65,70 L 85,100 L 68,100 L 55,80 Z" fill="#0a1631" stroke="#5850ec" stroke-width="1.5" />
            <!-- Neck & Face -->
            <polygon points="44,70 56,70 50,82" fill="#ffe0bd" stroke="rgba(88, 80, 236, 0.5)" stroke-width="1" />
            <circle cx="50" cy="55" r="16" fill="#ffe0bd" stroke="#5850ec" stroke-width="2" />
            <!-- Hexagonal Smart Glasses -->
            <polygon points="34,55 48,51 46,61" fill="rgba(0, 242, 254, 0.5)" stroke="#00f2fe" stroke-width="2" />
            <polygon points="52,51 66,55 54,61" fill="rgba(0, 242, 254, 0.5)" stroke="#00f2fe" stroke-width="2" />
            <line x1="48" y1="54" x2="52" y2="54" stroke="#00f2fe" stroke-width="2" />
            <!-- Watch link radiating down -->
            <path d="M 22,96 L 22,100" stroke="#00f2fe" stroke-width="2" />
            <circle cx="22" cy="96" r="2.5" fill="#00f2fe" />
          </svg>
        </div>

        <div class="profile-details-grid">
          <div class="profile-detail-row">
            <span class="detail-label">IDENTITY HANDLE:</span>
            <span class="detail-value text-cyan font-bold">Mobius.braid</span>
          </div>

          <div class="profile-detail-row">
            <span class="detail-label">SECURE MAIL:</span>
            <div class="mail-copy-wrap">
              <span id="profile-mail" class="detail-value text-magenta">travgreta@proton.com</span>
              <button id="copy-mail-btn" class="mini-hud-btn" title="Copy Secure Mail">COPY</button>
            </div>
          </div>

          <div class="profile-detail-row">
            <span class="detail-label">X PROTOCOL:</span>
            <a href="https://x.com/topologyflux" target="_blank" rel="noopener noreferrer" class="detail-value text-cyan hover:underline flex items-center gap-1">
              topologyflux ↗
            </a>
          </div>

          <div class="profile-detail-row">
            <span class="detail-label">SECURITY CLEARANCE:</span>
            <span class="detail-value text-grey">LEGENDRIAN CLASS-1 [MÖBIUS LEVEL]</span>
          </div>

          <div class="profile-detail-row">
            <span class="detail-label">COMPILATION ASSOC:</span>
            <span class="detail-value text-grey">COHERENT MATRIX // 39,420 Hz</span>
          </div>
        </div>

        <div class="profile-crypto-terminal">
          <div class="terminal-shell__header">
            <span class="terminal-shell__dot"></span>
            <span class="terminal-shell__dot"></span>
            <span class="terminal-shell__title">MOBIUS_CREDENTIAL_KEY // ACTIVE SECURE SHUNT</span>
          </div>
          <div class="terminal-shell__body">
            <code id="profile-key-output">KEY_HASH::946e16a2_MOBIUS_BRAID_39420_SECURE_LATTICE</code>
            <button id="verify-key-btn" class="profile-action-btn-cyan mt-2">TEST LATTICE INTEGRITY</button>
          </div>
        </div>
      </div>

      <div class="profile-modal-footer">
        <span class="text-xs text-grey">dQ_leak = 0.00W // COHERENCE 94.6% STABLE</span>
      </div>
    </div>
  `;

  document.body.appendChild(overlay);

  // Setup click handlers
  profileCapsule.addEventListener('click', () => {
    overlay.classList.remove('profile-overlay-hidden');
    overlay.classList.add('profile-overlay-visible');
  });

  const closeBtn = document.getElementById('close-profile-btn');
  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      closeOverlay();
    });
  }

  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) {
      closeOverlay();
    }
  });

  function closeOverlay() {
    overlay.classList.remove('profile-overlay-visible');
    overlay.classList.add('profile-overlay-hidden');
  }

  // Copy email listener
  const copyBtn = document.getElementById('copy-mail-btn');
  const mailSpan = document.getElementById('profile-mail');
  if (copyBtn && mailSpan) {
    copyBtn.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(mailSpan.textContent.trim());
        const originalText = copyBtn.textContent;
        copyBtn.textContent = 'COPIED!';
        copyBtn.style.color = 'var(--color-cyan)';
        setTimeout(() => {
          copyBtn.textContent = originalText;
          copyBtn.style.color = '';
        }, 1500);
      } catch (err) {
        console.error('Failed to copy mail to clipboard:', err);
      }
    });
  }

  // Verify Key listener for high immersion
  const verifyBtn = document.getElementById('verify-key-btn');
  const keyOutput = document.getElementById('profile-key-output');
  if (verifyBtn && keyOutput) {
    verifyBtn.addEventListener('click', () => {
      verifyBtn.disabled = true;
      verifyBtn.textContent = 'INTERROGATING LATTICE...';
      keyOutput.textContent = '>> SCANNING SIGNATURE AT 39,420 Hz...';
      keyOutput.style.color = 'var(--color-magenta)';

      setTimeout(() => {
        keyOutput.textContent = `>> SIGNATURE LOCK SECURE!\n>> MOBIUS.BRAID INTEGRITY = 100%\n>> KEY: 0x39420::MOBIUS::BRAID::${Math.floor(Math.random() * 900000 + 100000)}`;
        keyOutput.style.color = 'var(--color-cyan)';
        verifyBtn.disabled = false;
        verifyBtn.textContent = 'TEST LATTICE INTEGRITY';
      }, 1200);
    });
  }
}
