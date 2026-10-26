import Image from "next/image";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { IMG, SectionEyebrow, SectionHeading, SectionLede } from "./shared";

const items = [
  {
    title: "Shared watchlists, permissioned per member",
    body: "Where released, a team’s monitored universe follows the same entitlement rules as individual access — no implicit sharing beyond what is granted.",
  },
  {
    title: "Change history, not a silent overwrite",
    body: "Evidence changes are surfaced on a timeline rather than replacing a prior view without record.",
  },
  {
    title: "Human-authored notes stay separate",
    body: "User-created notes and reasoning are distinguished from source material and Talvrin analysis at all times.",
  },
];

export default function GovernedResearchCollaboration() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <Container className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1fr)_304px] lg:items-stretch lg:gap-10">
        <div>
          <Reveal>
            <SectionEyebrow tone="amber">Governed Research Collaboration</SectionEyebrow>
            <SectionHeading>
              Team workflows, where released, stay inside permission boundaries.
            </SectionHeading>
            <SectionLede>
              Collaboration features are designed around who is allowed to see what, not just who
              wants to see it.
            </SectionLede>
          </Reveal>

          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-3">
            {items.map((item, i) => (
              <Reveal
                key={item.title}
                delay={i * 0.06}
                className="flex h-full flex-col gap-2.5 rounded-[14px] border border-ink/10 bg-surface p-6"
              >
                <h3 className="text-base font-bold text-ink">{item.title}</h3>
                <p className="text-sm leading-[22.4px] text-muted">{item.body}</p>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal
          delay={0.2}
          className="relative hidden overflow-hidden rounded-[14px] border border-ink/10 bg-surface lg:block"
        >
          <Image
            src={`${IMG}/global-institutions-governed-collaboration-team.webp`}
            alt="Colleagues reviewing a document together at a desk"
            fill
            sizes="304px"
            className="object-cover"
          />
        </Reveal>
      </Container>
    </section>
  );
}
