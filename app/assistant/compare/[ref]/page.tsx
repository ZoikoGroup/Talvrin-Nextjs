import ComparisonExperience from "@/components/assistant/comparison/ComparisonExperience";

export const metadata = {
  title: "Comparison result",
};

export default async function ComparisonResultPage({
  params,
}: {
  params: Promise<{ ref: string }>;
}) {
  const { ref } = await params;
  return <ComparisonExperience comparisonRef={ref} />;
}
