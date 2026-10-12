
import {
  AccessibilityContent,
  AccessibilityCTA,
  AccessibilityHero,
  AccessibilityPosture,
  AccessibilityRelated,
  AccessibilitySummary,
} from "@/components/accessibility";

export default function AccessibilityPage() {
  return (
    <main>
      <AccessibilityHero />
      <AccessibilitySummary />
      <AccessibilityPosture />
      <AccessibilityContent />
      <AccessibilityRelated />
      <AccessibilityCTA />
    </main>
  );
}
