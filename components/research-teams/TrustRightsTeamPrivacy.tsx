"use client";

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

const trustItems = [
  {
    title: "Evidence provenance",
    description: (
      <>
        Important outputs can be traced to
        <br className="hidden lg:block" />
        supporting material.
      </>
    ),
  },

  {
    title: "Data rights",
    description: (
      <>
        Licensing and permitted-use
        <br className="hidden lg:block" />
        constraints are respected — a shared
        <br className="hidden lg:block" />
        object never bypasses entitlement.
      </>
    ),
  },

  {
    title: "Team access truth",
    description: (
      <>
        Talvrin does not claim every team
        <br className="hidden lg:block" />
        member can access the same content
        <br className="hidden lg:block" />
        unless entitlement behavior is
        <br className="hidden lg:block" />
        approved.
      </>
    ),
  },

  {
    title: "Regional governance",
    description: (
      <>
        Jurisdiction-sensitive execution and
        <br className="hidden lg:block" />
        data controls where claimed.
      </>
    ),
  },

  {
    title: "Privacy",
    description: (
      <>
        Research topics, sources, and notes
        <br className="hidden lg:block" />
        are treated as potentially sensitive;
        <br className="hidden lg:block" />
        analytics exclude raw research
        <br className="hidden lg:block" />
        content by default.
      </>
    ),
  },

  {
    title: "AI governance",
    description: (
      <>
        Generated interpretation stays
        <br className="hidden lg:block" />
        subordinate to evidence and policy.
      </>
    ),
  },
];

/* =========================================================
   TRUST ITEM
========================================================= */

type TrustItemProps = {
  title: string;
  description: React.ReactNode;
  index: number;
};

function TrustItem({
  title,
  description,
  index,
}: TrustItemProps) {
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
        delay: index * 0.07,
      }}
      className="
        self-stretch
        flex
        flex-col
        justify-start
        items-start
        gap-2
      "
    >
      {/* INDIGO LINE */}

      <div
        className="
          w-7
          h-0.5
          bg-indigo-500
        "
      />

      {/* TITLE */}

      <div
        className="
          self-stretch
          pt-1.5
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
            text-base
            font-bold
            font-['IBM_Plex_Sans']
            leading-6
          "
        >
          {title}
        </h3>
      </div>

      {/* DESCRIPTION */}

      <div
        className="
          self-stretch
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
            text-sm
            font-normal
            font-['IBM_Plex_Sans']
            leading-5
          "
        >
          {description}
        </p>
      </div>
    </motion.div>
  );
}

/* =========================================================
   MAIN COMPONENT
========================================================= */

export default function TrustRightsTeamPrivacy() {
  return (
    <section
      className="
        relative
        w-full
        bg-white
        overflow-hidden
      "
    >
      {/* ===================================================
          MAIN CONTAINER
      =================================================== */}

      <div
        className="
          relative
          w-full
          max-w-[1440px]
          min-h-[696.41px]
          mx-auto
          px-6
          sm:px-8
          lg:px-0
          py-20
          lg:py-0
        "
      >
        {/* =================================================
            CONTENT WRAPPER
        ================================================= */}

        <div
          className="
            w-full
            lg:w-[1280px]
            lg:max-w-[1320px]
            lg:left-[80px]
            lg:top-[96.19px]
            lg:absolute
            flex
            flex-col
            justify-start
            items-start
            gap-3
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
              self-stretch
              flex
              flex-col
              justify-start
              items-start
            "
          >
            <div
              className="
                self-stretch
                text-yellow-600
                text-xs
                font-bold
                font-['IBM_Plex_Sans']
                tracking-wide
              "
            >
              TRUST, RIGHTS &amp; TEAM PRIVACY
            </div>
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
              lg:w-[760px]
              lg:max-w-[760px]
              flex
              flex-col
              justify-start
              items-start
            "
          >
            <h2
              className="
                text-slate-900
                text-[32px]
                sm:text-[40px]
                lg:text-5xl
                font-bold
                font-['IBM_Plex_Sans']
                leading-[1.08]
                lg:leading-[48.72px]
              "
            >
              Shared evidence never bypasses
              <br className="hidden lg:block" />
              rights or entitlements.
            </h2>
          </motion.div>

          {/* =================================================
              DESCRIPTION
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
              lg:w-[780px]
              lg:max-w-[780px]
              pt-2
              flex
              flex-col
              justify-start
              items-start
            "
          >
            <p
              className="
                text-gray-600
                text-sm
                sm:text-base
                font-normal
                font-['IBM_Plex_Sans']
                leading-6
                lg:leading-7
              "
            >
              Research topics, sources, notes, and team interests can be
              sensitive organizational information.
              <br className="hidden lg:block" />
              Analytics do not capture raw research content by default.
            </p>
          </motion.div>

          {/* =================================================
              TRUST ITEMS
          ================================================= */}

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
              self-stretch
              pt-9
              grid
              grid-cols-1
              sm:grid-cols-2
              lg:grid-cols-3
              gap-x-10
              gap-y-10
            "
          >
            {trustItems.map((item, index) => (
              <TrustItem
                key={item.title}
                title={item.title}
                description={item.description}
                index={index}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}