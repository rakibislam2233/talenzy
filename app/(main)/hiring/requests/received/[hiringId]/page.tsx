import { redirect } from "next/navigation";

export default async function ReceivedRequestDetailPage({
  params,
}: {
  params: Promise<{ hiringId: string }>;
}) {
  const { hiringId } = await params;
  redirect(`/hiring/hired-me/${hiringId}`);
}
