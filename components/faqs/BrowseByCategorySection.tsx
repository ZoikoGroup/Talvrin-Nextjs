import Image from "next/image";
import Link from "next/link";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionEyebrow, SectionHeading, SectionLede } from "./shared";

const categories = [
  {
    title: "About Talvrin",
    count: "5 questions",
    description: "What Talvrin is, why it exists and who it serves.",
    href: "#about",
  },
  {
    title: "Research & Evidence",
    count: "3 questions",
    description: "Evidence-first research, monitoring and information sources.",
    href: "#research",
  },
  {
    title: "AI",
    count: "2 questions",
    description: "What AI assists with, and where its authority ends.",
    href: "#ai",
  },
  {
    title: "Trust & Governance",
    count: "8 questions",
    description: "Provenance, rights, security, privacy, governance and status.",
    href: "#trust",
  },
  {
    title: "Product Boundaries",
    count: "3 questions",
    description: "What Talvrin does not do.",
    href: "#boundaries",
  },
  {
    title: "Getting Help",
    count: "2 questions",
    description: "Documentation, guidance and support routes.",
    href: "#help",
  },
];

export default function BrowseByCategorySection() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <Container>
        <Reveal>
          <SectionEyebrow tone="amber">Browse by Category</SectionEyebrow>
          <SectionHeading>Find questions by topic.</SectionHeading>
          <SectionLede>
            Seven stable categories cover the questions this FAQ currently answers.
          </SectionLede>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {categories.slice(0, 3).map((category, index) => (
            <Reveal key={category.title} delay={index * 0.05}>
              <CategoryCard category={category} />
            </Reveal>
          ))}

          <Reveal delay={0.15} className="hidden lg:block">
            <div className="relative h-60 overflow-hidden rounded-xl border border-ink/10 bg-surface">
              <Image
                src="/faq/image 321.png"
                alt="Browsing FAQ categories"
                fill
                sizes="(min-width: 1024px) 288px, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>

          {categories.slice(3).map((category, index) => (
            <Reveal key={category.title} delay={index * 0.05}>
              <CategoryCard category={category} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

function CategoryCard({ category }: { category: (typeof categories)[number] }) {
  return (
    <Link
      href={category.href}
      className="flex h-full scroll-mt-32 flex-col gap-2 rounded-xl border border-ink/10 bg-surface p-5 transition-colors hover:border-ink/25"
    >
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-base font-bold text-ink">{category.title}</h3>
        <span className="shrink-0 rounded-full bg-ink/5 px-2 py-[3px] text-xs font-bold text-muted">
          {category.count}
        </span>
      </div>
      <p className="text-xs leading-5 text-muted">{category.description}</p>
    </Link>
  );
}
