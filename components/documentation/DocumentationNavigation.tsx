'use client'

const navigationItems = [
  'Start by Goal',
  'Taxonomy',
  'Article Pattern',
  'Developer Docs',
  'Trust',
  'Troubleshooting',
  'Support',
]

export default function DocumentationNavigation() {
  return (
    <nav
      className="
        relative
        w-full
        overflow-x-auto
        border-b
        border-slate-900/10
        bg-white
        scrollbar-none
      "
    >
      <div
        className="
          mx-auto
          flex
          h-12
          w-full
          max-w-[1320px]
          min-w-max
          items-stretch
          gap-1
          px-4

          sm:px-8

          lg:px-14
        "
      >
        {navigationItems.map((item) => (
          <a
            key={item}
            href={`#${item
              .toLowerCase()
              .replace(/\s+/g, '-')}`}
            className="
              flex
              h-full
              shrink-0
              items-center
              px-3.5
              py-4

              text-sm
              font-semibold
              text-gray-600

              transition-colors
              duration-200

              hover:text-slate-900

              [font-family:'IBM_Plex_Sans',sans-serif]
            "
          >
            {item}
          </a>
        ))}
      </div>
    </nav>
  )
}