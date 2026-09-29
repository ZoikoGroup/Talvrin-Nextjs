import Image from "next/image";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionEyebrow, SectionHeading, SectionLede } from "./shared";

const scopes = [
  {
    label: "Company Research",
    body: "Company, issuer, filing, event, evidence relationships, and monitoring.",
  },
  { label: "Security Context", body: "Security and listing concepts where registry data exists." },
  {
    label: "Financial Disclosures",
    body: "Public filings and issuer disclosures where source rights permit.",
  },
  { label: "Market Context", body: "Governed contextual market data where approved." },
  {
    label: "Research Interpretation",
    body: "Source-linked analysis and AI-assisted explanation.",
  },
];

export default function ScopeSection() {
  return (
    <section className="bg-surface py-16 sm:py-24">
      <Container>
        <Reveal className="max-w-[800px]">
          <SectionEyebrow tone="amber">Scope &amp; Definition</SectionEyebrow>
          <SectionHeading>What Equities means in Talvrin.</SectionHeading>
          <SectionLede className="max-w-[800px] sm:text-base sm:leading-7">
            Talvrin Equities is an evidence-led research destination for public-company and
            equity-security questions. It connects the question to inspectable company, filing,
            disclosure, and market-context evidence while preserving the reasoning and monitoring
            later changes.
          </SectionLede>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-8 xl:grid-cols-[minmax(0,1fr)_minmax(0,518px)] xl:items-start xl:gap-12">
          <div>
            <Reveal>
              <p className="pb-4 text-xs font-bold uppercase tracking-wide text-slate-600 sm:pl-[232px]">
                May explain
              </p>
            </Reveal>

            {scopes.map((scope, index) => (
              <Reveal
                key={scope.label}
                delay={index * 0.04}
                className="flex flex-col gap-3 py-4 sm:flex-row sm:items-start sm:gap-6"
              >
                <span className="w-fit min-w-[208px] rounded-md border border-ink/20 bg-white px-4 py-1.5 text-center text-xs font-bold text-ink">
                  {scope.label}
                </span>
                <p className="text-base text-slate-700">{scope.body}</p>
              </Reveal>
            ))}
          </div>

          <Reveal
            delay={0.15}
            className="relative aspect-[518/368] w-full overflow-hidden rounded-2xl bg-white"
          >
            <Image
              src="/images/markets/equities/equities-scope-desk.webp"
              alt="Analysts reviewing charts on a screen in an office"
              fill
              sizes="(min-width: 1024px) 518px, 100vw"
              className="object-cover"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
