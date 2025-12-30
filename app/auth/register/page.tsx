import type { Metadata } from "next";
import Register from "@/components/layout/AuthLayout/Register/Register"

export const metadata: Metadata = {
  title: "Register | Talenzy",
  description: "Create a new Talenzy account to connect with creative professionals and showcase your talents.",
  openGraph: {
    title: "Register | Talenzy",
    description: "Create a new Talenzy account to connect with creative professionals and showcase your talents.",
    type: "website",
    url: "https://www.talenzy.com/auth/register",
  },
  twitter: {
    card: "summary",
    title: "Register | Talenzy",
    description: "Create a new Talenzy account to connect with creative professionals and showcase your talents.",
  },
};

export default function RegisterPage() {
  return <Register />
}

