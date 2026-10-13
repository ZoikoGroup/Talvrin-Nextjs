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
    id: "agreement-to-these-terms",
    title: "Agreement to these Terms",
    category: "AGREEMENT & ELIGIBILITY",
    warning: true,
    text: "By creating an account, accessing, or otherwise using Talvrin, you agree to be bound by these Terms of Service together with Talvrin’s Privacy Notice, Cookie Notice and Acceptable Use policy, and — where applicable to your use — the AI Terms and Data & Market Information Terms. Where a more specific, currently approved document addresses a particular behavior, that document controls.",
    notice:
      "The approved acceptance mechanism — clickwrap, browsewrap or other assent evidence — has not been supplied. This page describes the contractual relationship; it does not fabricate an acceptance flow that is not actually implemented.",
    related: [
      { label: "Privacy Notice", href: "/legal/privacy-notice" },
      { label: "Acceptable Use", href: "/legal/acceptable-use" },
    ],
  },
  {
    id: "eligibility-and-authority",
    title: "Eligibility and authority",
    category: "AGREEMENT & ELIGIBILITY",
    warning: true,
    text: "You must have the legal capacity to enter into a binding agreement. If you access Talvrin on behalf of an organization, you represent that you have authority to bind that organization to these Terms, and “you” includes that organization where the context requires.",
    notice:
      "Specific minimum-age thresholds and jurisdiction-based eligibility restrictions have not been supplied by an approved source and are not published on this page until Legal confirms them.",
  },
  {
    id: "accounts-and-account-security",
    title: "Accounts and account security",
    category: "AGREEMENT & ELIGIBILITY",
    text: "You are responsible for maintaining the confidentiality of your account credentials and for all activity that occurs under your account, including activity by authorized users within your organization. Notify Talvrin promptly through an approved channel if you suspect unauthorized access.",
    related: [
      { label: "Account Support", href: "/support/account-support" },
      { label: "Security", href: "/trust/security" },
    ],
  },
  {
    id: "access-and-permitted-use",
    title: "Access to and permitted use of Talvrin",
    category: "PERMITTED USE & RESEARCH BOUNDARY",
    text: "Subject to these Terms and your plan and entitlements, Talvrin grants you a limited, non-exclusive, non-transferable right to access and use the platform for your own internal research, monitoring and evidence-review purposes. This licence does not include any right to resell, sublicense, or make Talvrin available to third parties as your own offering.",
  },
  {
    id: "restrictions-and-acceptable-use",
    title: "Restrictions and Acceptable Use",
    category: "PERMITTED USE & RESEARCH BOUNDARY",
    text: "You may not circumvent access controls, misuse the platform, violate applicable law, infringe the rights of Talvrin, a source, or any third party, or otherwise use the service in ways the Acceptable Use policy prohibits. This section works together with, and does not replace, Talvrin’s Acceptable Use policy.",
    related: [{ label: "Acceptable Use", href: "/legal/acceptable-use" }],
  },
  {
    id: "research-no-investment-advice",
    title: "Research, market intelligence and no investment advice",
    category: "PERMITTED USE & RESEARCH BOUNDARY",
    text: "Talvrin is a source-linked research and intelligence platform for global public markets. It is not a brokerage, trade-execution platform, stock-tipping service, or investment recommendation engine, and nothing on Talvrin constitutes investment, legal, tax or other professional advice.",
    callout:
      "You remain solely responsible for your own investment, trading and professional decisions. Talvrin does not execute trades and does not manufacture buy, sell or hold recommendations.",
  },
  {
    id: "ai-assisted-features",
    title: "AI-assisted features",
    category: "AI & DATA RIGHTS",
    text: "AI-assisted features may help you discover, organize, compare, summarize or navigate evidence. AI-generated output is not authoritative evidence, remains distinct from the underlying source material, and does not expand your rights to the underlying content. Specialized AI Terms apply when you use these features.",
    related: [
      { label: "AI Terms", href: "/legal/ai-terms" },
      { label: "AI Principles", href: "/trust/ai-principles" },
    ],
  },
  {
    id: "data-market-information-sources",
    title: "Data, market information and third-party sources",
    category: "AI & DATA RIGHTS",
    text: "Market information, source content and related evidence made available through Talvrin are subject to source-specific rights, licensing and permitted-use conditions, governed in detail by Talvrin’s Data & Market Information Terms. Visibility of information through Talvrin is not, by itself, permission to copy, export, share or redistribute it.",
    related: [
      {
        label: "Data & Market Information Terms",
        href: "/legal/data-market-information-terms",
      },
      { label: "Data Rights", href: "/trust/data-rights" },
    ],
  },
  {
    id: "user-and-workspace-content",
    title: "User and workspace content",
    category: "CONTENT & PLATFORM RIGHTS",
    warning: true,
    text: "Where you submit workspace materials — such as watchlists, notes, annotations or saved searches — you retain ownership of that content and grant Talvrin a licence to process and store it solely to provide the service to you.",
    notice:
      "A complete ownership, export and deletion-consequence contract for user and workspace content has not been supplied by an approved product or counsel source. Until approved, retention and deletion behavior follows Talvrin’s general Privacy Notice and Data Processing Addendum commitments.",
    related: [
      { label: "Privacy Notice", href: "/legal/privacy-notice" },
      {
        label: "Data Processing Addendum",
        href: "/legal/data-processing-addendum",
      },
    ],
  },
  {
    id: "intellectual-property",
    title: "Talvrin and licensor intellectual property",
    category: "CONTENT & PLATFORM RIGHTS",
    text: "Talvrin and its licensors retain all right, title and interest in the platform, including its software, design, methodology and trademarks. These Terms grant you only the limited service licence described above and do not transfer any ownership interest in Talvrin’s intellectual property.",
  },
  {
    id: "privacy-cookies-security",
    title: "Privacy, cookies and security",
    category: "CONTENT & PLATFORM RIGHTS",
    text: "Personal-data handling, cookie use and Talvrin’s security practices are governed by the Privacy Notice, Cookie Notice and public Security disclosures, which these Terms incorporate by reference.",
    related: [
      { label: "Privacy Notice", href: "/legal/privacy-notice" },
      { label: "Cookie Notice", href: "/legal/cookie-notice" },
      { label: "Security", href: "/trust/security" },
    ],
  },
  {
    id: "service-availability-beta",
    title: "Service availability, changes and beta features",
    category: "SERVICE, FEES & LIFECYCLE",
    text: "Talvrin may update, change or discontinue features, including beta or early-access features, at any time. Beta features are provided on an as-available basis and may change or be withdrawn without the notice given to generally available features.",
  },
  {
    id: "fees-and-paid-services",
    title: "Fees and paid services",
    category: "SERVICE, FEES & LIFECYCLE",
    warning: true,
    text: "Where you subscribe to a paid plan, pricing, billing, renewal and cancellation terms apply as described at the point of purchase or in a separate order form.",
    notice:
      "Approved commercial terms — pricing, billing cadence, renewal, tax treatment and refund policy — have not been supplied. This page does not publish billing or refund language until those commercial terms are approved.",
  },
  {
    id: "suspension-and-termination",
    title: "Suspension and termination",
    category: "SERVICE, FEES & LIFECYCLE",
    warning: true,
    text: "Talvrin may suspend or terminate your access for breach of these Terms or the Acceptable Use policy, non-payment, legal or security reasons, or as otherwise permitted by these Terms. Provisions intended to survive termination — including intellectual property, limitation of liability and governing law — remain in effect.",
    notice:
      "Exact suspension and termination notice periods, and data-retention-on-termination specifics, require counsel and product confirmation before publication.",
  },
  {
    id: "disclaimers-and-warranties",
    title: "Disclaimers and warranties",
    category: "RISK, LAW & CHANGES",
    warning: true,
    text: "Talvrin’s services, including research, evidence and AI-assisted output, are provided subject to the disclaimers and warranty position set out in the counsel-approved final clause.",
    notice:
      "Counsel-approved warranty-disclaimer language — including as-is, availability and accuracy positions — has not been supplied. No designer-authored risk-allocation language is published in its place.",
  },
  {
    id: "limitation-of-liability",
    title: "Limitation of liability",
    category: "RISK, LAW & CHANGES",
    warning: true,
    text: "To the extent permitted by law, Talvrin’s liability to you is limited as set out in the counsel-approved final clause, including any applicable exclusions and caps.",
    notice:
      "Counsel-approved limitation-of-liability language, including exclusions, caps and carve-outs, has not been supplied. No liability cap or exclusion is published on this page until Legal approves exact wording.",
  },
  {
    id: "indemnification",
    title: "Indemnification",
    category: "RISK, LAW & CHANGES",
    warning: true,
    text: "Where applicable, an indemnification clause describes the scope, process and exclusions for claims arising from your use of the service.",
    notice:
      "An indemnification position has not been approved for publication. This clause family is conditional and remains counsel-controlled.",
  },
  {
    id: "governing-law-disputes",
    title: "Governing law, disputes and regional provisions",
    category: "RISK, LAW & CHANGES",
    warning: true,
    text: "These Terms are governed by the law, dispute forum and any arbitration or class-action-waiver provisions set out in the counsel-approved final clause, which may include regional variants where legally required.",
    notice:
      "Governing law, dispute venue, arbitration and class-action-waiver terms have not been supplied. This page does not publish jurisdiction-specific dispute provisions until Legal approves them.",
  },
  {
    id: "changes-to-these-terms",
    title: "Changes to these Terms and notices",
    category: "RISK, LAW & CHANGES",
    warning: true,
    text: "Talvrin may update these Terms as the product, applicable law or business needs evolve. Material changes are reflected with an updated effective date and, where required, additional notice.",
    notice:
      "A public version-history / archive view for these Terms is not yet available.",
  },
  {
    id: "contact-legal-entity-information",
    title: "Contact and legal entity information",
    category: "RISK, LAW & CHANGES",
    warning: true,
    text: "Legal notices and contract-related correspondence should be directed to Talvrin’s approved contracting entity and notice channel.",
    notice:
      "Approved contracting-entity name, legal-notice address and a dedicated legal-notice channel have not been supplied. This page does not publish entity or notice details until Legal confirms them.",
    related: [{ label: "Contact", href: "/company/contact" }],
  },
];

const sectionImages: Record<number, string> = {
  1: "terms-of-service-section-plan-review.webp",
  4: "terms-of-service-section-city-office-desk.webp",
  8: "terms-of-service-section-analytics-briefing.webp",
  12: "terms-of-service-section-team-presentation.webp",
  15: "terms-of-service-section-document-workshop.webp",
  19: "terms-of-service-section-studio-collaboration.webp",
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

export default function TermsOfServiceContent() {
  return (
    <section
      id="terms-of-service-content"
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
            aria-label="Terms of Service table of contents"
            className="grid grid-cols-1 gap-x-4 gap-y-1 border-t border-slate-900/10 px-2 py-3 sm:grid-cols-2"
          >
            <TocLinks />
          </nav>
        </details>

        <nav
          aria-label="Terms of Service table of contents"
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
                      ? "grid min-w-0 grid-cols-1 items-start gap-5 sm:grid-cols-[minmax(0,1fr)_160px] sm:gap-6 md:grid-cols-[minmax(0,1fr)_200px] lg:grid-cols-[minmax(0,1fr)_170px] xl:grid-cols-[minmax(0,1fr)_215px]"
                      : "min-w-0 sm:pr-[184px] md:pr-[224px] lg:pr-[194px] xl:pr-[239px]"
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
                    <div className="relative aspect-[3/2] w-full overflow-hidden rounded-xl sm:aspect-square xl:aspect-[4/5]">
                      <Image
                        src={`/images/legal/terms-of-service/${image}`}
                        alt={`Supporting illustration for ${section.title}`}
                        fill
                        sizes="(max-width: 639px) calc(100vw - 32px), (max-width: 767px) 160px, (max-width: 1023px) 200px, (max-width: 1279px) 170px, 215px"
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
