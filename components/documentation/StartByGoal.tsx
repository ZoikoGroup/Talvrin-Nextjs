"use client";

import Image from "next/image";

type GoalCardProps = {
  title: string;
  description: React.ReactNode;
  link?: string;
  href?: string;
  notice?: React.ReactNode;
};

function GoalCard({
  title,
  description,
  link,
  href = "#",
  notice,
}: GoalCardProps) {
  return (
    <article className="flex h-full w-full min-w-0 flex-col items-start gap-3 rounded-2xl bg-white px-5 py-6 outline outline-1 outline-offset-[-1px] outline-slate-900/10">
      <h3 className="m-0 w-full text-base font-bold leading-5 text-slate-900 [font-family:'IBM_Plex_Sans',sans-serif]">
        {title}
      </h3>

      <div className="w-full">
        <p className="m-0 w-full text-sm font-normal leading-5 text-gray-600 [font-family:'IBM_Plex_Sans',sans-serif]">
          {description}
        </p>
      </div>

      {notice && (
        <div className="w-full">
          <p className="m-0 w-full text-xs font-normal leading-5 text-yellow-800 [font-family:'IBM_Plex_Sans',sans-serif]">
            {notice}
          </p>
        </div>
      )}

      {link && (
        <a
          href={href}
          className="inline-flex items-center text-sm font-semibold leading-5 text-indigo-500 transition-colors duration-200 hover:text-indigo-700 [font-family:'IBM_Plex_Sans',sans-serif]"
        >
          {link}
          <span className="ml-1">→</span>
        </a>
      )}
    </article>
  );
}

function DocumentationImage({
  priority = false,
}: {
  priority?: boolean;
}) {
  return (
    <div className="relative h-[280px] w-full overflow-hidden rounded-2xl bg-white outline outline-1 outline-offset-[-1px] outline-slate-900/10 sm:h-[340px] lg:h-[384px]">
      <Image
        src="/images/resources/documentation/image.png"
        alt="Talvrin research workflow"
        fill
        priority={priority}
        sizes="(max-width: 639px) calc(100vw - 40px), (max-width: 1023px) calc(100vw - 64px), (max-width: 1279px) 40vw, 288px"
        className="object-cover object-center"
      />
    </div>
  );
}

export default function StartByGoal() {
  return (
    <section
      id="start-by-goal"
      className="w-full overflow-hidden bg-violet-50"
    >
      <div className="mx-auto w-full max-w-[1440px] px-5 py-12 sm:px-8 sm:py-16 lg:px-10 lg:py-20 xl:px-8 2xl:px-[112px]">
        <div className="mx-auto w-full max-w-[1200px]">
          <span className="text-xs font-bold tracking-wide text-indigo-500 [font-family:'IBM_Plex_Sans',sans-serif]">
            START BY GOAL
          </span>

          <div className="mt-3 w-full max-w-[760px]">
            <h2 className="m-0 text-[28px] font-bold leading-9 tracking-[-0.015em] text-slate-900 [font-family:'IBM_Plex_Sans',sans-serif] sm:text-[34px] sm:leading-10 lg:text-4xl lg:leading-10">
              Find documentation by what you're trying
              <br className="hidden sm:block" /> to do.
            </h2>
          </div>

          <div className="mt-4 w-full max-w-[720px]">
            <p className="m-0 text-base font-normal leading-6 text-gray-600 [font-family:'IBM_Plex_Sans',sans-serif]">
              A dedicated Getting Started guide isn't published on this build
              yet — the goals below cover the same first-task ground and route
              to the real, current product pages that explain them.
            </p>
          </div>

          {/* DESKTOP LAYOUT */}
          <div className="mt-10 hidden xl:grid xl:grid-cols-[minmax(0,1fr)_288px] xl:items-start xl:gap-x-[17px] 2xl:mt-12">
            {/* SIX CARDS */}
            <div className="grid min-w-0 grid-cols-3 items-stretch gap-x-4 gap-y-6 xl:auto-rows-fr 2xl:gap-x-[17px] 2xl:gap-y-8">
              <GoalCard
                title="Learn the research workflow"
                description={
                  <>
                    Ask → Discover → Inspect →
                    <br />
                    Understand → Build → Monitor →
                    <br />
                    Reassess — the shape every Talvrin
                    <br />
                    research task follows.
                  </>
                }
                link="See how Talvrin works"
                href="#how-talvrin-works"
              />

              <GoalCard
                title="Understand evidence"
                description={
                  <>
                    Source identity, timing, jurisdiction,
                    <br />
                    version, rights and access, and how
                    <br />
                    evidence relates to what you see on
                    <br />
                    screen.
                  </>
                }
                link="Explore evidence"
                href="#evidence"
              />

              <GoalCard
                title="Monitor what changes"
                description={
                  <>
                    How research views stay connected
                    <br />
                    to evidence, and how meaningful
                    <br />
                    changes get reviewed rather than
                    <br />
                    pushed as noise.
                  </>
                }
                link="See monitoring & alerts"
                href="#monitoring"
              />

              <GoalCard
                title="Manage your workspace or account"
                description={
                  <>
                    Roles, permissions and workspace
                    <br />
                    settings — shown only once approved
                    <br />
                    guidance exists for your account type.
                  </>
                }
                notice={
                  <>
                    Account and workspace guidance is not yet
                    <br />
                    published on this build.
                  </>
                }
              />

              <GoalCard
                title="Resolve a problem"
                description={
                  <>
                    Known failure, permission,
                    <br />
                    unavailable and stale states, with a
                    <br />
                    safe path to support if self-service
                    <br />
                    doesn't resolve it.
                  </>
                }
                link="Go to troubleshooting"
                href="#troubleshooting"
              />

              <GoalCard
                title="Use AI assistance responsibly"
                description={
                  <>
                    What AI can help with inside Talvrin,
                    <br />
                    and why generated output is never
                    <br />
                    treated as authoritative evidence.
                  </>
                }
                link="Read the AI boundary"
                href="#ai-boundary"
              />
            </div>

            {/* IMAGE IN AN INDEPENDENT COLUMN */}
            <div className="min-w-0">
              <DocumentationImage priority />
            </div>
          </div>

          {/* TABLET AND MOBILE LAYOUT */}
          <div className="mt-8 grid w-full grid-cols-1 items-stretch gap-4 sm:mt-10 sm:grid-cols-2 lg:gap-5 xl:hidden">
            <GoalCard
              title="Learn the research workflow"
              description="Ask → Discover → Inspect → Understand → Build → Monitor → Reassess — the shape every Talvrin research task follows."
              link="See how Talvrin works"
              href="#how-talvrin-works"
            />

            <GoalCard
              title="Understand evidence"
              description="Source identity, timing, jurisdiction, version, rights and access, and how evidence relates to what you see on screen."
              link="Explore evidence"
              href="#evidence"
            />

            <GoalCard
              title="Monitor what changes"
              description="How research views stay connected to evidence, and how meaningful changes get reviewed rather than pushed as noise."
              link="See monitoring & alerts"
              href="#monitoring"
            />

            <div className="sm:col-span-2">
              <DocumentationImage />
            </div>

            <GoalCard
              title="Manage your workspace or account"
              description="Roles, permissions and workspace settings — shown only once approved guidance exists for your account type."
              notice="Account and workspace guidance is not yet published on this build."
            />

            <GoalCard
              title="Resolve a problem"
              description="Known failure, permission, unavailable and stale states, with a safe path to support if self-service doesn't resolve it."
              link="Go to troubleshooting"
              href="#troubleshooting"
            />

            <GoalCard
              title="Use AI assistance responsibly"
              description="What AI can help with inside Talvrin, and why generated output is never treated as authoritative evidence."
              link="Read the AI boundary"
              href="#ai-boundary"
            />
          </div>
        </div>
      </div>
    </section>
  );
}