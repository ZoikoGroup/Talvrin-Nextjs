import { ReactNode } from "react";
import Image from "next/image";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionEyebrow, SectionHeading, SectionLede, CardLink } from "./shared";

type FeaturedItem = {
  question: ReactNode;
  answer: ReactNode;
  href: string;
};

const featured: FeaturedItem[] = [
  {
    question: "What is Talvrin?",
    answer: (
      <>
        Talvrin is a source-linked research and<br className="hidden sm:inline" />
        {" "}monitoring platform for global public markets. It<br className="hidden sm:inline" />
        {" "}helps users discover evidence, build research<br className="hidden sm:inline" />
        {" "}views, and monitor underlying information for<br className="hidden sm:inline" />
        {" "}meaningful change.
      </>
    ),
    href: "/product/overview",
  },
  {
    question: "Who is Talvrin for?",
    answer: (
      <>
        Talvrin is designed for serious self-directed<br className="hidden sm:inline" />
        {" "}investors, investment professionals, analysts,<br className="hidden sm:inline" />
        {" "}research teams, asset managers, wealth and<br className="hidden sm:inline" />
        {" "}advisory research functions, financial institutions<br className="hidden sm:inline" />
        {" "}and enterprise research teams.
      </>
    ),
    href: "/about-talvrin",
  },
  {
    question: "Does Talvrin use AI?",
    answer: (
      <>
        Yes. AI can assist with discovering, organizing,<br className="hidden sm:inline" />
        {" "}summarizing, comparing and interrogating<br className="hidden sm:inline" />
        {" "}evidence, while underlying sources remain<br className="hidden sm:inline" />
        {" "}separately inspectable.
      </>
    ),
    href: "/product/ai-assistance",
  },
  {
    question: (
      <>
        Does Talvrin provide investment<br /> advice?
      </>
    ),
    answer: (
      <>
        No. Talvrin is designed as a research and market-<br className="hidden sm:inline" />
        intelligence platform rather than an investment<br className="hidden sm:inline" />
        {" "}recommendation engine. Users remain<br className="hidden sm:inline" />
        {" "}responsible for their own investment and<br className="hidden sm:inline" />
        {" "}professional decisions.
      </>
    ),
    href: "#boundaries",
  },
];

export default function FeaturedQuestionsSection() {
  return (
    <section
      id="featured"
      className="scroll-mt-32 bg-[#F6F5FB] pt-[72px] pb-20 sm:pb-24"
      style={{ backgroundColor: "rgba(246, 245, 251, 1)" }}
    >
      <Container className="lg:max-w-[1332px]">
        <Reveal>
          <SectionEyebrow tone="violet">FEATURED QUESTIONS</SectionEyebrow>
          <SectionHeading>Start with the questions people ask most.</SectionHeading>
          <SectionLede>
            Each answer stands on its own. Browse by category below for everything else.
          </SectionLede>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.slice(0, 2).map((item, index) => (
            <Reveal key={index} delay={index * 0.05}>
              <FeaturedCard item={item} />
            </Reveal>
          ))}

          <Reveal delay={0.15} className="hidden lg:block lg:row-span-2">
            <div className="relative h-full min-h-[553px] overflow-hidden rounded-2xl border border-ink/10 bg-white">
              <Image
                src="/faq/image 320.png"
                alt="Talvrin research team discussing evidence"
                fill
                sizes="(min-width: 1024px) 384px, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>

          {featured.slice(2).map((item, index) => (
            <Reveal key={index + 2} delay={index * 0.05}>
              <FeaturedCard item={item} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

function FeaturedCard({ item }: { item: FeaturedItem }) {
  return (
    <article className="flex h-full flex-col gap-2.5 rounded-2xl border border-ink/10 bg-white px-6 pt-7 pb-10">
      <h3 className="text-lg font-bold leading-6 text-ink">{item.question}</h3>
      <p className="text-base leading-6 text-muted">{item.answer}</p>
      <CardLink href={item.href} className="mt-auto pt-1">
        More on this
      </CardLink>
    </article>
  );
}
