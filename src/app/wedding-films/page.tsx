import type { Metadata } from "next";
import { FilmsPageContent } from "@/components/films-page-content";
import { siteConfig, filmCollection } from "@/data/site";

export const metadata: Metadata = {
  title: "Wedding Films in Delhi NCR | Sahu Studio",
  description: "Watch cinematic wedding films, pre-wedding videos, and highlight reels captured by Sahu Studio across Delhi NCR and destination weddings.",
  alternates: {
    canonical: `${siteConfig.url}/wedding-films`,
  },
};

export default function WeddingFilmsPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": filmCollection.map((film, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "VideoObject",
        "name": film.title,
        "description": film.summary,
        "thumbnailUrl": `${siteConfig.url}${film.poster}`,
        "uploadDate": "2024-01-01T08:00:00+08:00", // Placeholder or dynamic if available
        "contentUrl": `https://www.youtube.com/watch?v=${film.youtubeId}`,
        "embedUrl": `https://www.youtube.com/embed/${film.youtubeId}`,
        "duration": film.duration
      }
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <FilmsPageContent />
    </>
  );
}
