"use client";

import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { CornerDownRight, Send } from "lucide-react";
import type {
  ResearchJobView,
  ScopeId,
} from "@/lib/assistant/types";
import {
  ApiError,
  apiJson,
  newIdempotencyKey,
  recordSessionEntry,
} from "@/lib/assistant/client";
import { Button } from "@/components/assistant/ui/Button";
import { FormAlert } from "@/components/assistant/ui/Field";

const MAX_CHARS = 2000;

export default function FollowUpComposer({
  parentRef,
  scopeIds,
  suggestions,
  showSuggestions = true,
}: {
  parentRef: string;
  scopeIds: ScopeId[];
  suggestions: string[];
  /** WF-07 SET-17: follow-up hints are optional; caveats are unaffected. */
  showSuggestions?: boolean;
}) {
  const router = useRouter();
  const [question, setQuestion] = useState("");
  const [pending, setPending] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  // One key per intended submission so a double click cannot create two turns.
  const idempotencyKey = useRef<string>("");

  async function ask(nextQuestion: string, key: string) {
    if (pending !== null) return;
    setError(null);
    const trimmed = nextQuestion.trim();
    if (trimmed.length < 8) {
      setError("Enter at least 8 characters so the follow-up is specific.");
      return;
    }
    if (trimmed.length > MAX_CHARS) {
      setError("Keep the follow-up to 2,000 characters or fewer.");
      return;
    }
    if (!idempotencyKey.current) idempotencyKey.current = newIdempotencyKey();
    setPending(key);
    try {
      const result = await apiJson<{ job: ResearchJobView }>(
        `/api/assistant/research/${encodeURIComponent(parentRef)}/turns`,
        {
          method: "POST",
          headers: { "idempotency-key": idempotencyKey.current },
          body: JSON.stringify({ question: trimmed, scopeIds }),
        }
      );
      recordSessionEntry(result.job);
      router.push(`/assistant/session/${result.job.ref}`);
    } catch (caught) {
      setError(
        caught instanceof ApiError
          ? caught.code === "RATE_LIMITED"
            ? `Too many requests. Try again${caught.retryAfterSeconds ? ` in ${caught.retryAfterSeconds} seconds` : " shortly"}. Your text is kept.`
            : `${caught.message}${caught.requestId ? ` Reference ${caught.requestId}.` : ""}`
          : "The follow-up could not be started. Your text is kept; try again."
      );
      setPending(null);
    }
  }

  return (
    <section
      aria-labelledby="follow-up-heading"
      className="rounded-2xl border border-as-line bg-as-panel/65 p-4 sm:p-5"
    >
      <div className="flex items-center gap-2">
        <CornerDownRight aria-hidden="true" className="h-4 w-4 text-iris-soft" />
        <h2 id="follow-up-heading" className="text-[14px] font-semibold text-platinum">
          Ask a follow-up
        </h2>
      </div>

      {showSuggestions && suggestions.length ? (
        <div className="mt-3 flex flex-col gap-1.5">
          {suggestions.slice(0, 2).map((suggestion) => (
            <button
              key={suggestion}
              type="button"
              disabled={pending !== null}
              onClick={() => void ask(suggestion, suggestion)}
              className="flex min-h-11 items-start gap-2 rounded-lg border border-as-line/70 bg-midnight-soft/40 px-3 py-2 text-left text-[13px] leading-6 text-platinum/85 transition-colors hover:border-iris/50 hover:text-platinum disabled:cursor-not-allowed disabled:opacity-50"
            >
              <CornerDownRight aria-hidden="true" className="mt-1.5 h-3 w-3 shrink-0 text-haze" />
              {pending === suggestion ? "Starting…" : suggestion}
            </button>
          ))}
        </div>
      ) : null}

      <form
        className="mt-3"
        onSubmit={(event) => {
          event.preventDefault();
          void ask(question, "__custom__");
        }}
      >
        <label htmlFor="follow-up-question" className="sr-only">
          Ask a follow-up
        </label>
        <div className="flex flex-col gap-2 sm:flex-row">
          <textarea
            id="follow-up-question"
            value={question}
            rows={2}
            maxLength={MAX_CHARS}
            aria-describedby="follow-up-hint"
            onChange={(event) => setQuestion(event.target.value)}
            onKeyDown={(event) => {
              // WF-02 C12: Enter submits; Shift+Enter adds a new line.
              if (event.key === "Enter" && !event.shiftKey && !event.nativeEvent.isComposing) {
                event.preventDefault();
                void ask(question, "__custom__");
              }
            }}
            placeholder="Ask a related question using the same scopes…"
            className="as-scroll min-h-11 w-full resize-y rounded-xl border border-as-line bg-midnight-soft/80 px-3 py-2.5 text-[14px] leading-6 text-platinum placeholder:text-haze/60 focus:border-iris/70 focus:outline-none focus:ring-2 focus:ring-iris/25"
          />
          <Button
            type="submit"
            size="md"
            loading={pending === "__custom__"}
            disabled={pending !== null || !question.trim()}
            icon={<Send aria-hidden="true" className="h-3.5 w-3.5" />}
            className="shrink-0"
          >
            Ask
          </Button>
        </div>
        <p id="follow-up-hint" className="mt-1 text-[12px] text-haze">
          Enter to send · Shift+Enter for a new line · {question.length}/{MAX_CHARS.toLocaleString("en-US")}
        </p>
      </form>

      {error ? (
        <div className="mt-3">
          <FormAlert title="Follow-up not started">{error}</FormAlert>
        </div>
      ) : null}
    </section>
  );
}
