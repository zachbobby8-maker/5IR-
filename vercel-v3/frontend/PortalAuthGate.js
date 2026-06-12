import { matrixUserRegistry, registerNewNode } from '../backend/matrixRegistryEngine.js';

function el(tag, attrs = {}, children = []) {
  const node = document.createElement(tag);
  for (const [k, v] of Object.entries(attrs)) {
    if (k === 'class') node.className = v;
    else if (k === 'text') node.textContent = v;
    else if (k.startsWith('on') && typeof v === 'function') node.addEventListener(k.slice(2).toLowerCase(), v);
    else if (v !== undefined && v !== null) node.setAttribute(k, String(v));
  }
  for (const c of children) node.append(c);
  return node;
}

export function createPortalAuthGate({ onLoginSuccess }) {
  let isSignUp = false;
  let status = '// Enforcing system perimeter boundary.';

  const handleInput = el('input', {
    type: 'text',
    placeholder: 'INPUT_NODE_HANDLE',
    autocomplete: 'off',
    required: 'true',
    'aria-label': 'Handle',
  });

  const passInput = el('input', {
    type: 'password',
    placeholder: 'ARCHITECT_SECURITY_KEY',
    autocomplete: 'off',
    required: 'true',
    'aria-label': 'Passcode',
  });

  const statusBox = el('div', { class: 'console', text: status });

  const title = el('div', { class: 'eyebrow', text: '5iR_SINTER_OS // PROTOCOL_V3' });
  const subtitle = el('div', { class: 'subtitle', text: 'DUAL-MODE AUTH GATE // SIGNUP + LOGIN' });
  const modeH = el('div', { class: 'subtitle', style: 'margin-top:10px;', text: 'SECURE_GATEWAY_AUTH' });

  const demoBtn = el('button', {
    type: 'button',
    class: 'btn-ghost',
    text: '[ LOAD_DEMO_SIGNAL // MOBIUS_ACCESS ]',
    onclick: () => {
      handleInput.value = 'MOBIUS_BRAID';
      passInput.value = 'MOBIUS_39420';
      statusBox.textContent = '[ DEMO_SIGNAL_LOADED ]: MOBIUS credentials injected.';
    },
  });

  const submitBtn = el('button', { type: 'submit', class: 'btn-primary', text: 'INITIATE_HANDSHAKE' });

  const link = el('div', {
    class: 'link',
    role: 'button',
    tabindex: '0',
    text: 'Fresh Operator Node? Sign Up here',
  });

  function rerenderMode() {
    modeH.textContent = isSignUp ? 'NEW_NODE_REGISTRATION' : 'SECURE_GATEWAY_AUTH';
    submitBtn.textContent = isSignUp ? 'REGISTER_NODE_BLOCK' : 'INITIATE_HANDSHAKE';
    link.textContent = isSignUp ? 'Already mapped? Switch to Login' : 'Fresh Operator Node? Sign Up here';
  }

  async function handleAuthAction(e) {
    e.preventDefault();
    const cleanHandle = handleInput.value.toUpperCase().trim();
    const pass = passInput.value;

    if (isSignUp) {
      const signup = registerNewNode(cleanHandle, pass);
      if (signup.error) {
        statusBox.textContent = `[REG_ERROR]: ${signup.error}`;
        return;
      }
      statusBox.textContent = `[REG_OK]: Registered @${cleanHandle}. Toggle mode to Login.`;
      isSignUp = false;
      rerenderMode();
      passInput.value = '';
      return;
    }

    // Architect override
    if (cleanHandle === 'MOBIUS_BRAID' && pass === 'MOBIUS_39420') {
      onLoginSuccess?.({ handle: 'MÖBIUS_BRAID', role: 'ARCHITECT', clearIndex: 0.946 });
      return;
    }

    if (matrixUserRegistry.has(cleanHandle)) {
      onLoginSuccess?.(matrixUserRegistry.get(cleanHandle));
      return;
    }

    statusBox.textContent = '[AUTH_ERROR]: Invalid credentials signature matching matrix indexes.';
  }

  link.addEventListener('click', () => {
    isSignUp = !isSignUp;
    rerenderMode();
  });
  link.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      isSignUp = !isSignUp;
      rerenderMode();
    }
  });

  const form = el('form', { style: 'display:flex;flex-direction:column;gap:10px;', onsubmit: handleAuthAction }, [
    el('div', {}, [el('label', { text: 'NODE_HANDLE' }), handleInput]),
    el('div', {}, [el('label', { text: 'SECURITY_KEY' }), passInput]),
    demoBtn,
    submitBtn,
  ]);

  const card = el('div', { class: 'card' }, [title, subtitle, modeH, form, link, statusBox]);
  rerenderMode();

  return card;
}
