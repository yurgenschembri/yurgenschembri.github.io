import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Yurgen Schembri Xuereb",
  description:
    "Web Developer, Software Architect, Cloud Applications Consultant",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased overscroll-none">{children}</body>
    </html>
  );
}
