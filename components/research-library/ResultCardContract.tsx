"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const contractItems = [
  {
    number: "01",
    title: "Category",
    description: "Approved taxonomy label.",
  },
  {
    number: "02",
    title: "Headline",
    description: "Specific, descriptive, non-clickbait.",
  },
  {
    number: "03",
    title: "Answer-first summary",
    description: "One concise paragraph that stands alone.",
  },
  {
    number: "04",
    title: "Author / editor",
    description: "Named editorial accountability where appropriate.",
  },
  {
    number: "05",
    title: "Published / updated date",
    description: "Both where material; never a cosmetic timestamp.",
  },
  {
    number: "06",
    title: "Jurisdiction / market",
    description: "Explicit when relevant.",
  },
  {
    number: "07",
    title: "Sources",
    description: "Primary or high-authority sources, subject to rights.",
  },
  {
    number: "08",
    title: "Canonical URL",
    description: "Stable, descriptive, indexable item URL.",
  },
  {
    number: "09",
    title: "Status",
    description:
      "Published / updated / corrected / archived — governed vocabulary.",
  },
  {
    number: "10",
    title: "Open action",
    description: "“Read research,” never a generic “Learn more.”",
  },
];

export default function ResultCardContract() {
  return (
    <section
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
          max-w-[1280px]
          px-5
          py-20
          sm:px-7
          sm:py-24
          lg:px-0
          lg:py-[96.37px]
        "
      >
        {/* ============================================================
            SECTION HEADER
        ============================================================ */}

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
            amount: 0.25,
          }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            flex
            w-full
            flex-col
            items-start
          "
        >
          {/* Eyebrow */}

          <div className="w-full">
            <span
              className="
                font-['IBM_Plex_Sans']
                text-xs
                font-bold
                uppercase
                leading-4
                tracking-[0.08em]
                text-indigo-500
              "
            >
              Result Card Contract
            </span>
          </div>

          {/* Heading */}

          <div
            className="
              w-full
              max-w-[780px]
              pt-5
            "
          >
            <h2
              className="
                font-['IBM_Plex_Sans']
                text-[38px]
                font-bold
                leading-[1.08]
                tracking-[-0.025em]
                text-slate-900
                sm:text-[44px]
                sm:leading-[48.72px]
                lg:text-5xl
              "
            >
              Enough text on the card to judge
              <br className="hidden sm:block" />
              relevance — no magazine grid.
            </h2>
          </div>

          {/* Description */}

          <div
            className="
              w-full
              max-w-[800px]
              pt-2
            "
          >
            <p
              className="
                font-['IBM_Plex_Sans']
                text-base
                font-normal
                leading-7
                text-gray-600
              "
            >
              The library is a retrieval surface. Every card carries the
              same required fields below in a restrained list layout, never
              compressed into illegible badges.
            </p>
          </div>
        </motion.div>

        {/* ============================================================
            CONTENT
        ============================================================ */}

        <div
          className="
            mt-10
            grid
            w-full
            grid-cols-1
            gap-8
            lg:grid-cols-[491px_minmax(0,1fr)]
            lg:gap-[53px]
          "
        >
          {/* ==========================================================
              IMAGE
          ========================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: -30,
              scale: 0.98,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
              scale: 1,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              relative
              h-[384px]
              w-full
              overflow-hidden
              rounded-2xl
              bg-slate-900
              sm:h-[430px]
              lg:h-[384px]
            "
          >
            <Image
              src="/images/research/research-library/image2.png"
              alt="Research card contract"
              fill
              priority
              sizes="(max-width: 639px) 100vw, (max-width: 1023px) 100vw, 491px"
              className="
                object-cover
                object-center
              "
            />
          </motion.div>

          {/* ==========================================================
              CONTRACT LIST
          ========================================================== */}

          <div
            className="
              grid
              w-full
              grid-cols-1
              gap-x-5
              lg:grid-cols-2
              lg:grid-rows-5
            "
          >
            {contractItems.map((item, index) => (
              <ContractItem
                key={item.number}
                item={item}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ==================================================================
   CONTRACT ITEM
================================================================== */

type ContractItemProps = {
  item: {
    number: string;
    title: string;
    description: string;
  };
  index: number;
};

function ContractItem({ item, index }: ContractItemProps) {
  return (
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
        duration: 0.5,
        delay: index * 0.04,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="
        flex
        min-h-[76px]
        w-full
        flex-col
        items-start
        gap-1
        border-b
        border-slate-900/10
        py-3.5
      "
    >
      {/* ==========================================================
          NUMBER + TITLE
      ========================================================== */}

      <div
        className="
          flex
          w-full
          items-center
          gap-2
        "
      >
        <span
          className="
            shrink-0
            font-['IBM_Plex_Sans']
            text-xs
            font-bold
            leading-4
            text-yellow-600
          "
        >
          {item.number}
        </span>

        <h3
          className="
            font-['IBM_Plex_Sans']
            text-base
            font-bold
            leading-5
            text-slate-900
          "
        >
          {item.title}
        </h3>
      </div>

      {/* ==========================================================
          DESCRIPTION
      ========================================================== */}

      <p
        className="
          w-full
          font-['IBM_Plex_Sans']
          text-xs
          font-normal
          leading-5
          text-gray-600
        "
      >
        {item.description}
      </p>
    </motion.div>
  );
}