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
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://prospectlistbuilding.com",
  ),
  applicationName: "ProspectListBuilding",
  title: {
    default: "ProspectListBuilding | B2B Prospect Research & Lead Lists",
    template: "%s | ProspectListBuilding",
  },
  description:
    "Build a stronger sales pipeline with researched B2B prospect lists, verified contact data, data enrichment, and targeted lead research.",
  category: "business",
  creator: "ProspectListBuilding",
  publisher: "ProspectListBuilding",
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
  manifest: "/site.webmanifest",
  keywords: [
    "B2B prospect list building",
    "B2B lead generation",
    "targeted prospect lists",
    "data enrichment",
    "ecommerce leads",
    "influencer leads",
    "sales leads",
  ],
  openGraph: {
    title: "ProspectListBuilding | B2B Prospect Research & Lead Lists",
    description:
      "Researched B2B prospect lists, verified contacts, and data enrichment for sales teams.",
    url: "/",
    siteName: "ProspectListBuilding",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ProspectListBuilding | B2B Prospect Research & Lead Lists",
    description:
      "Researched B2B prospect lists, verified contacts, and data enrichment for sales teams.",
  },
  robots: { index: true, follow: true },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "ProspectListBuilding",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://prospectlistbuilding.com",
  description:
    "B2B prospect research, lead list building, and data enrichment services.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <Header />
        <main className="min-h-screen pt-16 md:pt-18">{children}</main>
        <Footer />
        <Toaster theme="dark" position="top-right" richColors />
      </body>
    </html>
  );
}
