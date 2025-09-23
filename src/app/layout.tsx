import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "HR Landing Page",
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
