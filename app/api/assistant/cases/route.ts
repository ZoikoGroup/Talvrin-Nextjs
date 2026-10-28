import {
  CaseDuplicateError,
  CaseProtectedRouteError,
  CaseValidationError,
  ReferenceNotAvailableError,
  submitCase,
} from "@/lib/assistant/cases";
import { helpCapabilities } from "@/lib/assistant/help-data";
import {
  apiError,
  asString,
  guestSessionFrom,
  idempotencyKeyFrom,
  isOwner,
  json,
  rateLimit,
} from "@/lib/assistant/http";

export const dynamic = "force-dynamic";

const ALLOWED_FIELDS = new Set([
  "idempotency_key",
  "request_type",
  "answer_ref",
  "comparison_ref",
  "claim_ref",
  "source_ref",
  "source_hint",
  "description",
  "contact",
  "notice_version",
]);

const ALTERNATIVE = {
  label: "General support",
  href: "/support/report-a-problem",
};

/**
 * POST /support/research-cases equivalent (WF-08 §10.1 / §10.2).
 * Error codes: INVALID_PAYLOAD (400/422), REFERENCE_NOT_AVAILABLE (404),
 * CASE_DUPLICATE (409), RATE_LIMITED (429), INTAKE_UNAVAILABLE (503).
 */
export async function POST(request: Request) {
  if (helpCapabilities().intake.research_cases !== "AVAILABLE") {
    return apiError(
      "INTAKE_UNAVAILABLE",
      "Report intake is not available right now. Nothing was submitted. Use the contact route instead.",
      503,
      { retryable: true, retryAfterSeconds: 60, alternative: ALTERNATIVE }
    );
  }

  const limited = rateLimit(request, "cases", 5, 10 * 60_000);
  if (limited) return limited;

  const contentType = request.headers.get("content-type") ?? "";
  if (!contentType.includes("application/json")) {
    return apiError(
      "INVALID_PAYLOAD",
      "Reports are accepted as plain text only. Attachments and file uploads are not accepted.",
      400,
      { retryable: false }
    );
  }

  let body: Record<string, unknown>;
  try {
    const parsed = await request.json();
    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) {
      throw new Error("shape");
    }
    body = parsed as Record<string, unknown>;
  } catch {
    return apiError("INVALID_PAYLOAD", "The report could not be read.", 400, {
      retryable: false,
    });
  }

  // Strict schema: attachments, a severity or any other unknown field is
  // rejected (AC-07, AC-23). Severity is assigned by the receiving queue.
  const unknown = Object.keys(body).filter((key) => !ALLOWED_FIELDS.has(key));
  if (unknown.length) {
    return apiError(
      "INVALID_PAYLOAD",
      "The report contains fields that public intake does not accept, such as attachments or a priority.",
      422,
      { retryable: false, fields: { form: "Unsupported fields were sent." } }
    );
  }

  const contact =
    body.contact && typeof body.contact === "object"
      ? (body.contact as Record<string, unknown>)
      : {};

  const submitter = guestSessionFrom(request) ?? "anonymous";
  try {
    const { receipt, replayed } = submitCase(
      {
        idempotency_key: idempotencyKeyFrom(request, {
          idempotencyKey: body.idempotency_key,
        }),
        request_type: asString(body.request_type),
        answer_ref: asString(body.answer_ref) || undefined,
        comparison_ref: asString(body.comparison_ref) || undefined,
        claim_ref: asString(body.claim_ref) || undefined,
        source_ref: asString(body.source_ref) || undefined,
        source_hint: asString(body.source_hint) || undefined,
        description: asString(body.description),
        email: asString(contact.email) || undefined,
        notice_version: asString(body.notice_version),
      },
      submitter,
      (kind, ref) => isOwner(kind, ref, request)
    );
    return json({ receipt, replayed }, replayed ? 200 : 201);
  } catch (error) {
    if (error instanceof CaseValidationError) {
      return apiError(
        "INVALID_PAYLOAD",
        "Some fields need attention. Your draft is kept.",
        422,
        { retryable: false, fields: error.fields }
      );
    }
    if (error instanceof CaseProtectedRouteError) {
      return apiError(
        "INVALID_PAYLOAD",
        "Security and privacy concerns use a protected route, not public intake. Nothing was submitted.",
        422,
        {
          retryable: false,
          fields: {
            request_type:
              "Use the protected security and privacy route for this concern.",
          },
          alternative: {
            label: "Security and privacy",
            href: "/trust/security",
          },
        }
      );
    }
    if (error instanceof ReferenceNotAvailableError) {
      return apiError(
        "REFERENCE_NOT_AVAILABLE",
        "The answer or claim reference is not available. Nothing was submitted. You can send a general report without it.",
        404,
        { retryable: false }
      );
    }
    if (error instanceof CaseDuplicateError) {
      return apiError(
        "CASE_DUPLICATE",
        error.receipt
          ? "This report was already received. The original reference is shown."
          : "This submission reference was already used for a different report. Nothing new was submitted.",
        409,
        { retryable: false, receipt: error.receipt ?? undefined }
      );
    }
    return apiError(
      "INTAKE_UNAVAILABLE",
      "We could not confirm submission. Please retry using the same reference or use our contact route.",
      503,
      { retryable: true, alternative: ALTERNATIVE }
    );
  }
}
