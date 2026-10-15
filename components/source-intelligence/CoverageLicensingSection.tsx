import Link from "next/link";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionEyebrow, SectionHeading } from "../alerts/shared";

export default function CoverageLicensingSection() {
  return (
    <section className="bg-surface py-16 sm:py-20 lg:py-[88px]">
      <Container>
        <div className="mx-auto max-w-[1000px]">
          <Reveal>
            <SectionEyebrow tone="amber">Coverage, Licensing &amp; Availability</SectionEyebrow>
          </Reveal>
          <Reveal delay={0.1}>
            <SectionHeading>
              A global architecture is not a promise that every source is
              already confirmed.
            </SectionHeading>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-5 text-base leading-7 text-gray-600">
              Source classes, jurisdictions and licensing terms are released
              progressively as each source meets Talvrin&apos;s evidence-quality,
              rights and operational standards.
            </p>
          </Reveal>

          <Reveal
            delay={0.25}
            className="mt-6 rounded-2xl border border-ink/10 bg-white px-6 py-6 sm:mt-8 sm:px-8 sm:py-7"
          >
            <p className="text-xs font-bold tracking-wide text-accent-amber">ENTITLEMENT RULE</p>
            <p className="mt-2 text-sm leading-6 text-ink sm:text-base">
              Any source excerpt, preview, saved copy or download requires
              confirmed usage rights and entitlement enforcement. Unconfirmed
              availability is shown as &quot;Availability not confirmed,&quot;
              never a sweeping global claim.
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
