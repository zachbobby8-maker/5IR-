import { extendedLoomMessages } from '../backend/matrixRegistryEngine.js';

function el(tag, attrs = {}, children = []) {
  const node = document.createElement(tag);
  for (const [k, v] of Object.entries(attrs)) {
    if (k === 'class') node.className = v;
    else if (k === 'text') node.textContent = v;
    else if (k === 'html') node.innerHTML = v;
    else if (k === 'style') node.style.cssText = v;
    else if (k.startsWith('on') && typeof v === 'function') node.addEventListener(k.slice(2).toLowerCase(), v);
    else if (v !== undefined && v !== null) node.setAttribute(k, String(v));
  }
  for (const c of children) node.append(c);
  return node;
}

function nowHHMM() {
  return new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false });
}

function makeId() {
  try { return crypto.randomUUID(); } catch { return `pkt-${Date.now()}-${Math.random().toString(16).slice(2)}`; }
}

function vortexMinifyPacket(text) {
  return String(text ?? '')
    .replace(/\r\n/g, '\n')
    .split('\n')
    .map((l) => l.trim())
    .filter(Boolean)
    .join(' ')
    .replace(/\s+/g, ' ')
    .trim();
}

const CHANNELS = [
  { id: 'PRIVATE', label: '⌬ PRIVATE NODES (TELEGRAM)' },
  { id: 'PUBLIC_FEED', label: '⌬ BROADCAST STRANDS (X_FEED)' },
  { id: 'SYNDICATES', label: '⌬ SYNDICATE GROUPS (FB)' },
];

export function createNodeLoomChatExtended({ currentUser, chatState }) {
  if (!chatState.messages) chatState.messages = extendedLoomMessages.slice();
  if (!chatState.mode) chatState.mode = 'PRIVATE';
  if (!chatState.syndicateId) chatState.syndicateId = 'CORE_ARCHIVE';
  if (chatState.profileTag === undefined) chatState.profileTag = '';

  // Stream frame
  if (!chatState._seen) chatState._seen = new Set(chatState.messages.map((m) => m.id));

  if (!chatState._bcTried) {
    chatState._bcTried = true;
    try {
      chatState._bc = new BroadcastChannel('sinter_loom_stream_v3');
      chatState._bc.onmessage = (evt) => {
        const payload = evt?.data;
        if (!payload || payload.kind !== 'loom_packet_v3') return;
        const p = payload.packet;
        if (!p || !p.id || chatState._seen.has(p.id)) return;
        chatState._seen.add(p.id);
        chatState.messages = [p, ...chatState.messages].slice(0, 800);
        rerender();
      };
    } catch {
      chatState._bc = null;
    }

    if (!chatState._teardownBound) {
      chatState._teardownBound = true;
      const teardown = () => {
        try { chatState._bc?.close?.(); } catch {}
        chatState._bc = null;
        chatState.messages = [];
        chatState._seen?.clear?.();
      };
      window.addEventListener('pagehide', teardown);
      window.addEventListener('beforeunload', teardown);
    }
  }

  function broadcast(packet) {
    try { chatState._bc?.postMessage?.({ kind: 'loom_packet_v3', packet }); } catch {}
  }

  const root = el('div');

  const header = el('div', {}, [
    el('h3', { style: 'margin:0 0 10px;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.04em;', text: '[ APP_05 // EXTENDED_MATRIX_LOOM_GROUP_CHAT ]' }),
    el('div', { class: 'subtitle', style: 'text-align:left;margin:0 0 12px;', text: `ACTIVE_NODE: @${currentUser.handle} // MODE: ${chatState.mode}` }),
  ]);

  const directives = el('details', { class: 'details' }, [
    el('summary', { text: 'LOOM_OPERATING_DIRECTIVES // CHANNEL_STACK' }),
    el('div', { class: 'item' }, [
      el('div', { class: 'it-title', text: '⌬ 1. ZERO-RESIDUAL PRIVATE NODES (TRANSIENT RAM)' }),
      el('div', { class: 'it-body', text: "Packets live in transient memory arrays only. Text blocks are instantly minified via our internal Vortex Engine and completely self-destruct from the client's local RAM the exact frame the observer closes the tab window, ensuring a perfect zero residual footprint." }),
    ]),
    el('div', { class: 'item' }, [
      el('div', { class: 'it-title', text: '⌬ 2. WHATSAPP-GRADE HIGH-CONCURRENCY STREAMING (FRICTIONLESS GROUP NODES)' }),
      el('div', { class: 'it-body', text: 'Group chats operate as high-performance distributed channel blocks. Instead of standard notification polling which causes system drag, data updates stream through an un-throttled real-time connection frame, dropping lookup latency down to 0.0002 ms and maintaining absolute flat thermal energy dissipation (dQ_leak/dt = 0.00 Watts).' }),
    ]),
    el('div', { class: 'item' }, [
      el('div', { class: 'it-title', text: '⌬ 3. X-STYLE PUBLIC BROADCAST STRINGS & THREADS (THE FEED LAYER)' }),
      el('div', { class: 'it-body', text: 'Nodes can change their visibility setting to Public Broadcast Mode. This turns their chat channel into a sovereign global thread stream that can be cited and shared across the entire 1.4M Node Mesh. Other nodes can “Interlace” (Retweet) or up-vote the content to boost its global visibility ranking.' }),
    ]),
    el('div', { class: 'item' }, [
      el('div', { class: 'it-title', text: '⌬ 4. FACEBOOK-GRADE GROUP SYNDICATES & LONG-FORM PROFILES' }),
      el('div', { class: 'it-body', text: 'Architects can group individual chat strands to build complex Syndicates. This acts as a highly organized space for long-form documentation, community management, and technical asset logs, allowing teams to pool computational power to handle massive work-unit tasks.' }),
    ]),
  ]);

  const sidebar = el('div', { class: 'loom-sidebar' });

  const telemetry = el('div', { class: 'box' }, [
    el('div', { class: 'box-head', text: 'LOOM_SIGNALS' }),
    el('div', { text: 'COMMS_CLOCK: 39,420 Hz' }),
    el('div', { text: 'LATENCY_CAP: 0.0002 ms' }),
    el('div', { text: `STREAM_FRAME: ${chatState._bc ? 'ACTIVE' : 'UNAVAILABLE'}` }),
  ]);

  const syndBox = el('div', { class: 'box' });

  const feed = el('div', { class: 'loom-feed', 'aria-live': 'polite' });
  const main = el('div', { class: 'loom-main' }, [feed]);

  const composerWrap = el('form', { class: 'loom-form', autocomplete: 'off' });
  const msgInput = el('input', { class: 'loom-input loom-input', type: 'text', placeholder: 'Transmit encrypted packet...', 'aria-label': 'Message input', maxlength: '500' });
  const msgTextarea = el('textarea', { class: 'loom-input', placeholder: 'Draft long-form syndicate profile log entry...', 'aria-label': 'Message input', maxlength: '2000', rows: '3' });
  const sendBtn = el('button', { class: 'btn-primary loom-send', type: 'submit', text: '[LOOM_PULSE]' });

  function filteredMessages() {
    return chatState.messages.filter((m) => m.mode === chatState.mode);
  }

  function rerenderSidebar() {
    sidebar.innerHTML = '';

    sidebar.append(el('div', { class: 'box', style: 'padding:10px 12px;' }, [
      el('div', { class: 'box-head', text: '// MATRIX_ROUTING_TIERS' }),
      ...CHANNELS.map((c) =>
        el('button', {
          class: `loom-tier ${c.id === chatState.mode ? 'active' : ''}`,
          type: 'button',
          text: c.label,
          onclick: () => {
            chatState.mode = c.id;
            rerender();
          },
        })
      ),
    ]));

    sidebar.append(telemetry);

    if (chatState.mode === 'SYNDICATES') {
      syndBox.innerHTML = '';
      const sid = el('input', { type: 'text', value: chatState.syndicateId, maxlength: '48', 'aria-label': 'Syndicate ID' });
      const pt = el('input', { type: 'text', value: chatState.profileTag, maxlength: '64', 'aria-label': 'Profile tag' });
      sid.addEventListener('input', () => { chatState.syndicateId = sid.value.trim().toUpperCase() || 'CORE_ARCHIVE'; });
      pt.addEventListener('input', () => { chatState.profileTag = pt.value.trim(); });

      syndBox.append(
        el('div', { class: 'box-head', text: 'SYNDICATE_CONFIG' }),
        el('label', { text: 'SYNDICATE_ID' }),
        sid,
        el('label', { text: 'PROFILE_TAG', style: 'margin-top:10px;' }),
        pt
      );
      sidebar.append(syndBox);
    }
  }

  function rerenderFeed() {
    const msgs = filteredMessages();
    feed.innerHTML = '';

    if (!msgs.length) {
      feed.append(el('div', { class: 'console', text: '// No active data strands running inside this matrix tier channel...' }));
      return;
    }

    for (const msg of msgs) {
      const actions = el('div', { class: 'loom-actions' });

      if (msg.mode === 'PUBLIC_FEED') {
        const up = el('button', { class: 'loom-action', type: 'button', text: `▲ UPVOTE ${(msg.upvotes ?? 0)}` });
        const it = el('button', { class: 'loom-action', type: 'button', text: `⟲ INTERLACE ${(msg.interlaces ?? 0)}` });

        up.addEventListener('click', () => {
          msg.upvotes = (msg.upvotes ?? 0) + 1;
          rerenderFeed();
        });

        it.addEventListener('click', () => {
          msg.interlaces = (msg.interlaces ?? 0) + 1;
          const packet = {
            id: makeId(),
            mode: 'PUBLIC_FEED',
            sender: currentUser.handle,
            text: `INTERLACE(@${msg.sender}): ${msg.text}`,
            time: nowHHMM(),
            upvotes: 0,
            interlaces: 0,
          };
          chatState._seen.add(packet.id);
          chatState.messages = [packet, ...chatState.messages].slice(0, 800);
          broadcast(packet);
          rerender();
        });

        actions.append(up, it);
      }

      const meta = msg.mode === 'SYNDICATES'
        ? el('div', { class: 'loom-meta', text: `SYNDICATE: ${(msg.syndicateId || '---')} // PROFILE: ${(msg.profileTag || '—')}` })
        : null;

      const msgEl = el('div', { class: 'loom-msg' }, [
        el('div', { class: 'loom-msg-head' }, [
          el('span', { class: 'loom-sender', text: `@${msg.sender}` }),
          el('span', { class: 'loom-time', text: msg.time }),
        ]),
        ...(meta ? [meta] : []),
        el('div', { class: 'loom-text', text: msg.text }),
        ...(actions.childNodes.length ? [actions] : []),
      ]);

      feed.append(msgEl);
    }

    feed.scrollTop = 0;
  }

  function rerenderComposer() {
    composerWrap.innerHTML = '';

    if (chatState.mode === 'SYNDICATES') {
      composerWrap.append(msgTextarea, sendBtn);
    } else {
      composerWrap.append(msgInput, sendBtn);
    }

    msgInput.placeholder = chatState.mode === 'PRIVATE'
      ? 'Transmit encrypted secret packet...'
      : 'Broadcast thought stream straight to the global feed...';

    msgTextarea.placeholder = 'Draft long-form syndicate profile log entry...';
  }

  composerWrap.addEventListener('submit', (e) => {
    e.preventDefault();
    const raw = chatState.mode === 'SYNDICATES' ? msgTextarea.value : msgInput.value;
    const clean = vortexMinifyPacket(raw);
    if (!clean) return;

    const packet = {
      id: makeId(),
      mode: chatState.mode,
      sender: currentUser.handle,
      text: clean,
      time: nowHHMM(),
    };

    if (chatState.mode === 'PUBLIC_FEED') {
      packet.upvotes = 0;
      packet.interlaces = 0;
    }

    if (chatState.mode === 'SYNDICATES') {
      packet.syndicateId = chatState.syndicateId;
      packet.profileTag = chatState.profileTag || '—';
    }

    chatState._seen.add(packet.id);
    chatState.messages = [packet, ...chatState.messages].slice(0, 800);
    broadcast(packet);

    msgInput.value = '';
    msgTextarea.value = '';
    rerender();
  });

  function rerender() {
    header.querySelector('.subtitle').textContent = `ACTIVE_NODE: @${currentUser.handle} // MODE: ${chatState.mode}`;
    telemetry.lastChild.textContent = `STREAM_FRAME: ${chatState._bc ? 'ACTIVE' : 'UNAVAILABLE'}`;
    rerenderSidebar();
    rerenderFeed();
    rerenderComposer();
  }

  root.append(header, directives);

  const grid = el('div', { class: 'loom-grid' }, [sidebar, main]);
  main.append(composerWrap);
  root.append(grid);

  rerender();
  return root;
}
