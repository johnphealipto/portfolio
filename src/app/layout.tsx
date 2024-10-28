import type { Metadata } from "next";
import Providers from "./providers";
import { Rubik } from "next/font/google";

import "@/styles/global.scss";
import "@/styles/nav.scss";

export const metadata: Metadata = {
  title: "John Adibe",
  description:
    "Frontend developer specializing in developing accessible web products.",
  openGraph: {
    url: "ttps://johnadibe.vercel.app/",
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
      <body className={`antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
