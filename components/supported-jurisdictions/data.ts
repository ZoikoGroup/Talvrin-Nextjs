export type Status = "verified" | "assessment" | "not-assessed";

export const STATUS_LABEL: Record<Status, string> = {
  verified: "Verified Supported",
  assessment: "In Assessment",
  "not-assessed": "Not Assessed",
};

/** Text colour for a status label. */
export const STATUS_TEXT: Record<Status, string> = {
  verified: "text-accent-violet",
  assessment: "text-accent-amber",
  "not-assessed": "text-slate-400",
};

/** Pill styling (background + outline) for a status badge. */
export const STATUS_PILL: Record<Exclude<Status, "not-assessed">, string> = {
  verified: "bg-accent-violet/10 border-accent-violet/30 text-accent-violet",
  assessment: "bg-accent-amber/10 border-accent-amber/30 text-accent-amber",
};

export const DIMENSIONS = [
  "Fixed Income",
  "Equities",
  "Macro & Economics",
  "Funds & Other Assets",
] as const;

export type Dimension = (typeof DIMENSIONS)[number];

export type Jurisdiction = {
  name: string;
  /** Short column label for the dimension grid. */
  shortName: string;
  status: Exclude<Status, "not-assessed">;
  owner: string;
  reviewed: string;
  dimensions: Record<Dimension, Status>;
  sourceClass: string;
  limitation: string;
};

export const JURISDICTIONS: Jurisdiction[] = [
  {
    name: "United States",
    shortName: "United States",
    status: "verified",
    owner: "Coverage Operations",
    reviewed: "28 Aug 2026",
    dimensions: {
      "Fixed Income": "verified",
      Equities: "verified",
      "Macro & Economics": "verified",
      "Funds & Other Assets": "not-assessed",
    },
    sourceClass:
      "Official / Primary — U.S. Treasury, Federal Reserve, SEC and exchange filings, official U.S. statistical agencies.",
    limitation:
      "Confirms evidence and research display only — not a trading, custody or investment-advisory authorization in this market.",
  },
  {
    name: "United Kingdom",
    shortName: "United Kingdom",
    status: "verified",
    owner: "Coverage Operations",
    reviewed: "28 Aug 2026",
    dimensions: {
      "Fixed Income": "verified",
      Equities: "not-assessed",
      "Macro & Economics": "verified",
      "Funds & Other Assets": "not-assessed",
    },
    sourceClass: "Official / Primary — HM Treasury, Bank of England, UK Debt Management Office.",
    limitation:
      "Verified for Gilts and macro evidence only; U.K. equities and funds coverage has not been separately assessed.",
  },
  {
    name: "Eurozone (subset of member states)",
    shortName: "Eurozone",
    status: "assessment",
    owner: "Market Coverage",
    reviewed: "12 Aug 2026",
    dimensions: {
      "Fixed Income": "assessment",
      Equities: "not-assessed",
      "Macro & Economics": "not-assessed",
      "Funds & Other Assets": "not-assessed",
    },
    sourceClass:
      "Official — a subset of eurozone national treasuries and the European Central Bank.",
    limitation:
      "Only a subset of eurozone sovereign issuers is under review; no eurozone market is Verified Supported yet.",
  },
  {
    name: "Japan",
    shortName: "Japan",
    status: "assessment",
    owner: "Market Coverage",
    reviewed: "2 Jul 2026",
    dimensions: {
      "Fixed Income": "assessment",
      Equities: "not-assessed",
      "Macro & Economics": "not-assessed",
      "Funds & Other Assets": "not-assessed",
    },
    sourceClass:
      "Published explainer and methodology content precedes formal source and data-rights review.",
    limitation:
      "Research explainer content exists ahead of jurisdiction-level legal and data-rights confirmation; treat as background reference only.",
  },
];
