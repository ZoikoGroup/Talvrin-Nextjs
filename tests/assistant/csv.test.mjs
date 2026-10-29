// CSV injection and RFC 4180 tests for WF-10 AC-10 / AC-30.
// Run with: node --test tests/assistant/csv.test.mjs  (Node 22.6+ strips TS types)
import { test } from "node:test";
import assert from "node:assert/strict";
import {
  buildCsvDocument,
  csvCell,
  isFormulaLike,
  isStrictDecimal,
} from "../../lib/assistant/csv.ts";

test("formula triggers are neutralised with a leading apostrophe", () => {
  for (const value of ["=1+1", "+SUM(A1)", "-2+3", "@cmd", "＝1+1", "＋1", "－1", "＠1"]) {
    assert.equal(isFormulaLike(value), true, value);
    assert.match(csvCell(value), /^"'/, value);
  }
});

test("triggers hidden behind whitespace, control or zero-width characters are caught", () => {
  for (const value of [" =1", "\t=1", " =1", "​=1", "﻿@x", "　+1"]) {
    assert.equal(isFormulaLike(value), true, JSON.stringify(value));
  }
});

test("values starting with tab, CR or LF are treated as dangerous", () => {
  for (const value of ["\tplain", "\rplain", "\nplain"]) {
    assert.equal(isFormulaLike(value), true, JSON.stringify(value));
  }
});

test("line breaks and tabs inside a value cannot break the row", () => {
  const cell = csvCell("a\r\nb\tc d");
  assert.equal(cell.includes("\n"), false);
  assert.equal(cell.includes("\r"), false);
  assert.equal(cell.includes("\t"), false);
});

test("quotes are doubled per RFC 4180", () => {
  assert.equal(csvCell('say "hi"'), '"say ""hi"""');
});

test("only plain decimals are written unquoted in numeric columns", () => {
  assert.equal(csvCell("4820", "number"), "4820");
  assert.equal(csvCell("-1.5", "number"), "-1.5");
  assert.equal(csvCell("=1", "number"), '"\'=1"');
  assert.equal(csvCell("1e9", "number"), '"1e9"');
  assert.equal(isStrictDecimal("01"), false);
});

test("null becomes an empty field, never zero", () => {
  assert.equal(csvCell(null, "number"), "");
  assert.equal(csvCell(undefined), "");
});

test("documents use CRLF line endings and a UTF-8 BOM", () => {
  const doc = buildCsvDocument(
    [
      { name: "metric", kind: "text" },
      { name: "value", kind: "number" },
    ],
    [
      ["Revenue", "4820"],
      ["Withheld", null],
    ]
  );
  assert.equal(doc.charCodeAt(0), 0xfeff);
  assert.equal(doc, '﻿"metric","value"\r\n"Revenue",4820\r\n"Withheld",\r\n');
});
