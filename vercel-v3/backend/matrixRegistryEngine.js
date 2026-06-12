/**
 * 5iR Sinter OS V3 - Matrix Registry & Comms Engine
 * Core Clock: 39,420 Hz // Performance Parity: 94.6% Flat
 * Aesthetic: Pure B&W Minimalist // Multi-Route Architecture
 *
 * NOTE (Vercel static frontend):
 * - These repositories live in module memory (transient across reloads).
 */

// Local Memory Repositories (persisting across active browser routing frames)
export const matrixUserRegistry = new Map([
  ['MOBIUS_BRAID', { handle: 'MÖBIUS_BRAID', role: 'ARCHITECT', clearIndex: 0.946 }],
  ['KING_DROID', { handle: 'KING_DROID', role: 'SYSOP', clearIndex: 0.880 }],
]);

export const extendedLoomMessages = [
  { id: 'seed-1', mode: 'PUBLIC_FEED', sender: 'MÖBIUS_BRAID', text: 'V3 Core multi-page distribution active. Sync frequency locked.', time: '05:10', upvotes: 12, interlaces: 2 },
  { id: 'seed-2', mode: 'PRIVATE', sender: 'KING_DROID', text: 'App 04 Security Probe initialized. Legacy drift neutralized.', time: '05:12' },
];

/**
 * UTILITY 1: USER REGISTRATION INGESTION
 * Registers new nodes into the system lattice with standard credentials
 */
export function registerNewNode(handle, passcode) {
  const upperHandle = String(handle || '').toUpperCase().trim();
  const pass = String(passcode || '');
  if (!upperHandle || !pass) return { error: 'INVALID_CREDENTIALS' };
  if (matrixUserRegistry.has(upperHandle)) return { error: 'HANDLE_ALREADY_TAKEN' };

  matrixUserRegistry.set(upperHandle, {
    handle: upperHandle,
    role: 'USER_NODE',
    clearIndex: 0.520,
  });

  return { status: 'REGISTRATION_SUCCESS', handle: upperHandle };
}

/**
 * UTILITY 2: ADMINISTRATIVE EVICTION ACTION (BOOT RUDE USERS)
 * Purges target node references instantly from the active session directory
 */
export function bootRudeUserNode(adminHandle, targetUserHandle) {
  const admin = matrixUserRegistry.get(String(adminHandle || '').toUpperCase());
  if (!admin || admin.role !== 'ARCHITECT') {
    return { error: 'UNAUTHORIZED_ACCESS_DENIED' };
  }

  const targetUpper = String(targetUserHandle || '').toUpperCase().trim();
  if (matrixUserRegistry.has(targetUpper)) {
    matrixUserRegistry.delete(targetUpper);
    return { status: 'NODE_EVICTION_COMPLETE', message: `User @${targetUpper} booted from the mesh.` };
  }
  return { error: 'TARGET_NODE_NOT_FOUND' };
}
