import { Button } from "@/components/ui/button";

export function CTA() {
  return (
    <section className="bg-secondary/50 px-6 py-20 md:py-28">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="font-serif text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
          Ready to see what AI can do for your business?
        </h2>
        <p className="mx-auto mt-6 max-w-xl leading-relaxed text-muted-foreground">
          Let&apos;s have a conversation. No sales pitch, no pressure—just an
          honest discussion about where AI might (or might not) fit into your
          operations.
        </p>
        <div className="mt-10">
          <Button
            size="lg"
            className="bg-primary px-8 py-6 text-base font-medium text-primary-foreground hover:bg-primary/90"
          >
            Book a Free Consultation
          </Button>
        </div>
      </div>
    </section>
  );
}
