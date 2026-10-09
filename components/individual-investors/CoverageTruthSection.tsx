import Link from "next/link";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionIntro } from "./shared";

const tiers = [
  {
    title: "Deep Coverage",
    body: "High-confidence, production-supported research depth for a named market or domain.",
  },
  { title: "Supported", body: "Production-supported but narrower than Deep Coverage." },
  { title: "Limited / Beta", body: "Available with explicit limitations shown near the relevant claim." },
  { title: "Planned", body: "Roadmap only — never presented as currently available." },
  {
    title: "Architecture-ready",
    body: "The architecture can support a category, but no coverage claim follows alone.",
  },
];

export default function CoverageTruthSection() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <Container>
        <Reveal>
          <SectionIntro
            eyebrow="Market Coverage Truth"
            title={<>&quot;Global&quot; describes the architecture. Coverage is what&apos;s released.</>}
          />
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {tiers.map((tier, index) => (
            <Reveal key={tier.title} delay={index * 0.05} className="h-full">
              <div className="flex h-full flex-col gap-2 rounded-xl border border-ink/10 bg-surface p-6">
                <h3 className="text-base font-bold text-ink">{tier.title}</h3>
                <p className="text-sm leading-[22px] text-muted">{tier.body}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.25} className="mt-9">
          <div className="rounded-xl border border-ink/10 bg-surface px-6 py-6 sm:px-7">
            <p className="text-xs font-bold uppercase tracking-wide text-ink">Coverage Rule</p>
            <p className="mt-2 text-[15px] leading-6 text-muted">
              You deserve a clear route to current coverage, not an implied universal market. See{" "}
              <Link
                href="/markets/market-coverage"
                className="font-semibold text-accent-violet underline-offset-2 hover:underline"
              >
                Market Coverage
              </Link>{" "}
              for the governed, up-to-date status.
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
