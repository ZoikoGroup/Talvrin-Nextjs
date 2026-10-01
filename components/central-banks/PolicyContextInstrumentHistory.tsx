"use client";

import { motion } from "framer-motion";

const items = [
  {
    title: "Institution-specific naming",
    description: (
      <>
        Instrument names and units come
        <br />
        directly from the institution — no
        <br />
        forced generic &quot;rate&quot; field.
      </>
    ),
  },
  {
    title: "Source & frequency disclosure",
    description: (
      <>
        Any historical series discloses the
        <br />
        data/source provider, frequency
        <br />
        and effective-date semantics.
      </>
    ),
  },
  {
    title: "Concurrent instruments",
    description: (
      <>
        Multiple relevant tools are shown as
        <br />
        separate labeled series, never
        <br />
        collapsed into one without
        <br />
        governance.
      </>
    ),
  },
  {
    title: "Accessible alternative",
    description: (
      <>
        Any chart requires an accessible
        <br />
        table alternative — values remain
        <br />
        inspectable without hover.
      </>
    ),
  },
  {
    title: "No predictive framing",
    description: (
      <>
        Historical context may support
        <br />
        research but never implies that past
        <br />
        policy mechanically predicts future
        <br />
        decisions.
      </>
    ),
  },
];

export default function PolicyContextInstrumentHistory() {
  return (
    <section className="w-full bg-white">
      <div
        className="
          relative
          mx-auto
          w-full
          max-w-[1439.8px]
          bg-white
        "
      >
        <div
          className="
            relative
            mx-auto
            w-full
            max-w-[1280px]
            px-6
            py-16

            sm:px-8

            lg:h-[606.41px]
            lg:px-0
            lg:py-0
          "
        >
          {/* =====================================================
              SECTION CONTENT
          ====================================================== */}

          <div
            className="
              flex
              w-full
              flex-col
              items-start
              gap-3

              lg:absolute
              lg:left-0
              lg:top-[96.43px]
              lg:w-[1280px]
            "
          >
            {/* =================================================
                EYEBROW
            ================================================== */}

            <motion.div
              initial={{
                opacity: 0,
                y: 12,
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
                duration: 0.5,
              }}
              className="
                w-full
                font-['IBM_Plex_Sans']
                text-xs
                font-bold
                tracking-wide
                text-yellow-600
              "
            >
              POLICY CONTEXT &amp; INSTRUMENT HISTORY
            </motion.div>

            {/* =================================================
                HEADING
            ================================================== */}

            <motion.h2
              initial={{
                opacity: 0,
                y: 15,
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
                delay: 0.05,
              }}
              className="
                w-full
                font-['IBM_Plex_Sans']
                text-[38px]
                font-bold
                leading-[1.08]
                tracking-[-0.02em]
                text-slate-900

                sm:text-5xl
                sm:leading-[48.72px]

                lg:w-[760px]
              "
            >
              Institution-specific instruments.
              <br />
              Never one generic &quot;policy rate.&quot;
            </motion.h2>

            {/* =================================================
                DESCRIPTION
            ================================================== */}

            <motion.div
              initial={{
                opacity: 0,
                y: 12,
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
                duration: 0.5,
                delay: 0.1,
              }}
              className="
                w-full
                pt-2
                pb-7
                font-['IBM_Plex_Sans']
                text-base
                font-normal
                leading-7
                text-gray-600

                lg:w-[780px]
              "
            >
              Central banks use different instruments and frameworks. Forcing
              them into one field would mislead
              <br className="hidden lg:block" />
              rather than simplify.
            </motion.div>

            {/* =================================================
                FEATURE PANEL
            ================================================== */}

            <motion.div
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
                amount: 0.15,
              }}
              transition={{
                duration: 0.6,
                delay: 0.15,
              }}
              className="
                w-full
                rounded-2xl
                bg-violet-50
                p-6

                sm:p-8

                lg:w-[1280px]
                lg:p-8
              "
            >
              <div
                className="
                  grid
                  w-full
                  grid-cols-1
                  gap-8

                  sm:grid-cols-2

                  lg:grid-cols-5
                  lg:items-start
                  lg:justify-center
                  lg:gap-7
                "
              >
                {items.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{
                      opacity: 0,
                      y: 15,
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
                      duration: 0.45,
                      delay: 0.2 + index * 0.06,
                    }}
                    className="
                      flex
                      w-full
                      flex-col
                      items-start
                      gap-[5px]

                      lg:w-[224px]
                    "
                  >
                    {/* TITLE */}

                    <div
                      className="
                        w-full
                        font-['IBM_Plex_Sans']
                        text-base
                        font-bold
                        leading-5
                        text-slate-900
                      "
                    >
                      {item.title}
                    </div>

                    {/* DESCRIPTION */}

                    <div
                      className="
                        w-full
                        font-['IBM_Plex_Sans']
                        text-sm
                        font-normal
                        leading-5
                        text-gray-600
                      "
                    >
                      {item.description}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}