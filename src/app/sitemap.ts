import { MetadataRoute } from "next";
import { storySlugs } from "@/data/stories";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://sahustudio.in";

  // Static routes
  const routes = [
    "",
    "/wedding-photography-delhi-ncr",
    "/wedding-stories",
    "/wedding-films",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  // Dynamic story routes
  const storyRoutes = storySlugs.map((slug) => ({
    url: `${baseUrl}/wedding-stories/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...routes, ...storyRoutes];
}
