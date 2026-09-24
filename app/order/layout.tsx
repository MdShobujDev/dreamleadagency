import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Place an Order",
  robots: { index: false, follow: true },
};

export default function OrderLayout({ children }: { children: React.ReactNode }) {
  return children;
}
