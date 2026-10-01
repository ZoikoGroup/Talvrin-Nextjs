'use client'

import Image from 'next/image'

type GoalCardProps = {
  title: string
  description: React.ReactNode
  link?: string
  href?: string
  notice?: React.ReactNode
}

function GoalCard({
  title,
  description,
  link,
  href = '#',
  notice,
}: GoalCardProps) {
  return (
    <article
      className="
        flex
        w-full
        h-auto
        self-start
        flex-col
        items-start
        gap-3
        rounded-2xl
        bg-white
        px-5
        py-6
        outline
        outline-1
        outline-offset-[-1px]
        outline-slate-900/10
      "
    >
      {/* TITLE */}
      <div className="w-full">
        <h3
          className="
            m-0
            w-full
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

      {/* DESCRIPTION */}
      <div className="w-full">
        <p
          className="
            m-0
            w-full
            text-sm
            font-normal
            leading-5
            text-gray-600
            [font-family:'IBM_Plex_Sans',sans-serif]
          "
        >
          {description}
        </p>
      </div>

      {/* NOTICE */}
      {notice && (
        <div className="w-full">
          <p
            className="
              m-0
              w-full
              text-xs
              font-normal
              leading-5
              text-yellow-800
              [font-family:'IBM_Plex_Sans',sans-serif]
            "
          >
            {notice}
          </p>
        </div>
      )}

      {/* LINK */}
      {link && (
        <div className="w-full pt-0">
          <a
            href={href}
            className="
              inline-flex
              items-center
              text-sm
              font-semibold
              leading-5
              text-indigo-500
              transition-colors
              duration-200
              hover:text-indigo-700
              [font-family:'IBM_Plex_Sans',sans-serif]
            "
          >
            {link}
            <span className="ml-1 font-['Inter']">
              →
            </span>
          </a>
        </div>
      )}
    </article>
  )
}

export default function StartByGoal() {
  return (
    <section
      id="start-by-goal"
      className="
        w-full
        overflow-hidden
        bg-violet-50
      "
    >
      {/* =====================================================
          SECTION CONTAINER
          ===================================================== */}

      <div
        className="
          mx-auto
          w-full
          max-w-[1440px]

          px-6
          py-20

          sm:px-8
          sm:py-24

          md:px-10

          lg:px-20
          lg:py-24

          xl:px-[112.4px]
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
              START BY GOAL
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
              START BY GOAL
            </span>
          </div>

          {/* =================================================
              HEADING
              ================================================= */}

          <div
            className="
              mt-3
              w-full
              max-w-[760px]
            "
          >
            <h2
              className="
                m-0
                text-[30px]
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
              Find documentation by what you&apos;re trying
              <br className="hidden lg:block" />
              to do.
            </h2>
          </div>

          {/* =================================================
              DESCRIPTION
              ================================================= */}

          <div
            className="
              mt-[15px]
              w-full
              max-w-[720px]
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
              A dedicated Getting Started guide isn&apos;t published on this
              build yet — the goals below cover the same first-task ground and
              route to the real, current product pages that explain them.
            </p>
          </div>

          {/* =================================================
              DESKTOP GRID

              Figma:
              4 columns
              288px each
              17px horizontal gap

              Row 1:
              184px

              Row gap:
              35.6px

              Row 2:
              208px

              Image:
              384px

              IMPORTANT:
              The image does NOT control the row height.
              ================================================= */}

          <div
            className="
              mt-[48px]
              hidden

              lg:grid
              lg:w-full
              lg:grid-cols-[288px_288px_288px_288px]
              lg:grid-rows-[184px_208px]
              lg:gap-x-[17px]
              lg:gap-y-[35.6px]
            "
          >
            {/* =================================================
                ROW 1 — CARD 1
                ================================================= */}

            <GoalCard
              title="Learn the research workflow"
              description={
                <>
                  Ask → Discover → Inspect →
                  <br />
                  Understand → Build → Monitor →
                  <br />
                  Reassess — the shape every Talvrin
                  <br />
                  research task follows.
                </>
              }
              link="See how Talvrin works"
              href="#how-talvrin-works"
            />

            {/* =================================================
                ROW 1 — CARD 2
                ================================================= */}

            <GoalCard
              title="Understand evidence"
              description={
                <>
                  Source identity, timing, jurisdiction,
                  <br />
                  version, rights and access, and how
                  <br />
                  evidence relates to what you see on
                  <br />
                  screen.
                </>
              }
              link="Explore evidence"
              href="#evidence"
            />

            {/* =================================================
                ROW 1 — CARD 3
                ================================================= */}

            <GoalCard
              title="Monitor what changes"
              description={
                <>
                  How research views stay connected
                  <br />
                  to evidence, and how meaningful
                  <br />
                  changes get reviewed rather than
                  <br />
                  pushed as noise.
                </>
              }
              link="See monitoring & alerts"
              href="#monitoring"
            />

            {/* =================================================
                IMAGE
                ROW 1 / RIGHT COLUMN

                Does NOT stretch the row.
                ================================================= */}

            <div
              className="
                relative
                col-start-4
                row-start-1
                h-[384px]
                w-[288px]
                overflow-hidden
                rounded-2xl
                bg-white
                outline
                outline-1
                outline-offset-[-1px]
                outline-slate-900/10
              "
            >
              <Image
                src="/images/resources/documentation/image.png"
                alt="Talvrin research workflow"
                width={288}
                height={384}
                priority
                className="
                  block
                  h-[384px]
                  w-[288px]
                  object-cover
                  object-center
                "
              />
            </div>

            {/* =================================================
                ROW 2 — CARD 4
                ================================================= */}

            <GoalCard
              title="Manage your workspace or account"
              description={
                <>
                  Roles, permissions and workspace
                  <br />
                  settings — shown only once approved
                  <br />
                  guidance exists for your account type.
                </>
              }
              notice={
                <>
                  Account and workspace guidance is not yet
                  <br />
                  published on this build.
                </>
              }
            />

            {/* =================================================
                ROW 2 — CARD 5
                ================================================= */}

            <GoalCard
              title="Resolve a problem"
              description={
                <>
                  Known failure, permission,
                  <br />
                  unavailable and stale states, with a
                  <br />
                  safe path to support if self-service
                  <br />
                  doesn&apos;t resolve it.
                </>
              }
              link="Go to troubleshooting"
              href="#troubleshooting"
            />

            {/* =================================================
                ROW 2 — CARD 6
                ================================================= */}

            <GoalCard
              title="Use AI assistance responsibly"
              description={
                <>
                  What AI can help with inside Talvrin,
                  <br />
                  and why generated output is never
                  <br />
                  treated as authoritative evidence.
                </>
              }
              link="Read the AI boundary"
              href="#ai-boundary"
            />
          </div>

          {/* =====================================================
              TABLET / MOBILE

              No artificial desktop spacing.
              Cards simply stack.
              ===================================================== */}

          <div
            className="
              mt-12
              grid
              w-full
              grid-cols-1
              gap-4

              sm:grid-cols-2

              lg:hidden
            "
          >
            {/* CARD 1 */}

            <GoalCard
              title="Learn the research workflow"
              description={
                <>
                  Ask → Discover → Inspect →
                  Understand → Build → Monitor →
                  Reassess — the shape every Talvrin
                  research task follows.
                </>
              }
              link="See how Talvrin works"
              href="#how-talvrin-works"
            />

            {/* CARD 2 */}

            <GoalCard
              title="Understand evidence"
              description={
                <>
                  Source identity, timing, jurisdiction,
                  version, rights and access, and how
                  evidence relates to what you see on screen.
                </>
              }
              link="Explore evidence"
              href="#evidence"
            />

            {/* CARD 3 */}

            <GoalCard
              title="Monitor what changes"
              description={
                <>
                  How research views stay connected to
                  evidence, and how meaningful changes get
                  reviewed rather than pushed as noise.
                </>
              }
              link="See monitoring & alerts"
              href="#monitoring"
            />

            {/* IMAGE */}

            <div
              className="
                relative
                h-[384px]
                w-full
                overflow-hidden
                rounded-2xl
                bg-white
                outline
                outline-1
                outline-offset-[-1px]
                outline-slate-900/10

                sm:col-span-2
              "
            >
              <Image
                src="/images/resources/documentation/image.png"
                alt="Talvrin research workflow"
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

            {/* CARD 4 */}

            <GoalCard
              title="Manage your workspace or account"
              description={
                <>
                  Roles, permissions and workspace settings —
                  shown only once approved guidance exists for
                  your account type.
                </>
              }
              notice="Account and workspace guidance is not yet published on this build."
            />

            {/* CARD 5 */}

            <GoalCard
              title="Resolve a problem"
              description={
                <>
                  Known failure, permission, unavailable and
                  stale states, with a safe path to support if
                  self-service doesn&apos;t resolve it.
                </>
              }
              link="Go to troubleshooting"
              href="#troubleshooting"
            />

            {/* CARD 6 */}

            <GoalCard
              title="Use AI assistance responsibly"
              description={
                <>
                  What AI can help with inside Talvrin, and why
                  generated output is never treated as
                  authoritative evidence.
                </>
              }
              link="Read the AI boundary"
              href="#ai-boundary"
            />
          </div>
        </div>
      </div>
    </section>
  )
}