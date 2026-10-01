'use client'

import Image from 'next/image'

type ArticleCardProps = {
  title: string
  children: React.ReactNode
}

function ArticleCard({
  title,
  children,
}: ArticleCardProps) {
  return (
    <article
      className="
        w-full
        self-start
        rounded-2xl
        bg-indigo-950
        p-6
      "
    >
      {/* TITLE */}
      <h3
        className="
          m-0
          text-base
          font-bold
          leading-5
          text-violet-50
          [font-family:'IBM_Plex_Sans',sans-serif]
        "
      >
        {title}
      </h3>

      {/* DESCRIPTION */}
      <p
        className="
          m-0
          mt-2.5
          text-base
          font-normal
          leading-6
          text-violet-50/75
          [font-family:'IBM_Plex_Sans',sans-serif]
        "
      >
        {children}
      </p>
    </article>
  )
}

export default function ArticlePattern() {
  return (
    <section
      id="article-pattern"
      className="
        relative
        w-full
        overflow-hidden
        bg-slate-900
      "
    >
      {/* =====================================================
          DESKTOP
          ===================================================== */}

      <div
        className="
          mx-auto
          hidden
          min-h-[773.6px]
          w-full
          max-w-[1440px]
          lg:block
        "
      >
        <div
          className="
            mx-auto
            w-[1200px]
            pt-[96px]
          "
        >
          {/* =================================================
              LABEL
              ================================================= */}

          <div className="w-full">
            <span
              className="
                text-xs
                font-bold
                tracking-wide
                text-indigo-500
                [font-family:'IBM_Plex_Sans',sans-serif]
              "
            >
              ARTICLE PATTERN
            </span>
          </div>

          {/* =================================================
              HEADING
              ================================================= */}

          <h2
            className="
              m-0
              mt-[17px]
              w-[800px]
              max-w-[800px]
              text-4xl
              font-bold
              leading-10
              text-violet-50
              [font-family:'IBM_Plex_Sans',sans-serif]
            "
          >
            Every article renders from one governed
            <br />
            structure — never free-hand prose.
          </h2>

          {/* =================================================
              DESCRIPTION
              ================================================= */}

          <p
            className="
              m-0
              mt-[15px]
              w-[760px]
              max-w-[760px]
              text-base
              font-normal
              leading-6
              text-violet-50/70
              [font-family:'IBM_Plex_Sans',sans-serif]
            "
          >
            This is the shape a published article will take. Regions a topic
            doesn&apos;t need are omitted, not invented.
          </p>

          {/* =================================================
              CONTENT GRID

              4 columns:
              288px
              288px
              288px
              288px

              Gap:
              18px

              Image occupies:
              column 4 / rows 1-2
              ================================================= */}

          <div
            className="
              mt-[48px]
              grid
              w-[1200px]
              grid-cols-[288px_288px_288px_288px]
              grid-rows-[176px_176px]
              gap-x-[18px]
              gap-y-[24.6px]
            "
          >
            {/* =================================================
                ROW 1 / CARD 1
                ================================================= */}

            <ArticleCard title="Breadcrumb & type">
              Resources &gt; Documentation &gt;
              <br />
              Product Area &gt; Article, with a
              <br />
              visible Task / Concept / Reference
              <br />
              / Troubleshooting badge.
            </ArticleCard>

            {/* =================================================
                ROW 1 / CARD 2
                ================================================= */}

            <ArticleCard title="Title & answer-first summary">
              A user-intent H1 followed by 2–4
              <br />
              accurate, standalone summary
              <br />
              sentences — before any steps.
            </ArticleCard>

            {/* =================================================
                ROW 1 / CARD 3
                ================================================= */}

            <ArticleCard title="Prerequisites & steps">
              Explicit prerequisites, omitted if
              <br />
              none, then semantic headings
              <br />
              with numbered steps for task
              <br />
              flows.
            </ArticleCard>

            {/* =================================================
                IMAGE
                ================================================= */}

            <div
              className="
                relative
                col-start-4
                row-start-1
                row-span-2
                h-[384px]
                w-[288px]
                overflow-hidden
                rounded-2xl
                bg-indigo-950
              "
            >
              <Image
                src="/images/resources/documentation/image2.png"
                alt="Talvrin article pattern"
                width={301}
                height={377}
                priority
                className="
                  absolute
                  left-[-9px]
                  top-0
                  h-[377px]
                  w-[301px]
                  max-w-none
                  object-cover
                  object-center
                "
              />
            </div>

            {/* =================================================
                ROW 2 / CARD 4
                ================================================= */}

            <ArticleCard title="Evidence & AI notes">
              Where source evidence remains
              <br />
              authoritative, and a required AI-
              <br />
              boundary note wherever AI
              <br />
              assistance is discussed.
            </ArticleCard>

            {/* =================================================
                ROW 2 / CARD 5
                ================================================= */}

            <ArticleCard title="Metadata & handoffs">
              Published date, last-reviewed
              <br />
              date, owner, canonical URL,
              <br />
              related docs and relevant Trust
              <br />
              destinations.
            </ArticleCard>

            {/* =================================================
                ROW 2 / CARD 6
                ================================================= */}

            <ArticleCard title="Expected result & states">
              What success looks like, plus
              <br />
              permission, unavailable, stale,
              <br />
              partial and error states where
              <br />
              relevant.
            </ArticleCard>
          </div>
        </div>
      </div>

      {/* =====================================================
          MOBILE / TABLET
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
            w-full
            max-w-[1200px]
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
              text-indigo-500
              [font-family:'IBM_Plex_Sans',sans-serif]
            "
          >
            ARTICLE PATTERN
          </span>

          {/* =================================================
              HEADING
              ================================================= */}

          <h2
            className="
              m-0
              mt-4
              max-w-[800px]
              text-[30px]
              font-bold
              leading-9
              tracking-[-0.015em]
              text-violet-50
              [font-family:'IBM_Plex_Sans',sans-serif]

              sm:text-[34px]
              sm:leading-10
            "
          >
            Every article renders from one governed structure
            — never free-hand prose.
          </h2>

          {/* =================================================
              DESCRIPTION
              ================================================= */}

          <p
            className="
              m-0
              mt-4
              max-w-[760px]
              text-base
              font-normal
              leading-6
              text-violet-50/70
              [font-family:'IBM_Plex_Sans',sans-serif]
            "
          >
            This is the shape a published article will take. Regions a topic
            doesn&apos;t need are omitted, not invented.
          </p>

          {/* =================================================
              RESPONSIVE CARDS
              ================================================= */}

          <div
            className="
              mt-12
              grid
              grid-cols-1
              gap-4

              sm:grid-cols-2
            "
          >
            {/* CARD 1 */}

            <ArticleCard title="Breadcrumb & type">
              Resources &gt; Documentation &gt; Product Area &gt;
              Article, with a visible Task / Concept / Reference /
              Troubleshooting badge.
            </ArticleCard>

            {/* CARD 2 */}

            <ArticleCard title="Title & answer-first summary">
              A user-intent H1 followed by 2–4 accurate,
              standalone summary sentences — before any steps.
            </ArticleCard>

            {/* CARD 3 */}

            <ArticleCard title="Prerequisites & steps">
              Explicit prerequisites, omitted if none, then
              semantic headings with numbered steps for task
              flows.
            </ArticleCard>

            {/* IMAGE */}

            <div
              className="
                relative
                h-[384px]
                w-full
                overflow-hidden
                rounded-2xl
                bg-indigo-950

                sm:col-span-2
              "
            >
              <Image
                src="/images/resources/documentation/image2.png"
                alt="Talvrin article pattern"
                width={301}
                height={377}
                className="
                  h-full
                  w-full
                  object-cover
                  object-center
                "
              />
            </div>

            {/* CARD 4 */}

            <ArticleCard title="Evidence & AI notes">
              Where source evidence remains authoritative,
              and a required AI-boundary note wherever AI
              assistance is discussed.
            </ArticleCard>

            {/* CARD 5 */}

            <ArticleCard title="Metadata & handoffs">
              Published date, last-reviewed date, owner,
              canonical URL, related docs and relevant Trust
              destinations.
            </ArticleCard>

            {/* CARD 6 */}

            <ArticleCard title="Expected result & states">
              What success looks like, plus permission,
              unavailable, stale, partial and error states
              where relevant.
            </ArticleCard>
          </div>
        </div>
      </div>
    </section>
  )
}