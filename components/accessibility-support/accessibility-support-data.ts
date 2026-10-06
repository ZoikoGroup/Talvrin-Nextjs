export const ROUTES = {
  accountSupport: "/support/account-support",
  helpCenter: "/support/help-center",
  contactSupport: "/support/contact-support",
};

const IMAGE_DIR = "/images/support/accessibility-support";

export const IMG = {
  hero: `${IMAGE_DIR}/hero.webp`,
  blocking: `${IMAGE_DIR}/blocking.webp`,
  report: `${IMAGE_DIR}/report.webp`,
  account: `${IMAGE_DIR}/account.webp`,
  related: `${IMAGE_DIR}/related.webp`,
  faq: `${IMAGE_DIR}/faq.webp`,
};

export const SECTION_IDS = {
  blocking: "whats-blocking-you",
  report: "report-a-barrier",
  account: "account-authentication",
  related: "related-support",
  faq: "faq",
};

export const SUB_NAV = [
  { label: "What's Blocking You", id: SECTION_IDS.blocking },
  { label: "Report a Barrier", id: SECTION_IDS.report },
  { label: "Account & Authentication", id: SECTION_IDS.account },
  { label: "Related Support", id: SECTION_IDS.related },
  { label: "FAQ", id: SECTION_IDS.faq },
];

export const HERO_DATA = {
  eyebrow: "ACCESSIBILITY SUPPORT",
  headlineLines: ["Get help when something", "blocks your access", "to Talvrin."],
  description:
    "If an accessibility barrier is preventing you from using Talvrin, tell us what you were trying to do and what blocked you. You do not need to disclose a disability or medical information to ask for help.",
  warning: {
    strong: "Don't include passwords, one-time codes, recovery codes, API secrets, private keys, or unnecessary medical information.",
    rest: " We will never ask you for them here.",
  },
  primary: { label: "Get accessibility help", href: `#${SECTION_IDS.blocking}` },
  secondary: { label: "Report an accessibility barrier →", href: `#${SECTION_IDS.report}` },
  account: { label: "Blocked by sign-in or account access? Go to Account Support →", href: ROUTES.accountSupport },
};

export type BarrierCategory = { id: string; title: string; description: string };

export const BLOCKING_DATA = {
  eyebrow: "STEP 1",
  title: "What's blocking you?",
  description: 'Pick the closest match — this is for routing only, not a diagnosis. "Other" is always available.',
  categories: [
    { id: "keyboard", title: "Keyboard / focus", description: "Can't reach, identify, or activate a control; keyboard trap." },
    { id: "screen-reader", title: "Screen reader / semantics", description: "Missing or incorrect name, role, state, or heading order." },
    { id: "low-vision", title: "Low vision / zoom / reflow", description: "Clipping, overlap, unreadable scale, or horizontal-scroll dependency." },
    { id: "contrast", title: "Color / contrast", description: "Text or a control can't be distinguished, or state relies on color alone." },
    { id: "motion", title: "Motion / animation", description: "Motion can't be reduced, or it prevents completing a task." },
    { id: "media", title: "Audio / video / media", description: "Missing caption, transcript, audio description, or media control." },
    { id: "forms", title: "Forms / errors / time limits", description: "Labels, validation, timeouts, or error recovery prevent completion." },
    { id: "authentication", title: "Authentication / verification", description: "A sign-in, MFA, recovery step, or cognitive test blocks access." },
    { id: "document", title: "Document / downloadable content", description: "A PDF, document, chart, table, or export isn't usable with assistive technology." },
    { id: "other", title: "Other accessibility barrier", description: "My barrier doesn't match these categories." },
  ] as BarrierCategory[],
  continueLabel: "Continue",
  hint: "Choose what's blocking you above, then Continue to see a tailored next step.",
  nextStep: {
    default: "Next step: describe the barrier in the report form below. A text description is enough — no screenshot, diagnosis, or device details are required.",
    authentication:
      "Next step: you can report this barrier below without signing in, go to Account Support directly, or do both. You don't need to complete an inaccessible sign-in or verification step first.",
  },
};

export const REPORT_DATA = {
  eyebrow: "STEP 2",
  title: "Report an accessibility barrier.",
  description:
    "Reporting is never blocked behind a workaround or a sign-in step. Nothing here substitutes for an approved accessible authentication path.",
  neverLabel: "NEVER INCLUDE",
  never: [
    "Passwords, one-time codes, recovery codes, API keys, or private keys.",
    "Medical records, a diagnosis, or disability documentation — never required.",
    "An attachment or screenshot — optional only. A text description is always enough to submit.",
    "Submitting does not guarantee a response time — no service-level commitment is published yet.",
  ],
  locked: "Choose what's blocking you above to open the report form — this keeps your report routed correctly from the start.",
  form: {
    categoryLabel: "Barrier type",
    changeCategory: "Change",
    taskLabel: "What were you trying to do?",
    taskHint: "Optional. For example, the page or task you were on.",
    barrierLabel: "What blocked you?",
    barrierHint: "Required. Describe what happened in your own words.",
    emailLabel: "Email for follow-up",
    emailHint: "Optional. Leave blank if you don't want a reply.",
    submit: "Submit report",
    errorBarrier: "Describe what blocked you so the report can be routed.",
    errorEmail: "Enter a valid email address, or leave this field blank.",
    notConnected:
      "Report submission isn't connected in this build yet, so nothing has been sent. Your text is still on this page if you want to copy it.",
  },
};

export const ACCOUNT_DATA = {
  eyebrow: "ACCOUNT & AUTHENTICATION",
  titleLines: ["Account Support owns sign-in — not", "this page."],
  paragraphs: [
    "Passwords, MFA, passkeys, SSO, recovery codes, and account state are owned by Account Support's approved identity systems, not by Accessibility Support copy. If a sign-in, verification, or recovery step is itself inaccessible, you don't need to complete it first.",
    "You can report the barrier above, go to Account Support directly, or do both — your accessibility context travels with you either way. Never send a password or one-time code through either support path.",
  ],
  cta: { label: "Go to Account Support →", href: ROUTES.accountSupport },
};

export type RelatedCard = {
  title: string;
  description: string;
  available: boolean;
  href?: string;
};

export const RELATED_DATA = {
  eyebrow: "RELATED SUPPORT",
  title: "Not every issue belongs on this page.",
  description: "Use these destinations when your issue isn't an accessibility barrier.",
  availableLabel: "Available",
  unavailableLabel: "Not Yet Available",
  openLabel: "Open →",
  unavailableNote: "Not yet available",
  cards: [
    { title: "Help Center", description: "Self-service answers to common product and account questions.", available: true, href: ROUTES.helpCenter },
    { title: "Contact Support", description: "General support routing for issues that are not accessibility-specific.", available: true, href: ROUTES.contactSupport },
    { title: "Account Support", description: "Sign-in, recovery, and account-access help.", available: true, href: ROUTES.accountSupport },
    { title: "System Status", description: "Authoritative service-health information for service-wide issues.", available: false },
    { title: "Security Contact", description: "Suspected compromise or a security vulnerability report.", available: false },
    { title: "Report a Problem", description: "Functional product defects that are not accessibility or account issues.", available: false },
  ] as RelatedCard[],
  notice:
    "An accessibility statement or conformance artifact is not yet published for this build. We won't link or imply one until an approved, current source exists.",
};

export const FAQ_DATA = {
  eyebrow: "ANSWERS FIRST",
  titleLines: ["Accessibility Support frequently", "asked questions."],
  items: [
    {
      question: "What does Accessibility Support cover?",
      answer:
        "Barriers that stop you using Talvrin — keyboard and focus, screen readers, zoom and reflow, color and contrast, motion, media, forms and time limits, authentication steps, and documents or downloads. Product defects and account access have their own routes under Related Support.",
    },
    {
      question: "Do I need to disclose a disability or medical information?",
      answer:
        "No. Tell us what you were trying to do and what blocked you. A diagnosis, medical records, or disability documentation are never required.",
    },
    {
      question: "Do I need to name my assistive technology or device?",
      answer:
        "No. You can mention it if you think it will help us reproduce the barrier, but a plain description of what happened is enough.",
    },
    {
      question: "Can I report a sign-in barrier without signing in first?",
      answer:
        "Yes. Reporting is never blocked behind a sign-in step. If a sign-in, verification, or recovery step is itself inaccessible, you don't need to complete it first.",
    },
    {
      question: "Is Talvrin WCAG or ADA compliant?",
      answer:
        "An accessibility statement or conformance artifact is not yet published for this build. We won't claim or imply conformance until an approved, current source exists.",
    },
    {
      question: "Is there a guaranteed response time?",
      answer: "No. Submitting a report doesn't guarantee a response time — no service-level commitment is published yet.",
    },
  ],
};
