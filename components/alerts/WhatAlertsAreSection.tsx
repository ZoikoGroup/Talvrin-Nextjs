import Image from "next/image";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionEyebrow, SectionHeading } from "./shared";

const alertsCan = [
  "Present a supported trigger or event from an authoritative service.",
  "Tell the user why the alert exists.",
  "Return the user to Monitoring and Evidence.",
  "Respect supported preferences and delivery destinations.",
  "Preserve delivery and audit status where infrastructure supports it.",
  "Group or suppress duplicate noise under approved rules.",
  "Show limitations in coverage or service scope.",
];

export default function WhatAlertsAreSection() {
  return (
    <section className="bg-surface py-20 sm:py-24">
      <Container>
        <Reveal className="max-w-[760px]">
          <SectionEyebrow tone="violet">What Alerts Are and Are Not</SectionEyebrow>
          <SectionHeading>Attention with context — not a trading signal.</SectionHeading>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-9">
          <Reveal className="rounded-2xl border border-t-[3px] border-accent-violet/60 border-t-accent-violet bg-white px-6 pb-10 pt-7 sm:px-7">
            <h3 className="text-lg font-bold text-ink">Alerts can</h3>
            <ul className="mt-3 space-y-3">
              {alertsCan.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-base leading-6 text-slate-700">
                  <span className="mt-2 size-1.5 shrink-0 rounded-sm bg-accent-violet" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal
            delay={0.15}
            className="relative aspect-[636/344] overflow-hidden rounded-2xl border border-t-[3px] border-pink-800/40 border-t-pink-800 lg:aspect-auto lg:min-h-[340px]"
          >
            <Image
              src="/images/product/alerts/alerts-context-analyst.webp"
              alt="Analyst reviewing dashboards on a laptop while colleagues meet in the background"
              fill
              sizes="(min-width: 1024px) 636px, 100vw"
              className="object-cover"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
