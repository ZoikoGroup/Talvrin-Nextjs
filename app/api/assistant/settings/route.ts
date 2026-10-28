import { apiError, json, rateLimit, readJsonBody } from "@/lib/assistant/http";
import {
  DEFAULT_EDITABLE,
  DEMO_ACCOUNT_HEADER,
  DEMO_ACCOUNT_VALUE,
  IMMUTABLE_POLICY,
  IMMUTABLE_POLICY_KEYS,
  validateEditable,
  type EditablePrefs,
  type SettingsDocument,
} from "@/lib/assistant/settings-contract";

export const dynamic = "force-dynamic";

/**
 * WF-07 §9.1 / §10 account settings document (demo, in memory).
 *
 * - GET returns effective values, revision and an ETag.
 * - PUT/PATCH require If-Match; a stale revision gets 412 and nothing is
 *   applied (AC-15, AC-16, F10). Immutable policy keys get 403 (AC-04);
 *   unknown or invalid keys get 422 (AC-07).
 * - Guests get 401: their display choices stay session-scoped in the tab.
 *
 * The demo has one synthetic account principal, so two tabs in demo-account
 * mode share this record, which makes the multi-tab conflict reproducible.
 * Nothing here survives a server restart; no real account record exists.
 */
interface StoredSettings {
  revisionNumber: number;
  editable: EditablePrefs;
  updatedAt: string;
}

const store = new Map<string, StoredSettings>();
const DEMO_PRINCIPAL = "demo-account";

function principalFrom(request: Request): string | null {
  return request.headers.get(DEMO_ACCOUNT_HEADER) === DEMO_ACCOUNT_VALUE ? DEMO_PRINCIPAL : null;
}

function current(principal: string): StoredSettings {
  let record = store.get(principal);
  if (!record) {
    record = {
      revisionNumber: 1,
      editable: { ...DEFAULT_EDITABLE },
      updatedAt: new Date().toISOString(),
    };
    store.set(principal, record);
  }
  return record;
}

function revisionOf(record: StoredSettings) {
  return `prefs-rev-${record.revisionNumber}`;
}

function documentResponse(record: StoredSettings, status = 200) {
  const revision = revisionOf(record);
  const body: SettingsDocument = {
    revision,
    mode: "account",
    editable: record.editable,
    immutablePolicy: IMMUTABLE_POLICY,
    updatedAt: record.updatedAt,
  };
  return json(body, status, {
    etag: `"${revision}"`,
    "cache-control": "private, no-store, max-age=0",
  });
}

function unauthenticated() {
  return apiError(
    "AUTH_REQUIRED",
    "Sign in to use account settings. Guest display choices apply to this session only.",
    401,
    { retryable: false }
  );
}

export async function GET(request: Request) {
  const limited = rateLimit(request, "settings-read", 60);
  if (limited) return limited;
  const principal = principalFrom(request);
  if (!principal) return unauthenticated();
  return documentResponse(current(principal));
}

async function write(request: Request) {
  const limited = rateLimit(request, "settings-write", 20);
  if (limited) return limited;
  const principal = principalFrom(request);
  if (!principal) return unauthenticated();

  const record = current(principal);
  const ifMatch = request.headers.get("if-match");
  if (!ifMatch) {
    return apiError(
      "PRECONDITION_REQUIRED",
      "The settings revision is missing. Reload settings, then save again.",
      428,
      { retryable: false }
    );
  }
  const presented = ifMatch.replace(/^W\//, "").replace(/"/g, "").trim();
  if (presented !== revisionOf(record)) {
    return apiError(
      "SETTINGS_REVISION_CONFLICT",
      "Your settings changed elsewhere. Review the updated values before saving again.",
      412,
      { retryable: false, currentRevision: revisionOf(record) }
    );
  }

  const body = await readJsonBody(request);
  const extraTopLevel = Object.keys(body).filter((key) => key !== "editable");
  if (extraTopLevel.some((key) => (IMMUTABLE_POLICY_KEYS as readonly string[]).includes(key))) {
    return apiError(
      "IMMUTABLE_POLICY",
      "Source, citation and rights policies are required and cannot be changed.",
      403,
      { retryable: false }
    );
  }
  if (extraTopLevel.length) {
    return apiError("UNKNOWN_FIELD", "The request contains unrecognised fields.", 422, {
      retryable: false,
      fields: Object.fromEntries(
        extraTopLevel.map((key) => [key, "This field is not recognised."])
      ),
    });
  }

  const result = validateEditable(body.editable);
  if (!result.ok) {
    if (result.immutable.length) {
      return apiError(
        "IMMUTABLE_POLICY",
        "Source, citation and rights policies are required and cannot be changed.",
        403,
        { retryable: false }
      );
    }
    return apiError(
      "SETTINGS_INVALID",
      "Some settings could not be accepted. Check the highlighted fields.",
      422,
      { retryable: false, fields: result.fields }
    );
  }

  // Atomic in this single-threaded demo: validate, then commit and increment.
  const next: StoredSettings = {
    revisionNumber: record.revisionNumber + 1,
    editable: result.value,
    updatedAt: new Date().toISOString(),
  };
  store.set(principal, next);
  return documentResponse(next);
}

export async function PUT(request: Request) {
  return write(request);
}

export async function PATCH(request: Request) {
  return write(request);
}
