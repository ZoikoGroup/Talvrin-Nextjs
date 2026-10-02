import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionEyebrow, SectionHeading } from "../global-markets/shared";

const checklist = [
  {
    title: "Define the question",
    body: "Write one sentence describing what you are trying to understand, with market, entity, or event context where relevant.",
    done: "Done when: you can restate the research question.",
  },
  {
    title: "Identify source classes",
    body: "List the kinds of evidence likely to matter: filings, economic releases, policy decisions, central-bank communications, market data, transcripts, or other governed sources.",
    done: "Done when: you know not all sources carry equal authority.",
  },
  {
    title: "Inspect timing and scope",
    body: "Check publication time vs. effective period, jurisdiction, version, and supersession.",
    done: "Done when: you can identify which date answers which question.",
  },
  {
    title: "Separate evidence from interpretation",
    body: "Mark what comes from the source, what Talvrin normalizes, what AI assists, and what you conclude.",
    done: "Done when: you can explain the origin of each layer.",
  },
  {
    title: "Build a view",
    body: "Summarize the current evidence and assumptions without claiming certainty.",
    done: "Done when: the view is traceable and reviewable.",
  },
  {
    title: "Decide what to monitor",
    body: "Identify the evidence or assumptions whose change would matter.",
    done: "Done when: you have a bounded monitoring intent.",
  },
  {
    title: "Reassess",
    body: "When material evidence changes, reopen the source and update the view intentionally.",
    done: "Done when: you understand research is ongoing, not one-shot.",
  },
];

export default function FirstTaskSection() {
  return (
    <section id="first-task" className="scroll-mt-32 bg-white py-20 sm:py-28">
      <Container>
        <Reveal className="max-w-3xl">
          <SectionEyebrow tone="amber">Your First Research Task</SectionEyebrow>
          <SectionHeading>A guided checklist for your first pass.</SectionHeading>
          <p className="mt-3 max-w-[720px] text-base leading-[25.6px] text-slate-600 sm:text-lg">
            This checklist stands on its own — it does not depend on any specific product screen
            being available yet.
          </p>
        </Reveal>

        <Reveal
          delay={0.1}
          className="mt-8 rounded-[14px] border border-ink/10 bg-surface px-[27px] pb-[9px] pt-[9px]"
        >
          <ol className="divide-y divide-ink/8">
            {checklist.map((item, index) => (
              <li key={item.title} className="flex gap-4 py-[22px]">
                <span className="mt-[2px] flex size-[30px] shrink-0 items-center justify-center rounded-full bg-ink text-[13px] font-bold text-white">
                  {index + 1}
                </span>
                <div className="flex flex-col gap-[5px]">
                  <h3 className="text-base font-bold text-ink">{item.title}</h3>
                  <p className="pt-[1px] text-[15px] leading-[24px] text-slate-600">{item.body}</p>
                  <p className="text-[13px] italic leading-[19.5px] text-[#8a8599]">{item.done}</p>
                </div>
              </li>
            ))}
          </ol>
        </Reveal>

        <Reveal delay={0.15} className="pt-2">
          <p className="pt-2 text-[13px] leading-[20.8px] text-[#8a8599]">
            Retention is earned by helping you build a durable research habit — not by streaks,
            pressure, or notification volume.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
