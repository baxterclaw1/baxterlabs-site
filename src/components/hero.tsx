"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

export function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative overflow-hidden bg-primary px-6 py-24 md:py-32 lg:py-40">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="grid"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                className="text-primary-foreground"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative mx-auto max-w-5xl">
        <div
          className={`transition-all duration-1000 ease-out ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-8 opacity-0"
          }`}
        >
          {/* Eyebrow text */}
          <p className="mb-6 font-sans text-sm font-medium uppercase tracking-widest text-primary-foreground/60">
            AI Consulting & Automation
          </p>

          {/* Main headline */}
          <h1 className="font-serif text-4xl font-semibold leading-tight tracking-tight text-primary-foreground md:text-5xl lg:text-6xl">
            <span className="block">Your competitors are</span>
            <span className="block">already using AI.</span>
            <span className="mt-2 block text-warm">Are you?</span>
          </h1>
        </div>

        <div
          className={`mt-8 transition-all delay-300 duration-1000 ease-out md:mt-10 ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-8 opacity-0"
          }`}
        >
          {/* Subtext */}
          <p className="max-w-xl font-sans text-lg leading-relaxed text-primary-foreground/70 md:text-xl">
            Most businesses know they should be leveraging AI. Few know where to
            start. We bridge that gap—turning complexity into clarity, and
            potential into results.
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
            className="bg-warm px-8 py-6 text-base font-medium text-warm-foreground hover:bg-warm/90"
          >
            Book a Free Consultation
          </Button>
          <span className="text-sm text-primary-foreground/50">
            No commitment. Just conversation.
          </span>
        </div>
      </div>
    </section>
  );
}
