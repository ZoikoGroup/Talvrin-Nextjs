export default function DocumentationSearchNotice() {
  return (
    <section
      className="
        w-full
        border-b
        border-slate-900/10
        bg-white
      "
    >
      <div
        className="
          mx-auto
          flex
          min-h-[80px]
          w-full
          max-w-[1200px]
          items-center
          gap-3.5
          px-6
          py-5

          sm:px-8

          lg:h-[80px]
          lg:px-0
          lg:py-0
        "
      >
        {/* SEARCH NOT PUBLISHED BADGE */}
        <div
          className="
            shrink-0
            pt-0.5
          "
        >
          <div
            className="
              inline-flex
              items-center
              rounded-[99px]
              bg-yellow-600/10
              px-2.5
              py-[5px]
            "
          >
            <span
              className="
                whitespace-nowrap
                text-xs
                font-bold
                leading-none
                tracking-wide
                text-yellow-800
                [font-family:'IBM_Plex_Sans',sans-serif]
              "
            >
              SEARCH NOT PUBLISHED
            </span>
          </div>
        </div>

        {/* DESCRIPTION */}
        <p
          className="
            m-0
            flex-1
            text-sm
            font-normal
            leading-6
            text-gray-600
            [font-family:'IBM_Plex_Sans',sans-serif]
          "
        >
          A governed documentation search index is not yet available on this
          build. Every category and goal below works by browsing — nothing here
          depends on search.
        </p>
      </div>
    </section>
  )
}