import ProfileView from "@/components/pages/Main/Profile/ProfileView";
import { CURRENT_USER_SLUG } from "@/components/pages/Main/Profile/mock-data";

export default async function UsernameProfilePage({
  params,
}: {
  params: Promise<{ username: string }>;
}) {
  const { username } = await params;
  return (
    <ProfileView
      slug={username}
      activeTab="posts"
      forceSelf={username.toLowerCase() === CURRENT_USER_SLUG}
    />
  );
}