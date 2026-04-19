import type { MetadataRoute } from "next";
import { stories } from "@/data/stories";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://sahustudio.in";

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    ...stories.map((story) => ({
      url: `${baseUrl}/stories/${story.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
