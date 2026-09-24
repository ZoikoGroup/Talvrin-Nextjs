import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionEyebrow, SectionHeading, SectionLede } from "./shared";

const rows = [
  {
    maySay: "Note that Talvrin's architecture is designed to support global public markets.",
    mustNot:
      "Claim market, source, or dataset coverage merely because the architecture could support it.",
  },
  {
    maySay:
      "Show named markets, jurisdictions, or asset classes actually supported by a specific interface.",
    mustNot: "Infer coverage from Talvrin's brand, a route name, or marketing copy.",
  },
  {
    maySay:
      "State a public-safe access class such as documentation-visible, account, or entitlement-required.",
    mustNot:
      "Reveal entitlement algorithms, role mappings, customer plans, or internal policy identifiers.",
  },
  {
    maySay: "Link to a canonical rights or licensing policy when one is approved.",
    mustNot: "Assert free, public, or unlimited use without licensing authority.",
  },
  {
    maySay:
      "Distinguish interface lifecycle, coverage depth, access class, and operational status as separate facts.",
    mustNot: "Collapse those four dimensions into a single “Available” badge.",
  },
];

export default function CoverageTruthSection() {
  return (
    <section className="bg-surface py-16 sm:py-24">
      <Container>
        <Reveal className="max-w-[780px]">
          <SectionEyebrow tone="amber">Coverage, Access &amp; Rights Truth</SectionEyebrow>
          <SectionHeading>
            Architecture describes ambition. Coverage describes what&apos;s actually released.
          </SectionHeading>
          <SectionLede className="max-w-[780px] sm:text-base sm:leading-7">
            Each Data API resolves its own market, domain, and rights context from a governed
            source — never from Talvrin&apos;s global platform architecture, a route name, or a
            user&apos;s location.
          </SectionLede>
        </Reveal>

        <div className="mt-10">
          <div className="hidden gap-4 pb-3 sm:grid sm:grid-cols-2">
            <p className="text-xs font-bold uppercase tracking-wide text-slate-600">
              This page may say
            </p>
            <p className="text-xs font-bold uppercase tracking-wide text-slate-600">
              This page must not invent
            </p>
          </div>

          {rows.map((row, index) => (
            <Reveal
              key={row.maySay}
              delay={index * 0.04}
              className="grid grid-cols-1 gap-2 border-b border-ink/10 py-4 sm:grid-cols-2 sm:gap-4"
            >
              <div>
                <p className="text-xs font-bold uppercase tracking-wide text-slate-600 sm:hidden">
                  May say
                </p>
                <p className="text-base text-ink">{row.maySay}</p>
              </div>
              <div>
                <p className="mt-2 text-xs font-bold uppercase tracking-wide text-slate-600 sm:hidden">
                  Must not invent
                </p>
                <p className="text-base text-slate-600">{row.mustNot}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1} className="mt-8 rounded-xl border border-ink/10 bg-white px-5 py-4">
          <p className="text-xs font-bold leading-5 text-slate-600">
            <span className="text-ink">Copy lock:</span> terms like &ldquo;complete coverage,&rdquo;
            &ldquo;real-time,&rdquo; &ldquo;global data API,&rdquo; &ldquo;free,&rdquo; or
            &ldquo;unlimited&rdquo; appear only when an approved registry, coverage, or rights
            source explicitly supports the exact wording and scope.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
