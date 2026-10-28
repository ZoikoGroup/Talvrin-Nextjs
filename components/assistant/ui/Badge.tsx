import clsx from "clsx";
import type { ReactNode } from "react";
import {
  AlertTriangle,
  CheckCircle2,
  Clock3,
  Info,
  Lock,
  MinusCircle,
  ShieldAlert,
} from "lucide-react";
import type { AnswerStatus } from "@/lib/assistant/types";
import { STATUS_META, TIER_LABEL } from "@/lib/assistant/taxonomy";

type PillTone = "neutral" | "iris" | "ok" | "warn" | "danger" | "info";

const tones: Record<PillTone, string> = {
  neutral: "border-as-line bg-white/[0.04] text-haze",
  iris: "border-iris/35 bg-iris/12 text-iris-soft",
  ok: "border-ok/35 bg-ok/10 text-ok",
  warn: "border-warn/40 bg-warn/10 text-warn",
  danger: "border-danger/40 bg-danger/10 text-danger",
  info: "border-info/35 bg-info/10 text-info",
};

export function Pill({
  children,
  tone = "neutral",
  className,
  dot = false,
}: {
  children: ReactNode;
  tone?: PillTone;
  className?: string;
  dot?: boolean;
}) {
  return (
    <span
      className={clsx(
        "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.08em]",
        tones[tone],
        className
      )}
    >
      {dot ? (
        <span
          aria-hidden="true"
          className="h-1.5 w-1.5 rounded-full bg-current"
        />
      ) : null}
      {children}
    </span>
  );
}

const statusIcon: Record<AnswerStatus, ReactNode> = {
  READY: <CheckCircle2 aria-hidden="true" className="h-4 w-4" />,
  PARTIAL: <MinusCircle aria-hidden="true" className="h-4 w-4" />,
  CONFLICT: <ShieldAlert aria-hidden="true" className="h-4 w-4" />,
  STALE: <Clock3 aria-hidden="true" className="h-4 w-4" />,
  RESTRICTED: <Lock aria-hidden="true" className="h-4 w-4" />,
  UNSUPPORTED: <Info aria-hidden="true" className="h-4 w-4" />,
};

export function StatusBadge({
  status,
  size = "default",
}: {
  status: AnswerStatus;
  size?: "default" | "lg";
}) {
  const meta = STATUS_META[status];
  return (
    <span
      className={clsx(
        "inline-flex items-center gap-2 rounded-full border font-semibold",
        tones[meta.tone],
        size === "lg"
          ? "px-3.5 py-1.5 text-xs tracking-[0.04em]"
          : "px-2.5 py-1 text-[11px] uppercase tracking-[0.08em]"
      )}
    >
      {statusIcon[status]}
      {meta.label}
    </span>
  );
}

export function RightsBadge({ state }: { state: string }) {
  const map: Record<string, { tone: PillTone; label: string }> = {
    FULL: { tone: "ok", label: "Display permitted" },
    METADATA_ONLY: { tone: "danger", label: "Metadata only" },
    EXCERPT_ONLY: { tone: "warn", label: "Excerpt only" },
    LINK_ONLY: { tone: "warn", label: "Link only" },
    DENIED: { tone: "danger", label: "Denied" },
  };
  const item = map[state] ?? { tone: "neutral" as PillTone, label: state };
  return <Pill tone={item.tone}>{item.label}</Pill>;
}

export function TierBadge({ tier }: { tier: string }) {
  return (
    <span
      title={TIER_LABEL[tier] ?? tier}
      className="inline-flex items-center rounded-md border border-as-line bg-midnight/60 px-1.5 py-0.5 font-mono text-[12px] uppercase tracking-widest text-haze"
    >
      {tier}
    </span>
  );
}

export function StateDot({
  tone,
  pulse = false,
}: {
  tone: "ok" | "warn" | "danger" | "info" | "iris";
  pulse?: boolean;
}) {
  const colours = {
    ok: "bg-ok",
    warn: "bg-warn",
    danger: "bg-danger",
    info: "bg-info",
    iris: "bg-iris",
  };
  return (
    <span
      aria-hidden="true"
      className={clsx(
        "inline-block h-2 w-2 rounded-full",
        colours[tone],
        pulse && "as-motion-safe animate-[as-pulse_1.8s_ease-in-out_infinite]"
      )}
    />
  );
}

export function WarningIcon() {
  return <AlertTriangle aria-hidden="true" className="h-4 w-4" />;
}
