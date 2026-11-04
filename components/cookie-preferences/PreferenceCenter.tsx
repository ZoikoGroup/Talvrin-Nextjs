"use client";

import { useEffect, useId, useState } from "react";
import Image from "next/image";
import clsx from "clsx";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { IMG, SectionEyebrow, SectionHeading } from "./shared";
import {
  CONSENT_VERSION,
  DEFAULT_CHOICES,
  readSavedConsent,
  writeConsent,
  type ConsentChoices,
  type SavedConsent,
} from "./consent";

type SaveError = { message: string } | null;

export default function PreferenceCenter() {
  const [loaded, setLoaded] = useState(false);
  const [saved, setSaved] = useState<SavedConsent | null>(null);
  const [choices, setChoices] = useState<ConsentChoices>(DEFAULT_CHOICES);
  const [error, setError] = useState<SaveError>(null);

  // Load the current effective choices from this browser after mount.
  useEffect(() => {
    const existing = readSavedConsent();
    /* eslint-disable react-hooks/set-state-in-effect -- one-time sync from browser storage */
    if (existing) {
      setSaved(existing);
      setChoices({ analytics: existing.analytics, functionality: existing.functionality });
    }
    setLoaded(true);
    /* eslint-enable react-hooks/set-state-in-effect */
  }, []);

  const dirty =
    loaded &&
    (saved
      ? saved.analytics !== choices.analytics || saved.functionality !== choices.functionality
      : choices.analytics || choices.functionality);

  function save(next: ConsentChoices) {
    setChoices(next);
    try {
      const record = writeConsent(next, saved?.reference);
      setSaved(record);
      setError(null);
    } catch {
      setError({
        message:
          "Your browser blocked storage or the save could not be confirmed, so nothing has changed yet. Your selections above are kept — you can retry safely.",
      });
    }
  }

  return (
    <>
      <StatusBanner loaded={loaded} saved={saved} dirty={dirty} error={error} />

      <section id="cookie-choices" className="bg-surface py-16 sm:py-[72px]">
        <Container className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,900px)_minmax(0,320px)] lg:justify-center lg:gap-4">
          <div className="flex flex-col gap-3">
            <Reveal>
              <SectionEyebrow>Your choices</SectionEyebrow>
              <SectionHeading className="max-w-[820px]">
                Four categories. Each one is labeled, switchable by keyboard and never pre-decided for
                you.
              </SectionHeading>
              <p className="mt-3 max-w-[680px] text-base leading-6 text-muted">
                Unknown never silently means accepted — optional categories start off until you choose
                otherwise, and essential technologies stay visibly locked rather than disguised as a
                real choice.
              </p>
            </Reveal>

            <div className="mt-4 flex flex-col gap-3">
              <CategoryCard
                title="Strictly Necessary"
                description="Keeps TALVRIN working, secure and accessible — for example maintaining your session and remembering this preference choice. The service cannot run without these, so this category can’t be switched off."
                status={{ label: "Always active", className: "text-ink" }}
                checked
                locked
              />
              <CategoryCard
                title="Analytics"
                description="Helps TALVRIN understand which pages and workflows are used and where comprehension breaks down, so the product can be improved — privacy-safe measurement, not behavioral surveillance."
                status={
                  choices.analytics
                    ? { label: "On", className: "text-teal-700" }
                    : { label: "Off", className: "text-muted" }
                }
                checked={choices.analytics}
                onToggle={() => setChoices((c) => ({ ...c, analytics: !c.analytics }))}
                delay={0.05}
              />
              <CategoryCard
                title="Preferences & Functionality"
                description="Remembers interface choices, such as layout or display settings, so they don’t reset on every visit. Off by default until you turn it on."
                status={
                  choices.functionality
                    ? { label: "On", className: "text-teal-700" }
                    : { label: "Off", className: "text-muted" }
                }
                checked={choices.functionality}
                onToggle={() => setChoices((c) => ({ ...c, functionality: !c.functionality }))}
                delay={0.1}
              />
              <CategoryCard
                title="Marketing"
                description="No marketing, advertising or social technology is currently deployed on TALVRIN. This category activates only once an approved vendor exists — nothing is tracked under this label today."
                status={{ label: "Not deployed", className: "text-[#8a5a00]" }}
                checked={false}
                locked
                delay={0.15}
              />

              <Reveal
                delay={0.2}
                className="rounded-xl border border-accent-amber/25 bg-accent-amber/10 px-5 pb-5 pt-6"
              >
                <p className="text-xs font-bold uppercase tracking-wide text-[#8a5a00]">
                  Vendor disclosures
                </p>
                <p className="mt-2 text-sm leading-6 text-[#5c3d00]">
                  No approved third-party vendor inventory has been published for Cookie Preferences
                  yet. Once a vendor-level register is approved, each provider will be listed here by
                  name, purpose and category — none is listed by assumption today.
                </p>
              </Reveal>
            </div>
          </div>

          <Reveal
            delay={0.15}
            className="relative hidden aspect-[320/577] w-full overflow-hidden rounded-2xl bg-white lg:mt-[210px] lg:block lg:self-start"
          >
            <Image
              src={`${IMG}/choices-team-laughing.webp`}
              alt="A team laughing together around laptops in a bright workspace"
              fill
              sizes="320px"
              className="object-cover"
            />
          </Reveal>
        </Container>
      </section>

      <section aria-label="Save cookie choices" className="bg-ink py-14">
        <Container className="flex justify-center">
          <div className="flex w-full max-w-[915px] flex-col gap-3.5 sm:flex-row sm:flex-wrap sm:items-center">
            <button
              type="button"
              onClick={() => save(DEFAULT_CHOICES)}
              className="rounded-lg border border-surface/30 px-5 py-3.5 text-base font-semibold text-surface transition-colors hover:bg-surface/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-surface"
            >
              Reject Optional Cookies
            </button>
            <button
              type="button"
              onClick={() => save({ analytics: true, functionality: true })}
              className="rounded-lg border border-surface/30 px-5 py-3.5 text-base font-semibold text-surface transition-colors hover:bg-surface/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-surface"
            >
              Accept Optional Cookies
            </button>
            <button
              type="button"
              onClick={() => save(choices)}
              className="rounded-lg bg-surface px-6 py-3.5 text-base font-bold text-ink transition-colors hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-surface"
            >
              Save My Choices
            </button>
          </div>
        </Container>
      </section>
    </>
  );
}

function summary(record: SavedConsent) {
  return `Analytics ${record.analytics ? "on" : "off"}, Functionality ${
    record.functionality ? "on" : "off"
  }, Marketing not deployed.`;
}

function StatusBanner({
  loaded,
  saved,
  dirty,
  error,
}: {
  loaded: boolean;
  saved: SavedConsent | null;
  dirty: boolean;
  error: SaveError;
}) {
  let pill: { label: string; className: string };
  let text: string;

  if (!loaded) {
    pill = { label: "Checking this browser", className: "bg-ink/5 text-muted" };
    text = "Loading your current effective choices…";
  } else if (error) {
    pill = { label: "Not saved", className: "bg-red-700/10 text-red-700" };
    text = error.message;
  } else if (saved) {
    const when = new Date(saved.savedAt).toLocaleString();
    pill = dirty
      ? { label: "Unsaved changes", className: "bg-accent-amber/10 text-[#8a5a00]" }
      : { label: "Saved in this browser", className: "bg-teal-700/10 text-teal-700" };
    text = `Last saved ${when} · reference ${saved.reference} · v${saved.version}. ${summary(saved)}${
      dirty ? " Your changes below aren’t saved yet." : ""
    }`;
  } else {
    pill = dirty
      ? { label: "Unsaved changes", className: "bg-accent-amber/10 text-[#8a5a00]" }
      : { label: "No choice saved", className: "bg-accent-amber/10 text-[#8a5a00]" };
    text = `No choice has been saved in this browser for v${CONSENT_VERSION}. Optional categories stay off until you save a choice.`;
  }

  return (
    <section className="border-b border-ink/10 bg-white py-14">
      <Container className="flex justify-center">
        <div
          role="status"
          aria-live="polite"
          className="flex w-full max-w-[915px] flex-col items-start gap-3 rounded-2xl border border-ink/10 bg-surface px-6 py-5 sm:flex-row sm:gap-4"
        >
          <span
            className={clsx(
              "shrink-0 whitespace-nowrap rounded-full px-3 py-1.5 text-xs font-bold uppercase tracking-wide",
              pill.className
            )}
          >
            {pill.label}
          </span>
          <p className="flex-1 text-base leading-6 text-ink-soft">{text}</p>
        </div>
      </Container>
    </section>
  );
}

function CategoryCard({
  title,
  description,
  status,
  checked,
  locked = false,
  onToggle,
  delay = 0,
}: {
  title: string;
  description: string;
  status: { label: string; className: string };
  checked: boolean;
  locked?: boolean;
  onToggle?: () => void;
  delay?: number;
}) {
  const id = useId();
  const titleId = `${id}-title`;
  const descId = `${id}-desc`;
  const statusId = `${id}-status`;

  return (
    <Reveal delay={delay} className="rounded-2xl border border-ink/10 bg-white px-6 pb-6 pt-5">
      <h3 id={titleId} className="text-base font-bold text-ink">
        {title}
      </h3>
      <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between sm:gap-10">
        <p id={descId} className="max-w-[580px] text-sm leading-6 text-muted">
          {description}
        </p>
        <div className="flex shrink-0 items-center gap-3">
          <span id={statusId} className={clsx("text-xs font-bold uppercase tracking-wide", status.className)}>
            {status.label}
          </span>
          <button
            type="button"
            role="switch"
            aria-checked={checked}
            aria-labelledby={titleId}
            aria-describedby={`${statusId} ${descId}`}
            aria-disabled={locked || undefined}
            onClick={locked ? undefined : onToggle}
            className={clsx(
              "relative inline-flex h-6 w-11 shrink-0 items-center rounded-full p-[3px] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-violet",
              locked ? "cursor-not-allowed bg-ink/20" : checked ? "bg-accent-violet" : "bg-ink/20 hover:bg-ink/30"
            )}
          >
            <span
              aria-hidden="true"
              className={clsx(
                "size-[18px] rounded-full bg-white shadow-[0px_1px_3px_0px_rgba(0,0,0,0.30)] transition-transform",
                checked ? "translate-x-5" : "translate-x-0"
              )}
            />
          </button>
        </div>
      </div>
    </Reveal>
  );
}
