"use client";

import { useEffect, useRef } from "react";

const comparisonRows = [
  {
    market:
      "Market/domain coverage status and depth.",
    jurisdictions:
      "Jurisdiction-specific support state and operational/legal context.",
  },
  {
    market:
      "Asset classes and research capabilities by coverage record.",
    jurisdictions:
      "Jurisdictional constraints, regional governance, source/rights context by jurisdiction.",
  },
  {
    market:
      "Source-class / data-timeliness / rights-level summary.",
    jurisdictions:
      "More detailed jurisdiction treatment once Supported Jurisdictions is specified and approved.",
  },
  {
    market:
      "High-level jurisdiction links.",
    jurisdictions:
      "Canonical jurisdiction records and jurisdiction-specific disclosure where approved.",
  },
];

export default function RelatedCoverage() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) {
      return;
    }

    const elements =
      section.querySelectorAll<HTMLElement>("[data-reveal]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          const element = entry.target as HTMLElement;

          element.classList.remove(
            "opacity-0",
            "translate-y-8"
          );

          element.classList.add(
            "opacity-100",
            "translate-y-0"
          );

          observer.unobserve(element);
        });
      },
      {
        threshold: 0.08,
        rootMargin: "0px 0px -60px 0px",
      }
    );

    elements.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full overflow-hidden bg-violet-50"
    >
      <div
        className="
          mx-auto
          w-full
          max-w-[1440px]
          px-6
          py-20
          sm:px-8
          md:px-10
          lg:px-20
          lg:py-[96px]
        "
      >
        {/* CONTENT WRAPPER */}
        <div className="w-full">
          {/* EYEBROW */}
          <div
            data-reveal
            className="
              translate-y-8
              opacity-0
              transition-all
              duration-700
              ease-out
            "
          >
            <p
              className="
                m-0
                font-['IBM_Plex_Sans']
                text-xs
                font-bold
                tracking-wide
                text-yellow-600
              "
            >
              RELATED, NOT DUPLICATE
            </p>
          </div>

          {/* HEADING */}
          <div
            data-reveal
            className="
              mt-4
              translate-y-8
              opacity-0
              transition-all
              duration-700
              ease-out
            "
            style={{
              transitionDelay: "80ms",
            }}
          >
            <h2
              className="
                m-0
                max-w-[780px]
                font-['IBM_Plex_Sans']
                text-[36px]
                font-bold
                leading-[1.1]
                tracking-[-1px]
                text-slate-900
                sm:text-[42px]
                lg:text-5xl
                lg:leading-[48.72px]
              "
            >
              Market Coverage and Supported
              <br className="hidden sm:block" />
              Jurisdictions answer different
              <br className="hidden sm:block" />
              questions.
            </h2>
          </div>

          {/* DESCRIPTION */}
          <div
            data-reveal
            className="
              mt-5
              translate-y-8
              opacity-0
              transition-all
              duration-700
              ease-out
            "
            style={{
              transitionDelay: "140ms",
            }}
          >
            <p
              className="
                m-0
                max-w-[780px]
                font-['IBM_Plex_Sans']
                text-base
                font-normal
                leading-7
                text-gray-600
              "
            >
              Market Coverage owns what research coverage is released.
              Supported Jurisdictions, as a separate destination, owns
              where jurisdiction-sensitive operations, sources, data
              rights, and legal context are supported. The two pages
              cross-link but never duplicate each other.
            </p>
          </div>

          {/* COMPARISON TABLE */}
          <div className="mt-16 w-full">
            {/* COLUMN HEADINGS */}
            <div
              data-reveal
              className="
                grid
                translate-y-8
                grid-cols-1
                gap-3
                border-b
                border-slate-900/10
                pb-3
                opacity-0
                transition-all
                duration-700
                ease-out
                md:grid-cols-2
                md:gap-4
              "
              style={{
                transitionDelay: "200ms",
              }}
            >
              <div
                className="
                  font-['IBM_Plex_Sans']
                  text-xs
                  font-bold
                  tracking-wide
                  text-gray-600
                "
              >
                MARKET COVERAGE OWNS
              </div>

              <div
                className="
                  font-['IBM_Plex_Sans']
                  text-xs
                  font-bold
                  tracking-wide
                  text-gray-600
                "
              >
                SUPPORTED JURISDICTIONS OWNS
              </div>
            </div>

            {/* ROWS */}
            {comparisonRows.map((row, index) => (
              <div
                key={row.market}
                data-reveal
                className="
                  grid
                  translate-y-8
                  grid-cols-1
                  gap-5
                  border-b
                  border-slate-900/10
                  py-5
                  opacity-0
                  transition-all
                  duration-700
                  ease-out
                  md:grid-cols-2
                  md:gap-4
                "
                style={{
                  transitionDelay: `${260 + index * 80}ms`,
                }}
              >
                {/* MARKET COVERAGE */}
                <div
                  className="
                    font-['IBM_Plex_Sans']
                    text-base
                    font-normal
                    leading-6
                    text-slate-700
                  "
                >
                  {row.market}
                </div>

                {/* SUPPORTED JURISDICTIONS */}
                <div
                  className="
                    font-['IBM_Plex_Sans']
                    text-base
                    font-normal
                    leading-6
                    text-gray-600
                  "
                >
                  {row.jurisdictions}
                </div>
              </div>
            ))}
          </div>

          {/* BOTTOM NOTICE */}
          <div
            data-reveal
            className="
              mt-10
              translate-y-8
              rounded-2xl
              border
              border-slate-900/10
              bg-white
              px-7
              py-6
              opacity-0
              transition-all
              duration-700
              ease-out
            "
            style={{
              transitionDelay: "600ms",
            }}
          >
            <p
              className="
                m-0
                font-['IBM_Plex_Sans']
                text-sm
                font-normal
                leading-6
                text-gray-600
              "
            >
              Supported Jurisdictions is the next item in the current
              Markets sequence and is not published yet. This page will
              link to it directly once its route is released.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}