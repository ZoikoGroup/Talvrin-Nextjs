'use client'

import Image from 'next/image'

type GovernanceCardProps = {
  title: React.ReactNode
  description: React.ReactNode
}

const NotAvailableBadge = () => {
  return (
    <div
      className="
        shrink-0
        rounded-[99px]
        bg-yellow-600/10
        px-2
        py-[3px]
      "
    >
      <span
        className="
          whitespace-nowrap
          text-[10px]
          font-bold
          leading-[12px]
          tracking-wide
          text-yellow-800
          [font-family:'IBM_Plex_Sans',sans-serif]
        "
      >
        Not Yet Available
      </span>
    </div>
  )
}

function GovernanceCard({
  title,
  description,
}: GovernanceCardProps) {
  return (
    <article
      className="
        flex
        h-full
        min-h-[147px]
        w-full
        flex-col
        justify-between
        gap-2
        rounded-xl
        bg-violet-50
        p-5
        outline
        outline-1
        outline-offset-[-1px]
        outline-slate-900/10
      "
    >
      {/* TITLE + BADGE */}
      <div className="flex w-full items-start justify-between gap-2">
        <h3
          className="
            m-0
            min-w-0
            flex-1
            text-base
            font-bold
            leading-5
            text-slate-900
            [font-family:'IBM_Plex_Sans',sans-serif]
          "
        >
          {title}
        </h3>

        <NotAvailableBadge />
      </div>

      {/* DESCRIPTION */}
      <p
        className="
          m-0
          w-full
          text-xs
          font-normal
          leading-5
          text-gray-600
          [font-family:'IBM_Plex_Sans',sans-serif]
        "
      >
        {description}
      </p>

      {/* STATUS */}
      <p
        className="
          m-0
          mt-auto
          text-xs
          font-normal
          leading-5
          text-gray-600
          [font-family:'IBM_Plex_Sans',sans-serif]
        "
      >
        Not yet available
      </p>
    </article>
  )
}

export default function TrustGovernanceHandoff() {
  return (
    <section
      className="
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
        <div className="mx-auto w-full max-w-[1200px]">
          {/* LABEL */}
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
              TRUST &amp; GOVERNANCE HANDOFF
            </span>
          </div>

          {/* HEADING */}
          <h2
            className="
              m-0
              mt-4
              max-w-[780px]
              text-[28px]
              font-bold
              leading-9
              tracking-[-0.02em]
              text-slate-900
              [font-family:'IBM_Plex_Sans',sans-serif]
              sm:text-[34px]
              sm:leading-10
              lg:text-4xl
              lg:leading-10
            "
          >
            Governed claims live on their own canonical pages
            — Documentation only links to them.
          </h2>

          {/* DESCRIPTION */}
          <p
            className="
              m-0
              mt-4
              max-w-[720px]
              text-base
              font-normal
              leading-6
              text-gray-600
              [font-family:'IBM_Plex_Sans',sans-serif]
            "
          >
            This keeps one answer per topic instead of duplicate,
            drifting explanations.
          </p>

          {/* =====================================================
              DESKTOP GRID (xl:)
              4 columns: 3 cards columns + 1 image spanning 2 rows
              ===================================================== */}
          <div
            className="
              mt-10
              hidden
              xl:grid
              xl:w-full
              xl:grid-cols-[repeat(3,minmax(0,1fr))_288px]
              xl:grid-rows-[minmax(147px,auto)_minmax(147px,auto)]
              xl:gap-4
            "
          >
            {/* ROW 1 */}
            <GovernanceCard
              title="Security"
              description="Security controls and vulnerability disclosure."
            />

            <GovernanceCard
              title="Privacy"
              description="Talvrin privacy information and user-data principles."
            />

            <GovernanceCard
              title="Data Rights"
              description="Licensing, entitlement, and permitted-use questions."
            />

            {/* IMAGE: Row 1-2, Col 4 */}
            <div
              className="
                relative
                col-start-4
                row-start-1
                row-span-2
                h-full
                min-h-[310px]
                w-full
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
                src="/images/resources/documentation/image4.png"
                alt="Trust and governance"
                width={288}
                height={384}
                priority
                className="
                  h-full
                  w-full
                  object-cover
                  object-center
                "
              />
            </div>

            {/* ROW 2 */}
            <GovernanceCard
              title="AI Principles"
              description="AI boundaries and human-verification expectations."
            />

            <GovernanceCard
              title="Service Status"
              description="Current availability and incident history."
            />

            <GovernanceCard
              title="Evidence Standards"
              description="How evidence is sourced, classified and presented."
            />
          </div>

          {/* =====================================================
              TABLET / MOBILE / LAPTOP (< xl)
              ===================================================== */}
          <div
            className="
              mt-8
              grid
              w-full
              grid-cols-1
              gap-4
              sm:grid-cols-2
              lg:grid-cols-3
              xl:hidden
            "
          >
            <GovernanceCard
              title="Security"
              description="Security controls and vulnerability disclosure."
            />

            <GovernanceCard
              title="Privacy"
              description="Talvrin privacy information and user-data principles."
            />

            <GovernanceCard
              title="Data Rights"
              description="Licensing, entitlement, and permitted-use questions."
            />

            <GovernanceCard
              title="AI Principles"
              description="AI boundaries and human-verification expectations."
            />

            <GovernanceCard
              title="Service Status"
              description="Current availability and incident history."
            />

            <GovernanceCard
              title="Evidence Standards"
              description="How evidence is sourced, classified and presented."
            />

            {/* MOBILE / TABLET IMAGE */}
            <div
              className="
                relative
                h-[260px]
                w-full
                overflow-hidden
                rounded-xl
                bg-violet-50
                outline
                outline-1
                outline-offset-[-1px]
                outline-slate-900/10
                sm:col-span-2
                lg:col-span-3
              "
            >
              <Image
                src="/images/resources/documentation/image4.png"
                alt="Trust and governance"
                width={288}
                height={384}
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