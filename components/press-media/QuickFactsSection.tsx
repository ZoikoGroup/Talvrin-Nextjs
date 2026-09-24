"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionEyebrow, SectionHeading } from "./shared";

const approvedDescription =
  "Talvrin is building a source-linked research and monitoring platform for global public markets. It is designed to connect questions, evidence, context, preserved research views, and continuous monitoring so trustworthy public-market evidence is easier to find, understand, verify, and reassess. Talvrin is a trading name of Zoiko Markets, a Zoiko Financial Group company.";

const lastReviewed = "September 17, 2026";

const facts = [
  {
    label: "What Talvrin Is",
    body: "Talvrin is building a source-linked research and monitoring platform for global public markets.",
  },
  {
    label: "Research Model",
    body: "Talvrin connects questions, evidence, context, preserved research views, and continuous monitoring.",
  },
  {
    label: "AI Boundary",
    body: "AI may assist research, while underlying evidence remains inspectable and judgment remains human.",
  },
  {
    label: "Corporate Relationship",
    body: "Talvrin is a trading name of Zoiko Markets, a Zoiko Financial Group company.",
  },
];

export default function QuickFactsSection() {
  const [copied, setCopied] = useState(false);

  async function copyDescription() {
    try {
      await navigator.clipboard.writeText(approvedDescription);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(false);
    }
  }

  return (
    <section id="quick-facts" className="scroll-mt-32 bg-white py-16 sm:py-24">
      <Container>
        <Reveal className="max-w-[800px]">
          <SectionEyebrow tone="amber">Talvrin in Brief</SectionEyebrow>
          <SectionHeading>A source-backed description journalists can quote directly.</SectionHeading>
        </Reveal>

        <Reveal
          delay={0.1}
          className="mt-8 rounded-2xl border border-ink/10 bg-surface px-6 pb-8 pt-8 sm:px-7 sm:pt-10"
        >
          <p className="text-base leading-7 text-ink">{approvedDescription}</p>
        </Reveal>

        <Reveal delay={0.15} className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-3">
          <button
            type="button"
            onClick={copyDescription}
            className="rounded-lg bg-ink px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-ink-2"
          >
            {copied ? "Copied to clipboard" : "Copy Approved Description"}
          </button>
          <span className="text-xs text-slate-600">Last reviewed {lastReviewed}</span>
          <Link
            href="/company/about-talvrin"
            className="text-sm font-semibold text-accent-violet transition-colors hover:text-ink"
          >
            About Talvrin →
          </Link>
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2">
          <Reveal className="rounded-xl border border-ink/10 bg-white p-5 lg:order-1">
            <p className="text-xs font-bold uppercase tracking-wide text-accent-violet">
              {facts[0].label}
            </p>
            <p className="mt-2 text-base leading-6 text-slate-600">{facts[0].body}</p>
          </Reveal>

          <Reveal delay={0.05} className="rounded-xl border border-ink/10 bg-white p-5 lg:order-3">
            <p className="text-xs font-bold uppercase tracking-wide text-accent-violet">
              {facts[1].label}
            </p>
            <p className="mt-2 text-base leading-6 text-slate-600">{facts[1].body}</p>
          </Reveal>

          <Reveal delay={0.1} className="rounded-xl border border-ink/10 bg-white p-5 lg:order-4">
            <p className="text-xs font-bold uppercase tracking-wide text-accent-violet">
              {facts[2].label}
            </p>
            <p className="mt-2 text-base leading-6 text-slate-600">{facts[2].body}</p>
          </Reveal>

          <Reveal delay={0.15} className="rounded-xl border border-ink/10 bg-white p-5 lg:order-5">
            <p className="text-xs font-bold uppercase tracking-wide text-accent-violet">
              {facts[3].label}
            </p>
            <p className="mt-2 text-base leading-6 text-slate-600">{facts[3].body}</p>
          </Reveal>

          {/* Centre column on desktop: the photo spans both card rows. */}
          <Reveal
            delay={0.2}
            className="relative aspect-[412/326] overflow-hidden rounded-xl border border-ink/10 sm:col-span-2 lg:order-2 lg:col-span-1 lg:row-span-2 lg:aspect-auto"
          >
            <Image
              src="/images/company/press-media/press-media-quick-facts-press.webp"
              alt="Press photographers and reporters covering an event"
              fill
              sizes="(min-width: 1024px) 412px, 100vw"
              className="object-cover"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
