/* ==========================================================
   5iR CORE MATRIX COMMAND HUD - DESIGN SYSTEM
   Absolute void black (#000000) & deep space cyber-navy (#02050f)
   Accent Luminescence: Cyano-Luminescent Blue (#00f2fe) & Electric Violet (#5850ec)
   Hard Monospace Font Hierarchy Only ('JetBrains Mono', 'Courier New', monospace)
   ========================================================== */

:root {
  --color-void: #000000;
  --color-cyber-navy: #120e03;
  --color-panel-bg: rgba(18, 14, 3, 0.75);
  --color-border: rgba(217, 119, 6, 0.3);
  --color-border-hover: rgba(255, 191, 0, 0.6);
  --color-cyan: #ffd700;
  --color-violet: #d97706;
  --color-grey: #e5dfcf;
  --color-dark-grey: #8a7751;
  --color-magenta: #ff5252;
  --font-mono: 'JetBrains Mono', 'Courier New', 'SF Mono', monospace;
  --glow-cyan: 0 0 15px rgba(255, 215, 0, 0.35);
  --glow-violet: 0 0 15px rgba(217, 119, 6, 0.35);
}

/* Base Overrides */
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: var(--font-mono) !important;
}

body {
  background-color: var(--color-void);
  background-image: 
    radial-gradient(circle at 50% 50%, var(--color-cyber-navy) 0%, var(--color-void) 100%),
    linear-gradient(rgba(255, 215, 0, 0.02) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 215, 0, 0.02) 1px, transparent 1px);
  background-size: 100% 100%, 30px 30px, 30px 30px;
  color: var(--color-grey);
  line-height: 1.5;
  min-height: 100vh;
  overflow-x: hidden;
  position: relative;
}

/* Background Brightness States */
body.bg-stealth {
  background-color: #000000 !important;
  background-image: 
    radial-gradient(circle at 50% 50%, #120e03 0%, #000000 100%),
    linear-gradient(rgba(255, 215, 0, 0.02) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 215, 0, 0.02) 1px, transparent 1px) !important;
}
body.bg-void {
  background-color: #000000 !important;
  background-image: none !important;
}
body.bg-light {
  background-color: #f1f5f9 !important;
  background-image: 
    radial-gradient(circle at 50% 50%, #ffffff 0%, #cbd5e1 100%),
    linear-gradient(rgba(0, 0, 0, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0, 0, 0, 0.03) 1px, transparent 1px) !important;
  background-size: 100% 100%, 30px 30px, 30px 30px !important;
}

/* CRT Screen Scanline Filters */
.crt-overlay {
  position: fixed;
  inset: 0;
  pointer-events: none;
  background: linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%);
  background-size: 100% 4px;
  z-index: 9999;
  opacity: 0.85;
}

.vignette {
  position: fixed;
  inset: 0;
  pointer-events: none;
  background: radial-gradient(circle, transparent 50%, rgba(0, 0, 0, 0.8) 100%);
  z-index: 9998;
}

/* Monospace Helpers */
.text-cyan { color: var(--color-cyan); text-shadow: 0 0 5px rgba(255, 215, 0, 0.5); }
.text-magenta { color: var(--color-magenta); text-shadow: 0 0 5px rgba(255, 82, 82, 0.5); }
.text-violet { color: var(--color-violet); text-shadow: 0 0 5px rgba(217, 119, 6, 0.5); }
.text-grey { color: var(--color-grey); }

/* Master Layout Container */
.terminal-hud {
  padding: 16px;
  max-width: 1400px;
  margin: 0 auto;
  position: relative;
  z-index: 10;
}

/* Header Ribbon Design */
.hud-header {
  background: rgba(2, 5, 15, 0.85);
  border: 1px solid var(--color-border);
  box-shadow: inset 0 0 10px rgba(88, 80, 236, 0.1);
  padding: 14px 20px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 24px;
  border-radius: 4px;
}

@media (min-width: 1024px) {
  .hud-header {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
}

.header-left {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.system-ping-indicator {
  display: flex;
  align-items: center;
  gap: 8px;
}

.pulse-beacon {
  width: 6px;
  height: 6px;
  background-color: var(--color-cyan);
  border-radius: 50%;
  animation: beacon-ping 1.5s infinite;
  box-shadow: 0 0 8px var(--color-cyan);
}

@keyframes beacon-ping {
  0% { transform: scale(1); opacity: 1; }
  50% { transform: scale(2); opacity: 0.4; }
  100% { transform: scale(1); opacity: 1; }
}

.ping-text {
  font-size: 10px;
  font-weight: bold;
  letter-spacing: 1.5px;
  color: var(--color-cyan);
}

.hud-title {
  font-size: 18px;
  font-weight: 800;
  color: #ffffff;
  letter-spacing: -0.5px;
}

/* Header Telemetry stats block */
.header-telemetry {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
}

@media (min-width: 640px) {
  .header-telemetry {
    grid-template-columns: repeat(4, 1fr);
    gap: 16px;
  }
}

.tel-item {
  border-left: 2px solid var(--color-border);
  padding-left: 10px;
}

.tel-lbl {
  display: block;
  font-size: 8px;
  color: var(--color-dark-grey);
  letter-spacing: 1px;
}

.tel-val {
  font-size: 12px;
  font-weight: bold;
}

/* Architect profile avatar box */
.architect-profile-capsule {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 6px 12px;
  background: rgba(88, 80, 236, 0.08);
  border: 1px solid var(--color-border);
  border-radius: 4px;
}

.profile-avatar-svg {
  width: 38px;
  height: 38px;
  flex-shrink: 0;
}

.avatar-svg {
  width: 100%;
  height: 100%;
}

.profile-meta {
  display: flex;
  flex-direction: column;
}

.profile-title {
  font-size: 11px;
  font-weight: bold;
  color: #ffffff;
  letter-spacing: 1px;
}

.profile-sub {
  font-size: 9px;
  color: var(--color-cyan);
}

/* 6-App Grid Dashboard Layout */
.hud-dashboard-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
}

@media (min-width: 768px) {
  .hud-dashboard-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1280px) {
  .hud-dashboard-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

/* Specialized 5iR Panel cards */
.hud-panel-card {
  background-color: var(--color-panel-bg);
  border: 1px solid var(--color-border);
  border-radius: 4px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  transition: all 0.3s ease;
  position: relative;
  backdrop-filter: blur(5px);
}

.hud-panel-card:hover {
  border-color: var(--color-border-hover);
  box-shadow: var(--glow-cyan);
}

.panel-header {
  display: flex;
  align-items: center;
  gap: 12px;
  border-bottom: 1px solid rgba(88, 80, 236, 0.15);
  padding-bottom: 12px;
  margin-bottom: 14px;
}

.panel-icon {
  font-size: 18px;
}

.panel-title-block {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.panel-title {
  font-size: 11px;
  font-weight: bold;
  color: #ffffff;
  letter-spacing: 0.5px;
}

.panel-status {
  font-size: 8px;
  color: var(--color-dark-grey);
}

.panel-body {
  flex-grow: 1;
}

/* Math metadata text overlay decoration */
.math-metadata-overlay {
  font-size: 7.5px;
  color: var(--color-cyan);
  opacity: 0.8;
  letter-spacing: 0.2px;
}

/* Active streaming terminal inputs inside grid (King Droid) */
.vortex-terminal-container {
  display: flex;
  flex-direction: column;
  background-color: #000000 !important;
  border: 1px solid var(--color-cyan);
  border-radius: 4px;
  height: 280px;
  overflow: hidden;
  box-shadow: inset 0 0 20px rgba(2, 5, 15, 0.95), 0 0 10px rgba(0, 242, 254, 0.15);
}

.terminal-shell__header {
  background: rgba(88, 80, 236, 0.12);
  padding: 6px 10px;
  display: flex;
  gap: 5px;
  align-items: center;
  border-bottom: 1px solid rgba(88, 80, 236, 0.2);
}

.terminal-shell__dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--color-cyan);
  box-shadow: 0 0 5px var(--color-cyan);
}

.terminal-shell__dot:nth-child(2) {
  background: var(--color-violet);
  box-shadow: 0 0 5px var(--color-violet);
}

.terminal-shell__dot:nth-child(3) {
  background: var(--color-magenta);
  box-shadow: 0 0 5px var(--color-magenta);
}

.terminal-shell__title {
  font-size: 8px;
  color: var(--color-grey);
  margin-left: 6px;
  font-weight: bold;
  letter-spacing: 0.5px;
}

.vortex-log-scroll {
  flex-grow: 1;
  padding: 10px;
  overflow-y: auto;
  font-size: 10px;
  line-height: 1.4;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.log-item {
  word-break: break-all;
  white-space: pre-wrap;
  animation: log-slide-in 0.25s cubic-bezier(0.0, 0.0, 0.2, 1) forwards;
}

@keyframes log-slide-in {
  from { opacity: 0; transform: translateY(3px); }
  to { opacity: 1; transform: translateY(0); }
}

.log-item.system {
  color: var(--color-dark-grey);
  font-size: 9px;
  letter-spacing: 0.5px;
}

.log-item.metric {
  color: var(--color-magenta);
  font-size: 9px;
  font-weight: bold;
  border-bottom: 1px dashed rgba(244, 63, 94, 0.2);
  padding-bottom: 4px;
}

.log-item.user {
  color: #ffffff;
  border-left: 2px solid var(--color-violet);
  padding-left: 8px;
  font-weight: 500;
}

.log-item.droid {
  color: var(--color-cyan);
  border-left: 2px solid var(--color-cyan);
  padding-left: 8px;
  text-shadow: 0 0 3px rgba(0, 242, 254, 0.15);
}

.log-item.error {
  color: var(--color-magenta);
  font-weight: bold;
}

.vortex-quick-seeds {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: 10px;
}

.quick-seed-tag {
  background: rgba(88, 80, 236, 0.12);
  border: 1px solid var(--color-border);
  color: var(--color-grey);
  font-size: 8.5px;
  font-weight: bold;
  padding: 4px 8px;
  border-radius: 2px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.quick-seed-tag:hover {
  background: rgba(0, 242, 254, 0.15);
  border-color: var(--color-cyan);
  color: #fff;
  box-shadow: 0 0 8px rgba(0, 242, 254, 0.25);
}

.oracle-chat-form {
  display: flex;
  align-items: center;
  gap: 8px;
  background: rgba(2, 5, 15, 0.9);
  border-top: 1px solid rgba(88, 80, 236, 0.2);
  padding: 6px 10px;
}

.oracle-prompt-prefix {
  font-size: 8px;
  color: var(--color-violet);
  font-weight: bold;
  white-space: nowrap;
}

.oracle-chat-input {
  flex-grow: 1;
  background: transparent;
  border: none;
  outline: none;
  color: #ffffff;
  font-size: 10.5px;
  font-family: var(--font-mono);
}

.oracle-chat-input::placeholder {
  color: var(--color-dark-grey);
}

.oracle-submit-btn {
  background: var(--color-violet);
  border: 1px solid rgba(0, 242, 254, 0.25);
  color: #fff;
  font-size: 9px;
  font-weight: bold;
  padding: 3px 10px;
  border-radius: 2px;
  cursor: pointer;
  transition: all 0.2s;
}

.oracle-submit-btn:hover {
  background: var(--color-cyan);
  color: #000;
  box-shadow: 0 0 10px rgba(0, 242, 254, 0.35);
}

/* App 2 Canvas Wrapper */
.mesh-canvas-wrap {
  background: #000;
  border: 1px solid rgba(88, 80, 236, 0.15);
  border-radius: 3px;
  padding: 4px;
  flex-grow: 1;
}

#mesh-canvas {
  width: 100%;
  height: 140px;
  display: block;
}

.mesh-status-indicator {
  margin-top: 10px;
}

.status-badge-locked {
  background-color: rgba(0, 242, 254, 0.06);
  border: 1px solid rgba(0, 242, 254, 0.25);
  padding: 6px;
  font-size: 9px;
  color: var(--color-cyan);
  text-align: center;
  font-weight: bold;
}

/* App 3 Laser Confocal and Mass Spectrometer styling */
.sensor-title {
  font-size: 8px;
  color: var(--color-grey);
  margin-bottom: 4px;
}

.canvas-panel-border {
  border: 1px solid rgba(88, 80, 236, 0.2);
  background: #000;
  padding: 3px;
  border-radius: 2px;
}

.canvas-panel-border canvas {
  width: 100%;
  height: 80px;
  display: block;
}

.telemetry-bar-list {
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-top: 10px;
}

.telemetry-log-item {
  display: flex;
  justify-content: space-between;
  font-size: 9px;
  border-bottom: 1px solid rgba(255,255,255,0.02);
  padding-bottom: 4px;
}

.log-lbl { color: var(--color-grey); }
.log-val { font-weight: bold; }

/* App 4 Ferrofluid container wrapper */
.ferrofluid-box-wrapper {
  border: 1px solid var(--color-border);
  background-color: #000;
  border-radius: 4px;
  overflow: hidden;
}

.shunting-info-bar {
  display: flex;
  justify-content: space-between;
  background-color: rgba(88, 80, 236, 0.1);
  padding: 4px 8px;
  font-size: 8px;
  border-bottom: 1px solid rgba(88, 80, 236, 0.2);
}

.interactive-ferrofluid-field {
  padding: 6px;
}

.protection-overlay-footer {
  font-size: 8px;
  color: var(--color-magenta);
  text-align: center;
  margin-top: 8px;
  font-weight: bold;
}

/* App 5 Progress weaving indicators */
.weave-progress-slot {
  margin-bottom: 12px;
}

.weave-meta {
  display: flex;
  justify-content: space-between;
  font-size: 9px;
  font-weight: bold;
  color: #fff;
  margin-bottom: 4px;
}

.progress-track {
  height: 6px;
  background-color: #000;
  border: 1px solid rgba(88, 80, 236, 0.2);
  border-radius: 2px;
  overflow: hidden;
}

.progress-fill-cyan {
  height: 100%;
  background-color: var(--color-cyan);
  box-shadow: 0 0 5px var(--color-cyan);
}

.progress-fill-magenta {
  height: 100%;
  background-color: var(--color-magenta);
  box-shadow: 0 0 5px var(--color-magenta);
}

.weave-sub-lbl {
  font-size: 8px;
  color: var(--color-dark-grey);
  margin-top: 2px;
}

.system-rolling-terminal-wrap {
  margin-top: 10px;
  border: 1px solid rgba(88, 80, 236, 0.2);
  background: #000;
  border-radius: 2px;
}

.rolling-terminal-body {
  height: 80px;
  overflow-y: auto;
  padding: 6px;
  font-size: 8px;
  color: var(--color-grey);
  line-height: 1.3;
}

/* App 6 Acoustic phase inversion grid */
.acoustic-subgrid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 8px;
}

.acoustic-cell-node {
  background-color: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(88, 80, 236, 0.15);
  border-radius: 2px;
  padding: 6px;
}

.acoustic-summary-telemetry {
  background-color: rgba(0, 0, 0, 0.5);
  border: 1px solid rgba(0, 242, 254, 0.15);
  padding: 6px 10px;
  border-radius: 3px;
}

.acoustic-telemetry-item {
  display: flex;
  justify-content: space-between;
  font-size: 8px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.02);
  padding: 4px 0;
}

.acoustic-telemetry-item:last-child {
  border-bottom: none;
}

.acoustic-telemetry-item .lbl {
  color: var(--color-grey);
}

.acoustic-telemetry-item .val {
  font-weight: bold;
}

/* Scrollbars */
::-webkit-scrollbar {
  width: 4px;
}

::-webkit-scrollbar-track {
  background: transparent;
}

::-webkit-scrollbar-thumb {
  background: rgba(88, 80, 236, 0.4);
  border-radius: 2px;
}

::-webkit-scrollbar-thumb:hover {
  background: var(--color-cyan);
}

/* ==========================================================
   ARCHITECT MOBIUS.BRAID PROFILE INTERACTIVE BADGE OVERLAY
   ========================================================== */
#architect-profile-overlay {
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.85);
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10000;
  transition: opacity 0.3s ease, visibility 0.3s ease;
  padding: 16px;
}

.profile-overlay-hidden {
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
}

.profile-overlay-visible {
  opacity: 1;
  visibility: visible;
  pointer-events: auto;
}

.profile-modal-card {
  width: 100%;
  max-width: 480px;
  background-color: var(--color-cyber-navy);
  border: 2px solid var(--color-cyan);
  box-shadow: var(--glow-cyan), inset 0 0 20px rgba(0, 242, 254, 0.15);
  border-radius: 6px;
  overflow: hidden;
  position: relative;
}

.profile-modal-header {
  background: rgba(0, 242, 254, 0.08);
  border-bottom: 1px solid var(--color-cyan);
  padding: 12px 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.modal-status-text {
  font-size: 10px;
  font-weight: bold;
  color: var(--color-cyan);
  letter-spacing: 1.5px;
}

.profile-close-btn {
  background: transparent;
  border: none;
  color: var(--color-grey);
  font-size: 20px;
  cursor: pointer;
  line-height: 1;
  transition: color 0.2s;
}

.profile-close-btn:hover {
  color: var(--color-magenta);
}

.profile-modal-body {
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.profile-avatar-large {
  width: 90px;
  height: 90px;
  margin: 0 auto 8px auto;
}

.profile-details-grid {
  display: flex;
  flex-direction: column;
  gap: 10px;
  background: rgba(0, 0, 0, 0.3);
  padding: 12px;
  border-radius: 4px;
  border: 1px solid rgba(88, 80, 236, 0.15);
}

.profile-detail-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 11px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.03);
  padding-bottom: 6px;
}

.profile-detail-row:last-child {
  border-bottom: none;
  padding-bottom: 0;
}

.detail-label {
  color: var(--color-dark-grey);
  font-weight: bold;
}

.mail-copy-wrap {
  display: flex;
  align-items: center;
  gap: 8px;
}

.mini-hud-btn {
  background: rgba(88, 80, 236, 0.2);
  border: 1px solid rgba(88, 80, 236, 0.4);
  color: var(--color-grey);
  font-size: 9px;
  padding: 2px 6px;
  cursor: pointer;
  border-radius: 2px;
  transition: all 0.2s;
}

.mini-hud-btn:hover {
  background: var(--color-cyan);
  color: #000;
  border-color: var(--color-cyan);
}

.profile-crypto-terminal {
  border: 1px solid rgba(0, 242, 254, 0.2);
  border-radius: 4px;
  background-color: #000;
  overflow: hidden;
}

.terminal-shell__body {
  padding: 10px;
  display: flex;
  flex-direction: column;
}

.terminal-shell__body code {
  font-size: 9px;
  color: var(--color-cyan);
  word-break: break-all;
  white-space: pre-wrap;
  line-height: 1.4;
}

.profile-action-btn-cyan {
  background: rgba(0, 242, 254, 0.08);
  border: 1px solid var(--color-cyan);
  color: var(--color-cyan);
  font-size: 10px;
  font-weight: bold;
  padding: 6px 12px;
  cursor: pointer;
  border-radius: 2px;
  transition: all 0.2s;
  text-align: center;
}

.profile-action-btn-cyan:hover:not(:disabled) {
  background: var(--color-cyan);
  color: #000;
  box-shadow: var(--glow-cyan);
}

.profile-action-btn-cyan:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.profile-modal-footer {
  background: rgba(0, 0, 0, 0.4);
  border-top: 1px solid rgba(88, 80, 236, 0.15);
  padding: 8px 16px;
  text-align: center;
}

/* Pulsing micro indicator on the capsule trigger to prompt exploration */
.architect-profile-capsule {
  cursor: pointer;
  position: relative;
  transition: all 0.2s ease;
}

.architect-profile-capsule:hover {
  background: rgba(0, 242, 254, 0.1);
  border-color: var(--color-cyan);
  box-shadow: 0 0 10px rgba(0, 242, 254, 0.2);
}

.architect-profile-capsule::after {
  content: "QUERY ID";
  position: absolute;
  bottom: -12px;
  right: 6px;
  font-size: 7px;
  color: var(--color-cyan);
  opacity: 0.6;
  letter-spacing: 0.5px;
  transition: opacity 0.2s;
}

/* ==========================================================
   TABBED INTERFACE NAVIGATION SYSTEM
   Allows swapping between Unified Dashboard and 4 isolated interfaces
   ========================================================== */
.hud-tab-navigation {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 20px;
  border-bottom: 1px solid rgba(88, 80, 236, 0.15);
  padding-bottom: 12px;
}

.hud-tab-btn {
  background: rgba(2, 5, 15, 0.9);
  border: 1px solid rgba(88, 80, 236, 0.25);
  color: var(--color-grey);
  font-size: 9.5px;
  font-weight: bold;
  padding: 6px 12px;
  cursor: pointer;
  border-radius: 3px;
  transition: all 0.2s ease;
  letter-spacing: 0.5px;
}

.hud-tab-btn:hover {
  border-color: var(--color-cyan);
  color: #ffffff;
  box-shadow: 0 0 8px rgba(0, 242, 254, 0.2);
}

.hud-tab-btn.active {
  background: rgba(0, 242, 254, 0.08);
  border-color: var(--color-cyan);
  color: var(--color-cyan);
  box-shadow: var(--glow-cyan);
}

/* Blinking Monospace Block Cursor */
.blinking-cursor {
  display: inline-block;
  width: 8px;
  height: 14px;
  background-color: var(--color-cyan);
  box-shadow: 0 0 5px var(--color-cyan);
  vertical-align: middle;
  animation: cursor-blink 0.8s steps(2, start) infinite;
}

@keyframes cursor-blink {
  to { opacity: 0; }
}

/* Refactored Vortex Terminal Hardware Deco style */
.terminal-hardware-deco {
  border: 1px solid rgba(88, 80, 236, 0.15);
  border-top: none;
  background: rgba(2, 5, 15, 0.4);
  padding: 5px 10px;
  border-radius: 0 0 4px 4px;
}

/* ==========================================================
   5iR GATEKEEPER PORTAL ENTRY PAGE STYLES
   ========================================================== */
.gateway-container {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 20px;
  background-color: var(--color-void);
  background-image: 
    radial-gradient(circle at 50% 50%, rgba(18, 14, 3, 0.95) 0%, var(--color-void) 100%),
    linear-gradient(rgba(255, 215, 0, 0.015) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 215, 0, 0.015) 1px, transparent 1px);
  background-size: 100% 100%, 40px 40px, 40px 40px;
  position: relative;
  z-index: 100;
  transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
}

.gateway-card {
  width: 100%;
  max-width: 680px;
  background-color: rgba(18, 14, 3, 0.85);
  border: 2px solid var(--color-border);
  box-shadow: inset 0 0 30px rgba(217, 119, 6, 0.1), 0 0 40px rgba(217, 119, 6, 0.15);
  border-radius: 6px;
  backdrop-filter: blur(8px);
  overflow: hidden;
  transition: all 0.5s ease;
}

.gateway-card:hover {
  border-color: var(--color-border-hover);
  box-shadow: inset 0 0 30px rgba(0, 242, 254, 0.08), var(--glow-cyan);
}

.gateway-header {
  background: rgba(88, 80, 236, 0.1);
  border-bottom: 1px solid var(--color-border);
  padding: 12px 18px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.gateway-logo-block {
  display: flex;
  align-items: center;
  gap: 10px;
}

.gateway-pulse-dot {
  width: 8px;
  height: 8px;
  background-color: var(--color-cyan);
  border-radius: 50%;
  animation: beacon-ping 1.5s infinite;
  box-shadow: 0 0 10px var(--color-cyan);
}

.gateway-security-title {
  font-size: 10px;
  font-weight: bold;
  color: #ffffff;
  letter-spacing: 1px;
}

.gateway-frequency-ticker {
  font-size: 9px;
  color: var(--color-cyan);
  font-weight: bold;
}

.gateway-body {
  padding: 24px;
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
}

@media (min-width: 640px) {
  .gateway-body {
    grid-template-columns: 200px 1fr;
  }
}

.gateway-seal-wrap {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.5);
  border: 1px solid rgba(88, 80, 236, 0.15);
  border-radius: 4px;
  padding: 10px;
  min-height: 200px;
}

.gateway-seal-svg {
  width: 100%;
  max-width: 160px;
  height: auto;
}

.gateway-log-panel {
  grid-column: 1 / -1;
  border: 1px solid rgba(88, 80, 236, 0.2);
  background: #000000;
  border-radius: 4px;
  overflow: hidden;
}

.gateway-log-lines {
  height: 100px;
  overflow-y: auto;
  padding: 8px 12px;
  font-size: 9px;
  color: var(--color-grey);
  display: flex;
  flex-direction: column;
  gap: 4px;
  font-family: var(--font-mono);
}

.gateway-log-line {
  line-height: 1.4;
  word-break: break-all;
  white-space: pre-wrap;
}

.gateway-log-line.cyan { color: var(--color-cyan); }
.gateway-log-line.violet { color: var(--color-violet); }
.gateway-log-line.magenta { color: var(--color-magenta); }

.gateway-auth-form {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.auth-input-group {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.auth-lbl {
  font-size: 8px;
  color: var(--color-dark-grey);
  font-weight: bold;
  letter-spacing: 0.5px;
}

.auth-input {
  background: #000000;
  border: 1px solid var(--color-border);
  color: #ffffff;
  padding: 8px 12px;
  font-size: 11px;
  font-family: var(--font-mono);
  outline: none;
  border-radius: 3px;
  transition: all 0.2s;
}

.auth-input:focus {
  border-color: var(--color-cyan);
  box-shadow: 0 0 8px rgba(0, 242, 254, 0.25);
}

.gateway-action-btn {
  background: rgba(88, 80, 236, 0.15);
  border: 1.5px solid var(--color-violet);
  color: #ffffff;
  font-size: 11px;
  font-weight: bold;
  padding: 12px;
  border-radius: 3px;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  letter-spacing: 0.5px;
  text-align: center;
}

.gateway-action-btn:hover {
  background: var(--color-cyan);
  color: #000000;
  border-color: var(--color-cyan);
  box-shadow: var(--glow-cyan);
}

.gateway-footer {
  background: rgba(0, 0, 0, 0.4);
  border-top: 1px solid rgba(88, 80, 236, 0.15);
  padding: 10px 18px;
  display: flex;
  justify-content: space-between;
  font-size: 9px;
  color: var(--color-dark-grey);
}

/* Animations for Gateway seals */
.spin-clockwise {
  transform-origin: 100px 100px;
  animation: spin-clockwise-anim 20s linear infinite;
}

@keyframes spin-clockwise-anim {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.spin-counter {
  transform-origin: 100px 100px;
  animation: spin-counter-anim 15s linear infinite;
}

@keyframes spin-counter-anim {
  from { transform: rotate(360deg); }
  to { transform: rotate(0deg); }
}

.floating-path {
  animation: floating-path-anim 3s ease-in-out infinite alternate;
}

@keyframes floating-path-anim {
  from { opacity: 0.7; filter: drop-shadow(0 0 2px var(--color-cyan)); }
  to { opacity: 1.0; filter: drop-shadow(0 0 10px var(--color-cyan)); }
}

.ping-pulse {
  animation: ping-pulse-anim 1.5s ease-in-out infinite;
}

@keyframes ping-pulse-anim {
  0% { transform: scale(1); opacity: 0.5; }
  50% { transform: scale(1.4); opacity: 1; }
  100% { transform: scale(1); opacity: 0.5; }
}

/* Back to login/Lock button style */
.hud-lock-deck-btn {
  background: rgba(244, 63, 94, 0.08);
  border: 1px solid rgba(244, 63, 94, 0.3);
  color: var(--color-magenta);
  font-size: 9px;
  font-weight: bold;
  padding: 6px 12px;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s ease;
  white-space: nowrap;
}

.hud-lock-deck-btn:hover {
  background: var(--color-magenta);
  color: #ffffff;
  border-color: var(--color-magenta);
  box-shadow: 0 0 10px rgba(244, 63, 94, 0.4);
}

/* ==========================================================
   VORTEX AI DETACHED CLEAR ORACLE DECK STYLING (PAGE 3)
   A highly aesthetic, luminous cyber-glass mode.
   ========================================================== */
.vortex-clear-deck {
  background-color: #fffbf0;
  background-image: 
    radial-gradient(circle at 10% 20%, rgba(217, 119, 6, 0.08) 0%, transparent 40%),
    radial-gradient(circle at 90% 80%, rgba(255, 215, 0, 0.08) 0%, transparent 40%),
    linear-gradient(rgba(217, 119, 6, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(217, 119, 6, 0.03) 1px, transparent 1px);
  background-size: 100% 100%, 100% 100%, 20px 20px, 20px 20px;
  color: #2b1f02;
  min-height: 100vh;
  padding: 24px;
  position: relative;
  z-index: 10;
}

/* Clear Hud Header */
.clear-hud-header {
  background: rgba(255, 255, 255, 0.85);
  border: 1px solid rgba(217, 119, 6, 0.3);
  box-shadow: 0 4px 30px rgba(217, 119, 6, 0.05), inset 0 0 10px rgba(217, 119, 6, 0.05);
  backdrop-filter: blur(10px);
  padding: 16px 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 24px;
  border-radius: 6px;
}

@media (min-width: 1024px) {
  .clear-hud-header {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
}

.clear-header-left {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.clear-system-ping {
  display: flex;
  align-items: center;
  gap: 8px;
}

.clear-pulse-beacon {
  width: 7px;
  height: 7px;
  background-color: #d97706;
  border-radius: 50%;
  animation: beacon-ping 1.5s infinite;
  box-shadow: 0 0 6px #ffd700;
}

.clear-ping-text {
  font-size: 10px;
  font-weight: 800;
  letter-spacing: 1px;
  color: #d97706;
}

.clear-hud-title {
  font-size: 19px;
  font-weight: 800;
  color: #2b1f02;
  letter-spacing: -0.5px;
}

.clear-header-telemetry {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
}

@media (min-width: 640px) {
  .clear-header-telemetry {
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
  }
}

.clear-tel-item {
  border-left: 2px solid rgba(217, 119, 6, 0.3);
  padding-left: 10px;
}

.clear-tel-lbl {
  display: block;
  font-size: 8px;
  color: #8a7751;
  font-weight: bold;
  letter-spacing: 0.5px;
}

.clear-tel-val {
  font-size: 12px;
  font-weight: 800;
}

/* Clear Navigation Buttons */
.clear-nav-btn {
  background: rgba(255, 215, 0, 0.08);
  border: 1px solid rgba(255, 215, 0, 0.4);
  color: #b45309;
  font-size: 9.5px;
  font-weight: bold;
  padding: 8px 14px;
  border-radius: 4px;
  cursor: pointer;
  white-space: nowrap;
}

.clear-nav-btn:hover {
  background: #ffd700;
  color: #000000;
  border-color: #ffd700;
}

.clear-lock-btn {
  background: rgba(244, 63, 94, 0.08);
  border: 1px solid rgba(244, 63, 94, 0.35);
  color: #f43f5e;
  font-size: 9.5px;
  font-weight: bold;
  padding: 8px 14px;
  border-radius: 4px;
  cursor: pointer;
  white-space: nowrap;
}

.clear-lock-btn:hover {
  background: #f43f5e;
  color: #ffffff;
  border-color: #f43f5e;
  box-shadow: 0 4px 15px rgba(244, 63, 94, 0.2);
}

/* Clear Diagnostics Panel */
.clear-diagnostics-card {
  background: rgba(255, 255, 255, 0.85);
  border: 1px solid rgba(0, 242, 254, 0.25);
  border-radius: 6px;
  padding: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.03);
  backdrop-filter: blur(10px);
}

.clear-widget-title {
  font-size: 10px;
  font-weight: 800;
  color: #02050f;
  letter-spacing: 1px;
  border-bottom: 2px solid rgba(0, 242, 254, 0.15);
  padding-bottom: 6px;
}

/* Clear Terminal Container */
.vortex-clear-terminal-container {
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  border: 1px solid rgba(217, 119, 6, 0.35);
  border-radius: 6px;
  height: 380px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(217, 119, 6, 0.04);
}

.clear-terminal-header {
  background: rgba(255, 215, 0, 0.06);
  padding: 8px 14px;
  display: flex;
  gap: 6px;
  align-items: center;
  border-bottom: 1px solid rgba(217, 119, 6, 0.15);
}

.clear-terminal-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
}

.clear-terminal-title {
  font-size: 8.5px;
  font-weight: 800;
  margin-left: 6px;
  letter-spacing: 0.5px;
}

.vortex-clear-log-scroll {
  flex-grow: 1;
  padding: 14px;
  overflow-y: auto;
  font-size: 10.5px;
  line-height: 1.5;
  display: flex;
  flex-direction: column;
  gap: 12px;
  background-color: #ffffff;
}

/* Clear log colors */
.vortex-clear-log-scroll .log-item.system {
  color: #6a7d8e;
  font-size: 9.5px;
  letter-spacing: 0.5px;
}

.vortex-clear-log-scroll .log-item.user {
  color: #02050f;
  border-left: 3px solid #5850ec;
  padding-left: 10px;
  font-weight: 600;
}

.vortex-clear-log-scroll .log-item.droid {
  color: #b45309;
  border-left: 3px solid #ffd700;
  padding-left: 10px;
  font-weight: 500;
}

/* Clear Prompt Form */
.clear-oracle-chat-form {
  display: flex;
  align-items: center;
  gap: 8px;
  background: #f4f8fb;
  border-top: 1px solid rgba(217, 119, 6, 0.2);
  padding: 8px 14px;
}

.clear-oracle-prompt-prefix {
  font-size: 9px;
  color: #d97706;
  font-weight: 800;
  white-space: nowrap;
}

.clear-oracle-chat-input {
  flex-grow: 1;
  background: transparent;
  border: none;
  outline: none;
  color: #02050f;
  font-size: 11px;
  font-family: var(--font-mono);
}

.clear-oracle-chat-input::placeholder {
  color: #a0b2c1;
}

.clear-oracle-submit-btn {
  background: #d97706;
  border: 1px solid rgba(217, 119, 6, 0.15);
  color: #ffffff;
  font-size: 9.5px;
  font-weight: bold;
  padding: 4px 12px;
  border-radius: 3px;
  cursor: pointer;
  transition: all 0.2s;
}

.clear-oracle-submit-btn:hover {
  background: #ffd700;
  color: #000000;
  box-shadow: 0 4px 12px rgba(255, 215, 0, 0.3);
}

/* Clear Quick seeds styling */
.clear-quick-seeds {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.clear-quick-seed-tag {
  background: rgba(255, 255, 255, 0.85);
  border: 1px solid rgba(217, 119, 6, 0.2);
  color: #b45309;
  font-size: 8.5px;
  font-weight: bold;
  padding: 5px 10px;
  border-radius: 3px;
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: 0 1px 3px rgba(0,0,0,0.02);
}

.clear-quick-seed-tag:hover {
  background: #ffd700;
  border-color: #ffd700;
  color: #000;
  box-shadow: 0 4px 10px rgba(255, 215, 0, 0.2);
}

.clear-mini-btn {
  background: rgba(255, 215, 0, 0.08);
  border: 1px solid rgba(255, 215, 0, 0.3);
  color: #b45309;
  cursor: pointer;
}

.clear-mini-btn:hover {
  background: #ffd700;
  color: #000000;
  border-color: #ffd700;
}

.clear-blinking-cursor {
  display: inline-block;
  width: 8px;
  height: 14px;
  background-color: #ffd700;
  vertical-align: middle;
  animation: cursor-blink 0.8s steps(2, start) infinite;
}

.clear-terminal-hardware-deco {
  color: #6a7d8e;
}

/* ==========================================================
   PREMIUM IMMERSIVE CYBER-CHAT UPGRADES
   ========================================================== */

/* Smooth slide-in animations for newly generated packets */
@keyframes chat-bubble-spawn {
  from {
    opacity: 0;
    transform: translateY(12px) scale(0.97);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

.chat-premium-bubble {
  animation: chat-bubble-spawn 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  position: relative;
  transition: all 0.25s ease;
  backdrop-filter: blur(8px);
  box-shadow: inset 0 0 12px rgba(255, 255, 255, 0.02);
}

.chat-premium-bubble:hover {
  transform: scale(1.005);
  box-shadow: inset 0 0 16px rgba(255, 255, 255, 0.04);
}

/* Custom avatar styles */
.chat-avatar-frame {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 11px;
  font-weight: bold;
  background: rgba(0, 0, 0, 0.6);
  flex-shrink: 0;
  border: 1.2px solid var(--color-border);
  transition: all 0.2s ease;
}

/* Glowing user tags */
.chat-user-lead {
  color: #ffd700;
  text-shadow: 0 0 8px rgba(255, 215, 0, 0.4);
}

.chat-user-contributor {
  color: #00f2fe;
  text-shadow: 0 0 8px rgba(0, 242, 254, 0.4);
}

.chat-user-droid {
  color: #ff5252;
  text-shadow: 0 0 8px rgba(255, 82, 82, 0.4);
}

/* Interactive control badges */
.chat-control-pill {
  background: rgba(88, 80, 236, 0.1);
  border: 1px solid rgba(88, 80, 236, 0.3);
  color: var(--color-grey);
  font-size: 8px;
  font-weight: bold;
  padding: 3px 8px;
  border-radius: 9999px;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  gap: 4px;
}

.chat-control-pill:hover {
  background: rgba(0, 242, 254, 0.15);
  border-color: var(--color-cyan);
  color: #ffffff;
  box-shadow: 0 0 6px rgba(0, 242, 254, 0.25);
}

.chat-control-pill.active {
  background: rgba(255, 215, 0, 0.15);
  border-color: #ffd700;
  color: #ffd700;
  box-shadow: 0 0 8px rgba(255, 215, 0, 0.3);
}

/* Interactive Audio TTS Speak Buttons */
.chat-tts-btn {
  opacity: 0.3;
  cursor: pointer;
  transition: all 0.2s ease;
  background: transparent;
  border: none;
  padding: 2px;
  border-radius: 4px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.chat-premium-bubble:hover .chat-tts-btn {
  opacity: 0.85;
}

.chat-tts-btn:hover {
  opacity: 1 !important;
  background: rgba(255, 255, 255, 0.08);
  color: var(--color-cyan) !important;
}

/* High-fidelity Typing Indicator */
.chat-typing-indicator {
  display: flex;
  align-items: center;
  gap: 3.5px;
  padding: 6px 12px;
  background: rgba(88, 80, 236, 0.06);
  border: 1px dashed rgba(88, 80, 236, 0.25);
  border-radius: 4px;
  width: fit-content;
  margin: 4px 0;
}

.chat-typing-dot {
  width: 4px;
  height: 4px;
  background-color: var(--color-cyan);
  border-radius: 50%;
  animation: chat-typing-bounce 1.4s infinite ease-in-out both;
}

.chat-typing-dot:nth-child(1) { animation-delay: -0.32s; }
.chat-typing-dot:nth-child(2) { animation-delay: -0.16s; }

@keyframes chat-typing-bounce {
  0%, 80%, 100% { transform: scale(0); opacity: 0.3; }
  40% { transform: scale(1); opacity: 1; }
}

/* Ethereal Retro Matrix Theme Override class */
.chat-theme-toxic {
  --color-cyan: #39ff14 !important; /* Neon Green */
  --color-border: rgba(57, 255, 20, 0.25) !important;
  --color-border-hover: rgba(188, 19, 254, 0.6) !important; /* Neon Purple */
  --color-violet: #bc13fe !important;
  --glow-cyan: 0 0 15px rgba(57, 255, 20, 0.35) !important;
}

.chat-theme-toxic .vortex-terminal-container {
  border-color: #39ff14 !important;
  box-shadow: inset 0 0 20px rgba(18, 14, 3, 0.95), 0 0 10px rgba(57, 255, 20, 0.15) !important;
}

.chat-theme-toxic .quick-seed-tag:hover {
  background: rgba(57, 255, 20, 0.15);
  border-color: #39ff14;
  box-shadow: 0 0 8px rgba(57, 255, 20, 0.25);
}

/* Smooth visual grid connections */
.chat-remote-ping-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 6px;
  margin-bottom: 8px;
  padding: 6px;
  background: rgba(0, 0, 0, 0.4);
  border-radius: 4px;
}

/* ==========================================================
   BRIGHT LIGHT THEME OVERRIDES (HIGH CONTRAST LAB MODE)
   ========================================================== */
body.bg-light {
  background-color: #f1f5f9 !important;
  background-image: 
    radial-gradient(circle at 50% 50%, #ffffff 0%, #cbd5e1 100%),
    linear-gradient(rgba(0, 0, 0, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0, 0, 0, 0.03) 1px, transparent 1px) !important;
  background-size: 100% 100%, 30px 30px, 30px 30px !important;
  color: #1e293b !important;
}

body.bg-light .hud-panel-card {
  background-color: rgba(255, 255, 255, 0.95) !important;
  border-color: rgba(148, 163, 184, 0.5) !important;
  color: #1e293b !important;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.05), 0 4px 6px -2px rgba(0, 0, 0, 0.02) !important;
}

body.bg-light .hud-panel-card:hover {
  border-color: #0284c7 !important;
  box-shadow: 0 0 15px rgba(2, 132, 199, 0.15) !important;
}

body.bg-light .hud-header {
  background: rgba(255, 255, 255, 0.98) !important;
  border-color: rgba(148, 163, 184, 0.5) !important;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05) !important;
  color: #1e293b !important;
}

body.bg-light .hud-title {
  color: #0f172a !important;
}

body.bg-light .profile-title {
  color: #0f172a !important;
}

body.bg-light .profile-sub {
  color: #0284c7 !important;
}

body.bg-light .tel-lbl {
  color: #64748b !important;
}

body.bg-light .tel-val {
  color: #0f172a !important;
}

body.bg-light .text-grey,
body.bg-light .log-lbl,
body.bg-light .sensor-title {
  color: #334155 !important;
}

body.bg-light .text-cyan {
  color: #0284c7 !important;
  text-shadow: none !important;
}

body.bg-light .text-magenta {
  color: #be123c !important;
  text-shadow: none !important;
}

body.bg-light .text-violet {
  color: #4f46e5 !important;
  text-shadow: none !important;
}

body.bg-light .hud-tab-btn {
  background: rgba(255, 255, 255, 0.95) !important;
  border-color: rgba(148, 163, 184, 0.4) !important;
  color: #475569 !important;
}

body.bg-light .hud-tab-btn:hover {
  border-color: #0284c7 !important;
  color: #0284c7 !important;
}

body.bg-light .hud-tab-btn.active {
  background: rgba(14, 165, 233, 0.15) !important;
  border-color: #0284c7 !important;
  color: #0284c7 !important;
  box-shadow: 0 0 8px rgba(14, 165, 233, 0.25) !important;
}

body.bg-light .vortex-terminal-container {
  background-color: #ffffff !important;
  border-color: rgba(148, 163, 184, 0.5) !important;
  box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.02) !important;
}

body.bg-light .terminal-shell__header {
  background: #f1f5f9 !important;
  border-bottom-color: #cbd5e1 !important;
}

body.bg-light .terminal-shell__title {
  color: #334155 !important;
}

body.bg-light .log-item.system {
  color: #64748b !important;
}

body.bg-light .log-item.user {
  color: #0f172a !important;
  border-left-color: #4f46e5 !important;
}

body.bg-light .log-item.droid {
  color: #0284c7 !important;
  border-left-color: #0284c7 !important;
  text-shadow: none !important;
}

body.bg-light .oracle-chat-form {
  background: #f8fafc !important;
  border-top-color: #cbd5e1 !important;
}

body.bg-light .oracle-chat-input {
  color: #0f172a !important;
}

body.bg-light .oracle-chat-input::placeholder {
  color: #94a3b8 !important;
}

body.bg-light .oracle-submit-btn {
  background: #0284c7 !important;
  color: #ffffff !important;
  border-color: #0284c7 !important;
}

body.bg-light .oracle-submit-btn:hover {
  background: #0369a1 !important;
  box-shadow: 0 4px 12px rgba(2, 132, 199, 0.2) !important;
}

body.bg-light .resonance-micro-card {
  background-color: #f8fafc !important;
  border-color: #cbd5e1 !important;
}

body.bg-light .resonance-micro-card .text-indigo-400 {
  color: #4f46e5 !important;
}

body.bg-light .resonance-global-slider {
  background-color: #e2e8f0 !important;
  border-color: #cbd5e1 !important;
}

body.bg-light .lattice-canvas-wrap,
body.bg-light .canvas-panel-border,
body.bg-light .ferrofluid-viewport,
body.bg-light .acoustic-wave-viewport,
body.bg-light .mesh-canvas-wrap {
  background-color: #ffffff !important;
  border-color: #cbd5e1 !important;
}

body.bg-light .lattice-canvas-wrap canvas,
body.bg-light .ferrofluid-viewport canvas,
body.bg-light .acoustic-wave-viewport canvas,
body.bg-light .canvas-panel-border canvas,
body.bg-light .mesh-canvas-wrap canvas {
  background-color: #f8fafc !important;
}

body.bg-light .gateway-card {
  background-color: rgba(255, 255, 255, 0.98) !important;
  border-color: #cbd5e1 !important;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04) !important;
}

body.bg-light .gateway-header {
  background-color: #f1f5f9 !important;
  border-bottom-color: #cbd5e1 !important;
}

body.bg-light .gateway-security-title {
  color: #1e293b !important;
}

body.bg-light .gateway-log-panel {
  background-color: #f8fafc !important;
  border-color: #cbd5e1 !important;
}

body.bg-light .gateway-log-lines {
  color: #334155 !important;
}

body.bg-light .gateway-seal-wrap {
  background-color: #f8fafc !important;
  border-color: #cbd5e1 !important;
}

body.bg-light .auth-input {
  background-color: #ffffff !important;
  border-color: #cbd5e1 !important;
  color: #0f172a !important;
}

body.bg-light .auth-input:focus {
  border-color: #0284c7 !important;
  box-shadow: 0 0 8px rgba(2, 132, 199, 0.25) !important;
}

body.bg-light .gateway-action-btn {
  background-color: #0284c7 !important;
  color: #ffffff !important;
  border-color: #0284c7 !important;
}

body.bg-light .gateway-action-btn:hover {
  background-color: #0369a1 !important;
  color: #ffffff !important;
  border-color: #0369a1 !important;
  box-shadow: 0 4px 12px rgba(2, 132, 199, 0.2) !important;
}

body.bg-light .gateway-footer {
  background: #f1f5f9 !important;
  border-top-color: #cbd5e1 !important;
  color: #64748b !important;
}

body.bg-light .quick-seed-tag {
  background: #f1f5f9 !important;
  border-color: #cbd5e1 !important;
  color: #334155 !important;
}

body.bg-light .quick-seed-tag:hover {
  background: rgba(14, 165, 233, 0.1) !important;
  border-color: #0284c7 !important;
  color: #0284c7 !important;
  box-shadow: 0 0 8px rgba(14, 165, 233, 0.15) !important;
}

body.bg-light .architect-profile-capsule {
  background: rgba(14, 165, 233, 0.08) !important;
  border-color: rgba(14, 165, 233, 0.25) !important;
}

body.bg-light .architect-profile-capsule:hover {
  background: rgba(14, 165, 233, 0.15) !important;
  border-color: #0284c7 !important;
}

body.bg-light .hud-lock-deck-btn {
  border-color: rgba(148, 163, 184, 0.5) !important;
  color: #475569 !important;
  background: #f1f5f9 !important;
}

body.bg-light .hud-lock-deck-btn:hover {
  background: #0284c7 !important;
  color: #ffffff !important;
  border-color: #0284c7 !important;
}

body.bg-light .terminal-hardware-deco {
  background: #f8fafc !important;
  border-color: #cbd5e1 !important;
}

body.bg-light .terminal-hardware-deco .text-indigo-400 {
  color: #4f46e5 !important;
}

body.bg-light .crt-overlay {
  opacity: 0.12 !important;
}

body.bg-light .vignette {
  opacity: 0.15 !important;
}

/* Fix chat components */
body.bg-light .chat-remote-ping-grid {
  background: #f1f5f9 !important;
}

body.bg-light .chat-control-pill {
  background: #f1f5f9 !important;
  border-color: #cbd5e1 !important;
  color: #475569 !important;
}

body.bg-light .chat-control-pill.active {
  background: rgba(14, 165, 233, 0.15) !important;
  border-color: #0284c7 !important;
  color: #0284c7 !important;
}

body.bg-light .ping-btn-architect,
body.bg-light #ping-btn-architect,
body.bg-light #ping-btn-cydonia,
body.bg-light #ping-btn-vineyard {
  background: #f8fafc !important;
  border-color: #cbd5e1 !important;
}

body.bg-light #ping-btn-architect:hover { border-color: #d97706 !important; }
body.bg-light #ping-btn-cydonia:hover { border-color: #0284c7 !important; }
body.bg-light #ping-btn-vineyard:hover { border-color: #4f46e5 !important; }

body.bg-light .resonance-tab-content-wrapper {
  color: #1e293b !important;
}

body.bg-light .resonance-tab-btn {
  color: #475569 !important;
}

body.bg-light .resonance-tab-btn.active {
  color: #0284c7 !important;
  border-bottom-color: #0284c7 !important;
}

body.bg-light .ledger-crypto-balance-bar {
  background: #f8fafc !important;
  border-color: #cbd5e1 !important;
}

/* ==========================================================
   SOVEREIGN COMMAND WORKSPACE SIDEBAR & VIEWPORT OVERRIDES
   ========================================================== */
@media (max-width: 1023px) {
  aside {
    position: fixed !important;
    top: 0 !important;
    left: -320px !important;
    width: 290px !important;
    height: 100vh !important;
    z-index: 9995 !important;
    background-color: rgba(0, 0, 0, 0.98) !important;
    border-right: 2px solid var(--color-cyan) !important;
    transition: left 0.3s cubic-bezier(0.16, 1, 0.3, 1) !important;
    padding: 20px !important;
    overflow-y: auto !important;
    margin: 0 !important;
    box-shadow: 10px 0 30px rgba(0, 0, 0, 0.9) !important;
    animation: none !important; /* Disable mobile shifting for perfect click accuracy */
  }
  aside.menu-open {
    left: 0 !important;
  }
}

@media (min-width: 1024px) {
  aside {
    position: sticky !important;
    top: 24px !important;
    height: calc(100vh - 48px) !important;
    overflow-y: auto !important;
    animation: zero-gravity-float 8s ease-in-out infinite alternate !important;
  }
  .terminal-hud {
    display: flex !important;
    flex-direction: row !important;
    align-items: flex-start !important;
    gap: 24px !important;
    max-width: 1600px;
    margin: 0 auto;
    padding: 24px;
  }
}

/* Vertical Sidebar button tuning */
.hud-tab-navigation {
  display: flex !important;
  flex-direction: column !important;
  gap: 8px !important;
  border-bottom: none !important;
  padding-bottom: 0 !important;
  margin-bottom: 0 !important;
}

.hud-tab-navigation .hud-tab-btn {
  display: flex !important;
  align-items: center !important;
  justify-content: flex-start !important;
  width: 100% !important;
  text-align: left !important;
  border-left: 3px solid transparent !important;
  padding: 8px 14px !important;
}

.hud-tab-navigation .hud-tab-btn.active {
  border-left-color: var(--color-cyan) !important;
}

/* Force single shown active app section to take full 100% spacious width */
#hud-main-grid {
  display: block !important;
  width: 100% !important;
}

/* Ensure hidden utility always overrides flex/grid displays in Tailwind */
.hidden {
  display: none !important;
}

/* ==========================================================
   STATIC SOVEREIGN GRID MODE OVERRIDES (NO DOM MANIPULATION)
   ========================================================== */
#hud-main-grid.sovereign-grid-active {
  display: grid !important;
  grid-template-columns: repeat(12, 1fr) !important;
  gap: 24px !important;
}
#hud-main-grid.sovereign-grid-active #app-vortex-ai {
  grid-column: span 12 !important;
}
#hud-main-grid.sovereign-grid-active #app-asset-inventory {
  grid-column: span 7 !important;
}
#hud-main-grid.sovereign-grid-active #app-phase-sync-chat {
  grid-column: span 5 !important;
}
@media (max-width: 1279px) {
  #hud-main-grid.sovereign-grid-active #app-asset-inventory,
  #hud-main-grid.sovereign-grid-active #app-phase-sync-chat {
    grid-column: span 12 !important;
  }
}

/* ==========================================================
   ADVANCED LIGHT THEME POLISH & CONTRAST CALIBRATION
   ========================================================== */
body.bg-light .bg-black,
body.bg-light .bg-black\/80,
body.bg-light .bg-black\/60,
body.bg-light .bg-black\/95,
body.bg-light .bg-black\/90,
body.bg-light .bg-slate-950\/40,
body.bg-light .bg-slate-900,
body.bg-light .bg-[#050b1a],
body.bg-light .bg-[#02050f],
body.bg-light .bg-[#02050f]\/60,
body.bg-light .bg-[#010206] {
  background-color: #ffffff !important;
  color: #1e293b !important;
}

body.bg-light aside,
body.bg-light aside div,
body.bg-light aside nav {
  background-color: #ffffff !important;
  color: #1e293b !important;
}

body.bg-light aside div .text-white,
body.bg-light aside div span {
  color: #1e293b !important;
}

body.bg-light select,
body.bg-light input[type="text"],
body.bg-light input[type="password"],
body.bg-light input[type="number"],
body.bg-light textarea {
  background-color: #ffffff !important;
  color: #0f172a !important;
  border-color: rgba(148, 163, 184, 0.5) !important;
}

body.bg-light select option {
  background-color: #ffffff !important;
  color: #0f172a !important;
}

body.bg-light div,
body.bg-light aside,
body.bg-light nav,
body.bg-light section,
body.bg-light header,
body.bg-light form,
body.bg-light select,
body.bg-light input,
body.bg-light textarea,
body.bg-light button {
  border-color: rgba(148, 163, 184, 0.4) !important;
  box-shadow: none !important;
}

body.bg-light .text-white,
body.bg-light .text-grey,
body.bg-light .text-gray-300,
body.bg-light .text-gray-400,
body.bg-light .text-\\[\\#e5dfcf\\],
body.bg-light .text-\\[\\#9cb3c9\\] {
  color: #1e293b !important;
}

body.bg-light .text-\\[\\#39ff14\\],
body.bg-light #unified-mined-balance {
  color: #16a34a !important; /* Elegant Forest Green for high readability */
  text-shadow: none !important;
}

body.bg-light .text-\\[\\#ffd700\\] {
  color: #b45309 !important; /* Elegant amber/brown for readability */
  text-shadow: none !important;
}

/* ==========================================================
   FLUID RESPONSIVE TYPOGRAPHY & ZERO-GRAVITY FLOATING DECK
   ========================================================== */

/* Fluid Typography base scaling so everything fits screens perfectly */
html {
  font-size: clamp(11.5px, 0.88vw, 15px) !important;
}

/* Base floating translate and shadow shaders */
@keyframes zero-gravity-float {
  0% { transform: translateY(0px); }
  50% { transform: translateY(-5px); }
  100% { transform: translateY(0px); }
}

/* Apply floating state on the primary layout panels and side bar card */
.gateway-card,
aside.w-full,
.hud-panel-card:not(.bg-transparent) {
  position: relative;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.75), inset 0 0 25px rgba(0, 242, 254, 0.03);
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1) !important;
}

/* Beautiful zero-g floating animation effect */
.gateway-card,
aside.w-full {
  animation: zero-gravity-float 8s ease-in-out infinite alternate;
}

/* Scale adjustments on hover for deep tactile feedback */
.hud-panel-card:not(.bg-transparent):hover {
  transform: translateY(-3px) !important;
  box-shadow: 0 20px 45px rgba(0, 242, 254, 0.15), var(--glow-cyan) !important;
  border-color: var(--color-border-hover) !important;
}

/* Make profile trigger capsule also feel floating */
.architect-profile-capsule {
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1) !important;
}
.architect-profile-capsule:hover {
  transform: translateY(-2px) scale(1.02);
  box-shadow: 0 8px 20px rgba(0, 242, 254, 0.2) !important;
}

/* ==========================================================
   ADVANCED RESPONSIVE ADJUSTMENTS FOR APPS 11, 12, 14
   ========================================================== */

/* Mobile optimization (viewport < 640px) */
@media (max-width: 639px) {
  .hud-panel-card {
    padding: 12px !important;
  }
  .panel-header {
    gap: 8px !important;
    padding-bottom: 8px !important;
    margin-bottom: 10px !important;
  }
  .panel-title {
    font-size: 10px !important;
  }
  .math-metadata-overlay {
    font-size: 7px !important;
  }
  /* Inventory specific mobile scaling */
  .inventory-tab-btn {
    padding: 4px 10px !important;
    font-size: 7pt !important;
  }
  /* Flux specific mobile scaling */
  #flux-logs-container {
    height: 100px !important;
    font-size: 7pt !important;
  }
  /* Scale long text strings */
  #asymmetric-tier, #asymmetric-path {
    font-size: 8px !important;
    word-break: break-all !important;
  }
}

/* Tablet & Landscape optimization (640px to 1023px) */
@media (min-width: 640px) and (max-width: 1023px) {
  .hud-panel-card {
    padding: 14px !important;
  }
}

/* ==========================================================
   HIGH-LUMINESCENCE BOLDER TERMINAL BOARDS
   ========================================================== */
.vortex-log-scroll,
.vortex-clear-log-scroll,
.gateway-log-lines,
#sovereign-terminal-logs,
#sovereign-chat-messages,
#sovereign-alert-feed,
#flux-logs-container,
#legal-logs-container,
#resonance-ide-logs,
.vortex-terminal-container,
.gateway-log-panel,
.log-item,
.gateway-log-line,
.phase-decrypt-btn,
.chat-premium-bubble {
  font-weight: 800 !important; /* Make all active telemetry streams extremely bold */
  letter-spacing: 0.5px !important;
}

.log-item.system,
.vortex-clear-log-scroll .log-item.system,
.gateway-log-line {
  font-weight: 800 !important;
}

.log-item.user,
.log-item.droid {
  font-weight: 900 !important;
}

/* Enhance glows and contrasts for terminals */
.vortex-terminal-container,
.vortex-clear-terminal-container,
.gateway-log-panel {
  border-width: 2px !important;
  box-shadow: 0 0 25px rgba(0, 242, 254, 0.25), inset 0 0 15px rgba(0, 242, 254, 0.1) !important;
}

#sovereign-terminal-logs,
#sovereign-chat-messages {
  font-weight: 800 !important;
  color: #e6f0ff !important;
}

/* Highly Interactive Workspace Anchors - override shaky translations/gravity animations */
#app-legendrian-grid,
#app-node-chat,
#app-phase-sync-chat,
#app-vortex-ai,
#app-sovereign-grid {
  animation: none !important;
  transform: none !important;
}
#app-legendrian-grid:hover,
#app-node-chat:hover,
#app-phase-sync-chat:hover,
#app-vortex-ai:hover,
#app-sovereign-grid:hover {
  transform: none !important;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.75), inset 0 0 25px rgba(0, 242, 254, 0.03) !important;
}

/* Stable scrollbar gutters to prevent layout shifts */
#legendrian-jobs-list,
#legendrian-console-feedback {
  scrollbar-gutter: stable;
}
