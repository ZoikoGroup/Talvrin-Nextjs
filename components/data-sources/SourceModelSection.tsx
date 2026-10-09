import Image from "next/image";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionIntro } from "../individual-investors/shared";
import { IMAGE_DIR } from "./shared";

const guardrails = [
  {
    title: "No vendor-logo wall",
    body: "Logos without class, coverage, rights state, time and context create trust theatre, not transparency.",
  },
  {
    title: "No unsupported counts",
    body: "No \"thousands of sources\" or similar vanity figures without current authoritative measurement.",
  },
  {
    title: "No real-time claims",
    body: "Timeliness varies by source, market, rights and delivery mode — no fixed-frequency promise.",
  },
];

export default function SourceModelSection() {
  return (
    <section id="source-model" className="scroll-mt-32 bg-white py-20 sm:py-24">
      <Container className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,298px)] lg:gap-6">
        <div>
          <Reveal>
            <SectionIntro
              eyebrow="Governed Inputs, Visible Provenance"
              title="Governed sources, visible provenance."
            >
              Talvrin is designed to use governed source and data inputs, including authoritative
              sources and appropriately licensed information where applicable. Exact live source
              coverage is drawn from approved source and coverage registries — the platform never
              infers a provider, feed, entitlement or jurisdiction from architecture alone.
            </SectionIntro>
            <p className="mt-4 max-w-[780px] text-base leading-7 text-muted sm:text-[17px]">
              This public explanation of source governance is distinct from a live provider inventory.
              Where that inventory is incomplete or unavailable, the page shows the governance model and
              an explicit limitation rather than filler logos.
            </p>
          </Reveal>

          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
            {guardrails.map((item, index) => (
              <Reveal key={item.title} delay={0.1 + index * 0.05} className="h-full">
                <div className="flex h-full flex-col gap-2 rounded-xl border border-accent-amber/30 bg-white p-5">
                  <h3 className="text-base font-bold text-ink">{item.title}</h3>
                  <p className="text-sm leading-5 text-muted">{item.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal
          delay={0.2}
          className="relative aspect-video overflow-hidden rounded-xl border border-accent-amber/30 lg:aspect-auto lg:min-h-[475px]"
        >
          <Image
            src={`${IMAGE_DIR}/data-sources-source-model-team.webp`}
            alt="Colleagues smiling and shaking hands in an office"
            fill
            sizes="(min-width: 1024px) 298px, 100vw"
            className="object-cover"
          />
        </Reveal>
      </Container>
    </section>
  );
}
