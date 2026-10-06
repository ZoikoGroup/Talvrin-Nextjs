"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import clsx from "clsx";
import { FAQ_DATA, IMG, SECTION_IDS } from "./accessibility-support-data";
import { CONTAINER, Eyebrow, Photo } from "./shared";

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id={SECTION_IDS.faq} className="w-full scroll-mt-32 bg-violet-50">
      <div className={`${CONTAINER} py-20 sm:py-24 flex flex-col lg:flex-row lg:items-end gap-10 lg:gap-5 xl:justify-between`}>
        <div className="flex-1 min-w-0 max-w-[800px] flex flex-col gap-3">
          <Eyebrow>{FAQ_DATA.eyebrow}</Eyebrow>
          <h2 className="text-3xl sm:text-4xl font-bold leading-tight text-slate-900">
            {FAQ_DATA.titleLines[0]} <br className="hidden sm:inline" />
            {FAQ_DATA.titleLines[1]}
          </h2>

          <div className="pt-5 flex flex-col gap-3">
            {FAQ_DATA.items.map((item, idx) => {
              const isOpen = open === idx;
              const panelId = `a11y-faq-${idx}`;
              return (
                <div key={item.question} className="rounded-xl border border-slate-900/10 bg-white">
                  <h3>
                    <button
                      type="button"
                      onClick={() => setOpen(isOpen ? null : idx)}
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      className="w-full px-5 py-4 flex items-center justify-between gap-4 text-left text-base font-semibold text-slate-900 rounded-xl cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      {item.question}
                      <ChevronDown
                        className={clsx("h-4 w-4 shrink-0 text-gray-600 transition-transform", isOpen && "rotate-180")}
                        aria-hidden="true"
                      />
                    </button>
                  </h3>
                  <div id={panelId} hidden={!isOpen} className="px-5 pb-5">
                    <p className="text-base leading-6 text-gray-600">{item.answer}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <Photo
          src={IMG.faq}
          sizes="(min-width: 1024px) 455px, 100vw"
          className="w-full max-w-[455px] aspect-[455/384] mx-auto lg:mx-0 shrink-0 lg:w-[360px] xl:w-[455px]"
        />
      </div>
    </section>
  );
}
