export type DocGroup = "core" | "enterprise";

export type LegalDoc = {
  title: string;
  version: string;
  summary: string;
  href: string;
  group: DocGroup;
  /** Extra words the hero search should match on. */
  keywords: string;
};

export const DOC_TYPES: { value: DocGroup | "all"; label: string }[] = [
  { value: "all", label: "All document types" },
  { value: "core", label: "Core documents" },
  { value: "enterprise", label: "Enterprise & other notices" },
];

export const LEGAL_DOCS: LegalDoc[] = [
  {
    title: "Terms of Service",
    version: "Version 1.0",
    summary: "The contractual terms governing your access to and use of Talvrin.",
    href: "/legal/terms-of-service",
    group: "core",
    keywords: "contract agreement account use",
  },
  {
    title: "Privacy Notice",
    version: "Version 1.0",
    summary:
      "How Talvrin collects, uses, shares and protects personal data, and how to exercise your rights.",
    href: "/legal/privacy-notice",
    group: "core",
    keywords: "personal data gdpr rights access delete",
  },
  {
    title: "Cookie & Tracking Notice",
    version: "Version 1.0",
    summary:
      "How Talvrin uses cookies, local storage, SDKs, pixels and similar technologies across its public experience.",
    href: "/legal/cookie-notice",
    group: "core",
    keywords: "cookies tracking consent preferences",
  },
  {
    title: "AI Terms",
    version: "Version 1.0",
    summary:
      "Terms governing how Talvrin’s AI-assisted features may be used, and what to verify before relying on them.",
    href: "/legal/ai-terms",
    group: "core",
    keywords: "artificial intelligence assistant model",
  },
  {
    title: "Accessibility Statement",
    version: "Version 1.0",
    summary: "How Talvrin designs, tests and governs accessibility across its public experience.",
    href: "/legal/accessibility",
    group: "core",
    keywords: "wcag disability assistive",
  },
  {
    title: "Data & Market Information Terms",
    version: "Version 1.0",
    summary:
      "Terms governing use of market information, source content and related evidence available on Talvrin.",
    href: "/legal/data-market-information-terms",
    group: "core",
    keywords: "market data licensing source rights redistribution",
  },
  {
    title: "Acceptable Use Policy",
    version: "Version 1.0",
    summary:
      "Rules for responsible use of Talvrin and related services, written to protect accounts, evidence integrity and other users.",
    href: "/legal/acceptable-use",
    group: "enterprise",
    keywords: "aup scraping automated access misuse",
  },
  {
    title: "Data Processing Addendum",
    version: "Version 1.0",
    summary:
      "The contractual framework that applies when Talvrin processes personal data on a customer’s behalf.",
    href: "/legal/data-processing-addendum",
    group: "enterprise",
    keywords: "dpa processor controller enterprise",
  },
];
