/** Journalist situations. In-scope ones become the form's enquiry category; the rest link elsewhere. */
export type Situation = {
  value: string;
  title: string;
  description: string;
  /** Set when the situation belongs to a different Talvrin route. */
  otherRoute?: string;
};

export const situations: Situation[] = [
  {
    value: "fact-check",
    title: "Journalist Fact Check",
    description: "Confirming a claim or figure before publication.",
  },
  {
    value: "editorial-comment",
    title: "Editorial Comment Request",
    description: "Seeking corporate comment for a story in progress.",
  },
  {
    value: "on-record-quote",
    title: "On-Record Quote Request",
    description: "Requesting a citable, attributable quote from Talvrin.",
  },
  {
    value: "media-asset",
    title: "Media Asset Permission",
    description: "Requesting permission to use a Talvrin logo, image, or asset.",
  },
  {
    value: "release-correction",
    title: "Press Release Correction",
    description: "Flagging an error in a prior public statement or release.",
  },
  {
    value: "interview",
    title: "Interview Availability",
    description: "Asking whether a Talvrin spokesperson can speak on a topic.",
  },
  {
    value: "security-media",
    title: "Security Incident Media Query",
    description: "Press questions about a security matter — routed to Security Contact.",
    otherRoute: "/security-contact",
  },
  {
    value: "general",
    title: "General / Non-Media Enquiry",
    description: "Not a press request — routed to Contact Talvrin instead.",
    otherRoute: "/company/contact",
  },
  {
    value: "deadline",
    title: "Deadline-Sensitive Request",
    description: "A time-critical request tied to a publication or broadcast window.",
  },
];
