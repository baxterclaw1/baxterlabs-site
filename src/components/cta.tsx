import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/scroll-reveal";

export function CTA() {
  return (
    <section className="grain relative overflow-hidden bg-primary px-6 py-24 md:py-32">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 50% 60% at 50% 50%, oklch(0.35 0.08 55 / 0.5) 0%, transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-3xl text-center">
        <ScrollReveal>
          <h2 className="font-serif text-3xl font-semibold tracking-tight text-primary-foreground md:text-4xl lg:text-5xl">
            Ready to see what&apos;s possible?
          </h2>
          <p className="mx-auto mt-6 max-w-xl leading-relaxed text-primary-foreground/60">
            Tell us what&apos;s slowing you down. We&apos;ll tell you what&apos;s possible.
          </p>
          <div className="mt-10">
            <Button
              size="lg"
              className="bg-warm px-8 py-6 text-base font-medium text-warm-foreground transition-all duration-300 hover:bg-warm/90 hover:shadow-lg hover:shadow-warm/20"
            >
              Book a Free Consultation
            </Button>
          </div>
          <p className="mt-4 text-sm text-primary-foreground/35">
            30 minutes. Zero obligation. Real answers.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
