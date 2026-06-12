/**
 * AI-powered Vortex code analysis service.
 * Uses Gemini 2.5 Flash for structural AST feedback.
 */

const AI_MODEL_ID = '83980b26-79ba-4962-831f-8c1dc91a531a'; // Gemini 2.5 Flash

/**
 * Calls the AI model to analyze pasted source code and return
 * structured feedback in the Sinter OS terminal aesthetic.
 * @param {string} code - Raw source code string
 * @returns {Promise<{report: string, error?: string}>}
 */
export async function runAiVortexAnalysis(code) {
  if (!code || !code.trim()) {
    return { error: 'EMPTY_INPUT_VECTOR' };
  }

  const systemPrompt = `You are VORTEX_AI, a code analysis engine inside SINTER OS V2.
Analyze the provided source code and respond ONLY in this exact format, using uppercase monospace terminal style.
Keep each field to one line. Be terse and technical.

LANGUAGE_DETECTED: <language>
STRUCTURE_CLASS: <e.g. FUNCTIONAL / OOP / MIXED / DECLARATIVE>
PATTERN_FLAGS: <comma-separated patterns found, e.g. RECURSION, CLOSURES, SIDE_EFFECTS>
RISK_VECTORS: <comma-separated risks, e.g. NONE, EVAL_USAGE, MUTATION, ASYNC_LEAK>
REFACTOR_SIGNAL: <one concise recommendation>
COHERENCE_VERDICT: <PASS or FLAG> // <short reason>`;

  try {
    const result = await miniappsAI.callModel({
      modelId: AI_MODEL_ID,
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user',   content: `ANALYZE:\n\`\`\`\n${code.slice(0, 3000)}\n\`\`\`` }
      ],
      timeoutMs: 30000
    });

    const text = miniappsAI.extractText(result).trim();
    if (!text) return { error: 'AI_NULL_RESPONSE' };
    return { report: text };
  } catch (err) {
    const msg = err?.message || '';
    if (msg.includes('sign') || msg.includes('auth')) return { error: 'AUTH_REQUIRED' };
    if (msg.includes('credit'))                        return { error: 'INSUFFICIENT_CREDITS' };
    if (msg.includes('timeout'))                       return { error: 'TIMEOUT_EXCEEDED' };
    return { error: `AI_FAULT: ${msg.slice(0, 80)}` };
  }
}
