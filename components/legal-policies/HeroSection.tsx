"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { DOC_TYPES, LEGAL_DOCS, type DocGroup } from "./documents";
import { IMG, SectionEyebrow } from "./shared";

const quickLinks = [
  { label: "Core documents", href: "#core-documents" },
  { label: "Your privacy choices", href: "#privacy-choices" },
  { label: "Enterprise & other notices", href: "#enterprise-notices" },
  { label: "Contact Legal / Privacy", href: "#contact-legal" },
];

const fieldClasses =
  "w-full rounded-lg border border-white/25 bg-ink/30 px-4 py-3.5 text-base text-white placeholder:text-white/45 focus:border-white/50 focus:outline-none focus:ring-2 focus:ring-indigo-300/40";

export default function HeroSection() {
  const [query, setQuery] = useState("");
  const [type, setType] = useState<DocGroup | "all">("all");

  const searching = query.trim() !== "" || type !== "all";

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    return LEGAL_DOCS.filter((d) => {
      if (type !== "all" && d.group !== type) return false;
      if (!q) return true;
      return `${d.title} ${d.summary} ${d.keywords}`.toLowerCase().includes(q);
    });
  }, [query, type]);

  return (
    <section className="relative overflow-hidden bg-ink py-20 sm:py-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(640px 440px at 14% 4%, rgba(108,92,231,0.22), rgba(108,92,231,0) 65%), radial-gradient(500px 380px at 88% 88%, rgba(185,129,50,0.10), rgba(185,129,50,0) 60%)",
        }}
      />
      <Container className="relative grid grid-cols-1 items-start gap-12 lg:grid-cols-[minmax(0,760px)_minmax(0,374px)] lg:justify-between">
        <div>
          <Reveal>
            <SectionEyebrow tone="amber">Company / Legal &amp; Policies</SectionEyebrow>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="mt-5 text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-6xl">
              Legal &amp; Policies
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mt-5 max-w-[620px] text-lg leading-8 text-white/80">
              Clear documentation for using Talvrin responsibly — current policies, research and AI
              disclosures, and your privacy choices, all in one index.
            </p>
          </Reveal>

          <Reveal delay={0.25} className="mt-6 flex flex-wrap items-center gap-2.5">
            <span className="rounded-full border border-white/20 bg-white/10 px-3 py-[5px] text-xs font-bold text-white">
              Last reviewed: 17 October 2026
            </span>
            <span className="text-sm text-white/60">
              This index is a navigation aid. Each document&apos;s own version and effective date
              govern.
            </span>
          </Reveal>

          <Reveal
            delay={0.3}
            className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-5"
          >
            <form role="search" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-[minmax(0,1fr)_220px]">
                <label className="sr-only" htmlFor="legal-search">
                  Search legal documents
                </label>
                <input
                  id="legal-search"
                  type="search"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search legal documents by name or topic…"
                  className={fieldClasses}
                />
                <label className="sr-only" htmlFor="legal-type">
                  Document type
                </label>
                <select
                  id="legal-type"
                  value={type}
                  onChange={(e) => setType(e.target.value as DocGroup | "all")}
                  className={`${fieldClasses} [&>option]:text-ink`}
                >
                  {DOC_TYPES.map((t) => (
                    <option key={t.value} value={t.value}>
                      {t.label}
                    </option>
                  ))}
                </select>
              </div>
            </form>

            {searching && (
              <div className="mt-4" aria-live="polite">
                {results.length === 0 ? (
                  <p className="text-sm text-white/70">
                    No documents match. Try another term, or{" "}
                    <Link href="#contact-legal" className="font-semibold text-indigo-300 hover:text-white">
                      contact Legal / Privacy
                    </Link>
                    .
                  </p>
                ) : (
                  <ul className="divide-y divide-white/10 rounded-lg border border-white/10">
                    {results.map((d) => (
                      <li key={d.href}>
                        <Link
                          href={d.href}
                          className="flex items-center justify-between gap-4 px-4 py-3 text-sm text-white transition-colors hover:bg-white/5"
                        >
                          <span className="font-semibold">{d.title}</span>
                          <span className="shrink-0 text-xs text-white/50">{d.version} →</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )}

            <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-2">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm font-semibold text-indigo-300 transition-colors hover:text-white"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal
          delay={0.2}
          className="relative hidden aspect-square w-full overflow-hidden rounded-2xl lg:block"
        >
          <Image
            src={`${IMG}/legal-hero-tablet-meeting.webp`}
            alt="Colleagues discussing a document on a tablet at a meeting table"
            fill
            priority
            sizes="374px"
            className="object-cover"
          />
        </Reveal>
      </Container>
    </section>
  );
}
