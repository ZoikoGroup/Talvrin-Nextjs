import Image from "next/image";

const resources = [
  {
    title: "Help Center",
    description: (
      <>
        General product help and
        <br className="hidden lg:block" />
        common questions.
      </>
    ),
  },
  {
    title: "Documentation",
    description: (
      <>
        Public product and
        <br className="hidden lg:block" />
        technical documentation.
      </>
    ),
  },
  {
    title: "FAQs",
    description: (
      <>
        Direct answers to frequently
        <br className="hidden lg:block" />
        asked questions.
      </>
    ),
  },
  {
    title: "Getting Started",
    description: (
      <>
        First-use guidance for new
        <br className="hidden lg:block" />
        Talvrin users.
      </>
    ),
  },
  {
    title: "Release Notes",
    description: (
      <>
        Recent product changes
        <br className="hidden lg:block" />
        and additions.
      </>
    ),
  },
];

export default function SelfService() {
  return (
    <section
      id="self-service"
      className="
        talvrin-scroll-section
        relative
        w-full
        overflow-hidden
        bg-violet-50
      "
    >
      <div
        className="
          mx-auto
          flex
          w-full
          max-w-[1200px]
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
          <span
            className="
              font-['IBM_Plex_Sans']
              text-xs
              font-bold
              leading-[14px]
              tracking-wide
              text-yellow-600
            "
          >
            START WITH SELF-SERVICE
          </span>
        </div>

        {/* =====================================================
            HEADING
        ====================================================== */}
        <div
          className="
            mt-[22px]
            flex
            w-full
            max-w-[760px]
            flex-col
            items-start
          "
        >
          <h2
            className="
              font-['IBM_Plex_Sans']
              text-[28px]
              font-bold
              leading-9
              tracking-[-0.02em]
              text-slate-900

              sm:text-[36px]
              sm:leading-10
            "
          >
            Most questions are answered faster outside
            <br className="hidden sm:block" />
            {" "}a support queue.
          </h2>
        </div>

        {/* =====================================================
            DESCRIPTION
        ====================================================== */}
        <div
          className="
            mt-6
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
            Check these resources before filing a request. Support remains
            available below for anything self-service doesn&apos;t resolve.
          </p>
        </div>

        {/* =====================================================
            RESOURCE CARDS
        ====================================================== */}
        <div
          className="
            mt-7
            grid
            w-full
            grid-cols-1
            gap-4

            sm:grid-cols-2
            md:grid-cols-3
            xl:grid-cols-5
            lg:gap-5
          "
        >
          {resources.map((resource) => (
            <div
              key={resource.title}
              className="
                flex
                h-full
                min-h-[145px]
                w-full
                flex-col
                items-start
                gap-2.5
                rounded-2xl
                border
                border-slate-900/10
                bg-white
                px-5
                py-6

                transition-all
                duration-300
                ease-out
                hover:-translate-y-1
                hover:border-slate-900/15
                hover:shadow-sm
              "
            >
              {/* Card title */}
              <div
                className="
                  flex
                  w-full
                  items-start
                "
              >
                <h3
                  className="
                    font-['IBM_Plex_Sans']
                    text-base
                    font-bold
                    leading-5
                    text-slate-900
                  "
                >
                  {resource.title}
                </h3>
              </div>

              {/* Card description */}
              <div
                className="
                  flex
                  w-full
                  flex-col
                  items-start
                "
              >
                <p
                  className="
                    font-['IBM_Plex_Sans']
                    text-sm
                    font-normal
                    leading-5
                    text-gray-600
                  "
                >
                  {resource.description}
                </p>
              </div>

              {/* Status */}
              <div
                className="
                  mt-auto
                  flex
                  w-full
                  flex-col
                  items-start
                "
              >
                <p
                  className="
                    font-['IBM_Plex_Sans']
                    text-xs
                    font-normal
                    leading-4
                    text-yellow-800
                  "
                >
                  Not yet available on this build.
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* =====================================================
            IMAGE
        ====================================================== */}
        <div
          className="
            relative
            mt-7
            w-full
            overflow-hidden
            rounded-2xl
            h-[180px]
            sm:h-[240px]
            lg:h-[280px]
            xl:h-[320px]
          "
        >
          <Image
            src="/images/resources/contact-support/image.png"
            alt="Talvrin self-service resources"
            fill
            sizes="(max-width: 1200px) 100vw, 1200px"
            priority={false}
            className="
              object-cover
              object-center
              transition-transform
              duration-700
              ease-out
              hover:scale-[1.015]
            "
          />
        </div>
      </div>
    </section>
  );
}