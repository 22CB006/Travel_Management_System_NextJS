import type { Metadata } from "next";
import { Inter, Work_Sans } from "next/font/google";
import "./globals.css";

// Inter font (Google Fonts - Gilroy alternative)
// Inter is a modern, clean sans-serif that closely matches Gilroy's aesthetic
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["500", "600"],
  display: "swap",
});

// Work Sans font (Google Fonts)
const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
  weight: ["500", "700"],
  display: "swap",
});

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
        className={`${inter.variable} ${workSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
