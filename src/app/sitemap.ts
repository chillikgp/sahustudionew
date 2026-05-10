import { MetadataRoute } from "next";
import { storySlugs } from "@/data/stories";
import { siteConfig } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;
  const lastModified = new Date("2026-05-11");

  // Static routes
  const routes = [
    "",
    "/wedding-photography-delhi-ncr",
    "/wedding-stories",
    "/wedding-films",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified,
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  // Dynamic story routes
  const storyRoutes = storySlugs.map((slug) => ({
    url: `${baseUrl}/wedding-stories/${slug}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...routes, ...storyRoutes];
}
