import Image from "next/image";
import Link from "next/link";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { SectionEyebrow, SectionHeading } from "../alerts/shared";

const steps = [
  { title: "Research question", body: "A question worth watching sits inside a research view." },
  { title: "Defined watch", body: "Monitoring attaches that question to a source or evidence set." },
  { title: "Observed evidence change", body: "A new, revised or corrected source is identified." },
  { title: "Inspect", body: "The change is shown against the original — what differs, and how." },
];

export default function MonitoringHandoffSection() {
  return (
    <section className="bg-ink py-16 sm:py-20 lg:py-[88px]">
      <Container>
        <Reveal>
          <SectionEyebrow tone="amber">Monitoring Handoff</SectionEyebrow>
        </Reveal>
        <Reveal delay={0.1}>
          <SectionHeading inverted className="max-w-[820px]">
            Monitoring keeps a research view connected to relevant evidence;
            Change Detection explains observed differences.
          </SectionHeading>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-5 max-w-[780px] text-base leading-7 text-white/70">
            Each step stays visible and owned by one capability — detection never
            quietly configures a watch, and monitoring never invents an
            explanation.
          </p>
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-2.5 sm:mt-12 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
          <ol className="contents">
            {steps.map((step, index) => (
              <Reveal
                as="li"
                key={step.title}
                delay={0.05 * (index + 2)}
                className="rounded-2xl border border-white/10 bg-white/5 p-5"
              >
                <span className="inline-block rounded-full bg-indigo-500/10 px-2 py-0.5 text-xs font-bold tracking-wide text-indigo-300">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3.5 text-base font-bold text-white">{step.title}</h3>
                <p className="mt-2 text-sm leading-5 text-white/60">{step.body}</p>
              </Reveal>
            ))}
          </ol>
          <Reveal
            delay={0.3}
            className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl border border-white/10 bg-white/5 sm:col-span-2 sm:aspect-[16/7] lg:col-span-4 lg:aspect-[16/5] xl:col-span-1 xl:aspect-auto xl:min-h-[177px]"
          >
            <Image
              src="/images/product/change-detection/change-detection-monitoring-meeting.webp"
              alt="Two colleagues in discussion across a wooden meeting table"
              fill
              sizes="(min-width: 1280px) 258px, 100vw"
              className="object-cover"
            />
          </Reveal>
        </div>

        <Link
          href="/product/monitoring"
          className="mt-8 inline-block text-sm font-semibold text-indigo-300 transition-colors hover:text-white"
        >
          Explore Monitoring →
        </Link>
      </Container>
    </section>
  );
}
