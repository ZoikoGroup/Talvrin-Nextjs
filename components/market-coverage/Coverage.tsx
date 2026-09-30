"use client";

import Image from "next/image";

export default function Coverage() {
  return (
    <section className="relative w-full overflow-hidden bg-[#171335]">
      {/* Background radial glow */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-[radial-gradient(circle_at_16%_6%,rgba(99,102,241,0.20)_0%,rgba(99,102,241,0)_65%)]
        "
      />

      {/* Main content */}
      <div
        className="
          relative
          mx-auto
          flex
          min-h-[909px]
          w-full
          max-w-[1440px]
          items-center
          px-6
          py-20
          sm:px-8
          md:px-10
          lg:px-20
          lg:py-[80px]
        "
      >
        <div
          className="
            grid
            w-full
            grid-cols-1
            items-center
            gap-12
            lg:grid-cols-[minmax(0,1fr)_577px]
            lg:gap-[70px]
          "
        >
          {/* LEFT CONTENT */}
          <div
            className="
              flex
              w-full
              max-w-[578px]
              flex-col
              items-start
              gap-4
            "
          >
            {/* Eyebrow */}
            <div className="w-full">
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
                MARKETS / MARKET COVERAGE
              </p>
            </div>

            {/* Heading */}
            <div className="w-full pt-1.5">
              <h1
                className="
                  m-0
                  font-['IBM_Plex_Sans']
                  text-[42px]
                  font-bold
                  leading-[48px]
                  tracking-[-1px]
                  text-violet-50
                  sm:text-[52px]
                  sm:leading-[57px]
                  lg:text-[60px]
                  lg:leading-[63.8px]
                "
              >
                Global by
                <br />
                architecture. Precise
                <br />
                about what is
                <br />
                supported.
              </h1>
            </div>

            {/* Main description */}
            <div className="w-full max-w-[540px] pt-2">
              <p
                className="
                  m-0
                  font-['IBM_Plex_Sans']
                  text-[16px]
                  font-normal
                  leading-7
                  text-violet-50/70
                  sm:text-[18px]
                  sm:leading-8
                "
              >
                Explore Talvrin&apos;s current market and domain coverage by
                status, asset class, source class, jurisdiction, data
                timeliness, rights level, and research capability — with
                limitations shown alongside the claim.
              </p>
            </div>

            {/* Supporting note */}
            <div className="w-full max-w-[520px]">
              <p
                className="
                  m-0
                  font-['IBM_Plex_Sans']
                  text-[13px]
                  font-normal
                  leading-5
                  text-violet-50/50
                  sm:text-sm
                "
              >
                Architecture-ready and planned states do not equal current
                coverage. Market Coverage does not replace Supported
                Jurisdictions.
              </p>
            </div>

            {/* Buttons */}
            <div
              className="
                flex
                w-full
                flex-col
                items-start
                gap-4
                pt-4
                sm:w-auto
              "
            >
              {/* Primary CTA */}
              <a
                href="#coverage"
                className="
                  inline-flex
                  min-h-[52px]
                  items-center
                  justify-center
                  rounded-lg
                  bg-violet-50
                  px-7
                  py-4
                  font-['IBM_Plex_Sans']
                  text-base
                  font-semibold
                  leading-5
                  text-slate-900
                  transition-all
                  duration-200
                  hover:bg-white
                  hover:shadow-sm
                "
              >
                Explore Coverage
              </a>

              {/* Secondary CTA */}
              <a
                href="#supported-jurisdictions"
                className="
                  inline-flex
                  h-14
                  items-center
                  justify-center
                  rounded-lg
                  border
                  border-violet-50/20
                  px-7
                  py-4
                  font-['IBM_Plex_Sans']
                  text-base
                  font-semibold
                  leading-5
                  text-violet-50/60
                  transition-all
                  duration-200
                  hover:border-violet-50/40
                  hover:text-violet-50/80
                "
              >
                Supported Jurisdictions — publishing next
              </a>
            </div>

            {/* Bottom disclaimer */}
            <div className="w-full pt-1">
              <p
                className="
                  m-0
                  font-['IBM_Plex_Sans']
                  text-[13px]
                  font-normal
                  leading-5
                  text-violet-50/60
                  sm:text-sm
                "
              >
                Research and intelligence platform. Coverage is a governed
                product fact, not a marketing impression.
              </p>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div
            className="
              relative
              mx-auto
              w-full
              max-w-[577px]
              overflow-hidden
              border
              border-cyan-400
              lg:h-[521px]
              lg:max-w-[577px]
            "
          >
            <div className="relative h-[480px] w-full sm:h-[560px] lg:h-[521px]">
              <Image
                src="/images/markets/market-coverage/hero.png"
                alt="Talvrin market coverage"
                fill
                priority
                sizes="(max-width: 1023px) 100vw, 577px"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}