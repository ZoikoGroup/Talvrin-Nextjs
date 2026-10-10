"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const profileFields = [
  {
    title: "Official name",
    description: (
      <>
        Approved canonical entity name from the registry —
        <br />
        never an ad hoc rebranding.
      </>
    ),
  },
  {
    title: "Institution type",
    description: (
      <>
        Central bank, monetary authority or another
        <br />
        approved class — never a guessed taxonomy.
      </>
    ),
  },
  {
    title: "Mandate / legal basis",
    description: (
      <>
        Summarized only from approved authoritative
        <br />
        source material, with a source link where permitted.
      </>
    ),
  },
  {
    title: "Policy instruments",
    description: (
      <>
        An institution-specific governed list — never an
        <br />
        assumption of one rate or one tool.
      </>
    ),
  },
  {
    title: "Primary source domains",
    description: <>Approved source registry only.</>,
  },
  {
    title: "Limitations",
    description: (
      <>
        Missing document types, latency, historical limits or
        <br />
        jurisdiction-specific constraints shown explicitly
        <br />
        when material.
      </>
    ),
  },
];

const easing = [0.22, 1, 0.36, 1] as [
  number,
  number,
  number,
  number
];

const fieldVariants = {
  hidden: {
    opacity: 0,
    y: 18,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: easing,
    },
  },
};

export default function InstitutionProfileContract() {
  return (
    <section
      id="institution-profile-contract"
      className="
        relative
        w-full
        overflow-hidden
        bg-violet-50
      "
    >
      {/* =====================================================
          1440px FIGMA SECTION
      ====================================================== */}

      <div
        className="
          mx-auto
          w-full
          max-w-[1440px]
          px-4
          sm:px-6
          md:px-8
          lg:px-12
          xl:px-[80px]
        "
      >
        <div
          className="
            w-full
            max-w-[1280px]
            py-14
            sm:py-16
            lg:py-[96px]
          "
        >
          {/* =================================================
              EYEBROW
          ================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              y: 18,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.55,
              ease: easing,
            }}
            className="
              font-['IBM_Plex_Sans']
              text-xs
              font-bold
              uppercase
              tracking-wide
              text-yellow-600
            "
          >
            Institution Profile Contract
          </motion.div>

          {/* =================================================
              HEADING
          ================================================== */}

          <motion.h2
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.6,
              delay: 0.05,
              ease: easing,
            }}
            className="
              mt-[12px]
              w-full
              max-w-[780px]
              font-['IBM_Plex_Sans']
              text-[30px]
              font-bold
              leading-[1.1]
              tracking-[-0.02em]
              text-slate-900
              sm:text-[40px]
              sm:leading-[48.72px]
              lg:text-5xl
            "
          >
            Stable identity, jurisdiction,
            <br />
            mandate and instruments — never a
            <br />
            guessed taxonomy.
          </motion.h2>

          {/* =================================================
              DESCRIPTION
          ================================================== */}

          <motion.p
            initial={{
              opacity: 0,
              y: 18,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.55,
              delay: 0.1,
              ease: easing,
            }}
            className="
              mt-[20px]
              w-full
              max-w-[780px]
              font-['IBM_Plex_Sans']
              text-base
              font-normal
              leading-7
              text-gray-600
            "
          >
            Every institution page follows the same field contract below.
            Bracketed values are populated only from approved registries and
            official sources.
          </motion.p>

          {/* =================================================
              MAIN CONTENT

              EXACT DESKTOP STRUCTURE:

              384px IMAGE
              +
              170px GAP (flexible on tablet/laptop)
              +
              664px INFORMATION

              = 1218px
              within 1280px container
          ================================================== */}

          <div
            className="
              mt-[32px]
              flex
              flex-col
              gap-10
              lg:flex-row
              lg:items-start
              lg:gap-8
              xl:gap-[170px]
            "
          >
            {/* =================================================
                IMAGE — 384 × 384
            ================================================== */}

            <motion.div
              initial={{
                opacity: 0,
                x: -25,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.7,
                ease: easing,
              }}
              className="
                relative
                h-[280px]
                w-full
                shrink-0
                overflow-hidden
                rounded-2xl
                bg-slate-900
                sm:h-[340px]
                sm:w-[340px]
                lg:h-[384px]
                lg:w-[320px]
                xl:w-[384px]
              "
            >
              <Image
                src="/images/markets/central-banks/image1.png"
                alt="Institution research team reviewing policy information"
                fill
                priority={false}
                sizes="384px"
                className="
                  object-cover
                  object-center
                  transition-transform
                  duration-700
                  hover:scale-[1.02]
                "
              />
            </motion.div>

            {/* =================================================
                INFORMATION GRID

                664px wide
                2 COLUMNS
            ================================================== */}

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.15,
              }}
              variants={{
                hidden: {},

                visible: {
                  transition: {
                    staggerChildren: 0.08,
                  },
                },
              }}
              className="
                grid
                w-full
                grid-cols-1
                gap-x-6
                sm:grid-cols-2
                xl:max-w-[664px]
              "
            >
              {profileFields.map((field) => (
                <motion.div
                  key={field.title}
                  variants={fieldVariants}
                  className="
                    min-h-[110px]
                    border-b-[0.8px]
                    border-slate-900/10
                    py-[14px]
                  "
                >
                  {/* Field title */}

                  <div
                    className="
                      font-['IBM_Plex_Sans']
                      text-base
                      font-bold
                      leading-6
                      text-slate-900
                    "
                  >
                    {field.title}
                  </div>

                  {/* Field description */}

                  <div
                    className="
                      mt-1
                      font-['IBM_Plex_Sans']
                      text-xs
                      font-normal
                      leading-5
                      text-gray-600
                    "
                  >
                    {field.description}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}