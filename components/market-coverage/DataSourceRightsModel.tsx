"use client";

import { useEffect, useRef } from "react";

const rightsItems = [
  {
    title: "Source availability",
    description:
      "Coverage depends on appropriate primary, official, licensed, or institutional sources being in place.",
  },
  {
    title: "Licensing",
    description:
      "Some source or data access depends on licenses or entitlements Talvrin does not control unilaterally.",
  },
  {
    title: "User entitlement",
    description:
      "A market can be supported while a specific dataset within it requires sign-in or entitlement.",
  },
  {
    title: "Operational readiness",
    description:
      "Coverage requires production service readiness, not only source existence.",
  },
  {
    title: "Redistribution",
    description:
      "Public display rights can differ from in-product research rights; this page never exposes restricted or raw content.",
  },
  {
    title: "Regional constraints",
    description:
      "Access and permitted use can vary by jurisdiction, independent of coverage status.",
  },
];

export default function DataSourceRightsModel() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) {
      return;
    }

    const elements =
      section.querySelectorAll<HTMLElement>("[data-reveal]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          const element = entry.target as HTMLElement;

          element.classList.remove(
            "opacity-0",
            "translate-y-8",
            "scale-[0.98]"
          );

          element.classList.add(
            "opacity-100",
            "translate-y-0",
            "scale-100"
          );

          observer.unobserve(element);
        });
      },
      {
        threshold: 0.08,
        rootMargin: "0px 0px -70px 0px",
      }
    );

    elements.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full overflow-hidden bg-slate-900"
    >
      <div
        className="
          mx-auto
          w-full
          max-w-[1440px]
          px-4
          py-12
          sm:px-6
          md:px-8
          lg:px-8
          xl:px-20
          lg:py-16
          xl:py-[96px]
        "
      >
        {/* EYEBROW */}
        <div
          data-reveal
          className="
            translate-y-8
            opacity-0
            transition-all
            duration-700
            ease-out
          "
        >
          <p
            className="
              m-0
              font-['IBM_Plex_Sans']
              text-xs
              font-bold
              tracking-wide
              text-yellow-600
            "
          >
            DATA &amp; SOURCE RIGHTS MODEL
          </p>
        </div>

        {/* HEADING */}
        <div
          data-reveal
          className="
            mt-3
            sm:mt-5
            translate-y-8
            opacity-0
            transition-all
            duration-700
            ease-out
          "
          style={{
            transitionDelay: "80ms",
          }}
        >
          <h2
            className="
              m-0
              max-w-[760px]
              font-['IBM_Plex_Sans']
              text-[30px]
              font-bold
              leading-[1.12]
              tracking-[-1px]
              text-violet-50
              sm:text-[38px]
              md:text-[42px]
              lg:text-5xl
              lg:leading-[48.72px]
            "
          >
            Coverage depends on rights, not just{" "}
            <br className="hidden xl:block" />
            on evidence existing.
          </h2>
        </div>

        {/* DESCRIPTION */}
        <div
          data-reveal
          className="
            mt-4
            sm:mt-5
            translate-y-8
            opacity-0
            transition-all
            duration-700
            ease-out
          "
          style={{
            transitionDelay: "150ms",
          }}
        >
          <p
            className="
              m-0
              max-w-[780px]
              font-['IBM_Plex_Sans']
              text-sm
              sm:text-base
              font-normal
              leading-6
              sm:leading-7
              text-violet-50/70
            "
          >
            A market can be technically observable and still not be
            released, because licensing, redistribution, and operational
            rights must be in place first.
          </p>
        </div>

        {/* MAIN CONTENT */}
        <div
          className="
            mt-8
            sm:mt-14
            grid
            grid-cols-1
            gap-4
            sm:grid-cols-2
            lg:grid-cols-4
            xl:grid-cols-[240px_240px_240px_minmax(0,1fr)]
          "
        >
          {/* SOURCE AVAILABILITY */}
          <RightsCard
            title={rightsItems[0].title}
            description={rightsItems[0].description}
            delay={220}
          />

          {/* LICENSING */}
          <RightsCard
            title={rightsItems[1].title}
            description={rightsItems[1].description}
            delay={300}
          />

          {/* USER ENTITLEMENT */}
          <RightsCard
            title={rightsItems[2].title}
            description={rightsItems[2].description}
            delay={380}
          />

          {/* IMAGE */}
          <div
            data-reveal
            className="
              order-first
              min-h-[260px]
              sm:min-h-[300px]
              translate-y-8
              scale-[0.98]
              overflow-hidden
              rounded-2xl
              border
              border-violet-50/10
              bg-violet-50/5
              opacity-0
              transition-all
              duration-1000
              ease-out
              sm:col-span-2
              lg:col-span-1
              lg:order-none
              lg:row-span-2
              lg:min-h-0
              lg:h-full
            "
            style={{
              transitionDelay: "300ms",
            }}
          >
            <img
              src="/images/markets/market-coverage/image3.png"
              alt="Talvrin research team working with market data"
              className="
                block
                h-full
                w-full
                object-cover
                object-center
              "
            />
          </div>

          {/* OPERATIONAL READINESS */}
          <RightsCard
            title={rightsItems[3].title}
            description={rightsItems[3].description}
            delay={460}
          />

          {/* REDISTRIBUTION */}
          <RightsCard
            title={rightsItems[4].title}
            description={rightsItems[4].description}
            delay={540}
          />

          {/* REGIONAL CONSTRAINTS */}
          <RightsCard
            title={rightsItems[5].title}
            description={rightsItems[5].description}
            delay={620}
          />
        </div>
      </div>
    </section>
  );
}

type RightsCardProps = {
  title: string;
  description: string;
  delay: number;
};

function RightsCard({
  title,
  description,
  delay,
}: RightsCardProps) {
  return (
    <div
      data-reveal
      className="
        min-h-[190px]
        translate-y-8
        rounded-2xl
        border
        border-violet-50/10
        bg-violet-50/5
        px-6
        py-6
        opacity-0
        transition-all
        duration-700
        ease-out
      "
      style={{
        transitionDelay: `${delay}ms`,
      }}
    >
      <div
        className="
          font-['IBM_Plex_Sans']
          text-base
          font-bold
          leading-6
          text-violet-50
        "
      >
        {title}
      </div>

      <p
        className="
          mt-2.5
          m-0
          font-['IBM_Plex_Sans']
          text-sm
          font-normal
          leading-5
          text-violet-50/70
        "
      >
        {description}
      </p>
    </div>
  );
}