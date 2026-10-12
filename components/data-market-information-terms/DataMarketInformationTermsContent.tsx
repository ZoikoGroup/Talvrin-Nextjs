"use client";

import Image from "next/image";

const contents = [
  { id: "scope-coverage", label: "What these terms cover" },
  { id: "source-classes-provenance", label: "Source classes and provenance" },
  { id: "rights-access-states", label: "Rights and access states" },
  {
    id: "timeliness-information",
    label: "Real-time, delayed, snapshot and example information",
  },
  { id: "permitted-research-use", label: "Permitted internal research use" },
  { id: "attribution-source-identity", label: "Attribution and source identity" },
  { id: "copying-extraction-download", label: "Copying, extraction and download" },
  { id: "export-api-automation", label: "Export, API and automation" },
  {
    id: "sharing-redistribution",
    label: "Sharing, redistribution and republication",
  },
  { id: "derived-data", label: "Derived data and transformations" },
  { id: "ai-assisted-use", label: "AI-assisted use" },
  { id: "caching-retention", label: "Caching, storage and retention" },
  {
    id: "historical-information",
    label: "Historical information, corrections and revisions",
  },
];

const clauseGroups = {
  source: "SOURCE CLASSES & RIGHTS STATES",
  permitted: "PERMITTED USE & ATTRIBUTION",
  access: "ACCESS, EXPORT & SHARING",
  ai: "AI, CACHING & HISTORY",
};

type Clause = {
  id: string;
  title: string;
  group: string;
  description: string;
  notice?: string;
  darkNote?: string;
  exampleTitle?: string;
  examples?: string[];
  related?: { label: string; href: string }[];
  image?: string;
  imageAlt?: string;
};

const clauses: Clause[] = [
  {
    id: "scope-coverage",
    title: "1. What these terms cover",
    group: "SCOPE & COVERAGE",
    description:
      "These Data & Market Information Terms govern your use of market information, source content and related evidence made available through Talvrin, and apply together with Talvrin’s Terms of Service, Acceptable Use policy, Privacy Notice and AI Terms. They do not replace those documents — where a specific data-rights behavior is also addressed elsewhere, the more specific, currently approved term controls.",
    related: [
      { label: "Terms of Service", href: "/terms-of-service" },
      { label: "Acceptable Use", href: "/acceptable-use" },
    ],
    image: "/images/legal/data-market-information-terms/image1.png",
    imageAlt: "Colleagues discussing market information at a workplace",
  },
  {
    id: "source-classes-provenance",
    title: "2. Source classes and provenance",
    group: clauseGroups.source,
    description:
      "Evidence-card metadata on Talvrin identifies source identity, source class — official, primary, licensed, institutional or other governed class — publication time, effective or reference period, jurisdiction, and version or supersession state wherever material. A generic ‘web source’ label is not used when a named source identity is approved.",
    notice:
      "A public Source / Data Rights Registry has not yet been supplied. Source-specific licence terms, redistribution permissions and derived-data rights for named providers remain governed dependencies and are not invented on this page.",
    related: [
      { label: "Data Sources", href: "/data-sources" },
      { label: "Evidence Standards", href: "/evidence-standards" },
    ],
  },
  {
    id: "rights-access-states",
    title: "3. Rights and access states",
    group: clauseGroups.source,
    description:
      "Each piece of market information carries a visible, text-based rights or access state — Available, Restricted, Delayed, Snapshot, Example or Unavailable. State is never conveyed by color alone, and content is never shown as available when the underlying rights decision is unknown.",
    exampleTitle: "ILLUSTRATIVE EXAMPLES — NON-EXHAUSTIVE",
    examples: [
      "Available — you are entitled to the displayed content or action under current rules.",
      "Restricted — the content or action exists, but your current access does not permit it.",
      "Unknown rights — treated as a fail-closed state; it is not presented as permission to proceed.",
    ],
  },
  {
    id: "timeliness-information",
    title: "4. Real-time, delayed, snapshot and example information",
    group: clauseGroups.source,
    description:
      "Timeliness state — live, delayed, snapshot or example — is shown only where the underlying source supports that definition, together with a timestamp or reference period. Example or demonstrative content is clearly labeled as non-live and must not be mistaken for current market information.",
    notice:
      "Vendor-specific delay periods have not been supplied by an approved source agreement. Until a provider’s delay definition is approved, Talvrin does not publish a numeric delay figure for that source.",
  },
  {
    id: "permitted-research-use",
    title: "5. Permitted internal research use",
    group: clauseGroups.permitted,
    description:
      "Where a source’s rights permit it, you may use displayed market information for your own internal research, analysis and workspace purposes. Internal use permission does not itself include copying, extraction, redistribution or export rights, which are governed separately below.",
    related: [{ label: "Acceptable Use", href: "/acceptable-use" }],
  },
  {
    id: "attribution-source-identity",
    title: "6. Attribution and source identity",
    group: clauseGroups.permitted,
    description:
      "Where a source requires attribution, the required source identity, publisher or issuer name is preserved in the product interface and, where permitted, in any export. Attribution obligations are not satisfied by a generic citation when a specific source name is required.",
    darkNote:
      "Export templates are built to preserve required attribution and source metadata wherever the underlying rights allow export at all.",
    image: "/images/legal/data-market-information-terms/image2.png",
    imageAlt: "Colleagues reviewing source documents and information",
  },
  {
    id: "copying-extraction-download",
    title: "7. Copying, extraction and download",
    group: clauseGroups.access,
    description:
      "Copying, extraction or download of market information is permitted only where both the source’s rights and the relevant product capability allow it. Visibility of information in the Talvrin interface is not, by itself, permission to copy or extract it.",
    exampleTitle: "ILLUSTRATIVE EXAMPLES — NON-EXHAUSTIVE",
    examples: [
      "Downloading a dataset the registry marks as download-permitted for your entitlement.",
      "Copying summary text from a restricted source without a download-permitted rights state is not authorized.",
    ],
  },
  {
    id: "export-api-automation",
    title: "8. Export, API and automation",
    group: clauseGroups.access,
    description:
      "Export, API access and automated retrieval of market information are conditional actions, rendered only when a specific source’s rights and your product entitlement both permit them. Exact volume, rate or format limits publish only once an approved export or API policy exists.",
    notice:
      "An approved export / API / download policy has not been supplied. This page does not publish numeric usage limits, rate limits or permitted file formats until that policy is approved.",
    related: [
      { label: "API Documentation", href: "/api-documentation" },
      { label: "Data APIs", href: "/data-apis" },
    ],
  },
  {
    id: "sharing-redistribution",
    title: "9. Sharing, redistribution and republication",
    group: clauseGroups.access,
    description:
      "Sharing, redistribution or republication of market information outside your own authorized use is governed by the specific source’s rights, not by a single platform-wide rule. Access to information through Talvrin does not itself grant a right to redistribute it to others.",
    notice:
      "Source-specific redistribution permissions have not been supplied for every provider. Where a provider’s redistribution position is not yet approved, redistribution is treated as not permitted.",
    image: "/images/legal/data-market-information-terms/image3.png",
    imageAlt: "Team discussing data sharing and market research",
  },
  {
    id: "derived-data",
    title: "10. Derived data and transformations",
    group: clauseGroups.access,
    description:
      "Rights to derived data or transformed outputs built from licensed market information remain controlled by the originating source’s terms and Talvrin’s counsel-approved position, not by this page alone. A transformation does not automatically escape the restrictions that applied to its underlying source.",
    notice:
      "A general derived-data rights position has not been approved for publication. Any derived-data claim made elsewhere in the product must trace to an approved source-rights record before it is treated as controlling.",
  },
  {
    id: "ai-assisted-use",
    title: "11. AI-assisted use",
    group: clauseGroups.ai,
    description:
      "AI-assisted processing of market information is permitted only where the underlying source’s rights and Talvrin’s AI Terms both allow it. Using a source as an AI input, or receiving an AI-generated summary of it, does not expand your underlying rights to copy, export or redistribute that source.",
    related: [
      { label: "AI Terms", href: "/ai-terms" },
      { label: "AI Principles", href: "/ai-principles" },
    ],
  },
  {
    id: "caching-retention",
    title: "12. Caching, storage and retention",
    group: clauseGroups.ai,
    description:
      "Caching, local storage or retention of market information follows source-specific rules where an approved source agreement defines them, together with Talvrin’s general retention commitments in its Privacy Notice and Data Processing Addendum.",
    notice:
      "Source-specific caching or retention durations have not been supplied for every provider. Until approved, Talvrin’s general platform retention rules apply.",
    related: [{ label: "Privacy", href: "/privacy" }],
  },
  {
    id: "historical-information",
    title: "13. Historical information, corrections and revisions",
    group: clauseGroups.ai,
    description:
      "Historical market information may be corrected, revised or superseded as sources update their own records. Where a version or supersession state is available from the source, Talvrin reflects it rather than silently replacing the prior figure.",
    darkNote:
      "Archived or superseded terms and data states are labeled as such and never presented as if they were current.",
    image: "/images/legal/data-market-information-terms/image4.png",
    imageAlt: "Colleagues reviewing historical information and revisions",
  },
];

function GroupBadge({ children }: { children: string }) {
  return (
    <span className="inline-flex max-w-full items-center rounded-full bg-indigo-500/10 px-2.5 py-1 text-xs font-bold leading-4 tracking-wide text-indigo-500">
      {children}
    </span>
  );
}

function Notice({ children }: { children: string }) {
  return (
    <div className="rounded-[10px] border border-yellow-600/25 bg-yellow-600/10 px-4 py-3.5">
      <p className="text-sm font-normal leading-5 text-yellow-900">
        {children}
      </p>
    </div>
  );
}

function ExampleBox({
  title,
  examples,
}: {
  title: string;
  examples: string[];
}) {
  return (
    <div className="flex flex-col gap-2.5 rounded-[10px] border border-slate-900/10 bg-white px-4 py-5">
      <p className="text-xs font-bold leading-5 tracking-wide text-gray-600">
        {title}
      </p>

      <ul className="flex flex-col gap-2">
        {examples.map((example) => (
          <li
            key={example}
            className="flex items-start gap-2.5 text-sm font-normal leading-5 text-gray-600"
          >
            <span
              aria-hidden="true"
              className="mt-[7px] size-[5px] shrink-0 rounded-full bg-yellow-600"
            />
            <span>{example}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function RelatedLinks({
  links,
}: {
  links: { label: string; href: string }[];
}) {
  return (
    <div className="flex flex-wrap items-center gap-x-4 gap-y-2 pt-1">
      <span className="text-xs font-semibold text-gray-600">Related:</span>

      {links.map((link) => (
        <a
          key={link.label}
          href={link.href}
          className="text-sm font-semibold text-indigo-500 transition-colors hover:text-indigo-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
        >
          {link.label} <span aria-hidden="true">→</span>
        </a>
      ))}
    </div>
  );
}

function ClauseSection({ clause }: { clause: Clause }) {
  return (
    <article
      id={clause.id}
      className="scroll-mt-24 border-b border-slate-900/10 py-8 first:pt-0 sm:py-10"
    >
      <div
        className={
          clause.image
            ? "grid grid-cols-1 items-start gap-6 md:grid-cols-[minmax(0,1fr)_minmax(180px,240px)] xl:grid-cols-[minmax(0,1fr)_208px] xl:gap-6"
            : "grid grid-cols-1"
        }
      >
        <div className="flex min-w-0 flex-col items-start gap-3">
          <div className="flex flex-wrap items-center gap-2">
            <GroupBadge>{clause.group}</GroupBadge>

            {clause.notice && (
              <span className="inline-flex max-w-full items-center rounded-full bg-yellow-600/10 px-2.5 py-1 text-xs font-bold leading-4 tracking-wide text-yellow-800">
                NO APPROVED RULE PUBLISHED YET
              </span>
            )}
          </div>

          <h2 className="text-lg sm:text-xl font-bold leading-7 text-slate-900">
            {clause.title}
          </h2>

          <p className="w-full text-sm sm:text-base font-normal leading-relaxed text-slate-700">
            {clause.description}
          </p>

          {clause.notice && <Notice>{clause.notice}</Notice>}

          {clause.examples && clause.exampleTitle && (
            <ExampleBox
              title={clause.exampleTitle}
              examples={clause.examples}
            />
          )}

          {clause.darkNote && (
            <div className="w-full rounded-[10px] bg-[#17122F] px-4 py-4">
              <p className="text-xs sm:text-sm font-normal leading-relaxed sm:leading-5 text-violet-50/90">
                {clause.darkNote}
              </p>
            </div>
          )}

          {clause.related && <RelatedLinks links={clause.related} />}
        </div>

        {clause.image && (
          <div className="relative aspect-[4/5] w-full max-w-[280px] sm:max-w-[320px] overflow-hidden rounded-xl bg-violet-100 md:max-w-none xl:mt-0 xl:aspect-[3/4]">
            <Image
              src={clause.image}
              alt={clause.imageAlt ?? ""}
              fill
              sizes="(max-width: 767px) min(100%, 320px), (max-width: 1279px) 240px, 208px"
              className="object-cover"
            />
          </div>
        )}
      </div>
    </article>
  );
}

export default function DataMarketInformationTermsContent() {
  return (
    <section
      id="terms-content"
      className="w-full bg-violet-50 font-['IBM_Plex_Sans',sans-serif] text-slate-900"
    >
      <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 gap-8 px-4 sm:px-6 md:px-8 lg:grid-cols-[200px_minmax(0,1fr)] lg:gap-8 lg:px-12 lg:py-16 xl:grid-cols-[240px_minmax(0,1fr)] xl:gap-10 xl:px-20 py-8 sm:py-10 md:py-12">
        {/* ALWAYS-VISIBLE CONTENTS NAVIGATION */}
        <aside className="min-w-0 lg:sticky lg:top-6 lg:self-start">
          <div className="max-h-[240px] sm:max-h-[280px] lg:max-h-[calc(100vh-4rem)] overflow-y-auto rounded-xl border border-slate-900/10 bg-white p-4 lg:rounded-none lg:border-0 lg:bg-transparent lg:p-0">
            <p className="sticky top-0 bg-white lg:bg-transparent pb-1 text-xs font-bold tracking-wide text-gray-600">
              ON THIS PAGE
            </p>

            <nav
              aria-label="On this page"
              className="mt-3 flex flex-col gap-1"
            >
              {contents.map((item, index) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="flex items-start gap-2 rounded-md px-2.5 py-2 text-sm font-normal leading-5 text-slate-700 transition-colors hover:bg-indigo-500/10 hover:text-indigo-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
                >
                  <span className="shrink-0 text-gray-600">
                    {index + 1}.
                  </span>

                  <span>{item.label}</span>
                </a>
              ))}
            </nav>
          </div>
        </aside>

        {/* ALL 13 LEGAL CLAUSES */}
        <div className="min-w-0">
          {clauses.map((clause) => (
            <ClauseSection key={clause.id} clause={clause} />
          ))}
        </div>
      </div>
    </section>
  );
}