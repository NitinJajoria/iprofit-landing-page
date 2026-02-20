import type { Metadata, Viewport } from "next";
import { Inter, Manrope, Outfit, Space_Grotesk, Urbanist } from "next/font/google";
import RootShell from "./components/RootShell";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

const urbanist = Urbanist({
  subsets: ["latin"],
  variable: "--font-urbanist",
});

export const metadata: Metadata = {
  title: "iProfit - Run Your Entire Business on One Simple System",
  description: "iProfit centralizes your Finance, HR, Inventory, Assets and Projects — giving you smarter operations and instant visibility.",
  keywords: ["business management", "ERP", "finance", "HR", "inventory management", "project management"],
  authors: [{ name: "iProfit Team" }],
  robots: "index, follow",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${manrope.variable} ${outfit.variable} ${spaceGrotesk.variable} ${urbanist.variable} antialiased`}
      >
        <RootShell>{children}</RootShell>
      </body>
    </html>
  );
}
