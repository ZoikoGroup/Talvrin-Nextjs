import Image from "next/image";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionEyebrow, SectionHeading } from "../global-markets/shared";

const articles = [
  {
    tag: "Central Banks",
    title: "Publication Date vs. Reference Period: Why U.S. Treasury Evidence Needs Both",
    description:
      "Two timestamps carry different meaning for sovereign financing and market evidence.",
    byline: "Talvrin Research · 20 Aug 2026 · United States",
  },
  {
    tag: "Macro",
    title: "What an Official Inflation Revision Does — and Does Not — Change",
    description: "Understanding evidence revision without assuming automatic market materiality.",
    byline: "Talvrin Research · 12 Aug 2026 · Global",
  },
  {
    tag: "Methodology",
    title: 'U.S. Treasuries and U.K. Gilts: What "Initial Market Wedge" Actually Means',
    description:
      "How governed coverage states separate architecture readiness from released research depth.",
    byline: "Talvrin Research · 05 Aug 2026 · United States · United Kingdom",
  },
];

export default function DiscoverabilitySection() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <Container>
        <Reveal className="max-w-3xl">
          <SectionEyebrow tone="amber">Discoverability &amp; Authority</SectionEyebrow>
          <SectionHeading>Research and insights in fixed income.</SectionHeading>
        </Reveal>

        <div className="mt-9 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <Reveal className="relative min-h-[220px] overflow-hidden rounded-[14px] border border-ink/8 lg:min-h-0">
            <Image
              src="/images/fixed-income/fixed-income-discoverability-team.webp"
              alt="Colleagues reviewing fixed-income research together"
              fill
              sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
              className="object-cover"
            />
          </Reveal>

          {articles.map((article, index) => (
            <Reveal key={article.title} delay={index * 0.08}>
              <div className="flex h-full flex-col rounded-[14px] border border-ink/8 bg-surface p-7">
                <p className="text-[11px] font-bold uppercase tracking-wide text-accent-violet">
                  {article.tag}
                </p>
                <h3 className="mt-3 text-lg font-bold leading-snug text-ink">{article.title}</h3>
                <p className="mt-3 flex-1 text-[15px] leading-relaxed text-slate-600">
                  {article.description}
                </p>
                <p className="mt-4 border-t border-ink/8 pt-3 text-[13px] text-slate-500">
                  {article.byline}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
