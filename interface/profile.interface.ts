interface IProfile {
  id: string;
  name: string;
  username: string;
  avatar: string;
  role: string;
  location: string;
  bio: string;
  followers: string;
  posts: string;
  verified: boolean;
  projects?: boolean;
  label?: string;
  isFollowing: boolean;
  online: boolean;
}
export default IProfile;
