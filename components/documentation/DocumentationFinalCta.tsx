'use client'

import Link from 'next/link'

export default function DocumentationFinalCta() {
  return (
    <section
      className="
        relative
        w-full
        overflow-hidden
        border-t-[0.8px]
        border-slate-900/10
        bg-violet-50
      "
    >
      <div
        className="
          mx-auto
          flex
          w-full
          max-w-[1440px]
          flex-col
          items-center
          justify-center
          px-5
          py-16
          sm:px-8
          sm:py-20
          lg:px-8
          lg:py-24
          xl:px-20
        "
      >
        <div
          className="
            mx-auto
            flex
            w-full
            max-w-[640px]
            flex-col
            items-center
            gap-4
            text-center
          "
        >
          {/* HEADING */}
          <h2
            className="
              m-0
              text-center
              text-[28px]
              font-bold
              leading-9
              tracking-[-0.015em]
              text-slate-900
              [font-family:'IBM_Plex_Sans',sans-serif]
              sm:text-[34px]
              sm:leading-10
              lg:text-4xl
              lg:leading-10
            "
          >
            Nothing left to check here? Take
            <br className="hidden sm:block" />
            {" "}it further.
          </h2>

          {/* BUTTONS */}
          <div
            className="
              mt-2
              flex
              w-full
              flex-col
              items-stretch
              justify-center
              gap-3
              sm:w-auto
              sm:flex-row
              sm:items-center
              sm:gap-4
            "
          >
            {/* PRIMARY BUTTON */}
            <Link
              href="/"
              className="
                inline-flex
                h-[52px]
                items-center
                justify-center
                rounded-lg
                bg-slate-900
                px-7
                py-4
                transition-all
                duration-200
                hover:-translate-y-0.5
                hover:opacity-90
              "
            >
              <span
                className="
                  whitespace-nowrap
                  text-center
                  text-base
                  font-semibold
                  text-violet-50
                  [font-family:'IBM_Plex_Sans',sans-serif]
                "
              >
                Explore the Platform
              </span>
            </Link>

            {/* SECONDARY BUTTON */}
            <Link
              href="/support"
              className="
                inline-flex
                h-[52px]
                items-center
                justify-center
                rounded-lg
                outline
                outline-1
                outline-offset-[-1px]
                outline-slate-900/25
                px-7
                py-4
                transition-all
                duration-200
                hover:-translate-y-0.5
                hover:bg-white/60
              "
            >
              <span
                className="
                  whitespace-nowrap
                  text-center
                  text-base
                  font-semibold
                  text-slate-900
                  [font-family:'IBM_Plex_Sans',sans-serif]
                "
              >
                Contact Support
              </span>
            </Link>
          </div>

          {/* DISCLAIMER */}
          <p
            className="
              m-0
              pt-2
              text-center
              text-sm
              font-normal
              leading-5
              text-gray-600
              [font-family:'IBM_Plex_Sans',sans-serif]
            "
          >
            Research and intelligence platform. No trade execution. No
            manufactured investment recommendations.
          </p>
        </div>
      </div>
    </section>
  )
}