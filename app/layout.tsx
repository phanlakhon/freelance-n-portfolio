import type { Metadata } from "next";
import { Noto_Sans_Thai } from "next/font/google";
import "./globals.css";

const notoSansThai = Noto_Sans_Thai({
  subsets: ["latin", "thai"],
  variable: "--font-noto-sans-thai",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://phanlakhon-dev.vercel.app"),
  title: {
    default: "Frontend Expert • Technical Partner for Modern Web Solutions",
    template: "%s | Your Name",
  },
  description:
    "Senior frontend developer specializing in React, UI design, performance optimization, and API integration. Building premium digital experiences for ambitious projects.",
  keywords: [
    "Frontend Developer Thailand",
    "React Developer",
    "UI Design",
    "Web Development",
    "n8n Automation",
    "API Integration",
    "Performance Optimization",
    "Freelance Developer",
  ],
  authors: [{ name: "Your Name" }],
  creator: "Your Name",
  openGraph: {
    type: "website",
    locale: "th_TH",
    url: "https://phanlakhon-dev.vercel.app",
    siteName: "Your Name • Frontend Expert",
    title: "Frontend Expert • Technical Partner for Modern Web Solutions",
    description:
      "Senior frontend developer specializing in React, UI design, performance optimization, and API integration.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Your Name • Frontend Expert",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Frontend Expert • Technical Partner for Modern Web Solutions",
    description:
      "Senior frontend developer specializing in React, UI design, performance optimization, and API integration.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="th" className={`${notoSansThai.variable}`}>
      <body className="font-sans" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
