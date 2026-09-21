export type NavLink = {
  label: string;
  href: string;
};

export type NavGroup = {
  label: string;
  href: string;
  items: NavLink[];
};

/** Primary header navigation. Each entry with `items` renders as a dropdown. */
export const primaryNav: NavGroup[] = [
  {
    label: "Product",
    href: "/product",
    items: [
      { label: "Research Workspace", href: "/product/research-workspace" },
      { label: "Evidence", href: "/product/evidence" },
      { label: "Monitoring", href: "/product/monitoring" },
      { label: "Watchlists", href: "/product/watchlists" },
      { label: "Alerts", href: "/product/alerts" },
      { label: "AI Assistance", href: "/product/ai-assistance" },
      { label: "Platform Overview", href: "/product/platform-overview" },
    ],
  },
  {
    label: "Markets",
    href: "/markets",
    items: [
      { label: "Global Markets", href: "/markets/global-markets" },
      { label: "Fixed Income", href: "/markets/fixed-income" },
      { label: "Equities", href: "/markets/equities" },
      { label: "Macro & Economics", href: "/markets/macro-economics" },
      { label: "Funds & Other Assets", href: "/markets/funds-other-assets" },
      { label: "Market Coverage", href: "/markets/market-coverage" },
      { label: "Supported Jurisdictions", href: "/markets/supported-jurisdictions" },
    ],
  },
  {
    label: "Solutions",
    href: "/solutions",
    items: [
      { label: "Individual Investors", href: "/solutions/individual-investors" },
      { label: "Investment Professionals", href: "/solutions/investment-professionals" },
      { label: "Research Teams", href: "/solutions/research-teams" },
      { label: "Asset Managers", href: "/solutions/asset-managers" },
      { label: "Wealth & Advisory Research", href: "/solutions/wealth-advisory-research" },
      { label: "Financial Institutions", href: "/solutions/financial-institutions" },
      { label: "Enterprise", href: "/solutions/enterprise" },
    ],
  },
  {
    label: "Research",
    href: "/research",
    items: [
      { label: "Market Intelligence", href: "/research/market-intelligence" },
      { label: "Research Library", href: "/research/research-library" },
      { label: "Economic Calendar", href: "/research/economic-calendar" },
      { label: "Central Banks", href: "/research/central-banks" },
      { label: "Policy & Regulation", href: "/research/policy-regulation" },
      { label: "Market Explainers", href: "/research/market-explainers" },
      { label: "Talvrin Methodology", href: "/research/talvrin-methodology" },
    ],
  },
  {
    label: "Resources",
    href: "/resources",
    items: [
      { label: "Help Center", href: "/resources/help-center" },
      { label: "Getting Started", href: "/resources/getting-started" },
      { label: "Documentation", href: "/resources/documentation" },
      { label: "Research Guides", href: "/resources/research-guides" },
      { label: "Glossary", href: "/resources/glossary" },
      { label: "FAQs", href: "/resources/faqs" },
      { label: "Release Notes", href: "/resources/release-notes" },
      { label: "Contact Support", href: "/resources/contact-support" },
    ],
  },
  {
    label: "Trust",
    href: "/trust",
    items: [
      { label: "Trust Center", href: "/trust/trust-center" },
      { label: "Evidence Standards", href: "/trust/evidence-standards" },
      { label: "Data Sources", href: "/trust/data-sources" },
      { label: "Data Rights", href: "/trust/data-rights" },
      { label: "Security", href: "/trust/security" },
      { label: "Privacy", href: "/trust/privacy" },
      { label: "Global Data Governance", href: "/trust/global-data-governance" },
      { label: "AI Principles", href: "/trust/ai-principles" },
      { label: "Service Status", href: "/trust/service-status" },
    ],
  },
  {
    label: "Company",
    href: "/company",
    items: [
      { label: "About Talvrin", href: "/company/about-talvrin" },
      { label: "About Zoiko Markets", href: "/company/about-zoiko-markets" },
      { label: "Zoiko Financial Group", href: "/company/zoiko-financial-group" },
      { label: "Leadership", href: "/company/leadership" },
      { label: "Careers", href: "/company/careers" },
      { label: "Newsroom", href: "/company/newsroom" },
      { label: "Press & Media", href: "/company/press-media" },
      { label: "Contact", href: "/company/contact" },
    ],
  },
];

export type MegaMenuColumn = {
  heading: string;
  items: { title: string; description: string; href: string }[];
};

export type MegaMenuContent = {
  columns: MegaMenuColumn[];
  cta: { label: string; href: string };
};

/** Shared decorative image shown on the right of every header mega menu. */
export const menuImage = { src: "/images/menu/Frame%203.png", alt: "" };

/** Rich mega-menu content for the header dropdowns, keyed by primaryNav label. */
export const megaMenus: Record<string, MegaMenuContent> = {
  Product: {
    columns: [
      {
        heading: "Core Workflow",
        items: [
          {
            title: "Product Overview",
            description: "What Talvrin does and how the evidence workflow fits together.",
            href: "/product/overview",
          },
          {
            title: "Research Workspace",
            description: "Question-led research with source-linked context.",
            href: "/product/research-workspace",
          },
          {
            title: "Evidence",
            description: "Inspect provenance, source context and evidence relationships.",
            href: "/product/evidence",
          },
          {
            title: "Monitoring",
            description: "Keep research connected to meaningful evidence changes.",
            href: "/product/monitoring",
          },
        ],
      },
      {
        heading: "Work Management",
        items: [
          {
            title: "Watchlists",
            description: "Persistent research universes and evidence-change alerts.",
            href: "/product/watchlists",
          },
          {
            title: "Saved Research",
            description: "Return to saved research objects and preserved evidence states.",
            href: "/product/saved-research",
          },
          {
            title: "How Talvrin Works",
            description: "From question to evidence to monitored view.",
            href: "/product/how-talvrin-works",
          },
        ],
      },
      {
        heading: "Intelligence",
        items: [
          {
            title: "AI Assistance",
            description: "How AI helps navigate evidence without becoming the authority.",
            href: "/product/ai-assistance",
          },
          {
            title: "Source Intelligence",
            description: "How source context and provenance support research.",
            href: "/product/source-intelligence",
          },
          {
            title: "Change Detection",
            description: "How Talvrin identifies meaningful evidence changes.",
            href: "/product/change-detection",
          },
        ],
      },
    ],
    cta: { label: "Explore the Product", href: "/product/platform-overview" },
  },
  Markets: {
    columns: [
      {
        heading: "Coverage",
        items: [
          {
            title: "Market Coverage",
            description: "Canonical released-coverage matrix and market status.",
            href: "/markets/market-coverage",
          },
          {
            title: "Fixed Income",
            description: "Supported sovereign and other debt-market coverage.",
            href: "/markets/fixed-income",
          },
          {
            title: "Equities",
            description: "Supported public-company market coverage.",
            href: "/markets/equities",
          },
          {
            title: "Macro & Economics",
            description: "Economic releases, policy and macro evidence.",
            href: "/markets/macro-economics",
          },
        ],
      },
      {
        heading: "Initial Deep Coverage",
        items: [
          {
            title: "U.S. Treasuries",
            description: "Deep-coverage market page with explicit status.",
            href: "/markets/us-treasuries",
          },
          {
            title: "U.K. Gilts",
            description: "Deep-coverage market page with explicit status.",
            href: "/markets/uk-gilts",
          },
        ],
      },
      {
        heading: "Source Universe",
        items: [
          {
            title: "Central Banks",
            description: "Supported monetary-policy institutions and evidence.",
            href: "/markets/central-banks",
          },
          {
            title: "Regulators",
            description: "Supported public-market regulatory evidence.",
            href: "/markets/regulators",
          },
          {
            title: "Economic Statistics",
            description: "Official statistical releases and supporting context.",
            href: "/markets/economic-statistics",
          },
          {
            title: "Public Companies",
            description: "Issuer disclosures and supported company evidence.",
            href: "/markets/public-companies",
          },
        ],
      },
    ],
    cta: { label: "View Market Coverage", href: "/markets/market-coverage" },
  },
  Solutions: {
    columns: [
      {
        heading: "Investors & Professionals",
        items: [
          {
            title: "Individual Investors",
            description: "Evidence-led research for serious self-directed investors.",
            href: "/solutions/individual-investors",
          },
          {
            title: "Investment Professionals",
            description: "Source-linked research and monitoring for professional workflows.",
            href: "/solutions/investment-professionals",
          },
          {
            title: "Research Teams",
            description: "Shared, repeatable evidence and monitoring workflows.",
            href: "/solutions/research-teams",
          },
        ],
      },
      {
        heading: "Institutions",
        items: [
          {
            title: "Asset Managers",
            description: "Research workflows for asset-management teams.",
            href: "/solutions/asset-managers",
          },
          {
            title: "Wealth & Advisory Research",
            description: "Evidence infrastructure for research supporting advisory teams.",
            href: "/solutions/wealth-advisory-research",
          },
          {
            title: "Financial Institutions",
            description: "Governed evidence and research capabilities for institutions.",
            href: "/solutions/financial-institutions",
          },
          {
            title: "Enterprise",
            description: "Enterprise access, controls, integrations and commercial inquiry.",
            href: "/solutions/enterprise",
          },
        ],
      },
    ],
    cta: { label: "Find Your Talvrin Workflow", href: "/solutions" },
  },
  Research: {
    columns: [
      {
        heading: "Intelligence",
        items: [
          {
            title: "Market Intelligence",
            description: "Current evidence-led public-market intelligence.",
            href: "/research/market-intelligence",
          },
          {
            title: "Research Library",
            description: "Browse published Talvrin research by topic, market and entity.",
            href: "/research/research-library",
          },
          {
            title: "Economic Calendar",
            description: "Upcoming and released economic events with source context.",
            href: "/research/economic-calendar",
          },
          {
            title: "Policy & Regulatory Intelligence",
            description: "Public policy and regulatory evidence affecting markets.",
            href: "/research/policy-regulatory-intelligence",
          },
        ],
      },
      {
        heading: "Learn",
        items: [
          {
            title: "Market Explainers",
            description: "Clear explanations of market concepts and evidence.",
            href: "/research/market-explainers",
          },
          {
            title: "Talvrin Methodology",
            description: "How Talvrin constructs and presents research.",
            href: "/research/talvrin-methodology",
          },
          {
            title: "Source Methodology",
            description: "How sources are classified, verified and contextualized.",
            href: "/research/source-methodology",
          },
          {
            title: "Glossary",
            description: "Definitions for markets, evidence and product terminology.",
            href: "/research/glossary",
          },
        ],
      },
    ],
    cta: { label: "Explore Research", href: "/research/research-library" },
  },
  Trust: {
    columns: [
      {
        heading: "Evidence & Data",
        items: [
          {
            title: "Trust Center",
            description: "Single entry point for Talvrin's trust model.",
            href: "/trust/trust-center",
          },
          {
            title: "Evidence Standards",
            description: "How evidence is sourced, classified and presented.",
            href: "/trust/evidence-standards",
          },
          {
            title: "Data Sources",
            description: "High-level source categories and sourcing principles.",
            href: "/trust/data-sources",
          },
          {
            title: "Data Rights",
            description: "How rights, licensing and permitted use are governed.",
            href: "/trust/data-rights",
          },
        ],
      },
      {
        heading: "Security & Governance",
        items: [
          {
            title: "Security",
            description: "Security controls and assurance posture appropriate for public disclosure.",
            href: "/trust/security",
          },
          {
            title: "Privacy",
            description: "Talvrin privacy information and user-data principles.",
            href: "/trust/privacy",
          },
          {
            title: "Global Data Governance",
            description: "Jurisdiction, regional execution and governance approach.",
            href: "/trust/global-data-governance",
          },
          {
            title: "AI Principles",
            description: "AI boundaries, provenance and human-verification expectations.",
            href: "/trust/ai-principles",
          },
          {
            title: "Service Status",
            description: "Operational status when a real status service exists.",
            href: "/trust/service-status",
          },
        ],
      },
    ],
    cta: { label: "Open Trust Center", href: "/trust/trust-center" },
  },
  Resources: {
    columns: [
      {
        heading: "Get Started",
        items: [
          {
            title: "Help Center",
            description: "Support content for common product and account questions.",
            href: "/resources/help-center",
          },
          {
            title: "Getting Started",
            description: "First-use guidance for new Talvrin users.",
            href: "/resources/getting-started",
          },
          {
            title: "Research Guides",
            description: "Practical guides for evidence-led research workflows.",
            href: "/resources/research-guides",
          },
        ],
      },
      {
        heading: "Documentation",
        items: [
          {
            title: "Documentation",
            description: "Public product and technical documentation.",
            href: "/resources/documentation",
          },
          {
            title: "API & Integrations",
            description: "Developer resources only when externally available.",
            href: "/developers/api-documentation",
          },
          {
            title: "Release Notes",
            description: "Product changes, additions and relevant deprecations.",
            href: "/resources/release-notes",
          },
          {
            title: "Contact Support",
            description: "Route to support without exposing private account data.",
            href: "/resources/contact-support",
          },
        ],
      },
    ],
    cta: { label: "Browse Resources", href: "/resources/help-center" },
  },
  Company: {
    columns: [
      {
        heading: "Company",
        items: [
          {
            title: "About Talvrin",
            description: "Company, category and product purpose.",
            href: "/company/about-talvrin",
          },
          {
            title: "Leadership",
            description: "Approved leadership information.",
            href: "/company/leadership",
          },
          {
            title: "Careers",
            description: "Open roles and Talvrin employment information.",
            href: "/company/careers",
          },
        ],
      },
      {
        heading: "News & Contact",
        items: [
          {
            title: "Newsroom",
            description: "Official announcements and media resources.",
            href: "/company/newsroom",
          },
          {
            title: "Contact",
            description: "General, media, partnership and enterprise contact routes.",
            href: "/company/contact",
          },
          {
            title: "Legal & Policies",
            description: "Canonical index of public legal and policy documents.",
            href: "/legal",
          },
        ],
      },
    ],
    cta: { label: "About Talvrin", href: "/company/about-talvrin" },
  },
};

/** Footer column groups (first row mirrors the primary nav, second row adds site-wide utility links). */
export const footerNav: NavGroup[] = [
  ...primaryNav,
  {
    label: "Developers",
    href: "/developers",
    items: [
      { label: "Developer Overview", href: "/developers/overview" },
      { label: "API Documentation", href: "/developers/api-documentation" },
      { label: "Data APIs", href: "/developers/data-apis" },
      { label: "Integrations", href: "/developers/integrations" },
      { label: "Authentication", href: "/developers/authentication" },
      { label: "SDKs", href: "/developers/sdks" },
      { label: "Developer Status", href: "/developers/status" },
      { label: "Changelog", href: "/developers/changelog" },
    ],
  },
  {
    label: "Support",
    href: "/support",
    items: [
      { label: "Help Center", href: "/support/help-center" },
      { label: "Contact Support", href: "/support/contact-support" },
      { label: "Account Support", href: "/support/account-support" },
      { label: "Accessibility Support", href: "/support/accessibility-support" },
      { label: "Report a Problem", href: "/support/report-a-problem" },
      { label: "System Status", href: "/support/system-status" },
      { label: "Security Contact", href: "/support/security-contact" },
    ],
  },
  {
    label: "Global",
    href: "/global",
    items: [
      { label: "Global Coverage", href: "/global/coverage" },
      { label: "Americas", href: "/global/americas" },
      { label: "Europe", href: "/global/europe" },
      { label: "Asia-Pacific", href: "/global/asia-pacific" },
      { label: "Middle East", href: "/global/middle-east" },
      { label: "Africa", href: "/global/africa" },
      { label: "Global Institutions", href: "/global/institutions" },
      { label: "Language & Region", href: "/global/language-region" },
    ],
  },
  {
    label: "Legal",
    href: "/legal",
    items: [
      { label: "Terms of Service", href: "/legal/terms-of-service" },
      { label: "Privacy Notice", href: "/legal/privacy-notice" },
      { label: "Cookie Notice", href: "/legal/cookie-notice" },
      { label: "Acceptable Use", href: "/legal/acceptable-use" },
      { label: "Accessibility", href: "/legal/accessibility" },
      { label: "Data Processing Addendum", href: "/legal/data-processing-addendum" },
      { label: "AI Terms", href: "/legal/ai-terms" },
      { label: "Data & Market Information Terms", href: "/legal/data-market-information-terms" },
      { label: "Legal Notices", href: "/legal/legal-notices" },
    ],
  },
  {
    label: "Connect",
    href: "/connect",
    items: [
      { label: "Contact Talvrin", href: "/connect/contact-talvrin" },
      { label: "Request Access", href: "/request-access" },
      { label: "Enterprise Enquiries", href: "/connect/enterprise-enquiries" },
      { label: "Press Enquiries", href: "/connect/press-enquiries" },
      { label: "Partnerships", href: "/connect/partnerships" },
      { label: "Data Provider Enquiries", href: "/connect/data-provider-enquiries" },
      { label: "Careers", href: "/company/careers" },
    ],
  },
];

export const footerDisclosures: { title: string; body: string }[] = [
  {
    title: "Corporate Identity",
    body: "Talvrin is a trading name of Zoiko Markets, a Zoiko Financial Group company.",
  },
  {
    title: "Research / Non-Advice Position",
    body: "Information is provided for research purposes and does not constitute investment, legal, tax or other professional advice, or a recommendation to buy or sell any financial instrument.",
  },
  {
    title: "Market and Source Information",
    body: "Market, issuer and third-party information may be subject to source, licensing, timing and entitlement conditions. Review underlying sources and exercise independent professional judgment.",
  },
  {
    title: "AI-Assisted Output",
    body: "AI-assisted outputs may contain errors or omissions and should not be treated as authoritative evidence. Supporting sources should be reviewed independently.",
  },
];

export const footerLegalLinks: NavLink[] = [
  { label: "Terms", href: "/legal/terms-of-service" },
  { label: "Privacy", href: "/legal/privacy-notice" },
  { label: "Cookies", href: "/legal/cookie-notice" },
  { label: "Accessibility", href: "/legal/accessibility" },
  { label: "Legal", href: "/legal" },
  { label: "Cookie Preferences", href: "/legal/cookie-preferences" },
];

export const socialLinks: { label: string; href: string }[] = [
  { label: "LinkedIn", href: "https://www.linkedin.com" },
  { label: "X", href: "https://x.com" },
  { label: "YouTube", href: "https://www.youtube.com" },
];

export const officeLocations: { title: string; lines: string[] }[] = [
  {
    title: "Global Headquarters",
    lines: ["1401 21st Street, Suite R", "Sacramento, CA 95811, USA"],
  },
  {
    title: "European Headquarters",
    lines: ["167-169 Great Portland Street, 5th Floor", "London W1W 5PF, UK"],
  },
];
