"use client";

import React from "react";

type TrustCardData = {
  title: string;
  description: React.ReactNode;
};

const trustCards: TrustCardData[] = [
  {
    title: "Security",
    description: (
      <>
        Security controls and vulnerability
        <br className="hidden lg:block" />
        disclosure.
      </>
    ),
  },
  {
    title: "Privacy",
    description: (
      <>
        Talvrin privacy information and user-
        <br className="hidden lg:block" />
        data principles.
      </>
    ),
  },
  {
    title: "Data Rights",
    description: (
      <>
        Licensing, entitlement, and
        <br className="hidden lg:block" />
        permitted-use questions.
      </>
    ),
  },
  {
    title: "AI Principles",
    description: (
      <>
        AI boundaries and human-verification
        <br className="hidden lg:block" />
        expectations.
      </>
    ),
  },
  {
    title: "Service Status",
    description: (
      <>
        Current availability and incident
        <br className="hidden lg:block" />
        history.
      </>
    ),
  },
  {
    title: "Evidence Standards",
    description: (
      <>
        How evidence is sourced, classified
        <br className="hidden lg:block" />
        and presented.
      </>
    ),
  },
];

function TrustCard({
  title,
  description,
}: TrustCardData) {
  return (
    <div
      className="
        flex
        h-full
        min-h-[151px]
        w-full
        flex-col
        items-start
        gap-2
        rounded-xl
        border
        border-slate-900/10
        bg-violet-50
        p-5
      "
    >
      {/* Card Header */}
      <div
        className="
          flex
          w-full
          items-start
          justify-between
          gap-3
        "
      >
        <div
          className="
            min-w-0
            flex-1
            font-['IBM_Plex_Sans']
            text-base
            font-bold
            leading-5
            text-slate-900
          "
        >
          {title === "Evidence Standards" ? (
            <>
              Evidence
              <br />
              Standards
            </>
          ) : (
            title
          )}
        </div>

        {/* Status Badge */}
        <div
          className="
            inline-flex
            shrink-0
            items-center
            rounded-[99px]
            bg-yellow-600/10
            px-2
            py-[3px]
          "
        >
          <span
            className="
              whitespace-nowrap
              font-['IBM_Plex_Sans']
              text-[10px]
              font-bold
              leading-3
              tracking-wide
              text-yellow-800
            "
          >
            Not Yet Available
          </span>
        </div>
      </div>

      {/* Description */}
      <div
        className="
          flex
          w-full
          flex-col
          items-start
          pb-5
        "
      >
        <p
          className="
            font-['IBM_Plex_Sans']
            text-xs
            font-normal
            leading-5
            text-gray-600
          "
        >
          {description}
        </p>
      </div>

      {/* Bottom Status */}
      <div
        className="
          mt-auto
          flex
          w-full
          flex-col
          items-start
        "
      >
        <span
          className="
            font-['IBM_Plex_Sans']
            text-xs
            font-normal
            leading-4
            text-gray-600
          "
        >
          Not yet available
        </span>
      </div>
    </div>
  );
}

export default function TrustAndEscalation() {
  return (
    <section
      id="trust-and-escalation"
      className="
        talvrin-scroll-section
        w-full
        overflow-hidden
        bg-white
      "
    >
      {/* =====================================================
          MAIN CONTAINER
      ====================================================== */}
      <div
        className="
          mx-auto
          flex
          w-full
          max-w-[1100px]
          flex-col
          items-start
          px-5
          py-16

          sm:px-8
          sm:py-20

          lg:px-8
          lg:py-24
          xl:px-0
        "
      >
        {/* =====================================================
            EYEBROW
        ====================================================== */}
        <div
          className="
            flex
            w-full
            flex-col
            items-start
          "
        >
          <div
            className="
              font-['IBM_Plex_Sans']
              text-xs
              font-bold
              leading-[14px]
              tracking-wide
              text-indigo-500
            "
          >
            TRUST AND ESCALATION
          </div>
        </div>

        {/* =====================================================
            HEADING
        ====================================================== */}
        <div
          className="
            mt-[15px]
            flex
            w-full
            max-w-[780px]
            flex-col
            items-start
          "
        >
          <h2
            className="
              font-['IBM_Plex_Sans']
              text-[28px]
              font-bold
              leading-10
              tracking-[-0.02em]
              text-slate-900

              sm:text-4xl
              sm:leading-10
            "
          >
            Security, privacy and governance questions
            <br className="hidden sm:block" />
            {" "}use a dedicated route.
          </h2>
        </div>

        {/* =====================================================
            DESCRIPTION
        ====================================================== */}
        <div
          className="
            mt-[23px]
            flex
            w-full
            max-w-[720px]
            flex-col
            items-start
          "
        >
          <p
            className="
              font-['IBM_Plex_Sans']
              text-base
              font-normal
              leading-6
              text-gray-600
            "
          >
            These matters are never routed through the general support form
            above.
          </p>
        </div>

        {/* =====================================================
            CARDS + IMAGE GRID
        ====================================================== */}
        <div
          className="
            mt-10
            grid
            w-full
            grid-cols-1
            gap-5

            sm:grid-cols-2
            lg:grid-cols-[repeat(3,minmax(0,1fr))_240px]
            lg:gap-5

            xl:grid-cols-[256px_256px_256px_256px]
            xl:gap-[23px]
          "
        >
          {/* =================================================
              ROW 1
          ================================================= */}

          {/* Security */}
          <TrustCard {...trustCards[0]} />

          {/* Privacy */}
          <TrustCard {...trustCards[1]} />

          {/* Data Rights */}
          <TrustCard {...trustCards[2]} />

          {/* =================================================
              FIGMA IMAGE
              256px container
              320px image
              image shifted -26px
          ================================================= */}
          <div
            className="
              relative
              h-[320px]
              w-full
              overflow-hidden
              rounded-xl
              bg-violet-50

              sm:col-span-2

              lg:col-span-1
              lg:col-start-4
              lg:row-start-1
              lg:row-span-2
            "
          >
            <img
              src="/images/resources/contact-support/image3.png"
              alt="Talvrin trust and escalation"
              className="
                absolute
                left-[-26px]
                top-0
                h-[320px]
                w-[320px]
                max-w-none
                object-cover
              "
            />
          </div>

          {/* =================================================
              ROW 2
          ================================================= */}

          {/* AI Principles */}
          <TrustCard {...trustCards[3]} />

          {/* Service Status */}
          <TrustCard {...trustCards[4]} />

          {/* Evidence Standards */}
          <TrustCard {...trustCards[5]} />
        </div>

        {/* =====================================================
            ACCESSIBILITY NOTE
        ====================================================== */}
        <div
          className="
            mt-5
            flex
            w-full
            max-w-[720px]
            flex-col
            items-start
          "
        >
          <p
            className="
              font-['IBM_Plex_Sans']
              text-sm
              font-normal
              leading-6
              text-gray-600
            "
          >
            Need an accessible way to reach support beyond this form? A
            dedicated accessible feedback route is not yet available —
            describe the barrier using the Other issue type above.
          </p>
        </div>
      </div>
    </section>
  );
}