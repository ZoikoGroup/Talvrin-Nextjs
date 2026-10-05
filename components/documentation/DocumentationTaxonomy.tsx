'use client'

import Image from 'next/image'

const taxonomyItems = [
  {
    title: 'Task guide',
    description: 'How to complete one user goal.',
    details: (
      <>
        Prerequisites, steps, expected
        <br />
        outcome, states, recovery.
      </>
    ),
  },
  {
    title: 'Concept',
    description: 'What a Talvrin concept means.',
    details: (
      <>
        Definition, why it matters,
        <br />
        relationships, boundaries.
      </>
    ),
  },
  {
    title: 'Reference',
    description: (
      <>
        A precise behavior, field or
        <br />
        state contract.
      </>
    ),
    details: (
      <>
        Fields, allowed values,
        <br />
        constraints, version notes.
      </>
    ),
  },
  {
    title: 'Troubleshooting',
    description: 'Resolve a specific problem.',
    details: (
      <>
        Symptoms, causes, checks, safe
        <br />
        recovery, escalation.
      </>
    ),
  },
]

export default function DocumentationTaxonomy() {
  return (
    <section
      id="taxonomy"
      className="
        relative
        w-full
        overflow-hidden
        bg-white
      "
    >
      {/* =====================================================
          DESKTOP / LARGE SCREEN
          Exact Figma proportions
          ===================================================== */}

      <div
        className="
          mx-auto
          hidden
          min-h-[584.15px]
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
              SECTION LABEL
              ================================================= */}

          <div className="w-full">
            <span
              className="
                text-xs
                font-bold
                tracking-wide
                text-yellow-600
                [font-family:'IBM_Plex_Sans',sans-serif]
              "
            >
              DOCUMENTATION TAXONOMY
            </span>
          </div>

          {/* =================================================
              HEADING
              ================================================= */}

          <h2
            className="
              m-0
              mt-[17px]
              w-[780px]
              max-w-[780px]
              text-4xl
              font-bold
              leading-10
              text-slate-900
              [font-family:'IBM_Plex_Sans',sans-serif]
            "
          >
            Every article follows one of five governed
            <br />
            types.
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
              text-gray-600
              [font-family:'IBM_Plex_Sans',sans-serif]
            "
          >
            No articles are published against this taxonomy yet on this build.
            It defines the structure articles will
            <br />
            follow once approved content exists — not a library to browse
            today.
          </p>

          {/* =================================================
              TAXONOMY CARDS
              ================================================= */}

          <div
            className="
              mt-[48px]
              grid
              w-[1200px]
              grid-cols-[224px_224px_224px_224px_224px]
              gap-x-[19.2px]
            "
          >
            {/* =================================================
                CARD 1
                ================================================= */}

            <TaxonomyCard
              title={taxonomyItems[0].title}
              description={taxonomyItems[0].description}
              details={taxonomyItems[0].details}
            />

            {/* =================================================
                CARD 2
                ================================================= */}

            <TaxonomyCard
              title={taxonomyItems[1].title}
              description={taxonomyItems[1].description}
              details={taxonomyItems[1].details}
            />

            {/* =================================================
                CARD 3
                ================================================= */}

            <TaxonomyCard
              title={taxonomyItems[2].title}
              description={taxonomyItems[2].description}
              details={taxonomyItems[2].details}
            />

            {/* =================================================
                CARD 4
                ================================================= */}

            <TaxonomyCard
              title={taxonomyItems[3].title}
              description={taxonomyItems[3].description}
              details={taxonomyItems[3].details}
            />

            {/* =================================================
                IMAGE
                ================================================= */}

            <div
              className="
                relative
                h-[176px]
                w-[224px]
                overflow-hidden
                rounded-xl
                bg-violet-50
                outline
                outline-1
                outline-offset-[-1px]
                outline-slate-900/10
              "
            >
              <Image
                src="/images/resources/documentation/image1.png"
                alt="Documentation taxonomy"
                width={299}
                height={167}
                className="
                  absolute
                  left-[-36px]
                  top-0
                  h-[167px]
                  w-[299px]
                  max-w-none
                  object-cover
                "
              />
            </div>
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
          {/* LABEL */}

          <span
            className="
              text-xs
              font-bold
              tracking-wide
              text-yellow-600
              [font-family:'IBM_Plex_Sans',sans-serif]
            "
          >
            DOCUMENTATION TAXONOMY
          </span>

          {/* HEADING */}

          <h2
            className="
              m-0
              mt-4
              max-w-[780px]
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
            Every article follows one of five governed types.
          </h2>

          {/* DESCRIPTION */}

          <p
            className="
              m-0
              mt-4
              max-w-[760px]
              text-base
              font-normal
              leading-6
              text-gray-600
              [font-family:'IBM_Plex_Sans',sans-serif]
            "
          >
            No articles are published against this taxonomy yet on this build.
            It defines the structure articles will follow once approved content
            exists — not a library to browse today.
          </p>

          {/* CARDS */}

          <div
            className="
              mt-12
              grid
              grid-cols-1
              gap-4

              sm:grid-cols-2
            "
          >
            {taxonomyItems.map((item) => (
              <TaxonomyCard
                key={item.title}
                title={item.title}
                description={item.description}
                details={item.details}
                responsive
              />
            ))}

            {/* IMAGE */}

            <div
              className="
                relative
                h-[176px]
                w-full
                overflow-hidden
                rounded-xl
                bg-violet-50
                outline
                outline-1
                outline-offset-[-1px]
                outline-slate-900/10

                sm:col-span-2
              "
            >
              <Image
                src="/images/resources/documentation/image1.png"
                alt="Documentation taxonomy"
                width={299}
                height={167}
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
      </div>
    </section>
  )
}

/* =============================================================
   TAXONOMY CARD
   ============================================================= */

type TaxonomyCardProps = {
  title: string
  description: React.ReactNode
  details: React.ReactNode
  responsive?: boolean
}

function TaxonomyCard({
  title,
  description,
  details,
}: TaxonomyCardProps) {
  return (
    <article
      className="
        relative
        h-[176px]
        w-[224px]
        rounded-xl
        bg-violet-50
        outline
        outline-1
        outline-offset-[-1px]
        outline-slate-900/10
      "
    >
      {/* =====================================================
          TITLE
          ===================================================== */}

      <div
        className="
          absolute
          left-[20.8px]
          top-[20.8px]
          w-[182px]
        "
      >
        <h3
          className="
            m-0
            text-base
            font-bold
            leading-5
            text-slate-900
            [font-family:'IBM_Plex_Sans',sans-serif]
          "
        >
          {title}
        </h3>
      </div>

      {/* =====================================================
          DESCRIPTION
          ===================================================== */}

      <div
        className="
          absolute
          left-[20.8px]
          top-[47.2px]
          w-[182px]
        "
      >
        <p
          className="
            m-0
            text-xs
            font-normal
            leading-5
            text-gray-600
            [font-family:'IBM_Plex_Sans',sans-serif]
          "
        >
          {description}
        </p>
      </div>

      {/* =====================================================
          DIVIDER + DETAILS
          ===================================================== */}

      <div
        className="
          absolute
          left-[20.8px]
          top-[75.5px]
          w-[182px]
          border-t
          border-slate-900/10
          pt-2
        "
      >
        <p
          className="
            m-0
            text-xs
            font-normal
            leading-4
            text-yellow-800
            [font-family:'IBM_Plex_Sans',sans-serif]
          "
        >
          {details}
        </p>
      </div>
    </article>
  )
}