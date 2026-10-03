import Image from "next/image";
import Link from "next/link";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { LinkButton } from "../ui/Button";

const workflowSteps = ["Question", "Evidence", "Context", "Research View", "Monitoring"];

function StepArrow() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 12.9131 4.91504"
      className="h-[4.9px] w-[12.9px] shrink-0 fill-white/30"
    >
      <path d="M10.0898 0C10.696 0.660807 11.2201 1.16325 11.6621 1.50732C12.1042 1.8514 12.5212 2.10775 12.9131 2.27637V2.58398C12.4619 2.80273 12.0244 3.08187 11.6006 3.42139C11.1768 3.7609 10.6709 4.25879 10.083 4.91504H9.55664C9.98503 3.99902 10.4339 3.29492 10.9033 2.80273H0V2.1123H10.9033C10.557 1.67025 10.3154 1.34212 10.1787 1.12793C10.042 0.913737 9.83919 0.53776 9.57031 0H10.0898V0" />
    </svg>
  );
}

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-ink py-20 sm:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(600px 420px at 16% 8%, rgba(108,92,231,0.2), rgba(108,92,231,0) 65%), radial-gradient(500px 380px at 90% 82%, rgba(185,129,50,0.12), rgba(185,129,50,0) 60%)",
        }}
      />
      <Container className="relative grid grid-cols-1 items-start gap-12 lg:grid-cols-[minmax(0,738px)_minmax(0,386px)] lg:gap-x-[31px]">
        <div>
          <Reveal>
            <p className="text-[13px] font-bold uppercase tracking-[1.17px] text-accent-amber">
              Getting Started
            </p>
          </Reveal>

          <Reveal delay={0.1} className="mt-4">
            <h1 className="text-4xl font-bold leading-[1.08] tracking-[-0.56px] text-white sm:text-5xl lg:text-[56px] lg:leading-[61.6px]">
              Start with the question. Stay connected to the evidence.
            </h1>
          </Reveal>

          <Reveal delay={0.2} className="mt-6">
            <p className="max-w-[720px] text-[19px] leading-[31.35px] text-white/85">
              Talvrin is designed to help you move from a market question to source-linked
              evidence, from evidence to context, from context to a research view, and from that
              view to ongoing monitoring. This guide explains the workflow and the boundaries that
              keep evidence inspectable.
            </p>
          </Reveal>

          <Reveal
            delay={0.3}
            className="mt-6 flex flex-col items-start gap-4 sm:flex-row sm:items-center"
          >
            <LinkButton href="/product/research-workspace" variant="onDark">
              Start the Research Workflow
            </LinkButton>
            <Link
              href="/product/platform-overview"
              className="inline-flex items-center justify-center rounded-lg border-2 border-white/30 px-7 py-[15px] text-sm font-semibold text-white transition-colors duration-300 hover:border-white/60 hover:bg-white/5"
            >
              Explore the Platform
            </Link>
          </Reveal>

          <Reveal delay={0.4} className="mt-4 max-w-[640px] pb-5">
            <p className="text-sm leading-[22.4px] text-white/55">
              Research and intelligence platform. No trade execution. No manufactured investment
              recommendations.
            </p>
          </Reveal>

          <Reveal
            delay={0.5}
            className="flex flex-wrap items-center gap-[6px] border-t border-white/12 pt-[33px]"
          >
            {workflowSteps.map((step, index) => (
              <div key={step} className="flex items-center gap-[6px]">
                <span className="inline-flex items-center rounded-full border border-white/16 bg-white/8 px-[14.8px] py-[8.8px] text-[13px] font-semibold text-white/75">
                  {step}
                </span>
                {index < workflowSteps.length - 1 && <StepArrow />}
              </div>
            ))}
          </Reveal>
        </div>

        <Reveal
          delay={0.2}
          className="relative aspect-[386/585] w-full overflow-hidden rounded-2xl bg-white"
        >
          <Image
            src="/images/getting-started/getting-started-hero-workspace.webp"
            alt="An analyst reviewing research on a workstation display in a bright office"
            fill
            priority
            sizes="(min-width: 1024px) 386px, 100vw"
            className="object-cover"
          />
        </Reveal>
      </Container>
    </section>
  );
}
