import { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionEyebrow, SectionHeading, SectionLede } from "./shared";

type CategoryItem = {
  title: string;
  count: string;
  description: ReactNode;
  href: string;
};

const categories: CategoryItem[] = [
  {
    title: "About Talvrin",
    count: "5 questions",
    description: (
      <>
        What Talvrin is, why it exists and who it<br />
        serves.
      </>
    ),
    href: "#about",
  },
  {
    title: "Research & Evidence",
    count: "3 questions",
    description: (
      <>
        Evidence-first research, monitoring and<br />
        information sources.
      </>
    ),
    href: "#research",
  },
  {
    title: "AI",
    count: "2 questions",
    description: (
      <>
        What AI assists with, and where its<br />
        authority ends.
      </>
    ),
    href: "#ai",
  },
  {
    title: "Trust & Governance",
    count: "8 questions",
    description: (
      <>
        Provenance, rights, security, privacy,<br />
        governance and status.
      </>
    ),
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
    description: (
      <>
        Documentation, guidance and support<br />
        routes.
      </>
    ),
    href: "#help",
  },
];

export default function BrowseByCategorySection() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <Container className="lg:max-w-[1332px]">
        <Reveal>
          <SectionEyebrow tone="amber">BROWSE BY CATEGORY</SectionEyebrow>
          <SectionHeading>Find questions by topic.</SectionHeading>
          <SectionLede>
            Seven stable categories cover the questions this FAQ currently answers.
          </SectionLede>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:max-w-[1200px]">
          {categories.slice(0, 3).map((category, index) => (
            <Reveal key={category.title} delay={index * 0.05}>
              <CategoryCard category={category} />
            </Reveal>
          ))}

          <Reveal delay={0.15} className="hidden lg:block lg:row-span-2">
            <div className="relative h-[244px] w-[288px] overflow-hidden rounded-2xl">
              <Image
                src="/faq/image 321.png"
                alt="Browsing FAQ categories"
                width={288}
                height={244}
                className="h-full w-full object-cover rounded-2xl"
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

function CategoryCard({ category }: { category: CategoryItem }) {
  return (
    <Link
      href={category.href}
      className="flex h-[114px] w-[288px] scroll-mt-32 flex-col justify-start gap-2 rounded-2xl border px-4 py-3.5 transition-colors hover:border-ink/25"
      style={{
        backgroundColor: "rgba(246, 245, 251, 1)",
        borderColor: "rgba(23, 19, 53, 0.1)",
      }}
    >
      <div className="flex items-center justify-between gap-1.5">
        <h3 className="text-[15px] font-bold text-ink whitespace-nowrap">{category.title}</h3>
        <span
          className="shrink-0 rounded-full px-2 py-[2px] text-xs font-semibold whitespace-nowrap"
          style={{
            backgroundColor: "rgba(23, 19, 53, 0.06)",
            color: "rgba(93, 90, 114, 1)",
          }}
        >
          {category.count}
        </span>
      </div>
      <p className="text-xs leading-[18px] text-muted">{category.description}</p>
    </Link>
  );
}
