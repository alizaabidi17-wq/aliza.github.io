import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const space = Space_Grotesk({ subsets: ["latin"], variable: "--font-space" });

export const metadata: Metadata = {
  title: "Aliza Abidi | Strategy Meets Systems",
  description:
    "Personal portfolio for Aliza Abidi, a Texas A&M MIS student focused on strategy, product, fintech, consulting, nonprofits, AI, cybersecurity, and technology.",
  openGraph: {
    title: "Aliza Abidi | Strategy Meets Systems",
    description:
      "MIS student, strategy builder, and technology operator turning messy workflows into scalable products and processes.",
    type: "website"
  }
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${space.variable} font-sans antialiased`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
