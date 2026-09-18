import Image from "next/image";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionEyebrow, SectionHeading } from "./shared";

const articles = [
  {
    tag: "Cross-Market Research",
    title: "How Sovereign Financing Needs Are Reshaping Policy Signals Across Two Markets",
    description:
      "A comparative look at issuance calendars and central-bank communication across two released markets.",
    byline: "Talvrin Editorial · 03 Sep 2026 · Multi-market",
  },
  {
    tag: "Methodology",
    title: "Why Global Architecture Is Not the Same as Global Coverage",
    description:
      "How Talvrin separates platform capability from released, registry-governed market coverage.",
    byline: "Talvrin Research · 24 Aug 2026 · Global",
  },
  {
    tag: "Jurisdiction",
    title: "One Issuer, Multiple Jurisdictions: Reading Cross-Border Disclosure Evidence",
    description:
      "How regulatory and reporting context changes the meaning of the same underlying evidence.",
    byline: "Talvrin Research · 15 Aug 2026 · Global",
  },
];

export default function InsightsSection() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <Container>
        <Reveal className="max-w-3xl">
          <SectionEyebrow tone="amber">Discoverability & Authority</SectionEyebrow>
          <SectionHeading>Research and insights across markets.</SectionHeading>
        </Reveal>

        <div className="mt-9 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
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

          <Reveal delay={0.32} className="relative min-h-[220px] overflow-hidden rounded-[14px] border border-ink/8 bg-surface sm:col-span-2 lg:col-span-1 lg:min-h-0">
            <Image
              src="/images/global-markets/global-markets-insights-handshake.webp"
              alt="Two colleagues shaking hands after a research review"
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
