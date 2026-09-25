import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionEyebrow, SectionHeading, SectionLede } from "./shared";

const rows = [
  {
    maySay:
      "Note that Talvrin's architecture is designed to support integration with common research workflows.",
    mustNot: "Claim a specific connection exists merely because the architecture could support it.",
  },
  {
    maySay:
      "Show the exact capabilities, direction, and permission scope a specific released integration actually has.",
    mustNot: "Use a partner logo or brand mark to imply support beyond the approved relationship.",
  },
  {
    maySay:
      "State whether source identity, timing, and jurisdiction context are preserved, transformed, or dropped when data crosses the integration boundary.",
    mustNot: "Promise lossless provenance without technical validation.",
  },
  {
    maySay:
      "Link to the canonical rights or licensing policy governing what a connection may transfer or export.",
    mustNot: "Assert redistribution rights a licensing agreement doesn't grant.",
  },
  {
    maySay:
      "Distinguish integration lifecycle, operational status, permission scope, and rights eligibility as separate facts.",
    mustNot: "Collapse those four dimensions into a single “Connect” button or badge.",
  },
];

export default function RightsTruthSection() {
  return (
    <section className="bg-surface py-16 sm:py-24">
      <Container>
        <Reveal className="max-w-[780px]">
          <SectionEyebrow tone="amber">Evidence, Data Flow &amp; Rights Truth</SectionEyebrow>
          <SectionHeading>A working connection is not the same as a licensed one.</SectionHeading>
          <SectionLede className="max-w-[780px] sm:text-base sm:leading-7">
            Each integration resolves its own capability, permission, and rights context from a
            governed source — never from Talvrin&apos;s global platform architecture, a partner
            logo, or a technically successful connection alone.
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
            <span className="text-ink">Copy lock:</span> terms like &ldquo;real-time,&rdquo;
            &ldquo;two-way sync,&rdquo; &ldquo;works with,&rdquo; &ldquo;connect now,&rdquo; or
            &ldquo;global availability&rdquo; appear only when an approved integration record
            explicitly supports the exact wording and scope.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
