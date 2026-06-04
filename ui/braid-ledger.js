/**
 * $BRAID Sovereign Ledger & Ferrofluidic Vector Alignment Droplets (App 04)
 * Renders an interactive SVG representing concentrated magnetic fluid.
 * Attempted external queries (cursor hover) shunts vector pathways into spikes.
 */

export function initBraidLedger() {
  const container = document.getElementById('ferrofluid-container');
  if (!container) return;

  // Let's programmatically construct an SVG containing a vector field
  // or dynamic grid of magnetic spikes that morphs on mouse interaction
  const svgNS = "http://www.w3.org/2000/svg";
  const svg = document.createElementNS(svgNS, "svg");
  svg.setAttribute("viewBox", "0 0 200 120");
  svg.style.width = "100%";
  svg.style.height = "120px";
  svg.style.background = "#010206";
  svg.style.borderRadius = "8px";
  svg.style.border = "1px solid rgba(88, 80, 236, 0.2)";
  svg.style.cursor = "crosshair";

  // Grid size for the magnetic particles
  const cols = 15;
  const rows = 9;
  const particles = [];

  // Create particles inside the SVG
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const x = 15 + (c * 12.5);
      const y = 10 + (r * 12.5);
      
      const line = document.createElementNS(svgNS, "line");
      line.setAttribute("x1", x.toString());
      line.setAttribute("y1", y.toString());
      line.setAttribute("x2", x.toString());
      line.setAttribute("y2", (y + 6).toString());
      line.setAttribute("stroke", "rgba(88, 80, 236, 0.4)");
      line.setAttribute("stroke-width", "1.5");
      line.setAttribute("stroke-linecap", "round");
      
      const circle = document.createElementNS(svgNS, "circle");
      circle.setAttribute("cx", x.toString());
      circle.setAttribute("cy", y.toString());
      circle.setAttribute("r", "1.5");
      circle.setAttribute("fill", "#00f2fe");
      circle.setAttribute("opacity", "0.8");

      svg.appendChild(line);
      svg.appendChild(circle);

      particles.push({ x, y, line, circle });
    }
  }

  container.appendChild(svg);

  // Live mouse interaction coordinates
  let mouse = { x: -1000, y: -1000, active: false };

  svg.addEventListener('mousemove', (e) => {
    const rect = svg.getBoundingClientRect();
    // Translate client coords to SVG local coordinates (viewBox 200 x 120)
    mouse.x = ((e.clientX - rect.left) / rect.width) * 200;
    mouse.y = ((e.clientY - rect.top) / rect.height) * 120;
    mouse.active = true;
    
    // Status log alert
    const shunterLog = document.getElementById('ledger-shunt-log');
    if (shunterLog && Math.random() < 0.25) {
      shunterLog.textContent = `>> ATTEMPTED QUERY DETECTED AT [X:${mouse.x.toFixed(0)}, Y:${mouse.y.toFixed(0)}] // SPICULES DEPLOYED`;
      shunterLog.style.color = '#00f2fe';
      setTimeout(() => {
        shunterLog.style.color = '#9cb3c9';
      }, 800);
    }
  });

  svg.addEventListener('mouseleave', () => {
    mouse.active = false;
    mouse.x = -1000;
    mouse.y = -1000;
  });

  let angle = 0;

  function update() {
    angle += 0.05;
    
    particles.forEach(p => {
      let dx = mouse.x - p.x;
      let dy = mouse.y - p.y;
      let dist = Math.sqrt(dx * dx + dy * dy);
      
      let targetX2, targetY2;
      let strokeColor = "rgba(88, 80, 236, 0.4)";
      let strokeWidth = "1.5";
      let pRadius = "1.5";
      let pColor = "#00f2fe";

      if (mouse.active && dist < 45) {
        // High threat shunting sequence - morph particles into spikes pointing away from cursor
        const force = (45 - dist) / 45; // stronger near cursor
        const angleToMouse = Math.atan2(dy, dx);
        
        // Push particles away (morph into sharp spicules)
        targetX2 = p.x - Math.cos(angleToMouse) * (6 + force * 12);
        targetY2 = p.y - Math.sin(angleToMouse) * (6 + force * 12);
        
        // Dynamic electric spike visualization
        strokeColor = `rgba(0, 242, 254, ${0.4 + force * 0.6})`;
        strokeWidth = (1.5 + force * 2.5).toString();
        pColor = "#5850ec";
        pRadius = (1.5 + force * 3).toString();
      } else {
        // Normal state: idle fluctuation representing continuous vector field alignment at 39,420 Hz
        const idleX = Math.sin(angle + p.y * 0.05) * 3;
        const idleY = Math.cos(angle + p.x * 0.05) * 3;
        targetX2 = p.x + idleX;
        targetY2 = p.y + 6 + idleY;
      }

      // Smooth interpolation for frictionless thermal alignment
      p.line.setAttribute("x2", targetX2.toString());
      p.line.setAttribute("y2", targetY2.toString());
      p.line.setAttribute("stroke", strokeColor);
      p.line.setAttribute("stroke-width", strokeWidth);
      p.circle.setAttribute("r", pRadius);
      p.circle.setAttribute("fill", pColor);
    });

    requestAnimationFrame(update);
  }

  update();
}
