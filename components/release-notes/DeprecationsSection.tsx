import Image from "next/image";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { CardLink, SectionIntro } from "./shared";

export default function DeprecationsSection() {
  return (
    <section id="deprecations" className="scroll-mt-32 bg-surface py-20 sm:py-[80px]">
      <Container>
        <Reveal>
          <SectionIntro
            eyebrow="Deprecations, Removals & Coverage"
            tone="amber"
            title="Advance notice, not surprises."
            className="[&>p:last-child]:max-w-none"
          >
            Deprecation and removal entries carry an effective date and migration guidance before
            anything is retired. Coverage and data-availability changes are confirmed against the
            governed coverage authority, not estimated here.
          </SectionIntro>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <Reveal className="h-full">
            <div className="flex h-full flex-col gap-2 rounded-xl border border-ink/10 bg-white p-5">
              <h3 className="text-base font-bold text-ink">Deprecation &amp; removal notices</h3>
              <p className="text-sm leading-5 text-muted">
                No deprecations or removals have been published. When one is approved, its effective
                date and replacement guidance will appear here in advance.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.05} className="h-full">
            <div className="flex h-full flex-col gap-2 rounded-xl border border-ink/10 bg-white p-5">
              <h3 className="text-base font-bold text-ink">Coverage &amp; data availability</h3>
              <p className="text-sm leading-5 text-muted">
                A released change to market or data coverage will describe the change and link to the
                canonical coverage record — never a standalone estimate.
              </p>
              <div className="mt-auto pt-1">
                <CardLink href="/markets/market-coverage">View Market Coverage</CardLink>
              </div>
            </div>
          </Reveal>

          <Reveal
            delay={0.1}
            className="relative min-h-[184px] overflow-hidden rounded-xl border border-ink/10 sm:col-span-2"
          >
            <Image
              src="/images/resources/release-notes/release-notes-deprecations.webp"
              alt="Colleagues talking over coffee in a glass-walled atrium"
              fill
              sizes="(min-width: 1024px) 632px, 100vw"
              className="object-cover"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
