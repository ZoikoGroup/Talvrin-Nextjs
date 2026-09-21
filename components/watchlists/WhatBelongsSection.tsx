import Image from "next/image";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionEyebrow, SectionHeading, SectionLede } from "./shared";

const items = [
  {
    title: "Company / issuer research",
    description: "Canonical identity, research question/view, evidence/monitoring links.",
    dependency: "Dependency: exact issuer/entity model",
  },
  {
    title: "Security / instrument",
    description: "Canonical instrument identity and related research context.",
    dependency: "Dependency: supported asset classes & identifiers",
  },
  {
    title: "Market / macro context",
    description: "Named market or macro research topic with scope/jurisdiction.",
    dependency: "Dependency: market taxonomy",
  },
  {
    title: "Economic event / release",
    description: "Event identity, relevant research view and monitoring relationship.",
    dependency: "Dependency: calendar/event model",
  },
];

export default function WhatBelongsSection() {
  return (
    <section className="bg-surface py-20 sm:py-28">
      <Container>
        <Reveal className="max-w-3xl">
          <SectionEyebrow tone="violet">What Belongs in a Watchlist</SectionEyebrow>
          <SectionHeading>Organize the research contexts you want to return to.</SectionHeading>
          <SectionLede>
            Talvrin is built around companies, securities, markets, economic events, policy
            issues, and research questions as research starting points. Watchlists accept only
            the item classes the approved capability registry supports — the application never
            silently creates unsupported object types.
          </SectionLede>
        </Reveal>

        <div className="mt-11 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {items.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.08}>
              <div className="flex h-full flex-col rounded-[14px] border border-ink/8 bg-white p-6">
                <h3 className="text-base font-bold text-ink">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.description}</p>
                <p className="mt-4 border-t border-ink/8 pt-3 text-xs text-accent-amber">
                  {item.dependency}
                </p>
              </div>
            </Reveal>
          ))}

          <Reveal
            delay={0.32}
            className="relative min-h-[220px] overflow-hidden rounded-[14px] border border-ink/8 bg-white sm:col-span-2 lg:col-span-1 lg:min-h-0"
          >
            <Image
              src="/images/product/watchlist/watchlist-belongs-team-meeting.png"
              alt="Team reviewing research together in a meeting room"
              fill
              sizes="(min-width: 1024px) 20vw, (min-width: 640px) 50vw, 100vw"
              className="object-cover"
            />
          </Reveal>
        </div>

        <Reveal delay={0.4} className="mt-5">
          <div className="rounded-[14px] border border-ink/8 bg-white p-6">
            <h3 className="text-base font-bold text-ink">Research question / view</h3>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-600">
              Persistent question/view from Research Workspace.
            </p>
            <p className="mt-4 border-t border-ink/8 pt-3 text-xs text-accent-amber">
              Dependency: research object model
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
