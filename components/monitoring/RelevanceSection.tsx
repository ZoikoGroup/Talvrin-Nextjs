import Image from "next/image";
import Link from "next/link";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionEyebrow, SectionHeading } from "../alerts/shared";

export default function RelevanceSection() {
  return (
    <section className="bg-surface py-16 sm:py-20 lg:py-[88px]">
      <Container>
        <Reveal>
          <SectionEyebrow>Relevance &amp; Reassessment</SectionEyebrow>
        </Reveal>
        <Reveal delay={0.1}>
          <SectionHeading className="max-w-[800px]">
            A change can be flagged. Only you decide if it matters.
          </SectionHeading>
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-6 sm:mt-12 lg:grid-cols-2 lg:items-start lg:gap-5">
          <Reveal
            delay={0.2}
            className="relative aspect-[617/267] w-full overflow-hidden rounded-2xl bg-ink sm:aspect-[16/7]"
          >
            <Image
              src="/images/product/monitoring/monitoring-relevance-boardroom.webp"
              alt="Team in discussion around a long boardroom table in front of tall windows"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </Reveal>

          <Reveal delay={0.3} className="min-w-0">
            <p className="text-sm font-bold text-ink">Reassessment pathway</p>
            <div className="mt-3 rounded-2xl border border-ink/10 bg-white p-5">
              <p className="text-xs font-bold tracking-wide text-gray-600">EARLIER VIEW · 02 Aug 2026</p>
              <p className="mt-1.5 text-sm leading-5 text-slate-700">
                Working thesis cited stable services growth across regions,
                supported by the prior 10-K filing.
              </p>
            </div>
            <div className="mt-3 rounded-2xl border border-accent-amber/30 bg-white p-5">
              <p className="text-xs font-bold tracking-wide text-accent-amber">
                CHANGED EVIDENCE · 04 Sep 2026
              </p>
              <p className="mt-1.5 text-sm leading-5 text-slate-700">
                Revised filing language flags slower services growth outside the
                U.S. — reviewer action pending.
              </p>
            </div>
            <Link
              href="/product/evidence"
              className="mt-4 inline-block text-xs font-semibold text-accent-violet transition-colors hover:text-brand"
            >
              Open Side-by-Side Review →
            </Link>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
