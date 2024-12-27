import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "roadster",
  description: "a fictif car selling entreprise to showcase nextjs and tailwindcss skills in building a responsive web app that is fast and reliable",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en"
      className="w-full h-full bg-white"
      >
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased w-full h-full `}
      >
        {children}
      </body>
    </html>
  );
}



