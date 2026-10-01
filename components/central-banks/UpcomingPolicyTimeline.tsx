"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const easing = [0.22, 1, 0.36, 1] as [
  number,
  number,
  number,
  number
];

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 24,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: easing,
    },
  },
};

export default function UpcomingPolicyTimeline() {
  return (
    <section
      id="upcoming-policy-timeline"
      className="
        relative
        w-full
        overflow-hidden
        bg-[#151333]
      "
    >
      {/* =====================================================
          MAIN SECTION

          Figma:
          Width  = 1439.80px
          Height = 931.10px
      ====================================================== */}

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
              font-['IBM_Plex_Sans']
              text-xs
              font-bold
              uppercase
              tracking-wide
              text-indigo-500
            "
          >
            Upcoming Policy Timeline
          </motion.div>

          {/* =================================================
              HEADING

              Figma:
              width 780px
              48px
              line-height 48.72px
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
              max-w-[780px]
              font-['IBM_Plex_Sans']
              text-[38px]
              font-bold
              leading-[1.08]
              tracking-[-0.02em]
              text-violet-50
              sm:text-[44px]
              lg:text-5xl
              lg:leading-[48.72px]
            "
          >
            Upcoming policy events — without
            <br className="hidden sm:block" />
            losing timezone or source context.
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
              max-w-[780px]
              font-['IBM_Plex_Sans']
              text-base
              font-normal
              leading-7
              text-violet-50/70
            "
          >
            A research utility, not a countdown trading surface. Every
            scheduled event separates scheduled, publication and effective
            timing and shows an explicit time zone.
          </motion.p>

          {/* =================================================
              IMAGE

              Figma:
              width  = 1280px
              height = 384px
              top    = 309.06px

              The original Figma image is taller than the
              visible container and vertically cropped.
          ================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              y: 30,
              scale: 0.985,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            viewport={{
              once: true,
              amount: 0.15,
            }}
            transition={{
              duration: 0.8,
              ease: easing,
            }}
            className="
              relative
              mt-[38px]
              h-[260px]
              w-full
              overflow-hidden
              rounded-2xl
              bg-violet-50/5
              outline
              outline-1
              outline-offset-[-1px]
              outline-violet-50/10
              sm:h-[320px]
              lg:h-[384px]
            "
          >
            <Image
              src="/images/markets/central-banks/image2.png"
              alt="Policy research team reviewing an upcoming policy timeline"
              fill
              sizes="(max-width: 639px) 100vw, (max-width: 1023px) 100vw, 1280px"
              className="
                object-cover
                object-center
                transition-transform
                duration-1000
                ease-out
                hover:scale-[1.015]
              "
            />
          </motion.div>

          {/* =================================================
              STATUS PANEL

              Figma:
              width  = 1280px
              top    = 691.46px
              padding-left/right = 24px
              padding-top = 40px
              padding-bottom = 24px
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
              mt-[7px]
              w-full
              rounded-2xl
              bg-violet-50/5
              px-6
              pb-6
              pt-10
              outline
              outline-1
              outline-offset-[-1px]
              outline-violet-50/10
            "
          >
            {/* Status label */}

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
              Status
            </div>

            {/* Status title */}

            <div
              className="
                mt-[2px]
                font-['IBM_Plex_Sans']
                text-base
                font-semibold
                leading-6
                text-violet-50
              "
            >
              There are no published policy events yet.
            </div>

            {/* Status description */}

            <div
              className="
                mt-0
                font-['IBM_Plex_Sans']
                text-sm
                font-normal
                leading-6
                text-violet-50/60
              "
            >
              When the calendar goes live, every row will follow this exact
              field contract — never a fabricated date, time or source.
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}