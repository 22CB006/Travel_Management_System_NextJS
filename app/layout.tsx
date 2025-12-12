import type { Metadata } from "next";
import "./globals.css";
import { gilroy } from "./fonts/gilroy";

export const metadata: Metadata = {
  title: "Horizon - Discover, Explore, Travel",
  description: "One adventure at a time - Book your perfect travel package",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${gilroy.variable} antialiased font-gilroy`}
      >
        {children}
      </body>
    </html>
  );
}
