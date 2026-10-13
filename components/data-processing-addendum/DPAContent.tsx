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
  examples?: string[];
  related?: { label: string; href: string }[];
};

const sections: Section[] = [
  {
    id: "scope-and-incorporation",
    title: "Scope and incorporation",
    category: "SCOPE & PARTIES",
    warning: true,
    text: "This Data Processing Addendum applies when Talvrin processes personal data on a customer’s behalf in the course of providing the product, and forms part of the governing agreement wherever it is incorporated by reference. It works together with, and does not replace, Talvrin’s Terms of Service and Privacy Notice.",
    notice:
      "The approved enterprise contract hierarchy that fixes exact incorporation language and precedence order has not been supplied. Until Legal approves that hierarchy, this page does not state which document controls in a conflict.",
    related: [{ label: "Privacy Notice", href: "/legal/privacy-notice" }],
  },
  {
    id: "definitions",
    title: "Definitions",
    category: "SCOPE & PARTIES",
    warning: true,
    text: "Defined terms used in this DPA — including personal data, processing, controller, processor and subprocessor — carry the meanings given in applicable data-protection law and in Talvrin’s counsel-approved definitions. A term is not redefined informally on this page.",
    notice:
      "An approved definitions schedule has not been supplied. Individual definitions are not drafted here ahead of Legal approval.",
  },
  {
    id: "roles-of-the-parties",
    title: "Roles of the parties",
    category: "SCOPE & PARTIES",
    warning: true,
    text: "Whether Talvrin acts as processor, subprocessor or independent controller for a given service depends on an approved role matrix, not a single platform-wide label. Role language is never inferred from product marketing or support content.",
    notice:
      "A public role matrix has not yet been supplied by Legal/Privacy. This page does not assign a controller, processor or subprocessor role to Talvrin or the customer until that matrix is approved.",
    examples: [
      "A service that processes workspace data strictly on customer instructions would typically be described as a processor role once approved.",
      "Any role statement beyond this is treated as a publication blocker, not a design choice.",
    ],
  },
  {
    id: "documented-instructions",
    title: "Documented instructions",
    category: "INSTRUCTIONS & CONFIDENTIALITY",
    text: "Where Talvrin acts as processor, personal data is processed only on the customer’s documented instructions, including instructions reflected in the governing agreement and approved product configuration, except where applicable law requires otherwise.",
    callout:
      "Instruction handling is a contractual obligation, not a support-ticket workflow description — operational detail is owned by Legal/Privacy and Engineering.",
  },
  {
    id: "confidentiality",
    title: "Confidentiality",
    category: "INSTRUCTIONS & CONFIDENTIALITY",
    text: "Personnel authorized to process personal data are bound by confidentiality obligations, whether contractual or statutory. Access is limited to what is necessary to provide the product and meet documented instructions.",
    related: [{ label: "Security", href: "/trust/security" }],
  },
  {
    id: "security-measures",
    title: "Security measures",
    category: "SECURITY & SUBPROCESSORS",
    warning: true,
    text: "Technical and organizational measures protecting personal data are described only from an approved security schedule maintained by Security and Legal. This page distinguishes a public summary, where one exists, from confidential security detail.",
    notice:
      "An approved security measures schedule (Annex II) has not been supplied. No certification, control or technical-measure claim is published here until Security and Legal approve it.",
    related: [{ label: "Security", href: "/trust/security" }],
  },
  {
    id: "subprocessors",
    title: "Subprocessors",
    category: "SECURITY & SUBPROCESSORS",
    warning: true,
    text: "Talvrin may engage subprocessors to assist in providing the product, authorized under the governing agreement and subject to equivalent data-protection obligations. The current subprocessor list, change-notice process and objection rights are governed by an approved subprocessor register.",
    notice:
      "A public subprocessor register has not been supplied. Names, functions, locations and the notice/objection process are not listed until Procurement/Vendor Management and Legal approve that register.",
  },
  {
    id: "international-transfers",
    title: "International transfers",
    category: "TRANSFERS & RIGHTS ASSISTANCE",
    warning: true,
    text: "Where personal data is transferred across borders, Talvrin relies only on transfer mechanisms — such as standard contractual clauses or an adequacy basis — that are approved for the relevant regions. A transfer mechanism is never claimed without an approved package behind it.",
    notice:
      "An approved international-transfer package and regional schedules have not been supplied. No SCC, UK addendum, IDTA or adequacy claim is published until Legal/Privacy approves the applicable mechanism.",
  },
  {
    id: "data-subject-rights",
    title: "Assistance with data-subject rights",
    category: "TRANSFERS & RIGHTS ASSISTANCE",
    text: "Talvrin provides reasonable assistance to the customer in responding to verified data-subject requests consistent with applicable law and the governing agreement, taking into account the nature of the processing.",
    related: [{ label: "Privacy", href: "/trust/privacy" }],
  },
  {
    id: "security-incidents",
    title: "Security incidents",
    category: "INCIDENTS, DELETION & AUDIT",
    warning: true,
    text: "Talvrin notifies the customer of a confirmed security incident affecting their personal data without undue delay and cooperates on investigation, consistent with the governing agreement and applicable law.",
    notice:
      "Exact notification timeframes and incident-cooperation procedures are counsel-approved contract terms. A specific deadline is not published here until that approval exists.",
  },
  {
    id: "dpias-prior-consultation",
    title: "DPIAs and prior consultation",
    category: "INCIDENTS, DELETION & AUDIT",
    text: "Where legally applicable, Talvrin provides reasonably requested information to support the customer’s data protection impact assessments and any required prior consultation with a supervisory authority.",
  },
  {
    id: "return-and-deletion",
    title: "Return and deletion",
    category: "INCIDENTS, DELETION & AUDIT",
    warning: true,
    text: "At the end of the relevant service, Talvrin returns or deletes personal data in accordance with the customer’s choice and the governing agreement, subject to any legally required retention.",
    notice:
      "The approved deletion timetable and retention exceptions have not been supplied. A specific deletion period is not stated until Legal/Privacy approves it.",
  },
  {
    id: "audit-information-rights",
    title: "Audit and information rights",
    category: "INCIDENTS, DELETION & AUDIT",
    warning: true,
    text: "Talvrin makes available information reasonably necessary to demonstrate compliance with this DPA and permits audits consistent with an approved evidence and audit framework, distinguishing report-based evidence from any on-site audit right.",
    notice:
      "An approved audit/evidence framework has not been supplied. This page does not promise a specific audit mechanism or frequency until Legal and Security approve one.",
  },
  {
    id: "government-legal-requests",
    title: "Government and legal requests",
    category: "INCIDENTS, DELETION & AUDIT",
    warning: true,
    text: "Where legally permitted, Talvrin notifies the customer of a government or legal request for their personal data and may challenge an overbroad or unlawful request, consistent with approved policy.",
    notice:
      "Approved notification and challenge procedures for government requests have not been supplied.",
  },
  {
    id: "ai-automated-processing",
    title: "AI / automated processing",
    category: "AI, LOCATION & TERMS",
    text: "Where AI-enabled features process customer personal data, that processing is described only from approved product facts and remains subject to this DPA and Talvrin’s AI Terms. AI-assisted interpretation does not expand Talvrin’s processing authorization beyond documented instructions.",
    related: [
      { label: "AI Terms", href: "/legal/ai-terms" },
      { label: "AI Principles", href: "/trust/ai-principles" },
    ],
  },
  {
    id: "data-location-residency",
    title: "Data location / residency",
    category: "AI, LOCATION & TERMS",
    warning: true,
    text: "Processing locations and any residency commitment are stated only from an approved systems and vendor map, reflecting where personal data is actually processed and stored.",
    notice:
      "An approved processing-location map has not been supplied. No region-specific residency commitment is published until Product/Data Governance approves it.",
  },
  {
    id: "term-precedence-amendments",
    title: "Term, precedence and amendments",
    category: "AI, LOCATION & TERMS",
    text: "This DPA remains in effect for as long as Talvrin processes personal data under the governing agreement. Where a customer has a separately negotiated DPA, that agreement’s precedence terms govern and this public DPA does not by itself override it. Material amendments are reflected with an updated version and effective date.",
    callout:
      "If a negotiated DPA applies to your account, confirm with your Talvrin contract owner which document controls.",
  },
  {
    id: "annex-i-processing-details",
    title: "Annex I — Processing details",
    category: "ANNEXES & SCHEDULES",
    warning: true,
    text: "Annex I describes the categories of data subjects, personal data, processing nature, purpose and duration for in-scope services, drawn from an approved customer-processing data map.",
    notice:
      "An approved processing data map (RoPA) has not been supplied. Annex I is not populated with invented subject, data or purpose categories until Product/Data Governance and Privacy approve the source map.",
  },
  {
    id: "annex-ii-security-measures",
    title: "Annex II — Security measures",
    category: "ANNEXES & SCHEDULES",
    warning: true,
    text: "Annex II sets out the technical and organizational measures applicable to the service, maintained as a versioned schedule owned by Security and Legal.",
    notice:
      "The approved security measures schedule referenced in Section 6 has not been supplied; Annex II is not published until it is.",
  },
  {
    id: "annex-iii-subprocessors",
    title: "Annex III — Subprocessors",
    category: "ANNEXES & SCHEDULES",
    warning: true,
    text: "Annex III lists current subprocessors, or links to the canonical subprocessor register, with the exact version and effective date incorporated by this DPA.",
    notice:
      "The subprocessor register referenced in Section 7 has not been supplied; Annex III is not published until it is.",
  },
  {
    id: "regional-transfer-schedules",
    title: "Regional transfer schedules",
    category: "ANNEXES & SCHEDULES",
    warning: true,
    text: "Where applicable, region-specific transfer schedules — such as EU/UK or other jurisdictional modules — are incorporated by exact version and linked here once approved.",
    notice:
      "No regional transfer schedule has been approved for publication yet.",
  },
  {
    id: "contact-privacy-operations",
    title: "Contact / privacy operations",
    category: "ANNEXES & SCHEDULES",
    text: "Questions about this DPA, its annexes or a negotiated agreement’s precedence route to Talvrin’s privacy/contractual contact channel below.",
    related: [
      { label: "Contact Support", href: "/resources/contact-support" },
      { label: "Privacy", href: "/trust/privacy" },
    ],
  },
];

const sectionImages: Record<number, string> = {
  1: "dpa-section-laptop-charts.webp",
  3: "dpa-section-binder-review.webp",
  6: "dpa-section-desk-monitor.webp",
  8: "dpa-section-notebook-review.webp",
  12: "dpa-section-laptop-charts.webp",
  15: "dpa-section-binder-review.webp",
  20: "dpa-section-desk-monitor.webp",
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

export default function DPAContent() {
  return (
    <section
      id="dpa-content"
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
            aria-label="Data Processing Addendum table of contents"
            className="grid grid-cols-1 gap-x-4 gap-y-1 border-t border-slate-900/10 px-2 py-3 sm:grid-cols-2"
          >
            <TocLinks />
          </nav>
        </details>

        <nav
          aria-label="Data Processing Addendum table of contents"
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
                      ? "grid min-w-0 grid-cols-1 items-start gap-5 sm:grid-cols-[minmax(0,1fr)_150px] sm:gap-6 md:grid-cols-[minmax(0,1fr)_180px] xl:grid-cols-[minmax(0,1fr)_215px]"
                      : "min-w-0 sm:pr-[174px] md:pr-[204px] xl:pr-[239px]"
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

                    {section.examples && (
                      <div className="mt-4 sm:mt-5 rounded-[10px] border border-slate-900/10 bg-white p-4 sm:p-5">
                        <p className="mb-3 text-xs font-bold tracking-wide text-gray-600">
                          ILLUSTRATIVE — NON-EXHAUSTIVE
                        </p>

                        <ul className="space-y-2">
                          {section.examples.map((example) => (
                            <li
                              key={example}
                              className="flex items-start gap-2.5 text-xs sm:text-sm leading-5 text-gray-600"
                            >
                              <span className="mt-2 h-[5px] w-[5px] shrink-0 rounded-full bg-yellow-600" />
                              <span className="min-w-0 break-words">
                                {example}
                              </span>
                            </li>
                          ))}
                        </ul>
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
                    <div className="relative aspect-[3/2] w-full overflow-hidden rounded-xl sm:aspect-[4/5]">
                      <Image
                        src={`/images/legal/data-processing-addendum/${image}`}
                        alt={`Supporting illustration for ${section.title}`}
                        fill
                        sizes="(max-width: 639px) calc(100vw - 32px), (max-width: 767px) 150px, (max-width: 1279px) 180px, 215px"
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
