import { Navigation } from "@/components/navigation";
import { Hero } from "@/components/hero";
import { WhatWeDo } from "@/components/what-we-do";
import { Services } from "@/components/services";
import { CTA } from "@/components/cta";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="flex-1">
        <Hero />
        <WhatWeDo />
        <Services />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
