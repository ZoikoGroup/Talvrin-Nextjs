import Image from "next/image";
import clsx from "clsx";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionEyebrow, SectionHeading } from "../alerts/shared";

const panels = [
  {
    label: "BASELINE",
    tone: "text-accent-violet",
    body: "Source title placeholder — as it was last reviewed, with publisher, date and excerpt held constant for comparison.",
  },
  {
    label: "OBSERVED CHANGE",
    tone: "text-accent-amber",
    body: "The same source shown with an update — a revision, correction or removal — and the date that update became visible.",
  },
];

export default function EvidenceDeltaSection() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-[88px]">
      <Container className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,360px)] lg:items-stretch lg:gap-2 xl:grid-cols-[minmax(0,1fr)_435px]">
        <div className="min-w-0">
          <Reveal>
            <SectionEyebrow>Evidence-Delta Example</SectionEyebrow>
          </Reveal>
          <Reveal delay={0.1}>
            <SectionHeading className="max-w-[820px]">
              A useful change is one you can trace to a source, understand in
              context and decide whether to investigate.
            </SectionHeading>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-5 max-w-[780px] text-base leading-7 text-slate-700 sm:text-lg">
              Baseline and current evidence are shown side by side so a
              difference is visible before it is explained — never inferred from
              a headline alone.
            </p>
          </Reveal>

          <div className="mt-8 grid grid-cols-1 gap-3 sm:mt-10 sm:grid-cols-2 sm:gap-2 lg:pr-2">
            {panels.map((panel, index) => (
              <Reveal
                key={panel.label}
                delay={0.1 * (index + 2)}
                className="rounded-2xl border border-ink/10 bg-surface p-5 sm:p-6"
              >
                <p className={clsx("text-xs font-bold tracking-wide", panel.tone)}>{panel.label}</p>
                <p className="mt-2.5 text-sm leading-6 text-ink sm:text-base">{panel.body}</p>
              </Reveal>
            ))}
          </div>

          <p className="mt-4 text-xs italic text-gray-600">
            Conceptual example — not a live detection feed, a product
            screenshot, or actual source content.
          </p>
        </div>

        <Reveal
          delay={0.2}
          className="relative aspect-[435/437] w-full overflow-hidden rounded-2xl border border-ink/10 bg-surface sm:aspect-[16/10] lg:aspect-auto lg:min-h-[437px]"
        >
          <Image
            src="/images/product/change-detection/change-detection-delta-desk-review.webp"
            alt="Two colleagues reviewing work together at a desktop computer"
            fill
            sizes="(min-width: 1280px) 435px, (min-width: 1024px) 360px, 100vw"
            className="object-cover"
          />
        </Reveal>
      </Container>
    </section>
  );
}
