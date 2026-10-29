import type { MethodRecord } from "./types";

/**
 * Versioned deterministic calculation and validation methods. The model may
 * reference these records but never computes or alters their outputs.
 */
export const METHODS = {
  revenueGrowth: {
    id: "m-revenue-growth",
    name: "Year-on-year revenue growth",
    version: "v1.4",
    summary:
      "Growth = (current period revenue − prior period revenue) ÷ prior period revenue, using values exactly as reported in the cited filing.",
    inputs: ["Reported revenue, current period", "Reported revenue, prior period"],
    limitations: [
      "Does not adjust for acquisitions, disposals, currency movement or restatements.",
      "Both periods must use the same presentation basis.",
    ],
  },
  operatingMargin: {
    id: "m-operating-margin",
    name: "Operating margin",
    version: "v1.3",
    summary: "Operating margin = operating profit ÷ revenue, using reported values.",
    inputs: ["Operating profit", "Revenue"],
    limitations: [
      "Operating profit definitions can differ between issuers and accounting frameworks.",
      "Not a measure of cash generation.",
    ],
  },
  yield: {
    id: "m-yield",
    name: "Yield to maturity (cash-flow discounting)",
    version: "v2.1",
    summary:
      "Solves for the single periodic discount rate that equates the present value of remaining coupons and principal to the dirty price.",
    inputs: ["Clean price", "Accrued interest", "Coupon schedule", "Maturity date"],
    limitations: [
      "Assumes the bond is held to maturity and all cash flows are received in full.",
      "Does not model taxes, transaction costs or settlement conventions beyond the cited note.",
    ],
  },
  duration: {
    id: "m-duration",
    name: "Macaulay and modified duration",
    version: "v2.1",
    summary:
      "Macaulay duration is the present-value-weighted average time to cash flows. Modified duration = Macaulay duration ÷ (1 + yield per period).",
    inputs: ["Cash-flow schedule", "Yield to maturity", "Compounding frequency"],
    limitations: [
      "A first-order approximation; accuracy falls for large yield moves.",
      "Convexity is not applied in this demonstration.",
    ],
  },
  freshness: {
    id: "m-freshness",
    name: "Evidence freshness check",
    version: "v1.0",
    summary:
      "Compares the observation date of the newest admissible record with the question-specific freshness threshold.",
    inputs: ["Observation date", "Threshold", "Retrieval timestamp"],
    limitations: [
      "Freshness is not the same as correctness; a fresh record can still be revised.",
    ],
  },
  calendar: {
    id: "m-calendar",
    name: "Forward calendar coverage check",
    version: "v1.2",
    summary:
      "Lists only releases present in a machine-readable forward calendar retrieved from the publishing authority.",
    inputs: ["Forward calendar record", "Authority", "Retrieval timestamp"],
    limitations: [
      "Does not infer dates for authorities that publish PDF-only schedules.",
      "Schedules can change after retrieval.",
    ],
  },
  alignment: {
    id: "m-alignment",
    name: "Point-in-time alignment",
    version: "v1.1",
    summary:
      "Checks that every instrument in a comparison shares a compatible reporting period and currency basis before any value is shown.",
    inputs: ["Fiscal year end", "Reporting currency", "Period label"],
    limitations: ["Does not restate one issuer's accounts onto another's basis."],
  },
  absoluteDifference: {
    id: "m-abs-difference",
    name: "Absolute difference",
    version: "v1.0",
    summary:
      "Difference = A − B, computed on exact decimal inputs only when both cells are display-permitted, share one unit, currency and scale, and cover the same period. Percentage metrics give a difference in percentage points.",
    inputs: ["Eligible observation A", "Eligible observation B"],
    limitations: [
      "No arithmetic on currency-mixed values, unmatched periods or withheld cells.",
      "A difference is arithmetic. It does not rank the instruments.",
    ],
  },
  percentDifference: {
    id: "m-pct-difference",
    name: "Percentage difference",
    version: "v1.0",
    summary:
      "Percentage difference = ((A − B) ÷ |B|) × 100, approved only for reported currency amounts. B is the denominator. A zero or negative B withholds the result.",
    inputs: ["Eligible observation A", "Eligible observation B (denominator)"],
    limitations: [
      "Withheld when the denominator is zero or negative; no intuitive meaning is assumed.",
      "Not annualised and not adjusted for acquisitions, disposals or restatements.",
    ],
  },
} satisfies Record<string, MethodRecord>;

/* ------------------------------------------------------------------ */
/* Comparison registry versions (WF-04 §8.2, WF-05 §8.1)                */
/* ------------------------------------------------------------------ */

/** Version of the metric compatibility catalogue (WF-04 A09). */
export const METRIC_CATALOG_VERSION = "metrics-v2.1";
/** Version of the calculation registry that pins formulas and rounding. */
export const METHOD_REGISTRY_VERSION = "calc-registry-2026.10";
/** Rights/display policy version evaluated at preflight and at every read. */
export const DISPLAY_POLICY_VERSION = "rights-2026.10";

export interface ComparisonMethodOption {
  id: string;
  version: string;
  name: string;
  status: "APPROVED" | "RETIRED";
  summary: string;
  /** Transformations the method applies. */
  transformations: string[];
  /** What the method deliberately does not do. */
  omissions: string[];
  /** Whether derived differences are produced at all. */
  derivesDifferences: boolean;
  rounding: string;
}

/**
 * Named, versioned comparison methodologies (WF-04 CMP-09). The version is
 * pinned into the request, the preflight fingerprint and the result.
 */
export const COMPARISON_METHOD_OPTIONS: ComparisonMethodOption[] = [
  {
    id: "cmp-reported",
    version: "v1.2",
    name: "Reported-basis comparison",
    status: "APPROVED",
    summary:
      "Shows each observation exactly as reported and adds an absolute difference (and, for currency amounts, a percentage difference) only for eligible same-unit, same-period pairs.",
    transformations: [
      "Absolute difference A − B (m-abs-difference v1.0)",
      "Percentage difference ((A − B) ÷ |B|) × 100 for currency amounts (m-pct-difference v1.0)",
      "Rounding to the metric's presentation precision after exact decimal arithmetic",
    ],
    omissions: [
      "No foreign-exchange conversion",
      "No fiscal-year re-alignment or pro-forma restatement",
      "No interpolation, estimate or fill for withheld cells",
      "No score, ranking or composite grade",
    ],
    derivesDifferences: true,
    rounding:
      "Half away from zero, applied once after arithmetic; display-only.",
  },
  {
    id: "cmp-values-only",
    version: "v1.0",
    name: "Observations only",
    status: "APPROVED",
    summary:
      "Shows each observation exactly as reported, side by side. No derived difference is calculated.",
    transformations: ["None"],
    omissions: [
      "No derived differences of any kind",
      "No foreign-exchange conversion",
      "No fiscal-year re-alignment",
    ],
    derivesDifferences: false,
    rounding: "Reported precision; no arithmetic is performed.",
  },
  {
    id: "cmp-reported",
    version: "v1.1",
    name: "Reported-basis comparison",
    status: "RETIRED",
    summary:
      "Superseded by v1.2. v1.1 compared the first two instruments only and did not check period equality before a difference.",
    transformations: [],
    omissions: [],
    derivesDifferences: true,
    rounding: "Not applicable (retired).",
  },
];

export function getComparisonMethod(
  id: string,
  version: string
): ComparisonMethodOption | undefined {
  return COMPARISON_METHOD_OPTIONS.find(
    (option) => option.id === id && option.version === version
  );
}

export const DEFAULT_COMPARISON_METHOD = COMPARISON_METHOD_OPTIONS[0];
