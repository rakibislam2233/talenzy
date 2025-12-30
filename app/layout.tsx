import type { Metadata } from "next";
import { Be_Vietnam_Pro } from "next/font/google";
import "./globals.css";

const beVietnamPro = Be_Vietnam_Pro({
  variable: "--font-display",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Talenzy - Connect with Creative Professionals",
    template: "%s | Talenzy"
  },
  description: "Talenzy is a social media platform designed for creative professionals to showcase their talents, connect with others, and grow their careers.",
  keywords: ["social media", "creative professionals", "talent", "networking", "portfolio", "artists", "musicians", "designers", "actors", "dancers"],
  authors: [{ name: "Talenzy Team" }],
  creator: "Talenzy Team",
  publisher: "Talenzy",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.talenzy.com",
    title: "Talenzy - Connect with Creative Professionals",
    description: "Talenzy is a social media platform designed for creative professionals to showcase their talents, connect with others, and grow their careers.",
    siteName: "Talenzy",
    images: [
      {
        url: "/og-image.jpg", // You'll need to add an og image
        width: 1200,
        height: 630,
        alt: "Talenzy - Connect with Creative Professionals",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Talenzy - Connect with Creative Professionals",
    description: "Talenzy is a social media platform designed for creative professionals to showcase their talents, connect with others, and grow their careers.",
    images: ["/og-image.jpg"], // You'll need to add an og image
    creator: "@talenzy",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: `/site.webmanifest`,
};

import Providers from "@/components/providers/Providers";
import { ToastContainer } from "@/components/ui/ToastContainer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${beVietnamPro.className} antialiased`}>
        <Providers>
          {children}
          <ToastContainer />
        </Providers>
      </body>
    </html>
  );
}
