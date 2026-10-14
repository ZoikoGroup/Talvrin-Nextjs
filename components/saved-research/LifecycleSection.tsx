import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionEyebrow, SectionHeading, SectionLede } from "./shared";

const lifecycleItems = [
  {
    badge: "AS SAVED",
    badgeColor: "text-[#6c5ce7] border-[#6c5ce7]/30 bg-[#6c5ce7]/5",
    desc: "The research view and its evidence at the time it was preserved.",
    detail: "Carries an explicit as-of date and source version.",
  },
  {
    badge: "CURRENT AVAILABLE",
    badgeColor: "text-[#63a876] border-[#63a876]/30 bg-[#63a876]/5",
    desc: "What is known now from the same sources, if accessible.",
    detail: "Shown distinct from the saved state, never merged.",
  },
  {
    badge: "SOURCE REVISED",
    badgeColor: "text-[#b98132] border-[#b98132]/30 bg-[#b98132]/5",
    desc: "The underlying source has changed since the save.",
    detail: "Earlier version remains inspectable alongside the revision.",
  },
  {
    badge: "SOURCE WITHDRAWN",
    badgeColor: "text-[#a84242] border-[#a84242]/30 bg-[#a84242]/5",
    desc: "Source access has been revoked or the source removed.",
    detail: "Protected content hidden; safe explanatory metadata only.",
  },
  {
    badge: "ACCESS CHANGED",
    badgeColor: "text-[#5d5a72] border-[#5d5a72]/30 bg-[#5d5a72]/5",
    desc: "Permissions on the object or a referenced source changed.",
    detail: "User sees a safe limitation notice, not a broken error.",
  },
];

export default function LifecycleSection() {
  return (
    <section className="bg-[#f6f5fb] py-16 sm:py-20 lg:py-24">
      <Container>
        <Reveal>
          <SectionEyebrow tone="violet">LIFECYCLE</SectionEyebrow>
          <SectionHeading>As saved → current available → reassess.</SectionHeading>
          <SectionLede>
            Every saved state is classified explicitly against current evidence. A revised source is never folded into history unnoticed, and a withdrawn source is never treated as settled.
          </SectionLede>
        </Reveal>

        {/* Lifecycle Table / Rows */}
        <Reveal delay={0.15} className="mt-10 divide-y divide-[#5d5a72]/15 border-y border-[#5d5a72]/15">
          {lifecycleItems.map((item) => (
            <div
              key={item.badge}
              className="flex flex-col gap-4 py-5 sm:flex-row sm:items-center sm:justify-between lg:gap-8"
            >
              {/* Badge column */}
              <div className="w-full sm:w-[200px] lg:w-[220px] shrink-0">
                <span
                  className={`inline-block rounded-md border px-3 py-1 text-xs font-bold tracking-wider ${item.badgeColor}`}
                >
                  {item.badge}
                </span>
              </div>

              {/* Description column */}
              <div className="flex-1 text-[15px] text-[#5d5a72]">
                {item.desc}
              </div>

              {/* Detail column */}
              <div className="w-full sm:w-[320px] lg:w-[420px] text-left sm:text-right text-sm font-semibold text-[#171335]">
                {item.detail}
              </div>
            </div>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
