import type { MetadataRoute } from "next";

const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://prospectlistbuilding.com"
).replace(/\/$/, "");

const routes = [
  "",
  "/about",
  "/contact",
  "/portfolio",
  "/privacy",
  "/terms",
  "/services/lead-generation",
  "/services/data-enrichment",
  "/services/ecommerce-leads",
  "/services/influencer-leads",
  "/services/web-research",
  "/services/virtual-assistant",
  "/services/manual-prospect-list",
  "/services/email-list-building",
  "/services/gtm-leads",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
  }));
}
