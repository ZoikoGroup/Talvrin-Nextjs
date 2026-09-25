import Image from "next/image";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionEyebrow, SectionHeading, SectionLede } from "./shared";

const facets = [
  {
    code: "PL",
    title: "Public label",
    body: "A plain-language label from the approved permission registry — never an opaque internal policy ID alone.",
    tone: "bg-accent-violet",
  },
  {
    code: "PU",
    title: "Purpose",
    body: "The concrete capability or resource access each permission actually enables.",
    tone: "bg-accent-violet",
  },
  {
    code: "RO",
    title: "Required vs. optional",
    body: "Made explicit. Optional access is never preselected or portrayed as mandatory.",
    tone: "bg-accent-violet",
  },
  {
    code: "DF",
    title: "Default",
    body: "Defaults to the minimum permissions required for the selected developer task.",
    tone: "bg-accent-amber",
  },
  {
    code: "EX",
    title: "Expansion",
    body: "Broader permission is requested only at the point a capability actually needs it.",
    tone: "bg-slate-600",
  },
  {
    code: "RV",
    title: "Revocation",
    body: "What functionality stops when a permission or credential is removed, using authoritative behavior.",
    tone: "bg-slate-600",
  },
];

export default function PermissionsSection() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <Container>
        <Reveal className="max-w-[780px]">
          <SectionEyebrow tone="amber">Permissions &amp; Least Privilege</SectionEyebrow>
          <SectionHeading>Every permission has a purpose, a boundary, and an owner.</SectionHeading>
          <SectionLede className="max-w-[780px] sm:text-base sm:leading-6">
            Defaults are the minimum required for the task. Broader access is requested only at the
            point a capability needs it — never to simplify onboarding.
          </SectionLede>
        </Reveal>

        {/* One panel with a grey strip along the top and divider lines between cells,
            as in the design. The -mb/-mr pull the trailing borders past the clip. */}
        <Reveal delay={0.05} className="mt-9 overflow-hidden rounded-2xl border border-ink/10">
          <div className="h-8 w-full bg-ink/5" aria-hidden="true" />

          <div className="-mb-px -mr-px grid grid-cols-1 bg-white sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-[repeat(3,minmax(0,1fr))_minmax(0,512px)]">
            {facets.map((facet) => (
              <div
                key={facet.code}
                className="flex flex-col gap-2 border-b border-r border-ink/10 p-6"
              >
                <span
                  className={`flex size-8 items-center justify-center rounded-full text-xs font-bold text-white ${facet.tone}`}
                  aria-hidden="true"
                >
                  {facet.code}
                </span>
                <h3 className="mt-2 text-base font-bold text-ink">{facet.title}</h3>
                <p className="text-sm leading-5 text-slate-600">{facet.body}</p>
              </div>
            ))}

            <div className="relative aspect-[3/2] overflow-hidden border-b border-r border-ink/10 sm:col-span-2 lg:col-span-3 lg:aspect-[16/5] xl:col-span-1 xl:col-start-4 xl:row-span-2 xl:row-start-1 xl:aspect-auto">
              <Image
                src="/images/developers/authentication/authentication-permissions-laptop.webp"
                alt="Colleagues pointing at a laptop screen together"
                fill
                sizes="(min-width: 1280px) 512px, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
