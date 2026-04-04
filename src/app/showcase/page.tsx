"use client";

import { useEffect, useState, useRef } from "react";

/* ─── Option A: Animated Workflow Diagram ─── */
function WorkflowDiagram() {
  const [activeNode, setActiveNode] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveNode((prev) => (prev + 1) % 5);
    }, 1200);
    return () => clearInterval(interval);
  }, []);

  const nodes = [
    { x: 60, y: 50, label: "Input", icon: "↓" },
    { x: 200, y: 50, label: "AI Agent", icon: "◆" },
    { x: 340, y: 50, label: "Process", icon: "⚡" },
    { x: 200, y: 150, label: "Analyze", icon: "◎" },
    { x: 340, y: 150, label: "Output", icon: "→" },
  ];

  const edges = [
    [0, 1], [1, 2], [1, 3], [3, 4], [2, 4],
  ];

  return (
    <div className="relative h-[280px] w-full max-w-[460px] mx-auto">
      <svg viewBox="0 0 400 210" className="h-full w-full">
        {/* Edges */}
        {edges.map(([from, to], i) => (
          <line
            key={i}
            x1={nodes[from].x}
            y1={nodes[from].y}
            x2={nodes[to].x}
            y2={nodes[to].y}
            stroke={activeNode === from || activeNode === to ? "#38bdf8" : "#27272a"}
            strokeWidth={activeNode === from || activeNode === to ? 2 : 1}
            strokeDasharray={activeNode === from ? "4 4" : "none"}
            className="transition-all duration-500"
          />
        ))}

        {/* Nodes */}
        {nodes.map((node, i) => (
          <g key={i}>
            {/* Glow */}
            {activeNode === i && (
              <circle cx={node.x} cy={node.y} r={32} fill="rgba(56, 189, 248, 0.1)" className="animate-pulse" />
            )}
            {/* Node bg */}
            <rect
              x={node.x - 24} y={node.y - 24} width={48} height={48} rx={10}
              fill={activeNode === i ? "rgba(56, 189, 248, 0.15)" : "rgba(255,255,255,0.03)"}
              stroke={activeNode === i ? "#38bdf8" : "#27272a"}
              strokeWidth={1}
              className="transition-all duration-500"
            />
            {/* Icon */}
            <text x={node.x} y={node.y + 1} textAnchor="middle" dominantBaseline="middle"
              className="text-[14px] transition-all duration-300"
              fill={activeNode === i ? "#38bdf8" : "#71717a"}
            >
              {node.icon}
            </text>
            {/* Label */}
            <text x={node.x} y={node.y + 38} textAnchor="middle"
              className="text-[10px] font-medium"
              fill={activeNode === i ? "#fafafa" : "#52525b"}
            >
              {node.label}
            </text>
          </g>
        ))}

        {/* Traveling dot */}
        {edges.map(([from, to], i) => (
          activeNode === from && (
            <circle key={`dot-${i}`} r={3} fill="#38bdf8" className="animate-pulse">
              <animateMotion
                dur="1.2s"
                repeatCount="1"
                path={`M${nodes[from].x},${nodes[from].y} L${nodes[to].x},${nodes[to].y}`}
              />
            </circle>
          )
        ))}
      </svg>
    </div>
  );
}

/* ─── Option B: Terminal Animation ─── */
function TerminalAnimation() {
  const [lines, setLines] = useState<string[]>([]);
  const fullLines = [
    "$ baxter analyze --business acme-corp",
    "⠋ Scanning 12 workflows...",
    "✓ Found 3 automation opportunities",
    "✓ Estimated time saved: 47hrs/week",
    "✓ ROI projection: 340% in 90 days",
    "",
    "$ baxter deploy --agent onboarding",
    "⠋ Building agent...",
    "✓ Agent deployed. Running 24/7.",
  ];
  const lineRef = useRef(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (lineRef.current < fullLines.length) {
        setLines((prev) => [...prev, fullLines[lineRef.current]]);
        lineRef.current += 1;
      } else {
        lineRef.current = 0;
        setLines([]);
      }
    }, 800);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-[480px] mx-auto rounded-xl border border-white/[0.08] bg-[#0c0c10] overflow-hidden shadow-2xl shadow-black/50">
      {/* Title bar */}
      <div className="flex items-center gap-2 border-b border-white/[0.06] px-4 py-3">
        <div className="flex gap-1.5">
          <div className="h-3 w-3 rounded-full bg-[#ff5f57]" />
          <div className="h-3 w-3 rounded-full bg-[#febc2e]" />
          <div className="h-3 w-3 rounded-full bg-[#28c840]" />
        </div>
        <span className="ml-2 font-mono text-xs text-muted-foreground">BaxterLabs Terminal</span>
      </div>

      {/* Terminal content */}
      <div className="h-[220px] overflow-hidden p-4 font-mono text-sm">
        {lines.map((line, i) => (
          <div
            key={i}
            className={`leading-relaxed ${
              line.startsWith("$") ? "text-foreground" :
              line.startsWith("✓") ? "text-emerald-400" :
              line.startsWith("⠋") ? "text-glow animate-pulse" :
              "text-muted-foreground"
            }`}
          >
            {line || "\u00A0"}
          </div>
        ))}
        <span className="inline-block h-4 w-2 animate-pulse bg-glow" />
      </div>
    </div>
  );
}

/* ─── Option C: Glowing Orb / Particle Mesh ─── */
function GlowingOrb() {
  return (
    <div className="relative mx-auto h-[300px] w-[300px]">
      {/* Outer glow */}
      <div className="absolute inset-0 animate-pulse rounded-full bg-glow/5 blur-3xl" />
      <div className="absolute inset-8 animate-pulse rounded-full bg-glow/8 blur-2xl" style={{ animationDelay: "500ms" }} />

      {/* Core orb */}
      <div className="absolute inset-16 rounded-full border border-glow/20 bg-gradient-to-br from-glow/10 to-teal-400/10 backdrop-blur-sm">
        {/* Inner rings */}
        <div className="absolute inset-4 rounded-full border border-glow/10 animate-spin" style={{ animationDuration: "20s" }} />
        <div className="absolute inset-8 rounded-full border border-teal-400/10 animate-spin" style={{ animationDuration: "15s", animationDirection: "reverse" }} />
        <div className="absolute inset-12 rounded-full border border-glow/15 animate-spin" style={{ animationDuration: "10s" }} />

        {/* Center dot */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-4 w-4 rounded-full bg-glow shadow-lg shadow-glow/50 animate-pulse" />
        </div>
      </div>

      {/* Orbiting particles */}
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <div
          key={i}
          className="absolute inset-0 animate-spin"
          style={{ animationDuration: `${8 + i * 3}s`, animationDelay: `${i * -2}s` }}
        >
          <div
            className="absolute h-2 w-2 rounded-full bg-glow/60"
            style={{
              top: `${15 + i * 5}%`,
              left: "50%",
              boxShadow: "0 0 8px rgba(56, 189, 248, 0.4)",
            }}
          />
        </div>
      ))}
    </div>
  );
}

/* ─── Option D: Dashboard Mockup ─── */
function DashboardMockup() {
  const [hours, setHours] = useState(0);
  const [uptime, setUptime] = useState(0);
  const [agents, setAgents] = useState(0);

  useEffect(() => {
    const dur = 2000;
    const steps = 60;
    const targets = { hours: 47, uptime: 99.8, agents: 3 };
    let step = 0;
    const interval = setInterval(() => {
      step++;
      const progress = Math.min(step / steps, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      setHours(Math.round(targets.hours * ease));
      setUptime(Math.round(targets.uptime * ease * 10) / 10);
      setAgents(Math.round(targets.agents * ease));
      if (step >= steps) clearInterval(interval);
    }, dur / steps);
    return () => clearInterval(interval);
  }, []);

  const barHeights = [30, 45, 35, 60, 80, 65, 90, 75, 85, 70, 55, 95];

  return (
    <div className="w-full max-w-[500px] mx-auto rounded-xl border border-white/[0.08] bg-[#0c0c10] overflow-hidden shadow-2xl shadow-black/50">
      {/* Title bar */}
      <div className="flex items-center gap-2 border-b border-white/[0.06] px-4 py-3">
        <div className="flex gap-1.5">
          <div className="h-3 w-3 rounded-full bg-[#ff5f57]" />
          <div className="h-3 w-3 rounded-full bg-[#febc2e]" />
          <div className="h-3 w-3 rounded-full bg-[#28c840]" />
        </div>
        <span className="ml-2 font-mono text-xs text-muted-foreground">BaxterLabs Dashboard</span>
      </div>

      <div className="p-4">
        {/* Stat cards */}
        <div className="grid grid-cols-3 gap-3 mb-4">
          <div className="rounded-lg border border-white/[0.06] bg-white/[0.02] p-3 text-center">
            <div className="font-mono text-2xl font-bold text-glow">{hours}</div>
            <div className="text-[10px] text-muted-foreground mt-1">hrs/week saved</div>
          </div>
          <div className="rounded-lg border border-white/[0.06] bg-white/[0.02] p-3 text-center">
            <div className="font-mono text-2xl font-bold text-emerald-400">{uptime}%</div>
            <div className="text-[10px] text-muted-foreground mt-1">uptime</div>
          </div>
          <div className="rounded-lg border border-white/[0.06] bg-white/[0.02] p-3 text-center">
            <div className="font-mono text-2xl font-bold text-foreground">{agents}</div>
            <div className="text-[10px] text-muted-foreground mt-1">active agents</div>
          </div>
        </div>

        {/* Chart */}
        <div className="rounded-lg border border-white/[0.06] bg-white/[0.02] p-3 mb-4">
          <div className="text-[10px] text-muted-foreground mb-2">Agent Activity</div>
          <div className="flex items-end gap-1 h-[60px]">
            {barHeights.map((h, i) => (
              <div key={i} className="flex-1 rounded-t-sm bg-glow/40 transition-all duration-1000"
                style={{ height: `${h}%`, transitionDelay: `${i * 80}ms` }} />
            ))}
          </div>
        </div>

        {/* Agent list */}
        <div className="space-y-2">
          {[
            { name: "Onboarding Bot", status: "Active", color: "bg-emerald-400" },
            { name: "Invoice Agent", status: "Active", color: "bg-emerald-400" },
            { name: "Report Generator", status: "Scheduled", color: "bg-amber-400" },
          ].map((agent) => (
            <div key={agent.name} className="flex items-center justify-between rounded-lg border border-white/[0.06] bg-white/[0.02] px-3 py-2">
              <div className="flex items-center gap-2">
                <div className={`h-2 w-2 rounded-full ${agent.color} animate-pulse`} />
                <span className="text-xs text-foreground">{agent.name}</span>
              </div>
              <span className="text-[10px] text-muted-foreground">{agent.status}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─── Showcase Page ─── */
export default function ShowcasePage() {
  return (
    <div className="min-h-screen bg-background px-6 py-12">
      <div className="mx-auto max-w-5xl">
        <h1 className="text-3xl font-bold text-foreground mb-2">Hero Visual Options</h1>
        <p className="text-muted-foreground mb-12">Pick the one that feels right for BaxterLabs. This will sit next to the headline in the hero section.</p>

        <div className="space-y-20">
          {/* Option A */}
          <section>
            <div className="mb-6">
              <span className="font-mono text-xs text-glow tracking-wider uppercase">Option A</span>
              <h2 className="text-xl font-semibold text-foreground mt-1">Animated Workflow Diagram</h2>
              <p className="text-sm text-muted-foreground mt-1">Shows data flowing through AI pipeline nodes. Communicates &quot;automation&quot; visually.</p>
            </div>
            <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-8">
              <WorkflowDiagram />
            </div>
          </section>

          {/* Option B */}
          <section>
            <div className="mb-6">
              <span className="font-mono text-xs text-glow tracking-wider uppercase">Option B</span>
              <h2 className="text-xl font-semibold text-foreground mt-1">Terminal / Code Animation</h2>
              <p className="text-sm text-muted-foreground mt-1">Shows AI commands running in real-time. Communicates &quot;we build real tech.&quot;</p>
            </div>
            <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-8 flex justify-center">
              <TerminalAnimation />
            </div>
          </section>

          {/* Option C */}
          <section>
            <div className="mb-6">
              <span className="font-mono text-xs text-glow tracking-wider uppercase">Option C</span>
              <h2 className="text-xl font-semibold text-foreground mt-1">Glowing Orb / Particle Mesh</h2>
              <p className="text-sm text-muted-foreground mt-1">Abstract, atmospheric. Communicates &quot;AI intelligence&quot; without being literal.</p>
            </div>
            <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-8 flex justify-center">
              <GlowingOrb />
            </div>
          </section>

          {/* Option D */}
          <section>
            <div className="mb-6">
              <span className="font-mono text-xs text-glow tracking-wider uppercase">Option D</span>
              <h2 className="text-xl font-semibold text-foreground mt-1">Dashboard Mockup</h2>
              <p className="text-sm text-muted-foreground mt-1">Shows a live dashboard with metrics and agent status. Communicates &quot;this is what you get.&quot;</p>
            </div>
            <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-8 flex justify-center">
              <DashboardMockup />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
