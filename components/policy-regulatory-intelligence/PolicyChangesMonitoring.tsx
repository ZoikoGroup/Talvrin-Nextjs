import Image from "next/image";

export default function PolicyChangesMonitoring() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto w-full max-w-[1280px] px-5 py-16 sm:px-8 sm:py-20 lg:px-8 lg:py-24 xl:px-0">
        {/* Eyebrow */}
        <div className="w-full">
          <p className="font-['IBM_Plex_Sans'] text-xs font-bold tracking-wide text-indigo-500">
            &quot;WHAT CHANGED?&quot; MONITORING
          </p>
        </div>

        {/* Heading */}
        <div className="w-full max-w-[760px] pt-3">
          <h2 className="font-['IBM_Plex_Sans'] text-[40px] font-bold leading-[1.08] tracking-[-0.02em] text-slate-900 sm:text-5xl sm:leading-[48.72px]">
            Policy changes. The evidence trail
            <br className="hidden sm:block" />
            should change with them.
          </h2>
        </div>

        {/* Description */}
        <div className="w-full max-w-[780px] pt-4">
          <p className="font-['IBM_Plex_Sans'] text-base font-normal leading-7 text-gray-600">
            Eight explicit monitoring states, so a correction or supersession
            never disappears silently.
          </p>
        </div>

        {/* Image */}
        <div className="relative mt-10 w-full overflow-hidden rounded-2xl border border-slate-900/10 bg-violet-50">
          <div className="relative aspect-[1280/488] min-h-[240px] w-full sm:min-h-[320px] lg:h-[488px] lg:aspect-auto">
            <Image
              src="/images/research/policy-regulatory-intelligence/image6.png"
              alt="Policy changes and evidence trail monitoring"
              fill
              sizes="(max-width: 639px) 100vw, (max-width: 1023px) 90vw, 1280px"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}