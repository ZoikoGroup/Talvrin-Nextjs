import Image from "next/image";

export default function CoverageEntryBrowseControls() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto w-full max-w-[1320px] px-5 py-16 sm:px-8 sm:py-20 lg:px-8 lg:py-24 xl:px-0">
        {/* =====================================================
            SECTION HEADER
        ===================================================== */}

        <div className="flex w-full flex-col items-start">
          {/* Eyebrow */}
          <div className="w-full">
            <p className="font-['IBM_Plex_Sans'] text-xs font-bold tracking-wide text-indigo-500">
              COVERAGE ENTRY &amp; BROWSE CONTROLS
            </p>
          </div>

          {/* Heading */}
          <div className="w-full max-w-[1000px] pt-3">
            <h2 className="font-['IBM_Plex_Sans'] text-[40px] font-bold leading-[1.08] tracking-[-0.02em] text-slate-900 sm:text-5xl sm:leading-[48.72px]">
              Narrow a broad evidence set without
              <br className="hidden sm:block" />
              learning our ontology.
            </h2>
          </div>

          {/* Description */}
          <div className="w-full max-w-[780px] pt-2">
            <p className="font-['IBM_Plex_Sans'] text-base font-normal leading-7 text-gray-600">
              Filters below draw only from governed registries. Essential
              filters show first; advanced taxonomy discloses progressively.
            </p>
          </div>

          {/* =================================================
              FILTER / BROWSE IMAGE
          ================================================= */}

          <div className="relative mt-10 w-full overflow-hidden rounded-2xl bg-violet-50">
            <div className="relative aspect-[16/4.8] min-h-[220px] w-full sm:min-h-[260px] lg:h-[384px] lg:aspect-auto">
              <Image
                src="/images/research/policy-regulatory-intelligence/image.png"
                alt="Policy and regulation coverage and browse controls"
                fill
                priority
                sizes="(max-width: 639px) 100vw, (max-width: 1023px) 90vw, 1280px"
                className="object-cover"
              />
            </div>
          </div>

          {/* =================================================
              RECORD COUNT
          ================================================= */}

          <div className="w-full pt-5">
            <p className="font-['IBM_Plex_Sans'] text-sm font-normal text-gray-600">
              0 of 0 registry-governed policy and regulation records shown
            </p>
          </div>

          {/* =================================================
              STATUS PANEL
          ================================================= */}

          <div className="mt-8 w-full rounded-2xl border border-slate-900/10 bg-slate-900 px-6 py-8 sm:px-7 sm:py-9">
            {/* Status label */}
            <div className="w-full">
              <p className="font-['IBM_Plex_Sans'] text-xs font-bold tracking-wide text-yellow-600">
                STATUS
              </p>
            </div>

            {/* Status heading */}
            <div className="w-full pt-1">
              <h3 className="font-['IBM_Plex_Sans'] text-base font-semibold leading-6 text-violet-50">
                There are no published policy or regulatory records yet.
              </h3>
            </div>

            {/* Status description */}
            <div className="w-full max-w-[900px] pb-2.5">
              <p className="font-['IBM_Plex_Sans'] text-sm font-normal leading-6 text-violet-50/60">
                Live records will follow the exact field contract below —
                never a fabricated jurisdiction, authority, date or source.
              </p>
            </div>

            {/* Reset button */}
            <button
              type="button"
              className="
                inline-flex
                items-center
                justify-center
                rounded-lg
                bg-violet-50
                px-5
                py-2.5
                font-['IBM_Plex_Sans']
                text-sm
                font-semibold
                text-slate-900
                transition-colors
                duration-200
                hover:bg-white
              "
            >
              Reset filters
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}