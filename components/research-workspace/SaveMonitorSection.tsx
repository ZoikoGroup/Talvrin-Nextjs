import Image from "next/image";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionEyebrow, SectionHeading } from "../alerts/shared";

export default function SaveMonitorSection() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-[88px]">
      <Container>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,420px)] lg:items-start xl:grid-cols-[minmax(0,761px)_minmax(0,481px)] xl:justify-between">
          <div className="min-w-0">
            <Reveal>
              <SectionEyebrow>Save &amp; Monitor</SectionEyebrow>
            </Reveal>
            <Reveal delay={0.1}>
              <SectionHeading>
                Saved Research and Monitoring are the governed next steps.
              </SectionHeading>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-5 max-w-[780px] text-base leading-7 text-gray-600">
                The workspace hands off to its own canonical destinations rather
                than duplicating their state — each one gated, conditional and
                explicit.
              </p>
            </Reveal>

            <Reveal
              delay={0.3}
              className="mt-8 rounded-2xl border border-ink/10 bg-surface p-6 sm:mt-10 sm:p-7"
            >
              <p className="text-xs font-bold tracking-wide text-accent-amber">SAVE &amp; REVISIT</p>
              <h3 className="mt-2.5 text-lg font-bold text-ink">→ Saved Research</h3>
              <p className="mt-2.5 text-sm leading-6 text-gray-600 sm:text-base">
                Durable research-object management is owned by Saved Research.
                The handoff is disabled or hidden until that capability is
                verified as truly available.
              </p>
            </Reveal>
          </div>

          <Reveal
            delay={0.2}
            className="relative aspect-[481/398] w-full overflow-hidden rounded-2xl border border-ink/10 bg-surface sm:aspect-[16/9] lg:aspect-[481/398]"
          >
            <Image
              src="/images/product/research-workspace/research-workspace-save-monitor-workspace.webp"
              alt="Two colleagues working on laptops at a long table in a concrete-walled studio"
              fill
              sizes="(min-width: 1280px) 481px, (min-width: 1024px) 420px, 100vw"
              className="object-cover"
            />
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <p className="mt-6 text-sm text-gray-600">
            Export and share actions activate only once rights policy,
            authorization and actual implementation are verified.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
