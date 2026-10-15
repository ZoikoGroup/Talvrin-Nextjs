import Link from "next/link";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionEyebrow, SectionHeading } from "../alerts/shared";

export default function CoverageSection() {
  return (
    <section className="bg-surface py-16 sm:py-20 lg:py-[88px]">
      <Container>
        <div className="mx-auto max-w-[1000px]">
          <Reveal>
            <SectionEyebrow tone="amber">Coverage &amp; Data-Rights Disclosure</SectionEyebrow>
          </Reveal>
          <Reveal delay={0.1}>
            <SectionHeading>
              Talvrin is being designed for global public markets — available
              source sets depend on released coverage and data rights.
            </SectionHeading>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-5 text-base leading-7 text-gray-600">
              A source being architecturally supported is not the same as a source
              being confirmed, licensed and released for change detection today.
            </p>
          </Reveal>

          <Reveal
            delay={0.25}
            className="mt-6 rounded-2xl border border-ink/10 bg-white px-6 py-6 sm:mt-8 sm:px-8 sm:py-7"
          >
            <p className="text-xs font-bold tracking-wide text-accent-amber">RESTRICTED STATE</p>
            <p className="mt-2 text-sm leading-6 text-ink sm:text-base">
              When a licensed source is not currently accessible, Change Detection
              shows &quot;Availability not confirmed&quot; — never a prohibited
              excerpt, a fabricated placeholder, or a sweeping global-coverage
              claim.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <Link
              href="/trust/data-sources"
              className="mt-8 inline-block text-sm font-semibold text-accent-violet transition-colors hover:text-brand"
            >
              View Data Sources →
            </Link>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
