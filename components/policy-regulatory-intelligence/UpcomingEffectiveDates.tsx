import Image from "next/image";

export default function UpcomingEffectiveDates() {
  return (
    <section className="w-full bg-slate-900">
      <div className="mx-auto w-full max-w-[1280px] px-5 py-16 sm:px-8 sm:py-20 lg:px-8 lg:py-24 xl:px-0">
        {/* Eyebrow */}
        <div className="w-full">
          <p className="font-['IBM_Plex_Sans'] text-xs font-bold tracking-wide text-indigo-500">
            UPCOMING EFFECTIVE DATES &amp; DEADLINES
          </p>
        </div>

        {/* Heading */}
        <div className="w-full max-w-[780px] pt-3">
          <h2 className="font-['IBM_Plex_Sans'] text-[40px] font-bold leading-[1.08] tracking-[-0.02em] text-violet-50 sm:text-5xl sm:leading-[48.72px]">
            Publication is not the same as
            <br className="hidden sm:block" />
            effective date.
          </h2>
        </div>

        {/* Description */}
        <div className="w-full max-w-[780px] pt-4">
          <p className="font-['IBM_Plex_Sans'] text-base font-normal leading-7 text-violet-50/70">
            Publication time, effective date, compliance/transition date and
            consultation deadline are different concepts. Only fields the
            source actually supports are shown — each labeled explicitly.
          </p>
        </div>

        {/* Image / Timeline area */}
        <div className="relative mt-10 w-full overflow-hidden rounded-2xl border border-violet-50/10 bg-violet-50/5">
          <div className="relative aspect-[16/7] min-h-[220px] w-full sm:min-h-[280px] lg:h-[384px] lg:aspect-auto">
            <Image
              src="/images/research/policy-regulatory-intelligence/image1.png"
              alt="Upcoming effective dates and deadlines"
              fill
              sizes="(max-width: 639px) 100vw, (max-width: 1023px) 90vw, 1280px"
              className="object-cover"
            />
          </div>
        </div>

        {/* Status */}
        <div className="mt-6 w-full rounded-2xl border border-violet-50/10 bg-violet-50/5 px-6 py-8 sm:px-7 sm:py-10">
          <p className="font-['IBM_Plex_Sans'] text-xs font-bold tracking-wide text-yellow-600">
            STATUS
          </p>

          <h3 className="pt-1 font-['IBM_Plex_Sans'] text-base font-semibold leading-6 text-violet-50">
            There are no published deadlines yet.
          </h3>

          <p className="font-['IBM_Plex_Sans'] text-sm font-normal leading-6 text-violet-50/60">
            Unknown, pending or conditional dates stay visibly unresolved —
            never converted into a legal obligation for a particular user.
          </p>
        </div>
      </div>
    </section>
  );
}