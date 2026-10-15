import Image from "next/image";
import clsx from "clsx";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionEyebrow, SectionHeading } from "../alerts/shared";

const rightsStates = [
  {
    label: "PUBLIC",
    tone: "text-emerald-600",
    body: "Visible and linked back to the original source where rights permit.",
  },
  {
    label: "LICENSED",
    tone: "text-accent-violet",
    body: "Access and use follow licensing and entitlement rules; never exposed beyond the granted terms.",
  },
  {
    label: "RESTRICTED",
    tone: "text-accent-amber",
    body: "Only allowed metadata and a safe access explanation are shown — content stays protected.",
  },
];

const layers = [
  {
    title: "Source fact",
    body: "Original material from the named source.",
    className: "border-accent-violet/25 bg-accent-violet/10",
  },
  {
    title: "Analyst note",
    body: "User- or analyst-authored interpretation, labeled as judgment.",
    className: "border-ink/10 bg-surface",
  },
  {
    title: "AI summary",
    body: "AI-assisted output, labeled and kept subordinate to the source.",
    className: "border-accent-amber/25 bg-accent-amber/10",
  },
];

export default function ProvenanceSection() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-[88px]">
      <Container>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1fr)_280px] lg:items-start xl:grid-cols-[minmax(0,1fr)_314px]">
          <div className="min-w-0">
            <Reveal>
              <SectionEyebrow>Provenance &amp; Rights</SectionEyebrow>
            </Reveal>
            <Reveal delay={0.1}>
              <SectionHeading className="max-w-[640px]">
                The source stays reachable, not just referenced.
              </SectionHeading>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-5 max-w-[780px] text-base leading-7 text-gray-600">
                Where rights permit, a question leads back to the underlying
                source. Where rights do not permit access, the workspace exposes
                only the metadata and actions policy allows — never a
                reconstruction of restricted content.
              </p>
            </Reveal>

            <div className="mt-8 grid grid-cols-1 gap-2 sm:mt-10 sm:grid-cols-3">
              {rightsStates.map((state, index) => (
                <Reveal
                  key={state.label}
                  delay={0.1 * (index + 2)}
                  className="rounded-xl border border-ink/10 bg-surface p-5"
                >
                  <p className={clsx("text-xs font-bold tracking-wide", state.tone)}>{state.label}</p>
                  <p className="mt-2 text-sm leading-5 text-slate-700">{state.body}</p>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal
            delay={0.2}
            className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-ink/10 bg-surface sm:aspect-[16/9] lg:aspect-[314/395]"
          >
            <Image
              src="/images/product/research-workspace/research-workspace-provenance-executives.webp"
              alt="Two executives in suits listening intently during a meeting"
              fill
              sizes="(min-width: 1280px) 314px, (min-width: 1024px) 280px, 100vw"
              className="object-cover object-[center_25%]"
            />
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <p className="mt-10 text-xs font-bold tracking-wide text-gray-600 sm:mt-12">
            SOURCE, ANALYSIS AND AI STAY VISUALLY DISTINCT
          </p>
        </Reveal>
        <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-3">
          {layers.map((layer, index) => (
            <Reveal
              key={layer.title}
              delay={0.05 * (index + 2)}
              className={clsx("rounded-[10px] border px-4 py-4", layer.className)}
            >
              <p className="text-xs font-bold text-ink">{layer.title}</p>
              <p className="mt-1 text-xs leading-5 text-gray-600">{layer.body}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
