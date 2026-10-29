"use client";

import Link from "next/link";
import { ArrowUpRight, CheckCircle2, FlaskConical } from "lucide-react";
import type {
  AnswerBlock,
  Claim,
  PublishedAnswer,
} from "@/lib/assistant/types";
import { Pill } from "@/components/assistant/ui/Badge";
import { Callout } from "@/components/assistant/ui/Misc";
import {
  AnswerTable,
  CitationText,
  MetricGrid,
} from "@/components/assistant/ui/Evidence";

const verificationMeta = {
  SUPPORTED: { tone: "ok" as const, label: "Supported" },
  CONTESTED: { tone: "danger" as const, label: "Contested" },
  UNSUPPORTED: { tone: "danger" as const, label: "Unsupported" },
  PARTIAL: { tone: "warn" as const, label: "Partly supported" },
};

function ClaimList({
  claimIds,
  claims,
  onInspect,
}: {
  claimIds: string[];
  claims: Claim[];
  onInspect: (claimId: string, sourceId?: string) => void;
}) {
  const items = claimIds
    .map((id) => claims.find((claim) => claim.id === id))
    .filter((claim): claim is Claim => Boolean(claim));

  return (
    <ul className="divide-y divide-as-line/60 rounded-xl border border-as-line/80">
      {items.map((claim, index) => {
        const meta = verificationMeta[claim.verification];
        return (
          <li key={claim.id} className="p-3.5">
            <div className="flex items-start gap-3">
              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-as-line bg-midnight/60 font-mono text-[11px] text-haze">
                {index + 1}
              </span>
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <Pill tone={meta.tone}>{meta.label}</Pill>
                  {claim.materiality === "SUPPORTING" ? (
                    <span className="font-mono text-[11px] uppercase tracking-wider text-haze/70">
                      Supporting
                    </span>
                  ) : null}
                </div>
                <p className="mt-1.5 text-[13px] leading-6 text-platinum/90">
                  {claim.text}
                </p>
                {claim.note ? (
                  <p className="mt-1 text-[11px] leading-5 text-haze">
                    {claim.note}
                  </p>
                ) : null}
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {claim.sourceIds.map((sourceId) => (
                    <button
                      key={sourceId}
                      type="button"
                      onClick={() => onInspect(claim.id, sourceId)}
                      className="inline-flex min-h-11 items-center gap-1 rounded-md border border-as-line bg-midnight-soft/60 px-2 font-mono text-[12px] text-haze transition-colors hover:border-iris/50 hover:text-platinum"
                    >
                      {sourceId.replace(/^src-/, "")}
                      <ArrowUpRight aria-hidden="true" className="h-3 w-3" />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

function Block({
  block,
  answer,
  onInspect,
}: {
  block: AnswerBlock;
  answer: PublishedAnswer;
  onInspect: (claimId: string, sourceId?: string) => void;
}) {
  switch (block.kind) {
    case "heading":
      return (
        <h2 className="mt-8 border-b border-as-line/60 pb-2 text-lg font-semibold tracking-tight text-platinum first:mt-0">
          {block.text}
        </h2>
      );
    case "paragraph":
      return (
        <p className="text-[15px] leading-8 text-platinum/90">
          <CitationText
            segments={block.segments}
            claims={answer.claims}
            sourceOrder={answer.sources}
            onInspect={onInspect}
          />
        </p>
      );
    case "metric-grid":
      return (
        <section aria-label={block.title}>
          <p className="mb-2 font-mono text-[12px] uppercase tracking-[0.16em] text-haze">
            {block.title}
          </p>
          <MetricGrid
            metrics={block.metrics}
            claims={answer.claims}
            sourceOrder={answer.sources}
            onInspect={onInspect}
          />
        </section>
      );
    case "table":
      return (
        <AnswerTable
          caption={block.caption}
          columns={block.columns}
          rows={block.rows}
          note={block.note}
          claims={answer.claims}
          sourceOrder={answer.sources}
          onInspect={onInspect}
        />
      );
    case "callout":
      return (
        <Callout
          tone={block.tone}
          title={block.title}
          action={
            block.action ? (
              <Link
                href={block.action.href}
                className="inline-flex min-h-11 items-center gap-1 text-[12px] font-semibold text-platinum underline decoration-platinum/30 underline-offset-4 hover:decoration-platinum"
              >
                {block.action.label}
              </Link>
            ) : undefined
          }
        >
          {block.body}
        </Callout>
      );
    case "evidence-list":
      return (
        <section aria-label={block.title}>
          <div className="mb-2 flex items-center justify-between gap-3">
            <h2 className="text-lg font-semibold tracking-tight text-platinum">
              {block.title}
            </h2>
            <button
              type="button"
              onClick={() => onInspect(block.claimIds[0] ?? "")}
              className="inline-flex min-h-11 items-center gap-1 text-[11px] font-semibold text-iris-soft hover:text-white"
            >
              Open inspector
              <ArrowUpRight aria-hidden="true" className="h-3.5 w-3.5" />
            </button>
          </div>
          <ClaimList
            claimIds={block.claimIds}
            claims={answer.claims}
            onInspect={onInspect}
          />
        </section>
      );
    case "method":
      return (
        <section aria-label={block.title}>
          <h2 className="text-lg font-semibold tracking-tight text-platinum">
            {block.title}
          </h2>
          <div className="mt-2 grid gap-2 sm:grid-cols-2">
            {block.methodIds
              .map((id) => answer.methods.find((method) => method.id === id))
              .filter((method): method is NonNullable<typeof method> => Boolean(method))
              .map((method) => (
                <div
                  key={method.id}
                  className="rounded-xl border border-as-line/80 bg-midnight-soft/40 p-3.5"
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="inline-flex items-center gap-1.5 text-[12px] font-semibold text-platinum">
                      <FlaskConical
                        aria-hidden="true"
                        className="h-3.5 w-3.5 text-iris-soft"
                      />
                      {method.name}
                    </span>
                    <Pill tone="neutral">{method.version}</Pill>
                  </div>
                  <p className="mt-1.5 text-[11px] leading-5 text-haze">
                    {method.summary}
                  </p>
                </div>
              ))}
          </div>
        </section>
      );
    case "limitations":
      return (
        <section aria-label={block.title}>
          <h2 className="text-lg font-semibold tracking-tight text-platinum">
            {block.title}
          </h2>
          <ul className="mt-2 space-y-1.5">
            {block.items.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2 text-[13px] leading-6 text-haze"
              >
                <CheckCircle2
                  aria-hidden="true"
                  className="mt-1 h-3.5 w-3.5 shrink-0 text-haze/60"
                />
                {item}
              </li>
            ))}
          </ul>
        </section>
      );
    default:
      return null;
  }
}

/**
 * Primary content a reader needs first: the figures, tables and any
 * warning. Explanations, claim lists, methods and limits stay one click
 * away in "How this answer was checked" (nothing is removed, WF-07 SET-08).
 */
function isPrimary(block: PublishedAnswer["blocks"][number]): boolean {
  if (block.kind === "metric-grid" || block.kind === "table") return true;
  if (block.kind === "callout") return block.tone === "warn" || block.tone === "danger";
  return false;
}

export default function AnswerRenderer({
  answer,
  onInspect,
  density,
}: {
  answer: PublishedAnswer;
  onInspect: (claimId: string, sourceId?: string) => void;
  density: "concise" | "standard" | "detailed";
}) {
  const size =
    density === "concise"
      ? "text-[14px] leading-7"
      : density === "detailed"
        ? "text-[16px] leading-8"
        : "text-[15px] leading-7";

  let primary = answer.blocks.filter(isPrimary);
  let details = answer.blocks.filter((block) => !isPrimary(block));
  // Answers with no figures (e.g. explanations) lead with their first paragraph.
  if (!primary.length) {
    const first = answer.blocks.find((block) => block.kind === "paragraph" || block.kind === "callout");
    if (first) {
      primary = [first];
      details = answer.blocks.filter((block) => block !== first);
    }
  }
  const openByDefault = density === "detailed";

  return (
    <div className={`${size} flex flex-col gap-4 text-platinum/90`}>
      {primary.map((block, index) => (
        <Block
          key={`primary-${block.kind}-${index}`}
          block={block}
          answer={answer}
          onInspect={onInspect}
        />
      ))}
      {details.length ? (
        <details open={openByDefault} className="group rounded-xl border border-as-line/70 bg-midnight-soft/30">
          <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-2 px-4 py-2.5 text-[14px] font-medium text-platinum [&::-webkit-details-marker]:hidden">
            How this answer was checked
            <span className="text-[12px] text-haze group-open:hidden">
              {answer.claims.length} claims · methods · limits
            </span>
            <span className="hidden text-[12px] text-haze group-open:inline">Hide</span>
          </summary>
          <div className="flex flex-col gap-5 border-t border-as-line/60 px-4 py-4">
            {details.map((block, index) => (
              <Block
                key={`detail-${block.kind}-${index}`}
                block={block}
                answer={answer}
                onInspect={onInspect}
              />
            ))}
          </div>
        </details>
      ) : null}
    </div>
  );
}
