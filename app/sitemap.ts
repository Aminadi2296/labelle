import type { MetadataRoute } from "next";
import { locations, SITE_URL } from "@/lib/data";
import { servicePages } from "@/lib/service-pages";

const staticRoutes = [
  "",
  "/services",
  "/memberships",
  "/financing",
  "/contact",
  "/notice-of-privacy-practices-hipaa",
  "/privacy-policy",
  "/cookies-policy",
  "/website-accessibility-policy",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    ...staticRoutes,
    ...locations.map((l) => `/locations/${l.slug}`),
    ...servicePages.map((s) => `/services/${s.slug}`),
  ];

  return routes.map((route) => ({
    url: `${SITE_URL}${route}`,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
