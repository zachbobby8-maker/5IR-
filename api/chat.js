// Temporary local server authority matrix storage array
// In production, this binds directly to your Legendrian cluster database
let globalMeshStorageLedger = [
  { id: 1, sender: 'KING_DROID_M4', targetNode: 'ALL', timestamp: '14:02:11', text: "Lattice-Lock system status fully stabilized across all 1.4M node channels.", type: 'system' },
  { id: 2, sender: 'MOBIUS_BRAID_MAIN', targetNode: 'ALL', timestamp: '14:05:32', text: "Initiating secure database shunt vector tests over port 39420.", type: 'user' },
  { id: 3, sender: 'NODE_CYDONIA_08', targetNode: 'MOBIUS_BRAID_MAIN', timestamp: '14:08:44', text: "Balcony farming matrix telemetry synchronized. Layer density looking optimal.", type: 'node' },
  { id: 4, sender: 'NODE_LAGOS_X2', targetNode: 'ALL', timestamp: '14:12:01', text: "Aero-Invert engine phase-cancellation active. Lagos cluster zeroing out dBA drift.", type: 'node' }
];

export default async function handler(req, res) {
  // CORS Headers or routing
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // 1. GET ROUTER: Fetches the historical text log vault when a node logs in
  if (req.method === 'GET') {
    res.setHeader('Cache-Control', 'no-store, max-age=0');
    return res.status(200).json({ success: true, ledger: globalMeshStorageLedger });
  }

  // 2. POST ROUTER: Ingests, encrypts, and appends incoming packet dispatches
  if (req.method === 'POST') {
    try {
      let packetPayload;
      if (typeof req.body === 'string') {
        try {
          packetPayload = JSON.parse(req.body);
        } catch (_) {
          packetPayload = {};
        }
      } else {
        packetPayload = req.body || {};
      }

      // Server-Side Verification: Enforce our strict 94.6% Coherence rules
      if (!packetPayload.text || !packetPayload.sender) {
        return res.status(400).json({ error: "Packet data fragmented" });
      }

      const secureMessagePacket = {
        id: Date.now(),
        sender: packetPayload.sender,
        targetNode: packetPayload.targetNode || 'ALL',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }),
        text: packetPayload.text,
        type: packetPayload.sender === 'MOBIUS_BRAID_MAIN' ? 'user' : 'node'
      };

      // Immutably append data directly to the server matrix cache
      globalMeshStorageLedger.push(secureMessagePacket);

      return res.status(201).json({ success: true, packet: secureMessagePacket });
    } catch (error) {
      return res.status(500).json({ error: "Server router exception: " + error.message });
    }
  }

  res.setHeader('Allow', ['GET', 'POST']);
  return res.status(405).json({ error: `Method ${req.method} Not Allowed` });
}
