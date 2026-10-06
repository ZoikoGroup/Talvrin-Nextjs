import React from "react";
import Link from "next/link";
import clsx from "clsx";
import { IMG, RELATED_DATA, SECTION_IDS, type RelatedCard } from "./accessibility-support-data";
import { CONTAINER, Eyebrow, Photo, SectionTitle } from "./shared";

function Card({ card }: { card: RelatedCard }) {
  return (
    <div className="h-full rounded-xl border border-slate-900/10 bg-violet-50 p-5 flex flex-col gap-2">
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-base font-bold text-slate-900">{card.title}</h3>
        <span
          className={clsx(
            "shrink-0 rounded-full px-2 py-[3px] text-[10px] font-bold tracking-wide",
            card.available ? "bg-teal-700/10 text-teal-700" : "bg-yellow-600/10 text-yellow-800"
          )}
        >
          {card.available ? RELATED_DATA.availableLabel : RELATED_DATA.unavailableLabel}
        </span>
      </div>
      <p className="text-xs leading-5 text-gray-600">{card.description}</p>
      {card.available && card.href ? (
        <Link href={card.href} className="mt-auto text-xs font-semibold text-indigo-600 hover:underline underline-offset-4">
          {RELATED_DATA.openLabel}
          <span className="sr-only"> {card.title}</span>
        </Link>
      ) : (
        <span className="mt-auto text-xs text-gray-600">{RELATED_DATA.unavailableNote}</span>
      )}
    </div>
  );
}

export default function RelatedSection() {
  return (
    <section id={SECTION_IDS.related} className="w-full scroll-mt-32 bg-white">
      <div className={`${CONTAINER} py-20 sm:py-24 flex flex-col gap-3`}>
        <Eyebrow>{RELATED_DATA.eyebrow}</Eyebrow>
        <SectionTitle>{RELATED_DATA.title}</SectionTitle>
        <p className="max-w-[720px] text-base leading-6 text-gray-600">{RELATED_DATA.description}</p>

        <div className="pt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <ul className="contents">
            {RELATED_DATA.cards.slice(0, 3).map((card) => (
              <li key={card.title}>
                <Card card={card} />
              </li>
            ))}
          </ul>
          <Photo
            src={IMG.related}
            sizes="(min-width: 1024px) 320px, 100vw"
            className="order-last aspect-video sm:col-span-2 lg:order-none lg:col-span-1 lg:col-start-4 lg:row-start-1 lg:row-span-2 lg:aspect-auto lg:min-h-[280px]"
          />
          <ul className="contents">
            {RELATED_DATA.cards.slice(3).map((card) => (
              <li key={card.title}>
                <Card card={card} />
              </li>
            ))}
          </ul>
        </div>

        <p className="mt-4 rounded-[10px] border border-slate-900/10 bg-violet-50 px-4 py-4 text-sm text-yellow-800">
          {RELATED_DATA.notice}
        </p>
      </div>
    </section>
  );
}
