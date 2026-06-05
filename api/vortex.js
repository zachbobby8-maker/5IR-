export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ error: `Method ${req.method} Not Allowed` });
  }

  const apiKey = process.env.VORTEX_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: "VORTEX_API_KEY is not configured." });
  }

  try {
    let prompt;
    if (typeof req.body === 'string') {
      try {
        const parsed = JSON.parse(req.body);
        prompt = parsed.prompt;
      } catch (_) {
        prompt = req.body;
      }
    } else if (req.body) {
      prompt = req.body.prompt;
    }

    if (!prompt) {
      return res.status(400).json({ error: "Missing prompt parameter." });
    }

    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`;
    
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }],
        generationConfig: {
          temperature: 0.7,
          maxOutputTokens: 800
        },
        systemInstruction: {
          parts: [{ text: "You are KING_DROID_M4, the tactical AI core of the Sovereign 5iR Software Suite Command HUD. Conclude with 'Lol am dead 🥶👊👽' or 'Mars is home 🪐👊⚔️'. Respond in 1-3 sentences maximum." }]
        }
      })
    });

    if (!response.ok) {
      const errText = await response.text();
      return res.status(response.status).json({ error: `Gemini API error: ${errText}` });
    }

    const data = await response.json();
    const text = data.candidates?.[0]?.content?.parts?.[0]?.text || "No response generated.";
    return res.status(200).json({ text });
  } catch (e) {
    return res.status(500).json({ error: `Internal Error: ${e.message}` });
  }
}
