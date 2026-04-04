import { ScrollReveal } from "@/components/scroll-reveal";

const services = [
  {
    title: "AI Agent Development",
    description:
      "Custom autonomous agents that handle complex tasks, make decisions, and run 24/7 — so your team can focus on what matters.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
      </svg>
    ),
  },
  {
    title: "Workflow Automation",
    description:
      "Eliminate the repetitive work that eats your week. We design automation pipelines that save hours and reduce human error to near zero.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
  {
    title: "Web & App Development",
    description:
      "Modern applications, dashboards, and tools built for speed. From internal portals to client-facing products — designed to scale.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    ),
  },
  {
    title: "AI Strategy Consulting",
    description:
      "Not sure where AI fits? We audit your operations, identify the highest-impact opportunities, and build a roadmap you can actually follow.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
      </svg>
    ),
  },
];

export function Services() {
  return (
    <section className="grain relative border-t border-white/[0.06] px-6 py-24 md:py-32">
      {/* Subtle glow */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 50% 30% at 50% 0%, rgba(56, 189, 248, 0.04) 0%, transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-5xl">
        <ScrollReveal>
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-glow">
            Services
          </p>
          <h2 className="mb-16 max-w-lg text-3xl font-bold leading-snug tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Four ways we make your business faster.
          </h2>
        </ScrollReveal>

        <div className="grid gap-4 sm:grid-cols-2">
          {services.map((service, index) => (
            <ScrollReveal key={service.title} delay={index * 100}>
              <article className="glass group relative cursor-pointer overflow-hidden rounded-xl p-8 transition-all duration-500">
                {/* Hover glow */}
                <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-glow/0 transition-all duration-500 group-hover:bg-glow/5" />

                <div className="relative">
                  <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-lg border border-white/[0.08] text-muted-foreground transition-all duration-300 group-hover:border-glow/30 group-hover:text-glow">
                    {service.icon}
                  </div>

                  <h3 className="mb-3 text-xl font-semibold text-foreground">
                    {service.title}
                  </h3>

                  <p className="leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>

                  <div className="mt-6 flex items-center gap-2 text-sm font-medium text-glow opacity-0 transition-all duration-300 group-hover:opacity-100">
                    <span>Learn more</span>
                    <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </div>
                </div>

                {/* Bottom accent bar */}
                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-glow to-teal-400 transition-all duration-500 group-hover:w-full" />
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
