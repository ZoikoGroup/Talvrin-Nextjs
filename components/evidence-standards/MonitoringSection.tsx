import Image from "next/image";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionIntro } from "../individual-investors/shared";
import { IMAGE_DIR } from "./shared";

const rules = [
  {
    title: "Change ≠ materiality",
    body: "A new item, revised document or restored availability is an evidence change — not automatically a material one.",
  },
  {
    title: "Change carries context",
    body: "Source identity, change type, time and affected research relationship accompany each event where available.",
  },
  {
    title: "Unchanged is a scoped claim",
    body: "Meaningful only when the comparison process and scope are defined — never implied as exhaustive monitoring.",
  },
];

export default function MonitoringSection() {
  return (
    <section id="monitoring" className="scroll-mt-32 bg-white py-20 sm:py-24">
      <Container className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,308px)] lg:gap-4">
        <div>
          <Reveal>
            <SectionIntro
              eyebrow="Change Without Fake Materiality"
              title="A source update is not automatically a material change."
            >
              Source change is differentiated from market-price movement and from research
              materiality. Where monitoring is not live for a class or market, the limitation is shown
              instead of implying continuous monitoring.
            </SectionIntro>
          </Reveal>

          <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
            {rules.map((rule, index) => (
              <Reveal key={rule.title} delay={0.1 + index * 0.05} className="h-full">
                <div className="flex h-full flex-col gap-2 rounded-xl border border-ink/10 bg-surface p-5">
                  <h3 className="text-base font-bold text-ink">{rule.title}</h3>
                  <p className="text-sm leading-6 text-muted">{rule.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal
          delay={0.2}
          className="relative aspect-video overflow-hidden rounded-2xl border border-ink/10 lg:aspect-auto lg:min-h-[408px]"
        >
          <Image
            src={`${IMAGE_DIR}/evidence-standards-monitoring-handshake.webp`}
            alt="A professional shaking hands with a client in a lounge"
            fill
            sizes="(min-width: 1024px) 308px, 100vw"
            className="object-cover"
          />
        </Reveal>
      </Container>
    </section>
  );
}
