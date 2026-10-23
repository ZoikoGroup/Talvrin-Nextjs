import Image from "next/image";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { IMG, SectionEyebrow, SectionHeading, SectionLede } from "./shared";

const principles = [
  {
    title: "Authority vs. validation",
    body: "Source class is not a “truth score.” Originator authority stays distinct from content type and fact-validation result.",
  },
  {
    title: "Time semantics",
    body: "“Published,” “valid for,” and “recorded by Talvrin” are different states, each shown explicitly.",
  },
  {
    title: "Conflicts / gaps",
    body: "Unresolved conflict or unavailable evidence is shown directly — never backfilled with inferred values.",
  },
  {
    title: "Derived observation",
    body: "Method ID/version, inputs, conventions and rounding are available before a quantitative claim is displayed.",
  },
  {
    title: "Source rights",
    body: "A preview or permissive flag never authorizes end-user export; entitlements are enforced server-side.",
  },
];

export default function EvidenceSection() {
  return (
    <section id="evidence" className="scroll-mt-24 bg-surface py-16 sm:py-24">
      <Container>
        <Reveal>
          <SectionEyebrow>Evidence, not a black box</SectionEyebrow>
          <SectionHeading className="max-w-[780px]">
            A research conclusion should point back to the evidence.
          </SectionHeading>
          <SectionLede>
            Its date, the calculation applied and any unresolved limitations stay visible alongside
            the number — not hidden behind it.
          </SectionLede>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-5">
          <Reveal
            delay={0.1}
            className="relative aspect-[629/586] w-full overflow-hidden rounded-2xl border border-ink/10 lg:aspect-auto lg:h-full"
          >
            <Image
              src={`${IMG}/fi-evidence-corridor.webp`}
              alt="Three colleagues in business attire talking in an office corridor"
              fill
              sizes="(min-width: 1024px) 629px, 100vw"
              className="object-cover"
            />
          </Reveal>

          <div className="flex flex-col">
            <dl className="-mt-4">
              {principles.map((p, i) => (
                <Reveal
                  key={p.title}
                  delay={0.1 + i * 0.04}
                  className="flex flex-col gap-1 border-b border-ink/10 py-4"
                >
                  <dt className="text-sm font-bold text-ink">{p.title}</dt>
                  <dd className="text-sm leading-[22px] text-slate-600">{p.body}</dd>
                </Reveal>
              ))}
            </dl>

            <Reveal
              delay={0.3}
              className="mt-4 rounded-xl border border-ink/10 bg-white px-5 py-4"
            >
              <p className="text-xs font-bold uppercase tracking-wide text-pink-800">
                Content marketing rule
              </p>
              <p className="mt-1.5 text-xs leading-5 text-slate-600">
                Never generated market quotations, fictional customer names, untraceable charts or
                fabricated product screenshots presented as operational proof.
              </p>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
