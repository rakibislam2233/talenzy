import ProfileView from "@/components/pages/Main/Profile/ProfileView";

export default async function UsernameSavedPage({
  params,
}: {
  params: Promise<{ username: string }>;
}) {
  const { username } = await params;
  return <ProfileView slug={username} activeTab="saved" />;
}