import { ScrollReveal } from "@/components/scroll-reveal";

const steps = [
  {
    number: "01",
    title: "Discover",
    description: "Learn your business. Identify the bottlenecks.",
  },
  {
    number: "02",
    title: "Design",
    description: "Map out the solution and a clear roadmap.",
  },
  {
    number: "03",
    title: "Build & Launch",
    description: "Build, deploy, and make sure it works.",
  },
];

export function WhatWeDo() {
  return (
    <section className="glow-blue relative border-t border-white/[0.06] px-6 py-24 md:py-32">
      <div className="mx-auto max-w-5xl">
        <ScrollReveal>
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-glow">
            What we do
          </p>
          <h2 className="max-w-2xl text-3xl font-bold leading-snug tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Customized AI and workflow automation.{" "}
            <span className="text-muted-foreground">
              Tailored to how your business actually works.
            </span>
          </h2>
        </ScrollReveal>

        <div className="mt-16 grid gap-8 md:mt-20 md:grid-cols-3 md:gap-12">
          {steps.map((step, index) => (
            <ScrollReveal key={step.number} delay={index * 150}>
              <article className="relative">
                <span className="font-mono text-5xl font-bold text-glow/15">
                  {step.number}
                </span>
                <h3 className="mt-2 text-xl font-semibold text-foreground">
                  {step.title}
                </h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </article>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={500}>
          <div className="mt-16 flex items-center gap-4 md:mt-20">
            <div className="h-px flex-1 bg-white/[0.06]" />
            <p className="font-mono text-xs font-medium tracking-wider text-muted-foreground">
              Free consultation &rarr; Custom roadmap &rarr; Build &rarr; Launch
            </p>
            <div className="h-px flex-1 bg-white/[0.06]" />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
