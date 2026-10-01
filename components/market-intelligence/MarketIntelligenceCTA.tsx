"use client";

import Link from "next/link";

export default function MarketIntelligenceCTA() {
  return (
    <section className="w-full border-t border-slate-900/10 bg-white">
      <div
        className="
          mx-auto
          flex
          w-full
          max-w-[1439.8px]
          justify-center
          px-5
          py-20
          sm:px-8
          lg:min-h-[472.4px]
          lg:px-[80px]
          lg:py-0
        "
      >
        <div
          className="
            flex
            w-full
            max-w-[700px]
            flex-col
            items-center
            gap-4
            text-center
            lg:mt-[88.8px]
          "
        >
          {/* Heading */}
          <h2
            className="
              w-full
              font-['IBM_Plex_Sans']
              text-[36px]
              font-bold
              leading-[1.08]
              tracking-[-0.025em]
              text-slate-900
              sm:text-[42px]
              lg:text-5xl
              lg:leading-[48.3px]
            "
          >
            Build market understanding that
            <br className="hidden sm:block" />
            stays connected to the evidence.
          </h2>

          {/* Description */}
          <p
            className="
              w-full
              font-['IBM_Plex_Sans']
              text-sm
              font-normal
              leading-6
              text-gray-600
              sm:text-base
              sm:leading-7
            "
          >
            Explore Talvrin Market Intelligence — source-linked research with
            the evidence, context,
            <br className="hidden sm:block" />
            and change history always in view.
          </p>

          {/* Buttons */}
          <div
            className="
              flex
              w-full
              flex-col
              items-center
              justify-center
              gap-3
              pt-3.5
              sm:flex-row
              sm:gap-4
            "
          >
            <Link
              href="/research/market-intelligence"
              className="
                flex
                min-h-[52px]
                w-full
                items-center
                justify-center
                rounded-lg
                bg-slate-900
                px-7
                py-4
                font-['IBM_Plex_Sans']
                text-base
                font-semibold
                text-violet-50
                transition-colors
                duration-200
                hover:bg-slate-800
                sm:w-auto
              "
            >
              Browse Market Intelligence
            </Link>

            <Link
              href="/research"
              className="
                flex
                min-h-[52px]
                w-full
                items-center
                justify-center
                rounded-lg
                border
                border-slate-900/25
                px-7
                py-4
                font-['IBM_Plex_Sans']
                text-base
                font-semibold
                text-slate-900
                transition-colors
                duration-200
                hover:bg-slate-900/[0.04]
                sm:w-auto
              "
            >
              Explore Research Library
            </Link>
          </div>

          {/* Disclaimer */}
          <p
            className="
              w-full
              pt-0.5
              font-['IBM_Plex_Sans']
              text-xs
              font-normal
              leading-5
              text-gray-600
              sm:text-sm
              sm:leading-6
            "
          >
            Research and intelligence. No trade execution. No manufactured
            investment recommendations.
          </p>
        </div>
      </div>
    </section>
  );
}