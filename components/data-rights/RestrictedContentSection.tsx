import Image from "next/image";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionIntro } from "../individual-investors/shared";
import { IMAGE_DIR } from "./shared";

const rules = [
  {
    title: "No raw content leakage",
    body: "Restricted payload never appears in HTML, accessibility strings, hidden DOM, client logs or structured data.",
  },
  {
    title: "No teaser excerpts",
    body: "Previews or snippets are not shown unless excerpt display is explicitly permitted.",
  },
  {
    title: "Traceability preserved where permitted",
    body: "When an entitled action becomes unavailable, research history is preserved without exposing restricted content.",
  },
  {
    title: "No manufactured upsell",
    body: "Restriction is never used to imply an unsupported purchase or upgrade unlocks data.",
  },
];

export default function RestrictedContentSection() {
  return (
    <section id="restricted-content" className="scroll-mt-32 bg-surface py-20 sm:py-24">
      <Container>
        <Reveal>
          <SectionIntro
            eyebrow="No Leakage, No Dark Patterns"
            tone="amber"
            title="Restricted content stays restricted everywhere — not just on screen."
          >
            Unresolved rights fail closed. Restricted payload is never a UI styling problem — it is
            excluded from the response entirely.
          </SectionIntro>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-4 lg:grid-cols-2">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {rules.map((rule, index) => (
              <Reveal key={rule.title} delay={index * 0.05} className="h-full">
                <div className="flex h-full flex-col gap-2 rounded-xl border border-accent-amber/30 bg-white p-5">
                  <h3 className="text-base font-bold text-ink">{rule.title}</h3>
                  <p className="text-sm leading-5 text-muted">{rule.body}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal
            delay={0.2}
            className="relative aspect-video overflow-hidden rounded-xl border border-accent-amber/30 bg-white lg:aspect-auto lg:min-h-[288px]"
          >
            <Image
              src={`${IMAGE_DIR}/data-rights-restricted-content-team.webp`}
              alt="A group of colleagues talking with tablets in a glass-walled office"
              fill
              sizes="(min-width: 1024px) 632px, 100vw"
              className="object-cover"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
