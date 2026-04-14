import NotificationsPageView from "@/components/pages/Main/Notifications/NotificationsPageView";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Notifications | Talenzy",
  description: "Stay updated with your activity on Talenzy - likes, comments, follows, and more.",
  openGraph: {
    title: "Notifications | Talenzy",
    description: "Stay updated with your activity on Talenzy - likes, comments, follows, and more.",
    type: "website",
    url: "https://www.talenzy.com/notifications",
  },
  twitter: {
    card: "summary",
    title: "Notifications | Talenzy",
    description: "Stay updated with your activity on Talenzy - likes, comments, follows, and more.",
  },
};

export default function NotificationsPage() {
  return <NotificationsPageView />;
}