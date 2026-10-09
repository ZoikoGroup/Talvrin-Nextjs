import Image from "next/image";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionIntro } from "../individual-investors/shared";
import { IMAGE_DIR } from "./shared";

const rules = [
  {
    title: "Source change ≠ price movement",
    body: "A new source item, revised document or restored availability is a source/evidence change — not automatically a material one.",
  },
  {
    title: "Monitoring events carry context",
    body: "Source identity, change type, time and affected research relationship accompany each event where available.",
  },
  {
    title: "No implied continuous monitoring",
    body: "If monitoring is not live for a class or market, the limitation is shown instead of implying it is.",
  },
];

export default function MonitoringSection() {
  return (
    <section id="monitoring" className="scroll-mt-32 bg-surface py-20 sm:py-24">
      <Container>
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,400px)] xl:grid-cols-[minmax(0,760px)_minmax(0,504px)] xl:justify-between">
          <Reveal>
            <SectionIntro
              eyebrow="Change Without Fake Materiality"
              tone="amber"
              title="A source update is not automatically a material change."
            >
              Source change is differentiated from market-price movement and from research
              materiality. Where monitoring is not live for a class or market, the limitation is shown
              instead of implying continuous monitoring.
            </SectionIntro>
          </Reveal>
          <Reveal
            delay={0.15}
            className="relative aspect-[504/256] w-full overflow-hidden rounded-2xl"
          >
            <Image
              src={`${IMAGE_DIR}/data-sources-monitoring-meeting.webp`}
              alt="An adviser discussing documents with a couple at a kitchen table"
              fill
              sizes="(min-width: 1280px) 504px, (min-width: 1024px) 400px, 100vw"
              className="object-cover"
            />
          </Reveal>
        </div>

        <div className="mt-4 grid grid-cols-1 gap-2 md:grid-cols-3">
          {rules.map((rule, index) => (
            <Reveal key={rule.title} delay={0.1 + index * 0.05} className="h-full">
              <div className="flex h-full flex-col gap-2 rounded-xl border border-ink/10 bg-white p-5">
                <h3 className="text-base font-bold text-ink">{rule.title}</h3>
                <p className="text-sm leading-5 text-muted">{rule.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
