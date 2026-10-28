/**
 * CSV serialisation for WF-10 structured exports (AC-10, AC-30, §12 "CSV
 * injection"). This module has no imports so it can be exercised directly by
 * `node --test` (see tests/assistant/csv.test.mjs).
 *
 * Mitigation, following the OWASP WSTG CSV-injection guidance:
 * - every text cell is quoted per RFC 4180 (embedded quotes doubled);
 * - a text cell is prefixed with a single quote when its first significant
 *   character could start a formula: = + - @, including the full-width forms
 *   (U+FF1D, U+FF0B, U+FF0D, U+FF20), or when the raw value starts with a tab,
 *   CR or LF, or when such a trigger follows leading whitespace, control or
 *   zero-width characters;
 * - control characters, tabs and line breaks inside a value are replaced with
 *   a space so a value cannot break out of its cell or row;
 * - only the typed numeric column is written unquoted, and only when it is a
 *   plain decimal literal. Anything else is treated as text.
 *
 * OWASP notes that quote/apostrophe prefixes can be lost when a sheet is
 * saved and reopened. This module therefore does not claim universal CSV
 * safety: the open/save/reopen matrix (AC-30) is still a release-evidence
 * item for named spreadsheet applications.
 */

const FORMULA_TRIGGER = /^[=+\-@\uFF1D\uFF0B\uFF0D\uFF20]/;
const LEADING_IGNORABLE =
  /^[\s\u0000-\u001F\u007F\u00A0\u1680\u180E\u2000-\u200F\u2028\u2029\u202F\u205F\u2060\u3000\uFEFF]+/;
const RAW_CONTROL_START = /^[\t\r\n]/;
const CONTROL_CHARS = /[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g;
const LINE_BREAKS = /[\t\r\n\u2028\u2029]+/g;
const STRICT_DECIMAL = /^-?(?:0|[1-9]\d*)(?:\.\d+)?$/;

/** True when the raw value could be interpreted as a spreadsheet formula. */
export function isFormulaLike(value: string): boolean {
  if (RAW_CONTROL_START.test(value)) return true;
  return FORMULA_TRIGGER.test(value.replace(LEADING_IGNORABLE, ""));
}

/** Neutralises a text value. The result is not yet quoted. */
export function neutralizeCsvText(value: string): string {
  const dangerous = isFormulaLike(value);
  const flattened = value.replace(CONTROL_CHARS, " ").replace(LINE_BREAKS, " ");
  return dangerous ? `'${flattened}` : flattened;
}

/** True for a plain decimal literal such as 4820, -1.5 or 0.25. */
export function isStrictDecimal(value: string): boolean {
  return STRICT_DECIMAL.test(value);
}

export type CsvKind = "text" | "number";

/** Serialises a single cell. Null becomes an empty field. */
export function csvCell(
  value: string | number | null | undefined,
  kind: CsvKind = "text"
): string {
  if (value === null || value === undefined) return "";
  const raw = String(value);
  if (kind === "number" && isStrictDecimal(raw)) return raw;
  return `"${neutralizeCsvText(raw).replace(/"/g, '""')}"`;
}

export interface CsvColumn {
  name: string;
  kind: CsvKind;
}

/**
 * Builds an RFC 4180 document with CRLF line endings and a UTF-8 BOM (so
 * spreadsheet apps detect the encoding). Header names are always text.
 */
export function buildCsvDocument(
  columns: CsvColumn[],
  rows: (string | number | null)[][]
): string {
  const header = columns.map((column) => csvCell(column.name)).join(",");
  const body = rows.map((row) =>
    columns.map((column, index) => csvCell(row[index], column.kind)).join(",")
  );
  return `\uFEFF${[header, ...body].join("\r\n")}\r\n`;
}

/**
 * Converts a displayed figure such as "4,820" or "18.4" into a canonical
 * decimal literal. Returns null when the display value is not a plain number
 * (ranges, words, dashes), so it is never written as a typed value.
 */
export function canonicalDecimal(display: string | null): string | null {
  if (display === null) return null;
  const compact = display.trim().replace(/,(?=\d{3}(?:\D|$))/g, "");
  return isStrictDecimal(compact) ? compact : null;
}
