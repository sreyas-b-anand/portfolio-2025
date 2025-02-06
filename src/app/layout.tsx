import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";

import "./globals.css";
import Drag from "@/Animations/Cursor";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});
export const metadata: Metadata = {
  title: "My Portfolio",
  description: "A stunning portfolio built with Next.js and Tailwind CSS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${dmSans.variable}  text-white overflow-x-hidden  bg-gradient-to-br from-[#0A0015] via-[#1A0B38] to-[#0A0015] antialiased min-h-screen bg-[size:200%_200%] animate-gradient`}
      >
        {children}
        <Drag />
      </body>
    </html>
  );
}
