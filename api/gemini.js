/**
 * Vercel Serverless Function: /api/gemini
 *
 * Usage (frontend):
 *   const r = await fetch('/api/gemini', { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify({ prompt }) })
 *
 * Vercel env vars:
 *   - GEMINI_API_KEY (required)
 *   - GEMINI_MODEL (optional, default: gemini-1.5-flash)
 */

module.exports = async function handler(req, res) {
  try {
    if (req.method !== 'POST') {
      res.status(405).json({ error: 'METHOD_NOT_ALLOWED' });
      return;
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      res.status(500).json({ error: 'MISSING_GEMINI_API_KEY' });
      return;
    }

    // User requested Flash: we hard-prefer Flash models and refuse non-Flash overrides.
    const envModel = process.env.GEMINI_MODEL;
    const model = envModel && /flash/i.test(envModel) ? envModel : 'gemini-1.5-flash';

    const body = typeof req.body === 'string' ? JSON.parse(req.body) : (req.body || {});
    const prompt = String(body.prompt || '').trim();
    const system = body.system ? String(body.system).trim() : '';

    if (!prompt) {
      res.status(400).json({ error: 'EMPTY_PROMPT' });
      return;
    }

    const url = `https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(model)}:generateContent?key=${encodeURIComponent(apiKey)}`;

    // Gemini API: keep it simple and stable.
    // Ref: https://ai.google.dev/api/rest/v1beta/models/generateContent
    const payload = {
      ...(system
        ? {
            systemInstruction: {
              role: 'system',
              parts: [{ text: system }],
            },
          }
        : {}),
      contents: [
        {
          role: 'user',
          parts: [{ text: prompt }],
        },
      ],
      generationConfig: {
        temperature: typeof body.temperature === 'number' ? body.temperature : 0.2,
        maxOutputTokens: typeof body.maxOutputTokens === 'number' ? body.maxOutputTokens : 800,
      },
    };

    const upstream = await fetch(url, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(payload),
    });

    if (!upstream.ok) {
      const errText = await upstream.text().catch(() => '');
      res.status(502).json({ error: 'GEMINI_UPSTREAM_ERROR', status: upstream.status, detail: errText.slice(0, 1200) });
      return;
    }

    const data = await upstream.json();

    // Extract text from first candidate
    const parts = data?.candidates?.[0]?.content?.parts;
    const text = Array.isArray(parts)
      ? parts.map((p) => (p && typeof p.text === 'string' ? p.text : '')).join('')
      : '';

    res.status(200).json({ text: text || '', raw: body.returnRaw ? data : undefined });
  } catch (err) {
    res.status(500).json({ error: 'SERVER_ERROR', message: err?.message || String(err) });
  }
}
