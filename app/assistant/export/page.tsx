import ExportExperience from "@/components/assistant/export/ExportExperience";

export const metadata = {
  title: "Export and share",
};

export default async function ExportPage({
  searchParams,
}: {
  searchParams: Promise<{ ref?: string }>;
}) {
  const params = await searchParams;
  return <ExportExperience initialRef={params.ref} />;
}
