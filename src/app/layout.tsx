import type { Metadata } from "next";
import "./globals.css";
import { shiba } from "../lib/fonts"; // ✅ adjust if layout is not inside /app

export const metadata: Metadata = {
  title: "ACCT Landing Page",
  description: "Modern UI with Next.js + Tailwind + shadcn",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
