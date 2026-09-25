export type ChangeType =
  | "Added"
  | "Changed"
  | "Fixed"
  | "Breaking"
  | "Deprecated"
  | "Security / trust notice"
  | "Documentation-only";

export type DeveloperAction =
  | "No action required"
  | "Review recommended"
  | "Action required"
  | "Migration required";

export type Lifecycle = "Published" | "Corrected" | "Superseded" | "Withdrawn";

export type ChangeRecord = {
  id: string;
  date: string;
  time: string;
  month: string;
  surface: string;
  type: ChangeType;
  action: DeveloperAction;
  lifecycle: Lifecycle;
  title: string;
  summary: string;
  effective: string;
  version?: string;
  supersededBy?: string;
};

/**
 * The seven records in the current registry snapshot. Every field here stands
 * in for a registry-sourced value; nothing is inferred from wording.
 */
export const changes: ChangeRecord[] = [
  {
    id: "CHG-0007",
    date: "18 Sep 2026",
    time: "16:00 UTC",
    month: "September 2026",
    surface: "Authentication",
    type: "Deprecated",
    action: "Migration required",
    lifecycle: "Published",
    title: "[Legacy credential method] is deprecated",
    summary:
      "[Legacy credential method] is planned for retirement. New integrations should use [replacement method]. No sunset date has been announced yet.",
    effective: "Sunset date not yet announced",
  },
  {
    id: "CHG-0006",
    date: "15 Sep 2026",
    time: "14:00 UTC",
    month: "September 2026",
    surface: "Data APIs",
    type: "Added",
    action: "No action required",
    lifecycle: "Published",
    title: "New [dataset] fields in [Data API resource] responses",
    summary:
      "[Data API resource] responses now include [new fields] for [dataset]. Existing fields are unchanged.",
    effective: "Same as published",
    version: "[Data API version]",
  },
  {
    id: "CHG-0005",
    date: "11 Sep 2026",
    time: "10:30 UTC",
    month: "September 2026",
    surface: "SDKs",
    type: "Fixed",
    action: "Review recommended",
    lifecycle: "Published",
    title: "[SDK package] handles [timeout condition] as documented",
    summary:
      "[SDK package] [version] corrects behavior on [timeout condition] so it matches the documented contract. Upgrade to pick up the fix.",
    effective: "Same as published",
    version: "[SDK package] [version]",
  },
  {
    id: "CHG-0004",
    date: "4 Sep 2026",
    time: "15:00 UTC",
    month: "September 2026",
    surface: "API Documentation",
    type: "Breaking",
    action: "Action required",
    lifecycle: "Corrected",
    title: "Pagination on [list endpoint] moves to [cursor parameter]",
    summary:
      "From the effective date, [list endpoint] pages with [cursor parameter] instead of [offset parameter]. Requests using [offset parameter] will return a validation error.",
    effective: "15 Oct 2026, 00:00 UTC",
    version: "[API version]",
  },
  {
    id: "CHG-0003",
    date: "28 Aug 2026",
    time: "12:00 UTC",
    month: "August 2026",
    surface: "Integrations",
    type: "Changed",
    action: "Review recommended",
    lifecycle: "Published",
    title: "[Integration] permission prompt now lists requested scopes",
    summary:
      "When connecting [integration], the permission prompt now lists each requested scope before approval. The scopes themselves are unchanged.",
    effective: "1 Sep 2026, 00:00 UTC",
  },
  {
    id: "CHG-0002",
    date: "20 Aug 2026",
    time: "09:00 UTC",
    month: "August 2026",
    surface: "Cross-surface",
    type: "Security / trust notice",
    action: "Action required",
    lifecycle: "Published",
    title: "Updated guidance on credential rotation",
    summary:
      "Credential rotation guidance has been updated. Review it and rotate any credentials that match the conditions described in the Authentication docs.",
    effective: "Same as published",
  },
  {
    id: "CHG-0001",
    date: "12 Aug 2026",
    time: "11:00 UTC",
    month: "August 2026",
    surface: "API Documentation",
    type: "Changed",
    action: "Review recommended",
    lifecycle: "Superseded",
    title: "Planned change to pagination on [list endpoint]",
    summary:
      "Announced an upcoming pagination change on [list endpoint]. Replaced by CHG-0004, which carries the confirmed timing and action.",
    effective: "See successor",
    version: "[API version]",
    supersededBy: "CHG-0004",
  },
];

export const typeStyles: Record<ChangeType, string> = {
  Added: "bg-green-500/10 text-green-700",
  Changed: "bg-accent-violet/10 text-indigo-600",
  Fixed: "bg-ink/10 text-ink",
  Breaking: "bg-orange-800/10 text-orange-800",
  Deprecated: "bg-accent-amber/20 text-yellow-800",
  "Security / trust notice": "bg-slate-500/20 text-slate-700",
  "Documentation-only": "bg-ink/5 text-slate-600",
};

export const actionStyles: Record<DeveloperAction, string> = {
  "No action required": "border-ink/10 bg-surface text-slate-600",
  "Review recommended": "border-accent-violet bg-white text-indigo-600",
  "Action required": "border-accent-amber bg-orange-300 text-ink",
  "Migration required": "border-orange-800 bg-orange-800 text-white",
};
