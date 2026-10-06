import React from "react";
import Link from "next/link";
import { HERO_DATA, IMG } from "./accessibility-support-data";
import { CONTAINER, Photo } from "./shared";

export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden bg-slate-900">
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_12%_0%,rgba(99,102,241,0.2),rgba(99,102,241,0)_65%)]"
        aria-hidden="true"
      />

      <div className={`${CONTAINER} relative py-20 sm:py-24 lg:py-28 flex flex-col lg:flex-row lg:items-start gap-10 lg:gap-6 xl:justify-between`}>
        <div className="w-full lg:max-w-[705px] flex flex-col gap-5">
          <span className="text-xs font-bold tracking-wide text-yellow-600">{HERO_DATA.eyebrow}</span>

          {/* Figma sets the headline as exactly three lines. From sm up each line is kept on one row
              (48px fits the narrowest lg column, 60px fits xl); phones are too narrow, so it wraps there. */}
          <h1 className="text-4xl sm:text-5xl xl:text-6xl font-bold leading-[1.05] xl:leading-[61.6px] text-violet-50">
            {HERO_DATA.headlineLines.map((line) => (
              <span key={line} className="block sm:whitespace-nowrap">
                {line}
              </span>
            ))}
          </h1>

          <p className="max-w-[680px] text-base sm:text-lg leading-7 sm:leading-8 text-violet-50/90">{HERO_DATA.description}</p>

          <div className="max-w-[680px] rounded-xl border border-violet-50/20 bg-violet-50/10 px-5 py-4 flex items-start gap-3" role="note">
            <span className="pt-0.5 text-base text-violet-50" aria-hidden="true">
              ⚑
            </span>
            <p className="text-sm sm:text-base leading-6 text-violet-50">
              <strong className="font-bold">{HERO_DATA.warning.strong}</strong>
              {HERO_DATA.warning.rest}
            </p>
          </div>

          <div className="pt-4 flex flex-col sm:flex-row sm:items-center gap-4">
            <Link
              href={HERO_DATA.primary.href}
              className="inline-flex justify-center rounded-lg bg-violet-50 px-6 py-3.5 text-base font-semibold text-slate-900 transition-colors hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-50"
            >
              {HERO_DATA.primary.label}
            </Link>
            <Link
              href={HERO_DATA.secondary.href}
              className="text-sm font-semibold text-violet-50/90 hover:text-white hover:underline underline-offset-4"
            >
              {HERO_DATA.secondary.label}
            </Link>
          </div>

          <Link
            href={HERO_DATA.account.href}
            className="self-start text-sm font-semibold text-violet-50/70 hover:text-white hover:underline underline-offset-4"
          >
            {HERO_DATA.account.label}
          </Link>
        </div>

        <Photo
          src={IMG.hero}
          sizes="(min-width: 1280px) 475px, (min-width: 1024px) 380px, 100vw"
          className="w-full max-w-[475px] aspect-[475/575] mx-auto lg:mx-0 shrink-0 bg-white lg:w-[380px] xl:w-[475px]"
        />
      </div>
    </section>
  );
}
