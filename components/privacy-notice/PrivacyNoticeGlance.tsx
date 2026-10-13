import Image from "next/image";

const families = [
  {
    title: "Scope & Responsibility",
    description:
      "Who this notice applies to and which entity is responsible for a given processing activity.",
    id: "who-this-notice-applies-to",
  },
  {
    title: "Data We Collect",
    description:
      "Personal-data categories and sources, governed by an approved data inventory.",
    id: "personal-data-we-collect",
  },
  {
    title: "Why We Use It",
    description:
      "Purpose-by-purpose processing and jurisdiction-aware legal bases.",
    id: "why-we-use-personal-data",
  },
  {
    title: "Technologies & Measurement",
    description:
      "Cookies, analytics, AI-assisted features and the market-data personal-data boundary.",
    id: "cookies-sdks",
  },
  {
    title: "Retention & Security",
    description: "How long personal data is kept and how it is protected.",
    id: "retention",
  },
  {
    title: "Your Rights",
    description:
      "Jurisdiction-aware rights, how to exercise them, and automated-decision disclosures.",
    id: "your-privacy-rights",
  },
  {
    title: "Changes & Contact",
    description:
      "Version history and the approved privacy contact / regulator channel.",
    id: "changes-to-this-notice",
  },
  {
    title: "Sharing & Transfers",
    description:
      "Recipient categories, vendors and international transfer safeguards.",
    id: "who-receives-personal-data",
  },
];

export default function PrivacyNoticeGlance() {
  return (
    <section className="w-full border-b border-slate-900/10 bg-white font-['IBM_Plex_Sans',sans-serif]">
      <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 py-10 sm:py-12 lg:py-16 xl:py-[72px]">
        {/* Section Heading */}
        <div className="w-full">
          <p className="text-[11px] sm:text-xs font-bold tracking-[0.1em] text-indigo-500">
            PRIVACY AT A GLANCE — CONVENIENCE SUMMARY ONLY
          </p>

          <h2 className="mt-2.5 sm:mt-3 max-w-[820px] text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight sm:leading-10 text-slate-900">
            Twenty sections. The sections below remain controlling.
          </h2>

          <p className="mt-2.5 sm:mt-3 max-w-[780px] text-sm leading-6 text-gray-600 sm:text-base">
            TALVRIN&apos;s supplied privacy principle is to minimize unnecessary
            collection and provide clear controls. This page explains who this
            notice applies to, what categories of personal data exist, why they
            are used, who receives them, how long they are kept, and how to
            exercise applicable rights — each from an approved privacy or legal
            registry. This summary never substitutes for the full sections
            below.
          </p>
        </div>

        {/* Cards and Image */}
        <div className="mt-6 sm:mt-8 grid grid-cols-1 items-stretch gap-4 sm:gap-5 lg:grid-cols-[minmax(0,1fr)_240px] xl:gap-4">
          {/* Eight Family Cards */}
          <div className="grid min-w-0 grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 xl:grid-cols-4">
            {families.map((family) => (
              <article
                key={family.id}
                className="flex min-h-[140px] sm:min-h-[150px] h-full min-w-0 flex-col items-start rounded-2xl border border-slate-900/10 bg-violet-50 p-4 sm:p-5 transition-colors hover:border-indigo-300 hover:bg-indigo-50/70"
              >
                <h3 className="text-sm sm:text-base font-bold leading-5 text-slate-900">
                  {family.title}
                </h3>

                <p className="mt-2 flex-1 text-xs sm:text-sm leading-5 text-gray-600">
                  {family.description}
                </p>

                <a
                  href={`#${family.id}`}
                  className="mt-auto pt-2 inline-flex items-center text-xs font-semibold text-indigo-500 transition-colors hover:text-indigo-700"
                >
                  Jump to section <span className="ml-1">→</span>
                </a>
              </article>
            ))}
          </div>

          {/* Image */}
          <div className="relative aspect-[4/3] sm:aspect-[16/9] lg:aspect-auto lg:min-h-[320px] w-full min-w-0 overflow-hidden rounded-2xl border border-slate-900/10 bg-violet-50">
            <Image
              src="/images/legal/privacy-notice/privacy-notice-glance-team-briefing.webp"
              alt="Presenter briefing a seated team beside a flip chart"
              fill
              sizes="(max-width: 639px) calc(100vw - 32px), (max-width: 1023px) calc(100vw - 48px), 240px"
              className="object-cover object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
