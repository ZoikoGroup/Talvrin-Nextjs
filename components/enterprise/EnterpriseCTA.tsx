"use client";

export default function EnterpriseCTA() {
  return (
    <section
      className="
        w-full
        border-t-[0.8px]
        border-slate-900/10
        bg-violet-50
      "
    >
      <div
        className="
          mx-auto
          flex
          min-h-[512px]
          w-full
          max-w-[1440px]
          items-center
          justify-center
          px-6
          py-20
          sm:px-8
          md:px-10
          lg:px-20
          lg:py-[88px]
        "
      >
        <div
          className="
            flex
            w-full
            max-w-[700px]
            flex-col
            items-center
            gap-4
            text-center
          "
        >
          {/* Heading */}
          <h2
            className="
              m-0
              w-full
              font-['IBM_Plex_Sans']
              text-[36px]
              font-bold
              leading-[43px]
              tracking-[-0.8px]
              text-slate-900
              sm:text-[42px]
              sm:leading-[46px]
              lg:text-[48px]
              lg:leading-[48.3px]
            "
          >
            Build research that remains
            <br className="hidden sm:block" />
            connected to the evidence — at
            <br className="hidden sm:block" />
            organization scale.
          </h2>

          {/* Description */}
          <p
            className="
              m-0
              w-full
              font-['IBM_Plex_Sans']
              text-[16px]
              font-normal
              leading-7
              text-gray-600
            "
          >
            Explore how Talvrin&apos;s fits your organization&apos;s research process
            across teams and markets.
          </p>

          {/* Buttons */}
          <div
            className="
              flex
              w-full
              flex-col
              items-center
              justify-center
              gap-4
              pt-3.5
              sm:flex-row
            "
          >
            {/* Request Access */}
            <a
              href="#"
              className="
                inline-flex
                min-h-[52px]
                w-full
                items-center
                justify-center
                rounded-lg
                bg-slate-900
                px-7
                py-4
                font-['IBM_Plex_Sans']
                text-[16px]
                font-semibold
                leading-5
                text-violet-50
                transition-colors
                duration-200
                hover:bg-slate-800
                sm:w-auto
              "
            >
              Request Access
            </a>

            {/* See How It Works */}
            <a
              href="#"
              className="
                inline-flex
                min-h-[52px]
                w-full
                items-center
                justify-center
                rounded-lg
                border
                border-slate-900/25
                bg-transparent
                px-7
                py-4
                font-['IBM_Plex_Sans']
                text-[16px]
                font-semibold
                leading-5
                text-slate-900
                transition-colors
                duration-200
                hover:bg-white/60
                sm:w-auto
              "
            >
              See How It Works
            </a>
          </div>

          {/* Disclaimer */}
          <p
            className="
              m-0
              w-full
              pt-0.5
              font-['IBM_Plex_Sans']
              text-[14px]
              font-normal
              leading-5
              text-gray-600
            "
          >
            Research and intelligence — not generic enterprise software.
            No trade execution. No manufactured investment
            recommendations.
          </p>
        </div>
      </div>
    </section>
  );
}