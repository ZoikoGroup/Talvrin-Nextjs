import Image from "next/image";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { CardLink, SectionIntro, StatusBadge, type Status } from "./shared";

type Boundary = {
  question: string;
  answer: string;
  status: Status;
  link?: { label: string; href: string };
};

const boundaries: Boundary[] = [
  {
    question: "Is a live incident a release?",
    answer:
      "No. Outages and maintenance live on Service Status, which Release Notes may link to but never duplicates.",
    status: "unavailable",
  },
  {
    question: "Is a coverage change the same as a market move?",
    answer:
      "No. Market or data coverage changes are confirmed by the Coverage authority before any note describes them.",
    status: "available",
    link: { label: "View Market Coverage", href: "/markets/market-coverage" },
  },
  {
    question: "Does AI get its own release claims?",
    answer:
      "AI-related changes describe approved user impact only — never invented model, provider or training detail.",
    status: "available",
    link: { label: "Read the AI boundary", href: "/trust/ai-principles" },
  },
  {
    question: "Will security details be public here?",
    answer:
      "Only at an approved disclosure level. Sensitive vulnerability detail stays under Security and Trust governance.",
    status: "boundary",
  },
];

export default function BoundariesSection() {
  return (
    <section id="boundaries" className="scroll-mt-32 bg-white py-20 sm:py-[88px]">
      <Container>
        <Reveal>
          <SectionIntro eyebrow="Release Boundaries" title="What Release Notes will never blur.">
            These boundaries keep release history distinguishable from live operational state,
            coverage claims and sensitive disclosures.
          </SectionIntro>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-5 lg:grid-cols-2">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {boundaries.map((item, index) => (
              <Reveal key={item.question} delay={index * 0.05} className="h-full">
                <div className="flex h-full flex-col gap-2 rounded-xl border border-ink/10 bg-surface p-5">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-base font-bold text-ink">{item.question}</h3>
                    <StatusBadge status={item.status} />
                  </div>
                  <p className="text-[13px] leading-5 text-muted">{item.answer}</p>
                  {item.link && (
                    <div className="mt-auto pt-1">
                      <CardLink href={item.link.href}>{item.link.label}</CardLink>
                    </div>
                  )}
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal
            delay={0.2}
            className="relative hidden min-h-[382px] overflow-hidden rounded-xl border border-ink/10 bg-surface lg:block"
          >
            <Image
              src="/images/resources/release-notes/release-notes-boundaries.webp"
              alt="A team meeting around a conference table in a sunlit room"
              fill
              sizes="(min-width: 1024px) 632px, 100vw"
              className="object-cover"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
