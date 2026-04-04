"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

export function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="grain relative overflow-hidden px-6 py-28 md:py-36 lg:py-44">
      {/* Cyan/blue radial glow */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 60% 30%, rgba(56, 189, 248, 0.08) 0%, transparent 70%), radial-gradient(ellipse 40% 40% at 20% 70%, rgba(45, 212, 191, 0.05) 0%, transparent 60%)",
        }}
      />

      {/* Dot grid */}
      <div className="absolute inset-0 opacity-[0.04]">
        <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="dots" width="24" height="24" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="0.8" fill="currentColor" className="text-white" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>
      </div>

      <div className="relative mx-auto max-w-5xl">
        {/* Accent line */}
        <div
          className={`mb-12 h-px bg-glow transition-all duration-1000 ease-out ${
            isVisible ? "w-16 opacity-100" : "w-0 opacity-0"
          }`}
        />

        <div
          className={`transition-all duration-1000 ease-out ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <p className="mb-6 text-sm font-medium uppercase tracking-[0.2em] text-glow">
            AI Consulting & Automation
          </p>

          <h1 className="text-4xl font-bold leading-[1.1] tracking-tight text-foreground md:text-5xl lg:text-7xl">
            <span className="block">Your competitors are</span>
            <span className="block">already using AI.</span>
            <span className="mt-2 block bg-gradient-to-r from-glow to-teal-400 bg-clip-text text-transparent">
              Are you?
            </span>
          </h1>
        </div>

        <div
          className={`mt-8 transition-all delay-300 duration-1000 ease-out md:mt-10 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <p className="max-w-lg text-lg leading-relaxed text-muted-foreground md:text-xl">
            Most businesses know they should be leveraging AI. Few know how.
            We bridge that gap and help show you what&apos;s possible for your
            business.
          </p>
        </div>

        <div
          className={`mt-10 flex flex-col gap-4 transition-all delay-500 duration-1000 ease-out sm:flex-row sm:items-center md:mt-12 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <Button
            size="lg"
            className="bg-glow px-8 py-6 text-base font-medium text-glow-foreground transition-all duration-300 hover:bg-glow/90 hover:shadow-lg hover:shadow-glow/25"
          >
            Book a Free Consultation
          </Button>
          <span className="text-sm text-muted-foreground">
            No commitment. Just conversation.
          </span>
        </div>
      </div>
    </section>
  );
}
