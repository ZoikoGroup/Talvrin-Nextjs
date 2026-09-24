import Image from "next/image";
import Link from "next/link";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionEyebrow } from "./shared";

const cards = [
  {
    eyebrow: "Authentication & Secret Handling",
    tone: "amber" as const,
    title: "Not publicly established here.",
    body: "This page may note that authentication is required, but the credential format, scopes, token lifetime, and flow always belong to the separate, approved Authentication reference — never duplicated or guessed here.",
    state: "Authentication (not yet released)",
  },
  {
    eyebrow: "Versioning & Deprecation",
    tone: "violet" as const,
    title: "Lifecycle state shown only when it's real.",
    body: "Once a resource is released, its current version and deprecation state will stay visible near the top of its reference, with breaking changes given high-visibility treatment — never buried in generic notes.",
    state: "Changelog (not yet released)",
  },
];

export default function LifecycleTruthSection() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <Container>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-8">
          {cards.map((card, index) => (
            <Reveal
              key={card.eyebrow}
              delay={index * 0.08}
              className="flex flex-col gap-3 rounded-2xl bg-surface p-6 sm:p-8"
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
            className="relative aspect-[374/315] w-full overflow-hidden rounded-2xl bg-surface lg:aspect-auto"
          >
            <Image
              src="/images/developers/API-documentation/api-documentation-lifecycle-meeting.webp"
              alt="Colleagues talking around a meeting table"
              fill
              sizes="(min-width: 1024px) 374px, 100vw"
              className="object-cover"
            />
          </Reveal>
        </div>

        <Reveal delay={0.1} className="mt-6 flex flex-col gap-3 rounded-2xl bg-surface p-6 sm:p-8">
          <SectionEyebrow tone="amber">Status, Support &amp; Change Communication</SectionEyebrow>
          <h3 className="text-xl font-bold text-ink">
            No fabricated uptime, SLA, or release history.
          </h3>
          <p className="max-w-[780px] text-base leading-6 text-slate-600">
            A public Developer Status source is not currently available, and no support-response
            commitment exists yet. Once approved sources exist, this page will link to them directly
            rather than restate their content.
          </p>
          <Link
            href="/resources/contact-support"
            className="pt-1.5 text-sm font-semibold text-accent-violet transition-colors hover:text-ink"
          >
            Contact Support →
          </Link>
        </Reveal>
      </Container>
    </section>
  );
}
