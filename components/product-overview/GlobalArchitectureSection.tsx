import Image from "next/image";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";

export default function GlobalArchitectureSection() {
  return (
    <section className="relative overflow-hidden bg-ink py-20 sm:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(600px 420px at 15% 10%, rgba(108,92,231,0.2), rgba(108,92,231,0) 65%), radial-gradient(500px 380px at 85% 90%, rgba(185,129,50,0.12), rgba(185,129,50,0) 60%)",
        }}
      />
      <Container className="relative">
        {/* Header content */}
        <div className="max-w-3xl">
          <Reveal>
            <span className="text-xs font-bold uppercase tracking-[1.2px] text-[#A29BFE]">
              GLOBAL ARCHITECTURE
            </span>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="mt-4 text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-[44px]">
              One evidence architecture. Global public markets. Coverage
              released with discipline.
            </h2>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mt-6 text-lg leading-relaxed text-white/72">
              Public markets are interconnected, but platform architecture and
              released coverage are not the same thing. Talvrin is engineered
              for multiple markets and jurisdictions; actual market, source,
              dataset, and feature availability must be stated from the approved
              coverage registry.
            </p>
          </Reveal>
        </div>

        {/* Wide Featured Image Banner */}
        <Reveal delay={0.3} className="mt-16">
          <div className="relative aspect-[32/10] w-full overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-2xl">
            <Image
              src="/images/product/overview/architecture.png"
              alt="Diverse team of colleagues collaborating and reviewing paperwork and laptops in a bright office"
              fill
              sizes="(min-width: 1280px) 1200px, 100vw"
              className="object-cover"
            />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
