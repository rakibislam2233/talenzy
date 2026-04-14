import { redirect } from "next/navigation";

export default async function SentRequestDetailPage({
  params,
}: {
  params: Promise<{ hiringId: string }>;
}) {
  const { hiringId } = await params;
  redirect(`/hiring/my-requests/${hiringId}`);
}
