import Image from "next/image";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionEyebrow, SectionHeading } from "./shared";

const articles = [
  {
    category: "Companies & Filings",
    title: "Publication Date vs. Reporting Period: Why a Filing Needs Both",
    body: "Two timestamps carry different meaning when researching a company disclosure or regulatory filing.",
    meta: "Talvrin Research · 02 Sep 2026 · United States",
  },
  {
    category: "Market Structure",
    title: "Why Company, Issuer, and Security Are Not the Same Object",
    body: "A practical look at entity identity pitfalls that cause duplicate or misleading research.",
    meta: "Talvrin Editorial · 25 Aug 2026 · Global",
  },
  {
    category: "Methodology",
    title: "Reading an Amended Filing Without Losing the Original",
    body: "How version lineage keeps prior disclosures visible instead of silently overwritten.",
    meta: "Talvrin Research · 18 Aug 2026 · Global",
  },
];

export default function InsightsSection() {
  return (
    <section className="bg-surface py-16 sm:py-24">
      <Container>
        <Reveal className="max-w-[820px]">
          <SectionEyebrow tone="amber">Discoverability &amp; Authority</SectionEyebrow>
          <SectionHeading>Companies &amp; Filings — research and insights.</SectionHeading>
        </Reveal>

        <div className="mt-9 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {articles.map((article, index) => (
            <Reveal
              key={article.title}
              delay={index * 0.05}
              className="flex flex-col rounded-2xl border border-ink/10 bg-white p-6"
            >
              <p className="text-xs font-bold text-accent-violet">{article.category}</p>
              <h3 className="mt-2.5 text-lg font-bold leading-6 text-ink">{article.title}</h3>
              <p className="mt-2.5 text-sm leading-5 text-slate-600">{article.body}</p>
              <p className="mt-auto border-t border-ink/10 pt-3 text-sm text-slate-600">
                {article.meta}
              </p>
            </Reveal>
          ))}

          <Reveal
            delay={0.2}
            className="relative aspect-[3/2] overflow-hidden rounded-2xl sm:col-span-2 lg:col-span-1 lg:aspect-auto"
          >
            <Image
              src="/images/markets/equities/equities-insights-review.webp"
              alt="Two colleagues reviewing a document across a desk"
              fill
              sizes="(min-width: 1024px) 302px, 100vw"
              className="object-cover"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
