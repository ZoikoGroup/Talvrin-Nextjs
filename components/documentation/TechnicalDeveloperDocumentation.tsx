'use client'

import Image from 'next/image'

export default function TechnicalDeveloperDocumentation() {
  return (
    <section
      id="technical-developer-documentation"
      className="
        w-full
        overflow-hidden
        bg-violet-50
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
            grid
            w-full
            max-w-[1200px]
            items-center
            gap-10
            lg:grid-cols-[minmax(0,1fr)_340px]
            lg:gap-8
            xl:grid-cols-[minmax(0,1fr)_384px]
            xl:gap-12
          "
        >
          {/* LEFT CONTENT */}
          <div className="flex w-full flex-col items-start">
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
              TECHNICAL / DEVELOPER DOCUMENTATION
            </span>

            {/* HEADING */}
            <h2
              className="
                m-0
                mt-4
                max-w-[800px]
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
              General product documentation is separate
              <br className="hidden sm:block" />
              {" "}from developer and API documentation.
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
              Talvrin references developer-oriented documentation, API and
              integration surfaces elsewhere. Those pages publish independently
              and only once an approved developer-platform contract exists — this
              hub never duplicates or guesses at their content.
            </p>

            {/* BUTTONS */}
            <div
              className="
                mt-6
                flex
                w-full
                flex-col
                items-stretch
                gap-3
                sm:w-auto
                sm:flex-row
                sm:items-center
              "
            >
              <a
                href="#developer-overview"
                className="
                  inline-flex
                  h-12
                  items-center
                  justify-center
                  rounded-lg
                  bg-slate-900
                  px-5
                  py-3
                  text-base
                  font-semibold
                  text-violet-50
                  transition-all
                  duration-200
                  hover:-translate-y-0.5
                  hover:bg-slate-800
                  [font-family:'IBM_Plex_Sans',sans-serif]
                "
              >
                Developer Overview
              </a>

              <a
                href="#api-documentation"
                className="
                  inline-flex
                  h-12
                  items-center
                  justify-center
                  rounded-lg
                  border
                  border-slate-900/20
                  px-5
                  py-3
                  text-base
                  font-semibold
                  text-slate-900
                  transition-all
                  duration-200
                  hover:-translate-y-0.5
                  hover:bg-white
                  [font-family:'IBM_Plex_Sans',sans-serif]
                "
              >
                API Documentation
              </a>
            </div>

            {/* SUPPORTING NOTE */}
            <p
              className="
                m-0
                mt-6
                max-w-[760px]
                text-xs
                font-normal
                leading-5
                text-gray-600
                [font-family:'IBM_Plex_Sans',sans-serif]
              "
            >
              Rate limits, auth flows, SDKs and sandbox/production environments
              are never inferred here — each is only ever documented from its own
              approved contract.
            </p>
          </div>

          {/* RIGHT IMAGE */}
          <div
            className="
              relative
              mx-auto
              h-[300px]
              w-full
              max-w-[384px]
              overflow-hidden
              rounded-2xl
              bg-violet-50
              sm:h-[360px]
              lg:h-[384px]
              lg:w-[340px]
              xl:h-[384px]
              xl:w-[384px]
            "
          >
            <Image
              src="/images/resources/documentation/image3.png"
              alt="Developer documentation"
              width={368}
              height={510}
              priority
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
    </section>
  )
}