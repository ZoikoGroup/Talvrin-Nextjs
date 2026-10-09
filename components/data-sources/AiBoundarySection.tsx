import Image from "next/image";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionIntro } from "../individual-investors/shared";
import { IMAGE_DIR } from "./shared";

export default function AiBoundarySection() {
  return (
    <section id="ai-boundary" className="scroll-mt-32 bg-ink py-20 sm:py-24">
      <Container>
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,400px)] xl:grid-cols-[minmax(0,780px)_minmax(0,465px)] xl:justify-between">
          <Reveal>
            <SectionIntro
              eyebrow="Assistance, Not Authority"
              inverted
              title="AI can help navigate sources. It does not become the source."
            >
              AI-assisted content receives a persistent provenance treatment distinct from source
              evidence, visible without relying on color alone. AI must not synthesize a fake source
              identity where registry metadata is absent.
            </SectionIntro>
          </Reveal>
          <Reveal delay={0.15} className="relative aspect-[465/250] w-full overflow-hidden rounded-2xl">
            <Image
              src={`${IMAGE_DIR}/data-sources-ai-boundary-review.webp`}
              alt="An agent reviewing a binder of documents with a couple in a bright home"
              fill
              sizes="(min-width: 1280px) 465px, (min-width: 1024px) 400px, 100vw"
              className="object-cover"
            />
          </Reveal>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
          <Reveal delay={0.1} className="h-full">
            <div className="h-full rounded-2xl bg-surface px-6 py-7">
              <h3 className="text-xs font-bold uppercase tracking-wide text-green-700">AI may assist with</h3>
              <p className="mt-3 text-[15px] leading-6 text-ink-soft">
                Source discovery, organization, summarization, comparison, change identification,
                explanation and contradiction surfacing.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.15} className="h-full">
            <div className="h-full rounded-2xl bg-surface px-6 py-7">
              <h3 className="text-xs font-bold uppercase tracking-wide text-pink-800">
                AI output is never presented as
              </h3>
              <p className="mt-3 text-[15px] leading-6 text-ink-soft">
                An authoritative source, a guaranteed fact, investment advice, a substitute for source
                inspection, or proof that coverage, licensing or entitlement is complete.
              </p>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
