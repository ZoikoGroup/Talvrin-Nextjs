import type { ResearchJobRecord } from "./types";
import {
  getResearchJob,
  isAnswerRevoked,
  researchJobView,
} from "./research-store";
import { apiError, isOwner, notAvailable } from "./http";

/**
 * Shared guard for answer and evidence routes (WF-02 §9, §11; WF-03 §11).
 * Returns the record only when the caller's guest session owns it and a
 * published, unrevoked answer exists; otherwise the typed error response.
 */
export function readableAnswerRecord(
  request: Request,
  ref: string
): ResearchJobRecord | Response {
  const record = getResearchJob(ref);
  if (!record || !isOwner("research", ref, request)) {
    return notAvailable("JOB_NOT_FOUND");
  }
  const view = researchJobView(record);
  if (view.status === "EXPIRED") {
    return apiError(
      "JOB_EXPIRED",
      "This temporary session has ended. Start a new question.",
      410,
      { retryable: false }
    );
  }
  if (view.status === "READY" && isAnswerRevoked(record)) {
    return apiError(
      "ANSWER_REVOKED",
      "This answer is no longer available because a source or access condition changed.",
      410,
      { retryable: false }
    );
  }
  if (view.status !== "READY") {
    return apiError("ANSWER_NOT_READY", "The answer is still being validated.", 409, {
      retryable: true,
    });
  }
  return record;
}
