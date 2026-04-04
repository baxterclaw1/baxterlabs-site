"use client";

import { useEffect, useRef } from "react";

/* ─── A: Current Orb (for comparison) ─── */
function OrbCurrent() {
  return (
    <div className="relative h-[300px] w-[300px]">
      <div className="absolute -inset-8 animate-pulse rounded-full bg-glow/[0.04] blur-[60px]" />
      <div className="absolute inset-4 animate-pulse rounded-full bg-glow/[0.06] blur-2xl" style={{ animationDelay: "700ms" }} />
      <div className="absolute inset-12 rounded-full border border-glow/20 bg-gradient-to-br from-glow/[0.08] to-teal-400/[0.06]">
        <div className="absolute inset-3 rounded-full border border-glow/[0.08] animate-spin" style={{ animationDuration: "25s" }} />
        <div className="absolute inset-6 rounded-full border border-teal-400/[0.08] animate-spin" style={{ animationDuration: "18s", animationDirection: "reverse" }} />
        <div className="absolute inset-10 rounded-full border border-glow/[0.12] animate-spin" style={{ animationDuration: "12s" }} />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-4 w-4 rounded-full bg-glow shadow-lg shadow-glow/50 animate-pulse" />
        </div>
      </div>
      {[0,1,2,3,4,5].map(i => (
        <div key={i} className="absolute inset-0 animate-spin" style={{ animationDuration: `${8+i*3}s`, animationDelay: `${i*-2}s` }}>
          <div className="absolute h-2 w-2 rounded-full bg-glow/60" style={{ top: `${15+i*5}%`, left: "50%", boxShadow: "0 0 8px rgba(56,189,248,0.4)" }} />
        </div>
      ))}
    </div>
  );
}

/* ─── B: DNA Helix ─── */
function DNAHelix() {
  return (
    <div className="relative h-[300px] w-[300px]">
      <div className="absolute -inset-8 animate-pulse rounded-full bg-glow/[0.03] blur-[60px]" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative h-[260px] w-[160px] animate-spin" style={{ animationDuration: "20s" }}>
          {Array.from({ length: 14 }).map((_, i) => {
            const y = (i / 13) * 100;
            const phase = (i / 13) * Math.PI * 2;
            const x1 = 50 + Math.sin(phase) * 35;
            const x2 = 50 - Math.sin(phase) * 35;
            const opacity = 0.3 + Math.abs(Math.sin(phase)) * 0.7;
            return (
              <div key={i} className="absolute w-full" style={{ top: `${y}%` }}>
                {/* Bridge line */}
                <div className="absolute h-[1px] bg-gradient-to-r from-glow/20 via-glow/40 to-teal-400/20"
                  style={{ left: `${Math.min(x1,x2)}%`, width: `${Math.abs(x1-x2)}%`, opacity: opacity * 0.5 }} />
                {/* Left node */}
                <div className="absolute h-[8px] w-[8px] -translate-x-1/2 -translate-y-1/2 rounded-full"
                  style={{ left: `${x1}%`, background: `rgba(56,189,248,${opacity})`, boxShadow: `0 0 ${8*opacity}px rgba(56,189,248,${opacity*0.5})` }} />
                {/* Right node */}
                <div className="absolute h-[8px] w-[8px] -translate-x-1/2 -translate-y-1/2 rounded-full"
                  style={{ left: `${x2}%`, background: `rgba(45,212,191,${opacity})`, boxShadow: `0 0 ${8*opacity}px rgba(45,212,191,${opacity*0.5})` }} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

/* ─── C: Neural Network ─── */
function NeuralNetwork() {
  const nodes = [
    // Layer 1 (input)
    { x: 15, y: 20 }, { x: 15, y: 40 }, { x: 15, y: 60 }, { x: 15, y: 80 },
    // Layer 2 (hidden)
    { x: 40, y: 25 }, { x: 40, y: 50 }, { x: 40, y: 75 },
    // Layer 3 (hidden)
    { x: 65, y: 30 }, { x: 65, y: 55 }, { x: 65, y: 80 },
    // Layer 4 (output)
    { x: 88, y: 40 }, { x: 88, y: 65 },
  ];

  const edges: [number, number][] = [
    [0,4],[0,5],[0,6],[1,4],[1,5],[1,6],[2,4],[2,5],[2,6],[3,4],[3,5],[3,6],
    [4,7],[4,8],[4,9],[5,7],[5,8],[5,9],[6,7],[6,8],[6,9],
    [7,10],[7,11],[8,10],[8,11],[9,10],[9,11],
  ];

  return (
    <div className="relative h-[300px] w-[300px]">
      <div className="absolute -inset-8 animate-pulse rounded-full bg-glow/[0.03] blur-[60px]" />
      <svg viewBox="0 0 100 100" className="h-full w-full">
        {/* Edges */}
        {edges.map(([from, to], i) => (
          <line key={i}
            x1={nodes[from].x} y1={nodes[from].y}
            x2={nodes[to].x} y2={nodes[to].y}
            stroke="rgba(56,189,248,0.08)" strokeWidth={0.3} />
        ))}

        {/* Animated pulses traveling along edges */}
        {edges.filter((_,i) => i % 4 === 0).map(([from, to], i) => (
          <circle key={`p${i}`} r={0.8} fill="#38bdf8" opacity={0.7}>
            <animateMotion
              dur={`${2 + i * 0.5}s`}
              repeatCount="indefinite"
              path={`M${nodes[from].x},${nodes[from].y} L${nodes[to].x},${nodes[to].y}`}
            />
            <animate attributeName="opacity" values="0;0.8;0" dur={`${2 + i * 0.5}s`} repeatCount="indefinite" />
          </circle>
        ))}

        {/* Nodes */}
        {nodes.map((node, i) => (
          <g key={i}>
            <circle cx={node.x} cy={node.y} r={3}
              fill="rgba(56,189,248,0.1)" stroke="rgba(56,189,248,0.3)" strokeWidth={0.5}>
              <animate attributeName="r" values="3;3.5;3" dur={`${2 + (i % 3)}s`} repeatCount="indefinite" />
            </circle>
            <circle cx={node.x} cy={node.y} r={1.2} fill="#38bdf8">
              <animate attributeName="opacity" values="0.5;1;0.5" dur={`${1.5 + (i % 4) * 0.3}s`} repeatCount="indefinite" />
            </circle>
          </g>
        ))}
      </svg>
    </div>
  );
}

/* ─── D: Constellation / Star Map ─── */
function Constellation() {
  const stars = [
    { x: 50, y: 50, r: 3, main: true },
    { x: 25, y: 30, r: 2 }, { x: 72, y: 25, r: 2.2 },
    { x: 80, y: 60, r: 1.8 }, { x: 30, y: 75, r: 2 },
    { x: 55, y: 20, r: 1.5 }, { x: 20, y: 55, r: 1.5 },
    { x: 75, y: 80, r: 1.8 }, { x: 45, y: 82, r: 1.5 },
    { x: 85, y: 35, r: 1.2 }, { x: 15, y: 42, r: 1.2 },
    { x: 60, y: 70, r: 1.5 }, { x: 38, y: 35, r: 1.3 },
  ];

  const connections: [number,number][] = [
    [0,1],[0,2],[0,3],[0,4],[0,5],[0,6],[0,11],[0,12],
    [1,6],[1,12],[2,5],[2,9],[3,9],[3,7],[4,6],[4,8],[7,11],[8,11],
  ];

  return (
    <div className="relative h-[300px] w-[300px]">
      <div className="absolute -inset-8 animate-pulse rounded-full bg-glow/[0.03] blur-[60px]" />
      <svg viewBox="0 0 100 100" className="h-full w-full">
        {/* Connection lines */}
        {connections.map(([a, b], i) => (
          <line key={i}
            x1={stars[a].x} y1={stars[a].y}
            x2={stars[b].x} y2={stars[b].y}
            stroke="rgba(56,189,248,0.1)" strokeWidth={0.3}>
            <animate attributeName="stroke-opacity" values="0.05;0.15;0.05" dur={`${3 + i * 0.2}s`} repeatCount="indefinite" />
          </line>
        ))}

        {/* Stars */}
        {stars.map((star, i) => (
          <g key={i}>
            {/* Glow */}
            <circle cx={star.x} cy={star.y} r={star.r * 3}
              fill={star.main ? "rgba(56,189,248,0.08)" : "rgba(56,189,248,0.03)"}>
              <animate attributeName="r" values={`${star.r*2.5};${star.r*3.5};${star.r*2.5}`} dur={`${2+i*0.3}s`} repeatCount="indefinite" />
            </circle>
            {/* Star core */}
            <circle cx={star.x} cy={star.y} r={star.r}
              fill={star.main ? "#38bdf8" : i % 3 === 0 ? "#2dd4bf" : "#38bdf8"}
              opacity={star.main ? 1 : 0.7}>
              <animate attributeName="opacity" values={`${star.main ? 0.8 : 0.4};${star.main ? 1 : 0.8};${star.main ? 0.8 : 0.4}`}
                dur={`${1.5 + i * 0.2}s`} repeatCount="indefinite" />
            </circle>
          </g>
        ))}

        {/* Traveling pulses */}
        {connections.filter((_,i) => i % 3 === 0).map(([a, b], i) => (
          <circle key={`pulse-${i}`} r={0.6} fill="#38bdf8">
            <animateMotion dur={`${3+i*0.4}s`} repeatCount="indefinite"
              path={`M${stars[a].x},${stars[a].y} L${stars[b].x},${stars[b].y}`} />
            <animate attributeName="opacity" values="0;0.9;0" dur={`${3+i*0.4}s`} repeatCount="indefinite" />
          </circle>
        ))}
      </svg>
    </div>
  );
}

/* ─── E: Pulsing Rings / Radar ─── */
function PulsingRadar() {
  return (
    <div className="relative h-[300px] w-[300px]">
      <div className="absolute -inset-8 animate-pulse rounded-full bg-glow/[0.03] blur-[60px]" />
      <div className="absolute inset-0 flex items-center justify-center">
        {/* Expanding rings */}
        {[0, 1, 2, 3].map(i => (
          <div key={i} className="absolute rounded-full border border-glow/20"
            style={{
              inset: `${i * 30 + 20}px`,
              animation: `pulse 4s ease-out infinite`,
              animationDelay: `${i * 1}s`,
              opacity: 0.4 - i * 0.08,
            }}
          />
        ))}

        {/* Sweeping line */}
        <div className="absolute inset-0 animate-spin" style={{ animationDuration: "6s" }}>
          <div className="absolute left-1/2 top-1/2 h-[1px] w-[45%] origin-left -translate-y-1/2"
            style={{ background: "linear-gradient(to right, rgba(56,189,248,0.6), transparent)" }} />
        </div>

        {/* Blips on the radar */}
        {[
          { angle: 45, dist: 35, delay: 0 },
          { angle: 120, dist: 50, delay: 1.5 },
          { angle: 200, dist: 42, delay: 3 },
          { angle: 310, dist: 55, delay: 0.8 },
          { angle: 80, dist: 60, delay: 2.2 },
        ].map((blip, i) => {
          const rad = (blip.angle * Math.PI) / 180;
          const x = 50 + Math.cos(rad) * blip.dist * 0.8;
          const y = 50 + Math.sin(rad) * blip.dist * 0.8;
          return (
            <div key={i} className="absolute h-[6px] w-[6px] rounded-full bg-glow"
              style={{
                left: `${x}%`, top: `${y}%`, transform: "translate(-50%,-50%)",
                boxShadow: "0 0 10px rgba(56,189,248,0.5)",
                animation: "pulse 3s ease-in-out infinite",
                animationDelay: `${blip.delay}s`,
              }}
            />
          );
        })}

        {/* Center dot */}
        <div className="relative">
          <div className="absolute -inset-2 animate-pulse rounded-full bg-glow/30 blur-sm" />
          <div className="h-4 w-4 rounded-full bg-glow shadow-lg shadow-glow/60" />
        </div>
      </div>
    </div>
  );
}

/* ─── F: Morphing Blob ─── */
function MorphingBlob() {
  return (
    <div className="relative h-[300px] w-[300px]">
      <div className="absolute -inset-8 animate-pulse rounded-full bg-glow/[0.04] blur-[60px]" />
      <div className="absolute inset-0 flex items-center justify-center">
        <svg viewBox="0 0 200 200" className="h-[260px] w-[260px]">
          <defs>
            <linearGradient id="blob-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.3" />
              <stop offset="50%" stopColor="#2dd4bf" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.25" />
            </linearGradient>
            <linearGradient id="blob-stroke" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#2dd4bf" stopOpacity="0.3" />
            </linearGradient>
          </defs>

          {/* Outer blob */}
          <path fill="url(#blob-grad)" stroke="url(#blob-stroke)" strokeWidth="0.5">
            <animate attributeName="d" dur="8s" repeatCount="indefinite"
              values="M100,30 C130,30 170,50 170,100 C170,150 130,170 100,170 C70,170 30,150 30,100 C30,50 70,30 100,30Z;
                      M100,25 C140,35 175,55 165,105 C155,155 125,175 95,170 C65,165 25,145 35,95 C45,45 60,15 100,25Z;
                      M105,30 C135,25 165,60 170,95 C175,130 150,170 105,170 C60,170 30,140 30,100 C30,60 75,35 105,30Z;
                      M100,30 C130,30 170,50 170,100 C170,150 130,170 100,170 C70,170 30,150 30,100 C30,50 70,30 100,30Z" />
          </path>

          {/* Inner blob */}
          <path fill="rgba(56,189,248,0.05)" stroke="rgba(56,189,248,0.15)" strokeWidth="0.3">
            <animate attributeName="d" dur="6s" repeatCount="indefinite"
              values="M100,55 C120,55 145,70 145,100 C145,130 120,145 100,145 C80,145 55,130 55,100 C55,70 80,55 100,55Z;
                      M100,50 C125,60 150,75 145,105 C140,135 115,150 95,145 C75,140 50,125 55,95 C60,65 75,40 100,50Z;
                      M105,55 C125,50 140,75 145,100 C150,125 130,145 105,145 C80,145 55,125 55,100 C55,75 85,60 105,55Z;
                      M100,55 C120,55 145,70 145,100 C145,130 120,145 100,145 C80,145 55,130 55,100 C55,70 80,55 100,55Z" />
          </path>

          {/* Center glow */}
          <circle cx="100" cy="100" r="6" fill="#38bdf8" opacity="0.8">
            <animate attributeName="r" values="5;7;5" dur="3s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.6;1;0.6" dur="3s" repeatCount="indefinite" />
          </circle>
          <circle cx="100" cy="100" r="15" fill="rgba(56,189,248,0.1)">
            <animate attributeName="r" values="12;18;12" dur="3s" repeatCount="indefinite" />
          </circle>
        </svg>
      </div>
    </div>
  );
}

/* ─── G: Particle Vortex / Spiral ─── */
function ParticleVortex() {
  const particles = Array.from({ length: 40 }, (_, i) => {
    const angle = (i / 40) * Math.PI * 4;
    const dist = 20 + (i / 40) * 80;
    const x = 50 + Math.cos(angle) * (dist * 0.4);
    const y = 50 + Math.sin(angle) * (dist * 0.4);
    const size = 1 + (1 - i / 40) * 2;
    return { x, y, size, i };
  });

  return (
    <div className="relative h-[300px] w-[300px]">
      <div className="absolute -inset-8 animate-pulse rounded-full bg-glow/[0.04] blur-[60px]" />
      <div className="absolute inset-0 animate-spin" style={{ animationDuration: "30s" }}>
        <svg viewBox="0 0 100 100" className="h-full w-full">
          {/* Spiral arms */}
          {particles.map((p) => (
            <circle key={p.i} cx={p.x} cy={p.y} r={p.size * 0.4}
              fill={p.i % 3 === 0 ? "#2dd4bf" : "#38bdf8"}
              opacity={0.3 + (1 - p.i / 40) * 0.6}>
              <animate attributeName="opacity"
                values={`${0.2 + (1-p.i/40)*0.3};${0.5 + (1-p.i/40)*0.5};${0.2 + (1-p.i/40)*0.3}`}
                dur={`${2 + (p.i % 5) * 0.3}s`} repeatCount="indefinite" />
            </circle>
          ))}
        </svg>
      </div>

      {/* Center */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative">
          <div className="absolute -inset-4 animate-pulse rounded-full bg-glow/20 blur-lg" />
          <div className="h-5 w-5 rounded-full bg-glow shadow-lg shadow-glow/60" />
        </div>
      </div>
    </div>
  );
}

/* ─── Canvas: Floating Particles ─── */
function FloatingParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = 300;
    canvas.height = 300;

    const particles = Array.from({ length: 50 }, () => ({
      x: Math.random() * 300,
      y: Math.random() * 300,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      r: Math.random() * 2 + 1,
    }));

    let animId: number;
    function draw() {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, 300, 300);

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 60) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(56, 189, 248, ${0.12 * (1 - dist / 60)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      // Draw & update particles
      for (const p of particles) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(56, 189, 248, ${0.4 + p.r * 0.15})`;
        ctx.shadowColor = "rgba(56, 189, 248, 0.3)";
        ctx.shadowBlur = p.r * 3;
        ctx.fill();
        ctx.shadowBlur = 0;

        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > 300) p.vx *= -1;
        if (p.y < 0 || p.y > 300) p.vy *= -1;
      }

      animId = requestAnimationFrame(draw);
    }
    draw();
    return () => cancelAnimationFrame(animId);
  }, []);

  return (
    <div className="relative h-[300px] w-[300px]">
      <div className="absolute -inset-8 animate-pulse rounded-full bg-glow/[0.03] blur-[60px]" />
      <canvas ref={canvasRef} className="h-full w-full" />
    </div>
  );
}

/* ─── Showcase Page ─── */
export default function ShowcasePage() {
  const options = [
    { id: "A", name: "Current Orb", desc: "Spinning rings + orbiting particles. What's on the site now.", component: <OrbCurrent /> },
    { id: "B", name: "DNA Helix", desc: "Rotating double helix with connected nodes. Feels scientific, alive.", component: <DNAHelix /> },
    { id: "C", name: "Neural Network", desc: "Layered nodes with pulses traveling between them. Communicates 'AI brain.'", component: <NeuralNetwork /> },
    { id: "D", name: "Constellation Map", desc: "Stars connected by faint lines with traveling light pulses. Feels vast, connected.", component: <Constellation /> },
    { id: "E", name: "Pulsing Radar", desc: "Concentric rings with a sweeping line and blips. Feels like a command center.", component: <PulsingRadar /> },
    { id: "F", name: "Morphing Blob", desc: "Organic shape that continuously morphs. Gradient fill, feels alive and fluid.", component: <MorphingBlob /> },
    { id: "G", name: "Particle Vortex", desc: "Spiral of particles slowly rotating inward. Feels like energy converging.", component: <ParticleVortex /> },
    { id: "H", name: "Floating Particles", desc: "Canvas-based particles that drift and connect when close. Feels like a living network.", component: <FloatingParticles /> },
  ];

  return (
    <div className="min-h-screen bg-background px-6 py-12">
      <div className="mx-auto max-w-6xl">
        <h1 className="text-3xl font-bold text-foreground mb-2">Hero Visual Options</h1>
        <p className="text-muted-foreground mb-12">All in the same dark cyan theme. Pick your favorite (or combine ideas).</p>

        <div className="grid gap-8 sm:grid-cols-2">
          {options.map((opt) => (
            <section key={opt.id} className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6">
              <div className="mb-4">
                <span className="font-mono text-xs text-glow tracking-wider uppercase">Option {opt.id}</span>
                <h2 className="text-lg font-semibold text-foreground mt-1">{opt.name}</h2>
                <p className="text-sm text-muted-foreground mt-1">{opt.desc}</p>
              </div>
              <div className="flex items-center justify-center py-4">
                {opt.component}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
