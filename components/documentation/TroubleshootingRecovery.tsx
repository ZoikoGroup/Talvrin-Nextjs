'use client'

import Link from 'next/link'

const troubleshootingItems = [
  {
    title: 'Search unavailable',
    description:
      "Search isn't published yet — browse by goal or taxonomy instead; nothing is broken.",
  },
  {
    title: 'Empty category',
    description:
      'A category has no public articles yet. It stays visible so the taxonomy remains honest rather than hidden.',
  },
  {
    title: 'Article unavailable',
    description:
      'A retired or unreleased article shows this state explicitly rather than a broken link.',
  },
  {
    title: 'Permission-limited',
    description:
      'Private or internal articles never reveal their title or URL to visitors without access.',
  },
  {
    title: 'Stale review',
    description:
      'If review metadata lapses, currentness assurance is removed rather than shown as still fresh.',
  },
  {
    title: 'No JavaScript',
    description:
      'Core taxonomy, goals and links remain readable and usable without any script running.',
  },
]

export default function TroubleshootingRecovery() {
  return (
    <section
      id="troubleshooting"
      className="
        relative
        w-full
        overflow-hidden
        bg-violet-50
      "
    >
      {/* =====================================================
          DESKTOP
          Exact Figma frame:
          1439.80 × 760.79
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
            h-[760.79px]
            w-full
            max-w-[1440px]
          "
        >
          {/* =================================================
              CONTENT WRAPPER

              Figma:
              width  = 1000px
              x      = 212.40px
              top    = 96px
              ================================================= */}

          <div
            className="
              absolute
              left-1/2
              top-[96px]
              w-[1000px]
              max-w-[1000px]
              -translate-x-1/2
            "
          >
            {/* =================================================
                LABEL
                ================================================= */}

            <div className="w-full">
              <div
                className="
                  text-xs
                  font-bold
                  tracking-wide
                  text-yellow-600
                  [font-family:'IBM_Plex_Sans',sans-serif]
                "
              >
                TROUBLESHOOTING &amp; RECOVERY
              </div>
            </div>

            {/* =================================================
                HEADING
                ================================================= */}

            <h2
              className="
                m-0
                mt-3
                w-full
                text-4xl
                font-bold
                leading-10
                text-slate-900
                [font-family:'IBM_Plex_Sans',sans-serif]
              "
            >
              Known states, explained plainly.
            </h2>

            {/* =================================================
                DESCRIPTION
                ================================================= */}

            <p
              className="
                m-0
                mt-[7.39px]
                w-[720px]
                max-w-[720px]
                text-base
                font-normal
                leading-6
                text-gray-600
                [font-family:'IBM_Plex_Sans',sans-serif]
              "
            >
              If a page or category behaves unexpectedly, it&apos;s usually
              one of these — not a hidden bug.
            </p>

            {/* =================================================
                TROUBLESHOOTING TABLE

                Figma:
                top after intro = exact visual spacing
                bg = white
                rounded = 16px
                padding horizontal = 24px
                padding top = 28px
                padding bottom = 8px
                ================================================= */}

            <div
              className="
                mt-[27.81px]
                w-full
                rounded-2xl
                bg-white
                px-6
                pt-7
                pb-2
                outline
                outline-1
                outline-offset-[-1px]
                outline-slate-900/10
              "
            >
              {troubleshootingItems.map((item, index) => (
                <div
                  key={item.title}
                  className={`
                    flex
                    w-full
                    items-start
                    gap-5
                    py-4
                    ${index !== troubleshootingItems.length - 1
                      ? 'border-b-[0.8px] border-slate-900/10'
                      : ''}
                  `}
                >
                  {/* TITLE COLUMN */}

                  <div
                    className="
                      w-44
                      shrink-0
                    "
                  >
                    <div
                      className="
                        text-sm
                        font-bold
                        leading-5
                        text-slate-900
                        [font-family:'IBM_Plex_Sans',sans-serif]
                      "
                    >
                      {item.title}
                    </div>
                  </div>

                  {/* DESCRIPTION COLUMN */}

                  <div
                    className="
                      min-w-0
                      flex-1
                    "
                  >
                    <div
                      className="
                        text-sm
                        font-normal
                        leading-5
                        text-gray-600
                        [font-family:'IBM_Plex_Sans',sans-serif]
                      "
                    >
                      {item.description}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* =================================================
                SUPPORT LINK

                Figma:
                pt = 16px
                ================================================= */}

            <div
              className="
                flex
                w-full
                flex-col
                items-start
                pt-4
              "
            >
              <div
                className="
                  text-base
                  font-normal
                  leading-6
                  [font-family:'IBM_Plex_Sans',sans-serif]
                "
              >
                <span className="text-slate-900">
                  Still stuck after checking these?{' '}
                </span>

                <Link
                  href="/resources/contact-support"
                  className="
                    text-indigo-500
                    transition-opacity
                    duration-200
                    hover:opacity-70
                  "
                >
                  Go to Support
                </Link>

                <span className="text-slate-900">.</span>
              </div>
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
          py-16

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
            w-full
            max-w-[1000px]
          "
        >
          {/* LABEL */}

          <div
            className="
              text-xs
              font-bold
              tracking-wide
              text-yellow-600
              [font-family:'IBM_Plex_Sans',sans-serif]
            "
          >
            TROUBLESHOOTING &amp; RECOVERY
          </div>

          {/* HEADING */}

          <h2
            className="
              m-0
              mt-3
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
            Known states, explained plainly.
          </h2>

          {/* DESCRIPTION */}

          <p
            className="
              m-0
              mt-3
              max-w-[720px]
              text-base
              font-normal
              leading-6
              text-gray-600
              [font-family:'IBM_Plex_Sans',sans-serif]
            "
          >
            If a page or category behaves unexpectedly, it&apos;s usually one
            of these — not a hidden bug.
          </p>

          {/* =================================================
              MOBILE TABLE

              No grid gap.
              Rows remain continuous.
              ================================================= */}

          <div
            className="
              mt-8
              w-full
              overflow-hidden
              rounded-2xl
              bg-white
              px-5
              pt-5
              pb-2
              outline
              outline-1
              outline-offset-[-1px]
              outline-slate-900/10

              sm:px-6
              sm:pt-7
            "
          >
            {troubleshootingItems.map((item, index) => (
              <div
                key={item.title}
                className={`
                  flex
                  w-full
                  flex-col
                  items-start
                  gap-2
                  py-4

                  sm:flex-row
                  sm:gap-5

                  ${
                    index !== troubleshootingItems.length - 1
                      ? 'border-b-[0.8px] border-slate-900/10'
                      : ''
                  }
                `}
              >
                {/* TITLE */}

                <div
                  className="
                    w-full
                    shrink-0

                    sm:w-44
                  "
                >
                  <div
                    className="
                      text-sm
                      font-bold
                      leading-5
                      text-slate-900
                      [font-family:'IBM_Plex_Sans',sans-serif]
                    "
                  >
                    {item.title}
                  </div>
                </div>

                {/* DESCRIPTION */}

                <div
                  className="
                    min-w-0
                    flex-1
                  "
                >
                  <div
                    className="
                      text-sm
                      font-normal
                      leading-5
                      text-gray-600
                      [font-family:'IBM_Plex_Sans',sans-serif]
                    "
                  >
                    {item.description}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* =================================================
              SUPPORT
              ================================================= */}

          <div
            className="
              pt-4
            "
          >
            <div
              className="
                text-base
                font-normal
                leading-6
                [font-family:'IBM_Plex_Sans',sans-serif]
              "
            >
              <span className="text-slate-900">
                Still stuck after checking these?{' '}
              </span>

              <Link
                href="/resources/contact-support"
                className="
                  text-indigo-500
                  transition-opacity
                  duration-200
                  hover:opacity-70
                "
              >
                Go to Support
              </Link>

              <span className="text-slate-900">.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}