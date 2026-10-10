import Image from "next/image";

const categories = [
  {
    title: "Strictly Necessary",
    description:
      "Functional, security and consent-infrastructure technologies the service cannot run without.",
    href: "#strictly-necessary",
  },
  {
    title: "Third-Party Providers",
    description:
      "Vendor, domain and purpose detail sourced from an approved registry.",
    href: "#third-party-providers",
  },
  {
    title: "Authenticated Product",
    description:
      "Surface-specific technologies inside signed-in TALVRIN products.",
    href: "#authenticated-product",
  },
  {
    title: "Marketing",
    description:
      "Advertising, remarketing or social technologies — disclosed only if actually used and approved.",
    href: "#marketing",
  },
  {
    title: "Functional Technologies",
    description:
      "Technologies supporting preferences and useful site functionality, where applicable.",
    href: "#functional-technologies",
  },
];

const summaryPoints = [
  "TALVRIN may use cookies, local storage, SDKs, pixels, tags and similar technologies to operate, secure and measure its public and authenticated surfaces.",
  "Exactly which categories and technologies are active depends on an approved technology inventory, which is a publication dependency for this notice.",
  "Where optional categories exist, they can be managed through Cookie Preferences once an approved consent tool is configured.",
  "This summary is a convenience orientation only — the numbered sections below remain controlling.",
  "Core TALVRIN content stays accessible and readable regardless of any optional tracking choice.",
];

function CategoryCard({
  title,
  description,
  href,
}: {
  title: string;
  description: string;
  href: string;
}) {
  return (
    <a
      href={href}
      className="group flex min-h-[160px] flex-col items-start gap-2 rounded-2xl border border-slate-900/10 bg-violet-50 p-4 transition-colors hover:bg-white sm:min-h-[180px] sm:p-5"
    >
      <h3 className="text-sm font-bold leading-5 text-slate-900 sm:text-base">
        {title}
      </h3>

      <p className="text-xs leading-5 text-gray-600 sm:text-sm">
        {description}
      </p>

      <span className="mt-auto pt-1 text-xs font-semibold text-indigo-500 group-hover:text-indigo-700">
        Jump to section →
      </span>
    </a>
  );
}

export default function CookieNoticeGlance() {
  return (
    <section
      aria-labelledby="cookie-glance-title"
      className="w-full border-b border-slate-900/10 bg-white"
    >
      <div className="mx-auto w-full max-w-[1440px] px-5 py-12 sm:px-8 sm:py-14 md:px-10 lg:px-20 lg:py-[72px]">
        {/* Section heading */}
        <div className="flex flex-col items-start">
          <p className="text-xs font-bold tracking-wide text-indigo-500">
            COOKIES AT A GLANCE — CONVENIENCE SUMMARY ONLY
          </p>

          <h2
            id="cookie-glance-title"
            className="mt-3 max-w-[820px] text-2xl font-bold leading-tight text-slate-900 sm:text-3xl sm:leading-10 lg:text-4xl"
          >
            Five categories. The numbered sections below remain controlling.
          </h2>

          <p className="mt-4 max-w-[780px] text-sm leading-6 text-gray-600 sm:text-base">
            This summary is a convenience orientation, not an exhaustive or
            binding list. Where the full sections below are broader or more
            specific, they govern.
          </p>
        </div>

        {/* Summary points */}
        <ul className="mt-6 flex max-w-[780px] flex-col gap-3">
          {summaryPoints.map((point) => (
            <li
              key={point}
              className="flex items-start gap-3 text-sm leading-6 text-slate-700 sm:text-base"
            >
              <span
                aria-hidden="true"
                className="mt-[9px] size-1.5 shrink-0 rounded-full bg-indigo-500"
              />
              <span>{point}</span>
            </li>
          ))}
        </ul>

        {/* Category cards and central image */}
        <div className="mt-7 grid grid-cols-1 items-stretch gap-4 sm:grid-cols-2 lg:grid-cols-[minmax(0,1fr)_minmax(0,3.1fr)_minmax(0,1fr)] lg:gap-2">
          {/* Left category cards */}
          <div className="grid grid-cols-1 gap-3 sm:col-span-2 sm:grid-cols-2 lg:col-span-1 lg:grid-cols-1">
            <CategoryCard {...categories[0]} />
            <CategoryCard {...categories[1]} />
          </div>

          {/* Center image */}
          <div className="relative min-h-[240px] overflow-hidden rounded-2xl sm:col-span-2 sm:min-h-[320px] lg:col-span-1 lg:min-h-0">
            <Image
              src="/images/legal/cookie-notice/image.png"
              alt="Professionals discussing privacy and technology in a workplace"
              fill
              sizes="(max-width: 639px) calc(100vw - 40px), (max-width: 1023px) calc(100vw - 64px), 52vw"
              className="object-cover"
            />
          </div>

          {/* Right category cards */}
          <div className="grid grid-cols-1 gap-3 sm:col-span-2 sm:grid-cols-2 lg:col-span-1 lg:grid-cols-1">
            <CategoryCard {...categories[2]} />
            <CategoryCard {...categories[3]} />
          </div>
        </div>
      </div>
    </section>
  );
}