import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionEyebrow, SectionHeading } from "./shared";

const layers = [
  {
    title: "Watchlists",
    owns: "Organization of research contexts and items a user chooses to keep in view.",
    doesNotOwn: "Change detection, materiality, notification delivery.",
  },
  {
    title: "Monitoring",
    owns: 'Evidence-change detection, "since last review", review workflow and materiality semantics.',
    doesNotOwn: "Notification channels, delivery attempts, inbox acknowledgement.",
  },
  {
    title: "Alerts",
    owns: "Approved trigger presentation, notification delivery, preference state and history where supported.",
    doesNotOwn: "Evidence truth, Monitoring recomputation, investment recommendation.",
  },
  {
    title: "Evidence",
    owns: "Source identity, provenance, rights and access, timing, jurisdiction, version and inspection.",
    doesNotOwn: "Notification policy or user attention state.",
  },
];

export default function ThreeLayersSection() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <Container>
        <Reveal className="max-w-[760px]">
          <SectionEyebrow tone="violet">Alerts vs Monitoring vs Watchlists</SectionEyebrow>
          <SectionHeading>Three layers, one continuous workflow.</SectionHeading>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {layers.map((layer, index) => (
            <Reveal
              key={layer.title}
              delay={index * 0.05}
              className="rounded-xl border border-ink/10 bg-surface p-5"
            >
              <h3 className="text-base font-bold text-ink">{layer.title}</h3>
              <p className="mt-3.5 text-xs font-bold uppercase tracking-wide text-accent-violet">
                Owns
              </p>
              <p className="mt-1 text-sm leading-5 text-slate-700">{layer.owns}</p>
              <p className="mt-3.5 text-xs font-bold uppercase tracking-wide text-slate-500">
                Does Not Own
              </p>
              <p className="mt-1 text-sm leading-5 text-slate-600">{layer.doesNotOwn}</p>
            </Reveal>
          ))}
        </div>

        <Reveal
          delay={0.2}
          className="mt-8 max-w-[840px] rounded-lg border-l-[3px] border-accent-amber bg-surface px-6 py-5"
        >
          <p className="text-base leading-6 text-ink">
            Watchlists help you keep research in view. Monitoring identifies governed changes that
            may require review. Alerts tells you when an approved condition asks for your
            attention. Evidence remains the source you can inspect.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
