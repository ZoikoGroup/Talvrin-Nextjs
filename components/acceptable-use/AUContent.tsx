import Image from "next/image";

const sections = [
  {
    title: "Who this policy applies to",
    text: "This policy applies to anyone who creates a Talvrin account, accesses Talvrin as an authorized user, administers a workspace, or connects to Talvrin through an approved API or integration — including prospective users evaluating the platform.",
    related: ["Enterprise"],
  },
  {
    title: "General responsible-use rule",
    category: "LAWFUL & RESPONSIBLE USE",
    text: "Use Talvrin lawfully, responsibly, and within the rights and entitlements attached to your account. Talvrin’s Terms of Service govern your legal relationship with Talvrin; this page explains what responsible use means within that relationship.",
    related: ["Platform Overview"],
  },
  {
    title: "Accounts, credentials and authorized access",
    category: "ACCOUNT INTEGRITY",
    text: "Keep your login credentials confidential, use only the access granted to your account or workspace, and do not attempt to access data, features or other accounts beyond your authorized entitlement. Account-sharing and seat rules follow your organization’s actual plan entitlements rather than a blanket prohibition stated here.",
    examples: [
      "Sharing your login credentials with someone outside your authorized account or workspace.",
      "Attempting to access another user’s account, workspace or data without authorization.",
      "Using access granted under one entitlement tier to reach features or data reserved for another.",
    ],
    related: ["Account Support", "Enterprise"],
  },
  {
    title: "Security abuse and interference",
    category: "SECURITY",
    text: "Do not attempt to bypass, disable, probe or interfere with Talvrin’s security controls, infrastructure or service availability. This section describes prohibited behavior — it does not claim specific detection methods or monitoring capabilities.",
    examples: [
      "Attempting to bypass, disable or probe authentication, access controls or infrastructure.",
      "Testing for vulnerabilities without Talvrin’s prior written permission.",
      "Taking action intended to disrupt or degrade service availability for other users.",
    ],
    related: ["Security", "System Status"],
  },
  {
    title: "Automation, scraping and circumvention",
    category: "AUTOMATION",
    text: "Automated access, scraping or circumvention of access controls is only permitted where your account entitlement, an approved API agreement or integration terms explicitly allow it.",
    notice:
      "Talvrin has not supplied an approved automation, rate-limit or machine-use registry. Numeric thresholds, request caps and export limits are not published here.",
    related: ["API Documentation", "Developer Overview"],
  },
  {
    title: "Data, source rights and access entitlements",
    category: "DATA & RIGHTS",
    text: "Viewing evidence inside Talvrin does not itself grant rights to copy, extract, cache or reuse the underlying source or market data beyond your license or entitlement. Access to a source is separate from the right to reuse it.",
    examples: [
      "Copying, extracting or caching licensed source or market data beyond your entitlement.",
      "Treating visibility of evidence as a license to reuse the underlying source material.",
      "Combining Talvrin data with other datasets in ways your license does not permit.",
    ],
    related: ["Data Rights", "Evidence Standards"],
  },
  {
    title: "Redistribution, republication and export",
    category: "DATA & RIGHTS",
    text: "Do not redistribute, republish, resell or sublicense Talvrin research, evidence views, or licensed source and market data outside your entitlement.",
    examples: [
      "Reselling, sublicensing or redistributing Talvrin research or licensed data outside your entitlement.",
      "Publishing or mirroring evidence views in ways that bypass source rights or access controls.",
    ],
    related: ["Data Rights"],
  },
  {
    title: "AI-assisted features and misuse",
    category: "AI",
    text: "Talvrin’s AI assistance is a research aid, not authoritative evidence, and must remain distinguishable from the underlying source material. Do not use AI-assisted output to misrepresent authorship, evidence provenance, or model-generated content as verified fact.",
    examples: [
      "Presenting AI-assisted output as independently verified evidence without disclosure.",
      "Using AI features to fabricate or misattribute source material.",
      "Relying on AI-generated text as a substitute for reviewing the underlying evidence.",
    ],
    related: ["AI Principles", "AI Assistance"],
  },
  {
    title: "Research, trading and recommendation boundaries",
    category: "LAWFUL & RESPONSIBLE USE",
    text: "Talvrin is a research and intelligence platform, not a brokerage or trade-execution service. Do not represent Talvrin as executing trades, providing personalized financial advice, or manufacturing buy/sell/hold recommendations.",
    notice:
      "This describes Talvrin’s product boundary. It does not create a new restriction on how you personally use research to make your own investment decisions.",
    related: ["Platform Overview", "Methodology"],
  },
  {
    title: "Fraud, impersonation and misrepresentation",
    category: "LAWFUL & RESPONSIBLE USE",
    text: "Do not impersonate another person, organization or source; misrepresent your identity or affiliation; or misrepresent the origin, authenticity or publication status of evidence presented on Talvrin.",
    examples: [
      "Impersonating another person, organization or source.",
      "Misrepresenting your identity, affiliation or authority to act on behalf of an organization.",
      "Misrepresenting the origin, authenticity or publication status of evidence.",
    ],
  },
  {
    title: "Illegal or harmful activity",
    category: "LAWFUL & RESPONSIBLE USE",
    text: "Do not use Talvrin to facilitate illegal activity or to cause harm to others, consistent with applicable law. Additional specific categories publish only once Legal approves them.",
  },
  {
    title: "Malware, malicious code and disruption",
    category: "SECURITY",
    text: "Do not upload, transmit or introduce malware, malicious code, or anything designed to disrupt Talvrin’s services, accounts or other users.",
    examples: [
      "Uploading or transmitting malware, ransomware or other malicious code.",
      "Attempting to introduce code designed to disrupt Talvrin’s services or other users’ accounts.",
    ],
    related: ["Security"],
  },
  {
    title: "Privacy and personal-data misuse",
    category: "LAWFUL & RESPONSIBLE USE",
    text: "Do not unlawfully collect, disclose or misuse another person’s personal data through Talvrin, and do not use the platform to violate others’ privacy rights.",
    examples: [
      "Collecting or disclosing another person’s personal data obtained through Talvrin without a lawful basis.",
      "Using Talvrin to build unauthorized profiles of individuals from evidence or source material.",
    ],
    related: ["Privacy"],
  },
  {
    title: "Intellectual-property misuse",
    category: "DATA & RIGHTS",
    text: "Respect Talvrin’s intellectual property and the rights of third-party sources. Do not remove attribution, provenance or rights/access-state information from evidence views, and do not use Talvrin’s trademarks or proprietary content without authorization.",
    examples: [
      "Removing attribution, provenance or rights/access-state information from evidence views.",
      "Using Talvrin’s trademarks, interface design or proprietary content without authorization.",
    ],
    related: ["Evidence Standards", "Data Rights"],
  },
  {
    title: "Spam / unsolicited abuse",
    category: "LAWFUL & RESPONSIBLE USE",
    pending: true,
    text: "Rules for spam and unsolicited-communication abuse apply only where a relevant product surface — such as sharing or messaging — makes them applicable.",
    notice:
      "Talvrin has not supplied product surfaces where spam-specific rules currently apply. This module activates only if such a surface requires it.",
  },
  {
    title: "High-risk / regulated activity limits",
    category: "LAWFUL & RESPONSIBLE USE",
    pending: true,
    text: "Additional limits for high-risk or regulated activity publish only for categories that Product and Legal have specifically approved.",
    notice:
      "No high-risk or regulated-activity category has been approved for publication on this page yet.",
  },
  {
    title: "Reporting suspected abuse",
    text: "Report suspected abuse, security issues or policy violations through Talvrin’s support and security channels. When reporting, share only the information needed to investigate an issue — never send passwords or other account secrets.",
    related: ["Report a Problem", "Security Contact", "Contact Support"],
  },
  {
    title: "Enforcement and remediation",
    pending: true,
    text: "Talvrin may take account-level action in response to a violation of this policy, consistent with the Terms of Service.",
    notice:
      "The specific types of enforcement action, the conditions that trigger them, and any related review process are governed by an internal Enforcement Action Matrix that has not yet been approved for publication on this page. No warning, restriction, suspension, termination or appeal promise is stated here beyond what that approved matrix supports.",
  },
  {
    title: "Appeal / review",
    pending: true,
    text: "An appeal or review process will be described here once one is approved for this policy.",
    notice:
      "No approved appeal or review process currently exists for this policy. This section will be completed once Legal and Support confirm a real process.",
  },
  {
    title: "Changes to this policy",
    pending: true,
    text: "Talvrin may update this policy as the product, security posture or legal requirements evolve. Material changes are reflected in the version history with an updated effective date.",
    notice: "A public version-history view for this policy is not yet available.",
  },
];

const sectionImages: Record<number, string> = {
  1: "image1.png",
  3: "image2.png",
  5: "image3.png",
  7: "image4.png",
  9: "image5.png",
  11: "image6.png",
  13: "image7.png",
  15: "image8.png",
  17: "image9.png",
  19: "image10.png",
};

function makeId(title: string) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export default function AUContent() {
  return (
    <section className="w-full bg-violet-50 font-['IBM_Plex_Sans']">
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-8 px-4 sm:px-6 md:px-8 lg:px-12 lg:py-14 xl:grid-cols-[264px_minmax(0,1fr)] xl:gap-[34px] xl:px-20 xl:py-[72px]">
        <aside className="self-start xl:sticky xl:top-8">
          <div className="rounded-xl border border-slate-900/10 bg-white/70 p-4 xl:border-0 xl:bg-transparent xl:p-0">
            <p className="mb-3 text-xs font-bold tracking-wide text-gray-600">
              ON THIS PAGE
            </p>

            <nav className="flex max-h-[220px] sm:max-h-[280px] xl:max-h-[calc(100vh-6rem)] flex-col gap-0.5 overflow-y-auto">
              {sections.map((section, index) => (
                <a
                  key={section.title}
                  href={`#${makeId(section.title)}`}
                  className="flex items-start gap-2 rounded-md px-2.5 py-1.5 sm:py-2 text-xs sm:text-sm leading-5 text-slate-700 transition-colors hover:bg-white hover:text-indigo-500"
                >
                  <span className="shrink-0 text-gray-500">
                    {index + 1}.
                  </span>
                  <span>{section.title}</span>
                </a>
              ))}
            </nav>
          </div>
        </aside>

        <div className="min-w-0">
          {sections.map((section, index) => {
            const number = index + 1;
            const image = sectionImages[number];

            return (
              <article
                key={section.title}
                id={makeId(section.title)}
                className="scroll-mt-8 border-b border-slate-900/10 py-6 sm:py-8 lg:py-10 first:pt-0"
              >
                <div
                  className={`grid min-w-0 grid-cols-1 gap-6 ${
                    image
                      ? "lg:grid-cols-[minmax(0,1fr)_220px] xl:grid-cols-[minmax(0,1fr)_224px]"
                      : ""
                  }`}
                >
                  <div className="min-w-0">
                    <div className="mb-3 flex flex-wrap items-center gap-2">
                      {section.category && (
                        <span className="inline-flex rounded-full bg-indigo-500/10 px-2.5 py-1 text-xs font-bold tracking-wide text-indigo-500">
                          {section.category}
                        </span>
                      )}

                      {section.pending && (
                        <span className="inline-flex rounded-full bg-yellow-600/10 px-2.5 py-1 text-xs font-bold tracking-wide text-yellow-800">
                          NO APPROVED RULE PUBLISHED YET
                        </span>
                      )}
                    </div>

                    <h2 className="text-xl font-bold leading-7 text-slate-900">
                      {number}. {section.title}
                    </h2>

                    <p className="mt-3 text-base leading-6 text-slate-700">
                      {section.text}
                    </p>

                    {section.examples && (
                      <div className="mt-5 rounded-[10px] border border-slate-900/10 bg-white px-4 py-5">
                        <p className="mb-3 text-xs font-bold tracking-wide text-gray-600">
                          ILLUSTRATIVE EXAMPLES — NON-EXHAUSTIVE
                        </p>

                        <ul className="space-y-2">
                          {section.examples.map((example) => (
                            <li
                              key={example}
                              className="flex items-start gap-2.5 text-sm leading-5 text-gray-600"
                            >
                              <span className="mt-2 h-[5px] w-[5px] shrink-0 rounded-full bg-yellow-600" />
                              <span>{example}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {section.notice && (
                      <div className="mt-5 rounded-[10px] border border-yellow-600/25 bg-yellow-600/10 px-4 py-3.5 text-sm leading-5 text-yellow-900">
                        {section.notice}
                      </div>
                    )}

                    {section.related && (
                      <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2">
                        <span className="text-xs font-semibold text-gray-600">
                          Related:
                        </span>

                        {section.related.map((item) => (
                          <span
                            key={item}
                            className="text-sm font-semibold text-indigo-500"
                          >
                            {item} →
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  {image && (
                    <div className="relative h-[220px] w-full overflow-hidden rounded-xl sm:h-[280px] lg:h-[220px]">
                      <Image
                        src={`/images/legal/acceptable-use/${image}`}
                        alt={`Illustration for ${section.title}`}
                        fill
                        sizes="(max-width: 1023px) 100vw, 224px"
                        className="object-cover"
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