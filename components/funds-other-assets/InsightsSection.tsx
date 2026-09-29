import Image from "next/image";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionEyebrow, SectionHeading } from "./shared";

const articles = [
  {
    category: "Evidence & Data",
    title: "Coverage Is Not Capability: Why a Released Category Can Still Lack a Field",
    body: "How Talvrin separates whether a category exists from whether a specific data point is available for it.",
    meta: "Talvrin Research · 09 Sep 2026 · Global",
  },
  {
    category: "Fund Structure",
    title: "Vehicle, Issuer, Listing, Class: Four Different Questions",
    body: "Why fund and other-asset identity resists collapsing into a single name or ticker.",
    meta: "Talvrin Research · 01 Sep 2026 · Global",
  },
  {
    category: "Governance",
    title: 'Why Talvrin Won’t Publish a "Best Funds" Page',
    body: "The case against ranking, screening, and performance-chasing content without governed methodology.",
    meta: "Talvrin Editorial · 22 Aug 2026 · Global",
  },
];

export default function InsightsSection() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <Container>
        <Reveal className="max-w-[900px]">
          <SectionEyebrow tone="amber">Discoverability &amp; Authority</SectionEyebrow>
          <SectionHeading>
            Fund structure, evidence, and coverage — research and insights.
          </SectionHeading>
        </Reveal>

        <div className="mt-9 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {articles.map((article, index) => (
            <Reveal
              key={article.title}
              delay={index * 0.05}
              className="flex flex-col rounded-2xl border border-ink/10 bg-surface p-6"
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
              src="/images/markets/funds-other-assets/funds-insights-reception.webp"
              alt="Colleagues talking at a reception desk"
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
