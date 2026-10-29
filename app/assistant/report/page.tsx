import ReportExperience from "@/components/assistant/support/ReportExperience";
import { helpCapabilities } from "@/lib/assistant/help-data";

export const metadata = {
  title: "Report a research issue",
};

function first(value: string | string[] | undefined): string | undefined {
  const item = Array.isArray(value) ? value[0] : value;
  return item && item.length <= 128 ? item : undefined;
}

export default async function ReportPage({
  searchParams,
}: {
  searchParams: Promise<{
    answerRef?: string | string[];
    comparisonRef?: string | string[];
    claimId?: string | string[];
    sourceId?: string | string[];
    /** Legacy alias for answerRef. */
    ref?: string | string[];
    topic?: string | string[];
  }>;
}) {
  const params = await searchParams;
  const answerRef = first(params.answerRef) ?? first(params.ref);
  const comparisonRef = answerRef ? undefined : first(params.comparisonRef);
  return (
    <ReportExperience
      answerRef={answerRef}
      comparisonRef={comparisonRef}
      claimId={first(params.claimId)}
      sourceId={first(params.sourceId)}
      initialTopic={first(params.topic)}
      initialCapabilities={helpCapabilities()}
    />
  );
}
