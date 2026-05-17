import { MetadataRoute } from "next";
import { storySlugs } from "@/data/stories";
import { siteConfig } from "@/data/site";
import { getAllResourceFrontmatter } from "@/lib/content/resources";
import { getAllServicePages } from "@/lib/content/services";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;
  const lastModified = new Date("2026-05-11");

  // Static routes
  const routes = [
    "",
    "/wedding-photography-delhi-ncr",
    "/wedding-stories",
    "/wedding-films",
    "/resources",
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
  const serviceRoutes = getAllServicePages().map((service) => ({
    url: `${baseUrl}/${service.slug}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.75,
  }));
  const resourceRoutes = getAllResourceFrontmatter().map((resource) => ({
    url: `${baseUrl}/resources/${resource.slug}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.55,
  }));

  return [...routes, ...storyRoutes, ...serviceRoutes, ...resourceRoutes];
}
