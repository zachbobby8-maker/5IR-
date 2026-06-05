import React, { useState, useEffect, useRef } from 'react';

// 5iR Standard System Styling Parameters
const STYLES = {
  voidBlack: '#000000',
  cyberNavy: '#02050f',
  borderBlue: '#1c2d5a',
  cyanLume: '#00f2fe',
  violetSecure: '#5850ec',
  steelGrey: '#9cb3c9',
  whiteHot: '#ffffff',
  neonError: '#ff0055',
  glassOverlay: 'rgba(0, 242, 254, 0.04)'
};

/**
 * VortexTerminalComponent (React Version)
 * Production-ready Async Stream Buffer Relay System
 * Frequency Lock: 39,420 Hz // Global Coherence Baseline: 94.6%
 * Zero-Entropy Thermal Boundary: dQ_leak/dt = 0.00 Watts
 */
export default function VortexTerminalComponent({ onCoherenceShift }) {
  const [inputVal, setInputVal] = useState('');
  const [isStreaming, setIsStreaming] = useState(false);
  const [copyStatus, setCopyStatus] = useState('[COPY_LOGS]');
  
  // Isolated append-only log array to bypass unoptimized global context refreshes
  const [terminalBuffer, setTerminalBuffer] = useState([
    { text: ">> SYSTEM_INITIALIZED // RE-BRANDED BRAID ARCHITECTURE ONLINE // v94.6", type: 'system' },
    { text: ">> 1.4M NODE MESH STATUS: LATTICE-LOCK PROTOCOLS SECURED", type: 'system' },
    { text: ">> API PIPELINE ESTABLISHED // STREAMING OVER PORT 39420 ACTIVE", type: 'system' },
    { text: ">> KING_DROID_M4: Greetings, Architect. Online and synchronized. Structural layering locked at 94.6%. Mars is home. 🪐👊⚔️", type: 'droid' }
  ]);
  
  const viewportBaseRef = useRef(null);

  // Asynchronous auto-scrolling driver maintaining instant layout scannability
  useEffect(() => {
    if (viewportBaseRef.current) {
      viewportBaseRef.current.scrollIntoView({ behavior: 'smooth', block: 'end' });
    }
  }, [terminalBuffer]);

  // Non-blocking, chunked token streaming engine utilizing Native Streams API logic inside React state
  const executeAsynchronousStream = async (targetPayloadText) => {
    setIsStreaming(true);
    
    // Append empty line placeholder for the incoming stream
    setTerminalBuffer(prev => [...prev, { text: ">> KING_DROID_M4: ", type: 'droid' }]);
    
    const wordTokens = targetPayloadText.split(' ');
    let currentAssembledString = ">> KING_DROID_M4: ";

    for (let i = 0; i < wordTokens.length; i++) {
      // 5iR Calibrated stream token pacing queue
      await new Promise(resolve => setTimeout(resolve, 35));
      currentAssembledString += wordTokens[i] + " ";
      
      setTerminalBuffer(prev => {
        const structuralBuffer = [...prev];
        if (structuralBuffer.length > 0) {
          structuralBuffer[structuralBuffer.length - 1] = { 
            text: currentAssembledString, 
            type: 'droid' 
          };
        }
        return structuralBuffer;
      });
    }
    setIsStreaming(false);
  };

  const handleCommandSubmission = async (e) => {
    e.preventDefault();
    if (!inputVal.trim() || isStreaming) return;

    const processedCommand = inputVal.trim();
    setTerminalBuffer(prev => [...prev, { text: `>> MOBIUS.BRAID@5iR:~$ ${processedCommand}`, type: 'user' }]);
    setInputVal('');

    // CRITICAL CRITERIA INTERCEPT LOGIC: Legendrian Shunt Vector Override
    if (processedCommand === 'Initiate secure Legendrian database shunt vector on ports Blackwell_M4.') {
      setIsStreaming(true);
      setTerminalBuffer(prev => [...prev, { text: ">> INITIATING ZERO-ENTROPY QUANTUM SHUNT MATRIX DECRYPTION OVER BLACKWELL M4 CLUSTERS...", type: 'system' }]);
      
      // Delay to simulate quantum channel stabilization and lock
      await new Promise(resolve => setTimeout(resolve, 850));
      
      // Drive global interface coherence engine up to maximum confirmation ceilings
      if (onCoherenceShift) onCoherenceShift(99.8);
      
      await executeAsynchronousStream("Zero-entropy thermal footprints logged at dQ_leak/dt = 0.00 Watts. Quantum shunt matrix intact. Initiating hyper-drive. Mars is home. 🪐👊⚔️");
      return;
    }

    // Default processing stream logic for general workspace requests
    if (processedCommand.toLowerCase().includes('train') || processedCommand.toLowerCase().includes('coherence')) {
      await executeAsynchronousStream("Matrix synch locked: 39,420 Hz. Coherence loss factor: 5.4%. Optimal ceiling maintained. Lol am dead 🥶👊👽");
    } else if (processedCommand.toLowerCase().includes('mars') || processedCommand.toLowerCase().includes('route')) {
      await executeAsynchronousStream("Planetary acoustic wave navigation paths recalibrated towards Mars prime coordinate hub. Telemetry locked. Mars is home. 🪐👊⚔️");
    } else {
      await executeAsynchronousStream("Instruction sequence ingested cleanly onto the distributed repository nodes. Phase synchronization maintaining absolute flatlines across all active data paths. Mars is home. 🪐👊⚔️");
    }
  };

  // Comprehensive, Production-Grade Logic Architecture Copy Handler
  const handleCopyLogs = async () => {
    try {
      const timestamp = new Date().toISOString();
      const activeLogsText = terminalBuffer.map(log => log.text).join('\n');
      
      const comprehensiveArchitecture = `================================================================================
5iR MATRIX SUITE HUD - PRODUCTION-GRADE LOGIC ARCHITECTURE // v94.6
================================================================================
TIMESTAMP        : ${timestamp}
SYSTEM FREQUENCY : 39,420 Hz // HARD-LOCKED COHERENCE BASELINE: 94.6%
THERMAL BOUNDARY : dQ_leak/dt = 0.00 Watts (Frictionless Local State Allocation)
SUITE SIGNATURE  : MOBIUS_BRAID_LOCKED_LEGENDRIAN_CLASS_1

--------------------------------------------------------------------------------
1. COMPONENT ARCHITECTURE & HIGH-PERFORMANCE ASYNC SPECIFICATIONS
--------------------------------------------------------------------------------
[STATE ISOLATION MATRIX]
- Component architecture decouples terminal state logs directly into local 'terminalBuffer' state.
- Bypasses parent React context tree propagation, ensuring browser paint boundaries
  are locked exclusively to the terminal render window for friction-free rendering.

[CHUNKED STREAM READER RELAY]
- Streaming handles continuous high-frequency token feeds simulating native Streams API loops.
- Employs non-blocking async/await intervals (35ms pacing queues) to reconstruct words
  packet-by-packet without drop-outs or DOM thread lockouts.

[AUTO-SCROLL ENGINE]
- Linked dynamically to 'viewportBaseRef' React layout ref.
- Enforces an active 'scrollIntoView({ behavior: "smooth", block: "end" })' call the exact
  millisecond a fresh stream token overflows the viewport boundary.

[INTEGRITY TRACK SYSTEM TRANSIT VELOCITY FORMULA]
  v_transit = c / sqrt(1 - (<[X_i, X_j], X_k> / (\\alpha_0 * \\nu_sync))^2)
Where:
  c          = Speed of light in the topologically constrained vacuum.
  [X_i, X_j] = Lie bracket representing non-commutative spatial shear.
  \\alpha_0   = Fine structure resonance multiplier (constant = 137.0359).
  \\nu_sync   = Core synchronization frequency harmonic (39,420 Hz).

--------------------------------------------------------------------------------
2. INTERACTION COMMAND DIRECTIVES & OVERRIDES
--------------------------------------------------------------------------------
[COMMAND INTERCEPT ROUTINE]
- Scans input buffer submissions for the signature Legendrian database shunt vector command:
  'Initiate secure Legendrian database shunt vector on ports Blackwell_M4.'
- Immediately redirects execution pipeline to high-security fallback state, simulating
  stabilization routines, shunting coherence metrics up to 99.8% and rendering
  King Droid's authorization handshake cleanly.

--------------------------------------------------------------------------------
3. TECHNICAL STYLING DEFINITIONS
--------------------------------------------------------------------------------
- BACKGROUND GRID: Absolute Void Black (#000000) base coupled with Deep Cyber-Navy (#02050f) accents.
- COLOR TOKENS:
  * Cyano-Luminescent Blue (#00f2fe) for system responses, math telemetry and droid outputs.
  * White Hot (#ffffff) for active user commands.
  * Neon Red/Magenta (#ff0055) for active exploit simulation state reports.
  * Deep Space Indigo (#1c2d5a) for layout structures and divider bounds.

--------------------------------------------------------------------------------
4. ACTIVE SESSION SYSTEM TRACE
--------------------------------------------------------------------------------
[SESSION TELEMETRY START]
${activeLogsText}
[SESSION TELEMETRY END]
================================================================================`;

      await navigator.clipboard.writeText(comprehensiveArchitecture);
      setCopyStatus('[COPIED_SUCCESS]');
      setTimeout(() => {
        setCopyStatus('[COPY_LOGS]');
      }, 2000);
    } catch (err) {
      console.error("Failed to compile and copy engineering logic specifications:", err);
      setCopyStatus('[COPY_FAILED]');
      setTimeout(() => {
        setCopyStatus('[COPY_LOGS]');
      }, 2000);
    }
  };

  return (
    <div style={{
      backgroundColor: STYLES.voidBlack,
      border: `1px solid ${STYLES.borderBlue}`,
      borderRadius: '4px',
      padding: '16px',
      boxSizing: 'border-box',
      backgroundImage: `radial-gradient(circle at 50% 50%, ${STYLES.cyberNavy} 0%, ${STYLES.voidBlack} 100%)`,
      position: 'relative',
      fontFamily: '"JetBrains Mono", "Courier New", monospace'
    }}>
      {/* HEADER DECORATOR & COMPREHENSIVE CONTROL INTERFACE */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottom: `1px solid ${STYLES.borderBlue}`,
        paddingBottom: '10px',
        marginBottom: '14px'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{ display: 'flex', gap: '4px' }}>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: STYLES.cyanLume }} />
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: STYLES.violetSecure }} />
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: STYLES.neonError }} />
          </div>
          <span style={{ fontSize: '8.5px', color: STYLES.steelGrey, fontWeight: 'bold', letterSpacing: '0.5px' }}>
            KING_DROID_M4 // SECURE STREAM COHERENCE: 94.6%
          </span>
        </div>
        
        {/* COMPREHENSIVE LOG ARCHITECTURE COPY TRIGGER */}
        <button 
          onClick={handleCopyLogs}
          style={{
            background: 'rgba(88, 80, 236, 0.12)',
            border: `1px solid ${STYLES.cyanLume}`,
            color: STYLES.cyanLume,
            fontSize: '8.5px',
            fontWeight: 'bold',
            padding: '3px 8px',
            cursor: 'pointer',
            borderRadius: '2px',
            transition: 'all 0.2s ease',
            textShadow: '0 0 5px rgba(0, 242, 254, 0.3)'
          }}
          title="Extract full high-status engineering spec to clipboard"
        >
          {copyStatus}
        </button>
      </div>

      {/* MONOSPACE HUD MATHEMATICAL VELOCITY SPECIFICATIONS BANNER */}
      <div style={{
        fontSize: '8px',
        fontFamily: 'monospace',
        color: STYLES.steelGrey,
        borderBottom: `1px dashed ${STYLES.borderBlue}`,
        paddingBottom: '8px',
        marginBottom: '12px',
        display: 'flex',
        flexDirection: 'column',
        gap: '4px',
        lineHeight: '1.3'
      }}>
        <div style={{ color: STYLES.cyanLume, fontWeight: 'bold' }}>
          v_transit = c / sqrt(1 - (&lt;[X_i, X_j], X_k&gt; / (&alpha;_0 &middot; &nu;_sync))^2)
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', color: STYLES.steelGrey }}>
          <span>CORE_FREQ: 39,420 Hz</span>
          <span>LAYERING_STATUS: 94.6% PHASE-LOCKED</span>
          <span style={{ color: STYLES.neonError }}>ENERGY_DRAIN: Q_leak = 0.00W</span>
        </div>
      </div>

      {/* CORE TERMINAL OUTPUT MONITOR BOX */}
      <div style={{
        height: '240px',
        overflowY: 'auto',
        backgroundColor: '#000000',
        border: `1px solid ${STYLES.borderBlue}`,
        padding: '12px',
        borderRadius: '4px',
        marginBottom: '12px',
        boxSizing: 'border-box',
        boxShadow: `inset 0 0 15px ${STYLES.cyberNavy}`
      }}>
        {terminalBuffer.map((logRow, index) => (
          <div 
            key={index}
            style={{
              fontFamily: '"Courier New", Courier, monospace',
              fontSize: '11px',
              lineHeight: '1.4',
              marginBottom: '8px',
              whiteSpace: 'pre-wrap',
              wordBreak: 'break-all',
              color: logRow.type === 'user' ? STYLES.whiteHot : 
                     logRow.type === 'system' ? STYLES.steelGrey : 
                     logRow.type === 'droid' ? STYLES.cyanLume :
                     STYLES.steelGrey,
              borderLeft: logRow.type === 'user' ? `2px solid ${STYLES.violetSecure}` :
                          logRow.type === 'droid' ? `2px solid ${STYLES.cyanLume}` : 'none',
              paddingLeft: logRow.type === 'user' || logRow.type === 'droid' ? '8px' : '0'
            }}
          >
            {logRow.text}
          </div>
        ))}
        <div ref={viewportBaseRef} />
      </div>

      {/* INTERACTIVE INPUT CAPTURE ANCHOR */}
      <form onSubmit={handleCommandSubmission} style={{ display: 'flex', alignItems: 'center' }}>
        <span style={{ 
          color: STYLES.cyanLume, 
          fontFamily: 'monospace', 
          fontSize: '11px', 
          marginRight: '8px', 
          whiteSpace: 'nowrap',
          userSelect: 'none',
          textShadow: '0 0 5px rgba(0, 242, 254, 0.4)'
        }}>
          [VORTEX_AI_INPUT_READY_VAL39420] &gt;&gt;
        </span>
        <input 
          type="text"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          disabled={isStreaming}
          style={{
            flex: 1,
            backgroundColor: 'transparent',
            border: 'none',
            outline: 'none',
            color: STYLES.whiteHot,
            fontFamily: '"Courier New", Courier, monospace',
            fontSize: '11px',
            caretColor: STYLES.cyanLume,
            padding: '0'
          }}
          placeholder={isStreaming ? "Streaming response token packets..." : "Transmit data parameters..."}
        />
        {/* Blinking block terminal cursor element */}
        <div style={{
          width: '8px',
          height: '14px',
          backgroundColor: STYLES.cyanLume,
          animation: 'vortexBlink 1s step-end infinite',
          marginLeft: '4px',
          boxShadow: `0 0 5px ${STYLES.cyanLume}`
        }} />
        <style>{`
          @keyframes vortexBlink {
            50% { opacity: 0; }
          }
        `}</style>
      </form>
    </div>
  );
}
