import type { Metadata } from "next";
import "./globals.css";
import { AppLayout } from "@/layout/app-layout";

export const metadata: Metadata = {
  title: "yurgenschembri",
  description: "Web Developer, Software Architect, Mentor",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <AppLayout>{children}</AppLayout>
      </body>
    </html>
  );
}
