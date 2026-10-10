export default function MarketExplainersCta() {
  return (
    <section className="w-full border-t border-slate-900/10 bg-white">
      <div
        className="
          mx-auto
          flex
          w-full
          max-w-[1000px]
          flex-col
          items-center
          gap-4
          px-5
          py-16
          text-center
          sm:px-8
          sm:py-20
          lg:py-24
        "
      >
        {/* Heading */}
        <h2
          className="
            w-full
            font-['IBM_Plex_Sans']
            text-[36px]
            font-bold
            leading-[1.12]
            tracking-[-0.02em]
            text-slate-900

            sm:text-[42px]

            lg:text-5xl
            lg:leading-[48.3px]
          "
        >
          Understand the concept. Then
          <br className="hidden sm:block" />
          inspect the evidence.
        </h2>

        {/* Description */}
        <p
          className="
            w-full
            max-w-[700px]
            font-['IBM_Plex_Sans']
            text-base
            font-normal
            leading-7
            text-gray-600
          "
        >
          Use Market Explainers to build a clearer mental model, then move
          into Talvrin&apos;s source-linked research workflow when you need to
          verify facts, investigate a market question, or monitor what
          changes.
        </p>

        {/* Buttons */}
        <div
          className="
            flex
            w-full
            flex-col
            items-center
            justify-center
            gap-3
            pt-3.5

            sm:flex-row
            sm:gap-4
          "
        >
          {/* Primary */}
          <a
            href="/research/market-intelligence"
            className="
              inline-flex
              min-h-14
              w-full
              items-center
              justify-center
              rounded-lg
              bg-slate-900
              px-7
              py-4
              font-['IBM_Plex_Sans']
              text-base
              font-semibold
              text-violet-50
              transition-colors
              duration-200
              hover:bg-slate-800

              sm:w-auto
            "
          >
            Explore Market Intelligence
          </a>

          {/* Secondary */}
          <a
            href="#browse-by-category"
            className="
              inline-flex
              min-h-14
              w-full
              items-center
              justify-center
              rounded-lg
              border
              border-slate-900/25
              px-7
              py-4
              font-['IBM_Plex_Sans']
              text-base
              font-semibold
              text-slate-900
              transition-colors
              duration-200
              hover:bg-slate-900/[0.03]

              sm:w-auto
            "
          >
            Browse More Explainers
          </a>
        </div>

        {/* Disclaimer */}
        <p
          className="
            pt-0.5
            font-['IBM_Plex_Sans']
            text-sm
            font-normal
            leading-6
            text-gray-600
          "
        >
          Research and market intelligence. No trade execution. No
          manufactured investment recommendations.
        </p>
      </div>
    </section>
  );
}