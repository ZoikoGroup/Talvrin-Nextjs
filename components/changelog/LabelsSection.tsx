import Image from "next/image";
import clsx from "clsx";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionEyebrow, SectionHeading, SectionLede } from "./shared";

const changeTypes = [
  {
    label: "Added",
    style: "bg-green-500/10 text-green-700",
    body: "New public developer capability or contract element. Used only when availability is real and approved.",
  },
  {
    label: "Changed",
    style: "bg-accent-violet/10 text-indigo-600",
    body: "Existing public behavior or contract changed. Impact details are required.",
  },
  {
    label: "Fixed",
    style: "bg-ink/10 text-ink",
    body: "A defect affecting documented behavior was corrected. Does not imply current service health.",
  },
  {
    label: "Breaking",
    style: "bg-orange-800/10 text-orange-800",
    body: "Existing implementations may fail or need migration. Requires compatibility approval.",
  },
  {
    label: "Security / trust notice",
    style: "bg-slate-500/20 text-slate-700",
    body: "Developer-relevant security or trust change approved for public, safe-summary disclosure.",
  },
  {
    label: "Documentation-only",
    style: "bg-ink/5 text-slate-600",
    body: "Documentation changed. Product behavior did not.",
  },
];

const developerActions = [
  {
    label: "No action required",
    style: "border-ink/10 bg-surface text-slate-600",
    body: "The technical owner explicitly confirmed no developer action.",
  },
  {
    label: "Review recommended",
    style: "border-accent-violet bg-white text-indigo-600",
    body: "Inspect the change. No mandatory migration is established.",
  },
  {
    label: "Action required",
    style: "border-accent-amber bg-orange-300 text-ink",
    body: "A concrete action is needed by the effective time or other approved condition.",
  },
  {
    label: "Migration required",
    style: "border-orange-800 bg-orange-800 text-white",
    body: "Implementations must move to a replacement version or path. Guidance is required.",
  },
];

const lifecycles = [
  { label: "Published", body: "Current public record." },
  {
    label: "Corrected",
    body: "Material content was corrected. The correction note and time are visible.",
  },
  { label: "Superseded", body: "A newer record replaces this guidance and links to its successor." },
  {
    label: "Withdrawn",
    body: "The record or guidance is no longer valid. Action guidance is disabled.",
  },
];

export default function LabelsSection() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <Container>
        <Reveal className="max-w-[820px]">
          <SectionEyebrow tone="amber">How to Read This Changelog</SectionEyebrow>
          <SectionHeading>
            Every label is set by a technical owner. None is inferred from wording.
          </SectionHeading>
          <SectionLede className="max-w-[780px] sm:text-base sm:leading-6">
            Color reinforces meaning but never carries it alone. Every state appears as visible
            text.
          </SectionLede>
        </Reveal>

        <Reveal delay={0.1}>
          <h3 className="mt-10 text-lg font-bold text-ink">Change type</h3>
        </Reveal>

        <div className="mt-4 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {changeTypes.map((item, index) => (
            <Reveal
              key={item.label}
              delay={index * 0.03}
              className="flex flex-col gap-3 rounded-2xl bg-surface p-5"
            >
              <span
                className={clsx(
                  "w-fit rounded-md px-2 py-[5px] font-mono text-xs font-bold uppercase",
                  item.style
                )}
              >
                {item.label}
              </span>
              <p className="text-sm leading-5 text-slate-700">{item.body}</p>
            </Reveal>
          ))}

          <Reveal
            delay={0.2}
            className="relative aspect-[3/2] overflow-hidden rounded-2xl sm:col-span-2 lg:col-span-3 lg:aspect-[16/5] xl:col-span-1 xl:col-start-4 xl:row-span-2 xl:row-start-1 xl:aspect-auto"
          >
            <Image
              src="/images/developers/changelog/changelog-labels-congratulation.webp"
              alt="Colleagues congratulating each other at a meeting"
              fill
              sizes="(min-width: 1280px) 310px, 100vw"
              className="object-cover"
            />
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <h3 className="mt-10 text-lg font-bold text-ink">Developer action</h3>
        </Reveal>

        <div className="mt-4 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {developerActions.map((item, index) => (
            <Reveal
              key={item.label}
              delay={index * 0.03}
              className="flex flex-col gap-3 rounded-2xl bg-surface p-5"
            >
              <span
                className={clsx(
                  "w-fit rounded-md border px-2.5 py-1 text-xs font-bold",
                  item.style
                )}
              >
                {item.label}
              </span>
              <p className="text-sm leading-5 text-slate-700">{item.body}</p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <h3 className="mt-10 text-lg font-bold text-ink">Lifecycle</h3>
        </Reveal>

        <div className="mt-4 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {lifecycles.map((item, index) => (
            <Reveal
              key={item.label}
              delay={index * 0.03}
              className="flex flex-col gap-3 rounded-2xl bg-surface p-5"
            >
              <span className="w-fit rounded-md border border-slate-500 px-2 py-1 font-mono text-xs font-bold uppercase text-slate-700">
                {item.label}
              </span>
              <p className="text-sm leading-5 text-slate-700">{item.body}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
