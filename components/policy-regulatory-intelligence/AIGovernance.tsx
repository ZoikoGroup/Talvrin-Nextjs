import Image from "next/image";

const governanceItems = [
  {
    allowed: "Discovering and organizing policy/regulatory evidence",
    restricted: "The authoritative source",
  },
  {
    allowed: "Comparing versions or summarizing consultations",
    restricted: "A replacement for source inspection",
  },
  {
    allowed: "Explaining regulatory language in plain terms",
    restricted: "Legal advice or a compliance determination",
  },
  {
    allowed: "Summarizing lengthy documents under review",
    restricted: "An autonomous named legal analyst unless real",
  },
  {
    allowed: "Organizing cross-jurisdiction research context",
    restricted: "A ruling on whether a rule applies to you",
  },
  {
    allowed: "Flagging what changed between versions",
    restricted: "A guaranteed materiality judgment",
  },
];

function GovernanceCard({
  allowed,
  restricted,
}: {
  allowed: string;
  restricted: string;
}) {
  return (
    <div className="flex h-full w-full min-h-[160px] flex-col rounded-2xl border border-slate-900/10 bg-white p-6">
      {/* Allowed */}
      <div className="flex items-start gap-2.5">
        <span
          aria-hidden="true"
          className="shrink-0 pt-[2px] font-['Segoe_UI_Symbol'] text-sm text-indigo-500"
        >
          ✓
        </span>

        <p className="font-['IBM_Plex_Sans'] text-base font-semibold leading-6 text-slate-900">
          {allowed}
        </p>
      </div>

      {/* Not allowed */}
      <div className="mt-3.5 flex items-start gap-2.5">
        <span
          aria-hidden="true"
          className="shrink-0 pt-[2px] font-['Segoe_UI_Symbol'] text-sm text-pink-800"
        >
          ✕
        </span>

        <p className="font-['IBM_Plex_Sans'] text-sm font-normal leading-5 text-gray-600">
          {restricted}
        </p>
      </div>
    </div>
  );
}

export default function AIGovernance() {
  return (
    <section className="w-full bg-violet-50">
      <div className="mx-auto w-full max-w-[1280px] px-5 py-16 sm:px-8 sm:py-20 lg:px-8 lg:py-24 xl:px-0">
        {/* Header */}
        <div className="w-full">
          <p className="font-['IBM_Plex_Sans'] text-xs font-bold tracking-wide text-yellow-600">
            AI GOVERNANCE
          </p>

          <div className="w-full max-w-[760px] pt-3">
            <h2 className="font-['IBM_Plex_Sans'] text-[36px] font-bold leading-[1.08] tracking-[-0.02em] text-slate-900 sm:text-5xl sm:leading-[48.72px]">
              AI may help organize and explain
              <br className="hidden sm:block" />
              the evidence. It does not become
              <br className="hidden sm:block" />
              the evidence.
            </h2>
          </div>
        </div>

        {/* Main content */}
        <div className="mt-10 flex w-full flex-col gap-4 lg:flex-row lg:items-stretch">
          {/* Cards */}
          <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:w-[calc(100%-336px)] lg:grid-cols-2 xl:grid-cols-3">
            {governanceItems.map((item) => (
              <GovernanceCard
                key={item.allowed}
                allowed={item.allowed}
                restricted={item.restricted}
              />
            ))}
          </div>

          {/* Side Image */}
          <div className="relative w-full overflow-hidden rounded-2xl border border-slate-900/10 bg-white sm:min-h-[320px] lg:w-[320px] lg:shrink-0">
            <div className="relative h-full min-h-[320px] w-full">
              <Image
                src="/images/research/policy-regulatory-intelligence/image7.png"
                alt="AI governance"
                fill
                sizes="(max-width: 1023px) 100vw, 320px"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}