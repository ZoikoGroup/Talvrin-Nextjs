import Image from "next/image";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionEyebrow, SectionHeading } from "./shared";

const articles = [
  {
    category: "Central Banks",
    title: "Publication Time vs. Reference Period: Why an Economic Release Needs Both",
    body: "Two timestamps carry different meaning when researching a release or central-bank communication.",
    meta: "Talvrin Research · 02 Sep 2026 · Global",
  },
  {
    category: "Macro",
    title: "Why a Revised Release Is Not the Same Release",
    body: "How preliminary, revised, and benchmark vintages change the meaning of a prior data point.",
    meta: "Talvrin Research · 25 Aug 2026 · Global",
  },
  {
    category: "Regulation & Policy",
    title: "Central-Bank Communication Is Evidence, Not a Forecast",
    body: "Reading official policy language without turning it into an implied rate call.",
    meta: "Talvrin Editorial · 18 Aug 2026 · Global",
  },
];

export default function InsightsSection() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <Container>
        <Reveal className="max-w-[900px]">
          <SectionEyebrow tone="amber">Discoverability &amp; Authority</SectionEyebrow>
          <SectionHeading>
            Central Banks, Macro &amp; Regulation — research and insights.
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
            className="relative aspect-[302/306] w-full overflow-hidden rounded-2xl lg:aspect-auto"
          >
            <Image
              src="/images/markets/macro-economics/macro-insights-headphones.webp"
              alt="Person walking outdoors with headphones, a phone and a coffee cup"
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
