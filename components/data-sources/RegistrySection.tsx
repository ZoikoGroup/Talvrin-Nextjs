import Image from "next/image";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionIntro } from "../individual-investors/shared";
import { Pill } from "../ai-principles/shared";
import { IMAGE_DIR } from "./shared";

const controls = [
  {
    title: "Search",
    body: "Approved public source/publisher name only — no implied claim that unseen providers exist.",
  },
  { title: "Source class", body: "Registry-provided class values only." },
  { title: "Market / domain", body: "Rendered only from approved coverage dimensions." },
  {
    title: "Sort",
    body: "Alphabetical default; \"recently verified\" only if verification data is reliable.",
  },
  { title: "Jurisdiction", body: "Rendered only when public registry data supports it." },
  {
    title: "Coverage state",
    body: "Deep Coverage / Supported / Limited-Beta / Planned, only when approved.",
  },
];

export default function RegistrySection() {
  return (
    <section id="registry" className="scroll-mt-32 bg-white py-20 sm:py-24">
      <Container>
        <Reveal>
          <SectionIntro
            eyebrow="Registry-Backed Public Inventory Only"
            title="A public source inventory is not published on this page."
          >
            Talvrin source coverage is governed internally. A complete public source directory renders
            only once a registry projection exists and is approved for publication; source identity
            remains visible on evidence itself where permitted.
          </SectionIntro>
        </Reveal>

        <Reveal delay={0.1} className="mt-10">
          <div role="note" className="rounded-2xl bg-ink px-6 py-7 sm:px-7 sm:py-8">
            <h3 className="text-base font-bold text-white">Source inventory not published here</h3>
            <p className="mt-2 text-sm leading-6 text-white/70">
              No provider names, source counts or feed lists are shown in their absence. Nothing here
              should be read as a claim that an inventory does not exist internally — only that it is
              not public on this page today.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.15} className="mt-10">
          <h3 className="text-xs font-bold uppercase tracking-wide text-muted">
            Planned explorer controls, once live
          </h3>
        </Reveal>

        <div className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-2">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3">
            {controls.map((control, index) => (
              <Reveal key={control.title} delay={index * 0.04} className="h-full">
                <div className="flex h-full flex-col gap-2 rounded-xl border border-ink/10 bg-surface p-4">
                  <h4 className="text-sm font-bold text-ink">{control.title}</h4>
                  <p className="flex-1 text-xs leading-5 text-muted">{control.body}</p>
                  <Pill className="text-[10px]">Not yet available</Pill>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal
            delay={0.2}
            className="relative aspect-video overflow-hidden rounded-xl border border-ink/10 bg-surface lg:aspect-auto lg:min-h-[320px]"
          >
            <Image
              src={`${IMAGE_DIR}/data-sources-registry-meeting.webp`}
              alt="Two professionals in conversation on a sofa"
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
