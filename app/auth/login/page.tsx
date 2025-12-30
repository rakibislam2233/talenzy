import type { Metadata } from "next";
import Login from "@/components/layout/AuthLayout/Login/Login"

export const metadata: Metadata = {
  title: "Login | Talenzy",
  description: "Log in to your Talenzy account to connect with creative professionals and showcase your talents.",
  openGraph: {
    title: "Login | Talenzy",
    description: "Log in to your Talenzy account to connect with creative professionals and showcase your talents.",
    type: "website",
    url: "https://www.talenzy.com/auth/login",
  },
  twitter: {
    card: "summary",
    title: "Login | Talenzy",
    description: "Log in to your Talenzy account to connect with creative professionals and showcase your talents.",
  },
};

export default function LoginPage() {
  return <Login />
}

