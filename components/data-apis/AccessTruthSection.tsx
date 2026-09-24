import Image from "next/image";
import Link from "next/link";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionEyebrow } from "./shared";

export default function AccessTruthSection() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <Container>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-8">
          <Reveal className="flex flex-col gap-3 rounded-2xl bg-surface p-6 sm:p-8">
            <SectionEyebrow tone="amber">Access, Rights &amp; Governance</SectionEyebrow>
            <h3 className="text-xl font-bold text-ink">Not publicly established here.</h3>
            <p className="text-base leading-6 text-slate-600">
              This page will name a public-safe access class per interface — such as
              documentation-visible, account, or entitlement-required — and link to the canonical
              rights or licensing policy. It will never expose entitlement logic, role mappings, or
              customer plan detail.
            </p>
            <p className="mt-auto pt-1.5 text-sm font-semibold text-accent-violet">
              Authentication (not yet released)
            </p>
          </Reveal>

          <Reveal
            delay={0.1}
            className="relative aspect-[418/337] w-full overflow-hidden rounded-2xl bg-surface lg:aspect-auto"
          >
            <Image
              src="/images/developers/data-APIs/data-apis-access-discussion.webp"
              alt="Two colleagues discussing work at a desk"
              fill
              sizes="(min-width: 1024px) 418px, 100vw"
              className="object-cover"
            />
          </Reveal>

          <Reveal delay={0.15} className="flex flex-col gap-3 rounded-2xl bg-surface p-6 sm:p-8">
            <SectionEyebrow tone="violet">Versioning, Freshness &amp; Deprecation</SectionEyebrow>
            <h3 className="text-xl font-bold text-ink">
              Lifecycle and timing shown only when they&apos;re real.
            </h3>
            <p className="text-base leading-6 text-slate-600">
              Once an interface is released, its current version, timing/freshness class, and
              deprecation state will stay visible in its catalog card and detail — with breaking
              changes given high-visibility treatment, never buried in generic notes.
            </p>
            <p className="mt-auto pt-1.5 text-sm font-semibold text-accent-violet">
              Changelog (not yet released)
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.1} className="mt-6 flex flex-col gap-3 rounded-2xl bg-surface p-6 sm:p-8">
          <SectionEyebrow tone="amber">
            Operational Status &amp; Change Communication
          </SectionEyebrow>
          <h3 className="text-xl font-bold text-ink">
            No fabricated uptime, SLA, or incident history.
          </h3>
          <p className="max-w-[780px] text-base leading-6 text-slate-600">
            A public Developer Status source is not currently available, so no interface here
            carries an operational badge. Once an authoritative status and change mapping exists per
            interface, this catalog will link to it directly rather than restate its content.
          </p>
          <Link
            href="/resources/contact-support"
            className="pt-1.5 text-sm font-semibold text-accent-violet transition-colors hover:text-ink"
          >
            Contact Support →
          </Link>
        </Reveal>
      </Container>
    </section>
  );
}
