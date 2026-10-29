export function opaqueId(prefix: string): string {
  const raw =
    typeof crypto !== "undefined" && "randomUUID" in crypto
      ? crypto.randomUUID().replace(/-/g, "")
      : Math.random().toString(36).slice(2) + Date.now().toString(36);
  return `${prefix}_${raw.slice(0, 18)}`;
}

export function formatDate(
  value: string | null | undefined,
  timeZone = "UTC",
  locale = "en-GB"
): string {
  if (!value) return "Not available";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;
  return new Intl.DateTimeFormat(locale, {
    day: "2-digit",
    month: "short",
    year: "numeric",
    timeZone,
  }).format(date);
}

export function formatDateTime(
  value: string | null | undefined,
  timeZone = "UTC",
  locale = "en-GB"
): string {
  if (!value) return "Not available";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;
  return new Intl.DateTimeFormat(locale, {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
    timeZone,
    timeZoneName: "short",
  }).format(date);
}

export function formatClock(value: string, timeZone = "UTC"): string {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;
  return new Intl.DateTimeFormat("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
    timeZone,
  }).format(date);
}

export function relativeTime(value: string, now = Date.now()): string {
  const date = new Date(value).getTime();
  if (Number.isNaN(date)) return value;
  const delta = Math.round((date - now) / 1000);
  const abs = Math.abs(delta);
  const rtf = new Intl.RelativeTimeFormat("en", { numeric: "auto" });
  if (abs < 60) return rtf.format(delta, "second");
  if (abs < 3600) return rtf.format(Math.round(delta / 60), "minute");
  if (abs < 86400) return rtf.format(Math.round(delta / 3600), "hour");
  if (abs < 604800) return rtf.format(Math.round(delta / 86400), "day");
  return formatDate(value);
}

export function formatNumber(
  value: number,
  locale = "en-GB",
  maximumFractionDigits = 1
): string {
  return new Intl.NumberFormat(locale, {
    maximumFractionDigits,
  }).format(value);
}

export function clamp(value: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, value));
}

export function pluralise(count: number, singular: string, plural?: string): string {
  return count === 1 ? singular : (plural ?? `${singular}s`);
}

export function isRecent(iso: string, withinMs: number): boolean {
  return Date.now() - new Date(iso).getTime() <= withinMs;
}

export function truncate(value: string, max: number): string {
  if (value.length <= max) return value;
  return `${value.slice(0, max - 1).trimEnd()}…`;
}

export const GUEST_SESSION_TTL_MS = 2 * 60 * 60 * 1000;
