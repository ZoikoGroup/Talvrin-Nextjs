import PlainTermsSection from "./PlainTermsSection";
import { IMG } from "./shared";

const ITEMS = [
  {
    title: "Reopening & Withdrawal",
    text: "Reopen Cookie Preferences any time from the site footer. Your current effective choices always load here first, and withdrawal is as easy to reach as the original choice.",
  },
  {
    title: "New Vendors or Categories",
    text: "If TALVRIN adds a materially new cookie category or vendor, this page’s version updates and your choices may be re-requested rather than silently carried over.",
  },
  {
    title: "Browser & Device Scope",
    text: "Choices made here apply to this browser on this device only. They are not synced across other browsers, devices or signed-in sessions unless explicitly stated otherwise.",
  },
  {
    title: "Accessibility & Language",
    text: "Every control here works by keyboard, is labeled for screen readers and meets WCAG 2.2 AA contrast. Translated copy ships once Localization approves it.",
  },
  {
    title: "Audit & Diagnostics",
    text: "Saving records only a consent version, timestamp and anonymous reference id as compliance evidence — never personal data or browsing history.",
  },
  {
    title: "Error & Offline Recovery",
    text: "If saving fails — storage blocked, network dropped — nothing here claims success. You can retry safely without losing the choices you’ve already made above.",
  },
];

export default function BehaviourSection() {
  return (
    <PlainTermsSection
      heading="How this preference center behaves, in plain terms."
      items={ITEMS}
      image={{ src: `${IMG}/behaviour-laptop.webp`, alt: "Two colleagues smiling at a laptop screen" }}
    />
  );
}
