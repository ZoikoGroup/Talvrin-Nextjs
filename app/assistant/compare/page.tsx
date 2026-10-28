import { ArrowLeft, Scale } from "lucide-react";
import { PageIntro, PageShell } from "@/components/assistant/ui/Panel";
import { ButtonLink } from "@/components/assistant/ui/Button";
import { Pill } from "@/components/assistant/ui/Badge";
import ComparisonBuilder from "@/components/assistant/comparison/ComparisonBuilder";

export const metadata = {
  title: "Build a comparison",
};

export default function ComparisonBuilderPage() {
  return (
    <PageShell width="wide" className="pt-8">
      <PageIntro
        eyebrow="Public research · Comparison"
        title="Build a comparison"
        lead="Compare two or three instruments in the same class. Before anything runs, Talvrin resolves each instrument and checks metric applicability, data quality, point-in-time alignment, source rights and the calculation-method version. A blocked item stays blocked."
        meta={
          <div className="flex flex-wrap items-center gap-2">
            <Pill tone="iris">
              <Scale aria-hidden="true" className="h-3 w-3" />
              Arithmetic only
            </Pill>
            <Pill tone="ok">No ranking or score</Pill>
            <Pill>Up to 3 instruments</Pill>
          </div>
        }
        actions={
          <ButtonLink
            href="/assistant"
            variant="secondary"
            size="sm"
            icon={<ArrowLeft aria-hidden="true" className="h-3.5 w-3.5" />}
          >
            Back to research
          </ButtonLink>
        }
      />
      <ComparisonBuilder />
    </PageShell>
  );
}
