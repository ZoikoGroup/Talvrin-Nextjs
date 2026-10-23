import Image from "next/image";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { IMG, SectionEyebrow, SectionHeading, SectionLede, StatusPill } from "./shared";

const capabilities = [
  {
    title: "Evidence & Provenance",
    body: "Claims, sources, validation status, versions and corrections — read-only, rights-filtered access to the same evidence record the product shows.",
  },
  {
    title: "Research Workflows",
    body: "Approved research jobs and their results, with eligibility verified before any response returns.",
  },
  {
    title: "Entitlements & Rights",
    body: "Licensed usage boundaries — export, display and redistribution rules enforced per data class, independent of connection success.",
  },
];

export default function CapabilitiesSection() {
  return (
    <section id="capabilities" className="scroll-mt-32 bg-surface py-16 sm:py-[88px]">
      <Container className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1fr)_282px] lg:gap-6">
        <div>
          <Reveal className="max-w-[780px]">
            <SectionEyebrow>What you will be able to connect</SectionEyebrow>
            <SectionHeading>
              Four capability groups, each scoped and rights-checked before a single response
              leaves Talvrin.
            </SectionHeading>
            <SectionLede>
              The external API is a scoped product capability, not a general-purpose feed. Every
              capability below declares its release status, outputs, and licensing limits before
              it can ship.
            </SectionLede>
          </Reveal>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {capabilities.map((cap, i) => (
              <Reveal
                key={cap.title}
                delay={i * 0.08}
                as="article"
                className="flex flex-col gap-3.5 rounded-2xl border border-ink/10 bg-white p-7"
              >
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-lg font-bold leading-6 text-ink">{cap.title}</h3>
                  <StatusPill>In specification</StatusPill>
                </div>
                <p className="text-base leading-6 text-slate-600">{cap.body}</p>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal
          delay={0.2}
          className="relative hidden aspect-[282/508] w-full overflow-hidden rounded-2xl border border-ink/10 lg:block"
        >
          <Image
            src={`${IMG}/api-capabilities-meeting.webp`}
            alt="Three colleagues reviewing documents around a table in a lounge"
            fill
            sizes="282px"
            className="object-cover"
          />
        </Reveal>
      </Container>
    </section>
  );
}
