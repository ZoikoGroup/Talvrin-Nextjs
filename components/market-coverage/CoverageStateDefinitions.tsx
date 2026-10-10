"use client";

import Image from "next/image";

const coverageStates = [
  {
    label: "DEEP COVERAGE",
    labelClass:
      "bg-indigo-500/10 border-indigo-500/30 text-indigo-500",
    description:
      "High-confidence, production-supported research depth for the named market or domain.",
    note:
      "Shown prominently; scope and any material limitations remain visible.",
  },
  {
    label: "SUPPORTED",
    labelClass:
      "bg-violet-50 border-slate-900/20 text-slate-900",
    description:
      "Production-supported but narrower in depth than Deep Coverage.",
    note:
      "Shown in the explorer with explicit scope.",
  },
  {
    label: "LIMITED / BETA",
    labelClass:
      "bg-yellow-600/10 border-yellow-600/30 text-yellow-600",
    description:
      "Available with explicit limitations.",
    note:
      "The limitation is shown next to the status, never in a tooltip only.",
  },
  {
    label: "PLANNED",
    labelClass:
      "bg-violet-50 border-gray-600/25 text-gray-600",
    description:
      "Roadmap only.",
    note:
      "Excluded from current-support counts and filters by default; never a clickable Explore action.",
  },
  {
    label: "ARCHITECTURE-READY",
    labelClass:
      "bg-violet-50 border-gray-600/20 text-gray-600",
    description:
      "Talvrin’s architecture can support the category in principle, but no customer-facing coverage claim follows.",
    note:
      "Not published as a public record on this page.",
  },
];

export default function CoverageStateDefinitions() {
  return (
    <section className="w-full overflow-hidden bg-white">
      <div
        className="
          mx-auto
          w-full
          max-w-[1440px]
          px-4
          py-12
          sm:px-6
          md:px-8
          lg:px-8
          xl:px-20
          lg:py-16
          xl:py-[95px]
        "
      >
        {/* Header */}
        <div className="w-full">
          {/* Eyebrow */}
          <p
            className="
              m-0
              font-['IBM_Plex_Sans']
              text-xs
              font-bold
              leading-4
              tracking-wide
              text-yellow-600
            "
          >
            COVERAGE-STATE DEFINITIONS
          </p>

          {/* Heading */}
          <h2
            className="
              m-0
              max-w-[780px]
              pt-3
              font-['IBM_Plex_Sans']
              text-[30px]
              font-bold
              leading-[38px]
              tracking-[-0.8px]
              text-slate-900
              sm:text-[38px]
              sm:leading-[44px]
              lg:text-[48px]
              lg:leading-[48.72px]
            "
          >
            Five states. Never collapsed into
            <br className="hidden sm:block" />
            one checkmark.
          </h2>

          {/* Intro */}
          <p
            className="
              m-0
              max-w-[800px]
              pt-4
              pb-8
              sm:pb-10
              font-['IBM_Plex_Sans']
              text-[14px]
              font-normal
              leading-6
              text-gray-600
              sm:text-base
            "
          >
            Every coverage record on this page carries one of the states
            below. Each is a distinct, governed meaning — not a softer or
            stronger version of another.
          </p>
        </div>

        {/* Coverage states */}
        <div className="w-full">
          {coverageStates.map((state) => (
            <div
              key={state.label}
              className="
                grid
                w-full
                gap-3
                sm:gap-4
                border-b-[0.8px]
                border-slate-900/10
                py-4
                sm:py-5
                lg:grid-cols-[170px_minmax(0,1fr)_minmax(0,1fr)]
                xl:grid-cols-[192px_minmax(0,1fr)_minmax(0,1fr)]
              "
            >
              {/* Status */}
              <div className="flex items-start">
                <div
                  className={`
                    flex
                    min-h-[25px]
                    w-full
                    items-center
                    justify-center
                    rounded-md
                    border
                    px-4
                    py-1.5
                    font-['IBM_Plex_Sans']
                    text-[10px]
                    font-bold
                    leading-3
                    sm:text-xs
                    ${state.labelClass}
                  `}
                >
                  {state.label}
                </div>
              </div>

              {/* Description */}
              <div className="min-w-0">
                <p
                  className="
                    m-0
                    font-['IBM_Plex_Sans']
                    text-[14px]
                    font-normal
                    leading-5
                    text-slate-700
                    sm:text-base
                  "
                >
                  {state.description}
                </p>
              </div>

              {/* Note */}
              <div className="min-w-0">
                <p
                  className="
                    m-0
                    font-['IBM_Plex_Sans']
                    text-[13px]
                    font-normal
                    leading-5
                    text-gray-600
                    sm:text-sm
                  "
                >
                  {state.note}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Image */}
        <div
          className="
            relative
            mt-[48px]
            h-[320px]
            w-full
            overflow-hidden
            rounded-2xl
            bg-violet-50
            sm:h-[380px]
            md:h-[450px]
            lg:h-[320px]
          "
        >
          <Image
            src="/images/markets/market-coverage/image.png"
            alt="Talvrin market coverage"
            fill
            priority
            sizes="(max-width: 639px) 100vw, (max-width: 1023px) 100vw, 1280px"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}