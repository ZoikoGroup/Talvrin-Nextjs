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
  addresses?: { label: string; lines: string[] }[];
  related?: { label: string; href: string }[];
};

const sections: Section[] = [
  {
    id: "corporate-identity",
    title: "TALVRIN, Zoiko Markets and Zoiko Financial Group",
    category: "CORPORATE IDENTITY",
    text: "TALVRIN is a trading name of Zoiko Markets, a Zoiko Financial Group company. This relationship is stated as a trading-name relationship and is not upgraded to a claim that TALVRIN is itself a separately incorporated legal entity.",
    related: [{ label: "About Talvrin", href: "/about-talvrin" }],
  },
  {
    id: "headquarters",
    title: "Global Headquarters and European Headquarters",
    category: "CORPORATE IDENTITY",
    warning: true,
    text: "TALVRIN’s confirmed office addresses are shown below exactly as supplied, labeled Global Headquarters and European Headquarters because the source material does so.",
    addresses: [
      {
        label: "Global Headquarters",
        lines: ["1401 21st Street, Suite R", "Sacramento, CA 95811, USA"],
      },
      {
        label: "European Headquarters",
        lines: ["167-169 Great Portland Street, 5th Floor", "London W1W 5PF, UK"],
      },
    ],
    notice:
      "Neither address is labeled registered office, statutory seat or service-of-process address; that status requires an approved Corporate Legal Registry record, which has not been supplied.",
  },
  {
    id: "registered-entity-details",
    title: "Registered / statutory entity details",
    category: "REGISTERED & REGULATORY STATUS",
    warning: true,
    text: "Registered entity name, registration number, jurisdiction of formation, tax/VAT identifiers and registered-office address are published only from an approved Corporate Legal Registry.",
    notice:
      "An approved Corporate Legal Registry has not been supplied. No registration number, tax identifier or registered-office designation is published on this page until Legal/Corporate Affairs approves one.",
  },
  {
    id: "regulatory-authorization-notices",
    title: "Regulatory / authorization notices",
    category: "REGISTERED & REGULATORY STATUS",
    warning: true,
    text: "Regulator names, licences, registrations and exemption statements are published only from an approved Regulatory Status Registry, and never implied by TALVRIN’s market-research context.",
    notice:
      "An approved Regulatory Status Registry has not been supplied. This page does not name a regulator, licence, registration or exemption, and makes no regulated-status claim, until Legal/Compliance approves one.",
  },
  {
    id: "research-non-advice-boundary",
    title: "Research and non-investment-advice boundary",
    category: "RESEARCH & NON-ADVICE BOUNDARY",
    text: "TALVRIN is an evidence-led research and monitoring platform for global public markets — designed as research and market intelligence, not a brokerage, trade-execution platform or investment recommendation engine. Nothing on this site constitutes investment, legal, tax or other professional advice.",
  },
  {
    id: "copyright-notice",
    title: "Copyright notice",
    category: "INTELLECTUAL PROPERTY",
    text: "© 2026 Zoiko Markets. All rights reserved. Talvrin is a trading name of Zoiko Markets, a Zoiko Financial Group company; this copyright presentation follows Brand/Legal’s approved owner-and-year rule used consistently across the site.",
  },
  {
    id: "trademarks-brand-names",
    title: "Trademarks and brand names",
    category: "INTELLECTUAL PROPERTY",
    warning: true,
    text: "TALVRIN, the TALVRIN logo and related product names are brand names used by Zoiko Markets. Registered-trademark status, registration numbers and jurisdiction-specific trademark notices are published only from an approved IP / Trademark Registry.",
    notice:
      "An approved IP / Trademark Registry has not been supplied. No registration number or formal trademark-ownership statement is published until Brand/Legal approves one.",
  },
  {
    id: "third-party-ip-notices",
    title: "Third-party intellectual property notices",
    category: "INTELLECTUAL PROPERTY",
    warning: true,
    text: "Software, content and data incorporated into the product from third parties are attributed only where a governed Third-Party Notices Register requires public attribution; confidential licence terms are never disclosed.",
    notice:
      "An approved Third-Party Notices Register has not been supplied. No third-party attribution is listed until Legal/Product and the relevant vendor owners approve the public notice text.",
  },
  {
    id: "data-market-attributions",
    title: "Data / market information attributions",
    category: "ATTRIBUTIONS & CONTACTS",
    warning: true,
    text: "Where a data or market-information source requires a public attribution notice, that notice is linked from this section and from the relevant product surface, sourced from an approved register.",
    notice:
      "No source-specific attribution notice has been approved for publication yet.",
  },
  {
    id: "open-source-notices",
    title: "Open-source / software notices",
    category: "ATTRIBUTIONS & CONTACTS",
    warning: true,
    text: "Where TALVRIN’s software incorporates open-source components requiring public notice, those notices are published from an approved open-source register.",
    notice: "An approved open-source notices register has not been supplied.",
  },
  {
    id: "external-links",
    title: "External links / third-party websites",
    category: "ATTRIBUTIONS & CONTACTS",
    text: "TALVRIN may link to third-party websites for reference. Where a disclaimer is legally required for a specific external link, it is shown at the point of that link rather than generalized here.",
    callout:
      "A general “we are not responsible for external sites” disclaimer does not substitute for a specific, legally required notice.",
  },
  {
    id: "security-contact",
    title: "Security / vulnerability contact",
    category: "ATTRIBUTIONS & CONTACTS",
    warning: true,
    text: "A dedicated security or vulnerability-disclosure contact route is published here only once Security and Legal approve it.",
    notice:
      "An approved security contact route has not been supplied for this page; see Security for current guidance.",
    related: [{ label: "Security", href: "/trust/security" }],
  },
  {
    id: "privacy-contact",
    title: "Privacy / data-protection contact",
    category: "ATTRIBUTIONS & CONTACTS",
    text: "Questions about personal-data handling route to TALVRIN’s Privacy Notice and its approved privacy contact channel.",
    related: [{ label: "Privacy", href: "/trust/privacy" }],
  },
  {
    id: "legal-notice-contact",
    title: "Legal notice / service-of-notice contact",
    category: "ATTRIBUTIONS & CONTACTS",
    warning: true,
    text: "A formal legal-notice or service-of-notice channel is published here only once Legal approves the specific address, email or process to use.",
    notice:
      "An approved legal-notice/service-of-notice channel has not been supplied. Route formal notices through your organization’s signed agreement with Talvrin until this section is approved.",
  },
  {
    id: "jurisdiction-specific-notices",
    title: "Jurisdiction-specific legal notices",
    category: "JURISDICTION & VERSIONING",
    warning: true,
    text: "Where a jurisdiction requires a notice that differs from this page’s global content, the regional variant is shown with its specific scope rather than implied to apply globally.",
    notice:
      "No jurisdiction-specific legal notice has been approved for publication yet.",
  },
  {
    id: "language-translation-status",
    title: "Language / translation status",
    category: "JURISDICTION & VERSIONING",
    warning: true,
    text: "This page is published in American English. Where an official translation exists, its precedence relative to the English version is stated by Legal; informal translations do not control.",
    notice:
      "No official translated version has been approved for publication yet.",
  },
  {
    id: "changes-to-legal-notices",
    title: "Changes to these Legal Notices",
    category: "JURISDICTION & VERSIONING",
    text: "Material changes to these Legal Notices are reflected with an updated version number and effective date, consistent with the version shown at the top of this page.",
    callout:
      "Check the version banner at the top of this page for the current effective version before relying on cached or printed copies.",
  },
];

const sectionImages: Record<number, string> = {
  1: "legal-notices-section-office-meeting.webp",
  4: "legal-notices-section-client-consultation.webp",
  7: "legal-notices-section-advisor-discussion.webp",
  10: "legal-notices-section-desk-interview.webp",
  13: "legal-notices-section-roundtable-review.webp",
  16: "legal-notices-section-boardroom-team.webp",
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

export default function LegalNoticesContent() {
  return (
    <section
      id="legal-notices-content"
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
            aria-label="Legal Notices table of contents"
            className="grid grid-cols-1 gap-x-4 gap-y-1 border-t border-slate-900/10 px-2 py-3 sm:grid-cols-2"
          >
            <TocLinks />
          </nav>
        </details>

        <nav
          aria-label="Legal Notices table of contents"
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
                      ? "grid min-w-0 grid-cols-1 items-start gap-5 sm:grid-cols-[minmax(0,1fr)_160px] sm:gap-6 md:grid-cols-[minmax(0,1fr)_200px] lg:grid-cols-[minmax(0,1fr)_170px] xl:grid-cols-[minmax(0,1fr)_280px]"
                      : "min-w-0 sm:pr-[184px] md:pr-[224px] lg:pr-[194px] xl:pr-[304px]"
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
                          NO APPROVED RULE PUBLISHED YET
                        </span>
                      )}
                    </div>

                    <h2 className="text-lg sm:text-xl font-bold leading-7 text-slate-900">
                      {sectionNumber}. {section.title}
                    </h2>

                    <p className="mt-3 max-w-[720px] break-words text-sm sm:text-base leading-6 text-slate-700">
                      {section.text}
                    </p>

                    {section.addresses && (
                      <div className="mt-4 sm:mt-5 grid grid-cols-1 gap-3 min-[480px]:grid-cols-2 sm:grid-cols-1 md:grid-cols-2 md:gap-4">
                        {section.addresses.map((address) => (
                          <address
                            key={address.label}
                            className="rounded-[10px] border border-slate-900/10 bg-white px-4 py-4 not-italic"
                          >
                            <p className="text-xs font-bold tracking-wide text-indigo-500">
                              {address.label}
                            </p>

                            <p className="mt-2 text-sm leading-6 text-slate-700">
                              {address.lines.map((line) => (
                                <span key={line} className="block">
                                  {line}
                                </span>
                              ))}
                            </p>
                          </address>
                        ))}
                      </div>
                    )}

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
                    <div className="relative aspect-[3/2] w-full overflow-hidden rounded-xl sm:aspect-square xl:aspect-[293/273]">
                      <Image
                        src={`/images/legal/legal-notices/${image}`}
                        alt={`Supporting illustration for ${section.title}`}
                        fill
                        sizes="(max-width: 639px) calc(100vw - 32px), (max-width: 767px) 160px, (max-width: 1023px) 200px, (max-width: 1279px) 170px, 280px"
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
