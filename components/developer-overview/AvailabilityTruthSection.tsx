import Image from "next/image";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionEyebrow } from "./shared";

const cards = [
  {
    eyebrow: "Authentication & Security",
    tone: "amber" as const,
    title: "Not publicly established here.",
    body: "Public authentication guidance is not currently established on this page. Credential formats, token flows, scopes, and access grants will never appear here without an approved, published Authentication reference.",
    state: "Authentication (not yet released)",
  },
  {
    eyebrow: "Developer Reliability",
    tone: "violet" as const,
    title: "Status shown only when it is real.",
    body: "A public Developer Status source is not currently available. No uptime, latency, region, or incident figures are shown until an approved status contract exists.",
    state: "Developer Status (not yet released)",
  },
];

export default function AvailabilityTruthSection() {
  return (
    <section className="bg-surface py-16 sm:py-24">
      <Container>
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
          {cards.map((card, index) => (
            <Reveal
              key={card.eyebrow}
              delay={index * 0.08}
              className="flex flex-col gap-3 rounded-2xl bg-white p-6 sm:p-8"
            >
              <SectionEyebrow tone={card.tone}>{card.eyebrow}</SectionEyebrow>
              <h3 className="text-xl font-bold text-ink">{card.title}</h3>
              <p className="text-base leading-6 text-slate-600">{card.body}</p>
              <p className="mt-auto pt-1.5 text-sm font-semibold text-accent-violet">
                {card.state}
              </p>
            </Reveal>
          ))}

          <Reveal
            delay={0.2}
            className="relative aspect-[405/289] w-full overflow-hidden rounded-2xl bg-white"
          >
            <Image
              src="/images/developers/developer-overview/developer-overview-availability-meeting.webp"
              alt="Colleagues meeting around a table in a glass-walled office"
              fill
              sizes="(min-width: 1024px) 405px, 100vw"
              className="object-cover"
            />
          </Reveal>
        </div>

        <Reveal delay={0.1} className="mt-5 flex flex-col gap-3 rounded-2xl bg-white p-6 sm:p-8">
          <SectionEyebrow tone="amber">Change Management</SectionEyebrow>
          <h3 className="text-xl font-bold text-ink">No fabricated release history.</h3>
          <p className="max-w-[780px] text-base leading-6 text-slate-600">
            A maintained Changelog is not currently available. Once published, technical changes
            will be versioned, dated, and communicated there — never synthesized from unrelated
            activity.
          </p>
          <p className="pt-1.5 text-sm font-semibold text-accent-violet">
            Changelog (not yet released)
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
