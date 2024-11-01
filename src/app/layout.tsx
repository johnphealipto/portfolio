import type { Metadata } from "next";
import Providers from "./providers";
import { Rubik } from "next/font/google";

import "@/styles/global.scss";
import "@/styles/nav.scss";

export const metadata: Metadata = {
  title: "John Adibe",
  description:
    "Frontend developer specializing in developing quality web and mobile products.",
  icons: {
    icon: "/logo.svg",
  },
  keywords: [
    "frontend",
    "developer",
    "web",
    "mobile",
    "software",
    "developer",
    "react",
    "next.js",
    "Adibe",
    "John Adibe",
    "johnphealipto",
  ],
  robots: {
    index: true,
  },
  openGraph: {
    url: "https://johnadibe.vercel.app/",
    images: ["https://johnadibe.vercel.app/og.png"],
    type: "website",
    siteName: "John Adibe",
    title: "John Adibe",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@johnphealipto",
    site: "@johnphealipto",
    title: "John Adibe",
    description:
      "Frontend developer specializing in developing quality web and mobile products.",
    images: ["https://johnadibe.vercel.app/og.png"],
  },
};

const RUBIK_FONT = Rubik({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={RUBIK_FONT.className} suppressHydrationWarning>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
