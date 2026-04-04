"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

export function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="grain relative overflow-hidden bg-primary px-6 py-28 md:py-36 lg:py-44">
      {/* Warm radial gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 70% 40%, oklch(0.35 0.08 55 / 0.6) 0%, transparent 70%), radial-gradient(ellipse 50% 50% at 20% 80%, oklch(0.30 0.06 45 / 0.4) 0%, transparent 60%)",
        }}
      />

      {/* Subtle dot grid */}
      <div className="absolute inset-0 opacity-[0.04]">
        <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="dots"
              width="24"
              height="24"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="2" cy="2" r="1" fill="currentColor" className="text-primary-foreground" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>
      </div>

      <div className="relative mx-auto max-w-5xl">
        {/* Decorative accent line */}
        <div
          className={`mb-12 h-px bg-warm transition-all duration-1000 ease-out ${
            isVisible ? "w-16 opacity-100" : "w-0 opacity-0"
          }`}
        />

        <div
          className={`transition-all duration-1000 ease-out ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-8 opacity-0"
          }`}
        >
          <p className="mb-6 font-sans text-sm font-medium uppercase tracking-[0.2em] text-warm">
            AI Consulting & Automation
          </p>

          <h1 className="font-serif text-4xl font-semibold leading-[1.1] tracking-tight text-primary-foreground md:text-5xl lg:text-7xl">
            <span className="block">The work that slows</span>
            <span className="block">you down doesn&apos;t</span>
            <span className="mt-1 block text-warm">have to exist.</span>
          </h1>
        </div>

        <div
          className={`mt-8 transition-all delay-300 duration-1000 ease-out md:mt-10 ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-8 opacity-0"
          }`}
        >
          <p className="max-w-lg font-sans text-lg leading-relaxed text-primary-foreground/65 md:text-xl">
            We find the processes draining your team&apos;s time and replace them
            with AI and automation that just works. Quietly. Reliably.
            Around the clock.
          </p>
        </div>

        <div
          className={`mt-10 flex flex-col gap-4 transition-all delay-500 duration-1000 ease-out sm:flex-row sm:items-center md:mt-12 ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-8 opacity-0"
          }`}
        >
          <Button
            size="lg"
            className="bg-warm px-8 py-6 text-base font-medium text-warm-foreground transition-all duration-300 hover:bg-warm/90 hover:shadow-lg hover:shadow-warm/20"
          >
            Book a Free Consultation
          </Button>
          <span className="text-sm text-primary-foreground/40">
            No commitment. Just a conversation about what&apos;s possible.
          </span>
        </div>
      </div>
    </section>
  );
}
