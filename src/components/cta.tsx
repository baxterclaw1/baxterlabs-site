import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/scroll-reveal";

export function CTA() {
  return (
    <section className="grain relative overflow-hidden border-t border-white/[0.06] px-6 py-24 md:py-32">
      {/* Centered glow */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 50% 50% at 50% 50%, rgba(56, 189, 248, 0.06) 0%, transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-3xl text-center">
        <ScrollReveal>
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Ready to see what&apos;s possible?
          </h2>
          <p className="mx-auto mt-6 max-w-xl leading-relaxed text-muted-foreground">
            Tell us what&apos;s slowing you down. We&apos;ll tell you what&apos;s possible.
          </p>
          <div className="mt-10">
            <Button
              size="lg"
              className="bg-glow px-8 py-6 text-base font-medium text-glow-foreground transition-all duration-300 hover:bg-glow/90 hover:shadow-lg hover:shadow-glow/25"
            >
              Book a Free Consultation
            </Button>
          </div>
          <p className="mt-4 text-sm text-muted-foreground/60">
            30 minutes. Zero obligation. Real answers.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
