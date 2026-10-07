import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionIntro } from "../individual-investors/shared";

const layers = [
  {
    label: "Source evidence",
    treatment: "Highest evidence-source treatment; named source; metadata grouped.",
    metadata:
      "Source identity + relevant time/context + rights/access + relationship where applicable.",
  },
  {
    label: "Talvrin normalization",
    treatment: "Neutral transformed-data treatment; labeled as normalized/structured by Talvrin.",
    metadata: "Reference to underlying source(s) where supported.",
  },
  {
    label: "Talvrin analysis",
    treatment: "Interpretive treatment, clearly distinct from source.",
    metadata: "Author/editor/process attribution where appropriate and governed.",
  },
  {
    label: "AI-assisted interpretation",
    treatment: "Persistent AI-assisted label plus source links where relevant.",
    metadata: "Never source-authority styling; never guaranteed-fact wording.",
  },
  {
    label: "User-created notes",
    treatment: "Workspace/user-origin treatment.",
    metadata: "User/workspace attribution according to product/privacy rules.",
  },
];

export default function SeparationSection() {
  return (
    <section id="separation" className="scroll-mt-32 bg-white py-20 sm:py-24">
      <Container>
        <Reveal>
          <SectionIntro
            eyebrow="Five Layers, Never Blurred"
            title="Source, normalization, analysis, AI and user notes stay visibly distinct."
          >
            Every mixed-content surface keeps these layers persistently labeled rather than visually
            merged.
          </SectionIntro>
        </Reveal>

        <Reveal delay={0.1} className="mt-4">
          <dl className="rounded-2xl bg-ink px-2 pb-2 pt-4 sm:pt-11">
            {layers.map((layer) => (
              <div
                key={layer.label}
                className="grid grid-cols-1 gap-2 border-b border-white/10 px-2 py-5 last:border-b-0 sm:px-4 lg:grid-cols-[240px_minmax(0,1fr)_minmax(0,1fr)] lg:gap-5"
              >
                <dt>
                  <span className="inline-block rounded-full bg-white/10 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide text-white">
                    {layer.label}
                  </span>
                </dt>
                <dd className="text-sm leading-5 text-white/80">{layer.treatment}</dd>
                <dd className="text-sm leading-5 text-white/55">{layer.metadata}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </Container>
    </section>
  );
}
