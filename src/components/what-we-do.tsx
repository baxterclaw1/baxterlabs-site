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
    <section className="warm-glow relative px-6 py-24 md:py-32">
      <div className="mx-auto max-w-5xl">
        <ScrollReveal>
          <p className="mb-4 font-sans text-sm font-medium uppercase tracking-[0.2em] text-accent">
            What we do
          </p>
          <h2 className="max-w-2xl font-serif text-3xl font-semibold leading-snug tracking-tight text-foreground md:text-4xl lg:text-5xl">
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
                <span className="font-serif text-5xl font-semibold text-accent/20">
                  {step.number}
                </span>
                <h3 className="mt-2 font-serif text-xl font-semibold text-foreground">
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
            <div className="h-px flex-1 bg-border" />
            <p className="text-sm font-medium text-muted-foreground">
              Free consultation &rarr; Custom roadmap &rarr; Build &rarr; Launch
            </p>
            <div className="h-px flex-1 bg-border" />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
