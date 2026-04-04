const testimonials = [
  {
    quote:
      "BaxterLabs helped us automate our entire customer onboarding process. What used to take 3 hours now takes 15 minutes.",
    author: "Sarah Chen",
    role: "COO, TechFlow Inc.",
    initials: "SC",
  },
  {
    quote:
      "They don't just build AI tools—they understand business. The ROI on our project was clear within the first month.",
    author: "Marcus Williams",
    role: "Founder, Elevate Digital",
    initials: "MW",
  },
  {
    quote:
      "Working with BaxterLabs felt like having an AI team in-house. They were responsive, thoughtful, and delivered beyond expectations.",
    author: "Elena Rodriguez",
    role: "VP Operations, Nexus Corp",
    initials: "ER",
  },
];

export function Testimonials() {
  return (
    <section className="px-6 py-20 md:py-28">
      <div className="mx-auto max-w-5xl">
        <p className="mb-4 font-sans text-sm font-medium uppercase tracking-widest text-muted-foreground">
          What our clients say
        </p>
        <h2 className="mb-12 font-serif text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
          Results that speak for themselves
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.author}
              className="flex flex-col rounded-lg border border-border bg-card p-6"
            >
              {/* Quote */}
              <blockquote className="flex-1 text-foreground leading-relaxed">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="mt-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-sm font-medium text-accent-foreground">
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
          ))}
        </div>
      </div>
    </section>
  );
}
