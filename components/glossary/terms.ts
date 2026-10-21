export type GlossaryTerm = {
  term: string;
  topic: string;
  definition: string;
};

/** Topics in display order. `published: false` = topic has no approved terms yet. */
export const topics: { label: string; published: boolean }[] = [
  { label: "Equities", published: true },
  { label: "Fixed Income", published: true },
  { label: "Funds & ETFs", published: true },
  { label: "FX", published: false },
  { label: "Macro & Rates", published: true },
  { label: "Digital Assets", published: false },
  { label: "Financial Statements", published: true },
  { label: "Research & Evidence", published: true },
];

// Published terms only, sorted A–Z.
export const terms: GlossaryTerm[] = [
  {
    term: "As-of date",
    topic: "Research & Evidence",
    definition:
      "The date a fact purports to describe — distinct from when it was published or when Talvrin recorded it. A figure can be accurate as of one date and out of date now.",
  },
  {
    term: "Basis point (bp)",
    topic: "Macro & Rates",
    definition:
      "One hundredth of one percentage point. A 25 bp increase means +0.25 percentage points — not a 25% relative change.",
  },
  {
    term: "Earnings per share (EPS)",
    topic: "Financial Statements",
    definition:
      "Profit attributable to ordinary shareholders ÷ weighted-average ordinary shares outstanding. Basic and diluted EPS differ, and the applicable reporting standard affects the inputs.",
  },
  {
    term: "Enterprise value (EV)",
    topic: "Equities",
    definition:
      "A firm-valuation measure generally starting with equity value and adding net debt and other claims. Components vary by provider, so the calculation basis should always be stated.",
  },
  {
    term: "Free cash flow (FCF)",
    topic: "Financial Statements",
    definition:
      "Cash generation after a defined level of capital expenditure. Calculation methods vary, so Talvrin shows the method and inputs rather than a single universal figure.",
  },
  {
    term: "Market capitalization",
    topic: "Equities",
    definition:
      "Share price × applicable shares outstanding at a stated time and share-class basis. It measures equity value only, not the value of the whole enterprise.",
  },
  {
    term: "Modified duration",
    topic: "Fixed Income",
    definition:
      "An estimate of a bond price's percentage response to a small, parallel change in yield. It is a first-order approximation that becomes less accurate for large yield moves.",
  },
  {
    term: "Net asset value (NAV)",
    topic: "Funds & ETFs",
    definition:
      "A fund's assets less liabilities under its valuation rules, often expressed per share or unit. An ETF's market price can trade above or below its NAV.",
  },
  {
    term: "Source conflict",
    topic: "Research & Evidence",
    definition:
      "Two admissible records materially disagree for the same asserted fact. Both are shown with their scope, and the disputed value is excluded from calculations until resolved.",
  },
  {
    term: "Yield to maturity (YTM)",
    topic: "Fixed Income",
    definition:
      "A yield implied by a bond's price and assumed cash flows to maturity, assuming every payment is made as scheduled and reinvested at the same rate.",
  },
];
