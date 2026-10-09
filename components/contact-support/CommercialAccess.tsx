"use client";

import Link from "next/link";

export default function CommercialAccess() {
  return (
    <section
      id="commercial-access"
      className="
        w-full
        overflow-hidden
        border-t-[0.8px]
        border-slate-900/10
        bg-violet-50
      "
    >
      <div
        className="
          mx-auto
          flex
          min-h-auto
          w-full
          max-w-[640px]
          flex-col
          items-center
          justify-center
          gap-4
          px-5
          py-16

          sm:px-8
          sm:py-20

          lg:min-h-[340px]
          lg:px-8
          lg:py-24
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
            items-center
          "
        >
          <span
            className="
              text-center
              font-['IBM_Plex_Sans']
              text-xs
              font-bold
              leading-[14px]
              tracking-wide
              text-yellow-600
            "
          >
            EVALUATING TALVRIN?
          </span>
        </div>

        {/* =====================================================
            HEADING
        ====================================================== */}
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
              text-center
              font-['IBM_Plex_Sans']
              text-[28px]
              font-bold
              leading-9
              tracking-[-0.02em]
              text-slate-900

              sm:text-[34px]
              sm:leading-10

              lg:text-4xl
              lg:leading-10
            "
          >
            Commercial and request-access
            <br className="hidden sm:block" />
            questions use a separate path
            <br className="hidden sm:block" />
            from support.
          </h2>
        </div>

        {/* =====================================================
            BUTTONS
        ====================================================== */}
        <div
          className="
            flex
            w-full
            flex-col
            items-center
            justify-center
            gap-4
            pt-[2.7px]

            sm:flex-row
          "
        >
          {/* Explore Enterprise */}
          <Link
            href="/enterprise"
            className="
              inline-flex
              min-h-[56px]
              w-full
              items-center
              justify-center
              rounded-lg
              bg-slate-900
              px-7
              py-4
              text-center
              font-['IBM_Plex_Sans']
              text-base
              font-semibold
              leading-6
              text-violet-50
              transition-all
              duration-200
              hover:-translate-y-0.5
              hover:bg-slate-800
              focus:outline-none
              focus:ring-2
              focus:ring-slate-900/30
              focus:ring-offset-2
              focus:ring-offset-violet-50

              sm:w-auto
            "
          >
            Explore Enterprise
          </Link>

          {/* Request Access */}
          <Link
            href="/request-access"
            className="
              inline-flex
              min-h-[56px]
              w-full
              items-center
              justify-center
              rounded-lg
              border
              border-slate-900/25
              px-7
              py-4
              text-center
              font-['IBM_Plex_Sans']
              text-base
              font-semibold
              leading-6
              text-slate-900
              transition-all
              duration-200
              hover:-translate-y-0.5
              hover:bg-white/60
              focus:outline-none
              focus:ring-2
              focus:ring-slate-900/20
              focus:ring-offset-2
              focus:ring-offset-violet-50

              sm:w-auto
            "
          >
            Request Access
          </Link>
        </div>
      </div>
    </section>
  );
}