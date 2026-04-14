import ProfileView from "@/components/pages/Main/Profile/ProfileView";

export default async function UsernameReviewsPage({
  params,
}: {
  params: Promise<{ username: string }>;
}) {
  const { username } = await params;
  return <ProfileView slug={username} activeTab="reviews" />;
}