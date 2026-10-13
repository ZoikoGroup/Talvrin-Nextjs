import Image from "next/image";
import Link from "next/link";

type Section = {
  id: string;
  title: string;
  category: string;
  text: string;
  warning?: boolean;
  notice?: string;
  callout?: string;
  related?: { label: string; href: string }[];
};

const sections: Section[] = [
  {
    id: "who-this-notice-applies-to",
    title: "Who this Privacy Notice applies to",
    category: "SCOPE & RESPONSIBILITY",
    text: "This notice applies to visitors to TALVRIN’s public site, authenticated product users and their workspaces, enterprise administrators and team members, and other individuals whose personal data TALVRIN processes in connection with its research and market-intelligence platform.",
  },
  {
    id: "who-is-responsible",
    title: "Who is responsible for your personal data",
    category: "SCOPE & RESPONSIBILITY",
    warning: true,
    text: "TALVRIN is a trading name of Zoiko Markets, a Zoiko Financial Group company. The controller, processor and entity roles responsible for a specific processing activity are published only from an approved Corporate Legal Registry and jurisdiction/privacy-law matrix.",
    notice:
      "An approved controller/entity matrix has not been supplied. No controller, processor or responsible-entity designation is published for a specific processing activity until Legal/Privacy approves one.",
    related: [{ label: "Legal Notices", href: "/legal/legal-notices" }],
  },
  {
    id: "personal-data-we-collect",
    title: "Personal data we collect",
    category: "DATA WE COLLECT",
    warning: true,
    text: "TALVRIN’s supplied privacy principle is to minimize unnecessary collection. Specific personal-data categories, examples and scope are published only from an approved privacy data inventory (RoPA).",
    notice:
      "An approved privacy data inventory has not been supplied. No category such as account data, device data or usage data is listed until Privacy/Legal approves the data map.",
  },
  {
    id: "where-personal-data-comes-from",
    title: "Where personal data comes from",
    category: "DATA WE COLLECT",
    warning: true,
    text: "Sources may include direct submission by you, your organization’s administrator, your device or service, and third parties — but only the source categories confirmed by an approved data inventory are disclosed here.",
    notice:
      "Source-category disclosure awaits the approved data inventory referenced above.",
  },
  {
    id: "why-we-use-personal-data",
    title: "Why we use personal data",
    category: "WHY WE USE IT",
    warning: true,
    text: "Each purpose is governed individually and described specifically rather than through catch-all “improve services” language, once an approved purpose registry exists.",
    notice:
      "An approved purpose registry has not been supplied. No specific processing purpose is published for live content on this page yet.",
  },
  {
    id: "legal-bases",
    title: "Legal bases / permitted grounds",
    category: "WHY WE USE IT",
    warning: true,
    text: "Where a jurisdiction requires a stated legal basis for processing, it is published by Legal on a jurisdiction-specific basis and never inferred by design.",
    notice:
      "A counsel-approved, jurisdiction-specific legal-basis mapping has not been supplied.",
  },
  {
    id: "cookies-sdks",
    title: "Cookies, SDKs and similar technologies",
    category: "TECHNOLOGIES & MEASUREMENT",
    text: "Cookie, SDK and similar-technology use is governed by TALVRIN’s Cookie Notice and any available consent controls; this notice does not duplicate the cookie inventory.",
    related: [{ label: "Cookie Notice", href: "/legal/cookie-notice" }],
  },
  {
    id: "analytics-telemetry",
    title: "Analytics and product telemetry",
    category: "TECHNOLOGIES & MEASUREMENT",
    text: "Analytics are designed to measure product intent and comprehension rather than invasive behavioral surveillance, consistent with TALVRIN’s stated measurement principle; the exact event taxonomy is governed separately.",
    callout:
      "This page itself does not build a reading-interest or rights-interest profile from the sections a visitor reads.",
  },
  {
    id: "ai-assisted-features",
    title: "AI-assisted features and personal data",
    category: "TECHNOLOGIES & MEASUREMENT",
    text: "AI-assisted interpretation is distinct from authoritative evidence. AI-related personal-data handling is described using only approved system facts; no claim about model training, prompt retention or provider handling is made without source support.",
    related: [{ label: "AI Principles", href: "/trust/ai-principles" }],
  },
  {
    id: "market-research-information",
    title: "Market/research information and personal data",
    category: "TECHNOLOGIES & MEASUREMENT",
    warning: true,
    text: "Public-market and research evidence may incidentally include information about individuals. Where such evidence intersects with personal-data obligations, Legal and Data Governance determine the applicable boundary and treatment.",
    notice:
      "A specific personal-data boundary ruling for market/research evidence has not been approved yet.",
  },
  {
    id: "who-receives-personal-data",
    title: "Who receives personal data",
    category: "SHARING & TRANSFERS",
    warning: true,
    text: "Recipient categories — such as affiliates, vendors, subprocessors or authorities — are disclosed only from an approved vendor/subprocessor register.",
    notice:
      "An approved vendor/subprocessor register has not been supplied. No recipient category is listed yet.",
  },
  {
    id: "international-transfers",
    title: "International transfers",
    category: "SHARING & TRANSFERS",
    warning: true,
    text: "Processing locations and transfer safeguards — such as standard contractual clauses or adequacy decisions — are disclosed only once Legal confirms them against actual vendor and infrastructure locations.",
    notice: "An approved transfer registry has not been supplied.",
  },
  {
    id: "retention",
    title: "Retention",
    category: "RETENTION & SECURITY",
    warning: true,
    text: "Retention periods or criteria are shown only from an approved retention schedule; this notice avoids a vague “as long as necessary” statement where a specific schedule exists.",
    notice:
      "An approved retention schedule has not been supplied for this page’s categories.",
  },
  {
    id: "security",
    title: "Security",
    category: "RETENTION & SECURITY",
    text: "Security controls are described only to the extent approved for public disclosure; no unsupported certification or audit claim appears here.",
    related: [{ label: "Security", href: "/trust/security" }],
  },
  {
    id: "your-privacy-rights",
    title: "Your privacy rights",
    category: "YOUR RIGHTS",
    warning: true,
    text: "Applicable rights — such as access, correction, deletion, objection or portability — are shown by jurisdiction once an approved rights matrix exists; no jurisdiction’s rights are assumed to apply globally.",
    notice: "An approved jurisdiction-rights matrix has not been supplied.",
  },
  {
    id: "how-to-exercise-rights",
    title: "How to exercise rights",
    category: "YOUR RIGHTS",
    warning: true,
    text: "A request channel, identity-verification approach, response timing and appeal path (where applicable) are published only once Privacy Ops approves the workflow.",
    notice:
      "An approved rights-request workflow has not been supplied. Route privacy questions through the contact method in Section 20 until this workflow is published.",
  },
  {
    id: "children-age-restrictions",
    title: "Children / age restrictions",
    category: "YOUR RIGHTS",
    warning: true,
    text: "Age-related restrictions are stated only if applicable to TALVRIN’s actual product and confirmed by Legal; no firm claim is made until that determination is approved.",
    notice:
      "No approved children’s-privacy determination has been supplied.",
  },
  {
    id: "automated-decisions-profiling",
    title: "Automated decisions / profiling",
    category: "YOUR RIGHTS",
    warning: true,
    text: "TALVRIN discloses automated decision-making or profiling only where it actually occurs and is confirmed by Product and Legal; no profiling activity is implied by default.",
    notice:
      "No approved automated-decision or profiling disclosure has been supplied.",
  },
  {
    id: "changes-to-this-notice",
    title: "Changes to this notice",
    category: "CHANGES & CONTACT",
    text: "Material changes to this Privacy Notice are reflected with an updated version number and effective date, consistent with the version shown at the top of this page.",
    callout:
      "Check the version banner at the top of this page for the current effective version before relying on cached or printed copies.",
  },
  {
    id: "contact-regulator-information",
    title: "Contact and regulator information",
    category: "CHANGES & CONTACT",
    warning: true,
    text: "A privacy contact and, where applicable, supervisory-authority information are published only once Privacy/Legal approves the specific channel to use.",
    notice:
      "An approved privacy contact / regulator-notice channel has not been supplied. Route privacy questions through your organization’s signed agreement with Talvrin until this section is approved.",
    related: [
      { label: "Legal Notices", href: "/legal/legal-notices" },
      { label: "Contact Support", href: "/resources/contact-support" },
    ],
  },
];

const sectionImages: Record<number, string> = {
  1: "privacy-notice-section-office-corridor.webp",
  5: "privacy-notice-section-tablet-review.webp",
  8: "privacy-notice-section-laptop-meeting.webp",
  12: "privacy-notice-section-conference-table.webp",
  16: "privacy-notice-section-desk-handover.webp",
  20: "privacy-notice-section-document-review.webp",
};

function TocLinks() {
  return sections.map((section, index) => (
    <a
      key={section.id}
      href={`#${section.id}`}
      className="flex items-start gap-2 rounded-md px-2.5 py-2 text-sm leading-5 text-slate-700 transition-colors hover:bg-white hover:text-indigo-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 lg:py-1.5"
    >
      <span className="shrink-0 text-gray-500">{index + 1}.</span>
      <span className="min-w-0">{section.title}</span>
    </a>
  ));
}

export default function PrivacyNoticeContent() {
  return (
    <section
      id="privacy-notice-content"
      className="w-full scroll-mt-16 bg-violet-50 font-['IBM_Plex_Sans',sans-serif] text-slate-900"
    >
      <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 gap-6 px-4 sm:px-6 md:px-8 lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-8 lg:px-12 lg:py-14 xl:grid-cols-[240px_minmax(0,1fr)] xl:gap-8 xl:px-20 xl:py-[72px] py-8 sm:py-10">
        {/* Table of contents: collapsible on mobile/tablet, sticky sidebar on desktop */}
        <details className="group min-w-0 rounded-xl border border-slate-900/10 bg-white/70 lg:hidden">
          <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-3 px-4 py-3 text-xs font-bold tracking-wide text-gray-600 [&::-webkit-details-marker]:hidden">
            ON THIS PAGE
            <svg
              aria-hidden="true"
              viewBox="0 0 16 16"
              className="h-4 w-4 shrink-0 transition-transform group-open:rotate-180"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M3 6l5 5 5-5" />
            </svg>
          </summary>

          <nav
            aria-label="Privacy Notice table of contents"
            className="grid grid-cols-1 gap-x-4 gap-y-1 border-t border-slate-900/10 px-2 py-3 sm:grid-cols-2"
          >
            <TocLinks />
          </nav>
        </details>

        <nav
          aria-label="Privacy Notice table of contents"
          className="hidden min-w-0 lg:sticky lg:top-24 lg:block lg:self-start"
        >
          <div className="max-h-[calc(100vh-7rem)] overflow-y-auto">
            <p className="pb-1 text-xs font-bold tracking-wide text-gray-600">
              ON THIS PAGE
            </p>

            <div className="mt-2 flex flex-col gap-1">
              <TocLinks />
            </div>
          </div>
        </nav>

        {/* Legal sections */}
        <div className="min-w-0">
          {sections.map((section, index) => {
            const sectionNumber = index + 1;
            const image = sectionImages[sectionNumber];

            return (
              <article
                key={section.id}
                id={section.id}
                className="min-w-0 scroll-mt-24 border-b border-slate-900/10 py-6 sm:py-8 lg:py-10 first:pt-0"
              >
                <div
                  className={
                    image
                      ? "grid min-w-0 grid-cols-1 items-start gap-5 sm:grid-cols-[minmax(0,1fr)_160px] sm:gap-6 md:grid-cols-[minmax(0,1fr)_200px] lg:grid-cols-[minmax(0,1fr)_170px] xl:grid-cols-[minmax(0,1fr)_264px]"
                      : "min-w-0 sm:pr-[184px] md:pr-[224px] lg:pr-[194px] xl:pr-[288px]"
                  }
                >
                  {/* Section content */}
                  <div className="min-w-0">
                    <div className="mb-3 flex flex-wrap items-center gap-2">
                      <span className="rounded-full bg-indigo-500/10 px-2.5 py-1 text-[10px] sm:text-xs font-bold tracking-wide text-indigo-500">
                        {section.category}
                      </span>

                      {section.warning && (
                        <span className="rounded-full bg-yellow-600/10 px-2.5 py-1 text-[10px] sm:text-xs font-bold tracking-wide text-yellow-800">
                          NO APPROVED REGISTRY PUBLISHED YET
                        </span>
                      )}
                    </div>

                    <h2 className="text-lg sm:text-xl font-bold leading-7 text-slate-900">
                      {sectionNumber}. {section.title}
                    </h2>

                    <p className="mt-3 max-w-[720px] break-words text-sm sm:text-base leading-6 text-slate-700">
                      {section.text}
                    </p>

                    {section.notice && (
                      <div className="mt-4 sm:mt-5 rounded-[10px] border border-yellow-600/25 bg-yellow-600/10 px-4 py-3.5">
                        <p className="break-words text-xs sm:text-sm leading-5 text-yellow-900">
                          {section.notice}
                        </p>
                      </div>
                    )}

                    {section.callout && (
                      <div className="mt-4 sm:mt-5 rounded-[10px] bg-[#171335] px-4 py-4">
                        <p className="break-words text-xs sm:text-sm leading-5 text-violet-50/90">
                          {section.callout}
                        </p>
                      </div>
                    )}

                    {section.related && (
                      <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2">
                        <span className="text-xs font-semibold text-gray-600">
                          Related:
                        </span>

                        {section.related.map((item) => (
                          <Link
                            key={item.label}
                            href={item.href}
                            className="text-xs sm:text-sm font-semibold text-indigo-500 transition-colors hover:text-indigo-700"
                          >
                            {item.label} →
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Image column: only rendered when image exists */}
                  {image && (
                    <div className="relative aspect-[3/2] w-full overflow-hidden rounded-xl sm:aspect-square xl:aspect-[269/273]">
                      <Image
                        src={`/images/legal/privacy-notice/${image}`}
                        alt={`Supporting illustration for ${section.title}`}
                        fill
                        sizes="(max-width: 639px) calc(100vw - 32px), (max-width: 767px) 160px, (max-width: 1023px) 200px, (max-width: 1279px) 170px, 264px"
                        className="object-cover object-[center_30%]"
                      />
                    </div>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
