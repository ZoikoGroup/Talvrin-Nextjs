"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type Institution = {
  name: string;
  jurisdiction: string;
};

const institutions: Institution[] = [
  {
    name: "Federal Reserve",
    jurisdiction: "United States · Americas · Central bank",
  },
  {
    name: "European Central Bank",
    jurisdiction: "Eurozone · Europe · Central bank",
  },
  {
    name: "Bank of England",
    jurisdiction: "United Kingdom · Europe · Central bank",
  },
  {
    name: "Swiss National Bank",
    jurisdiction: "Switzerland · Europe · Central bank",
  },
  {
    name: "Bank of Japan",
    jurisdiction: "Japan · Asia-Pacific · Central bank",
  },
  {
    name: "People's Bank of China",
    jurisdiction: "China · Asia-Pacific · Central bank",
  },
  {
    name: "Reserve Bank of India",
    jurisdiction: "India · Asia-Pacific · Central bank",
  },
  {
    name: "Reserve Bank of Australia",
    jurisdiction: "Australia · Asia-Pacific · Central bank",
  },
  {
    name: "Bank of Canada",
    jurisdiction: "Canada · Americas · Central bank",
  },
  {
    name: "Central Bank of Brazil",
    jurisdiction: "Brazil · Americas · Central bank",
  },
];

const regions = [
  "All",
  "Americas",
  "Europe",
  "Asia-Pacific",
];

const easing = [
  0.22,
  1,
  0.36,
  1,
] as [number, number, number, number];

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: easing,
    },
  },
};

const cardContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
    },
  },
};

export default function InstitutionDirectory() {
  return (
    <section
      id="institution-directory"
      className="
        relative
        overflow-hidden
        bg-white
      "
    >
      {/* =====================================================
          SECTION CONTAINER

          Figma:
          Width: 1439.80px
          Height: 1519.99px
          Content: 1280px
          Left: 80px
      ====================================================== */}

      <div
        className="
          mx-auto
          w-full
          max-w-[1440px]
          px-4
          pb-16
          pt-16
          sm:px-6
          sm:pb-20
          sm:pt-20
          md:px-8
          lg:px-12
          lg:pb-[95px]
          lg:pt-[96px]
          xl:px-[80px]
        "
      >
        <div className="w-full max-w-[1280px]">
          {/* =================================================
              EYEBROW
          ================================================== */}

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.2,
            }}
            variants={fadeUp}
            className="
              font-['IBM_Plex_Sans']
              text-xs
              font-bold
              uppercase
              tracking-[0.06em]
              text-indigo-500
            "
          >
            Institution Directory
          </motion.div>

          {/* =================================================
              HEADING
          ================================================== */}

          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.2,
            }}
            variants={fadeUp}
            className="
              mt-[16px]
              max-w-[1000px]
              font-['IBM_Plex_Sans']
              text-[30px]
              font-bold
              leading-[1.1]
              tracking-[-0.02em]
              text-slate-900
              sm:text-[40px]
              md:text-[44px]
              lg:text-5xl
              lg:leading-[48.72px]
            "
          >
            Find the institution. See the evidence
            <br className="hidden sm:block" />
            behind the policy path.
          </motion.h2>

          {/* =================================================
              DESCRIPTION
          ================================================== */}

          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.2,
            }}
            variants={fadeUp}
            className="
              mt-5
              max-w-[780px]
              font-['IBM_Plex_Sans']
              text-base
              font-normal
              leading-7
              text-gray-600
            "
          >
            The directory below lists institutions from the entity registry
            only — no coverage depth, evidence class or historical claim is
            implied until the Coverage Registry approves it.
          </motion.p>

          {/* =================================================
              FILTER PANEL
          ================================================== */}

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.15,
            }}
            variants={fadeUp}
            className="
              mt-8
              w-full
              rounded-2xl
              bg-violet-50
              px-5
              py-5
              sm:mt-12
              sm:px-7
              sm:py-6
              lg:mt-[76px]
              lg:px-7
            "
          >
            {/* Search heading */}

            <div
              className="
                font-['IBM_Plex_Sans']
                text-xs
                font-bold
                uppercase
                tracking-[0.06em]
                text-gray-600
              "
            >
              Search Institutions
            </div>

            {/* Search input */}

            <div
              className="
                mt-2
                w-full
                max-w-[384px]
              "
            >
              <div
                className="
                  flex
                  h-[48px]
                  w-full
                  items-center
                  rounded-lg
                  bg-white
                  px-4
                  outline
                  outline-1
                  outline-offset-[-1px]
                  outline-slate-900/20
                "
              >
                <input
                  type="text"
                  placeholder="Search by institution or jurisdiction…"
                  aria-label="Search by institution or jurisdiction"
                  className="
                    w-full
                    bg-transparent
                    font-['IBM_Plex_Sans']
                    text-base
                    font-normal
                    text-slate-900
                    outline-none
                    placeholder:text-neutral-500
                  "
                />
              </div>
            </div>

            {/* Region heading */}

            <div
              className="
                mt-4
                font-['IBM_Plex_Sans']
                text-xs
                font-bold
                uppercase
                tracking-[0.06em]
                text-gray-600
              "
            >
              Region / Jurisdiction
            </div>

            {/* Region filters */}

            <div
              className="
                mt-2.5
                flex
                flex-wrap
                gap-2.5
              "
            >
              {regions.map((region, index) => {
                const active = index === 0;

                return (
                  <button
                    key={region}
                    type="button"
                    className={`
                      rounded-full
                      px-4
                      py-2
                      font-['IBM_Plex_Sans']
                      text-xs
                      font-bold
                      transition-all
                      duration-200
                      ${
                        active
                          ? `
                            bg-indigo-500/10
                            text-indigo-500
                            outline
                            outline-1
                            outline-offset-[-1px]
                            outline-indigo-500/40
                          `
                          : `
                            bg-white
                            text-gray-600
                            outline
                            outline-1
                            outline-offset-[-1px]
                            outline-slate-900/20
                            hover:bg-slate-50
                          `
                      }
                    `}
                  >
                    {region}
                  </button>
                );
              })}
            </div>

            {/* Reset */}

            <button
              type="button"
              className="
                mt-4
                font-['IBM_Plex_Sans']
                text-sm
                font-semibold
                text-indigo-500
                transition-opacity
                hover:opacity-70
              "
            >
              Reset filters
            </button>
          </motion.div>

          {/* =================================================
              RESULT COUNT
          ================================================== */}

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.2,
            }}
            variants={fadeUp}
            className="
              mt-5
              font-['IBM_Plex_Sans']
              text-sm
              font-normal
              text-gray-600
            "
          >
            10 of 10 registry institutions shown
          </motion.div>

          {/* =================================================
              INSTITUTION GRID
          ================================================== */}

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.08,
            }}
            variants={cardContainer}
            className="
              mt-8
              grid
              grid-cols-1
              gap-4
              sm:grid-cols-2
              lg:grid-cols-3
              xl:grid-cols-4
            "
          >
            {institutions.map((institution, index) => (
              <motion.article
                key={institution.name}
                variants={{
                  hidden: {
                    opacity: 0,
                    y: 25,
                  },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.5,
                      ease: easing,
                    },
                  },
                }}
                className="
                  min-h-[246px]
                  rounded-2xl
                  p-5
                  outline
                  outline-1
                  outline-offset-[-1px]
                  outline-slate-900/10
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:outline-slate-900/20
                "
              >
                {/* Institution name */}

                <div
                  className="
                    font-['IBM_Plex_Sans']
                    text-base
                    font-bold
                    leading-6
                    text-slate-900
                  "
                >
                  {institution.name}
                </div>

                {/* Jurisdiction */}

                <div
                  className="
                    mt-1
                    pb-1
                    font-['IBM_Plex_Sans']
                    text-xs
                    font-normal
                    leading-5
                    text-gray-600
                  "
                >
                  {institution.jurisdiction}
                </div>

                {/* Coverage status */}

                <div
                  className="
                    mt-2
                    inline-flex
                    rounded-full
                    bg-violet-50
                    px-3
                    py-[4.8px]
                    outline
                    outline-1
                    outline-offset-[-1px]
                    outline-slate-900/10
                  "
                >
                  <span
                    className="
                      font-['IBM_Plex_Sans']
                      text-xs
                      font-bold
                      leading-4
                      text-gray-600
                    "
                  >
                    Coverage pending registry approval
                  </span>
                </div>

                {/* Divider */}

                <div
                  className="
                    mt-4
                    border-t-[0.8px]
                    border-slate-900/10
                    pt-4
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
                    No institution enters public coverage until the Coverage
                    Registry and Source Registry confirm evidence classes,
                    rights and operational readiness.
                  </p>
                </div>
              </motion.article>
            ))}

            {/* =================================================
                FINAL IMAGE

                Figma:
                x = 730px
                width = 630px
                height = 240px
                spans columns 3 + 4
            ================================================== */}

            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  y: 25,
                },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.65,
                    ease: easing,
                  },
                },
              }}
              className="
                relative
                min-h-[240px]
                overflow-hidden
                rounded-2xl
                outline
                outline-1
                outline-offset-[-1px]
                outline-slate-900/10
                sm:col-span-2
                lg:col-span-2
              "
            >
              <Image
                src="/images/markets/central-banks/image.png"
                alt="Central bank research and policy discussion"
                fill
                sizes="(max-width: 639px) 100vw, (max-width: 1023px) 100vw, 630px"
                className="
                  object-cover
                  object-center
                  transition-transform
                  duration-700
                  hover:scale-[1.025]
                "
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}