import type {
  Claim,
  ComparisonCatalog,
  ComparisonCell,
  ComparisonCheck,
  ComparisonDelta,
  ComparisonEvidenceCode,
  ComparisonEvidenceSummary,
  ComparisonMethodTrace,
  ComparisonNextAction,
  ComparisonNotice,
  ComparisonPeriodBounds,
  ComparisonReasonCode,
  ComparisonRequest,
  ComparisonResult,
  ComparisonResultState,
  ComparisonRow,
  Instrument,
  InstrumentSearchResult,
  MetricDefinition,
  Segment,
  TimeContext,
} from "./types";
import { FEATURE_FLAGS, FIXTURE_LABEL } from "./taxonomy";
import {
  COMPARISON_METHOD_OPTIONS,
  DISPLAY_POLICY_VERSION,
  METHODS,
  METHOD_REGISTRY_VERSION,
  METRIC_CATALOG_VERSION,
  getComparisonMethod,
} from "./methods";
import { getSource } from "./sources";

/*
 * Synthetic comparison fixtures (WF-04 / WF-05).
 *
 * Every instrument, identifier, value and date below is invented for
 * interface review. Nothing here is a live quote, filing or provider feed.
 * Values are held as exact decimal strings; the server never emits a value
 * for a withheld, contested or not-applicable cell.
 */

/** Fixed evaluation date for freshness rules, so fixtures are reproducible. */
export const FIXTURE_EVALUATION_DATE = "2026-10-24";

export const MAX_INSTRUMENTS = 3;
export const MAX_METRICS = 4;

export const INSTRUMENTS: Instrument[] = [
  {
    id: "ins-meridian",
    canonicalId: "tlv:eq:gb:mdg:xlon",
    name: "Meridian Grid plc",
    ticker: "MDG",
    exchange: "LSE",
    venueName: "London Stock Exchange",
    kind: "EQUITY",
    currency: "GBP",
    fiscalYearEnd: "31 March",
    sector: "Regulated utilities",
    jurisdiction: "United Kingdom",
    coverageStart: "2016-01-01",
    dataRights: "FULL",
    launchStatus: "LAUNCHED",
  },
  {
    id: "ins-caledonia",
    canonicalId: "tlv:eq:gb:cwd:xlon",
    name: "Caledonia Water plc",
    ticker: "CWD",
    exchange: "LSE",
    venueName: "London Stock Exchange",
    kind: "EQUITY",
    currency: "GBP",
    fiscalYearEnd: "31 March",
    sector: "Water utilities",
    jurisdiction: "United Kingdom",
    coverageStart: "2016-01-01",
    dataRights: "FULL",
    launchStatus: "LAUNCHED",
  },
  {
    id: "ins-northwind",
    canonicalId: "tlv:eq:us:nwu:xnys",
    name: "Northwind Utilities Inc",
    ticker: "NWU",
    exchange: "NYSE",
    venueName: "New York Stock Exchange",
    kind: "EQUITY",
    currency: "USD",
    fiscalYearEnd: "31 December",
    sector: "Regulated utilities",
    jurisdiction: "United States",
    coverageStart: "2016-01-01",
    dataRights: "FULL",
    launchStatus: "LAUNCHED",
  },
  {
    id: "ins-kaizen",
    canonicalId: "tlv:eq:jp:6521:xtks",
    name: "Kaizen Semiconductor KK",
    ticker: "6521",
    exchange: "TSE",
    venueName: "Tokyo Stock Exchange",
    kind: "EQUITY",
    currency: "JPY",
    fiscalYearEnd: "31 March",
    sector: "Semiconductors",
    jurisdiction: "Japan",
    coverageStart: "2018-01-01",
    dataRights: "FULL",
    launchStatus: "LAUNCHED",
  },
  {
    id: "ins-arcadia",
    canonicalId: "tlv:eq:gb:arc:xlon",
    name: "Arcadia Renewables plc",
    ticker: "ARC",
    exchange: "LSE",
    venueName: "London Stock Exchange",
    kind: "EQUITY",
    currency: "GBP",
    fiscalYearEnd: "31 December",
    sector: "Renewable energy",
    jurisdiction: "United Kingdom",
    coverageStart: "2020-01-01",
    dataRights: "FULL",
    launchStatus: "LAUNCHED",
  },
  {
    id: "ins-arcadia-xetra",
    canonicalId: "tlv:eq:de:arc:xetr",
    name: "Arcadia Renewables plc (secondary listing)",
    ticker: "ARC",
    exchange: "XETRA",
    venueName: "Xetra (Frankfurt)",
    kind: "EQUITY",
    currency: "EUR",
    fiscalYearEnd: "31 December",
    sector: "Renewable energy",
    jurisdiction: "Germany",
    coverageStart: "2022-01-01",
    dataRights: "FULL",
    launchStatus: "UNLAUNCHED",
    note: "Secondary venue listing outside the launched public scope.",
  },
  {
    id: "ins-vega",
    canonicalId: "tlv:eq:gb:vgm:xlon",
    name: "Vega Media plc",
    ticker: "VGM",
    exchange: "LSE",
    venueName: "London Stock Exchange",
    kind: "EQUITY",
    currency: "GBP",
    fiscalYearEnd: "31 December",
    sector: "Media",
    jurisdiction: "United Kingdom",
    coverageStart: "2021-01-01",
    dataRights: "METADATA_ONLY",
    launchStatus: "LAUNCHED",
    note: "Filings are held under a metadata-only licence in this demonstration.",
  },
  {
    id: "ins-global-infra",
    canonicalId: "tlv:fd:ie:ginf:xlon",
    name: "Global Infrastructure UCITS ETF",
    ticker: "GINF",
    exchange: "LSE",
    venueName: "London Stock Exchange",
    kind: "FUND",
    currency: "GBP",
    fiscalYearEnd: "31 December",
    sector: "Infrastructure fund",
    jurisdiction: "Ireland",
    coverageStart: "2019-01-01",
    dataRights: "FULL",
    launchStatus: "LAUNCHED",
  },
  {
    id: "ins-atlas-fund",
    canonicalId: "tlv:fd:gb:aiif:xlon",
    name: "Atlas Infrastructure Income Fund",
    ticker: "AIIF",
    exchange: "LSE",
    venueName: "London Stock Exchange",
    kind: "FUND",
    currency: "GBP",
    fiscalYearEnd: "31 December",
    sector: "Infrastructure fund",
    jurisdiction: "United Kingdom",
    coverageStart: "2019-01-01",
    dataRights: "FULL",
    launchStatus: "LAUNCHED",
  },
  {
    id: "ins-gilt-2032",
    canonicalId: "tlv:gb:gb:gilt32:xlon",
    name: "UK Gilt 4.25% 2032",
    ticker: "GILT32",
    exchange: "LSE",
    venueName: "London Stock Exchange",
    kind: "GOVERNMENT_BOND",
    currency: "GBP",
    fiscalYearEnd: "Not applicable",
    sector: "UK sovereign",
    jurisdiction: "United Kingdom",
    coverageStart: "2016-01-01",
    dataRights: "FULL",
    launchStatus: "LAUNCHED",
  },
  {
    id: "ins-bund-2034",
    canonicalId: "tlv:gb:de:bund34:xetr",
    name: "German Bund 2.60% 2034",
    ticker: "BUND34",
    exchange: "XETRA",
    venueName: "Xetra (Frankfurt)",
    kind: "GOVERNMENT_BOND",
    currency: "EUR",
    fiscalYearEnd: "Not applicable",
    sector: "German sovereign",
    jurisdiction: "Germany",
    coverageStart: "2016-01-01",
    dataRights: "FULL",
    launchStatus: "LAUNCHED",
  },
];

const YIELD_GATE_REASON =
  "No pinned, approved public yield methodology and price-source licence. Gilt and bond yield analytics stay out of public release until approved.";

export const METRICS: MetricDefinition[] = [
  {
    id: "metric-revenue",
    label: "Revenue",
    description: "Reported consolidated revenue for the selected financial year.",
    kinds: ["EQUITY"],
    unit: "currency-millions",
    basis: "Reported, consolidated",
    version: "v2.1",
    precision: 0,
  },
  {
    id: "metric-operating-margin",
    label: "Operating margin",
    description: "Reported operating profit divided by reported revenue.",
    kinds: ["EQUITY"],
    unit: "%",
    basis: "Reported operating profit ÷ revenue",
    version: "v2.1",
    precision: 1,
  },
  {
    id: "metric-net-income",
    label: "Net income",
    description:
      "Reported profit attributable to owners of the parent for the selected year.",
    kinds: ["EQUITY"],
    unit: "currency-millions",
    basis: "Reported, attributable to owners",
    version: "v2.1",
    precision: 0,
  },
  {
    id: "metric-total-assets",
    label: "Total assets",
    description: "Reported total assets at the balance-sheet date.",
    kinds: ["EQUITY"],
    unit: "currency-millions",
    basis: "Reported, consolidated",
    version: "v2.1",
    precision: 0,
  },
  {
    id: "metric-fund-fee",
    label: "Ongoing charge",
    description: "Ongoing charge figure from the fund's latest key information document.",
    kinds: ["FUND"],
    unit: "%",
    basis: "Latest published KID",
    version: "v2.1",
    precision: 2,
  },
  {
    id: "metric-coupon",
    label: "Coupon",
    description: "Contractual annual coupon rate from the bond terms.",
    kinds: ["GOVERNMENT_BOND"],
    unit: "%",
    basis: "Bond terms",
    version: "v2.1",
    precision: 2,
  },
  {
    id: "metric-ytm",
    label: "Yield to maturity",
    description:
      "Yield calculated from a permitted price observation using an approved convention.",
    kinds: ["GOVERNMENT_BOND"],
    unit: "%",
    basis: "Requires approved yield methodology",
    version: "v2.1",
    precision: 2,
    gatedBy: "bondYieldAnalytics",
    gateReason: YIELD_GATE_REASON,
  },
  {
    id: "metric-duration",
    label: "Modified duration",
    description: "Interest-rate sensitivity implied by an approved yield calculation.",
    kinds: ["GOVERNMENT_BOND"],
    unit: "years",
    basis: "Requires approved yield methodology",
    version: "v2.1",
    precision: 1,
    gatedBy: "bondYieldAnalytics",
    gateReason: YIELD_GATE_REASON,
  },
];

/** Freshness rule per metric for the latest period (WF-04 S12, P-06). */
const MAX_AGE_MONTHS: Record<string, number> = {
  "metric-revenue": 18,
  "metric-operating-margin": 18,
  "metric-net-income": 18,
  "metric-total-assets": 18,
  "metric-fund-fee": 15,
  "metric-coupon": 1,
};

export const PERIODS: ComparisonCatalog["periods"] = [
  {
    id: "latest",
    label: "Latest reported period",
    description:
      "Each instrument's most recent full reporting period, on its own fiscal calendar.",
  },
  {
    id: "prior",
    label: "Prior reported period",
    description: "The immediately preceding full reporting period for each instrument.",
  },
  {
    id: "five-year",
    label: "Five-year history",
    description:
      "Multi-year history depends on the Historical Evidence Engine, a Target-phase capability.",
    gatedBy: "historicalTrends",
    gateReason:
      "Unavailable in Launch. Multi-year history is a Target-phase capability that has not been approved; no complete history is implied.",
  },
];

export const CURRENCY_MODES: ComparisonCatalog["currencyModes"] = [
  {
    id: "REPORTED",
    label: "As reported",
    description:
      "Show each value in its reporting currency. No foreign-exchange conversion is performed.",
  },
  {
    id: "COMMON",
    label: "Single currency",
    description:
      "Present every value in one currency. Conversion needs a licensed FX convention, timestamp and rate side, which this public surface does not have.",
  },
];

/* ------------------------------------------------------------------ */
/* Observations                                                         */
/* ------------------------------------------------------------------ */

interface Observation {
  id: string;
  sourceId: string;
  publishedAt: string;
  value: string;
  note?: string;
}

interface FactEntry {
  period: ComparisonPeriodBounds;
  observations: Observation[];
  /** A final figure is awaited; no observation may be shown. */
  restatementPending?: boolean;
}

type FactBook = Record<string, Record<string, Record<string, FactEntry | null>>>;

const fy = (
  start: string,
  end: string,
  label: string
): ComparisonPeriodBounds => ({ start, end, label, basis: "FISCAL_ANNUAL" });

const FY_MAR_2026 = fy("2025-04-01", "2026-03-31", "Fiscal year ended 31 Mar 2026");
const FY_MAR_2025 = fy("2024-04-01", "2025-03-31", "Fiscal year ended 31 Mar 2025");
const FY_DEC_2025 = fy("2025-01-01", "2025-12-31", "Fiscal year ended 31 Dec 2025");
const FY_DEC_2024 = fy("2024-01-01", "2024-12-31", "Fiscal year ended 31 Dec 2024");

const obs = (
  id: string,
  sourceId: string,
  publishedAt: string,
  value: string,
  note?: string
): Observation => ({ id, sourceId, publishedAt, value, note });

const entry = (
  period: ComparisonPeriodBounds,
  ...observations: Observation[]
): FactEntry => ({ period, observations });

const FACTS: FactBook = {
  "ins-meridian": {
    "metric-revenue": {
      latest: entry(FY_MAR_2026, obs("obs-mdg-rev-fy26", "src-meridian-ar-2026", "2026-04-14", "4820")),
      // Q08 / Q09 / T06 / T07: the FY2025 comparative was restated by an
      // amendment that does not withdraw the original filing.
      prior: entry(
        FY_MAR_2025,
        obs("obs-mdg-rev-fy25-filed", "src-meridian-ar-2025", "2025-04-15", "4410", "As originally filed"),
        obs("obs-mdg-rev-fy25-amended", "src-meridian-amendment", "2026-09-30", "4280", "Amended segment disclosure")
      ),
    },
    "metric-operating-margin": {
      latest: entry(FY_MAR_2026, obs("obs-mdg-om-fy26", "src-meridian-ar-2026", "2026-04-14", "18.4")),
      prior: entry(FY_MAR_2025, obs("obs-mdg-om-fy25", "src-meridian-ar-2025", "2025-04-15", "17.3")),
    },
    "metric-net-income": {
      latest: entry(FY_MAR_2026, obs("obs-mdg-ni-fy26", "src-meridian-ar-2026", "2026-04-14", "612")),
      prior: entry(FY_MAR_2025, obs("obs-mdg-ni-fy25", "src-meridian-ar-2025", "2025-04-15", "544")),
    },
    "metric-total-assets": {
      latest: entry(FY_MAR_2026, obs("obs-mdg-ta-fy26", "src-meridian-ar-2026", "2026-04-14", "18450")),
      prior: entry(FY_MAR_2025, obs("obs-mdg-ta-fy25", "src-meridian-ar-2025", "2025-04-15", "17800")),
    },
  },
  "ins-caledonia": {
    "metric-revenue": {
      latest: entry(FY_MAR_2026, obs("obs-cwd-rev-fy26", "src-caledonia-ar-2026", "2026-05-06", "3145")),
      prior: entry(FY_MAR_2025, obs("obs-cwd-rev-fy25", "src-caledonia-ar-2026", "2026-05-06", "2980")),
    },
    "metric-operating-margin": {
      latest: entry(FY_MAR_2026, obs("obs-cwd-om-fy26", "src-caledonia-ar-2026", "2026-05-06", "15.0")),
      prior: entry(FY_MAR_2025, obs("obs-cwd-om-fy25", "src-caledonia-ar-2026", "2026-05-06", "14.6")),
    },
    "metric-net-income": {
      // A restatement is pending; the issuer has not published a final
      // attributable figure. No value is held for display.
      latest: { period: FY_MAR_2026, observations: [], restatementPending: true },
      prior: entry(FY_MAR_2025, obs("obs-cwd-ni-fy25", "src-caledonia-ar-2026", "2026-05-06", "291")),
    },
    "metric-total-assets": {
      latest: entry(FY_MAR_2026, obs("obs-cwd-ta-fy26", "src-caledonia-ar-2026", "2026-05-06", "12980")),
      prior: entry(FY_MAR_2025, obs("obs-cwd-ta-fy25", "src-caledonia-ar-2026", "2026-05-06", "12410")),
    },
  },
  "ins-northwind": {
    "metric-revenue": {
      latest: entry(FY_DEC_2025, obs("obs-nwu-rev-fy25", "src-northwind-10k-2026", "2026-02-19", "6140")),
      prior: entry(FY_DEC_2024, obs("obs-nwu-rev-fy24", "src-northwind-10k-2026", "2026-02-19", "5720")),
    },
    "metric-operating-margin": {
      latest: entry(FY_DEC_2025, obs("obs-nwu-om-fy25", "src-northwind-10k-2026", "2026-02-19", "16.5")),
      prior: entry(FY_DEC_2024, obs("obs-nwu-om-fy24", "src-northwind-10k-2026", "2026-02-19", "16.1")),
    },
    "metric-net-income": {
      latest: entry(FY_DEC_2025, obs("obs-nwu-ni-fy25", "src-northwind-10k-2026", "2026-02-19", "702")),
      prior: entry(FY_DEC_2024, obs("obs-nwu-ni-fy24", "src-northwind-10k-2026", "2026-02-19", "655")),
    },
    "metric-total-assets": {
      latest: entry(FY_DEC_2025, obs("obs-nwu-ta-fy25", "src-northwind-10k-2026", "2026-02-19", "22100")),
      prior: entry(FY_DEC_2024, obs("obs-nwu-ta-fy24", "src-northwind-10k-2026", "2026-02-19", "21300")),
    },
  },
  "ins-kaizen": {
    "metric-revenue": {
      latest: entry(FY_MAR_2026, obs("obs-kzn-rev-fy26", "src-kaizen-ar-2026", "2026-06-25", "1284000")),
      prior: entry(FY_MAR_2025, obs("obs-kzn-rev-fy25", "src-kaizen-ar-2026", "2026-06-25", "1196000")),
    },
    "metric-operating-margin": {
      latest: entry(FY_MAR_2026, obs("obs-kzn-om-fy26", "src-kaizen-ar-2026", "2026-06-25", "22.1")),
      prior: entry(FY_MAR_2025, obs("obs-kzn-om-fy25", "src-kaizen-ar-2026", "2026-06-25", "20.4")),
    },
    "metric-net-income": {
      latest: entry(FY_MAR_2026, obs("obs-kzn-ni-fy26", "src-kaizen-ar-2026", "2026-06-25", "108500")),
      prior: entry(FY_MAR_2025, obs("obs-kzn-ni-fy25", "src-kaizen-ar-2026", "2026-06-25", "96200")),
    },
    "metric-total-assets": {
      latest: entry(FY_MAR_2026, obs("obs-kzn-ta-fy26", "src-kaizen-ar-2026", "2026-06-25", "1842000")),
      // T01 / S10: no admissible prior-year balance-sheet record.
      prior: null,
    },
  },
  "ins-arcadia": {
    "metric-revenue": {
      latest: entry(FY_DEC_2025, obs("obs-arc-rev-fy25", "src-arcadia-ar-2025", "2026-03-18", "1240")),
      prior: entry(FY_DEC_2024, obs("obs-arc-rev-fy24", "src-arcadia-ar-2024", "2025-03-19", "1105")),
    },
    "metric-operating-margin": {
      latest: entry(FY_DEC_2025, obs("obs-arc-om-fy25", "src-arcadia-ar-2025", "2026-03-18", "21.2")),
      prior: entry(FY_DEC_2024, obs("obs-arc-om-fy24", "src-arcadia-ar-2024", "2025-03-19", "19.8")),
    },
    "metric-net-income": {
      latest: entry(FY_DEC_2025, obs("obs-arc-ni-fy25", "src-arcadia-ar-2025", "2026-03-18", "148")),
      prior: entry(FY_DEC_2024, obs("obs-arc-ni-fy24", "src-arcadia-ar-2024", "2025-03-19", "126")),
    },
    "metric-total-assets": {
      latest: entry(FY_DEC_2025, obs("obs-arc-ta-fy25", "src-arcadia-ar-2025", "2026-03-18", "3210")),
      prior: entry(FY_DEC_2024, obs("obs-arc-ta-fy24", "src-arcadia-ar-2024", "2025-03-19", "3020")),
    },
  },
  "ins-global-infra": {
    "metric-fund-fee": {
      latest: entry(
        { start: null, end: "2026-06-30", label: "KID dated 30 Jun 2026", basis: "FUND_DOCUMENT" },
        obs("obs-ginf-oc-2026", "src-fund-kid-2026", "2026-06-30", "0.35")
      ),
      prior: entry(
        { start: null, end: "2025-06-30", label: "KID dated 30 Jun 2025", basis: "FUND_DOCUMENT" },
        obs("obs-ginf-oc-2025", "src-fund-kid-2025", "2025-06-30", "0.35")
      ),
    },
  },
  "ins-atlas-fund": {
    // S12: the newest KID on record is outside the 15-month freshness rule.
    // The value is never emitted, so no source record is exposed.
    "metric-fund-fee": {
      latest: entry(
        { start: null, end: "2024-06-30", label: "KID dated 30 Jun 2024", basis: "FUND_DOCUMENT" },
        obs("obs-aiif-oc-2024", "src-atlas-kid-2024", "2024-06-30", "0.62")
      ),
      prior: null,
    },
  },
  "ins-gilt-2032": {
    "metric-coupon": {
      latest: entry(
        { start: null, end: "2026-10-23", label: "Bond terms observed 23 Oct 2026", basis: "POINT_IN_TIME" },
        obs("obs-gilt32-cpn-1023", "src-gilt-method", "2026-10-23", "4.25")
      ),
      prior: entry(
        { start: null, end: "2026-09-30", label: "Bond terms observed 30 Sep 2026", basis: "POINT_IN_TIME" },
        obs("obs-gilt32-cpn-0930", "src-gilt-method", "2026-09-30", "4.25")
      ),
    },
  },
  "ins-bund-2034": {
    "metric-coupon": {
      latest: entry(
        { start: null, end: "2026-10-23", label: "Bond terms observed 23 Oct 2026", basis: "POINT_IN_TIME" },
        obs("obs-bund34-cpn-1023", "src-bund-method", "2026-10-23", "2.60")
      ),
      prior: entry(
        { start: null, end: "2026-09-30", label: "Bond terms observed 30 Sep 2026", basis: "POINT_IN_TIME" },
        obs("obs-bund34-cpn-0930", "src-bund-method", "2026-09-30", "2.60")
      ),
    },
  },
};

/* ------------------------------------------------------------------ */
/* Lookups                                                              */
/* ------------------------------------------------------------------ */

export function getInstrument(id: string): Instrument | undefined {
  return INSTRUMENTS.find((instrument) => instrument.id === id);
}

export function getMetric(id: string): MetricDefinition | undefined {
  return METRICS.find((metric) => metric.id === id);
}

export function periodLabel(period: string): string {
  return PERIODS.find((item) => item.id === period)?.label ?? period;
}

export function isMetricGated(metric: MetricDefinition): boolean {
  return Boolean(metric.gatedBy && FEATURE_FLAGS[metric.gatedBy] === "OFF");
}

export function isPeriodGated(periodId: string): boolean {
  const period = PERIODS.find((item) => item.id === periodId);
  return Boolean(period?.gatedBy && FEATURE_FLAGS[period.gatedBy] === "OFF");
}

/** Raw period window for a selectable period, or null when none is held. */
export function periodBoundsFor(
  instrumentId: string,
  periodId: string
): ComparisonPeriodBounds | null {
  const metrics = FACTS[instrumentId];
  if (!metrics) return null;
  for (const metricId of Object.keys(metrics)) {
    const found = metrics[metricId]?.[periodId];
    if (found) return found.period;
  }
  return null;
}

export function comparisonCatalog(): ComparisonCatalog {
  return {
    metricCatalogVersion: METRIC_CATALOG_VERSION,
    methodRegistryVersion: METHOD_REGISTRY_VERSION,
    policyVersion: DISPLAY_POLICY_VERSION,
    metrics: METRICS,
    periods: PERIODS,
    currencyModes: CURRENCY_MODES,
    methods: COMPARISON_METHOD_OPTIONS,
    featureFlags: {
      comparison: FEATURE_FLAGS.comparison,
      bondYieldAnalytics: FEATURE_FLAGS.bondYieldAnalytics,
      historicalTrends: FEATURE_FLAGS.historicalTrends,
      sharing: FEATURE_FLAGS.sharing,
    },
    maxInstruments: MAX_INSTRUMENTS,
    maxMetrics: MAX_METRICS,
  };
}

/* ------------------------------------------------------------------ */
/* Authorised resolver (WF-04 CMP-03, A05, A06)                         */
/* ------------------------------------------------------------------ */

export function toSearchResult(instrument: Instrument): InstrumentSearchResult {
  return {
    id: instrument.id,
    canonicalId: instrument.canonicalId ?? instrument.id,
    name: instrument.name,
    ticker: instrument.ticker,
    exchange: instrument.exchange,
    venueName: instrument.venueName ?? instrument.exchange,
    kind: instrument.kind,
    currency: instrument.currency,
    fiscalYearEnd: instrument.fiscalYearEnd,
    jurisdiction: instrument.jurisdiction,
    dataRights: instrument.dataRights,
    launchStatus: instrument.launchStatus ?? "LAUNCHED",
    note: instrument.note,
    periods: Object.fromEntries(
      PERIODS.map((period) => [period.id, periodBoundsFor(instrument.id, period.id)])
    ),
  };
}

/**
 * Matches only the public canonical register. The query is treated as inert
 * text: it is normalised, length-capped and never interpreted.
 */
export function searchInstruments(rawQuery: string): {
  results: InstrumentSearchResult[];
  ambiguousTickers: string[];
} {
  const query = rawQuery.trim().toLowerCase().slice(0, 64);
  if (query.length < 2) return { results: [], ambiguousTickers: [] };
  const matches = INSTRUMENTS.filter((instrument) =>
    [
      instrument.name,
      instrument.ticker,
      instrument.exchange,
      instrument.venueName ?? "",
      instrument.canonicalId ?? "",
    ].some((field) => field.toLowerCase().includes(query))
  ).slice(0, 12);
  const tickerCounts = new Map<string, number>();
  for (const instrument of matches) {
    tickerCounts.set(instrument.ticker, (tickerCounts.get(instrument.ticker) ?? 0) + 1);
  }
  return {
    results: matches.map(toSearchResult),
    ambiguousTickers: [...tickerCounts]
      .filter(([, count]) => count > 1)
      .map(([ticker]) => ticker),
  };
}

export function resolveInstrumentIds(ids: string[]): InstrumentSearchResult[] {
  return ids
    .map((id) => getInstrument(id))
    .filter((instrument): instrument is Instrument => Boolean(instrument))
    .map(toSearchResult);
}

/* ------------------------------------------------------------------ */
/* Exact decimal arithmetic (WF-05 §6.2 precision rule)                  */
/* ------------------------------------------------------------------ */

const ZERO = BigInt(0);
const TEN = BigInt(10);

function pow10(exponent: number): bigint {
  let result = BigInt(1);
  for (let i = 0; i < exponent; i += 1) result *= TEN;
  return result;
}

function toScaled(decimal: string, scale: number): bigint {
  const negative = decimal.startsWith("-");
  const [whole, fraction = ""] = decimal.replace(/^[-+]/, "").split(".");
  const padded = (fraction + "0".repeat(scale)).slice(0, scale);
  const value = BigInt(`${whole || "0"}${padded}` || "0");
  return negative ? -value : value;
}

function fromScaled(value: bigint, scale: number): string {
  const negative = value < ZERO;
  const digits = (negative ? -value : value).toString().padStart(scale + 1, "0");
  const text = scale
    ? `${digits.slice(0, -scale)}.${digits.slice(-scale)}`
    : digits;
  return negative && value !== ZERO ? `-${text}` : text;
}

/** Integer division rounding half away from zero. */
function divRound(numerator: bigint, denominator: bigint): bigint {
  const negative = numerator < ZERO !== denominator < ZERO;
  const n = numerator < ZERO ? -numerator : numerator;
  const d = denominator < ZERO ? -denominator : denominator;
  let quotient = n / d;
  if ((n % d) * BigInt(2) >= d) quotient += BigInt(1);
  return negative ? -quotient : quotient;
}

function decimalScale(value: string): number {
  return value.split(".")[1]?.length ?? 0;
}

/** A − B at `precision` decimal places. */
export function decimalSubtract(a: string, b: string, precision: number): string {
  const scale = Math.max(decimalScale(a), decimalScale(b), precision);
  const diff = toScaled(a, scale) - toScaled(b, scale);
  return fromScaled(divRound(diff * pow10(precision), pow10(scale)), precision);
}

/** ((A − B) ÷ |B|) × 100 at `precision` places, or null when B ≤ 0. */
export function decimalPercentDifference(
  a: string,
  b: string,
  precision: number
): { value: string } | { reason: "DENOMINATOR_ZERO" | "DENOMINATOR_NEGATIVE" } {
  const scale = Math.max(decimalScale(a), decimalScale(b));
  const scaledA = toScaled(a, scale);
  const scaledB = toScaled(b, scale);
  if (scaledB === ZERO) return { reason: "DENOMINATOR_ZERO" };
  if (scaledB < ZERO) return { reason: "DENOMINATOR_NEGATIVE" };
  const numerator = (scaledA - scaledB) * BigInt(100) * pow10(precision);
  return { value: fromScaled(divRound(numerator, scaledB), precision) };
}

/** Rounds an exact decimal to presentation precision (display only). */
export function decimalRound(value: string, precision: number): string {
  const scale = Math.max(decimalScale(value), precision);
  return fromScaled(
    divRound(toScaled(value, scale) * pow10(precision), pow10(scale)),
    precision
  );
}

function groupDecimal(value: string): string {
  const negative = value.startsWith("-");
  const [whole, fraction] = value.replace("-", "").split(".");
  const grouped = whole.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return `${negative ? "−" : ""}${grouped}${fraction !== undefined ? `.${fraction}` : ""}`;
}

/* ------------------------------------------------------------------ */
/* Cell evaluation                                                      */
/* ------------------------------------------------------------------ */

function monthsBetween(fromIso: string, toIso: string): number {
  const from = new Date(`${fromIso}T00:00:00Z`);
  const to = new Date(`${toIso}T00:00:00Z`);
  return (
    (to.getUTCFullYear() - from.getUTCFullYear()) * 12 +
    (to.getUTCMonth() - from.getUTCMonth()) -
    (to.getUTCDate() < from.getUTCDate() ? 1 : 0)
  );
}

export type CellEvaluation =
  | {
      kind: "VALUE";
      period: ComparisonPeriodBounds;
      observation: Observation;
      supersededBy?: Observation;
    }
  | { kind: "NOT_APPLICABLE" }
  | { kind: "RIGHTS"; period: ComparisonPeriodBounds | null }
  | { kind: "GATED"; period: ComparisonPeriodBounds | null }
  | { kind: "GAP"; period: ComparisonPeriodBounds | null }
  | { kind: "RESTATEMENT_PENDING"; period: ComparisonPeriodBounds }
  | { kind: "NOT_BY_CUTOFF"; period: ComparisonPeriodBounds }
  | { kind: "STALE"; period: ComparisonPeriodBounds; publishedAt: string }
  | {
      kind: "CONFLICT";
      period: ComparisonPeriodBounds;
      observations: Observation[];
    };

/** Single authoritative evaluation used by preflight and by execution. */
export function evaluateCell(
  instrument: Instrument,
  metric: MetricDefinition,
  periodId: string,
  publicationCutoff: string | null
): CellEvaluation {
  if (!metric.kinds.includes(instrument.kind)) return { kind: "NOT_APPLICABLE" };
  const fact = FACTS[instrument.id]?.[metric.id]?.[periodId] ?? null;
  if (instrument.dataRights !== "FULL") {
    return { kind: "RIGHTS", period: fact?.period ?? null };
  }
  if (isMetricGated(metric)) return { kind: "GATED", period: fact?.period ?? null };
  if (!fact) return { kind: "GAP", period: null };
  if (fact.restatementPending) {
    return { kind: "RESTATEMENT_PENDING", period: fact.period };
  }
  if (!fact.observations.length) return { kind: "GAP", period: fact.period };

  const visible = publicationCutoff
    ? fact.observations.filter((item) => item.publishedAt <= publicationCutoff)
    : fact.observations;
  const later = publicationCutoff
    ? fact.observations.filter((item) => item.publishedAt > publicationCutoff)
    : [];
  if (!visible.length) return { kind: "NOT_BY_CUTOFF", period: fact.period };

  const distinct = new Set(visible.map((item) => decimalRound(item.value, 6)));
  if (distinct.size > 1) {
    return { kind: "CONFLICT", period: fact.period, observations: visible };
  }

  const newest = [...visible].sort((a, b) => b.publishedAt.localeCompare(a.publishedAt))[0];
  const maxAge = MAX_AGE_MONTHS[metric.id];
  if (
    periodId === "latest" &&
    maxAge !== undefined &&
    monthsBetween(newest.publishedAt, publicationCutoff ?? FIXTURE_EVALUATION_DATE) > maxAge
  ) {
    return { kind: "STALE", period: fact.period, publishedAt: newest.publishedAt };
  }
  const revision = later.find(
    (item) => decimalRound(item.value, 6) !== decimalRound(newest.value, 6)
  );
  return {
    kind: "VALUE",
    period: fact.period,
    observation: newest,
    supersededBy: revision,
  };
}

function unitLabelFor(metric: MetricDefinition, instrument: Instrument): string {
  if (metric.unit === "currency-millions") return `${instrument.currency} m`;
  return metric.unit;
}

function rowUnitLabel(metric: MetricDefinition): string {
  if (metric.unit === "currency-millions") return "Reporting currency, millions";
  if (metric.unit === "%") return "Percent (%)";
  return metric.unit;
}

function samePeriod(
  a: ComparisonPeriodBounds | null,
  b: ComparisonPeriodBounds | null
): boolean {
  return Boolean(a && b && a.start === b.start && a.end === b.end && a.basis === b.basis);
}

export function formatPeriodShort(period: ComparisonPeriodBounds | null): string {
  if (!period) return "No period on record";
  const fmt = (iso: string) =>
    new Intl.DateTimeFormat("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
      timeZone: "UTC",
    }).format(new Date(`${iso}T00:00:00Z`));
  return period.start ? `${fmt(period.start)} – ${fmt(period.end)}` : fmt(period.end);
}

/* ------------------------------------------------------------------ */
/* Preflight (WF-04 §7)                                                 */
/* ------------------------------------------------------------------ */

const BLOCKED_COMBINATION_COPY =
  "These results cannot be compared on the selected basis.";

function kindLabel(kind: Instrument["kind"]): string {
  return kind === "GOVERNMENT_BOND"
    ? "bond"
    : kind === "FUND"
      ? "fund"
      : "equity";
}

/** WF-04 §5.3 exact blocked-combination pattern. */
export function blockedCombinationCopy(
  metric: MetricDefinition,
  instrument: Instrument
): string {
  const applies = metric.kinds.map((kind) => `${kindLabel(kind)}s`.replace("equitys", "equities")).join(" and ");
  return `${BLOCKED_COMBINATION_COPY} ${metric.label} is available for ${applies} but does not apply to this ${kindLabel(instrument.kind)}. Choose an applicable metric or change the instruments.`;
}

export function evaluatePreflight(request: ComparisonRequest): {
  checks: ComparisonCheck[];
  decision: "READY" | "REVISE" | "BLOCKED";
} {
  const checks: ComparisonCheck[] = [];
  const instruments = request.instrumentIds
    .map((id) => getInstrument(id))
    .filter((instrument): instrument is Instrument => Boolean(instrument));
  const metrics = request.metricIds
    .map((id) => getMetric(id))
    .filter((metric): metric is MetricDefinition => Boolean(metric));

  /* P-01 Canonical entity ------------------------------------------- */
  const unresolved = instruments.length !== request.instrumentIds.length;
  checks.push({
    id: "identity",
    gate: "P-01",
    status: unresolved ? "BLOCK" : "PASS",
    outcome: unresolved ? "UNKNOWN" : "PASS",
    target: "entity_ids",
    title: "Canonical identity",
    detail: unresolved
      ? "One or more identifiers do not match an official public record."
      : `${instruments.length} selection${instruments.length === 1 ? "" : "s"} resolved to one canonical record each: ${instruments.map((item) => item.canonicalId).join(", ")}.`,
    code: unresolved ? "IDENTITY_UNRESOLVED" : undefined,
    repairCode: unresolved ? "REVIEW_INSTRUMENTS" : undefined,
    repairLabel: unresolved ? "Choose the official record" : undefined,
  });
  if (instruments.length < 2) {
    checks.push({
      id: "count",
      gate: "P-01",
      status: "BLOCK",
      outcome: "INSUFFICIENT",
      target: "entity_ids",
      stateId: "S01",
      title: "Comparison size",
      detail: "Choose at least two instruments to compare.",
      code: "INSTRUMENT_COUNT",
      repairCode: "ADD_INSTRUMENT",
      repairLabel: "Add an instrument",
    });
  } else if (instruments.length > MAX_INSTRUMENTS) {
    checks.push({
      id: "count",
      gate: "P-01",
      status: "BLOCK",
      outcome: "MAX_REACHED",
      target: "entity_ids",
      stateId: "S06",
      title: "Comparison size",
      detail: "The public builder supports up to three instruments.",
      code: "INSTRUMENT_COUNT",
      repairCode: "REVIEW_INSTRUMENTS",
      repairLabel: "Remove one",
    });
  }

  /* P-02 Availability & phase ---------------------------------------- */
  const unlaunched = instruments.filter((item) => item.launchStatus === "UNLAUNCHED");
  const periodGated = isPeriodGated(request.period);
  checks.push({
    id: "availability",
    gate: "P-02",
    status: unlaunched.length || periodGated ? "BLOCK" : "PASS",
    outcome: unlaunched.length || periodGated ? "UNLAUNCHED" : "PASS",
    target: periodGated ? "time_basis" : "entity_ids",
    title: "Availability and phase",
    detail: periodGated
      ? (PERIODS.find((item) => item.id === request.period)?.gateReason ??
        "The selected period is not available in Launch.")
      : unlaunched.length
        ? `${unlaunched.map((item) => `${item.name} (${item.exchange})`).join(", ")} ${unlaunched.length === 1 ? "is" : "are"} outside the launched public scope.`
        : "Every selection is within the launched public scope.",
    code: unlaunched.length || periodGated ? "NOT_LAUNCHED" : undefined,
    repairCode: periodGated
      ? "CHOOSE_SUPPORTED_PERIOD"
      : unlaunched.length
        ? "REVIEW_INSTRUMENTS"
        : undefined,
    repairLabel: periodGated
      ? "Use the latest reported period"
      : unlaunched.length
        ? "Choose a launched listing"
        : undefined,
  });

  /* P-03 Metric / method --------------------------------------------- */
  const method = getComparisonMethod(request.methodId, request.methodVersion);
  const catalogMismatch = request.metricCatalogVersion !== METRIC_CATALOG_VERSION;
  if (!method || method.status !== "APPROVED" || catalogMismatch) {
    checks.push({
      id: "method-version",
      gate: "P-03",
      status: "BLOCK",
      outcome: "MISSING_METHOD",
      target: "method_version",
      title: "Methodology version",
      detail: catalogMismatch
        ? `The metric catalogue changed (now ${METRIC_CATALOG_VERSION}). Check again with the current catalogue.`
        : "The selected methodology version is not approved in the current registry.",
      code: "METHOD_NOT_APPROVED",
      repairCode: "CHOOSE_APPROVED_METHOD",
      repairLabel: "Use the approved method",
    });
  } else {
    checks.push({
      id: "method-version",
      gate: "P-03",
      status: "PASS",
      outcome: "PASS",
      target: "method_version",
      title: "Methodology version",
      detail: `${method.name} ${method.version} is approved in ${METHOD_REGISTRY_VERSION}; catalogue ${METRIC_CATALOG_VERSION}.`,
    });
  }

  if (metrics.length === 0 || metrics.length > MAX_METRICS) {
    checks.push({
      id: "metric-count",
      gate: "P-03",
      status: "BLOCK",
      outcome: "INAPPLICABLE",
      target: "metric_ids",
      title: "Metric selection",
      detail:
        metrics.length === 0
          ? "Select at least one metric."
          : `Select no more than ${MAX_METRICS} metrics.`,
      code: "METRIC_COUNT",
      repairCode: "CHOOSE_METRIC",
      repairLabel: "Choose metrics",
    });
  }

  const incompatible = metrics.flatMap((metric) =>
    instruments
      .filter((instrument) => !metric.kinds.includes(instrument.kind))
      .map((instrument) => ({ metric, instrument }))
  );
  checks.push({
    id: "applicability",
    gate: "P-03",
    status: incompatible.length ? "BLOCK" : "PASS",
    outcome: incompatible.length ? "INAPPLICABLE" : "PASS",
    target: "metric_ids",
    stateId: incompatible.length ? "S07" : undefined,
    title: "Metric applicability",
    detail: incompatible.length
      ? blockedCombinationCopy(incompatible[0].metric, incompatible[0].instrument)
      : "Every selected metric is registered for every selected instrument.",
    why: incompatible.length
      ? `This metric does not apply to every selected instrument. ${incompatible
          .map(({ metric, instrument }) => `${metric.label} → ${instrument.name}`)
          .join("; ")}.`
      : undefined,
    code: incompatible.length ? "METRIC_INCOMPATIBLE" : undefined,
    repairCode: incompatible.length ? "REMOVE_INELIGIBLE_METRICS" : undefined,
    repairLabel: incompatible.length ? "Remove inapplicable metrics" : undefined,
  });

  const gated = metrics.filter((metric) => isMetricGated(metric));
  if (gated.length) {
    checks.push({
      id: "method-gate",
      gate: "P-03",
      status: "BLOCK",
      outcome: "MISSING_METHOD",
      target: "metric_ids",
      title: "Approved calculation path",
      detail: `${gated.map((metric) => metric.label).join(", ")}: ${YIELD_GATE_REASON}`,
      code: "METHOD_GATED",
      repairCode: "REMOVE_INELIGIBLE_METRICS",
      repairLabel: "Remove gated metrics",
    });
  }

  /* Units & currency (A12, A13) -------------------------------------- */
  const currencyMetrics = metrics.filter((metric) => metric.unit === "currency-millions");
  const currencies = [...new Set(instruments.map((instrument) => instrument.currency))];
  if (!currencyMetrics.length) {
    checks.push({
      id: "currency",
      gate: "P-03",
      status: "PASS",
      outcome: "PASS",
      target: "display",
      title: "Units and currency",
      detail:
        request.currencyMode === "COMMON"
          ? "The selected metrics are not currency amounts, so no conversion applies. Values are shown in their published units."
          : "The selected metrics are not currency amounts; each is shown in its published unit.",
    });
  } else if (request.currencyMode === "COMMON") {
    const target = request.commonCurrency ?? "GBP";
    const needsConversion = instruments.filter((item) => item.currency !== target);
    checks.push({
      id: "currency",
      gate: "P-05",
      status: needsConversion.length ? "BLOCK" : "PASS",
      outcome: needsConversion.length ? "DENY" : "PASS",
      target: "display",
      title: "Currency conversion",
      detail: needsConversion.length
        ? `Showing ${needsConversion.map((item) => `${item.name} (${item.currency})`).join(", ")} in ${target} needs a licensed FX convention, timestamp and rate side. None is configured for this public surface, so values cannot be converted.`
        : `No conversion is needed: every selected instrument already reports in ${target}. Values are shown as reported in ${target}.`,
      code: needsConversion.length ? "FX_RIGHTS_DENIED" : undefined,
      repairCode: needsConversion.length ? "USE_REPORTED_CURRENCY" : undefined,
      repairLabel: needsConversion.length ? "Show as reported" : undefined,
    });
  } else if (currencies.length > 1) {
    checks.push({
      id: "currency",
      gate: "P-03",
      status: "WARN",
      outcome: "REPORTED_CURRENCIES_DIFFER",
      target: "display",
      title: "Reported currencies differ",
      detail: `Reported currencies differ (${currencies.join(", ")}). Currency amounts are shown as reported; no FX conversion is applied and no difference is calculated across currencies.`,
      code: "CURRENCY_MISMATCH",
    });
  } else {
    checks.push({
      id: "currency",
      gate: "P-03",
      status: "PASS",
      outcome: "PASS",
      target: "display",
      title: "Units and currency",
      detail: `Every selected instrument reports in ${currencies[0] ?? "the same currency"}, in millions.`,
    });
  }

  /* P-04 Temporal alignment ------------------------------------------ */
  const periodRows = instruments.map((instrument) => {
    const bounds = periodBoundsFor(instrument.id, request.period);
    return { instrument, bounds };
  });
  const fiscal = periodRows.filter(
    ({ bounds }) => bounds && bounds.basis === "FISCAL_ANNUAL"
  );
  const distinctWindows = new Set(
    fiscal.map(({ bounds }) => `${bounds?.start}|${bounds?.end}`)
  );
  const windowsText = periodRows
    .map(({ instrument, bounds }) => `${instrument.name}: ${formatPeriodShort(bounds)}`)
    .join("; ");
  if (!periodGated && distinctWindows.size > 1) {
    checks.push({
      id: "alignment",
      gate: "P-04",
      status: "WARN",
      outcome: "REVIEWABLE_MISMATCH",
      target: "time_basis",
      stateId: "S08",
      title: "Temporal alignment",
      detail: "Reporting periods differ; a like-for-like view is not available.",
      why: `${windowsText}. Values stay on each instrument's own fiscal calendar and no difference is calculated between unmatched periods.`,
      code: "PERIOD_NOT_COMPARABLE",
      repairCode: "CHOOSE_SHARED_WINDOW",
      repairLabel: "Review periods",
    });
  } else if (!periodGated) {
    checks.push({
      id: "alignment",
      gate: "P-04",
      status: "PASS",
      outcome: "PASS",
      target: "time_basis",
      title: "Temporal alignment",
      detail: instruments.length
        ? `Windows match. ${windowsText}.`
        : "No instruments selected.",
    });
  }
  if (request.publicationCutoff) {
    const invalid =
      !/^\d{4}-\d{2}-\d{2}$/.test(request.publicationCutoff) ||
      request.publicationCutoff > FIXTURE_EVALUATION_DATE;
    checks.push({
      id: "cutoff",
      gate: "P-04",
      status: invalid ? "BLOCK" : "PASS",
      outcome: invalid ? "BLOCK" : "PASS",
      target: "publication_cutoff",
      title: "Publication cutoff",
      detail: invalid
        ? "The publication cutoff must be a past date."
        : `Only records published on or before ${request.publicationCutoff} are used. Later revisions are disclosed, not applied.`,
      code: invalid ? "CUTOFF_INVALID" : undefined,
      repairCode: invalid ? "CLEAR_PUBLICATION_CUTOFF" : undefined,
      repairLabel: invalid ? "Use the latest vintage" : undefined,
    });
  }

  /* P-05 Source rights ----------------------------------------------- */
  const restricted = instruments.filter((instrument) => instrument.dataRights !== "FULL");
  checks.push({
    id: "rights",
    gate: "P-05",
    status: restricted.length ? "BLOCK" : "PASS",
    outcome: restricted.length ? "METADATA_ONLY" : "PASS",
    target: "rights",
    stateId: restricted.length ? "S09" : undefined,
    title: "Source rights",
    detail: restricted.length
      ? "The selected data cannot be displayed for this comparison."
      : `Display and derived-comparison rights are permitted for every selected instrument under ${DISPLAY_POLICY_VERSION}.`,
    why: restricted.length
      ? `${restricted.map((instrument) => instrument.name).join(", ")}: metadata-only licence. No values are sent to this browser.`
      : undefined,
    code: restricted.length ? "RIGHTS_DENIED" : undefined,
    repairCode: restricted.length ? "REVIEW_INSTRUMENTS" : undefined,
    repairLabel: restricted.length ? "Change instruments" : undefined,
  });

  /* P-06 Coverage & quality ------------------------------------------ */
  const evaluable =
    !unresolved &&
    !incompatible.length &&
    !gated.length &&
    !restricted.length &&
    !periodGated &&
    metrics.length > 0;
  if (evaluable) {
    const gaps: string[] = [];
    const conflicts: string[] = [];
    const stale: string[] = [];
    const revised: string[] = [];
    const affectedRows = new Set<string>();
    for (const metric of metrics) {
      for (const instrument of instruments) {
        const cell = evaluateCell(instrument, metric, request.period, request.publicationCutoff);
        const label = `${instrument.name} · ${metric.label}`;
        if (cell.kind === "GAP" || cell.kind === "NOT_BY_CUTOFF") {
          gaps.push(label);
          affectedRows.add(metric.id);
        } else if (cell.kind === "RESTATEMENT_PENDING") {
          gaps.push(`${label} (final figure not yet published)`);
          affectedRows.add(metric.id);
        } else if (cell.kind === "CONFLICT") {
          conflicts.push(label);
          affectedRows.add(metric.id);
        } else if (cell.kind === "STALE") {
          stale.push(`${label} (newest record ${cell.publishedAt})`);
          affectedRows.add(metric.id);
        } else if (cell.kind === "VALUE" && cell.supersededBy) {
          revised.push(label);
        }
      }
    }
    // Partial policy (S18): permitted rows still run with affected cells
    // withheld and labelled. If no row is unaffected, nothing can run.
    const noCleanRow = affectedRows.size >= metrics.length;
    const issueStatus = noCleanRow ? "BLOCK" : "WARN";
    if (gaps.length) {
      checks.push({
        id: "coverage-gap",
        gate: "P-06",
        status: issueStatus,
        outcome: "GAPS",
        target: "coverage",
        stateId: noCleanRow ? "S10" : "S18",
        title: "Source coverage",
        detail: noCleanRow
          ? "At least one source record is missing for this period."
          : "Some fields cannot be shown; permitted results are labelled.",
        why: `At least one source record is missing for this period: ${gaps.join("; ")}. Missing cells are withheld, never estimated.`,
        code: "SOURCE_GAP",
        repairCode: "REMOVE_AFFECTED_METRICS",
        repairLabel: "Remove affected metrics",
      });
    }
    if (conflicts.length) {
      checks.push({
        id: "coverage-conflict",
        gate: "P-06",
        status: issueStatus,
        outcome: "CONFLICT",
        target: "coverage",
        stateId: "S11",
        title: "Source agreement",
        detail: noCleanRow
          ? "Source records disagree. This comparison cannot run as configured."
          : "Source records disagree. The disputed cells will be blocked; permitted results are labelled.",
        why: `${conflicts.join("; ")}: primary records give different values. Talvrin does not average or choose between them, and no difference is derived from a disputed cell.`,
        code: "SOURCE_CONFLICT",
        repairCode: request.publicationCutoff ? "REMOVE_AFFECTED_METRICS" : "CHOOSE_SUPPORTED_PERIOD",
        repairLabel: request.publicationCutoff ? "Remove affected metrics" : "Use the latest reported period",
      });
    }
    if (stale.length) {
      checks.push({
        id: "coverage-stale",
        gate: "P-06",
        status: issueStatus,
        outcome: "STALE",
        target: "coverage",
        stateId: "S12",
        title: "Source currency",
        detail: "Source currency is outside this research rule.",
        why: `${stale.join("; ")}. The freshness rule for this metric is not met, so the value is withheld.`,
        code: "STALE_SOURCE",
        repairCode: "REMOVE_AFFECTED_METRICS",
        repairLabel: "Remove affected metrics",
      });
    }
    if (revised.length) {
      checks.push({
        id: "coverage-revision",
        gate: "P-06",
        status: "WARN",
        outcome: "REVISED",
        target: "publication_cutoff",
        title: "Later revision exists",
        detail: `${revised.join("; ")}: a record published after your cutoff revises this value. The result will show the vintage at your cutoff and label it as superseded.`,
        code: "REVISED_AFTER_CUTOFF",
        repairCode: "CLEAR_PUBLICATION_CUTOFF",
        repairLabel: "Use the latest vintage",
      });
    }
    if (!gaps.length && !conflicts.length && !stale.length) {
      checks.push({
        id: "coverage",
        gate: "P-06",
        status: "PASS",
        outcome: "PASS",
        target: "coverage",
        title: "Coverage and quality",
        detail: `Every selected cell has one consistent, current primary record (${metrics.length * instruments.length} cells checked).`,
      });
    }
  } else {
    checks.push({
      id: "coverage",
      gate: "P-06",
      status: "WARN",
      outcome: "NOT_EVALUATED",
      target: "coverage",
      title: "Coverage and quality",
      detail: "Not evaluated until the blocking checks above are resolved.",
    });
  }

  /* P-07 Limits & auth ------------------------------------------------ */
  checks.push({
    id: "limits",
    gate: "P-07",
    status: "PASS",
    outcome: "PASS",
    target: "entity_ids",
    title: "Guest limits and isolation",
    detail:
      "Within the guest research limit. The draft and any result are bound to this browser session only.",
  });

  // A "NOT_EVALUATED" coverage row is informational, not a warning to accept.
  const blocking = checks.filter((check) => check.status === "BLOCK").length;
  const warnings = checks.filter(
    (check) => check.status === "WARN" && check.outcome !== "NOT_EVALUATED"
  ).length;
  return {
    checks,
    decision: blocking ? "BLOCKED" : warnings ? "REVISE" : "READY",
  };
}

/* ------------------------------------------------------------------ */
/* Execution result (WF-05)                                             */
/* ------------------------------------------------------------------ */

const REASON_COPY: Record<ComparisonReasonCode, string> = {
  SOURCE_GAP: "This value is not available from a permitted source.",
  RIGHTS_METADATA_ONLY:
    "The source licence permits metadata only. No value is sent to this browser.",
  RESTATEMENT_PENDING:
    "A restatement is pending and the issuer has not published a final figure.",
  SOURCE_CONFLICT:
    "Source records disagree. Neither figure is selected, averaged or estimated.",
  STALE_SOURCE: "Source currency is outside this research rule.",
  NOT_PUBLISHED_BY_CUTOFF:
    "No record for this period was published by the selected cutoff.",
  METRIC_NOT_APPLICABLE: "This metric does not apply to this instrument.",
  METHOD_GATED: YIELD_GATE_REASON,
  METHOD_INVALID:
    "The methodology version is not approved, so no derived output is produced.",
  METHOD_NO_DERIVED_OUTPUT:
    "The selected methodology shows observations only; no difference is derived.",
  CURRENCY_MISMATCH:
    "Reported currencies differ and no licensed FX conversion is applied.",
  UNIT_MISMATCH: "The inputs are not in the same unit or scale.",
  PERIOD_NOT_COMPARABLE:
    "Cannot compare this metric: the selected sources use different financial reporting periods.",
  INPUT_NOT_ELIGIBLE: "At least one input cell is withheld or contested.",
  DENOMINATOR_ZERO:
    "The denominator is zero, so a percentage difference is undefined.",
  DENOMINATOR_NEGATIVE:
    "The denominator is negative; the registry withholds the percentage difference rather than assume a meaning.",
  NOT_APPROVED_FOR_METRIC:
    "A percentage difference is not an approved definition for this metric.",
};

export function reasonCopy(code: string): string {
  // Unknown codes fail closed (WF-05 §8.1).
  return (
    REASON_COPY[code as ComparisonReasonCode] ??
    "This value is withheld because its status could not be confirmed."
  );
}

function cellClaimId(instrumentId: string, metricId: string, periodId: string) {
  return `cc-${instrumentId}-${metricId}-${periodId}`;
}

export function buildComparisonResult(
  request: ComparisonRequest,
  ref: string,
  requestFingerprint: string
): ComparisonResult {
  const instruments = request.instrumentIds
    .map((id) => getInstrument(id))
    .filter((instrument): instrument is Instrument => Boolean(instrument));
  const metrics = request.metricIds
    .map((id) => getMetric(id))
    .filter((metric): metric is MetricDefinition => Boolean(metric));
  const method = getComparisonMethod(request.methodId, request.methodVersion);
  const methodValid = Boolean(method && method.status === "APPROVED");
  const derives = methodValid && Boolean(method?.derivesDifferences);

  const claims: Claim[] = [];
  const sourceIds = new Set<string>();
  const rows: ComparisonRow[] = [];
  const notices: ComparisonNotice[] = [];
  const asOfDates: string[] = [];
  const gapLines: string[] = [];
  const interpretation: Segment[][] = [];
  let cellIndex = 0;

  for (const metric of metrics) {
    const precision = metric.precision ?? 1;
    const cells: ComparisonCell[] = [];

    for (const instrument of instruments) {
      cellIndex += 1;
      const cellId = `cell_${String(cellIndex).padStart(2, "0")}`;
      const evaluation = evaluateCell(instrument, metric, request.period, request.publicationCutoff);
      const base = {
        cellId,
        metricId: metric.id,
        instrumentId: instrument.id,
        claimRefs: [] as string[],
        observationRefs: [] as string[],
      };

      if (evaluation.kind === "VALUE") {
        const { observation, period } = evaluation;
        const claimId = cellClaimId(instrument.id, metric.id, request.period);
        const unit = unitLabelFor(metric, instrument);
        const display = decimalRound(observation.value, precision);
        const amount =
          metric.unit === "currency-millions"
            ? `${instrument.currency} ${groupDecimal(display)} million`
            : `${groupDecimal(display)}${metric.unit === "%" ? "%" : ` ${metric.unit}`}`;
        sourceIds.add(observation.sourceId);
        asOfDates.push(period.end);
        claims.push({
          id: claimId,
          text: `${instrument.name} reported ${metric.label.toLowerCase()} of ${amount} for the ${period.label.charAt(0).toLowerCase()}${period.label.slice(1)}.`,
          materiality: "MATERIAL",
          verification: "SUPPORTED",
          sourceIds: [observation.sourceId],
          note: evaluation.supersededBy
            ? `Superseded vintage: a record published ${evaluation.supersededBy.publishedAt} revises this value.`
            : undefined,
        });
        const cell: ComparisonCell = {
          ...base,
          claimRefs: [claimId],
          observationRefs: [observation.id],
          period,
          state: "DISPLAY_ALLOWED",
          displayValue: display,
          precision,
          unit,
          currency: metric.unit === "currency-millions" ? instrument.currency : null,
          scale: metric.unit === "currency-millions" ? "millions" : null,
          asOf: period.end,
          publishedAt: observation.publishedAt,
          sourceId: observation.sourceId,
          claimId,
        };
        if (evaluation.supersededBy) {
          cell.revisedBy = {
            sourceId: evaluation.supersededBy.sourceId,
            publishedAt: evaluation.supersededBy.publishedAt,
            note: "A record published after your cutoff revises this value. Refresh without a cutoff to view the current approved result.",
          };
          sourceIds.add(evaluation.supersededBy.sourceId);
          notices.push({
            id: `rev-${cellId}`,
            kind: "REVISION",
            title: "A source record has been revised",
            detail: `${instrument.name} · ${metric.label}: the value shown is the vintage published ${observation.publishedAt}. A record published ${evaluation.supersededBy.publishedAt} revises it.`,
            impact:
              "The displayed cell is an older vintage. Differences that use it are labelled with the same vintage. Refresh to view the current approved result.",
            affectedCellIds: [cellId],
            sourceIds: [observation.sourceId, evaluation.supersededBy.sourceId],
          });
        }
        cells.push(cell);
        continue;
      }

      if (evaluation.kind === "CONFLICT") {
        const claimId = `${cellClaimId(instrument.id, metric.id, request.period)}-conflict`;
        const contestedSources = evaluation.observations.map((item) => item.sourceId);
        contestedSources.forEach((id) => sourceIds.add(id));
        claims.push({
          id: claimId,
          text: `Primary records disagree on ${instrument.name} ${metric.label.toLowerCase()} for the ${evaluation.period.label.charAt(0).toLowerCase()}${evaluation.period.label.slice(1)}: ${evaluation.observations
            .map((item) => `${item.note ?? "record"} ${metric.unit === "currency-millions" ? `${instrument.currency} ${groupDecimal(decimalRound(item.value, precision))} million` : `${decimalRound(item.value, precision)}${metric.unit}`}`)
            .join(" versus ")}. Talvrin does not select, average or reconcile these figures.`,
          materiality: "MATERIAL",
          verification: "CONTESTED",
          sourceIds: contestedSources,
        });
        notices.push({
          id: `conflict-${cellId}`,
          kind: "CONFLICT",
          title: "Source records disagree",
          detail: `${instrument.name} · ${metric.label} (${evaluation.period.label}): ${evaluation.observations.length} primary records give different values.`,
          impact:
            "The disputed cell is blocked and no difference is derived from it. Review the conflicting records in the evidence inspector.",
          affectedCellIds: [cellId],
          sourceIds: contestedSources,
        });
        cells.push({
          ...base,
          claimRefs: [claimId],
          observationRefs: evaluation.observations.map((item) => item.id),
          period: evaluation.period,
          state: "CONTESTED",
          displayValue: null,
          reasonCode: "SOURCE_CONFLICT",
          reason: REASON_COPY.SOURCE_CONFLICT,
          sourceIds: contestedSources,
          claimId,
        });
        continue;
      }

      if (evaluation.kind === "NOT_APPLICABLE") {
        cells.push({
          ...base,
          period: null,
          state: "NOT_APPLICABLE",
          displayValue: null,
          reasonCode: "METRIC_NOT_APPLICABLE",
          reason: REASON_COPY.METRIC_NOT_APPLICABLE,
        });
        continue;
      }

      const reasonCode: ComparisonReasonCode =
        evaluation.kind === "RIGHTS"
          ? "RIGHTS_METADATA_ONLY"
          : evaluation.kind === "GATED"
            ? "METHOD_GATED"
            : evaluation.kind === "RESTATEMENT_PENDING"
              ? "RESTATEMENT_PENDING"
              : evaluation.kind === "NOT_BY_CUTOFF"
                ? "NOT_PUBLISHED_BY_CUTOFF"
                : evaluation.kind === "STALE"
                  ? "STALE_SOURCE"
                  : "SOURCE_GAP";
      gapLines.push(`${instrument.name} · ${metric.label}: ${REASON_COPY[reasonCode]}`);
      if (reasonCode === "STALE_SOURCE" || reasonCode === "SOURCE_GAP" || reasonCode === "RESTATEMENT_PENDING") {
        notices.push({
          id: `gap-${cellId}`,
          kind: reasonCode === "STALE_SOURCE" ? "STALE" : "GAP",
          title:
            reasonCode === "STALE_SOURCE"
              ? "Source currency is outside this research rule"
              : reasonCode === "RESTATEMENT_PENDING"
                ? "Final figure not yet published"
                : "Source record missing",
          detail: `${instrument.name} · ${metric.label}: ${REASON_COPY[reasonCode]}`,
          impact: "This cell is withheld and every difference that needs it is withheld.",
          affectedCellIds: [cellId],
          sourceIds: [],
        });
      } else if (reasonCode === "RIGHTS_METADATA_ONLY") {
        notices.push({
          id: `rights-${cellId}`,
          kind: "RIGHTS",
          title: "Display not permitted",
          detail: `${instrument.name} · ${metric.label}: ${REASON_COPY.RIGHTS_METADATA_ONLY}`,
          impact: "No protected value, snippet or count is shown.",
          affectedCellIds: [cellId],
          sourceIds: [],
        });
      }
      cells.push({
        ...base,
        period: evaluation.period,
        state: "WITHHELD",
        displayValue: null,
        reasonCode,
        reason: REASON_COPY[reasonCode],
      });
    }

    /* Derived deltas: eligible pairs only (RES-07, §6.2) ----------- */
    const deltas: ComparisonDelta[] = [];
    for (let i = 0; i < instruments.length; i += 1) {
      for (let j = i + 1; j < instruments.length; j += 1) {
        const a = cells[i];
        const b = cells[j];
        const kinds: ComparisonDelta["kind"][] = ["ABSOLUTE_DIFFERENCE"];
        if (metric.unit === "currency-millions") kinds.push("PERCENT_DIFFERENCE");
        for (const kind of kinds) {
          const methodRecord =
            kind === "ABSOLUTE_DIFFERENCE" ? METHODS.absoluteDifference : METHODS.percentDifference;
          const deltaBase = {
            id: `delta_${metric.id}_${instruments[i].id}_${instruments[j].id}_${kind === "ABSOLUTE_DIFFERENCE" ? "abs" : "pct"}`,
            metricId: metric.id,
            kind,
            aInstrumentId: instruments[i].id,
            bInstrumentId: instruments[j].id,
            inputCellIds: [a.cellId, b.cellId] as [string, string],
            formula: kind === "ABSOLUTE_DIFFERENCE" ? "A − B" : "((A − B) ÷ |B|) × 100",
            denominator:
              kind === "PERCENT_DIFFERENCE"
                ? `|B| = ${instruments[j].name} ${metric.label.toLowerCase()}`
                : null,
            methodId: methodRecord.id,
            methodVersion: methodRecord.version,
          };
          const withhold = (reasonCode: ComparisonReasonCode): ComparisonDelta => ({
            ...deltaBase,
            state: "WITHHELD",
            displayValue: null,
            reasonCode,
            reason: REASON_COPY[reasonCode],
          });
          if (!methodValid) {
            deltas.push(withhold("METHOD_INVALID"));
            continue;
          }
          if (!derives) {
            deltas.push(withhold("METHOD_NO_DERIVED_OUTPUT"));
            continue;
          }
          if (a.state !== "DISPLAY_ALLOWED" || b.state !== "DISPLAY_ALLOWED") {
            deltas.push(withhold("INPUT_NOT_ELIGIBLE"));
            continue;
          }
          if (a.unit !== b.unit || a.scale !== b.scale) {
            deltas.push(
              withhold(a.currency && b.currency && a.currency !== b.currency ? "CURRENCY_MISMATCH" : "UNIT_MISMATCH")
            );
            continue;
          }
          if (!samePeriod(a.period, b.period)) {
            deltas.push(withhold("PERIOD_NOT_COMPARABLE"));
            continue;
          }
          if (kind === "ABSOLUTE_DIFFERENCE") {
            const value = decimalSubtract(a.displayValue, b.displayValue, precision);
            deltas.push({
              ...deltaBase,
              state: "DISPLAY_ALLOWED",
              displayValue: value,
              precision,
              unit: metric.unit === "%" ? "pp" : a.unit,
            });
          } else {
            const pct = decimalPercentDifference(a.displayValue, b.displayValue, 1);
            if ("reason" in pct) {
              deltas.push(withhold(pct.reason));
            } else {
              deltas.push({
                ...deltaBase,
                state: "DISPLAY_ALLOWED",
                displayValue: pct.value,
                precision: 1,
                unit: "%",
              });
            }
          }
        }
      }
    }

    rows.push({
      metricId: metric.id,
      label: metric.label,
      basis: metric.basis,
      unitLabel: rowUnitLabel(metric),
      cells,
      deltas,
    });

    /* Evidence-bounded interpretation (RES-11, §7.2) ------------- */
    for (const delta of deltas) {
      if (delta.state !== "DISPLAY_ALLOWED" || delta.kind !== "ABSOLUTE_DIFFERENCE") continue;
      const a = cells.find((cell) => cell.cellId === delta.inputCellIds[0]);
      const b = cells.find((cell) => cell.cellId === delta.inputCellIds[1]);
      if (a?.state !== "DISPLAY_ALLOWED" || b?.state !== "DISPLAY_ALLOWED") continue;
      const aName = getInstrument(delta.aInstrumentId)?.name ?? "Instrument A";
      const bName = getInstrument(delta.bInstrumentId)?.name ?? "Instrument B";
      const sign = delta.displayValue.startsWith("-")
        ? "lower"
        : /^0(\.0+)?$/.test(delta.displayValue)
          ? "equal"
          : "higher";
      interpretation.push([
        {
          kind: "text",
          text:
            sign === "equal"
              ? `For the selected reporting windows, ${aName} and ${bName} report the same ${metric.label.toLowerCase()} at the published precision `
              : `For the selected reporting windows, ${aName} reports ${sign} ${metric.label.toLowerCase()} than ${bName} `,
        },
        { kind: "citation", claimId: a.claimId },
        { kind: "citation", claimId: b.claimId },
        { kind: "text", text: "." },
      ]);
    }
    const incomplete = cells.filter((cell) => cell.state === "WITHHELD");
    for (const cell of incomplete) {
      const name = getInstrument(cell.instrumentId)?.name ?? "one instrument";
      interpretation.push([
        {
          kind: "text",
          text: `The selected ${metric.label.toLowerCase()} comparison is incomplete because an eligible ${name} observation is unavailable.`,
        },
      ]);
    }
    for (const cell of cells) {
      if (cell.state !== "CONTESTED") continue;
      const name = getInstrument(cell.instrumentId)?.name ?? "one instrument";
      interpretation.push([
        {
          kind: "text",
          text: `Source records disagree on ${name} ${metric.label.toLowerCase()}; no figure is selected or averaged `,
        },
        { kind: "citation", claimId: cell.claimId },
        { kind: "text", text: "." },
      ]);
    }
  }

  const allCells = rows.flatMap((row) => row.cells);
  const anyContested = allCells.some((cell) => cell.state === "CONTESTED");
  const anyRevised = allCells.some(
    (cell) => cell.state === "DISPLAY_ALLOWED" && Boolean(cell.revisedBy)
  );
  const anyWithheld = allCells.some(
    (cell) => cell.state === "WITHHELD" || cell.state === "NOT_APPLICABLE"
  );
  const allRightsDenied =
    allCells.length > 0 &&
    allCells.every(
      (cell) => cell.state === "WITHHELD" && cell.reasonCode === "RIGHTS_METADATA_ONLY"
    );

  const state: ComparisonResultState = !methodValid
    ? "METHOD_INVALID"
    : allRightsDenied
      ? "RIGHTS_DENIED"
      : anyContested
        ? "CONFLICT"
        : anyRevised
          ? "STALE_OR_REVISED"
          : anyWithheld
            ? "PARTIAL"
            : "READY";

  if (interpretation.length) {
    interpretation.push([
      {
        kind: "text",
        text: "These measurements do not determine investment suitability or future returns.",
      },
    ]);
  }

  /* Period notice (RES-03, T05) ---------------------------------------- */
  const contextInstruments = instruments.map((instrument) => ({
    instrumentId: instrument.id,
    canonicalId: instrument.canonicalId ?? instrument.id,
    name: instrument.name,
    kind: instrument.kind,
    venue: `${instrument.venueName ?? instrument.exchange} (${instrument.exchange})`,
    currency: instrument.currency,
    period: periodBoundsFor(instrument.id, request.period),
  }));
  const windows = new Set(
    contextInstruments.map((item) => `${item.period?.start}|${item.period?.end}`)
  );
  if (windows.size > 1) {
    notices.push({
      id: "period-mismatch",
      kind: "PERIOD",
      title: "Reporting periods differ",
      detail: contextInstruments
        .map((item) => `${item.name}: ${formatPeriodShort(item.period)}`)
        .join("; "),
      impact:
        "Values are shown on each instrument's own fiscal calendar. No difference is calculated between unmatched periods.",
      affectedCellIds: [],
      sourceIds: [],
    });
  }
  const currencies = new Set(instruments.map((instrument) => instrument.currency));
  if (currencies.size > 1 && metrics.some((metric) => metric.unit === "currency-millions")) {
    notices.push({
      id: "currency-mismatch",
      kind: "CURRENCY",
      title: "Reported currencies differ",
      detail: `Currency amounts are shown in ${[...currencies].join(", ")} as reported.`,
      impact: "No FX conversion is applied and no currency-amount difference is calculated across currencies.",
      affectedCellIds: [],
      sourceIds: [],
    });
  }

  /* Evidence summary (RES-10) ------------------------------------------ */
  const codeFor = (cell: ComparisonCell): ComparisonEvidenceCode =>
    cell.state === "DISPLAY_ALLOWED"
      ? "PASS"
      : cell.state === "CONTESTED"
        ? "CONFLICT"
        : cell.state === "WITHHELD" && cell.reasonCode === "RIGHTS_METADATA_ONLY"
          ? "DENIED"
          : "PARTIAL";
  const rank: Record<ComparisonEvidenceCode, number> = { PASS: 0, PARTIAL: 1, CONFLICT: 2, DENIED: 3 };
  const counts: Record<ComparisonEvidenceCode, number> = { PASS: 0, PARTIAL: 0, CONFLICT: 0, DENIED: 0 };
  allCells.forEach((cell) => {
    counts[codeFor(cell)] += 1;
  });
  const evidence: ComparisonEvidenceSummary = {
    counts,
    instruments: instruments.map((instrument) => {
      const own = allCells.filter((cell) => cell.instrumentId === instrument.id);
      const code = own.reduce<ComparisonEvidenceCode>(
        (worst, cell) => (rank[codeFor(cell)] > rank[worst] ? codeFor(cell) : worst),
        "PASS"
      );
      return {
        instrumentId: instrument.id,
        code,
        licenceDecision:
          instrument.dataRights === "FULL"
            ? "Display and derive permitted"
            : "Metadata only · display denied",
        detail: `${own.filter((cell) => cell.state === "DISPLAY_ALLOWED").length} of ${own.length} cells displayed`,
      };
    }),
    sources: [...sourceIds].map((sourceId) => {
      const source = getSource(sourceId);
      const supporting = allCells.filter(
        (cell) =>
          (cell.state === "DISPLAY_ALLOWED" && cell.sourceId === sourceId) ||
          (cell.state === "CONTESTED" && cell.sourceIds.includes(sourceId)) ||
          (cell.state === "DISPLAY_ALLOWED" && cell.revisedBy?.sourceId === sourceId)
      );
      const contested = supporting.some((cell) => cell.state === "CONTESTED");
      return {
        sourceId,
        code: contested ? ("CONFLICT" as const) : ("PASS" as const),
        factStatus: source
          ? `${source.tier} · ${source.sourceClass.replaceAll("_", " ").toLowerCase()} · ${source.verification.toLowerCase()}`
          : "Unregistered source",
        licenceDecision: source
          ? source.rights.display
            ? `Display permitted · ${source.rights.state.replaceAll("_", " ").toLowerCase()}`
            : "Display denied"
          : "Not evaluated",
        cellIds: supporting.map((cell) => cell.cellId),
      };
    }),
    gaps: gapLines,
  };

  /* Method trace (RES-09) ---------------------------------------------- */
  const windowsList = contextInstruments.map(
    (item) => `${item.name}: ${item.period ? `${item.period.label} (${formatPeriodShort(item.period)})` : "no period on record"}`
  );
  const displayed = allCells.filter((cell) => cell.state === "DISPLAY_ALLOWED").length;
  const coverageLine = `Selected metrics only: ${displayed} of ${allCells.length} cells displayed.`;
  const precisionLine = metrics
    .map((metric) => `${metric.label} ${metric.precision ?? 1} dp`)
    .join(", ");
  const methods: ComparisonMethodTrace[] = [
    {
      ...METHODS.alignment,
      formula:
        "Cell eligible ⇔ display right ∧ registered metric ∧ one consistent record by cutoff ∧ freshness rule met. Pair eligible ⇔ both cells eligible ∧ same unit, currency and scale ∧ identical period start and end.",
      registryVersion: METHOD_REGISTRY_VERSION,
      rounding: `Display-only rounding, half away from zero: ${precisionLine}.`,
      adjustments:
        "None. Reported, unadjusted values; no FX conversion, pro-forma restatement or corporate-action adjustment.",
      windows: windowsList,
      coverage: coverageLine,
    },
  ];
  if (derives) {
    methods.push({
      ...METHODS.absoluteDifference,
      formula: "A − B (exact decimal arithmetic); percentage metrics give percentage points (pp).",
      registryVersion: METHOD_REGISTRY_VERSION,
      rounding: "Rounded once to the metric's presentation precision after arithmetic.",
      adjustments: "None.",
      windows: windowsList,
      coverage: `${rows.flatMap((row) => row.deltas).filter((delta) => delta.kind === "ABSOLUTE_DIFFERENCE" && delta.state === "DISPLAY_ALLOWED").length} eligible absolute differences.`,
    });
    if (metrics.some((metric) => metric.unit === "currency-millions")) {
      methods.push({
        ...METHODS.percentDifference,
        formula: "((A − B) ÷ |B|) × 100. B, the second instrument of each pair, is the denominator.",
        registryVersion: METHOD_REGISTRY_VERSION,
        rounding: "Rounded once to 1 dp after arithmetic.",
        adjustments: "None. Withheld when B is zero or negative.",
        windows: windowsList,
        coverage: `${rows.flatMap((row) => row.deltas).filter((delta) => delta.kind === "PERCENT_DIFFERENCE" && delta.state === "DISPLAY_ALLOWED").length} eligible percentage differences.`,
      });
    }
  }

  const nextActions: ComparisonNextAction[] = [];
  if (displayed) nextActions.push("INSPECT_ELIGIBLE_CLAIM");
  if (anyContested) nextActions.push("REVIEW_CONFLICT");
  if (anyRevised) nextActions.push("REFRESH_EXECUTION");
  nextActions.push("ADJUST_COMPARISON", "ASK_FOLLOW_UP");
  if (claims.length) nextActions.push("REPORT_CLAIM");

  const generatedAt = new Date().toISOString();
  const sortedAsOf = [...asOfDates].sort();
  const timeContext: TimeContext = {
    asOf: sortedAsOf[sortedAsOf.length - 1] ?? FIXTURE_EVALUATION_DATE,
    observedAt: sortedAsOf[0] ?? null,
    publishedAt: null,
    ingestedAt: "2026-10-24T07:50:00Z",
    retrievedAt: "2026-10-24T08:30:00Z",
    generatedAt,
    timezone: "UTC",
  };

  const currencyLabel =
    request.currencyMode === "COMMON"
      ? `Single currency requested (${request.commonCurrency ?? "GBP"}); no conversion applied`
      : "As reported; no FX conversion";

  const decisionNote: Record<ComparisonResultState, string> = {
    PENDING: "",
    READY: "All requested cells are display-permitted and comparable on the stated basis.",
    PARTIAL:
      "Some fields cannot be shown; permitted results are labelled. No missing value has been estimated or inferred.",
    CONFLICT:
      "Source records disagree for at least one cell. Disputed cells are blocked and no difference is derived from them.",
    RIGHTS_DENIED:
      "The selected data cannot be displayed for this comparison. No protected values are included.",
    METHOD_INVALID:
      "The methodology version is not approved. Observations are shown without any derived output.",
    STALE_OR_REVISED:
      "This result uses an older vintage at your publication cutoff. A later record revises at least one value.",
    EXPIRED_OR_REVOKED: "",
    FAILED: "",
    NOT_LAUNCHED: "",
  };

  return {
    fixtureLabel: FIXTURE_LABEL,
    ref,
    resultVersion: 1,
    state,
    displayPolicyVersion: DISPLAY_POLICY_VERSION,
    requestFingerprint,
    methodRegistry: METHOD_REGISTRY_VERSION,
    metricCatalogVersion: METRIC_CATALOG_VERSION,
    methodId: request.methodId,
    methodVersion: request.methodVersion,
    generatedAt,
    observationAsOf: {
      earliest: sortedAsOf[0] ?? null,
      latest: sortedAsOf[sortedAsOf.length - 1] ?? null,
    },
    title: `${instruments.map((instrument) => instrument.name).join(" · ")} — ${metrics.map((metric) => metric.label.toLowerCase()).join(", ")}`,
    decisionNote: decisionNote[state],
    context: {
      instruments: contextInstruments,
      metricIds: metrics.map((metric) => metric.id),
      period: { id: request.period, label: periodLabel(request.period) },
      currencyMode: request.currencyMode,
      currencyLabel,
      commonCurrency: request.currencyMode === "COMMON" ? request.commonCurrency : null,
      unitNote:
        "Currency amounts in millions of the reporting currency; percentages as published; differences of percentages in percentage points (pp).",
      publicationCutoff: request.publicationCutoff,
    },
    instruments,
    rows,
    methods,
    claims,
    sources: [...sourceIds],
    notices,
    evidence,
    interpretation,
    coverage: { scope: "Selected metrics only", gaps: gapLines },
    limitations: [
      "Values are reported figures, not adjusted or pro-forma measures.",
      "Differences are arithmetic and do not imply which instrument is better.",
      request.currencyMode === "REPORTED"
        ? "No foreign-exchange conversion has been performed."
        : `A single currency (${request.commonCurrency ?? "GBP"}) was requested; values were already in that currency, so none was converted.`,
      "No market price, valuation multiple, score, ranking or recommendation is included.",
    ],
    nextActions,
    followUps: [
      "Show the evidence behind each displayed value in this comparison.",
      "Explain why some cells in this comparison are withheld.",
      "Explain the reporting-period basis used in this comparison.",
    ],
    timeContext,
  };
}
