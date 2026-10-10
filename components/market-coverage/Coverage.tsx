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
          min-h-[auto]
          lg:min-h-[640px]
          xl:min-h-[780px]
          2xl:min-h-[909px]
          w-full
          max-w-[1440px]
          items-center
          px-4
          py-12
          sm:px-6
          md:px-8
          lg:px-8
          xl:px-20
          lg:py-16
          xl:py-[80px]
        "
      >
        <div
          className="
            grid
            w-full
            grid-cols-1
            items-center
            gap-10
            lg:grid-cols-2
            xl:grid-cols-[minmax(0,1fr)_577px]
            lg:gap-10
            xl:gap-[70px]
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
                  text-[32px]
                  font-bold
                  leading-[1.12]
                  tracking-[-1px]
                  text-violet-50
                  sm:text-[42px]
                  md:text-[50px]
                  lg:text-[46px]
                  xl:text-[58px]
                  2xl:text-[60px]
                  xl:leading-[63.8px]
                "
              >
                Global by{" "}
                <br className="hidden xl:block" />
                architecture. Precise{" "}
                <br className="hidden xl:block" />
                about what is{" "}
                <br className="hidden xl:block" />
                supported.
              </h1>
            </div>

            {/* Main description */}
            <div className="w-full max-w-[540px] pt-2">
              <p
                className="
                  m-0
                  font-['IBM_Plex_Sans']
                  text-[15px]
                  font-normal
                  leading-6
                  text-violet-50/70
                  sm:text-[17px]
                  sm:leading-7
                  lg:text-[18px]
                  lg:leading-8
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
                items-stretch
                gap-3
                pt-3
                sm:w-auto
                sm:flex-row
                sm:items-center
                sm:gap-4
              "
            >
              {/* Primary CTA */}
              <a
                href="#coverage"
                className="
                  inline-flex
                  min-h-[48px]
                  items-center
                  justify-center
                  rounded-lg
                  bg-violet-50
                  px-6
                  py-3.5
                  font-['IBM_Plex_Sans']
                  text-sm
                  sm:text-base
                  font-semibold
                  leading-5
                  text-slate-900
                  transition-all
                  duration-200
                  hover:bg-white
                  hover:shadow-sm
                  sm:min-h-[52px]
                  sm:px-7
                  sm:py-4
                "
              >
                Explore Coverage
              </a>

              {/* Secondary CTA */}
              <a
                href="#supported-jurisdictions"
                className="
                  inline-flex
                  min-h-[48px]
                  items-center
                  justify-center
                  rounded-lg
                  border
                  border-violet-50/20
                  px-6
                  py-3.5
                  font-['IBM_Plex_Sans']
                  text-sm
                  sm:text-base
                  font-semibold
                  leading-5
                  text-violet-50/60
                  transition-all
                  duration-200
                  hover:border-violet-50/40
                  hover:text-violet-50/80
                  sm:min-h-[56px]
                  sm:px-7
                  sm:py-4
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
              max-w-[460px]
              overflow-hidden
              border
              border-cyan-400
              lg:mx-0
              lg:ml-auto
              lg:max-w-none
              xl:max-w-[577px]
            "
          >
            <div className="relative h-[300px] w-full sm:h-[420px] md:h-[480px] lg:h-[460px] xl:h-[521px]">
              <Image
                src="/images/markets/market-coverage/hero.png"
                alt="Talvrin market coverage"
                fill
                priority
                sizes="(max-width: 1023px) 100vw, (max-width: 1279px) 50vw, 577px"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}