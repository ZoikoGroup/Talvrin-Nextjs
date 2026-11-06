import PlainTermsSection from "../cookie-preferences/PlainTermsSection";
import { IMG } from "./shared";

const ITEMS = [
  {
    title: "Consent Model",
    text: "How choices are offered varies by country and applicable law. The actual model shown here is driven by signed jurisdiction configuration, never inferred from language or IP alone.",
  },
  {
    title: "Retention & Expiry",
    text: "Cookies are either session (cleared when you close your browser) or persistent (kept until they expire or you remove them). Exact durations publish only once a verified scan exists.",
  },
  {
    title: "Data Sharing & Transfer",
    text: "Any cross-border transfer or sharing of personal data tied to these technologies is governed by the Privacy Notice, not invented or summarized differently here.",
  },
  {
    title: "Do-Not-Track & Signals",
    text: "TALVRIN does not currently claim to recognize Do-Not-Track or Global Privacy Control signals. This will only be stated as supported once engineering and legal verify it.",
  },
  {
    title: "Change Register",
    text: "When a materially new technology or vendor is added, this notice’s version updates and reconsent may be requested rather than silently carried over.",
  },
  {
    title: "Browser Controls",
    text: "Your browser lets you block or delete cookies directly. That’s a useful backstop, but it isn’t the same as withdrawing consent here — use Cookie Preferences for that.",
  },
];

export default function PlainTerms() {
  return (
    <PlainTermsSection
      heading="Consent model, retention, transfers and signals — in plain terms."
      items={ITEMS}
      image={{ src: `${IMG}/plain-terms-team.webp`, alt: "A team talking around desks in a bright office" }}
    />
  );
}
