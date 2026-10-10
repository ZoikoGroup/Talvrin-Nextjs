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
      className="group flex min-h-[140px] sm:min-h-[150px] h-full flex-col items-start gap-2 rounded-2xl border border-slate-900/10 bg-violet-50 p-4 sm:p-5 transition-colors hover:border-indigo-300 hover:bg-white"
    >
      <h3 className="text-sm sm:text-base font-bold leading-5 text-slate-900">
        {title}
      </h3>

      <p className="text-xs sm:text-sm leading-5 text-gray-600">
        {description}
      </p>

      <span className="mt-auto pt-2 text-xs font-semibold text-indigo-500 group-hover:text-indigo-700">
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
      <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 py-10 sm:py-12 lg:py-16 xl:py-[72px]">
        {/* Section heading */}
        <div className="flex flex-col items-start">
          <p className="text-[11px] sm:text-xs font-bold tracking-wide text-indigo-500">
            COOKIES AT A GLANCE — CONVENIENCE SUMMARY ONLY
          </p>

          <h2
            id="cookie-glance-title"
            className="mt-2.5 sm:mt-3 max-w-[820px] text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight sm:leading-10 text-slate-900"
          >
            Five categories. The numbered sections below remain controlling.
          </h2>

          <p className="mt-3 sm:mt-4 max-w-[780px] text-sm leading-6 text-gray-600 sm:text-base">
            This summary is a convenience orientation, not an exhaustive or
            binding list. Where the full sections below are broader or more
            specific, they govern.
          </p>
        </div>

        {/* Summary points */}
        <ul className="mt-6 flex max-w-[780px] flex-col gap-2.5 sm:gap-3">
          {summaryPoints.map((point) => (
            <li
              key={point}
              className="flex items-start gap-2.5 sm:gap-3 text-xs sm:text-sm md:text-base leading-6 text-slate-700"
            >
              <span
                aria-hidden="true"
                className="mt-[9px] size-1.5 shrink-0 rounded-full bg-indigo-500"
              />
              <span>{point}</span>
            </li>
          ))}
        </ul>

        {/* Category cards and image grid */}
        <div className="mt-6 sm:mt-8 grid grid-cols-1 items-stretch gap-3.5 sm:gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <CategoryCard key={category.title} {...category} />
          ))}

          {/* Supporting image */}
          <div className="relative min-h-[200px] sm:min-h-[220px] lg:min-h-full w-full overflow-hidden rounded-2xl border border-slate-900/10">
            <Image
              src="/images/legal/cookie-notice/image.png"
              alt="Professionals discussing privacy and technology in a workplace"
              fill
              sizes="(max-width: 639px) calc(100vw - 32px), (max-width: 1023px) calc(50vw - 32px), 32vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}