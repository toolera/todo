import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import StructuredData from "./structured-data";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "My Tasks - Simple Todo App",
  description: "A clean, responsive todo app to help you stay organized and productive. No registration required - all data saved locally on your device.",
  keywords: ["todo", "task", "productivity", "organizer", "todo list", "task manager"],
  authors: [{ name: "Todo App" }],
  creator: "Todo App",
  publisher: "Todo App",
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "My Tasks - Simple Todo App",
    description: "A clean, responsive todo app to help you stay organized and productive. No registration required - all data saved locally on your device.",
    siteName: "My Tasks",
  },
  twitter: {
    card: "summary_large_image",
    title: "My Tasks - Simple Todo App",
    description: "A clean, responsive todo app to help you stay organized and productive. No registration required - all data saved locally on your device.",
  },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
