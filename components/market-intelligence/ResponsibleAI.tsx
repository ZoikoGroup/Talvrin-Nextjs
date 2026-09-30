"use client";

import { motion } from "framer-motion";
import Image from "next/image";

type AICard = {
  title: string;
  restricted: string;
};

const aiCards: AICard[] = [
  {
    title: "Source discovery and evidence organization",
    restricted: "The authoritative source",
  },
  {
    title: "Document comparison",
    restricted: "A substitute for checking the source",
  },
  {
    title: "Draft summarization under editorial review",
    restricted:
      "An autonomous named analyst unless that is real",
  },
  {
    title: "Relationship and contradiction surfacing",
    restricted:
      "A buy/sell/hold recommendation engine",
  },
  {
    title: "Research drafting support",
    restricted:
      "A reason to mass-produce generic articles",
  },
  {
    title: "Change identification",
    restricted:
      "A guaranteed materiality judgment",
  },
];

function AICard({
  card,
  index,
}: {
  card: AICard;
  index: number;
}) {
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
        amount: 0.15,
      }}
      transition={{
        duration: 0.45,
        delay: index * 0.05,
        ease: "easeOut",
      }}
      className="
        self-start
        w-full
        min-h-[190px]
        rounded-2xl
        border
        border-slate-900/10
        bg-violet-50
        px-6
        py-6
      "
    >
      {/* Positive */}
      <div className="flex items-start gap-2.5">
        <span
          aria-hidden="true"
          className="
            shrink-0
            pt-[2px]
            font-['Segoe_UI_Symbol']
            text-sm
            leading-5
            text-indigo-500
          "
        >
          ✓
        </span>

        <p
          className="
            font-['IBM_Plex_Sans']
            text-sm
            font-semibold
            leading-5
            text-slate-900
            sm:text-base
            sm:leading-6
          "
        >
          {card.title}
        </p>
      </div>

      {/* Negative */}
      <div className="mt-4 flex items-start gap-2.5">
        <span
          aria-hidden="true"
          className="
            shrink-0
            pt-[2px]
            font-['Segoe_UI_Symbol']
            text-sm
            leading-5
            text-pink-800
          "
        >
          ✕
        </span>

        <p
          className="
            font-['IBM_Plex_Sans']
            text-sm
            font-normal
            leading-5
            text-gray-600
          "
        >
          {card.restricted}
        </p>
      </div>
    </motion.div>
  );
}

export default function ResponsibleAI() {
  return (
    <section className="w-full overflow-hidden bg-white">
      <div
        className="
          mx-auto
          w-full
          max-w-[1277px]
          px-5
          py-20
          sm:px-8
          lg:px-0
          lg:py-[96px]
        "
      >
        {/* =====================================================
            EYEBROW
        ====================================================== */}

        <motion.div
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
            amount: 0.3,
          }}
          transition={{
            duration: 0.5,
          }}
          className="
            font-['IBM_Plex_Sans']
            text-xs
            font-bold
            tracking-[0.07em]
            text-yellow-600
          "
        >
          RESPONSIBLE AI IN PUBLIC RESEARCH
        </motion.div>

        {/* =====================================================
            HEADING
        ====================================================== */}

        <motion.h2
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
            amount: 0.3,
          }}
          transition={{
            duration: 0.55,
            delay: 0.05,
          }}
          className="
            mt-3
            max-w-[1000px]
            font-['IBM_Plex_Sans']
            text-[36px]
            font-bold
            leading-[1.08]
            tracking-[-0.025em]
            text-slate-900
            sm:text-[42px]
            lg:text-5xl
            lg:leading-[48.72px]
          "
        >
          AI may assist the editorial workflow.
          <br className="hidden sm:block" />
          It does not become the evidence.
        </motion.h2>

        {/* =====================================================
            DESKTOP GRID

            4 columns:
            Card 1 | Card 2 | Card 3 | Image
            Card 4 | Card 5 | Card 6 | Image
        ====================================================== */}

        <div
          className="
            mt-10
            grid
            grid-cols-1
            items-start
            gap-4
            sm:grid-cols-2
            lg:mt-[44px]
            lg:grid-cols-4
            lg:gap-[12px]
          "
        >
          {/* CARD 1 */}
          <AICard
            card={aiCards[0]}
            index={0}
          />

          {/* CARD 2 */}
          <AICard
            card={aiCards[1]}
            index={1}
          />

          {/* CARD 3 */}
          <AICard
            card={aiCards[2]}
            index={2}
          />

          {/* IMAGE */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.97,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
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
              relative
              row-span-2
              w-full
              self-start
              overflow-hidden
              rounded-2xl
              border
              border-slate-900/10
              bg-violet-50
              min-h-[280px]
              sm:min-h-[300px]
              lg:h-[396px]
              lg:min-h-0
            "
          >
            <Image
              src="/images/research/market-intelligence/image5.png"
              alt="Editorial team using AI-assisted research tools"
              fill
              priority
              className="object-cover object-center"
              sizes="25vw"
            />
          </motion.div>

          {/* CARD 4 */}
          <AICard
            card={aiCards[3]}
            index={3}
          />

          {/* CARD 5 */}
          <AICard
            card={aiCards[4]}
            index={4}
          />

          {/* CARD 6 */}
          <AICard
            card={aiCards[5]}
            index={5}
          />
        </div>

        {/* =====================================================
            FOOTNOTE
        ====================================================== */}

        <motion.p
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
            amount: 0.25,
          }}
          transition={{
            duration: 0.5,
            delay: 0.15,
          }}
          className="
            mt-4
            max-w-[780px]
            font-['IBM_Plex_Sans']
            text-sm
            font-normal
            leading-6
            text-gray-600
          "
        >
          Generated or model-assisted drafting carries a persistent
          provenance label distinct from source evidence, and never
          becomes the reason to mass-produce generic articles.
        </motion.p>
      </div>
    </section>
  );
}