import type { ScenarioKey } from "./types";

const SCENARIOS: ScenarioKey[] = [
  "CORPORATE_READY",
  "BOND_EDUCATION",
  "CONFLICT",
  "RESTRICTED",
  "STALE",
  "PARTIAL",
  "UNSUPPORTED",
  "ADVICE",
  "NO_MATCH",
];

export function isScenarioKey(value: unknown): value is ScenarioKey {
  return typeof value === "string" && SCENARIOS.includes(value as ScenarioKey);
}

/**
 * Demonstration-only intent routing. In production this is a policy and
 * retrieval decision made server-side; here it selects a synthetic fixture so
 * reviewers can exercise every answer state deterministically.
 */
export function detectScenario(question: string): ScenarioKey {
  const q = question.toLowerCase();

  if (
    /should i (buy|sell|hold|invest)|good investment|recommend|worth investing|price target/.test(
      q
    )
  ) {
    return "ADVICE";
  }
  if (/crypto|bitcoin|ether|token|digital asset/.test(q)) {
    return "UNSUPPORTED";
  }
  if (/market price|last price|share price|quote|bid|ask|market value/.test(q)) {
    return "RESTRICTED";
  }
  if (/inflation|cpi|consumer price/.test(q)) {
    return "STALE";
  }
  if (
    /economic calendar|releases? due|data releases|this week|forward calendar/.test(
      q
    )
  ) {
    return "PARTIAL";
  }
  if (/amend|restat|conflict|compare the latest official revenue/.test(q)) {
    return "CONFLICT";
  }
  if (/bond|yield|duration|coupon|gilt/.test(q)) {
    return "BOND_EDUCATION";
  }
  if (coveredByCorporateFixture(q)) {
    return "CORPORATE_READY";
  }
  // WF-02 R12 / §05: never answer a different question than the one asked.
  return "NO_MATCH";
}

/** Periods held in the demonstration evidence set for Meridian Grid. */
const COVERED_YEARS = new Set(["2025", "2026"]);

/** Fiscal years referenced in the question, e.g. FY2024, FY24, 2023. */
export function referencedYears(question: string): string[] {
  const years = new Set<string>();
  for (const match of question.matchAll(/\b(?:fy\s?)?(20\d{2})\b/gi)) years.add(match[1]);
  for (const match of question.matchAll(/\bfy\s?(\d{2})\b/gi)) years.add(`20${match[1]}`);
  return [...years];
}

/**
 * The corporate fixture answers one thing: Meridian Grid plc's audited
 * FY2026 results (revenue, operating profit, margin, growth vs FY2025).
 * Anything else must not receive it.
 */
function coveredByCorporateFixture(q: string): boolean {
  const aboutMeridian = /meridian|\bmdg\b/.test(q);
  const aboutHeldMetric =
    /revenue|sales|turnover|operating (profit|margin|income)|margin|growth|annual (report|results)|income statement|audited|results/.test(q);
  const comparesOthers = /\b(compare|versus|vs\.?|against)\b/.test(q) && !/meridian.*meridian/.test(q);
  const yearsOk = referencedYears(q).every((year) => COVERED_YEARS.has(year));
  return aboutMeridian && aboutHeldMetric && !comparesOthers && yearsOk;
}
