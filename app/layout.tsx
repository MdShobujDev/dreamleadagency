import Footer from "@/components/Footer";
import Header from "@/components/Header";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "DreamLeadAgency | Premium B2B Lead Generation & Data Enrichment",
    template: "%s | DreamLeadAgency",
  },
  description:
    "High-quality B2B leads, data enrichment, ecommerce & influencer contacts. Accelerate pipeline growth with verified, targeted prospects.",
  keywords: [
    "B2B lead generation",
    "data enrichment",
    "ecommerce leads",
    "influencer leads",
    "sales leads",
  ],
  openGraph: {
    title: "DreamLeadAgency | Premium B2B Lead Generation",
    description: "High-quality B2B leads and data enrichment that convert.",
    url: "https://dreamleadagency.com",
    siteName: "DreamLeadAgency",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DreamLeadAgency | Premium B2B Lead Generation",
    description: "High-quality B2B leads and data enrichment that convert.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans`}>
        <Header />
        <main className="min-h-screen pt-16 md:pt-18">{children}</main>
        <Footer />
        <Toaster theme="dark" position="top-right" richColors />
      </body>
    </html>
  );
}
