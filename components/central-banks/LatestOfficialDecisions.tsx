"use client";

import { motion } from "framer-motion";

const easing = [0.22, 1, 0.36, 1] as [
  number,
  number,
  number,
  number
];

const decisionRows = [
  {
    label: "Decision summary",
    text: "A concise factual statement of what the official source announced.",
  },
  {
    label: "Policy instrument(s)",
    text: 'The official instrument names and values that apply to that institution — never a single forced "policy rate" field.',
  },
  {
    label: "Publication vs. effective time",
    text: "Kept separate whenever the source distinguishes them.",
  },
  {
    label: "Primary source",
    text: "Named institution/publisher, document title, publication time and a governed source action.",
  },
  {
    label: "Talvrin summary",
    text: "Clearly labeled interpretation, visually distinct from source evidence.",
  },
  {
    label: "Change state",
    text: "New / updated / corrected / superseded / unchanged, with a traceable evidence timeline where supported.",
  },
];

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 22,
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

export default function LatestOfficialDecisions() {
  return (
    <section
      id="latest-official-decisions"
      className="
        relative
        w-full
        overflow-hidden
        bg-white
      "
    >
      <div
        className="
          mx-auto
          w-full
          max-w-[1440px]
          px-6
          sm:px-8
          lg:px-[80px]
        "
      >
        <div
          className="
            w-full
            max-w-[1280px]
            py-[96px]
            lg:min-h-[1150px]
          "
        >
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
              w-full
              font-['IBM_Plex_Sans']
              text-xs
              font-bold
              uppercase
              tracking-wide
              text-yellow-600
            "
          >
            Latest Official Decisions
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
              mt-[12px]
              w-full
              max-w-[740px]
              font-['IBM_Plex_Sans']
              text-[38px]
              font-bold
              leading-[1.08]
              tracking-[-0.02em]
              text-slate-900
              sm:text-[44px]
              lg:text-5xl
              lg:leading-[48.72px]
            "
          >
            What did the institution actually
            <br className="hidden sm:block" />
            decide?
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
              mt-[20px]
              w-full
              max-w-[740px]
              font-['IBM_Plex_Sans']
              text-base
              font-normal
              leading-7
              text-gray-600
            "
          >
            A concise factual statement of what the official source
            announced — never a predictive or prescriptive framing.
          </motion.p>

          {/* =================================================
              DECISION CARD SHOWS HEADER
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
              mt-[40px]
              grid
              grid-cols-1
              gap-4
              pb-3
              lg:grid-cols-[208px_minmax(0,1fr)]
            "
          >
            <div className="hidden lg:block" />

            <div
              className="
                font-['IBM_Plex_Sans']
                text-xs
                font-bold
                uppercase
                tracking-wide
                text-gray-600
              "
            >
              Decision card shows
            </div>
          </motion.div>

          {/* =================================================
              DECISION ROWS
          ================================================== */}

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.1,
            }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.06,
                },
              },
            }}
            className="w-full"
          >
            {decisionRows.map((row) => (
              <motion.div
                key={row.label}
                variants={{
                  hidden: {
                    opacity: 0,
                    y: 15,
                  },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.45,
                      ease: easing,
                    },
                  },
                }}
                className="
                  grid
                  w-full
                  grid-cols-1
                  gap-4
                  border-b-[0.8px]
                  border-slate-900/10
                  py-4
                  lg:grid-cols-[208px_minmax(0,1fr)]
                "
              >
                {/* Label */}

                <div
                  className="
                    inline-flex
                    min-h-[28px]
                    w-fit
                    items-center
                    justify-center
                    rounded-md
                    bg-violet-50
                    px-4
                    py-1.5
                    outline
                    outline-1
                    outline-offset-[-1px]
                    outline-slate-900/10
                    lg:min-w-[208px]
                  "
                >
                  <span
                    className="
                      whitespace-nowrap
                      text-center
                      font-['IBM_Plex_Sans']
                      text-xs
                      font-bold
                      text-slate-900
                    "
                  >
                    {row.label}
                  </span>
                </div>

                {/* Description */}

                <div
                  className="
                    self-center
                    font-['IBM_Plex_Sans']
                    text-base
                    font-normal
                    leading-6
                    text-slate-700
                  "
                >
                  {row.text}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* =================================================
              COPY RULE
          ================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              y: 25,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.15,
            }}
            transition={{
              duration: 0.65,
              ease: easing,
            }}
            className="
              mt-[72px]
              w-full
              rounded-2xl
              bg-slate-900
              px-6
              py-6
              lg:px-7
            "
          >
            {/* Label */}

            <div
              className="
                font-['IBM_Plex_Sans']
                text-xs
                font-bold
                uppercase
                tracking-wide
                text-yellow-600
              "
            >
              Copy Rule
            </div>

            {/* Rule */}

            <p
              className="
                mt-2
                w-full
                font-['IBM_Plex_Sans']
                text-sm
                font-normal
                leading-6
                text-violet-50/90
                lg:text-base
              "
            >
              The page may explain what the institution officially changed,
              left unchanged, published or clarified. It must not convert
              that evidence into an unqualified &quot;bullish/bearish,&quot;
              &quot;hawkish/dovish,&quot; buy/sell signal or certainty about
              future policy unless the label is an explicitly governed
              methodology or attributed quotation.
            </p>
          </motion.div>

          {/* =================================================
              EMPTY STATE
          ================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              y: 22,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.15,
            }}
            transition={{
              duration: 0.6,
              delay: 0.05,
              ease: easing,
            }}
            className="
              mt-[12px]
              w-full
              rounded-2xl
              bg-violet-50
              px-6
              py-6
              lg:px-7
            "
          >
            <div
              className="
                font-['IBM_Plex_Sans']
                text-base
                font-semibold
                leading-6
                text-slate-700
              "
            >
              There are no published official decisions yet.
            </div>

            <p
              className="
                mt-0
                font-['IBM_Plex_Sans']
                text-sm
                font-normal
                leading-6
                text-gray-600
              "
            >
              Live decision cards will follow this exact contract, with
              AI-assisted content always persistently labeled and visually
              subordinate to the primary source.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}