import { redirect } from "next/navigation";

export default async function LegacyDiscoverProfilePage({
  params,
}: {
  params: Promise<{ username: string }>;
}) {
  const { username } = await params;
  redirect(`/discover/${username}`);
}
