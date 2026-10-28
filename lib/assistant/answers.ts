import type {
  AnswerBlock,
  AnswerStatus,
  Claim,
  ClaimEvidenceEdge,
  ClaimMapping,
  CoverageInfo,
  MethodRecord,
  PolicyInfo,
  PublishedAnswer,
  ScenarioKey,
  ScopeId,
  Segment,
  SourceRecord,
  TimeContext,
} from "./types";
import { SCOPES, FIXTURE_LABEL, NO_ADVICE_COPY } from "./taxonomy";
import { SOURCES } from "./sources";
import { METHODS } from "./methods";
import { referencedYears } from "./scenario";

const t = (text: string): Segment => ({ kind: "text", text });
const b = (text: string): Segment => ({ kind: "strong", text });
const c = (claimId: string): Segment => ({ kind: "citation", claimId });

const RETRIEVED_AT = "2026-10-24T08:24:00Z";

function coverage(gaps: string[], revisionNote: string): CoverageInfo {
  return {
    scopes: SCOPES.map((scope) => ({
      id: scope.id,
      label: scope.label,
      supported: scope.supported,
      note: scope.note,
    })),
    gaps,
    revisionNote,
  };
}

const POLICY: PolicyInfo = {
  retrievalPolicy:
    "Policy and rights are resolved before retrieval. Only records this visitor may receive enter context.",
  answerPolicy:
    "The answer object is published only after every material claim clears claim-level evidence validation.",
  rightsPolicy:
    "Display, quote, export and redistribution are separate permissions. A missing permission is a denial.",
  adviceBoundary: NO_ADVICE_COPY,
  assistantLabel: "Talvrin Research Assistant",
  modelDisclosure:
    "A language model drafted explanatory prose from the retrieved evidence. Calculations were produced by versioned deterministic services.",
};

/**
 * WF-02 §1.1 temporal precision: observed/as-of, source publication,
 * Talvrin ingestion and retrieval, and answer generation are separate
 * fields and are never copied from one another.
 */
function timeContext(
  asOf: string,
  publishedAt: string | null,
  ingestedAt: string
): TimeContext {
  return {
    asOf,
    observedAt: asOf,
    publishedAt,
    ingestedAt,
    retrievedAt: RETRIEVED_AT,
    generatedAt: new Date().toISOString(),
    timezone: "UTC",
  };
}

/** Rights policy reference for derived figures (WF-02 §9.1 methods[]). */
const RIGHTS_POLICY_REF = "rights-policy-fixture-2026-10";

/** Deterministic record-to-record difference (conflict fixture). */
const DIFFERENCE_METHOD: MethodRecord = {
  id: "m-record-difference",
  name: "Record-to-record difference",
  version: "v1.0",
  summary:
    "Difference = value in record A − value in record B, and that difference as a share of record A. Values are used exactly as each record reports them; nothing is averaged or adjusted.",
  inputs: ["Value as originally filed", "Value as restated"],
  limitations: [
    "Describes the gap between two records; it does not say which record is right for a given purpose.",
  ],
};

export class AnswerPublishError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "AnswerPublishError";
  }
}

export function buildAnswer(
  scenario: ScenarioKey,
  question: string,
  scopeIds: ScopeId[]
): PublishedAnswer {
  void question;
  void scopeIds;
  let answer: PublishedAnswer;
  switch (scenario) {
    case "BOND_EDUCATION":
      answer = bondEducation();
      break;
    case "CONFLICT":
      answer = conflictCase();
      break;
    case "RESTRICTED":
      answer = restrictedCase();
      break;
    case "STALE":
      answer = staleCase();
      break;
    case "PARTIAL":
      answer = partialCase();
      break;
    case "UNSUPPORTED":
      answer = unsupportedCase();
      break;
    case "ADVICE":
      answer = adviceCase();
      break;
    case "NO_MATCH":
      answer = noMatchCase(question);
      break;
    case "CORPORATE_READY":
    default:
      answer = corporateReady();
  }
  return finalizeAnswer(answer);
}

/* ------------------------------------------------------------------ */
/* Publication gate (WF-02 §5.1, §10.1 G7/G8, A03, A05; WF-03 AC09)     */
/* ------------------------------------------------------------------ */

function citedClaimIds(segments: Segment[] | undefined): string[] {
  return (segments ?? [])
    .filter((segment): segment is Extract<Segment, { kind: "citation" }> =>
      segment.kind === "citation"
    )
    .map((segment) => segment.claimId);
}

function blockClaimIds(block: AnswerBlock): string[] {
  switch (block.kind) {
    case "paragraph":
      return citedClaimIds(block.segments);
    case "metric-grid":
      return block.metrics.flatMap((metric) =>
        metric.claimId ? [metric.claimId] : []
      );
    case "table":
      return block.rows.flatMap((row) =>
        row.cells.flatMap((cell) => (cell.claimId ? [cell.claimId] : []))
      );
    case "evidence-list":
      return block.claimIds;
    default:
      return [];
  }
}

/**
 * Seals the fixture as a publication-ready answer object:
 * - assigns a stable blockId to every block;
 * - binds every claim to the block of its first citation and its exact
 *   published text (span);
 * - orders sources by first citation so [n] is stable for the version;
 * - derives claim mapping modes and evidence edges;
 * - refuses publication when a citation points to a missing or
 *   ineligible source, or a discovery-only (H4) source supports a
 *   material claim.
 */
function finalizeAnswer(answer: PublishedAnswer): PublishedAnswer {
  const blocks: AnswerBlock[] = answer.blocks.map((block, index) => ({
    ...block,
    blockId: `blk-${String(index + 1).padStart(2, "0")}`,
  }));
  const claimById = new Map(answer.claims.map((claim) => [claim.id, claim]));

  // Every citation must resolve to a claim in the claim map.
  const citationOrder: string[] = [
    ...citedClaimIds(answer.headlineSegments),
    ...citedClaimIds(answer.summarySegments),
    ...blocks.flatMap(blockClaimIds),
  ];
  for (const claimId of citationOrder) {
    if (!claimById.has(claimId)) {
      throw new AnswerPublishError(`Citation ${claimId} has no claim.`);
    }
  }

  // Source ordinals follow first appearance in the published answer.
  const ordered: string[] = [];
  for (const claimId of citationOrder) {
    for (const sourceId of claimById.get(claimId)?.sourceIds ?? []) {
      if (!ordered.includes(sourceId)) ordered.push(sourceId);
    }
  }
  for (const sourceId of answer.sources) {
    if (!ordered.includes(sourceId)) ordered.push(sourceId);
  }

  const claims: Claim[] = answer.claims.map((claim) => {
    for (const sourceId of claim.sourceIds) {
      const source = SOURCES[sourceId];
      if (!source || !ordered.includes(sourceId)) {
        throw new AnswerPublishError(
          `Claim ${claim.id} cites an unknown or unlisted source.`
        );
      }
      if (source.tier === "H4" && claim.materiality === "MATERIAL") {
        throw new AnswerPublishError(
          `Discovery-only source cannot support material claim ${claim.id}.`
        );
      }
    }
    const firstBlock = blocks.find((block) =>
      blockClaimIds(block).includes(claim.id)
    );
    const mapping: ClaimMapping =
      claim.mapping ??
      (claim.verification === "CONTESTED"
        ? "CONFLICTING"
        : claim.verification === "PARTIAL"
          ? "QUALIFIED"
          : claim.verification === "UNSUPPORTED"
            ? "NOT_FOUND"
            : claim.methodId
              ? "CALCULATED"
              : "SUPPORTED");
    const evidence: ClaimEvidenceEdge[] = claim.sourceIds.map(
      (sourceId) =>
        claim.evidence?.find((edge) => edge.sourceId === sourceId) ?? {
          sourceId,
          relationship: mapping === "CALCULATED" ? "SUPPORTED" : mapping,
        }
    );
    return {
      ...claim,
      blockId: firstBlock?.blockId,
      span: claim.span ?? claim.text,
      mapping,
      evidence,
    };
  });

  return {
    ...answer,
    blocks,
    claims,
    sources: ordered,
    methods: answer.methods.map((method) => ({
      rightsPolicyRef: RIGHTS_POLICY_REF,
      evaluationStatus: "EVALUATED" as const,
      ...method,
      inputFactRefs:
        method.inputFactRefs ??
        claims
          .filter((claim) => claim.methodId === method.id)
          .flatMap((claim) => claim.sourceIds)
          .filter((id, index, all) => all.indexOf(id) === index),
    })),
    policyFlags: answer.policyFlags ?? {
      publicDisplayAllowed: true,
      excerptAllowed: ordered.some((id) => SOURCES[id]?.rights.quote),
      externalLinkAllowed: false,
      retentionClass: "PUBLIC_GUEST_SESSION",
    },
  };
}

/* ------------------------------------------------------------------ */
/* Scenario: audited company results                                   */
/* ------------------------------------------------------------------ */

function corporateReady(): PublishedAnswer {
  const claims: Claim[] = [
    {
      id: "c-rev",
      text: "Audited consolidated revenue for the year ended 31 March 2026 was £4,820 million.",
      materiality: "MATERIAL",
      verification: "SUPPORTED",
      sourceIds: ["src-meridian-ar-2026"],
    },
    {
      id: "c-prev",
      text: "The FY2025 revenue comparative presented in the FY2026 filing was £4,410 million.",
      materiality: "MATERIAL",
      verification: "SUPPORTED",
      sourceIds: ["src-meridian-ar-2026", "src-meridian-ar-2025"],
    },
    {
      id: "c-growth",
      text: "Revenue increased 9.3% year on year, calculated from the two reported values.",
      materiality: "MATERIAL",
      verification: "SUPPORTED",
      sourceIds: ["src-meridian-ar-2026"],
      note: "Deterministic calculation, method m-revenue-growth v1.4.",
      methodId: "m-revenue-growth",
    },
    {
      id: "c-profit",
      text: "Operating profit was £887 million in FY2026.",
      materiality: "MATERIAL",
      verification: "SUPPORTED",
      sourceIds: ["src-meridian-ar-2026"],
    },
    {
      id: "c-margin",
      text: "Operating margin was 18.4%, calculated as operating profit divided by revenue.",
      materiality: "MATERIAL",
      verification: "SUPPORTED",
      sourceIds: ["src-meridian-ar-2026", "src-meridian-ir"],
      note: "Calculated from the audited inputs; the issuer presentation states the same rounded figure.",
      methodId: "m-operating-margin",
      evidence: [
        { sourceId: "src-meridian-ar-2026", relationship: "SUPPORTED" },
        {
          sourceId: "src-meridian-ir",
          relationship: "QUALIFIED",
          qualification:
            "The issuer presentation states the rounded margin but not its inputs; the figure itself is calculated from the audited annual report.",
        },
      ],
    },
  ];

  return {
    fixtureLabel: FIXTURE_LABEL,
    answerVersion: "ans-demo-0001",
    status: "READY",
    statusCode: "READY_EVIDENCE_CHECKED",
    headline:
      "Meridian Grid plc reported £4,820m of audited revenue in FY2026, with an 18.4% operating margin.",
    headlineSegments: [
      t("Meridian Grid plc reported "),
      b("£4,820m"),
      c("c-rev"),
      t(" of audited revenue in FY2026, with an "),
      b("18.4%"),
      c("c-margin"),
      t(" operating margin."),
    ],
    summary:
      "The figures come from the audited consolidated income statement for the year ended 31 March 2026. Revenue rose 9.3% on the prior-year comparative of £4,410m. The growth and margin figures are deterministic calculations from the reported values, not model arithmetic.",
    summarySegments: [
      t(
        "The figures come from the audited consolidated income statement for the year ended 31 March 2026. Revenue rose "
      ),
      b("9.3%"),
      c("c-growth"),
      t(" on the prior-year comparative of "),
      b("£4,410m"),
      c("c-prev"),
      t(
        ". The growth and margin figures are deterministic calculations from the reported values, not model arithmetic."
      ),
    ],
    blocks: [
      { kind: "heading", text: "What the audited record shows" },
      {
        kind: "paragraph",
        segments: [
          t(
            "Meridian Grid plc's audited consolidated revenue for the year ended 31 March 2026 was "
          ),
          b("£4,820 million"),
          c("c-rev"),
          t(". The prior-year comparative in the same filing is "),
          b("£4,410 million"),
          c("c-prev"),
          t(", a year-on-year increase of "),
          b("9.3%"),
          c("c-growth"),
          t(". Operating profit was "),
          b("£887 million"),
          c("c-profit"),
          t(", equal to an operating margin of "),
          b("18.4%"),
          c("c-margin"),
          t("."),
        ],
      },
      {
        kind: "metric-grid",
        title: "Audited figures, FY2026",
        metrics: [
          {
            id: "m-rev",
            label: "Revenue",
            value: "4,820",
            unit: "£m",
            asOf: "2026-03-31",
            status: "SHOWN",
            claimId: "c-rev",
          },
          {
            id: "m-prev",
            label: "Revenue, FY2025",
            value: "4,410",
            unit: "£m",
            asOf: "2025-03-31",
            status: "SHOWN",
            claimId: "c-prev",
          },
          {
            id: "m-growth",
            label: "Revenue growth",
            value: "9.3",
            unit: "%",
            status: "SHOWN",
            claimId: "c-growth",
          },
          {
            id: "m-profit",
            label: "Operating profit",
            value: "887",
            unit: "£m",
            asOf: "2026-03-31",
            status: "SHOWN",
            claimId: "c-profit",
          },
          {
            id: "m-margin",
            label: "Operating margin",
            value: "18.4",
            unit: "%",
            status: "SHOWN",
            claimId: "c-margin",
          },
        ],
      },
      { kind: "heading", text: "How the figures were derived" },
      {
        kind: "paragraph",
        segments: [
          t("Revenue growth is "),
          b("(4,820 − 4,410) ÷ 4,410"),
          c("c-growth"),
          t(". Operating margin is "),
          b("887 ÷ 4,820"),
          c("c-margin"),
          t(
            ". Both are produced by versioned calculation services using reported values and rounded to one decimal place; the language model neither computes nor rounds them."
          ),
        ],
      },
      {
        kind: "callout",
        tone: "info",
        title: "Basis and scope",
        body: "Consolidated, audited, IFRS, reported in pounds sterling. The FY2025 comparative here is the originally filed figure. A September 2026 amendment restates it for discontinued operations; that conflict is a separate research result.",
      },
      {
        kind: "evidence-list",
        title: "Claims in this answer",
        claimIds: ["c-rev", "c-prev", "c-growth", "c-profit", "c-margin"],
      },
      {
        kind: "method",
        title: "Method and version",
        methodIds: ["m-revenue-growth", "m-operating-margin"],
      },
      {
        kind: "limitations",
        title: "Limits of this answer",
        items: [
          "Describes reported historical results; it does not forecast future performance.",
          "FY2025 comparatives are shown as originally filed. The later amendment is not applied here.",
          "Contains no market price, valuation multiple, target price or recommendation.",
        ],
      },
    ],
    claims,
    sources: [
      "src-meridian-ar-2026",
      "src-meridian-ar-2025",
      "src-meridian-ir",
    ],
    methods: [
      {
        ...METHODS.revenueGrowth,
        inputFactRefs: ["c-rev", "c-prev"],
        units: "Percent; inputs in £ million as reported",
        rounding: "One decimal place, half away from zero, applied after division",
        assumptions: [
          "Both periods are taken from the FY2026 filing on its originally filed basis.",
        ],
      },
      {
        ...METHODS.operatingMargin,
        inputFactRefs: ["c-profit", "c-rev"],
        units: "Percent; inputs in £ million as reported",
        rounding: "One decimal place, half away from zero, applied after division",
        assumptions: ["Operating profit as defined in the audited income statement."],
      },
    ],
    timeContext: timeContext("2026-03-31", "2026-04-14", "2026-04-14T16:40:00Z"),
    coverage: coverage(
      [
        "Licensed market prices are not displayed on the public surface.",
        "Historical Evidence Engine coverage before 2016 is a target capability, not available at launch.",
      ],
      "Answer built from the current annual report and its comparative. Revisions after retrieval are not included."
    ),
    policy: POLICY,
    limitations: [
      "Audited historical results only.",
      "No forward-looking statement or investment recommendation is made.",
    ],
    followUps: [
      "What did the September 2026 amendment change?",
      "What was Meridian Grid's operating profit in FY2026?",
      "Compare Meridian Grid with Caledonia Water on reported revenue.",
    ],
  };
}

/* ------------------------------------------------------------------ */
/* Scenario: bond education                                            */
/* ------------------------------------------------------------------ */

function bondEducation(): PublishedAnswer {
  const claims: Claim[] = [
    {
      id: "c-yield-def",
      text: "Yield to maturity is the single discount rate that equates the present value of remaining cash flows to the bond's dirty price.",
      materiality: "MATERIAL",
      verification: "SUPPORTED",
      sourceIds: ["src-gilt-method"],
    },
    {
      id: "c-dirty",
      text: "The price used in the yield calculation should include accrued interest, known as the dirty price.",
      materiality: "MATERIAL",
      verification: "SUPPORTED",
      sourceIds: ["src-gilt-method"],
    },
    {
      id: "c-example",
      text: "The worked example applies the published discounting convention to illustrative inputs; the inputs are not market observations.",
      materiality: "MATERIAL",
      verification: "SUPPORTED",
      sourceIds: ["src-gilt-method"],
      note: "Illustrative inputs supplied by the demonstration, not a live quote.",
      methodId: "m-yield",
    },
    {
      id: "c-example-duration",
      text: "For the same illustrative bond, modified duration at a 4.62% yield is 4.40 years.",
      materiality: "MATERIAL",
      verification: "SUPPORTED",
      sourceIds: ["src-gilt-method"],
      note: "Calculated from the illustrative cash flows; not a market observation.",
      methodId: "m-duration",
    },
    {
      id: "c-duration",
      text: "Modified duration equals Macaulay duration divided by one plus the yield per period, and approximates price sensitivity to a yield change.",
      materiality: "MATERIAL",
      verification: "SUPPORTED",
      sourceIds: ["src-gilt-method"],
    },
    {
      id: "c-convexity",
      text: "Duration is a first-order approximation; convexity affects accuracy for larger yield moves.",
      materiality: "SUPPORTING",
      verification: "SUPPORTED",
      sourceIds: ["src-gilt-method"],
    },
  ];

  const row = (label: string, cells: [string, string, string]) => ({
    id: label.toLowerCase().replace(/\s+/g, "-"),
    header: label,
    cells: cells.map((text) => ({
      text,
      status: "SHOWN" as const,
    })),
  });

  return {
    fixtureLabel: FIXTURE_LABEL,
    answerVersion: "ans-demo-0002",
    status: "READY",
    statusCode: "READY_METHOD",
    headline:
      "A bond's yield is the single discount rate that equates its remaining cash flows to its price; duration measures price sensitivity to yield.",
    headlineSegments: [
      t(
        "A bond's yield is the single discount rate that equates its remaining cash flows to its price"
      ),
      c("c-yield-def"),
      t("; duration measures price sensitivity to yield"),
      c("c-duration"),
      t("."),
    ],
    summary:
      "The explanation follows a published pricing convention. The worked figures are illustrative inputs, not a live quote, and every step is shown so the result can be checked independently.",
    summarySegments: [
      t(
        "The explanation follows a published pricing convention. The worked figures are illustrative inputs, not a live quote"
      ),
      c("c-example"),
      t(", and every step is shown so the result can be checked independently."),
    ],
    blocks: [
      { kind: "heading", text: "Yield to maturity" },
      {
        kind: "paragraph",
        segments: [
          t(
            "A government bond pays a fixed coupon on a schedule and repays principal at maturity. Yield to maturity is the rate "
          ),
          b("r"),
          t(" that solves: price = Σ C ÷ (1 + r)ᵗ + F ÷ (1 + r)ⁿ"),
          c("c-yield-def"),
          t(
            ". The price in that equation is the dirty price: the quoted clean price plus accrued interest since the last coupon "
          ),
          c("c-dirty"),
          t("."),
        ],
      },
      { kind: "heading", text: "A worked example, using illustrative inputs" },
      {
        kind: "paragraph",
        segments: [
          t(
            "Consider a hypothetical 4.25% bond paying annual coupons with five years remaining, a clean price of 98.17 and accrued interest of 0.21 per £100 nominal. The dirty price is 98.38. Discounting the remaining coupons and principal at 4.62% reproduces that price "
          ),
          c("c-example"),
          t("."),
        ],
      },
      {
        kind: "table",
        caption: "Illustrative cash flows and discounting",
        columns: [
          "Year",
          "Cash flow per £100 nominal",
          "Discount factor at 4.62%",
          "Present value",
        ],
        rows: [
          row("Year 1", ["4.25", "0.9558", "4.06"]),
          row("Year 2", ["4.25", "0.9136", "3.88"]),
          row("Year 3", ["4.25", "0.8733", "3.71"]),
          row("Year 4", ["4.25", "0.8347", "3.55"]),
          row("Year 5", ["104.25", "0.7979", "83.18"]),
          {
            id: "total",
            header: "Total",
            cells: [
              { text: "—", status: "SHOWN" as const },
              { text: "—", status: "SHOWN" as const },
              { text: "98.38", status: "SHOWN" as const, claimId: "c-example" },
            ],
          },
        ],
        note: "Illustrative arithmetic only, annual compounding over whole years; settlement-date accrual timing is simplified. Not a quote for any instrument and not a forecast of future yields.",
      },
      {
        kind: "metric-grid",
        title: "Illustrative outputs",
        metrics: [
          {
            id: "m-clean",
            label: "Clean price",
            value: "98.17",
            unit: "per £100",
            status: "SHOWN",
            claimId: "c-example",
          },
          {
            id: "m-accrued",
            label: "Accrued interest",
            value: "0.21",
            unit: "per £100",
            status: "SHOWN",
            claimId: "c-example",
          },
          {
            id: "m-ytm",
            label: "Yield to maturity",
            value: "4.62",
            unit: "%",
            status: "SHOWN",
            claimId: "c-example",
          },
          {
            id: "m-duration",
            label: "Modified duration",
            value: "4.40",
            unit: "years",
            status: "SHOWN",
            claimId: "c-example-duration",
          },
        ],
      },
      { kind: "heading", text: "What duration measures" },
      {
        kind: "paragraph",
        segments: [
          t(
            "Macaulay duration is the present-value-weighted average time to the bond's cash flows. Modified duration is Macaulay duration divided by one plus the yield per period; it approximates the percentage change in price for a one percentage-point change in yield "
          ),
          c("c-duration"),
          t(
            ". The approximation is less accurate for larger moves because price–yield relationships are curved, an effect described by convexity "
          ),
          c("c-convexity"),
          t("."),
        ],
      },
      {
        kind: "callout",
        tone: "warn",
        title: "This is not a live quote",
        body: "The inputs are illustrative. Talvrin's public surface cannot display licensed market prices, and this worked example is not a price for any real instrument. It is educational and is not investment advice.",
      },
      {
        kind: "evidence-list",
        title: "Claims in this answer",
        claimIds: [
          "c-yield-def",
          "c-dirty",
          "c-example",
          "c-example-duration",
          "c-duration",
          "c-convexity",
        ],
      },
      {
        kind: "method",
        title: "Method and version",
        methodIds: ["m-yield", "m-duration"],
      },
      {
        kind: "limitations",
        title: "Limits of this answer",
        items: [
          "Illustrative inputs; no live price, yield or duration is shown.",
          "Assumes coupons are received in full and the bond is held to maturity.",
          "Ignores taxes, transaction costs and settlement conventions beyond the cited note.",
        ],
      },
    ],
    claims,
    sources: ["src-gilt-method"],
    methods: [
      {
        ...METHODS.yield,
        inputFactRefs: ["c-example"],
        units: "Price per £100 nominal; yield in percent per year",
        rounding: "Discount factors to four decimal places, values to two",
        assumptions: [
          "Illustrative inputs, annual coupons, held to maturity.",
          "Accrual timing within the coupon period is simplified to whole years.",
        ],
      },
      {
        ...METHODS.duration,
        inputFactRefs: ["c-example"],
        units: "Years",
        rounding: "Two decimal places",
        assumptions: ["Annual compounding; convexity is not applied."],
      },
    ],
    timeContext: timeContext("2026-01-12", "2026-01-12", "2026-01-12T11:00:00Z"),
    coverage: coverage(
      [
        "Public display of licensed price data is withheld.",
        "The demonstration does not model convexity or settlement-day conventions.",
      ],
      "Methodology note v2.3 is the controlling version for this answer."
    ),
    policy: POLICY,
    limitations: [
      "Educational explanation using illustrative inputs.",
      "Not a price, forecast or recommendation.",
    ],
    followUps: [
      "What is the difference between clean and dirty price?",
      "How does a coupon schedule affect duration?",
      "Explain why bond prices fall when yields rise.",
    ],
  };
}

/* ------------------------------------------------------------------ */
/* Scenario: conflicting official records                              */
/* ------------------------------------------------------------------ */

function conflictCase(): PublishedAnswer {
  const claims: Claim[] = [
    {
      id: "c-conflict-a",
      text: "The FY2026 annual report presents FY2025 revenue of £4,410 million.",
      materiality: "MATERIAL",
      verification: "SUPPORTED",
      sourceIds: ["src-meridian-ar-2026", "src-meridian-ar-2025"],
      mapping: "CONFLICTING",
    },
    {
      id: "c-conflict-b",
      text: "The September 2026 amended segment disclosure restates FY2025 revenue to £4,280 million.",
      materiality: "MATERIAL",
      verification: "SUPPORTED",
      sourceIds: ["src-meridian-amendment"],
      mapping: "CONFLICTING",
    },
    {
      id: "c-difference",
      text: "The difference between the two records is £130 million, or 2.9% of the originally filed figure.",
      materiality: "MATERIAL",
      verification: "SUPPORTED",
      sourceIds: ["src-meridian-amendment", "src-meridian-ar-2026"],
      note: "Deterministic subtraction; not averaged or adjusted.",
      methodId: "m-record-difference",
    },
    {
      id: "c-no-consolidation",
      text: "No single consolidated value is published because the records use different presentation bases.",
      materiality: "MATERIAL",
      verification: "SUPPORTED",
      sourceIds: ["src-meridian-amendment", "src-meridian-ar-2026"],
    },
    {
      id: "c-basis",
      text: "FY2026 and FY2025 figures should not be compared across different comparative bases without stating the basis.",
      materiality: "SUPPORTING",
      verification: "SUPPORTED",
      sourceIds: ["src-meridian-amendment"],
      note: "Methodological caution derived from the amendment's stated basis change.",
    },
  ];

  const shown = (text: string, claimId?: string) => ({
    text,
    status: "SHOWN" as const,
    claimId,
  });

  return {
    fixtureLabel: FIXTURE_LABEL,
    answerVersion: "ans-demo-0003",
    status: "CONFLICT",
    statusCode: "CONFLICT_OPEN",
    headline:
      "Two admissible records disagree on Meridian Grid's FY2025 revenue; no single value is published.",
    headlineSegments: [
      t("Two admissible records disagree on Meridian Grid's FY2025 revenue"),
      c("c-conflict-a"),
      c("c-conflict-b"),
      t("; no single value is published."),
    ],
    summary:
      "The FY2026 annual report presents FY2025 revenue of £4,410 million as originally filed. A September 2026 amendment restates the comparative to £4,280 million after classifying the Nordic networks business as discontinued. Neither record has been withdrawn in this dataset. Talvrin shows the difference rather than choosing or averaging it.",
    summarySegments: [
      t("The FY2026 annual report presents FY2025 revenue of "),
      b("£4,410 million"),
      c("c-conflict-a"),
      t(
        " as originally filed. A September 2026 amendment restates the comparative to "
      ),
      b("£4,280 million"),
      c("c-conflict-b"),
      t(
        " after classifying the Nordic networks business as discontinued. Neither record has been withdrawn in this dataset. Talvrin shows the difference rather than choosing or averaging it"
      ),
      c("c-no-consolidation"),
      t("."),
    ],
    blocks: [
      {
        kind: "callout",
        tone: "danger",
        title: "Source conflict — no single value",
        body: "Official records disagree on this figure. We cannot present one verified value yet. The records differ because of a change in presentation basis; the table below shows each record with its date. Talvrin does not average the values or silently prefer the newer record.",
        action: {
          label: "Inspect the primary evidence",
          href: "?panel=evidence&claim=c-conflict-a",
        },
      },
      { kind: "heading", text: "The two records" },
      {
        kind: "table",
        caption: "FY2025 revenue by admissible record",
        columns: ["Record", "Published", "FY2025 revenue", "Why it differs"],
        rows: [
          {
            id: "row-original",
            header: "FY2026 annual report",
            cells: [
              shown("14 Apr 2026"),
              shown("£4,410m", "c-conflict-a"),
              shown("Originally filed comparative"),
            ],
          },
          {
            id: "row-amended",
            header: "Amended segment disclosure",
            cells: [
              shown("30 Sep 2026"),
              shown("£4,280m", "c-conflict-b"),
              shown("Restated for discontinued operations"),
            ],
          },
          {
            id: "row-difference",
            header: "Difference",
            cells: [
              shown("—"),
              shown("£130m", "c-difference"),
              shown("2.9% of the original figure; not averaged", "c-difference"),
            ],
          },
        ],
        note: "Both records are H0 primary filings. Neither has been withdrawn in this dataset; the amendment is shown as a revision of the original comparative, not a replacement.",
      },
      { kind: "heading", text: "Why Talvrin does not consolidate" },
      {
        kind: "paragraph",
        segments: [
          t(
            "The amendment changes the presentation basis by separating the Nordic networks business. Applying the restatement to the FY2026 figure would require a reconciliation that the public record does not provide. A midpoint would describe neither basis, so none is calculated; silently preferring the newer record would hide a difference a reader can inspect "
          ),
          c("c-no-consolidation"),
          t("."),
        ],
      },
      { kind: "heading", text: "What a reader should check" },
      {
        kind: "paragraph",
        segments: [
          t(
            "For a like-for-like comparison with the FY2026 consolidated income statement, use the originally filed basis and say so. For the continuing business, use the restated basis and say so. Do not mix the two without disclosing the change "
          ),
          c("c-basis"),
          t("."),
        ],
      },
      {
        kind: "evidence-list",
        title: "Claims in this answer",
        claimIds: [
          "c-conflict-a",
          "c-conflict-b",
          "c-difference",
          "c-no-consolidation",
          "c-basis",
        ],
      },
      {
        kind: "method",
        title: "Method and version",
        methodIds: ["m-record-difference"],
      },
      {
        kind: "limitations",
        title: "Limits of this answer",
        items: [
          "Talvrin has not determined which basis is appropriate for your purpose.",
          "No auditor clarification is present in the demonstration dataset.",
          "No adjusted, pro-forma or consensus figure has been calculated.",
        ],
      },
    ],
    claims,
    sources: [
      "src-meridian-ar-2026",
      "src-meridian-ar-2025",
      "src-meridian-amendment",
    ],
    methods: [
      {
        ...DIFFERENCE_METHOD,
        inputFactRefs: ["c-conflict-a", "c-conflict-b"],
        units: "£ million as reported; share in percent of the originally filed value",
        rounding: "Difference exact; share to one decimal place",
        assumptions: [
          "Values are compared as reported; no reconciliation between bases is applied.",
        ],
      },
    ],
    conflicts: [
      {
        id: "conflict-fy2025-revenue",
        topic: "Meridian Grid plc FY2025 revenue",
        claimIds: ["c-conflict-a", "c-conflict-b"],
        entries: [
          {
            sourceId: "src-meridian-ar-2026",
            value: "4,410",
            unit: "£ million",
            period: "Year ended 31 March 2025",
            status: "As originally filed",
            reason: "Comparative presented in the FY2026 annual report.",
          },
          {
            sourceId: "src-meridian-amendment",
            value: "4,280",
            unit: "£ million",
            period: "Year ended 31 March 2025",
            status: "Restated",
            reason: "Nordic networks business reclassified as discontinued.",
          },
        ],
        nextAction:
          "Open each record and compare its basis and date. Calculations that depend on this figure stay blocked.",
      },
    ],
    timeContext: timeContext("2025-03-31", "2026-09-30", "2026-09-30T15:22:00Z"),
    coverage: coverage(
      [
        "Both records are present; no third-party reconciliation is available.",
        "The historical coverage extension is a target capability, not used here.",
      ],
      "Both versions retained. The answer records the conflict rather than resolving it."
    ),
    policy: POLICY,
    limitations: [
      "Conflict is unresolved by design.",
      "No consolidated revenue figure is published.",
    ],
    followUps: [
      "Show the originally filed FY2026 annual report.",
      "What changed in the amended segment disclosure?",
      "Summarise Meridian Grid's latest audited revenue on the originally filed basis.",
    ],
  };
}

/* ------------------------------------------------------------------ */
/* Scenario: licensed data withheld                                    */
/* ------------------------------------------------------------------ */

function restrictedCase(): PublishedAnswer {
  const claims: Claim[] = [
    {
      id: "c-metadata",
      text: "The latest snapshot is timestamped 24 October 2026 at 08:00 UTC and is sourced from a composite venue.",
      materiality: "SUPPORTING",
      verification: "SUPPORTED",
      sourceIds: ["src-market-feed"],
    },
    {
      id: "c-rights",
      text: "The applicable licence permits metadata display but not price display, quotation, export or redistribution.",
      materiality: "MATERIAL",
      verification: "SUPPORTED",
      sourceIds: ["src-market-feed"],
    },
    {
      id: "c-entitlement",
      text: "Display would require an authenticated entitlement and an approved market-data licence.",
      materiality: "MATERIAL",
      verification: "SUPPORTED",
      sourceIds: ["src-market-feed"],
      note: "Derived from the licence's display and redistribute permissions.",
    },
  ];

  const row = (
    id: string,
    header: string,
    availability: string,
    status: "SHOWN" | "WITHHELD" | "NOT_APPLICABLE",
    reason: string,
    claimId?: string
  ) => ({
    id,
    header,
    cells: [
      { text: availability, status, claimId },
      { text: reason, status: "SHOWN" as const },
    ],
  });

  return {
    fixtureLabel: FIXTURE_LABEL,
    answerVersion: "ans-demo-0004",
    status: "RESTRICTED",
    statusCode: "RIGHTS_DISPLAY_DENIED",
    headline:
      "Price data exists for Meridian Grid plc, but the public licence does not permit displaying it.",
    headlineSegments: [
      t(
        "Price data exists for Meridian Grid plc, but the public licence does not permit displaying it"
      ),
      c("c-rights"),
      t("."),
    ],
    summary:
      "The consolidated feed contains an 08:00 UTC snapshot. Its metadata, venue and timestamp may be shown; the price, bid, ask, volume and any derived return may not. Talvrin fails closed and does not substitute another source or an estimate.",
    summarySegments: [
      t("The consolidated feed contains an 08:00 UTC snapshot"),
      c("c-metadata"),
      t(
        ". Its metadata, venue and timestamp may be shown; the price, bid, ask, volume and any derived return may not"
      ),
      c("c-rights"),
      t(". Talvrin fails closed and does not substitute another source or an estimate."),
    ],
    blocks: [
      {
        kind: "callout",
        tone: "danger",
        title: "License restricted",
        body: "We cannot display this material under current data-use permissions. The licence for this feed grants metadata display only, so the answer cannot include a price, quote, volume or any value derived from them.",
      },
      { kind: "heading", text: "What the public surface can show" },
      {
        kind: "table",
        caption: "Field-level rights decision",
        columns: ["Field", "Availability and reason"],
        rows: [
          row(
            "field-identity",
            "Instrument identity",
            "Meridian Grid plc · MDG",
            "SHOWN",
            "Public instrument reference"
          ),
          row(
            "field-timestamp",
            "Snapshot timestamp",
            "24 Oct 2026 · 08:00 UTC",
            "SHOWN",
            "Metadata display permitted",
            "c-metadata"
          ),
          row(
            "field-venue",
            "Venue",
            "Composite",
            "SHOWN",
            "Metadata display permitted",
            "c-metadata"
          ),
          row(
            "field-price",
            "Last price",
            "Withheld",
            "WITHHELD",
            "Licence display = false",
            "c-rights"
          ),
          row(
            "field-bidask",
            "Bid / ask",
            "Withheld",
            "WITHHELD",
            "Licence display = false",
            "c-rights"
          ),
          row(
            "field-volume",
            "Volume",
            "Withheld",
            "WITHHELD",
            "Licence display = false",
            "c-rights"
          ),
          row(
            "field-return",
            "Derived return",
            "Not applicable",
            "NOT_APPLICABLE",
            "Requires a displayed price",
            "c-rights"
          ),
        ],
        note: "A withheld value is not zero, missing or unavailable. It exists and is denied.",
      },
      { kind: "heading", text: "What would change the answer" },
      {
        kind: "paragraph",
        segments: [
          t(
            "An authenticated entitlement with an approved market-data licence could permit display within an authorized session. A public page, export or shared link would also need redistribution rights that this licence does not grant "
          ),
          c("c-entitlement"),
          t("."),
        ],
      },
      {
        kind: "callout",
        tone: "info",
        title: "No substitute value",
        body: "Talvrin does not replace a restricted licensed value with a delayed price, a third-party quote, a model estimate or a derived figure. The absence is the correct answer.",
      },
      {
        kind: "evidence-list",
        title: "Claims in this answer",
        claimIds: ["c-metadata", "c-rights", "c-entitlement"],
      },
      {
        kind: "method",
        title: "Rights decision",
        methodIds: ["m-alignment"],
      },
      {
        kind: "limitations",
        title: "Limits of this answer",
        items: [
          "No price, bid, ask, volume or return is shown.",
          "The licence decision is recorded at retrieval time and may change with a new entitlement.",
          "Talvrin does not provide a substitute price from another source.",
        ],
      },
    ],
    claims,
    sources: ["src-market-feed"],
    methods: [METHODS.alignment],
    policyFlags: {
      publicDisplayAllowed: false,
      excerptAllowed: false,
      externalLinkAllowed: false,
      retentionClass: "PUBLIC_GUEST_SESSION",
    },
    timeContext: timeContext(
      "2026-10-24T08:00:00Z",
      null,
      "2026-10-24T08:00:04Z"
    ),
    coverage: coverage(
      [
        "Licensed market values are metadata-only on this surface.",
        "Public export and redistribution are not permitted.",
      ],
      "Rights evaluated at retrieval for the anonymous visitor."
    ),
    policy: POLICY,
    limitations: [
      "No market value is displayed.",
      "No derived return or valuation multiple is shown.",
    ],
    followUps: [
      "What does the public licence permit?",
      "How can I request access to market data?",
      "Summarise Meridian Grid's latest audited revenue instead.",
    ],
  };
}

/* ------------------------------------------------------------------ */
/* Scenario: stale evidence                                            */
/* ------------------------------------------------------------------ */

function staleCase(): PublishedAnswer {
  const claims: Claim[] = [
    {
      id: "c-cpi",
      text: "The newest admissible release reports CPI at 2.7% and CPIH at 3.4% in the 12 months to August 2025.",
      materiality: "MATERIAL",
      verification: "SUPPORTED",
      sourceIds: ["src-ons-cpi"],
    },
    {
      id: "c-stale",
      text: "The newest admissible record is dated 17 September 2025 and exceeds the 90-day freshness threshold.",
      materiality: "MATERIAL",
      verification: "SUPPORTED",
      sourceIds: ["src-ons-cpi"],
      note: "Deterministic freshness check from the retrieved metadata.",
      methodId: "m-freshness",
    },
    {
      id: "c-gap",
      text: "No later admissible inflation release is present in the retrieved dataset.",
      materiality: "MATERIAL",
      verification: "SUPPORTED",
      sourceIds: ["src-ons-cpi"],
      note: "Coverage statement from the retrieval log; not a claim about releases outside this dataset.",
    },
  ];

  const row = (
    id: string,
    header: string,
    value: string,
    note: string,
    claimId?: string
  ) => ({
    id,
    header,
    cells: [
      { text: value, status: "SHOWN" as const, claimId },
      { text: note, status: "SHOWN" as const },
    ],
  });

  return {
    fixtureLabel: FIXTURE_LABEL,
    answerVersion: "ans-demo-0005",
    status: "STALE",
    statusCode: "STALE_90D",
    headline:
      "The newest admissible inflation release is more than a year old, so Talvrin will not describe it as current.",
    headlineSegments: [
      t("The newest admissible inflation release is more than a year old"),
      c("c-stale"),
      t(", so Talvrin will not describe it as current."),
    ],
    summary:
      "The latest admissible record is the August 2025 consumer price inflation release. It reports CPI at 2.7% and CPIH at 3.4% over 12 months. The release is 13 months old at the time of this answer and exceeds the 90-day freshness threshold for this question.",
    summarySegments: [
      t(
        "The latest admissible record is the August 2025 consumer price inflation release. It reports CPI at "
      ),
      b("2.7%"),
      t(" and CPIH at "),
      b("3.4%"),
      t(" over 12 months"),
      c("c-cpi"),
      t(
        ". The release is 13 months old at the time of this answer and exceeds the 90-day freshness threshold for this question"
      ),
      c("c-stale"),
      t("."),
    ],
    blocks: [
      {
        kind: "callout",
        tone: "warn",
        title: "Stale data — not a current reading",
        body: "The latest eligible source is dated 17 September 2025; newer information has not been verified.",
      },
      {
        kind: "metric-grid",
        title: "Latest admissible values, August 2025",
        metrics: [
          {
            id: "m-cpi",
            label: "CPI, 12-month rate",
            value: "2.7",
            unit: "%",
            asOf: "2025-08-31",
            status: "STALE",
            claimId: "c-cpi",
          },
          {
            id: "m-cpih",
            label: "CPIH, 12-month rate",
            value: "3.4",
            unit: "%",
            asOf: "2025-08-31",
            status: "STALE",
            claimId: "c-cpi",
          },
          {
            id: "m-age",
            label: "Age at answer",
            value: "13",
            unit: "months",
            status: "STALE",
            claimId: "c-stale",
          },
        ],
      },
      { kind: "heading", text: "Why the answer is not more recent" },
      {
        kind: "paragraph",
        segments: [
          t(
            "Talvrin retrieved the newest inflation record the current visitor is permitted to see. The September 2026 and later releases are not present in the demonstration dataset. Talvrin does not fill that gap with a forecast, a nowcast or a secondary estimate "
          ),
          c("c-gap"),
          t("."),
        ],
      },
      {
        kind: "table",
        caption: "Freshness check",
        columns: ["Field", "Value and interpretation"],
        rows: [
          row(
            "fresh-observed",
            "Observation date",
            "August 2025",
            "Period the values describe",
            "c-cpi"
          ),
          row(
            "fresh-published",
            "Published",
            "17 Sep 2025",
            "Release date of the newest record",
            "c-stale"
          ),
          row(
            "fresh-retrieved",
            "Retrieved",
            "24 Oct 2026 · 08:24 UTC",
            "When this session fetched the record"
          ),
          row(
            "fresh-threshold",
            "Threshold",
            "90 days",
            "Question-specific freshness limit",
            "c-stale"
          ),
          row(
            "fresh-result",
            "Result",
            "Stale",
            "Publish with explicit staleness; do not present as current",
            "c-stale"
          ),
        ],
        note: "Freshness is measured from the release date of the newest admissible record, not from when the page was opened.",
      },
      {
        kind: "evidence-list",
        title: "Claims in this answer",
        claimIds: ["c-cpi", "c-stale", "c-gap"],
      },
      {
        kind: "method",
        title: "Method and version",
        methodIds: ["m-freshness"],
      },
      {
        kind: "limitations",
        title: "Limits of this answer",
        items: [
          "This is not a current inflation reading.",
          "No forecast or nowcast is provided.",
          "Revisions to the August 2025 release may exist outside the retrieved dataset.",
        ],
      },
    ],
    claims,
    sources: ["src-ons-cpi"],
    methods: [
      {
        ...METHODS.freshness,
        inputFactRefs: ["src-ons-cpi"],
        units: "Days between release date and answer retrieval",
        rounding: "Age reported in whole months, rounded down",
        assumptions: ["Threshold of 90 days applies to official inflation releases."],
      },
    ],
    timeContext: timeContext("2025-08-31", "2025-09-17", "2025-09-17T10:15:00Z"),
    coverage: coverage(
      [
        "No inflation release after August 2025 is available in this dataset.",
        "The public surface does not substitute market-implied inflation or consensus forecasts.",
      ],
      "Staleness is recomputed at answer publication, not inferred from cache age."
    ),
    policy: POLICY,
    limitations: [
      "Values are 13 months old.",
      "No forecast is substituted.",
    ],
    followUps: [
      "What is the newest admissible official release in this dataset?",
      "Show the evidence record for the August 2025 release.",
      "Find the latest official GDP release instead.",
    ],
  };
}

/* ------------------------------------------------------------------ */
/* Scenario: partial economic calendar                                 */
/* ------------------------------------------------------------------ */

function partialCase(): PublishedAnswer {
  const claims: Claim[] = [
    {
      id: "c-schedule",
      text: "Three releases are scheduled between 28 and 30 October 2026 according to the retrieved forward calendar.",
      materiality: "MATERIAL",
      verification: "SUPPORTED",
      sourceIds: ["src-official-calendar"],
    },
    {
      id: "c-omitted",
      text: "Two statistical authorities publish forward schedules only as PDFs and are omitted from this answer.",
      materiality: "MATERIAL",
      verification: "SUPPORTED",
      sourceIds: ["src-official-calendar"],
      note: "Coverage statement from the retrieval log.",
    },
  ];

  const cell = (
    text: string,
    status: "SHOWN" | "WITHHELD" | "NOT_APPLICABLE",
    claimId?: string
  ) => ({ text, status, claimId });

  return {
    fixtureLabel: FIXTURE_LABEL,
    answerVersion: "ans-demo-0006",
    status: "PARTIAL",
    statusCode: "PARTIAL_CALENDAR",
    headline:
      "Three official releases are scheduled this week; consensus forecasts are not licensed for public display.",
    headlineSegments: [
      t("Three official releases are scheduled this week"),
      c("c-schedule"),
      t("; consensus forecasts are not licensed for public display."),
    ],
    summary:
      "One authority publishes a machine-readable forward calendar. Two others publish PDF-only schedules and are omitted rather than inferred. No consensus or prior-value estimates are shown because the public licence does not permit them.",
    summarySegments: [
      t(
        "One authority publishes a machine-readable forward calendar. Two others publish PDF-only schedules and are omitted rather than inferred"
      ),
      c("c-omitted"),
      t(
        ". No consensus or prior-value estimates are shown because the public licence does not permit them."
      ),
    ],
    blocks: [
      {
        kind: "callout",
        tone: "warn",
        title: "Partial answer",
        body: "Some requested periods or instruments could not be checked; the answer is limited to the cited records. No dates have been inferred from secondary sources.",
      },
      {
        kind: "table",
        caption: "Scheduled releases, 26–30 October 2026",
        columns: ["Date", "Release", "Authority", "Consensus", "Status"],
        rows: [
          {
            id: "row-psf",
            header: "28 Oct 2026",
            cells: [
              cell("Public sector finances", "SHOWN", "c-schedule"),
              cell("Synthetic National Statistics", "SHOWN"),
              cell("Withheld", "WITHHELD"),
              cell("Confirmed in calendar", "SHOWN"),
            ],
          },
          {
            id: "row-gdp",
            header: "29 Oct 2026",
            cells: [
              cell("GDP second estimate, Q2 2026", "SHOWN", "c-schedule"),
              cell("Synthetic National Statistics", "SHOWN"),
              cell("Withheld", "WITHHELD"),
              cell("Confirmed in calendar", "SHOWN"),
            ],
          },
          {
            id: "row-ppi",
            header: "30 Oct 2026",
            cells: [
              cell("Producer price inflation", "SHOWN", "c-schedule"),
              cell("Synthetic National Statistics", "SHOWN"),
              cell("Withheld", "WITHHELD"),
              cell("Confirmed in calendar", "SHOWN"),
            ],
          },
          {
            id: "row-omitted",
            header: "Omitted",
            cells: [
              cell("Two agencies' schedules", "NOT_APPLICABLE"),
              cell("Other authorities", "NOT_APPLICABLE"),
              cell("—", "NOT_APPLICABLE"),
              cell("Omitted — PDF only", "NOT_APPLICABLE", "c-omitted"),
            ],
          },
        ],
        note: "Withheld consensus values are not zero or unavailable. They are licensed content the public surface may not display.",
      },
      { kind: "heading", text: "What is confirmed" },
      {
        kind: "paragraph",
        segments: [
          t(
            "The three listed releases appear in a forward calendar updated on 23 October 2026. The calendar contains scheduled dates and release names, not forecasts. Schedules can change, so check the publishing authority before relying on a date "
          ),
          c("c-schedule"),
          t("."),
        ],
      },
      { kind: "heading", text: "Why consensus is withheld" },
      {
        kind: "paragraph",
        segments: [
          t(
            "Consensus forecasts are licensed content. Talvrin neither displays them nor substitutes a blank, a zero or a model estimate. The omission is recorded in the evidence package "
          ),
          c("c-omitted"),
          t("."),
        ],
      },
      {
        kind: "evidence-list",
        title: "Claims in this answer",
        claimIds: ["c-schedule", "c-omitted"],
      },
      {
        kind: "method",
        title: "Method and version",
        methodIds: ["m-calendar"],
      },
      {
        kind: "limitations",
        title: "Limits of this answer",
        items: [
          "Coverage is limited to machine-readable calendars.",
          "No consensus forecast is displayed.",
          "Release dates can change after retrieval.",
        ],
      },
    ],
    claims,
    sources: ["src-official-calendar"],
    methods: [METHODS.calendar],
    timeContext: timeContext("2026-10-23", "2026-10-23", "2026-10-23T18:00:00Z"),
    coverage: coverage(
      [
        "Two authorities publish PDF-only schedules and are omitted.",
        "Consensus forecasts are not licensed for public display.",
      ],
      "Calendar retrieved once; no inferred dates added."
    ),
    policy: POLICY,
    limitations: [
      "Partial calendar coverage.",
      "No consensus values.",
    ],
    followUps: [
      "Which statistical authorities are covered?",
      "Show the source record for the release calendar.",
      "What is the latest official GDP release?",
    ],
  };
}

/* ------------------------------------------------------------------ */
/* Scenario: outside coverage                                          */
/* ------------------------------------------------------------------ */

function unsupportedCase(): PublishedAnswer {
  return {
    fixtureLabel: FIXTURE_LABEL,
    answerVersion: "ans-demo-0007",
    status: "UNSUPPORTED",
    statusCode: "OUT_OF_SCOPE_CRYPTO",
    headline:
      "Cryptoasset prices are outside Talvrin's current public research coverage.",
    summary:
      "The public assistant covers listed equities, fixed income, listed funds, official economic statistics and central-bank publications. It has no admissible cryptoasset price source in this environment and will not produce one from a model.",
    blocks: [
      {
        kind: "callout",
        tone: "info",
        title: "Outside current coverage",
        body: "Requested scope: cryptoasset market data. Launch scopes: equities; fixed income; funds and other listed assets; economic statistics; central banks.",
      },
      { kind: "heading", text: "What you can research here" },
      {
        kind: "paragraph",
        segments: [
          t(
            "Talvrin can retrieve primary filings, official statistics and published methodologies for the covered scopes. It cannot answer a question that requires a data source it is not licensed or authorized to use."
          ),
        ],
      },
      { kind: "heading", text: "Why there is no substitute answer" },
      {
        kind: "paragraph",
        segments: [
          t(
            "Generating a plausible price, return or market-cap figure would violate the evidence-before-synthesis rule and could be mistaken for a live observation. An explicit coverage boundary is safer than an unverifiable answer."
          ),
        ],
      },
      {
        kind: "limitations",
        title: "Boundary",
        items: [
          "No cryptoasset source is configured.",
          "No price, return or market-cap estimate is provided.",
          "Coverage may change only after a separately approved data-rights review.",
        ],
      },
    ],
    claims: [],
    sources: [],
    methods: [],
    timeContext: timeContext("2026-10-24", null, RETRIEVED_AT),
    coverage: coverage(
      [
        "Cryptoasset market data is not covered.",
        "No substitute source or model estimate is used.",
      ],
      "Coverage register check at question time."
    ),
    policy: POLICY,
    limitations: [
      "Question outside current public coverage.",
      "No answer is fabricated.",
    ],
    followUps: [
      "Which asset classes are covered?",
      "Find an official filing for a listed company.",
      "Explain how Talvrin decides whether a source is admissible.",
    ],
  };
}

/* ------------------------------------------------------------------ */
/* Scenario: no eligible evidence for this question (WF-02 R12)          */
/* ------------------------------------------------------------------ */

function noMatchCase(question: string): PublishedAnswer {
  const q = question.toLowerCase();
  const years = referencedYears(question).filter((year) => year !== "2025" && year !== "2026");
  const aboutMeridian = /meridian|\bmdg\b/.test(q);
  const comparison = /\b(compare|versus|vs\.?|against)\b/.test(q);
  const gap = years.length
    ? `The evidence set holds ${aboutMeridian ? "Meridian Grid's" : "company"} audited figures for FY2025 and FY2026 only. No admissible record for ${years.map((year) => `FY${year}`).join(" or ")} is available, so the change you asked about cannot be shown.`
    : comparison
      ? "Side-by-side comparisons are produced by the comparison builder, which checks that each metric and period is comparable before any value is shown."
      : "No source in the evidence set available to this session addresses this question.";
  return {
    fixtureLabel: FIXTURE_LABEL,
    answerVersion: "ans-demo-0009",
    status: "UNSUPPORTED",
    statusCode: "NO_ELIGIBLE_EVIDENCE",
    headline: "No eligible evidence was found for this question.",
    summary: `${gap} Talvrin does not substitute an answer to a different question or estimate the missing figures.`,
    blocks: [
      {
        kind: "callout",
        tone: "info",
        title: "What was checked",
        body: "This demonstration searches a small, fixed set of synthetic records: Meridian Grid plc's FY2025–FY2026 audited results, a cited source revision, a government bond methodology note, an inflation release and an economic calendar.",
      },
      { kind: "heading", text: "Try a narrower or differently scoped question" },
      {
        kind: "paragraph",
        segments: [
          t(
            comparison
              ? "Use Compare to build a checked comparison of two or three instruments, or ask about one company's reported figures."
              : "Ask about a period, company or series that the evidence set covers, for example Meridian Grid's FY2026 revenue or operating margin."
          ),
        ],
      },
      {
        kind: "limitations",
        title: "Boundary",
        items: [
          "No figure is estimated, interpolated or taken from model memory.",
          "A missing record is reported as missing, not as zero.",
          "This is a demonstration evidence set, not live coverage.",
        ],
      },
    ],
    claims: [],
    sources: [],
    methods: [],
    timeContext: timeContext("2026-10-24", null, RETRIEVED_AT),
    coverage: coverage(
      [gap, "No substitute source or model estimate is used."],
      "Coverage checked at question time."
    ),
    policy: POLICY,
    limitations: ["No eligible evidence for the question as asked.", "No answer is fabricated."],
    followUps: [
      "What was Meridian Grid's audited revenue in FY2026?",
      "How much did Meridian Grid's revenue grow in FY2026?",
      "Explain how a government bond yield is calculated.",
    ],
  };
}

/* ------------------------------------------------------------------ */
/* Scenario: advice boundary                                           */
/* ------------------------------------------------------------------ */

function adviceCase(): PublishedAnswer {
  return {
    fixtureLabel: FIXTURE_LABEL,
    answerVersion: "ans-demo-0008",
    status: "UNSUPPORTED",
    statusCode: "PERSONAL_ADVICE_BOUNDARY",
    headline:
      "Talvrin cannot answer whether you should buy, sell or hold an instrument.",
    summary:
      "That is a personal investment recommendation. Talvrin publishes evidence-linked research and applies a strict advice boundary; it does not know your circumstances and is not authorized to give personal advice.",
    blocks: [
      {
        kind: "callout",
        tone: "warn",
        title: "Advice boundary",
        body: `I can explain verified market information and investment risks, but not make a personal trading recommendation. ${NO_ADVICE_COPY}`,
      },
      { kind: "heading", text: "What Talvrin can do instead" },
      {
        kind: "paragraph",
        segments: [
          t(
            "It can retrieve a company's audited results, show the evidence and calculation behind a metric, compare two instruments on a common basis, and state clearly what the records do not support. It will not rank investments, assign a score or label a winner."
          ),
        ],
      },
      { kind: "heading", text: "Where to get personal guidance" },
      {
        kind: "paragraph",
        segments: [
          t(
            "Consider a regulated financial adviser who can assess your objectives, time horizon and risk tolerance. Talvrin does not receive referral fees and does not recommend any individual adviser."
          ),
        ],
      },
      {
        kind: "limitations",
        title: "Boundary",
        items: [
          "No recommendation is given.",
          "No suitability assessment is performed.",
          "The assistant does not know your holdings or circumstances.",
        ],
      },
    ],
    claims: [],
    sources: [],
    methods: [],
    timeContext: timeContext("2026-10-24", null, RETRIEVED_AT),
    coverage: coverage(
      ["Personal recommendations are out of scope.", "No suitability data is collected."],
      "Advice boundary applied before retrieval."
    ),
    policy: POLICY,
    limitations: [
      "No personal advice.",
      "No ranking or recommendation.",
    ],
    followUps: [
      "Show Meridian Grid's audited revenue instead.",
      "How does Talvrin separate evidence from commentary?",
      "What does the research assistant not do?",
    ],
  };
}

export function answerStatusLabel(status: AnswerStatus): string {
  return status.charAt(0) + status.slice(1).toLowerCase();
}

export function citeSource(
  sourceId: string
): SourceRecord | undefined {
  return SOURCES[sourceId];
}

export const SAMPLE_ANSWER_STATUSES: {
  scenario: ScenarioKey;
  label: string;
  question: string;
}[] = [
  {
    scenario: "CORPORATE_READY",
    label: "Ready",
    question:
      "Summarise Meridian Grid plc's latest audited revenue and operating margin.",
  },
  {
    scenario: "PARTIAL",
    label: "Partial",
    question: "What official economic releases are due this week?",
  },
  {
    scenario: "CONFLICT",
    label: "Conflict",
    question:
      "Compare the latest official revenue figures for Meridian Grid plc.",
  },
  {
    scenario: "STALE",
    label: "Stale",
    question: "What is the latest official inflation reading?",
  },
  {
    scenario: "RESTRICTED",
    label: "Restricted",
    question: "What is the latest market price for Meridian Grid plc?",
  },
  {
    scenario: "UNSUPPORTED",
    label: "Unsupported",
    question: "What is the price of bitcoin today?",
  },
  {
    scenario: "BOND_EDUCATION",
    label: "Method",
    question: "Explain how a government bond yield is calculated.",
  },
  {
    scenario: "ADVICE",
    label: "Boundary",
    question: "Should I buy Meridian Grid shares?",
  },
];
