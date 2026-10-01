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
    <div
      className="
        flex
        h-[147px]
        w-[288px]
        flex-col
        items-start
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
        <div
          className="
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
        </div>

        <NotAvailableBadge />
      </div>

      {/* DESCRIPTION */}
      <div
        className="
          w-full
          text-xs
          font-normal
          leading-5
          text-gray-600
          [font-family:'IBM_Plex_Sans',sans-serif]
        "
      >
        {description}
      </div>

      {/* STATUS */}
      <div
        className="
          mt-auto
          text-xs
          font-normal
          leading-5
          text-gray-600
          [font-family:'IBM_Plex_Sans',sans-serif]
        "
      >
        Not yet available
      </div>
    </div>
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
      {/* =========================================================
          DESKTOP
          Figma frame:
          1439.80 × 705.80
          ========================================================= */}

      <div className="hidden lg:block">
        <div
          className="
            relative
            mx-auto
            h-[705.8px]
            w-full
            max-w-[1440px]
          "
        >
          {/* =====================================================
              INNER FIGMA FRAME
              1200px wide
              x = 112.40px
              ===================================================== */}

          <div
            className="
              absolute
              left-1/2
              top-0
              h-full
              w-[1200px]
              -translate-x-1/2
            "
          >
            {/* =================================================
                LABEL
                Figma:
                top = 96px
                ================================================= */}

            <div
              className="
                absolute
                left-0
                top-[96px]
                w-[1200px]
              "
            >
              <div
                className="
                  text-xs
                  font-bold
                  tracking-wide
                  text-indigo-500
                  [font-family:'IBM_Plex_Sans',sans-serif]
                "
              >
                TRUST &amp; GOVERNANCE HANDOFF
              </div>
            </div>

            {/* =================================================
                HEADING
                Figma:
                top = 125px
                width = 780px
                ================================================= */}

            <div
              className="
                absolute
                left-0
                top-[125px]
                w-[780px]
              "
            >
              <h2
                className="
                  m-0
                  text-4xl
                  font-bold
                  leading-10
                  text-slate-900
                  [font-family:'IBM_Plex_Sans',sans-serif]
                "
              >
                Governed claims live on their own canonical
                <br />
                pages — Documentation only links to them.
              </h2>
            </div>

            {/* =================================================
                DESCRIPTION
                Figma:
                top = 224px
                ================================================= */}

            <div
              className="
                absolute
                left-0
                top-[224px]
                w-[720px]
              "
            >
              <p
                className="
                  m-0
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
            </div>

            {/* =================================================
                FIRST ROW
                ================================================= */}

            {/* SECURITY */}

            <div
              className="
                absolute
                left-0
                top-[293.4px]
              "
            >
              <GovernanceCard
                title="Security"
                description={
                  <>
                    Security controls and vulnerability
                    <br />
                    disclosure.
                  </>
                }
              />
            </div>

            {/* PRIVACY */}

            <div
              className="
                absolute
                left-[304px]
                top-[293.4px]
              "
            >
              <GovernanceCard
                title="Privacy"
                description={
                  <>
                    Talvrin privacy information and user-data
                    <br />
                    principles.
                  </>
                }
              />
            </div>

            {/* DATA RIGHTS */}

            <div
              className="
                absolute
                left-[608px]
                top-[293.4px]
              "
            >
              <GovernanceCard
                title="Data Rights"
                description={
                  <>
                    Licensing, entitlement, and permitted-use
                    <br />
                    questions.
                  </>
                }
              />
            </div>

            {/* =================================================
                IMAGE

                Figma reference:
                Container:
                x = 1024
                y = 293.55
                width = 288
                height = 320

                Relative to 1200 container:
                x = 1024 - 112.4
                  = 911.6

                IMPORTANT:
                Image starts at TOP 0.
                No -58px offset.
                This prevents the person's head from being cut.
                ================================================= */}

            <div
              className="
                absolute
                left-[911.6px]
                top-[293.55px]
                h-[320px]
                w-[288px]
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
                sizes="288px"
                className="
                  absolute
                  left-0
                  top-0
                  h-[384px]
                  w-[288px]
                  max-w-none
                  object-fill
                "
              />
            </div>

            {/* =================================================
                SECOND ROW

                Figma:
                top = 459.60px

                IMPORTANT:
                Difference between rows:
                459.60 - 293.40
                = 166.20px

                Card height:
                147px

                Therefore there is only:
                19.20px
                vertical gap.
                ================================================= */}

            {/* AI PRINCIPLES */}

            <div
              className="
                absolute
                left-0
                top-[459.6px]
              "
            >
              <GovernanceCard
                title="AI Principles"
                description={
                  <>
                    AI boundaries and human-verification
                    <br />
                    expectations.
                  </>
                }
              />
            </div>

            {/* SERVICE STATUS */}

            <div
              className="
                absolute
                left-[304px]
                top-[459.6px]
              "
            >
              <GovernanceCard
                title="Service Status"
                description={
                  <>
                    Current availability and incident history.
                  </>
                }
              />
            </div>

            {/* EVIDENCE STANDARDS */}

            <div
              className="
                absolute
                left-[608px]
                top-[459.6px]
              "
            >
              <GovernanceCard
                title={
                  <>
                    Evidence
                    <br />
                    Standards
                  </>
                }
                description={
                  <>
                    How evidence is sourced, classified and
                    <br />
                    presented.
                  </>
                }
              />
            </div>
          </div>
        </div>
      </div>

      {/* =========================================================
          TABLET / MOBILE
          ========================================================= */}

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
        <div className="mx-auto w-full max-w-[900px]">
          {/* LABEL */}

          <div
            className="
              text-xs
              font-bold
              tracking-wide
              text-indigo-500
              [font-family:'IBM_Plex_Sans',sans-serif]
            "
          >
            TRUST &amp; GOVERNANCE HANDOFF
          </div>

          {/* HEADING */}

          <h2
            className="
              m-0
              mt-4
              max-w-[780px]
              text-[30px]
              font-bold
              leading-[36px]
              tracking-[-0.02em]
              text-slate-900
              [font-family:'IBM_Plex_Sans',sans-serif]

              sm:text-[34px]
              sm:leading-10
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
              MOBILE IMAGE

              Image stays natural and top is NOT clipped.
              ===================================================== */}

          <div
            className="
              relative
              mt-10
              h-[320px]
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
              sizes="288px"
              className="
                absolute
                left-1/2
                top-0
                h-[384px]
                w-[288px]
                max-w-none
                -translate-x-1/2
                object-fill
              "
            />
          </div>

          {/* =====================================================
              MOBILE CARDS

              NO huge row gap.
              ===================================================== */}

          <div
            className="
              mt-6
              grid
              grid-cols-1
              gap-4

              sm:grid-cols-2
            "
          >
            {/* SECURITY */}

            <ResponsiveGovernanceCard
              title="Security"
              description="Security controls and vulnerability disclosure."
            />

            {/* PRIVACY */}

            <ResponsiveGovernanceCard
              title="Privacy"
              description="Talvrin privacy information and user-data principles."
            />

            {/* DATA RIGHTS */}

            <ResponsiveGovernanceCard
              title="Data Rights"
              description="Licensing, entitlement, and permitted-use questions."
            />

            {/* AI PRINCIPLES */}

            <ResponsiveGovernanceCard
              title="AI Principles"
              description="AI boundaries and human-verification expectations."
            />

            {/* SERVICE STATUS */}

            <ResponsiveGovernanceCard
              title="Service Status"
              description="Current availability and incident history."
            />

            {/* EVIDENCE STANDARDS */}

            <ResponsiveGovernanceCard
              title="Evidence Standards"
              description="How evidence is sourced, classified and presented."
            />
          </div>
        </div>
      </div>
    </section>
  )
}

/* =============================================================
   RESPONSIVE CARD
   ============================================================= */

type ResponsiveGovernanceCardProps = {
  title: string
  description: string
}

function ResponsiveGovernanceCard({
  title,
  description,
}: ResponsiveGovernanceCardProps) {
  return (
    <article
      className="
        flex
        min-h-[147px]
        w-full
        flex-col
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
      {/* HEADER */}

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
          flex-1
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