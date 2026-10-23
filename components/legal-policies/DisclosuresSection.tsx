import { Fragment } from "react";
import Link from "next/link";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionEyebrow, SectionHeading, SectionLede } from "./shared";

const chain = [
  { label: "Research answer", body: "A finding or figure shown in the research workspace." },
  { label: "Evidence drawer", body: "Source, publication date, calculation basis and limitations." },
  {
    label: "Source details / rights label",
    body: "What the underlying source permits you to view, export or redistribute.",
  },
];

const pairs = [
  {
    title: "Glossary ↔ Source Methodology",
    links: [
      { label: "Glossary", href: "/research/glossary" },
      { label: "Source Methodology", href: "/research/source-methodology" },
    ],
  },
  {
    title: "Research & AI disclosures",
    links: [
      { label: "AI Terms", href: "/legal/ai-terms" },
      { label: "AI Principles", href: "/trust/ai-principles" },
    ],
  },
  {
    title: "Market Data & Source Rights ↔ Terms",
    links: [
      { label: "Data & Market Info Terms", href: "/legal/data-market-information-terms" },
      { label: "Terms of Service", href: "/legal/terms-of-service" },
    ],
  },
];

export default function DisclosuresSection() {
  return (
    <section className="bg-surface py-16 sm:py-[88px]">
      <Container>
        <Reveal>
          <SectionEyebrow tone="amber">Research, AI &amp; market-data disclosures</SectionEyebrow>
          <SectionHeading>A claim on Talvrin should trace back to a document, not just a footnote.</SectionHeading>
          <SectionLede>
            Research findings link forward into evidence and backward into the terms that govern
            how that evidence may be used.
          </SectionLede>
        </Reveal>

        <Reveal delay={0.1}>
          <ol className="mt-10 flex flex-col gap-3 md:flex-row md:items-stretch">
            {chain.map((c, i) => (
              <Fragment key={c.label}>
                <li className="flex flex-1 flex-col gap-1.5 rounded-xl border border-ink/10 bg-white px-5 py-4">
                  <span className="text-xs font-bold uppercase tracking-wide text-accent-violet">
                    {c.label}
                  </span>
                  <span className="text-sm leading-5 text-slate-700">{c.body}</span>
                </li>
                {i < chain.length - 1 && (
                  <li aria-hidden="true" className="flex items-center justify-center text-ink/30">
                    <span className="rotate-90 md:rotate-0">→</span>
                  </li>
                )}
              </Fragment>
            ))}
          </ol>
        </Reveal>

        <Reveal delay={0.15}>
          <ul className="mt-5 grid grid-cols-1 gap-2.5 md:grid-cols-3">
            {pairs.map((p) => (
              <li
                key={p.title}
                className="flex flex-col gap-1.5 rounded-xl border border-ink/10 bg-white px-5 py-4"
              >
                <span className="text-sm font-bold text-ink">{p.title}</span>
                <span className="flex flex-wrap gap-x-3.5 gap-y-1">
                  {p.links.map((l) => (
                    <Link
                      key={l.href}
                      href={l.href}
                      className="text-sm font-semibold text-accent-violet transition-colors hover:text-ink"
                    >
                      {l.label} →
                    </Link>
                  ))}
                </span>
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}
