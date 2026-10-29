import type {
  AnswerBlock,
  Claim,
  EvidenceCapabilities,
  EvidenceClaimView,
  EvidencePackage,
  EvidenceSourceDetail,
  PublicSourceSummary,
  PublishedAnswer,
  ResearchJobRecord,
  Segment,
  SourceRecord,
} from "./types";
import { SOURCES } from "./sources";
import { revokedSourceIds } from "./research-store";
import { ASSISTANT_NAME, FIXTURE_LABEL } from "./taxonomy";

/**
 * Server-side evidence projection (WF-02 §9, WF-03 §7, §9).
 *
 * Every function here re-evaluates the *current* rights decision for the
 * caller (WF-03 P-05) and returns only permitted fields. Restricted
 * excerpts never leave this module: they are not hidden by the client, they
 * are absent from the payload (WF-03 AC03, §16.1 "No hidden access").
 *
 * Server-only: imports the synthetic source registry.
 */

const RIGHTS_DECISION_ID = "rights-policy-fixture-2026-10";

export function ordinalOf(answer: PublishedAnswer, sourceId: string): number {
  return answer.sources.indexOf(sourceId) + 1;
}

function claimOrdinals(answer: PublishedAnswer, claim: Claim): number[] {
  return claim.sourceIds
    .map((id) => ordinalOf(answer, id))
    .filter((value) => value > 0);
}

/**
 * WF-03 §7.1 effective capabilities. Default deny: anything not explicitly
 * granted by the licence, or withdrawn by a revocation, is false.
 */
export function effectiveCapabilities(
  source: SourceRecord,
  revoked: boolean
): EvidenceCapabilities {
  const rights = source.rights;
  if (!rights) {
    return {
      metadata: false,
      excerpt: false,
      embed: false,
      linkOut: false,
      download: false,
      copyCitation: false,
    };
  }
  const excerpt =
    !revoked &&
    rights.display &&
    rights.quote &&
    rights.excerptLimit > 0 &&
    Boolean(source.excerpt);
  return {
    // Bibliographic metadata is cleared for public display in every fixture
    // licence; a revocation withdraws content, not the citation itself.
    metadata: true,
    excerpt,
    // No sanitized, signed document asset exists in this build.
    embed: false,
    // No vetted canonical origin URL exists for any synthetic record.
    linkOut: false,
    // Redistribution needs a separate explicit permit (WF-03 §7.1).
    download: false,
    copyCitation: true,
  };
}

function rightsReason(
  source: SourceRecord,
  revoked: boolean,
  capabilities: EvidenceCapabilities
): EvidenceSourceDetail["rightsReason"] {
  if (revoked) {
    return {
      code: "ACCESS_REVOKED",
      message:
        "The excerpt grant for this source was withdrawn after the answer was published. Only its citation details can be shown.",
    };
  }
  if (capabilities.excerpt) {
    return {
      code: "LINK_NOT_PERMITTED",
      message:
        "A short excerpt may be shown with attribution. Opening or downloading the original document is not permitted on the public surface.",
    };
  }
  if (source.rights.state === "METADATA_ONLY") {
    return {
      code: "LICENCE_DENIED",
      message:
        "The commercial licence for this record permits citation details only. Values, quotes and document content cannot be shown publicly.",
    };
  }
  if (source.rights.state === "LINK_ONLY") {
    return {
      code: "OUTSIDE_ENTITLEMENT",
      message:
        "This record is available for discovery only. Its content is outside the public entitlement.",
    };
  }
  return {
    code: "LICENCE_DENIED",
    message: "Document content is not cleared for public display.",
  };
}

function claimsUsing(answer: PublishedAnswer, sourceId: string): string[] {
  return answer.claims
    .filter((claim) => claim.sourceIds.includes(sourceId))
    .map((claim) => claim.id);
}

/** WF-02 §9 GET /sources item: metadata only, never excerpt text. */
export function publicSourceSummary(
  answer: PublishedAnswer,
  sourceId: string,
  revokedIds: string[]
): PublicSourceSummary | null {
  const source = SOURCES[sourceId];
  if (!source) return null;
  const revoked = revokedIds.includes(sourceId);
  const capabilities = effectiveCapabilities(source, revoked);
  return {
    sourceRefId: source.id,
    ordinal: ordinalOf(answer, source.id),
    label: source.shortTitle,
    title: source.title,
    publisher: source.publisher,
    publisherType: source.publisherType,
    tier: source.tier,
    sourceClass: source.sourceClass,
    contentClass: source.contentClass ?? null,
    attributionState: source.attributionState ?? null,
    rightsState: revoked ? "METADATA_ONLY" : source.rights.state,
    restricted: revoked || !capabilities.excerpt,
    publishedAt: source.documentDate ?? null,
    observedAt: source.observedAt ?? null,
    revisedAt: source.revisedAt ?? null,
    ingestedAt: source.ingestedAt ?? null,
    retrievedAt: source.retrievedAt ?? null,
    freshness: source.freshness,
    claimIds: claimsUsing(answer, source.id),
    allowedActions: capabilities,
  };
}

export function sourceSummaries(
  record: ResearchJobRecord,
  now = Date.now()
): PublicSourceSummary[] {
  const revoked = revokedSourceIds(record, now);
  return record.answer.sources
    .map((id) => publicSourceSummary(record.answer, id, revoked))
    .filter((item): item is PublicSourceSummary => Boolean(item));
}

/**
 * Backward-compatible SourceRecord for existing callers of the answer
 * route, with the excerpt removed unless it may be shown right now, and
 * truncated to the licensed length.
 */
export function redactedSourceRecords(
  record: ResearchJobRecord,
  now = Date.now()
): SourceRecord[] {
  const revoked = revokedSourceIds(record, now);
  return record.answer.sources
    .map((id) => SOURCES[id])
    .filter((source): source is SourceRecord => Boolean(source))
    .map((source) => {
      const isRevoked = revoked.includes(source.id);
      const capabilities = effectiveCapabilities(source, isRevoked);
      return {
        ...source,
        rights: isRevoked
          ? {
              ...source.rights,
              display: false,
              quote: false,
              export: false,
              excerptLimit: 0,
              state: "METADATA_ONLY" as const,
              rationale:
                "The excerpt grant was withdrawn after publication. Citation details only.",
            }
          : source.rights,
        excerpt:
          capabilities.excerpt && source.excerpt
            ? source.excerpt.slice(0, source.rights.excerptLimit)
            : null,
      };
    });
}

function claimView(answer: PublishedAnswer, claim: Claim): EvidenceClaimView {
  return {
    claimId: claim.id,
    blockId: claim.blockId ?? null,
    span: claim.span ?? claim.text,
    materiality: claim.materiality,
    mapping: claim.mapping ?? "SUPPORTED",
    ordinals: claimOrdinals(answer, claim),
    edges: (claim.evidence ?? claim.sourceIds.map((sourceId) => ({
      sourceId,
      relationship: claim.mapping ?? "SUPPORTED",
    }))).map((edge) => ({
      sourceRef: edge.sourceId,
      ordinal: ordinalOf(answer, edge.sourceId),
      relationship: edge.relationship,
      qualification:
        "qualification" in edge && typeof edge.qualification === "string"
          ? edge.qualification
          : null,
    })),
    methodId: claim.methodId ?? null,
    note: claim.note ?? null,
  };
}

/** WF-03 §9 GET /research/{jobId}/evidence. */
export function evidencePackage(
  record: ResearchJobRecord,
  selectedCitation: string | null,
  now = Date.now()
): EvidencePackage {
  const answer = record.answer;
  const revoked = revokedSourceIds(record, now);
  return {
    jobRef: record.ref,
    answerVersion: answer.answerVersion,
    status: answer.status,
    selectedCitation,
    claims: answer.claims.map((claim) => {
      const view = claimView(answer, claim);
      // A revoked source's content is withheld for every edge using it.
      return {
        ...view,
        edges: view.edges.map((edge) =>
          revoked.includes(edge.sourceRef)
            ? { ...edge, relationship: "WITHHELD" as const }
            : edge
        ),
      };
    }),
    sources: answer.sources
      .map((id) => publicSourceSummary(answer, id, revoked))
      .filter((item): item is PublicSourceSummary => Boolean(item)),
    methods: answer.methods,
    conflicts: answer.conflicts ?? [],
    coverage: answer.coverage,
    timeContext: answer.timeContext,
    limitations: answer.limitations,
    rightsCheckedAt: new Date(now).toISOString(),
  };
}

/** WF-03 §9.1 source detail; excerpt only when currently permitted. */
export function sourceDetail(
  record: ResearchJobRecord,
  sourceId: string,
  now = Date.now()
): EvidenceSourceDetail | null {
  const answer = record.answer;
  if (!answer.sources.includes(sourceId)) return null;
  const source = SOURCES[sourceId];
  if (!source) return null;
  const revoked = revokedSourceIds(record, now).includes(sourceId);
  const capabilities = effectiveCapabilities(source, revoked);
  const locatorResolved = source.locatorResolved !== false && !revoked;
  const resolution: EvidenceSourceDetail["resolution"] = revoked
    ? "RIGHTS_REVOKED"
    : !capabilities.excerpt
      ? "RIGHTS_DENIED"
      : !locatorResolved
        ? "ANCHOR_UNRESOLVED"
        : "READY_EXCERPT";
  const ordinal = ordinalOf(answer, sourceId);
  const revisionOf = source.revisionOf ? SOURCES[source.revisionOf] : undefined;
  return {
    answerVersion: answer.answerVersion,
    citationRef: `cit-${String(ordinal).padStart(2, "0")}`,
    sourceRef: source.id,
    ordinal,
    claimIds: claimsUsing(answer, source.id),
    recordRevision: source.recordRevision ?? null,
    canonicalDocId: source.canonicalDocId ?? null,
    identity: {
      title: source.title,
      shortTitle: source.shortTitle,
      publisher: source.publisher ?? null,
      publisherType: source.publisherType ?? null,
      version: source.version ?? null,
      jurisdiction: source.jurisdiction ?? null,
      licenceId: source.licenceId ?? null,
    },
    taxonomy: {
      sourceTier: source.tier,
      contentClass: source.contentClass ?? null,
      attributionState: source.attributionState ?? null,
    },
    timestamps: {
      publishedAt: source.documentDate ?? null,
      observedAt: source.observedAt ?? null,
      revisedAt: source.revisedAt ?? null,
      retrievedAt: source.retrievedAt ?? null,
      ingestedAt: source.ingestedAt ?? null,
      rightsCheckedAt: new Date(now).toISOString(),
    },
    locator: {
      value: locatorResolved ? source.locator : null,
      resolved: locatorResolved,
    },
    revisionOf: revisionOf
      ? { sourceRef: revisionOf.id, title: revisionOf.shortTitle }
      : null,
    freshness: source.freshness,
    summary: source.summary ?? null,
    displayPolicy: capabilities,
    rightsState: revoked ? "METADATA_ONLY" : source.rights.state,
    rightsReason: rightsReason(source, revoked, capabilities),
    excerpt:
      capabilities.excerpt && source.excerpt
        ? source.excerpt.slice(0, source.rights.excerptLimit)
        : null,
    excerptLimit: capabilities.excerpt ? source.rights.excerptLimit : 0,
    resolution,
    rightsDecisionId: RIGHTS_DECISION_ID,
  };
}

/* ------------------------------------------------------------------ */
/* Copy text (WF-02 I06 / C11 / A17, WF-03 §7.1, WF-10 EXP-16)          */
/* ------------------------------------------------------------------ */

function utcDate(value: string | null | undefined): string {
  if (!value) return "not available";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;
  return new Intl.DateTimeFormat("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  }).format(date);
}

/** Metadata-only citation line. Never includes excerpt or document text. */
export function citationLine(
  answer: PublishedAnswer,
  source: SourceRecord,
  revoked: boolean
): string {
  const ordinal = ordinalOf(answer, source.id);
  const parts = [
    `[${ordinal}] ${source.publisher}. ${source.title}.`,
    source.version ? `${source.version}.` : "",
    `Published ${utcDate(source.documentDate)}.`,
    source.observedAt ? `As of ${utcDate(source.observedAt)}.` : "",
    `Retrieved by Talvrin ${utcDate(source.retrievedAt)}.`,
    revoked
      ? "Access to this source is no longer available."
      : source.rights.state === "FULL"
        ? ""
        : "Public document access is restricted.",
  ];
  return parts.filter(Boolean).join(" ");
}

export function copyCitationText(
  record: ResearchJobRecord,
  sourceId: string,
  now = Date.now()
): string | null {
  const source = SOURCES[sourceId];
  if (!source || !record.answer.sources.includes(sourceId)) return null;
  const revoked = revokedSourceIds(record, now).includes(sourceId);
  if (!effectiveCapabilities(source, revoked).copyCitation) return null;
  return `${citationLine(record.answer, source, revoked)} Answer version ${record.answer.answerVersion}. ${FIXTURE_LABEL}.`;
}

function segmentsText(answer: PublishedAnswer, segments: Segment[]): string {
  return segments
    .map((segment) => {
      if (segment.kind !== "citation") return segment.text;
      const claim = answer.claims.find((item) => item.id === segment.claimId);
      if (!claim) return "";
      return claimOrdinals(answer, claim)
        .map((n) => `[${n}]`)
        .join("");
    })
    .join("");
}

function cite(answer: PublishedAnswer, claimId: string | undefined): string {
  if (!claimId) return "";
  const claim = answer.claims.find((item) => item.id === claimId);
  if (!claim) return "";
  return ` ${claimOrdinals(answer, claim)
    .map((n) => `[${n}]`)
    .join("")}`;
}

function blockText(answer: PublishedAnswer, block: AnswerBlock): string {
  switch (block.kind) {
    case "heading":
      return `\n${block.text}`;
    case "paragraph":
      return segmentsText(answer, block.segments);
    case "metric-grid":
      return [
        block.title,
        ...block.metrics.map((metric) =>
          metric.status === "SHOWN"
            ? `- ${metric.label}: ${metric.value}${metric.unit ? ` ${metric.unit}` : ""}${cite(answer, metric.claimId)}`
            : `- ${metric.label}: ${metric.status === "WITHHELD" ? "Withheld" : metric.status === "STALE" ? `${metric.value ?? "Withheld"}${metric.unit ? ` ${metric.unit}` : ""} (stale)${cite(answer, metric.claimId)}` : metric.status === "CONTESTED" ? "Contested" : "Not applicable"}`
        ),
      ].join("\n");
    case "table":
      return [
        block.caption,
        `| ${["", ...block.columns.slice(1)].join(" | ")} |`.replace("|  |", `| ${block.columns[0]} |`),
        ...block.rows.map(
          (row) =>
            `| ${row.header} | ${row.cells
              .map((cell) =>
                cell.status === "WITHHELD"
                  ? "Withheld"
                  : `${cell.text ?? "—"}${cite(answer, cell.claimId)}`
              )
              .join(" | ")} |`
        ),
        block.note ?? "",
      ]
        .filter(Boolean)
        .join("\n");
    case "callout":
      return `${block.title}: ${block.body}`;
    case "evidence-list":
      return [
        block.title,
        ...block.claimIds.map((id) => {
          const claim = answer.claims.find((item) => item.id === id);
          return claim ? `- ${claim.text}${cite(answer, claim.id)}` : "";
        }),
      ]
        .filter(Boolean)
        .join("\n");
    case "method":
      return [
        block.title,
        ...answer.methods
          .filter((method) => block.methodIds.includes(method.id))
          .map((method) => `- ${method.name} ${method.version}`),
      ].join("\n");
    case "limitations":
      return [block.title, ...block.items.map((item) => `- ${item}`)].join("\n");
    default:
      return "";
  }
}

/**
 * Plain-text copy of the visible answer with numbered citations and safe
 * source metadata. Excerpts, licensed values and hidden prompts are never
 * included (WF-02 I06, A08, A17).
 */
export function copyAnswerText(
  record: ResearchJobRecord,
  now = Date.now()
): string {
  const answer = record.answer;
  const revoked = revokedSourceIds(record, now);
  const headline = answer.headlineSegments
    ? segmentsText(answer, answer.headlineSegments)
    : answer.headline;
  const summary = answer.summarySegments
    ? segmentsText(answer, answer.summarySegments)
    : answer.summary;
  const sources = answer.sources
    .map((id) => SOURCES[id])
    .filter((source): source is SourceRecord => Boolean(source))
    .map((source) => citationLine(answer, source, revoked.includes(source.id)));
  return [
    `${ASSISTANT_NAME} · answer version ${answer.answerVersion}`,
    `Question: ${record.question}`,
    "",
    headline,
    "",
    summary,
    "",
    ...answer.blocks.map((block) => blockText(answer, block)),
    "",
    sources.length ? "Sources" : "",
    ...sources,
    "",
    "For research and information. Not personal investment advice.",
    FIXTURE_LABEL,
  ]
    .join("\n")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}
