import Image from "next/image";
import clsx from "clsx";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionEyebrow, SectionHeading, SectionLede } from "./shared";

const stages = [
  {
    number: "01",
    phase: "Establish",
    title: "Eligibility",
    body: "Confirm access is allowed before exposing any creation or authorization action.",
    accent: "bg-accent-violet",
    text: "text-accent-violet",
  },
  {
    number: "02",
    phase: "Establish",
    title: "Obtain / authorize",
    body: "Route to the canonical source-controlled acquisition flow only.",
    accent: "bg-accent-violet",
    text: "text-accent-violet",
  },
  {
    number: "03",
    phase: "Establish",
    title: "Reveal / capture",
    body: "One-time or re-display policy is communicated exactly as implemented — never assumed.",
    accent: "bg-accent-violet",
    text: "text-accent-violet",
  },
  {
    number: "04",
    phase: "Protect & use",
    title: "Store",
    body: "Secure-storage expectations and environment separation are explained, never plaintext.",
    accent: "bg-accent-amber",
    text: "text-accent-amber",
  },
  {
    number: "05",
    phase: "Protect & use",
    title: "Use",
    body: "Proof is attached exactly as authoritative docs define, with non-secret placeholders only.",
    accent: "bg-accent-amber",
    text: "text-accent-amber",
  },
  {
    number: "06",
    phase: "Protect & use",
    title: "Monitor",
    body: "Last-used/expiry metadata is shown only on a governed authenticated surface, never in public docs.",
    accent: "bg-accent-amber",
    text: "text-accent-amber",
  },
  {
    number: "07",
    phase: "Maintain & respond",
    title: "Rotate / renew",
    body: "Overlap and cutover guidance is provided only when policy supports it — no forced unsafe downtime.",
    accent: "bg-green-500",
    text: "text-green-500",
  },
  {
    number: "08",
    phase: "Maintain & respond",
    title: "Revoke",
    body: "Invalidation path and its truthful effect are always clear and discoverable.",
    accent: "bg-green-500",
    text: "text-green-500",
  },
];

export default function CredentialLifecycleSection() {
  return (
    <section className="bg-ink py-16 sm:py-24">
      <Container>
        <Reveal className="max-w-[820px]">
          <SectionEyebrow tone="violet">Credential Lifecycle</SectionEyebrow>
          <SectionHeading inverted>
            Nine stages, always in this order — from eligibility to recovery.
          </SectionHeading>
          <SectionLede inverted className="max-w-[780px] sm:text-base sm:leading-6">
            Exact mechanics are method-owned. What&apos;s fixed here is the order and the safety
            rule attached to each stage.
          </SectionLede>
        </Reveal>

        <div className="mt-9 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
          {stages.map((stage, index) => (
            <Reveal
              key={stage.number}
              delay={index * 0.03}
              className="flex flex-col overflow-hidden rounded-xl bg-[#1b1745]"
            >
              <span className={clsx("h-1 w-full", stage.accent)} aria-hidden="true" />
              <div className="flex flex-col gap-2 p-5">
                <p className="flex items-center gap-2.5 text-xs">
                  <span className={clsx("font-bold", stage.text)}>{stage.number}</span>
                  <span className="uppercase tracking-wide text-white/40">{stage.phase}</span>
                </p>
                <h3 className="text-base font-bold text-white">{stage.title}</h3>
                <p className="text-sm leading-5 text-white/60">{stage.body}</p>
              </div>
            </Reveal>
          ))}

          {/* Fills the fifth column beside the two card rows on the widest screens. */}
          <Reveal
            delay={0.25}
            className="relative aspect-[3/2] overflow-hidden rounded-xl bg-[#1b1745] sm:col-span-2 lg:col-span-4 lg:aspect-[16/5] xl:col-span-1 xl:col-start-5 xl:row-span-2 xl:row-start-1 xl:aspect-auto"
          >
            <Image
              src="/images/developers/authentication/authentication-lifecycle-handshake.webp"
              alt="Colleagues shaking hands after a meeting"
              fill
              sizes="(min-width: 1280px) 241px, 100vw"
              className="object-cover"
            />
          </Reveal>
        </div>

        <Reveal delay={0.2}>
          <p className="mt-6 text-sm text-white/60">
            ↺ Recover feeds back into Eligibility — a compromised credential restarts the cycle, it
            does not skip it.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
