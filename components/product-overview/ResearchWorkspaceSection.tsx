import Link from "next/link";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";

const features = [
  "Question-led entry into every research object",
  "Source-linked evidence attached directly to the question",
  "Research view preservation across sessions",
  "Revisitability — return without rebuilding the reasoning",
  "Direct monitoring handoff from any saved view",
];

export default function ResearchWorkspaceSection() {
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-28">
      <Container className="relative">
        {/* 2-Column Split Layout */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center lg:gap-16">
          {/* Left Column: Title, Description, Disclaimer, Link (7 cols) */}
          <div className="flex flex-col lg:col-span-7">
            <Reveal>
              <span className="text-xs font-bold uppercase tracking-[1.2px] text-amber-600">
                MODULE 01 · RESEARCH WORKSPACE
              </span>
            </Reveal>

            <Reveal delay={0.1}>
              <h2 className="mt-4 text-4xl font-bold leading-[1.08] tracking-tight text-ink sm:text-5xl">
                Build the research view — not just the answer.
              </h2>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="mt-6 text-lg leading-relaxed text-ink/70">
                Start with a market, issuer, security, economic event, policy
                issue, or research question. Organize the evidence and context
                around the question so the reasoning can be revisited instead of
                rebuilt.
              </p>
            </Reveal>

            <Reveal delay={0.3} className="mt-8">
              <div className="rounded-xl border border-ink/10 bg-[#F6F5FB] p-4 sm:p-5">
                <p className="text-xs leading-relaxed text-ink/70 font-medium">
                  Does not claim unlimited workspaces, collaboration roles,
                  export formats, or integrations beyond what is released.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.4} className="mt-8">
              <Link
                href="/research-workspace"
                className="inline-flex items-center text-sm font-semibold text-[#6C5CE7] transition-colors hover:text-ink"
              >
                Explore Research Workspace →
              </Link>
            </Reveal>
          </div>

          {/* Right Column: Feature List with Checkmarks (5 cols) */}
          <div className="flex flex-col divide-y divide-ink/10 border-y border-ink/10 lg:col-span-5">
            {features.map((feature, index) => (
              <Reveal key={feature} delay={0.1 * (index + 1)}>
                <div className="flex items-start gap-4 py-4 sm:py-5">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#EEEDFB] text-[#6C5CE7] text-xs font-bold">
                    ✓
                  </span>
                  <p className="text-sm font-medium text-ink sm:text-base">
                    {feature}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
