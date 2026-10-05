'use client'

import Image from 'next/image'

export default function TechnicalDeveloperDocumentation() {
  return (
    <section
      id="technical-developer-documentation"
      className="
        w-full
        overflow-hidden
        bg-violet-50
      "
    >
      {/* =====================================================
          DESKTOP
          Figma: 1440 × 545.20
          ===================================================== */}

      <div
        className="
          mx-auto
          hidden
          min-h-[545.2px]
          w-full
          max-w-[1440px]
          lg:block
        "
      >
        <div
          className="
            relative
            mx-auto
            h-[545.2px]
            w-[1200px]
          "
        >
          {/* =================================================
              LABEL
              Figma:
              x = 112.40
              y = 96
              ================================================= */}

          <div
            className="
              absolute
              left-0
              top-[96px]
              w-[1200px]
            "
          >
            <span
              className="
                text-xs
                font-bold
                tracking-wide
                text-yellow-600
                [font-family:'IBM_Plex_Sans',sans-serif]
              "
            >
              TECHNICAL / DEVELOPER DOCUMENTATION
            </span>
          </div>

          {/* =================================================
              HEADING
              Figma:
              y = 125
              36px / 40px
              ================================================= */}

          <h2
            className="
              absolute
              left-0
              top-[125px]
              m-0
              w-[800px]
              text-4xl
              font-bold
              leading-10
              text-slate-900
              [font-family:'IBM_Plex_Sans',sans-serif]
            "
          >
            General product documentation is separate
            <br />
            from developer and API documentation.
          </h2>

          {/* =================================================
              DESCRIPTION
              Figma:
              y = 228
              ================================================= */}

          <p
            className="
              absolute
              left-0
              top-[228px]
              m-0
              w-[800px]
              text-base
              font-normal
              leading-6
              text-gray-600
              [font-family:'IBM_Plex_Sans',sans-serif]
            "
          >
            Talvrin references developer-oriented documentation, API and
            integration surfaces elsewhere. Those
            <br />
            pages publish independently and only once an approved
            developer-platform contract exists — this hub
            <br />
            never duplicates or guesses at their content.
          </p>

          {/* =================================================
              DEVELOPER OVERVIEW BUTTON
              Figma:
              x = 112.40
              y = 336.99
              h = 48
              ================================================= */}

          <a
            href="#developer-overview"
            className="
              absolute
              left-0
              top-[336.99px]
              inline-flex
              h-12
              items-center
              rounded-lg
              bg-slate-900
              px-5
              py-3
              text-base
              font-semibold
              text-violet-50
              [font-family:'IBM_Plex_Sans',sans-serif]
              transition-opacity
              duration-200
              hover:opacity-90
            "
          >
            Developer Overview
          </a>

          {/* =================================================
              API DOCUMENTATION BUTTON
              Figma:
              x = 310.11
              y = 336.99
              h = 48
              ================================================= */}

          <a
            href="#api-documentation"
            className="
              absolute
              left-[197.71px]
              top-[336.99px]
              inline-flex
              h-12
              items-center
              rounded-lg
              px-5
              py-3
              text-base
              font-semibold
              text-slate-900
              outline
              outline-1
              outline-offset-[-1px]
              outline-slate-900/20
              [font-family:'IBM_Plex_Sans',sans-serif]
              transition-colors
              duration-200
              hover:bg-white
            "
          >
            API Documentation
          </a>

          {/* =================================================
              SUPPORTING NOTE
              Figma:
              y = 407.20
              ================================================= */}

          <p
            className="
              absolute
              left-0
              top-[407.2px]
              m-0
              w-[800px]
              text-xs
              font-normal
              leading-5
              text-gray-600
              [font-family:'IBM_Plex_Sans',sans-serif]
            "
          >
            Rate limits, auth flows, SDKs and sandbox/production environments
            are never inferred here — each is only ever documented from
            <br />
            its own approved contract.
          </p>

          {/* =================================================
              IMAGE
              Figma:
              x = 916
              y = 95.75
              w = 384
              h = 384

              Original Figma image:
              w = 368
              h = 510
              left = 1
              top = -24

              No blue border.
              ================================================= */}

          <div
            className="
              absolute
              left-[803.6px]
              top-[95.75px]
              h-96
              w-96
              overflow-hidden
              rounded-2xl
            "
          >
            <Image
              src="/images/resources/documentation/image3.png"
              alt="Developer documentation"
              width={368}
              height={510}
              priority
              className="
                absolute
                left-[1px]
                top-[-24px]
                h-[510px]
                w-[368px]
                max-w-none
                object-cover
              "
            />
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
          sm:py-24

          md:px-10

          lg:hidden
        "
      >
        <div
          className="
            mx-auto
            flex
            w-full
            max-w-[800px]
            flex-col
          "
        >
          {/* =================================================
              LABEL
              ================================================= */}

          <span
            className="
              text-xs
              font-bold
              tracking-wide
              text-yellow-600
              [font-family:'IBM_Plex_Sans',sans-serif]
            "
          >
            TECHNICAL / DEVELOPER DOCUMENTATION
          </span>

          {/* =================================================
              HEADING
              ================================================= */}

          <h2
            className="
              m-0
              mt-4
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
            General product documentation is separate from
            developer and API documentation.
          </h2>

          {/* =================================================
              DESCRIPTION
              ================================================= */}

          <p
            className="
              m-0
              mt-5
              text-base
              font-normal
              leading-6
              text-gray-600
              [font-family:'IBM_Plex_Sans',sans-serif]
            "
          >
            Talvrin references developer-oriented documentation, API and
            integration surfaces elsewhere. Those pages publish independently
            and only once an approved developer-platform contract exists —
            this hub never duplicates or guesses at their content.
          </p>

          {/* =================================================
              BUTTONS
              ================================================= */}

          <div
            className="
              mt-8
              flex
              flex-col
              items-start
              gap-3

              sm:flex-row
              sm:items-center
            "
          >
            <a
              href="#developer-overview"
              className="
                inline-flex
                h-12
                items-center
                rounded-lg
                bg-slate-900
                px-5
                py-3
                text-base
                font-semibold
                text-violet-50
                [font-family:'IBM_Plex_Sans',sans-serif]
              "
            >
              Developer Overview
            </a>

            <a
              href="#api-documentation"
              className="
                inline-flex
                h-12
                items-center
                rounded-lg
                px-5
                py-3
                text-base
                font-semibold
                text-slate-900
                outline
                outline-1
                outline-offset-[-1px]
                outline-slate-900/20
                [font-family:'IBM_Plex_Sans',sans-serif]
              "
            >
              API Documentation
            </a>
          </div>

          {/* =================================================
              NOTE
              ================================================= */}

          <p
            className="
              m-0
              mt-6
              text-xs
              font-normal
              leading-5
              text-gray-600
              [font-family:'IBM_Plex_Sans',sans-serif]
            "
          >
            Rate limits, auth flows, SDKs and sandbox/production environments
            are never inferred here — each is only ever documented from its
            own approved contract.
          </p>

          {/* =================================================
              IMAGE
              ================================================= */}

          <div
            className="
              relative
              mt-10
              h-[360px]
              w-full
              overflow-hidden
              rounded-2xl

              sm:h-[420px]

              md:h-[480px]
            "
          >
            <Image
              src="/images/resources/documentation/image3.png"
              alt="Developer documentation"
              width={368}
              height={510}
              className="
                h-full
                w-full
                object-cover
                object-center
              "
            />
          </div>
        </div>
      </div>
    </section>
  )
}