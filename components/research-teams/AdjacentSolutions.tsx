"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";

/* =========================================================
   ANIMATION
========================================================= */

const smoothEase: [number, number, number, number] = [
  0.22,
  1,
  0.36,
  1,
];

const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: smoothEase,
    },
  },
};

/* =========================================================
   DATA
========================================================= */

const solutions = [
  {
    title: "Investment Professionals",
    description: (
      <>
        Source-linked research and
        <br className="hidden lg:block" />
        monitoring built for individual
        <br className="hidden lg:block" />
        professional workflows.
      </>
    ),
  },

  {
    title: "Asset Managers",
    description: (
      <>
        Research infrastructure across
        <br className="hidden lg:block" />
        asset-management investment
        <br className="hidden lg:block" />
        workflows.
      </>
    ),
  },

  {
    title: "Financial Institutions",
    description: (
      <>
        Governed evidence and research
        <br className="hidden lg:block" />
        capabilities for institutions.
      </>
    ),
  },
];

/* =========================================================
   SOLUTION CARD
========================================================= */

type SolutionCardProps = {
  title: string;
  description: React.ReactNode;
  index: number;
};

function SolutionCard({
  title,
  description,
  index,
}: SolutionCardProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.2,
      }}
      variants={fadeUp}
      transition={{
        delay: index * 0.08,
      }}
      className="
        w-full
        lg:w-[302px]
        min-h-[192px]
        lg:h-[192px]

        px-7
        py-7

        bg-white
        rounded-2xl

        outline
        outline-1
        outline-offset-[-1px]
        outline-slate-900/10

        flex
        flex-col
        justify-start
        items-start

        gap-2.5
      "
    >
      {/* ===================================================
          TITLE
      =================================================== */}

      <div
        className="
          self-stretch
          flex
          flex-col
          justify-start
          items-start
        "
      >
        <h3
          className="
            self-stretch
            text-slate-900
            text-lg
            font-bold
            font-['IBM_Plex_Sans']
            leading-6
          "
        >
          {title}
        </h3>
      </div>

      {/* ===================================================
          DESCRIPTION
      =================================================== */}

      <div
        className="
          self-stretch
          pb-2
          flex
          flex-col
          justify-start
          items-start
        "
      >
        <p
          className="
            self-stretch
            text-gray-600
            text-base
            font-normal
            font-['IBM_Plex_Sans']
            leading-6
          "
        >
          {description}
        </p>
      </div>

      {/* ===================================================
          LINK
      =================================================== */}

      <a
        href="#"
        className="
          text-indigo-500
          text-sm
          font-semibold
          font-['IBM_Plex_Sans']
          leading-5

          transition-opacity
          duration-200
          hover:opacity-70
        "
      >
        Learn more →
      </a>
    </motion.div>
  );
}

/* =========================================================
   MAIN COMPONENT
========================================================= */

export default function AdjacentSolutions() {
  return (
    <section
      className="
        relative
        w-full
        bg-violet-50
        overflow-hidden
      "
    >
      {/* ===================================================
          SECTION CONTAINER
      =================================================== */}

      <div
        className="
          relative
          w-full
          max-w-[1440px]
          min-h-[515.75px]
          mx-auto

          px-6
          sm:px-8
          lg:px-0

          py-20
          lg:py-0
        "
      >
        {/* =================================================
            DESKTOP CONTENT
        ================================================= */}

        <div
          className="
            w-full
            lg:w-[1280px]

            lg:left-[80px]
            lg:top-[95.78px]

            lg:absolute

            flex
            flex-col
            justify-start
            items-start
          "
        >
          {/* =================================================
              EYEBROW
          ================================================= */}

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.25,
            }}
            variants={fadeUp}
            className="
              w-full
              text-indigo-500
              text-xs
              font-bold
              font-['IBM_Plex_Sans']
              tracking-wide
            "
          >
            ADJACENT SOLUTIONS
          </motion.div>

          {/* =================================================
              HEADING
          ================================================= */}

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.25,
            }}
            variants={fadeUp}
            className="
              w-full
              mt-[17px]
            "
          >
            <h2
              className="
                w-full
                text-slate-900
                text-[32px]
                sm:text-[40px]
                lg:text-5xl
                font-bold
                font-['IBM_Plex_Sans']
                leading-[1.08]
                lg:leading-[48.30px]
              "
            >
              Need organization or institution scale? Find the right fit.
            </h2>
          </motion.div>

          {/* =================================================
              SOLUTIONS GRID
          ================================================= */}

          <div
            className="
              w-full

              mt-[35px]

              grid
              grid-cols-1
              sm:grid-cols-2

              lg:grid-cols-[302px_302px_302px_302px]

              gap-4
              lg:gap-4
            "
          >
            {/* =================================================
                INVESTMENT PROFESSIONALS
            ================================================= */}

            <SolutionCard
              title={solutions[0].title}
              description={solutions[0].description}
              index={0}
            />

            {/* =================================================
                ASSET MANAGERS
            ================================================= */}

            <SolutionCard
              title={solutions[1].title}
              description={solutions[1].description}
              index={1}
            />

            {/* =================================================
                FINANCIAL INSTITUTIONS
            ================================================= */}

            <SolutionCard
              title={solutions[2].title}
              description={solutions[2].description}
              index={2}
            />

            {/* =================================================
                IMAGE
            ================================================= */}

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.98,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.8,
                ease: smoothEase,
              }}
              className="
                relative

                w-full
                h-[192px]

                lg:w-[302px]
                lg:h-[192px]

                bg-white
                rounded-2xl

                outline
                outline-1
                outline-offset-[-1px]
                outline-slate-900/10

                overflow-hidden
              "
            >
              <Image
                src="/images/solutions/research-teams/image7.png"
                alt="Research professionals collaborating"
                fill
                priority
                sizes="302px"
                className="
                  object-cover
                  object-center
                "
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}