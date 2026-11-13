import nodemailer from "nodemailer";
import { apiError, json, rateLimit } from "@/lib/assistant/http";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const PATHS: Record<string, string> = {
  "self-directed": "Self-Directed Investor",
  professional: "Investment Professional",
  other: "Other",
  "research-team": "Research Team",
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function field(body: Record<string, unknown>, key: string, max: number): string {
  const value = body[key];
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function newReference(): string {
  const stamp = new Date().toISOString().slice(0, 10).replace(/-/g, "");
  const rand = crypto.randomUUID().replace(/-/g, "").slice(0, 6).toUpperCase();
  return `TAR-${stamp}-${rand}`;
}

/**
 * POST /api/request-access — delivers a request-access form submission to the
 * access inbox over SMTP. Configure with SMTP_HOST, SMTP_PORT, SMTP_USER,
 * SMTP_PASS, ACCESS_REQUEST_TO_EMAIL and (optionally) SMTP_FROM.
 */
export async function POST(request: Request) {
  const limited = rateLimit(request, "request-access", 5);
  if (limited) return limited;

  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, SMTP_FROM, ACCESS_REQUEST_TO_EMAIL } =
    process.env;
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS || !ACCESS_REQUEST_TO_EMAIL) {
    console.error("[request-access] SMTP is not configured");
    return apiError(
      "NOT_CONFIGURED",
      "Access requests can't be received right now. Please try again later.",
      503,
      { retryable: true }
    );
  }

  let body: Record<string, unknown>;
  try {
    const parsed = await request.json();
    if (!parsed || typeof parsed !== "object") throw new Error("invalid body");
    body = parsed as Record<string, unknown>;
  } catch {
    return apiError("INVALID_REQUEST", "The request could not be read.", 400);
  }

  // Honeypot: real users never fill this hidden field.
  if (field(body, "website", 200)) {
    return json({ ok: true, reference: newReference() });
  }

  const pathId = field(body, "path", 40);
  const name = field(body, "name", 200);
  const email = field(body, "email", 254);
  const organization = field(body, "organization", 200);
  const country = field(body, "country", 120);
  const use = field(body, "use", 2000);
  const privacy = body.privacy === true;
  const updates = body.updates === true;

  if (!PATHS[pathId]) return apiError("INVALID_PATH", "Choose an access path.");
  if (!name) return apiError("NAME_REQUIRED", "Enter your name.");
  if (!EMAIL_RE.test(email)) return apiError("EMAIL_INVALID", "Enter a valid email address.");
  if (pathId === "research-team" && !organization) {
    return apiError("ORGANIZATION_REQUIRED", "Enter your organization.");
  }
  if (!privacy) {
    return apiError("PRIVACY_REQUIRED", "Confirm you have read the Privacy Notice.");
  }

  const reference = newReference();
  const rows: [string, string][] = [
    ["Reference", reference],
    ["Access path", PATHS[pathId]],
    ["Name", name],
    ["Email", email],
    ["Organization", organization || "—"],
    ["Country or region", country || "—"],
    ["Intended use", use || "—"],
    ["Wants updates", updates ? "Yes" : "No"],
    ["Submitted", new Date().toISOString()],
  ];

  const text = rows.map(([label, value]) => `${label}: ${value}`).join("\n");
  const html = `<table cellpadding="6" style="border-collapse:collapse;font-family:sans-serif;font-size:14px">${rows
    .map(
      ([label, value]) =>
        `<tr><td style="font-weight:bold;vertical-align:top">${escapeHtml(label)}</td><td style="white-space:pre-wrap">${escapeHtml(value)}</td></tr>`
    )
    .join("")}</table>`;

  const port = Number(SMTP_PORT) || 587;
  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port,
    secure: port === 465,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });

  try {
    await transporter.sendMail({
      from: SMTP_FROM || SMTP_USER,
      to: ACCESS_REQUEST_TO_EMAIL,
      replyTo: email,
      subject: `Access request ${reference} — ${PATHS[pathId]} — ${name.replace(/[\r\n]+/g, " ")}`,
      text,
      html,
    });
  } catch (error) {
    console.error("[request-access] SMTP send failed", error);
    return apiError(
      "SEND_FAILED",
      "We couldn't send your request. Please try again in a few minutes.",
      502,
      { retryable: true }
    );
  }

  return json({ ok: true, reference });
}
