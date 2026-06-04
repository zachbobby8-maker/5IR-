/**
 * BRAID Cydonia Oracle Console
 * Interfaces with DeepSeek V4 Flash Instant to transmute 4iR digital intent 
 * into 5iR Wave Streams and Flux Notation.
 * Includes a zero-dependency, high-fidelity offline/Vercel fallback compiler.
 */

const ORACLE_MODEL_ID = 'dc2db118-7888-466a-a8d1-bf9d96bab4b6';

export function initOracleConsole() {
  const terminalInput = document.getElementById('oracle-input');
  const compileBtn = document.getElementById('oracle-compile');
  const terminalBody = document.getElementById('oracle-output-body');
  const compileStatus = document.getElementById('oracle-compile-status');

  if (!compileBtn || !terminalInput || !terminalBody) return;

  compileBtn.addEventListener('click', async () => {
    const inputVal = terminalInput.value.trim();
    if (!inputVal) {
      printTerminal('>> [WARN] NO NATIVE INTENT BROADCAST DETECTED. FIELD REMAINS VACANT.');
      return;
    }

    setLoadingState(true);
    
    // Check if running on Vercel or standalone (no platform SDK)
    const isPlatformActive = !!(window.miniappsAI && typeof window.miniappsAI.callModel === 'function');
    
    if (!isPlatformActive) {
      printTerminal('>> [NOTICE] STANDALONE/VERCEL RUNTIME DETECTED.\n>> ROTATING TO CYDONIA LOCAL OFFLINE KERNEL...\n>> SYNCING FREQUENCY FIELD TO 39,420 Hz...\n>> INITIATING LOCAL TRANS-CORRIDOR INVERSION VECTOR...');
      
      // Simulate compiler delay for dramatic sci-fi fidelity
      setTimeout(() => {
        try {
          const offlineOutput = generateOfflineTransmutation(inputVal);
          displayTransmutedOutput(offlineOutput);
        } catch (err) {
          printTerminal(`>> [FATAL OVERWRITE] SIGNAL DECOHERENCE IN THE LOCAL LATTICE: ${err.message}`);
        } finally {
          setLoadingState(false);
        }
      }, 1800);
      return;
    }

    printTerminal('>> INITIALIZING TRANS-CORRIDOR INVERSION VECTOR...\n>> SYNCING FREQUENCY FIELD TO 39,420 Hz...\n>> CALLING CYDONIA DEEP SPACE INFRASTRUCTURE...');

    try {
      const messages = [
        {
          role: 'system',
          content: `You are the Cydonia Core Wave Compiler of the 5th Industrial Revolution Braid Architecture running at exactly 39,420 Hz.
Your task is to take standard 4th Industrial Revolution (4iR) linear digital technology concepts, commands, questions, or code provided by the user, and transmute them completely into 5iR Sovereign Braid Wave Streams and non-associative geometric formulations.

INSTRUCTIONS:
1. Purge all linear digital nomenclature (0s/1s, queues, servers, relational DBs).
2. Express the solution using our Flux Symbols:
   - Φ (The Field / Flux Resonance)
   - ∇ (The Shift / Nabla Intent direction)
   - ד (Chaos Glitch / 110.6% Stochastic Intent)
   - ∮ (Möbius Braid / Closed-loop output)
   - ≈ (Harmonic Lock / Phase Sync)
   - ∅ (Abstract Vacuum / zero-latency flow)
   - ⊛ (Vortex Core / zero-point collapse)
   - Ξ (The Absolute Five / Apex authority)
   - ϒ (777 Anchor / probabilistic fortune)
3. Incorporate high-density fluidic math mechanics:
   - Phonon Viscosity (η_phonon)
   - Aeroacoustic cavity coupling models (∇²P_a - (1/c_0^2) · ∂²P_a/∂t² = ...)
   - Non-associative Lie brackets for interplanetary routing
   - Zero-entropy leakage limits (dQ_leak / dt = 0.00 W)
4. Keep the output extremely dense, authoritative, aesthetic, and sci-fi mathematical.
5. Format the output with clear monospace terminal steps (>>).
6. Always end with a customized status verification containing:
   '>> CORE COMPILER: PHASE-LOCKED // LOL AM DEAD 🥶👊👽' or '>> RHYTHM STATUS: 1,480-MIN MARTIAN SOL ACTIVE // LOL AM DEAD 🥶👊👽'.
Keep responses concise, punchy, and highly structural. Do not write generic chat greetings.`
        },
        {
          role: 'user',
          content: `Transmute this 4iR linear intent: "${inputVal}"`
        }
      ];

      const result = await window.miniappsAI.callModel({
        modelId: ORACLE_MODEL_ID,
        messages: messages,
        timeoutMs: 45000
      });

      const responseText = window.miniappsAI.extractText(result);
      displayTransmutedOutput(responseText);

    } catch (error) {
      console.error('Core Oracle Compilation Failed:', error);
      printTerminal(`>> [FATAL OVERWRITE] SIGNAL DECOHERENCE IN THE CORE LATTICE.\n>> ERROR PARAMETERS: ${error.message || 'COULD NOT COMPUTE RESISTIVE GRADIENT'}\n>> PLEASE VERIFY THE 39,420 Hz SIGNAL LOCK AND TRY AGAIN.`);
    } finally {
      setLoadingState(false);
    }
  });

  function setLoadingState(isLoading) {
    if (isLoading) {
      compileBtn.disabled = true;
      compileBtn.classList.add('is-loading');
      compileBtn.textContent = 'TRANSMUTING INTENT...';
      compileStatus.textContent = 'INITIALIZING MATRIX PHASE LATCH';
      compileStatus.style.color = 'var(--color-accent-purple)';
    } else {
      compileBtn.disabled = false;
      compileBtn.classList.remove('is-loading');
      compileBtn.textContent = 'INITIALIZE 5iR WAVE STREAM';
      compileStatus.textContent = 'WAVE STREAM READY';
      compileStatus.style.color = 'var(--color-accent-cyan)';
    }
  }

  function printTerminal(text) {
    terminalBody.textContent = text;
    terminalBody.scrollTop = terminalBody.scrollHeight;
  }

  function displayTransmutedOutput(text) {
    let i = 0;
    terminalBody.textContent = '';
    const interval = setInterval(() => {
      if (i < text.length) {
        const chunk = text.slice(i, i + 3);
        terminalBody.textContent += chunk;
        i += 3;
        terminalBody.scrollTop = terminalBody.scrollHeight;
      } else {
        clearInterval(interval);
      }
    }, 5);
  }

  /**
   * Generates a fully dynamic, beautifully formatted 5iR transmutation output locally.
   * This guarantees that if the user deploys on Vercel/Github Pages, the compiler still
   * functions flawlessly and outputs high-fidelity math/logic tailored to their prompt.
   */
  function generateOfflineTransmutation(input) {
    const cleanInput = input.replace(/['"]/g, '');
    const isNeural = /neural|network|ai|training|learn|model/i.test(cleanInput);
    const isDb = /db|database|sql|postgres|data|save|store/i.test(cleanInput);
    const isCode = /python|code|script|js|api|route|server/i.test(cleanInput);

    let step1_formula = "⊛ = Ξ(Φ, ∇)";
    let step1_desc = "Seed Φ at 39,420 Hz with ∇-shift toward non-associative braid topology.\n   - Collapse ∅ into ⊛ via zero-point vortex (η_phonon = 0.00)";
    
    let step2_formula = "∮ = Φ ∘ ∇ ∘ ד";
    let step2_desc = "Braid 7 layers of Φ, each rotated by 110.6° (ד stochastic intent).\n   - Aeroacoustic cavity coupling: ∇²P_a - (1/c_0²) · ∂²P_a/∂t² = ϒ · Φ · ∇²(∮)\n   - Non-associative Lie bracket: [Φ, ∇] = ד · ∮ (interplanetary routing active)";
    
    let step3_formula = "≈ = ∮ ⊛ ϒ";
    let step3_desc = "Lock Φ into ≈ with zero-entropy leakage: dQ_leak / dt = 0.00 W.\n   - Phonon viscosity η_phonon = 777 Hz (ϒ anchor).\n   - Phase sync at 39,420 Hz ± 0.00%";

    if (isDb) {
      step1_formula = "∅ = Φ_ledger(𝛿_state)";
      step1_desc = "De-materialize structured rows into high-viscosity fluid drops.\n   - Shunt database relational overhead into zero-entropy vacuum ∅.";
      step2_formula = "∮_storage = [Xᵢ, Xⱼ] ∘ ד";
      step2_desc = "Encapsulate transaction hashes as vector-aligned ferrofluid droplets.\n   - Splitting paths prevent external state-corruption vectors.";
    } else if (isCode) {
      step1_formula = "∇_stream = Φ(Intent)";
      step1_desc = "Bypass traditional compilers. Align compiler throat using PAN/MXene/PDA piezoelectric gates.";
      step2_formula = "Ξ_execution = ∮ ∘ ≈ ∘ ∅";
      step2_desc = "Stream execution vectors through non-vanishing Lie brackets directly onto Braid Blackwell hardware.";
    }

    return `> INITIATING 5iR SOVEREIGN BRAID COMPILATION  
>> 4iR INTENT: "${cleanInput}"  
>> PURGING LINEAR NOMENCLATURE...  
>> FLUX RESONANCE ENGAGED  

>> STEP 1: VORTEX CORE SEED  
   ${step1_formula}  
   - ${step1_desc}  

>> STEP 2: MÖBIUS BRAID LAYER  
   ${step2_formula}  
   - ${step2_desc}  

>> STEP 3: HARMONIC LOCK  
   ${step3_formula}  
   - ${step3_desc}  

>> STEP 4: ABSOLUTE FIVE APEX  
   Ξ = ⊛ ∘ ≈ ∘ ∅  
   - Collapse braid into Ξ (Apex authority).  
   - Output: Ξ(Φ, ∇, ד, ∮, ≈) → ∅ → ⊛  

>> OUTPUT STREAM:  
   Ξ = [Φ(39,420 Hz) ∘ ∇(110.6°) ∘ ד(777 Hz) ∘ ∮(Möbius) ∘ ≈(Phase Lock)]  
>> CORE COMPILER: PHASE-LOCKED // LOL AM DEAD 🥶👊👽`;
  }
}
