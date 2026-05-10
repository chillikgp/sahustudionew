import type { Metadata } from "next";
import { FilmsPageContent } from "@/components/films-page-content";
import { JsonLd } from "@/components/json-ld";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema, filmListSchema } from "@/lib/schema";

const pagePath = "/wedding-films";

export const metadata: Metadata = buildMetadata({
  title: "Wedding Films in Delhi NCR",
  description:
    "Watch cinematic wedding films, pre-wedding videos, and highlight reels by Sahu Studio, crafted across Delhi NCR weddings and destination celebrations.",
  path: pagePath,
  keywords: [
    "wedding films Delhi NCR",
    "wedding cinematography Delhi",
    "cinematic wedding films India",
    "pre wedding video Delhi",
  ],
  image: {
    src: "/images/video/feature-video.jpg",
    alt: "Cinematic wedding film by Sahu Studio",
    width: 1920,
    height: 1080,
  },
});

export default function WeddingFilmsPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "" },
            { name: "Wedding Films", path: pagePath },
          ]),
          filmListSchema(),
        ]}
      />
      <FilmsPageContent />
    </>
  );
}
