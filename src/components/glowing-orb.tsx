"use client";

export function GlowingOrb() {
  return (
    <div className="relative h-[340px] w-[340px] md:h-[420px] md:w-[420px]">
      {/* Outer ambient glow — bleeds into background */}
      <div className="absolute -inset-12 animate-pulse rounded-full bg-glow/[0.04] blur-[80px]" />
      <div className="absolute -inset-4 animate-pulse rounded-full bg-glow/[0.06] blur-3xl" style={{ animationDelay: "700ms" }} />
      <div className="absolute inset-6 animate-pulse rounded-full bg-teal-400/[0.04] blur-2xl" style={{ animationDelay: "1400ms" }} />

      {/* Core orb */}
      <div className="absolute inset-14 md:inset-16 rounded-full border border-glow/20 bg-gradient-to-br from-glow/[0.08] to-teal-400/[0.06] backdrop-blur-sm">
        {/* Spinning rings */}
        <div className="absolute inset-3 rounded-full border border-glow/[0.08] animate-spin" style={{ animationDuration: "25s" }} />
        <div className="absolute inset-6 rounded-full border border-teal-400/[0.08] animate-spin" style={{ animationDuration: "18s", animationDirection: "reverse" }} />
        <div className="absolute inset-10 rounded-full border border-glow/[0.12] animate-spin" style={{ animationDuration: "12s" }} />
        <div className="absolute inset-14 rounded-full border border-teal-400/[0.06] animate-spin" style={{ animationDuration: "8s", animationDirection: "reverse" }} />

        {/* Center core */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative">
            <div className="absolute -inset-3 animate-pulse rounded-full bg-glow/20 blur-md" />
            <div className="h-5 w-5 rounded-full bg-glow shadow-lg shadow-glow/60" />
          </div>
        </div>
      </div>

      {/* Orbiting particles — different sizes, speeds, distances */}
      {[
        { dur: 7, delay: 0, dist: 12, size: 2.5 },
        { dur: 10, delay: -2, dist: 18, size: 2 },
        { dur: 13, delay: -4, dist: 24, size: 1.5 },
        { dur: 9, delay: -1, dist: 8, size: 3 },
        { dur: 16, delay: -6, dist: 30, size: 1.5 },
        { dur: 11, delay: -3, dist: 20, size: 2 },
        { dur: 8, delay: -5, dist: 15, size: 2.5 },
        { dur: 14, delay: -7, dist: 35, size: 1 },
      ].map((p, i) => (
        <div
          key={i}
          className="absolute inset-0 animate-spin"
          style={{ animationDuration: `${p.dur}s`, animationDelay: `${p.delay}s` }}
        >
          <div
            className="absolute rounded-full bg-glow/70"
            style={{
              top: `${p.dist}%`,
              left: "50%",
              width: `${p.size * 4}px`,
              height: `${p.size * 4}px`,
              boxShadow: `0 0 ${p.size * 6}px rgba(56, 189, 248, 0.4)`,
            }}
          />
        </div>
      ))}

      {/* Teal accent particles */}
      {[
        { dur: 12, delay: -1, dist: 22, size: 1.5 },
        { dur: 15, delay: -4, dist: 28, size: 1 },
        { dur: 9, delay: -7, dist: 16, size: 2 },
      ].map((p, i) => (
        <div
          key={`teal-${i}`}
          className="absolute inset-0 animate-spin"
          style={{ animationDuration: `${p.dur}s`, animationDelay: `${p.delay}s`, animationDirection: "reverse" }}
        >
          <div
            className="absolute rounded-full bg-teal-400/60"
            style={{
              top: `${p.dist}%`,
              left: "50%",
              width: `${p.size * 4}px`,
              height: `${p.size * 4}px`,
              boxShadow: `0 0 ${p.size * 6}px rgba(45, 212, 191, 0.3)`,
            }}
          />
        </div>
      ))}
    </div>
  );
}
