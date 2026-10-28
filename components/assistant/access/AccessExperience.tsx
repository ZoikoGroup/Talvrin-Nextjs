"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type FormEvent,
  type ReactNode,
} from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import clsx from "clsx";
import {
  ArrowRight,
  Check,
  Clock3,
  Fingerprint,
  Info,
  KeyRound,
  Laptop,
  Lock,
  LogOut,
  Mail,
  ShieldCheck,
  ShieldX,
  UserRound,
  Users,
} from "lucide-react";
import type {
  AccessContextResponse,
  AccessEvaluation,
  AccessFixture,
  AuthActionId,
  AuthIntentResolution,
  AuthIntentResponse,
  EffectiveEntitlement,
  EntitlementsResponse,
  FeatureFlagState,
  GuestImportReceipt,
  GuestImportResponse,
} from "@/lib/assistant/types";
import {
  ApiError,
  apiJson,
  clearSubjectCaches,
  loadConfig,
  newIdempotencyKey,
  readSessionEntries,
  type SessionEntry,
} from "@/lib/assistant/client";
import { formatDateTime, truncate } from "@/lib/assistant/format";
import { FIXTURE_LABEL, STATUS_META } from "@/lib/assistant/taxonomy";
import { useDemoMode } from "@/components/assistant/shell/DemoModeProvider";
import { useAssistantPrefs } from "@/components/assistant/shell/AssistantPrefsProvider";
import { Pill } from "@/components/assistant/ui/Badge";
import { Button } from "@/components/assistant/ui/Button";
import { Checkbox, Field, Input } from "@/components/assistant/ui/Field";
import { Skeleton } from "@/components/assistant/ui/Misc";
import { PageIntro, PageShell, Panel } from "@/components/assistant/ui/Panel";

/* ------------------------------------------------------------------ */
/* Constants                                                           */
/* ------------------------------------------------------------------ */

/** The demo browser asserts its synthetic identity with this header. */
const DEMO_ACCOUNT_HEADERS = { "x-talvrin-demo-mode": "account" };

/**
 * No passkey/WebAuthn provider is enrolled for this build, so the passkey
 * action stays hidden (WF-11 A04: show only when supported; fail closed).
 */
const PASSKEY_PROVIDER_ENROLLED = false;

const INTENTS: Record<
  AuthActionId,
  { banner: string | null; description: string; label: string }
> = {
  sign_in: {
    banner: null,
    label: "continue where you were",
    description:
      "Sign in to access eligible account features. Your current research stays in this temporary session unless you choose what to save.",
  },
  save: {
    banner: "You asked to save research.",
    label: "save research",
    description:
      "Saving requires an account, an explicit item-level selection and a fresh rights check. Signing in alone does not save your guest research.",
  },
  open_saved: {
    banner: "You asked to open saved research.",
    label: "open saved research",
    description:
      "Saved research belongs to an account. Guest research in this tab is not imported automatically.",
  },
  export: {
    banner: "You asked to export a citation package.",
    label: "export a citation package",
    description:
      "Export requires an authenticated eligible account. Source export and quotation rights are checked separately and can still withhold an excerpt.",
  },
  alert: {
    banner: "You asked to create an alert.",
    label: "create an alert",
    description:
      "Persistent alerts require an account, verified delivery channels and server enrollment. A guest keeps research progress only in the open session.",
  },
  history: {
    banner: "You asked to access cross-device history.",
    label: "access cross-device history",
    description:
      "Cross-device history requires a durable authenticated account. Guest history stays in this browser session and is not imported automatically.",
  },
  share: {
    banner: "You asked to share research.",
    label: "share research",
    description:
      "Controlled sharing is not released. Named-recipient sharing, expiry and reauthorization on every open are separate gates from export.",
  },
  source: {
    banner: "You asked to open a protected source.",
    label: "open a protected source",
    description:
      "Some sources need an entitlement and a licence that permits the requested use. A plan or sign-in cannot override a denied source right.",
  },
};

function actionIdFrom(intent?: string): AuthActionId | null {
  return intent && intent in INTENTS ? (intent as AuthActionId) : null;
}

const FIXTURE_OPTIONS: { value: AccessFixture; label: string }[] = [
  { value: "NONE", label: "Default synthetic decisions" },
  { value: "ENTITLEMENTS_PENDING", label: "Entitlements pending" },
  { value: "BILLING_PENDING", label: "Billing pending" },
  { value: "PLAN_REQUIRED", label: "Plan required" },
  { value: "QUOTA_BLOCKED", label: "Quota reached" },
  { value: "STEP_UP_REQUIRED", label: "Step-up required" },
  { value: "SESSION_EXPIRED", label: "Session expired" },
  { value: "POLICY_UNAVAILABLE", label: "Policy service unavailable" },
  { value: "IDENTITY_DISABLED", label: "Account on hold" },
];

const DECISION_META: Record<
  EffectiveEntitlement["decision"],
  { label: string; tone: "ok" | "warn" | "danger" | "neutral" }
> = {
  allow: { label: "Allowed", tone: "ok" },
  review_required: { label: "Review required", tone: "warn" },
  disabled: { label: "Disabled", tone: "neutral" },
  denied: { label: "Denied", tone: "danger" },
};

type AuthPhase =
  | "idle"
  | "provider_pending"
  | "callback_validating"
  | "verifying_entitlements";

type Feedback = {
  tone: "error" | "info";
  title: string;
  body?: string;
} | null;

/* ------------------------------------------------------------------ */
/* Shared helpers                                                      */
/* ------------------------------------------------------------------ */

/**
 * An action that cannot run but stays focusable, with its reason
 * programmatically associated (WF-11 §6.1 nonvisual contract).
 */
function UnavailableAction({
  id,
  children,
  reason,
}: {
  id: string;
  children: ReactNode;
  reason: string;
}) {
  return (
    <span className="inline-flex flex-col gap-1">
      <button
        type="button"
        aria-disabled="true"
        aria-describedby={`${id}-reason`}
        onClick={(event) => event.preventDefault()}
        className="inline-flex min-h-11 cursor-not-allowed items-center justify-center rounded-lg border border-as-line bg-as-panel/40 px-3.5 text-[13px] font-semibold text-haze opacity-70 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-iris"
      >
        {children}
      </button>
      <span id={`${id}-reason`} className="text-[12px] leading-5 text-haze">
        {reason}
      </span>
    </span>
  );
}

function SyntheticNote() {
  return (
    <p className="font-mono text-[11px] uppercase leading-5 tracking-[0.1em] text-haze">
      {FIXTURE_LABEL}
    </p>
  );
}

/* ------------------------------------------------------------------ */
/* Root                                                                */
/* ------------------------------------------------------------------ */

export default function AccessExperience({
  intent,
  returnTo,
  intentRef,
}: {
  intent?: string;
  returnTo?: string;
  intentRef?: string;
}) {
  const router = useRouter();
  const { mode, ready, setMode } = useDemoMode();
  const actionId = actionIdFrom(intent);
  const [returnIntent, setReturnIntent] = useState<string | null>(
    intentRef && /^ain_[A-Za-z0-9_-]{4,80}$/.test(intentRef) ? intentRef : null
  );
  const [pageStatus, setPageStatus] = useState("");
  const [savedFlag, setSavedFlag] = useState<FeatureFlagState>("OFF");
  const pageStatusRef = useRef<HTMLParagraphElement>(null);
  const intentRequested = useRef(false);

  useEffect(() => {
    loadConfig()
      .then((config) => setSavedFlag(config.featureFlags.savedResearch))
      .catch(() => setSavedFlag("OFF"));
  }, []);

  // A raw return path arriving in the URL is exchanged for an opaque,
  // short-lived server nonce and then removed from the address bar
  // (WF-11 §2.1 "Return intent", A14, P0 02).
  useEffect(() => {
    if (returnIntent || intentRequested.current) return;
    if (!returnTo && !actionId) return;
    intentRequested.current = true;
    apiJson<AuthIntentResponse>("/api/assistant/auth/intents", {
      method: "POST",
      body: JSON.stringify({
        actionId: actionId ?? "sign_in",
        returnPath: returnTo ?? "/assistant",
      }),
    })
      .then((result) => {
        setReturnIntent(result.intentId);
        const query = new URLSearchParams();
        if (actionId) query.set("intent", actionId);
        query.set("ri", result.intentId);
        router.replace(`/assistant/access?${query.toString()}`, {
          scroll: false,
        });
      })
      .catch(() => setReturnIntent(null));
  }, [actionId, returnIntent, returnTo, router]);

  /** Consumes the one-time intent; falls back to the safe default. */
  const resolveReturn = useCallback(async (): Promise<string> => {
    if (!returnIntent) return "/assistant";
    try {
      const result = await apiJson<AuthIntentResolution>(
        "/api/assistant/auth/intents/consume",
        { method: "POST", body: JSON.stringify({ intentId: returnIntent }) }
      );
      return result.returnPath;
    } catch (error) {
      if (error instanceof ApiError && error.code === "AUTH_INTENT_EXPIRED") {
        setPageStatus(error.message);
      }
      return "/assistant";
    } finally {
      setReturnIntent(null);
    }
  }, [returnIntent]);

  const continueToReturn = useCallback(async () => {
    const path = await resolveReturn();
    router.push(path);
  }, [resolveReturn, router]);

  const endAccountSession = useCallback(
    async (message: string) => {
      try {
        await Promise.all([
          apiJson("/api/assistant/auth/logout", {
            method: "POST",
            headers: DEMO_ACCOUNT_HEADERS,
          }),
          // Revoke server-held grants bound to this session (P0 08).
          apiJson("/api/assistant/exports/entitlement", { method: "DELETE" }),
        ]);
      } catch {
        // Local clearing still happens; the demo has no server session.
      }
      // E12 / J12: remove subject-scoped caches and gated views.
      clearSubjectCaches();
      setMode("guest");
      setPageStatus(message);
      // The trigger disappears with the account view, so focus moves to
      // the status line rather than being lost.
      window.requestAnimationFrame(() => pageStatusRef.current?.focus());
    },
    [setMode]
  );

  const statusLine = (
    <p
      ref={pageStatusRef}
      tabIndex={-1}
      role="status"
      aria-live="polite"
      className={clsx(
        "text-[14px] leading-6 text-platinum focus:outline-none",
        pageStatus && "mb-4 rounded-xl border border-as-line bg-as-panel/50 px-4 py-3"
      )}
    >
      {pageStatus}
    </p>
  );

  if (!ready) {
    return (
      <PageShell width="default" className="pt-8">
        <p role="status" className="sr-only">
          Loading account access…
        </p>
        <Skeleton className="h-56 rounded-2xl" />
      </PageShell>
    );
  }

  if (mode === "account") {
    return (
      <AccountAccess
        actionId={actionId}
        savedFlag={savedFlag}
        hasReturnIntent={Boolean(returnIntent)}
        onContinue={continueToReturn}
        onSignOut={() =>
          endAccountSession(
            "Signed out of the demo account in this browser. Account caches and gated views were cleared; guest research in this tab is unchanged."
          )
        }
        onSessionExpired={() =>
          endAccountSession("Your session has ended. Sign in again to continue.")
        }
        statusLine={statusLine}
      />
    );
  }

  return (
    <GuestAccess
      actionId={actionId}
      savedFlag={savedFlag}
      onContinueAsGuest={continueToReturn}
      onDemoSignedIn={() => setMode("account")}
      statusLine={statusLine}
    />
  );
}

/* ------------------------------------------------------------------ */
/* Guest: sign-in boundary (WF-11 §02, §04, A01–A09, A13)               */
/* ------------------------------------------------------------------ */

function GuestAccess({
  actionId,
  savedFlag,
  onContinueAsGuest,
  onDemoSignedIn,
  statusLine,
}: {
  actionId: AuthActionId | null;
  savedFlag: FeatureFlagState;
  onContinueAsGuest: () => Promise<void>;
  onDemoSignedIn: () => void;
  statusLine: ReactNode;
}) {
  const { prefs } = useAssistantPrefs();
  const [entries, setEntries] = useState<SessionEntry[]>([]);
  const [authPanel, setAuthPanel] = useState<"signin" | "recovery">("signin");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState<string | undefined>();
  const [phase, setPhase] = useState<AuthPhase>("idle");
  const [feedback, setFeedback] = useState<Feedback>(null);
  const [progress, setProgress] = useState("");
  const [passkeyAvailable, setPasskeyAvailable] = useState(false);
  const [leaving, setLeaving] = useState(false);
  const summaryRef = useRef<HTMLDivElement>(null);
  const passkeyRef = useRef<HTMLButtonElement>(null);
  const timers = useRef<number[]>([]);

  useEffect(() => {
    setEntries(readSessionEntries());
    setPasskeyAvailable(
      PASSKEY_PROVIDER_ENROLLED &&
        typeof window !== "undefined" &&
        typeof window.PublicKeyCredential === "function"
    );
    const pending = timers.current;
    return () => pending.forEach((timer) => window.clearTimeout(timer));
  }, []);

  const busy = phase !== "idle";
  const meta = actionId ? INTENTS[actionId] : null;
  const savingUnavailable =
    (actionId === "save" || actionId === "open_saved") && savedFlag === "OFF";
  const guestExpiry = entries.length
    ? Math.max(...entries.map((entry) => new Date(entry.expiresAt).getTime()))
    : null;

  /** Failure: show summary and move focus to it (§4.2). */
  function fail(next: NonNullable<Feedback>) {
    setFeedback(next);
    window.requestAnimationFrame(() => summaryRef.current?.focus());
  }

  function later(fn: () => void, ms: number) {
    timers.current.push(window.setTimeout(fn, ms));
  }

  function handleAuth(event: FormEvent) {
    event.preventDefault();
    if (busy) return;
    setFeedback(null);
    const trimmed = email.trim();
    if (!trimmed || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) {
      // Format instruction only; never reveals whether an account exists.
      setEmailError(
        trimmed
          ? "Enter an email address in the format name@example.com."
          : "Enter your email address."
      );
      fail({
        tone: "error",
        title: "There is a problem",
        body: "Check the email address field.",
      });
      return;
    }
    setEmailError(undefined);
    if (typeof navigator !== "undefined" && navigator.onLine === false) {
      // §4.3 Offline: non-destructive retry; the guest session is untouched.
      fail({
        tone: "error",
        title: "You appear to be offline",
        body: "Nothing was sent. Your email address and guest research are kept; try again when you are connected.",
      });
      return;
    }
    setPhase("provider_pending");
    setProgress(
      authPanel === "recovery"
        ? "Sending your recovery request…"
        : "Contacting the sign-in provider…"
    );
    later(() => {
      setPhase("idle");
      setProgress("");
      if (authPanel === "recovery") {
        // Neutral confirmation; no recipient disclosure (A09, P0 11).
        setFeedback({
          tone: "info",
          title: "If an account matches the details, we’ll send instructions.",
          body: "Demonstration: no email was sent or stored.",
        });
      } else {
        // WF-11 §02 failure behaviour: never promise a successful save.
        fail({
          tone: "error",
          title: "Sign-in is temporarily unavailable",
          body: "Your guest session is preserved and nothing was saved. No identity provider is configured in this demonstration.",
        });
      }
    }, 650);
  }

  function handlePasskey() {
    if (busy) return;
    // With an enrolled provider this would open the platform credential UI.
    // Cancellation restores focus to this button (§4.3 "Passkey dismissed").
    setFeedback({
      tone: "error",
      title: "We couldn’t complete passkey sign-in.",
      body: "Try again or choose another available method.",
    });
    window.requestAnimationFrame(() => passkeyRef.current?.focus());
  }

  function exploreDemoAccount() {
    if (busy) return;
    setFeedback(null);
    // Synthetic stand-in for auth_idle → provider_pending →
    // callback_validating → verifying_entitlements (WF-11 §2.1).
    setPhase("provider_pending");
    setProgress("Starting the synthetic demo session…");
    later(() => {
      setPhase("callback_validating");
      setProgress("Validating the demo callback…");
    }, 500);
    later(() => {
      setPhase("verifying_entitlements");
      setProgress("Verifying access. Features stay off until this completes…");
    }, 1000);
    later(() => {
      setPhase("idle");
      setProgress("");
      onDemoSignedIn();
    }, 1500);
  }

  async function continueAsGuest() {
    if (leaving) return;
    setLeaving(true);
    await onContinueAsGuest();
  }

  const emailDescribedBy = [
    "auth-email-hint",
    emailError ? "auth-email-error" : null,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <PageShell width="default" className="pt-8">
      <PageIntro
        eyebrow="Account access"
        title="Keep researching as a guest. Sign in only when the action needs it."
        lead="Account access is needed for saved research, exports, alerts and durable history. It is never enough on its own: feature authorization and source-specific rights are checked separately on every request."
        meta={
          <div className="flex flex-wrap items-center gap-2">
            <Pill tone="warn" dot>
              Guest · temporary session
            </Pill>
            <Pill>No automatic save on sign-in</Pill>
            <Pill tone="warn">Demo · no identity provider</Pill>
          </div>
        }
      />

      {statusLine}

      {meta?.banner ? (
        <div className="mb-4 rounded-xl border border-warn/30 bg-warn/[0.06] p-4">
          <p className="text-[15px] font-semibold text-platinum">{meta.banner}</p>
          <p className="mt-1 text-[14px] leading-6 text-haze">{meta.description}</p>
          {savingUnavailable ? (
            <p className="mt-1 text-[14px] leading-6 text-haze">
              Saved research isn’t available yet, so signing in will not let
              you save. Your research stays in this temporary session.
            </p>
          ) : null}
        </div>
      ) : null}

      <div className="grid gap-5 min-[901px]:grid-cols-[minmax(0,640px)_minmax(0,1fr)] min-[901px]:items-start">
        <div className="min-w-0 space-y-5">
          <Panel className="p-5 sm:p-6" variant="raised">
            <div className="flex items-center gap-2">
              <KeyRound aria-hidden="true" className="h-4 w-4 text-iris-soft" />
              <h2 className="text-[17px] font-semibold text-platinum">
                {authPanel === "recovery"
                  ? "Recover account access"
                  : "Sign in to access eligible features"}
              </h2>
            </div>
            <p className="mt-1.5 text-[14px] leading-6 text-haze">
              {authPanel === "recovery"
                ? "Use the email address associated with the account. The response never reveals whether an account exists."
                : "Sign in to access eligible account features. Your current research stays in this temporary session unless you choose what to save."}
            </p>

            {/* A13 status banner: announced politely; focus moves here only on failure. */}
            <div
              ref={summaryRef}
              tabIndex={-1}
              role="status"
              aria-live="polite"
              className={clsx(
                "focus:outline-none",
                feedback &&
                  clsx(
                    "mt-4 rounded-xl border p-3.5 focus:ring-2",
                    feedback.tone === "error"
                      ? "border-warn/40 bg-warn/[0.07] focus:ring-warn/40"
                      : "border-ok/30 bg-ok/[0.06] focus:ring-ok/40"
                  )
              )}
            >
              {feedback ? (
                <div className="flex items-start gap-2">
                  <Info
                    aria-hidden="true"
                    className={clsx(
                      "mt-1 h-4 w-4 shrink-0",
                      feedback.tone === "error" ? "text-warn" : "text-ok"
                    )}
                  />
                  <div>
                    <p className="text-[14px] font-semibold text-platinum">
                      {feedback.title}
                    </p>
                    {feedback.body ? (
                      <p className="mt-0.5 text-[14px] leading-6 text-haze">
                        {feedback.body}
                      </p>
                    ) : null}
                    {emailError ? (
                      <a
                        href="#auth-email"
                        className="mt-1 inline-flex min-h-11 items-center text-[14px] font-semibold text-iris-soft hover:text-white"
                      >
                        Go to the email field
                      </a>
                    ) : null}
                  </div>
                </div>
              ) : null}
            </div>
            <p role="status" aria-live="polite" className="sr-only">
              {progress}
            </p>

            {authPanel === "signin" ? (
              passkeyAvailable ? (
                <div className="mt-5">
                  <button
                    ref={passkeyRef}
                    type="button"
                    onClick={handlePasskey}
                    disabled={busy}
                    className="flex min-h-12 w-full items-center justify-center gap-2 rounded-xl border border-iris bg-iris px-4 text-[15px] font-semibold text-white hover:bg-iris-soft disabled:opacity-50"
                  >
                    <Fingerprint aria-hidden="true" className="h-4 w-4" />
                    Continue with a passkey
                  </button>
                </div>
              ) : (
                <p className="mt-5 text-[13px] leading-5 text-haze">
                  Passkey sign-in isn’t offered: no passkey provider is
                  configured for this build.
                </p>
              )
            ) : null}

            <form onSubmit={handleAuth} noValidate className="mt-5">
              <Field
                id="auth-email"
                label="Email address"
                required
                error={emailError}
                hint={
                  authPanel === "recovery"
                    ? "Recovery responses are the same whether or not an account exists."
                    : "A verified sign-in link or trusted provider flow is required. No password is collected here."
                }
              >
                <div className="relative">
                  <Mail
                    aria-hidden="true"
                    className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-haze"
                  />
                  <Input
                    id="auth-email"
                    type="email"
                    inputMode="email"
                    name="email"
                    value={email}
                    onChange={(event) => {
                      setEmail(event.target.value);
                      setEmailError(undefined);
                    }}
                    placeholder="name@example.com"
                    className="pl-9 text-[15px]"
                    autoComplete="email"
                    spellCheck={false}
                    aria-invalid={emailError ? true : undefined}
                    aria-describedby={emailDescribedBy}
                  />
                </div>
              </Field>

              <Button
                type="submit"
                className="mt-4 w-full"
                loading={busy && phase === "provider_pending" && !!email}
                disabled={busy}
                variant={passkeyAvailable ? "secondary" : "primary"}
              >
                {authPanel === "signin"
                  ? "Continue with email"
                  : "Request recovery instructions"}
              </Button>
            </form>

            <button
              type="button"
              onClick={() => {
                setAuthPanel((current) =>
                  current === "signin" ? "recovery" : "signin"
                );
                setFeedback(null);
                setEmailError(undefined);
              }}
              className="mt-2 inline-flex min-h-11 items-center text-[14px] font-medium text-iris-soft hover:text-white"
            >
              {authPanel === "signin" ? "Recover access" : "Back to sign in"}
            </button>

            <div className="mt-4 border-t border-as-line/60 pt-4">
              <Button
                variant="secondary"
                className="w-full"
                onClick={() => void continueAsGuest()}
                loading={leaving}
              >
                Continue as guest
              </Button>
              <p className="mt-1.5 text-[13px] leading-5 text-haze">
                Returns you to your research. Nothing gated is completed.
              </p>
            </div>

            <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1">
              <button
                type="button"
                onClick={() =>
                  setFeedback({
                    tone: "info",
                    title: "Account creation isn’t configured in this demonstration.",
                    body: "No trial, plan or price is assumed. You can continue as a guest.",
                  })
                }
                className="inline-flex min-h-11 items-center text-[14px] font-semibold text-iris-soft hover:text-white"
              >
                Create account
              </button>
              <Link
                href="/legal/terms-of-service"
                className="inline-flex min-h-11 items-center text-[13px] text-haze underline-offset-4 hover:text-platinum hover:underline"
              >
                Terms of service
              </Link>
              <Link
                href="/legal/privacy-notice"
                className="inline-flex min-h-11 items-center text-[13px] text-haze underline-offset-4 hover:text-platinum hover:underline"
              >
                Privacy notice
              </Link>
              <Link
                href="/assistant/help"
                className="inline-flex min-h-11 items-center text-[13px] text-haze underline-offset-4 hover:text-platinum hover:underline"
              >
                Help
              </Link>
            </div>

            <div className="mt-4 rounded-xl border border-warn/30 bg-warn/[0.05] p-3.5">
              <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-warn">
                Demonstration boundary
              </p>
              <p className="mt-1 text-[13px] leading-6 text-haze">
                This is not a real identity form. The email value stays in this
                page and is discarded on navigation. The demo account below is
                synthetic: it creates no account and does not save research.
              </p>
              <Button
                size="sm"
                variant="secondary"
                className="mt-2"
                onClick={exploreDemoAccount}
                loading={busy && !email}
                disabled={busy}
                icon={<UserRound aria-hidden="true" className="h-3.5 w-3.5" />}
              >
                Explore demo account
              </Button>
            </div>
          </Panel>

          <Panel className="p-5">
            <h2 className="text-[16px] font-semibold text-platinum">
              What signing in does not do
            </h2>
            <div className="mt-3 grid gap-2.5 sm:grid-cols-2">
              {[
                {
                  title: "Save the guest conversation",
                  body: "Saving is a separate, item-level choice with a rights preview. Nothing is selected by default.",
                },
                {
                  title: "Grant a plan",
                  body: "No trial, plan or price catalogue is configured, and nothing is provisioned automatically.",
                },
                {
                  title: "Override source rights",
                  body: "Identity cannot unlock a source whose licence denies display, storage or export.",
                },
                {
                  title: "Create a cross-device profile",
                  body: "Guest research stays in this browser session and is not merged across devices.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl border border-as-line/70 p-3.5"
                >
                  <p className="flex items-start gap-1.5 text-[14px] font-semibold text-platinum">
                    <ShieldX
                      aria-hidden="true"
                      className="mt-0.5 h-4 w-4 shrink-0 text-warn"
                    />
                    {item.title}
                  </p>
                  <p className="mt-1 text-[13px] leading-5 text-haze">{item.body}</p>
                </div>
              ))}
            </div>
          </Panel>
        </div>

        <aside aria-label="Guest session" className="flex min-w-0 flex-col gap-4">
          <Panel className="p-4">
            <div className="flex items-center gap-2">
              <Clock3 aria-hidden="true" className="h-4 w-4 text-iris-soft" />
              <h2 className="text-[15px] font-semibold text-platinum">
                Guest context
              </h2>
            </div>
            <p className="mt-1.5 text-[14px] leading-6 text-haze">
              {entries.length
                ? `${entries.length} research item${entries.length === 1 ? "" : "s"} in this browser session.`
                : "No research item is recorded in this browser session yet."}
            </p>
            {guestExpiry ? (
              <p className="mt-1 text-[13px] leading-5 text-haze">
                Latest item expires{" "}
                {formatDateTime(
                  new Date(guestExpiry).toISOString(),
                  prefs.timeZone,
                  prefs.numberLocale
                )}
                .
              </p>
            ) : null}
            <div className="mt-2 flex flex-wrap gap-1">
              <Pill tone="warn">Temporary</Pill>
              <Pill tone="neutral">This browser</Pill>
            </div>
            <p className="mt-2 text-[13px] leading-5 text-haze">
              If sign-in is unavailable, guest research remains for its session
              lifetime. No successful save is promised.
            </p>
          </Panel>

          <Panel className="p-4">
            <div className="flex items-center gap-2">
              <Users aria-hidden="true" className="h-4 w-4 text-haze" />
              <h2 className="text-[15px] font-semibold text-platinum">
                Return intent
              </h2>
            </div>
            <p className="mt-1.5 text-[14px] leading-6 text-haze">
              Protected actions issue one opaque, short-lived return intent
              bound to an allowlisted assistant route. The route stays on the
              server; research text and credentials never travel in the URL.
            </p>
            <p className="mt-1.5 text-[13px] leading-5 text-haze">
              External return addresses are rejected and replaced with the
              research home.
            </p>
          </Panel>

          <Panel className="p-4">
            <div className="flex items-center gap-2">
              <ShieldCheck aria-hidden="true" className="h-4 w-4 text-haze" />
              <h2 className="text-[15px] font-semibold text-platinum">
                Bounded identity
              </h2>
            </div>
            <ul className="mt-2 space-y-1.5">
              {[
                "No password collection in the assistant.",
                "Passkey shown only when a provider is enrolled.",
                "Recovery responses do not reveal account existence.",
                "No guest-to-account linking without item-level consent.",
                "No billing, plan or trial claim without approved configuration.",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-1.5 text-[13px] leading-5 text-haze"
                >
                  <Check
                    aria-hidden="true"
                    className="mt-0.5 h-3.5 w-3.5 shrink-0 text-ok"
                  />
                  {item}
                </li>
              ))}
            </ul>
            <Link
              href="/support/accessibility-support"
              className="mt-2 inline-flex min-h-11 items-center text-[13px] font-medium text-iris-soft hover:text-white"
            >
              Accessibility support
              <ArrowRight aria-hidden="true" className="ml-1 h-3.5 w-3.5" />
            </Link>
          </Panel>

          <SyntheticNote />
        </aside>
      </div>
    </PageShell>
  );
}

/* ------------------------------------------------------------------ */
/* Account: effective access (WF-11 §03, §07, E01–E12, §09 states)      */
/* ------------------------------------------------------------------ */

type EntState =
  | { status: "loading" }
  | {
      status: "ready";
      context: AccessContextResponse;
      data: EntitlementsResponse;
    }
  | {
      status: "error";
      kind: "SESSION_EXPIRED" | "POLICY_UNAVAILABLE" | "IDENTITY_DISABLED";
      message: string;
      requestId?: string;
      retryable: boolean;
    };

function AccountAccess({
  actionId,
  savedFlag,
  hasReturnIntent,
  onContinue,
  onSignOut,
  onSessionExpired,
  statusLine,
}: {
  actionId: AuthActionId | null;
  savedFlag: FeatureFlagState;
  hasReturnIntent: boolean;
  onContinue: () => Promise<void>;
  onSignOut: () => void;
  onSessionExpired: () => void;
  statusLine: ReactNode;
}) {
  const router = useRouter();
  const { prefs } = useAssistantPrefs();
  const [fixture, setFixture] = useState<AccessFixture>("NONE");
  const [ent, setEnt] = useState<EntState>({ status: "loading" });
  const [announcement, setAnnouncement] = useState("");
  const [stepUp, setStepUp] = useState<{ label: string; triggerId: string } | null>(null);
  const [actionResult, setActionResult] = useState<string | null>(null);
  const [runningFeature, setRunningFeature] = useState<string | null>(null);
  const [entries, setEntries] = useState<SessionEntry[]>([]);
  const abortRef = useRef<AbortController | null>(null);
  const lastRefresh = useRef(0);
  const stepUpRef = useRef<HTMLHeadingElement>(null);
  const actionResultRef = useRef<HTMLParagraphElement>(null);

  const when = (iso: string) =>
    formatDateTime(iso, prefs.timeZone, prefs.numberLocale);

  const load = useCallback(async (next: AccessFixture) => {
    // Refresh cancels stale in-flight requests (WF-11 §3.2, E08).
    abortRef.current?.abort();
    const controller = new AbortController();
    abortRef.current = controller;
    setEnt({ status: "loading" });
    setAnnouncement("Checking your access. Features stay off until the check completes.");
    const query = next === "NONE" ? "" : `?fixture=${next}`;
    try {
      const [context, data] = await Promise.all([
        apiJson<AccessContextResponse>(`/api/assistant/access/context${query}`, {
          headers: DEMO_ACCOUNT_HEADERS,
          signal: controller.signal,
        }),
        apiJson<EntitlementsResponse>(
          `/api/assistant/access/entitlements${query}`,
          { headers: DEMO_ACCOUNT_HEADERS, signal: controller.signal }
        ),
      ]);
      if (controller.signal.aborted) return;
      setEnt({ status: "ready", context, data });
      setAnnouncement(
        data.state === "BILLING_PENDING"
          ? "Your account change is being confirmed. Access will update when verification completes."
          : "Synthetic access decisions loaded."
      );
    } catch (error) {
      if (controller.signal.aborted) return;
      if (error instanceof ApiError && error.code === "ACCOUNT_SCOPE_DENIED") {
        // IDENTITY_DISABLED: account hold; no access and no account data.
        setEnt({
          status: "error",
          kind: "IDENTITY_DISABLED",
          message: error.message,
          requestId: error.requestId,
          retryable: false,
        });
        setAnnouncement(error.message);
        return;
      }
      if (error instanceof ApiError && error.code === "AUTH_REQUIRED") {
        // SESSION_EXPIRED: protected data is removed from view.
        setEnt({
          status: "error",
          kind: "SESSION_EXPIRED",
          message: "Your session has ended. Sign in again to continue.",
          requestId: error.requestId,
          retryable: false,
        });
        setAnnouncement("Your session has ended. Sign in again to continue.");
        return;
      }
      // POLICY_UNAVAILABLE, network or anything unknown fails closed.
      const message =
        error instanceof ApiError && error.code === "POLICY_UNAVAILABLE"
          ? error.message
          : "We’re unable to verify access right now, so protected features stay off. Try again later.";
      setEnt({
        status: "error",
        kind: "POLICY_UNAVAILABLE",
        message,
        requestId: error instanceof ApiError ? error.requestId : undefined,
        retryable: error instanceof ApiError ? error.retryable : true,
      });
      setAnnouncement(message);
    }
  }, []);

  useEffect(() => {
    setEntries(readSessionEntries());
  }, []);

  useEffect(() => {
    void load(fixture);
  }, [fixture, load]);

  useEffect(() => () => abortRef.current?.abort(), []);

  function refresh() {
    // Debounced: ignore repeat presses within a second (E08).
    const now = Date.now();
    if (now - lastRefresh.current < 1000) return;
    lastRefresh.current = now;
    void load(fixture);
  }

  /** Server-authorizes one action before navigating (§5.1, P0 21). */
  async function runAction(
    feature: string,
    label: string,
    href: string | null,
    triggerId: string
  ) {
    if (runningFeature) return;
    setRunningFeature(feature);
    setActionResult(null);
    try {
      const result = await apiJson<AccessEvaluation>(
        "/api/assistant/access/evaluate",
        {
          method: "POST",
          headers: DEMO_ACCOUNT_HEADERS,
          body: JSON.stringify({
            feature,
            fixture: fixture === "NONE" ? undefined : fixture,
          }),
        }
      );
      if (result.decision === "allow" && href) {
        router.push(href);
        return;
      }
      if (result.code === "MFA_STEP_UP_REQUIRED") {
        setStepUp({ label, triggerId });
        window.requestAnimationFrame(() => stepUpRef.current?.focus());
        return;
      }
      if (result.code === "AUTH_REQUIRED") {
        setEnt({
          status: "error",
          kind: "SESSION_EXPIRED",
          message: "Your session has ended. Sign in again to continue.",
          retryable: false,
        });
        return;
      }
      setActionResult(
        result.decision === "allow"
          ? `${label}: allowed, but no approved destination is configured.`
          : `${label}: ${result.userSafeMessage}`
      );
      window.requestAnimationFrame(() => actionResultRef.current?.focus());
    } catch (error) {
      setActionResult(
        `${label}: we’re unable to verify access right now, so the action did not run.${
          error instanceof ApiError && error.requestId
            ? ` Reference ${error.requestId}.`
            : ""
        }`
      );
      window.requestAnimationFrame(() => actionResultRef.current?.focus());
    } finally {
      setRunningFeature(null);
    }
  }

  function closeStepUp() {
    const trigger = stepUp?.triggerId;
    setStepUp(null);
    setAnnouncement("Step-up cancelled. The action did not run.");
    if (trigger) {
      window.requestAnimationFrame(() =>
        document.getElementById(trigger)?.focus()
      );
    }
  }

  const meta = actionId ? INTENTS[actionId] : null;

  return (
    <PageShell width="wide" className="pt-8">
      <PageIntro
        eyebrow="Account access · demo account"
        title="A session is not an entitlement. A plan is not a licence."
        lead="This is a synthetic signed-in view. No identity provider confirmed this session, and every capability below comes from a mock policy route. No billing record or licensed source is connected."
        meta={
          <div className="flex flex-wrap items-center gap-2">
            <Pill tone="iris" dot>
              Demo account · synthetic session
            </Pill>
            <Pill tone="warn">No billing configured</Pill>
          </div>
        }
      />

      {statusLine}
      <p role="status" aria-live="polite" className="sr-only">
        {announcement}
      </p>

      {meta && hasReturnIntent ? (
        <div className="mb-4 flex flex-col gap-3 rounded-xl border border-iris/30 bg-iris/[0.06] p-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[14px] leading-6 text-haze">
            {actionId === "sign_in"
              ? "You can return to where you were."
              : `You came here to ${meta.label}. Access is still checked for each action and each source.`}
          </p>
          <Button size="sm" onClick={() => void onContinue()}>
            {actionId === "sign_in" ? "Return" : "Continue to action"}
          </Button>
        </div>
      ) : null}

      <div className="grid gap-5 xl:grid-cols-[minmax(0,1fr)_340px] xl:items-start">
        <div className="min-w-0 space-y-5">
          <Panel className="p-4">
            <label
              htmlFor="access-fixture"
              className="block text-[14px] font-semibold text-platinum"
            >
              Demo access state
            </label>
            <p id="access-fixture-hint" className="mt-0.5 text-[13px] leading-5 text-haze">
              Synthetic: reproduces WF-11 states from the mock policy routes. A
              real service never accepts this from the browser.
            </p>
            <select
              id="access-fixture"
              aria-describedby="access-fixture-hint"
              value={fixture}
              onChange={(event) => setFixture(event.target.value as AccessFixture)}
              className="mt-2 h-11 w-full max-w-sm rounded-xl border border-as-line bg-midnight-soft/80 px-3 text-[14px] text-platinum focus:border-iris/70 focus:outline-none focus:ring-2 focus:ring-iris/25"
            >
              {FIXTURE_OPTIONS.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </Panel>

          {stepUp ? (
            <Panel className="border-warn/40 p-5" variant="raised">
              <h2
                ref={stepUpRef}
                tabIndex={-1}
                className="text-[16px] font-semibold text-platinum focus:outline-none"
              >
                Confirm it’s you
              </h2>
              <p className="mt-1 text-[14px] leading-6 text-haze">
                {stepUp.label} needs a stronger sign-in check first. Step-up
                verification isn’t available in this demonstration, so the
                action did not run and nothing was charged or changed.
              </p>
              <Button
                className="mt-3"
                size="sm"
                variant="secondary"
                onClick={closeStepUp}
              >
                Cancel
              </Button>
            </Panel>
          ) : null}

          <p
            ref={actionResultRef}
            tabIndex={-1}
            role="status"
            className={clsx(
              "text-[14px] leading-6 text-platinum focus:outline-none",
              actionResult &&
                "rounded-xl border border-warn/40 bg-warn/[0.06] px-4 py-3"
            )}
          >
            {actionResult}
          </p>

          {ent.status === "loading" ? (
            <Panel className="p-5" busy>
              <h2 className="text-[16px] font-semibold text-platinum">
                Checking your access
              </h2>
              <p className="mt-1 text-[14px] leading-6 text-haze">
                Features stay off until the entitlement check completes. Nothing
                is shown from an earlier result.
              </p>
              <div className="mt-4 space-y-3" aria-hidden="true">
                <Skeleton className="h-14 w-full" />
                <Skeleton className="h-14 w-full" />
                <Skeleton className="h-14 w-full" />
              </div>
            </Panel>
          ) : ent.status === "error" ? (
            <Panel className="border-warn/40 p-5">
              <h2 className="text-[16px] font-semibold text-platinum">
                {ent.kind === "SESSION_EXPIRED"
                  ? "Session ended"
                  : ent.kind === "IDENTITY_DISABLED"
                    ? "Account on hold"
                    : "Unable to verify access"}
              </h2>
              <p className="mt-1 text-[14px] leading-6 text-haze">{ent.message}</p>
              {ent.requestId ? (
                <p className="mt-1 font-mono text-[12px] text-haze">
                  Reference {ent.requestId}
                </p>
              ) : null}
              <div className="mt-3 flex flex-wrap gap-2">
                {ent.kind === "SESSION_EXPIRED" ? (
                  <Button size="sm" onClick={onSessionExpired}>
                    Sign in again
                  </Button>
                ) : ent.kind === "IDENTITY_DISABLED" ? (
                  <Link
                    href="/assistant/help"
                    className="inline-flex min-h-11 items-center rounded-lg border border-as-line px-3.5 text-[13px] font-semibold text-platinum hover:border-iris/50"
                  >
                    Contact support
                  </Link>
                ) : (
                  <Button size="sm" variant="secondary" onClick={refresh}>
                    Try again
                  </Button>
                )}
              </div>
            </Panel>
          ) : (
            <>
              {ent.data.state === "BILLING_PENDING" ? (
                <div className="rounded-xl border border-warn/40 bg-warn/[0.06] p-4">
                  <p className="text-[15px] font-semibold text-platinum">
                    Your account change is being confirmed.
                  </p>
                  <p className="mt-1 text-[14px] leading-6 text-haze">
                    Access will update when verification completes. Paid features
                    stay off until then.
                  </p>
                </div>
              ) : null}

              <div className="grid gap-4 sm:grid-cols-2">
                <Panel className="p-4">
                  <div className="flex items-center gap-2">
                    <UserRound aria-hidden="true" className="h-4 w-4 text-iris-soft" />
                    <h2 className="text-[15px] font-semibold text-platinum">
                      Session
                    </h2>
                  </div>
                  <p className="mt-2 text-[15px] font-semibold text-platinum">
                    Demo account
                  </p>
                  <p className="mt-1 font-mono text-[12px] leading-5 text-haze">
                    {ent.context.subjectScope} · {ent.context.tenantScope} ·
                    assurance {ent.context.assurance}
                  </p>
                  <div className="mt-2 flex flex-wrap gap-1">
                    <Pill tone="warn">Synthetic</Pill>
                    <Pill tone="neutral">This browser only</Pill>
                  </div>
                  <p className="mt-2 text-[13px] leading-5 text-haze">
                    A signed-in session does not mean unlimited access. No email
                    or credential is shown or stored.
                  </p>
                </Panel>

                <Panel className="p-4">
                  <div className="flex items-center gap-2">
                    <ShieldCheck aria-hidden="true" className="h-4 w-4 text-iris-soft" />
                    <h2 className="text-[15px] font-semibold text-platinum">
                      Plan and access
                    </h2>
                  </div>
                  <p className="mt-2 text-[15px] font-semibold text-platinum">
                    {ent.data.planDisplayName ??
                      (ent.data.planState === "pending"
                        ? "Unknown · confirmation pending"
                        : "Unknown · not verified")}
                  </p>
                  <p className="mt-1 text-[13px] leading-5 text-haze">
                    No approved plan name, price, trial or catalogue is
                    configured, so none is shown. Usage meters are hidden because
                    no reliable meter exists.
                  </p>
                  <div className="mt-3 flex flex-wrap items-start gap-2">
                    <Button
                      id="action-billing"
                      variant="secondary"
                      size="sm"
                      loading={runningFeature === "billing.portal"}
                      onClick={() =>
                        void runAction(
                          "billing.portal",
                          "Manage billing",
                          null,
                          "action-billing"
                        )
                      }
                    >
                      Manage billing
                    </Button>
                    <UnavailableAction
                      id="action-compare-plans"
                      reason="No approved plan catalogue is configured."
                    >
                      Compare plans
                    </UnavailableAction>
                  </div>
                </Panel>
              </div>

              <Panel className="overflow-hidden">
                <div className="flex flex-col gap-3 border-b border-as-line/70 p-4 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h2 className="text-[16px] font-semibold text-platinum">
                      Effective capabilities
                    </h2>
                    <p className="mt-1 text-[13px] leading-5 text-haze">
                      Synthetic server decisions with reason and evaluation time.
                      Each action is re-checked by the server before it runs.
                    </p>
                  </div>
                  <div className="flex flex-col items-start gap-1 sm:items-end">
                    <Button variant="secondary" size="sm" onClick={refresh}>
                      Refresh access
                    </Button>
                    <span className="font-mono text-[12px] text-haze">
                      {ent.data.decisionId} · {ent.data.policyVersion}
                    </span>
                  </div>
                </div>

                <ul className="divide-y divide-as-line/50">
                  {ent.data.entitlements.map((item) => {
                    const decision = DECISION_META[item.decision];
                    const triggerId = `action-${item.feature.replace(/\W/g, "-")}`;
                    return (
                      <li key={item.feature} className="p-4">
                        <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                          <div className="min-w-0">
                            <div className="flex flex-wrap items-center gap-2">
                              <p className="text-[15px] font-semibold text-platinum">
                                {item.label}
                              </p>
                              <Pill tone={decision.tone}>{decision.label}</Pill>
                            </div>
                            <p
                              id={`${triggerId}-reason`}
                              className="mt-1 text-[14px] leading-6 text-haze"
                            >
                              {item.reasonText}
                              {item.reasons.includes("PLAN_REQUIRED")
                                ? " No approved plan options are configured, so none are shown."
                                : ""}
                            </p>
                            <p className="mt-1 font-mono text-[12px] text-haze">
                              {item.reasons.length
                                ? `${item.reasons.join(", ")} · `
                                : ""}
                              last confirmed {when(item.evaluatedAt)}
                            </p>
                          </div>
                          {item.href && item.action ? (
                            <Button
                              id={triggerId}
                              variant="ghost"
                              size="sm"
                              className="shrink-0"
                              loading={runningFeature === item.feature}
                              onClick={() =>
                                void runAction(
                                  item.feature,
                                  item.action ?? item.label,
                                  item.href ?? null,
                                  triggerId
                                )
                              }
                            >
                              {item.action}
                            </Button>
                          ) : (
                            <span className="shrink-0 text-[13px] font-medium text-haze">
                              No action available
                            </span>
                          )}
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </Panel>

              <GuestSaveSelector
                entries={entries}
                savedFlag={savedFlag}
                emphasised={actionId === "save"}
              />
            </>
          )}

          <Panel className="p-4">
            <div className="flex items-center gap-2">
              <Laptop aria-hidden="true" className="h-4 w-4 text-iris-soft" />
              <h2 className="text-[15px] font-semibold text-platinum">
                Session controls
              </h2>
            </div>
            <p className="mt-1.5 text-[13px] leading-5 text-haze">
              Signing out ends the demo session in this browser, clears
              account-scoped caches (alerts, read state, export history and
              account preferences) and removes gated views. Files already
              downloaded stay outside Talvrin. No claim is made about other
              devices.
            </p>
            <div className="mt-3 flex flex-wrap items-start gap-2">
              <Button
                variant="secondary"
                size="sm"
                onClick={onSignOut}
                icon={<LogOut aria-hidden="true" className="h-3.5 w-3.5" />}
              >
                Sign out
              </Button>
              <UnavailableAction
                id="action-switch-account"
                reason="Account switching needs tenant-scoped reauthorization, which is not configured."
              >
                <Lock aria-hidden="true" className="mr-1.5 h-3.5 w-3.5" />
                Switch account
              </UnavailableAction>
            </div>
          </Panel>
        </div>

        <aside aria-label="Access rules" className="flex min-w-0 flex-col gap-4 xl:sticky xl:top-20">
          <Panel className="p-4">
            <h2 className="text-[15px] font-semibold text-platinum">Gate order</h2>
            <ol className="mt-2 space-y-2">
              {[
                "Authenticate if required.",
                "Resolve tenant and account scope.",
                "Check release flag and commercial entitlement.",
                "Check quota where a reliable meter exists.",
                "Check source rights for this exact use.",
                "Serve least-privileged evidence.",
              ].map((item, index) => (
                <li key={item} className="flex gap-2 text-[13px] leading-5 text-haze">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-as-line font-mono text-[11px]">
                    {index + 1}
                  </span>
                  {item}
                </li>
              ))}
            </ol>
            <p className="mt-2 text-[13px] leading-5 text-haze">
              If any check is unknown, access is denied.
            </p>
          </Panel>

          <Panel className="p-4">
            <div className="flex items-center gap-2">
              <ShieldX aria-hidden="true" className="h-4 w-4 text-warn" />
              <h2 className="text-[15px] font-semibold text-platinum">
                Rights deny, not upsell
              </h2>
            </div>
            <p className="mt-1.5 text-[14px] leading-6 text-haze">
              “This source cannot be displayed for the requested use. Your plan
              does not change source permissions.”
            </p>
          </Panel>

          <SyntheticNote />
        </aside>
      </div>
    </PageShell>
  );
}

/* ------------------------------------------------------------------ */
/* Guest-save selector (WF-11 A12, J01, P0 04/05)                       */
/* ------------------------------------------------------------------ */

function GuestSaveSelector({
  entries,
  savedFlag,
  emphasised,
}: {
  entries: SessionEntry[];
  savedFlag: FeatureFlagState;
  emphasised: boolean;
}) {
  // Nothing is selected by default; nothing is imported silently.
  const [selected, setSelected] = useState<string[]>([]);
  const [busy, setBusy] = useState(false);
  const [receipts, setReceipts] = useState<GuestImportReceipt[] | null>(null);
  const [message, setMessage] = useState<string | null>(null);
  const [failed, setFailed] = useState(false);
  const messageRef = useRef<HTMLParagraphElement>(null);
  const intentKey = useRef<string | null>(null);

  if (!entries.length) {
    return (
      <Panel className="p-4">
        <h2 className="text-[15px] font-semibold text-platinum">
          Save guest research
        </h2>
        <p className="mt-1 text-[14px] leading-6 text-haze">
          No guest research is recorded in this browser tab, so there is
          nothing to choose from.
        </p>
      </Panel>
    );
  }

  function toggle(ref: string, checked: boolean) {
    intentKey.current = null;
    setReceipts(null);
    setSelected((current) =>
      checked ? [...current, ref] : current.filter((item) => item !== ref)
    );
  }

  function cancel() {
    intentKey.current = null;
    setSelected([]);
    setReceipts(null);
    setFailed(false);
    setMessage("Nothing was saved. Your research stays in this temporary session.");
  }

  async function save() {
    if (busy || selected.length === 0) return;
    if (!intentKey.current) intentKey.current = newIdempotencyKey();
    setBusy(true);
    setMessage(null);
    setFailed(false);
    try {
      const result = await apiJson<GuestImportResponse>(
        "/api/assistant/access/import-intents",
        {
          method: "POST",
          headers: DEMO_ACCOUNT_HEADERS,
          body: JSON.stringify({
            refs: selected,
            consent: true,
            importIntentId: intentKey.current,
          }),
        }
      );
      const saved = result.receipts.filter((item) => item.outcome === "SAVED").length;
      setReceipts(result.receipts);
      setMessage(
        `${saved} of ${result.receipts.length} selected item${
          result.receipts.length === 1 ? "" : "s"
        } saved. See the receipt for each item below.`
      );
      intentKey.current = null;
      setSelected([]);
    } catch (error) {
      setFailed(true);
      setMessage(
        error instanceof ApiError
          ? `${error.message}${error.requestId ? ` Reference ${error.requestId}.` : ""}`
          : "The save request could not be sent. Nothing was saved."
      );
      window.requestAnimationFrame(() => messageRef.current?.focus());
    } finally {
      setBusy(false);
    }
  }

  const questionFor = (ref: string) =>
    entries.find((entry) => entry.ref === ref)?.question ?? ref;
  const noneSelected = selected.length === 0;

  return (
    <Panel className={clsx("p-4 sm:p-5", emphasised && "border-iris/40")}>
      <h2 className="text-[16px] font-semibold text-platinum">
        Choose guest research to save
      </h2>
      <p className="mt-1 text-[14px] leading-6 text-haze">
        Signing in did not save anything. Select specific items if you want to
        keep them. Each item is checked again for source rights before it is
        saved, and restricted content is not copied.
      </p>
      {savedFlag === "OFF" ? (
        <p className="mt-2 rounded-lg border border-warn/35 bg-warn/[0.06] px-3 py-2 text-[14px] leading-6 text-haze">
          Saved research isn’t available yet. You can still try the selection:
          each item will come back “not saved” with a reason.
        </p>
      ) : null}

      <fieldset className="mt-3">
        <legend className="text-[14px] font-semibold text-platinum">
          Guest items in this tab
        </legend>
        <div className="mt-2 space-y-3">
          {entries.map((entry) => {
            const status = STATUS_META[entry.answerState];
            return (
              <Checkbox
                key={entry.ref}
                id={`save-${entry.ref}`}
                checked={selected.includes(entry.ref)}
                disabled={busy}
                onChange={(checked) => toggle(entry.ref, checked)}
                label={truncate(entry.question, 140)}
                description={`Rights preview: ${status?.label ?? entry.answerState}${
                  entry.answerState === "RESTRICTED"
                    ? " · restricted sources will not be saved"
                    : ""
                }`}
              />
            );
          })}
        </div>
      </fieldset>

      <div className="mt-4 flex flex-wrap items-start gap-2">
        {/* Cancel is the default action (A12). */}
        <Button size="sm" onClick={cancel} disabled={busy}>
          Cancel
        </Button>
        <span className="inline-flex flex-col gap-1">
          <Button
            size="sm"
            variant="secondary"
            loading={busy}
            aria-disabled={noneSelected || undefined}
            aria-describedby={noneSelected ? "save-selected-reason" : undefined}
            className={clsx(noneSelected && "cursor-not-allowed opacity-60")}
            onClick={() => void save()}
          >
            Save {selected.length || ""} selected
          </Button>
          {noneSelected ? (
            <span id="save-selected-reason" className="text-[12px] leading-5 text-haze">
              Select at least one item to save.
            </span>
          ) : null}
        </span>
      </div>

      <p
        ref={messageRef}
        tabIndex={-1}
        role="status"
        aria-live="polite"
        className={clsx(
          "mt-3 text-[14px] leading-6 focus:outline-none",
          failed ? "text-warn" : "text-platinum"
        )}
      >
        {message}
      </p>

      {receipts ? (
        <ul className="mt-2 divide-y divide-as-line/50 rounded-xl border border-as-line/70">
          {receipts.map((receipt) => (
            <li key={receipt.ref} className="p-3">
              <div className="flex flex-wrap items-center gap-2">
                <Pill tone={receipt.outcome === "SAVED" ? "ok" : "neutral"}>
                  {receipt.outcome === "SAVED" ? "Saved" : "Not saved"}
                </Pill>
                <p className="text-[14px] font-medium text-platinum">
                  {truncate(questionFor(receipt.ref), 100)}
                </p>
              </div>
              <p className="mt-1 text-[13px] leading-5 text-haze">
                {receipt.message}
              </p>
              {receipt.code ? (
                <p className="mt-0.5 font-mono text-[12px] text-haze">
                  {receipt.code}
                </p>
              ) : null}
            </li>
          ))}
        </ul>
      ) : null}
    </Panel>
  );
}
