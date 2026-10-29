import type {
  AnswerBlock,
  Claim,
  ExportEligibilityItem,
  ExportJobRecord,
  MetricValue,
  PublishedAnswer,
  SourceRecord,
} from "./types";
import { SOURCES } from "./sources";
import {
  CSV_SCHEMA,
  EXPORT_BUILD_REF,
  MAX_CSV_ROWS,
  contentTypeFor,
  exportFileName,
} from "./exports";
import { buildCsvDocument, canonicalDecimal, type CsvColumn } from "./csv";

/**
 * Server-side renderers for WF-10 packages. Every renderer works from the
 * answer snapshot pinned on the job (never the live answer) and from the
 * per-item eligibility decisions taken at preflight, so the package matches
 * the manifest the user reviewed (§11 report composition, AC-02, AC-19).
 */

const PURPOSE_LABEL: Record<ExportJobRecord["purpose"], string> = {
  PERSONAL_RESEARCH: "Personal research",
  INTERNAL_REVIEW: "Internal review",
  EXTERNAL_DISTRIBUTION: "External distribution",
};

const PLACEHOLDER = "[Withheld by licence]";

interface PackageModel {
  answer: PublishedAnswer;
  record: ExportJobRecord;
  claims: Claim[];
  item: (id: string) => ExportEligibilityItem | undefined;
  sources: { source: SourceRecord; item?: ExportEligibilityItem }[];
  narrative: { text: string; heading: boolean }[];
  omittedParagraphs: number;
  figures: { metric: MetricValue; item: ExportEligibilityItem }[];
  tables: {
    block: Extract<AnswerBlock, { kind: "table" }>;
    item: ExportEligibilityItem;
  }[];
  appendix: [string, string][];
  disclosures: string[];
}

function model(record: ExportJobRecord): PackageModel {
  const answer = record.answerSnapshot;
  const byId = new Map(record.items.map((item) => [`${item.kind}:${item.itemId}`, item]));
  const item = (key: string) => byId.get(key);
  const included = new Set(record.includedClaimIds);
  const claims = answer.claims.filter((claim) => included.has(claim.id));

  const narrative: PackageModel["narrative"] = [];
  let omittedParagraphs = 0;
  for (const block of answer.blocks) {
    if (block.kind === "heading") narrative.push({ text: block.text, heading: true });
    if (block.kind === "paragraph") {
      const cited = block.segments
        .filter((segment) => segment.kind === "citation")
        .map((segment) => (segment as { claimId: string }).claimId);
      // A paragraph that rests on an excluded claim is not re-worded; it is
      // omitted and disclosed (§6.1 "cannot be replaced by a polished paragraph").
      if (cited.some((id) => !included.has(id))) {
        omittedParagraphs += 1;
        continue;
      }
      narrative.push({
        heading: false,
        text: block.segments
          .map((segment) =>
            segment.kind === "citation" ? ` [${segment.claimId}]` : segment.text
          )
          .join(""),
      });
    }
  }

  const figures: PackageModel["figures"] = [];
  const tables: PackageModel["tables"] = [];
  answer.blocks.forEach((block, index) => {
    if (block.kind === "metric-grid") {
      for (const metric of block.metrics) {
        const decision = item(`METRIC:${metric.id}`);
        if (decision) figures.push({ metric, item: decision });
      }
    }
    if (block.kind === "table") {
      const decision = item(`TABLE:table-${index}`);
      if (decision) tables.push({ block, item: decision });
    }
  });

  const sources = answer.sources
    .map((id) => ({ source: SOURCES[id], item: item(`SOURCE:${id}`) }))
    .filter((entry): entry is { source: SourceRecord; item: ExportEligibilityItem | undefined } =>
      Boolean(entry.source)
    );

  const disclosures = record.omissions.map(
    (entry) =>
      `${entry.kind} ${entry.itemId} — ${entry.permitState}${entry.reasonCode ? ` (${entry.reasonCode})` : ""}: ${entry.reason} Effect: ${entry.affectedOutput}`
  );
  if (omittedParagraphs) {
    disclosures.push(
      `NARRATIVE — ${omittedParagraphs} paragraph${omittedParagraphs === 1 ? "" : "s"} omitted because a cited claim could not be exported.`
    );
  }

  const generatedOn = new Date().toISOString();
  const appendix: [string, string][] = [
    ["Export job ID", record.id],
    ["Manifest hash (SHA-256)", record.manifestHash],
    ["Eligibility decision", record.decisionId],
    ["Policy version", record.policyVersion],
    ["Product build", EXPORT_BUILD_REF],
    ["Research reference", record.answerRef],
    ["Answer revision (pinned)", record.answerVersion],
    ["Generated on (UTC)", generatedOn],
    ["Source as of", answer.timeContext.asOf],
    ["Retrieved at", answer.timeContext.retrievedAt],
    ["Answer generated at", answer.timeContext.generatedAt],
    ["Territory (server-resolved)", record.territory],
    ["Declared use", PURPOSE_LABEL[record.purpose]],
    [
      "Calculation versions",
      answer.methods.map((method) => `${method.id}@${method.version}`).join(", ") || "None",
    ],
    [
      "Source versions",
      sources.map(({ source }) => `${source.id}@${source.version}`).join(", ") || "None",
    ],
    ["Claims included", `${claims.length} of ${answer.claims.length}`],
    ["Disclosed omissions", String(disclosures.length)],
    [
      "Output checksum",
      "Computed by the server after rendering and returned with the download (x-talvrin-sha256).",
    ],
  ];

  return {
    answer,
    record,
    claims,
    item,
    sources,
    narrative,
    omittedParagraphs,
    figures,
    tables,
    appendix,
    disclosures,
  };
}

function excerptFor(entry: { source: SourceRecord; item?: ExportEligibilityItem }): string {
  const { source, item } = entry;
  if (!item || (item.permitState !== "ALLOWED" && item.reasonCode !== "EXCERPT_TRUNCATED")) {
    return `Excerpt omitted: ${item?.reason ?? "not permitted in a downloadable report."}`;
  }
  const text = source.excerpt ?? "";
  if (!text) return "No excerpt.";
  if (text.length > source.rights.excerptLimit) {
    return `Excerpt: ${text.slice(0, source.rights.excerptLimit)}… [truncated to the permitted ${source.rights.excerptLimit} characters]`;
  }
  return `Excerpt: ${text}`;
}

function figureText(entry: { metric: MetricValue; item: ExportEligibilityItem }): string {
  const { metric, item } = entry;
  if (item.permitState === "UNAVAILABLE") return `${metric.label}: ${PLACEHOLDER}`;
  if (item.permitState === "UNRESOLVED" || item.permitState === "REVOKED") {
    return `${metric.label}: [Removed — ${item.reasonCode ?? "not exportable"}]`;
  }
  const label =
    item.reasonCode === "VALUE_STALE"
      ? " [STALE]"
      : item.reasonCode === "VALUE_CONTESTED"
        ? " [CONTESTED — not a verified value]"
        : "";
  return `${metric.label}: ${metric.value ?? "—"}${metric.unit ? ` ${metric.unit}` : ""}${metric.asOf ? ` · as of ${metric.asOf}` : ""}${metric.claimId ? ` · claim ${metric.claimId}` : ""}${label}`;
}

function tableCellText(cell: { text: string | null; status: string }): string {
  if (cell.status === "WITHHELD") return PLACEHOLDER;
  return cell.text ?? "—";
}

/** Normalises a table block so the header row and every body row align. */
function tableShape(block: Extract<AnswerBlock, { kind: "table" }>) {
  const width = Math.max(
    block.columns.length,
    ...block.rows.map((row) => row.cells.length + 1)
  );
  const columns = [...block.columns];
  while (columns.length < width) columns.push(columns.length ? "Detail" : "Item");
  const rows = block.rows.map((row) => {
    const cells = [row.header, ...row.cells.map(tableCellText)];
    while (cells.length < width) cells.push("");
    return cells;
  });
  return { columns, rows };
}

function claimLine(claim: Claim): string {
  const sources = claim.sourceIds.map((id) => SOURCES[id]?.shortTitle ?? id).join("; ");
  return `${claim.id} · ${claim.verification} · ${claim.text}\nSources: ${sources}`;
}

/* ------------------------------------------------------------------ */
/* PDF                                                                  */
/* ------------------------------------------------------------------ */

function pdfSafe(value: string): string {
  return value
    .replace(/Σ/g, "SUM")
    .replace(/ᵗ/g, "^t")
    .replace(/ⁿ/g, "^n")
    .replace(/÷/g, "/")
    .replace(/[−–—]/g, "-")
    .replace(/[’‘]/g, "'")
    .replace(/[“”]/g, '"')
    .replace(/…/g, "...")
    .replace(/≥/g, ">=")
    .replace(/≤/g, "<=")
    .replace(/→/g, "->")
    .replace(/[^\x09\x0A\x0D\x20-\x7E\xA0-\xFF]/g, "?");
}

/**
 * pdf-lib cannot write a tagged structure tree (StructTreeRoot / marked
 * content), so the PDF is NOT a tagged PDF. It does carry document
 * metadata, a language, a document-title display preference, a logical
 * heading order and a bookmark outline for every section. This limitation
 * is disclosed in the UI and on the integration dashboard (AC-33).
 */
async function buildPdf(pkg: PackageModel): Promise<Uint8Array> {
  const { PDFDocument, PDFHexString, PDFName, StandardFonts, rgb } = await import("pdf-lib");
  const { answer, record } = pkg;
  const doc = await PDFDocument.create();
  const title = `Talvrin citation package · ${answer.answerVersion}`;
  doc.setTitle(pdfSafe(title), { showInWindowTitleBar: true });
  doc.setAuthor("Talvrin Research Assistant (demonstration)");
  doc.setSubject("Synthetic citation package - not a live research record");
  doc.setKeywords([record.id, record.answerVersion, record.manifestHash.slice(0, 16)]);
  doc.setCreator("Talvrin public research assistant");
  doc.setProducer(`Talvrin ${EXPORT_BUILD_REF}`);
  doc.setLanguage("en-US");
  doc.setCreationDate(new Date());

  const regular = await doc.embedFont(StandardFonts.Helvetica);
  const bold = await doc.embedFont(StandardFonts.HelveticaBold);
  const width = 595.28;
  const height = 841.89;
  const margin = 52;
  const maxWidth = width - margin * 2;
  const outline: { title: string; page: ReturnType<typeof doc.addPage>; y: number }[] = [];

  let page = doc.addPage([width, height]);
  let y = height - margin;

  const ensure = (space: number) => {
    if (y < margin + 46 + space) {
      page = doc.addPage([width, height]);
      y = height - margin;
    }
  };

  const draw = (
    text: string,
    options: {
      size?: number;
      font?: typeof regular;
      color?: [number, number, number];
      gap?: number;
    } = {}
  ) => {
    const size = options.size ?? 10;
    const font = options.font ?? regular;
    const color = options.color ?? [0.12, 0.15, 0.2];
    for (const paragraph of pdfSafe(text).split(/\n/)) {
      const words = paragraph.split(/\s+/).filter(Boolean);
      let line = "";
      const flush = () => {
        if (!line) return;
        ensure(0);
        page.drawText(line, { x: margin, y, size, font, color: rgb(...color) });
        y -= size + 4.5;
        line = "";
      };
      if (!words.length) {
        y -= 5;
        continue;
      }
      for (const word of words) {
        const candidate = line ? `${line} ${word}` : word;
        if (font.widthOfTextAtSize(candidate, size) > maxWidth && line) {
          flush();
          line = word;
        } else {
          line = candidate;
        }
      }
      flush();
    }
    y -= options.gap ?? 4;
  };

  const heading = (text: string) => {
    ensure(40);
    y -= 6;
    outline.push({ title: text, page, y: y + 16 });
    draw(text, { size: 13, font: bold, gap: 4 });
  };

  // 01 Cover.
  draw("SYNTHETIC DEMONSTRATION - NOT A RESEARCH RECORD", {
    size: 9,
    font: bold,
    color: [0.7, 0.2, 0.2],
    gap: 10,
  });
  outline.push({ title: "Cover", page, y: y + 20 });
  draw("Talvrin citation package", { size: 22, font: bold, gap: 6 });
  draw(answer.headline, { size: 13, font: bold, gap: 8 });
  draw(
    [
      `Research ID ${record.answerRef} · revision ${record.answerVersion}`,
      `Created ${new Date().toISOString()} (UTC) · Source as of ${answer.timeContext.asOf} · Published ${answer.timeContext.publishedAt ?? "not stated"} · Retrieved ${answer.timeContext.retrievedAt}`,
      `Purpose: ${PURPOSE_LABEL[record.purpose]} · Format ${record.format} · ${record.partial ? "PARTIAL package - see disclosures" : "Complete for the permitted scope"}`,
    ].join("\n"),
    { size: 10, color: [0.35, 0.38, 0.45], gap: 12 }
  );

  // 02 Executive research summary.
  heading("1. Research summary");
  draw(answer.summary, { gap: 6 });
  draw(`Answer state: ${answer.status} (${answer.statusCode})`, { size: 9.5, gap: 8 });
  for (const part of pkg.narrative) {
    draw(part.text, part.heading ? { font: bold, size: 11, gap: 2 } : { gap: 6 });
  }

  // 03 Claims.
  heading("2. Evidence-backed claims");
  for (const claim of pkg.claims) draw(claimLine(claim), { gap: 6 });

  // 04 Figures and tables.
  heading("3. Figures and tables");
  if (!pkg.figures.length && !pkg.tables.length) {
    draw("No figures or tables in this revision.", { gap: 6 });
  }
  for (const figure of pkg.figures) draw(figureText(figure), { gap: 3 });
  for (const { block, item } of pkg.tables) {
    if (item.permitState === "UNRESOLVED" || item.permitState === "UNAVAILABLE") continue;
    const shape = tableShape(block);
    draw(`Table: ${block.caption}`, { font: bold, size: 10.5, gap: 2 });
    draw(shape.columns.join(" | "), { font: bold, size: 9.5, gap: 2 });
    for (const row of shape.rows) draw(row.join(" | "), { size: 9.5, gap: 2 });
    if (block.note) draw(block.note, { size: 9, color: [0.35, 0.38, 0.45], gap: 6 });
  }

  // 05 Disclosures.
  heading("4. Omissions and disclosures");
  if (pkg.disclosures.length) {
    for (const line of pkg.disclosures) draw(`- ${line}`, { gap: 3 });
  } else {
    draw("No item was omitted, restricted or modified.", { gap: 4 });
  }

  // 06 Methodology.
  heading("5. Methodology and assumptions");
  for (const method of answer.methods) {
    draw(`${method.name} (${method.version})\n${method.summary}`, { gap: 3 });
    for (const limitation of method.limitations) draw(`- ${limitation}`, { size: 9.5, gap: 1 });
    y -= 4;
  }
  if (!answer.methods.length) draw("No calculation method applies.", { gap: 4 });

  // 07 Source register.
  heading("6. Source register");
  for (const entry of pkg.sources) {
    const { source } = entry;
    draw(
      `${source.title}\n${source.publisher} · ${source.tier} · document ${source.documentDate} · version ${source.version} · rights ${source.rights.state}\nLocator: ${source.locator}\n${excerptFor(entry)}`,
      { gap: 6 }
    );
  }

  // 08 Integrity / replay appendix.
  heading("7. Integrity and replay appendix");
  for (const [label, value] of pkg.appendix) draw(`${label}: ${value}`, { size: 9.5, gap: 2 });

  // 09 Rights and limitations.
  heading("8. Rights and limitations");
  for (const item of answer.limitations) draw(`- ${item}`, { gap: 2 });
  draw(answer.policy.adviceBoundary, { gap: 3 });
  draw(answer.policy.modelDisclosure, { gap: 3 });
  draw(
    "Redistribution of source records is not permitted. This package is not individualized advice. Disclosure wording is pending Legal approval.",
    { gap: 3 }
  );
  draw(
    "Accessibility note: this PDF has a bookmark outline and document metadata but is not a tagged PDF. Use the DOCX package for native headings and table header rows.",
    { size: 9.5, color: [0.35, 0.38, 0.45], gap: 3 }
  );

  const pages = doc.getPages();
  pages.forEach((current, index) => {
    current.drawText(
      pdfSafe(
        `Synthetic demonstration · not a live research record · ${record.id} · Page ${index + 1} of ${pages.length}`
      ),
      { x: margin, y: 26, size: 8, font: regular, color: rgb(0.4, 0.43, 0.5) }
    );
  });

  // Bookmark outline (pdf-lib has no high-level API; written as PDF objects).
  const context = doc.context;
  const outlinesRef = context.nextRef();
  const itemRefs = outline.map(() => context.nextRef());
  outline.forEach((entry, index) => {
    const dict: Record<string, unknown> = {
      Title: PDFHexString.fromText(pdfSafe(entry.title)),
      Parent: outlinesRef,
      Dest: [entry.page.ref, PDFName.of("XYZ"), null, entry.y, null],
    };
    if (index > 0) dict.Prev = itemRefs[index - 1];
    if (index < outline.length - 1) dict.Next = itemRefs[index + 1];
    context.assign(itemRefs[index], context.obj(dict as Parameters<typeof context.obj>[0]));
  });
  if (outline.length) {
    context.assign(
      outlinesRef,
      context.obj({
        Type: "Outlines",
        First: itemRefs[0],
        Last: itemRefs[itemRefs.length - 1],
        Count: outline.length,
      })
    );
    doc.catalog.set(PDFName.of("Outlines"), outlinesRef);
    doc.catalog.set(PDFName.of("PageMode"), PDFName.of("UseOutlines"));
  }

  return doc.save();
}

/* ------------------------------------------------------------------ */
/* DOCX                                                                 */
/* ------------------------------------------------------------------ */

async function buildDocx(pkg: PackageModel): Promise<Uint8Array> {
  const {
    Document,
    Packer,
    Paragraph,
    TextRun,
    HeadingLevel,
    Table,
    TableRow,
    TableCell,
    WidthType,
    BorderStyle,
    AlignmentType,
    Footer,
  } = await import("docx");
  const { answer, record } = pkg;

  type Block = InstanceType<typeof Paragraph> | InstanceType<typeof Table>;
  const body: Block[] = [];
  const para = (
    text: string,
    options: { bold?: boolean; size?: number; color?: string; spacing?: number } = {}
  ) =>
    new Paragraph({
      spacing: { after: options.spacing ?? 120 },
      children: [
        new TextRun({
          text,
          bold: options.bold,
          size: options.size ?? 21,
          color: options.color,
          font: "Arial",
        }),
      ],
    });
  const h1 = (text: string) => new Paragraph({ text, heading: HeadingLevel.HEADING_1 });
  const bullet = (text: string) =>
    new Paragraph({
      bullet: { level: 0 },
      children: [new TextRun({ text, size: 21, font: "Arial" })],
    });
  const borders = {
    top: { style: BorderStyle.SINGLE, size: 2, color: "D5DAE3" },
    bottom: { style: BorderStyle.SINGLE, size: 2, color: "D5DAE3" },
    left: { style: BorderStyle.SINGLE, size: 2, color: "D5DAE3" },
    right: { style: BorderStyle.SINGLE, size: 2, color: "D5DAE3" },
    insideHorizontal: { style: BorderStyle.SINGLE, size: 1, color: "E6E9EF" },
    insideVertical: { style: BorderStyle.SINGLE, size: 1, color: "E6E9EF" },
  };
  const table = (columns: string[], rows: string[][]) =>
    new Table({
      width: { size: 100, type: WidthType.PERCENTAGE },
      borders,
      rows: [
        new TableRow({
          tableHeader: true,
          children: columns.map(
            (text) =>
              new TableCell({
                shading: { fill: "EEF1F6" },
                children: [para(text, { bold: true, size: 18 })],
              })
          ),
        }),
        ...rows.map(
          (row) =>
            new TableRow({
              cantSplit: true,
              children: row.map(
                (text) => new TableCell({ children: [para(text, { size: 18 })] })
              ),
            })
        ),
      ],
    });

  // 01 Cover.
  body.push(
    para("SYNTHETIC DEMONSTRATION — NOT A RESEARCH RECORD", {
      bold: true,
      size: 18,
      color: "B03A3A",
    }),
    new Paragraph({ text: "Talvrin citation package", heading: HeadingLevel.TITLE }),
    para(answer.headline, { bold: true, size: 26, spacing: 160 }),
    para(
      `Research ID ${record.answerRef} · revision ${record.answerVersion} · created ${new Date().toISOString()} (UTC)`,
      { color: "5A6170", size: 19, spacing: 40 }
    ),
    para(
      `Source as of ${answer.timeContext.asOf} · published ${answer.timeContext.publishedAt ?? "not stated"} · retrieved ${answer.timeContext.retrievedAt}`,
      { color: "5A6170", size: 19, spacing: 40 }
    ),
    para(
      `Purpose: ${PURPOSE_LABEL[record.purpose]} · ${record.partial ? "PARTIAL package — see disclosures" : "Complete for the permitted scope"}`,
      { color: "5A6170", size: 19, spacing: 160 }
    ),
    para(
      "Editable copy: changes made after export are not authenticated by Talvrin. Use the integrity appendix to compare against the original manifest.",
      { size: 18, color: "8A5A00", spacing: 200 }
    )
  );

  // 02 Summary.
  body.push(h1("1. Research summary"), para(answer.summary));
  body.push(para(`Answer state: ${answer.status} (${answer.statusCode})`, { size: 19 }));
  for (const part of pkg.narrative) {
    body.push(
      part.heading
        ? new Paragraph({ text: part.text, heading: HeadingLevel.HEADING_2 })
        : para(part.text)
    );
  }

  // 03 Claims.
  body.push(h1("2. Evidence-backed claims"));
  if (pkg.claims.length) {
    body.push(
      table(
        ["Claim", "Verification", "Statement", "Sources"],
        pkg.claims.map((claim) => [
          claim.id,
          claim.verification,
          claim.text,
          claim.sourceIds.map((id) => SOURCES[id]?.shortTitle ?? id).join("; "),
        ])
      ),
      para("")
    );
  }

  // 04 Figures and tables.
  body.push(h1("3. Figures and tables"));
  if (pkg.figures.length) {
    body.push(
      table(
        ["Metric", "Value", "Unit", "As of", "Claim", "Status"],
        pkg.figures.map(({ metric, item }) => [
          metric.label,
          item.permitState === "UNAVAILABLE"
            ? PLACEHOLDER
            : item.permitState === "UNRESOLVED" || item.permitState === "REVOKED"
              ? "[Removed]"
              : metric.value ?? "—",
          metric.unit ?? "",
          metric.asOf ?? answer.timeContext.asOf,
          metric.claimId ?? "",
          item.permitState === "ALLOWED" ? "Included" : `${item.permitState} · ${item.reasonCode ?? ""}`,
        ])
      ),
      para("")
    );
  }
  for (const { block, item } of pkg.tables) {
    if (item.permitState === "UNRESOLVED" || item.permitState === "UNAVAILABLE") continue;
    body.push(
      new Paragraph({ text: block.caption, heading: HeadingLevel.HEADING_2 }),
      table(tableShape(block).columns, tableShape(block).rows)
    );
    if (block.note) body.push(para(block.note, { size: 18, color: "5A6170" }));
  }
  if (!pkg.figures.length && !pkg.tables.length) {
    body.push(para("No figures or tables in this revision."));
  }

  // 05 Disclosures.
  body.push(h1("4. Omissions and disclosures"));
  if (pkg.disclosures.length) body.push(...pkg.disclosures.map(bullet));
  else body.push(para("No item was omitted, restricted or modified."));

  // 06 Methodology.
  body.push(h1("5. Methodology and assumptions"));
  for (const method of answer.methods) {
    body.push(
      para(`${method.name} (${method.version})`, { bold: true, spacing: 40 }),
      para(method.summary, { spacing: 60 }),
      ...method.limitations.map(bullet)
    );
  }
  if (!answer.methods.length) body.push(para("No calculation method applies."));

  // 07 Sources.
  body.push(h1("6. Source register"));
  for (const entry of pkg.sources) {
    const { source } = entry;
    body.push(
      para(source.title, { bold: true, spacing: 40 }),
      para(
        `${source.publisher} · ${source.tier} · document ${source.documentDate} · version ${source.version} · rights ${source.rights.state}`,
        { size: 18, color: "5A6170", spacing: 40 }
      ),
      para(`Locator: ${source.locator}`, { size: 18, spacing: 40 }),
      para(excerptFor(entry), { size: 18, spacing: 140 })
    );
  }

  // 08 Appendix.
  body.push(h1("7. Integrity and replay appendix"));
  body.push(table(["Field", "Value"], pkg.appendix.map(([k, v]) => [k, v])), para(""));

  // 09 Rights.
  body.push(
    h1("8. Rights and limitations"),
    ...answer.limitations.map(bullet),
    para(answer.policy.adviceBoundary),
    para(answer.policy.modelDisclosure),
    para(
      "Redistribution of source records is not permitted. This package is not individualized advice. Disclosure wording is pending Legal approval.",
      { size: 18, color: "B03A3A", spacing: 160 }
    )
  );

  const doc = new Document({
    creator: "Talvrin public research assistant",
    title: `Talvrin citation package · ${answer.answerVersion}`,
    description: `Synthetic citation package - not a live research record · manifest ${record.manifestHash}`,
    styles: { default: { document: { run: { font: "Arial", size: 21 } } } },
    sections: [
      {
        properties: { page: { margin: { top: 900, right: 900, bottom: 900, left: 900 } } },
        footers: {
          default: new Footer({
            children: [
              new Paragraph({
                alignment: AlignmentType.CENTER,
                children: [
                  new TextRun({
                    text: `Synthetic demonstration · not a live research record · ${record.id}`,
                    size: 16,
                    color: "5A6170",
                    font: "Arial",
                  }),
                ],
              }),
            ],
          }),
        },
        children: body,
      },
    ],
  });

  const buffer = await Packer.toBuffer(doc);
  return new Uint8Array(buffer);
}

/* ------------------------------------------------------------------ */
/* CSV — typed fact table only (AC-10)                                  */
/* ------------------------------------------------------------------ */

const CSV_COLUMNS: CsvColumn[] = CSV_SCHEMA.map((column) => ({
  name: column.column,
  kind: column.type === "decimal" ? "number" : "text",
}));

function slug(value: string): string {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 48);
}

export function buildCsvRows(pkg: PackageModel): (string | number | null)[][] {
  const { answer } = pkg;
  const claims = new Map(answer.claims.map((claim) => [claim.id, claim]));
  const rows: (string | number | null)[][] = [];
  for (const { metric, item } of pkg.figures) {
    if (item.permitState !== "ALLOWED" && item.permitState !== "PARTIAL") continue;
    if (item.reasonCode === "VALUE_CONTESTED") continue;
    const value = canonicalDecimal(metric.value);
    const claim = metric.claimId ? claims.get(metric.claimId) : undefined;
    if (value === null || !claim) continue;
    const primary = SOURCES[claim.sourceIds[0]];
    rows.push([
      metric.id,
      primary ? `ent:${slug(primary.publisher)}` : null,
      metric.label,
      metric.asOf ?? answer.timeContext.asOf,
      value,
      metric.unit ?? null,
      claim.sourceIds
        .map((id) => `${id}@${SOURCES[id]?.version ?? "unknown"}`)
        .join(";"),
      `${primary?.publisher ?? "Unknown publisher"} · ${claim.verification}${item.reasonCode === "VALUE_STALE" ? " · stale" : ""}`,
      claim.id,
    ]);
  }
  if (rows.length > MAX_CSV_ROWS) {
    throw new Error("CSV row limit exceeded");
  }
  return rows;
}

/* ------------------------------------------------------------------ */
/* Entry point                                                          */
/* ------------------------------------------------------------------ */

export async function buildExportArtifact(record: ExportJobRecord): Promise<{
  bytes: Uint8Array;
  contentType: string;
  fileName: string;
}> {
  const pkg = model(record);
  const fileName = exportFileName(record);
  const contentType = contentTypeFor(record.format);
  if (record.format === "PDF") {
    return { bytes: await buildPdf(pkg), contentType, fileName };
  }
  if (record.format === "DOCX") {
    return { bytes: await buildDocx(pkg), contentType, fileName };
  }
  const csv = buildCsvDocument(CSV_COLUMNS, buildCsvRows(pkg));
  return { bytes: new TextEncoder().encode(csv), contentType, fileName };
}

/** Exposed for contract tests: the CSV for a job without HTTP. */
export function __csvRowsForTests(record: ExportJobRecord) {
  return buildCsvRows(model(record));
}
