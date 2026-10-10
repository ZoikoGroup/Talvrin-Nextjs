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
      <div
        className="
          mx-auto
          w-full
          max-w-[1440px]
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
            w-full
            max-w-[1200px]
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
              mt-4
              max-w-[780px]
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
            Every article follows one of five governed types.
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
              text-gray-600
              [font-family:'IBM_Plex_Sans',sans-serif]
            "
          >
            No articles are published against this taxonomy yet on this build.
            It defines the structure articles will follow once approved content
            exists — not a library to browse today.
          </p>

          {/* =================================================
              TAXONOMY CARDS & IMAGE
              ================================================= */}

          <div
            className="
              mt-10
              grid
              w-full
              grid-cols-1
              gap-4
              sm:grid-cols-2
              lg:grid-cols-3
              xl:grid-cols-5
              xl:gap-x-[19.2px]
            "
          >
            {taxonomyItems.map((item) => (
              <TaxonomyCard
                key={item.title}
                title={item.title}
                description={item.description}
                details={item.details}
              />
            ))}

            {/* IMAGE */}
            <div
              className="
                relative
                flex
                h-full
                min-h-[176px]
                w-full
                overflow-hidden
                rounded-xl
                bg-violet-50
                outline
                outline-1
                outline-offset-[-1px]
                outline-slate-900/10
                sm:col-span-2
                lg:col-span-1
                xl:col-span-1
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
}

function TaxonomyCard({
  title,
  description,
  details,
}: TaxonomyCardProps) {
  return (
    <article
      className="
        flex
        h-full
        min-h-[176px]
        w-full
        flex-col
        rounded-xl
        bg-violet-50
        p-5
        outline
        outline-1
        outline-offset-[-1px]
        outline-slate-900/10
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

      <div
        className="
          m-0
          mt-1.5
          text-xs
          font-normal
          leading-5
          text-gray-600
          [font-family:'IBM_Plex_Sans',sans-serif]
        "
      >
        {description}
      </div>

      <div
        className="
          mt-auto
          border-t
          border-slate-900/10
          pt-2
        "
      >
        <div
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
        </div>
      </div>
    </article>
  )
}