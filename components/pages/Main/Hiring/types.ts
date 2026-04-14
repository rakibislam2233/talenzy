export type HiringTab = "all" | "my-requests" | "hired-me";

export type Talent = {
  name: string;
  username: string;
  role: string;
  category: string;
  country: string;
  availability: "available" | "busy";
  hourlyRate: number;
  verified: boolean;
  rating: number;
  jobs: number | string;
  rate: string;
  bio: string;
  tags: string[];
  image: string;
  followers: string;
};

export type HireRequest = {
  id: string;
  title: string;
  freelancer: string;
  username: string;
  avatar: string;
  status: "IN PROGRESS" | "COMPLETED" | "PENDING";
  progress: number;
  budget: number;
  dueDate: string;
  category: string;
};

export type HiredMeRequest = {
  id: string;
  title: string;
  client: string;
  username: string;
  avatar: string;
  status: "ACTIVE" | "PENDING APPROVAL";
  budget: number;
  startDate: string;
  category: string;
};