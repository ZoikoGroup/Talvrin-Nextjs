import Image from "next/image";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionEyebrow, SectionHeading, SectionLede, CardLink } from "./shared";

const featured = [
  {
    question: "What is Talvrin?",
    answer:
      "Talvrin is a source-linked research and monitoring platform for global public markets. It helps users discover evidence, build research views, and monitor underlying information for meaningful change.",
    href: "/product/overview",
  },
  {
    question: "Who is Talvrin for?",
    answer:
      "Talvrin is designed for serious self-directed investors, investment professionals, analysts, research teams, asset managers, wealth and advisory research functions, financial institutions and enterprise research teams.",
    href: "/about-talvrin",
  },
  {
    question: "Does Talvrin use AI?",
    answer:
      "Yes. AI can assist with discovering, organizing, summarizing, comparing and interrogating evidence, while underlying sources remain separately inspectable.",
    href: "/product/ai-assistance",
  },
  {
    question: "Does Talvrin provide investment advice?",
    answer:
      "No. Talvrin is designed as a research and market-intelligence platform rather than an investment recommendation engine. Users remain responsible for their own investment and professional decisions.",
    href: "#boundaries",
  },
];

export default function FeaturedQuestionsSection() {
  return (
    <section id="featured" className="scroll-mt-32 bg-surface py-20 sm:py-24">
      <Container>
        <Reveal>
          <SectionEyebrow tone="violet">Featured Questions</SectionEyebrow>
          <SectionHeading>Start with the questions people ask most.</SectionHeading>
          <SectionLede>
            Each answer stands on its own. Browse by category below for everything else.
          </SectionLede>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.slice(0, 2).map((item, index) => (
            <Reveal key={item.question} delay={index * 0.05}>
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
            <Reveal key={item.question} delay={index * 0.05}>
              <FeaturedCard item={item} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

function FeaturedCard({ item }: { item: (typeof featured)[number] }) {
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
