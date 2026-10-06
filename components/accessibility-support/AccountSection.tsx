import React from "react";
import Link from "next/link";
import { ACCOUNT_DATA, IMG, SECTION_IDS } from "./accessibility-support-data";
import { CONTAINER, Eyebrow, Photo } from "./shared";

export default function AccountSection() {
  return (
    <section id={SECTION_IDS.account} className="w-full scroll-mt-32 bg-violet-50">
      <div className={`${CONTAINER} py-20 sm:py-24 flex flex-col lg:flex-row lg:items-start gap-10 xl:justify-between`}>
        <div className="flex-1 min-w-0 max-w-[760px] flex flex-col gap-3">
          <Eyebrow tone="indigo">{ACCOUNT_DATA.eyebrow}</Eyebrow>
          <h2 className="text-3xl sm:text-4xl font-bold leading-tight text-slate-900">
            {ACCOUNT_DATA.titleLines[0]} <br className="hidden sm:inline" />
            {ACCOUNT_DATA.titleLines[1]}
          </h2>
          <div className="mt-2 rounded-2xl border border-slate-900/10 bg-white px-5 sm:px-7 py-6 sm:py-8 flex flex-col gap-3">
            {ACCOUNT_DATA.paragraphs.map((p) => (
              <p key={p} className="text-base leading-6 text-gray-600">
                {p}
              </p>
            ))}
            <Link
              href={ACCOUNT_DATA.cta.href}
              className="mt-2 self-start rounded-lg bg-slate-900 px-5 py-3 text-base font-semibold text-violet-50 transition-colors hover:bg-slate-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900"
            >
              {ACCOUNT_DATA.cta.label}
            </Link>
          </div>
        </div>

        <Photo
          src={IMG.account}
          sizes="(min-width: 1024px) 489px, 100vw"
          className="w-full max-w-[489px] aspect-[489/383] mx-auto lg:mx-0 shrink-0 lg:w-[380px] xl:w-[489px]"
        />
      </div>
    </section>
  );
}
