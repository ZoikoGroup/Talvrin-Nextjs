import type { Metadata } from "next";
import { DemoModeProvider } from "@/components/assistant/shell/DemoModeProvider";
import { AssistantPrefsProvider } from "@/components/assistant/shell/AssistantPrefsProvider";
import AssistantShell from "@/components/assistant/shell/AssistantShell";

export const metadata: Metadata = {
  title: {
    default: "Talvrin Research Assistant",
    template: "%s · Talvrin Research Assistant",
  },
  description:
    "Public research with claim-level evidence, named sources and explicit rights boundaries. Demonstration build; synthetic data only.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function AssistantLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <DemoModeProvider>
      <AssistantPrefsProvider>
        <AssistantShell>{children}</AssistantShell>
      </AssistantPrefsProvider>
    </DemoModeProvider>
  );
}
