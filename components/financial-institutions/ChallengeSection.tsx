import Image from "next/image";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { IMG, SectionEyebrow, SectionHeading } from "./shared";

const problems = [
  {
    title: "Fragmented data",
    body: "Evidence lives across issuer filings, exchange records and vendor feeds that research teams reconcile manually, team by team.",
  },
  {
    title: "Unverifiable outputs",
    body: "Numbers circulate without a visible source, calculation basis or validation state, so reviewers cannot confirm how a figure was produced.",
  },
];

export default function ChallengeSection() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <Container className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1fr)_421px] lg:items-end lg:gap-2.5">
        <div>
          <Reveal>
            <SectionEyebrow>The institutional research challenge</SectionEyebrow>
            <SectionHeading className="max-w-[780px]">
              Research estates grow faster than anyone can manually verify.
            </SectionHeading>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
            {problems.map((p, i) => (
              <Reveal
                key={p.title}
                as="article"
                delay={i * 0.08}
                className="flex flex-col gap-2.5 rounded-2xl border border-ink/10 bg-surface p-6"
              >
                <h3 className="text-base font-bold text-ink">{p.title}</h3>
                <p className="text-sm leading-[22px] text-slate-600">{p.body}</p>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal
          delay={0.2}
          className="relative aspect-[421/326] w-full overflow-hidden rounded-2xl border border-ink/10"
        >
          <Image
            src={`${IMG}/fi-challenge-meeting.webp`}
            alt="Four colleagues smiling during a lively meeting"
            fill
            sizes="(min-width: 1024px) 421px, 100vw"
            className="object-cover"
          />
        </Reveal>
      </Container>
    </section>
  );
}
