import Image from "next/image";
import clsx from "clsx";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionEyebrow, SectionHeading, SectionLede } from "./shared";

const scenarios = [
  {
    title: "Planned rotation",
    body: "Source-approved overlap and cutover pattern, validation step, and old-credential revocation — only when the architecture supports them.",
    accent: "bg-accent-violet",
  },
  {
    title: "Suspected exposure",
    body: "Revocation and rotation are prioritized immediately, alongside approved security contact. The credential is never requested for verification.",
    accent: "bg-accent-amber",
  },
  {
    title: "Emergency disable",
    body: "Security operations hold a governed disable mechanism ahead of general availability; public communication follows incident/status policy.",
    accent: "bg-green-500",
  },
];

export default function RotationSection() {
  return (
    <section className="bg-surface py-16 sm:py-24">
      <Container>
        <Reveal className="max-w-[780px]">
          <SectionEyebrow tone="violet">Rotation, Revocation &amp; Compromise</SectionEyebrow>
          <SectionHeading>Safe credential replacement and incident response.</SectionHeading>
          <SectionLede className="max-w-[780px] sm:text-base sm:leading-6">
            The credential is never asked for as proof of a problem. Revocation and rotation come
            first.
          </SectionLede>
        </Reveal>

        <div className="mt-9 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {scenarios.map((scenario, index) => (
            <Reveal
              key={scenario.title}
              delay={index * 0.05}
              className="flex flex-col overflow-hidden rounded-2xl border border-ink/10 bg-white"
            >
              <span className={clsx("h-1 w-full", scenario.accent)} aria-hidden="true" />
              <div className="p-6">
                <h3 className="text-base font-bold text-ink">{scenario.title}</h3>
                <p className="mt-2.5 text-sm leading-6 text-slate-600">{scenario.body}</p>
              </div>
            </Reveal>
          ))}

          <Reveal
            delay={0.2}
            className="relative aspect-[3/2] overflow-hidden rounded-2xl sm:aspect-auto sm:self-stretch"
          >
            <Image
              src="/images/developers/authentication/authentication-rotation-discussion.webp"
              alt="Colleague explaining something during a discussion"
              fill
              sizes="(min-width: 1024px) 301px, 100vw"
              className="object-cover"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
