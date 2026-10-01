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
      {/* =====================================================
          DESKTOP
          Figma:
          Width  = 1439.80px
          Height = 384px
          ===================================================== */}

      <div
        className="
          hidden
          lg:block
        "
      >
        <div
          className="
            relative
            mx-auto
            h-[384px]
            w-full
            max-w-[1440px]
          "
        >
          {/* =================================================
              CONTENT

              Figma:
              width = 640px
              x = 392.40px
              top = 88.19px
              ================================================= */}

          <div
            className="
              absolute
              left-1/2
              top-[88.19px]
              flex
              w-[640px]
              max-w-[640px]
              -translate-x-1/2
              flex-col
              items-start
              gap-4
            "
          >
            {/* =================================================
                HEADING
                ================================================= */}

            <div
              className="
                flex
                w-full
                flex-col
                items-center
              "
            >
              <h2
                className="
                  m-0
                  text-center
                  text-4xl
                  font-bold
                  leading-10
                  text-slate-900
                  [font-family:'IBM_Plex_Sans',sans-serif]
                "
              >
                Nothing left to check here? Take
                <br />
                it further.
              </h2>
            </div>

            {/* =================================================
                BUTTONS
                ================================================= */}

            <div
              className="
                flex
                w-full
                items-start
                justify-center
                gap-4
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
                  transition-opacity
                  duration-200
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
                  px-7
                  py-4
                  outline
                  outline-1
                  outline-offset-[-1px]
                  outline-slate-900/25
                  transition-colors
                  duration-200
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

            {/* =================================================
                DISCLAIMER
                ================================================= */}

            <div
              className="
                flex
                w-full
                flex-col
                items-center
                pt-1.5
              "
            >
              <p
                className="
                  m-0
                  text-center
                  text-sm
                  font-normal
                  leading-5
                  text-gray-600
                  [font-family:'IBM_Plex_Sans',sans-serif]
                "
              >
                Research and intelligence platform. No trade execution. No
                manufactured investment
                <br />
                recommendations.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* =====================================================
          TABLET / MOBILE
          ===================================================== */}

      <div
        className="
          block
          w-full
          px-6
          py-20

          sm:px-8
          sm:py-20

          md:px-10
          md:py-24

          lg:hidden
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
          "
        >
          {/* HEADING */}

          <div className="flex w-full flex-col items-center">
            <h2
              className="
                m-0
                max-w-[640px]
                text-center
                text-[30px]
                font-bold
                leading-9
                tracking-[-0.015em]
                text-slate-900
                [font-family:'IBM_Plex_Sans',sans-serif]

                sm:text-[34px]
                sm:leading-10
              "
            >
              Nothing left to check here? Take
              <br className="hidden sm:block" />
              <span className="sm:hidden"> </span>
              it further.
            </h2>
          </div>

          {/* BUTTONS */}

          <div
            className="
              flex
              w-full
              flex-col
              items-stretch
              justify-center
              gap-3

              sm:w-auto
              sm:flex-row
              sm:items-start
              sm:gap-4
            "
          >
            {/* PRIMARY */}

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
                transition-opacity
                duration-200
                hover:opacity-90

                sm:w-auto
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

            {/* SECONDARY */}

            <Link
              href="/support"
              className="
                inline-flex
                h-[52px]
                items-center
                justify-center
                rounded-lg
                px-7
                py-4
                outline
                outline-1
                outline-offset-[-1px]
                outline-slate-900/25
                transition-colors
                duration-200
                hover:bg-white/60

                sm:w-auto
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

          <div
            className="
              flex
              w-full
              flex-col
              items-center
              pt-1.5
            "
          >
            <p
              className="
                m-0
                max-w-[600px]
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
      </div>
    </section>
  )
}