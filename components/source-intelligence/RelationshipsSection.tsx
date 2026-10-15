import Image from "next/image";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionEyebrow, SectionHeading } from "../alerts/shared";

const relationships = [
  {
    title: "Supports",
    body: "The evidence is relevant in favor of a claim or interpretation — not proof, and not certainty.",
  },
  {
    title: "Contradicts",
    body: "The evidence conflicts with part of a claim. Both the contradiction and its context are preserved.",
  },
  {
    title: "Contextualizes",
    body: "The evidence helps explain scope, timing, jurisdiction or background without taking a side.",
  },
  {
    title: "Supersedes",
    body: "A newer or replacement source changes the evidence trail for current use. The earlier source stays identifiable.",
  },
];

export default function RelationshipsSection() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-[88px]">
      <Container>
        <Reveal>
          <SectionEyebrow>Source Relationships &amp; Competing Evidence</SectionEyebrow>
        </Reveal>
        <Reveal delay={0.1}>
          <SectionHeading className="max-w-[800px]">
            Sources can disagree. Talvrin shows that instead of resolving it for
            you.
          </SectionHeading>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-5 max-w-[780px] text-base leading-7 text-gray-600">
            Relationships stay neutral labels, not certainty scores. When
            evidence is mixed, it is shown as mixed.
          </p>
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-3 sm:mt-10 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4 xl:grid-cols-5">
          {relationships.map((item, index) => (
            <Reveal
              key={item.title}
              delay={0.05 * (index + 2)}
              className="rounded-2xl border border-ink/10 bg-surface p-6"
            >
              <h3 className="text-base font-bold text-ink">{item.title}</h3>
              <p className="mt-2.5 text-sm leading-5 text-gray-600">{item.body}</p>
            </Reveal>
          ))}
          <Reveal
            delay={0.3}
            className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl border border-ink/10 bg-surface sm:col-span-2 sm:aspect-[16/7] lg:col-span-4 lg:aspect-[16/5] xl:col-span-1 xl:aspect-auto xl:min-h-[169px]"
          >
            <Image
              src="/images/product/source-intelligence/source-intelligence-relationships-meeting.webp"
              alt="Team meeting around a table beneath a pendant lamp"
              fill
              sizes="(min-width: 1280px) 248px, 100vw"
              className="object-cover"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
