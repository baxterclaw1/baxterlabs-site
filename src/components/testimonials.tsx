import { ScrollReveal } from "@/components/scroll-reveal";

const testimonials = [
  {
    quote:
      "We were drowning in manual data entry. BaxterLabs automated our entire intake process — what took 3 hours now takes 15 minutes.",
    author: "Sarah Chen",
    role: "COO, TechFlow Inc.",
    initials: "SC",
  },
  {
    quote:
      "They don't just build tools — they understand business. The ROI on our project was clear within the first month.",
    author: "Marcus Williams",
    role: "Founder, Elevate Digital",
    initials: "MW",
  },
  {
    quote:
      "Working with BaxterLabs felt like having an AI team in-house. Responsive, thoughtful, and delivered beyond expectations.",
    author: "Elena Rodriguez",
    role: "VP Operations, Nexus Corp",
    initials: "ER",
  },
];

export function Testimonials() {
  return (
    <section className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-5xl">
        <ScrollReveal>
          <p className="mb-4 font-sans text-sm font-medium uppercase tracking-[0.2em] text-accent">
            What clients say
          </p>
          <h2 className="mb-16 font-serif text-3xl font-semibold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Results that speak for themselves.
          </h2>
        </ScrollReveal>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <ScrollReveal key={testimonial.author} delay={index * 150}>
              <article className="flex h-full flex-col rounded-lg border border-border bg-card p-8 transition-all duration-300 hover:border-accent/20 hover:shadow-md hover:shadow-accent/5">
                <span className="mb-4 font-serif text-4xl leading-none text-accent/30">
                  &ldquo;
                </span>

                <blockquote className="flex-1 font-sans leading-relaxed text-foreground">
                  {testimonial.quote}
                </blockquote>

                <div className="mt-8 flex items-center gap-3 border-t border-border pt-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/10 text-sm font-medium text-accent">
                    {testimonial.initials}
                  </div>
                  <div>
                    <p className="font-medium text-foreground">
                      {testimonial.author}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
