import Image from "next/image";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionEyebrow, SectionHeading } from "./shared";

const articles = [
  {
    tag: "Central Banks",
    title: "How the Federal Reserve's Balance-Sheet Language Shifted Market Expectations",
    excerpt:
      "A close reading of recent FOMC communication and what it materially changed for the rate-path outlook.",
    byline: "Talvrin Editorial · 02 Sep 2026 · United States",
  },
  {
    tag: "Fixed Income",
    title: "Reading U.K. Gilt Auctions as Forward-Looking Evidence",
    excerpt: "Auction demand and cover ratios carry evidence value beyond the headline yield print.",
    byline: "Talvrin Editorial · 28 Aug 2026 · United Kingdom",
  },
  {
    tag: "Methodology",
    title: "Primary, Official, and Licensed Sources: Talvrin's Source-Classification Model",
    excerpt:
      "How Talvrin distinguishes source authority so every evidence card carries an honest provenance signal.",
    byline: "Talvrin Research · 19 Aug 2026 · Global",
  },
];

export default function DiscoverabilitySection() {
  return (
    <section className="bg-surface py-20 sm:py-28">
      <Container>
        <Reveal className="max-w-3xl">
          <SectionEyebrow tone="violet">Discoverability & Authority</SectionEyebrow>
          <SectionHeading>Understand the markets behind the evidence.</SectionHeading>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:items-stretch">
          {articles.map((article, index) => (
            <Reveal key={article.title} delay={index * 0.08}>
              <div className="flex h-full flex-col rounded-2xl border border-ink/8 bg-white p-6">
                <p className="text-xs font-bold text-accent-violet">{article.tag}</p>
                <h3 className="mt-2 text-base font-bold leading-snug text-ink">{article.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{article.excerpt}</p>
                <p className="mt-4 border-t border-ink/8 pt-3 text-xs text-slate-500">{article.byline}</p>
              </div>
            </Reveal>
          ))}

          <Reveal
            delay={0.3}
            className="relative min-h-[220px] overflow-hidden rounded-2xl border border-ink/8 sm:col-span-2 lg:col-span-1 lg:min-h-0"
          >
            <Image
              src="/images/home/home-discoverability-presentation.png"
              alt="Analyst presenting a workflow diagram to colleagues in a meeting room"
              fill
              sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
              className="object-cover"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
